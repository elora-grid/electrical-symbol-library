# Push-pull converter topology

A converter arrangement driving two primary paths alternately through the documented coupled winding.

[Canonical reference](https://eloragrid.ai/symbols/push-pull-converter-topology) · [Structured record](../entries/push-pull-converter-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A converter arrangement driving two primary paths alternately through the documented coupled winding.
On a schematic, identify the centre-tapped primary connection, two switches and winding polarities and trace the secondary rectification and output path. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
Push-pull uses its specific primary arrangement; it differs from a half-bridge applied to a single untapped primary.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the centre-tapped primary connection, two switches and winding polarities.
- Trace the secondary rectification and output path.

## Drawing checklist

- Label the centre-tapped primary connection, two switches and winding polarities.
- Cross-reference the secondary rectification and output path.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

Push-pull uses its specific primary arrangement; it differs from a half-bridge applied to a single untapped primary.

## Facts

- Common schematic mnemonic: PUSH-PULL — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The centre-tapped primary connection, two switches and winding polarities
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Half-bridge DC converter topology](half-bridge-dc-converter-topology.md)
- [Power converter / inverter](power-converter.md)

![Push-pull converter topology — original educational illustration](../artwork/svg/push-pull-converter-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
