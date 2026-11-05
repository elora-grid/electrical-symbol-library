# Grid-following inverter

An inverter that tracks an existing network voltage with a phase-locked loop and injects controlled current into it.

[Canonical reference](https://eloragrid.ai/symbols/grid-following-inverter) · [Structured record](../entries/grid-following-inverter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

A grid-following inverter measures the network voltage, locks to it with a phase-locked loop and injects a controlled current. Most rooftop and utility-scale solar inverters work this way. They need a stable voltage from the grid, a synchronous machine or a grid-forming inverter to operate, and they disconnect when that reference is lost.
Drawings use the standard inverter symbol with a GFL note or a current-source annotation. Anti-islanding protection, often shown as a protection relay or a function list, is associated with this type so that it does not energise a dead network.
In weak networks with high converter penetration, grid-following control can become unstable, so system strength studies are needed. The symbol does not show the phase-locked loop settings or the reactive power mode.

## How to read it

- Check that a forming source exists if the inverter is expected to run in an island.
- Anti-islanding settings are often listed as protection functions next to the inverter.

## Drawing checklist

- State reactive power mode and ride-through settings.
- Show anti-islanding protection.
- Reference system strength assessment.

## Important distinction

A grid-following inverter needs an external voltage reference; a grid-forming inverter provides that reference.

## Facts

- Control behaviour: Current source synchronised by PLL
- Islanding: Disconnects without external reference
- Typical use: Solar and wind plant inverters
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Photovoltaic technology and inverter functions](https://www.electrical-installation.org/enwiki/Photovoltaic_background%2C_technology) — Schneider Electric. Public photovoltaic inverter function context.
- [Solar electrical system architecture](https://www.ti.com/applications/industrial/energy-infrastructure/solar-energy/overview.html) — Texas Instruments. Public solar electrical system architecture context.

## Related references

- [Grid-forming inverter](grid-forming-inverter.md)
- [Photovoltaic inverter](photovoltaic-inverter.md)
- [PV string inverter](pv-string-inverter.md)
- [Low-voltage ride-through supervision](27t-low-voltage-ride-through-supervision.md)

![Grid-following inverter — original educational illustration](../artwork/svg/grid-following-inverter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
