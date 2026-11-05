# ANSI NOR gate drawn as negative-input AND

AND outline with bubbled inputs, the De Morgan form of a NOR that reads as all inputs low gives a high output.

[Canonical reference](https://eloragrid.ai/symbols/ansi-nor-as-negative-and-gate) · [Structured record](../entries/ansi-nor-as-negative-and-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. AND outline with input bubbles (De Morgan equivalent of NOR).

## What it represents

A NOR gate is equivalent to an AND gate with inverted inputs. Drawing the AND outline with input bubbles states the design intent directly: the output is high only when all inputs are low. It is the same device as a NOR gate with the outline chosen to match the signal sense.
This representation is common for all-clear logic where each input is an active-high fault, so all-low means healthy. It also helps when reviewing permissive chains, because the outline reads as a conjunction of conditions.
As with any De Morgan form, the part fitted is still a NOR device. The parts list, pin numbering and gate section remain those of the NOR package.

## How to read it

- Read bubbled inputs on an AND outline as a NOR device.
- Confirm the part reference matches a NOR package.

## Drawing checklist

- Use the form consistently for active-low or all-clear logic.
- Keep the NOR device reference.
- Document the De Morgan convention in the legend.

## Important distinction

An AND outline with only an output bubble is a NAND; here the bubbles are on the inputs.

## Facts

- Boolean identity: NOT(A OR B) = (NOT A) AND (NOT B)
- Reason to use: Reads as all inputs low
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [SN74HC02 — NOR gate logic](https://www.ti.com/lit/ds/symlink/sn74hc02.pdf) — Texas Instruments. Manufacturer NOR gate documentation for the implementing device.
- [Overview of IEEE Standard 91-1984: explanation of logic symbols (SDYZ001A)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) — Texas Instruments. Negation at inputs.

## Related references

- [NOR gate](logic-nor-gate.md)
- [ANSI three-input NOR gate](ansi-three-input-nor-gate.md)
- [ANSI NAND gate drawn as negative-input OR](ansi-nand-as-negative-or-gate.md)

![ANSI NOR gate drawn as negative-input AND — original educational illustration](../artwork/svg/ansi-nor-as-negative-and-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
