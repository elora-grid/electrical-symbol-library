# Power transformer

Equipment transferring electrical power between winding circuits.

[Canonical reference](https://eloragrid.ai/symbols/power-transformer) · [Structured record](../entries/power-transformer.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A power-transformer representation identifies equipment transferring electrical power between winding circuits. The generic mark can show the relationship between windings, but voltage levels, winding connections, vector group, rating and earthing information require additional annotations and equipment references.
Two-winding, three-winding and autotransformer arrangements describe different configurations. The SLD should identify the intended configuration clearly and link it to the transformer schedule and any associated protection or GA drawings.

## How to read it

- Read the winding count and electrical connections before interpreting the rating labels.
- Use the equipment reference to distinguish a power transformer from an instrument transformer.

## Drawing checklist

- Document the specified rating and winding connections.
- Reference earthing and protection arrangements.
- Link the equipment schedule and physical drawing.

## Important distinction

A transformer used for voltage measurement is a VT or PT. Its function and secondary circuit differ from those of a power transformer.

## Facts

- Configuration: Winding arrangement must be specified
- Ratings: Equipment schedule
- Physical drawing: Model-specific GA and manufacturer information
- Public Autodesk reference names: HXF1T2, VXF1T2 (vendor identifiers, not IEC symbol IDs)

## Public references

- [Power, potential and autotransformer symbols](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-C1FE1690-DBF4-4F69-85C4-28E41F0A6392.htm) — Autodesk. Public transformer types and winding variants.
- [Official CAD drawings and BIM resources](https://www.se.com/us/en/work/support/resources-and-tools/cad-drawings/) — Schneider Electric. Official directory for model-specific equipment CAD.

## Related references

- [Voltage transformer](voltage-transformer.md)
- [Current transformer](current-transformer.md)
- [Transformer envelope](transformer-envelope.md)
- [Differential protection](87-differential.md)

![Power transformer — original educational illustration](../artwork/svg/power-transformer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
