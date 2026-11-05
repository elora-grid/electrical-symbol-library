# Maintenance-mode closing inhibit

Suppresses the defined automatic closing paths while the assigned maintenance mode is selected.

[Canonical reference](https://eloragrid.ai/symbols/maintenance-mode-closing-inhibit) · [Structured record](../entries/maintenance-mode-closing-inhibit.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Maintenance mode selection
Automatic close inhibit

## What it represents

Suppresses the defined automatic closing paths while the assigned maintenance mode is selected. An interlocking function permits or blocks an operation according to the positions and conditions of related equipment. Electrical, mechanical and trapped-key interlocks implement different parts of a coordinated operating philosophy.
In a switchgear feeder panel, a control diagram can prevent an incompatible combination of breaker, disconnector and earthing-switch positions. The physical equipment documents determine which restrictions are mechanically enforced. For this reference, the drawing identifies “Maintenance mode selection” at the input and “Automatic close inhibit” at the output. Maintenance mode does not create electrical isolation.
Identify each initiating position, the action being blocked and the consequence of missing feedback. An illustrative logic diagram must not be treated as an operating procedure or proof of a complete safety system. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Maintenance mode selection. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Automatic close inhibit. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Maintenance mode does not create electrical isolation.
- Identify each initiating position, the action being blocked and the consequence of missing feedback. An illustrative logic diagram must not be treated as an operating procedure or proof of a complete safety system.

## Drawing checklist

- Label the source and connection reference for maintenance mode selection.
- Identify the destination and defined state of automatic close inhibit.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Maintenance mode does not create electrical isolation.

## Important distinction

Maintenance mode does not create electrical isolation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Maintenance mode selection
- Output / connection: Automatic close inhibit
- Lookup label: MCI is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for switchgear interlocking functions. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Mechanical interlock between devices](iec-mechanical-interlock-between-devices.md)
- [Earthing switch](earthing-switch.md)
- [Test-mode output blocking](test-mode-output-blocking.md)

![Maintenance-mode closing inhibit — original educational illustration](../artwork/svg/maintenance-mode-closing-inhibit.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
