# Power distribution block

A terminal assembly that splits one incoming conductor into several outgoing conductors on a common bar.

[Canonical reference](https://eloragrid.ai/symbols/power-distribution-block) · [Structured record](../entries/power-distribution-block.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic, GA. Reference families: IEC, Manufacturer.

Graphical convention: IEC. Power distribution block, 3 terminal.

## What it represents

A power distribution block takes one large incoming conductor and distributes it to several smaller outgoing conductors on a shared conducting bar, saving space compared with stacking lugs on one terminal. It is used in control panels to distribute supply to several circuit breakers or loads.
The symbol shows the shared node and terminal count but not the short-circuit current rating, which varies widely between products and must suit the available fault current. Outgoing conductors connected to a distribution block usually need upstream protection sized for the smallest outgoing conductor unless tap rules allow otherwise.

## How to read it

- Check the block's short-circuit current rating against the panel rating.
- Confirm outgoing conductor protection.

## Drawing checklist

- State block current and short-circuit rating.
- Number incoming and outgoing terminals.
- Confirm conductor protection downstream.

## Important distinction

A power distribution block is one node with many terminals; a multi-conductor terminal block is a single terminal accepting several wires.

## Facts

- Graphic cue: Bar with one incoming and several outgoing terminal points
- Public publisher forms: 3 terminal blocks at 10, 15 and 20 unit spacing (vendor drafting variants)
- Preview: Original educational illustration; consult the publisher and applicable standard for the exact graphic

## Public references

- [IEC-60617 Symbol Preview: Power Distribution Blocks](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-137D9B55-BE24-426F-91C0-F5336EF3B358.htm) — Autodesk. Public IEC-oriented preview page listing power distribution block forms.
- [Terminal block functional families](https://www.phoenixcontact.com/en-gb/products/terminal-blocks) — Phoenix Contact. Manufacturer terminal block functional families.

## Related references

- [Multi-conductor terminal block](multi-conductor-terminal-block.md)
- [High-current terminal block](high-current-terminal-block.md)
- [Terminal jumper bridge](terminal-jumper-bridge.md)

![Power distribution block — original educational illustration](../artwork/svg/power-distribution-block.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
