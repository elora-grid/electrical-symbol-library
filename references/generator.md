# Generator

An electrical generating source represented in a power-system drawing.

[Canonical reference](https://eloragrid.ai/symbols/generator) · [Structured record](../entries/generator.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A generator representation identifies an electrical source in a power system. Its electrical connections and associated switching describe how it supplies the system. The equipment documentation establishes machine type, rating, voltage, earthing and operating capabilities.
Generator systems can also include transfer controls, synchronising, protection and paralleling equipment. These functions should be identified separately rather than compressed into a single generic generator mark. A GA drawing provides the physical package and interface information.

## How to read it

- Follow the generator connection through the associated switching and protection.
- Identify whether the drawing describes standby transfer, parallel operation or another documented system arrangement.

## Drawing checklist

- Reference the generator equipment schedule.
- Cross-reference switching, control and protection.
- Link the package GA and installation interfaces.

## Important distinction

A generator symbol identifies an electrical source. It does not establish permission to parallel with another source or define the transfer sequence.

## Facts

- Role: Electrical source
- Operating arrangement: Documented at system level
- Physical package: Separate GA and equipment reference
- Public Autodesk reference names: HPW1G7, VPW1G7 (vendor identifiers, not IEC symbol IDs)

## Public references

- [Generator symbol variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-09BE3BB5-9118-4302-8061-3888692E538F.htm) — Autodesk. Public generator types and representations.
- [Generator switchgear and paralleling controls](https://www.cummins.com/en-na/generators/products/switchgear) — Cummins. Manufacturer generator switchgear and controls context.

## Related references

- [Generator package](generator-package.md)
- [Transfer-switch assembly](transfer-switch.md)
- [Synchronism check](25-synchronism-check.md)
- [Directional power](32-directional-power.md)

![Generator — original educational illustration](../artwork/svg/generator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
