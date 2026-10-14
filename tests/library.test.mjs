// SPDX-License-Identifier: MIT
import test from "node:test";
import assert from "node:assert/strict";
import { search } from "../scripts/query.mjs";
import { read } from "../scripts/build.mjs";
import { validateData } from "../scripts/validate.mjs";

test("exact CT abbreviation prioritises a current transformer",()=>{
  const matches=search("CT",{kind:"symbol"});assert.ok(matches.length);assert.equal(matches[0].slug,"current-transformer");
});
test("ANSI form filter uses explicit graphical convention",()=>{
  const matches=search("resistor",{convention:"ansi-ieee"});assert.ok(matches.length);assert.ok(matches.every(e=>e.symbolVariant.convention==="IEEE / ANSI"));
});
test("function number lookup returns protection/device functions",()=>{
  assert.ok(search("52",{kind:"function"}).some(e=>e.abbreviation==="52"));
});
test("unknown source IDs and unrelated counterpart slugs are rejected",()=>{
  const source=read("data/catalogue.json"),cad=read("data/manufacturer-cad.json");
  const broken=structuredClone(source);broken.entries[0].references[0].sourceId="missing-source";
  assert.throws(()=>validateData(broken,cad),/source/);
  const wrong=structuredClone(source);const variant=wrong.entries.find(e=>e.symbolVariant);variant.symbolVariant.counterpart="missing-counterpart";
  assert.throws(()=>validateData(wrong,cad),/counterpart/);
});
test("an insecure URL cannot enter the public source registry",()=>{
  const data=structuredClone(read("data/catalogue.json"));data.sources[0].url="http://www.abb.com/public.pdf";
  assert.throws(()=>validateData(data,read("data/manufacturer-cad.json")));
});
