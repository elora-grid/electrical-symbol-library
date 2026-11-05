# Feeder busway

A busway run used purely to carry power between two points, drawn as a distinct trunking line without tap-off points.

[Canonical reference](https://eloragrid.ai/symbols/busway-feeder-run) · [Structured record](../entries/busway-feeder-run.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, GA. Reference families: IEC, IEEE / ANSI, Manufacturer.

## What it represents

Feeder busway carries high current between a transformer and switchboard, or between switchboards, in an enclosed busbar trunking rather than parallel cables. Single-line diagrams draw it as a distinct line style or double line with its rating, so that it is not mistaken for cable.
The symbol does not show the busway impedance, which is often lower than equivalent cables and affects fault level downstream. It also does not show the conductor arrangement, such as whether a full neutral or separate earth bar is included. Expansion units, fire barriers and flanged ends are physical details on the busway layout drawing.

## How to read it

- Read the busway rating and conductor arrangement.
- Use busway impedance, not cable data, for fault calculations.

## Drawing checklist

- State current rating and conductor configuration.
- Reference the busway layout drawing.
- Include busway impedance in fault studies.

## Important distinction

Feeder busway has no tap-off points; plug-in busway provides outlets along its length.

## Facts

- Graphic cue: Double line or distinct trunking line between two boards
- Typical use: Transformer to main switchboard links
- Preview: Original educational illustration; consult the publisher and applicable standard for the exact graphic

## Public references

- [Canalis busbar trunking systems](https://www.se.com/ww/en/work/products/master-ranges/line-series/) — Schneider Electric. Manufacturer busbar trunking ranges including feeder runs.
- [IEC-60617 symbol preview directory](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-7871E6EF-24D5-467E-9B74-321FEDC9DFDA.htm) — Autodesk. Public directory of IEC-oriented symbol families.

## Related references

- [Plug-in busway](plug-in-busway.md)
- [Busbar trunking](busbar-trunking.md)
- [Busbar](busbar.md)

![Feeder busway — original educational illustration](../artwork/svg/busway-feeder-run.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
