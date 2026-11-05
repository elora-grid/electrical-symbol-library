# ANSI/IEEE tachometer symbol

IEEE-library tachometer instrument form showing where machine speed is indicated from a speed transducer.

[Canonical reference](https://eloragrid.ai/symbols/ansi-tachometer) · [Structured record](../entries/ansi-tachometer.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Autodesk IEEE-oriented Instrumentation and Sensors form: Tachometer.

## What it represents

The tachometer form shows an indicating instrument whose quantity is rotational speed. In motor and generator control schematics it is normally fed from a tacho-generator, pulse pickup or drive analogue output, so the source device is drawn separately and wired to the instrument circle.
The circle does not say whether speed is displayed in rpm, percent of rated speed or frequency, and it carries no overspeed protection function. Overspeed or underspeed trips use separate devices or contacts and should not be inferred from the presence of a tachometer.

## How to read it

- Identify the speed source feeding the meter.
- Check scaling between transducer output and displayed speed.

## Drawing checklist

- Reference the speed transducer
- State displayed units
- Show any separate overspeed contact

## Important distinction

A tachometer indicates speed; a tachometric dynamo or pulse pickup is the transducer that produces the speed signal.

## Facts

- Convention evidence: Autodesk IEEE Symbol Preview, Instrumentation and Sensors
- Public vendor block name: HIN1TAC / VIN1TAC (Autodesk identifier; not an IEEE symbol number)
- Measured quantity: Rotational speed
- Artwork scope: Original functional illustration; exact standard glyph and compliance are not certified

## Public references

- [Autodesk IEEE Symbol Preview — Instrumentation and Sensors](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-F44D5059-4728-40BD-B9BA-0DE7CFDFAACF.htm) — Autodesk. Public IEEE-oriented Instrumentation and Sensors preview listing the Tachometer block and its vendor identifier.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. Graphic-symbol standards context and official status; not a source of reproduced artwork.

## Related references

- [Tachometer](tachometer.md)
- [ANSI/IEEE tachometric dynamo symbol](ansi-tachometric-dynamo.md)
- [Impulse tachometric transducer](iec-impulse-tachometric-transducer.md)

![ANSI/IEEE tachometer symbol — original educational illustration](../artwork/svg/ansi-tachometer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
