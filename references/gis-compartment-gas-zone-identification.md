# GIS compartment gas-zone identification

Links the gas monitoring points to the manufacturer's defined compartment identifiers.

[Canonical reference](https://eloragrid.ai/symbols/gis-compartment-gas-zone-identification) · [Structured record](../entries/gis-compartment-gas-zone-identification.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Compartment identification
Traceable gas monitoring boundary

## What it represents

Links the gas monitoring points to the manufacturer's defined compartment identifiers. Yard equipment supervision carries the condition and support-system information of primary equipment into station alarms. A monitor's declared alarm, measurement and self-fault output need separate point names.
In a switchyard marshalling kiosk, gas compartment, operating mechanism and cabinet-service indications are collected for the station controller. Their equipment tags identify the actual compartment or mechanism being monitored. For this reference, the drawing identifies “Compartment identification” at the input and “Traceable gas monitoring boundary” at the output. Electrical section names may differ from gas-zone names.
Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Compartment identification. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Traceable gas monitoring boundary. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Electrical section names may differ from gas-zone names.
- Keep primary-device identity, compartment boundaries and monitor health visible. A monitoring illustration does not establish a leak rate, operating threshold or remaining equipment life.

## Drawing checklist

- Label the source and connection reference for compartment identification.
- Identify the destination and defined state of traceable gas monitoring boundary.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Electrical section names may differ from gas-zone names.

## Important distinction

Electrical section names may differ from gas-zone names. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Compartment identification
- Output / connection: Traceable gas monitoring boundary
- Lookup label: GCGI is a library lookup label, not a standard device designation.

## Public references

- [Modular switchgear monitoring](https://www.hitachienergy.com/in/en/products-and-solutions/high-voltage-switchgear-and-breakers/monitoring-and-controlled-switching/modular-switchgear-monitoring-msm) — Hitachi Energy. Public technical context for switchyard equipment condition interfaces. Gas, operating mechanism and circuit-breaker condition monitoring. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Partial discharge sensor](partial-discharge-sensor.md)
- [Substation RTU](ga-substation-rtu.md)
- [GIS gas-monitor self-fault input](gis-gas-monitor-self-fault-input.md)

![GIS compartment gas-zone identification — original educational illustration](../artwork/svg/gis-compartment-gas-zone-identification.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
