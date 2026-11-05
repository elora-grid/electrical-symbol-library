# Ventilation shutdown cause indication

Identifies the initiating control condition that stopped the monitored ventilation function.

[Canonical reference](https://eloragrid.ai/symbols/ventilation-shutdown-cause-indication) · [Structured record](../entries/ventilation-shutdown-cause-indication.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Shutdown initiations
Recorded ventilation stop cause

## What it represents

Identifies the initiating control condition that stopped the monitored ventilation function. Ventilation control coordinates the equipment that manages heat and air movement in an electrical room. A temperature request, a fan command and proof of airflow are separate signals, and the room design determines how they interact.
In a switchroom containing transformers and auxiliary panels, the room controller can supervise fan availability and send an alarm when the documented ventilation duty is not achieved. For this reference, the drawing identifies “Shutdown initiations” at the input and “Recorded ventilation stop cause” at the output. Fire response requires a separate coordinated design.
Identify the monitored space, the selected ventilation mode and the equipment feedback. Avoid inferring airflow, temperature limits or a fire response from a generic fan symbol; these require the room-services design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Shutdown initiations. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Recorded ventilation stop cause. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Fire response requires a separate coordinated design.
- Identify the monitored space, the selected ventilation mode and the equipment feedback. Avoid inferring airflow, temperature limits or a fire response from a generic fan symbol; these require the room-services design.

## Drawing checklist

- Label the source and connection reference for shutdown initiations.
- Identify the destination and defined state of recorded ventilation stop cause.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Fire response requires a separate coordinated design.

## Important distinction

Fire response requires a separate coordinated design. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Shutdown initiations
- Output / connection: Recorded ventilation stop cause
- Lookup label: VSCI is a library lookup label, not a standard device designation.

## Public references

- [Ventilation in MV substations](https://www.electrical-installation.org/enwiki/Ventilation_in_MV_Substations) — Schneider Electric. Public technical context for switchroom ventilation interfaces. Heat removal, condensation and environmental design context. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Switchroom exhaust fan](ga-switchroom-exhaust-fan.md)
- [Enclosure thermostat](ga-enclosure-thermostat.md)
- [Switchroom high-temperature ventilation demand](switchroom-high-temperature-ventilation-demand.md)

![Ventilation shutdown cause indication — original educational illustration](../artwork/svg/ventilation-shutdown-cause-indication.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
