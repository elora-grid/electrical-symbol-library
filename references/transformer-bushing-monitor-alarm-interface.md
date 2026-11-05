# Transformer bushing-monitor alarm interface

Receives the installed bushing monitor's declared condition or fault indication.

[Canonical reference](https://eloragrid.ai/symbols/transformer-bushing-monitor-alarm-interface) · [Structured record](../entries/transformer-bushing-monitor-alarm-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Bushing-monitor output
Bushing condition alarm

## What it represents

Receives the installed bushing monitor's declared condition or fault indication. Transformer monitoring interfaces connect physical sensors and protection calculations to the station's alarms and trip logic. Temperature, oil, gas, pressure and electrical measurements indicate different conditions and require separate interpretation.
In a substation transformer bay, a protection panel receives winding-current measurements and equipment alarm contacts. An operator can then distinguish an electrical protection operation from a cooling-system or physical-condition alarm. For this reference, the drawing identifies “Bushing-monitor output” at the input and “Bushing condition alarm” at the output. A monitoring alarm is not a complete bushing diagnosis.
Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Bushing-monitor output. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Bushing condition alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A monitoring alarm is not a complete bushing diagnosis.
- Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design.

## Drawing checklist

- Label the source and connection reference for bushing-monitor output.
- Identify the destination and defined state of bushing condition alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: A monitoring alarm is not a complete bushing diagnosis.

## Important distinction

A monitoring alarm is not a complete bushing diagnosis. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Bushing-monitor output
- Output / connection: Bushing condition alarm
- Lookup label: TBAI is a library lookup label, not a standard device designation.

## Public references

- [SEL-487E transformer protection relay](https://selinc.com/products/487E/) — SEL. Public technical context for transformer protection and monitoring interfaces. Transformer protection, monitoring and measurement interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Transformer differential protection](87t-transformer-differential-protection.md)
- [Transformer online gas-monitor interface](transformer-online-gas-monitor-interface.md)

![Transformer bushing-monitor alarm interface — original educational illustration](../artwork/svg/transformer-bushing-monitor-alarm-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
