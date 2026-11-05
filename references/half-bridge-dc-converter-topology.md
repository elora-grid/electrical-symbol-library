# Half-bridge DC converter topology

A DC conversion stage using one switching leg and the documented magnetic/secondary circuit.

[Canonical reference](https://eloragrid.ai/symbols/half-bridge-dc-converter-topology) · [Structured record](../entries/half-bridge-dc-converter-topology.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic, SLD. Reference families: Manufacturer.

## What it represents

A DC conversion stage using one switching leg and the documented magnetic/secondary circuit.
On a schematic, identify the DC-link arrangement, switching midpoint and primary winding and trace the secondary rectifier/output and controller returns. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
A half-bridge converter topology describes a circuit, whereas a half-bridge power module describes packaged switching hardware.
The preview is a conceptual topology reference rather than a complete power-stage circuit. Switching sequences, magnetic design, component selection and control/protection details belong in the equipment design documentation.

## How to read it

- Identify the DC-link arrangement, switching midpoint and primary winding.
- Trace the secondary rectifier/output and controller returns.

## Drawing checklist

- Label the DC-link arrangement, switching midpoint and primary winding.
- Cross-reference the secondary rectifier/output and controller returns.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

A half-bridge converter topology describes a circuit, whereas a half-bridge power module describes packaged switching hardware.

## Facts

- Common schematic mnemonic: HB-DC — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The DC-link arrangement, switching midpoint and primary winding
- Artwork scope: Original conceptual topology block; not a complete switch-level circuit.

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Half-bridge power module](half-bridge-power-module.md)
- [Power converter / inverter](power-converter.md)

![Half-bridge DC converter topology — original educational illustration](../artwork/svg/half-bridge-dc-converter-topology.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
