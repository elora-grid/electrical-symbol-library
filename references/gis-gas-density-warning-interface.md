# GIS gas-density warning interface

Receives the selected compartment monitor's defined early gas-density warning output.

[Canonical reference](https://eloragrid.ai/symbols/gis-gas-density-warning-interface) · [Structured record](../entries/gis-gas-density-warning-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Gas-density monitor warning
Compartment warning indication

## What it represents

Receives the selected compartment monitor's defined early gas-density warning output. Yard equipment supervision carries the condition and support-system information of primary equipment into station alarms. A monitor's declared alarm, measurement and self-fault output need separate point names.
In a switchyard marshalling kiosk, gas compartment, operating mechanism and cabinet-service indications are collected for the station controller. Their equipment tags identify the actual compartment or mechanism being monitored. For this reference, the drawing identifies “Gas-density monitor warning” at the input and “Compartment warning indication” at the output. Density and pressure require their proper temperature relationship.
Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Gas-density monitor warning. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Compartment warning indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Density and pressure require their proper temperature relationship.
- Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life.

## Drawing checklist

- Label the source and connection reference for gas-density monitor warning.
- Identify the destination and defined state of compartment warning indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Density and pressure require their proper temperature relationship.

## Important distinction

Density and pressure require their proper temperature relationship. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Gas-density monitor warning
- Output / connection: Compartment warning indication
- Lookup label: GGWI is a library lookup label, not a standard device designation.

## Public references

- [Modular switchgear monitoring](https://www.hitachienergy.com/in/en/products-and-solutions/high-voltage-switchgear-and-breakers/monitoring-and-controlled-switching/modular-switchgear-monitoring-msm) — Hitachi Energy. Public technical context for switchyard equipment condition interfaces. Gas, operating mechanism and circuit-breaker condition monitoring. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Partial discharge sensor](partial-discharge-sensor.md)
- [Substation RTU](ga-substation-rtu.md)
- [GIS gas-density lockout interface](gis-gas-density-lockout-interface.md)

![GIS gas-density warning interface — original educational illustration](../artwork/svg/gis-gas-density-warning-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
