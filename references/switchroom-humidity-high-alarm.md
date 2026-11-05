# Switchroom humidity high alarm

Reports humidity exceeding the defined supervision condition at the monitored location.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-humidity-high-alarm) · [Structured record](../entries/switchroom-humidity-high-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Room humidity measurement
High-humidity indication

## What it represents

Reports humidity exceeding the defined supervision condition at the monitored location. Environmental supervision turns measurements or contact states into clearly named room-service indications. A sensor measures a condition; the supervisory function decides whether the assigned alarm or control response is needed.
In a switchroom, water ingress, temperature, humidity and equipment-service alarms can be sent to the station controller with separate point names so an operator can identify the affected area. For this reference, the drawing identifies “Room humidity measurement” at the input and “High-humidity indication” at the output. Relative humidity varies with temperature.
Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Room humidity measurement. Identify its source device or document and the state represented on the drawing.
- Follow the named output: High-humidity indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Relative humidity varies with temperature.
- Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition.

## Drawing checklist

- Label the source and connection reference for room humidity measurement.
- Identify the destination and defined state of high-humidity indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Relative humidity varies with temperature.

## Important distinction

Relative humidity varies with temperature. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Room humidity measurement
- Output / connection: High-humidity indication
- Lookup label: SHHA is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom environmental supervision. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relative humidity sensor](relative-humidity-sensor.md)
- [Temperature indicator](temperature-indicator.md)
- [Switchroom environmental sensor-fault alarm](switchroom-environmental-sensor-fault-alarm.md)

![Switchroom humidity high alarm — original educational illustration](../artwork/svg/switchroom-humidity-high-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
