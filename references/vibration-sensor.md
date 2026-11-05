# Vibration sensor

Sensor on a machine bearing that measures vibration and feeds a monitor or relay for alarm and trip.

[Canonical reference](https://eloragrid.ai/symbols/vibration-sensor) · [Structured record](../entries/vibration-sensor.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

A vibration sensor is mounted on a machine bearing housing or near the shaft and produces a signal related to vibration, either as raw acceleration or as a processed velocity output in a 4-20 mA loop. It feeds condition monitoring systems and machine protection relays that alarm and trip large motors, generators and fans.
Accelerometers, velocity sensors and non-contact proximity probes measure different things and suit different machines. The symbol does not show which type is used, the measuring axis or the alarm levels, which are machine-specific and should be in the instrument schedule.

## How to read it

- Identify sensor type and measuring axis.
- Find the alarm and trip levels in the monitoring settings.

## Drawing checklist

- State sensor type and axis
- Show loop or signal wiring
- Reference alarm and trip levels

## Important distinction

A vibration sensor produces a measurement signal; a vibration switch only changes a contact at a set level.

## Facts

- Output: Raw signal or 4-20 mA processed value
- Location: Bearing housing or shaft
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [AutoCAD Electrical: Instrumentation and sensors](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-773A36C3-44C6-43EB-9BD0-E0297816B9B2.htm) — Autodesk. Public AutoCAD Electrical instrumentation and sensor family.
- [Electrical and physical sensing functions](https://www.ti.com/technologies/sensing.html) — Texas Instruments. Public overview of electrical and physical sensing functions.

## Related references

- [Mechanical condition monitor](39-mechanical-condition-monitor.md)
- [Temperature measuring transducer](temperature-measuring-transducer.md)
- [ANSI/IEEE tachometer symbol](ansi-tachometer.md)

![Vibration sensor — original educational illustration](../artwork/svg/vibration-sensor.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
