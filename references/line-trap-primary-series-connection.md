# Line-trap primary series connection

Shows the series primary connection of the selected line trap serving a carrier application.

[Canonical reference](https://eloragrid.ai/symbols/line-trap-primary-series-connection) · [Structured record](../entries/line-trap-primary-series-connection.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Primary line current
Primary conductor through trap

## What it represents

Shows the series primary connection of the selected line trap serving a carrier application. A protection communication interface carries information between circuit ends or couples a communication signal to a primary line. Its signal path is different from the power-current path even when both use part of the same installation.
In a switchyard line bay, carrier-coupling equipment can connect a protection communication terminal to the transmission conductor. Fiber-based protection uses another physical path but still needs named endpoints and channel supervision. For this reference, the drawing identifies “Primary line current” at the input and “Primary conductor through trap” at the output. Carrier blocking duty differs from power-frequency conduction.
Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Primary line current. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Primary conductor through trap. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Carrier blocking duty differs from power-frequency conduction.
- Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design.

## Drawing checklist

- Label the source and connection reference for primary line current.
- Identify the destination and defined state of primary conductor through trap.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Carrier blocking duty differs from power-frequency conduction.

## Important distinction

Carrier blocking duty differs from power-frequency conduction. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Primary line current
- Output / connection: Primary conductor through trap
- Lookup label: LPSC is a library lookup label, not a standard device designation.

## Public references

- [Line traps: power-line carrier communication](https://www.gevernova.com/grid-solutions/sites/default/files/2025-09/Line-Traps-Brochure-EN-N50059-Hybrid-202504-R002.pdf) — GE Vernova. Public technical context for line carrier and protection communication interfaces. Line traps, coupling and power-line carrier communications. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [Pilot or carrier receiver relay](85-pilot-or-carrier-receiver-relay.md)
- [Line-trap tuning-unit reference](line-trap-tuning-unit-reference.md)

![Line-trap primary series connection — original educational illustration](../artwork/svg/line-trap-primary-series-connection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
