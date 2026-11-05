# Four-switch buck-boost topology

A non-inverting conversion arrangement with switching legs that support documented buck and boost operation.

[Canonical reference](https://eloragrid.ai/symbols/four-switch-buck-boost-topology) · [Structured record](../entries/four-switch-buck-boost-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A non-inverting conversion arrangement with switching legs that support documented buck and boost operation.
On a schematic, identify the two switching legs, shared inductor and common reference and trace the positive-polarity output and controller feedback. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
Four-switch buck-boost and inverting buck-boost have different power paths and output polarity.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the two switching legs, shared inductor and common reference.
- Trace the positive-polarity output and controller feedback.

## Drawing checklist

- Label the two switching legs, shared inductor and common reference.
- Cross-reference the positive-polarity output and controller feedback.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

Four-switch buck-boost and inverting buck-boost have different power paths and output polarity.

## Facts

- Common schematic mnemonic: 4SW-BB — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The two switching legs, shared inductor and common reference
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Inverting buck-boost topology](inverting-buck-boost-topology.md)
- [Power converter / inverter](power-converter.md)

![Four-switch buck-boost topology — original educational illustration](../artwork/svg/four-switch-buck-boost-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
