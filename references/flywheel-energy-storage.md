# Flywheel energy storage

A rotating mass coupled to a motor-generator and converter that stores energy kinetically for short, high-power bursts.

[Canonical reference](https://eloragrid.ai/symbols/flywheel-energy-storage) · [Structured record](../entries/flywheel-energy-storage.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

Flywheel energy storage holds energy in a rotating mass, usually in a vacuum enclosure with magnetic or low-loss bearings. A motor-generator accelerates the rotor to charge and decelerates it to discharge, and a bidirectional converter links the variable-frequency machine to a DC bus or AC network.
Single-line diagrams show a machine circle with a flywheel mass or disc symbol on the shaft and a converter block to the bus. Flywheels appear in rotary and some static UPS systems as a battery substitute, and in microgrids for frequency regulation and ride-through of short disturbances.
Stored energy is usually small, from seconds to a few minutes at rated power, so the symbol does not imply long backup time. Standby losses, minimum speed and the energy actually usable between maximum and minimum speed must be read from the data sheet.

## How to read it

- Read discharge time at rated power rather than total stored energy.
- A converter is needed because machine frequency changes with speed.

## Drawing checklist

- State power rating and ride-through time.
- Show converter and bus connection.
- Reference standby loss and containment data.

## Important distinction

A flywheel stores kinetic energy for seconds to minutes; a battery stores chemical energy for much longer durations.

## Facts

- Storage form: Kinetic, rotating mass
- Typical duration: Seconds to minutes
- Interface: Motor-generator and converter
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [DC UPS, AC UPS and capacitor buffer modules](https://www.phoenixcontact.com/en-gb/products/uninterruptible-power-supplies-ups) — Phoenix Contact. Public uninterruptible power and buffer function context.
- [Battery energy storage and power conversion](https://www.eaton.com/sg/en-us/products/energy-storage.html) — Eaton. Public energy storage system context.

## Related references

- [Rotary UPS](rotary-ups.md)
- [Supercapacitor bank](supercapacitor-bank.md)
- [Power converter / inverter](power-converter.md)
- [Battery energy storage system](battery-energy-storage-system.md)

![Flywheel energy storage — original educational illustration](../artwork/svg/flywheel-energy-storage.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
