# IEC AND gate (rectangular form)

Rectangular IEC-style AND element marked with an ampersand; the output is active only when every input is active.

[Canonical reference](https://eloragrid.ai/symbols/iec-and-gate) · [Structured record](../entries/iec-and-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

Graphical convention: IEC. Rectangular outline with the & general qualifying symbol.

## What it represents

The IEC rectangular AND element is a plain box with the ampersand written near the top centre. Inputs enter on the left and the single output leaves on the right, so the function is identified by the qualifier rather than by the outline shape. All inputs must stand at their internal 1 state for the output to take its internal 1 state.
Rectangular gates are common on European interlock, burner-management and protection logic sheets because the same box can carry negation circles, polarity indicators and dependency labels without changing shape. A drafter can stack several & boxes in one column and the function remains readable even when the elements are abutted.
The qualifier says nothing about logic family, supply voltage, propagation delay or whether the function is realised in hardware, relay contacts or PLC code. Those details come from the device schedule or the software reference attached to the sheet.

## How to read it

- Read the & qualifier first; the box outline is identical for most IEC combinative elements.
- Check for negation circles or polarity triangles on inputs before writing the truth table.

## Drawing checklist

- Show the & qualifier clearly inside the outline.
- Number each input when more than two are used.
- Reference the implementing device, PLC block or relay logic on the sheet.

## Important distinction

The ≥1 OR element uses the same box; only the qualifier differs, so a misread character changes the whole function.

## Facts

- General qualifier: & (AND function)
- Distinctive-shape equivalent: D-shaped ANSI AND gate
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [Overview of IEEE Standard 91-1984: explanation of logic symbols (SDYZ001A)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) — Texas Instruments. Public explanation of the & general qualifying symbol and rectangular symbol composition.
- [SN74HC08 — AND gate logic](https://www.ti.com/lit/ds/symlink/sn74hc08.pdf) — Texas Instruments. Manufacturer AND gate documentation showing the function implemented.

## Related references

- [AND gate](logic-and-gate.md)
- [IEC NAND gate (rectangular form)](iec-nand-gate.md)
- [IEC OR gate (rectangular form)](iec-or-gate.md)

![IEC AND gate (rectangular form) — original educational illustration](../artwork/svg/iec-and-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
