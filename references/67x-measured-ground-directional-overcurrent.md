# Measured ground directional overcurrent

Applies directional supervision to the separately measured ground or neutral current element in the cited Eaton family.

[Canonical reference](https://eloragrid.ai/protection-functions/67x-measured-ground-directional-overcurrent) · [Structured record](../entries/67x-measured-ground-directional-overcurrent.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Applies directional supervision to the separately measured ground or neutral current element in the cited Eaton family.
The drafting record should connect this function to the dedicated ground/neutral CT input and polarising references, then trace the measured directional earth-fault trip. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton EGR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the dedicated ground/neutral CT input and polarising references.
- Trace the measured directional earth-fault trip.

## Drawing checklist

- Label the dedicated ground/neutral CT input and polarising references.
- Cross-reference the measured directional earth-fault trip.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

The X suffix has a product-specific measured-input meaning here; retain the relay manual reference rather than assuming a universal suffix rule.

## Facts

- Function designation: 67X
- Base function: 67 — Directional overcurrent
- Published mapping: Eaton EGR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [EGR-5000 generator protection: public function overview](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/generator-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Directional overcurrent](67-directional-overcurrent.md)
- [Current transformer](current-transformer.md)

![Measured ground directional overcurrent — original educational illustration](../artwork/svg/67x-measured-ground-directional-overcurrent.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
