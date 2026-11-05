# Underpower protection

Supervises active power below the documented operating criterion.

[Canonical reference](https://eloragrid.ai/protection-functions/32u-underpower-protection) · [Structured record](../entries/32u-underpower-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises active power below the documented operating criterion.
The drafting record should connect this function to the active-power measurement circuit and operating-state supervision, then trace the underpower alarm or selected protection output. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (ABB Relion 620 function mapping). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the active-power measurement circuit and operating-state supervision.
- Trace the underpower alarm or selected protection output.

## Drawing checklist

- Label the active-power measurement circuit and operating-state supervision.
- Cross-reference the underpower alarm or selected protection output.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

An underpower element measures power; undercurrent 37 can respond differently when voltage or power factor changes.

## Facts

- Function designation: 32U
- Base function: 32 — Directional power
- Published mapping: ABB Relion 620 function mapping
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [Relion 620 series: published protection function and designation mappings](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Directional power](32-directional-power.md)
- [Current transformer](current-transformer.md)

![Underpower protection — original educational illustration](../artwork/svg/32u-underpower-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
