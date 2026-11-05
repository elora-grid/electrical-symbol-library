# Motor protection reset permissive

Allows the documented reset request when the protection and process conditions permit it.

[Canonical reference](https://eloragrid.ai/symbols/motor-protection-reset-permissive) · [Structured record](../entries/motor-protection-reset-permissive.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Reset request and fault status
Reset permission

## What it represents

Allows the documented reset request when the protection and process conditions permit it. A motor feeder combines switching, motor protection and an operating command. Starting permission, running feedback and protection trip are different signals even where one relay or controller processes all of them.
In a switchroom motor-control panel, a ventilation motor can receive an automatic start request while a local selector and the motor protection determine whether the feeder is available. For this reference, the drawing identifies “Reset request and fault status” at the input and “Reset permission” at the output. Reset is distinct from a new start command.
Link the motor tag to its contactor, protective device and process permissives. The control diagram must identify stop priority, feedback and restart philosophy without supplying unverified settings. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Reset request and fault status. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Reset permission. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Reset is distinct from a new start command.
- Link the motor tag to its contactor, protective device and process permissives. The control diagram must identify stop priority, feedback and restart philosophy without supplying unverified settings.

## Drawing checklist

- Label the source and connection reference for reset request and fault status.
- Identify the destination and defined state of reset permission.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Reset is distinct from a new start command.

## Important distinction

Reset is distinct from a new start command. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Reset request and fault status
- Output / connection: Reset permission
- Lookup label: MPRP is a library lookup label, not a standard device designation.

## Public references

- [SEL-710 motor protection and control](https://selinc.com/products/710/) — SEL. Public technical context for motor-feeder control interfaces. Motor feeder thermal, starting and control functions. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Contactor](contactor.md)
- [Motor overload trip NC contact](motor-overload-trip-nc-contact.md)
- [Motor feeder available indication](motor-feeder-available-indication.md)

![Motor protection reset permissive — original educational illustration](../artwork/svg/motor-protection-reset-permissive.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
