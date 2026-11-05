# Active-clamp forward topology

A forward converter arrangement with an actively controlled clamp/reset circuit.

[Canonical reference](https://eloragrid.ai/symbols/active-clamp-forward-topology) · [Structured record](../entries/active-clamp-forward-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A forward converter arrangement with an actively controlled clamp/reset circuit.
On a schematic, identify the main switch, clamp switch/capacitor and magnetic-reset path and trace the secondary power path and controller timing interfaces. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
The active clamp is part of the conversion arrangement; its control timing cannot be inferred from an ordinary forward block.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the main switch, clamp switch/capacitor and magnetic-reset path.
- Trace the secondary power path and controller timing interfaces.

## Drawing checklist

- Label the main switch, clamp switch/capacitor and magnetic-reset path.
- Cross-reference the secondary power path and controller timing interfaces.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

The active clamp is part of the conversion arrangement; its control timing cannot be inferred from an ordinary forward block.

## Facts

- Common schematic mnemonic: ACF — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The main switch, clamp switch/capacitor and magnetic-reset path
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Forward converter topology](forward-converter-topology.md)
- [Power converter / inverter](power-converter.md)

![Active-clamp forward topology — original educational illustration](../artwork/svg/active-clamp-forward-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
