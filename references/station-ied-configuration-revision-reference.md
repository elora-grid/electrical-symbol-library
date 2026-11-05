# Station IED configuration-revision reference

Associates the drawing's point and command mappings with the selected IED configuration revision.

[Canonical reference](https://eloragrid.ai/symbols/station-ied-configuration-revision-reference) · [Structured record](../entries/station-ied-configuration-revision-reference.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Drawing signal map
Configuration revision link

## What it represents

Associates the drawing's point and command mappings with the selected IED configuration revision. Station automation collects measurements and statuses and issues assigned commands through defined authority paths. A communicated point has a value, quality and equipment identity; it should not be treated as an unexplained contact.
In a substation control building, the station controller receives bay information and forwards an operator's selected command to the correct bay device. Device feedback confirms whether the intended result actually occurred. For this reference, the drawing identifies “Drawing signal map” at the input and “Configuration revision link” at the output. The referenced revision must match the installed system.
Document the point mapping, source, destination, command authority and failure behavior. A communication interface block explains information flow and does not certify network security or control-system availability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Drawing signal map. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Configuration revision link. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The referenced revision must match the installed system.
- Document the point mapping, source, destination, command authority and failure behavior. A communication interface block explains information flow and does not certify network security or control-system availability.

## Drawing checklist

- Label the source and connection reference for drawing signal map.
- Identify the destination and defined state of configuration revision link.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The referenced revision must match the installed system.

## Important distinction

The referenced revision must match the installed system. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Drawing signal map
- Output / connection: Configuration revision link
- Lookup label: SICR is a library lookup label, not a standard device designation.

## Public references

- [SEL-2411 programmable automation controller](https://selinc.com/products/2411/) — SEL. Public technical context for substation automation and command interfaces. Station I/O, alarms, event recording, command and communications interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Substation RTU](ga-substation-rtu.md)
- [PLC digital input](plc-digital-input.md)
- [Bay-controller supervisory data interface](bay-controller-supervisory-data-interface.md)

![Station IED configuration-revision reference — original educational illustration](../artwork/svg/station-ied-configuration-revision-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
