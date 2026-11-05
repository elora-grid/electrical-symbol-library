# Lighting presence detector plan mark

Plan mark for a ceiling or wall sensor that switches lighting automatically according to occupancy.

[Canonical reference](https://eloragrid.ai/symbols/iec-presence-detector-lighting) · [Structured record](../entries/iec-presence-detector-lighting.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: GA. Reference families: IEC.

Graphical convention: IEC. Presence detector for lighting.

## What it represents

Lighting presence detectors switch or dim luminaires according to occupancy, usually by passive infrared or microwave sensing. Plans show a small circle or square with a detection mark, often with the coverage radius drawn so designers can check the area is covered.
The plan should also show whether the detector operates in presence mode (automatic on and off) or absence mode (manual on, automatic off) and whether it includes a daylight sensor. These settings strongly affect energy performance and are often stated in a lighting control schedule.
This lighting sensor is distinct from an intruder alarm motion detector even when the sensing principle is the same. The two belong to different systems with different wiring and standards.

## How to read it

- Check the coverage pattern against the room geometry.
- Confirm whether the sensor controls a switching relay, a DALI group or a local load directly.

## Drawing checklist

- State presence or absence mode.
- Show coverage radius.
- Link the controlled luminaire groups.

## Important distinction

An intruder motion detector reports to an alarm panel; a lighting presence detector controls luminaires.

## Facts

- Sensing: Passive infrared, microwave or dual technology
- System: Lighting control, not security
- Exact standard graphic: Not reproduced here; confirm the form against IEC 60617 and the project legend

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context; independently drawn here.
- [Autodesk IEC-60617 preview: Radiation qualifiers](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-EABC81B4-549D-49C9-A0F5-086DD204A689.htm) — Autodesk. Public IEC-oriented radiation qualifiers relevant to infrared sensing marks.

## Related references

- [Intruder motion detector plan symbol](iec-intruder-motion-detector.md)
- [Luminaire general plan symbol](iec-luminaire-general-plan-symbol.md)
- [Photoelectric light switch plan mark](iec-photoelectric-light-switch.md)

![Lighting presence detector plan mark — original educational illustration](../artwork/svg/iec-presence-detector-lighting.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
