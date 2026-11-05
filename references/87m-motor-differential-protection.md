# Motor differential protection

Compares current measurements defining a motor differential protection zone.

[Canonical reference](https://eloragrid.ai/protection-functions/87m-motor-differential-protection) · [Structured record](../entries/87m-motor-differential-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Compares current measurements defining a motor differential protection zone.
The drafting record should connect this function to the motor terminal and neutral-end CT connections or flux-balance arrangement, then trace the motor differential trip and starter or breaker interface. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton EMR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the motor terminal and neutral-end CT connections or flux-balance arrangement.
- Trace the motor differential trip and starter or breaker interface.

## Drawing checklist

- Label the motor terminal and neutral-end CT connections or flux-balance arrangement.
- Cross-reference the motor differential trip and starter or breaker interface.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

Motor differential can use percentage or flux-balance methods; the designation alone does not choose the CT arrangement.

## Facts

- Function designation: 87M
- Base function: 87 — Differential protection
- Published mapping: Eaton EMR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [EMR motor protection: public function comparison](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/motor-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Differential protection](87-differential.md)
- [Current transformer](current-transformer.md)

![Motor differential protection — original educational illustration](../artwork/svg/87m-motor-differential-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
