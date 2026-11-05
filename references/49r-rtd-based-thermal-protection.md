# RTD-based thermal protection

Uses resistance-temperature-detector measurements for an equipment thermal protection function.

[Canonical reference](https://eloragrid.ai/protection-functions/49r-rtd-based-thermal-protection) · [Structured record](../entries/49r-rtd-based-thermal-protection.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

Uses resistance-temperature-detector measurements for an equipment thermal protection function.
The drafting record should connect this function to the RTD channel assignments, sensor wiring and monitored locations, then trace the thermal alarm and equipment trip outputs. Keep the complete designation and equipment tag together so that the SLD, relay logic and terminal schedule describe the same implementation.
The cited mapping is a public manufacturer example (SEL generator protection feature table). Suffixes are not universal equivalences across products, and this reference supplies neither a protection setting nor certification of the selected scheme.

## How to read it

- Identify the RTD channel assignments, sensor wiring and monitored locations.
- Trace the thermal alarm and equipment trip outputs.

## Drawing checklist

- Label the RTD channel assignments, sensor wiring and monitored locations.
- Cross-reference the thermal alarm and equipment trip outputs.
- Retain the complete suffix, selected device tag and manufacturer manual revision.

## Important distinction

RTD-based 49R uses measured temperature; a current-driven thermal model can have a separate response and wiring arrangement.

## Facts

- Function designation: 49R
- Base function: 49 — Thermal protection
- Published mapping: SEL generator protection feature table
- Suffix scope: Application or manufacturer specific; check the complete drawing legend and selected device manual.

## Public references

- [Generator protection feature and function comparison](https://selinc.com/products/comparisons/generator-protection/) — Schweitzer Engineering Laboratories. Public primary-source function or application mapping used to identify this designation; wording and drafting notes are original.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Device-number and suffix convention. This page is not a reproduction of the full licensed standard.

## Related references

- [Thermal protection](49-thermal-protection.md)
- [Current transformer](current-transformer.md)

![RTD-based thermal protection — original educational illustration](../artwork/svg/49r-rtd-based-thermal-protection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
