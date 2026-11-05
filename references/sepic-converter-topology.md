# SEPIC converter topology

A non-inverting conversion topology using its documented inductive and series-capacitor energy-transfer arrangement.

[Canonical reference](https://eloragrid.ai/symbols/sepic-converter-topology) · [Structured record](../entries/sepic-converter-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A non-inverting conversion topology using its documented inductive and series-capacitor energy-transfer arrangement.
On a schematic, identify the inductors, series coupling capacitor and switch/diode paths and trace the output and controller feedback references. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
SEPIC is a distinct arrangement from a four-switch buck-boost; the mnemonic does not mean galvanic isolation.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the inductors, series coupling capacitor and switch/diode paths.
- Trace the output and controller feedback references.

## Drawing checklist

- Label the inductors, series coupling capacitor and switch/diode paths.
- Cross-reference the output and controller feedback references.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

SEPIC is a distinct arrangement from a four-switch buck-boost; the mnemonic does not mean galvanic isolation.

## Facts

- Common schematic mnemonic: SEPIC — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The inductors, series coupling capacitor and switch/diode paths
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Cuk converter topology](cuk-converter-topology.md)
- [Power converter / inverter](power-converter.md)

![SEPIC converter topology — original educational illustration](../artwork/svg/sepic-converter-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
