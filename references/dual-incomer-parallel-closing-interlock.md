# Dual-incomer parallel-closing interlock

Restricts simultaneous incomer connection when the installation is not designed for source paralleling.

[Canonical reference](https://eloragrid.ai/symbols/dual-incomer-parallel-closing-interlock) · [Structured record](../entries/dual-incomer-parallel-closing-interlock.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Two incomer positions
Parallel-close blocking

## What it represents

Restricts simultaneous incomer connection when the installation is not designed for source paralleling. An interlocking function permits or blocks an operation according to the positions and conditions of related equipment. Electrical, mechanical and trapped-key interlocks implement different parts of a coordinated operating philosophy.
In a switchgear feeder panel, a control diagram can prevent an incompatible combination of breaker, disconnector and earthing-switch positions. The physical equipment documents determine which restrictions are mechanically enforced. For this reference, the drawing identifies “Two incomer positions” at the input and “Parallel-close blocking” at the output. The bus-tie state changes the possible source paths.
Identify each initiating position, the action being blocked and the consequence of missing feedback. An illustrative logic diagram must not be treated as an operating procedure or proof of a complete safety system. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Two incomer positions. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Parallel-close blocking. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The bus-tie state changes the possible source paths.
- Identify each initiating position, the action being blocked and the consequence of missing feedback. An illustrative logic diagram must not be treated as an operating procedure or proof of a complete safety system.

## Drawing checklist

- Label the source and connection reference for two incomer positions.
- Identify the destination and defined state of parallel-close blocking.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The bus-tie state changes the possible source paths.

## Important distinction

The bus-tie state changes the possible source paths. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Two incomer positions
- Output / connection: Parallel-close blocking
- Lookup label: DPI is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for switchgear interlocking functions. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Mechanical interlock between devices](iec-mechanical-interlock-between-devices.md)
- [Earthing switch](earthing-switch.md)
- [Incomer-bus-tie interlock matrix](incomer-bus-tie-interlock-matrix.md)

![Dual-incomer parallel-closing interlock — original educational illustration](../artwork/svg/dual-incomer-parallel-closing-interlock.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
