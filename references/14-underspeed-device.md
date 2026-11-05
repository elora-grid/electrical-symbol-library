# Underspeed device

Responds to machine speed below the required operating level.

[Canonical reference](https://eloragrid.ai/protection-functions/14-underspeed-device) · [Structured record](../entries/14-underspeed-device.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Responds to machine speed below the required operating level.
In a drafting package, connect this reference to the speed input and start-up supervision logic. The associated drawing should trace the underspeed alarm or stopping circuit; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the speed input and start-up supervision logic.
- Trace the underspeed alarm or stopping circuit.

## Drawing checklist

- Label the speed input and start-up supervision logic.
- Cross-reference the underspeed alarm or stopping circuit.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

An underspeed element measures rotation; low electrical frequency is a different measured quantity.

## Facts

- ANSI / IEEE function number: 14
- Drawing context: The speed input and start-up supervision logic
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Three-phase motor](motor.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Underspeed device — original educational illustration](../artwork/svg/14-underspeed-device.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
