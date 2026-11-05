# Microgrid reactive-power sharing coordinator

Coordinates the assigned reactive contributions of compatible parallel resources.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-reactive-power-sharing-coordinator) · [Structured record](../entries/microgrid-reactive-power-sharing-coordinator.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Resource reactive measurements
Reactive sharing requests

## What it represents

Coordinates the assigned reactive contributions of compatible parallel resources. Voltage and reactive-power control coordinate the AC operating condition of the microgrid resources. A voltage target, reactive-power target and power-factor target represent different control objectives and should have explicit ownership.
In an islanded microgrid, the assigned reference source supports bus voltage while other compatible resources share reactive demand according to the selected control method. Grid-connected operation can use a different objective at the PCC. For this reference, the drawing identifies “Resource reactive measurements” at the input and “Reactive sharing requests” at the output. Capability limits differ between resources.
Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Resource reactive measurements. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Reactive sharing requests. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Capability limits differ between resources.
- Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol.

## Drawing checklist

- Label the source and connection reference for resource reactive measurements.
- Identify the destination and defined state of reactive sharing requests.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Capability limits differ between resources.

## Important distinction

Capability limits differ between resources. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Resource reactive measurements
- Output / connection: Reactive sharing requests
- Lookup label: MRSC is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid voltage and reactive-power controls. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Grid-forming inverter](grid-forming-inverter.md)
- [Static synchronous compensator](statcom.md)
- [Microgrid inverter reactive-capability limiter](microgrid-inverter-reactive-capability-limiter.md)

![Microgrid reactive-power sharing coordinator — original educational illustration](../artwork/svg/microgrid-reactive-power-sharing-coordinator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
