# VT secondary test isolation boundary

Marks the defined separation between the station voltage source and the test measurement circuit.

[Canonical reference](https://eloragrid.ai/symbols/vt-secondary-test-isolation-boundary) · [Structured record](../entries/vt-secondary-test-isolation-boundary.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
VT circuit and test connection
Isolatable voltage test boundary

## What it represents

Marks the defined separation between the station voltage source and the test measurement circuit. A voltage-transformer secondary arrangement connects a defined primary voltage measurement to protection, metering or control inputs. Winding identity, fuse protection and the voltage reference must remain visible across the drawing.
In a substation bay, one voltage circuit can feed protection while a separately identified winding supplies metering. A voltage-selection circuit must make clear which bus or line measurement is being used. For this reference, the drawing identifies “VT circuit and test connection” at the input and “Isolatable voltage test boundary” at the output. The actual test method follows the selected equipment.
Show the primary measurement point, secondary connection, protective devices and relay reference. A missing measurement can resemble a real system disturbance unless the voltage-circuit health is supervised appropriately. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: VT circuit and test connection. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Isolatable voltage test boundary. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The actual test method follows the selected equipment.
- Show the primary measurement point, secondary connection, protective devices and relay reference. A missing measurement can resemble a real system disturbance unless the voltage-circuit health is supervised appropriately.

## Drawing checklist

- Label the source and connection reference for vt circuit and test connection.
- Identify the destination and defined state of isolatable voltage test boundary.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The actual test method follows the selected equipment.

## Important distinction

The actual test method follows the selected equipment. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: VT circuit and test connection
- Output / connection: Isolatable voltage test boundary
- Lookup label: VSTIB is a library lookup label, not a standard device designation.

## Public references

- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public technical context for voltage-transformer secondary arrangements. Current and voltage measurement transformers and their secondary interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Voltage transformer](voltage-transformer.md)
- [Potential test switch](potential-test-switch.md)
- [VT secondary voltage-injection boundary](vt-secondary-voltage-injection-boundary.md)

![VT secondary test isolation boundary — original educational illustration](../artwork/svg/vt-secondary-test-isolation-boundary.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
