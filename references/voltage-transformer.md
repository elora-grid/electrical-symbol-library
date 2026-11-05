# Voltage transformer

A transformer providing a voltage signal for metering or protection.

[Canonical reference](https://eloragrid.ai/symbols/voltage-transformer) · [Structured record](../entries/voltage-transformer.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A voltage transformer provides a secondary voltage related to the voltage on its primary winding. VT and PT, for potential transformer, are common terms encountered in power drawings. Its representation identifies a measurement function; winding connections, fuses, earthing and secondary circuits need their own documented detail.
A single line diagram places the VT at the system connection being measured. The associated schematic shows how that voltage reaches a meter, relay or control system. A power transformer can look similar in a simplified drawing, so the label and context matter.

## How to read it

- Check the measured voltage connection and the number of windings or secondaries shown.
- Read polarity, ratio and secondary earthing from the specified device documentation.

## Drawing checklist

- Identify the measured bus or feeder.
- Record the specified ratio and accuracy information.
- Cross-reference primary and secondary protection and terminals.

## Important distinction

A VT supplies a voltage measurement; a power transformer supplies a power circuit. A shared transformer-like outline does not make their functions interchangeable.

## Facts

- Quantity represented: Voltage
- Alternative term: Potential transformer
- Device data: Model-specific winding and terminal information
- Public Autodesk reference names: HXF1PT, VXF1PT (vendor identifiers, not IEC symbol IDs)

## Public references

- [Power, potential and autotransformer symbols](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-C1FE1690-DBF4-4F69-85C4-28E41F0A6392.htm) — Autodesk. Public potential- and voltage-transformer categories.
- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Manufacturer instrument-transformer information.

## Related references

- [Current transformer](current-transformer.md)
- [Power transformer](power-transformer.md)
- [Undervoltage](27-undervoltage.md)
- [Overvoltage](59-overvoltage.md)

![Voltage transformer — original educational illustration](../artwork/svg/voltage-transformer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
