# Active high-pass filter

Attenuates lower-frequency content while passing the intended higher-frequency signal band.

[Canonical reference](https://eloragrid.ai/symbols/active-high-pass-filter) · [Structured record](../entries/active-high-pass-filter.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

Attenuates lower-frequency content while passing the intended higher-frequency signal band.
On a schematic, identify the signal reference, filter order and lower-band boundary and trace the filtered output and its downstream gain/measurement path. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
High-pass behaviour differs from low-pass filtering and does not imply galvanic isolation of the signal.
The preview is an independently drawn educational functional reference. Add the selected component’s actual power pins, terminal numbers, timing or analogue reference details when producing a construction drawing.

## How to read it

- Identify the signal reference, filter order and lower-band boundary.
- Trace the filtered output and its downstream gain/measurement path.

## Drawing checklist

- Label the signal reference, filter order and lower-band boundary.
- Cross-reference the filtered output and its downstream gain/measurement path.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

High-pass behaviour differs from low-pass filtering and does not imply galvanic isolation of the signal.

## Facts

- Common schematic mnemonic: HPF — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The signal reference, filter order and lower-band boundary
- Artwork scope: Original educational functional/circuit reference; not a selected product pinout.

## Public references

- [Basic Linear Design, Chapter 8: analogue filter response families](https://www.analog.com/media/en/training-seminars/design-handbooks/Basic-Linear-Design/Chapter8.pdf) — Analog Devices. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Active low-pass filter](active-low-pass-filter.md)
- [PLC input / output](plc-io.md)

![Active high-pass filter — original educational illustration](../artwork/svg/active-high-pass-filter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
