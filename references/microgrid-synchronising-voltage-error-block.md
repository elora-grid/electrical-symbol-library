# Microgrid synchronising voltage-error block

Calculates the defined voltage-magnitude mismatch between the interconnection sides.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-synchronising-voltage-error-block) · [Structured record](../entries/microgrid-synchronising-voltage-error-block.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Two voltage magnitudes
Synchronising voltage error

## What it represents

Calculates the defined voltage-magnitude mismatch between the interconnection sides. Synchronising control compares two AC systems before their assigned connecting breaker closes. Voltage magnitude, frequency, phase relationship, breaker readiness and command authority are separate inputs to the closing decision.
In a microgrid reconnecting at its point of common coupling, a synchroniser can adjust the island reference while a separate permissive confirms the permitted relationship across the open breaker. For this reference, the drawing identifies “Two voltage magnitudes” at the input and “Synchronising voltage error” at the output. Measurement ratios must use a common basis.
Identify the two measurement sides and the equipment receiving any adjustment request. Closing limits, breaker timing and loss-of-measurement behavior require the approved synchronising design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Two voltage magnitudes. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Synchronising voltage error. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Measurement ratios must use a common basis.
- Identify the two measurement sides and the equipment receiving any adjustment request. Closing limits, breaker timing and loss-of-measurement behavior require the approved synchronising design.

## Drawing checklist

- Label the source and connection reference for two voltage magnitudes.
- Identify the destination and defined state of synchronising voltage error.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Measurement ratios must use a common basis.

## Important distinction

Measurement ratios must use a common basis. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Two voltage magnitudes
- Output / connection: Synchronising voltage error
- Lookup label: MSVB is a library lookup label, not a standard device designation.

## Public references

- [Microgrid Flex components and control design](https://productinfo.se.com/microgrid_guide/0100db2503_ecostruxure-microgrid-flex_design-guide_iec/English/0100DB2503-Microgrid%20Flex%20Design%20Guide-IEC-Optimize%20%28bookmap%29_DD00654397.XML.xml/%24/MicrogridFlexComponents-3A7DD96C) — Schneider Electric. Public technical context for microgrid synchronising interfaces. Microgrid power and control interfaces, synchronisation and source coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Synchronism check](25-synchronism-check.md)
- [Synchronoscope](synchronoscope.md)
- [Microgrid frequency-match adjustment output](microgrid-frequency-match-adjustment-output.md)

![Microgrid synchronising voltage-error block — original educational illustration](../artwork/svg/microgrid-synchronising-voltage-error-block.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
