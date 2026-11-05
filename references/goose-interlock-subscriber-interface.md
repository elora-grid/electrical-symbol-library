# GOOSE interlock subscriber interface

Receives the assigned equipment-state message used by a local interlock decision.

[Canonical reference](https://eloragrid.ai/symbols/goose-interlock-subscriber-interface) · [Structured record](../entries/goose-interlock-subscriber-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Subscribed equipment states
Local interlock information

## What it represents

Receives the assigned equipment-state message used by a local interlock decision. Digital substation interfaces carry measurements, status and control information between primary equipment and protective devices. Measurement streams, event messages and time synchronization are separate dependencies even when they share an Ethernet network.
In a digital substation bay, a merging unit digitizes local measurements and a protective relay subscribes to the assigned data stream. The command return path and communication-health indications are drawn separately. For this reference, the drawing identifies “Subscribed equipment states” at the input and “Local interlock information” at the output. Missing-data response must be defined.
Identify publisher, subscriber, data meaning and quality handling. Protocol labels alone do not establish protection performance, compatibility or network redundancy; these need the selected system configuration and validation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Subscribed equipment states. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Local interlock information. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Missing-data response must be defined.
- Identify publisher, subscriber, data meaning and quality handling. Protocol labels alone do not establish protection performance, compatibility or network redundancy; these need the selected system configuration and validation.

## Drawing checklist

- Label the source and connection reference for subscribed equipment states.
- Identify the destination and defined state of local interlock information.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Missing-data response must be defined.

## Important distinction

Missing-data response must be defined. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Subscribed equipment states
- Output / connection: Local interlock information
- Lookup label: GISI is a library lookup label, not a standard device designation.

## Public references

- [Digital secondary systems: Sampled Values](https://selinc.com/solutions/digital-secondary-systems/sampled-values/) — SEL. Public technical context for digital substation process interfaces. Merging units, sampled measurements, GOOSE, process bus and network redundancy. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Numerical protection relay (IED)](numerical-protection-relay.md)
- [Optical fibre cable](optical-fibre-cable.md)
- [GOOSE supervision timeout interface](goose-supervision-timeout-interface.md)

![GOOSE interlock subscriber interface — original educational illustration](../artwork/svg/goose-interlock-subscriber-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
