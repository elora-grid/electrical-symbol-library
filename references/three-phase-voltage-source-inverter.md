# Three-phase voltage-source inverter

A three-leg bridge producing the documented three-phase output from a DC-link source.

[Canonical reference](https://eloragrid.ai/symbols/three-phase-voltage-source-inverter) · [Structured record](../entries/three-phase-voltage-source-inverter.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A three-leg bridge producing the documented three-phase output from a DC-link source.
On a schematic, identify the DC-link rails, three switching midpoints and phase labels and trace the three-phase load/connection and driver/control circuits. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
The stage topology does not establish whether the system is grid forming, grid following or suitable for a particular connection.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the DC-link rails, three switching midpoints and phase labels.
- Trace the three-phase load/connection and driver/control circuits.

## Drawing checklist

- Label the DC-link rails, three switching midpoints and phase labels.
- Cross-reference the three-phase load/connection and driver/control circuits.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

The stage topology does not establish whether the system is grid forming, grid following or suitable for a particular connection.

## Facts

- Common schematic mnemonic: 3PH-VSI — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The DC-link rails, three switching midpoints and phase labels
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Bidirectional three-/single-phase AC/DC PFC and inverter application note](https://www.infineon.com/assets/row/public/documents/24/42/infineon-ac-dc-pfc-11-kw-high-efficiency-high-density-bidirectional-three-single-phase-inverter-applicationnotes-en.pdf) — Infineon Technologies. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Three-phase sixpack power module](three-phase-sixpack-power-module.md)
- [Power converter / inverter](power-converter.md)

![Three-phase voltage-source inverter — original educational illustration](../artwork/svg/three-phase-voltage-source-inverter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
