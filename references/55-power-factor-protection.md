# Power factor protection

Supervises power factor according to the selected relay's electrical measurement method.

[Canonical reference](https://eloragrid.ai/protection-functions/55-power-factor-protection) · [Structured record](../entries/55-power-factor-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Supervises power factor according to the selected relay's electrical measurement method.
In a drafting package, connect this reference to the current and voltage input references. The associated drawing should trace the power-factor alarm or regulating interface; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the current and voltage input references.
- Trace the power-factor alarm or regulating interface.

## Drawing checklist

- Label the current and voltage input references.
- Cross-reference the power-factor alarm or regulating interface.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Power factor is a ratio or angular relationship; reactive-power protection 32V uses a power quantity.

## Facts

- ANSI / IEEE function number: 55
- Drawing context: The current and voltage input references
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Capacitor](capacitor.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Power factor protection — original educational illustration](../artwork/svg/55-power-factor-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
