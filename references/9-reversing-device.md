# Reversing device

Changes the operating connection to reverse the direction of a machine or power circuit.

[Canonical reference](https://eloragrid.ai/protection-functions/9-reversing-device) · [Structured record](../entries/9-reversing-device.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Changes the operating connection to reverse the direction of a machine or power circuit.
In a drafting package, connect this reference to the forward and reverse command circuits. The associated drawing should trace the switched connections and mutual interlock; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the forward and reverse command circuits.
- Trace the switched connections and mutual interlock.

## Drawing checklist

- Label the forward and reverse command circuits.
- Cross-reference the switched connections and mutual interlock.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A reversing device changes the connection; a phase-sequence relay only observes the phase order.

## Facts

- ANSI / IEEE function number: 9
- Drawing context: The forward and reverse command circuits
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Three-phase motor](motor.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Reversing device — original educational illustration](../artwork/svg/9-reversing-device.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
