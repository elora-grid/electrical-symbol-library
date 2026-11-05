# Undercurrent or underpower protection

Recognises a current or power level below the documented minimum operating criterion.

[Canonical reference](https://eloragrid.ai/protection-functions/37-undercurrent-or-underpower-protection) · [Structured record](../entries/37-undercurrent-or-underpower-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Recognises a current or power level below the documented minimum operating criterion.
In a drafting package, connect this reference to the measured current or power and running-state supervision. The associated drawing should trace the underload alarm or machine stopping path; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the measured current or power and running-state supervision.
- Trace the underload alarm or machine stopping path.

## Drawing checklist

- Label the measured current or power and running-state supervision.
- Cross-reference the underload alarm or machine stopping path.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

An underload reference must state its measured quantity; device 32 describes directional power rather than a generic low-current condition.

## Facts

- ANSI / IEEE function number: 37
- Drawing context: The measured current or power and running-state supervision
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Three-phase motor](motor.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Undercurrent or underpower protection — original educational illustration](../artwork/svg/37-undercurrent-or-underpower-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
