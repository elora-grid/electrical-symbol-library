# Switchroom essential AC bus

Identifies the auxiliary AC bus assigned to the documented essential room loads.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-essential-ac-bus) · [Structured record](../entries/switchroom-essential-ac-bus.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Essential AC source
Essential service branches

## What it represents

Identifies the auxiliary AC bus assigned to the documented essential room loads. An auxiliary AC distribution diagram identifies the supplies serving room services and control-support equipment. Essential, backed-up and ordinary circuits can have different source paths and operating priorities.
In a switchroom, the lighting, service sockets, charger input and room cooling may be fed from different auxiliary branches. A source change must preserve the identities of loads that require continuity. For this reference, the drawing identifies “Essential AC source” at the input and “Essential service branches” at the output. Essential designation does not guarantee uninterrupted supply.
Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Essential AC source. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Essential service branches. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Essential designation does not guarantee uninterrupted supply.
- Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule.

## Drawing checklist

- Label the source and connection reference for essential ac source.
- Identify the destination and defined state of essential service branches.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Essential designation does not guarantee uninterrupted supply.

## Important distinction

Essential designation does not guarantee uninterrupted supply. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Essential AC source
- Output / connection: Essential service branches
- Lookup label: SEAB is a library lookup label, not a standard device designation.

## Public references

- [SEL-RPM redundant power module](https://selinc.com/products/RPM/) — SEL. Public technical context for switchroom auxiliary ac distribution. Independent AC and DC sources for station auxiliary power. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Panel service outlet](ga-panel-service-outlet.md)
- [AC uninterruptible power supply](ac-uninterruptible-power-supply.md)
- [Switchroom nonessential AC bus](switchroom-nonessential-ac-bus.md)

![Switchroom essential AC bus — original educational illustration](../artwork/svg/switchroom-essential-ac-bus.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
