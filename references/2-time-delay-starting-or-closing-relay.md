# Time-delay starting or closing relay

Introduces a deliberate interval before a starting or closing operation is permitted.

[Canonical reference](https://eloragrid.ai/protection-functions/2-time-delay-starting-or-closing-relay) · [Structured record](../entries/2-time-delay-starting-or-closing-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Introduces a deliberate interval before a starting or closing operation is permitted.
In a drafting package, connect this reference to the initiating contact and timer supply. The associated drawing should trace the delayed start or close command; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the initiating contact and timer supply.
- Trace the delayed start or close command.

## Drawing checklist

- Label the initiating contact and timer supply.
- Cross-reference the delayed start or close command.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Device 2 delays starting or closing; device 62 delays a stopping or opening action.

## Facts

- ANSI / IEEE function number: 2
- Drawing context: The initiating contact and timer supply
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Relay coil](relay-coil.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Time-delay starting or closing relay — original educational illustration](../artwork/svg/2-time-delay-starting-or-closing-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
