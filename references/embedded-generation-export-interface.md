# Embedded-generation export interface

Marks the switchboard point where local generation can feed toward the external system.

[Canonical reference](https://eloragrid.ai/symbols/embedded-generation-export-interface) · [Structured record](../entries/embedded-generation-export-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Generation and utility measurements
Export connection information

## What it represents

Marks the switchboard point where local generation can feed toward the external system. A source and bus arrangement shows how incoming supplies and outgoing circuits can be connected. Breaker and tie positions determine which sections are energized and whether sources can become electrically paralleled.
In a switchgear lineup with two incomers and a bus tie, the single-line arrangement helps the engineer identify normal supply paths and which loads change source during a transfer. For this reference, the drawing identifies “Generation and utility measurements” at the input and “Export connection information” at the output. Export permission and protection are separate requirements.
Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Generation and utility measurements. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Export connection information. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Export permission and protection are separate requirements.
- Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme.

## Drawing checklist

- Label the source and connection reference for generation and utility measurements.
- Identify the destination and defined state of export connection information.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Export permission and protection are separate requirements.

## Important distinction

Export permission and protection are separate requirements. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Generation and utility measurements
- Output / connection: Export connection information
- Lookup label: EEI is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchboard source and bus interfaces. Bus arrangements, breaker control and bay-level coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Busbar](busbar.md)
- [Automatic transfer switch](automatic-transfer-switch.md)
- [Bus-section load-transfer request](bus-section-load-transfer-request.md)

![Embedded-generation export interface — original educational illustration](../artwork/svg/embedded-generation-export-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
