# Auxiliary-board incoming-supply alarm

Reports loss of the monitored incoming supply to the auxiliary AC board.

[Canonical reference](https://eloragrid.ai/symbols/auxiliary-board-incoming-supply-alarm) · [Structured record](../entries/auxiliary-board-incoming-supply-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Incoming voltage condition
Auxiliary supply-loss indication

## What it represents

Reports loss of the monitored incoming supply to the auxiliary AC board. An auxiliary AC distribution diagram identifies the supplies serving room services and control-support equipment. Essential, backed-up and ordinary circuits can have different source paths and operating priorities.
In a switchroom, the lighting, service sockets, charger input and room cooling may be fed from different auxiliary branches. A source change must preserve the identities of loads that require continuity. For this reference, the drawing identifies “Incoming voltage condition” at the input and “Auxiliary supply-loss indication” at the output. Individual branches can fail while the incoming remains healthy.
Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Incoming voltage condition. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Auxiliary supply-loss indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Individual branches can fail while the incoming remains healthy.
- Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule.

## Drawing checklist

- Label the source and connection reference for incoming voltage condition.
- Identify the destination and defined state of auxiliary supply-loss indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Individual branches can fail while the incoming remains healthy.

## Important distinction

Individual branches can fail while the incoming remains healthy. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Incoming voltage condition
- Output / connection: Auxiliary supply-loss indication
- Lookup label: AIA is a library lookup label, not a standard device designation.

## Public references

- [SEL-RPM redundant power module](https://selinc.com/products/RPM/) — SEL. Public technical context for switchroom auxiliary ac distribution. Independent AC and DC sources for station auxiliary power. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Panel service outlet](ga-panel-service-outlet.md)
- [AC uninterruptible power supply](ac-uninterruptible-power-supply.md)
- [Essential-service feeder trip indication](essential-service-feeder-trip-indication.md)

![Auxiliary-board incoming-supply alarm — original educational illustration](../artwork/svg/auxiliary-board-incoming-supply-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
