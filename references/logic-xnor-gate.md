# Exclusive-NOR gate

For two positive-logic inputs, produces a true output when the input states are equal.

[Canonical reference](https://eloragrid.ai/symbols/logic-xnor-gate) · [Structured record](../entries/logic-xnor-gate.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

For two positive-logic inputs, produces a true output when the input states are equal.
On a schematic, identify the compared input signals and the output driver type and trace the equality output and any required external pull-up. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
XNOR specifies a logical function; an open-drain implementation is a separate electrical output characteristic.
Terminal letters describe electrical roles, not package pin numbers. Check the selected public datasheet for the actual pin assignment, polarity and any internally connected terminals before completing the drawing.

## How to read it

- Identify the compared input signals and the output driver type.
- Trace the equality output and any required external pull-up.

## Drawing checklist

- Label the compared input signals and the output driver type.
- Cross-reference the equality output and any required external pull-up.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

XNOR specifies a logical function; an open-drain implementation is a separate electrical output characteristic.

## Facts

- Common schematic mnemonic: XNOR — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The compared input signals and the output driver type
- Artwork scope: Original educational component glyph; not a certified standard graphic or package pinout.

## Public references

- [SN74HC266 — XNOR gate logic](https://www.ti.com/lit/ds/symlink/sn74hc266.pdf) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Exclusive-OR gate](logic-xor-gate.md)
- [PLC input / output](plc-io.md)

![Exclusive-NOR gate — original educational illustration](../artwork/svg/logic-xnor-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
