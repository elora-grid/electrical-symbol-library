# Microgrid site-controller watchdog interface

Transfers the controller's declared self-health output to independent supervision.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-site-controller-watchdog-interface) · [Structured record](../entries/microgrid-site-controller-watchdog-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Controller watchdog output
Site-controller fault indication

## What it represents

Transfers the controller's declared self-health output to independent supervision. Microgrid supervision coordinates measurements, control authority and resource communication without replacing local protection. Each resource value needs a named measurement boundary, freshness condition and intended control use.
In a microgrid control room, the operator can see source availability, active constraints and current operating mode. A communication failure should remain distinguishable from an electrical resource failure. For this reference, the drawing identifies “Controller watchdog output” at the input and “Site-controller fault indication” at the output. Watchdog coverage has defined limits.
Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Controller watchdog output. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Site-controller fault indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Watchdog coverage has defined limits.
- Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability.

## Drawing checklist

- Label the source and connection reference for controller watchdog output.
- Identify the destination and defined state of site-controller fault indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Watchdog coverage has defined limits.

## Important distinction

Watchdog coverage has defined limits. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Controller watchdog output
- Output / connection: Site-controller fault indication
- Lookup label: MSWI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid supervisory and communication interfaces. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Microgrid standby-controller ownership interface](microgrid-standby-controller-ownership-interface.md)

![Microgrid site-controller watchdog interface — original educational illustration](../artwork/svg/microgrid-site-controller-watchdog-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
