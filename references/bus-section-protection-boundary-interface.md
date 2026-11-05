# Bus-section protection-boundary interface

Shows where the defined protection zone changes between adjacent bus sections.

[Canonical reference](https://eloragrid.ai/symbols/bus-section-protection-boundary-interface) · [Structured record](../entries/bus-section-protection-boundary-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Section connection and CT locations
Protection boundary

## What it represents

Shows where the defined protection zone changes between adjacent bus sections. A source and bus arrangement shows how incoming supplies and outgoing circuits can be connected. Breaker and tie positions determine which sections are energized and whether sources can become electrically paralleled.
In a switchgear lineup with two incomers and a bus tie, the single-line arrangement helps the engineer identify normal supply paths and which loads change source during a transfer. For this reference, the drawing identifies “Section connection and CT locations” at the input and “Protection boundary” at the output. A physical bus joint is not automatically a protection boundary.
Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Section connection and CT locations. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Protection boundary. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A physical bus joint is not automatically a protection boundary.
- Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme.

## Drawing checklist

- Label the source and connection reference for section connection and ct locations.
- Identify the destination and defined state of protection boundary.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: A physical bus joint is not automatically a protection boundary.

## Important distinction

A physical bus joint is not automatically a protection boundary. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Section connection and CT locations
- Output / connection: Protection boundary
- Lookup label: BPI is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchboard source and bus interfaces. Bus arrangements, breaker control and bay-level coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Busbar](busbar.md)
- [Automatic transfer switch](automatic-transfer-switch.md)
- [Tie-breaker maintenance isolation interface](tie-breaker-maintenance-isolation-interface.md)

![Bus-section protection-boundary interface — original educational illustration](../artwork/svg/bus-section-protection-boundary-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
