# Motor phase-unbalance alarm interface

Carries the selected unbalance monitoring result into the feeder control system.

[Canonical reference](https://eloragrid.ai/symbols/motor-phase-unbalance-alarm-interface) · [Structured record](../entries/motor-phase-unbalance-alarm-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Phase measurements
Unbalance alarm state

## What it represents

Carries the selected unbalance monitoring result into the feeder control system. A motor feeder combines switching, motor protection and an operating command. Starting permission, running feedback and protection trip are different signals even where one relay or controller processes all of them.
In a switchroom motor-control panel, a ventilation motor can receive an automatic start request while a local selector and the motor protection determine whether the feeder is available. For this reference, the drawing identifies “Phase measurements” at the input and “Unbalance alarm state” at the output. Alarm and trip levels are separately specified.
Link the motor tag to its contactor, protective device and process permissives. The control diagram must identify stop priority, feedback and restart philosophy without supplying unverified settings. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Phase measurements. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Unbalance alarm state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Alarm and trip levels are separately specified.
- Link the motor tag to its contactor, protective device and process permissives. The control diagram must identify stop priority, feedback and restart philosophy without supplying unverified settings.

## Drawing checklist

- Label the source and connection reference for phase measurements.
- Identify the destination and defined state of unbalance alarm state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Alarm and trip levels are separately specified.

## Important distinction

Alarm and trip levels are separately specified. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Phase measurements
- Output / connection: Unbalance alarm state
- Lookup label: MPAI is a library lookup label, not a standard device designation.

## Public references

- [SEL-710 motor protection and control](https://selinc.com/products/710/) — SEL. Public technical context for motor-feeder control interfaces. Motor feeder thermal, starting and control functions. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Contactor](contactor.md)
- [Motor overload trip NC contact](motor-overload-trip-nc-contact.md)
- [Motor local-off-auto authority block](motor-local-off-auto-authority-block.md)

![Motor phase-unbalance alarm interface — original educational illustration](../artwork/svg/motor-phase-unbalance-alarm-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
