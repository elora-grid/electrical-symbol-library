# Boost converter topology

A switching converter arrangement used to obtain a higher DC output from its documented input range.

[Canonical reference](https://eloragrid.ai/symbols/boost-converter-topology) · [Structured record](../entries/boost-converter-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A switching converter arrangement used to obtain a higher DC output from its documented input range.
On a schematic, identify the input inductor, controlled switch and output transfer path and trace the boosted output, feedback and return circuit. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
A boost topology steps up in its intended mode; the output-disconnection behaviour depends on the actual switching arrangement.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the input inductor, controlled switch and output transfer path.
- Trace the boosted output, feedback and return circuit.

## Drawing checklist

- Label the input inductor, controlled switch and output transfer path.
- Cross-reference the boosted output, feedback and return circuit.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

A boost topology steps up in its intended mode; the output-disconnection behaviour depends on the actual switching arrangement.

## Facts

- Common schematic mnemonic: BOOST — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The input inductor, controlled switch and output transfer path
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Buck converter topology](buck-converter-topology.md)
- [Power converter / inverter](power-converter.md)

![Boost converter topology — original educational illustration](../artwork/svg/boost-converter-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
