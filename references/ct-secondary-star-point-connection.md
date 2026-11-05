# CT secondary star-point connection

Shows the common connection of the assigned phase CT secondary windings.

[Canonical reference](https://eloragrid.ai/symbols/ct-secondary-star-point-connection) · [Structured record](../entries/ct-secondary-star-point-connection.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Phase CT secondaries
Defined secondary star point

## What it represents

Shows the common connection of the assigned phase CT secondary windings. A current-transformer secondary arrangement carries a measuring current from a defined primary location to metering or protection inputs. Core identity, polarity and the connected circuit determine the measurement's meaning.
In a substation protection panel, separate CT cores can supply metering and protection circuits with different duties. A test boundary must preserve the secondary arrangement required by the selected CT and test device. For this reference, the drawing identifies “Phase CT secondaries” at the input and “Defined secondary star point” at the output. The star point must match the protection connection design.
Trace every secondary connection and the assigned earthing point against the actual connection diagram. These illustrations explain circuit roles and never prescribe a live CT switching or disconnection procedure. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Phase CT secondaries. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Defined secondary star point. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The star point must match the protection connection design.
- Trace every secondary connection and the assigned earthing point against the actual connection diagram. These illustrations explain circuit roles and never prescribe a live CT switching or disconnection procedure.

## Drawing checklist

- Label the source and connection reference for phase ct secondaries.
- Identify the destination and defined state of defined secondary star point.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The star point must match the protection connection design.

## Important distinction

The star point must match the protection connection design. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Phase CT secondaries
- Output / connection: Defined secondary star point
- Lookup label: CSSC is a library lookup label, not a standard device designation.

## Public references

- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public technical context for current-transformer secondary arrangements. Current and voltage measurement transformers and their secondary interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Current transformer](current-transformer.md)
- [CT test terminal](ct-test-terminal.md)
- [CT secondary single-earthing-point reference](ct-secondary-single-earthing-point-reference.md)

![CT secondary star-point connection — original educational illustration](../artwork/svg/ct-secondary-star-point-connection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
