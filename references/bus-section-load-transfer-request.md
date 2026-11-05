# Bus-section load-transfer request

Identifies the control request to move a designated load section between source paths.

[Canonical reference](https://eloragrid.ai/symbols/bus-section-load-transfer-request) · [Structured record](../entries/bus-section-load-transfer-request.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Transfer request
Selected section-transfer command

## What it represents

Identifies the control request to move a designated load section between source paths. A source and bus arrangement shows how incoming supplies and outgoing circuits can be connected. Breaker and tie positions determine which sections are energized and whether sources can become electrically paralleled.
In a switchgear lineup with two incomers and a bus tie, the single-line arrangement helps the engineer identify normal supply paths and which loads change source during a transfer. For this reference, the drawing identifies “Transfer request” at the input and “Selected section-transfer command” at the output. Load interruption and paralleling depend on the scheme.
Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Transfer request. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Selected section-transfer command. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Load interruption and paralleling depend on the scheme.
- Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme.

## Drawing checklist

- Label the source and connection reference for transfer request.
- Identify the destination and defined state of selected section-transfer command.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Load interruption and paralleling depend on the scheme.

## Important distinction

Load interruption and paralleling depend on the scheme. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Transfer request
- Output / connection: Selected section-transfer command
- Lookup label: BLR is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchboard source and bus interfaces. Bus arrangements, breaker control and bay-level coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Busbar](busbar.md)
- [Automatic transfer switch](automatic-transfer-switch.md)
- [Source-availability selection interface](source-availability-selection-interface.md)

![Bus-section load-transfer request — original educational illustration](../artwork/svg/bus-section-load-transfer-request.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
