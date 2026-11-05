# Motor overload trip NC contact

An overload trip NC contact opens on the documented overload relay operation.

[Canonical reference](https://eloragrid.ai/symbols/motor-overload-trip-nc-contact) · [Structured record](../entries/motor-overload-trip-nc-contact.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: IEC, Manufacturer.

## What it represents

An overload trip NC contact opens on the documented overload relay operation. It is commonly wired in the motor-control path while the overload sensing elements belong to the power circuit.

## How to read it

- Use the overload device tag to link sensing and control-contact representations.
- The preview is an original explanation of this function. Match the actual drawing convention to its legend and the selected equipment documentation.

## Drawing checklist

- Identify overload relay
- State contact terminals
- Show reset and trip logic

## Important distinction

The auxiliary overload contact interrupts a control path; it does not itself carry the motor feeder current.

## Facts

- Drawing role: Contact state
- Representation scope: Functional concept; not an official standard graphic or a product footprint
- Public vendor block reference: HOL22, VOL22 (Autodesk identifiers; not IEC symbol numbers)
- Identifier status: The short label is a functional lookup label, not an assigned IEC or IEEE symbol number. Any separately listed Autodesk code is a verified vendor block name.

## Public references

- [AutoCAD Electrical: Motor control and overloads](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-D74101D4-8702-418C-B349-B15EEAEFAA20.htm) — Autodesk. Public documentation of this equipment function or named vendor variant; the illustration is independently authored and is not the source graphic.

## Related references

- [Normally open contact](normally-open-contact.md)
- [Normally closed contact](normally-closed-contact.md)

![Motor overload trip NC contact — original educational illustration](../artwork/svg/motor-overload-trip-nc-contact.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
