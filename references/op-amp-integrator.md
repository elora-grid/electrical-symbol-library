# Op-amp integrator

Uses a documented amplifier/capacitor feedback arrangement to obtain an integrating signal response.

[Canonical reference](https://eloragrid.ai/symbols/op-amp-integrator) · [Structured record](../entries/op-amp-integrator.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

Uses a documented amplifier/capacitor feedback arrangement to obtain an integrating signal response.
On a schematic, identify the input resistance, feedback capacitance and any reset/DC-restoration path and trace the integrated output and its reference. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
An integrator is an active circuit response; the output range and long-term drift depend on the actual implementation.
The preview is an independently drawn educational functional reference. Add the selected component’s actual power pins, terminal numbers, timing or analogue reference details when producing a construction drawing.

## How to read it

- Identify the input resistance, feedback capacitance and any reset/DC-restoration path.
- Trace the integrated output and its reference.

## Drawing checklist

- Label the input resistance, feedback capacitance and any reset/DC-restoration path.
- Cross-reference the integrated output and its reference.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

An integrator is an active circuit response; the output range and long-term drift depend on the actual implementation.

## Facts

- Common schematic mnemonic: INTEGRATOR — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The input resistance, feedback capacitance and any reset/DC-restoration path
- Artwork scope: Original educational functional/circuit reference; not a selected product pinout.

## Public references

- [Integrator circuit reference, SBOA275](https://www.ti.com/lit/pdf/sboa275) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Op-amp differentiator](op-amp-differentiator.md)
- [PLC input / output](plc-io.md)

![Op-amp integrator — original educational illustration](../artwork/svg/op-amp-integrator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
