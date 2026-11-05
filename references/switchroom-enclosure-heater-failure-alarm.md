# Switchroom enclosure heater-failure alarm

Reports the defined failure condition of an enclosure conditioning-heater circuit.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-enclosure-heater-failure-alarm) · [Structured record](../entries/switchroom-enclosure-heater-failure-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Heater command and feedback
Heater fault indication

## What it represents

Reports the defined failure condition of an enclosure conditioning-heater circuit. Environmental supervision turns measurements or contact states into clearly named room-service indications. A sensor measures a condition; the supervisory function decides whether the assigned alarm or control response is needed.
In a switchroom, water ingress, temperature, humidity and equipment-service alarms can be sent to the station controller with separate point names so an operator can identify the affected area. For this reference, the drawing identifies “Heater command and feedback” at the input and “Heater fault indication” at the output. Heating effectiveness needs more than command status.
Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Heater command and feedback. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Heater fault indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Heating effectiveness needs more than command status.
- Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition.

## Drawing checklist

- Label the source and connection reference for heater command and feedback.
- Identify the destination and defined state of heater fault indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Heating effectiveness needs more than command status.

## Important distinction

Heating effectiveness needs more than command status. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Heater command and feedback
- Output / connection: Heater fault indication
- Lookup label: SEHA is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom environmental supervision. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relative humidity sensor](relative-humidity-sensor.md)
- [Temperature indicator](temperature-indicator.md)
- [Switchroom environmental alarm delay block](switchroom-environmental-alarm-delay-block.md)

![Switchroom enclosure heater-failure alarm — original educational illustration](../artwork/svg/switchroom-enclosure-heater-failure-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
