# ANSI/IEEE thermometer symbol

IEEE-library thermometer instrument form for a local or panel temperature reading taken from a sensor input.

[Canonical reference](https://eloragrid.ai/symbols/ansi-temperature-indicator) · [Structured record](../entries/ansi-temperature-indicator.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Autodesk IEEE-oriented Instrumentation and Sensors form: Thermometer.

## What it represents

The thermometer form is an indicating instrument circle whose input is a temperature sensor rather than a power circuit. On control schematics it sits at the end of a thermocouple, RTD or transmitter loop, so the important connections are the sensor wiring and any compensation or lead-resistance arrangement.
The symbol identifies indication only. Alarm and trip set points belong to separate switch or relay contacts, and the measuring range, sensor type and accuracy class must be read from the instrument schedule because the circle carries none of that information.

## How to read it

- Follow the input back to the sensor and note its type (thermocouple, RTD or transmitter).
- Look for separate contacts if the instrument also gives alarms.

## Drawing checklist

- Name the sensor and its location
- State the range and units
- Reference any alarm or trip contacts

## Important distinction

A thermometer indicates temperature; a temperature switch changes contact state at a set point and may have no display at all.

## Facts

- Convention evidence: Autodesk IEEE Symbol Preview, Instrumentation and Sensors
- Public vendor block name: HIN1THM / VIN1THM (Autodesk identifier; not an IEEE symbol number)
- Typical inputs: Thermocouple, RTD or 4-20 mA transmitter
- Artwork scope: Original functional illustration; exact standard glyph and compliance are not certified

## Public references

- [Autodesk IEEE Symbol Preview — Instrumentation and Sensors](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-F44D5059-4728-40BD-B9BA-0DE7CFDFAACF.htm) — Autodesk. Public IEEE-oriented Instrumentation and Sensors preview listing the Thermometer block and its vendor identifier.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. Graphic-symbol standards context and official status; not a source of reproduced artwork.

## Related references

- [Temperature indicator](temperature-indicator.md)
- [Thermocouple](thermocouple.md)
- [Resistance temperature detector](resistance-temperature-detector.md)

![ANSI/IEEE thermometer symbol — original educational illustration](../artwork/svg/ansi-temperature-indicator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
