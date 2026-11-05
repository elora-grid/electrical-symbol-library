# Phasor measurement unit

Device that measures voltage and current phasors with precise time stamps so angles can be compared across a network.

[Canonical reference](https://eloragrid.ai/symbols/phasor-measurement-unit) · [Structured record](../entries/phasor-measurement-unit.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

## What it represents

A phasor measurement unit samples voltages and currents and calculates magnitude and phase angle referenced to an absolute time source, normally GPS. Data from many PMUs can then be compared to see angle differences across a network, oscillations and islanding.
On a single-line diagram the PMU is drawn with its CT and VT inputs and a time input. The symbol does not show reporting rate, the communications path to a data concentrator or the measurement class, which together determine whether the data suits protection, control or monitoring.

## How to read it

- Check the time synchronisation input.
- Trace CT and VT inputs to the measuring point.

## Drawing checklist

- Show time source
- State reporting rate
- Reference data concentrator link

## Important distinction

A PMU reports time-aligned phasors; a phase-angle meter shows a local angle between two inputs.

## Facts

- Output: Time-stamped voltage and current phasors
- Time source: Usually GPS-derived
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [SEL 2022 Product and Solution Guide: published protection function tables](https://selinc.com/api/download/136012) — Schweitzer Engineering Laboratories. Public product guide covering synchrophasor-capable devices.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. IEEE standards context; the PMU block is a functional illustration only.

## Related references

- [Phase-angle meter](phase-angle-meter.md)
- [Multifunction power meter](multifunction-power-meter.md)
- [Voltage transformer](voltage-transformer.md)

![Phasor measurement unit — original educational illustration](../artwork/svg/phasor-measurement-unit.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
