# Instantaneous negative-sequence overcurrent

Supervises negative-sequence current for an instantaneous overcurrent element.

[Canonical reference](https://eloragrid.ai/protection-functions/50q-instantaneous-negative-sequence-overcurrent) · [Structured record](../entries/50q-instantaneous-negative-sequence-overcurrent.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises negative-sequence current for an instantaneous overcurrent element.
The drafting record should connect this function to the three phase-current inputs and calculated negative-sequence quantity, then trace the negative-sequence element and selected trip matrix. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (SEL generator protection feature table). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the three phase-current inputs and calculated negative-sequence quantity.
- Trace the negative-sequence element and selected trip matrix.

## Drawing checklist

- Label the three phase-current inputs and calculated negative-sequence quantity.
- Cross-reference the negative-sequence element and selected trip matrix.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

Negative-sequence current is a derived unbalance quantity; it is not a fourth physical CT channel merely because a separate function appears on the SLD.

## Facts

- Function designation: 50Q
- Base function: 50 — Instantaneous overcurrent
- Published mapping: SEL generator protection feature table
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [Generator protection feature and function comparison](https://selinc.com/products/comparisons/generator-protection/) — Schweitzer Engineering Laboratories. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Instantaneous overcurrent](50-instantaneous-overcurrent.md)
- [Current transformer](current-transformer.md)

![Instantaneous negative-sequence overcurrent — original educational illustration](../artwork/svg/50q-instantaneous-negative-sequence-overcurrent.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
