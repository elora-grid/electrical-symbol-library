# Synchronism check

Checks documented synchronising conditions before a permitted connection.

[Canonical reference](https://eloragrid.ai/protection-functions/25-synchronism-check) · [Structured record](../entries/25-synchronism-check.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

A synchronism-check function supervises the conditions for connecting electrical sources or system sections. It is associated with the measured quantities and operating logic specified for the selected protection or control device.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Identify the voltage measurement inputs used by the function.
- Read the closing-permission relationship in the documented control scheme.

## Drawing checklist

- Reference measured source or bus voltages.
- Identify the supervised closing device.
- Link the control and protection documentation.

## Important distinction

Synchronism checking is a permissive function; a generic 25 label is not a complete synchronising controller or operating sequence.

## Facts

- ANSI / IEEE function number: 25
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.
- [Relion 620: functions, codes and symbols](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public examples of manufacturer-specific function names and suffixes.

## Related references

- [Voltage transformer](voltage-transformer.md)
- [Generator](generator.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Synchronism check — original educational illustration](../artwork/svg/25-synchronism-check.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
