# Resistive voltage divider sensor

Low-power voltage sensor using a resistive divider to give a small voltage signal proportional to primary voltage.

[Canonical reference](https://eloragrid.ai/symbols/resistive-voltage-divider-sensor) · [Structured record](../entries/resistive-voltage-divider-sensor.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, Manufacturer.

## What it represents

A resistive voltage divider sensor is a low-power instrument transformer in which a high-value resistor chain steps the primary voltage down to a small signal. It has no iron core, so it does not cause ferroresonance, and one sensor can cover a wide range of primary voltages.
The output is a low-energy signal that must go to an input designed for it, and the cable between sensor and relay is part of the measurement. The symbol does not show the division ratio, correction factors or connector type, which must match the relay configuration.

## How to read it

- Confirm the relay input is configured for the sensor ratio.
- Keep the supplied sensor cable unless the manufacturer allows changes.

## Drawing checklist

- State division ratio
- Reference correction factors
- Show connector and cable

## Important distinction

A resistive divider sensor gives a low-level signal; a conventional VT gives a standard secondary voltage capable of supplying burden.

## Facts

- Principle: Resistive voltage division
- Output: Low-level voltage signal
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [Medium-voltage indoor sensors: Rogowski coil and voltage divider low-power instrument transformers](https://www.abb.com/global/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-sensors) — ABB. Public manufacturer page describing low-power instrument transformers based on Rogowski coils and voltage dividers.
- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public manufacturer overview of indoor current and voltage instrument transformers.

## Related references

- [Rogowski coil current sensor](rogowski-coil.md)
- [Voltage transformer](voltage-transformer.md)
- [Capacitor voltage transformer](capacitor-voltage-transformer.md)

![Resistive voltage divider sensor — original educational illustration](../artwork/svg/resistive-voltage-divider-sensor.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
