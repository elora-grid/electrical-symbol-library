# Protection fiber receive interface

Identifies the assigned optical input receiving the remote protection information.

[Canonical reference](https://eloragrid.ai/symbols/protection-fiber-receive-interface) · [Structured record](../entries/protection-fiber-receive-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Remote optical data
Local protection receive path

## What it represents

Identifies the assigned optical input receiving the remote protection information. A protection communication interface carries information between circuit ends or couples a communication signal to a primary line. Its signal path is different from the power-current path even when both use part of the same installation.
In a switchyard line bay, carrier-coupling equipment can connect a protection communication terminal to the transmission conductor. Fiber-based protection uses another physical path but still needs named endpoints and channel supervision. For this reference, the drawing identifies “Remote optical data” at the input and “Local protection receive path” at the output. Endpoint identity must match the configured scheme.
Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Remote optical data. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Local protection receive path. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Endpoint identity must match the configured scheme.
- Show each coupling boundary and the intended information direction. Frequency selection, channel performance, insulation duty and protective coordination require the selected communication and primary equipment design.

## Drawing checklist

- Label the source and connection reference for remote optical data.
- Identify the destination and defined state of local protection receive path.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Endpoint identity must match the configured scheme.

## Important distinction

Endpoint identity must match the configured scheme. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Remote optical data
- Output / connection: Local protection receive path
- Lookup label: PFRI is a library lookup label, not a standard device designation.

## Public references

- [Line traps: power-line carrier communication](https://www.gevernova.com/grid-solutions/sites/default/files/2025-09/Line-Traps-Brochure-EN-N50059-Hybrid-202504-R002.pdf) — GE Vernova. Public technical context for line carrier and protection communication interfaces. Line traps, coupling and power-line carrier communications. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Capacitor voltage transformer](capacitor-voltage-transformer.md)
- [Pilot or carrier receiver relay](85-pilot-or-carrier-receiver-relay.md)
- [Teleprotection command encode interface](teleprotection-command-encode-interface.md)

![Protection fiber receive interface — original educational illustration](../artwork/svg/protection-fiber-receive-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
