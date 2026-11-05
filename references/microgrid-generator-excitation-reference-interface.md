# Microgrid generator excitation reference interface

Transfers the assigned voltage or reactive-control demand to the generator excitation-control interface.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-generator-excitation-reference-interface) · [Structured record](../entries/microgrid-generator-excitation-reference-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Authorized excitation demand
Generator regulator reference

## What it represents

Transfers the assigned voltage or reactive-control demand to the generator excitation-control interface. Voltage and reactive-power control coordinate the AC operating condition of the microgrid resources. A voltage target, reactive-power target and power-factor target represent different control objectives and should have explicit ownership.
In an islanded microgrid, the assigned reference source supports bus voltage while other compatible resources share reactive demand according to the selected control method. Grid-connected operation can use a different objective at the PCC. For this reference, the drawing identifies “Authorized excitation demand” at the input and “Generator regulator reference” at the output. The generator regulator defines the accepted interface.
Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Authorized excitation demand. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Generator regulator reference. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The generator regulator defines the accepted interface.
- Show each measured quantity, target and resource capability limit. Control-loop tuning, equipment capability and parallel operation require a validated design rather than an assumed property of the symbol.

## Drawing checklist

- Label the source and connection reference for authorized excitation demand.
- Identify the destination and defined state of generator regulator reference.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The generator regulator defines the accepted interface.

## Important distinction

The generator regulator defines the accepted interface. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Authorized excitation demand
- Output / connection: Generator regulator reference
- Lookup label: MGERI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid voltage and reactive-power controls. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Grid-forming inverter](grid-forming-inverter.md)
- [Static synchronous compensator](statcom.md)
- [Microgrid bus-voltage deviation monitor](microgrid-bus-voltage-deviation-monitor.md)

![Microgrid generator excitation reference interface — original educational illustration](../artwork/svg/microgrid-generator-excitation-reference-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
