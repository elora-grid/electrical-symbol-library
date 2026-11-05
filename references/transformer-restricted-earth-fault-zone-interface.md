# Transformer restricted-earth-fault zone interface

Defines the current measurement boundary used by the assigned restricted-earth-fault scheme.

[Canonical reference](https://eloragrid.ai/symbols/transformer-restricted-earth-fault-zone-interface) · [Structured record](../entries/transformer-restricted-earth-fault-zone-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Phase and neutral currents
REF protection-zone information

## What it represents

Defines the current measurement boundary used by the assigned restricted-earth-fault scheme. Transformer monitoring interfaces connect physical sensors and protection calculations to the station's alarms and trip logic. Temperature, oil, gas, pressure and electrical measurements indicate different conditions and require separate interpretation.
In a substation transformer bay, a protection panel receives winding-current measurements and equipment alarm contacts. An operator can then distinguish an electrical protection operation from a cooling-system or physical-condition alarm. For this reference, the drawing identifies “Phase and neutral currents” at the input and “REF protection-zone information” at the output. CT placement and polarity determine the protected boundary.
Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Phase and neutral currents. Identify its source device or document and the state represented on the drawing.
- Follow the named output: REF protection-zone information. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- CT placement and polarity determine the protected boundary.
- Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design.

## Drawing checklist

- Label the source and connection reference for phase and neutral currents.
- Identify the destination and defined state of ref protection-zone information.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: CT placement and polarity determine the protected boundary.

## Important distinction

CT placement and polarity determine the protected boundary. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Phase and neutral currents
- Output / connection: REF protection-zone information
- Lookup label: TRZI is a library lookup label, not a standard device designation.

## Public references

- [SEL-487E transformer protection relay](https://selinc.com/products/487E/) — SEL. Public technical context for transformer protection and monitoring interfaces. Transformer protection, monitoring and measurement interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Transformer differential protection](87t-transformer-differential-protection.md)
- [Transformer differential restraint interface](transformer-differential-restraint-interface.md)

![Transformer restricted-earth-fault zone interface — original educational illustration](../artwork/svg/transformer-restricted-earth-fault-zone-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
