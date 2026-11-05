# Battery-charger AC input feeder

Identifies the protected AC circuit supplying the assigned station battery charger.

[Canonical reference](https://eloragrid.ai/symbols/battery-charger-ac-input-feeder) · [Structured record](../entries/battery-charger-ac-input-feeder.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Auxiliary AC board
Charger AC input

## What it represents

Identifies the protected AC circuit supplying the assigned station battery charger. An auxiliary AC distribution diagram identifies the supplies serving room services and control-support equipment. Essential, backed-up and ordinary circuits can have different source paths and operating priorities.
In a switchroom, the lighting, service sockets, charger input and room cooling may be fed from different auxiliary branches. A source change must preserve the identities of loads that require continuity. For this reference, the drawing identifies “Auxiliary AC board” at the input and “Charger AC input” at the output. Charger output has a separate DC distribution path.
Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Auxiliary AC board. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Charger AC input. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Charger output has a separate DC distribution path.
- Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule.

## Drawing checklist

- Label the source and connection reference for auxiliary ac board.
- Identify the destination and defined state of charger ac input.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Charger output has a separate DC distribution path.

## Important distinction

Charger output has a separate DC distribution path. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Auxiliary AC board
- Output / connection: Charger AC input
- Lookup label: BAIF is a library lookup label, not a standard device designation.

## Public references

- [SEL-RPM redundant power module](https://selinc.com/products/RPM/) — SEL. Public technical context for switchroom auxiliary ac distribution. Independent AC and DC sources for station auxiliary power. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Panel service outlet](ga-panel-service-outlet.md)
- [AC uninterruptible power supply](ac-uninterruptible-power-supply.md)
- [Protection-panel service AC feeder](protection-panel-service-ac-feeder.md)

![Battery-charger AC input feeder — original educational illustration](../artwork/svg/battery-charger-ac-input-feeder.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
