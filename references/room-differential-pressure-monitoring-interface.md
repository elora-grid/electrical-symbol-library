# Room differential-pressure monitoring interface

Identifies the measured pressure difference used by the selected room ventilation strategy.

[Canonical reference](https://eloragrid.ai/symbols/room-differential-pressure-monitoring-interface) · [Structured record](../entries/room-differential-pressure-monitoring-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Room differential pressure
Pressure status signal

## What it represents

Identifies the measured pressure difference used by the selected room ventilation strategy. Environmental supervision turns measurements or contact states into clearly named room-service indications. A sensor measures a condition; the supervisory function decides whether the assigned alarm or control response is needed.
In a switchroom, water ingress, temperature, humidity and equipment-service alarms can be sent to the station controller with separate point names so an operator can identify the affected area. For this reference, the drawing identifies “Room differential pressure” at the input and “Pressure status signal” at the output. The required pressure regime is project-specific.
Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Room differential pressure. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Pressure status signal. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The required pressure regime is project-specific.
- Keep sensor location, alarm thresholds, delay and monitoring coverage in the room-services schedule. An environmental alarm is a diagnostic input, not a complete assessment of electrical equipment condition.

## Drawing checklist

- Label the source and connection reference for room differential pressure.
- Identify the destination and defined state of pressure status signal.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The required pressure regime is project-specific.

## Important distinction

The required pressure regime is project-specific. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Room differential pressure
- Output / connection: Pressure status signal
- Lookup label: RDMI is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom environmental supervision. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relative humidity sensor](relative-humidity-sensor.md)
- [Temperature indicator](temperature-indicator.md)
- [Switchroom filter-maintenance indication](switchroom-filter-maintenance-indication.md)

![Room differential-pressure monitoring interface — original educational illustration](../artwork/svg/room-differential-pressure-monitoring-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
