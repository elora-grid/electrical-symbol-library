# Stopping device

Initiates a machine or unit shutdown by removing the relevant operating permission.

[Canonical reference](https://eloragrid.ai/protection-functions/5-stopping-device) · [Structured record](../entries/5-stopping-device.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Initiates a machine or unit shutdown by removing the relevant operating permission.
In a drafting package, connect this reference to the stop command and normally defined state. The associated drawing should trace the shutdown path and affected contactors; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the stop command and normally defined state.
- Trace the shutdown path and affected contactors.

## Drawing checklist

- Label the stop command and normally defined state.
- Cross-reference the shutdown path and affected contactors.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A stopping device does not automatically provide an emergency-stop safety function.

## Facts

- ANSI / IEEE function number: 5
- Drawing context: The stop command and normally defined state
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Emergency-stop operator](emergency-stop.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Stopping device — original educational illustration](../artwork/svg/5-stopping-device.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
