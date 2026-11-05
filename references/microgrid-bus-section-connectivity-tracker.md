# Microgrid bus-section connectivity tracker

Determines the declared connectivity of named bus sections from their assigned switching states.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-bus-section-connectivity-tracker) · [Structured record](../entries/microgrid-bus-section-connectivity-tracker.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Bus-switch position information
Bus connectivity map

## What it represents

Determines the declared connectivity of named bus sections from their assigned switching states. Microgrid topology control tracks which sources and load sections are electrically connected. The same physical installation can form several islands, so source roles, measurement boundaries and earthing interfaces must follow the established configuration.
In a microgrid with sectionalized buses, the controller can associate each connected source and load group with its current island. A mode-dependent neutral or protection interface needs its own independently validated design. For this reference, the drawing identifies “Bus-switch position information” at the input and “Bus connectivity map” at the output. Invalid positions require defined treatment.
Keep measured switch positions, logical island assignment and any earthing command separate. A conceptual topology block cannot establish a safe neutral-switching arrangement or prove that a circuit is de-energized. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Bus-switch position information. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Bus connectivity map. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Invalid positions require defined treatment.
- Keep measured switch positions, logical island assignment and any earthing command separate. A conceptual topology block cannot establish a safe neutral-switching arrangement or prove that a circuit is de-energized.

## Drawing checklist

- Label the source and connection reference for bus-switch position information.
- Identify the destination and defined state of bus connectivity map.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Invalid positions require defined treatment.

## Important distinction

Invalid positions require defined treatment. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Bus-switch position information
- Output / connection: Bus connectivity map
- Lookup label: MBCT is a library lookup label, not a standard device designation.

## Public references

- [Microgrid operating modes and transitions management](https://productinfo.se.com/emol_functional_specifications/doca0371_emol_functionalspecifications/EN/DOCA0371_EMOL_Functional_Specifications_DD00894746.xml/%24/EMOL_OperatingModesandTransitionsManagement_DD00895904) — Schneider Electric. Public technical context for microgrid topology and earthing coordination. Grid-connected and island modes, transitions, topology and authority. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid interconnection switch](microgrid-interconnection-switch.md)
- [Neutral earthing resistor](neutral-earthing-resistor.md)
- [Microgrid electrical-island identification](microgrid-electrical-island-identification.md)

![Microgrid bus-section connectivity tracker — original educational illustration](../artwork/svg/microgrid-bus-section-connectivity-tracker.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
