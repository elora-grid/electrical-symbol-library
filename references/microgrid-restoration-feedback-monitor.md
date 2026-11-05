# Microgrid restoration feedback monitor

Compares a requested load restoration with the assigned status and measured response.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-restoration-feedback-monitor) · [Structured record](../entries/microgrid-restoration-feedback-monitor.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Restore command and group feedback
Restoration completion status

## What it represents

Compares a requested load restoration with the assigned status and measured response. Load management balances the available electrical supply against the loads that remain connected. Shedding, restoration, priority and proof of disconnection are separate control functions and should remain traceable to individual load groups.
In a microgrid island, the controller can disconnect lower-priority loads when a source is lost and later request restoration when the documented reserve and stability conditions permit it. For this reference, the drawing identifies “Restore command and group feedback” at the input and “Restoration completion status” at the output. The process may have its own restart requirements.
Identify each load group, priority, measured contribution and feedback. Shedding amounts, operating times and restoration conditions require the approved power-management design and the actual connected-load data. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Restore command and group feedback. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Restoration completion status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The process may have its own restart requirements.
- Identify each load group, priority, measured contribution and feedback. Shedding amounts, operating times and restoration conditions require the approved power-management design and the actual connected-load data.

## Drawing checklist

- Label the source and connection reference for restore command and group feedback.
- Identify the destination and defined state of restoration completion status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The process may have its own restart requirements.

## Important distinction

The process may have its own restart requirements. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Restore command and group feedback
- Output / connection: Restoration completion status
- Lookup label: MRFM is a library lookup label, not a standard device designation.

## Public references

- [Avista Shared Energy Economy microgrid protection and control case study](https://selinc.com/api/download/135486/) — SEL. Public technical context for microgrid load shedding and restoration. Storage, protection, black start, load restoration and coordinated island operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Generic electrical load](generic-electrical-load.md)
- [Microgrid load-reacceleration permission](microgrid-load-reacceleration-permission.md)

![Microgrid restoration feedback monitor — original educational illustration](../artwork/svg/microgrid-restoration-feedback-monitor.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
