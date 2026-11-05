# Future-bay reserved connection boundary

Marks the intentionally reserved electrical interface for a future bay extension.

[Canonical reference](https://eloragrid.ai/symbols/future-bay-reserved-connection-boundary) · [Structured record](../entries/future-bay-reserved-connection-boundary.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Named bus reservation
Future bay connection reference

## What it represents

Marks the intentionally reserved electrical interface for a future bay extension. A bay circuit arrangement groups the switching, measuring and protection interfaces associated with a specific network circuit. A line bay, transformer bay and reactor bay share some devices but connect different kinds of primary equipment.
In a switchyard single-line drawing, the bay arrangement helps the reader follow the circuit from its bus connection to the external line, transformer or compensation equipment and identify the measurement boundaries along the path. For this reference, the drawing identifies “Named bus reservation” at the input and “Future bay connection reference” at the output. A reserved boundary does not establish installed equipment.
Preserve the actual order of primary connections, isolation points and CT locations. These conceptual arrangements do not establish equipment clearances, terminal layouts or an approved switching sequence. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Named bus reservation. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Future bay connection reference. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A reserved boundary does not establish installed equipment.
- Preserve the actual order of primary connections, isolation points and CT locations. These conceptual arrangements do not establish equipment clearances, terminal layouts or an approved switching sequence.

## Drawing checklist

- Label the source and connection reference for named bus reservation.
- Identify the destination and defined state of future bay connection reference.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: A reserved boundary does not establish installed equipment.

## Important distinction

A reserved boundary does not establish installed equipment. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Named bus reservation
- Output / connection: Future bay connection reference
- Lookup label: FRCB is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchyard bay circuit arrangements. Bay arrangements and coordinated breaker controls. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Current transformer](current-transformer.md)
- [Bay primary-to-secondary cross-reference](bay-primary-to-secondary-cross-reference.md)

![Future-bay reserved connection boundary — original educational illustration](../artwork/svg/future-bay-reserved-connection-boundary.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
