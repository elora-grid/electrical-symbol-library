# Protection-panel service AC feeder

Shows the auxiliary AC circuit allocated to protection-panel service functions.

[Canonical reference](https://eloragrid.ai/symbols/protection-panel-service-ac-feeder) · [Structured record](../entries/protection-panel-service-ac-feeder.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Auxiliary AC board
Panel service AC

## What it represents

Shows the auxiliary AC circuit allocated to protection-panel service functions. An auxiliary AC distribution diagram identifies the supplies serving room services and control-support equipment. Essential, backed-up and ordinary circuits can have different source paths and operating priorities.
In a switchroom, the lighting, service sockets, charger input and room cooling may be fed from different auxiliary branches. A source change must preserve the identities of loads that require continuity. For this reference, the drawing identifies “Auxiliary AC board” at the input and “Panel service AC” at the output. Service power differs from protective-relay operating power.
Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Auxiliary AC board. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Panel service AC. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Service power differs from protective-relay operating power.
- Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule.

## Drawing checklist

- Label the source and connection reference for auxiliary ac board.
- Identify the destination and defined state of panel service ac.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Service power differs from protective-relay operating power.

## Important distinction

Service power differs from protective-relay operating power. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Auxiliary AC board
- Output / connection: Panel service AC
- Lookup label: PSAF is a library lookup label, not a standard device designation.

## Public references

- [SEL-RPM redundant power module](https://selinc.com/products/RPM/) — SEL. Public technical context for switchroom auxiliary ac distribution. Independent AC and DC sources for station auxiliary power. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Panel service outlet](ga-panel-service-outlet.md)
- [AC uninterruptible power supply](ac-uninterruptible-power-supply.md)
- [Switchroom HVAC auxiliary feeder](switchroom-hvac-auxiliary-feeder.md)

![Protection-panel service AC feeder — original educational illustration](../artwork/svg/protection-panel-service-ac-feeder.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
