# Schmitt-trigger buffer

A non-inverting digital element with separate rising and falling input thresholds.

[Canonical reference](https://eloragrid.ai/symbols/schmitt-trigger-buffer) · [Structured record](../entries/schmitt-trigger-buffer.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

A non-inverting digital element with separate rising and falling input thresholds.
On a schematic, identify the input signal and manufacturer hysteresis/threshold definition and trace the non-inverted digital output. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
A Schmitt buffer preserves logical polarity, unlike a Schmitt-trigger inverter.
Terminal letters describe electrical roles, not package pin numbers. Check the selected public datasheet for the actual pin assignment, polarity and any internally connected terminals before completing the drawing.

## How to read it

- Identify the input signal and manufacturer hysteresis/threshold definition.
- Trace the non-inverted digital output.

## Drawing checklist

- Label the input signal and manufacturer hysteresis/threshold definition.
- Cross-reference the non-inverted digital output.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

A Schmitt buffer preserves logical polarity, unlike a Schmitt-trigger inverter.

## Facts

- Common schematic mnemonic: SCHMITT — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The input signal and manufacturer hysteresis/threshold definition
- Artwork scope: Original educational component glyph; not a certified standard graphic or package pinout.

## Public references

- [SN74LVC1G17 — non-inverting Schmitt buffers](https://www.ti.com/product/SN74LVC1G17) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Schmitt-trigger inverter](schmitt-trigger-inverter.md)
- [PLC input / output](plc-io.md)

![Schmitt-trigger buffer — original educational illustration](../artwork/svg/schmitt-trigger-buffer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
