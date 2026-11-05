# Dual-channel trip segregation

Keeps the two documented opening-command channels electrically identifiable through the terminal strip.

[Canonical reference](https://eloragrid.ai/symbols/dual-channel-trip-segregation) · [Structured record](../entries/dual-channel-trip-segregation.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Two protection channels
Separate trip paths

## What it represents

Keeps the two documented opening-command channels electrically identifiable through the terminal strip. A trip circuit carries an opening request from a control or protection device to the breaker operating mechanism. The opening command, the coil supply and the evidence that the breaker opened are separate parts of the drawing.
In a switchgear incomer panel, a protection relay requests opening and an auxiliary contact reports the resulting breaker position. A second trip path can have its own supply and wiring so that a single wiring fault does not remove both paths. For this reference, the drawing identifies “Two protection channels” at the input and “Separate trip paths” at the output. Shared wiring must be explicitly identified.
Trace the initiating contact, protective fuse, trip coil, return conductor and feedback independently. Identify which elements are shared between redundant paths. The diagram explains the intended command path; coil ratings and terminal numbers come from the selected breaker. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Two protection channels. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Separate trip paths. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Shared wiring must be explicitly identified.
- Trace the initiating contact, protective fuse, trip coil, return conductor and feedback independently. Identify which elements are shared between redundant paths. The diagram explains the intended command path; coil ratings and terminal numbers come from the selected breaker.

## Drawing checklist

- Label the source and connection reference for two protection channels.
- Identify the destination and defined state of separate trip paths.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Shared wiring must be explicitly identified.

## Important distinction

Shared wiring must be explicitly identified. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Two protection channels
- Output / connection: Separate trip paths
- Lookup label: DTS is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for breaker trip circuits. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Lockout](86-lockout.md)
- [Trip positive-conductor supervision](trip-positive-conductor-supervision.md)

![Dual-channel trip segregation — original educational illustration](../artwork/svg/dual-channel-trip-segregation.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
