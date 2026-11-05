# Power-transformer secondary bay arrangement

Identifies the bay circuit serving the transformer's assigned secondary winding connection.

[Canonical reference](https://eloragrid.ai/symbols/power-transformer-secondary-bay-arrangement) · [Structured record](../entries/power-transformer-secondary-bay-arrangement.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Transformer secondary winding
Secondary-side bus connection

## What it represents

Identifies the bay circuit serving the transformer's assigned secondary winding connection. A bay circuit arrangement groups the switching, measuring and protection interfaces associated with a specific network circuit. A line bay, transformer bay and reactor bay share some devices but connect different kinds of primary equipment.
In a switchyard single-line drawing, the bay arrangement helps the reader follow the circuit from its bus connection to the external line, transformer or compensation equipment and identify the measurement boundaries along the path. For this reference, the drawing identifies “Transformer secondary winding” at the input and “Secondary-side bus connection” at the output. Winding and protection zone identity must remain explicit.
Preserve the actual order of primary connections, isolation points and CT locations. These conceptual arrangements do not establish equipment clearances, terminal layouts or an approved switching sequence. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Transformer secondary winding. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Secondary-side bus connection. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Winding and protection zone identity must remain explicit.
- Preserve the actual order of primary connections, isolation points and CT locations. These conceptual arrangements do not establish equipment clearances, terminal layouts or an approved switching sequence.

## Drawing checklist

- Label the source and connection reference for transformer secondary winding.
- Identify the destination and defined state of secondary-side bus connection.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Winding and protection zone identity must remain explicit.

## Important distinction

Winding and protection zone identity must remain explicit. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Transformer secondary winding
- Output / connection: Secondary-side bus connection
- Lookup label: PSBA is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchyard bay circuit arrangements. Bay arrangements and coordinated breaker controls. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Current transformer](current-transformer.md)
- [Shunt-reactor switching bay arrangement](shunt-reactor-switching-bay-arrangement.md)

![Power-transformer secondary bay arrangement — original educational illustration](../artwork/svg/power-transformer-secondary-bay-arrangement.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
