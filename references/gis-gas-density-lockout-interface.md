# GIS gas-density lockout interface

Receives the manufacturer's assigned gas-condition blocking output for the documented operation.

[Canonical reference](https://eloragrid.ai/symbols/gis-gas-density-lockout-interface) · [Structured record](../entries/gis-gas-density-lockout-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Gas-condition lockout contact
Assigned operation block

## What it represents

Receives the manufacturer's assigned gas-condition blocking output for the documented operation. Yard equipment supervision carries the condition and support-system information of primary equipment into station alarms. A monitor's declared alarm, measurement and self-fault output need separate point names.
In a switchyard marshalling kiosk, gas compartment, operating mechanism and cabinet-service indications are collected for the station controller. Their equipment tags identify the actual compartment or mechanism being monitored. For this reference, the drawing identifies “Gas-condition lockout contact” at the input and “Assigned operation block” at the output. Different operations can have different blocking rules.
Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Gas-condition lockout contact. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Assigned operation block. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Different operations can have different blocking rules.
- Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life.

## Drawing checklist

- Label the source and connection reference for gas-condition lockout contact.
- Identify the destination and defined state of assigned operation block.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Different operations can have different blocking rules.

## Important distinction

Different operations can have different blocking rules. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Gas-condition lockout contact
- Output / connection: Assigned operation block
- Lookup label: GGLI is a library lookup label, not a standard device designation.

## Public references

- [Modular switchgear monitoring](https://www.hitachienergy.com/in/en/products-and-solutions/high-voltage-switchgear-and-breakers/monitoring-and-controlled-switching/modular-switchgear-monitoring-msm) — Hitachi Energy. Public technical context for switchyard equipment condition interfaces. Gas, operating mechanism and circuit-breaker condition monitoring. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Partial discharge sensor](partial-discharge-sensor.md)
- [Substation RTU](ga-substation-rtu.md)
- [GIS compartment gas-zone identification](gis-compartment-gas-zone-identification.md)

![GIS gas-density lockout interface — original educational illustration](../artwork/svg/gis-gas-density-lockout-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
