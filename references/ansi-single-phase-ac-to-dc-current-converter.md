# ANSI/IEEE single-phase AC-DC current converter symbol

IEEE-library current converter form that turns an AC measuring current into a scaled DC signal for remote indication.

[Canonical reference](https://eloragrid.ai/symbols/ansi-single-phase-ac-to-dc-current-converter) · [Structured record](../entries/ansi-single-phase-ac-to-dc-current-converter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Autodesk IEEE-oriented Instrumentation and Sensors form: AC-DC Current Converter Single Phase.

## What it represents

This converter takes an AC current, usually from a CT secondary, and produces a DC signal proportional to it for a PLC, SCADA input or remote meter. It sits in series with the CT circuit, so the CT secondary must remain closed through the converter input or a shorting link while it is removed.
The form does not state whether the output is average-responding or true RMS, the output range or the response time. Distorted currents from drives and rectifiers can be read quite differently by different converter types.

## How to read it

- Treat the input as part of the CT secondary loop.
- Check whether the converter is true RMS when harmonics are present.

## Drawing checklist

- Show CT ratio feeding the input
- State output signal range
- Provide CT shorting provision

## Important distinction

A current converter outputs a signal for other equipment; an ammeter displays the current itself.

## Facts

- Convention evidence: Autodesk IEEE Symbol Preview, Instrumentation and Sensors
- Public vendor block name: HIN1G1 / VIN1G1 (Autodesk identifier; not an IEEE symbol number)
- Input: AC current, usually from a CT secondary
- Artwork scope: Original functional illustration; exact standard glyph and compliance are not certified

## Public references

- [Autodesk IEEE Symbol Preview — Instrumentation and Sensors](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-F44D5059-4728-40BD-B9BA-0DE7CFDFAACF.htm) — Autodesk. Public IEEE-oriented Instrumentation and Sensors preview listing the AC-DC Current Converter Single Phase block and its vendor identifier.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. Graphic-symbol standards context and official status; not a source of reproduced artwork.

## Related references

- [Single-phase AC-to-DC current converter](iec-single-phase-ac-to-dc-current-converter.md)
- [ANSI/IEEE current transformer symbol](ansi-current-transformer.md)
- [CT test terminal](ct-test-terminal.md)

![ANSI/IEEE single-phase AC-DC current converter symbol — original educational illustration](../artwork/svg/ansi-single-phase-ac-to-dc-current-converter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
