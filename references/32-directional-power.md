# Directional power

A function responding to power with a specified direction and operating condition.

[Canonical reference](https://eloragrid.ai/protection-functions/32-directional-power) · [Structured record](../entries/32-directional-power.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Directional power protection uses the direction and magnitude of power according to the implementation and configured purpose. Reverse-power applications are one use encountered in generating systems; the generic device number does not specify the complete application.
On a power drawing, keep this function reference connected to the selected equipment and its complete designation. A multifunction relay can implement several numbered functions. This entry explains the reference; it supplies no settings or commissioning procedure.

## How to read it

- Identify both the current and voltage measurement references.
- Read the defined forward or reverse direction from the system and relay documentation.

## Drawing checklist

- Document measurement references.
- State the applied direction convention.
- Link the protection application and associated device.

## Important distinction

Directional power and directional overcurrent measure different operating quantities. The numbers 32 and 67 are not interchangeable.

## Facts

- ANSI / IEEE function number: 32
- Equipment implementation: Consult the selected device manual
- Suffix interpretation: Application and manufacturer documentation

## Public references

- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public manufacturer table used to check the base function-number name.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative publication reference for the device-function convention.

## Related references

- [Directional overcurrent](67-directional-overcurrent.md)
- [Current transformer](current-transformer.md)
- [Generator](generator.md)

![Directional power — original educational illustration](../artwork/svg/32-directional-power.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
