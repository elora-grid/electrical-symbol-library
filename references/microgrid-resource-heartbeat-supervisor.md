# Microgrid resource heartbeat supervisor

Monitors the declared periodic health indication of the assigned resource controller.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-resource-heartbeat-supervisor) · [Structured record](../entries/microgrid-resource-heartbeat-supervisor.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Resource heartbeat and time
Controller communication-health state

## What it represents

Monitors the declared periodic health indication of the assigned resource controller. Microgrid supervision coordinates measurements, control authority and resource communication without replacing local protection. Each resource value needs a named measurement boundary, freshness condition and intended control use.
In a microgrid control room, the operator can see source availability, active constraints and current operating mode. A communication failure should remain distinguishable from an electrical resource failure. For this reference, the drawing identifies “Resource heartbeat and time” at the input and “Controller communication-health state” at the output. A heartbeat does not establish electrical availability.
Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Resource heartbeat and time. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Controller communication-health state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A heartbeat does not establish electrical availability.
- Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability.

## Drawing checklist

- Label the source and connection reference for resource heartbeat and time.
- Identify the destination and defined state of controller communication-health state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: A heartbeat does not establish electrical availability.

## Important distinction

A heartbeat does not establish electrical availability. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Resource heartbeat and time
- Output / connection: Controller communication-health state
- Lookup label: MRHS is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid supervisory and communication interfaces. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Microgrid measurement stale-data supervisor](microgrid-measurement-stale-data-supervisor.md)

![Microgrid resource heartbeat supervisor — original educational illustration](../artwork/svg/microgrid-resource-heartbeat-supervisor.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
