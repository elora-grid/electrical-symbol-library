# Switchroom HVAC auxiliary feeder

Identifies the circuit serving the selected electrical-room HVAC unit.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-hvac-auxiliary-feeder) · [Structured record](../entries/switchroom-hvac-auxiliary-feeder.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Auxiliary AC branch
HVAC electrical input

## What it represents

Identifies the circuit serving the selected electrical-room HVAC unit. An auxiliary AC distribution diagram identifies the supplies serving room services and control-support equipment. Essential, backed-up and ordinary circuits can have different source paths and operating priorities.
In a switchroom, the lighting, service sockets, charger input and room cooling may be fed from different auxiliary branches. A source change must preserve the identities of loads that require continuity. For this reference, the drawing identifies “Auxiliary AC branch” at the input and “HVAC electrical input” at the output. Starting duty and protection require equipment data.
Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Auxiliary AC branch. Identify its source device or document and the state represented on the drawing.
- Follow the named output: HVAC electrical input. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Starting duty and protection require equipment data.
- Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule.

## Drawing checklist

- Label the source and connection reference for auxiliary ac branch.
- Identify the destination and defined state of hvac electrical input.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Starting duty and protection require equipment data.

## Important distinction

Starting duty and protection require equipment data. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Auxiliary AC branch
- Output / connection: HVAC electrical input
- Lookup label: SHAF is a library lookup label, not a standard device designation.

## Public references

- [SEL-RPM redundant power module](https://selinc.com/products/RPM/) — SEL. Public technical context for switchroom auxiliary ac distribution. Independent AC and DC sources for station auxiliary power. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Panel service outlet](ga-panel-service-outlet.md)
- [AC uninterruptible power supply](ac-uninterruptible-power-supply.md)
- [Switchroom heater auxiliary feeder](switchroom-heater-auxiliary-feeder.md)

![Switchroom HVAC auxiliary feeder — original educational illustration](../artwork/svg/switchroom-hvac-auxiliary-feeder.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
