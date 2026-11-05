# Lockout

A lockout function or device with the documented reset and blocking behaviour.

[Canonical reference](https://eloragrid.ai/protection-functions/86-lockout) · [Structured record](../entries/86-lockout.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

A lockout function or device latches an operating condition and participates in the specified trip or blocking arrangement. Its reset and implementation depend on the selected scheme. It can be realised in physical equipment or through documented control logic.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Identify the initiating conditions and the affected devices.
- Read reset and blocking behaviour from the actual scheme documentation.

## Drawing checklist

- Reference initiating functions.
- Identify blocked or tripped devices.
- Document the selected reset arrangement.

## Important distinction

A lockout reference is not a mechanical isolation procedure and does not itself establish an authorised operating instruction.

## Facts

- ANSI / IEEE function number: 86
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.

## Related references

- [AC circuit breaker](52-ac-circuit-breaker.md)
- [Differential protection](87-differential.md)
- [Relay coil](relay-coil.md)

![Lockout — original educational illustration](../artwork/svg/86-lockout.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
