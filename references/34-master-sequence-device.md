# Master sequence device

Coordinates the steps of a machine or switching sequence.

[Canonical reference](https://eloragrid.ai/protection-functions/34-master-sequence-device) · [Structured record](../entries/34-master-sequence-device.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Coordinates the steps of a machine or switching sequence.
In a drafting package, connect this reference to the sequence step inputs and transition conditions. The associated drawing should trace the step outputs and unit sequence diagram; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the sequence step inputs and transition conditions.
- Trace the step outputs and unit sequence diagram.

## Drawing checklist

- Label the sequence step inputs and transition conditions.
- Cross-reference the step outputs and unit sequence diagram.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A master sequence device sequences operations; device 10 determines the order of multiple units.

## Facts

- ANSI / IEEE function number: 34
- Drawing context: The sequence step inputs and transition conditions
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [PLC input / output](plc-io.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Master sequence device — original educational illustration](../artwork/svg/34-master-sequence-device.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
