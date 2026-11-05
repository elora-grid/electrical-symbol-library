# Checking or interlocking relay

Checks a required equipment state before the operating sequence proceeds.

[Canonical reference](https://eloragrid.ai/protection-functions/3-checking-or-interlocking-relay) · [Structured record](../entries/3-checking-or-interlocking-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Checks a required equipment state before the operating sequence proceeds.
In a drafting package, connect this reference to the equipment status contacts used as permissives. The associated drawing should trace the blocked or permitted command path; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the equipment status contacts used as permissives.
- Trace the blocked or permitted command path.

## Drawing checklist

- Label the equipment status contacts used as permissives.
- Cross-reference the blocked or permitted command path.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

An interlock verifies a condition; a time delay by itself does not prove that condition.

## Facts

- ANSI / IEEE function number: 3
- Drawing context: The equipment status contacts used as permissives
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Selector switch](selector-switch.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Checking or interlocking relay — original educational illustration](../artwork/svg/3-checking-or-interlocking-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
