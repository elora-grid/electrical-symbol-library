# Motor starts-per-hour restraint

Limits new starts according to the documented operating-duty rule.

[Canonical reference](https://eloragrid.ai/symbols/motor-starts-per-hour-restraint) · [Structured record](../entries/motor-starts-per-hour-restraint.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Start history and time
Start restraint state

## What it represents

Limits new starts according to the documented operating-duty rule. A motor feeder combines switching, motor protection and an operating command. Starting permission, running feedback and protection trip are different signals even where one relay or controller processes all of them.
In a switchroom motor-control panel, a ventilation motor can receive an automatic start request while a local selector and the motor protection determine whether the feeder is available. For this reference, the drawing identifies “Start history and time” at the input and “Start restraint state” at the output. Manufacturer limits determine acceptable starting duty.
Link the motor tag to its contactor, protective device and process permissives. The control diagram must identify stop priority, feedback and restart philosophy without supplying unverified settings. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Start history and time. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Start restraint state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Manufacturer limits determine acceptable starting duty.
- Link the motor tag to its contactor, protective device and process permissives. The control diagram must identify stop priority, feedback and restart philosophy without supplying unverified settings.

## Drawing checklist

- Label the source and connection reference for start history and time.
- Identify the destination and defined state of start restraint state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Manufacturer limits determine acceptable starting duty.

## Important distinction

Manufacturer limits determine acceptable starting duty. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Start history and time
- Output / connection: Start restraint state
- Lookup label: MSR is a library lookup label, not a standard device designation.

## Public references

- [SEL-710 motor protection and control](https://selinc.com/products/710/) — SEL. Public technical context for motor-feeder control interfaces. Motor feeder thermal, starting and control functions. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Contactor](contactor.md)
- [Motor overload trip NC contact](motor-overload-trip-nc-contact.md)
- [Motor stalled-start trip interface](motor-stalled-start-trip-interface.md)

![Motor starts-per-hour restraint — original educational illustration](../artwork/svg/motor-starts-per-hour-restraint.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
