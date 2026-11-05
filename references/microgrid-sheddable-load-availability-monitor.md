# Microgrid sheddable-load availability monitor

Tracks which assigned load groups are presently connected and available for controlled reduction.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-sheddable-load-availability-monitor) · [Structured record](../entries/microgrid-sheddable-load-availability-monitor.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Load connection and control states
Available shedding capacity

## What it represents

Tracks which assigned load groups are presently connected and available for controlled reduction. Load management balances the available electrical supply against the loads that remain connected. Shedding, restoration, priority and proof of disconnection are separate control functions and should remain traceable to individual load groups.
In a microgrid island, the controller can disconnect lower-priority loads when a source is lost and later request restoration when the documented reserve and stability conditions permit it. For this reference, the drawing identifies “Load connection and control states” at the input and “Available shedding capacity” at the output. Unavailable control paths reduce effective capacity.
Identify each load group, priority, measured contribution and feedback. Shedding amounts, operating times and restoration conditions require the approved power-management design and the actual connected-load data. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Load connection and control states. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Available shedding capacity. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Unavailable control paths reduce effective capacity.
- Identify each load group, priority, measured contribution and feedback. Shedding amounts, operating times and restoration conditions require the approved power-management design and the actual connected-load data.

## Drawing checklist

- Label the source and connection reference for load connection and control states.
- Identify the destination and defined state of available shedding capacity.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Unavailable control paths reduce effective capacity.

## Important distinction

Unavailable control paths reduce effective capacity. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Load connection and control states
- Output / connection: Available shedding capacity
- Lookup label: MSAM is a library lookup label, not a standard device designation.

## Public references

- [Avista Shared Energy Economy microgrid protection and control case study](https://selinc.com/api/download/135486/) — SEL. Public technical context for microgrid load shedding and restoration. Storage, protection, black start, load restoration and coordinated island operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Generic electrical load](generic-electrical-load.md)
- [Microgrid load-management override supervision](microgrid-load-management-override-supervision.md)

![Microgrid sheddable-load availability monitor — original educational illustration](../artwork/svg/microgrid-sheddable-load-availability-monitor.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
