# Emergency-stop operator

An identified emergency-stop operator and its documented contact arrangement.

[Canonical reference](https://eloragrid.ai/symbols/emergency-stop) · [Structured record](../entries/emergency-stop.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

An emergency-stop operator is identified by its intended function and the properties of the selected device. A schematic may show its contact blocks, actuator and reset or latching features. The drawing must connect those features to the operator description and the complete control-system design.
This educational preview identifies the concept without specifying a safety circuit. A mushroom actuator, NC contact or stop label alone does not establish the required safety performance. Use the applicable standards, risk assessment and manufacturer information for the actual implementation.

## How to read it

- Read the operator identification together with all associated contact blocks.
- Do not infer safety performance from the actuator shape or a single contact mark.

## Drawing checklist

- Identify the operator and documented reset mode.
- Reference contact and mechanical characteristics.
- Link the complete control-system documentation.

## Important distinction

Emergency stop is a system function. A generic mushroom pushbutton depiction does not certify an emergency-stop implementation.

## Facts

- Representation: Operator concept and associated contacts
- Mechanical properties: Manufacturer-specific
- Safety assessment: Not provided by this illustration

## Public references

- [Pushbutton contact and actuator variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-9E8890C7-7176-47DD-8700-E02A16C1670E.htm) — Autodesk. Public mushroom-head, latching and positive-break contact categories.

## Related references

- [Normally closed pushbutton](pushbutton-nc.md)
- [Normally closed contact](normally-closed-contact.md)
- [Control / marshalling cabinet](control-cabinet.md)
- [Relay coil](relay-coil.md)

![Emergency-stop operator — original educational illustration](../artwork/svg/emergency-stop.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
