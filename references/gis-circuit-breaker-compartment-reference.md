# GIS circuit-breaker compartment reference

Identifies the circuit-breaker functional compartment within the assigned gas-insulated assembly.

[Canonical reference](https://eloragrid.ai/symbols/gis-circuit-breaker-compartment-reference) · [Structured record](../entries/gis-circuit-breaker-compartment-reference.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
GIS primary conductor
GIS interrupting compartment

## What it represents

Identifies the circuit-breaker functional compartment within the assigned gas-insulated assembly. High-voltage primary equipment carries, interrupts, measures or conditions the main power circuit. Its function, insulation arrangement and equipment boundaries need to be distinguished from the secondary signals used to control it.
In a switchyard equipment diagram, the primary reference identifies the electrical role of an installed component while the linked equipment schedule and manufacturer drawing supply its exact construction and dimensions. For this reference, the drawing identifies “GIS primary conductor” at the input and “GIS interrupting compartment” at the output. Compartment boundaries and gas zones can differ.
Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: GIS primary conductor. Identify its source device or document and the state represented on the drawing.
- Follow the named output: GIS interrupting compartment. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Compartment boundaries and gas zones can differ.
- Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval.

## Drawing checklist

- Label the source and connection reference for gis primary conductor.
- Identify the destination and defined state of gis interrupting compartment.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Compartment boundaries and gas zones can differ.

## Important distinction

Compartment boundaries and gas zones can differ. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: GIS primary conductor
- Output / connection: GIS interrupting compartment
- Lookup label: GCCR is a library lookup label, not a standard device designation.

## Public references

- [Gas-insulated switchgear](https://www.hitachienergy.com/products-and-solutions/high-voltage-switchgear-and-breakers/gas-insulated-switchgear) — Hitachi Energy. Public technical context for high-voltage primary equipment references. Primary switching equipment and instrument-transformer interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [GIS disconnector compartment reference](gis-disconnector-compartment-reference.md)

![GIS circuit-breaker compartment reference — original educational illustration](../artwork/svg/gis-circuit-breaker-compartment-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
