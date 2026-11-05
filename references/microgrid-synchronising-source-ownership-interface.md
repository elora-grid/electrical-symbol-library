# Microgrid synchronising source-ownership interface

Assigns the resource controller allowed to adjust the island reference during synchronising.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-synchronising-source-ownership-interface) · [Structured record](../entries/microgrid-synchronising-source-ownership-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Resource authority state
Synchronising adjustment ownership

## What it represents

Assigns the resource controller allowed to adjust the island reference during synchronising. Synchronising control compares two AC systems before their assigned connecting breaker closes. Voltage magnitude, frequency, phase relationship, breaker readiness and command authority are separate inputs to the closing decision.
In a microgrid reconnecting at its point of common coupling, a synchroniser can adjust the island reference while a separate permissive confirms the permitted relationship across the open breaker. For this reference, the drawing identifies “Resource authority state” at the input and “Synchronising adjustment ownership” at the output. Conflicting controllers can issue incompatible demands.
Identify the two measurement sides and the equipment receiving any adjustment request. Closing limits, breaker timing and loss-of-measurement behavior require the approved synchronising design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Resource authority state. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Synchronising adjustment ownership. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Conflicting controllers can issue incompatible demands.
- Identify the two measurement sides and the equipment receiving any adjustment request. Closing limits, breaker timing and loss-of-measurement behavior require the approved synchronising design.

## Drawing checklist

- Label the source and connection reference for resource authority state.
- Identify the destination and defined state of synchronising adjustment ownership.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Conflicting controllers can issue incompatible demands.

## Important distinction

Conflicting controllers can issue incompatible demands. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Resource authority state
- Output / connection: Synchronising adjustment ownership
- Lookup label: MSSI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid Flex components and control design](https://productinfo.se.com/microgrid_guide/0100db2503_ecostruxure-microgrid-flex_design-guide_iec/English/0100DB2503-Microgrid%20Flex%20Design%20Guide-IEC-Optimize%20%28bookmap%29_DD00654397.XML.xml/%24/MicrogridFlexComponents-3A7DD96C) — Schneider Electric. Public technical context for microgrid synchronising interfaces. Microgrid power and control interfaces, synchronisation and source coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Synchronism check](25-synchronism-check.md)
- [Synchronoscope](synchronoscope.md)
- [Microgrid close-command confirmation interface](microgrid-close-command-confirmation-interface.md)

![Microgrid synchronising source-ownership interface — original educational illustration](../artwork/svg/microgrid-synchronising-source-ownership-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
