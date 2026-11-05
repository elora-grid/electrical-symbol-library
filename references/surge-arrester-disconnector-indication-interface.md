# Surge-arrester disconnector indication interface

Identifies the selected arrester disconnection device or its documented status output.

[Canonical reference](https://eloragrid.ai/symbols/surge-arrester-disconnector-indication-interface) · [Structured record](../entries/surge-arrester-disconnector-indication-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Arrester disconnector condition
Disconnection indication

## What it represents

Identifies the selected arrester disconnection device or its documented status output. High-voltage primary equipment carries, interrupts, measures or conditions the main power circuit. Its function, insulation arrangement and equipment boundaries need to be distinguished from the secondary signals used to control it.
In a switchyard equipment diagram, the primary reference identifies the electrical role of an installed component while the linked equipment schedule and manufacturer drawing supply its exact construction and dimensions. For this reference, the drawing identifies “Arrester disconnector condition” at the input and “Disconnection indication” at the output. Not every station arrester has this accessory.
Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Arrester disconnector condition. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Disconnection indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Not every station arrester has this accessory.
- Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval.

## Drawing checklist

- Label the source and connection reference for arrester disconnector condition.
- Identify the destination and defined state of disconnection indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Not every station arrester has this accessory.

## Important distinction

Not every station arrester has this accessory. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Arrester disconnector condition
- Output / connection: Disconnection indication
- Lookup label: SDII is a library lookup label, not a standard device designation.

## Public references

- [Gas-insulated switchgear](https://www.hitachienergy.com/products-and-solutions/high-voltage-switchgear-and-breakers/gas-insulated-switchgear) — Hitachi Energy. Public technical context for high-voltage primary equipment references. Primary switching equipment and instrument-transformer interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [Inductive voltage-transformer yard reference](inductive-voltage-transformer-yard-reference.md)

![Surge-arrester disconnector indication interface — original educational illustration](../artwork/svg/surge-arrester-disconnector-indication-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
