# GIS disconnector compartment reference

Identifies the documented isolation function within the selected gas-insulated arrangement.

[Canonical reference](https://eloragrid.ai/symbols/gis-disconnector-compartment-reference) · [Structured record](../entries/gis-disconnector-compartment-reference.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
GIS primary path
GIS disconnector function

## What it represents

Identifies the documented isolation function within the selected gas-insulated arrangement. High-voltage primary equipment carries, interrupts, measures or conditions the main power circuit. Its function, insulation arrangement and equipment boundaries need to be distinguished from the secondary signals used to control it.
In a switchyard equipment diagram, the primary reference identifies the electrical role of an installed component while the linked equipment schedule and manufacturer drawing supply its exact construction and dimensions. For this reference, the drawing identifies “GIS primary path” at the input and “GIS disconnector function” at the output. Position indication is distinct from visible outdoor isolation.
Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: GIS primary path. Identify its source device or document and the state represented on the drawing.
- Follow the named output: GIS disconnector function. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Position indication is distinct from visible outdoor isolation.
- Read the connected power path before interpreting a secondary output or alarm. These original educational component references provide no product dimensions, dielectric rating, installation clearance or construction approval.

## Drawing checklist

- Label the source and connection reference for gis primary path.
- Identify the destination and defined state of gis disconnector function.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Position indication is distinct from visible outdoor isolation.

## Important distinction

Position indication is distinct from visible outdoor isolation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: GIS primary path
- Output / connection: GIS disconnector function
- Lookup label: GDCR is a library lookup label, not a standard device designation.

## Public references

- [Gas-insulated switchgear](https://www.hitachienergy.com/products-and-solutions/high-voltage-switchgear-and-breakers/gas-insulated-switchgear) — Hitachi Energy. Public technical context for high-voltage primary equipment references. Primary switching equipment and instrument-transformer interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [GIS earthing-switch compartment reference](gis-earthing-switch-compartment-reference.md)

![GIS disconnector compartment reference — original educational illustration](../artwork/svg/gis-disconnector-compartment-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
