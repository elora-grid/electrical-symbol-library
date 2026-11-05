# Thermal protection

A thermal protection function for a documented machine or transformer application.

[Canonical reference](https://eloragrid.ai/protection-functions/49-thermal-protection) · [Structured record](../entries/49-thermal-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

A thermal protection function responds to a thermal condition or model appropriate to the selected machine or transformer application. Its inputs and implementation vary between devices, so the number alone does not establish a sensor arrangement or a thermal model.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Identify whether the device uses measured temperature, electrical inputs or another documented implementation.
- Link the function to the protected equipment and manufacturer documentation.

## Drawing checklist

- Identify the protected equipment.
- Reference required measurements or sensors.
- Link the thermal function documentation.

## Important distinction

A thermal relay, temperature sensor and instantaneous overcurrent element are different devices or functions.

## Facts

- ANSI / IEEE function number: 49
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.
- [Relion 620: functions, codes and symbols](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public examples of manufacturer-specific function names and suffixes.

## Related references

- [Three-phase motor](motor.md)
- [Power transformer](power-transformer.md)
- [Instantaneous overcurrent](50-instantaneous-overcurrent.md)

![Thermal protection — original educational illustration](../artwork/svg/49-thermal-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
