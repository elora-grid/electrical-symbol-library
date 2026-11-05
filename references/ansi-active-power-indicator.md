# ANSI/IEEE active power indicator symbol

IEEE-library wattmeter form for indicating active power from combined current and voltage inputs.

[Canonical reference](https://eloragrid.ai/symbols/ansi-active-power-indicator) · [Structured record](../entries/ansi-active-power-indicator.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Autodesk IEEE-oriented Instrumentation and Sensors form: Active Power Indicator.

## What it represents

The active power indicator, usually labelled W or kW, needs both current and voltage inputs. On a single-line diagram it is drawn off the CT and VT secondaries of a feeder or generator, and on a schematic its current coils sit in series with the CT circuit while its voltage elements are connected across the VT secondary.
Whether the instrument measures one phase, three-phase three-wire or three-phase four-wire power is not visible from the circle. Element count, direction convention for import and export, and the CT and VT ratios used for scaling all need to be read from the meter data and connection diagram.

## How to read it

- Trace both the CT and VT connections to the meter.
- Check the number of measuring elements against the system wiring.

## Drawing checklist

- Show CT and VT ratios
- State element configuration
- Define positive power direction

## Important distinction

An active power indicator shows instantaneous watts; a recording wattmeter keeps a time record and a kWh meter integrates energy.

## Facts

- Convention evidence: Autodesk IEEE Symbol Preview, Instrumentation and Sensors
- Public vendor block name: HIN1P19 / VIN1P19 (Autodesk identifier; not an IEEE symbol number)
- Inputs: Current and voltage from the same measuring point
- Artwork scope: Original functional illustration; exact standard glyph and compliance are not certified

## Public references

- [Autodesk IEEE Symbol Preview — Instrumentation and Sensors](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-F44D5059-4728-40BD-B9BA-0DE7CFDFAACF.htm) — Autodesk. Public IEEE-oriented Instrumentation and Sensors preview listing the Active Power Indicator block and its vendor identifier.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. Graphic-symbol standards context and official status; not a source of reproduced artwork.

## Related references

- [Active-power indicator](active-power-indicator.md)
- [ANSI/IEEE recording wattmeter symbol](ansi-recording-wattmeter.md)
- [ANSI/IEEE reactive-power meter symbol](ansi-reactive-power-meter.md)

![ANSI/IEEE active power indicator symbol — original educational illustration](../artwork/svg/ansi-active-power-indicator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
