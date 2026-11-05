# Op-amp voltage follower

Op-amp with its output tied directly to the inverting input, giving unity gain and a low-impedance output.

[Canonical reference](https://eloragrid.ai/symbols/op-amp-voltage-follower) · [Structured record](../entries/op-amp-voltage-follower.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

A voltage follower connects the op-amp output straight back to the inverting input and applies the signal to the non-inverting input. The output equals the input, but it is driven from a low impedance, so a high-impedance source can drive a load without being disturbed.
Followers appear as buffers after voltage dividers, references, sensors and sample-and-hold capacitors, and before ADC inputs. On schematics they are easy to recognise by the direct feedback wire with no resistor.
The circuit does not guarantee stability with heavy capacitive loads, and not every op-amp is unity-gain stable. Check the part selection and any isolating resistor at the output.

## How to read it

- A direct wire from output to minus input with no resistor indicates a follower.
- Check unity-gain stability for the selected part.

## Drawing checklist

- Show the direct feedback connection.
- Note any output isolation resistor for capacitive loads.
- Confirm the selected op-amp is unity-gain stable.

## Important distinction

A non-inverting amplifier has a resistor divider in the feedback path and gain greater than one.

## Facts

- Gain: Unity
- Purpose: Impedance buffering
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [University tutorials: amplifier configurations and signal processing](https://wiki.analog.com/university/courses/tutorials/index) — Analog Devices. Public tutorial material on op-amp configurations including the follower.
- [ADA4522-1 — operational amplification](https://www.analog.com/en/products/ada4522-1.html) — Analog Devices. Manufacturer operational amplifier documentation.

## Related references

- [Non-inverting amplifier circuit](non-inverting-amplifier-circuit.md)
- [ANSI operational amplifier (triangle form)](ansi-operational-amplifier.md)
- [Operational amplifier](operational-amplifier.md)

![Op-amp voltage follower — original educational illustration](../artwork/svg/op-amp-voltage-follower.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
