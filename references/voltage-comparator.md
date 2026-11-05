# Voltage comparator

Compares two analogue input voltages and produces the documented output-state indication.

[Canonical reference](https://eloragrid.ai/symbols/voltage-comparator) · [Structured record](../entries/voltage-comparator.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

Compares two analogue input voltages and produces the documented output-state indication.
On a schematic, identify the plus/minus voltage inputs, hysteresis and output driver type and trace the logic or switching output and any required pull-up. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
A comparator output conveys a comparison result; an op amp operated without feedback is not universally an appropriate substitute.
Terminal letters describe electrical roles, not package pin numbers. Check the selected public datasheet for the actual pin assignment, polarity and any internally connected terminals before completing the drawing.

## How to read it

- Identify the plus/minus voltage inputs, hysteresis and output driver type.
- Trace the logic or switching output and any required pull-up.

## Drawing checklist

- Label the plus/minus voltage inputs, hysteresis and output driver type.
- Cross-reference the logic or switching output and any required pull-up.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

A comparator output conveys a comparison result; an op amp operated without feedback is not universally an appropriate substitute.

## Facts

- Common schematic mnemonic: COMP — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The plus/minus voltage inputs, hysteresis and output driver type
- Artwork scope: Original educational component glyph; not a certified standard graphic or package pinout.

## Public references

- [TLV3201 — voltage comparison](https://www.ti.com/product/TLV3201) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Operational amplifier](operational-amplifier.md)
- [PLC input / output](plc-io.md)

![Voltage comparator — original educational illustration](../artwork/svg/voltage-comparator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
