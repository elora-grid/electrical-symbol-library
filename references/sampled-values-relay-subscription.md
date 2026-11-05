# Sampled-values relay subscription

Identifies the protection input subscription associated with a named sampled-values stream.

[Canonical reference](https://eloragrid.ai/symbols/sampled-values-relay-subscription) · [Structured record](../entries/sampled-values-relay-subscription.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Assigned sampled-values stream
Relay measurement input

## What it represents

Identifies the protection input subscription associated with a named sampled-values stream. Digital substation interfaces carry measurements, status and control information between primary equipment and protective devices. Measurement streams, event messages and time synchronization are separate dependencies even when they share an Ethernet network.
In a digital substation bay, a merging unit digitizes local measurements and a protective relay subscribes to the assigned data stream. The command return path and communication-health indications are drawn separately. For this reference, the drawing identifies “Assigned sampled-values stream” at the input and “Relay measurement input” at the output. Subscription does not establish measurement validity.
Identify publisher, subscriber, data meaning and quality handling. Protocol labels alone do not establish protection performance, compatibility or network redundancy; these need the selected system configuration and validation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Assigned sampled-values stream. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Relay measurement input. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Subscription does not establish measurement validity.
- Identify publisher, subscriber, data meaning and quality handling. Protocol labels alone do not establish protection performance, compatibility or network redundancy; these need the selected system configuration and validation.

## Drawing checklist

- Label the source and connection reference for assigned sampled-values stream.
- Identify the destination and defined state of relay measurement input.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Subscription does not establish measurement validity.

## Important distinction

Subscription does not establish measurement validity. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Assigned sampled-values stream
- Output / connection: Relay measurement input
- Lookup label: SRS is a library lookup label, not a standard device designation.

## Public references

- [Digital secondary systems: Sampled Values](https://selinc.com/solutions/digital-secondary-systems/sampled-values/) — SEL. Public technical context for digital substation process interfaces. Merging units, sampled measurements, GOOSE, process bus and network redundancy. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Numerical protection relay (IED)](numerical-protection-relay.md)
- [Optical fibre cable](optical-fibre-cable.md)
- [Sampled-values stream quality gate](sampled-values-stream-quality-gate.md)

![Sampled-values relay subscription — original educational illustration](../artwork/svg/sampled-values-relay-subscription.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
