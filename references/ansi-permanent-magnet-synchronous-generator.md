# ANSI/IEEE permanent-magnet synchronous generator symbol

IEEE-oriented library form of a three-phase synchronous generator with permanent-magnet excitation, with reading notes.

[Canonical reference](https://eloragrid.ai/symbols/ansi-permanent-magnet-synchronous-generator) · [Structured record](../entries/ansi-permanent-magnet-synchronous-generator.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Autodesk IEEE-oriented 3 Phase Synchro Generator with Permanent Magnets functional form.

## What it represents

This entry covers the permanent-magnet synchronous generator as it appears in an IEEE-oriented drawing library. The machine has a magnet rotor and no field winding, so output voltage rises with speed and cannot be trimmed by an excitation regulator; voltage control is done by the converter or by the load.
Within IEEE-style one-line and schematic drawings the machine is a circle with the generator letter and a magnet indication, with three output leads. The block identifier quoted here is a vendor library name and only meaningful inside that library. This is a convention-specific lookup; the geometry is independently drawn and is not a certified reproduction of the standard graphic.

## How to read it

- Expect a converter or rectifier immediately downstream; a permanent-magnet machine rarely connects directly to a fixed-frequency bus.
- Read the vendor block name only within the library it belongs to.

## Drawing checklist

- State rated speed and voltage at that speed.
- Show the converter or rectifier interface.
- Cross-reference the counterpart IEC-style entry where both conventions are used.

## Important distinction

A permanent-magnet generator has no field winding to regulate; a wound-field synchronous generator has an exciter and regulator.

## Facts

- Convention evidence: Autodesk IEEE Symbol Preview, Generators
- Public vendor block name: HPW1G6, VPW1G6 (Autodesk identifiers; not IEEE symbol numbers)
- Standards context: IEEE/ANSI 315-1975 covers diagram graphics
- Artwork scope: Original functional illustration; exact standard glyph and compliance are not certified

## Public references

- [Autodesk IEEE Symbol Preview — Generators](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-6A9FA93B-3010-4274-AE51-20DB3520999C.htm) — Autodesk. Public IEEE-oriented generator category page listing the permanent-magnet synchronous generator block.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. Graphic-symbol standards context; not a source of reproduced artwork.

## Related references

- [Permanent-magnet synchronous generator](permanent-magnet-synchronous-generator.md)
- [ANSI/IEEE three-phase synchronous generator symbol](ansi-three-phase-synchronous-generator.md)
- [Full-converter wind turbine generator (Type 4)](full-converter-wind-turbine-generator.md)

![ANSI/IEEE permanent-magnet synchronous generator symbol — original educational illustration](../artwork/svg/ansi-permanent-magnet-synchronous-generator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
