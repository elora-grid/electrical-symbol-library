# Incomplete-sequence relay

Detects that an operating or starting sequence has not completed as required.

[Canonical reference](https://eloragrid.ai/protection-functions/48-incomplete-sequence-relay) · [Structured record](../entries/48-incomplete-sequence-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Detects that an operating or starting sequence has not completed as required.
In a drafting package, connect this reference to the start/sequence initiation and completion indications. The associated drawing should trace the timeout alarm and stopping or reset circuit; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the start/sequence initiation and completion indications.
- Trace the timeout alarm and stopping or reset circuit.

## Drawing checklist

- Label the start/sequence initiation and completion indications.
- Cross-reference the timeout alarm and stopping or reset circuit.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Incomplete sequence supervision checks completion; a starts-per-hour limit is a separate 66 application.

## Facts

- ANSI / IEEE function number: 48
- Drawing context: The start/sequence initiation and completion indications
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Three-phase motor](motor.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Incomplete-sequence relay — original educational illustration](../artwork/svg/48-incomplete-sequence-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
