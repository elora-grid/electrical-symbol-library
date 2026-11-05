# Process-bus maintenance isolation boundary

Marks the defined separation of a selected bay's digital-secondary interfaces for maintenance planning.

[Canonical reference](https://eloragrid.ai/symbols/process-bus-maintenance-isolation-boundary) · [Structured record](../entries/process-bus-maintenance-isolation-boundary.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Named bay data interfaces
Defined process-bus boundary

## What it represents

Marks the defined separation of a selected bay's digital-secondary interfaces for maintenance planning. Digital substation interfaces carry measurements, status and control information between primary equipment and protective devices. Measurement streams, event messages and time synchronization are separate dependencies even when they share an Ethernet network.
In a digital substation bay, a merging unit digitizes local measurements and a protective relay subscribes to the assigned data stream. The command return path and communication-health indications are drawn separately. For this reference, the drawing identifies “Named bay data interfaces” at the input and “Defined process-bus boundary” at the output. A network boundary is not primary equipment isolation.
Identify publisher, subscriber, data meaning and quality handling. Protocol labels alone do not establish protection performance, compatibility or network redundancy; these need the selected system configuration and validation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Named bay data interfaces. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Defined process-bus boundary. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A network boundary is not primary equipment isolation.
- Identify publisher, subscriber, data meaning and quality handling. Protocol labels alone do not establish protection performance, compatibility or network redundancy; these need the selected system configuration and validation.

## Drawing checklist

- Label the source and connection reference for named bay data interfaces.
- Identify the destination and defined state of defined process-bus boundary.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: A network boundary is not primary equipment isolation.

## Important distinction

A network boundary is not primary equipment isolation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Named bay data interfaces
- Output / connection: Defined process-bus boundary
- Lookup label: PMIB is a library lookup label, not a standard device designation.

## Public references

- [Digital secondary systems: Sampled Values](https://selinc.com/solutions/digital-secondary-systems/sampled-values/) — SEL. Public technical context for digital substation process interfaces. Merging units, sampled measurements, GOOSE, process bus and network redundancy. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Numerical protection relay (IED)](numerical-protection-relay.md)
- [Optical fibre cable](optical-fibre-cable.md)
- [Digital-secondary channel identity cross-reference](digital-secondary-channel-identity-cross-reference.md)

![Process-bus maintenance isolation boundary — original educational illustration](../artwork/svg/process-bus-maintenance-isolation-boundary.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
