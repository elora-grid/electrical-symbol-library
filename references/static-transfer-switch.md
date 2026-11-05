# Static transfer switch

A thyristor-based switch that transfers a load between two synchronised sources within a quarter cycle.

[Canonical reference](https://eloragrid.ai/symbols/static-transfer-switch) · [Structured record](../entries/static-transfer-switch.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A static transfer switch uses back-to-back thyristor pairs on each of two sources to move a critical load from one supply to the other in a few milliseconds. It is used in data centres and process plants, typically downstream of two UPS systems, so that a failure in one UPS or its distribution does not interrupt the load.
The single-line diagram shows two incoming feeders, each passing through an anti-parallel thyristor symbol or a solid-state switch box, joining at a common output. Mechanical bypass switches for maintenance are drawn in parallel with the static paths.
Fast transfer only works when the two sources are close in phase. The symbol does not show the synchronisation window, the transfer inhibit logic on downstream faults or how transformer inrush is managed when the load includes transformers.

## How to read it

- Look for bypass switches around each thyristor path.
- Transfer is normally blocked for downstream faults; check the logic.

## Drawing checklist

- State current rating and transfer time.
- Show both sources and maintenance bypasses.
- Reference synchronisation and inhibit logic.

## Important distinction

A static transfer switch uses thyristors and transfers in milliseconds; an automatic transfer switch uses mechanical contacts and takes much longer.

## Facts

- Switching element: Anti-parallel thyristors
- Transfer time: Sub-cycle
- Typical location: Downstream of two UPS systems
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Transfer switch fundamentals](https://www.cummins.com/sites/default/files/2026-04/2023-sep-transfer-switch-fundamentals.pdf) — Cummins. Public transfer switch fundamentals context.
- [AutoCAD Electrical: Semiconductor components](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-AC954072-7314-4682-88AF-38160D61E9A2.htm) — Autodesk. Public semiconductor symbol family for the thyristor elements.

## Related references

- [Automatic transfer switch](automatic-transfer-switch.md)
- [Online double-conversion UPS](online-double-conversion-ups.md)
- [Semiconductor power switch](semiconductor-power-switch.md)
- [Transfer-switch assembly](transfer-switch.md)

![Static transfer switch — original educational illustration](../artwork/svg/static-transfer-switch.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
