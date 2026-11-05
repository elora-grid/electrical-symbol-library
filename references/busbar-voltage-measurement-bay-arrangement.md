# Busbar voltage-measurement bay arrangement

Connects the assigned bus voltage measurement equipment through its documented bay interfaces.

[Canonical reference](https://eloragrid.ai/symbols/busbar-voltage-measurement-bay-arrangement) · [Structured record](../entries/busbar-voltage-measurement-bay-arrangement.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: SLD, Schematic. Reference families: Manufacturer.

Representation: circuit-arrangement; installation focus: switchyards.
Bus conductor
Bus-voltage measurement path

## What it represents

Connects the assigned bus voltage measurement equipment through its documented bay interfaces. A busbar arrangement defines the available paths between incoming circuits, outgoing circuits and bus sections. Its switching devices and measurement boundaries determine how a circuit can remain connected when part of the installation is unavailable.
In a switchyard, a single-line arrangement helps identify the bay connections, tie devices and possible alternate supply paths. Normal open points must remain separate from the equipment's physical ability to close. For this reference, the drawing identifies “Bus conductor” at the input and “Bus-voltage measurement path” at the output. A measurement bay can have separate isolation devices.
Name each bus, bay and switching device. The arrangement illustrates electrical connectivity; reliability, fault levels, permitted switching and protection coordination require the actual network design. The circuit arrangement is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Bus conductor. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Bus-voltage measurement path. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A measurement bay can have separate isolation devices.
- Name each bus, bay and switching device. The arrangement illustrates electrical connectivity; reliability, fault levels, permitted switching and protection coordination require the actual network design.

## Drawing checklist

- Label the source and connection reference for bus conductor.
- Identify the destination and defined state of bus-voltage measurement path.
- Record the equipment or control-document revision supporting this circuit arrangement.
- Check this application limit in the project design: A measurement bay can have separate isolation devices.

## Important distinction

A measurement bay can have separate isolation devices. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Circuit arrangement
- Installation focus: Switchyards
- Input / boundary: Bus conductor
- Output / connection: Bus-voltage measurement path
- Lookup label: BVBA is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchyard busbar arrangements. Bus arrangements, breaker control and bay-level coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Busbar](busbar.md)
- [Disconnector](disconnector.md)
- [Busbar surge-protection connection arrangement](busbar-surge-protection-connection-arrangement.md)

![Busbar voltage-measurement bay arrangement — original educational illustration](../artwork/svg/busbar-voltage-measurement-bay-arrangement.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
