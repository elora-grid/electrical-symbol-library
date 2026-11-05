# Field circuit breaker

Applies or removes the electrical connection to a machine field circuit.

[Canonical reference](https://eloragrid.ai/protection-functions/41-field-circuit-breaker) · [Structured record](../entries/41-field-circuit-breaker.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Applies or removes the electrical connection to a machine field circuit.
In a drafting package, connect this reference to the excitation source, field winding and discharge arrangement. The associated drawing should trace the field breaker trip/close circuits and status; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the excitation source, field winding and discharge arrangement.
- Trace the field breaker trip/close circuits and status.

## Drawing checklist

- Label the excitation source, field winding and discharge arrangement.
- Cross-reference the field breaker trip/close circuits and status.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A field breaker switches the excitation circuit; the generator's main AC breaker normally carries a separate 52 designation.

## Facts

- ANSI / IEEE function number: 41
- Drawing context: The excitation source, field winding and discharge arrangement
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Generator](generator.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Field circuit breaker — original educational illustration](../artwork/svg/41-field-circuit-breaker.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
