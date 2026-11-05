# AC autoreclosing

A function coordinating a documented automatic reclosing sequence.

[Canonical reference](https://eloragrid.ai/protection-functions/79-autoreclose) · [Structured record](../entries/79-autoreclose.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

An AC autoreclosing function coordinates a reclosing sequence for the associated switching device according to the chosen application and configuration. Its label identifies the function but does not specify shot count, timing, permissives or blocking conditions.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Identify the breaker and the protection functions associated with the sequence.
- Read permissive, blocking and lockout relationships in the selected scheme.

## Drawing checklist

- Reference the controlled breaker.
- Identify the associated protection and controls.
- Link the documented sequence and blocking logic.

## Important distinction

An autoreclose function and an automatic source-transfer function are different control arrangements.

## Facts

- ANSI / IEEE function number: 79
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.
- [Relion 620: functions, codes and symbols](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public examples of manufacturer-specific function names and suffixes.

## Related references

- [AC circuit breaker](52-ac-circuit-breaker.md)
- [Synchronism check](25-synchronism-check.md)
- [Lockout](86-lockout.md)

![AC autoreclosing — original educational illustration](../artwork/svg/79-autoreclose.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
