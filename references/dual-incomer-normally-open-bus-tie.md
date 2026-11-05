# Dual-incomer normally-open bus tie

Shows two source-fed sections separated by a tie that is normally open.

[Canonical reference](https://eloragrid.ai/symbols/dual-incomer-normally-open-bus-tie) · [Structured record](../entries/dual-incomer-normally-open-bus-tie.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Two incoming supplies
Separated operating sections

## What it represents

Shows two source-fed sections separated by a tie that is normally open. A source and bus arrangement shows how incoming supplies and outgoing circuits can be connected. Breaker and tie positions determine which sections are energized and whether sources can become electrically paralleled.
In a switchgear lineup with two incomers and a bus tie, the single-line arrangement helps the engineer identify normal supply paths and which loads change source during a transfer. For this reference, the drawing identifies “Two incoming supplies” at the input and “Separated operating sections” at the output. Tie closing can create a source-parallel condition.
Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Two incoming supplies. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Separated operating sections. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Tie closing can create a source-parallel condition.
- Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme.

## Drawing checklist

- Label the source and connection reference for two incoming supplies.
- Identify the destination and defined state of separated operating sections.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Tie closing can create a source-parallel condition.

## Important distinction

Tie closing can create a source-parallel condition. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Two incoming supplies
- Output / connection: Separated operating sections
- Lookup label: DNBT is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchboard source and bus interfaces. Bus arrangements, breaker control and bay-level coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Busbar](busbar.md)
- [Automatic transfer switch](automatic-transfer-switch.md)
- [Dual-incomer normally-closed bus tie](dual-incomer-normally-closed-bus-tie.md)

![Dual-incomer normally-open bus tie — original educational illustration](../artwork/svg/dual-incomer-normally-open-bus-tie.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
