# Bidirectional active-energy meter

Energy meter with separate registers for energy flowing in each direction, as used at generation and solar connection points.

[Canonical reference](https://eloragrid.ai/symbols/bidirectional-active-energy-meter) · [Structured record](../entries/bidirectional-active-energy-meter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, Manufacturer.

## What it represents

A bidirectional meter records active energy in both directions on separate registers, usually labelled import and export. It is the normal meter at connection points with generation, batteries or solar, where energy flows to and from the network at different times of day.
Arrows on the symbol show the two directions, but what counts as import depends on where the meter sits and on the CT polarity. A reversed CT swaps the registers without any visible fault, so the direction convention must be checked against commissioning results.

## How to read it

- Confirm which register is import and which is export.
- Check CT polarity against the stated direction.

## Drawing checklist

- Define import direction
- Show CT polarity
- Reference metering point

## Important distinction

A bidirectional meter keeps separate import and export registers; a net register only keeps the difference.

## Facts

- Registers: Import and export active energy
- Typical use: Generation, storage and solar connection points
- Preview: Independent educational concept; consult the applicable standard and project legend for the exact graphic

## Public references

- [Power and energy measurement quantities](https://www.se.com/ph/en/faqs/FA343278/) — Schneider Electric. Public explanation of energy and power measurement quantities used by meters.
- [PowerLogic ION9000 user manual](https://www.se.com/us/en/download/document/26719674/) — Schneider Electric. Public meter manual describing measurement, logging and recording features of a revenue and power-quality meter.

## Related references

- [Active-energy meter](active-energy-meter.md)
- [Integrating instrument general symbol](integrating-instrument-general-symbol.md)
- [Energy meter with pulse transmitter](energy-meter-with-pulse-transmitter.md)

![Bidirectional active-energy meter — original educational illustration](../artwork/svg/bidirectional-active-energy-meter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
