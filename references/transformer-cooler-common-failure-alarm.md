# Transformer cooler common-failure alarm

Collects the assigned transformer-cooling equipment failures into a clearly named bay alarm.

[Canonical reference](https://eloragrid.ai/symbols/transformer-cooler-common-failure-alarm) · [Structured record](../entries/transformer-cooler-common-failure-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Cooling equipment fault contacts
Transformer cooling failure indication

## What it represents

Collects the assigned transformer-cooling equipment failures into a clearly named bay alarm. Transformer monitoring interfaces connect physical sensors and protection calculations to the station's alarms and trip logic. Temperature, oil, gas, pressure and electrical measurements indicate different conditions and require separate interpretation.
In a substation transformer bay, a protection panel receives winding-current measurements and equipment alarm contacts. An operator can then distinguish an electrical protection operation from a cooling-system or physical-condition alarm. For this reference, the drawing identifies “Cooling equipment fault contacts” at the input and “Transformer cooling failure indication” at the output. Detailed fan and pump causes should remain traceable.
Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Cooling equipment fault contacts. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Transformer cooling failure indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Detailed fan and pump causes should remain traceable.
- Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design.

## Drawing checklist

- Label the source and connection reference for cooling equipment fault contacts.
- Identify the destination and defined state of transformer cooling failure indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Detailed fan and pump causes should remain traceable.

## Important distinction

Detailed fan and pump causes should remain traceable. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Cooling equipment fault contacts
- Output / connection: Transformer cooling failure indication
- Lookup label: TCCA is a library lookup label, not a standard device designation.

## Public references

- [SEL-487E transformer protection relay](https://selinc.com/products/487E/) — SEL. Public technical context for transformer protection and monitoring interfaces. Transformer protection, monitoring and measurement interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Transformer differential protection](87t-transformer-differential-protection.md)
- [Transformer cooler supply-loss input](transformer-cooler-supply-loss-input.md)

![Transformer cooler common-failure alarm — original educational illustration](../artwork/svg/transformer-cooler-common-failure-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
