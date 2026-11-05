# Ground detector protection

Identifies an earth or ground fault using the circuit arrangement specified for the device.

[Canonical reference](https://eloragrid.ai/protection-functions/64-ground-detector-protection) · [Structured record](../entries/64-ground-detector-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Identifies an earth or ground fault using the circuit arrangement specified for the device.
In a drafting package, connect this reference to the earthing system and current/voltage detection circuit. The associated drawing should trace the ground-fault alarm or tripping destination; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the earthing system and current/voltage detection circuit.
- Trace the ground-fault alarm or tripping destination.

## Drawing checklist

- Label the earthing system and current/voltage detection circuit.
- Cross-reference the ground-fault alarm or tripping destination.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

The base number 64 does not state whether detection uses current, voltage or insulation measurement.

## Facts

- ANSI / IEEE function number: 64
- Drawing context: The earthing system and current/voltage detection circuit
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [SecoGear medium-voltage switchgear application and technical guide, DET-882](https://library.e.abb.com/public/a06cf4cf38b34800b27bb337ab12f74f/DET-882%20SecoGear%205kV-15kV%20IEEE%20Metal%20Clad%20Switchgear_Application%20and%20installation%20guide.pdf) — ABB. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Protective earth](protective-earth.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Ground detector protection — original educational illustration](../artwork/svg/64-ground-detector-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
