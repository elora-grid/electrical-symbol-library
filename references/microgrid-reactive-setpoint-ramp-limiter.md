# Microgrid reactive-setpoint ramp limiter

Constrains the change rate of the assigned reactive-power request.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-reactive-setpoint-ramp-limiter) · [Structured record](../entries/microgrid-reactive-setpoint-ramp-limiter.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Reactive-power target
Rate-limited reactive request

## What it represents

Constrains the change rate of the assigned reactive-power request. Voltage and reactive-power control coordinate the AC operating condition of the microgrid resources. A voltage target, reactive-power target and power-factor target represent different control objectives and should have explicit ownership.
In an islanded microgrid, the assigned reference source supports bus voltage while other compatible resources share reactive demand according to the selected control method. Grid-connected operation can use a different objective at the PCC. For this reference, the drawing identifies “Reactive-power target” at the input and “Rate-limited reactive request” at the output. The resource response remains equipment-dependent.
Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Reactive-power target. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Rate-limited reactive request. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The resource response remains equipment-dependent.
- Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol.

## Drawing checklist

- Label the source and connection reference for reactive-power target.
- Identify the destination and defined state of rate-limited reactive request.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The resource response remains equipment-dependent.

## Important distinction

The resource response remains equipment-dependent. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Reactive-power target
- Output / connection: Rate-limited reactive request
- Lookup label: MRRL is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid voltage and reactive-power controls. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Grid-forming inverter](grid-forming-inverter.md)
- [Static synchronous compensator](statcom.md)
- [Microgrid reactive dispatch tracking monitor](microgrid-reactive-dispatch-tracking-monitor.md)

![Microgrid reactive-setpoint ramp limiter — original educational illustration](../artwork/svg/microgrid-reactive-setpoint-ramp-limiter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
