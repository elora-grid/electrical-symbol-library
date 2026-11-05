# Permissive underreach transfer-trip interface

Identifies the documented use of an underreaching local detection and remote permissive path.

[Canonical reference](https://eloragrid.ai/symbols/permissive-underreach-transfer-trip-interface) · [Structured record](../entries/permissive-underreach-transfer-trip-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Underreaching detection and channel
Assigned permissive output

## What it represents

Identifies the documented use of an underreaching local detection and remote permissive path. A protection scheme combines measurements, decision elements and communication or trip outputs to protect a defined part of the network. A function number names a job; the scheme interface shows how that job connects to other equipment.
In a substation feeder bay, local current and voltage measurements may combine with a remote-end signal before the protection issues the assigned trip request. Backup actions use their own defined initiations and supervision. For this reference, the drawing identifies “Underreaching detection and channel” at the input and “Assigned permissive output” at the output. Scheme naming does not define every terminal behavior.
Keep each protected zone, initiating quantity, blocking signal and trip destination distinct. Settings, communication performance and coordination require the approved protection study and selected relay documentation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Underreaching detection and channel. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Assigned permissive output. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Scheme naming does not define every terminal behavior.
- Keep each protected zone, initiating quantity, blocking signal and trip destination distinct. Settings, communication performance and coordination require the approved protection study and selected relay documentation.

## Drawing checklist

- Label the source and connection reference for underreaching detection and channel.
- Identify the destination and defined state of assigned permissive output.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Scheme naming does not define every terminal behavior.

## Important distinction

Scheme naming does not define every terminal behavior. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Underreaching detection and channel
- Output / connection: Assigned permissive output
- Lookup label: PUTI is a library lookup label, not a standard device designation.

## Public references

- [SEL-411L line differential protection overview](https://selinc.com/products/411l/) — Schweitzer Engineering Laboratories. Public technical context for substation protection scheme interfaces. Line protection, breaker failure, communications and protection coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit-breaker failure protection](50bf-circuit-breaker-failure-protection.md)
- [Busbar differential protection](87b-busbar-differential-protection.md)
- [Directional-comparison blocking interface](directional-comparison-blocking-interface.md)

![Permissive underreach transfer-trip interface — original educational illustration](../artwork/svg/permissive-underreach-transfer-trip-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
