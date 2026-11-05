# Bay-controller supervisory data interface

Collects the assigned bay status and measurements for station-level supervision.

[Canonical reference](https://eloragrid.ai/symbols/bay-controller-supervisory-data-interface) · [Structured record](../entries/bay-controller-supervisory-data-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Bay measurements and statuses
Station bay data

## What it represents

Collects the assigned bay status and measurements for station-level supervision. Station automation collects measurements and statuses and issues assigned commands through defined authority paths. A communicated point has a value, quality and equipment identity; it should not be treated as an unexplained contact.
In a substation control building, the station controller receives bay information and forwards an operator's selected command to the correct bay device. Device feedback confirms whether the intended result actually occurred. For this reference, the drawing identifies “Bay measurements and statuses” at the input and “Station bay data” at the output. Point identity must match the selected bay configuration.
Document the point mapping, source, destination, command authority and failure behavior. A communication interface block explains information flow and does not certify network security or control-system availability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Bay measurements and statuses. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Station bay data. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Point identity must match the selected bay configuration.
- Document the point mapping, source, destination, command authority and failure behavior. A communication interface block explains information flow and does not certify network security or control-system availability.

## Drawing checklist

- Label the source and connection reference for bay measurements and statuses.
- Identify the destination and defined state of station bay data.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Point identity must match the selected bay configuration.

## Important distinction

Point identity must match the selected bay configuration. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Bay measurements and statuses
- Output / connection: Station bay data
- Lookup label: BSDI is a library lookup label, not a standard device designation.

## Public references

- [SEL-2411 programmable automation controller](https://selinc.com/products/2411/) — SEL. Public technical context for substation automation and command interfaces. Station I/O, alarms, event recording, command and communications interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Substation RTU](ga-substation-rtu.md)
- [PLC digital input](plc-digital-input.md)
- [Station RTU command-authority gate](station-rtu-command-authority-gate.md)

![Bay-controller supervisory data interface — original educational illustration](../artwork/svg/bay-controller-supervisory-data-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
