# Microgrid resource data-model mapping boundary

Links the named control and measurement points to the selected resource communication model.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-resource-data-model-mapping-boundary) · [Structured record](../entries/microgrid-resource-data-model-mapping-boundary.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Resource point definitions
Mapped site-control data

## What it represents

Links the named control and measurement points to the selected resource communication model. Microgrid supervision coordinates measurements, control authority and resource communication without replacing local protection. Each resource value needs a named measurement boundary, freshness condition and intended control use.
In a microgrid control room, the operator can see source availability, active constraints and current operating mode. A communication failure should remain distinguishable from an electrical resource failure. For this reference, the drawing identifies “Resource point definitions” at the input and “Mapped site-control data” at the output. Units and sign conventions must be preserved.
Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Resource point definitions. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Mapped site-control data. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Units and sign conventions must be preserved.
- Identify signal ownership, quality flags, control priority and loss-of-data behavior. These functional references do not certify cyber security, closed-loop performance or equipment interoperability.

## Drawing checklist

- Label the source and connection reference for resource point definitions.
- Identify the destination and defined state of mapped site-control data.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Units and sign conventions must be preserved.

## Important distinction

Units and sign conventions must be preserved. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Resource point definitions
- Output / connection: Mapped site-control data
- Lookup label: MRDMB is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid supervisory and communication interfaces. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Microgrid operator setpoint authority gate](microgrid-operator-setpoint-authority-gate.md)

![Microgrid resource data-model mapping boundary — original educational illustration](../artwork/svg/microgrid-resource-data-model-mapping-boundary.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
