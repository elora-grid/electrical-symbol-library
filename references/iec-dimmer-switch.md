# Dimmer switch plan mark

Plan mark for a switch that varies lamp brightness, drawn as a switch with an added variability arrow.

[Canonical reference](https://eloragrid.ai/symbols/iec-dimmer-switch) · [Structured record](../entries/iec-dimmer-switch.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: GA. Reference families: IEC.

Graphical convention: IEC. Dimmer switch.

## What it represents

A dimmer varies the power delivered to luminaires using phase-cut electronics or a control signal. IEC-style plans typically draw the switch mark with an oblique arrow or a small adjustment mark to show continuous variation, and the switching line links it to the dimmed group.
Dimmer compatibility with LED drivers is a frequent site problem, so the symbol is usually backed by a schedule stating the dimming method: leading edge, trailing edge, 0-10 V or DALI. The reader should check that every luminaire on the dimmed group is dimmable by that method.
The plan mark does not state the dimming technology or minimum load. A rotary or push dimmer looks the same on the plan.

## How to read it

- Check the dimming method in the schedule.
- Confirm every luminaire in the group is compatible.

## Drawing checklist

- State dimming method and rated load.
- Link to the dimmed luminaire group.
- Note minimum load for LED circuits.

## Important distinction

A one-way switch has no variability mark; the dimmer adds continuous control of light output.

## Facts

- Graphic cue: Switch mark with an oblique variability arrow
- Key schedule item: Dimming method and load rating
- Exact standard graphic: Not reproduced here; confirm the form against IEC 60617 and the project legend

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context; independently drawn here.
- [Autodesk IEC-60617 preview: Operating-device and function qualifiers](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-3598E18D-9F8A-48CE-83D0-4CEBA0AE869C.htm) — Autodesk. Public IEC-oriented qualifier family showing how adjustability is added to a base symbol.

## Related references

- [One-way light switch plan mark](iec-one-way-light-switch.md)
- [Luminaire general plan symbol](iec-luminaire-general-plan-symbol.md)

![Dimmer switch plan mark — original educational illustration](../artwork/svg/iec-dimmer-switch.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
