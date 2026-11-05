# Tap-changer operation-complete feedback

Confirms completion of the defined tap-changing operation at the regulator interface.

[Canonical reference](https://eloragrid.ai/symbols/tap-changer-operation-complete-feedback) · [Structured record](../entries/tap-changer-operation-complete-feedback.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Completed-position feedback
Tap-change completion status

## What it represents

Confirms completion of the defined tap-changing operation at the regulator interface. Transformer regulation changes the selected winding connection to influence voltage, while cooling control manages the installed fans and pumps. Commands, mechanical position and measured results belong to different parts of the diagram.
In a substation, a voltage regulator can request a tap change and check the resulting tap-position feedback. A separate controller stages cooling equipment according to the transformer manufacturer's defined conditions. For this reference, the drawing identifies “Completed-position feedback” at the input and “Tap-change completion status” at the output. Completion indication must use the actual mechanism signals.
Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Completed-position feedback. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Tap-change completion status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Completion indication must use the actual mechanism signals.
- Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design.

## Drawing checklist

- Label the source and connection reference for completed-position feedback.
- Identify the destination and defined state of tap-change completion status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Completion indication must use the actual mechanism signals.

## Important distinction

Completion indication must use the actual mechanism signals. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Completed-position feedback
- Output / connection: Tap-change completion status
- Lookup label: TOF is a library lookup label, not a standard device designation.

## Public references

- [SEL-2414 transformer monitor](https://selinc.com/products/2414/) — SEL. Public technical context for transformer regulation and cooling control. Transformer temperature, cooling, tap changing and parallel operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Adjustable-ratio transformer](adjustable-ratio-transformer.md)
- [Winding temperature indicator](winding-temperature-indicator.md)
- [Tap-changer upper-limit inhibit](tap-changer-upper-limit-inhibit.md)

![Tap-changer operation-complete feedback — original educational illustration](../artwork/svg/tap-changer-operation-complete-feedback.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
