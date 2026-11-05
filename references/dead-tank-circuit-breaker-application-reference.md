# Dead-tank circuit-breaker application reference

Identifies the documented grounded-tank breaker construction in the assigned circuit.

[Canonical reference](https://eloragrid.ai/symbols/dead-tank-circuit-breaker-application-reference) · [Structured record](../entries/dead-tank-circuit-breaker-application-reference.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
High-voltage circuit
Dead-tank interrupting equipment

## What it represents

Identifies the documented grounded-tank breaker construction in the assigned circuit. High-voltage primary equipment carries, interrupts, measures or conditions the main power circuit. Its function, insulation arrangement and equipment boundaries need to be distinguished from the secondary signals used to control it.
In a switchyard equipment diagram, the primary reference identifies the electrical role of an installed component while the linked equipment schedule and manufacturer drawing supply its exact construction and dimensions. For this reference, the drawing identifies “High-voltage circuit” at the input and “Dead-tank interrupting equipment” at the output. Integrated CT arrangements depend on the selected breaker.
Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: High-voltage circuit. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Dead-tank interrupting equipment. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Integrated CT arrangements depend on the selected breaker.
- Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval.

## Drawing checklist

- Label the source and connection reference for high-voltage circuit.
- Identify the destination and defined state of dead-tank interrupting equipment.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Integrated CT arrangements depend on the selected breaker.

## Important distinction

Integrated CT arrangements depend on the selected breaker. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: High-voltage circuit
- Output / connection: Dead-tank interrupting equipment
- Lookup label: DCAR is a library lookup label, not a standard device designation.

## Public references

- [Gas-insulated switchgear](https://www.hitachienergy.com/products-and-solutions/high-voltage-switchgear-and-breakers/gas-insulated-switchgear) — Hitachi Energy. Public technical context for high-voltage primary equipment references. Primary switching equipment and instrument-transformer interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [Hybrid switchgear module reference](hybrid-switchgear-module-reference.md)

![Dead-tank circuit-breaker application reference — original educational illustration](../artwork/svg/dead-tank-circuit-breaker-application-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
