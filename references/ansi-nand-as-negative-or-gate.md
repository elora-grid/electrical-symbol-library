# ANSI NAND gate drawn as negative-input OR

OR outline with bubbles on its inputs: the De Morgan form of a NAND used when inputs are active low.

[Canonical reference](https://eloragrid.ai/symbols/ansi-nand-as-negative-or-gate) · [Structured record](../entries/ansi-nand-as-negative-or-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. OR outline with input bubbles (De Morgan equivalent of NAND).

## What it represents

By De Morgan's theorem, a NAND gate is equivalent to an OR gate whose inputs are inverted. Data books and well-drawn schematics use the OR outline with input bubbles when the inputs are active-low signals, so that the drawing reads as any of these low signals produces a high output.
This form is useful where active-low requests or fault lines are combined. Matching bubbles to active-low nets lets a reader follow the logic without mentally inverting each signal, which is the main reason for choosing this representation.
The symbol represents the same physical part as the conventional NAND outline. It does not mean an OR device and inverters are fitted, and the bill of materials will still list a NAND package.

## How to read it

- Recognise bubbled inputs on an OR outline as a NAND device.
- Expect the input nets to be active-low signals.

## Drawing checklist

- Use this form when the input signals are active low.
- Keep the device reference the same as the NAND package.
- Explain the convention in the sheet legend for unfamiliar readers.

## Important distinction

An OR outline with a bubble at the output is a NOR, not this NAND equivalent.

## Facts

- Boolean identity: NOT(A AND B) = (NOT A) OR (NOT B)
- Reason to use: Matches active-low input signals
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [SN74HC00 — NAND gate logic](https://www.ti.com/lit/ds/symlink/sn74hc00.pdf) — Texas Instruments. Manufacturer NAND gate documentation for the implementing device.
- [Overview of IEEE Standard 91-1984: explanation of logic symbols (SDYZ001A)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) — Texas Instruments. Explains negation and active-low indication at inputs.

## Related references

- [NAND gate](logic-nand-gate.md)
- [ANSI four-input NAND gate](ansi-four-input-nand-gate.md)
- [ANSI NOR gate drawn as negative-input AND](ansi-nor-as-negative-and-gate.md)

![ANSI NAND gate drawn as negative-input OR — original educational illustration](../artwork/svg/ansi-nand-as-negative-or-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
