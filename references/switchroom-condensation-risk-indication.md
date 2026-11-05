# Switchroom condensation-risk indication

Combines the specified environmental inputs into a defined condensation-risk indication.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-condensation-risk-indication) · [Structured record](../entries/switchroom-condensation-risk-indication.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Temperature and humidity measurements
Condensation-risk state

## What it represents

Combines the specified environmental inputs into a defined condensation-risk indication. Environmental supervision turns measurements or contact states into clearly named room-service indications. A sensor measures a condition; the supervisory function decides whether the assigned alarm or control response is needed.
In a switchroom, water ingress, temperature, humidity and equipment-service alarms can be sent to the station controller with separate point names so an operator can identify the affected area. For this reference, the drawing identifies “Temperature and humidity measurements” at the input and “Condensation-risk state” at the output. The calculation and sensor positions require definition.
Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Temperature and humidity measurements. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Condensation-risk state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The calculation and sensor positions require definition.
- Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition.

## Drawing checklist

- Label the source and connection reference for temperature and humidity measurements.
- Identify the destination and defined state of condensation-risk state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The calculation and sensor positions require definition.

## Important distinction

The calculation and sensor positions require definition. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Temperature and humidity measurements
- Output / connection: Condensation-risk state
- Lookup label: SCI is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom environmental supervision. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relative humidity sensor](relative-humidity-sensor.md)
- [Temperature indicator](temperature-indicator.md)
- [Switchroom humidity high alarm](switchroom-humidity-high-alarm.md)

![Switchroom condensation-risk indication — original educational illustration](../artwork/svg/switchroom-condensation-risk-indication.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
