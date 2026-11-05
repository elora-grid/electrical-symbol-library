# Flow switch or relay

Reports a flow condition in a monitored gas or liquid circuit.

[Canonical reference](https://eloragrid.ai/protection-functions/80-flow-switch-or-relay) · [Structured record](../entries/80-flow-switch-or-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Reports a flow condition in a monitored gas or liquid circuit.
In a drafting package, connect this reference to the fluid circuit, flow sensor and flow direction. The associated drawing should trace the cooling, lubrication or process alarm/trip destination; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the fluid circuit, flow sensor and flow direction.
- Trace the cooling, lubrication or process alarm/trip destination.

## Drawing checklist

- Label the fluid circuit, flow sensor and flow direction.
- Cross-reference the cooling, lubrication or process alarm/trip destination.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A flow device indicates movement; level switch 71 indicates a stored-fluid level.

## Facts

- ANSI / IEEE function number: 80
- Drawing context: The fluid circuit, flow sensor and flow direction
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Generator package](generator-package.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Flow switch or relay — original educational illustration](../artwork/svg/80-flow-switch-or-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
