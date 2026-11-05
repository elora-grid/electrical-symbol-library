# Breaker trip coil one interface

Identifies the first opening coil in a breaker with separately wired trip paths.

[Canonical reference](https://eloragrid.ai/symbols/breaker-trip-coil-one-interface) · [Structured record](../entries/breaker-trip-coil-one-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Protection channel one
Trip coil one

## What it represents

Identifies the first opening coil in a breaker with separately wired trip paths. A trip circuit carries an opening request from a control or protection device to the breaker operating mechanism. The opening command, the coil supply and the evidence that the breaker opened are separate parts of the drawing.
In a switchgear incomer panel, a protection relay requests opening and an auxiliary contact reports the resulting breaker position. A second trip path can have its own supply and wiring so that a single wiring fault does not remove both paths. For this reference, the drawing identifies “Protection channel one” at the input and “Trip coil one” at the output. The coil number is a project designation.
Trace the initiating contact, protective fuse, trip coil, return conductor and feedback independently. Identify which elements are shared between redundant paths. The diagram explains the intended command path; coil ratings and terminal numbers come from the selected breaker. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Protection channel one. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Trip coil one. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The coil number is a project designation.
- Trace the initiating contact, protective fuse, trip coil, return conductor and feedback independently. Identify which elements are shared between redundant paths. The diagram explains the intended command path; coil ratings and terminal numbers come from the selected breaker.

## Drawing checklist

- Label the source and connection reference for protection channel one.
- Identify the destination and defined state of trip coil one.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The coil number is a project designation.

## Important distinction

The coil number is a project designation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Protection channel one
- Output / connection: Trip coil one
- Lookup label: BTCOI is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for breaker trip circuits. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Lockout](86-lockout.md)
- [Breaker trip coil two interface](breaker-trip-coil-two-interface.md)

![Breaker trip coil one interface — original educational illustration](../artwork/svg/breaker-trip-coil-one-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
