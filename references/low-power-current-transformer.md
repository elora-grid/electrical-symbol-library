# Low-power current transformer

Small iron-core CT with an integral shunt that delivers a low-level voltage signal instead of a standard secondary current.

[Canonical reference](https://eloragrid.ai/symbols/low-power-current-transformer) · [Structured record](../entries/low-power-current-transformer.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, Manufacturer.

## What it represents

A low-power CT uses a small magnetic core and an integral burden resistor, so its output is a low-level voltage proportional to primary current. It suits digital relays and compact switchgear, and a single LPCT can often replace several conventional CT ratios.
Because the burden is built in, the output must not be shorted or loaded like a conventional CT, and it cannot feed electromechanical relays or ordinary meters. The symbol shows the sensor but the reader must confirm the relay input type and the sensor's rated output.

## How to read it

- Check the receiving input is an LPCT input.
- Do not short the output as for a conventional CT.

## Drawing checklist

- State rated output
- Reference relay input type
- Show sensor cable

## Important distinction

An LPCT has an iron core with integral burden; a Rogowski coil has no iron core and gives a di/dt output.

## Facts

- Output: Low-level voltage proportional to current
- Burden: Integral to the sensor
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [Medium-voltage indoor sensors: Rogowski coil and voltage divider low-power instrument transformers](https://www.abb.com/global/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-sensors) — ABB. Public manufacturer page describing low-power instrument transformers based on Rogowski coils and voltage dividers.
- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public manufacturer overview of indoor current and voltage instrument transformers.

## Related references

- [Rogowski coil current sensor](rogowski-coil.md)
- [Current transformer](current-transformer.md)
- [Resistive voltage divider sensor](resistive-voltage-divider-sensor.md)

![Low-power current transformer — original educational illustration](../artwork/svg/low-power-current-transformer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
