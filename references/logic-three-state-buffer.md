# Three-state logic buffer

A digital output stage that can drive logical states or enter its documented high-impedance state.

[Canonical reference](https://eloragrid.ai/symbols/logic-three-state-buffer) · [Structured record](../entries/logic-three-state-buffer.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

A digital output stage that can drive logical states or enter its documented high-impedance state.
On a schematic, identify the data input, output-enable polarity and shared-bus ownership and trace the output bus and disabled-state behaviour. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
High impedance differs from driving logical zero; disabled outputs still have device-specific leakage and voltage limits.
Terminal letters describe electrical roles, not package pin numbers. Check the selected public datasheet for the actual pin assignment, polarity and any internally connected terminals before completing the drawing.

## How to read it

- Identify the data input, output-enable polarity and shared-bus ownership.
- Trace the output bus and disabled-state behaviour.

## Drawing checklist

- Label the data input, output-enable polarity and shared-bus ownership.
- Cross-reference the output bus and disabled-state behaviour.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

High impedance differs from driving logical zero; disabled outputs still have device-specific leakage and voltage limits.

## Facts

- Common schematic mnemonic: 3STATE — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The data input, output-enable polarity and shared-bus ownership
- Artwork scope: Original educational component glyph; not a certified standard graphic or package pinout.

## Public references

- [SN74HC125 — three-state buffers](https://www.ti.com/lit/ds/symlink/sn74hc125.pdf) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Logic bus transceiver](logic-bus-transceiver.md)
- [PLC input / output](plc-io.md)

![Three-state logic buffer — original educational illustration](../artwork/svg/logic-three-state-buffer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
