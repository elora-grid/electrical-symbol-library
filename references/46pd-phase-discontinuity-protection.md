# Phase-discontinuity protection

Uses current-sequence relationships to detect a phase-discontinuity condition.

[Canonical reference](https://eloragrid.ai/protection-functions/46pd-phase-discontinuity-protection) · [Structured record](../entries/46pd-phase-discontinuity-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Uses current-sequence relationships to detect a phase-discontinuity condition.
The drafting record should connect this function to the three phase CT circuits and current-unbalance ratio reference, then trace the open-phase alarm or trip logic. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (ABB Relion 620 function mapping). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the three phase CT circuits and current-unbalance ratio reference.
- Trace the open-phase alarm or trip logic.

## Drawing checklist

- Label the three phase CT circuits and current-unbalance ratio reference.
- Cross-reference the open-phase alarm or trip logic.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

ABB's 46PD application is phase discontinuity; a phase-order relay and an ordinary overcurrent element address different conditions.

## Facts

- Function designation: 46PD
- Base function: 46 — Current unbalance / negative sequence
- Published mapping: ABB Relion 620 function mapping
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [Relion 620 series: published protection function and designation mappings](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Current unbalance / negative sequence](46-current-unbalance.md)
- [Current transformer](current-transformer.md)

![Phase-discontinuity protection — original educational illustration](../artwork/svg/46pd-phase-discontinuity-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
