# Calculated residual instantaneous overcurrent

Supervises an instantaneous residual-current element calculated from phase-current measurements in the cited Eaton family.

[Canonical reference](https://eloragrid.ai/protection-functions/50r-calculated-residual-instantaneous-overcurrent) · [Structured record](../entries/50r-calculated-residual-instantaneous-overcurrent.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises an instantaneous residual-current element calculated from phase-current measurements in the cited Eaton family.
The drafting record should connect this function to the phase CT inputs used to calculate residual current, then trace the calculated residual element and earth-fault trip output. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton EMR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the phase CT inputs used to calculate residual current.
- Trace the calculated residual element and earth-fault trip output.

## Drawing checklist

- Label the phase CT inputs used to calculate residual current.
- Cross-reference the calculated residual element and earth-fault trip output.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

Eaton's R mapping means calculated residual current; a separate measured residual input is identified as X in the same family.

## Facts

- Function designation: 50R
- Base function: 50 — Instantaneous overcurrent
- Published mapping: Eaton EMR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [EMR motor protection: public function comparison](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/motor-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Instantaneous overcurrent](50-instantaneous-overcurrent.md)
- [Current transformer](current-transformer.md)

![Calculated residual instantaneous overcurrent — original educational illustration](../artwork/svg/50r-calculated-residual-instantaneous-overcurrent.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
