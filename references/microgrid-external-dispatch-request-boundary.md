# Microgrid external dispatch request boundary

Identifies the documented interface receiving an external site power request.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-external-dispatch-request-boundary) · [Structured record](../entries/microgrid-external-dispatch-request-boundary.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
External dispatch message
Site dispatch request

## What it represents

Identifies the documented interface receiving an external site power request. Microgrid supervision coordinates measurements, control authority and resource communication without replacing local protection. Each resource value needs a named measurement boundary, freshness condition and intended control use.
In a microgrid control room, the operator can see source availability, active constraints and current operating mode. A communication failure should remain distinguishable from an electrical resource failure. For this reference, the drawing identifies “External dispatch message” at the input and “Site dispatch request” at the output. The request is subject to site authority and limits.
Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: External dispatch message. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Site dispatch request. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The request is subject to site authority and limits.
- Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability.

## Drawing checklist

- Label the source and connection reference for external dispatch message.
- Identify the destination and defined state of site dispatch request.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The request is subject to site authority and limits.

## Important distinction

The request is subject to site authority and limits. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: External dispatch message
- Output / connection: Site dispatch request
- Lookup label: MEDRB is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid supervisory and communication interfaces. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Microgrid operating-constraint alarm summary](microgrid-operating-constraint-alarm-summary.md)

![Microgrid external dispatch request boundary — original educational illustration](../artwork/svg/microgrid-external-dispatch-request-boundary.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
