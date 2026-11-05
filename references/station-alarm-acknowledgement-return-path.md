# Station alarm acknowledgement return path

Carries acknowledgement from the assigned operator interface to its alarm-processing function.

[Canonical reference](https://eloragrid.ai/symbols/station-alarm-acknowledgement-return-path) · [Structured record](../entries/station-alarm-acknowledgement-return-path.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Operator acknowledgement
Alarm-processing acknowledgement

## What it represents

Carries acknowledgement from the assigned operator interface to its alarm-processing function. Station automation collects measurements and statuses and issues assigned commands through defined authority paths. A communicated point has a value, quality and equipment identity; it should not be treated as an unexplained contact.
In a substation control building, the station controller receives bay information and forwards an operator's selected command to the correct bay device. Device feedback confirms whether the intended result actually occurred. For this reference, the drawing identifies “Operator acknowledgement” at the input and “Alarm-processing acknowledgement” at the output. Acknowledgement does not clear the physical cause.
Document the point mapping, source, destination, command authority and failure behavior. A communication interface block explains information flow and does not certify network security or control-system availability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Operator acknowledgement. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Alarm-processing acknowledgement. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Acknowledgement does not clear the physical cause.
- Document the point mapping, source, destination, command authority and failure behavior. A communication interface block explains information flow and does not certify network security or control-system availability.

## Drawing checklist

- Label the source and connection reference for operator acknowledgement.
- Identify the destination and defined state of alarm-processing acknowledgement.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Acknowledgement does not clear the physical cause.

## Important distinction

Acknowledgement does not clear the physical cause. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Operator acknowledgement
- Output / connection: Alarm-processing acknowledgement
- Lookup label: SAARP is a library lookup label, not a standard device designation.

## Public references

- [SEL-2411 programmable automation controller](https://selinc.com/products/2411/) — SEL. Public technical context for substation automation and command interfaces. Station I/O, alarms, event recording, command and communications interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Substation RTU](ga-substation-rtu.md)
- [PLC digital input](plc-digital-input.md)
- [Station controller watchdog alarm interface](station-controller-watchdog-alarm-interface.md)

![Station alarm acknowledgement return path — original educational illustration](../artwork/svg/station-alarm-acknowledgement-return-path.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
