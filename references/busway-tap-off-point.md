# Busway tap-off connection

The connection of an outgoing circuit to a plug-in busway through a tap-off unit, usually containing a protective device.

[Canonical reference](https://eloragrid.ai/symbols/busway-tap-off-point) · [Structured record](../entries/busway-tap-off-point.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI, Manufacturer.

## What it represents

This symbol shows a tap-off unit plugged into the busway, with the outgoing circuit leaving through a fuse or circuit breaker in the unit. On single-line diagrams it replaces the board-and-feeder pattern used for switchboards, since the busway itself acts as the distribution bus.
The connection symbol does not show the tap-off unit rating unless annotated. Tap-off units may be fused or contain a breaker, and they usually have an interlock preventing insertion or removal under load. The protective device inside the unit should be drawn with its own symbol and rating.

## How to read it

- Read the protective device rating in the tap-off unit.
- Check selectivity between the tap-off device and busway upstream protection.

## Drawing checklist

- Draw the protective device in the tap-off.
- State tap-off rating.
- Identify the busway outlet position.

## Important distinction

A busway tap-off is a plug-in connection with its own protection; a one-line bus tap is a generic connection to a busbar.

## Facts

- Graphic cue: Short branch from busway line into a protective device
- Physical item: Plug-in tap-off unit
- Preview: Original educational illustration; consult the publisher and applicable standard for the exact graphic

## Public references

- [Canalis busbar trunking systems](https://www.se.com/ww/en/work/products/master-ranges/line-series/) — Schneider Electric. Manufacturer busbar trunking ranges with tap-off units.
- [Autodesk IEC-60617 preview: One-line bus-tap representation](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-9EC851F1-8B92-428B-A657-5B21B2325C62.htm) — Autodesk. Public IEC-oriented one-line bus-tap representation for comparison.

## Related references

- [Plug-in busway](plug-in-busway.md)
- [One-line bus tap](iec-one-line-bus-tap.md)
- [Busway tap-off unit](ga-busway-tap-off-unit.md)

![Busway tap-off connection — original educational illustration](../artwork/svg/busway-tap-off-point.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
