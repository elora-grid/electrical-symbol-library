# Main-input overvoltage

Supervises high voltage using the main three-phase inputs in the cited Eaton family.

[Canonical reference](https://eloragrid.ai/protection-functions/59m-main-input-overvoltage) · [Structured record](../entries/59m-main-input-overvoltage.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises high voltage using the main three-phase inputs in the cited Eaton family.
The drafting record should connect this function to the main VT circuit and phase input assignments, then trace the main overvoltage operating outputs. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton ETR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the main VT circuit and phase input assignments.
- Trace the main overvoltage operating outputs.

## Drawing checklist

- Label the main VT circuit and phase input assignments.
- Cross-reference the main overvoltage operating outputs.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

59M and 59A can supervise different voltage sources; their labels should match the VT circuits shown.

## Facts

- Function designation: 59M
- Base function: 59 — Overvoltage
- Published mapping: Eaton ETR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [ETR-4000 and ETR-5000 transformer protection function tables](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/transformer-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Overvoltage](59-overvoltage.md)
- [Voltage transformer](voltage-transformer.md)

![Main-input overvoltage — original educational illustration](../artwork/svg/59m-main-input-overvoltage.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
