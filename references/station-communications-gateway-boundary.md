# Station communications gateway boundary

Identifies the documented protocol or data-model translation between the station and external system.

[Canonical reference](https://eloragrid.ai/symbols/station-communications-gateway-boundary) · [Structured record](../entries/station-communications-gateway-boundary.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Station protocol data
External-system mapped data

## What it represents

Identifies the documented protocol or data-model translation between the station and external system. Station automation collects measurements and statuses and issues assigned commands through defined authority paths. A communicated point has a value, quality and equipment identity; it should not be treated as an unexplained contact.
In a substation control building, the station controller receives bay information and forwards an operator's selected command to the correct bay device. Device feedback confirms whether the intended result actually occurred. For this reference, the drawing identifies “Station protocol data” at the input and “External-system mapped data” at the output. Translation must preserve point meaning and quality.
Document the point mapping, source, destination, command authority and failure behavior. A communication interface block explains information flow and does not certify network security or control-system availability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Station protocol data. Identify its source device or document and the state represented on the drawing.
- Follow the named output: External-system mapped data. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Translation must preserve point meaning and quality.
- Document the point mapping, source, destination, command authority and failure behavior. A communication interface block explains information flow and does not certify network security or control-system availability.

## Drawing checklist

- Label the source and connection reference for station protocol data.
- Identify the destination and defined state of external-system mapped data.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Translation must preserve point meaning and quality.

## Important distinction

Translation must preserve point meaning and quality. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Station protocol data
- Output / connection: External-system mapped data
- Lookup label: SCGB is a library lookup label, not a standard device designation.

## Public references

- [SEL-2411 programmable automation controller](https://selinc.com/products/2411/) — SEL. Public technical context for substation automation and command interfaces. Station I/O, alarms, event recording, command and communications interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Substation RTU](ga-substation-rtu.md)
- [PLC digital input](plc-digital-input.md)
- [Remote-control communications-loss inhibit](remote-control-communications-loss-inhibit.md)

![Station communications gateway boundary — original educational illustration](../artwork/svg/station-communications-gateway-boundary.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
