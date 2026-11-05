# Undervoltage-release holding interface

Identifies the control-energy condition that holds the documented undervoltage release in its normal state.

[Canonical reference](https://eloragrid.ai/symbols/undervoltage-release-holding-interface) · [Structured record](../entries/undervoltage-release-holding-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Release control voltage
Release holding state

## What it represents

Identifies the control-energy condition that holds the documented undervoltage release in its normal state. A switching-device operating reference adds the specific mechanism or duty context needed to interpret its place in a power circuit. The same basic switching outline can serve different equipment constructions, so the added description must remain attached to its device tag.
In a medium-voltage switchgear drawing, the operating reference helps the reader distinguish the interrupting device from its isolation, earthing and auxiliary-control interfaces. For this reference, the drawing identifies “Release control voltage” at the input and “Release holding state” at the output. Its operation differs from an energized shunt-trip command.
Use the device schedule for its actual construction, operating duty and ratings. These original functional illustrations describe the named role and do not certify a standard glyph or product footprint. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Release control voltage. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Release holding state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Its operation differs from an energized shunt-trip command.
- Use the device schedule for its actual construction, operating duty and ratings. These original functional illustrations describe the named role and do not certify a standard glyph or product footprint.

## Drawing checklist

- Label the source and connection reference for release control voltage.
- Identify the destination and defined state of release holding state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Its operation differs from an energized shunt-trip command.

## Important distinction

Its operation differs from an energized shunt-trip command. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Release control voltage
- Output / connection: Release holding state
- Lookup label: UHI is a library lookup label, not a standard device designation.

## Public references

- [High-voltage circuit breakers](https://www.siemens-energy.com/global/en/home/products-services/product-offerings/circuit-breakers.html) — Siemens Energy. Public technical context for switching-device operating references. Circuit-breaker construction and interruption families. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Disconnector](disconnector.md)
- [Circuit-breaker undervoltage ride-through interface](circuit-breaker-undervoltage-ride-through-interface.md)

![Undervoltage-release holding interface — original educational illustration](../artwork/svg/undervoltage-release-holding-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
