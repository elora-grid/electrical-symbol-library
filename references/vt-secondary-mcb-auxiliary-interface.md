# VT secondary MCB auxiliary interface

Transfers the assigned voltage-circuit protective-device status to the relay logic.

[Canonical reference](https://eloragrid.ai/symbols/vt-secondary-mcb-auxiliary-interface) · [Structured record](../entries/vt-secondary-mcb-auxiliary-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Voltage MCB auxiliary
Voltage-path availability input

## What it represents

Transfers the assigned voltage-circuit protective-device status to the relay logic. A voltage-transformer secondary arrangement connects a defined primary voltage measurement to protection, metering or control inputs. Winding identity, fuse protection and the voltage reference must remain visible across the drawing.
In a substation bay, one voltage circuit can feed protection while a separately identified winding supplies metering. A voltage-selection circuit must make clear which bus or line measurement is being used. For this reference, the drawing identifies “Voltage MCB auxiliary” at the input and “Voltage-path availability input” at the output. Auxiliary status does not prove measured voltage quality.
Show the primary measurement point, secondary connection, protective devices and relay reference. A missing measurement can resemble a real system disturbance unless the voltage-circuit health is supervised appropriately. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Voltage MCB auxiliary. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Voltage-path availability input. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Auxiliary status does not prove measured voltage quality.
- Show the primary measurement point, secondary connection, protective devices and relay reference. A missing measurement can resemble a real system disturbance unless the voltage-circuit health is supervised appropriately.

## Drawing checklist

- Label the source and connection reference for voltage mcb auxiliary.
- Identify the destination and defined state of voltage-path availability input.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Auxiliary status does not prove measured voltage quality.

## Important distinction

Auxiliary status does not prove measured voltage quality. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Voltage MCB auxiliary
- Output / connection: Voltage-path availability input
- Lookup label: VSMAI is a library lookup label, not a standard device designation.

## Public references

- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public technical context for voltage-transformer secondary arrangements. Current and voltage measurement transformers and their secondary interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Voltage transformer](voltage-transformer.md)
- [Potential test switch](potential-test-switch.md)
- [VT neutral-earthing connection reference](vt-neutral-earthing-connection-reference.md)

![VT secondary MCB auxiliary interface — original educational illustration](../artwork/svg/vt-secondary-mcb-auxiliary-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
