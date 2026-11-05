# Starting circuit breaker

Connects a machine to the electrical supply used during starting.

[Canonical reference](https://eloragrid.ai/protection-functions/6-starting-circuit-breaker) · [Structured record](../entries/6-starting-circuit-breaker.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Connects a machine to the electrical supply used during starting.
In a drafting package, connect this reference to the starting supply and machine connection. The associated drawing should trace the starting breaker control and status; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the starting supply and machine connection.
- Trace the starting breaker control and status.

## Drawing checklist

- Label the starting supply and machine connection.
- Cross-reference the starting breaker control and status.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A starting breaker serves the start arrangement; device 42 identifies the normal running connection.

## Facts

- ANSI / IEEE function number: 6
- Drawing context: The starting supply and machine connection
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Starting circuit breaker — original educational illustration](../artwork/svg/6-starting-circuit-breaker.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
