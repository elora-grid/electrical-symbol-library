# Master element

Starts or enables the principal operating sequence of a machine or power-system unit.

[Canonical reference](https://eloragrid.ai/protection-functions/1-master-element) · [Structured record](../entries/1-master-element.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Starts or enables the principal operating sequence of a machine or power-system unit.
In a drafting package, connect this reference to the start command and enabling permissives. The associated drawing should trace the unit sequence start or master-enable output; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the start command and enabling permissives.
- Trace the unit sequence start or master-enable output.

## Drawing checklist

- Label the start command and enabling permissives.
- Cross-reference the unit sequence start or master-enable output.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A master element initiates a sequence; device 4 is the master contactor that switches a circuit.

## Facts

- ANSI / IEEE function number: 1
- Drawing context: The start command and enabling permissives
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Generator](generator.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Master element — original educational illustration](../artwork/svg/1-master-element.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
