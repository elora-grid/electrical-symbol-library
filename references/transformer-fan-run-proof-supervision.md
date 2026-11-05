# Transformer fan run-proof supervision

Compares the assigned cooling fan command with its operating feedback.

[Canonical reference](https://eloragrid.ai/symbols/transformer-fan-run-proof-supervision) · [Structured record](../entries/transformer-fan-run-proof-supervision.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Fan request and feedback
Cooling fan fault indication

## What it represents

Compares the assigned cooling fan command with its operating feedback. Transformer regulation changes the selected winding connection to influence voltage, while cooling control manages the installed fans and pumps. Commands, mechanical position and measured results belong to different parts of the diagram.
In a substation, a voltage regulator can request a tap change and check the resulting tap-position feedback. A separate controller stages cooling equipment according to the transformer manufacturer's defined conditions. For this reference, the drawing identifies “Fan request and feedback” at the input and “Cooling fan fault indication” at the output. Running feedback does not measure cooling effectiveness.
Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Fan request and feedback. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Cooling fan fault indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Running feedback does not measure cooling effectiveness.
- Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design.

## Drawing checklist

- Label the source and connection reference for fan request and feedback.
- Identify the destination and defined state of cooling fan fault indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Running feedback does not measure cooling effectiveness.

## Important distinction

Running feedback does not measure cooling effectiveness. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Fan request and feedback
- Output / connection: Cooling fan fault indication
- Lookup label: TFRS is a library lookup label, not a standard device designation.

## Public references

- [SEL-2414 transformer monitor](https://selinc.com/products/2414/) — SEL. Public technical context for transformer regulation and cooling control. Transformer temperature, cooling, tap changing and parallel operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Adjustable-ratio transformer](adjustable-ratio-transformer.md)
- [Winding temperature indicator](winding-temperature-indicator.md)
- [Transformer oil-pump flow-proof supervision](transformer-oil-pump-flow-proof-supervision.md)

![Transformer fan run-proof supervision — original educational illustration](../artwork/svg/transformer-fan-run-proof-supervision.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
