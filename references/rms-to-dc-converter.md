# RMS-to-DC converter

Produces a DC output related to the RMS value of its input signal under the selected implementation.

[Canonical reference](https://eloragrid.ai/symbols/rms-to-dc-converter) · [Structured record](../entries/rms-to-dc-converter.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

Produces a DC output related to the RMS value of its input signal under the selected implementation.
On a schematic, identify the AC input scaling, averaging/filter network and output reference and trace the RMS measurement output and receiving converter. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
RMS conversion measures a specific signal quantity; an ordinary rectifier/average circuit does not universally produce the same result.
The preview is an independently drawn educational functional reference. Add the selected component’s actual power pins, terminal numbers, timing or analogue reference details when producing a construction drawing.

## How to read it

- Identify the AC input scaling, averaging/filter network and output reference.
- Trace the RMS measurement output and receiving converter.

## Drawing checklist

- Label the AC input scaling, averaging/filter network and output reference.
- Cross-reference the RMS measurement output and receiving converter.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

RMS conversion measures a specific signal quantity; an ordinary rectifier/average circuit does not universally produce the same result.

## Facts

- Common schematic mnemonic: RMS-DC — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The AC input scaling, averaging/filter network and output reference
- Artwork scope: Original educational functional/circuit reference; not a selected product pinout.

## Public references

- [AD8436 — RMS-to-DC conversion](https://www.analog.com/en/products/ad8436.html) — Analog Devices. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Active-power indicator](active-power-indicator.md)
- [PLC input / output](plc-io.md)

![RMS-to-DC converter — original educational illustration](../artwork/svg/rms-to-dc-converter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
