# Microgrid standby-controller ownership interface

Identifies the documented transfer of supervisory ownership between controller instances.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-standby-controller-ownership-interface) · [Structured record](../entries/microgrid-standby-controller-ownership-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Controller availability and authority
Selected supervisory controller

## What it represents

Identifies the documented transfer of supervisory ownership between controller instances. Microgrid supervision coordinates measurements, control authority and resource communication without replacing local protection. Each resource value needs a named measurement boundary, freshness condition and intended control use.
In a microgrid control room, the operator can see source availability, active constraints and current operating mode. A communication failure should remain distinguishable from an electrical resource failure. For this reference, the drawing identifies “Controller availability and authority” at the input and “Selected supervisory controller” at the output. Redundancy depends on the complete architecture.
Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Controller availability and authority. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Selected supervisory controller. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Redundancy depends on the complete architecture.
- Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability.

## Drawing checklist

- Label the source and connection reference for controller availability and authority.
- Identify the destination and defined state of selected supervisory controller.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Redundancy depends on the complete architecture.

## Important distinction

Redundancy depends on the complete architecture. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Controller availability and authority
- Output / connection: Selected supervisory controller
- Lookup label: MSOI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid supervisory and communication interfaces. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Microgrid communication-degraded mode indication](microgrid-communication-degraded-mode-indication.md)

![Microgrid standby-controller ownership interface — original educational illustration](../artwork/svg/microgrid-standby-controller-ownership-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
