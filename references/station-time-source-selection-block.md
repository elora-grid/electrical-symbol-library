# Station time-source selection block

Selects the documented time reference according to source availability and quality.

[Canonical reference](https://eloragrid.ai/symbols/station-time-source-selection-block) · [Structured record](../entries/station-time-source-selection-block.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Time-source quality states
Selected clock reference

## What it represents

Selects the documented time reference according to source availability and quality. A station time system provides a shared time reference for protection records, measurements and automation. Different devices can use different timing protocols, so the time source, distribution path and quality information must remain identifiable.
In a substation, a station clock can provide precision timing to process equipment and another timing interface to event recorders. The alarm system should distinguish loss of a distribution path from loss of the external time source. For this reference, the drawing identifies “Time-source quality states” at the input and “Selected clock reference” at the output. Source priority requires the station timing design.
Show the source and client of each time connection. Required accuracy, holdover, protocol profile and loss-of-time behavior follow the selected application; a common timestamp format does not guarantee synchronized events. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Time-source quality states. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Selected clock reference. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Source priority requires the station timing design.
- Show the source and client of each time connection. Required accuracy, holdover, protocol profile and loss-of-time behavior follow the selected application; a common timestamp format does not guarantee synchronized events.

## Drawing checklist

- Label the source and connection reference for time-source quality states.
- Identify the destination and defined state of selected clock reference.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Source priority requires the station timing design.

## Important distinction

Source priority requires the station timing design. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Time-source quality states
- Output / connection: Selected clock reference
- Lookup label: STSB is a library lookup label, not a standard device designation.

## Public references

- [SEL-2488 satellite-synchronised network clock](https://selinc.com/products/2488/) — SEL. Public technical context for substation timing and event interfaces. PTP, NTP, IRIG-B, pulse distribution, reference failover and timing quality. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Phasor measurement unit](phasor-measurement-unit.md)
- [Station clock loss-of-sync alarm](station-clock-loss-of-sync-alarm.md)

![Station time-source selection block — original educational illustration](../artwork/svg/station-time-source-selection-block.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
