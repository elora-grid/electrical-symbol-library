# Microgrid voltage-control saturation alarm

Reports that the controlling resource has reached its assigned voltage-support limit.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-voltage-control-saturation-alarm) · [Structured record](../entries/microgrid-voltage-control-saturation-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Controller demand and capability
Voltage-support limit indication

## What it represents

Reports that the controlling resource has reached its assigned voltage-support limit. Voltage and reactive-power control coordinate the AC operating condition of the microgrid resources. A voltage target, reactive-power target and power-factor target represent different control objectives and should have explicit ownership.
In an islanded microgrid, the assigned reference source supports bus voltage while other compatible resources share reactive demand according to the selected control method. Grid-connected operation can use a different objective at the PCC. For this reference, the drawing identifies “Controller demand and capability” at the input and “Voltage-support limit indication” at the output. Saturation can indicate several different system conditions.
Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Controller demand and capability. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Voltage-support limit indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Saturation can indicate several different system conditions.
- Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol.

## Drawing checklist

- Label the source and connection reference for controller demand and capability.
- Identify the destination and defined state of voltage-support limit indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Saturation can indicate several different system conditions.

## Important distinction

Saturation can indicate several different system conditions. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Controller demand and capability
- Output / connection: Voltage-support limit indication
- Lookup label: MVSA is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid voltage and reactive-power controls. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Grid-forming inverter](grid-forming-inverter.md)
- [Static synchronous compensator](statcom.md)
- [Microgrid reactive-control measurement-quality gate](microgrid-reactive-control-measurement-quality-gate.md)

![Microgrid voltage-control saturation alarm — original educational illustration](../artwork/svg/microgrid-voltage-control-saturation-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
