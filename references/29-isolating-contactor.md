# Isolating contactor

Provides a contactor-operated disconnection within a machine or power circuit.

[Canonical reference](https://eloragrid.ai/protection-functions/29-isolating-contactor) · [Structured record](../entries/29-isolating-contactor.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Provides a contactor-operated disconnection within a machine or power circuit.
In a drafting package, connect this reference to the isolation contactor poles and coil supply. The associated drawing should trace the circuit boundary and interlocked status contacts; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the isolation contactor poles and coil supply.
- Trace the circuit boundary and interlocked status contacts.

## Drawing checklist

- Label the isolation contactor poles and coil supply.
- Cross-reference the circuit boundary and interlocked status contacts.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A contactor used for isolation has to be selected for that duty; the number alone establishes no safe-isolation rating.

## Facts

- ANSI / IEEE function number: 29
- Drawing context: The isolation contactor poles and coil supply
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Contactor](contactor.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Isolating contactor — original educational illustration](../artwork/svg/29-isolating-contactor.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
