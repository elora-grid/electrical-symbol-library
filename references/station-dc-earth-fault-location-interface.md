# Station DC earth-fault location interface

Identifies the selected diagnostic interface used to associate an insulation fault with a DC branch.

[Canonical reference](https://eloragrid.ai/symbols/station-dc-earth-fault-location-interface) · [Structured record](../entries/station-dc-earth-fault-location-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Branch diagnostic information
Suspected branch identification

## What it represents

Identifies the selected diagnostic interface used to associate an insulation fault with a DC branch. A station battery system supplies protection, control and other assigned DC loads through a documented charger and distribution arrangement. Charger output, battery contribution and load distribution are related but separately monitored paths.
In a substation control building, the battery can support breaker trip circuits while the charger AC supply is unavailable. Supervision must identify whether the charger, battery or a downstream feeder is affected. For this reference, the drawing identifies “Branch diagnostic information” at the input and “Suspected branch identification” at the output. Fault location differs from initial insulation alarm.
Identify every source, protective device, isolation boundary and return. Battery capacity, DC fault duty, charging settings and ventilation require the selected battery-system design; illustrative circuits do not establish autonomy. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Branch diagnostic information. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Suspected branch identification. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Fault location differs from initial insulation alarm.
- Identify every source, protective device, isolation boundary and return. Battery capacity, DC fault duty, charging settings and ventilation require the selected battery-system design; illustrative circuits do not establish autonomy.

## Drawing checklist

- Label the source and connection reference for branch diagnostic information.
- Identify the destination and defined state of suspected branch identification.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Fault location differs from initial insulation alarm.

## Important distinction

Fault location differs from initial insulation alarm. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Branch diagnostic information
- Output / connection: Suspected branch identification
- Lookup label: SDELI is a library lookup label, not a standard device designation.

## Public references

- [MicroGenius S2/S4 battery charger technical manual](https://www.sens-usa.com/hubfs/Controlled%20Files/Manuals/101330_MGS_User_Manual.pdf) — SENS. Public technical context for station battery and charger distribution. Battery charging modes, DC distribution interfaces and charger alarms. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Station DC battery rack](ga-station-dc-battery-rack.md)
- [Battery charger](ga-battery-charger.md)
- [Station DC feeder selectivity boundary](station-dc-feeder-selectivity-boundary.md)

![Station DC earth-fault location interface — original educational illustration](../artwork/svg/station-dc-earth-fault-location-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
