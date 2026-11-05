# Disconnector manual-drive engaged indication

Identifies the documented feedback that a manual operating interface is engaged.

[Canonical reference](https://eloragrid.ai/symbols/disconnector-manual-drive-engaged-indication) · [Structured record](../entries/disconnector-manual-drive-engaged-indication.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchyards.
Manual-drive engagement contact
Drive mode indication

## What it represents

Identifies the documented feedback that a manual operating interface is engaged. Disconnector and earthing references identify different mechanical constructions and connection duties within a yard. The primary diagram shows which conductors are joined or earthed; the equipment drawing explains how its contacts and supports move.
In a switchyard bay, a bus selector can use a different physical construction from a line disconnector. Each device still needs an identified operating mechanism, position indication and interlocking interface. For this reference, the drawing identifies “Manual-drive engagement contact” at the input and “Drive mode indication” at the output. The actual available feedback is equipment-specific.
The construction name does not establish load-breaking capability, short-circuit making duty or operating permission. Verify these properties in the selected equipment data and the station interlocking scheme. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Manual-drive engagement contact. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Drive mode indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The actual available feedback is equipment-specific.
- The construction name does not establish load-breaking capability, short-circuit making duty or operating permission. Verify these properties in the selected equipment data and the station interlocking scheme.

## Drawing checklist

- Label the source and connection reference for manual-drive engagement contact.
- Identify the destination and defined state of drive mode indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The actual available feedback is equipment-specific.

## Important distinction

The actual available feedback is equipment-specific. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchyards
- Input / boundary: Manual-drive engagement contact
- Output / connection: Drive mode indication
- Lookup label: DMEI is a library lookup label, not a standard device designation.

## Public references

- [Disconnectors and earthing switches](https://www.siemens-energy.com/global/en/home/products-services/product-offerings/disconnectors-earthing-switches.html) — Siemens Energy. Public technical context for disconnector and earthing applications. Disconnector construction, earthing switches and operating mechanisms. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Disconnector](disconnector.md)
- [Earthing switch](earthing-switch.md)
- [Disconnector motor-control isolation interface](disconnector-motor-control-isolation-interface.md)

![Disconnector manual-drive engaged indication — original educational illustration](../artwork/svg/disconnector-manual-drive-engaged-indication.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
