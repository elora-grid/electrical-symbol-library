# Series voltage reference

Provides a reference voltage through a series-connected supply and output arrangement.

[Canonical reference](https://eloragrid.ai/symbols/series-voltage-reference) · [Structured record](../entries/series-voltage-reference.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

Provides a reference voltage through a series-connected supply and output arrangement.
On a schematic, identify the input supply, reference output and reference return and trace the ADC/DAC reference network and any buffering. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
A reference establishes a measurement datum; it is not automatically a load-power regulator.
The preview is an independently drawn educational functional reference. Add the selected component’s actual power pins, terminal numbers, timing or analogue reference details when producing a construction drawing.

## How to read it

- Identify the input supply, reference output and reference return.
- Trace the ADC/DAC reference network and any buffering.

## Drawing checklist

- Label the input supply, reference output and reference return.
- Cross-reference the ADC/DAC reference network and any buffering.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

A reference establishes a measurement datum; it is not automatically a load-power regulator.

## Facts

- Common schematic mnemonic: VREF-S — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The input supply, reference output and reference return
- Artwork scope: Original educational functional/circuit reference; not a selected product pinout.

## Public references

- [ADR4525 — series voltage reference](https://www.analog.com/en/products/adr4525.html) — Analog Devices. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Analogue-to-digital converter](analog-to-digital-converter.md)
- [PLC input / output](plc-io.md)

![Series voltage reference — original educational illustration](../artwork/svg/series-voltage-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
