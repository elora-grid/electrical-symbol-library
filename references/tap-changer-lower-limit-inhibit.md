# Tap-changer lower-limit inhibit

Blocks further movement in the assigned direction at the documented lower limit.

[Canonical reference](https://eloragrid.ai/symbols/tap-changer-lower-limit-inhibit) · [Structured record](../entries/tap-changer-lower-limit-inhibit.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Lower tap limit contact
Lower-command restraint

## What it represents

Blocks further movement in the assigned direction at the documented lower limit. Transformer regulation changes the selected winding connection to influence voltage, while cooling control manages the installed fans and pumps. Commands, mechanical position and measured results belong to different parts of the diagram.
In a substation, a voltage regulator can request a tap change and check the resulting tap-position feedback. A separate controller stages cooling equipment according to the transformer manufacturer's defined conditions. For this reference, the drawing identifies “Lower tap limit contact” at the input and “Lower-command restraint” at the output. Tap numbering is not universal between transformers.
Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Lower tap limit contact. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Lower-command restraint. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Tap numbering is not universal between transformers.
- Keep tap-change permission, limit contacts, movement indication and measured voltage distinct. Actual tap positions, time delays, cooling ratings and allowable parallel operation require the selected transformer control design.

## Drawing checklist

- Label the source and connection reference for lower tap limit contact.
- Identify the destination and defined state of lower-command restraint.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Tap numbering is not universal between transformers.

## Important distinction

Tap numbering is not universal between transformers. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Lower tap limit contact
- Output / connection: Lower-command restraint
- Lookup label: TLI is a library lookup label, not a standard device designation.

## Public references

- [SEL-2414 transformer monitor](https://selinc.com/products/2414/) — SEL. Public technical context for transformer regulation and cooling control. Transformer temperature, cooling, tap changing and parallel operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Adjustable-ratio transformer](adjustable-ratio-transformer.md)
- [Winding temperature indicator](winding-temperature-indicator.md)
- [Tap-position coded-input decoder](tap-position-coded-input-decoder.md)

![Tap-changer lower-limit inhibit — original educational illustration](../artwork/svg/tap-changer-lower-limit-inhibit.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
