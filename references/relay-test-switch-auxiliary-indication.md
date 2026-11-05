# Relay test-switch auxiliary indication

Carries the position of a test switch into the alarm or control logic.

[Canonical reference](https://eloragrid.ai/symbols/relay-test-switch-auxiliary-indication) · [Structured record](../entries/relay-test-switch-auxiliary-indication.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Test-switch auxiliary contact
Test-switch status

## What it represents

Carries the position of a test switch into the alarm or control logic. A test interface separates measurement, command and indication paths so their behavior can be checked in the documented test configuration. The test boundary must show which real equipment outputs remain enabled.
In a switchgear relay panel, test links can separate a protective relay from the trip coils while maintaining the specified current-transformer secondary arrangement. For this reference, the drawing identifies “Test-switch auxiliary contact” at the input and “Test-switch status” at the output. Auxiliary status follows the selected test assembly.
Trace the source and destination on each side of the test boundary. Use the selected test-device instructions for actual operations and never infer a safe current-transformer switching sequence from an educational diagram. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Test-switch auxiliary contact. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Test-switch status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Auxiliary status follows the selected test assembly.
- Trace the source and destination on each side of the test boundary. Use the selected test-device instructions for actual operations and never infer a safe current-transformer switching sequence from an educational diagram.

## Drawing checklist

- Label the source and connection reference for test-switch auxiliary contact.
- Identify the destination and defined state of test-switch status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Auxiliary status follows the selected test assembly.

## Important distinction

Auxiliary status follows the selected test assembly. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Test-switch auxiliary contact
- Output / connection: Test-switch status
- Lookup label: RTAI is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for switchgear test and commissioning interfaces. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relay test block](relay-test-block.md)
- [Test plug](test-plug.md)
- [Commissioning handover inhibit interface](commissioning-handover-inhibit-interface.md)

![Relay test-switch auxiliary indication — original educational illustration](../artwork/svg/relay-test-switch-auxiliary-indication.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
