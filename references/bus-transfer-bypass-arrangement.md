# Bus-transfer bypass arrangement

Shows the alternate path bypassing the assigned bay breaker under its documented configuration.

[Canonical reference](https://eloragrid.ai/symbols/bus-transfer-bypass-arrangement) · [Structured record](../entries/bus-transfer-bypass-arrangement.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: SLD, Schematic. Reference families: Manufacturer.

Representation: circuit-arrangement; installation focus: switchyards.
Main bay and bypass path
Alternate circuit connection

## What it represents

Shows the alternate path bypassing the assigned bay breaker under its documented configuration. A busbar arrangement defines the available paths between incoming circuits, outgoing circuits and bus sections. Its switching devices and measurement boundaries determine how a circuit can remain connected when part of the installation is unavailable.
In a switchyard, a single-line arrangement helps identify the bay connections, tie devices and possible alternate supply paths. Normal open points must remain separate from the equipment's physical ability to close. For this reference, the drawing identifies “Main bay and bypass path” at the input and “Alternate circuit connection” at the output. Bypass operation requires a complete protection arrangement.
Name each bus, bay and switching device. The arrangement illustrates electrical connectivity; reliability, fault levels, permitted switching and protection coordination require the actual network design. The circuit arrangement is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Main bay and bypass path. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Alternate circuit connection. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Bypass operation requires a complete protection arrangement.
- Name each bus, bay and switching device. The arrangement illustrates electrical connectivity; reliability, fault levels, permitted switching and protection coordination require the actual network design.

## Drawing checklist

- Label the source and connection reference for main bay and bypass path.
- Identify the destination and defined state of alternate circuit connection.
- Record the equipment or control-document revision supporting this circuit arrangement.
- Check this application limit in the project design: Bypass operation requires a complete protection arrangement.

## Important distinction

Bypass operation requires a complete protection arrangement. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Circuit arrangement
- Installation focus: Switchyards
- Input / boundary: Main bay and bypass path
- Output / connection: Alternate circuit connection
- Lookup label: BBA is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchyard busbar arrangements. Bus arrangements, breaker control and bay-level coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Busbar](busbar.md)
- [Disconnector](disconnector.md)
- [Two-bus section-coupler arrangement](two-bus-section-coupler-arrangement.md)

![Bus-transfer bypass arrangement — original educational illustration](../artwork/svg/bus-transfer-bypass-arrangement.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
