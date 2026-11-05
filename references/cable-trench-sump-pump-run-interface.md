# Cable-trench sump pump run interface

Carries the assigned drainage pump's operating feedback to room supervision.

[Canonical reference](https://eloragrid.ai/symbols/cable-trench-sump-pump-run-interface) · [Structured record](../entries/cable-trench-sump-pump-run-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Sump pump run contact
Pump running indication

## What it represents

Carries the assigned drainage pump's operating feedback to room supervision. Environmental supervision turns measurements or contact states into clearly named room-service indications. A sensor measures a condition; the supervisory function decides whether the assigned alarm or control response is needed.
In a switchroom, water ingress, temperature, humidity and equipment-service alarms can be sent to the station controller with separate point names so an operator can identify the affected area. For this reference, the drawing identifies “Sump pump run contact” at the input and “Pump running indication” at the output. Running feedback does not prove successful drainage.
Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Sump pump run contact. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Pump running indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Running feedback does not prove successful drainage.
- Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition.

## Drawing checklist

- Label the source and connection reference for sump pump run contact.
- Identify the destination and defined state of pump running indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Running feedback does not prove successful drainage.

## Important distinction

Running feedback does not prove successful drainage. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Sump pump run contact
- Output / connection: Pump running indication
- Lookup label: CSPRI is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom environmental supervision. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relative humidity sensor](relative-humidity-sensor.md)
- [Temperature indicator](temperature-indicator.md)
- [Cable-trench sump high-level interface](cable-trench-sump-high-level-interface.md)

![Cable-trench sump pump run interface — original educational illustration](../artwork/svg/cable-trench-sump-pump-run-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
