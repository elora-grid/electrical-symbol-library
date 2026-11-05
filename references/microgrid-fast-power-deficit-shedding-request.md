# Microgrid fast power-deficit shedding request

Requests the assigned load reduction after the defined rapid supply-deficit detection.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-fast-power-deficit-shedding-request) · [Structured record](../entries/microgrid-fast-power-deficit-shedding-request.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Detected power deficit
Fast shedding request

## What it represents

Requests the assigned load reduction after the defined rapid supply-deficit detection. Load management balances the available electrical supply against the loads that remain connected. Shedding, restoration, priority and proof of disconnection are separate control functions and should remain traceable to individual load groups.
In a microgrid island, the controller can disconnect lower-priority loads when a source is lost and later request restoration when the documented reserve and stability conditions permit it. For this reference, the drawing identifies “Detected power deficit” at the input and “Fast shedding request” at the output. Required performance needs validated equipment and studies.
Identify each load group, priority, measured contribution and feedback. Shedding amounts, operating times and restoration conditions require the approved power-management design and the actual connected-load data. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Detected power deficit. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Fast shedding request. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Required performance needs validated equipment and studies.
- Identify each load group, priority, measured contribution and feedback. Shedding amounts, operating times and restoration conditions require the approved power-management design and the actual connected-load data.

## Drawing checklist

- Label the source and connection reference for detected power deficit.
- Identify the destination and defined state of fast shedding request.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Required performance needs validated equipment and studies.

## Important distinction

Required performance needs validated equipment and studies. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Detected power deficit
- Output / connection: Fast shedding request
- Lookup label: MFPSR is a library lookup label, not a standard device designation.

## Public references

- [Avista Shared Energy Economy microgrid protection and control case study](https://selinc.com/api/download/135486/) — SEL. Public technical context for microgrid load shedding and restoration. Storage, protection, black start, load restoration and coordinated island operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Generic electrical load](generic-electrical-load.md)
- [Microgrid underfrequency shedding interface](microgrid-underfrequency-shedding-interface.md)

![Microgrid fast power-deficit shedding request — original educational illustration](../artwork/svg/microgrid-fast-power-deficit-shedding-request.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
