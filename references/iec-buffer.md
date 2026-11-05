# IEC buffer element (rectangular form)

Non-inverting IEC element marked 1, passing the input state to the output unchanged.

[Canonical reference](https://eloragrid.ai/symbols/iec-buffer) · [Structured record](../entries/iec-buffer.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

Graphical convention: IEC. Single-input element marked 1 without negation.

## What it represents

A rectangular element with the qualifier 1 and no negation simply repeats its input. It is used to show isolation between logic stages, a fan-out point, or an interface where a physical buffer device exists. When the buffer has greater than normal drive capability, an amplifier triangle pointing in the signal direction is added inside the outline.
On logic diagrams for control panels the buffer often marks where a signal leaves one card or module and enters another. Tagging the buffer with the module reference helps fault finding because it identifies the boundary at which the signal can be measured.
A plain 1 element says nothing about output type or enable. Three-state, open-collector and Schmitt variants each require an additional qualifier.

## How to read it

- A buffer may exist only to show a module boundary; check the module tag.
- Look for drive, three-state or open-circuit qualifiers next to the output.

## Drawing checklist

- Mark the element with 1.
- Add the output qualifier where the output is not a normal push-pull stage.
- Identify the physical device or module when one exists.

## Important distinction

The same box with output negation is an inverter; the amplifier triangle inside marks increased drive capability.

## Facts

- Qualifier: 1
- Optional additions: Amplifier triangle, three-state, open-circuit, hysteresis
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [Overview of IEEE Standard 91-1984: explanation of logic symbols (SDYZ001A)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) — Texas Instruments. Defines 1 and the increased-output-capability triangle.
- [SN74LS07 — open-collector output buffers](https://www.ti.com/lit/ds/symlink/sn74ls07.pdf) — Texas Instruments. Manufacturer buffer documentation.

## Related references

- [Non-inverting logic buffer](logic-buffer.md)
- [IEC NOT element (rectangular form)](iec-not-gate.md)
- [IEC three-state buffer (rectangular form)](iec-three-state-buffer.md)

![IEC buffer element (rectangular form) — original educational illustration](../artwork/svg/iec-buffer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
