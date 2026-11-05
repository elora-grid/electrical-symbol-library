# Busbar differential protection

Compares currents at the boundaries of a busbar protection zone.

[Canonical reference](https://eloragrid.ai/protection-functions/87b-busbar-differential-protection) · [Structured record](../entries/87b-busbar-differential-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Compares currents at the boundaries of a busbar protection zone.
The drafting record should connect this function to the CTs bounding the bus zone and any zone-selection status contacts, then trace the bus differential trip matrix and included breakers. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (SEL public device-number table). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the CTs bounding the bus zone and any zone-selection status contacts.
- Trace the bus differential trip matrix and included breakers.

## Drawing checklist

- Label the CTs bounding the bus zone and any zone-selection status contacts.
- Cross-reference the bus differential trip matrix and included breakers.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

87B commonly identifies bus differential, but ABB also uses 87B for a phase-B high-impedance element; the application legend resolves the meaning.

## Facts

- Function designation: 87B
- Base function: 87 — Differential protection
- Published mapping: SEL public device-number table
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Differential protection](87-differential.md)
- [Current transformer](current-transformer.md)

![Busbar differential protection — original educational illustration](../artwork/svg/87b-busbar-differential-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
