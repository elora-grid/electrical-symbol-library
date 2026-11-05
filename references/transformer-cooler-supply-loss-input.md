# Transformer cooler supply-loss input

Reports loss of the monitored electrical supply to the transformer cooling system.

[Canonical reference](https://eloragrid.ai/symbols/transformer-cooler-supply-loss-input) · [Structured record](../entries/transformer-cooler-supply-loss-input.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Cooling supply supervision
Cooling supply-loss alarm

## What it represents

Reports loss of the monitored electrical supply to the transformer cooling system. Transformer monitoring interfaces connect physical sensors and protection calculations to the station's alarms and trip logic. Temperature, oil, gas, pressure and electrical measurements indicate different conditions and require separate interpretation.
In a substation transformer bay, a protection panel receives winding-current measurements and equipment alarm contacts. An operator can then distinguish an electrical protection operation from a cooling-system or physical-condition alarm. For this reference, the drawing identifies “Cooling supply supervision” at the input and “Cooling supply-loss alarm” at the output. A supply alarm differs from a temperature alarm.
Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Cooling supply supervision. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Cooling supply-loss alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A supply alarm differs from a temperature alarm.
- Identify the sensor or calculation, its monitored zone and its assigned response. Alarm and trip thresholds, sensor fitting and protection settings belong to the selected transformer documentation and the approved protection design.

## Drawing checklist

- Label the source and connection reference for cooling supply supervision.
- Identify the destination and defined state of cooling supply-loss alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: A supply alarm differs from a temperature alarm.

## Important distinction

A supply alarm differs from a temperature alarm. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Cooling supply supervision
- Output / connection: Cooling supply-loss alarm
- Lookup label: TCSI is a library lookup label, not a standard device designation.

## Public references

- [SEL-487E transformer protection relay](https://selinc.com/products/487E/) — SEL. Public technical context for transformer protection and monitoring interfaces. Transformer protection, monitoring and measurement interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power transformer](power-transformer.md)
- [Transformer differential protection](87t-transformer-differential-protection.md)
- [Transformer through-fault accumulation monitor](transformer-through-fault-accumulation-monitor.md)

![Transformer cooler supply-loss input — original educational illustration](../artwork/svg/transformer-cooler-supply-loss-input.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
