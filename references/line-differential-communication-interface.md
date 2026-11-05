# Line differential communication interface

Identifies the exchanged current information used by the assigned line differential scheme.

[Canonical reference](https://eloragrid.ai/symbols/line-differential-communication-interface) · [Structured record](../entries/line-differential-communication-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: substations.
Local and remote current information
Differential comparison data

## What it represents

Identifies the exchanged current information used by the assigned line differential scheme. A protection scheme combines measurements, decision elements and communication or trip outputs to protect a defined part of the network. A function number names a job; the scheme interface shows how that job connects to other equipment.
In a substation feeder bay, local current and voltage measurements may combine with a remote-end signal before the protection issues the assigned trip request. Backup actions use their own defined initiations and supervision. For this reference, the drawing identifies “Local and remote current information” at the input and “Differential comparison data” at the output. Channel health affects scheme availability.
Keep each protected zone, initiating quantity, blocking signal and trip destination distinct. Settings, communication performance and coordination require the approved protection study and selected relay documentation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Local and remote current information. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Differential comparison data. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Channel health affects scheme availability.
- Keep each protected zone, initiating quantity, blocking signal and trip destination distinct. Settings, communication performance and coordination require the approved protection study and selected relay documentation.

## Drawing checklist

- Label the source and connection reference for local and remote current information.
- Identify the destination and defined state of differential comparison data.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Channel health affects scheme availability.

## Important distinction

Channel health affects scheme availability. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Substations
- Input / boundary: Local and remote current information
- Output / connection: Differential comparison data
- Lookup label: LDCI is a library lookup label, not a standard device designation.

## Public references

- [SEL-411L line differential protection overview](https://selinc.com/products/411l/) — Schweitzer Engineering Laboratories. Public technical context for substation protection scheme interfaces. Line protection, breaker failure, communications and protection coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit-breaker failure protection](50bf-circuit-breaker-failure-protection.md)
- [Busbar differential protection](87b-busbar-differential-protection.md)
- [Permissive overreach transfer-trip interface](permissive-overreach-transfer-trip-interface.md)

![Line differential communication interface — original educational illustration](../artwork/svg/line-differential-communication-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
