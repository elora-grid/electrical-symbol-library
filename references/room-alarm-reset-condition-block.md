# Room alarm reset-condition block

Defines the clearing condition for the assigned latched room indication.

[Canonical reference](https://eloragrid.ai/symbols/room-alarm-reset-condition-block) · [Structured record](../entries/room-alarm-reset-condition-block.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchrooms.
Fault clearance and reset
Alarm latch reset

## What it represents

Defines the clearing condition for the assigned latched room indication. A room DC interface connects station battery distribution, alarm contacts and operating circuits. DC supplies may remain energized when the room's normal AC supply is unavailable, so their source and distribution boundaries must be shown separately.
In a switchroom, the station battery can continue supplying protection and breaker controls during an AC supply interruption. The alarm system should distinguish charger loss from a low battery condition. For this reference, the drawing identifies “Fault clearance and reset” at the input and “Alarm latch reset” at the output. A reset command does not establish fault clearance.
Identify the DC source, returns and monitored branches. Do not infer battery autonomy, conductor polarity, isolation or earthing arrangements from a generic power block. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Fault clearance and reset. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Alarm latch reset. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A reset command does not establish fault clearance.
- Identify the DC source, returns and monitored branches. Do not infer battery autonomy, conductor polarity, isolation or earthing arrangements from a generic power block.

## Drawing checklist

- Label the source and connection reference for fault clearance and reset.
- Identify the destination and defined state of alarm latch reset.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: A reset command does not establish fault clearance.

## Important distinction

A reset command does not establish fault clearance. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchrooms
- Input / boundary: Fault clearance and reset
- Output / connection: Alarm latch reset
- Lookup label: RARB is a library lookup label, not a standard device designation.

## Public references

- [MicroGenius S2/S4 battery charger technical manual](https://www.sens-usa.com/hubfs/Controlled%20Files/Manuals/101330_MGS_User_Manual.pdf) — SENS. Public technical context for switchroom dc interfaces and alarm collection. Battery charging modes, DC distribution interfaces and charger alarms. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Station DC battery rack](ga-station-dc-battery-rack.md)
- [Battery charger controller](battery-charger-controller.md)
- [Room alarm audible-silence interface](room-alarm-audible-silence-interface.md)

![Room alarm reset-condition block — original educational illustration](../artwork/svg/room-alarm-reset-condition-block.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
