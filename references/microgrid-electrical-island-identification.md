# Microgrid electrical-island identification

Associates connected bus sections and resources with their assigned electrical island identity.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-electrical-island-identification) · [Structured record](../entries/microgrid-electrical-island-identification.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Connectivity map and sources
Island membership information

## What it represents

Associates connected bus sections and resources with their assigned electrical island identity. Microgrid topology control tracks which sources and load sections are electrically connected. The same physical installation can form several islands, so source roles, measurement boundaries and earthing interfaces must follow the established configuration.
In a microgrid with sectionalized buses, the controller can associate each connected source and load group with its current island. A mode-dependent neutral or protection interface needs its own independently validated design. For this reference, the drawing identifies “Connectivity map and sources” at the input and “Island membership information” at the output. Logical membership must match the actual power paths.
Keep measured switch positions, logical island assignment and any earthing command separate. A conceptual topology block cannot establish a safe neutral-switching arrangement or prove that a circuit is de-energized. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Connectivity map and sources. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Island membership information. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Logical membership must match the actual power paths.
- Keep measured switch positions, logical island assignment and any earthing command separate. A conceptual topology block cannot establish a safe neutral-switching arrangement or prove that a circuit is de-energized.

## Drawing checklist

- Label the source and connection reference for connectivity map and sources.
- Identify the destination and defined state of island membership information.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Logical membership must match the actual power paths.

## Important distinction

Logical membership must match the actual power paths. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Connectivity map and sources
- Output / connection: Island membership information
- Lookup label: MEI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid operating modes and transitions management](https://productinfo.se.com/emol_functional_specifications/doca0371_emol_functionalspecifications/EN/DOCA0371_EMOL_Functional_Specifications_DD00894746.xml/%24/EMOL_OperatingModesandTransitionsManagement_DD00895904) — Schneider Electric. Public technical context for microgrid topology and earthing coordination. Grid-connected and island modes, transitions, topology and authority. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid interconnection switch](microgrid-interconnection-switch.md)
- [Neutral earthing resistor](neutral-earthing-resistor.md)
- [Microgrid source-to-island assignment](microgrid-source-to-island-assignment.md)

![Microgrid electrical-island identification — original educational illustration](../artwork/svg/microgrid-electrical-island-identification.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
