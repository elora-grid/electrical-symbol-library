# Grid-forming inverter

An inverter controlled as a voltage source that sets its own voltage and frequency, able to energise and hold up an island.

[Canonical reference](https://eloragrid.ai/symbols/grid-forming-inverter) · [Structured record](../entries/grid-forming-inverter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

A grid-forming inverter controls its output as a voltage source behind an impedance, setting voltage magnitude and frequency itself rather than measuring and following them. This lets it start a dead microgrid, share load with other sources through droop or virtual synchronous machine control, and respond instantly to load steps.
Single-line diagrams use the inverter symbol, a box with DC and AC marks, with a GFM label, a voltage-source note or a sine source mark to show the control mode. On microgrid drawings at least one grid-forming source must be available whenever the system is islanded.
Hardware alone does not decide grid-forming behaviour; many converters can switch modes in software. The symbol does not show current limits during faults, which are usually far lower than a synchronous machine, so protection based on fault current needs checking.

## How to read it

- Look for GFM or voltage-source notes; the box itself is the same as any inverter.
- Confirm that a grid-forming source is present in every islanded operating case.

## Drawing checklist

- State control mode and droop settings.
- Show island and grid-connected switching.
- Reference fault current capability.

## Important distinction

A grid-forming inverter sets voltage and frequency; a grid-following inverter injects current synchronised to a voltage that something else provides.

## Facts

- Control behaviour: Voltage source
- Islanding role: Can energise and hold an island
- Fault current: Converter-limited
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Quattro official product and documents](https://www.victronenergy.com/inverters-chargers/quattro) — Victron Energy. Public inverter-charger documentation describing island operation.
- [Reliable hybrid power and microgrid solutions](https://www.deif.com/applications/power-generation/reliable-hybrid-power-and-microgrid-solutions/) — DEIF. Public hybrid microgrid context in which a forming source sets voltage and frequency.

## Related references

- [Grid-following inverter](grid-following-inverter.md)
- [DC-to-AC inverter](dc-to-ac-inverter.md)
- [Microgrid controller](microgrid-controller.md)
- [Battery power conversion system](battery-power-conversion-system.md)

![Grid-forming inverter — original educational illustration](../artwork/svg/grid-forming-inverter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
