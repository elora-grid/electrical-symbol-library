# Microgrid load-priority assignment block

Associates each defined controllable load group with its selected operating priority.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-load-priority-assignment-block) · [Structured record](../entries/microgrid-load-priority-assignment-block.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Load group identities
Assigned priority map

## What it represents

Associates each defined controllable load group with its selected operating priority. Load management balances the available electrical supply against the loads that remain connected. Shedding, restoration, priority and proof of disconnection are separate control functions and should remain traceable to individual load groups.
In a microgrid island, the controller can disconnect lower-priority loads when a source is lost and later request restoration when the documented reserve and stability conditions permit it. For this reference, the drawing identifies “Load group identities” at the input and “Assigned priority map” at the output. Priority changes require controlled configuration.
Identify each load group, priority, measured contribution and feedback. Shedding amounts, operating times and restoration conditions require the approved power-management design and the actual connected-load data. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Load group identities. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Assigned priority map. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Priority changes require controlled configuration.
- Identify each load group, priority, measured contribution and feedback. Shedding amounts, operating times and restoration conditions require the approved power-management design and the actual connected-load data.

## Drawing checklist

- Label the source and connection reference for load group identities.
- Identify the destination and defined state of assigned priority map.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Priority changes require controlled configuration.

## Important distinction

Priority changes require controlled configuration. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Load group identities
- Output / connection: Assigned priority map
- Lookup label: MLAB is a library lookup label, not a standard device designation.

## Public references

- [Avista Shared Energy Economy microgrid protection and control case study](https://selinc.com/api/download/135486/) — SEL. Public technical context for microgrid load shedding and restoration. Storage, protection, black start, load restoration and coordinated island operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Generic electrical load](generic-electrical-load.md)
- [Microgrid critical-load exemption gate](microgrid-critical-load-exemption-gate.md)

![Microgrid load-priority assignment block — original educational illustration](../artwork/svg/microgrid-load-priority-assignment-block.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
