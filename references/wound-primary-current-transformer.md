# Wound-primary current transformer

CT with a primary winding of several turns, used for low primary currents where a bar primary gives too little accuracy.

[Canonical reference](https://eloragrid.ai/symbols/wound-primary-current-transformer) · [Structured record](../entries/wound-primary-current-transformer.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, Manufacturer.

## What it represents

A wound-primary CT has a primary winding of more than one turn rather than a single bar or conductor through a window. This is needed at low primary currents, where a single turn would not produce enough magnetising ampere-turns for accurate metering, and it is common in MV metering units.
The wound primary has a lower short-time withstand than a bar primary, so its thermal and dynamic ratings need checking against the fault level. The symbol shows the winding but not those ratings, which belong in the CT schedule.

## How to read it

- Check the short-time thermal rating against the fault level.
- Read primary terminals P1 and P2 for polarity.

## Drawing checklist

- State ratio and class
- Give short-time rating
- Show polarity marks

## Important distinction

A wound-primary CT has a multi-turn primary; a window or bar CT uses the circuit conductor as a single-turn primary.

## Facts

- Primary: Multi-turn winding
- Typical use: Low primary currents and metering units
- Preview: Independent educational concept; consult the applicable standard and project legend for the exact graphic

## Public references

- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public manufacturer overview of indoor current and voltage instrument transformers.
- [Current transformer symbol variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-40AAEF4A-AC3F-4B3D-90A5-A9E0707C1241.htm) — Autodesk. Public AutoCAD Electrical current transformer family used for context; this variant is independently drawn.

## Related references

- [Current transformer](current-transformer.md)
- [ANSI/IEEE current transformer with conductor indication symbol](ansi-current-transformer-with-primary-conductor-indication.md)
- [Combined instrument transformer](combined-instrument-transformer.md)

![Wound-primary current transformer — original educational illustration](../artwork/svg/wound-primary-current-transformer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
