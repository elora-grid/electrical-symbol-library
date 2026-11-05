# Busbar

A common conductive connection distributing power to connected circuits.

[Canonical reference](https://eloragrid.ai/symbols/busbar) · [Structured record](../entries/busbar.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A busbar connects multiple power circuits to a common electrical node. In an SLD it is commonly represented as a line with feeder connections. The representation describes connectivity; physical conductor dimensions, enclosure, phase arrangement and current-carrying capabilities are separate equipment information.
Bus sections and bus couplers describe how those electrical nodes can be connected or separated. Keep bus labels consistent between the system drawing, switchboard schedule and equipment documentation. A drawing line is not a scale representation of a physical busbar.

## How to read it

- Identify each feeder connected to the same bus section.
- Use device positions to determine which sections are shown as connected in the stated drawing condition.

## Drawing checklist

- Name each bus or bus section.
- Reference ratings and fault-duty information.
- Cross-reference any coupler or section device.

## Important distinction

A busbar is an electrical connection. Busbar trunking is a physical distribution system with model-specific enclosures and fittings.

## Facts

- Drawing meaning: Shared electrical node
- Physical dimensions: Separate from the SLD mark
- Related equipment: Busbar trunking and switchboard assemblies

## Public references

- [IEC-60617 symbol preview directory](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-7871E6EF-24D5-467E-9B74-321FEDC9DFDA.htm) — Autodesk. Public bus-tap and power-distribution drawing categories.
- [Canalis busbar trunking systems](https://www.se.com/ww/en/work/products/master-ranges/line-series/) — Schneider Electric. Manufacturer example of a physical busbar distribution system.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Busbar trunking](busbar-trunking.md)
- [Switchboard](switchboard.md)
- [Power transformer](power-transformer.md)

![Busbar — original educational illustration](../artwork/svg/busbar.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
