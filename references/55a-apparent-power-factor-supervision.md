# Apparent power-factor supervision

Supervises the apparent power-factor quantity defined in the cited relay family.

[Canonical reference](https://eloragrid.ai/protection-functions/55a-apparent-power-factor-supervision) · [Structured record](../entries/55a-apparent-power-factor-supervision.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises the apparent power-factor quantity defined in the cited relay family.
The drafting record should connect this function to the current and voltage measurements and apparent-factor calculation reference, then trace the apparent power-factor alarm or output. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton E-Series function mapping). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the current and voltage measurements and apparent-factor calculation reference.
- Trace the apparent power-factor alarm or output.

## Drawing checklist

- Label the current and voltage measurements and apparent-factor calculation reference.
- Cross-reference the apparent power-factor alarm or output.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

Apparent power factor and displacement power factor can differ for distorted waveforms; the drawing should retain the manufacturer's quantity definition.

## Facts

- Function designation: 55A
- Base function: 55 — Power factor protection
- Published mapping: Eaton E-Series function mapping
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [E-Series protective relays: public family comparison brochure](https://www.eaton.com/content/dam/eaton/products/electrical-circuit-protection/protective-relays-and-predictive-devices/e-series-protective-relays-br026001en.pdf) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Power factor protection](55-power-factor-protection.md)
- [Voltage transformer](voltage-transformer.md)

![Apparent power-factor supervision — original educational illustration](../artwork/svg/55a-apparent-power-factor-supervision.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
