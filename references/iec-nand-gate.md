# IEC NAND gate (rectangular form)

IEC AND box with a negation circle or polarity triangle at its output, giving the NAND function.

[Canonical reference](https://eloragrid.ai/symbols/iec-nand-gate) · [Structured record](../entries/iec-nand-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

Graphical convention: IEC. & rectangular element with output negation circle.

## What it represents

In the IEC rectangular system there is no separate NAND qualifier. The element is an & box whose output carries a logic negation circle, or in data-book practice a polarity triangle marking the output as active-low. The output therefore stands at its external 0 state only when all inputs are active.
When reading device data books that use polarity indicators instead of circles, the triangle at the output means the internal 1 state produces a low level. A drawing should be consistent: mixing circles and triangles on the same sheet invites misreading because circles depend on the declared logic convention.
The symbol does not show output drive type. Open-collector, three-state or totem-pole outputs need their own qualifier inside the outline next to the output line.

## How to read it

- Look for the circle or triangle at the output edge; it is easy to miss on a reduced print.
- Confirm whether the sheet uses positive logic, negative logic or polarity indicators.

## Drawing checklist

- Draw the negation mark touching the outline at the output.
- State the logic convention in the sheet notes.
- Add an output-type qualifier where the output is not a standard push-pull stage.

## Important distinction

An & box with a negated input rather than a negated output is a different function (an inhibit-type AND), not a NAND.

## Facts

- Qualifier: & plus output negation
- Output active state: External 0 when all inputs active (positive logic)
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [Overview of IEEE Standard 91-1984: explanation of logic symbols (SDYZ001A)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) — Texas Instruments. Explains output negation and polarity indicator conventions.
- [SN74HC00 — NAND gate logic](https://www.ti.com/lit/ds/symlink/sn74hc00.pdf) — Texas Instruments. Manufacturer NAND gate documentation.

## Related references

- [NAND gate](logic-nand-gate.md)
- [IEC AND gate (rectangular form)](iec-and-gate.md)
- [IEC logic negation at output](iec-logic-output-negation.md)

![IEC NAND gate (rectangular form) — original educational illustration](../artwork/svg/iec-nand-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
