# Vertical-break disconnector application reference

Identifies the selected disconnector construction whose moving contact opens in its documented vertical plane.

[Canonical reference](https://eloragrid.ai/symbols/vertical-break-disconnector-application-reference) · [Structured record](../entries/vertical-break-disconnector-application-reference.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Primary connection
Vertical-break isolation function

## What it represents

Identifies the selected disconnector construction whose moving contact opens in its documented vertical plane. Disconnector and earthing references identify different mechanical constructions and connection duties within a yard. The primary diagram shows which conductors are joined or earthed; the equipment drawing explains how its contacts and supports move.
In a switchyard bay, a bus selector can use a different physical construction from a line disconnector. Each device still needs an identified operating mechanism, position indication and interlocking interface. For this reference, the drawing identifies “Primary connection” at the input and “Vertical-break isolation function” at the output. Operating envelope requires the manufacturer drawing.
The construction name does not establish load-breaking capability, short-circuit making duty or operating permission. Verify these properties in the selected equipment data and the station interlocking scheme. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Primary connection. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Vertical-break isolation function. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Operating envelope requires the manufacturer drawing.
- The construction name does not establish load-breaking capability, short-circuit making duty or operating permission. Verify these properties in the selected equipment data and the station interlocking scheme.

## Drawing checklist

- Label the source and connection reference for primary connection.
- Identify the destination and defined state of vertical-break isolation function.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Operating envelope requires the manufacturer drawing.

## Important distinction

Operating envelope requires the manufacturer drawing. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Primary connection
- Output / connection: Vertical-break isolation function
- Lookup label: VDAR is a library lookup label, not a standard device designation.

## Public references

- [Disconnectors and earthing switches](https://www.siemens-energy.com/global/en/home/products-services/product-offerings/disconnectors-earthing-switches.html) — Siemens Energy. Public technical context for disconnector and earthing applications. Disconnector construction, earthing switches and operating mechanisms. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Disconnector](disconnector.md)
- [Earthing switch](earthing-switch.md)
- [Pantograph bus-selector reference](pantograph-bus-selector-reference.md)

![Vertical-break disconnector application reference — original educational illustration](../artwork/svg/vertical-break-disconnector-application-reference.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
