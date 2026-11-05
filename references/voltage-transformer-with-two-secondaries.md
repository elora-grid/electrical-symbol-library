# Voltage transformer with two secondary windings

VT with two separate secondary windings, typically one for metering and one for protection, each with its own fusing.

[Canonical reference](https://eloragrid.ai/symbols/voltage-transformer-with-two-secondaries) · [Structured record](../entries/voltage-transformer-with-two-secondaries.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, Manufacturer.

## What it represents

This VT form has one primary and two secondary windings. The usual arrangement gives a metering winding with a high accuracy class and a protection winding, each fused or protected by an MCB separately so a fault on one circuit does not take out the other.
Both windings share the same core, so their combined burden must stay within the VT's thermal rating. The symbol shows the two windings but not the class of each or the secondary protection, which must be stated for each circuit.

## How to read it

- Read the class and burden of each winding.
- Find the separate secondary protection for each winding.

## Drawing checklist

- State class per winding
- Show secondary fusing per winding
- Reference earthing point

## Important distinction

A VT with two secondaries shares one core; two separate VTs give independent cores.

## Facts

- Windings: One primary, two secondaries
- Typical split: Metering and protection
- Preview: Independent educational concept; consult the applicable standard and project legend for the exact graphic

## Public references

- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public manufacturer overview of indoor current and voltage instrument transformers.
- [Power, potential and autotransformer symbols](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-C1FE1690-DBF4-4F69-85C4-28E41F0A6392.htm) — Autodesk. Public potential-transformer symbol family used for context.

## Related references

- [Voltage transformer](voltage-transformer.md)
- [Voltage transformer set with broken-delta residual winding](voltage-transformer-with-residual-winding.md)
- [Current transformer with two secondaries](current-transformer-with-two-secondaries.md)

![Voltage transformer with two secondary windings — original educational illustration](../artwork/svg/voltage-transformer-with-two-secondaries.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
