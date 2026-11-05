# Sampled-values stream quality gate

Uses the assigned stream-quality information before accepting the selected measurement data.

[Canonical reference](https://eloragrid.ai/symbols/sampled-values-stream-quality-gate) · [Structured record](../entries/sampled-values-stream-quality-gate.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Measurement and quality flags
Accepted measurement state

## What it represents

Uses the assigned stream-quality information before accepting the selected measurement data. Digital substation interfaces carry measurements, status and control information between primary equipment and protective devices. Measurement streams, event messages and time synchronization are separate dependencies even when they share an Ethernet network.
In a digital substation bay, a merging unit digitizes local measurements and a protective relay subscribes to the assigned data stream. The command return path and communication-health indications are drawn separately. For this reference, the drawing identifies “Measurement and quality flags” at the input and “Accepted measurement state” at the output. Invalidity handling must be explicitly configured.
Identify publisher, subscriber, data meaning and quality handling. Protocol labels alone do not establish protection performance, compatibility or network redundancy; these need the selected system configuration and validation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Measurement and quality flags. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Accepted measurement state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Invalidity handling must be explicitly configured.
- Identify publisher, subscriber, data meaning and quality handling. Protocol labels alone do not establish protection performance, compatibility or network redundancy; these need the selected system configuration and validation.

## Drawing checklist

- Label the source and connection reference for measurement and quality flags.
- Identify the destination and defined state of accepted measurement state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Invalidity handling must be explicitly configured.

## Important distinction

Invalidity handling must be explicitly configured. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Measurement and quality flags
- Output / connection: Accepted measurement state
- Lookup label: SSQG is a library lookup label, not a standard device designation.

## Public references

- [Digital secondary systems: Sampled Values](https://selinc.com/solutions/digital-secondary-systems/sampled-values/) — SEL. Public technical context for digital substation process interfaces. Merging units, sampled measurements, GOOSE, process bus and network redundancy. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Numerical protection relay (IED)](numerical-protection-relay.md)
- [Optical fibre cable](optical-fibre-cable.md)
- [Merging-unit analogue channel mapping](merging-unit-analogue-channel-mapping.md)

![Sampled-values stream quality gate — original educational illustration](../artwork/svg/sampled-values-stream-quality-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
