# Time overcurrent

An overcurrent function with a documented time characteristic.

[Canonical reference](https://eloragrid.ai/protection-functions/51-time-overcurrent) · [Structured record](../entries/51-time-overcurrent.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

A time overcurrent function detects an overcurrent condition using the configured time characteristic. Depending on the device and application, the implementation can include inverse-time or definite-time behaviour. Its number does not specify a curve, pickup or delay.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Read the full function designation, including any phase or earth-fault suffix.
- Use the protection settings and coordination documentation to interpret its operation.

## Drawing checklist

- Reference measured current inputs.
- Identify the applied time characteristic separately.
- Link the relay and trip scheme.

## Important distinction

Functions 50 and 51 describe different time behaviour. One multifunction relay can implement both without becoming two separate physical devices.

## Facts

- ANSI / IEEE function number: 51
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.
- [Relion 620: functions, codes and symbols](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public examples of manufacturer-specific function names and suffixes.

## Related references

- [Instantaneous overcurrent](50-instantaneous-overcurrent.md)
- [Current transformer](current-transformer.md)
- [Directional overcurrent](67-directional-overcurrent.md)

![Time overcurrent — original educational illustration](../artwork/svg/51-time-overcurrent.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
