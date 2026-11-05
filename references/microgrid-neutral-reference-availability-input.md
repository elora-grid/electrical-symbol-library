# Microgrid neutral-reference availability input

Receives the declared availability of the neutral reference required by the selected island design.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-neutral-reference-availability-input) · [Structured record](../entries/microgrid-neutral-reference-availability-input.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Earthing-system status
Neutral-reference availability

## What it represents

Receives the declared availability of the neutral reference required by the selected island design. Microgrid topology control tracks which sources and load sections are electrically connected. The same physical installation can form several islands, so source roles, measurement boundaries and earthing interfaces must follow the established configuration.
In a microgrid with sectionalized buses, the controller can associate each connected source and load group with its current island. A mode-dependent neutral or protection interface needs its own independently validated design. For this reference, the drawing identifies “Earthing-system status” at the input and “Neutral-reference availability” at the output. Availability requires the actual engineered earthing arrangement.
Keep measured switch positions, logical island assignment and any earthing command separate. A conceptual topology block cannot establish a safe neutral-switching arrangement or prove that a circuit is de-energized. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Earthing-system status. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Neutral-reference availability. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Availability requires the actual engineered earthing arrangement.
- Keep measured switch positions, logical island assignment and any earthing command separate. A conceptual topology block cannot establish a safe neutral-switching arrangement or prove that a circuit is de-energized.

## Drawing checklist

- Label the source and connection reference for earthing-system status.
- Identify the destination and defined state of neutral-reference availability.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Availability requires the actual engineered earthing arrangement.

## Important distinction

Availability requires the actual engineered earthing arrangement. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Earthing-system status
- Output / connection: Neutral-reference availability
- Lookup label: MNAI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid operating modes and transitions management](https://productinfo.se.com/emol_functional_specifications/doca0371_emol_functionalspecifications/EN/DOCA0371_EMOL_Functional_Specifications_DD00894746.xml/%24/EMOL_OperatingModesandTransitionsManagement_DD00895904) — Schneider Electric. Public technical context for microgrid topology and earthing coordination. Grid-connected and island modes, transitions, topology and authority. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid interconnection switch](microgrid-interconnection-switch.md)
- [Neutral earthing resistor](neutral-earthing-resistor.md)
- [Microgrid mode-dependent earthing interface](microgrid-mode-dependent-earthing-interface.md)

![Microgrid neutral-reference availability input — original educational illustration](../artwork/svg/microgrid-neutral-reference-availability-input.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
