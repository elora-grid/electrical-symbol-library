# Transformer circulating-reactive-current restraint

Uses the selected reactive-current comparison to restrain unsuitable parallel regulation.

[Canonical reference](https://eloragrid.ai/symbols/transformer-circulating-reactive-current-restraint) · [Structured record](../entries/transformer-circulating-reactive-current-restraint.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Transformer reactive-current comparison
Regulation restraint input

## What it represents

Uses the selected reactive-current comparison to restrain unsuitable parallel regulation. Transformer regulation changes the selected winding connection to influence voltage, while cooling control manages the installed fans and pumps. Commands, mechanical position and measured results belong to different parts of the diagram.
In a substation, a voltage regulator can request a tap change and check the resulting tap-position feedback. A separate controller stages cooling equipment according to the transformer manufacturer's defined conditions. For this reference, the drawing identifies “Transformer reactive-current comparison” at the input and “Regulation restraint input” at the output. The method depends on the parallel-control scheme.
Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Transformer reactive-current comparison. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Regulation restraint input. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The method depends on the parallel-control scheme.
- Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design.

## Drawing checklist

- Label the source and connection reference for transformer reactive-current comparison.
- Identify the destination and defined state of regulation restraint input.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The method depends on the parallel-control scheme.

## Important distinction

The method depends on the parallel-control scheme. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Transformer reactive-current comparison
- Output / connection: Regulation restraint input
- Lookup label: TCR is a library lookup label, not a standard device designation.

## Public references

- [SEL-2414 transformer monitor](https://selinc.com/products/2414/) — SEL. Public technical context for transformer regulation and cooling control. Transformer temperature, cooling, tap changing and parallel operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Adjustable-ratio transformer](adjustable-ratio-transformer.md)
- [Winding temperature indicator](winding-temperature-indicator.md)
- [Transformer cooling stage-one request](transformer-cooling-stage-one-request.md)

![Transformer circulating-reactive-current restraint — original educational illustration](../artwork/svg/transformer-circulating-reactive-current-restraint.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
