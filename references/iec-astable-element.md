# IEC astable element

IEC element marked G, an astable that produces a continuous pulse train; drawing the waveform is optional.

[Canonical reference](https://eloragrid.ai/symbols/iec-astable-element) · [Structured record](../entries/iec-astable-element.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

Graphical convention: IEC. Rectangular element with the G qualifier and optional waveform.

## What it represents

The astable element is marked with G, optionally followed by a sketch of the output waveform. It produces a free-running pulse train. Variants include !G for a synchronously starting astable and G! for one that stops only after completing a pulse, as listed in TI's public overview.
Astable elements represent oscillators on logic diagrams: flasher circuits for indicator lamps, test pulse generators and clock sources. Where an enable input exists, its effect on the output at start and stop should be considered because the variant qualifiers describe exactly that.
The symbol does not state frequency or duty cycle. Note those values beside the element or reference the timing components.

## How to read it

- Check for ! before or after G, which changes start or stop behaviour.
- Find frequency and duty cycle in notes or timing parts.

## Drawing checklist

- Mark the element with G.
- State frequency and duty cycle.
- Use !G or G! where start or stop behaviour matters.

## Important distinction

A monostable produces one pulse per trigger; an astable runs continuously while enabled.

## Facts

- Qualifier: G
- Variants: !G synchronous start, G! completes last pulse
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [Overview of IEEE Standard 91-1984: explanation of logic symbols (SDYZ001A)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) — Texas Instruments. Lists G, !G and G! astable qualifiers.

## Related references

- [Clock generator](clock-generator.md)
- [IEC non-retriggerable monostable](iec-non-retriggerable-monostable.md)
- [Voltage-controlled oscillator](voltage-controlled-oscillator.md)

![IEC astable element — original educational illustration](../artwork/svg/iec-astable-element.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
