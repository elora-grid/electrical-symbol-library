# PLC digital input

A PLC digital input reads a documented discrete electrical state from field wiring.

[Canonical reference](https://eloragrid.ai/symbols/plc-digital-input) · [Structured record](../entries/plc-digital-input.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

A PLC digital input reads a documented discrete electrical state from field wiring. The schematic identifies input channel, signal common and field supply as required by the chosen module.

## How to read it

- Check whether the input expects sourcing or sinking field wiring.
- The preview is an original explanation of this function. Match the actual drawing convention to its legend and the selected equipment documentation.

## Drawing checklist

- Identify channel address
- Show input common/supply
- Reference field signal polarity

## Important distinction

A digital input reads a state; it does not provide the power output used to drive an actuator.

## Facts

- Drawing role: Controller interface
- Representation scope: Functional concept; not an official standard graphic or a product footprint
- Identifier status: The short label is a functional lookup label, not an assigned IEC or IEEE symbol number. Any separately listed Autodesk code is a verified vendor block name.

## Public references

- [Modicon TM3 digital I/O hardware guide](https://www.se.com/ca/en/download/document/EIO0000003125/) — Schneider Electric. Public documentation of this equipment function or named vendor variant; the illustration is independently authored and is not the source graphic.

## Related references

- [PLC input / output](plc-io.md)
- [Terminal connection](terminal.md)

![PLC digital input — original educational illustration](../artwork/svg/plc-digital-input.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
