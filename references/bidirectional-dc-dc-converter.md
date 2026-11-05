# Bidirectional DC-to-DC converter

A DC/DC stage that can pass power in either direction, linking a battery or supercapacitor to a DC bus.

[Canonical reference](https://eloragrid.ai/symbols/bidirectional-dc-dc-converter) · [Structured record](../entries/bidirectional-dc-dc-converter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A bidirectional DC/DC converter moves power in either direction between two DC voltage levels. In microgrids and DC-coupled solar plants it connects a battery or supercapacitor to a common DC bus, charging the store from surplus and discharging it when the bus voltage falls.
The drawing is the DC/DC converter box with DC marks on both sides and a bidirectional arrow, or a double-headed arrow along the box. Detailed schematics may show a half-bridge buck-boost or dual-active-bridge topology inside.
The symbol does not state whether the two sides are galvanically isolated, the current limits in each direction, or the control mode, which may regulate bus voltage or battery current. These must come from the converter data.

## How to read it

- Check the arrow direction marks for confirmation that power flows both ways.
- Isolation is not implied unless stated or a transformer is shown.

## Drawing checklist

- State voltage ranges and power in each direction.
- Show isolation if present.
- Reference control mode.

## Important distinction

A bidirectional converter transfers power both ways; a standard DC/DC converter passes power from input to output only.

## Facts

- Energy flow: Both directions
- Typical use: Storage to DC bus
- Isolation: Not implied
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [TIDA-010054: bidirectional dual-active-bridge reference design](https://www.ti.com/tool/TIDA-010054) — Texas Instruments. Public bidirectional DC/DC reference design context.
- [Autodesk IEC-60617 preview: Energy-flow qualifiers](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-2039C5DD-1C01-4D77-AD97-584052C53D75.htm) — Autodesk. Public IEC-context energy-flow qualifier family.

## Related references

- [DC-to-DC converter](dc-to-dc-converter.md)
- [Dual-active-bridge topology](dual-active-bridge-topology.md)
- [Supercapacitor bank](supercapacitor-bank.md)
- [Isolated DC-to-DC converter](isolated-dc-dc-converter.md)

![Bidirectional DC-to-DC converter — original educational illustration](../artwork/svg/bidirectional-dc-dc-converter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
