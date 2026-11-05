# Op-amp comparator with hysteresis

Comparator or op-amp with positive feedback to the plus input, creating two switching thresholds.

[Canonical reference](https://eloragrid.ai/symbols/op-amp-hysteresis-comparator) · [Structured record](../entries/op-amp-hysteresis-comparator.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

Adding a resistor from the output to the non-inverting input of a comparator gives positive feedback, so the switching threshold depends on the current output state. The result is hysteresis: the circuit switches at one level on a rising input and a lower level on a falling input, rejecting noise near the threshold.
This circuit is used for level detection from slow analogue signals such as temperature, battery voltage or tank level. The drawing should state both thresholds, or the resistor values and reference from which they are derived.
The circuit symbol does not show the thresholds directly and they depend on output swing, so a part with rail-to-rail or open-collector output changes the calculation.

## How to read it

- Feedback to the plus input indicates hysteresis, not gain.
- Thresholds depend on output swing.

## Drawing checklist

- Show the positive feedback resistor and reference.
- State both switching thresholds.
- Show the output pull-up if the comparator is open collector.

## Important distinction

An op-amp amplifier uses negative feedback to the minus input; this circuit uses positive feedback.

## Facts

- Feedback: Positive, to the non-inverting input
- Result: Two switching thresholds
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [TLV3201 — voltage comparison](https://www.ti.com/product/TLV3201) — Texas Instruments. Manufacturer comparator documentation.
- [University tutorials: amplifier configurations and signal processing](https://wiki.analog.com/university/courses/tutorials/index) — Analog Devices. Public tutorial material on comparator and feedback configurations.

## Related references

- [Voltage comparator](voltage-comparator.md)
- [IEC hysteresis (bi-threshold) qualifier](iec-hysteresis-input-qualifier.md)
- [Schmitt-trigger buffer](schmitt-trigger-buffer.md)

![Op-amp comparator with hysteresis — original educational illustration](../artwork/svg/op-amp-hysteresis-comparator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
