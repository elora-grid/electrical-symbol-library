# CT secondary terminal identification boundary

Links the field CT circuit to the panel terminal and relay-channel identifiers.

[Canonical reference](https://eloragrid.ai/symbols/ct-secondary-terminal-identification-boundary) · [Structured record](../entries/ct-secondary-terminal-identification-boundary.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Field secondary conductors
Panel measurement identification

## What it represents

Links the field CT circuit to the panel terminal and relay-channel identifiers. A current-transformer secondary arrangement carries a measuring current from a defined primary location to metering or protection inputs. Core identity, polarity and the connected circuit determine the measurement's meaning.
In a substation protection panel, separate CT cores can supply metering and protection circuits with different duties. A test boundary must preserve the secondary arrangement required by the selected CT and test device. For this reference, the drawing identifies “Field secondary conductors” at the input and “Panel measurement identification” at the output. Labels must preserve core and phase identity.
Trace every secondary connection and the assigned earthing point against the actual connection diagram. These illustrations explain circuit roles and never prescribe a live CT switching or disconnection procedure. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Field secondary conductors. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Panel measurement identification. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Labels must preserve core and phase identity.
- Trace every secondary connection and the assigned earthing point against the actual connection diagram. These illustrations explain circuit roles and never prescribe a live CT switching or disconnection procedure.

## Drawing checklist

- Label the source and connection reference for field secondary conductors.
- Identify the destination and defined state of panel measurement identification.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Labels must preserve core and phase identity.

## Important distinction

Labels must preserve core and phase identity. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Field secondary conductors
- Output / connection: Panel measurement identification
- Lookup label: CSTIB is a library lookup label, not a standard device designation.

## Public references

- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public technical context for current-transformer secondary arrangements. Current and voltage measurement transformers and their secondary interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Current transformer](current-transformer.md)
- [CT test terminal](ct-test-terminal.md)
- [Low-power current sensor relay interface](low-power-current-sensor-relay-interface.md)

![CT secondary terminal identification boundary — original educational illustration](../artwork/svg/ct-secondary-terminal-identification-boundary.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
