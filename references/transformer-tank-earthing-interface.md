# Transformer tank earthing interface

Shows the assigned protective bond from the transformer tank to the station earthing network.

[Canonical reference](https://eloragrid.ai/symbols/transformer-tank-earthing-interface) · [Structured record](../entries/transformer-tank-earthing-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Transformer tank earth terminal
Station earth grid

## What it represents

Shows the assigned protective bond from the transformer tank to the station earthing network. Earthing and lightning interfaces identify the connections between equipment metalwork, primary protection devices and the station earthing network. Their electrical purpose differs from their physical conductor route or electrode geometry.
In a switchyard arrangement, the earthing references help connect each primary equipment structure and surge-protection device to the correct earth-grid interface. Separate details show actual joints, sizes and installation routes. For this reference, the drawing identifies “Transformer tank earth terminal” at the input and “Station earth grid” at the output. Neutral earthing is a separate circuit function.
Name every connected item and the earthing design reference. The illustrative connection does not establish touch or step voltages, conductor sizing, lightning coverage or safe working conditions. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Transformer tank earth terminal. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Station earth grid. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Neutral earthing is a separate circuit function.
- Name every connected item and the earthing design reference. The illustrative connection does not establish touch or step voltages, conductor sizing, lightning coverage or safe working conditions.

## Drawing checklist

- Label the source and connection reference for transformer tank earth terminal.
- Identify the destination and defined state of station earth grid.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Neutral earthing is a separate circuit function.

## Important distinction

Neutral earthing is a separate circuit function. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Transformer tank earth terminal
- Output / connection: Station earth grid
- Lookup label: TTEI is a library lookup label, not a standard device designation.

## Public references

- [Earthing connections](https://www.electrical-installation.org/enwiki/Earthing_connections) — Schneider Electric, Electrical Installation Guide. Public technical context for switchyard earthing and lightning interfaces. Protective earthing, bonding and earth-electrode interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Earth electrode](iec-earth-electrode.md)
- [Lightning protection down-conductor](lightning-down-conductor.md)
- [Transformer neutral-earthing conductor reference](transformer-neutral-earthing-conductor-reference.md)

![Transformer tank earthing interface — original educational illustration](../artwork/svg/transformer-tank-earthing-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
