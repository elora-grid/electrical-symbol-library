# Self-contained emergency-lighting test interface

Shows the control interface used by the selected self-contained lighting test system.

[Canonical reference](https://eloragrid.ai/symbols/self-contained-emergency-lighting-test-interface) · [Structured record](../entries/self-contained-emergency-lighting-test-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Lighting test request
Assigned luminaire test input

## What it represents

Shows the control interface used by the selected self-contained lighting test system. Lighting and access interfaces coordinate the electrical-room service circuits and their supervision. Normal lighting, emergency illumination and access indication have different power sources and purposes.
In a switchroom, a normal lighting branch may be switched locally while the specified emergency luminaires remain connected to their own backed-up or integral supply. For this reference, the drawing identifies “Lighting test request” at the input and “Assigned luminaire test input” at the output. Testing method follows the luminaire system documentation.
Identify the lighting supply type, controlled circuit and the meaning of any test or failure output. A drawing symbol does not establish illumination levels, emergency duration or an approved egress arrangement. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Lighting test request. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Assigned luminaire test input. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Testing method follows the luminaire system documentation.
- Identify the lighting supply type, controlled circuit and the meaning of any test or failure output. A drawing symbol does not establish illumination levels, emergency duration or an approved egress arrangement.

## Drawing checklist

- Label the source and connection reference for lighting test request.
- Identify the destination and defined state of assigned luminaire test input.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Testing method follows the luminaire system documentation.

## Important distinction

Testing method follows the luminaire system documentation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Lighting test request
- Output / connection: Assigned luminaire test input
- Lookup label: SETI is a library lookup label, not a standard device designation.

## Public references

- [Indoor substation: lighting, fire and auxiliary services](https://www.electrical-installation.org/enwiki/Indoor_substation) — Schneider Electric. Public technical context for switchroom lighting and access interfaces. Lighting, emergency lighting, fire provisions and substation auxiliary services. Original cause-and-effect examples require project design. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Maintained emergency luminaire plan mark](iec-maintained-emergency-luminaire.md)
- [Exit sign luminaire plan mark](iec-exit-sign-luminaire.md)
- [Emergency-lighting common-failure interface](emergency-lighting-common-failure-interface.md)

![Self-contained emergency-lighting test interface — original educational illustration](../artwork/svg/self-contained-emergency-lighting-test-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
