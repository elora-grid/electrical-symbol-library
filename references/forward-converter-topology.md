# Forward converter topology

A conversion topology transferring power through coupled windings during the documented primary conduction interval.

[Canonical reference](https://eloragrid.ai/symbols/forward-converter-topology) · [Structured record](../entries/forward-converter-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A conversion topology transferring power through coupled windings during the documented primary conduction interval.
On a schematic, identify the primary switch, winding polarity, reset path and output inductor and trace the secondary rectification and output feedback. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
A forward stage needs its magnetising-reset arrangement; it is not a flyback with an additional output-inductor label.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the primary switch, winding polarity, reset path and output inductor.
- Trace the secondary rectification and output feedback.

## Drawing checklist

- Label the primary switch, winding polarity, reset path and output inductor.
- Cross-reference the secondary rectification and output feedback.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

A forward stage needs its magnetising-reset arrangement; it is not a flyback with an additional output-inductor label.

## Facts

- Common schematic mnemonic: FORWARD — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The primary switch, winding polarity, reset path and output inductor
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Flyback converter topology](flyback-converter-topology.md)
- [Power converter / inverter](power-converter.md)

![Forward converter topology — original educational illustration](../artwork/svg/forward-converter-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
