// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync, readdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { root, writeJson, build } from "./build.mjs";
import { validateData } from "./validate.mjs";

const origin="https://eloragrid.ai";
async function fetchPublic(path,type) {
  const url=new URL(path,origin);
  if (url.origin!==origin) throw new Error("Only the public catalogue publisher is an input.");
  const response=await fetch(url,{redirect:"error",signal:AbortSignal.timeout(60000)});
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  const text=await response.text();
  if (text.length>40000000) throw new Error("Export exceeds expected size.");
  return type==="json" ? JSON.parse(text) : text;
}
try {
  const catalogue=await fetchPublic("/library/catalogue.json","json");
  const cad=await fetchPublic("/library/manufacturer-cad.json?all=1","json");
  validateData(catalogue,cad);
  const svgDir=resolve(root,"artwork/svg");mkdirSync(svgDir,{recursive:true});
  // Download only original illustrations from the catalogue publisher.
  // Manufacturer CAD links are metadata and are never fetched by this script.
  const pending=[...catalogue.entries];
  await Promise.all(Array.from({length:4},async()=>{
    for (let e;(e=pending.shift());) {
      const svg=await fetchPublic(`/library/illustrations/${e.slug}.svg`,"text");
      if (!svg.startsWith("<svg ") || /<(?:script|iframe|foreignObject)\b|\son\w+=|(?:href|src)\s*=|<!DOCTYPE/i.test(svg)) throw new Error(`Unexpected SVG: ${e.slug}`);
      writeFileSync(resolve(svgDir,`${e.slug}.svg`),svg);
    }
  }));
  const dxf=await fetchPublic("/library/download","text");
  if (!dxf.includes("AC1009") || !dxf.endsWith("0\nEOF\n")) throw new Error("Unexpected original DXF export.");
  const slugs=new Set(catalogue.entries.map(e=>e.slug));
  for (const name of readdirSync(svgDir)) if (name.endsWith(".svg")&&!slugs.has(name.slice(0,-4)))rmSync(resolve(svgDir,name));
  writeFileSync(resolve(root,"artwork/electrical-reference-library.dxf"),dxf);
  writeJson("data/catalogue.json",catalogue);writeJson("data/manufacturer-cad.json",cad);
  build();
  console.log("Public snapshot refreshed. Review the diff and run npm run check before publishing a release.");
} catch(error) {console.error(error.message);process.exitCode=1;}
