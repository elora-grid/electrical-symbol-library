# Negative-sequence differential protection

Compares negative-sequence current information across a differential protection zone.

[Canonical reference](https://eloragrid.ai/protection-functions/87q-negative-sequence-differential-protection) · [Structured record](../entries/87q-negative-sequence-differential-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Compares negative-sequence current information across a differential protection zone.
The drafting record should connect this function to the zone-boundary phase-current measurements and sequence compensation reference, then trace the negative-sequence differential element and associated trip output. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (SEL public device-number table). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the zone-boundary phase-current measurements and sequence compensation reference.
- Trace the negative-sequence differential element and associated trip output.

## Drawing checklist

- Label the zone-boundary phase-current measurements and sequence compensation reference.
- Cross-reference the negative-sequence differential element and associated trip output.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

Sequence differential 87Q is not the same as local negative-sequence overcurrent 51Q; it compares quantities across a zone.

## Facts

- Function designation: 87Q
- Base function: 87 — Differential protection
- Published mapping: SEL public device-number table
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Differential protection](87-differential.md)
- [Current transformer](current-transformer.md)

![Negative-sequence differential protection — original educational illustration](../artwork/svg/87q-negative-sequence-differential-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
