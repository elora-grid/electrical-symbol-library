# Circuit-breaker failure protection

Initiates the documented backup action when a breaker does not clear the monitored condition after a trip initiation.

[Canonical reference](https://eloragrid.ai/protection-functions/50bf-circuit-breaker-failure-protection) · [Structured record](../entries/50bf-circuit-breaker-failure-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Initiates the documented backup action when a breaker does not clear the monitored condition after a trip initiation.
The drafting record should connect this function to the initiating trips, breaker current/status and failure timer, then trace the retrip and upstream or adjacent breaker trip matrix. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton EMR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the initiating trips, breaker current/status and failure timer.
- Trace the retrip and upstream or adjacent breaker trip matrix.

## Drawing checklist

- Label the initiating trips, breaker current/status and failure timer.
- Cross-reference the retrip and upstream or adjacent breaker trip matrix.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

Breaker failure is a sequence involving initiation and clearance supervision; it is not ordinary instantaneous feeder overcurrent.

## Facts

- Function designation: 50BF
- Base function: 50 — Instantaneous overcurrent
- Published mapping: Eaton EMR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [EMR motor protection: public function comparison](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/motor-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Instantaneous overcurrent](50-instantaneous-overcurrent.md)
- [Current transformer](current-transformer.md)

![Circuit-breaker failure protection — original educational illustration](../artwork/svg/50bf-circuit-breaker-failure-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
