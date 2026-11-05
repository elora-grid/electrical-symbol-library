# Switchroom fan run-proof interface

Checks the feedback that confirms a commanded fan is operating.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-fan-run-proof-interface) · [Structured record](../entries/switchroom-fan-run-proof-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Fan command and run proof
Fan operating status

## What it represents

Checks the feedback that confirms a commanded fan is operating. Ventilation control coordinates the equipment that manages heat and air movement in an electrical room. A temperature request, a fan command and proof of airflow are separate signals, and the room design determines how they interact.
In a switchroom containing transformers and auxiliary panels, the room controller can supervise fan availability and send an alarm when the documented ventilation duty is not achieved. For this reference, the drawing identifies “Fan command and run proof” at the input and “Fan operating status” at the output. Run proof and airflow proof differ.
Identify the monitored space, the selected ventilation mode and the equipment feedback. Avoid inferring airflow, temperature limits or a fire response from a generic fan symbol; these require the room-services design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Fan command and run proof. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Fan operating status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Run proof and airflow proof differ.
- Identify the monitored space, the selected ventilation mode and the equipment feedback. Avoid inferring airflow, temperature limits or a fire response from a generic fan symbol; these require the room-services design.

## Drawing checklist

- Label the source and connection reference for fan command and run proof.
- Identify the destination and defined state of fan operating status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Run proof and airflow proof differ.

## Important distinction

Run proof and airflow proof differ. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Fan command and run proof
- Output / connection: Fan operating status
- Lookup label: SFRI is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom ventilation interfaces. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Switchroom exhaust fan](ga-switchroom-exhaust-fan.md)
- [Enclosure thermostat](ga-enclosure-thermostat.md)
- [Switchroom airflow-failure alarm](switchroom-airflow-failure-alarm.md)

![Switchroom fan run-proof interface — original educational illustration](../artwork/svg/switchroom-fan-run-proof-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
