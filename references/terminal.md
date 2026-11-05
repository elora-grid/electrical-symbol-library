# Terminal connection

An identified electrical connection point linking schematic and wiring information.

[Canonical reference](https://eloragrid.ai/symbols/terminal) · [Structured record](../entries/terminal.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A terminal representation identifies a connection point for conductors. The terminal number and strip or assembly identifier link the schematic to physical wiring documentation. A wire number and terminal number identify different things and should not be substituted for one another.
Terminal assemblies can include links, disconnect facilities, fuses or test access. Those properties require additional identification. A generic round terminal representation does not establish the construction or rating of a selected terminal block.

## How to read it

- Read the strip identifier and terminal identifier together.
- Check whether the representation denotes a simple connection or an additional device function.

## Drawing checklist

- Match the terminal schedule.
- Keep wire and terminal numbers distinct.
- Reference links, test facilities and device data where applicable.

## Important distinction

An electrical junction and a physical terminal are different concepts. A connection dot alone does not necessarily identify a terminal block.

## Facts

- Identification: Strip or assembly plus terminal number
- Wire number: Separate conductor identification
- Physical construction: Manufacturer-specific
- Public Autodesk reference names: HT0002, VT0002 (vendor identifiers, not IEC symbol IDs)

## Public references

- [Terminal symbol and numbering variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-AC31431B-1EB8-492C-8201-B09DE3A4D8A3.htm) — Autodesk. Public terminal-number and wire-number variants.
- [Disconnect and knife-disconnect terminal blocks](https://www.phoenixcontact.com/en-au/products/terminal-blocks/disconnect-and-knife-disconnect-terminal-blocks) — Phoenix Contact. Manufacturer example of terminals with added disconnect functions.

## Related references

- [CT test terminal](ct-test-terminal.md)
- [Terminal strip assembly](terminal-strip.md)
- [Normally open contact](normally-open-contact.md)
- [Protective earth](protective-earth.md)

![Terminal connection — original educational illustration](../artwork/svg/terminal.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
