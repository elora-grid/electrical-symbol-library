# Switchroom cooling-available indication

Reports the documented availability of the assigned room-cooling equipment.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-cooling-available-indication) · [Structured record](../entries/switchroom-cooling-available-indication.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Cooling equipment health
Cooling available status

## What it represents

Reports the documented availability of the assigned room-cooling equipment. Ventilation control coordinates the equipment that manages heat and air movement in an electrical room. A temperature request, a fan command and proof of airflow are separate signals, and the room design determines how they interact.
In a switchroom containing transformers and auxiliary panels, the room controller can supervise fan availability and send an alarm when the documented ventilation duty is not achieved. For this reference, the drawing identifies “Cooling equipment health” at the input and “Cooling available status” at the output. Availability is different from thermal capacity.
Identify the monitored space, the selected ventilation mode and the equipment feedback. Avoid inferring airflow, temperature limits or a fire response from a generic fan symbol; these require the room-services design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Cooling equipment health. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Cooling available status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Availability is different from thermal capacity.
- Identify the monitored space, the selected ventilation mode and the equipment feedback. Avoid inferring airflow, temperature limits or a fire response from a generic fan symbol; these require the room-services design.

## Drawing checklist

- Label the source and connection reference for cooling equipment health.
- Identify the destination and defined state of cooling available status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Availability is different from thermal capacity.

## Important distinction

Availability is different from thermal capacity. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Cooling equipment health
- Output / connection: Cooling available status
- Lookup label: SCI is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom ventilation interfaces. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Switchroom exhaust fan](ga-switchroom-exhaust-fan.md)
- [Enclosure thermostat](ga-enclosure-thermostat.md)
- [Ventilation shutdown cause indication](ventilation-shutdown-cause-indication.md)

![Switchroom cooling-available indication — original educational illustration](../artwork/svg/switchroom-cooling-available-indication.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
