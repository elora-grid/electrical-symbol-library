# Auxiliary-board load-shedding input

Receives the command to disconnect the room loads selected by the load-priority scheme.

[Canonical reference](https://eloragrid.ai/symbols/auxiliary-board-load-shedding-input) · [Structured record](../entries/auxiliary-board-load-shedding-input.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Load-shedding command
Assigned auxiliary-load disconnection

## What it represents

Receives the command to disconnect the room loads selected by the load-priority scheme. An auxiliary AC distribution diagram identifies the supplies serving room services and control-support equipment. Essential, backed-up and ordinary circuits can have different source paths and operating priorities.
In a switchroom, the lighting, service sockets, charger input and room cooling may be fed from different auxiliary branches. A source change must preserve the identities of loads that require continuity. For this reference, the drawing identifies “Load-shedding command” at the input and “Assigned auxiliary-load disconnection” at the output. The essential-load definition governs exclusions.
Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Load-shedding command. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Assigned auxiliary-load disconnection. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The essential-load definition governs exclusions.
- Label source, branch protection and load purpose. The arrangement does not establish conductor sizes, protection settings or installation compliance; it links the operating role to the selected equipment schedule.

## Drawing checklist

- Label the source and connection reference for load-shedding command.
- Identify the destination and defined state of assigned auxiliary-load disconnection.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The essential-load definition governs exclusions.

## Important distinction

The essential-load definition governs exclusions. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Load-shedding command
- Output / connection: Assigned auxiliary-load disconnection
- Lookup label: ALI is a library lookup label, not a standard device designation.

## Public references

- [SEL-RPM redundant power module](https://selinc.com/products/RPM/) — SEL. Public technical context for switchroom auxiliary ac distribution. Independent AC and DC sources for station auxiliary power. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Panel service outlet](ga-panel-service-outlet.md)
- [AC uninterruptible power supply](ac-uninterruptible-power-supply.md)
- [Switchroom essential AC bus](switchroom-essential-ac-bus.md)

![Auxiliary-board load-shedding input — original educational illustration](../artwork/svg/auxiliary-board-load-shedding-input.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
