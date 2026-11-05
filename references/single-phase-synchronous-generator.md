# Single-phase synchronous generator

A synchronous alternator delivering a single-phase output, common on small portable and standby generating sets.

[Canonical reference](https://eloragrid.ai/symbols/single-phase-synchronous-generator) · [Structured record](../entries/single-phase-synchronous-generator.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

This symbol identifies a synchronous generator with a single-phase output, usually two terminals or a split winding giving 120/240 V. Small standby and portable sets, and some hybrid off-grid systems, use this type because their loads are single-phase.
The generator circle carries G with a single-phase AC mark. Where a centre-tapped or split winding is used, two output leads plus a neutral are drawn, and a bonding link between neutral and earth may be shown at the set or at the main switchboard.
The symbol does not tell you the voltage regulation method, whether the winding is reconnectable or where the neutral is bonded. Those are critical for safe earthing, so they need explicit notes on the drawing.

## How to read it

- Count output conductors to tell a plain two-wire output from a split-phase winding.
- Locate the neutral-earth bond; it should exist in one place only.

## Drawing checklist

- State voltage, frequency and kVA.
- Show neutral bonding location.
- Reference the transfer arrangement to the installation.

## Important distinction

A single-phase generator has one output phase; a three-phase synchronous generator has three phase outputs and often a star neutral.

## Facts

- Output: Single-phase AC
- Typical use: Small standby and portable sets
- Earthing detail: Neutral bond location must be shown
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Generator symbol variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-09BE3BB5-9118-4302-8061-3888692E538F.htm) — Autodesk. Public generator symbol family context.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context for AC qualifiers; no reproduced artwork.

## Related references

- [Three-phase synchronous generator](three-phase-synchronous-generator.md)
- [Single-phase AC source](single-phase-ac-source.md)
- [Generator](generator.md)
- [Manual transfer switch](manual-transfer-switch.md)

![Single-phase synchronous generator — original educational illustration](../artwork/svg/single-phase-synchronous-generator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
