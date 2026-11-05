# Normally closed pushbutton

A pushbutton contact normally shown closed before actuation.

[Canonical reference](https://eloragrid.ai/symbols/pushbutton-nc) · [Structured record](../entries/pushbutton-nc.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A normally closed pushbutton has a contact closed in its specified normal state. Actuation changes that contact state according to the selected operator and contact block. Momentary, maintained, latching and positive-opening characteristics must be identified from device documentation.
A stop circuit is a common use, but the generic representation does not establish emergency-stop suitability or the required control-system behaviour. Operator labels, device specifications and the complete circuit remain necessary.

## How to read it

- Identify the contact block and its parent operator.
- Read mechanical and contact characteristics from the manufacturer information.

## Drawing checklist

- Show terminal designations.
- State the mechanical operating mode.
- Reference the complete circuit purpose and device selection.

## Important distinction

An ordinary NC pushbutton and an emergency-stop device are not interchangeable solely because both drawings show a closed contact.

## Facts

- Normal contact state: Closed
- Safety function: Requires complete device and circuit assessment
- Operating mode: Device-specific
- Public Autodesk reference names: HPB12, VPB12 (vendor identifiers, not IEC symbol IDs)

## Public references

- [Pushbutton contact and actuator variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-9E8890C7-7176-47DD-8700-E02A16C1670E.htm) — Autodesk. Public NC pushbutton and actuator variants.

## Related references

- [Normally open pushbutton](pushbutton-no.md)
- [Emergency-stop operator](emergency-stop.md)
- [Normally closed contact](normally-closed-contact.md)
- [Relay coil](relay-coil.md)

![Normally closed pushbutton — original educational illustration](../artwork/svg/pushbutton-nc.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
