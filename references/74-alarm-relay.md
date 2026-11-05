# Alarm relay

Provides an electrical alarm output for a documented monitored condition.

[Canonical reference](https://eloragrid.ai/protection-functions/74-alarm-relay) · [Structured record](../entries/74-alarm-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Provides an electrical alarm output for a documented monitored condition.
In a drafting package, connect this reference to the initiating condition and alarm supply. The associated drawing should trace the annunciator, SCADA input or common alarm relay; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the initiating condition and alarm supply.
- Trace the annunciator, SCADA input or common alarm relay.

## Drawing checklist

- Label the initiating condition and alarm supply.
- Cross-reference the annunciator, SCADA input or common alarm relay.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

An alarm relay does not necessarily trip equipment; trace the outputs before assigning a protection action.

## Facts

- ANSI / IEEE function number: 74
- Drawing context: The initiating condition and alarm supply
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Indicator lamp](indicator-lamp.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Alarm relay — original educational illustration](../artwork/svg/74-alarm-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
