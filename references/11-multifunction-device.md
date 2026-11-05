# Multifunction device

Identifies a device that performs several separately described protection or control functions.

[Canonical reference](https://eloragrid.ai/protection-functions/11-multifunction-device) · [Structured record](../entries/11-multifunction-device.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Identifies a device that performs several separately described protection or control functions.
In a drafting package, connect this reference to the device's enabled-function list. The associated drawing should trace the function-specific outputs and terminal references; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the device's enabled-function list.
- Trace the function-specific outputs and terminal references.

## Drawing checklist

- Label the device's enabled-function list.
- Cross-reference the function-specific outputs and terminal references.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

The number 11 does not reveal which protection elements are enabled; show their individual codes as well.

## Facts

- ANSI / IEEE function number: 11
- Drawing context: The device's enabled-function list
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Control / marshalling cabinet](control-cabinet.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Multifunction device — original educational illustration](../artwork/svg/11-multifunction-device.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
