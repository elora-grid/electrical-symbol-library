# Undervoltage

A function responding to voltage below its configured operating criteria.

[Canonical reference](https://eloragrid.ai/protection-functions/27-undervoltage) · [Structured record](../entries/27-undervoltage.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

An undervoltage function detects a voltage condition below its configured criteria. On an SLD, the number identifies the function rather than a particular relay product or its voltage and time settings.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Identify the voltage source measured by the device.
- Use the relay documentation to determine how the element is implemented and used.

## Drawing checklist

- Reference the voltage inputs.
- Identify the associated relay or controller.
- Link the trip, alarm or permissive logic.

## Important distinction

An undervoltage element and an undervoltage release are related voltage concepts but can describe different equipment and operating arrangements.

## Facts

- ANSI / IEEE function number: 27
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.
- [Relion 620: functions, codes and symbols](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public examples of manufacturer-specific function names and suffixes.

## Related references

- [Overvoltage](59-overvoltage.md)
- [Voltage transformer](voltage-transformer.md)
- [Power converter / inverter](power-converter.md)

![Undervoltage — original educational illustration](../artwork/svg/27-undervoltage.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
