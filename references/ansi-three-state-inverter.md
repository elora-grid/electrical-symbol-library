# ANSI three-state inverter with active-low enable

Inverter triangle with an enable lead and bubble entering its side, driving a bus only when enabled.

[Canonical reference](https://eloragrid.ai/symbols/ansi-three-state-inverter) · [Structured record](../entries/ansi-three-state-inverter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Inverter triangle with bubble and enable lead with bubble on the triangle side.

## What it represents

The three-state inverter is a triangle with an output bubble and a control lead entering the sloping side. A bubble on the control lead means output enable is active low, which is the arrangement on many octal line drivers. When disabled, the output is high impedance.
On bus schematics these devices are usually drawn in groups of eight with a shared enable. Drafters should label the enable net once for the group and show which controller output drives it, so the reader can see when the bus is driven.
The symbol does not show bus hold, pull-up or pull-down arrangements needed to keep a disabled bus at a defined level. Those components must be drawn separately.

## How to read it

- Check the bubble on the enable lead; it sets the enable polarity.
- Look for bus-keeper or pull resistors on the driven net.

## Drawing checklist

- Draw the enable lead touching the sloping side of the triangle.
- Mark enable polarity explicitly.
- Show the shared enable source for a group of drivers.

## Important distinction

The non-inverting three-state buffer has no output bubble.

## Facts

- Enable sense: Active low when the control lead has a bubble
- Disabled output: High impedance
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [SNx4HC240 octal buffers and line drivers with 3-state outputs](https://www.ti.com/lit/ds/symlink/sn74hc240.pdf) — Texas Instruments. Manufacturer documentation for inverting octal buffers with three-state outputs.
- [Overview of IEEE Standard 91-1984: explanation of logic symbols (SDYZ001A)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) — Texas Instruments. Three-state output and EN behaviour.

## Related references

- [Three-state logic buffer](logic-three-state-buffer.md)
- [IEC three-state buffer (rectangular form)](iec-three-state-buffer.md)
- [Logic bus transceiver](logic-bus-transceiver.md)

![ANSI three-state inverter with active-low enable — original educational illustration](../artwork/svg/ansi-three-state-inverter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
