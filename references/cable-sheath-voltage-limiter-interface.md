# Cable sheath voltage-limiter interface

Identifies the selected sheath overvoltage-limiter connection within its bonding arrangement.

[Canonical reference](https://eloragrid.ai/symbols/cable-sheath-voltage-limiter-interface) · [Structured record](../entries/cable-sheath-voltage-limiter-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Cable sheath and earth
Sheath surge-limiting path

## What it represents

Identifies the selected sheath overvoltage-limiter connection within its bonding arrangement. Earthing and lightning interfaces identify the connections between equipment metalwork, primary protection devices and the station earthing network. Their electrical purpose differs from their physical conductor route or electrode geometry.
In a switchyard arrangement, the earthing references help connect each primary equipment structure and surge-protection device to the correct earth-grid interface. Separate details show actual joints, sizes and installation routes. For this reference, the drawing identifies “Cable sheath and earth” at the input and “Sheath surge-limiting path” at the output. Limiter selection depends on the sheath bonding design.
Name every connected item and the earthing design reference. The illustrative connection does not establish touch or step voltages, conductor sizing, lightning coverage or safe working conditions. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Cable sheath and earth. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Sheath surge-limiting path. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Limiter selection depends on the sheath bonding design.
- Name every connected item and the earthing design reference. The illustrative connection does not establish touch or step voltages, conductor sizing, lightning coverage or safe working conditions.

## Drawing checklist

- Label the source and connection reference for cable sheath and earth.
- Identify the destination and defined state of sheath surge-limiting path.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Limiter selection depends on the sheath bonding design.

## Important distinction

Limiter selection depends on the sheath bonding design. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Cable sheath and earth
- Output / connection: Sheath surge-limiting path
- Lookup label: CSVI is a library lookup label, not a standard device designation.

## Public references

- [Earthing connections](https://www.electrical-installation.org/enwiki/Earthing_connections) — Schneider Electric, Electrical Installation Guide. Public technical context for switchyard earthing and lightning interfaces. Protective earthing, bonding and earth-electrode interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Earth electrode](iec-earth-electrode.md)
- [Lightning protection down-conductor](lightning-down-conductor.md)
- [Link-box bonding terminal reference](link-box-bonding-terminal-reference.md)

![Cable sheath voltage-limiter interface — original educational illustration](../artwork/svg/cable-sheath-voltage-limiter-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
