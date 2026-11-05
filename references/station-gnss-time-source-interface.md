# Station GNSS time-source interface

Identifies the external satellite-based time reference feeding the selected station clock.

[Canonical reference](https://eloragrid.ai/symbols/station-gnss-time-source-interface) · [Structured record](../entries/station-gnss-time-source-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
GNSS time reception
Station clock reference

## What it represents

Identifies the external satellite-based time reference feeding the selected station clock. A station time system provides a shared time reference for protection records, measurements and automation. Different devices can use different timing protocols, so the time source, distribution path and quality information must remain identifiable.
In a substation, a station clock can provide precision timing to process equipment and another timing interface to event recorders. The alarm system should distinguish loss of a distribution path from loss of the external time source. For this reference, the drawing identifies “GNSS time reception” at the input and “Station clock reference” at the output. Reception quality affects the clock operating state.
Show the source and client of each time connection. Required accuracy, holdover, protocol profile and loss-of-time behavior follow the selected application; a common timestamp format does not guarantee synchronized events. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: GNSS time reception. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Station clock reference. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Reception quality affects the clock operating state.
- Show the source and client of each time connection. Required accuracy, holdover, protocol profile and loss-of-time behavior follow the selected application; a common timestamp format does not guarantee synchronized events.

## Drawing checklist

- Label the source and connection reference for gnss time reception.
- Identify the destination and defined state of station clock reference.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Reception quality affects the clock operating state.

## Important distinction

Reception quality affects the clock operating state. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: GNSS time reception
- Output / connection: Station clock reference
- Lookup label: SGTI is a library lookup label, not a standard device designation.

## Public references

- [SEL-2488 satellite-synchronised network clock](https://selinc.com/products/2488/) — SEL. Public technical context for substation timing and event interfaces. PTP, NTP, IRIG-B, pulse distribution, reference failover and timing quality. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Phasor measurement unit](phasor-measurement-unit.md)
- [Station clock holdover-state indication](station-clock-holdover-state-indication.md)

![Station GNSS time-source interface — original educational illustration](../artwork/svg/station-gnss-time-source-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
