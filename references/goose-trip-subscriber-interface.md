# GOOSE trip subscriber interface

Maps the assigned received trip message to its defined local control output.

[Canonical reference](https://eloragrid.ai/symbols/goose-trip-subscriber-interface) · [Structured record](../entries/goose-trip-subscriber-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Subscribed trip event
Assigned local trip request

## What it represents

Maps the assigned received trip message to its defined local control output. Digital substation interfaces carry measurements, status and control information between primary equipment and protective devices. Measurement streams, event messages and time synchronization are separate dependencies even when they share an Ethernet network.
In a digital substation bay, a merging unit digitizes local measurements and a protective relay subscribes to the assigned data stream. The command return path and communication-health indications are drawn separately. For this reference, the drawing identifies “Subscribed trip event” at the input and “Assigned local trip request” at the output. Authority and quality handling require configuration.
Identify publisher, subscriber, data meaning and quality handling. Protocol labels alone do not establish protection performance, compatibility or network redundancy; these need the selected system configuration and validation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Subscribed trip event. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Assigned local trip request. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Authority and quality handling require configuration.
- Identify publisher, subscriber, data meaning and quality handling. Protocol labels alone do not establish protection performance, compatibility or network redundancy; these need the selected system configuration and validation.

## Drawing checklist

- Label the source and connection reference for subscribed trip event.
- Identify the destination and defined state of assigned local trip request.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Authority and quality handling require configuration.

## Important distinction

Authority and quality handling require configuration. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Subscribed trip event
- Output / connection: Assigned local trip request
- Lookup label: GTSI is a library lookup label, not a standard device designation.

## Public references

- [Digital secondary systems: Sampled Values](https://selinc.com/solutions/digital-secondary-systems/sampled-values/) — SEL. Public technical context for digital substation process interfaces. Merging units, sampled measurements, GOOSE, process bus and network redundancy. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Numerical protection relay (IED)](numerical-protection-relay.md)
- [Optical fibre cable](optical-fibre-cable.md)
- [GOOSE interlock publisher interface](goose-interlock-publisher-interface.md)

![GOOSE trip subscriber interface — original educational illustration](../artwork/svg/goose-trip-subscriber-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
