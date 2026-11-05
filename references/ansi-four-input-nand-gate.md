# ANSI four-input NAND gate

Four-input D-shaped NAND gate with an output bubble; its output goes low only when all four inputs are high.

[Canonical reference](https://eloragrid.ai/symbols/ansi-four-input-nand-gate) · [Structured record](../entries/ansi-four-input-nand-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. D-shaped AND outline with four inputs and an output bubble.

## What it represents

A four-input NAND gate is drawn with the AND outline, four input leads and a bubble at the output. The output is low only when every input is high. The function is supplied by dual four-input NAND packages and is a common building block for address decoding and multi-condition alarms.
Where some inputs are active low in the design intent, the drawing may show the same device in its De Morgan form as an OR outline with bubbled inputs. Either representation is valid, but the chosen form should match the meaning of the signals so that the sheet reads naturally.
The symbol alone does not show which package or gate section is used. Reference designators and pin numbers come from the device schedule.

## How to read it

- Check for the output bubble; without it the gate is an AND.
- Consider whether an equivalent OR form is used elsewhere for the same device.

## Drawing checklist

- Draw four evenly spaced inputs.
- Mark the output bubble clearly.
- Add the gate section and pin numbers when used for wiring.

## Important distinction

An OR outline with bubbled inputs is the De Morgan equivalent of the same NAND function.

## Facts

- Inputs: Four
- Output low when: All inputs high
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [SNx4HC20 dual 4-input NAND gates](https://www.ti.com/lit/ds/symlink/sn74hc20.pdf) — Texas Instruments. Manufacturer documentation for dual four-input NAND gates.

## Related references

- [NAND gate](logic-nand-gate.md)
- [ANSI NAND gate drawn as negative-input OR](ansi-nand-as-negative-or-gate.md)
- [IEC NAND gate (rectangular form)](iec-nand-gate.md)

![ANSI four-input NAND gate — original educational illustration](../artwork/svg/ansi-four-input-nand-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
