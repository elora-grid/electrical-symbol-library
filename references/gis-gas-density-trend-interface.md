# GIS gas-density trend interface

Connects the selected continuous gas-density measurements to station condition recording.

[Canonical reference](https://eloragrid.ai/symbols/gis-gas-density-trend-interface) · [Structured record](../entries/gis-gas-density-trend-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Density measurements and time
Gas-condition trend

## What it represents

Connects the selected continuous gas-density measurements to station condition recording. Yard equipment supervision carries the condition and support-system information of primary equipment into station alarms. A monitor's declared alarm, measurement and self-fault output need separate point names.
In a switchyard marshalling kiosk, gas compartment, operating mechanism and cabinet-service indications are collected for the station controller. Their equipment tags identify the actual compartment or mechanism being monitored. For this reference, the drawing identifies “Density measurements and time” at the input and “Gas-condition trend” at the output. Trend interpretation depends on the measurement method.
Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Density measurements and time. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Gas-condition trend. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Trend interpretation depends on the measurement method.
- Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life.

## Drawing checklist

- Label the source and connection reference for density measurements and time.
- Identify the destination and defined state of gas-condition trend.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Trend interpretation depends on the measurement method.

## Important distinction

Trend interpretation depends on the measurement method. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Density measurements and time
- Output / connection: Gas-condition trend
- Lookup label: GGTI is a library lookup label, not a standard device designation.

## Public references

- [Modular switchgear monitoring](https://www.hitachienergy.com/in/en/products-and-solutions/high-voltage-switchgear-and-breakers/monitoring-and-controlled-switching/modular-switchgear-monitoring-msm) — Hitachi Energy. Public technical context for switchyard equipment condition interfaces. Gas, operating mechanism and circuit-breaker condition monitoring. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Partial discharge sensor](partial-discharge-sensor.md)
- [Substation RTU](ga-substation-rtu.md)
- [GIS pressure-relief operated interface](gis-pressure-relief-operated-interface.md)

![GIS gas-density trend interface — original educational illustration](../artwork/svg/gis-gas-density-trend-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
