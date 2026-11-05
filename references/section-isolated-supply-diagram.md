# Section-isolated supply diagram

Shows the intentionally disconnected supply paths of the selected bus section for diagram interpretation.

[Canonical reference](https://eloragrid.ai/symbols/section-isolated-supply-diagram) · [Structured record](../entries/section-isolated-supply-diagram.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Defined isolation boundaries
Isolated-section representation

## What it represents

Shows the intentionally disconnected supply paths of the selected bus section for diagram interpretation. A source and bus arrangement shows how incoming supplies and outgoing circuits can be connected. Breaker and tie positions determine which sections are energized and whether sources can become electrically paralleled.
In a switchgear lineup with two incomers and a bus tie, the single-line arrangement helps the engineer identify normal supply paths and which loads change source during a transfer. For this reference, the drawing identifies “Defined isolation boundaries” at the input and “Isolated-section representation” at the output. An illustration cannot establish actual field isolation.
Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Defined isolation boundaries. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Isolated-section representation. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- An illustration cannot establish actual field isolation.
- Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme.

## Drawing checklist

- Label the source and connection reference for defined isolation boundaries.
- Identify the destination and defined state of isolated-section representation.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: An illustration cannot establish actual field isolation.

## Important distinction

An illustration cannot establish actual field isolation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Defined isolation boundaries
- Output / connection: Isolated-section representation
- Lookup label: SSD is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchboard source and bus interfaces. Bus arrangements, breaker control and bay-level coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Busbar](busbar.md)
- [Automatic transfer switch](automatic-transfer-switch.md)
- [Single-incomer sectionalised switchboard](single-incomer-sectionalised-switchboard.md)

![Section-isolated supply diagram — original educational illustration](../artwork/svg/section-isolated-supply-diagram.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
