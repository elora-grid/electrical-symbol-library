# Notching or jogging device

Controls limited machine movements or, in modern motor relays, supervises the allowed starting duty.

[Canonical reference](https://eloragrid.ai/protection-functions/66-notching-or-jogging-device) · [Structured record](../entries/66-notching-or-jogging-device.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Controls limited machine movements or, in modern motor relays, supervises the allowed starting duty.
In a drafting package, connect this reference to the jog command or start counter and time window. The associated drawing should trace the next-start permission and motor control sequence; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the jog command or start counter and time window.
- Trace the next-start permission and motor control sequence.

## Drawing checklist

- Label the jog command or start counter and time window.
- Cross-reference the next-start permission and motor control sequence.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

The exact 66 application must be stated: jogging control and starts-per-time supervision are not identical behaviours.

## Facts

- ANSI / IEEE function number: 66
- Drawing context: The jog command or start counter and time window
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [SecoGear medium-voltage switchgear application and technical guide, DET-882](https://library.e.abb.com/public/a06cf4cf38b34800b27bb337ab12f74f/DET-882%20SecoGear%205kV-15kV%20IEEE%20Metal%20Clad%20Switchgear_Application%20and%20installation%20guide.pdf) — ABB. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Three-phase motor](motor.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Notching or jogging device — original educational illustration](../artwork/svg/66-notching-or-jogging-device.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
