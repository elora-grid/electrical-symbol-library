# Wall bushing primary interface

Identifies the insulated primary conductor passage through a building or compartment boundary.

[Canonical reference](https://eloragrid.ai/symbols/wall-bushing-primary-interface) · [Structured record](../entries/wall-bushing-primary-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Primary conductor on one side
Primary conductor on the other side

## What it represents

Identifies the insulated primary conductor passage through a building or compartment boundary. High-voltage primary equipment carries, interrupts, measures or conditions the main power circuit. Its function, insulation arrangement and equipment boundaries need to be distinguished from the secondary signals used to control it.
In a switchyard equipment diagram, the primary reference identifies the electrical role of an installed component while the linked equipment schedule and manufacturer drawing supply its exact construction and dimensions. For this reference, the drawing identifies “Primary conductor on one side” at the input and “Primary conductor on the other side” at the output. The physical barrier requires its own installation design.
Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Primary conductor on one side. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Primary conductor on the other side. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The physical barrier requires its own installation design.
- Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval.

## Drawing checklist

- Label the source and connection reference for primary conductor on one side.
- Identify the destination and defined state of primary conductor on the other side.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The physical barrier requires its own installation design.

## Important distinction

The physical barrier requires its own installation design. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Primary conductor on one side
- Output / connection: Primary conductor on the other side
- Lookup label: WBPI is a library lookup label, not a standard device designation.

## Public references

- [Gas-insulated switchgear](https://www.hitachienergy.com/products-and-solutions/high-voltage-switchgear-and-breakers/gas-insulated-switchgear) — Hitachi Energy. Public technical context for high-voltage primary equipment references. Primary switching equipment and instrument-transformer interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [Oil-to-oil bushing interface reference](oil-to-oil-bushing-interface-reference.md)

![Wall bushing primary interface — original educational illustration](../artwork/svg/wall-bushing-primary-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
