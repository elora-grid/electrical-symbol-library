# Microgrid resource command-acceptance feedback

Receives the controller's declared acceptance or rejection of the assigned operating target.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-resource-command-acceptance-feedback) · [Structured record](../entries/microgrid-resource-command-acceptance-feedback.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Command acknowledgement
Accepted or rejected target status

## What it represents

Receives the controller's declared acceptance or rejection of the assigned operating target. Microgrid supervision coordinates measurements, control authority and resource communication without replacing local protection. Each resource value needs a named measurement boundary, freshness condition and intended control use.
In a microgrid control room, the operator can see source availability, active constraints and current operating mode. A communication failure should remain distinguishable from an electrical resource failure. For this reference, the drawing identifies “Command acknowledgement” at the input and “Accepted or rejected target status” at the output. Acceptance differs from delivered physical response.
Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Command acknowledgement. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Accepted or rejected target status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Acceptance differs from delivered physical response.
- Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability.

## Drawing checklist

- Label the source and connection reference for command acknowledgement.
- Identify the destination and defined state of accepted or rejected target status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Acceptance differs from delivered physical response.

## Important distinction

Acceptance differs from delivered physical response. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Command acknowledgement
- Output / connection: Accepted or rejected target status
- Lookup label: MRCF is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid supervisory and communication interfaces. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Microgrid resource command-timeout monitor](microgrid-resource-command-timeout-monitor.md)

![Microgrid resource command-acceptance feedback — original educational illustration](../artwork/svg/microgrid-resource-command-acceptance-feedback.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
