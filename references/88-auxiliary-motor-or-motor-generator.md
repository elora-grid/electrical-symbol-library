# Auxiliary motor or motor-generator

Identifies a motor or motor-generator serving an auxiliary equipment function.

[Canonical reference](https://eloragrid.ai/protection-functions/88-auxiliary-motor-or-motor-generator) · [Structured record](../entries/88-auxiliary-motor-or-motor-generator.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Identifies a motor or motor-generator serving an auxiliary equipment function.
In a drafting package, connect this reference to the auxiliary power supply and driven load. The associated drawing should trace the auxiliary starter and equipment service reference; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the auxiliary power supply and driven load.
- Trace the auxiliary starter and equipment service reference.

## Drawing checklist

- Label the auxiliary power supply and driven load.
- Cross-reference the auxiliary starter and equipment service reference.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

The auxiliary-machine role differs from the principal generating unit or main process motor.

## Facts

- ANSI / IEEE function number: 88
- Drawing context: The auxiliary power supply and driven load
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Three-phase motor](motor.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Auxiliary motor or motor-generator — original educational illustration](../artwork/svg/88-auxiliary-motor-or-motor-generator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
