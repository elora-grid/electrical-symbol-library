# Schmitt-trigger inverter

A digital inverter with hysteresis between its input switching thresholds.

[Canonical reference](https://eloragrid.ai/symbols/schmitt-trigger-inverter) · [Structured record](../entries/schmitt-trigger-inverter.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

A digital inverter with hysteresis between its input switching thresholds.
On a schematic, identify the input waveform, threshold convention and supply domain and trace the cleaned/inverted digital signal. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
Input hysteresis and logical inversion are separate properties; neither makes an arbitrary slow input safe for every logic family.
Terminal letters describe electrical roles, not package pin numbers. Check the selected public datasheet for the actual pin assignment, polarity and any internally connected terminals before completing the drawing.

## How to read it

- Identify the input waveform, threshold convention and supply domain.
- Trace the cleaned/inverted digital signal.

## Drawing checklist

- Label the input waveform, threshold convention and supply domain.
- Cross-reference the cleaned/inverted digital signal.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

Input hysteresis and logical inversion are separate properties; neither makes an arbitrary slow input safe for every logic family.

## Facts

- Common schematic mnemonic: SCHMITT-NOT — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The input waveform, threshold convention and supply domain
- Artwork scope: Original educational component glyph; not a certified standard graphic or package pinout.

## Public references

- [SN74HC14 — Schmitt-trigger inverters](https://www.ti.com/lit/ds/symlink/sn74hc14.pdf) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Schmitt-trigger buffer](schmitt-trigger-buffer.md)
- [PLC input / output](plc-io.md)

![Schmitt-trigger inverter — original educational illustration](../artwork/svg/schmitt-trigger-inverter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
