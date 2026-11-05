# Overspeed device

Responds when machine speed exceeds the documented operating criterion.

[Canonical reference](https://eloragrid.ai/protection-functions/12-overspeed-device) · [Structured record](../entries/12-overspeed-device.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Responds when machine speed exceeds the documented operating criterion.
In a drafting package, connect this reference to the speed sensor and shaft or machine identity. The associated drawing should trace the overspeed shutdown or alarm path; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the speed sensor and shaft or machine identity.
- Trace the overspeed shutdown or alarm path.

## Drawing checklist

- Label the speed sensor and shaft or machine identity.
- Cross-reference the overspeed shutdown or alarm path.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Electrical frequency can relate to speed, but an 81 element is not universally equivalent to mechanical overspeed protection.

## Facts

- ANSI / IEEE function number: 12
- Drawing context: The speed sensor and shaft or machine identity
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Generator](generator.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Overspeed device — original educational illustration](../artwork/svg/12-overspeed-device.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
