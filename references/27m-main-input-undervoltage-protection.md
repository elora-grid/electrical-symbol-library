# Main-input undervoltage protection

Supervises low voltage using the relay's main voltage measurement inputs.

[Canonical reference](https://eloragrid.ai/protection-functions/27m-main-input-undervoltage-protection) · [Structured record](../entries/27m-main-input-undervoltage-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Supervises low voltage using the relay's main voltage measurement inputs.
The drafting record should connect this function to the main three-phase voltage inputs and their VT references, then trace the main undervoltage protection or control outputs. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton ETR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the main three-phase voltage inputs and their VT references.
- Trace the main undervoltage protection or control outputs.

## Drawing checklist

- Label the main three-phase voltage inputs and their VT references.
- Cross-reference the main undervoltage protection or control outputs.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

Main-input 27M and auxiliary-input 27A can supervise different electrical nodes in the same relay.

## Facts

- Function designation: 27M
- Base function: 27 — Undervoltage
- Published mapping: Eaton ETR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [ETR-4000 and ETR-5000 transformer protection function tables](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/transformer-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Undervoltage](27-undervoltage.md)
- [Voltage transformer](voltage-transformer.md)

![Main-input undervoltage protection — original educational illustration](../artwork/svg/27m-main-input-undervoltage-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
