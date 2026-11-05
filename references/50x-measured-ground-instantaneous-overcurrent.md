# Measured ground instantaneous overcurrent

Supervises the instantaneous element using a separately measured ground or neutral input in the cited Eaton family.

[Canonical reference](https://eloragrid.ai/protection-functions/50x-measured-ground-instantaneous-overcurrent) · [Structured record](../entries/50x-measured-ground-instantaneous-overcurrent.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises the instantaneous element using a separately measured ground or neutral input in the cited Eaton family.
The drafting record should connect this function to the dedicated ground/neutral current input and external CT, then trace the measured-current element and associated trip path. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton EMR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the dedicated ground/neutral current input and external CT.
- Trace the measured-current element and associated trip path.

## Drawing checklist

- Label the dedicated ground/neutral current input and external CT.
- Cross-reference the measured-current element and associated trip path.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

In this Eaton mapping X identifies a measured input; it should not be assumed to mean a generic auxiliary relay.

## Facts

- Function designation: 50X
- Base function: 50 — Instantaneous overcurrent
- Published mapping: Eaton EMR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [EMR motor protection: public function comparison](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/motor-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Instantaneous overcurrent](50-instantaneous-overcurrent.md)
- [Current transformer](current-transformer.md)

![Measured ground instantaneous overcurrent — original educational illustration](../artwork/svg/50x-measured-ground-instantaneous-overcurrent.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
