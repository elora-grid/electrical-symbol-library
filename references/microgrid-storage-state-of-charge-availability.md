# Microgrid storage state-of-charge availability

Qualifies the reported battery state of charge with its assigned health and freshness conditions.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-storage-state-of-charge-availability) · [Structured record](../entries/microgrid-storage-state-of-charge-availability.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
State of charge and quality
Usable charge-state information

## What it represents

Qualifies the reported battery state of charge with its assigned health and freshness conditions. Storage coordination combines the battery's energy limits with the converter's electrical capability and the microgrid's operating demand. State of charge, allowable power and connection status describe different aspects of availability.
In a microgrid with a battery energy storage system, the controller can request discharge to support a power deficit while the battery management and conversion systems enforce their own operating limits. For this reference, the drawing identifies “State of charge and quality” at the input and “Usable charge-state information” at the output. State of charge is an estimate.
Show which system declares each limit and which controller receives the target. Battery protection, converter capability, thermal management and emergency responses remain with the selected system design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: State of charge and quality. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Usable charge-state information. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- State of charge is an estimate.
- Show which system declares each limit and which controller receives the target. Battery protection, converter capability, thermal management and emergency responses remain with the selected system design.

## Drawing checklist

- Label the source and connection reference for state of charge and quality.
- Identify the destination and defined state of usable charge-state information.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: State of charge is an estimate.

## Important distinction

State of charge is an estimate. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: State of charge and quality
- Output / connection: Usable charge-state information
- Lookup label: MSSA is a library lookup label, not a standard device designation.

## Public references

- [Avista Shared Energy Economy microgrid protection and control case study](https://selinc.com/api/download/135486/) — SEL. Public technical context for microgrid storage coordination interfaces. Storage, protection, black start, load restoration and coordinated island operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Battery energy storage system](battery-energy-storage-system.md)
- [Battery power conversion system](battery-power-conversion-system.md)
- [Microgrid storage minimum-reserve restraint](microgrid-storage-minimum-reserve-restraint.md)

![Microgrid storage state-of-charge availability — original educational illustration](../artwork/svg/microgrid-storage-state-of-charge-availability.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
