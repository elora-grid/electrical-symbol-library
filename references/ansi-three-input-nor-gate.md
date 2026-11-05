# ANSI three-input NOR gate

Three-input OR outline with an output bubble; the output is high only when all three inputs are low.

[Canonical reference](https://eloragrid.ai/symbols/ansi-three-input-nor-gate) · [Structured record](../entries/ansi-three-input-nor-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. OR outline with three inputs and an output bubble.

## What it represents

The three-input NOR gate is the OR outline with three inputs and a bubble at the pointed output. The output is high only when all inputs are low. Triple three-input NOR packages provide the function and it is often used to create an all-clear signal.
When all inputs are themselves active-low alarm lines, the same function may be easier to read as an AND outline with bubbled inputs. A consistent choice across the drawing set makes reviews quicker.
The symbol does not show output drive strength or whether the output may be wired to others. Check the device type before connecting outputs together.

## How to read it

- Look for the output bubble at the point of the outline.
- Check whether a De Morgan form is used elsewhere for the same signal.

## Drawing checklist

- Show the output bubble clearly.
- Name the condition each input represents.
- Note the device section and pin numbers.

## Important distinction

An AND outline with three bubbled inputs is the De Morgan equivalent of this gate.

## Facts

- Inputs: Three
- Output high when: All inputs low
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [SNx4HC27 triple 3-input NOR gates](https://www.ti.com/lit/ds/symlink/sn74hc27.pdf) — Texas Instruments. Manufacturer documentation for triple three-input NOR gates.

## Related references

- [NOR gate](logic-nor-gate.md)
- [ANSI NOR gate drawn as negative-input AND](ansi-nor-as-negative-and-gate.md)
- [IEC NOR gate (rectangular form)](iec-nor-gate.md)

![ANSI three-input NOR gate — original educational illustration](../artwork/svg/ansi-three-input-nor-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
