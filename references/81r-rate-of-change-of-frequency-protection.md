# Rate-of-change-of-frequency protection

Supervises the rate at which measured electrical frequency changes.

[Canonical reference](https://eloragrid.ai/protection-functions/81r-rate-of-change-of-frequency-protection) · [Structured record](../entries/81r-rate-of-change-of-frequency-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises the rate at which measured electrical frequency changes.
The drafting record should connect this function to the frequency measurement source, observation method and voltage supervision, then trace the ROCOF output and interconnection protection matrix. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton E-Series function mapping). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the frequency measurement source, observation method and voltage supervision.
- Trace the ROCOF output and interconnection protection matrix.

## Drawing checklist

- Label the frequency measurement source, observation method and voltage supervision.
- Cross-reference the ROCOF output and interconnection protection matrix.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

ROCOF differs from a simple underfrequency threshold; measurement window and supervision are device-specific settings.

## Facts

- Function designation: 81R
- Base function: 81 — Frequency protection
- Published mapping: Eaton E-Series function mapping
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [E-Series protective relays: public family comparison brochure](https://www.eaton.com/content/dam/eaton/products/electrical-circuit-protection/protective-relays-and-predictive-devices/e-series-protective-relays-br026001en.pdf) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Frequency protection](81-frequency.md)
- [Voltage transformer](voltage-transformer.md)

![Rate-of-change-of-frequency protection — original educational illustration](../artwork/svg/81r-rate-of-change-of-frequency-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
