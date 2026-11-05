# Shunting or discharge switch

Changes a circuit connection to bypass a component or provide a discharge path.

[Canonical reference](https://eloragrid.ai/protection-functions/17-shunting-or-discharge-switch) · [Structured record](../entries/17-shunting-or-discharge-switch.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Changes a circuit connection to bypass a component or provide a discharge path.
In a drafting package, connect this reference to the component bypassed or discharged. The associated drawing should trace the switched path and required interlocks; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the component bypassed or discharged.
- Trace the switched path and required interlocks.

## Drawing checklist

- Label the component bypassed or discharged.
- Cross-reference the switched path and required interlocks.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A discharge path is not automatically an earthing path; show the actual circuit connection.

## Facts

- ANSI / IEEE function number: 17
- Drawing context: The component bypassed or discharged
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Resistor](resistor.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Shunting or discharge switch — original educational illustration](../artwork/svg/17-shunting-or-discharge-switch.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
