# Cable-trench sump high-level interface

Receives the documented high-level condition used by the drainage supervisory scheme.

[Canonical reference](https://eloragrid.ai/symbols/cable-trench-sump-high-level-interface) · [Structured record](../entries/cable-trench-sump-high-level-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Sump level contact
High-level alarm

## What it represents

Receives the documented high-level condition used by the drainage supervisory scheme. Environmental supervision turns measurements or contact states into clearly named room-service indications. A sensor measures a condition; the supervisory function decides whether the assigned alarm or control response is needed.
In a switchroom, water ingress, temperature, humidity and equipment-service alarms can be sent to the station controller with separate point names so an operator can identify the affected area. For this reference, the drawing identifies “Sump level contact” at the input and “High-level alarm” at the output. Pump control and high-level alarm are separate functions.
Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Sump level contact. Identify its source device or document and the state represented on the drawing.
- Follow the named output: High-level alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Pump control and high-level alarm are separate functions.
- Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition.

## Drawing checklist

- Label the source and connection reference for sump level contact.
- Identify the destination and defined state of high-level alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Pump control and high-level alarm are separate functions.

## Important distinction

Pump control and high-level alarm are separate functions. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Sump level contact
- Output / connection: High-level alarm
- Lookup label: CSHI is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom environmental supervision. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relative humidity sensor](relative-humidity-sensor.md)
- [Temperature indicator](temperature-indicator.md)
- [Switchroom condensation-risk indication](switchroom-condensation-risk-indication.md)

![Cable-trench sump high-level interface — original educational illustration](../artwork/svg/cable-trench-sump-high-level-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
