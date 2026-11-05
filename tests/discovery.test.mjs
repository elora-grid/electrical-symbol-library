import test from 'node:test';
import assert from 'node:assert/strict';
import {read,root} from '../scripts/build.mjs';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {validateData} from '../scripts/validate.mjs';
test('bounded discovery indexes link every reference once to readable and structured records',()=>{
 const directory=read('data/discovery.json'),slugs=[];
 for(const category of directory.categories)for(const page of category.pages){
  const shard=read(page.path);assert.ok(shard.entries.length<=250);assert.equal(shard.entries.length,page.count);
  for(const entry of shard.entries){slugs.push(entry.slug);const record=read(entry.recordPath);const md=readFileSync(resolve(root,entry.referencePath),'utf8');assert.ok(md.includes(record.canonicalUrl));for(const source of record.publicSources)assert.ok(md.includes(source.url));}
 }
 assert.deepEqual(slugs.sort(),read('data/index.json').entries.map(e=>e.slug).sort());
});
test('GA objects use website previews and do not distribute standalone SVG icons or current DXF packs',()=>{
 for(const entry of read('data/index.json').entries.filter(e=>e.kind==='object')){assert.ok(!entry.svgPath);assert.ok(!existsSync(resolve(root,`artwork/svg/${entry.slug}.svg`)));}
 assert.ok(!existsSync(resolve(root,'artwork/electrical-reference-library.dxf')));
});
test('installation representations are strict public data',()=>{
 const data=structuredClone(read('data/catalogue.json')),cad=read('data/manufacturer-cad.json');
 const entry=data.entries.find(e=>e.representation);assert.ok(entry);validateData(data,cad);
 entry.representation.privatePath='/Users/private';assert.throws(()=>validateData(data,cad));
});
