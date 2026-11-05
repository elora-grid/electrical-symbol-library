# Microgrid storage contactor-state confirmation

Associates the declared battery connection state with the assigned storage control interface.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-storage-contactor-state-confirmation) · [Structured record](../entries/microgrid-storage-contactor-state-confirmation.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Battery contactor status
Storage connection confirmation

## What it represents

Associates the declared battery connection state with the assigned storage control interface. Storage coordination combines the battery's energy limits with the converter's electrical capability and the microgrid's operating demand. State of charge, allowable power and connection status describe different aspects of availability.
In a microgrid with a battery energy storage system, the controller can request discharge to support a power deficit while the battery management and conversion systems enforce their own operating limits. For this reference, the drawing identifies “Battery contactor status” at the input and “Storage connection confirmation” at the output. Status follows the selected battery system architecture.
Show which system declares each limit and which controller receives the target. Battery protection, converter capability, thermal management and emergency responses remain with the selected system design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Battery contactor status. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Storage connection confirmation. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Status follows the selected battery system architecture.
- Show which system declares each limit and which controller receives the target. Battery protection, converter capability, thermal management and emergency responses remain with the selected system design.

## Drawing checklist

- Label the source and connection reference for battery contactor status.
- Identify the destination and defined state of storage connection confirmation.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Status follows the selected battery system architecture.

## Important distinction

Status follows the selected battery system architecture. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Battery contactor status
- Output / connection: Storage connection confirmation
- Lookup label: MSCC is a library lookup label, not a standard device designation.

## Public references

- [Avista Shared Energy Economy microgrid protection and control case study](https://selinc.com/api/download/135486/) — SEL. Public technical context for microgrid storage coordination interfaces. Storage, protection, black start, load restoration and coordinated island operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Battery energy storage system](battery-energy-storage-system.md)
- [Battery power conversion system](battery-power-conversion-system.md)
- [Microgrid storage precharge-complete interface](microgrid-storage-precharge-complete-interface.md)

![Microgrid storage contactor-state confirmation — original educational illustration](../artwork/svg/microgrid-storage-contactor-state-confirmation.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
