# Time-delay push switch plan mark

Plan mark for a push switch that turns lights on for a set period, commonly used in stairwells and common corridors.

[Canonical reference](https://eloragrid.ai/symbols/iec-time-delay-push-switch) · [Structured record](../entries/iec-time-delay-push-switch.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: GA. Reference families: IEC.

Graphical convention: IEC. Time-delay push switch.

## What it represents

A time-delay push switch, often wired to a staircase timer, turns lighting on when pressed and lets it switch off after a set interval. Plans draw a push-button mark at each push position with a small clock or t tag, and show the timer location in the board where one is used.
Several push switches may be wired in parallel to one timer, so the switching line links them all to a common luminaire group. The electrician reads the plan to run a separate push conductor rather than switched-line wiring.
The plan symbol does not set the delay period or state whether the timer is in the switch or at the board. The specification should give both.

## How to read it

- Look for the associated timer in the board schedule.
- Expect several pushes wired in parallel on one landing group.

## Drawing checklist

- State delay time and adjustment range.
- Show the timer location.
- Link all pushes to the controlled group.

## Important distinction

A momentary bell push is not connected to lighting; a time-delay push switch starts a lighting timer.

## Facts

- Operation: Momentary push starting a timed lighting period
- Typical location: Stairs and shared corridors
- Exact standard graphic: Not reproduced here; confirm the form against IEC 60617 and the project legend

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context; independently drawn here.
- [Elementary switching devices](https://www.electrical-installation.org/enwiki/Elementary_switching_devices) — Schneider Electric — Electrical Installation Guide. Context for functional control switching.

## Related references

- [On-delay timer relay](on-delay-timer-relay.md)
- [Push button plan mark](iec-push-button-plan-mark.md)
- [Time switch plan mark](iec-time-switch-plan-mark.md)

![Time-delay push switch plan mark — original educational illustration](../artwork/svg/iec-time-delay-push-switch.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
