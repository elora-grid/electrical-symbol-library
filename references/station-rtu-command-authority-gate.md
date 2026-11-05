# Station RTU command-authority gate

Accepts the documented remote commands only when the station authority conditions permit them.

[Canonical reference](https://eloragrid.ai/symbols/station-rtu-command-authority-gate) · [Structured record](../entries/station-rtu-command-authority-gate.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Remote command and authority
Authorized station command

## What it represents

Accepts the documented remote commands only when the station authority conditions permit them. Station automation collects measurements and statuses and issues assigned commands through defined authority paths. A communicated point has a value, quality and equipment identity; it should not be treated as an unexplained contact.
In a substation control building, the station controller receives bay information and forwards an operator's selected command to the correct bay device. Device feedback confirms whether the intended result actually occurred. For this reference, the drawing identifies “Remote command and authority” at the input and “Authorized station command” at the output. Authority does not remove equipment operating interlocks.
Document the point mapping, source, destination, command authority and failure behavior. A communication interface block explains information flow and does not certify network security or control-system availability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Remote command and authority. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Authorized station command. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Authority does not remove equipment operating interlocks.
- Document the point mapping, source, destination, command authority and failure behavior. A communication interface block explains information flow and does not certify network security or control-system availability.

## Drawing checklist

- Label the source and connection reference for remote command and authority.
- Identify the destination and defined state of authorized station command.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Authority does not remove equipment operating interlocks.

## Important distinction

Authority does not remove equipment operating interlocks. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Remote command and authority
- Output / connection: Authorized station command
- Lookup label: SRCG is a library lookup label, not a standard device designation.

## Public references

- [SEL-2411 programmable automation controller](https://selinc.com/products/2411/) — SEL. Public technical context for substation automation and command interfaces. Station I/O, alarms, event recording, command and communications interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Substation RTU](ga-substation-rtu.md)
- [PLC digital input](plc-digital-input.md)
- [Select-before-operate command interface](select-before-operate-command-interface.md)

![Station RTU command-authority gate — original educational illustration](../artwork/svg/station-rtu-command-authority-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
