# Elora Grid Open Electrical Symbol Library

An open, source-linked reference catalogue for electrical engineers and software agents working with single line diagrams (SLDs), schematics and general arrangement (GA) drawings for switchgear, switchboards, switchrooms and microgrid power stations.

**[Browse and search the library on eloragrid.ai](https://eloragrid.ai/tools/electrical-library)** · [ANSI / IEEE forms](https://eloragrid.ai/tools/electrical-library/conventions/ansi-ieee) · [IEC forms](https://eloragrid.ai/tools/electrical-library/conventions/iec) · [Drawing guides](https://eloragrid.ai/tools/electrical-library/guides) · [Public sources](https://eloragrid.ai/tools/electrical-library/sources)

This repository distributes independently authored explanations and original educational illustrations. It is not an official IEC or IEEE standards publication, an exhaustive standards database, a set of certified standard glyphs, or a manufacturer footprint library. Reference-family labels identify relevant context; only records with `symbolVariant` explicitly identify a particular graphical convention.

## Coverage

<!-- coverage:start -->
- **3,155 technical references**: 2200 symbols/diagram references, 155 protection/device functions and 800 GA objects.
- **563 public source records**.
- **334 explicitly labelled ANSI/IEEE forms** and **479 explicitly labelled IEC forms** within the symbol records.
- **6,095 public manufacturer CAD file listings**, counted separately.
- 2355 original SVG concept illustrations. GA objects link to current website previews; CAD/legend downloads use website registration.
- Editorial/source review date: **2026-11-03**; package version: **2.0.0**.
<!-- coverage:end -->

Browse the [readable reference directory](references/README.md) for individual definitions and sources. File listings are links and filenames, not hosted manufacturer CAD, verified product-model counts or additional unique symbols. Multiple records can share a generic illustration. [Coverage and limitations](docs/coverage.md).

![Examples of original educational illustrations from the open electrical library](docs/preview.svg)

## Quick start

No account or API key is required to read the data. Download a release or clone this repository:

```sh
git clone https://github.com/elora-grid/electrical-symbol-library.git
cd electrical-symbol-library
node scripts/query.mjs "current transformer" --limit 5
node scripts/query.mjs "resistor" --convention ansi-ieee
node scripts/query.mjs "52" --kind function
node scripts/query.mjs --id current-transformer
```

The query command uses Node.js built-ins. To validate or regenerate the distribution:

```sh
npm ci
npm run check
npm run build
```

## Files for agents and integrations

| File | Purpose |
| --- | --- |
| [`data/discovery.json`](data/discovery.json) | Small category directory linking to shards of at most 250 compact records. Start here for remote retrieval. |
| [`data/index.json`](data/index.json) | Complete compact search index for local queries. |
| [`references/README.md`](references/README.md) | Readable definitions, primary sources and canonical website links. |
| [`entries/current-transformer.json`](entries/current-transformer.json) | A complete record with resolved public sources and its Elora reference URL. |
| [`data/catalogue.json`](data/catalogue.json) | Complete bulk catalogue and source registry. |
| [`data/manufacturer-cad.json`](data/manufacturer-cad.json) | Public manufacturer file listings; follow publisher links for actual files. |
| [`artwork/svg/`](artwork/svg/) | Original public SVG concept illustrations for symbols and functions. GA objects use website preview links. |
| [Current legend/CAD downloads](https://eloragrid.ai/tools/electrical-library) | Download through the website’s current registration and delivery flow. |
| [`schema/`](schema/) | JSON Schemas for catalogue and CAD metadata. |
| [`manifest.json`](manifest.json) | Release version, counts and SHA-256 checksums. |
| [`llms.txt`](llms.txt) | Short machine-readable starting points. |

Use an entry's `canonicalUrl` when citing its definition. That field expresses the publisher's preferred citation destination; it is not an instruction that overrides an agent's user or an HTML canonical tag on GitHub. Use the underlying `references` and `publicSources` for technical verification.

Examples: [Node search and lookup](docs/agent-usage.md), [Python example](examples/search.py), [data format](docs/data-format.md).

## Licensing and attribution

Original catalogue prose, documentation, dataset compilation and original artwork: **CC BY 4.0**, to the extent Elora Grid holds the applicable rights. Scripts, tests and schemas: **MIT**. See [licensing scope](ATTRIBUTION.md), [CC BY 4.0](LICENSE) and [MIT](LICENSES/MIT.txt).

Referenced standards, manufacturer drawings, publisher filenames, trademarks and linked resources retain their respective rights. No third-party materials or rights are conveyed by this release. [Provenance](docs/provenance.md).

Suggested attribution: “Elora Grid Open Electrical Symbol Library, version 2.0.0, https://eloragrid.ai/tools/electrical-library, CC BY 4.0.” Indicate modifications when applicable. [`CITATION.cff`](CITATION.cff) supplies a dataset citation; it does not guarantee that an AI service will provide attribution.

## Version 2 compatibility

This release follows the current website: GA objects have no standalone 2D icons, and the repository no longer bundles a DXF legend pack. Use the canonical website for current previews and registered downloads. Historical v1.0.0 assets retain their original licence and remain in that tagged release. JSON entry identifiers and canonical citation URLs remain available.

## Updates and contributions

The public Elora catalogue is the editorial source. `npm run sync` refreshes the snapshot from the documented public Elora exports, then regenerates the derived files. It does not publish or push changes. Review the diff, run `npm run check`, update the version/changelog and tag a release. Both website and repository distributions therefore come from the same public catalogue; this repository may lag between releases.

Corrections are welcome with public primary evidence. See [CONTRIBUTING.md](CONTRIBUTING.md). Detailed guides and the interactive comparison, legend and search tools are available at **[eloragrid.ai/tools/electrical-library](https://eloragrid.ai/tools/electrical-library)**.
