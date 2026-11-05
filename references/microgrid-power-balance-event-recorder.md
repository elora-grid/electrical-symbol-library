# Microgrid power-balance event recorder

Records the defined demand, generation and storage quantities around an operating event.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-power-balance-event-recorder) · [Structured record](../entries/microgrid-power-balance-event-recorder.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Power quantities and event trigger
Power-balance event record

## What it represents

Records the defined demand, generation and storage quantities around an operating event. Microgrid supervision coordinates measurements, control authority and resource communication without replacing local protection. Each resource value needs a named measurement boundary, freshness condition and intended control use.
In a microgrid control room, the operator can see source availability, active constraints and current operating mode. A communication failure should remain distinguishable from an electrical resource failure. For this reference, the drawing identifies “Power quantities and event trigger” at the input and “Power-balance event record” at the output. Aligned timestamps and measurement boundaries matter.
Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Power quantities and event trigger. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Power-balance event record. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Aligned timestamps and measurement boundaries matter.
- Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability.

## Drawing checklist

- Label the source and connection reference for power quantities and event trigger.
- Identify the destination and defined state of power-balance event record.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Aligned timestamps and measurement boundaries matter.

## Important distinction

Aligned timestamps and measurement boundaries matter. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Power quantities and event trigger
- Output / connection: Power-balance event record
- Lookup label: MPER is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid supervisory and communication interfaces. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Microgrid disturbance-recorder trigger interface](microgrid-disturbance-recorder-trigger-interface.md)

![Microgrid power-balance event recorder — original educational illustration](../artwork/svg/microgrid-power-balance-event-recorder.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
