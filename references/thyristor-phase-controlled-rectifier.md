# Thyristor phase-controlled rectifier

An AC-to-DC converter using thyristors fired at a controlled angle to set its DC output voltage.

[Canonical reference](https://eloragrid.ai/symbols/thyristor-phase-controlled-rectifier) · [Structured record](../entries/thyristor-phase-controlled-rectifier.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A phase-controlled rectifier uses thyristors instead of diodes, so the firing angle sets the average DC output voltage. Six-pulse bridges are widely used for large battery chargers, electrolysers, DC drives and older UPS rectifiers because they are robust and simple to control.
On single-line diagrams it appears as the rectifier box with AC and DC marks plus a thyristor or control qualifier, or as a bridge of thyristor symbols on detailed schematics. A rectifier transformer, line reactor and harmonic filter are often drawn upstream.
Reducing the output voltage by delaying firing also lowers the input power factor, and the converter draws characteristic harmonics at 5th, 7th, 11th and 13th orders. The symbol does not show these effects, which must be assessed with the network harmonic study.

## How to read it

- A thyristor mark inside or beside the rectifier block distinguishes it from a diode rectifier.
- Expect harmonic filtering or a phase-shifting transformer on large units.

## Drawing checklist

- State pulse number and DC rating.
- Show rectifier transformer and line reactor.
- Reference harmonic study and filter design.

## Important distinction

A phase-controlled rectifier sets voltage by firing angle; an active front-end rectifier uses switched transistors and can run near unity power factor.

## Facts

- Switching device: Thyristor
- Control: Firing angle
- Characteristic harmonics: 6k plus or minus 1 for a six-pulse bridge
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [AutoCAD Electrical: Semiconductor components](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-AC954072-7314-4682-88AF-38160D61E9A2.htm) — Autodesk. Public semiconductor symbol family including thyristor forms.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context for converters.

## Related references

- [Silicon-controlled rectifier](silicon-controlled-rectifier.md)
- [Three-phase bridge rectifier](three-phase-bridge-rectifier.md)
- [Twelve-pulse rectifier](twelve-pulse-rectifier.md)
- [Active front-end rectifier](active-front-end-rectifier.md)

![Thyristor phase-controlled rectifier — original educational illustration](../artwork/svg/thyristor-phase-controlled-rectifier.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
