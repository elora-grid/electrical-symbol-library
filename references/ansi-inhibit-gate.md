# ANSI inhibit gate (AND with one negated input)

AND outline with a bubble on one input, so that input blocks the output whenever it is active.

[Canonical reference](https://eloragrid.ai/symbols/ansi-inhibit-gate) · [Structured record](../entries/ansi-inhibit-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. AND outline with a bubble on one input.

## What it represents

An inhibit gate passes one signal only while a second, inhibiting signal is inactive. In distinctive-shape form it is drawn as an AND outline with a bubble on the inhibiting input. It is a very common pattern in interlock logic, where a command is allowed unless a blocking condition is present.
On drawings the inhibiting input should be named for the condition that blocks, such as trip active or door open, so that the bubble reads naturally. Where the physical implementation is an AND gate fed by an inverter, the schematic may still use this compact form for clarity.
The symbol does not specify which input has priority in timing. If the inhibiting signal must arrive before the command, a sequencing note or timing element is required.

## How to read it

- Identify which input carries the bubble; that input blocks the output.
- Check whether the implementation includes a separate inverter.

## Drawing checklist

- Name the inhibiting input for the blocking condition.
- Place the bubble on the correct input lead.
- Note any timing priority between command and inhibit.

## Important distinction

A NAND has its bubble at the output; an inhibit gate has its bubble on one input only.

## Facts

- Boolean form: A AND NOT B
- Typical use: Command blocked by an interlock
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [Overview of IEEE Standard 91-1984: explanation of logic symbols (SDYZ001A)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) — Texas Instruments. Negation at an input and the resulting internal state.
- [SN74HC08 — AND gate logic](https://www.ti.com/lit/ds/symlink/sn74hc08.pdf) — Texas Instruments. AND gate documentation for the implementing function.

## Related references

- [AND gate](logic-and-gate.md)
- [IEC logic negation at input](iec-logic-input-negation.md)
- [IEC AND gate (rectangular form)](iec-and-gate.md)

![ANSI inhibit gate (AND with one negated input) — original educational illustration](../artwork/svg/ansi-inhibit-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
