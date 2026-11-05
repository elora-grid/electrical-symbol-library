# Power-line carrier coupling-capacitor interface

Identifies the coupling boundary between a carrier communication signal and the assigned primary conductor.

[Canonical reference](https://eloragrid.ai/symbols/power-line-carrier-coupling-capacitor-interface) · [Structured record](../entries/power-line-carrier-coupling-capacitor-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Carrier coupling signal
Primary-line carrier connection

## What it represents

Identifies the coupling boundary between a carrier communication signal and the assigned primary conductor. A protection communication interface carries information between circuit ends or couples a communication signal to a primary line. Its signal path is different from the power-current path even when both use part of the same installation.
In a switchyard line bay, carrier-coupling equipment can connect a protection communication terminal to the transmission conductor. Fiber-based protection uses another physical path but still needs named endpoints and channel supervision. For this reference, the drawing identifies “Carrier coupling signal” at the input and “Primary-line carrier connection” at the output. Coupling equipment requires the selected insulation arrangement.
Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Carrier coupling signal. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Primary-line carrier connection. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Coupling equipment requires the selected insulation arrangement.
- Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design.

## Drawing checklist

- Label the source and connection reference for carrier coupling signal.
- Identify the destination and defined state of primary-line carrier connection.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Coupling equipment requires the selected insulation arrangement.

## Important distinction

Coupling equipment requires the selected insulation arrangement. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Carrier coupling signal
- Output / connection: Primary-line carrier connection
- Lookup label: PCCI is a library lookup label, not a standard device designation.

## Public references

- [Line traps: power-line carrier communication](https://www.gevernova.com/grid-solutions/sites/default/files/2025-09/Line-Traps-Brochure-EN-N50059-Hybrid-202504-R002.pdf) — GE Vernova. Public technical context for line carrier and protection communication interfaces. Line traps, coupling and power-line carrier communications. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [Pilot or carrier receiver relay](85-pilot-or-carrier-receiver-relay.md)
- [Line-trap primary series connection](line-trap-primary-series-connection.md)

![Power-line carrier coupling-capacitor interface — original educational illustration](../artwork/svg/power-line-carrier-coupling-capacitor-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
