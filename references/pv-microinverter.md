# PV microinverter

A small inverter attached to one or two PV modules, converting to AC at the module and paralleling on an AC trunk cable.

[Canonical reference](https://eloragrid.ai/symbols/pv-microinverter) · [Structured record](../entries/pv-microinverter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A microinverter converts the output of one, two or four PV modules to AC right at the array. Each unit has its own maximum power point tracker, so shading on one module does not drag down the rest, and the array wiring carries AC at network voltage instead of high-voltage DC.
Drawings show a small inverter block attached to each module symbol, with AC outputs daisy-chained along a trunk cable to an AC isolator and a dedicated circuit breaker in the switchboard. The number of units per branch circuit is limited by the trunk cable and breaker rating and should be noted.
The symbol does not state the gateway or communication method, nor how many microinverters a branch can carry. Ambient temperature on the roof also affects output, which is not shown on the drawing.

## How to read it

- Count units per AC branch against the trunk cable rating.
- There is no high-voltage DC string; the DC side ends at each module.

## Drawing checklist

- State units per branch and branch breaker rating.
- Show AC isolator and trunk cable.
- Reference monitoring gateway.

## Important distinction

A microinverter converts at module level to AC; a power optimiser stays on the DC side and still needs a string inverter.

## Facts

- Conversion point: At each module
- Array wiring: AC trunk cable
- Tracking: Per module or module pair
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Solar power optimiser architecture](https://www.ti.com/solution/solar-power-optimizer) — Texas Instruments. Public module-level power electronics context.
- [Photovoltaic technology and inverter functions](https://www.electrical-installation.org/enwiki/Photovoltaic_background%2C_technology) — Schneider Electric. Public photovoltaic inverter function context.

## Related references

- [Photovoltaic module](photovoltaic-module.md)
- [Photovoltaic power optimiser](photovoltaic-power-optimiser.md)
- [PV string inverter](pv-string-inverter.md)

![PV microinverter — original educational illustration](../artwork/svg/pv-microinverter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
