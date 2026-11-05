# Shunt-reactor primary neutral reference

Identifies the selected reactor neutral connection and its relationship to the earthing arrangement.

[Canonical reference](https://eloragrid.ai/symbols/shunt-reactor-primary-neutral-reference) · [Structured record](../entries/shunt-reactor-primary-neutral-reference.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Reactor winding neutral
Assigned neutral connection

## What it represents

Identifies the selected reactor neutral connection and its relationship to the earthing arrangement. High-voltage primary equipment carries, interrupts, measures or conditions the main power circuit. Its function, insulation arrangement and equipment boundaries need to be distinguished from the secondary signals used to control it.
In a switchyard equipment diagram, the primary reference identifies the electrical role of an installed component while the linked equipment schedule and manufacturer drawing supply its exact construction and dimensions. For this reference, the drawing identifies “Reactor winding neutral” at the input and “Assigned neutral connection” at the output. Neutral duty follows the reactor application.
Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Reactor winding neutral. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Assigned neutral connection. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Neutral duty follows the reactor application.
- Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval.

## Drawing checklist

- Label the source and connection reference for reactor winding neutral.
- Identify the destination and defined state of assigned neutral connection.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Neutral duty follows the reactor application.

## Important distinction

Neutral duty follows the reactor application. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Reactor winding neutral
- Output / connection: Assigned neutral connection
- Lookup label: SPNR is a library lookup label, not a standard device designation.

## Public references

- [Gas-insulated switchgear](https://www.hitachienergy.com/products-and-solutions/high-voltage-switchgear-and-breakers/gas-insulated-switchgear) — Hitachi Energy. Public technical context for high-voltage primary equipment references. Primary switching equipment and instrument-transformer interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [Series-reactor primary path reference](series-reactor-primary-path-reference.md)

![Shunt-reactor primary neutral reference — original educational illustration](../artwork/svg/shunt-reactor-primary-neutral-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
