# Switchroom high-temperature ventilation demand

Generates a ventilation request from the monitored room-temperature condition.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-high-temperature-ventilation-demand) · [Structured record](../entries/switchroom-high-temperature-ventilation-demand.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Room temperature
Ventilation demand

## What it represents

Generates a ventilation request from the monitored room-temperature condition. Ventilation control coordinates the equipment that manages heat and air movement in an electrical room. A temperature request, a fan command and proof of airflow are separate signals, and the room design determines how they interact.
In a switchroom containing transformers and auxiliary panels, the room controller can supervise fan availability and send an alarm when the documented ventilation duty is not achieved. For this reference, the drawing identifies “Room temperature” at the input and “Ventilation demand” at the output. Thresholds belong to the thermal design.
Identify the monitored space, the selected ventilation mode and the equipment feedback. Avoid inferring airflow, temperature limits or a fire response from a generic fan symbol; these require the room-services design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Room temperature. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Ventilation demand. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Thresholds belong to the thermal design.
- Identify the monitored space, the selected ventilation mode and the equipment feedback. Avoid inferring airflow, temperature limits or a fire response from a generic fan symbol; these require the room-services design.

## Drawing checklist

- Label the source and connection reference for room temperature.
- Identify the destination and defined state of ventilation demand.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Thresholds belong to the thermal design.

## Important distinction

Thresholds belong to the thermal design. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Room temperature
- Output / connection: Ventilation demand
- Lookup label: SHVD is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom ventilation interfaces. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Switchroom exhaust fan](ga-switchroom-exhaust-fan.md)
- [Enclosure thermostat](ga-enclosure-thermostat.md)
- [Switchroom low-temperature ventilation restraint](switchroom-low-temperature-ventilation-restraint.md)

![Switchroom high-temperature ventilation demand — original educational illustration](../artwork/svg/switchroom-high-temperature-ventilation-demand.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
