# Station battery discharge-current measurement

Identifies the measured battery discharge contribution to the station DC load.

[Canonical reference](https://eloragrid.ai/symbols/station-battery-discharge-current-measurement) · [Structured record](../entries/station-battery-discharge-current-measurement.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Battery current sensor
Discharge-current information

## What it represents

Identifies the measured battery discharge contribution to the station DC load. A station battery system supplies protection, control and other assigned DC loads through a documented charger and distribution arrangement. Charger output, battery contribution and load distribution are related but separately monitored paths.
In a substation control building, the battery can support breaker trip circuits while the charger AC supply is unavailable. Supervision must identify whether the charger, battery or a downstream feeder is affected. For this reference, the drawing identifies “Battery current sensor” at the input and “Discharge-current information” at the output. Sensor polarity determines charge versus discharge sign.
Identify every source, protective device, isolation boundary and return. Battery capacity, DC fault duty, charging settings and ventilation require the selected battery-system design; illustrative circuits do not establish autonomy. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Battery current sensor. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Discharge-current information. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Sensor polarity determines charge versus discharge sign.
- Identify every source, protective device, isolation boundary and return. Battery capacity, DC fault duty, charging settings and ventilation require the selected battery-system design; illustrative circuits do not establish autonomy.

## Drawing checklist

- Label the source and connection reference for battery current sensor.
- Identify the destination and defined state of discharge-current information.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Sensor polarity determines charge versus discharge sign.

## Important distinction

Sensor polarity determines charge versus discharge sign. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Battery current sensor
- Output / connection: Discharge-current information
- Lookup label: SBDM is a library lookup label, not a standard device designation.

## Public references

- [MicroGenius S2/S4 battery charger technical manual](https://www.sens-usa.com/hubfs/Controlled%20Files/Manuals/101330_MGS_User_Manual.pdf) — SENS. Public technical context for station battery and charger distribution. Battery charging modes, DC distribution interfaces and charger alarms. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Station DC battery rack](ga-station-dc-battery-rack.md)
- [Battery charger](ga-battery-charger.md)
- [Station battery charge-current measurement](station-battery-charge-current-measurement.md)

![Station battery discharge-current measurement — original educational illustration](../artwork/svg/station-battery-discharge-current-measurement.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
