# ANSI three-input OR gate

Curved-back OR outline with three inputs; any one high input drives the output high.

[Canonical reference](https://eloragrid.ai/symbols/ansi-three-input-or-gate) · [Structured record](../entries/ansi-three-input-or-gate.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Curved-back OR outline with three inputs.

## What it represents

The three-input OR uses the shield-shaped outline with a concave back and a pointed front, with a third input added on the curved back edge. Any input at logic 1 produces a logic 1 output. Triple three-input OR packages exist for this function.
Typical uses include combining several fault or request signals into a single command. The inputs should be identified by signal name so that a test engineer can trace which source produced the output when the logic operates.
The outline does not tell the reader whether inputs are filtered or latched. Any such behaviour must appear as separate elements before or after the gate.

## How to read it

- Inputs meet the curved back, not a straight edge.
- Trace each input to its source tag.

## Drawing checklist

- Terminate input leads on the concave back.
- Label each input signal.
- Show unused-input tie-offs for multi-input parts.

## Important distinction

An exclusive-OR has an extra curved line behind the back; a plain OR has a single back curve.

## Facts

- Inputs: Three
- Example device family: Triple three-input OR packages
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [CDx4HC4075 triple 3-input OR gates](https://www.ti.com/lit/ds/symlink/cd74hc4075.pdf) — Texas Instruments. Manufacturer documentation for triple three-input OR gates.

## Related references

- [OR gate](logic-or-gate.md)
- [IEC OR gate (rectangular form)](iec-or-gate.md)
- [ANSI three-input NOR gate](ansi-three-input-nor-gate.md)

![ANSI three-input OR gate — original educational illustration](../artwork/svg/ansi-three-input-or-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
