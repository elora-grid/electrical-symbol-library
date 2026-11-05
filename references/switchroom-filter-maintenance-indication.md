# Switchroom filter-maintenance indication

Receives the installed ventilation system's declared filter-service requirement.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-filter-maintenance-indication) · [Structured record](../entries/switchroom-filter-maintenance-indication.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Filter service output
Maintenance indication

## What it represents

Receives the installed ventilation system's declared filter-service requirement. Environmental supervision turns measurements or contact states into clearly named room-service indications. A sensor measures a condition; the supervisory function decides whether the assigned alarm or control response is needed.
In a switchroom, water ingress, temperature, humidity and equipment-service alarms can be sent to the station controller with separate point names so an operator can identify the affected area. For this reference, the drawing identifies “Filter service output” at the input and “Maintenance indication” at the output. Service indication differs from complete ventilation failure.
Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Filter service output. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Maintenance indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Service indication differs from complete ventilation failure.
- Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition.

## Drawing checklist

- Label the source and connection reference for filter service output.
- Identify the destination and defined state of maintenance indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Service indication differs from complete ventilation failure.

## Important distinction

Service indication differs from complete ventilation failure. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Filter service output
- Output / connection: Maintenance indication
- Lookup label: SFI is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom environmental supervision. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relative humidity sensor](relative-humidity-sensor.md)
- [Temperature indicator](temperature-indicator.md)
- [Switchroom roof-leak detection interface](switchroom-roof-leak-detection-interface.md)

![Switchroom filter-maintenance indication — original educational illustration](../artwork/svg/switchroom-filter-maintenance-indication.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
