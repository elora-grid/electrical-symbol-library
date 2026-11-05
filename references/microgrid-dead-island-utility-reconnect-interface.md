# Microgrid dead-island utility-reconnect interface

Distinguishes the documented dead-island energization case from live-island synchronised reconnection.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-dead-island-utility-reconnect-interface) · [Structured record](../entries/microgrid-dead-island-utility-reconnect-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Utility and island voltage conditions
Assigned reconnect case

## What it represents

Distinguishes the documented dead-island energization case from live-island synchronised reconnection. Synchronising control compares two AC systems before their assigned connecting breaker closes. Voltage magnitude, frequency, phase relationship, breaker readiness and command authority are separate inputs to the closing decision.
In a microgrid reconnecting at its point of common coupling, a synchroniser can adjust the island reference while a separate permissive confirms the permitted relationship across the open breaker. For this reference, the drawing identifies “Utility and island voltage conditions” at the input and “Assigned reconnect case” at the output. Loss of sensing must not be interpreted as a dead island.
Identify the two measurement sides and the equipment receiving any adjustment request. Closing limits, breaker timing and loss-of-measurement behavior require the approved synchronising design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Utility and island voltage conditions. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Assigned reconnect case. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Loss of sensing must not be interpreted as a dead island.
- Identify the two measurement sides and the equipment receiving any adjustment request. Closing limits, breaker timing and loss-of-measurement behavior require the approved synchronising design.

## Drawing checklist

- Label the source and connection reference for utility and island voltage conditions.
- Identify the destination and defined state of assigned reconnect case.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Loss of sensing must not be interpreted as a dead island.

## Important distinction

Loss of sensing must not be interpreted as a dead island. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Utility and island voltage conditions
- Output / connection: Assigned reconnect case
- Lookup label: MDUI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid Flex components and control design](https://productinfo.se.com/microgrid_guide/0100db2503_ecostruxure-microgrid-flex_design-guide_iec/English/0100DB2503-Microgrid%20Flex%20Design%20Guide-IEC-Optimize%20%28bookmap%29_DD00654397.XML.xml/%24/MicrogridFlexComponents-3A7DD96C) — Schneider Electric. Public technical context for microgrid synchronising interfaces. Microgrid power and control interfaces, synchronisation and source coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Synchronism check](25-synchronism-check.md)
- [Synchronoscope](synchronoscope.md)
- [Microgrid dead-utility island-close restraint](microgrid-dead-utility-island-close-restraint.md)

![Microgrid dead-island utility-reconnect interface — original educational illustration](../artwork/svg/microgrid-dead-island-utility-reconnect-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
