# Metering-core CT secondary circuit

Identifies the separate CT core supplying the assigned metering circuit.

[Canonical reference](https://eloragrid.ai/symbols/metering-core-ct-secondary-circuit) · [Structured record](../entries/metering-core-ct-secondary-circuit.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Metering CT core
Meter current circuit

## What it represents

Identifies the separate CT core supplying the assigned metering circuit. A current-transformer secondary arrangement carries a measuring current from a defined primary location to metering or protection inputs. Core identity, polarity and the connected circuit determine the measurement's meaning.
In a substation protection panel, separate CT cores can supply metering and protection circuits with different duties. A test boundary must preserve the secondary arrangement required by the selected CT and test device. For this reference, the drawing identifies “Metering CT core” at the input and “Meter current circuit” at the output. Metering and protection cores are not automatically interchangeable.
Trace every secondary connection and the assigned earthing point against the actual connection diagram. These illustrations explain circuit roles and never prescribe a live CT switching or disconnection procedure. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Metering CT core. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Meter current circuit. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Metering and protection cores are not automatically interchangeable.
- Trace every secondary connection and the assigned earthing point against the actual connection diagram. These illustrations explain circuit roles and never prescribe a live CT switching or disconnection procedure.

## Drawing checklist

- Label the source and connection reference for metering ct core.
- Identify the destination and defined state of meter current circuit.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Metering and protection cores are not automatically interchangeable.

## Important distinction

Metering and protection cores are not automatically interchangeable. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Metering CT core
- Output / connection: Meter current circuit
- Lookup label: MCSC is a library lookup label, not a standard device designation.

## Public references

- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public technical context for current-transformer secondary arrangements. Current and voltage measurement transformers and their secondary interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Current transformer](current-transformer.md)
- [CT test terminal](ct-test-terminal.md)
- [Dedicated bus-protection CT core interface](dedicated-bus-protection-ct-core-interface.md)

![Metering-core CT secondary circuit — original educational illustration](../artwork/svg/metering-core-ct-secondary-circuit.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
