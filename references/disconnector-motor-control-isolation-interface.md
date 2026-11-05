# Disconnector motor-control isolation interface

Marks the assigned separation of the electric drive control supply.

[Canonical reference](https://eloragrid.ai/symbols/disconnector-motor-control-isolation-interface) · [Structured record](../entries/disconnector-motor-control-isolation-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Drive supply isolation device
Motor-control isolation boundary

## What it represents

Marks the assigned separation of the electric drive control supply. Disconnector and earthing references identify different mechanical constructions and connection duties within a yard. The primary diagram shows which conductors are joined or earthed; the equipment drawing explains how its contacts and supports move.
In a switchyard bay, a bus selector can use a different physical construction from a line disconnector. Each device still needs an identified operating mechanism, position indication and interlocking interface. For this reference, the drawing identifies “Drive supply isolation device” at the input and “Motor-control isolation boundary” at the output. Control isolation does not establish primary isolation.
The construction name does not establish load-breaking capability, short-circuit making duty or operating permission. Verify these properties in the selected equipment data and the station interlocking scheme. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Drive supply isolation device. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Motor-control isolation boundary. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Control isolation does not establish primary isolation.
- The construction name does not establish load-breaking capability, short-circuit making duty or operating permission. Verify these properties in the selected equipment data and the station interlocking scheme.

## Drawing checklist

- Label the source and connection reference for drive supply isolation device.
- Identify the destination and defined state of motor-control isolation boundary.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Control isolation does not establish primary isolation.

## Important distinction

Control isolation does not establish primary isolation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Drive supply isolation device
- Output / connection: Motor-control isolation boundary
- Lookup label: DMII is a library lookup label, not a standard device designation.

## Public references

- [Disconnectors and earthing switches](https://www.siemens-energy.com/global/en/home/products-services/product-offerings/disconnectors-earthing-switches.html) — Siemens Energy. Public technical context for disconnector and earthing applications. Disconnector construction, earthing switches and operating mechanisms. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Disconnector](disconnector.md)
- [Earthing switch](earthing-switch.md)
- [Induced-current earthing-switch duty reference](induced-current-earthing-switch-duty-reference.md)

![Disconnector motor-control isolation interface — original educational illustration](../artwork/svg/disconnector-motor-control-isolation-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
