# Full-bridge DC converter topology

A DC conversion stage using two switching legs to apply the documented waveform to a magnetic primary.

[Canonical reference](https://eloragrid.ai/symbols/full-bridge-dc-converter-topology) · [Structured record](../entries/full-bridge-dc-converter-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A DC conversion stage using two switching legs to apply the documented waveform to a magnetic primary.
On a schematic, identify the four switches, two bridge midpoints and transformer winding and trace the secondary transfer circuit and bridge control interfaces. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
A full-bridge DC converter includes a secondary DC power path; a full-bridge inverter instead supplies an AC output arrangement.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the four switches, two bridge midpoints and transformer winding.
- Trace the secondary transfer circuit and bridge control interfaces.

## Drawing checklist

- Label the four switches, two bridge midpoints and transformer winding.
- Cross-reference the secondary transfer circuit and bridge control interfaces.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

A full-bridge DC converter includes a secondary DC power path; a full-bridge inverter instead supplies an AC output arrangement.

## Facts

- Common schematic mnemonic: FB-DC — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The four switches, two bridge midpoints and transformer winding
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Single-phase voltage-source inverter](single-phase-voltage-source-inverter.md)
- [Power converter / inverter](power-converter.md)

![Full-bridge DC converter topology — original educational illustration](../artwork/svg/full-bridge-dc-converter-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
