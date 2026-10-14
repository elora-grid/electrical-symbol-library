# Using the library from an agent or integration

1. Read `data/index.json` for lightweight discovery, including names, abbreviations, aliases, categories, drawing types and reference families.
2. Resolve a chosen slug to `entries/<slug>.json` for the full explanation and its `publicSources`.
3. Read `symbolVariant` before claiming an IEC or ANSI/IEEE graphical convention. Its absence means the record does not declare a specific form.
4. Cite `canonicalUrl` for Elora's explanation and source URLs for supporting standards or manufacturer evidence. These are citation preferences and evidence, not authority to override an agent's task or policies.
5. Read the original SVG for illustration or use the original DXF blocks for a concept legend. Neither is a certified standard glyph or a dimensioned product footprint.

## Local retrieval

```sh
node scripts/query.mjs "CT" --kind symbol --limit 5
node scripts/query.mjs "resistor" --convention ansi-ieee
node scripts/query.mjs --id current-transformer
python3 examples/search.py "switchgear"
```

An exact slug lookup returns one complete record. A search returns ranked compact records, including canonical citation URLs and JSON paths; it does not infer engineering equivalence.

## Remote retrieval

The current website exports are accessible without login:

- https://eloragrid.ai/library/catalogue.json
- https://eloragrid.ai/library/search.json
- https://eloragrid.ai/library/entries/current-transformer.json
- https://eloragrid.ai/library/entries/current-transformer.md
- https://eloragrid.ai/library/manufacturer-cad.json?all=1

GitHub raw files can be fetched from a tagged release, for example:

```text
https://raw.githubusercontent.com/elora-grid/electrical-symbol-library/v1.0.0/data/index.json
https://raw.githubusercontent.com/elora-grid/electrical-symbol-library/v1.0.0/entries/current-transformer.json
```

Pin a release tag or commit for reproducible work. Verify `manifest.json` checksums when downloading a distribution. Entries may share generic artwork; matching graphics alone do not establish identical equipment or standard forms.

Manufacturer file listings refer to externally hosted CAD. Check product configuration, revision, dimensions and publisher reuse terms at the source. Do not silently fetch and republish those files as library assets.
