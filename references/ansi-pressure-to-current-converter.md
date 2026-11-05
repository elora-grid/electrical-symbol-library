# ANSI/IEEE pressure/current converter symbol

IEEE-library pressure-to-current converter form representing a transducer that turns process pressure into a loop current.

[Canonical reference](https://eloragrid.ai/symbols/ansi-pressure-to-current-converter) · [Structured record](../entries/ansi-pressure-to-current-converter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Autodesk IEEE-oriented Instrumentation and Sensors form: Pressure/Current Converter.

## What it represents

The pressure/current converter represents a transducer that measures pressure and produces a proportional electrical signal, typically a 4-20 mA loop. On control and protection schematics it appears where transformer, compressor or hydraulic pressure is passed to a PLC, relay or indicator.
The block does not tell you the pressure range, whether the output is two-wire loop-powered or four-wire, or whether the measurement is gauge, absolute or differential. Those details govern the wiring and the scaling at the receiving input.

## How to read it

- Identify whether the loop is powered by the receiver or the transducer.
- Check scaling of the output current to pressure range.

## Drawing checklist

- State pressure range and type
- Show loop power source
- Reference receiving input

## Important distinction

A pressure/current converter gives a continuous signal; a pressure switch gives only a contact change at a set point.

## Facts

- Convention evidence: Autodesk IEEE Symbol Preview, Instrumentation and Sensors
- Public vendor block name: HIN1B10 / VIN1B10 (Autodesk identifier; not an IEEE symbol number)
- Output: Analogue current signal proportional to pressure
- Artwork scope: Original functional illustration; exact standard glyph and compliance are not certified

## Public references

- [Autodesk IEEE Symbol Preview — Instrumentation and Sensors](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-F44D5059-4728-40BD-B9BA-0DE7CFDFAACF.htm) — Autodesk. Public IEEE-oriented Instrumentation and Sensors preview listing the Pressure/Current Converter block and its vendor identifier.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. Graphic-symbol standards context and official status; not a source of reproduced artwork.

## Related references

- [Pressure-to-current converter](iec-pressure-to-current-converter.md)
- [Pressure measurement interface](pressure-measurement-interface.md)
- [Analog current signal isolator](analog-current-signal-isolator.md)

![ANSI/IEEE pressure/current converter symbol — original educational illustration](../artwork/svg/ansi-pressure-to-current-converter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
