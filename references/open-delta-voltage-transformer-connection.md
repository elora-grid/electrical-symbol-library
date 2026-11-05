# Open-delta voltage transformer connection

Two phase-to-phase VTs connected in V to provide all three line voltages without a neutral reference.

[Canonical reference](https://eloragrid.ai/symbols/open-delta-voltage-transformer-connection) · [Structured record](../entries/open-delta-voltage-transformer-connection.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI, Manufacturer.

## What it represents

The open-delta or V-V connection uses two double-pole VTs connected between phases, sharing one phase as a common point. It gives all three line-to-line secondary voltages at lower cost than three VTs and is common in MV metering and switchgear where neutral voltages are not needed.
Because there is no neutral reference, phase-to-neutral voltages and zero-sequence voltage cannot be measured. Earth-fault directional elements or meters needing phase-to-neutral inputs therefore cannot be fed from this connection, which the reader must check against the relay requirements.

## How to read it

- Identify the common phase shared by both VTs.
- Check that no connected device needs phase-to-neutral voltage.

## Drawing checklist

- Show both VTs and common phase
- State ratios
- Reference secondary earthing point

## Important distinction

An open-delta connection uses two phase-to-phase VTs; a broken-delta winding uses three earthed VTs for residual voltage.

## Facts

- VT count: Two double-pole VTs
- Not available: Phase-to-neutral and residual voltage
- Preview: Independent educational concept; consult the applicable standard and project legend for the exact graphic

## Public references

- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public manufacturer overview of indoor current and voltage instrument transformers.
- [Power, potential and autotransformer symbols](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-C1FE1690-DBF4-4F69-85C4-28E41F0A6392.htm) — Autodesk. Public potential-transformer symbol family used for context.

## Related references

- [Voltage transformer](voltage-transformer.md)
- [Voltage transformer set with broken-delta residual winding](voltage-transformer-with-residual-winding.md)
- [ANSI/IEEE voltage transformer symbol](ansi-voltage-transformer.md)

![Open-delta voltage transformer connection — original educational illustration](../artwork/svg/open-delta-voltage-transformer-connection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
