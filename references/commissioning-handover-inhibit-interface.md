# Commissioning handover inhibit interface

Identifies the documented condition preventing automatic operation during a controlled handover state.

[Canonical reference](https://eloragrid.ai/symbols/commissioning-handover-inhibit-interface) · [Structured record](../entries/commissioning-handover-inhibit-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Handover mode status
Automatic-operation inhibit

## What it represents

Identifies the documented condition preventing automatic operation during a controlled handover state. A test interface separates measurement, command and indication paths so their behavior can be checked in the documented test configuration. The test boundary must show which real equipment outputs remain enabled.
In a switchgear relay panel, test links can separate a protective relay from the trip coils while maintaining the specified current-transformer secondary arrangement. For this reference, the drawing identifies “Handover mode status” at the input and “Automatic-operation inhibit” at the output. Its scope must be explicitly defined.
Trace the source and destination on each side of the test boundary. Use the selected test-device instructions for actual operations and never infer a safe current-transformer switching sequence from an educational diagram. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Handover mode status. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Automatic-operation inhibit. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Its scope must be explicitly defined.
- Trace the source and destination on each side of the test boundary. Use the selected test-device instructions for actual operations and never infer a safe current-transformer switching sequence from an educational diagram.

## Drawing checklist

- Label the source and connection reference for handover mode status.
- Identify the destination and defined state of automatic-operation inhibit.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Its scope must be explicitly defined.

## Important distinction

Its scope must be explicitly defined. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Handover mode status
- Output / connection: Automatic-operation inhibit
- Lookup label: CHII is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for switchgear test and commissioning interfaces. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relay test block](relay-test-block.md)
- [Test plug](test-plug.md)
- [Portable test-supply connection boundary](portable-test-supply-connection-boundary.md)

![Commissioning handover inhibit interface — original educational illustration](../artwork/svg/commissioning-handover-inhibit-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
