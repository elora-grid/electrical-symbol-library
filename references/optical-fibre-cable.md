# Optical fibre cable

A cable line carrying light rather than current, used for protection signalling, SCADA links and substation process bus.

[Canonical reference](https://eloragrid.ai/symbols/optical-fibre-cable) · [Structured record](../entries/optical-fibre-cable.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic, SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

The optical fibre cable representation marks a link that carries light signals. In power systems it is used for line differential protection signalling, IEC 61850 station and process bus networks, and links between buildings where galvanic isolation avoids earth potential rise problems. It is commonly drawn with a distinct line style or a small light-path mark on the conductor.
Because the fibre carries no current, it must never be read as a power or earth path. The drawing should still give the fibre count, fibre type (single mode or multimode) and connector types at each end. Spare fibres and splice points are tracked in a fibre schedule rather than on the schematic.

## How to read it

- Do not treat the fibre as an electrical path for earthing or interlocking.
- Check fibre type and count against the equipment ports.

## Drawing checklist

- State single mode or multimode and fibre count.
- Identify connector type at each end.
- Reference splice trays and patch panels in the fibre schedule.

## Important distinction

An optical fibre cable carries light and gives galvanic isolation; a coaxial cable carries electrical signals and can transfer earth potential.

## Facts

- Graphic cue: Line with optical path mark or distinct fibre line style
- Electrical property: Non-conducting; provides galvanic isolation
- Preview: Original educational illustration; consult the publisher and applicable standard for the exact graphic

## Public references

- [IEC-60617 symbol preview directory](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-7871E6EF-24D5-467E-9B74-321FEDC9DFDA.htm) — Autodesk. Public directory of IEC-oriented symbol families.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. Standards context for transmission-path graphics.

## Related references

- [Fibre-optic connector](iec-fibre-optic-connector.md)
- [Coaxial cable](iec-coaxial-cable.md)
- [Ethernet physical-layer transceiver](ethernet-phy.md)

![Optical fibre cable — original educational illustration](../artwork/svg/optical-fibre-cable.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
