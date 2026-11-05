# Thermistor motor protection relay

Relay that monitors PTC thermistors embedded in motor windings and trips when their resistance rises at the rated temperature.

[Canonical reference](https://eloragrid.ai/symbols/thermistor-motor-protection-relay) · [Structured record](../entries/thermistor-motor-protection-relay.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

## What it represents

A thermistor protection relay is connected to a chain of PTC thermistors built into a motor's windings. When the windings reach the thermistors' rated response temperature, their resistance rises sharply and the relay opens its contact in the motor control circuit, protecting against overheating that a current-based overload cannot detect.
Typical causes it catches are blocked ventilation, high ambient temperature and frequent starting. The symbol does not show whether the relay detects a short-circuited sensor loop, whether it latches, or how it is reset, which affect safety where automatic restart is possible.

## How to read it

- Follow the sensor loop to the motor terminal box.
- Check reset type and short-circuit detection.

## Drawing checklist

- Show sensor loop terminals
- State reset type
- Reference motor control trip contact

## Important distinction

A thermistor relay measures winding temperature directly; a thermal overload relay models heating from current.

## Facts

- Sensor: PTC thermistors in motor windings
- Output: Trip contact in motor control circuit
- Preview: Independent educational concept; consult the applicable standard and project legend for the exact graphic

## Public references

- [EMR motor protection: public function comparison](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/motor-relays.html) — Eaton. Public motor protection function comparison including thermal protection.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC context for graphical symbols used in diagrams; no IEC graphic is reproduced.

## Related references

- [Motor overload trip NC contact](motor-overload-trip-nc-contact.md)
- [Thermal protection](49-thermal-protection.md)
- [Resistance temperature detector](resistance-temperature-detector.md)

![Thermistor motor protection relay — original educational illustration](../artwork/svg/thermistor-motor-protection-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
