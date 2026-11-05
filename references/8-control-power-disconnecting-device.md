# Control power disconnecting device

Isolates the supply feeding a control circuit or control-power bus.

[Canonical reference](https://eloragrid.ai/protection-functions/8-control-power-disconnecting-device) · [Structured record](../entries/8-control-power-disconnecting-device.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Isolates the supply feeding a control circuit or control-power bus.
In a drafting package, connect this reference to the control supply source and disconnect poles. The associated drawing should trace the downstream control circuits and auxiliary contacts; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the control supply source and disconnect poles.
- Trace the downstream control circuits and auxiliary contacts.

## Drawing checklist

- Label the control supply source and disconnect poles.
- Cross-reference the downstream control circuits and auxiliary contacts.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Control-power isolation does not by itself isolate the associated primary power circuit.

## Facts

- ANSI / IEEE function number: 8
- Drawing context: The control supply source and disconnect poles
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Disconnector](disconnector.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Control power disconnecting device — original educational illustration](../artwork/svg/8-control-power-disconnecting-device.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
