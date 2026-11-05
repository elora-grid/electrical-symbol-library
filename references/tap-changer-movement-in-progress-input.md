# Tap-changer movement-in-progress input

Reports that the selected tap-changing mechanism is between completed operating positions.

[Canonical reference](https://eloragrid.ai/symbols/tap-changer-movement-in-progress-input) · [Structured record](../entries/tap-changer-movement-in-progress-input.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Mechanism travel contact
Tap-change in-progress status

## What it represents

Reports that the selected tap-changing mechanism is between completed operating positions. Transformer regulation changes the selected winding connection to influence voltage, while cooling control manages the installed fans and pumps. Commands, mechanical position and measured results belong to different parts of the diagram.
In a substation, a voltage regulator can request a tap change and check the resulting tap-position feedback. A separate controller stages cooling equipment according to the transformer manufacturer's defined conditions. For this reference, the drawing identifies “Mechanism travel contact” at the input and “Tap-change in-progress status” at the output. Position feedback may be invalid during movement.
Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Mechanism travel contact. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Tap-change in-progress status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Position feedback may be invalid during movement.
- Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design.

## Drawing checklist

- Label the source and connection reference for mechanism travel contact.
- Identify the destination and defined state of tap-change in-progress status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Position feedback may be invalid during movement.

## Important distinction

Position feedback may be invalid during movement. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Mechanism travel contact
- Output / connection: Tap-change in-progress status
- Lookup label: TMI is a library lookup label, not a standard device designation.

## Public references

- [SEL-2414 transformer monitor](https://selinc.com/products/2414/) — SEL. Public technical context for transformer regulation and cooling control. Transformer temperature, cooling, tap changing and parallel operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Adjustable-ratio transformer](adjustable-ratio-transformer.md)
- [Winding temperature indicator](winding-temperature-indicator.md)
- [Tap-changer operation-complete feedback](tap-changer-operation-complete-feedback.md)

![Tap-changer movement-in-progress input — original educational illustration](../artwork/svg/tap-changer-movement-in-progress-input.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
