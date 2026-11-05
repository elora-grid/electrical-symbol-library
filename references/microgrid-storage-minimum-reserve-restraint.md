# Microgrid storage minimum-reserve restraint

Restrains the assigned dispatch action to preserve its documented stored-energy reserve.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-storage-minimum-reserve-restraint) · [Structured record](../entries/microgrid-storage-minimum-reserve-restraint.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Stored energy and reserve requirement
Energy-reserve restraint

## What it represents

Restrains the assigned dispatch action to preserve its documented stored-energy reserve. Storage coordination combines the battery's energy limits with the converter's electrical capability and the microgrid's operating demand. State of charge, allowable power and connection status describe different aspects of availability.
In a microgrid with a battery energy storage system, the controller can request discharge to support a power deficit while the battery management and conversion systems enforce their own operating limits. For this reference, the drawing identifies “Stored energy and reserve requirement” at the input and “Energy-reserve restraint” at the output. Reserved energy and power headroom differ.
Show which system declares each limit and which controller receives the target. Battery protection, converter capability, thermal management and emergency responses remain with the selected system design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Stored energy and reserve requirement. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Energy-reserve restraint. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Reserved energy and power headroom differ.
- Show which system declares each limit and which controller receives the target. Battery protection, converter capability, thermal management and emergency responses remain with the selected system design.

## Drawing checklist

- Label the source and connection reference for stored energy and reserve requirement.
- Identify the destination and defined state of energy-reserve restraint.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Reserved energy and power headroom differ.

## Important distinction

Reserved energy and power headroom differ. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Stored energy and reserve requirement
- Output / connection: Energy-reserve restraint
- Lookup label: MSMR is a library lookup label, not a standard device designation.

## Public references

- [Avista Shared Energy Economy microgrid protection and control case study](https://selinc.com/api/download/135486/) — SEL. Public technical context for microgrid storage coordination interfaces. Storage, protection, black start, load restoration and coordinated island operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Battery energy storage system](battery-energy-storage-system.md)
- [Battery power conversion system](battery-power-conversion-system.md)
- [Microgrid storage dispatch direction selector](microgrid-storage-dispatch-direction-selector.md)

![Microgrid storage minimum-reserve restraint — original educational illustration](../artwork/svg/microgrid-storage-minimum-reserve-restraint.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
