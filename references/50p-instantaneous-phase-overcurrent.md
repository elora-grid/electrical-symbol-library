# Instantaneous phase overcurrent

Supervises phase-current magnitude for the instantaneous overcurrent element.

[Canonical reference](https://eloragrid.ai/protection-functions/50p-instantaneous-phase-overcurrent) · [Structured record](../entries/50p-instantaneous-phase-overcurrent.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises phase-current magnitude for the instantaneous overcurrent element.
The drafting record should connect this function to the individual phase CT inputs and protected feeder direction reference, then trace the phase overcurrent trip and any intentional timer stage. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton EMR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the individual phase CT inputs and protected feeder direction reference.
- Trace the phase overcurrent trip and any intentional timer stage.

## Drawing checklist

- Label the individual phase CT inputs and protected feeder direction reference.
- Cross-reference the phase overcurrent trip and any intentional timer stage.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

P identifies phase-current elements in the cited families; 50N and 50G concern separately defined neutral or ground-current inputs.

## Facts

- Function designation: 50P
- Base function: 50 — Instantaneous overcurrent
- Published mapping: Eaton EMR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [EMR motor protection: public function comparison](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/motor-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Instantaneous overcurrent](50-instantaneous-overcurrent.md)
- [Current transformer](current-transformer.md)

![Instantaneous phase overcurrent — original educational illustration](../artwork/svg/50p-instantaneous-phase-overcurrent.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
