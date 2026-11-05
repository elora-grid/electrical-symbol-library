# Time-delay stopping or opening relay

Introduces a documented delay in a stopping or opening operation.

[Canonical reference](https://eloragrid.ai/protection-functions/62-time-delay-stopping-or-opening-relay) · [Structured record](../entries/62-time-delay-stopping-or-opening-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Introduces a documented delay in a stopping or opening operation.
In a drafting package, connect this reference to the timer trigger, reset condition and control supply. The associated drawing should trace the delayed opening or stopping output; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the timer trigger, reset condition and control supply.
- Trace the delayed opening or stopping output.

## Drawing checklist

- Label the timer trigger, reset condition and control supply.
- Cross-reference the delayed opening or stopping output.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Device 62 concerns delayed stopping or opening; device 2 concerns delayed starting or closing.

## Facts

- ANSI / IEEE function number: 62
- Drawing context: The timer trigger, reset condition and control supply
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [SecoGear medium-voltage switchgear application and technical guide, DET-882](https://library.e.abb.com/public/a06cf4cf38b34800b27bb337ab12f74f/DET-882%20SecoGear%205kV-15kV%20IEEE%20Metal%20Clad%20Switchgear_Application%20and%20installation%20guide.pdf) — ABB. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Relay coil](relay-coil.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Time-delay stopping or opening relay — original educational illustration](../artwork/svg/62-time-delay-stopping-or-opening-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
