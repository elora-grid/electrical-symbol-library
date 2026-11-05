# Differential protection

A function comparing documented electrical quantities across a protection zone.

[Canonical reference](https://eloragrid.ai/protection-functions/87-differential) · [Structured record](../entries/87-differential.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Differential protection compares quantities associated with the boundaries of a protection zone according to the selected implementation. Equipment and application suffixes can distinguish transformer, busbar, line or other arrangements. The base number alone does not define the zone or measurements.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Identify the protected zone and each measurement boundary.
- Read CT associations, polarity and any device-specific compensation from the protection documentation.

## Drawing checklist

- Identify the protected equipment or zone.
- Reference measurement boundaries.
- Link the relay application and trip destinations.

## Important distinction

Transformer differential, busbar differential and other differential applications are not interchangeable merely because they share the base number 87.

## Facts

- ANSI / IEEE function number: 87
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.
- [Relion 620: functions, codes and symbols](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public examples of manufacturer-specific function names and suffixes.

## Related references

- [Current transformer](current-transformer.md)
- [Power transformer](power-transformer.md)
- [Busbar](busbar.md)

![Differential protection — original educational illustration](../artwork/svg/87-differential.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
