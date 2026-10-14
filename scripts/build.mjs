// SPDX-License-Identifier: MIT
import { readdirSync, readFileSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

export const root = fileURLToPath(new URL("../", import.meta.url));
export const read = p => JSON.parse(readFileSync(resolve(root,p),"utf8"));
export const writeJson = (p,v) => {mkdirSync(resolve(root,p,".."),{recursive:true});writeFileSync(resolve(root,p),JSON.stringify(v,null,2)+"\n");};
export function files(directory=root) {
  return readdirSync(directory,{withFileTypes:true}).flatMap(e => {
    if ([".git","node_modules","dist"].includes(e.name)) return [];
    const path=resolve(directory,e.name);
    return e.isDirectory() ? files(path) : e.isFile() ? [relative(root,path).replaceAll("\\","/")] : [];
  }).sort();
}
export function build() {
  const catalogue=read("data/catalogue.json"), cad=read("data/manufacturer-cad.json"), pkg=read("package.json");
  const sources=new Map(catalogue.sources.map(s=>[s.id,s]));
  const counts={entries:catalogue.entries.length,symbols:catalogue.entries.filter(e=>e.kind==="symbol").length,functions:catalogue.entries.filter(e=>e.kind==="function").length,objects:catalogue.entries.filter(e=>e.kind==="object").length,sources:catalogue.sources.length,manufacturerCadFileListings:cad.fileListings.length,ansiIeeeForms:catalogue.entries.filter(e=>e.symbolVariant?.convention==="IEEE / ANSI").length,iecForms:catalogue.entries.filter(e=>e.symbolVariant?.convention==="IEC").length};
  const entries=catalogue.entries.map(e=>({...e,id:e.slug,canonicalUrl:e.url,contentLicense:"CC-BY-4.0",recordPath:`entries/${e.slug}.json`,svgPath:`artwork/svg/${e.slug}.svg`,publicSources:e.references.map(ref=>({...sources.get(ref.sourceId),relevance:ref.relevance}))}));
  const validSlugs=new Set(entries.map(e=>e.slug));
  mkdirSync(resolve(root,"entries"),{recursive:true});
  for (const name of readdirSync(resolve(root,"entries"))) if (name.endsWith(".json") && !validSlugs.has(name.slice(0,-5))) rmSync(resolve(root,"entries",name));
  for (const e of entries) writeJson(e.recordPath,e);
  writeJson("data/index.json",{schemaVersion:1,publisher:catalogue.publisher,canonicalDirectory:"https://eloragrid.ai/library",updatedOn:catalogue.updatedOn,entries:entries.map(({id,slug,name,kind,abbreviation,aliases,category,drawingTypes,referenceFamilies,summary,symbolVariant,canonicalUrl,recordPath,svgPath,contentLicense})=>({id,slug,name,kind,abbreviation,aliases,category,drawingTypes,referenceFamilies,summary,...(symbolVariant?{symbolVariant}:{}),canonicalUrl,recordPath,svgPath,contentLicense}))});
  const coverage=`- **${counts.entries.toLocaleString("en-US")} technical references**: ${counts.symbols} symbols/diagram references, ${counts.functions} protection/device functions and ${counts.objects} GA objects.\n- **${counts.sources} public source records**.\n- **${counts.ansiIeeeForms} explicitly labelled ANSI/IEEE forms** and **${counts.iecForms} explicitly labelled IEC forms** within the symbol records.\n- **${counts.manufacturerCadFileListings.toLocaleString("en-US")} public manufacturer CAD file listings**, counted separately.\n- One SVG per entry and one original DXF concept-block pack.\n- Editorial/source review date: **${catalogue.updatedOn}**; package version: **${pkg.version}**.`;
  const readme=readFileSync(resolve(root,"README.md"),"utf8").replace(/<!-- coverage:start -->[\s\S]*?<!-- coverage:end -->/,`<!-- coverage:start -->\n${coverage}\n<!-- coverage:end -->`).replace(/version \d+\.\d+\.\d+/g,`version ${pkg.version}`);
  writeFileSync(resolve(root,"README.md"),readme);
  writeFileSync(resolve(root,"docs/coverage.md"),`# Coverage and limitations\n\n${coverage}\n\nThis release is a curated drafting reference, not a complete inventory of IEC 60617 or IEEE 315 records. It does not establish a one-to-one IEC/ANSI crosswalk. Generic concepts, particular graphical forms, protection numbers and GA objects are distinct record types; filenames are counted separately. Multiple records can share generic artwork.\n\nAll artwork is independently authored educational concept geometry. It is unitless and not to scale. GA previews are not configured product footprints. Generic drawings do not convey ratings, terminal arrangements, clearances or certified construction details.\n\nDetailed drawing guides remain on [eloragrid.ai](https://eloragrid.ai/library/guides). Verify applicable publications and project requirements using the linked primary evidence. Coverage counts and format validation do not replace engineering review.\n`);
  writeFileSync(resolve(root,"CITATION.cff"),`cff-version: 1.2.0\ntype: dataset\nmessage: "Please cite Elora Grid and the entry's canonicalUrl when using this library."\ntitle: "Elora Grid Open Electrical Symbol Library"\nauthors:\n  - name: "Elora Grid"\nversion: "${pkg.version}"\ndate-released: "${pkg.releaseDate}"\nurl: "https://eloragrid.ai/library"\nrepository-code: "https://github.com/elora-grid/electrical-symbol-library"\nlicense: CC-BY-4.0\nkeywords:\n  - electrical engineering\n  - electrical symbols\n  - IEC\n  - ANSI\n  - IEEE\n  - single line diagrams\n  - schematics\n  - general arrangement\n  - switchgear\n  - microgrids\n`);
  const xml=s=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]));
  const previewIds=["current-transformer","voltage-transformer","circuit-breaker","ansi-resistor",entries.find(e=>e.kind==="function"&&e.abbreviation==="52")?.slug,entries.find(e=>e.kind==="object")?.slug];
  const previewEntries=previewIds.map(id=>entries.find(e=>e.slug===id)).filter(Boolean);
  const panels=previewEntries.map((e,i)=>{
    const x=18+(i%3)*294,y=54+Math.floor(i/3)*190;
    const svg=readFileSync(resolve(root,e.svgPath),"utf8");
    const geometry=svg.slice(svg.indexOf("<g "),svg.lastIndexOf("</svg>"));
    const label=e.name.length>34?e.name.slice(0,31)+"…":e.name;
    return `<g><rect x="${x}" y="${y}" width="276" height="172" rx="8" fill="#f8fbfd" stroke="#d1dce4"/><g transform="translate(${x+78} ${y+8})">${geometry}</g><text x="${x+138}" y="${y+151}" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" fill="#172c3c">${xml(label)}</text></g>`;
  }).join("");
  writeFileSync(resolve(root,"docs/preview.svg"),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 450" role="img"><title>Original educational illustrations from the electrical reference library</title><metadata>Elora Grid. Original educational artwork. CC BY 4.0. https://eloragrid.ai/library. Not certified standards glyphs or manufacturer footprints.</metadata><rect width="900" height="450" rx="12" fill="white"/><text x="24" y="32" font-family="Arial,sans-serif" font-size="19" fill="#172c3c">Original educational illustrations</text>${panels}<text x="24" y="437" font-family="Arial,sans-serif" font-size="12" fill="#536775">Unitless concept artwork · Verify the applicable standard, drawing legend and selected equipment</text></svg>`);
  const checksums={};
  for (const path of files()) {
    if (path==="manifest.json") continue;
    const bytes=readFileSync(resolve(root,path));checksums[path]={sha256:createHash("sha256").update(bytes).digest("hex"),bytes:bytes.length};
  }
  writeJson("manifest.json",{schemaVersion:1,version:pkg.version,releaseDate:pkg.releaseDate,editorialDate:catalogue.updatedOn,publisher:catalogue.publisher,canonicalDirectory:"https://eloragrid.ai/library",contentLicense:"CC-BY-4.0",codeLicense:"MIT",counts,files:checksums});
  console.log(`Built ${entries.length} entry exports; ${Object.keys(checksums).length} checksummed files.`);
}
if (process.argv[1]===fileURLToPath(import.meta.url)) build();
