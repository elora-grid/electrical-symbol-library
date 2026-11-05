# Parallel-in serial-out register

Loads a parallel word and presents its bits through a serial shift output.

[Canonical reference](https://eloragrid.ai/symbols/parallel-in-serial-out-register) · [Structured record](../entries/parallel-in-serial-out-register.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

Loads a parallel word and presents its bits through a serial shift output.
On a schematic, identify the parallel inputs, load control and shift clock and trace the serial data output and bit-order convention. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
PISO serialises a parallel state; it is not the reverse pin connection of an arbitrary SIPO part.
The preview is an independently drawn educational functional reference. Add the selected component’s actual power pins, terminal numbers, timing or analogue reference details when producing a construction drawing.

## How to read it

- Identify the parallel inputs, load control and shift clock.
- Trace the serial data output and bit-order convention.

## Drawing checklist

- Label the parallel inputs, load control and shift clock.
- Cross-reference the serial data output and bit-order convention.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

PISO serialises a parallel state; it is not the reverse pin connection of an arbitrary SIPO part.

## Facts

- Common schematic mnemonic: PISO — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The parallel inputs, load control and shift clock
- Artwork scope: Original educational functional/circuit reference; not a selected product pinout.

## Public references

- [SN74HC165 — parallel-load serial shift storage](https://www.ti.com/lit/ds/symlink/sn74hc165.pdf) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Serial-in parallel-out register](serial-in-parallel-out-register.md)
- [PLC input / output](plc-io.md)

![Parallel-in serial-out register — original educational illustration](../artwork/svg/parallel-in-serial-out-register.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
