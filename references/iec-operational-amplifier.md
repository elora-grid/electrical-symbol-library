# IEC operational amplifier (rectangular form)

Rectangular IEC-style op-amp drawn as a box with an amplifier triangle and an infinity sign for very high gain.

[Canonical reference](https://eloragrid.ai/symbols/iec-operational-amplifier) · [Structured record](../entries/iec-operational-amplifier.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

Graphical convention: IEC. Rectangular outline with amplifier triangle and infinity sign.

## What it represents

In IEC-style analogue element diagrams an operational amplifier is often drawn as a rectangle containing a small amplifier triangle and an infinity sign, meaning very high open-loop gain. Inverting and non-inverting inputs are marked with minus and plus signs at the input side.
This form appears on European instrumentation and protection relay schematics, where analogue elements share the rectangular style used for logic. The surrounding feedback network defines what the circuit does, so the resistor and capacitor values must be read together with the element.
The rectangular form gives no information about supply rails, offset, bandwidth or output swing. Those are device parameters, and the supply pins are often omitted from functional diagrams.

## How to read it

- Find the minus and plus inputs before reading the feedback network.
- Supply connections are often omitted.

## Drawing checklist

- Mark inverting and non-inverting inputs.
- Show the feedback network with values.
- Note supply rails where they matter.

## Important distinction

The triangular ANSI-style op-amp is the same device drawn without the rectangle.

## Facts

- Key marks: Amplifier triangle and ∞
- Inputs: Inverting (-) and non-inverting (+)
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbols programme covering analogue elements; no geometry reproduced.
- [ADA4522-1 — operational amplification](https://www.analog.com/en/products/ada4522-1.html) — Analog Devices. Manufacturer operational amplifier documentation.

## Related references

- [Operational amplifier](operational-amplifier.md)
- [ANSI operational amplifier (triangle form)](ansi-operational-amplifier.md)
- [IEC summing amplifier element (Σ)](iec-summing-amplifier.md)

![IEC operational amplifier (rectangular form) — original educational illustration](../artwork/svg/iec-operational-amplifier.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
