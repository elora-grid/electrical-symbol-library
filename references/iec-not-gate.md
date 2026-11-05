# IEC NOT element (rectangular form)

Single-input IEC box marked 1 with a negation at the output, inverting the logic state.

[Canonical reference](https://eloragrid.ai/symbols/iec-not-gate) · [Structured record](../entries/iec-not-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

Graphical convention: IEC. Single-input element marked 1 with output negation.

## What it represents

The IEC inverter is a single-input element carrying the qualifier 1, meaning the one input must be active, together with a negation at the output. The result is that the output is active when the input is inactive. Data books often replace the circle with a polarity triangle to show an active-low output.
Because negation can be drawn directly on any input or output, a standalone NOT box is often only used where an inverter really exists as a component or as a separate program instruction. On purely functional logic sheets drafters usually fold the inversion into the next element as a negated input.
The symbol gives no information about input thresholds. A Schmitt-trigger inverter adds the hysteresis qualifier; without it, slow or noisy inputs may not be handled cleanly.

## How to read it

- Check whether the inversion is a real component or only a notation choice.
- Look for a hysteresis mark if the input comes from a slow signal.

## Drawing checklist

- Mark the box with 1 and negate the output.
- Avoid stacking inverters when a negated input would do.
- Reference the device when the inverter is a discrete part.

## Important distinction

A box marked 1 without output negation is a non-inverting buffer.

## Facts

- Qualifier: 1 with output negation
- Input count: One
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [Overview of IEEE Standard 91-1984: explanation of logic symbols (SDYZ001A)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) — Texas Instruments. Defines the 1 qualifier and logic negation.
- [SN74HC04 — digital inverters](https://www.ti.com/lit/ds/symlink/sn74hc04.pdf) — Texas Instruments. Manufacturer inverter documentation.

## Related references

- [Logic inverter](logic-inverter.md)
- [IEC buffer element (rectangular form)](iec-buffer.md)
- [IEC Schmitt-trigger inverter (rectangular form)](iec-schmitt-trigger-inverter.md)

![IEC NOT element (rectangular form) — original educational illustration](../artwork/svg/iec-not-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
