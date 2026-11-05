# Switchroom roof-leak detection interface

Maps the assigned overhead leak-detection circuit to its room alarm point.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-roof-leak-detection-interface) · [Structured record](../entries/switchroom-roof-leak-detection-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Roof leak detector
Leak location alarm

## What it represents

Maps the assigned overhead leak-detection circuit to its room alarm point. Environmental supervision turns measurements or contact states into clearly named room-service indications. A sensor measures a condition; the supervisory function decides whether the assigned alarm or control response is needed.
In a switchroom, water ingress, temperature, humidity and equipment-service alarms can be sent to the station controller with separate point names so an operator can identify the affected area. For this reference, the drawing identifies “Roof leak detector” at the input and “Leak location alarm” at the output. The sensing coverage must be identified.
Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Roof leak detector. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Leak location alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The sensing coverage must be identified.
- Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition.

## Drawing checklist

- Label the source and connection reference for roof leak detector.
- Identify the destination and defined state of leak location alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The sensing coverage must be identified.

## Important distinction

The sensing coverage must be identified. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Roof leak detector
- Output / connection: Leak location alarm
- Lookup label: SRDI is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom environmental supervision. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relative humidity sensor](relative-humidity-sensor.md)
- [Temperature indicator](temperature-indicator.md)
- [Switchroom enclosure heater-failure alarm](switchroom-enclosure-heater-failure-alarm.md)

![Switchroom roof-leak detection interface — original educational illustration](../artwork/svg/switchroom-roof-leak-detection-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
