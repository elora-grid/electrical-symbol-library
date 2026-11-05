# Shunt voltage reference

Establishes a reference voltage using a shunt-current path and the documented bias or feedback circuit.

[Canonical reference](https://eloragrid.ai/symbols/shunt-voltage-reference) · [Structured record](../entries/shunt-voltage-reference.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

Establishes a reference voltage using a shunt-current path and the documented bias or feedback circuit.
On a schematic, identify the shunt terminals, bias-current source and adjustment network and trace the reference node and return conductor. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
A shunt reference requires its bias arrangement; its terminals cannot be substituted directly for a three-terminal series reference.
The preview is an independently drawn educational functional reference. Add the selected component’s actual power pins, terminal numbers, timing or analogue reference details when producing a construction drawing.

## How to read it

- Identify the shunt terminals, bias-current source and adjustment network.
- Trace the reference node and return conductor.

## Drawing checklist

- Label the shunt terminals, bias-current source and adjustment network.
- Cross-reference the reference node and return conductor.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

A shunt reference requires its bias arrangement; its terminals cannot be substituted directly for a three-terminal series reference.

## Facts

- Common schematic mnemonic: VREF-H — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The shunt terminals, bias-current source and adjustment network
- Artwork scope: Original educational functional/circuit reference; not a selected product pinout.

## Public references

- [TL431 — programmable shunt references](https://www.ti.com/product/TL431) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Zener diode](zener-diode.md)
- [PLC input / output](plc-io.md)

![Shunt voltage reference — original educational illustration](../artwork/svg/shunt-voltage-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
