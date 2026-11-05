# Protection fiber transmit interface

Identifies the assigned optical output carrying protection communication to its remote endpoint.

[Canonical reference](https://eloragrid.ai/symbols/protection-fiber-transmit-interface) · [Structured record](../entries/protection-fiber-transmit-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Local protection data
Optical transmit path

## What it represents

Identifies the assigned optical output carrying protection communication to its remote endpoint. A protection communication interface carries information between circuit ends or couples a communication signal to a primary line. Its signal path is different from the power-current path even when both use part of the same installation.
In a switchyard line bay, carrier-coupling equipment can connect a protection communication terminal to the transmission conductor. Fiber-based protection uses another physical path but still needs named endpoints and channel supervision. For this reference, the drawing identifies “Local protection data” at the input and “Optical transmit path” at the output. Physical link availability does not prove application data validity.
Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Local protection data. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Optical transmit path. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Physical link availability does not prove application data validity.
- Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design.

## Drawing checklist

- Label the source and connection reference for local protection data.
- Identify the destination and defined state of optical transmit path.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Physical link availability does not prove application data validity.

## Important distinction

Physical link availability does not prove application data validity. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Local protection data
- Output / connection: Optical transmit path
- Lookup label: PFTI is a library lookup label, not a standard device designation.

## Public references

- [Line traps: power-line carrier communication](https://www.gevernova.com/grid-solutions/sites/default/files/2025-09/Line-Traps-Brochure-EN-N50059-Hybrid-202504-R002.pdf) — GE Vernova. Public technical context for line carrier and protection communication interfaces. Line traps, coupling and power-line carrier communications. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [Pilot or carrier receiver relay](85-pilot-or-carrier-receiver-relay.md)
- [Protection fiber receive interface](protection-fiber-receive-interface.md)

![Protection fiber transmit interface — original educational illustration](../artwork/svg/protection-fiber-transmit-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
