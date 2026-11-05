# Microgrid voltage-control mode selector

Selects the authorized voltage, reactive-power or power-factor operating objective.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-voltage-control-mode-selector) · [Structured record](../entries/microgrid-voltage-control-mode-selector.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Mode request and authority
Selected reactive-control mode

## What it represents

Selects the authorized voltage, reactive-power or power-factor operating objective. Voltage and reactive-power control coordinate the AC operating condition of the microgrid resources. A voltage target, reactive-power target and power-factor target represent different control objectives and should have explicit ownership.
In an islanded microgrid, the assigned reference source supports bus voltage while other compatible resources share reactive demand according to the selected control method. Grid-connected operation can use a different objective at the PCC. For this reference, the drawing identifies “Mode request and authority” at the input and “Selected reactive-control mode” at the output. Concurrent control objectives need coordination.
Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Mode request and authority. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Selected reactive-control mode. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Concurrent control objectives need coordination.
- Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol.

## Drawing checklist

- Label the source and connection reference for mode request and authority.
- Identify the destination and defined state of selected reactive-control mode.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Concurrent control objectives need coordination.

## Important distinction

Concurrent control objectives need coordination. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Mode request and authority
- Output / connection: Selected reactive-control mode
- Lookup label: MVMS is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid voltage and reactive-power controls. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Grid-forming inverter](grid-forming-inverter.md)
- [Static synchronous compensator](statcom.md)
- [Microgrid reactive-setpoint ramp limiter](microgrid-reactive-setpoint-ramp-limiter.md)

![Microgrid voltage-control mode selector — original educational illustration](../artwork/svg/microgrid-voltage-control-mode-selector.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
