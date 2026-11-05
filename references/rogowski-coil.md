# Rogowski coil current sensor

Air-cored coil around a conductor whose output voltage is proportional to the rate of change of current.

[Canonical reference](https://eloragrid.ai/symbols/rogowski-coil) · [Structured record](../entries/rogowski-coil.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, Manufacturer.

## What it represents

A Rogowski coil is wound on a non-magnetic former and placed around the conductor. Its output voltage is proportional to the rate of change of current, so an integrator in the relay or meter reconstructs the current waveform. With no iron core it does not saturate, which suits high fault currents and wide measuring ranges.
The output is a low-level voltage, not a current, so it must go to an input designed for it and cannot be wired into a conventional 1 A or 5 A CT circuit. The symbol does not show the sensor's coefficient, cable length limits or the matching relay input, all of which affect accuracy.

## How to read it

- Confirm the receiving input is designed for Rogowski sensors.
- Do not apply CT shorting practice to this low-level voltage output.

## Drawing checklist

- State sensor coefficient
- Reference matching input
- Respect cable length limit

## Important distinction

A Rogowski coil has no iron core and gives a voltage output; a conventional CT has an iron core and a current output.

## Facts

- Output: Voltage proportional to di/dt
- Saturation: None, as there is no iron core
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [Medium-voltage indoor sensors: Rogowski coil and voltage divider low-power instrument transformers](https://www.abb.com/global/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-sensors) — ABB. Public manufacturer page describing low-power instrument transformers based on Rogowski coils and voltage dividers.
- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public manufacturer overview of indoor current and voltage instrument transformers.

## Related references

- [Low-power current transformer](low-power-current-transformer.md)
- [Current transformer](current-transformer.md)
- [Resistive voltage divider sensor](resistive-voltage-divider-sensor.md)

![Rogowski coil current sensor — original educational illustration](../artwork/svg/rogowski-coil.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
