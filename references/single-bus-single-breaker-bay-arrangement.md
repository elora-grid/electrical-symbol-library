# Single-bus single-breaker bay arrangement

Connects the assigned circuit through its breaker to one common bus.

[Canonical reference](https://eloragrid.ai/symbols/single-bus-single-breaker-bay-arrangement) · [Structured record](../entries/single-bus-single-breaker-bay-arrangement.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: SLD, Schematic. Reference families: Manufacturer.

Representation: circuit-arrangement; installation focus: switchyards.
Circuit feeder
Single bus connection

## What it represents

Connects the assigned circuit through its breaker to one common bus. A busbar arrangement defines the available paths between incoming circuits, outgoing circuits and bus sections. Its switching devices and measurement boundaries determine how a circuit can remain connected when part of the installation is unavailable.
In a switchyard, a single-line arrangement helps identify the bay connections, tie devices and possible alternate supply paths. Normal open points must remain separate from the equipment's physical ability to close. For this reference, the drawing identifies “Circuit feeder” at the input and “Single bus connection” at the output. A bus fault can affect multiple connected bays.
Name each bus, bay and switching device. The arrangement illustrates electrical connectivity; reliability, fault levels, permitted switching and protection coordination require the actual network design. The circuit arrangement is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Circuit feeder. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Single bus connection. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A bus fault can affect multiple connected bays.
- Name each bus, bay and switching device. The arrangement illustrates electrical connectivity; reliability, fault levels, permitted switching and protection coordination require the actual network design.

## Drawing checklist

- Label the source and connection reference for circuit feeder.
- Identify the destination and defined state of single bus connection.
- Record the equipment or control-document revision supporting this circuit arrangement.
- Check this application limit in the project design: A bus fault can affect multiple connected bays.

## Important distinction

A bus fault can affect multiple connected bays. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Circuit arrangement
- Installation focus: Switchyards
- Input / boundary: Circuit feeder
- Output / connection: Single bus connection
- Lookup label: SSBA is a library lookup label, not a standard device designation.

## Public references

- [SEL-451 protection, automation and bay control](https://selinc.com/products/451/) — SEL. Public technical context for switchyard busbar arrangements. Bus arrangements, breaker control and bay-level coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Busbar](busbar.md)
- [Disconnector](disconnector.md)
- [Sectionalised single-bus arrangement](sectionalised-single-bus-arrangement.md)

![Single-bus single-breaker bay arrangement — original educational illustration](../artwork/svg/single-bus-single-breaker-bay-arrangement.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
