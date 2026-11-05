# Current transformer

A current-measurement transformer used with metering and protection equipment.

[Canonical reference](https://eloragrid.ai/symbols/current-transformer) · [Structured record](../entries/current-transformer.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A current transformer produces a secondary current related to the current in its primary conductor. A drawing uses the CT representation to show where current is measured and which metering or protection circuit receives that measurement. It does not, by itself, specify the CT ratio, accuracy class, burden or secondary connection.
On a single line diagram, the CT is placed at the measurement location. A schematic expands the secondary wiring, terminals and connected devices. Multi-core and multi-secondary CT arrangements require additional information; one generic preview cannot describe every configuration.

## How to read it

- Follow the primary conductor through the CT and then identify the secondary circuit separately.
- Polarity marks and terminal labels belong to the selected device and its documented connections.

## Drawing checklist

- Identify the metering or protection purpose.
- Reference the ratio, class and burden in the equipment documentation.
- Cross-reference secondary terminals and any test facility.

## Important distinction

A CT measures current. A VT measures voltage. Their secondary circuits and isolation/testing arrangements are different.

## Facts

- Quantity represented: Current
- Information to document: Ratio, class, burden and polarity
- Exact standard graphic: Consult the applicable standard and drawing legend
- Public Autodesk reference names: HXF1CT, VXF1CT (vendor identifiers, not IEC symbol IDs)

## Public references

- [Current transformer symbol variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-40AAEF4A-AC3F-4B3D-90A5-A9E0707C1241.htm) — Autodesk. Public CT symbol categories and secondary-winding variants.
- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Manufacturer examples of current and voltage transformers.
- [Transformer terminals for measuring and test circuits](https://www.phoenixcontact.com/en-ie/products/terminal-blocks/transformer-terminal-blocks?p=7) — Phoenix Contact. Manufacturer reference for CT test-terminal arrangements.

## Related references

- [Voltage transformer](voltage-transformer.md)
- [CT test terminal](ct-test-terminal.md)
- [Instantaneous overcurrent](50-instantaneous-overcurrent.md)
- [Time overcurrent](51-time-overcurrent.md)

![Current transformer — original educational illustration](../artwork/svg/current-transformer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
