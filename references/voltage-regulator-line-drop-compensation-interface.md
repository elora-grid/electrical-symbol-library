# Voltage-regulator line-drop compensation interface

Provides the selected current and voltage quantities used by line-drop compensation.

[Canonical reference](https://eloragrid.ai/symbols/voltage-regulator-line-drop-compensation-interface) · [Structured record](../entries/voltage-regulator-line-drop-compensation-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Voltage and current measurements
Compensated regulation quantity

## What it represents

Provides the selected current and voltage quantities used by line-drop compensation. Transformer regulation changes the selected winding connection to influence voltage, while cooling control manages the installed fans and pumps. Commands, mechanical position and measured results belong to different parts of the diagram.
In a substation, a voltage regulator can request a tap change and check the resulting tap-position feedback. A separate controller stages cooling equipment according to the transformer manufacturer's defined conditions. For this reference, the drawing identifies “Voltage and current measurements” at the input and “Compensated regulation quantity” at the output. Compensation parameters follow the network model.
Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Voltage and current measurements. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Compensated regulation quantity. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Compensation parameters follow the network model.
- Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design.

## Drawing checklist

- Label the source and connection reference for voltage and current measurements.
- Identify the destination and defined state of compensated regulation quantity.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Compensation parameters follow the network model.

## Important distinction

Compensation parameters follow the network model. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Voltage and current measurements
- Output / connection: Compensated regulation quantity
- Lookup label: VLCI is a library lookup label, not a standard device designation.

## Public references

- [SEL-2414 transformer monitor](https://selinc.com/products/2414/) — SEL. Public technical context for transformer regulation and cooling control. Transformer temperature, cooling, tap changing and parallel operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Adjustable-ratio transformer](adjustable-ratio-transformer.md)
- [Winding temperature indicator](winding-temperature-indicator.md)
- [Parallel-transformer tap-control coordinator](parallel-transformer-tap-control-coordinator.md)

![Voltage-regulator line-drop compensation interface — original educational illustration](../artwork/svg/voltage-regulator-line-drop-compensation-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
