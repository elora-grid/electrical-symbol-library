# Transformer gas-accumulation alarm input

Receives the defined gas-accumulation alarm from an applicable liquid-filled transformer gas relay.

[Canonical reference](https://eloragrid.ai/symbols/transformer-gas-accumulation-alarm-input) · [Structured record](../entries/transformer-gas-accumulation-alarm-input.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Gas-relay alarm contact
Transformer gas alarm

## What it represents

Receives the defined gas-accumulation alarm from an applicable liquid-filled transformer gas relay. Transformer monitoring interfaces connect physical sensors and protection calculations to the station's alarms and trip logic. Temperature, oil, gas, pressure and electrical measurements indicate different conditions and require separate interpretation.
In a substation transformer bay, a protection panel receives winding-current measurements and equipment alarm contacts. An operator can then distinguish an electrical protection operation from a cooling-system or physical-condition alarm. For this reference, the drawing identifies “Gas-relay alarm contact” at the input and “Transformer gas alarm” at the output. The contact does not establish the cause of gas accumulation.
Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Gas-relay alarm contact. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Transformer gas alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The contact does not establish the cause of gas accumulation.
- Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design.

## Drawing checklist

- Label the source and connection reference for gas-relay alarm contact.
- Identify the destination and defined state of transformer gas alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The contact does not establish the cause of gas accumulation.

## Important distinction

The contact does not establish the cause of gas accumulation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Gas-relay alarm contact
- Output / connection: Transformer gas alarm
- Lookup label: TGAI is a library lookup label, not a standard device designation.

## Public references

- [SEL-487E transformer protection relay](https://selinc.com/products/487E/) — SEL. Public technical context for transformer protection and monitoring interfaces. Transformer protection, monitoring and measurement interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Transformer differential protection](87t-transformer-differential-protection.md)
- [Transformer oil-surge trip interface](transformer-oil-surge-trip-interface.md)

![Transformer gas-accumulation alarm input — original educational illustration](../artwork/svg/transformer-gas-accumulation-alarm-input.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
