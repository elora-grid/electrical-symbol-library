# ANSI open-collector inverter

Inverter triangle with output bubble and an open-circuit mark, needing an external pull-up to produce a high level.

[Canonical reference](https://eloragrid.ai/symbols/ansi-open-collector-inverter) · [Structured record](../entries/ansi-open-collector-inverter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Inverter triangle with bubble and open-circuit output marking.

## What it represents

This is an inverter whose output transistor can only pull low. On distinctive-shape schematics the triangle and bubble are retained and an open-collector or open-drain mark, often the underlined diamond, is placed inside or beside the outline. A pull-up resistor or load to a supply completes the circuit.
Open-drain inverters are used to drive indicator LEDs, relay inputs and shared interrupt or alarm lines, and to translate to a higher pull-up voltage within the device rating. The schematic should show the pull-up value and its supply rail next to the gate.
The output state with no pull-up is undefined when the transistor is off. A drawing that omits the pull-up is incomplete even though the gate symbol is correct.

## How to read it

- Find the pull-up or load; without it the high level is undefined.
- Check whether the output is shared with other open-collector outputs.

## Drawing checklist

- Mark the open-collector or open-drain output.
- Show the pull-up and its supply.
- Record the maximum output voltage and sink current from the datasheet.

## Important distinction

The non-inverting open-collector buffer has no output bubble.

## Facts

- Output stage: Open collector or open drain
- External part: Pull-up resistor or load
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [SNx4HC05 hex inverters with open-drain outputs](https://www.ti.com/lit/ds/symlink/sn74hc05.pdf) — Texas Instruments. Manufacturer documentation for inverters with open-drain outputs.
- [Overview of IEEE Standard 91-1984: explanation of logic symbols (SDYZ001A)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) — Texas Instruments. Open-collector output qualifier.

## Related references

- [Open-collector buffer](open-collector-buffer.md)
- [ANSI wired-AND connection](ansi-wired-and-connection.md)
- [Logic inverter](logic-inverter.md)

![ANSI open-collector inverter — original educational illustration](../artwork/svg/ansi-open-collector-inverter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
