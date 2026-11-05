# Governor

Regulates the operating speed or mechanical input of a generating or rotating unit.

[Canonical reference](https://eloragrid.ai/protection-functions/65-governor) · [Structured record](../entries/65-governor.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Regulates the operating speed or mechanical input of a generating or rotating unit.
In a drafting package, connect this reference to the speed reference and prime-mover control interface. The associated drawing should trace the governor actuator and controller commands; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the speed reference and prime-mover control interface.
- Trace the governor actuator and controller commands.

## Drawing checklist

- Label the speed reference and prime-mover control interface.
- Cross-reference the governor actuator and controller commands.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A governor regulates mechanical input; an AVR numbered 90 regulates an electrical voltage objective.

## Facts

- ANSI / IEEE function number: 65
- Drawing context: The speed reference and prime-mover control interface
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Generator](generator.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Governor — original educational illustration](../artwork/svg/65-governor.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
