# Phase distance protection

Evaluates an impedance characteristic for phase-fault loops on the protected circuit.

[Canonical reference](https://eloragrid.ai/protection-functions/21p-phase-distance-protection) · [Structured record](../entries/21p-phase-distance-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Evaluates an impedance characteristic for phase-fault loops on the protected circuit.
The drafting record should connect this function to the phase CT and VT measurements and line direction, then trace the phase distance zones and breaker trip matrix. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (SEL generator protection feature table). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the phase CT and VT measurements and line direction.
- Trace the phase distance zones and breaker trip matrix.

## Drawing checklist

- Label the phase CT and VT measurements and line direction.
- Cross-reference the phase distance zones and breaker trip matrix.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

A phase distance element uses phase-fault loops; ground distance 21G includes the earth-return circuit treatment.

## Facts

- Function designation: 21P
- Base function: 21 — Distance protection
- Published mapping: SEL generator protection feature table
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [SEL 2022 Product and Solution Guide: published protection function tables](https://selinc.com/api/download/136012) — Schweitzer Engineering Laboratories. Explicit public manufacturer mapping of 21P to phase distance and 21G to ground distance in the protection feature tables.
- [Generator protection feature and function comparison](https://selinc.com/products/comparisons/generator-protection/) — Schweitzer Engineering Laboratories. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Distance protection](21-distance-protection.md)
- [Current transformer](current-transformer.md)

![Phase distance protection — original educational illustration](../artwork/svg/21p-phase-distance-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
