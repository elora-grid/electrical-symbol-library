# Fire-damper closed-proof interface

Receives confirmation of the assigned fire damper's documented closed position.

[Canonical reference](https://eloragrid.ai/symbols/fire-damper-closed-proof-interface) · [Structured record](../entries/fire-damper-closed-proof-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Damper closed contact
Fire-damper position status

## What it represents

Receives confirmation of the assigned fire damper's documented closed position. A fire-system interface passes defined indications and control requests between the fire installation and electrical equipment. The receiving circuit must identify the exact purpose of the signal and the equipment it affects.
In a switchroom, the fire panel may report detection, system faults and a separately documented shutdown request to the station controller. These signals have different meanings and must not be combined into one unexplained alarm. For this reference, the drawing identifies “Damper closed contact” at the input and “Fire-damper position status” at the output. Position indication is not a fire rating.
Use the coordinated fire cause-and-effect schedule to define each response. Original interface blocks describe signal roles without specifying suppression operation, evacuation behavior or life-safety performance. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Damper closed contact. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Fire-damper position status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Position indication is not a fire rating.
- Use the coordinated fire cause-and-effect schedule to define each response. Original interface blocks describe signal roles without specifying suppression operation, evacuation behavior or life-safety performance.

## Drawing checklist

- Label the source and connection reference for damper closed contact.
- Identify the destination and defined state of fire-damper position status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Position indication is not a fire rating.

## Important distinction

Position indication is not a fire rating. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Damper closed contact
- Output / connection: Fire-damper position status
- Lookup label: FCI is a library lookup label, not a standard device designation.

## Public references

- [Indoor substation: lighting, fire and auxiliary services](https://www.electrical-installation.org/enwiki/Indoor_substation) — Schneider Electric. Public technical context for switchroom fire and emergency interfaces. Lighting, emergency lighting, fire provisions and substation auxiliary services. Original cause-and-effect examples require project design. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Fire alarm control panel plan symbol](iec-fire-alarm-control-panel-plan-symbol.md)
- [Battery fire-system interface panel](ga-battery-fire-system-interface-panel.md)
- [Fire-system equipment shutdown request](fire-system-equipment-shutdown-request.md)

![Fire-damper closed-proof interface — original educational illustration](../artwork/svg/fire-damper-closed-proof-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
