# Switchroom nonessential AC bus

Identifies ordinary auxiliary loads that follow the documented nonessential supply strategy.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-nonessential-ac-bus) · [Structured record](../entries/switchroom-nonessential-ac-bus.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Normal AC source
Nonessential service branches

## What it represents

Identifies ordinary auxiliary loads that follow the documented nonessential supply strategy. An auxiliary AC distribution diagram identifies the supplies serving room services and control-support equipment. Essential, backed-up and ordinary circuits can have different source paths and operating priorities.
In a switchroom, the lighting, service sockets, charger input and room cooling may be fed from different auxiliary branches. A source change must preserve the identities of loads that require continuity. For this reference, the drawing identifies “Normal AC source” at the input and “Nonessential service branches” at the output. Priority must agree with the load schedule.
Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Normal AC source. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Nonessential service branches. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Priority must agree with the load schedule.
- Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule.

## Drawing checklist

- Label the source and connection reference for normal ac source.
- Identify the destination and defined state of nonessential service branches.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Priority must agree with the load schedule.

## Important distinction

Priority must agree with the load schedule. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Normal AC source
- Output / connection: Nonessential service branches
- Lookup label: SNAB is a library lookup label, not a standard device designation.

## Public references

- [SEL-RPM redundant power module](https://selinc.com/products/RPM/) — SEL. Public technical context for switchroom auxiliary ac distribution. Independent AC and DC sources for station auxiliary power. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Panel service outlet](ga-panel-service-outlet.md)
- [AC uninterruptible power supply](ac-uninterruptible-power-supply.md)
- [UPS-backed control AC bus](ups-backed-control-ac-bus.md)

![Switchroom nonessential AC bus — original educational illustration](../artwork/svg/switchroom-nonessential-ac-bus.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
