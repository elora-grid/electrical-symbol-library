# Microgrid load-disconnection confirmation

Checks the assigned feedback that a selected load group has disconnected.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-load-disconnection-confirmation) · [Structured record](../entries/microgrid-load-disconnection-confirmation.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Shedding command and load feedback
Confirmed shedding result

## What it represents

Checks the assigned feedback that a selected load group has disconnected. Load management balances the available electrical supply against the loads that remain connected. Shedding, restoration, priority and proof of disconnection are separate control functions and should remain traceable to individual load groups.
In a microgrid island, the controller can disconnect lower-priority loads when a source is lost and later request restoration when the documented reserve and stability conditions permit it. For this reference, the drawing identifies “Shedding command and load feedback” at the input and “Confirmed shedding result” at the output. Command acceptance is not physical disconnection.
Identify each load group, priority, measured contribution and feedback. Shedding amounts, operating times and restoration conditions require the approved power-management design and the actual connected-load data. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Shedding command and load feedback. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Confirmed shedding result. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Command acceptance is not physical disconnection.
- Identify each load group, priority, measured contribution and feedback. Shedding amounts, operating times and restoration conditions require the approved power-management design and the actual connected-load data.

## Drawing checklist

- Label the source and connection reference for shedding command and load feedback.
- Identify the destination and defined state of confirmed shedding result.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Command acceptance is not physical disconnection.

## Important distinction

Command acceptance is not physical disconnection. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Shedding command and load feedback
- Output / connection: Confirmed shedding result
- Lookup label: MLC is a library lookup label, not a standard device designation.

## Public references

- [Avista Shared Energy Economy microgrid protection and control case study](https://selinc.com/api/download/135486/) — SEL. Public technical context for microgrid load shedding and restoration. Storage, protection, black start, load restoration and coordinated island operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Generic electrical load](generic-electrical-load.md)
- [Microgrid failed-load-shed escalation](microgrid-failed-load-shed-escalation.md)

![Microgrid load-disconnection confirmation — original educational illustration](../artwork/svg/microgrid-load-disconnection-confirmation.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
