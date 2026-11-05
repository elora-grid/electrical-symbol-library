# Relay coil

The operating element associated with a relay and its separately drawn contacts.

[Canonical reference](https://eloragrid.ai/symbols/relay-coil) · [Structured record](../entries/relay-coil.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A relay coil represents an operating element that changes the state of associated contacts when the device operates. Coil and contact representations are often drawn in different locations to make the circuit easier to read. Their shared identifier and cross-references establish the relationship.
The coil representation does not determine whether its supply is AC or DC, its voltage, polarity, suppression or operating duty. Those details belong to the device specification and schematic annotations. Latching and other special operating modes need explicit identification.

## How to read it

- Find the device tag and follow references to its contacts.
- Read supply and polarity information from the specified coil, not from an unqualified rectangle.

## Drawing checklist

- Reference coil supply requirements.
- Identify suppression or polarity features if fitted.
- Cross-reference all associated contacts.

## Important distinction

A relay coil is not a contactor power pole. Similar operating-element marks can represent equipment with different switching duties.

## Facts

- Device relationship: Parent operating element
- Supply: Selected coil specification
- Variants: Latching, polarized and other device types
- Public Autodesk reference names: HCR1, VCR1 (vendor identifiers, not IEC symbol IDs)

## Public references

- [Relays and contacts: public symbol reference](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-011C62B8-9EC8-485C-B47D-B22A3F7B7574.htm) — Autodesk. Public relay-coil, latching and polarized variants.

## Related references

- [Normally open contact](normally-open-contact.md)
- [Normally closed contact](normally-closed-contact.md)
- [Contactor](contactor.md)
- [Selector switch](selector-switch.md)

![Relay coil — original educational illustration](../artwork/svg/relay-coil.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
