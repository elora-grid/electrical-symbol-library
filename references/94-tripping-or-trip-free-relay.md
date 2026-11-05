# Tripping or trip-free relay

Initiates a tripping action or provides the trip-related logic described in the scheme.

[Canonical reference](https://eloragrid.ai/protection-functions/94-tripping-or-trip-free-relay) · [Structured record](../entries/94-tripping-or-trip-free-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Initiates a tripping action or provides the trip-related logic described in the scheme.
In a drafting package, connect this reference to the protection initiation and trip-relay supply. The associated drawing should trace the breaker trip coils and auxiliary trip contacts; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the protection initiation and trip-relay supply.
- Trace the breaker trip coils and auxiliary trip contacts.

## Drawing checklist

- Label the protection initiation and trip-relay supply.
- Cross-reference the breaker trip coils and auxiliary trip contacts.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

A trip relay 94 need not have the latching reset behaviour of lockout device 86.

## Facts

- ANSI / IEEE function number: 94
- Drawing context: The protection initiation and trip-relay supply
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [SecoGear medium-voltage switchgear application and technical guide, DET-882](https://library.e.abb.com/public/a06cf4cf38b34800b27bb337ab12f74f/DET-882%20SecoGear%205kV-15kV%20IEEE%20Metal%20Clad%20Switchgear_Application%20and%20installation%20guide.pdf) — ABB. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Lockout](86-lockout.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Tripping or trip-free relay — original educational illustration](../artwork/svg/94-tripping-or-trip-free-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
