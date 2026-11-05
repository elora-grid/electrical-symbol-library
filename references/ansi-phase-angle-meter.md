# ANSI/IEEE phase-angle meter symbol

IEEE-library form of the phase meter, used where a drawing must show where the angle between two measured quantities is read.

[Canonical reference](https://eloragrid.ai/symbols/ansi-phase-angle-meter) · [Structured record](../entries/ansi-phase-angle-meter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Autodesk IEEE-oriented Instrumentation and Sensors form: Phase Meter.

## What it represents

In IEEE-oriented panel schematics the phase meter appears as a circular instrument fed from both a voltage reference and a current or second voltage input. The reading is the angle between those two inputs, so the symbol only makes sense when both connections are traced back to their instrument transformers and their polarity marks.
The circle and label identify an indicating instrument, not a protection function. It does not tell you the reference convention (leading or lagging positive), the frequency range or whether the meter is analogue or a digital display; those come from the instrument schedule and the vendor data.

## How to read it

- Confirm which voltage is the reference and which quantity is compared against it.
- Check CT and VT polarity dots, because a reversed input shifts the reading by 180 degrees.

## Drawing checklist

- Identify the reference voltage input
- Show polarity of the compared input
- State the scale or angle convention

## Important distinction

A phase-angle meter reads an angle; a power-factor meter reads the cosine of that angle and is scaled lead/lag around unity.

## Facts

- Convention evidence: Autodesk IEEE Symbol Preview, Instrumentation and Sensors
- Public vendor block name: HIN1PHM / VIN1PHM (Autodesk identifier; not an IEEE symbol number)
- Inputs: Reference voltage plus a second voltage or current
- Artwork scope: Original functional illustration; exact standard glyph and compliance are not certified

## Public references

- [Autodesk IEEE Symbol Preview — Instrumentation and Sensors](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-F44D5059-4728-40BD-B9BA-0DE7CFDFAACF.htm) — Autodesk. Public IEEE-oriented Instrumentation and Sensors preview listing the Phase Meter block and its vendor identifier.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. Graphic-symbol standards context and official status; not a source of reproduced artwork.

## Related references

- [Phase-angle meter](phase-angle-meter.md)
- [ANSI/IEEE power-factor meter symbol](ansi-power-factor-meter.md)
- [ANSI/IEEE voltmeter symbol](ansi-voltmeter.md)

![ANSI/IEEE phase-angle meter symbol — original educational illustration](../artwork/svg/ansi-phase-angle-meter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
