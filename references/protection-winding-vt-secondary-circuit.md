# Protection-winding VT secondary circuit

Identifies the voltage-transformer winding allocated to the assigned protective relay inputs.

[Canonical reference](https://eloragrid.ai/symbols/protection-winding-vt-secondary-circuit) · [Structured record](../entries/protection-winding-vt-secondary-circuit.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Protection VT winding
Protection voltage circuit

## What it represents

Identifies the voltage-transformer winding allocated to the assigned protective relay inputs. A voltage-transformer secondary arrangement connects a defined primary voltage measurement to protection, metering or control inputs. Winding identity, fuse protection and the voltage reference must remain visible across the drawing.
In a substation bay, one voltage circuit can feed protection while a separately identified winding supplies metering. A voltage-selection circuit must make clear which bus or line measurement is being used. For this reference, the drawing identifies “Protection VT winding” at the input and “Protection voltage circuit” at the output. Winding duty follows the selected transformer data.
Show the primary measurement point, secondary connection, protective devices and relay reference. A missing measurement can resemble a real system disturbance unless the voltage-circuit health is supervised appropriately. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Protection VT winding. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Protection voltage circuit. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Winding duty follows the selected transformer data.
- Show the primary measurement point, secondary connection, protective devices and relay reference. A missing measurement can resemble a real system disturbance unless the voltage-circuit health is supervised appropriately.

## Drawing checklist

- Label the source and connection reference for protection vt winding.
- Identify the destination and defined state of protection voltage circuit.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Winding duty follows the selected transformer data.

## Important distinction

Winding duty follows the selected transformer data. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Protection VT winding
- Output / connection: Protection voltage circuit
- Lookup label: PVSC is a library lookup label, not a standard device designation.

## Public references

- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public technical context for voltage-transformer secondary arrangements. Current and voltage measurement transformers and their secondary interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Voltage transformer](voltage-transformer.md)
- [Potential test switch](potential-test-switch.md)
- [Metering-winding VT secondary circuit](metering-winding-vt-secondary-circuit.md)

![Protection-winding VT secondary circuit — original educational illustration](../artwork/svg/protection-winding-vt-secondary-circuit.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
