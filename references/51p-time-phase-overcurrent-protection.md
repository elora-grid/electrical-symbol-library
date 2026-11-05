# Time phase-overcurrent protection

Supervises phase overcurrent using the selected time-current characteristic or intentional operating delay.

[Canonical reference](https://eloragrid.ai/protection-functions/51p-time-phase-overcurrent-protection) · [Structured record](../entries/51p-time-phase-overcurrent-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises phase overcurrent using the selected time-current characteristic or intentional operating delay.
The drafting record should connect this function to the phase CT inputs and coordination-study reference, then trace the phase time-overcurrent output and protected breaker. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton ETR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the phase CT inputs and coordination-study reference.
- Trace the phase time-overcurrent output and protected breaker.

## Drawing checklist

- Label the phase CT inputs and coordination-study reference.
- Cross-reference the phase time-overcurrent output and protected breaker.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

51P identifies phase overcurrent timing; the symbol alone does not choose an IEC or IEEE curve family.

## Facts

- Function designation: 51P
- Base function: 51 — Time overcurrent
- Published mapping: Eaton ETR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [ETR-4000 and ETR-5000 transformer protection function tables](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/transformer-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Time overcurrent](51-time-overcurrent.md)
- [Current transformer](current-transformer.md)

![Time phase-overcurrent protection — original educational illustration](../artwork/svg/51p-time-phase-overcurrent-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
