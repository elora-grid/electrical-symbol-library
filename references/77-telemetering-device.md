# Telemetering device

Transmits a measured quantity from its local measurement point to a remote indication or monitoring system.

[Canonical reference](https://eloragrid.ai/protection-functions/77-telemetering-device) · [Structured record](../entries/77-telemetering-device.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Transmits a measured quantity from its local measurement point to a remote indication or monitoring system.
In a drafting package, connect this reference to the measured signal, scaling and transmission interface. The associated drawing should trace the remote receiver and monitoring point reference; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.
This designation is useful when reading machine and legacy control drawings. Retain the documented function on an existing drawing and consult the original equipment manual before assigning it to a new design.

## How to read it

- Identify the measured signal, scaling and transmission interface.
- Trace the remote receiver and monitoring point reference.

## Drawing checklist

- Label the measured signal, scaling and transmission interface.
- Cross-reference the remote receiver and monitoring point reference.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Telemetering transfers measurement information; device 16 describes the communications device rather than the measurement role.

## Facts

- ANSI / IEEE function number: 77
- Drawing context: The measured signal, scaling and transmission interface
- Application scope: Specialist or legacy machine-control use; interpret with the equipment legend.

## Public references

- [SecoGear medium-voltage switchgear application and technical guide, DET-882](https://library.e.abb.com/public/a06cf4cf38b34800b27bb337ab12f74f/DET-882%20SecoGear%205kV-15kV%20IEEE%20Metal%20Clad%20Switchgear_Application%20and%20installation%20guide.pdf) — ABB. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [PLC input / output](plc-io.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Telemetering device — original educational illustration](../artwork/svg/77-telemetering-device.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
