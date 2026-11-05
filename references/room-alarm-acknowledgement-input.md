# Room alarm acknowledgement input

Receives acknowledgement without automatically clearing the underlying alarm condition.

[Canonical reference](https://eloragrid.ai/symbols/room-alarm-acknowledgement-input) · [Structured record](../entries/room-alarm-acknowledgement-input.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Operator acknowledgement
Acknowledged alarm state

## What it represents

Receives acknowledgement without automatically clearing the underlying alarm condition. A room DC interface connects station battery distribution, alarm contacts and operating circuits. DC supplies may remain energized when the room's normal AC supply is unavailable, so their source and distribution boundaries must be shown separately.
In a switchroom, the station battery can continue supplying protection and breaker controls during an AC supply interruption. The alarm system should distinguish charger loss from a low battery condition. For this reference, the drawing identifies “Operator acknowledgement” at the input and “Acknowledged alarm state” at the output. Acknowledgement and fault reset have different meanings.
Identify the DC source, returns and monitored branches. Do not infer battery autonomy, conductor polarity, isolation or earthing arrangements from a generic power block. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Operator acknowledgement. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Acknowledged alarm state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Acknowledgement and fault reset have different meanings.
- Identify the DC source, returns and monitored branches. Do not infer battery autonomy, conductor polarity, isolation or earthing arrangements from a generic power block.

## Drawing checklist

- Label the source and connection reference for operator acknowledgement.
- Identify the destination and defined state of acknowledged alarm state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Acknowledgement and fault reset have different meanings.

## Important distinction

Acknowledgement and fault reset have different meanings. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Operator acknowledgement
- Output / connection: Acknowledged alarm state
- Lookup label: RAAI is a library lookup label, not a standard device designation.

## Public references

- [MicroGenius S2/S4 battery charger technical manual](https://www.sens-usa.com/hubfs/Controlled%20Files/Manuals/101330_MGS_User_Manual.pdf) — SENS. Public technical context for switchroom dc interfaces and alarm collection. Battery charging modes, DC distribution interfaces and charger alarms. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Station DC battery rack](ga-station-dc-battery-rack.md)
- [Battery charger controller](battery-charger-controller.md)
- [Room alarm reset-condition block](room-alarm-reset-condition-block.md)

![Room alarm acknowledgement input — original educational illustration](../artwork/svg/room-alarm-acknowledgement-input.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
