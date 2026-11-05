# Line-trap tuning-unit reference

Identifies the documented tuning assembly associated with the selected line trap.

[Canonical reference](https://eloragrid.ai/symbols/line-trap-tuning-unit-reference) · [Structured record](../entries/line-trap-tuning-unit-reference.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Carrier-frequency circuit
Assigned trap tuning function

## What it represents

Identifies the documented tuning assembly associated with the selected line trap. A protection communication interface carries information between circuit ends or couples a communication signal to a primary line. Its signal path is different from the power-current path even when both use part of the same installation.
In a switchyard line bay, carrier-coupling equipment can connect a protection communication terminal to the transmission conductor. Fiber-based protection uses another physical path but still needs named endpoints and channel supervision. For this reference, the drawing identifies “Carrier-frequency circuit” at the input and “Assigned trap tuning function” at the output. Tuning characteristics require the selected equipment data.
Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Carrier-frequency circuit. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Assigned trap tuning function. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Tuning characteristics require the selected equipment data.
- Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design.

## Drawing checklist

- Label the source and connection reference for carrier-frequency circuit.
- Identify the destination and defined state of assigned trap tuning function.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Tuning characteristics require the selected equipment data.

## Important distinction

Tuning characteristics require the selected equipment data. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Carrier-frequency circuit
- Output / connection: Assigned trap tuning function
- Lookup label: LTR is a library lookup label, not a standard device designation.

## Public references

- [Line traps: power-line carrier communication](https://www.gevernova.com/grid-solutions/sites/default/files/2025-09/Line-Traps-Brochure-EN-N50059-Hybrid-202504-R002.pdf) — GE Vernova. Public technical context for line carrier and protection communication interfaces. Line traps, coupling and power-line carrier communications. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [Pilot or carrier receiver relay](85-pilot-or-carrier-receiver-relay.md)
- [Carrier line-matching-unit interface](carrier-line-matching-unit-interface.md)

![Line-trap tuning-unit reference — original educational illustration](../artwork/svg/line-trap-tuning-unit-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
