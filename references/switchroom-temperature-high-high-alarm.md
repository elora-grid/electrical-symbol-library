# Switchroom temperature high-high alarm

Distinguishes the documented high-high condition from an earlier temperature warning.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-temperature-high-high-alarm) · [Structured record](../entries/switchroom-temperature-high-high-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Room temperature measurement
High-high temperature alarm

## What it represents

Distinguishes the documented high-high condition from an earlier temperature warning. Environmental supervision turns measurements or contact states into clearly named room-service indications. A sensor measures a condition; the supervisory function decides whether the assigned alarm or control response is needed.
In a switchroom, water ingress, temperature, humidity and equipment-service alarms can be sent to the station controller with separate point names so an operator can identify the affected area. For this reference, the drawing identifies “Room temperature measurement” at the input and “High-high temperature alarm” at the output. Any shutdown action needs a separately specified scheme.
Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Room temperature measurement. Identify its source device or document and the state represented on the drawing.
- Follow the named output: High-high temperature alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Any shutdown action needs a separately specified scheme.
- Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition.

## Drawing checklist

- Label the source and connection reference for room temperature measurement.
- Identify the destination and defined state of high-high temperature alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Any shutdown action needs a separately specified scheme.

## Important distinction

Any shutdown action needs a separately specified scheme. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Room temperature measurement
- Output / connection: High-high temperature alarm
- Lookup label: STHA is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom environmental supervision. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relative humidity sensor](relative-humidity-sensor.md)
- [Temperature indicator](temperature-indicator.md)
- [Switchroom cooling-failure escalation interface](switchroom-cooling-failure-escalation-interface.md)

![Switchroom temperature high-high alarm — original educational illustration](../artwork/svg/switchroom-temperature-high-high-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
