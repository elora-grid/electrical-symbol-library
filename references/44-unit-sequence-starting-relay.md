# Unit sequence starting relay

Starts the next unit or operating step when the documented sequence condition is met.

[Canonical reference](https://eloragrid.ai/protection-functions/44-unit-sequence-starting-relay) · [Structured record](../entries/44-unit-sequence-starting-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Starts the next unit or operating step when the documented sequence condition is met.
In a drafting package, connect this reference to the preceding unit status and sequence permissives. The associated drawing should trace the next unit's starting circuit; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the preceding unit status and sequence permissives.
- Trace the next unit's starting circuit.

## Drawing checklist

- Label the preceding unit status and sequence permissives.
- Cross-reference the next unit's starting circuit.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A unit sequence starting relay advances a defined sequence; it does not identify the entire master sequencer.

## Facts

- ANSI / IEEE function number: 44
- Drawing context: The preceding unit status and sequence permissives
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Relay coil](relay-coil.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Unit sequence starting relay — original educational illustration](../artwork/svg/44-unit-sequence-starting-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
