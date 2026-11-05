# CT secondary lead-resistance allowance

Identifies the lead-resistance contribution considered in the assigned measurement circuit assessment.

[Canonical reference](https://eloragrid.ai/symbols/ct-secondary-lead-resistance-allowance) · [Structured record](../entries/ct-secondary-lead-resistance-allowance.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Secondary lead information
Circuit resistance contribution

## What it represents

Identifies the lead-resistance contribution considered in the assigned measurement circuit assessment. A current-transformer secondary arrangement carries a measuring current from a defined primary location to metering or protection inputs. Core identity, polarity and the connected circuit determine the measurement's meaning.
In a substation protection panel, separate CT cores can supply metering and protection circuits with different duties. A test boundary must preserve the secondary arrangement required by the selected CT and test device. For this reference, the drawing identifies “Secondary lead information” at the input and “Circuit resistance contribution” at the output. An educational diagram cannot certify CT performance.
Trace every secondary connection and the assigned earthing point against the actual connection diagram. These illustrations explain circuit roles and never prescribe a live CT switching or disconnection procedure. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Secondary lead information. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Circuit resistance contribution. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- An educational diagram cannot certify CT performance.
- Trace every secondary connection and the assigned earthing point against the actual connection diagram. These illustrations explain circuit roles and never prescribe a live CT switching or disconnection procedure.

## Drawing checklist

- Label the source and connection reference for secondary lead information.
- Identify the destination and defined state of circuit resistance contribution.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: An educational diagram cannot certify CT performance.

## Important distinction

An educational diagram cannot certify CT performance. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Secondary lead information
- Output / connection: Circuit resistance contribution
- Lookup label: CSLA is a library lookup label, not a standard device designation.

## Public references

- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public technical context for current-transformer secondary arrangements. Current and voltage measurement transformers and their secondary interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Current transformer](current-transformer.md)
- [CT test terminal](ct-test-terminal.md)
- [Summated phase-current relay input](summated-phase-current-relay-input.md)

![CT secondary lead-resistance allowance — original educational illustration](../artwork/svg/ct-secondary-lead-resistance-allowance.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
