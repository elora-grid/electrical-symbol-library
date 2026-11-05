# Switchroom normal-lighting control branch

Identifies the control path switching the assigned normal room-lighting circuit.

[Canonical reference](https://eloragrid.ai/symbols/switchroom-normal-lighting-control-branch) · [Structured record](../entries/switchroom-normal-lighting-control-branch.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Local lighting command
Normal lighting switched supply

## What it represents

Identifies the control path switching the assigned normal room-lighting circuit. Lighting and access interfaces coordinate the electrical-room service circuits and their supervision. Normal lighting, emergency illumination and access indication have different power sources and purposes.
In a switchroom, a normal lighting branch may be switched locally while the specified emergency luminaires remain connected to their own backed-up or integral supply. For this reference, the drawing identifies “Local lighting command” at the input and “Normal lighting switched supply” at the output. Emergency lighting can have a separate unswitched supply.
Identify the lighting supply type, controlled circuit and the meaning of any test or failure output. A drawing symbol does not establish illumination levels, emergency duration or an approved egress arrangement. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Local lighting command. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Normal lighting switched supply. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Emergency lighting can have a separate unswitched supply.
- Identify the lighting supply type, controlled circuit and the meaning of any test or failure output. A drawing symbol does not establish illumination levels, emergency duration or an approved egress arrangement.

## Drawing checklist

- Label the source and connection reference for local lighting command.
- Identify the destination and defined state of normal lighting switched supply.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Emergency lighting can have a separate unswitched supply.

## Important distinction

Emergency lighting can have a separate unswitched supply. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Local lighting command
- Output / connection: Normal lighting switched supply
- Lookup label: SNCB is a library lookup label, not a standard device designation.

## Public references

- [Indoor substation: lighting, fire and auxiliary services](https://www.electrical-installation.org/enwiki/Indoor_substation) — Schneider Electric. Public technical context for switchroom lighting and access interfaces. Lighting, emergency lighting, fire provisions and substation auxiliary services. Original cause-and-effect examples require project design. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Maintained emergency luminaire plan mark](iec-maintained-emergency-luminaire.md)
- [Exit sign luminaire plan mark](iec-exit-sign-luminaire.md)
- [Switchroom emergency-lighting supply interface](switchroom-emergency-lighting-supply-interface.md)

![Switchroom normal-lighting control branch — original educational illustration](../artwork/svg/switchroom-normal-lighting-control-branch.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
