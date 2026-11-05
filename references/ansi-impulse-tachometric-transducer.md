# ANSI/IEEE impulse tachometric dynamo symbol

IEEE-library impulse tacho form for a speed sensor that outputs pulses at a rate set by shaft speed.

[Canonical reference](https://eloragrid.ai/symbols/ansi-impulse-tachometric-transducer) · [Structured record](../entries/ansi-impulse-tachometric-transducer.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Autodesk IEEE-oriented Instrumentation and Sensors form: Tachometric Dynamo - Impulse.

## What it represents

The impulse form represents a speed transducer whose output is a pulse train, for example a magnetic pickup reading gear teeth or a pulse generator on the shaft. The receiving device counts pulses, so the number of pulses per revolution is the scaling factor that must accompany the symbol.
Pulse transducers may be passive magnetic pickups with amplitude rising with speed, or active sensors needing a supply. The symbol does not distinguish these, so supply wiring and input type at the receiver should be checked separately.

## How to read it

- Record pulses per revolution for scaling.
- Check whether the sensor is passive or needs a supply.

## Drawing checklist

- State pulses per revolution
- Show sensor supply if active
- Use screened cable to the counter input

## Important distinction

An impulse transducer outputs a pulse rate; a tachometric dynamo outputs an analogue voltage.

## Facts

- Convention evidence: Autodesk IEEE Symbol Preview, Instrumentation and Sensors
- Public vendor block name: HIN1B12 / VIN1B12 (Autodesk identifier; not an IEEE symbol number)
- Output: Pulse train whose rate follows shaft speed
- Artwork scope: Original functional illustration; exact standard glyph and compliance are not certified

## Public references

- [Autodesk IEEE Symbol Preview — Instrumentation and Sensors](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-F44D5059-4728-40BD-B9BA-0DE7CFDFAACF.htm) — Autodesk. Public IEEE-oriented Instrumentation and Sensors preview listing the Tachometric Dynamo - Impulse block and its vendor identifier.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. Graphic-symbol standards context and official status; not a source of reproduced artwork.

## Related references

- [Impulse tachometric transducer](iec-impulse-tachometric-transducer.md)
- [ANSI/IEEE tachometric dynamo symbol](ansi-tachometric-dynamo.md)
- [ANSI/IEEE tachometer symbol](ansi-tachometer.md)

![ANSI/IEEE impulse tachometric dynamo symbol — original educational illustration](../artwork/svg/ansi-impulse-tachometric-transducer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
