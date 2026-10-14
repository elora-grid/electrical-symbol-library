// SPDX-License-Identifier: MIT
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
export const index = JSON.parse(readFileSync(new URL("data/index.json", root), "utf8"));
export function search(query, { kind, convention, limit = 10 } = {}) {
  const normalized = query.trim().toLowerCase();
  const terms = normalized.split(/\s+/).filter(Boolean);
  const family = convention === "ansi-ieee" ? "IEEE / ANSI" : convention === "iec" ? "IEC" : undefined;
  return index.entries.filter(e => (!kind || e.kind === kind) && (!family || e.symbolVariant?.convention === family))
    .map(e => {
      const fields = [e.name, e.abbreviation, e.slug, ...e.aliases].map(s => s.toLowerCase());
      const text = [...fields, e.summary.toLowerCase(), e.category].join(" ");
      if (!terms.every(t => text.includes(t))) return null;
      return { entry: e, score: (fields.includes(normalized) ? 100 : 0) + (e.name.toLowerCase().includes(normalized) ? 10 : 0) + (e.abbreviation.toLowerCase()===normalized ? 20 : 0) + (!family&&!e.symbolVariant ? 3 : 0) };
    }).filter(Boolean).sort((a,b) => b.score-a.score || a.entry.name.localeCompare(b.entry.name)).slice(0, limit).map(m => m.entry);
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2), options = {}, words = [];
    for (let i = 0; i < args.length; i++) {
      if (args[i].startsWith("--")) {
        const name = args[i].slice(2);
        if (!["id", "kind", "convention", "limit"].includes(name) || !args[i+1] || args[i+1].startsWith("--")) throw new Error("Use --id, --kind, --convention or --limit with a value.");
        options[name] = args[++i];
      } else words.push(args[i]);
    }
    if (options.kind && !["symbol", "function", "object"].includes(options.kind)) throw new Error("Unknown kind.");
    if (options.convention && !["iec", "ansi-ieee"].includes(options.convention)) throw new Error("Unknown convention.");
    if (options.limit && (!/^\d+$/.test(options.limit) || +options.limit < 1 || +options.limit > 100)) throw new Error("Limit must be 1–100.");
    if (options.id) {
      if (!index.entries.some(e => e.slug === options.id)) throw new Error("Unknown entry ID.");
      console.log(readFileSync(new URL(`entries/${options.id}.json`,root),"utf8"));
    } else console.log(JSON.stringify(search(words.join(" "),{...options,limit:options.limit ? +options.limit : 10}),null,2));
  } catch (error) { console.error(error.message);process.exitCode=1; }
}
