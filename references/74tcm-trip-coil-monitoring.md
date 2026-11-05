# Trip-coil monitoring

Monitors the electrical integrity of a documented breaker trip-coil circuit.

[Canonical reference](https://eloragrid.ai/protection-functions/74tcm-trip-coil-monitoring) · [Structured record](../entries/74tcm-trip-coil-monitoring.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Monitors the electrical integrity of a documented breaker trip-coil circuit.
The drafting record should connect this function to the trip supply, coil, supervision resistor and breaker auxiliary contacts, then trace the trip-circuit unhealthy alarm and monitoring-device terminals. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (Eaton ETR family). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the trip supply, coil, supervision resistor and breaker auxiliary contacts.
- Trace the trip-circuit unhealthy alarm and monitoring-device terminals.

## Drawing checklist

- Label the trip supply, coil, supervision resistor and breaker auxiliary contacts.
- Cross-reference the trip-circuit unhealthy alarm and monitoring-device terminals.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

Trip-circuit monitoring detects a circuit condition; it does not prove the breaker mechanism can interrupt fault current.

## Facts

- Function designation: 74TCM
- Base function: 74 — Alarm relay
- Published mapping: Eaton ETR family
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [ETR-4000 and ETR-5000 transformer protection function tables](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/transformer-relays.html) — Eaton. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Alarm relay](74-alarm-relay.md)
- [Relay coil](relay-coil.md)

![Trip-coil monitoring — original educational illustration](../artwork/svg/74tcm-trip-coil-monitoring.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
