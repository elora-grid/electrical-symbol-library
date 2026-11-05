# Microgrid PCC reactive-power controller

Forms the assigned resource adjustment from the measured PCC reactive power and its operating target.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-pcc-reactive-power-controller) · [Structured record](../entries/microgrid-pcc-reactive-power-controller.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
PCC reactive power and target
Reactive-power adjustment

## What it represents

Forms the assigned resource adjustment from the measured PCC reactive power and its operating target. Voltage and reactive-power control coordinate the AC operating condition of the microgrid resources. A voltage target, reactive-power target and power-factor target represent different control objectives and should have explicit ownership.
In an islanded microgrid, the assigned reference source supports bus voltage while other compatible resources share reactive demand according to the selected control method. Grid-connected operation can use a different objective at the PCC. For this reference, the drawing identifies “PCC reactive power and target” at the input and “Reactive-power adjustment” at the output. Power direction conventions must remain explicit.
Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: PCC reactive power and target. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Reactive-power adjustment. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Power direction conventions must remain explicit.
- Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol.

## Drawing checklist

- Label the source and connection reference for pcc reactive power and target.
- Identify the destination and defined state of reactive-power adjustment.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Power direction conventions must remain explicit.

## Important distinction

Power direction conventions must remain explicit. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: PCC reactive power and target
- Output / connection: Reactive-power adjustment
- Lookup label: MPRC is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid voltage and reactive-power controls. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Grid-forming inverter](grid-forming-inverter.md)
- [Static synchronous compensator](statcom.md)
- [Microgrid PCC power-factor controller](microgrid-pcc-power-factor-controller.md)

![Microgrid PCC reactive-power controller — original educational illustration](../artwork/svg/microgrid-pcc-reactive-power-controller.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
