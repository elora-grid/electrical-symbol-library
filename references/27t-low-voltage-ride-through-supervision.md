# Low-voltage ride-through supervision

Supervises a voltage-time ride-through criterion used in a generator or interconnection application.

[Canonical reference](https://eloragrid.ai/protection-functions/27t-low-voltage-ride-through-supervision) · [Structured record](../entries/27t-low-voltage-ride-through-supervision.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises a voltage-time ride-through criterion used in a generator or interconnection application.
The drafting record should connect this function to the measured terminal voltage and applicable voltage-time characteristic, then trace the ride-through function output and interconnection protection logic. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton ETR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the measured terminal voltage and applicable voltage-time characteristic.
- Trace the ride-through function output and interconnection protection logic.

## Drawing checklist

- Label the measured terminal voltage and applicable voltage-time characteristic.
- Cross-reference the ride-through function output and interconnection protection logic.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

A ride-through envelope is not a fixed undervoltage pickup; the reference does not establish compliance with a connection requirement.

## Facts

- Function designation: 27T
- Base function: 27 — Undervoltage
- Published mapping: Eaton ETR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [ETR-4000 and ETR-5000 transformer protection function tables](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/transformer-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Undervoltage](27-undervoltage.md)
- [Voltage transformer](voltage-transformer.md)

![Low-voltage ride-through supervision — original educational illustration](../artwork/svg/27t-low-voltage-ride-through-supervision.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
