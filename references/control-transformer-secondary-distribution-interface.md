# Control-transformer secondary distribution interface

Identifies how the selected transformer secondary feeds the documented control branches.

[Canonical reference](https://eloragrid.ai/symbols/control-transformer-secondary-distribution-interface) · [Structured record](../entries/control-transformer-secondary-distribution-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Transformer secondary
AC control distribution

## What it represents

Identifies how the selected transformer secondary feeds the documented control branches. Control power supplies the command, protection and indication equipment associated with a switchgear assembly. The drawing must distinguish the source, each distribution branch and the functions lost if that branch fails.
In a switchgear lineup, separate protected branches may feed trip coils, closing coils and protection electronics. Their alarm contacts help the station controller identify which operating capability is unavailable. For this reference, the drawing identifies “Transformer secondary” at the input and “AC control distribution” at the output. Secondary earthing must follow the actual design.
Follow the actual positive, negative or neutral returns and the protective device on each branch. A healthy voltage indication does not establish that every downstream path can deliver its required operating current. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Transformer secondary. Identify its source device or document and the state represented on the drawing.
- Follow the named output: AC control distribution. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Secondary earthing must follow the actual design.
- Follow the actual positive, negative or neutral returns and the protective device on each branch. A healthy voltage indication does not establish that every downstream path can deliver its required operating current.

## Drawing checklist

- Label the source and connection reference for transformer secondary.
- Identify the destination and defined state of ac control distribution.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Secondary earthing must follow the actual design.

## Important distinction

Secondary earthing must follow the actual design. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Transformer secondary
- Output / connection: AC control distribution
- Lookup label: CSDI is a library lookup label, not a standard device designation.

## Public references

- [SEL-RPM redundant power module](https://selinc.com/products/RPM/) — SEL. Public technical context for switchgear control-power supervision. Independent AC and DC sources for station auxiliary power. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Relay coil](relay-coil.md)
- [AC-to-DC power supply](ac-to-dc-power-supply.md)
- [Control-power undervoltage supervision](control-power-undervoltage-supervision.md)

![Control-transformer secondary distribution interface — original educational illustration](../artwork/svg/control-transformer-secondary-distribution-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
