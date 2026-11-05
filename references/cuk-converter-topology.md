# Cuk converter topology

An inverting conversion topology using a capacitor as part of the energy-transfer path between inductive stages.

[Canonical reference](https://eloragrid.ai/symbols/cuk-converter-topology) · [Structured record](../entries/cuk-converter-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

An inverting conversion topology using a capacitor as part of the energy-transfer path between inductive stages.
On a schematic, identify the input/output inductors, transfer capacitor and reference polarity and trace the negative output and feedback path. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
Cuk and SEPIC are different circuit arrangements; the output polarity and energy-transfer connections must be shown correctly.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the input/output inductors, transfer capacitor and reference polarity.
- Trace the negative output and feedback path.

## Drawing checklist

- Label the input/output inductors, transfer capacitor and reference polarity.
- Cross-reference the negative output and feedback path.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

Cuk and SEPIC are different circuit arrangements; the output polarity and energy-transfer connections must be shown correctly.

## Facts

- Common schematic mnemonic: CUK — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The input/output inductors, transfer capacitor and reference polarity
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [SEPIC converter topology](sepic-converter-topology.md)
- [Power converter / inverter](power-converter.md)

![Cuk converter topology — original educational illustration](../artwork/svg/cuk-converter-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
