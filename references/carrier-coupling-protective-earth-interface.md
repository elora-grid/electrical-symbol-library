# Carrier-coupling protective earth interface

Identifies the documented protective earth connection of the selected carrier coupling assembly.

[Canonical reference](https://eloragrid.ai/symbols/carrier-coupling-protective-earth-interface) · [Structured record](../entries/carrier-coupling-protective-earth-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Coupling assembly earth terminal
Station earth connection

## What it represents

Identifies the documented protective earth connection of the selected carrier coupling assembly. A protection communication interface carries information between circuit ends or couples a communication signal to a primary line. Its signal path is different from the power-current path even when both use part of the same installation.
In a switchyard line bay, carrier-coupling equipment can connect a protection communication terminal to the transmission conductor. Fiber-based protection uses another physical path but still needs named endpoints and channel supervision. For this reference, the drawing identifies “Coupling assembly earth terminal” at the input and “Station earth connection” at the output. The earth interface is not a primary switching permission.
Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Coupling assembly earth terminal. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Station earth connection. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The earth interface is not a primary switching permission.
- Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design.

## Drawing checklist

- Label the source and connection reference for coupling assembly earth terminal.
- Identify the destination and defined state of station earth connection.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The earth interface is not a primary switching permission.

## Important distinction

The earth interface is not a primary switching permission. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Coupling assembly earth terminal
- Output / connection: Station earth connection
- Lookup label: CPEI is a library lookup label, not a standard device designation.

## Public references

- [Line traps: power-line carrier communication](https://www.gevernova.com/grid-solutions/sites/default/files/2025-09/Line-Traps-Brochure-EN-N50059-Hybrid-202504-R002.pdf) — GE Vernova. Public technical context for line carrier and protection communication interfaces. Line traps, coupling and power-line carrier communications. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [Pilot or carrier receiver relay](85-pilot-or-carrier-receiver-relay.md)
- [Carrier coupling drain-coil reference](carrier-coupling-drain-coil-reference.md)

![Carrier-coupling protective earth interface — original educational illustration](../artwork/svg/carrier-coupling-protective-earth-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
