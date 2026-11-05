# Negative-sequence overvoltage

Supervises the negative-sequence component derived from three-phase voltage measurements.

[Canonical reference](https://eloragrid.ai/protection-functions/59q-negative-sequence-overvoltage) · [Structured record](../entries/59q-negative-sequence-overvoltage.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises the negative-sequence component derived from three-phase voltage measurements.
The drafting record should connect this function to the three phase voltage inputs and sequence calculation reference, then trace the voltage-unbalance-sensitive element and selected output. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (SEL public device-number table). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the three phase voltage inputs and sequence calculation reference.
- Trace the voltage-unbalance-sensitive element and selected output.

## Drawing checklist

- Label the three phase voltage inputs and sequence calculation reference.
- Cross-reference the voltage-unbalance-sensitive element and selected output.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

Negative-sequence overvoltage indicates an unbalanced voltage component; it differs from a high positive-sequence or phase-voltage threshold.

## Facts

- Function designation: 59Q
- Base function: 59 — Overvoltage
- Published mapping: SEL public device-number table
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Overvoltage](59-overvoltage.md)
- [Voltage transformer](voltage-transformer.md)

![Negative-sequence overvoltage — original educational illustration](../artwork/svg/59q-negative-sequence-overvoltage.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
