# Microgrid inverter reactive-capability limiter

Restrains the assigned inverter reactive target to its declared operating capability.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-inverter-reactive-capability-limiter) · [Structured record](../entries/microgrid-inverter-reactive-capability-limiter.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Reactive request and inverter limits
Permitted reactive target

## What it represents

Restrains the assigned inverter reactive target to its declared operating capability. Voltage and reactive-power control coordinate the AC operating condition of the microgrid resources. A voltage target, reactive-power target and power-factor target represent different control objectives and should have explicit ownership.
In an islanded microgrid, the assigned reference source supports bus voltage while other compatible resources share reactive demand according to the selected control method. Grid-connected operation can use a different objective at the PCC. For this reference, the drawing identifies “Reactive request and inverter limits” at the input and “Permitted reactive target” at the output. Active-power and thermal limits can reduce capability.
Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Reactive request and inverter limits. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Permitted reactive target. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Active-power and thermal limits can reduce capability.
- Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol.

## Drawing checklist

- Label the source and connection reference for reactive request and inverter limits.
- Identify the destination and defined state of permitted reactive target.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Active-power and thermal limits can reduce capability.

## Important distinction

Active-power and thermal limits can reduce capability. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Reactive request and inverter limits
- Output / connection: Permitted reactive target
- Lookup label: MIRL is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid voltage and reactive-power controls. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Grid-forming inverter](grid-forming-inverter.md)
- [Static synchronous compensator](statcom.md)
- [Microgrid generator excitation reference interface](microgrid-generator-excitation-reference-interface.md)

![Microgrid inverter reactive-capability limiter — original educational illustration](../artwork/svg/microgrid-inverter-reactive-capability-limiter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
