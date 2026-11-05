# Flyback converter topology

A conversion arrangement that uses coupled magnetic energy storage and transfers energy through the documented switching sequence.

[Canonical reference](https://eloragrid.ai/symbols/flyback-converter-topology) · [Structured record](../entries/flyback-converter-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A conversion arrangement that uses coupled magnetic energy storage and transfers energy through the documented switching sequence.
On a schematic, identify the coupled-winding polarity, primary switch and secondary rectification and trace the secondary output and isolation/feedback boundary. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
Flyback differs from a forward converter's transfer arrangement; a transformer-like glyph alone does not distinguish them.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the coupled-winding polarity, primary switch and secondary rectification.
- Trace the secondary output and isolation/feedback boundary.

## Drawing checklist

- Label the coupled-winding polarity, primary switch and secondary rectification.
- Cross-reference the secondary output and isolation/feedback boundary.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

Flyback differs from a forward converter's transfer arrangement; a transformer-like glyph alone does not distinguish them.

## Facts

- Common schematic mnemonic: FLYBACK — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The coupled-winding polarity, primary switch and secondary rectification
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Forward converter topology](forward-converter-topology.md)
- [Power converter / inverter](power-converter.md)

![Flyback converter topology — original educational illustration](../artwork/svg/flyback-converter-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
