# Non-inverting logic buffer

Transfers a digital state through a non-inverting logic output stage.

[Canonical reference](https://eloragrid.ai/symbols/logic-buffer) · [Structured record](../entries/logic-buffer.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

Transfers a digital state through a non-inverting logic output stage.
On a schematic, identify the input voltage domain, supply and output loading and trace the driven logic line and receiving inputs. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
A buffer can provide drive capability without inversion; it is not a galvanic isolation barrier.
Terminal letters describe electrical roles, not package pin numbers. Check the selected public datasheet for the actual pin assignment, polarity and any internally connected terminals before completing the drawing.

## How to read it

- Identify the input voltage domain, supply and output loading.
- Trace the driven logic line and receiving inputs.

## Drawing checklist

- Label the input voltage domain, supply and output loading.
- Cross-reference the driven logic line and receiving inputs.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

A buffer can provide drive capability without inversion; it is not a galvanic isolation barrier.

## Facts

- Common schematic mnemonic: BUF — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The input voltage domain, supply and output loading
- Artwork scope: Original educational component glyph; not a certified standard graphic or package pinout.

## Public references

- [SN74LS07 — open-collector output buffers](https://www.ti.com/lit/ds/symlink/sn74ls07.pdf) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Three-state logic buffer](logic-three-state-buffer.md)
- [PLC input / output](plc-io.md)

![Non-inverting logic buffer — original educational illustration](../artwork/svg/logic-buffer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
