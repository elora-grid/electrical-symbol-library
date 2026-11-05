# Transformer neutral-earthing conductor reference

Identifies the conductor connecting the assigned transformer neutral to its specified earthing equipment.

[Canonical reference](https://eloragrid.ai/symbols/transformer-neutral-earthing-conductor-reference) · [Structured record](../entries/transformer-neutral-earthing-conductor-reference.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Transformer neutral
Neutral-earthing equipment

## What it represents

Identifies the conductor connecting the assigned transformer neutral to its specified earthing equipment. Earthing and lightning interfaces identify the connections between equipment metalwork, primary protection devices and the station earthing network. Their electrical purpose differs from their physical conductor route or electrode geometry.
In a switchyard arrangement, the earthing references help connect each primary equipment structure and surge-protection device to the correct earth-grid interface. Separate details show actual joints, sizes and installation routes. For this reference, the drawing identifies “Transformer neutral” at the input and “Neutral-earthing equipment” at the output. Its duty differs from a tank protective bond.
Name every connected item and the earthing design reference. The illustrative connection does not establish touch or step voltages, conductor sizing, lightning coverage or safe working conditions. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Transformer neutral. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Neutral-earthing equipment. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Its duty differs from a tank protective bond.
- Name every connected item and the earthing design reference. The illustrative connection does not establish touch or step voltages, conductor sizing, lightning coverage or safe working conditions.

## Drawing checklist

- Label the source and connection reference for transformer neutral.
- Identify the destination and defined state of neutral-earthing equipment.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Its duty differs from a tank protective bond.

## Important distinction

Its duty differs from a tank protective bond. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Transformer neutral
- Output / connection: Neutral-earthing equipment
- Lookup label: TNCR is a library lookup label, not a standard device designation.

## Public references

- [Earthing connections](https://www.electrical-installation.org/enwiki/Earthing_connections) — Schneider Electric, Electrical Installation Guide. Public technical context for switchyard earthing and lightning interfaces. Protective earthing, bonding and earth-electrode interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Earth electrode](iec-earth-electrode.md)
- [Lightning protection down-conductor](lightning-down-conductor.md)
- [Neutral-earthing resistor measurement interface](neutral-earthing-resistor-measurement-interface.md)

![Transformer neutral-earthing conductor reference — original educational illustration](../artwork/svg/transformer-neutral-earthing-conductor-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
