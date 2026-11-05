# Instantaneous neutral overcurrent

Supervises the neutral or residual-current quantity identified by the protection scheme.

[Canonical reference](https://eloragrid.ai/protection-functions/50n-instantaneous-neutral-overcurrent) · [Structured record](../entries/50n-instantaneous-neutral-overcurrent.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises the neutral or residual-current quantity identified by the protection scheme.
The drafting record should connect this function to the neutral CT or calculated residual-current source, then trace the neutral overcurrent trip and residual measurement reference. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (SEL public device-number table). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the neutral CT or calculated residual-current source.
- Trace the neutral overcurrent trip and residual measurement reference.

## Drawing checklist

- Label the neutral CT or calculated residual-current source.
- Cross-reference the neutral overcurrent trip and residual measurement reference.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

The letter N alone does not prove whether current is measured directly or calculated from phase inputs.

## Facts

- Function designation: 50N
- Base function: 50 — Instantaneous overcurrent
- Published mapping: SEL public device-number table
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Instantaneous overcurrent](50-instantaneous-overcurrent.md)
- [Current transformer](current-transformer.md)

![Instantaneous neutral overcurrent — original educational illustration](../artwork/svg/50n-instantaneous-neutral-overcurrent.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
