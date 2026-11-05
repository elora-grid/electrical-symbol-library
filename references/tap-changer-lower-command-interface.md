# Tap-changer lower-command interface

Carries a permitted request to move the tap changer in the documented voltage-lowering direction.

[Canonical reference](https://eloragrid.ai/symbols/tap-changer-lower-command-interface) · [Structured record](../entries/tap-changer-lower-command-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Regulator lower request
Tap-lower control output

## What it represents

Carries a permitted request to move the tap changer in the documented voltage-lowering direction. Transformer regulation changes the selected winding connection to influence voltage, while cooling control manages the installed fans and pumps. Commands, mechanical position and measured results belong to different parts of the diagram.
In a substation, a voltage regulator can request a tap change and check the resulting tap-position feedback. A separate controller stages cooling equipment according to the transformer manufacturer's defined conditions. For this reference, the drawing identifies “Regulator lower request” at the input and “Tap-lower control output” at the output. Direction labels must match the selected mechanism.
Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Regulator lower request. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Tap-lower control output. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Direction labels must match the selected mechanism.
- Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design.

## Drawing checklist

- Label the source and connection reference for regulator lower request.
- Identify the destination and defined state of tap-lower control output.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Direction labels must match the selected mechanism.

## Important distinction

Direction labels must match the selected mechanism. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Regulator lower request
- Output / connection: Tap-lower control output
- Lookup label: TLI is a library lookup label, not a standard device designation.

## Public references

- [SEL-2414 transformer monitor](https://selinc.com/products/2414/) — SEL. Public technical context for transformer regulation and cooling control. Transformer temperature, cooling, tap changing and parallel operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Adjustable-ratio transformer](adjustable-ratio-transformer.md)
- [Winding temperature indicator](winding-temperature-indicator.md)
- [Tap-changer movement-in-progress input](tap-changer-movement-in-progress-input.md)

![Tap-changer lower-command interface — original educational illustration](../artwork/svg/tap-changer-lower-command-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
