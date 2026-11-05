# Microgrid operator setpoint authority gate

Accepts the assigned manual setpoint only from the authorized operating interface.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-operator-setpoint-authority-gate) · [Structured record](../entries/microgrid-operator-setpoint-authority-gate.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Operator request and ownership
Authorized setpoint request

## What it represents

Accepts the assigned manual setpoint only from the authorized operating interface. Microgrid supervision coordinates measurements, control authority and resource communication without replacing local protection. Each resource value needs a named measurement boundary, freshness condition and intended control use.
In a microgrid control room, the operator can see source availability, active constraints and current operating mode. A communication failure should remain distinguishable from an electrical resource failure. For this reference, the drawing identifies “Operator request and ownership” at the input and “Authorized setpoint request” at the output. The resource limits still apply.
Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Operator request and ownership. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Authorized setpoint request. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The resource limits still apply.
- Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability.

## Drawing checklist

- Label the source and connection reference for operator request and ownership.
- Identify the destination and defined state of authorized setpoint request.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The resource limits still apply.

## Important distinction

The resource limits still apply. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Operator request and ownership
- Output / connection: Authorized setpoint request
- Lookup label: MOSAG is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid supervisory and communication interfaces. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Microgrid external dispatch request boundary](microgrid-external-dispatch-request-boundary.md)

![Microgrid operator setpoint authority gate — original educational illustration](../artwork/svg/microgrid-operator-setpoint-authority-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
