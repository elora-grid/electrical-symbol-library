# IEC analogue multiplier element

Analogue element with a multiplication mark whose output is proportional to the product of two inputs.

[Canonical reference](https://eloragrid.ai/symbols/iec-analogue-multiplier) · [Structured record](../entries/iec-analogue-multiplier.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

Graphical convention: IEC. Rectangular analogue element with a multiplication function mark.

## What it represents

An analogue multiplier element produces an output proportional to the product of its inputs, usually scaled by a fixed factor such as one tenth of a volt per volt squared. IEC-style diagrams draw it as a rectangle with a multiplication mark; TI's logic overview uses the Greek capital pi as the multiplier qualifier in the digital context.
Multipliers appear in power calculation from voltage and current signals, modulators and gain-control circuits. The scale factor and the quadrant capability must be stated, because a one-quadrant device cannot handle negative inputs.
The element does not show accuracy or bandwidth. Those govern whether a hardware multiplier or a digital calculation is appropriate.

## How to read it

- State scale factor and quadrant capability.
- Identify which inputs carry voltage and current in power calculations.

## Drawing checklist

- Mark the multiplication function.
- State the scale factor.
- State quadrant capability.

## Important distinction

A summing element adds signals; the multiplier forms their product.

## Facts

- Function: Product of inputs times scale factor
- Key data: Scale factor and quadrants
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbols programme covering analogue elements; no geometry reproduced.
- [AD633 — analogue multiplication](https://www.analog.com/en/products/ad633.html) — Analog Devices. Manufacturer analogue multiplier documentation.

## Related references

- [Analogue multiplier](analog-multiplier.md)
- [IEC summing amplifier element (Σ)](iec-summing-amplifier.md)
- [RMS-to-DC converter](rms-to-dc-converter.md)

![IEC analogue multiplier element — original educational illustration](../artwork/svg/iec-analogue-multiplier.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
