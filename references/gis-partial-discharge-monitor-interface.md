# GIS partial-discharge monitor interface

Carries the installed monitoring system's declared partial-discharge measurements or alarms.

[Canonical reference](https://eloragrid.ai/symbols/gis-partial-discharge-monitor-interface) · [Structured record](../entries/gis-partial-discharge-monitor-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
PD monitor outputs
Condition-monitoring information

## What it represents

Carries the installed monitoring system's declared partial-discharge measurements or alarms. Yard equipment supervision carries the condition and support-system information of primary equipment into station alarms. A monitor's declared alarm, measurement and self-fault output need separate point names.
In a switchyard marshalling kiosk, gas compartment, operating mechanism and cabinet-service indications are collected for the station controller. Their equipment tags identify the actual compartment or mechanism being monitored. For this reference, the drawing identifies “PD monitor outputs” at the input and “Condition-monitoring information” at the output. Diagnostic interpretation needs specialist equipment assessment.
Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: PD monitor outputs. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Condition-monitoring information. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Diagnostic interpretation needs specialist equipment assessment.
- Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life.

## Drawing checklist

- Label the source and connection reference for pd monitor outputs.
- Identify the destination and defined state of condition-monitoring information.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Diagnostic interpretation needs specialist equipment assessment.

## Important distinction

Diagnostic interpretation needs specialist equipment assessment. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: PD monitor outputs
- Output / connection: Condition-monitoring information
- Lookup label: GPMI is a library lookup label, not a standard device designation.

## Public references

- [Modular switchgear monitoring](https://www.hitachienergy.com/in/en/products-and-solutions/high-voltage-switchgear-and-breakers/monitoring-and-controlled-switching/modular-switchgear-monitoring-msm) — Hitachi Energy. Public technical context for switchyard equipment condition interfaces. Gas, operating mechanism and circuit-breaker condition monitoring. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Partial discharge sensor](partial-discharge-sensor.md)
- [Substation RTU](ga-substation-rtu.md)
- [Breaker pole travel-monitor interface](breaker-pole-travel-monitor-interface.md)

![GIS partial-discharge monitor interface — original educational illustration](../artwork/svg/gis-partial-discharge-monitor-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
