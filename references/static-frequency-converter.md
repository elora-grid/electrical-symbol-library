# Static frequency converter

A rectifier and inverter in one unit that converts AC at one frequency to AC at another, such as 50 Hz to 60 Hz.

[Canonical reference](https://eloragrid.ai/symbols/static-frequency-converter) · [Structured record](../entries/static-frequency-converter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

A static frequency converter rectifies the incoming AC to DC and inverts it back to AC at a different frequency and often a different voltage. It is used to supply 60 Hz equipment from a 50 Hz network, to provide shore power to ships, to feed 400 Hz aircraft supplies and to link microgrids or networks running at different frequencies.
Drawings show a converter box with AC marks on both sides and the frequencies noted, or two converter boxes back to back with a DC link between them. Input and output transformers are often drawn to provide isolation and voltage matching.
The output is converter-sourced, so fault current is limited and selective protection downstream must be checked. The symbol does not show overload capability or whether the output can supply motor starting current.

## How to read it

- Read both the input and output frequency labels.
- Check output short-circuit capability for downstream protection.

## Drawing checklist

- State input and output voltage and frequency.
- Show isolation transformers.
- Reference overload and fault capability.

## Important distinction

A static frequency converter changes frequency electronically; a motor-generator set does the same with rotating machines.

## Facts

- Conversion: AC to DC to AC
- Typical use: 50/60 Hz and 400 Hz supplies
- Fault current: Converter-limited
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context for converters.
- [Bidirectional three-/single-phase AC/DC PFC and inverter application note](https://www.infineon.com/assets/row/public/documents/24/42/infineon-ac-dc-pfc-11-kw-high-efficiency-high-density-bidirectional-three-single-phase-inverter-applicationnotes-en.pdf) — Infineon Technologies. Public AC/DC and inverter stage context.

## Related references

- [Motor-generator set](motor-generator-set.md)
- [Power converter / inverter](power-converter.md)
- [DC-to-AC inverter](dc-to-ac-inverter.md)
- [Active front-end rectifier](active-front-end-rectifier.md)

![Static frequency converter — original educational illustration](../artwork/svg/static-frequency-converter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
