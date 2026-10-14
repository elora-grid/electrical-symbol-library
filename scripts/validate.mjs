// SPDX-License-Identifier: MIT
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { root, read, files } from "./build.mjs";

const ajv=new Ajv({allErrors:true,strict:true});addFormats(ajv);
const catalogueSchema=ajv.compile(read("schema/catalogue.schema.json"));
const cadSchema=ajv.compile(read("schema/manufacturer-cad.schema.json"));
const hosts=read("schema/public-hosts.json");
function publicUrl(value,approved) {
  const url=new URL(value);
  assert.equal(url.protocol,"https:");assert.ok(!url.username&&!url.password,"Credentials in public source URL");
  assert.ok(approved.includes(url.hostname),`Unapproved public source host: ${url.hostname}`);
  assert.ok(![...url.searchParams.keys()].some(k=>/token|signature|x-sign|secret|auth|expires/i.test(k)),"Signed/token URL");
}
export function validateData(catalogue,cad) {
  assert.ok(catalogueSchema(catalogue),JSON.stringify(catalogueSchema.errors));
  assert.ok(cadSchema(cad),JSON.stringify(cadSchema.errors));
  const ids=new Set(), sources=new Map(), artworkNames=new Set();
  for(const source of catalogue.sources) {
    assert.ok(!sources.has(source.id),"Duplicate source ID");sources.set(source.id,source);
    publicUrl(source.url,hosts.sources);
  }
  for(const e of catalogue.entries) {assert.ok(!ids.has(e.slug),"Duplicate entry ID");ids.add(e.slug);artworkNames.add(e.artwork);}
  for(const e of catalogue.entries) {
    const collection={symbol:"symbols",function:"protection-functions",object:"objects"}[e.kind];
    assert.equal(e.url,`https://eloragrid.ai/${collection}/${e.slug}`,"Unexpected canonical entry URL");
    assert.equal(e.illustration,`https://eloragrid.ai/library/illustrations/${e.slug}.svg`);
    assert.ok(e.updatedOn>=e.publishedOn,"Update predates publication");
    for(const ref of e.references)assert.ok(sources.has(ref.sourceId),`Unknown source: ${ref.sourceId}`);
    for(const related of e.related)assert.ok(ids.has(related)&&related!==e.slug,"Invalid related entry");
    if(e.symbolVariant) {
      assert.equal(e.kind,"symbol");assert.ok(e.referenceFamilies.includes(e.symbolVariant.convention));
      if(e.symbolVariant.counterpart)assert.ok(catalogue.entries.some(other=>other.slug===e.symbolVariant.counterpart&&other.kind==="symbol")&&e.symbolVariant.counterpart!==e.slug,"Invalid counterpart");
    }
  }
  const fileIds=new Set(), identities=new Set();
  for(const f of cad.fileListings) {
    assert.ok(!fileIds.has(f.id),"Duplicate CAD listing ID");fileIds.add(f.id);
    const identity=`${f.downloadUrl}|${f.archiveMember??""}|${f.format}`;
    assert.ok(!identities.has(identity),"Duplicate CAD file identity");identities.add(identity);
    publicUrl(f.downloadUrl,hosts.cad);publicUrl(f.sourceUrl,hosts.sources);
    assert.equal(sources.get(f.sourceId)?.url,f.sourceUrl,"CAD source mismatch");
    assert.equal(f.access==="archive-member",Boolean(f.archiveMember),"Archive metadata mismatch");
    assert.ok(!/[\/\\\x00-\x1f]/.test(f.name),"Unexpected filename");
    if(f.archiveMember)assert.ok(!/^(?:\/|[A-Z]:)/i.test(f.archiveMember)&&!f.archiveMember.split(/[\\/]/).includes(".."),"Unsafe archive path");
  }
  assert.equal(cad.count,cad.fileListings.length);assert.equal(cad.returned,cad.count);
  assert.ok(!/(?:file:|project-file:|library-file:|\/Users\/|\/home\/)|<\/?(?:script|iframe|img)\b/i.test(JSON.stringify({catalogue,cad})),"Private path or executable markup");
  return {entries:ids.size,sources:sources.size,fileListings:fileIds.size,artworkNames:artworkNames.size};
}
export function validate() {
  const catalogue=read("data/catalogue.json"),cad=read("data/manufacturer-cad.json");
  const counts=validateData(catalogue,cad),manifest=read("manifest.json"),index=read("data/index.json");
  assert.equal(index.entries.length,counts.entries);assert.equal(manifest.counts.entries,counts.entries);
  assert.equal(manifest.counts.manufacturerCadFileListings,counts.fileListings);
  const actualFiles=files().filter(p=>p!=="manifest.json");
  assert.deepEqual(Object.keys(manifest.files).sort(),actualFiles,"Manifest does not cover every file");
  for(const path of actualFiles) {
    assert.ok(!/(?:^|\/)(?:\.env|\.vercel|\.git|audits|customer|uploads)(?:\/|$|\.)/i.test(path),"Unexpected private/configuration file");
    const bytes=readFileSync(resolve(root,path));
    assert.equal(createHash("sha256").update(bytes).digest("hex"),manifest.files[path].sha256,`Checksum mismatch: ${path}`);
    assert.equal(bytes.length,manifest.files[path].bytes);
  }
  for(const entry of catalogue.entries) {
    const record=read(`entries/${entry.slug}.json`);
    assert.equal(record.canonicalUrl,entry.url);assert.equal(record.id,entry.slug);
    assert.equal(record.publicSources.length,entry.references.length);
    assert.deepEqual(index.entries.find(e=>e.slug===entry.slug).aliases,entry.aliases);
    const svg=readFileSync(resolve(root,record.svgPath),"utf8");
    assert.ok(svg.startsWith('<svg ')&&svg.endsWith('</svg>'),"Invalid SVG envelope");
    assert.ok(svg.includes("CC BY 4.0")&&svg.includes(`/library/entries/${entry.slug}.json`),"Missing illustration provenance");
    assert.ok(!/<(?:script|iframe|foreignObject)\b|\son\w+=|(?:href|src)\s*=|<!DOCTYPE/i.test(svg),"Active/external SVG content");
  }
  const dxf=readFileSync(resolve(root,"artwork/electrical-reference-library.dxf"),"utf8");
  assert.ok(dxf.includes("AC1009")&&dxf.endsWith("0\nEOF\n"));
  assert.equal((dxf.match(/(?:^|\n)0\nBLOCK\n/g)||[]).length,counts.entries,"DXF block count mismatch");
  assert.equal((dxf.match(/(?:^|\n)0\nINSERT\n/g)||[]).length,counts.entries,"DXF insert count mismatch");
  console.log(`Validated ${counts.entries} references, ${counts.sources} public sources, ${counts.fileListings} CAD metadata listings and ${actualFiles.length} checksummed files.`);
}
if(process.argv[1]===fileURLToPath(import.meta.url)) {
  try{validate();}catch(error){console.error(error.message);process.exitCode=1;}
}
