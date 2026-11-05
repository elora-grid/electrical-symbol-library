# Transformer tertiary bay arrangement

Shows the assigned protection and switching interface of an accessible transformer tertiary winding.

[Canonical reference](https://eloragrid.ai/symbols/transformer-tertiary-bay-arrangement) · [Structured record](../entries/transformer-tertiary-bay-arrangement.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Tertiary winding connection
Tertiary circuit interface

## What it represents

Shows the assigned protection and switching interface of an accessible transformer tertiary winding. A bay circuit arrangement groups the switching, measuring and protection interfaces associated with a specific network circuit. A line bay, transformer bay and reactor bay share some devices but connect different kinds of primary equipment.
In a switchyard single-line drawing, the bay arrangement helps the reader follow the circuit from its bus connection to the external line, transformer or compensation equipment and identify the measurement boundaries along the path. For this reference, the drawing identifies “Tertiary winding connection” at the input and “Tertiary circuit interface” at the output. An internal tertiary is not automatically externally accessible.
Preserve the actual order of primary connections, isolation points and CT locations. These conceptual arrangements do not establish equipment clearances, terminal layouts or an approved switching sequence. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Tertiary winding connection. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Tertiary circuit interface. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- An internal tertiary is not automatically externally accessible.
- Preserve the actual order of primary connections, isolation points and CT locations. These conceptual arrangements do not establish equipment clearances, terminal layouts or an approved switching sequence.

## Drawing checklist

- Label the source and connection reference for tertiary winding connection.
- Identify the destination and defined state of tertiary circuit interface.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: An internal tertiary is not automatically externally accessible.

## Important distinction

An internal tertiary is not automatically externally accessible. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Tertiary winding connection
- Output / connection: Tertiary circuit interface
- Lookup label: TTBA is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchyard bay circuit arrangements. Bay arrangements and coordinated breaker controls. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Current transformer](current-transformer.md)
- [Neutral reactor transformer interface](neutral-reactor-transformer-interface.md)

![Transformer tertiary bay arrangement — original educational illustration](../artwork/svg/transformer-tertiary-bay-arrangement.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
