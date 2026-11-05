# Cable-basement flood-level alarm

Reports the specified water-level condition in the switchroom cable basement.

[Canonical reference](https://eloragrid.ai/symbols/cable-basement-flood-level-alarm) · [Structured record](../entries/cable-basement-flood-level-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Basement level measurement
Flood-level indication

## What it represents

Reports the specified water-level condition in the switchroom cable basement. Environmental supervision turns measurements or contact states into clearly named room-service indications. A sensor measures a condition; the supervisory function decides whether the assigned alarm or control response is needed.
In a switchroom, water ingress, temperature, humidity and equipment-service alarms can be sent to the station controller with separate point names so an operator can identify the affected area. For this reference, the drawing identifies “Basement level measurement” at the input and “Flood-level indication” at the output. Alarm levels require the drainage design.
Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Basement level measurement. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Flood-level indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Alarm levels require the drainage design.
- Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition.

## Drawing checklist

- Label the source and connection reference for basement level measurement.
- Identify the destination and defined state of flood-level indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Alarm levels require the drainage design.

## Important distinction

Alarm levels require the drainage design. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Basement level measurement
- Output / connection: Flood-level indication
- Lookup label: CFA is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom environmental supervision. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relative humidity sensor](relative-humidity-sensor.md)
- [Temperature indicator](temperature-indicator.md)
- [Cable-trench sump pump run interface](cable-trench-sump-pump-run-interface.md)

![Cable-basement flood-level alarm — original educational illustration](../artwork/svg/cable-basement-flood-level-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
