# Apparatus thermal device

Responds to the temperature of equipment or a monitored part of that equipment.

[Canonical reference](https://eloragrid.ai/protection-functions/26-apparatus-thermal-device) · [Structured record](../entries/26-apparatus-thermal-device.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Responds to the temperature of equipment or a monitored part of that equipment.
In a drafting package, connect this reference to the thermal sensor location and contact type. The associated drawing should trace the alarm, trip or cooling-control destination; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the thermal sensor location and contact type.
- Trace the alarm, trip or cooling-control destination.

## Drawing checklist

- Label the thermal sensor location and contact type.
- Cross-reference the alarm, trip or cooling-control destination.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

An apparatus thermal device can be a direct sensor or switch; a 49 function may instead use a calculated thermal model.

## Facts

- ANSI / IEEE function number: 26
- Drawing context: The thermal sensor location and contact type
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Thermal protection](49-thermal-protection.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Apparatus thermal device — original educational illustration](../artwork/svg/26-apparatus-thermal-device.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
