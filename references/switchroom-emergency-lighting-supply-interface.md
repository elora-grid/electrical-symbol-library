# Switchroom emergency-lighting supply interface

Marks the documented supply boundary serving the room's emergency lighting system.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-emergency-lighting-supply-interface) · [Structured record](../entries/switchroom-emergency-lighting-supply-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Emergency supply source
Emergency lighting circuit

## What it represents

Marks the documented supply boundary serving the room's emergency lighting system. Lighting and access interfaces coordinate the electrical-room service circuits and their supervision. Normal lighting, emergency illumination and access indication have different power sources and purposes.
In a switchroom, a normal lighting branch may be switched locally while the specified emergency luminaires remain connected to their own backed-up or integral supply. For this reference, the drawing identifies “Emergency supply source” at the input and “Emergency lighting circuit” at the output. Supply type and autonomy follow the lighting design.
Identify the lighting supply type, controlled circuit and the meaning of any test or failure output. A drawing symbol does not establish illumination levels, emergency duration or an approved egress arrangement. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Emergency supply source. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Emergency lighting circuit. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Supply type and autonomy follow the lighting design.
- Identify the lighting supply type, controlled circuit and the meaning of any test or failure output. A drawing symbol does not establish illumination levels, emergency duration or an approved egress arrangement.

## Drawing checklist

- Label the source and connection reference for emergency supply source.
- Identify the destination and defined state of emergency lighting circuit.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Supply type and autonomy follow the lighting design.

## Important distinction

Supply type and autonomy follow the lighting design. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Emergency supply source
- Output / connection: Emergency lighting circuit
- Lookup label: SESI is a library lookup label, not a standard device designation.

## Public references

- [Indoor substation: lighting, fire and auxiliary services](https://www.electrical-installation.org/enwiki/Indoor_substation) — Schneider Electric. Public technical context for switchroom lighting and access interfaces. Lighting, emergency lighting, fire provisions and substation auxiliary services. Original cause-and-effect examples require project design. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Maintained emergency luminaire plan mark](iec-maintained-emergency-luminaire.md)
- [Exit sign luminaire plan mark](iec-exit-sign-luminaire.md)
- [Central-battery lighting outgoing branch](central-battery-lighting-outgoing-branch.md)

![Switchroom emergency-lighting supply interface — original educational illustration](../artwork/svg/switchroom-emergency-lighting-supply-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
