# PLC analog output

A PLC analog output provides a documented variable voltage or current signal to another device.

[Canonical reference](https://eloragrid.ai/symbols/plc-analog-output) · [Structured record](../entries/plc-analog-output.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

A PLC analog output provides a documented variable voltage or current signal to another device. The receiving input and output common must match the configured signal range.

## How to read it

- Check active/passive loop roles for current outputs.
- The preview is an original explanation of this function. Match the actual drawing convention to its legend and the selected equipment documentation.

## Drawing checklist

- State output range
- Identify output/common terminals
- Reference receiving-device input

## Important distinction

An analog output commands a continuous signal; it is different from a switched relay contact.

## Facts

- Drawing role: Controller interface
- Representation scope: Functional concept; not an official standard graphic or a product footprint
- Identifier status: The short label is a functional lookup label, not an assigned IEC or IEEE symbol number. Any separately listed Autodesk code is a verified vendor block name.

## Public references

- [Modicon TM3 analog I/O hardware guide](https://www.se.com/us/en/download/document/EIO0000003131/) — Schneider Electric. Public documentation of this equipment function or named vendor variant; the illustration is independently authored and is not the source graphic.

## Related references

- [PLC input / output](plc-io.md)
- [Terminal connection](terminal.md)

![PLC analog output — original educational illustration](../artwork/svg/plc-analog-output.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
