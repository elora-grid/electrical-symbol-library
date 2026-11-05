# Station clock loss-of-sync alarm

Reports loss of the station clock's accepted synchronization condition.

[Canonical reference](https://eloragrid.ai/symbols/station-clock-loss-of-sync-alarm) · [Structured record](../entries/station-clock-loss-of-sync-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Clock synchronization health
Station clock alarm

## What it represents

Reports loss of the station clock's accepted synchronization condition. A station time system provides a shared time reference for protection records, measurements and automation. Different devices can use different timing protocols, so the time source, distribution path and quality information must remain identifiable.
In a substation, a station clock can provide precision timing to process equipment and another timing interface to event recorders. The alarm system should distinguish loss of a distribution path from loss of the external time source. For this reference, the drawing identifies “Clock synchronization health” at the input and “Station clock alarm” at the output. The clock may continue providing holdover outputs.
Show the source and client of each time connection. Required accuracy, holdover, protocol profile and loss-of-time behavior follow the selected application; a common timestamp format does not guarantee synchronized events. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Clock synchronization health. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Station clock alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The clock may continue providing holdover outputs.
- Show the source and client of each time connection. Required accuracy, holdover, protocol profile and loss-of-time behavior follow the selected application; a common timestamp format does not guarantee synchronized events.

## Drawing checklist

- Label the source and connection reference for clock synchronization health.
- Identify the destination and defined state of station clock alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The clock may continue providing holdover outputs.

## Important distinction

The clock may continue providing holdover outputs. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Clock synchronization health
- Output / connection: Station clock alarm
- Lookup label: SCLA is a library lookup label, not a standard device designation.

## Public references

- [SEL-2488 satellite-synchronised network clock](https://selinc.com/products/2488/) — SEL. Public technical context for substation timing and event interfaces. PTP, NTP, IRIG-B, pulse distribution, reference failover and timing quality. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Phasor measurement unit](phasor-measurement-unit.md)
- [Time-client quality rejection interface](time-client-quality-rejection-interface.md)

![Station clock loss-of-sync alarm — original educational illustration](../artwork/svg/station-clock-loss-of-sync-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
