# NTP station time-service interface

Shows the station network time service used by the assigned supervisory devices.

[Canonical reference](https://eloragrid.ai/symbols/ntp-station-time-service-interface) · [Structured record](../entries/ntp-station-time-service-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Station time server
NTP client time reference

## What it represents

Shows the station network time service used by the assigned supervisory devices. A station time system provides a shared time reference for protection records, measurements and automation. Different devices can use different timing protocols, so the time source, distribution path and quality information must remain identifiable.
In a substation, a station clock can provide precision timing to process equipment and another timing interface to event recorders. The alarm system should distinguish loss of a distribution path from loss of the external time source. For this reference, the drawing identifies “Station time server” at the input and “NTP client time reference” at the output. NTP suitability depends on the required timing performance.
Show the source and client of each time connection. Required accuracy, holdover, protocol profile and loss-of-time behavior follow the selected application; a common timestamp format does not guarantee synchronized events. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Station time server. Identify its source device or document and the state represented on the drawing.
- Follow the named output: NTP client time reference. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- NTP suitability depends on the required timing performance.
- Show the source and client of each time connection. Required accuracy, holdover, protocol profile and loss-of-time behavior follow the selected application; a common timestamp format does not guarantee synchronized events.

## Drawing checklist

- Label the source and connection reference for station time server.
- Identify the destination and defined state of ntp client time reference.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: NTP suitability depends on the required timing performance.

## Important distinction

NTP suitability depends on the required timing performance. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Station time server
- Output / connection: NTP client time reference
- Lookup label: NSTI is a library lookup label, not a standard device designation.

## Public references

- [SEL-2488 satellite-synchronised network clock](https://selinc.com/products/2488/) — SEL. Public technical context for substation timing and event interfaces. PTP, NTP, IRIG-B, pulse distribution, reference failover and timing quality. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Phasor measurement unit](phasor-measurement-unit.md)
- [One-pulse-per-second timing interface](one-pulse-per-second-timing-interface.md)

![NTP station time-service interface — original educational illustration](../artwork/svg/ntp-station-time-service-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
