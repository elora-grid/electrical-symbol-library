# Voltage-regulator deadband comparator

Identifies the measured-voltage interval within which the regulator makes no tap-change request.

[Canonical reference](https://eloragrid.ai/symbols/voltage-regulator-deadband-comparator) · [Structured record](../entries/voltage-regulator-deadband-comparator.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Measured and target voltage
Regulation demand state

## What it represents

Identifies the measured-voltage interval within which the regulator makes no tap-change request. Transformer regulation changes the selected winding connection to influence voltage, while cooling control manages the installed fans and pumps. Commands, mechanical position and measured results belong to different parts of the diagram.
In a substation, a voltage regulator can request a tap change and check the resulting tap-position feedback. A separate controller stages cooling equipment according to the transformer manufacturer's defined conditions. For this reference, the drawing identifies “Measured and target voltage” at the input and “Regulation demand state” at the output. Deadband is a control setting rather than a symbol property.
Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Measured and target voltage. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Regulation demand state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Deadband is a control setting rather than a symbol property.
- Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design.

## Drawing checklist

- Label the source and connection reference for measured and target voltage.
- Identify the destination and defined state of regulation demand state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Deadband is a control setting rather than a symbol property.

## Important distinction

Deadband is a control setting rather than a symbol property. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Measured and target voltage
- Output / connection: Regulation demand state
- Lookup label: VDC is a library lookup label, not a standard device designation.

## Public references

- [SEL-2414 transformer monitor](https://selinc.com/products/2414/) — SEL. Public technical context for transformer regulation and cooling control. Transformer temperature, cooling, tap changing and parallel operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Adjustable-ratio transformer](adjustable-ratio-transformer.md)
- [Winding temperature indicator](winding-temperature-indicator.md)
- [Voltage-regulator line-drop compensation interface](voltage-regulator-line-drop-compensation-interface.md)

![Voltage-regulator deadband comparator — original educational illustration](../artwork/svg/voltage-regulator-deadband-comparator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
