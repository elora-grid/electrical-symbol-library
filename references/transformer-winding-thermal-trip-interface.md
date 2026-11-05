# Transformer winding thermal trip interface

Carries the selected winding thermal protection result to the assigned trip logic.

[Canonical reference](https://eloragrid.ai/symbols/transformer-winding-thermal-trip-interface) · [Structured record](../entries/transformer-winding-thermal-trip-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Winding thermal estimate
Winding-temperature trip initiation

## What it represents

Carries the selected winding thermal protection result to the assigned trip logic. Transformer monitoring interfaces connect physical sensors and protection calculations to the station's alarms and trip logic. Temperature, oil, gas, pressure and electrical measurements indicate different conditions and require separate interpretation.
In a substation transformer bay, a protection panel receives winding-current measurements and equipment alarm contacts. An operator can then distinguish an electrical protection operation from a cooling-system or physical-condition alarm. For this reference, the drawing identifies “Winding thermal estimate” at the input and “Winding-temperature trip initiation” at the output. The thermal model requires transformer-specific data.
Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Winding thermal estimate. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Winding-temperature trip initiation. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The thermal model requires transformer-specific data.
- Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design.

## Drawing checklist

- Label the source and connection reference for winding thermal estimate.
- Identify the destination and defined state of winding-temperature trip initiation.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The thermal model requires transformer-specific data.

## Important distinction

The thermal model requires transformer-specific data. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Winding thermal estimate
- Output / connection: Winding-temperature trip initiation
- Lookup label: TWTTI is a library lookup label, not a standard device designation.

## Public references

- [SEL-487E transformer protection relay](https://selinc.com/products/487E/) — SEL. Public technical context for transformer protection and monitoring interfaces. Transformer protection, monitoring and measurement interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Transformer differential protection](87t-transformer-differential-protection.md)
- [Transformer cooler common-failure alarm](transformer-cooler-common-failure-alarm.md)

![Transformer winding thermal trip interface — original educational illustration](../artwork/svg/transformer-winding-thermal-trip-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
