# Data format

The source snapshot is `data/catalogue.json`, with `schemaVersion: 2`, publisher, editorial date, scope, original-artwork licence, third-party scope, `entries` and `sources`. Its existing website `url` field is retained. Repository-generated records also contain:

| Field | Meaning |
| --- | --- |
| `canonicalUrl` | Preferred Elora HTML citation URL for this definition. |
| `id` | Stable entry slug, also used as the JSON and SVG filename. |
| `recordPath` | Relative path to the complete per-entry JSON. |
| `svgPath` | Relative path to the original educational SVG. |
| `contentLicense` | Licence for original contributions, `CC-BY-4.0`. |
| `publicSources` | The entry's resolved public source records and relevance notes. |

Core fields include `name`, `kind` (`symbol`, `function`, `object`), `abbreviation`, `aliases`, `category`, `drawingTypes`, `referenceFamilies`, `summary`, explanatory paragraphs, reading notes, drafting checklists, distinctions, facts, related slugs and editorial dates.

`references` contains source IDs and contextual relevance. Source records identify publisher, public URL, source type, checked date and `reuse: link-only`. A checked date is an editorial source-review date; it is not a promise of future availability or certification by an engineer.

`symbolVariant`, when present, identifies `convention`, `form`, explanatory `reference` and an optional related-representation `counterpart` slug. A counterpart is a comparison aid, not a statement of complete standards equivalence. General `referenceFamilies` labels do not establish a specific graphical form.

The compact index omits long prose and resolves to per-entry files. `data/manufacturer-cad.json` follows website schema version 1, contains `fileListings` and keeps direct download/source links or archive-member paths. Counts describe file listings, not unique equipment models.

`schema/` supplies Draft 2020-12 JSON Schemas. `manifest.json` contains package version, data review date, separate coverage counts and SHA-256/byte counts for every distributed file except the manifest itself, transient dependencies, Git internals and release archives.

`npm run build` regenerates the index, entry files, README counts, coverage page, citation version and manifest. `npm run sync` fetches the current public website dataset and original illustrations first. Neither command pushes to GitHub. Stable slugs are intended to persist; future migrations should provide redirects/aliases rather than silently reuse an ID for a different meaning.
