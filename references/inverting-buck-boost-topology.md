# Inverting buck-boost topology

A buck-boost arrangement whose output polarity is opposite to its defined input reference.

[Canonical reference](https://eloragrid.ai/symbols/inverting-buck-boost-topology) · [Structured record](../entries/inverting-buck-boost-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A buck-boost arrangement whose output polarity is opposite to its defined input reference.
On a schematic, identify the switch/inductor path, input return and negative-output reference and trace the energy-transfer and feedback circuit. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
Negative output polarity distinguishes this arrangement from a non-inverting four-switch buck-boost stage.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the switch/inductor path, input return and negative-output reference.
- Trace the energy-transfer and feedback circuit.

## Drawing checklist

- Label the switch/inductor path, input return and negative-output reference.
- Cross-reference the energy-transfer and feedback circuit.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

Negative output polarity distinguishes this arrangement from a non-inverting four-switch buck-boost stage.

## Facts

- Common schematic mnemonic: INV-BB — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The switch/inductor path, input return and negative-output reference
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Four-switch buck-boost topology](four-switch-buck-boost-topology.md)
- [Power converter / inverter](power-converter.md)

![Inverting buck-boost topology — original educational illustration](../artwork/svg/inverting-buck-boost-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
