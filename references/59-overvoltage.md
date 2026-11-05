# Overvoltage

A function responding to voltage above its configured operating criteria.

[Canonical reference](https://eloragrid.ai/protection-functions/59-overvoltage) · [Structured record](../entries/59-overvoltage.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

An overvoltage function detects a voltage condition above its configured criteria. The full designation and manufacturer information identify the measured quantity, implementation and application. A generic 59 reference does not establish trip values or time delays.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Identify the voltage measurement and full function suffix.
- Read whether the configured result is an alarm, trip or other control action.

## Drawing checklist

- Reference voltage inputs.
- Identify the full relay function.
- Link the operating logic and settings documentation.

## Important distinction

A phase overvoltage element and a residual-voltage or neutral-displacement application may use different measurements and suffixes.

## Facts

- ANSI / IEEE function number: 59
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.
- [Relion 620: functions, codes and symbols](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public examples of manufacturer-specific function names and suffixes.

## Related references

- [Undervoltage](27-undervoltage.md)
- [Voltage transformer](voltage-transformer.md)
- [Power converter / inverter](power-converter.md)

![Overvoltage — original educational illustration](../artwork/svg/59-overvoltage.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
