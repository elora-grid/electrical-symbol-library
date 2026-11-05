# Line switch

The device-function number used for a line-switching or disconnecting device in its documented application.

[Canonical reference](https://eloragrid.ai/protection-functions/89-line-switch) · [Structured record](../entries/89-line-switch.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Device function number 89 identifies a line switch in the power-system device-function convention. The selected equipment and drawing context establish its actual operating duties and capabilities; the number is not a substitute for a switch specification.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Identify the physical device associated with the reference.
- Read switching, isolation and position information separately.

## Drawing checklist

- Link the equipment identification.
- Reference the selected device capabilities.
- Cross-reference control and position circuits.

## Important distinction

The number 89 and number 52 identify different device functions. A drawing reference does not establish equivalent interruption capability.

## Facts

- ANSI / IEEE function number: 89
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.

## Related references

- [Disconnector](disconnector.md)
- [Load-break switch](load-break-switch.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Line switch — original educational illustration](../artwork/svg/89-line-switch.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
