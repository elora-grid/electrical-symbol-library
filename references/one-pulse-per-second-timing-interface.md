# One-pulse-per-second timing interface

Identifies the pulse timing connection associated with the selected time equipment.

[Canonical reference](https://eloragrid.ai/symbols/one-pulse-per-second-timing-interface) · [Structured record](../entries/one-pulse-per-second-timing-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Timing pulse source
PPS client reference

## What it represents

Identifies the pulse timing connection associated with the selected time equipment. A station time system provides a shared time reference for protection records, measurements and automation. Different devices can use different timing protocols, so the time source, distribution path and quality information must remain identifiable.
In a substation, a station clock can provide precision timing to process equipment and another timing interface to event recorders. The alarm system should distinguish loss of a distribution path from loss of the external time source. For this reference, the drawing identifies “Timing pulse source” at the input and “PPS client reference” at the output. Pulse timing may need a separate date information path.
Show the source and client of each time connection. Required accuracy, holdover, protocol profile and loss-of-time behavior follow the selected application; a common timestamp format does not guarantee synchronized events. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Timing pulse source. Identify its source device or document and the state represented on the drawing.
- Follow the named output: PPS client reference. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Pulse timing may need a separate date information path.
- Show the source and client of each time connection. Required accuracy, holdover, protocol profile and loss-of-time behavior follow the selected application; a common timestamp format does not guarantee synchronized events.

## Drawing checklist

- Label the source and connection reference for timing pulse source.
- Identify the destination and defined state of pps client reference.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Pulse timing may need a separate date information path.

## Important distinction

Pulse timing may need a separate date information path. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Timing pulse source
- Output / connection: PPS client reference
- Lookup label: OTI is a library lookup label, not a standard device designation.

## Public references

- [SEL-2488 satellite-synchronised network clock](https://selinc.com/products/2488/) — SEL. Public technical context for substation timing and event interfaces. PTP, NTP, IRIG-B, pulse distribution, reference failover and timing quality. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Phasor measurement unit](phasor-measurement-unit.md)
- [Station time-source selection block](station-time-source-selection-block.md)

![One-pulse-per-second timing interface — original educational illustration](../artwork/svg/one-pulse-per-second-timing-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
