# PLC relay output

A PLC relay output switches a documented contact path through the module's relay interface.

[Canonical reference](https://eloragrid.ai/symbols/plc-relay-output) · [Structured record](../entries/plc-relay-output.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

A PLC relay output switches a documented contact path through the module's relay interface. The load supply and contact common may be separate from the PLC electronics supply.

## How to read it

- Trace the load source through the output contact and common terminal.
- The preview is an original explanation of this function. Match the actual drawing convention to its legend and the selected equipment documentation.

## Drawing checklist

- Identify output channel
- Show load supply/common
- Reference contact/load rating

## Important distinction

A relay output is a contact interface, not a transistor output with the same supply/common behaviour.

## Facts

- Drawing role: Controller interface
- Representation scope: Functional concept; not an official standard graphic or a product footprint
- Identifier status: The short label is a functional lookup label, not an assigned IEC or IEEE symbol number. Any separately listed Autodesk code is a verified vendor block name.

## Public references

- [Modicon TM3 digital I/O hardware guide](https://www.se.com/ca/en/download/document/EIO0000003125/) — Schneider Electric. Public documentation of this equipment function or named vendor variant; the illustration is independently authored and is not the source graphic.

## Related references

- [PLC input / output](plc-io.md)
- [Terminal connection](terminal.md)

![PLC relay output — original educational illustration](../artwork/svg/plc-relay-output.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
