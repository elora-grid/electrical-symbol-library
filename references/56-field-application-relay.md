# Field application relay

Initiates application of excitation at the appropriate step of a machine starting sequence.

[Canonical reference](https://eloragrid.ai/protection-functions/56-field-application-relay) · [Structured record](../entries/56-field-application-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Initiates application of excitation at the appropriate step of a machine starting sequence.
In a drafting package, connect this reference to the speed/sequence permission and excitation supply. The associated drawing should trace the field application command and field switching device; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.
This designation is useful when reading machine and legacy control drawings. Retain the documented function on an existing drawing and consult the original equipment manual before assigning it to a new design.

## How to read it

- Identify the speed/sequence permission and excitation supply.
- Trace the field application command and field switching device.

## Drawing checklist

- Label the speed/sequence permission and excitation supply.
- Cross-reference the field application command and field switching device.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Field application is a sequence action; loss-of-excitation 40 supervises abnormal excitation after or during operation.

## Facts

- ANSI / IEEE function number: 56
- Drawing context: The speed/sequence permission and excitation supply
- Application scope: Specialist or legacy machine-control use; interpret with the equipment legend.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Three-phase motor](motor.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Field application relay — original educational illustration](../artwork/svg/56-field-application-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
