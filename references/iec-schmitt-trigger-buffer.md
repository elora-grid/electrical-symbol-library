# IEC Schmitt-trigger buffer (rectangular form)

Rectangular buffer carrying the hysteresis mark, meaning its input switches at two different thresholds.

[Canonical reference](https://eloragrid.ai/symbols/iec-schmitt-trigger-buffer) · [Structured record](../entries/iec-schmitt-trigger-buffer.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

Graphical convention: IEC. 1 element with the hysteresis qualifier inside the outline.

## What it represents

A Schmitt-trigger buffer is an IEC 1 element with the hysteresis qualifier drawn inside the box. The qualifier states that the input has two thresholds, one for a rising signal and one for a falling signal, so the output does not chatter when the input passes slowly through the switching region.
In control panels this element usually sits at the boundary between field wiring and logic, where a slow or noisy contact or sensor signal needs squaring up. Drawings sometimes place the hysteresis mark at the input line rather than at the centre; both indicate the same bi-threshold behaviour.
The symbol does not give threshold voltages or hysteresis width. Those values belong to the device datasheet and should be checked against the field signal levels.

## How to read it

- Locate the hysteresis mark; it may be centred or next to an input.
- Check signal levels against the device thresholds.

## Drawing checklist

- Draw the hysteresis mark clearly so it is not mistaken for a waveform note.
- Reference the device for threshold values.
- Keep the input filter components on the same sheet.

## Important distinction

A plain 1 buffer has a single threshold; only the hysteresis mark indicates Schmitt behaviour.

## Facts

- Qualifier: 1 plus hysteresis mark
- Typical location: Field input conditioning
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [Overview of IEEE Standard 91-1984: explanation of logic symbols (SDYZ001A)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) — Texas Instruments. Lists the Schmitt-trigger and bi-threshold input qualifiers.
- [SN74LVC1G17 — non-inverting Schmitt buffers](https://www.ti.com/product/SN74LVC1G17) — Texas Instruments. Manufacturer Schmitt-trigger buffer documentation.

## Related references

- [Schmitt-trigger buffer](schmitt-trigger-buffer.md)
- [IEC hysteresis (bi-threshold) qualifier](iec-hysteresis-input-qualifier.md)
- [IEC buffer element (rectangular form)](iec-buffer.md)

![IEC Schmitt-trigger buffer (rectangular form) — original educational illustration](../artwork/svg/iec-schmitt-trigger-buffer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
