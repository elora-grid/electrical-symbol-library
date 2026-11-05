# Current unbalance / negative sequence

A current phase-balance or reverse-phase function used in documented protection applications.

[Canonical reference](https://eloragrid.ai/protection-functions/46-current-unbalance) · [Structured record](../entries/46-current-unbalance.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Device function number 46 is associated with reverse-phase or phase-balance current protection. Manufacturer implementations often use negative-sequence or current-unbalance quantities. The implementation, measurement basis and protected equipment must be identified in the protection documentation.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Identify the phase-current measurements used by the device.
- Confirm the manufacturer name and implementation rather than relying only on the number.

## Drawing checklist

- Reference phase-current inputs.
- Identify the protected machine or circuit.
- Link the selected relay function documentation.

## Important distinction

Current unbalance and voltage phase-sequence or balance functions use different measured quantities. Identify the element explicitly.

## Facts

- ANSI / IEEE function number: 46
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.
- [Relion 620: functions, codes and symbols](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public examples of manufacturer-specific function names and suffixes.

## Related references

- [Thermal protection](49-thermal-protection.md)
- [Current transformer](current-transformer.md)
- [Three-phase motor](motor.md)

![Current unbalance / negative sequence — original educational illustration](../artwork/svg/46-current-unbalance.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
