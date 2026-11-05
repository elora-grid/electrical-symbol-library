# Directional overcurrent

An overcurrent function with a documented direction criterion.

[Canonical reference](https://eloragrid.ai/protection-functions/67-directional-overcurrent) · [Structured record](../entries/67-directional-overcurrent.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Directional overcurrent combines an overcurrent operating condition with a direction criterion defined by the device and application. Its full name and suffix can distinguish phase and earth-fault implementations, measurement inputs and operating stages.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Identify the current input and the documented direction reference.
- Follow the forward/reverse convention used in the protection scheme.

## Drawing checklist

- Reference all required measurement inputs.
- State the direction convention.
- Identify the relay element and associated trip logic.

## Important distinction

A 67 reference is not the same as directional power 32. Their quantities and operating criteria differ.

## Facts

- ANSI / IEEE function number: 67
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.
- [Relion 620: functions, codes and symbols](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public examples of manufacturer-specific function names and suffixes.

## Related references

- [Directional power](32-directional-power.md)
- [Time overcurrent](51-time-overcurrent.md)
- [Current transformer](current-transformer.md)

![Directional overcurrent — original educational illustration](../artwork/svg/67-directional-overcurrent.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
