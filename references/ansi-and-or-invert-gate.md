# ANSI AND-OR-invert gate

Two D-shaped AND gates feeding a bubbled OR outline, drawn as the distinctive-shape AND-OR-invert function.

[Canonical reference](https://eloragrid.ai/symbols/ansi-and-or-invert-gate) · [Structured record](../entries/ansi-and-or-invert-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Two AND outlines feeding an OR outline with output bubble.

## What it represents

In distinctive-shape drawings the AND-OR-invert function is shown as two or more AND outlines whose outputs enter an OR outline with an output bubble. Data books often draw the AND outlines touching the OR outline to indicate that the whole structure is one gate within one package section.
AOI gates are found in older logic boards for multiplexing and for implementing compact sum-of-products expressions. When checking, write the expression as the complement of the OR of each AND term.
The drawing does not reveal whether the device provides expandable inputs or how unused AND inputs must be terminated. Refer to the device documentation for those details.

## How to read it

- Treat touching outlines as one device function, not separate packages.
- Apply the final inversion after the OR.

## Drawing checklist

- Keep the AND sections visually grouped with the OR.
- Label each product-term input.
- Terminate unused AND inputs as the device requires.

## Important distinction

The IEC AND-OR-invert uses abutted rectangular & and ≥1 elements instead of distinctive outlines.

## Facts

- Structure: AND terms into OR with inverted output
- Example device family: Dual AND-OR-invert gate packages
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [SN74LS51 AND-OR-invert gates](https://www.ti.com/lit/ds/symlink/sn74ls51.pdf) — Texas Instruments. Manufacturer AND-OR-invert gate documentation.

## Related references

- [IEC AND-OR-invert element](iec-and-or-invert-gate.md)
- [NOR gate](logic-nor-gate.md)
- [AND gate](logic-and-gate.md)

![ANSI AND-OR-invert gate — original educational illustration](../artwork/svg/ansi-and-or-invert-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
