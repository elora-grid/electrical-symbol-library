# Restricted ground differential protection

Compares ground-fault-related currents for the restricted zone defined by the cited relay application.

[Canonical reference](https://eloragrid.ai/protection-functions/87gd-restricted-ground-differential-protection) · [Structured record](../entries/87gd-restricted-ground-differential-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Compares ground-fault-related currents for the restricted zone defined by the cited relay application.
The drafting record should connect this function to the phase and neutral CT arrangement and winding earthing point, then trace the restricted ground differential zone and trip outputs. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton ETR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the phase and neutral CT arrangement and winding earthing point.
- Trace the restricted ground differential zone and trip outputs.

## Drawing checklist

- Label the phase and neutral CT arrangement and winding earthing point.
- Cross-reference the restricted ground differential zone and trip outputs.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

Restricted ground differential protects a defined earthed zone; it is distinct from the transformer-wide phase differential element.

## Facts

- Function designation: 87GD
- Base function: 87 — Differential protection
- Published mapping: Eaton ETR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [ETR-4000 and ETR-5000 transformer protection function tables](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/transformer-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Differential protection](87-differential.md)
- [Current transformer](current-transformer.md)

![Restricted ground differential protection — original educational illustration](../artwork/svg/87gd-restricted-ground-differential-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
