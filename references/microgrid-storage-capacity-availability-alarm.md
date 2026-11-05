# Microgrid storage capacity-availability alarm

Reports that the declared usable storage capability does not satisfy the assigned operating requirement.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-storage-capacity-availability-alarm) · [Structured record](../entries/microgrid-storage-capacity-availability-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Required and available capability
Storage capability alarm

## What it represents

Reports that the declared usable storage capability does not satisfy the assigned operating requirement. Storage coordination combines the battery's energy limits with the converter's electrical capability and the microgrid's operating demand. State of charge, allowable power and connection status describe different aspects of availability.
In a microgrid with a battery energy storage system, the controller can request discharge to support a power deficit while the battery management and conversion systems enforce their own operating limits. For this reference, the drawing identifies “Required and available capability” at the input and “Storage capability alarm” at the output. The requirement must distinguish power from energy.
Show which system declares each limit and which controller receives the target. Battery protection, converter capability, thermal management and emergency responses remain with the selected system design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Required and available capability. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Storage capability alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The requirement must distinguish power from energy.
- Show which system declares each limit and which controller receives the target. Battery protection, converter capability, thermal management and emergency responses remain with the selected system design.

## Drawing checklist

- Label the source and connection reference for required and available capability.
- Identify the destination and defined state of storage capability alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The requirement must distinguish power from energy.

## Important distinction

The requirement must distinguish power from energy. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Required and available capability
- Output / connection: Storage capability alarm
- Lookup label: MSCA is a library lookup label, not a standard device designation.

## Public references

- [Avista Shared Energy Economy microgrid protection and control case study](https://selinc.com/api/download/135486/) — SEL. Public technical context for microgrid storage coordination interfaces. Storage, protection, black start, load restoration and coordinated island operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Battery energy storage system](battery-energy-storage-system.md)
- [Battery power conversion system](battery-power-conversion-system.md)
- [Microgrid storage communications-stale gate](microgrid-storage-communications-stale-gate.md)

![Microgrid storage capacity-availability alarm — original educational illustration](../artwork/svg/microgrid-storage-capacity-availability-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
