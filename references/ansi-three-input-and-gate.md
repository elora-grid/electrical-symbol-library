# ANSI three-input AND gate

D-shaped AND outline with three input leads; the output is high only when all three inputs are high.

[Canonical reference](https://eloragrid.ai/symbols/ansi-three-input-and-gate) · [Structured record](../entries/ansi-three-input-and-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. D-shaped AND outline with three inputs.

## What it represents

The three-input AND keeps the familiar flat-backed D outline and simply adds a third input lead on the flat side. All three inputs must be at logic 1 in positive logic for the output to be at logic 1. Packages such as triple three-input AND devices provide this function directly.
Drafters use the wider gate rather than cascading two-input gates when the function is a single permissive with three conditions, such as guard closed, pressure healthy and mode selected. A single symbol keeps the logic readable and avoids implying an intermediate signal that does not exist.
The outline does not show whether an unused input is tied high when a three-input part is used for two signals. Unused inputs on the physical device need a defined level shown on the schematic.

## How to read it

- Count the input leads; a third input is easy to overlook where leads are closely spaced.
- Check unused inputs are tied to a defined level.

## Drawing checklist

- Space the three inputs evenly along the flat side.
- Label each permissive signal.
- Show tie-offs for unused inputs on multi-input packages.

## Important distinction

A two-input AND followed by another AND produces the same logic but implies an intermediate net.

## Facts

- Inputs: Three
- Example device family: Triple three-input AND packages
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [SNx4HC11 triple 3-input AND gates](https://www.ti.com/lit/ds/symlink/sn74hc11.pdf) — Texas Instruments. Manufacturer documentation for triple three-input AND gates.

## Related references

- [AND gate](logic-and-gate.md)
- [IEC AND gate (rectangular form)](iec-and-gate.md)
- [ANSI four-input NAND gate](ansi-four-input-nand-gate.md)

![ANSI three-input AND gate — original educational illustration](../artwork/svg/ansi-three-input-and-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
