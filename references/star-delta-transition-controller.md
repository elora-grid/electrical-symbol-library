# Star-delta transition controller

Coordinates the documented change from starting winding connection to running connection.

[Canonical reference](https://eloragrid.ai/symbols/star-delta-transition-controller) · [Structured record](../entries/star-delta-transition-controller.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Start sequence and timing
Star and delta commands

## What it represents

Coordinates the documented change from starting winding connection to running connection. A motor feeder combines switching, motor protection and an operating command. Starting permission, running feedback and protection trip are different signals even where one relay or controller processes all of them.
In a switchroom motor-control panel, a ventilation motor can receive an automatic start request while a local selector and the motor protection determine whether the feeder is available. For this reference, the drawing identifies “Start sequence and timing” at the input and “Star and delta commands” at the output. Transition arrangement must match the actual motor starter.
Link the motor tag to its contactor, protective device and process permissives. The control diagram must identify stop priority, feedback and restart philosophy without supplying unverified settings. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Start sequence and timing. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Star and delta commands. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Transition arrangement must match the actual motor starter.
- Link the motor tag to its contactor, protective device and process permissives. The control diagram must identify stop priority, feedback and restart philosophy without supplying unverified settings.

## Drawing checklist

- Label the source and connection reference for start sequence and timing.
- Identify the destination and defined state of star and delta commands.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Transition arrangement must match the actual motor starter.

## Important distinction

Transition arrangement must match the actual motor starter. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Start sequence and timing
- Output / connection: Star and delta commands
- Lookup label: STC is a library lookup label, not a standard device designation.

## Public references

- [SEL-710 motor protection and control](https://selinc.com/products/710/) — SEL. Public technical context for motor-feeder control interfaces. Motor feeder thermal, starting and control functions. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Contactor](contactor.md)
- [Motor overload trip NC contact](motor-overload-trip-nc-contact.md)
- [Soft-starter bypass command interface](soft-starter-bypass-command-interface.md)

![Star-delta transition controller — original educational illustration](../artwork/svg/star-delta-transition-controller.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
