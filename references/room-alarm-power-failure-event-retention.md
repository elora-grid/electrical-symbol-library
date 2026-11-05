# Room alarm power-failure event retention

Identifies the retained record of an alarm-system supply interruption.

[Canonical reference](https://eloragrid.ai/symbols/room-alarm-power-failure-event-retention) · [Structured record](../entries/room-alarm-power-failure-event-retention.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Alarm supply transitions
Retained supply-loss event

## What it represents

Identifies the retained record of an alarm-system supply interruption. A room DC interface connects station battery distribution, alarm contacts and operating circuits. DC supplies may remain energized when the room's normal AC supply is unavailable, so their source and distribution boundaries must be shown separately.
In a switchroom, the station battery can continue supplying protection and breaker controls during an AC supply interruption. The alarm system should distinguish charger loss from a low battery condition. For this reference, the drawing identifies “Alarm supply transitions” at the input and “Retained supply-loss event” at the output. Retention capability depends on the alarm equipment.
Identify the DC source, returns and monitored branches. Do not infer battery autonomy, conductor polarity, isolation or earthing arrangements from a generic power block. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Alarm supply transitions. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Retained supply-loss event. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Retention capability depends on the alarm equipment.
- Identify the DC source, returns and monitored branches. Do not infer battery autonomy, conductor polarity, isolation or earthing arrangements from a generic power block.

## Drawing checklist

- Label the source and connection reference for alarm supply transitions.
- Identify the destination and defined state of retained supply-loss event.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Retention capability depends on the alarm equipment.

## Important distinction

Retention capability depends on the alarm equipment. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Alarm supply transitions
- Output / connection: Retained supply-loss event
- Lookup label: RAPER is a library lookup label, not a standard device designation.

## Public references

- [MicroGenius S2/S4 battery charger technical manual](https://www.sens-usa.com/hubfs/Controlled%20Files/Manuals/101330_MGS_User_Manual.pdf) — SENS. Public technical context for switchroom dc interfaces and alarm collection. Battery charging modes, DC distribution interfaces and charger alarms. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Station DC battery rack](ga-station-dc-battery-rack.md)
- [Battery charger controller](battery-charger-controller.md)
- [Room DC branch naming boundary](room-dc-branch-naming-boundary.md)

![Room alarm power-failure event retention — original educational illustration](../artwork/svg/room-alarm-power-failure-event-retention.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
