# Oil-interrupter breaker reference

Identifies a documented oil-interruption application when interpreting legacy power drawings.

[Canonical reference](https://eloragrid.ai/symbols/oil-interrupter-breaker-reference) · [Structured record](../entries/oil-interrupter-breaker-reference.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Power path and release mechanism
Interrupted oil-breaker path

## What it represents

Identifies a documented oil-interruption application when interpreting legacy power drawings. A switching-device operating reference adds the specific mechanism or duty context needed to interpret its place in a power circuit. The same basic switching outline can serve different equipment constructions, so the added description must remain attached to its device tag.
In a medium-voltage switchgear drawing, the operating reference helps the reader distinguish the interrupting device from its isolation, earthing and auxiliary-control interfaces. For this reference, the drawing identifies “Power path and release mechanism” at the input and “Interrupted oil-breaker path” at the output. Oil construction must come from equipment records.
Use the device schedule for its actual construction, operating duty and ratings. These original functional illustrations describe the named role and do not certify a standard glyph or product footprint. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Power path and release mechanism. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Interrupted oil-breaker path. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Oil construction must come from equipment records.
- Use the device schedule for its actual construction, operating duty and ratings. These original functional illustrations describe the named role and do not certify a standard glyph or product footprint.

## Drawing checklist

- Label the source and connection reference for power path and release mechanism.
- Identify the destination and defined state of interrupted oil-breaker path.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Oil construction must come from equipment records.

## Important distinction

Oil construction must come from equipment records. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Power path and release mechanism
- Output / connection: Interrupted oil-breaker path
- Lookup label: OBR is a library lookup label, not a standard device designation.

## Public references

- [High-voltage circuit breakers](https://www.siemens-energy.com/global/en/home/products-services/product-offerings/circuit-breakers.html) — Siemens Energy. Public technical context for switching-device operating references. Circuit-breaker construction and interruption families. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Disconnector](disconnector.md)
- [Single-pole operating mechanism reference](single-pole-operating-mechanism-reference.md)

![Oil-interrupter breaker reference — original educational illustration](../artwork/svg/oil-interrupter-breaker-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
