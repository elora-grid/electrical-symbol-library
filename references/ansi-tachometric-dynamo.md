# ANSI/IEEE tachometric dynamo symbol

IEEE-library tacho-generator form: a small machine on the shaft that produces a voltage proportional to speed.

[Canonical reference](https://eloragrid.ai/symbols/ansi-tachometric-dynamo) · [Structured record](../entries/ansi-tachometric-dynamo.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Autodesk IEEE-oriented Instrumentation and Sensors form: Tachometric Dynamo.

## What it represents

A tachometric dynamo is a small generator coupled to the machine shaft whose output voltage rises with speed. It appears in older drive, governor and speed-indication schematics, with its output wired to a tachometer, speed relay or drive feedback input.
The symbol does not say whether the output is DC with polarity indicating direction, or AC with frequency and voltage both varying. Volts per 1000 rpm and ripple are key to the receiving input and come from the machine data.

## How to read it

- Check whether output polarity is used to detect direction.
- Read the volts-per-speed constant from the data sheet.

## Drawing checklist

- State output constant
- Show polarity or phase
- Reference the receiving input

## Important distinction

A tachometric dynamo generates a speed signal; a pulse (impulse) pickup produces pulses that must be counted.

## Facts

- Convention evidence: Autodesk IEEE Symbol Preview, Instrumentation and Sensors
- Public vendor block name: HIN1B11 / VIN1B11 (Autodesk identifier; not an IEEE symbol number)
- Output: Voltage proportional to shaft speed
- Artwork scope: Original functional illustration; exact standard glyph and compliance are not certified

## Public references

- [Autodesk IEEE Symbol Preview — Instrumentation and Sensors](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-F44D5059-4728-40BD-B9BA-0DE7CFDFAACF.htm) — Autodesk. Public IEEE-oriented Instrumentation and Sensors preview listing the Tachometric Dynamo block and its vendor identifier.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. Graphic-symbol standards context and official status; not a source of reproduced artwork.

## Related references

- [Tachometric dynamo](iec-tachometric-dynamo.md)
- [ANSI/IEEE tachometer symbol](ansi-tachometer.md)
- [ANSI/IEEE impulse tachometric dynamo symbol](ansi-impulse-tachometric-transducer.md)

![ANSI/IEEE tachometric dynamo symbol — original educational illustration](../artwork/svg/ansi-tachometric-dynamo.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
