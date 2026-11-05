# Line-end voltage-measurement interface

Places the selected voltage measurement on the identified line side of its bay.

[Canonical reference](https://eloragrid.ai/symbols/line-end-voltage-measurement-interface) · [Structured record](../entries/line-end-voltage-measurement-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Line conductor voltage
Line-voltage measuring path

## What it represents

Places the selected voltage measurement on the identified line side of its bay. A bay circuit arrangement groups the switching, measuring and protection interfaces associated with a specific network circuit. A line bay, transformer bay and reactor bay share some devices but connect different kinds of primary equipment.
In a switchyard single-line drawing, the bay arrangement helps the reader follow the circuit from its bus connection to the external line, transformer or compensation equipment and identify the measurement boundaries along the path. For this reference, the drawing identifies “Line conductor voltage” at the input and “Line-voltage measuring path” at the output. Line-side and bus-side voltage references differ.
Preserve the actual order of primary connections, isolation points and CT locations. These conceptual arrangements do not establish equipment clearances, terminal layouts or an approved switching sequence. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Line conductor voltage. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Line-voltage measuring path. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Line-side and bus-side voltage references differ.
- Preserve the actual order of primary connections, isolation points and CT locations. These conceptual arrangements do not establish equipment clearances, terminal layouts or an approved switching sequence.

## Drawing checklist

- Label the source and connection reference for line conductor voltage.
- Identify the destination and defined state of line-voltage measuring path.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Line-side and bus-side voltage references differ.

## Important distinction

Line-side and bus-side voltage references differ. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Line conductor voltage
- Output / connection: Line-voltage measuring path
- Lookup label: LVI is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchyard bay circuit arrangements. Bay arrangements and coordinated breaker controls. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Current transformer](current-transformer.md)
- [Line-side earthing-switch bay interface](line-side-earthing-switch-bay-interface.md)

![Line-end voltage-measurement interface — original educational illustration](../artwork/svg/line-end-voltage-measurement-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
