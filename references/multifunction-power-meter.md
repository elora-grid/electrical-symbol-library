# Multifunction power meter

Digital panel meter that measures voltage, current, power, energy and power factor from one set of CT and VT inputs.

[Canonical reference](https://eloragrid.ai/symbols/multifunction-power-meter) · [Structured record](../entries/multifunction-power-meter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: Manufacturer.

## What it represents

A multifunction power meter replaces separate ammeters, voltmeters, wattmeters and energy meters with one digital device. On single-line diagrams it is drawn as one block at a feeder or incomer with its CT and VT connections, and on schematics its terminals show current inputs, voltage inputs, auxiliary supply and communications.
Listing the meter once hides how many quantities it provides. The drawing or schedule should state which values are used for billing, monitoring or control, and which communication protocol carries them, because those uses carry different accuracy requirements.

## How to read it

- Separate the CT inputs, VT inputs and auxiliary supply terminals.
- Check which values are sent over communications.

## Drawing checklist

- Show CT and VT ratios
- State auxiliary supply
- Reference communications address

## Important distinction

A multifunction meter measures many quantities; a single-function instrument shows one.

## Facts

- Inputs: Three-phase CT and VT plus auxiliary supply
- Outputs: Display, pulses and communications
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [PowerLogic ION9000 user manual](https://www.se.com/us/en/download/document/26719674/) — Schneider Electric. Public meter manual describing measurement, logging and recording features of a revenue and power-quality meter.
- [Power and energy measurement quantities](https://www.se.com/ph/en/faqs/FA343278/) — Schneider Electric. Public explanation of energy and power measurement quantities used by meters.

## Related references

- [Power quality analyser](power-quality-analyser.md)
- [Active-energy meter](active-energy-meter.md)
- [Current transformer](current-transformer.md)

![Multifunction power meter — original educational illustration](../artwork/svg/multifunction-power-meter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
