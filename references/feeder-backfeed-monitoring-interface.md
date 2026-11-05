# Feeder backfeed monitoring interface

Monitors the condition in which an outgoing circuit can energize its supplying bus.

[Canonical reference](https://eloragrid.ai/symbols/feeder-backfeed-monitoring-interface) · [Structured record](../entries/feeder-backfeed-monitoring-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Outgoing source status
Backfeed condition indication

## What it represents

Monitors the condition in which an outgoing circuit can energize its supplying bus. A source and bus arrangement shows how incoming supplies and outgoing circuits can be connected. Breaker and tie positions determine which sections are energized and whether sources can become electrically paralleled.
In a switchgear lineup with two incomers and a bus tie, the single-line arrangement helps the engineer identify normal supply paths and which loads change source during a transfer. For this reference, the drawing identifies “Outgoing source status” at the input and “Backfeed condition indication” at the output. Normal load flow does not rule out another source.
Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Outgoing source status. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Backfeed condition indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Normal load flow does not rule out another source.
- Keep normal positions, transfer limits, source independence and protection-zone boundaries visible. An arrangement drawing explains connectivity; the permitted switching sequence needs a separate approved scheme.

## Drawing checklist

- Label the source and connection reference for outgoing source status.
- Identify the destination and defined state of backfeed condition indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Normal load flow does not rule out another source.

## Important distinction

Normal load flow does not rule out another source. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Outgoing source status
- Output / connection: Backfeed condition indication
- Lookup label: FBMI is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchboard source and bus interfaces. Bus arrangements, breaker control and bay-level coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Busbar](busbar.md)
- [Automatic transfer switch](automatic-transfer-switch.md)
- [Embedded-generation export interface](embedded-generation-export-interface.md)

![Feeder backfeed monitoring interface — original educational illustration](../artwork/svg/feeder-backfeed-monitoring-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
