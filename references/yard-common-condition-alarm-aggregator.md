# Yard common-condition alarm aggregator

Collects a named set of yard condition alarms into its assigned common indication.

[Canonical reference](https://eloragrid.ai/symbols/yard-common-condition-alarm-aggregator) · [Structured record](../entries/yard-common-condition-alarm-aggregator.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Defined equipment alarm group
Common yard alarm

## What it represents

Collects a named set of yard condition alarms into its assigned common indication. Yard equipment supervision carries the condition and support-system information of primary equipment into station alarms. A monitor's declared alarm, measurement and self-fault output need separate point names.
In a switchyard marshalling kiosk, gas compartment, operating mechanism and cabinet-service indications are collected for the station controller. Their equipment tags identify the actual compartment or mechanism being monitored. For this reference, the drawing identifies “Defined equipment alarm group” at the input and “Common yard alarm” at the output. Detailed causes must remain identifiable.
Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Defined equipment alarm group. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Common yard alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Detailed causes must remain identifiable.
- Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life.

## Drawing checklist

- Label the source and connection reference for defined equipment alarm group.
- Identify the destination and defined state of common yard alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Detailed causes must remain identifiable.

## Important distinction

Detailed causes must remain identifiable. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Defined equipment alarm group
- Output / connection: Common yard alarm
- Lookup label: YCAA is a library lookup label, not a standard device designation.

## Public references

- [Modular switchgear monitoring](https://www.hitachienergy.com/in/en/products-and-solutions/high-voltage-switchgear-and-breakers/monitoring-and-controlled-switching/modular-switchgear-monitoring-msm) — Hitachi Energy. Public technical context for switchyard equipment condition interfaces. Gas, operating mechanism and circuit-breaker condition monitoring. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Partial discharge sensor](partial-discharge-sensor.md)
- [Substation RTU](ga-substation-rtu.md)
- [GIS gas-density warning interface](gis-gas-density-warning-interface.md)

![Yard common-condition alarm aggregator — original educational illustration](../artwork/svg/yard-common-condition-alarm-aggregator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
