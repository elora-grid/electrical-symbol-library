# Built-on earthing-switch connection

Identifies the earthing function mounted with the selected primary switching assembly.

[Canonical reference](https://eloragrid.ai/symbols/built-on-earthing-switch-connection) · [Structured record](../entries/built-on-earthing-switch-connection.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Selected device conductor section
Built-on earthing path

## What it represents

Identifies the earthing function mounted with the selected primary switching assembly. Disconnector and earthing references identify different mechanical constructions and connection duties within a yard. The primary diagram shows which conductors are joined or earthed; the equipment drawing explains how its contacts and supports move.
In a switchyard bay, a bus selector can use a different physical construction from a line disconnector. Each device still needs an identified operating mechanism, position indication and interlocking interface. For this reference, the drawing identifies “Selected device conductor section” at the input and “Built-on earthing path” at the output. Mechanical integration does not define all electrical interlocks.
The construction name does not establish load-breaking capability, short-circuit making duty or operating permission. Verify these properties in the selected equipment data and the station interlocking scheme. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Selected device conductor section. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Built-on earthing path. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Mechanical integration does not define all electrical interlocks.
- The construction name does not establish load-breaking capability, short-circuit making duty or operating permission. Verify these properties in the selected equipment data and the station interlocking scheme.

## Drawing checklist

- Label the source and connection reference for selected device conductor section.
- Identify the destination and defined state of built-on earthing path.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Mechanical integration does not define all electrical interlocks.

## Important distinction

Mechanical integration does not define all electrical interlocks. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Selected device conductor section
- Output / connection: Built-on earthing path
- Lookup label: BEC is a library lookup label, not a standard device designation.

## Public references

- [Disconnectors and earthing switches](https://www.siemens-energy.com/global/en/home/products-services/product-offerings/disconnectors-earthing-switches.html) — Siemens Energy. Public technical context for disconnector and earthing applications. Disconnector construction, earthing switches and operating mechanisms. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Disconnector](disconnector.md)
- [Earthing switch](earthing-switch.md)
- [Bus-selector earthing-switch association](bus-selector-earthing-switch-association.md)

![Built-on earthing-switch connection — original educational illustration](../artwork/svg/built-on-earthing-switch-connection.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
