# Microgrid communication-degraded mode indication

Reports the defined restricted control state used when assigned communications are degraded.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-communication-degraded-mode-indication) · [Structured record](../entries/microgrid-communication-degraded-mode-indication.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Required communication health
Degraded-control state

## What it represents

Reports the defined restricted control state used when assigned communications are degraded. Microgrid supervision coordinates measurements, control authority and resource communication without replacing local protection. Each resource value needs a named measurement boundary, freshness condition and intended control use.
In a microgrid control room, the operator can see source availability, active constraints and current operating mode. A communication failure should remain distinguishable from an electrical resource failure. For this reference, the drawing identifies “Required communication health” at the input and “Degraded-control state” at the output. Local resource fallback must be specified.
Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Required communication health. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Degraded-control state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Local resource fallback must be specified.
- Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability.

## Drawing checklist

- Label the source and connection reference for required communication health.
- Identify the destination and defined state of degraded-control state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Local resource fallback must be specified.

## Important distinction

Local resource fallback must be specified. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Required communication health
- Output / connection: Degraded-control state
- Lookup label: MCMI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid supervisory and communication interfaces. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Microgrid resource data-model mapping boundary](microgrid-resource-data-model-mapping-boundary.md)

![Microgrid communication-degraded mode indication — original educational illustration](../artwork/svg/microgrid-communication-degraded-mode-indication.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
