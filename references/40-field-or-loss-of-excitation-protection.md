# Field or loss-of-excitation protection

Detects an abnormal machine excitation condition using the implementation's field or electrical measurements.

[Canonical reference](https://eloragrid.ai/protection-functions/40-field-or-loss-of-excitation-protection) · [Structured record](../entries/40-field-or-loss-of-excitation-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Detects an abnormal machine excitation condition using the implementation's field or electrical measurements.
In a drafting package, connect this reference to the machine measurements and excitation reference. The associated drawing should trace the excitation alarm or generator trip path; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the machine measurements and excitation reference.
- Trace the excitation alarm or generator trip path.

## Drawing checklist

- Label the machine measurements and excitation reference.
- Cross-reference the excitation alarm or generator trip path.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Loss-of-excitation protection supervises a condition; device 41 switches the field circuit.

## Facts

- ANSI / IEEE function number: 40
- Drawing context: The machine measurements and excitation reference
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Generator](generator.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Field or loss-of-excitation protection — original educational illustration](../artwork/svg/40-field-or-loss-of-excitation-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
