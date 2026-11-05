# Annunciator relay

Operates an indication system that presents a detected condition to the operator.

[Canonical reference](https://eloragrid.ai/protection-functions/30-annunciator-relay) · [Structured record](../entries/30-annunciator-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Operates an indication system that presents a detected condition to the operator.
In a drafting package, connect this reference to the individual alarm inputs and acknowledgement/reset paths. The associated drawing should trace the annunciator window, horn or common alarm output; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the individual alarm inputs and acknowledgement/reset paths.
- Trace the annunciator window, horn or common alarm output.

## Drawing checklist

- Label the individual alarm inputs and acknowledgement/reset paths.
- Cross-reference the annunciator window, horn or common alarm output.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Annunciation presents a condition; a separate trip relay may act on the same condition.

## Facts

- ANSI / IEEE function number: 30
- Drawing context: The individual alarm inputs and acknowledgement/reset paths
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Indicator lamp](indicator-lamp.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Annunciator relay — original educational illustration](../artwork/svg/30-annunciator-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
