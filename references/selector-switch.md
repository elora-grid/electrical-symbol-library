# Selector switch

An operator switch selecting between documented control positions.

[Canonical reference](https://eloragrid.ai/symbols/selector-switch) · [Structured record](../entries/selector-switch.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A selector switch provides a choice between operating positions such as local and remote or manual and automatic. Its contacts may be shown separately from the operator symbol. The contact truth table or switching schedule defines which contacts operate in each position.
Maintained positions and spring-return positions behave differently. Labels, detents and return direction should be made explicit. A contact mark alone cannot describe the full switching sequence of a multi-position selector.

## How to read it

- Read the position labels and any contact schedule together.
- Identify maintained positions and returning positions from documented operator data.

## Drawing checklist

- Name each position.
- Reference the associated contact blocks and terminals.
- Show the return behaviour and switching schedule.

## Important distinction

A changeover contact describes connections; a selector switch also includes an operator and its position behaviour.

## Facts

- Operating positions: Defined by the selected operator
- Return behaviour: Maintained or returning
- Contact relationship: Switching schedule and terminal documentation
- Public Autodesk reference names: HSS112, VSS112 (vendor identifiers, not IEC symbol IDs)

## Public references

- [Selector-switch contact and operating variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-E1B4D1DE-C709-4E3E-AF7C-1A8989D096E9.htm) — Autodesk. Public selector-switch positions and contact variants.

## Related references

- [Changeover contact](changeover-contact.md)
- [Normally open pushbutton](pushbutton-no.md)
- [Normally open contact](normally-open-contact.md)
- [Control / marshalling cabinet](control-cabinet.md)

![Selector switch — original educational illustration](../artwork/svg/selector-switch.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
