# Disconnector grouped-pole operating reference

Identifies the documented common drive or coordinated operation of the assigned phase poles.

[Canonical reference](https://eloragrid.ai/symbols/disconnector-grouped-pole-operating-reference) · [Structured record](../entries/disconnector-grouped-pole-operating-reference.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Grouped pole drive
Coordinated disconnector position

## What it represents

Identifies the documented common drive or coordinated operation of the assigned phase poles. Disconnector and earthing references identify different mechanical constructions and connection duties within a yard. The primary diagram shows which conductors are joined or earthed; the equipment drawing explains how its contacts and supports move.
In a switchyard bay, a bus selector can use a different physical construction from a line disconnector. Each device still needs an identified operating mechanism, position indication and interlocking interface. For this reference, the drawing identifies “Grouped pole drive” at the input and “Coordinated disconnector position” at the output. Pole operation must match the installed linkage.
The construction name does not establish load-breaking capability, short-circuit making duty or operating permission. Verify these properties in the selected equipment data and the station interlocking scheme. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Grouped pole drive. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Coordinated disconnector position. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Pole operation must match the installed linkage.
- The construction name does not establish load-breaking capability, short-circuit making duty or operating permission. Verify these properties in the selected equipment data and the station interlocking scheme.

## Drawing checklist

- Label the source and connection reference for grouped pole drive.
- Identify the destination and defined state of coordinated disconnector position.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Pole operation must match the installed linkage.

## Important distinction

Pole operation must match the installed linkage. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Grouped pole drive
- Output / connection: Coordinated disconnector position
- Lookup label: DGOR is a library lookup label, not a standard device designation.

## Public references

- [Disconnectors and earthing switches](https://www.siemens-energy.com/global/en/home/products-services/product-offerings/disconnectors-earthing-switches.html) — Siemens Energy. Public technical context for disconnector and earthing applications. Disconnector construction, earthing switches and operating mechanisms. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Disconnector](disconnector.md)
- [Earthing switch](earthing-switch.md)
- [Centre-break disconnector application reference](centre-break-disconnector-application-reference.md)

![Disconnector grouped-pole operating reference — original educational illustration](../artwork/svg/disconnector-grouped-pole-operating-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
