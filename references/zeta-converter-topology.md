# Zeta converter topology

A non-inverting converter arrangement using its documented inductive and capacitive transfer circuit.

[Canonical reference](https://eloragrid.ai/symbols/zeta-converter-topology) · [Structured record](../entries/zeta-converter-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A non-inverting converter arrangement using its documented inductive and capacitive transfer circuit.
On a schematic, identify the controlled switch, coupling capacitor and inductor connections and trace the output current path and feedback reference. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
Zeta and SEPIC can both support buck/boost conversion, but their switch and energy-storage arrangements differ.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the controlled switch, coupling capacitor and inductor connections.
- Trace the output current path and feedback reference.

## Drawing checklist

- Label the controlled switch, coupling capacitor and inductor connections.
- Cross-reference the output current path and feedback reference.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

Zeta and SEPIC can both support buck/boost conversion, but their switch and energy-storage arrangements differ.

## Facts

- Common schematic mnemonic: ZETA — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The controlled switch, coupling capacitor and inductor connections
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [SEPIC converter topology](sepic-converter-topology.md)
- [Power converter / inverter](power-converter.md)

![Zeta converter topology — original educational illustration](../artwork/svg/zeta-converter-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
