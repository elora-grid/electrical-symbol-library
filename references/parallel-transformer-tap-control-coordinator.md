# Parallel-transformer tap-control coordinator

Coordinates the documented tap-control method for transformers operating on a common bus.

[Canonical reference](https://eloragrid.ai/symbols/parallel-transformer-tap-control-coordinator) · [Structured record](../entries/parallel-transformer-tap-control-coordinator.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Transformer operating and tap states
Coordinated tap requests

## What it represents

Coordinates the documented tap-control method for transformers operating on a common bus. Transformer regulation changes the selected winding connection to influence voltage, while cooling control manages the installed fans and pumps. Commands, mechanical position and measured results belong to different parts of the diagram.
In a substation, a voltage regulator can request a tap change and check the resulting tap-position feedback. A separate controller stages cooling equipment according to the transformer manufacturer's defined conditions. For this reference, the drawing identifies “Transformer operating and tap states” at the input and “Coordinated tap requests” at the output. Parallel suitability requires more than matching tap numbers.
Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Transformer operating and tap states. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Coordinated tap requests. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Parallel suitability requires more than matching tap numbers.
- Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design.

## Drawing checklist

- Label the source and connection reference for transformer operating and tap states.
- Identify the destination and defined state of coordinated tap requests.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Parallel suitability requires more than matching tap numbers.

## Important distinction

Parallel suitability requires more than matching tap numbers. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Transformer operating and tap states
- Output / connection: Coordinated tap requests
- Lookup label: PTC is a library lookup label, not a standard device designation.

## Public references

- [SEL-2414 transformer monitor](https://selinc.com/products/2414/) — SEL. Public technical context for transformer regulation and cooling control. Transformer temperature, cooling, tap changing and parallel operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Adjustable-ratio transformer](adjustable-ratio-transformer.md)
- [Winding temperature indicator](winding-temperature-indicator.md)
- [Transformer circulating-reactive-current restraint](transformer-circulating-reactive-current-restraint.md)

![Parallel-transformer tap-control coordinator — original educational illustration](../artwork/svg/parallel-transformer-tap-control-coordinator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
