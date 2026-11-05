# Breaker gas-condition common alarm

Collects the assigned breaker gas monitor outputs while retaining their individual equipment references.

[Canonical reference](https://eloragrid.ai/symbols/breaker-gas-condition-common-alarm) · [Structured record](../entries/breaker-gas-condition-common-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Assigned gas monitor alarms
Breaker gas common alarm

## What it represents

Collects the assigned breaker gas monitor outputs while retaining their individual equipment references. Yard equipment supervision carries the condition and support-system information of primary equipment into station alarms. A monitor's declared alarm, measurement and self-fault output need separate point names.
In a switchyard marshalling kiosk, gas compartment, operating mechanism and cabinet-service indications are collected for the station controller. Their equipment tags identify the actual compartment or mechanism being monitored. For this reference, the drawing identifies “Assigned gas monitor alarms” at the input and “Breaker gas common alarm” at the output. The common alarm should not hide the source compartment.
Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Assigned gas monitor alarms. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Breaker gas common alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The common alarm should not hide the source compartment.
- Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life.

## Drawing checklist

- Label the source and connection reference for assigned gas monitor alarms.
- Identify the destination and defined state of breaker gas common alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The common alarm should not hide the source compartment.

## Important distinction

The common alarm should not hide the source compartment. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Assigned gas monitor alarms
- Output / connection: Breaker gas common alarm
- Lookup label: BGCA is a library lookup label, not a standard device designation.

## Public references

- [Modular switchgear monitoring](https://www.hitachienergy.com/in/en/products-and-solutions/high-voltage-switchgear-and-breakers/monitoring-and-controlled-switching/modular-switchgear-monitoring-msm) — Hitachi Energy. Public technical context for switchyard equipment condition interfaces. Gas, operating mechanism and circuit-breaker condition monitoring. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Partial discharge sensor](partial-discharge-sensor.md)
- [Substation RTU](ga-substation-rtu.md)
- [Yard marshalling-kiosk heater control](yard-marshalling-kiosk-heater-control.md)

![Breaker gas-condition common alarm — original educational illustration](../artwork/svg/breaker-gas-condition-common-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
