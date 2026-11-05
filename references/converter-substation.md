# Converter substation

A converter-substation representation identifies a documented facility where an electrical conversion function forms part of the network connection.

[Canonical reference](https://eloragrid.ai/symbols/converter-substation) · [Structured record](../entries/converter-substation.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEC, Manufacturer.

## What it represents

A converter-substation representation identifies a documented facility where an electrical conversion function forms part of the network connection. Its actual conversion equipment and AC/DC boundaries require linked design drawings.

## How to read it

- Identify which network quantities or interfaces the station converts.
- The preview is an original explanation of this function. Match the actual drawing convention to its legend and the selected equipment documentation.

## Drawing checklist

- Name station boundary
- Show AC/DC interface labels
- Reference conversion SLD

## Important distinction

A converter station is a system-level facility, not a single generic converter component.

## Facts

- Drawing role: Supply or network role
- Representation scope: Functional concept; not an official standard graphic or a product footprint
- Public vendor block reference: HDV1\_S00406, VDV1\_S00406 (Autodesk identifiers; not IEC symbol numbers)
- Identifier status: The short label is a functional lookup label, not an assigned IEC or IEEE symbol number. Any separately listed Autodesk code is a verified vendor block name.

## Public references

- [AutoCAD Electrical: Power station and substation concepts](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-74EF80E8-018D-4A57-88BD-FF973F1B8185.htm) — Autodesk. Public documentation of this equipment function or named vendor variant; the illustration is independently authored and is not the source graphic.

## Related references

- [Generator](generator.md)
- [Busbar](busbar.md)

![Converter substation — original educational illustration](../artwork/svg/converter-substation.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
