# Wattmetric earth-fault protection

Uses residual voltage and current to assess earth-fault power in the documented neutral-system application.

[Canonical reference](https://eloragrid.ai/protection-functions/32n-wattmetric-earth-fault-protection) · [Structured record](../entries/32n-wattmetric-earth-fault-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Uses residual voltage and current to assess earth-fault power in the documented neutral-system application.
The drafting record should connect this function to the residual voltage and current sources and polarity convention, then trace the wattmetric element and feeder earth-fault trip. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (ABB Relion 620 function mapping). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the residual voltage and current sources and polarity convention.
- Trace the wattmetric element and feeder earth-fault trip.

## Drawing checklist

- Label the residual voltage and current sources and polarity convention.
- Cross-reference the wattmetric element and feeder earth-fault trip.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

ABB's 32N mapping identifies wattmetric earth-fault protection; it differs from generator reverse active-power protection.

## Facts

- Function designation: 32N
- Base function: 32 — Directional power
- Published mapping: ABB Relion 620 function mapping
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [Relion 620 series: published protection function and designation mappings](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Directional power](32-directional-power.md)
- [Current transformer](current-transformer.md)

![Wattmetric earth-fault protection — original educational illustration](../artwork/svg/32n-wattmetric-earth-fault-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
