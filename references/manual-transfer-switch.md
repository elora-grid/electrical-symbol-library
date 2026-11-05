# Manual transfer switch

An operator-moved changeover switch that selects which of two sources supplies a load, with an off position between them.

[Canonical reference](https://eloragrid.ai/symbols/manual-transfer-switch) · [Structured record](../entries/manual-transfer-switch.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A manual transfer switch is a changeover switch operated by hand, usually with three positions: source 1, off and source 2. It is common where a portable or small standby generator connects through an inlet, and as a maintenance or bypass switch in larger systems where automatic transfer is not required.
The drawing is a changeover contact with a manual operator mark, often labelled I-0-II, with the two sources above and the load below. The mechanical design prevents both sources being connected at once.
The symbol does not tell you whether the switch can be operated on load, or whether the neutral is switched. Operating procedures, including starting the generator before moving the switch, belong in the operating instructions.

## How to read it

- The off position between sources is part of the safety function.
- Check whether the switch is rated for on-load operation.

## Drawing checklist

- State rating, poles and positions.
- Show the generator inlet or second source.
- Reference operating procedure.

## Important distinction

A manual transfer switch relies on an operator; an automatic transfer switch senses source failure and acts on its own.

## Facts

- Positions: Source 1, off, source 2
- Operation: Manual
- Typical use: Portable generator or maintenance bypass
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Transfer switch fundamentals](https://www.cummins.com/sites/default/files/2026-04/2023-sep-transfer-switch-fundamentals.pdf) — Cummins. Public transfer switch fundamentals.
- [Autodesk IEC-60617 preview: Operating-device and function qualifiers](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-3598E18D-9F8A-48CE-83D0-4CEBA0AE869C.htm) — Autodesk. Public IEC-context operating-device qualifier family for the manual operator mark.

## Related references

- [Automatic transfer switch](automatic-transfer-switch.md)
- [Manual transfer or selector device](43-manual-transfer-or-selector-device.md)
- [Transfer-switch assembly](transfer-switch.md)
- [Single-phase synchronous generator](single-phase-synchronous-generator.md)

![Manual transfer switch — original educational illustration](../artwork/svg/manual-transfer-switch.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
