# Microgrid close-command confirmation interface

Compares the issued PCC closing request with its assigned breaker feedback.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-close-command-confirmation-interface) · [Structured record](../entries/microgrid-close-command-confirmation-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
PCC close request and position
Reconnection completion status

## What it represents

Compares the issued PCC closing request with its assigned breaker feedback. Synchronising control compares two AC systems before their assigned connecting breaker closes. Voltage magnitude, frequency, phase relationship, breaker readiness and command authority are separate inputs to the closing decision.
In a microgrid reconnecting at its point of common coupling, a synchroniser can adjust the island reference while a separate permissive confirms the permitted relationship across the open breaker. For this reference, the drawing identifies “PCC close request and position” at the input and “Reconnection completion status” at the output. A sent command does not prove a closed breaker.
Identify the two measurement sides and the equipment receiving any adjustment request. Closing limits, breaker timing and loss-of-measurement behavior require the approved synchronising design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: PCC close request and position. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Reconnection completion status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A sent command does not prove a closed breaker.
- Identify the two measurement sides and the equipment receiving any adjustment request. Closing limits, breaker timing and loss-of-measurement behavior require the approved synchronising design.

## Drawing checklist

- Label the source and connection reference for pcc close request and position.
- Identify the destination and defined state of reconnection completion status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: A sent command does not prove a closed breaker.

## Important distinction

A sent command does not prove a closed breaker. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: PCC close request and position
- Output / connection: Reconnection completion status
- Lookup label: MCCI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid Flex components and control design](https://productinfo.se.com/microgrid_guide/0100db2503_ecostruxure-microgrid-flex_design-guide_iec/English/0100DB2503-Microgrid%20Flex%20Design%20Guide-IEC-Optimize%20%28bookmap%29_DD00654397.XML.xml/%24/MicrogridFlexComponents-3A7DD96C) — Schneider Electric. Public technical context for microgrid synchronising interfaces. Microgrid power and control interfaces, synchronisation and source coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Synchronism check](25-synchronism-check.md)
- [Synchronoscope](synchronoscope.md)
- [Microgrid failed-reconnect restraint](microgrid-failed-reconnect-restraint.md)

![Microgrid close-command confirmation interface — original educational illustration](../artwork/svg/microgrid-close-command-confirmation-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
