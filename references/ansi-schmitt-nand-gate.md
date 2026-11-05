# ANSI Schmitt-trigger NAND gate

NAND outline with a hysteresis mark inside, combining the NAND function with Schmitt-trigger inputs.

[Canonical reference](https://eloragrid.ai/symbols/ansi-schmitt-nand-gate) · [Structured record](../entries/ansi-schmitt-nand-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. NAND outline containing the hysteresis mark.

## What it represents

A Schmitt-trigger NAND is drawn as a normal NAND outline with the hysteresis mark inside the body. Each input switches at different rising and falling thresholds, so the gate accepts slow or noisy signals while still performing the NAND function.
These gates are often used for gated oscillators, where one input enables an RC oscillator built around the gate, and for combining a debounced contact with an enable signal. Timing components should be drawn close to the gate with the intended frequency or delay noted.
Threshold levels and hysteresis width are not shown by the symbol and differ between logic families. Read them from the device documentation.

## How to read it

- Spot the hysteresis mark inside the NAND body.
- Check for RC components that create an oscillator.

## Drawing checklist

- Show the hysteresis mark within the outline.
- Keep timing components adjacent.
- State the intended oscillator frequency or debounce time.

## Important distinction

A standard NAND has no hysteresis mark and a single threshold.

## Facts

- Function: NAND with Schmitt-trigger inputs
- Common use: Gated RC oscillator, debounced enable
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [SNx4HC132 quadruple 2-input NAND gates with Schmitt-trigger inputs](https://www.ti.com/lit/ds/symlink/sn74hc132.pdf) — Texas Instruments. Manufacturer documentation for NAND gates with Schmitt-trigger inputs.

## Related references

- [NAND gate](logic-nand-gate.md)
- [Schmitt-trigger inverter](schmitt-trigger-inverter.md)
- [IEC hysteresis (bi-threshold) qualifier](iec-hysteresis-input-qualifier.md)

![ANSI Schmitt-trigger NAND gate — original educational illustration](../artwork/svg/ansi-schmitt-nand-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
