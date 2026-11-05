# Three-phase motor

An electrical motor load connected to its switching and protective equipment.

[Canonical reference](https://eloragrid.ai/symbols/motor) · [Structured record](../entries/motor.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A motor representation identifies an electrical machine operating as a load in the stated system arrangement. Connection count, motor type and additional winding or rotor detail can change the representation. Its nameplate and equipment schedule provide the selected machine data.
The SLD places the motor and its feeder equipment. A schematic shows the controller, coil supply, protection interfaces and auxiliary functions. A simple circle and motor label do not establish a complete motor-starting or protective arrangement.

## How to read it

- Follow the feeder back to its switching and protective devices.
- Read the documented motor connection and starting arrangement.

## Drawing checklist

- Reference motor rating and connection data.
- Identify the starter or control arrangement.
- Cross-reference auxiliary and protection circuits.

## Important distinction

A contactor switches the motor circuit. Motor protection and short-circuit interruption may be provided by additional specified equipment.

## Facts

- Representation: Electrical machine load
- Connection detail: Motor-specific
- Feeder equipment: Separate switching and protection
- Public Autodesk reference names: HMO13, VMO13 (vendor identifiers, not IEC symbol IDs)

## Public references

- [Three-phase motor symbol variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-385CBE83-33A3-4314-913E-3B59A6D05F22.htm) — Autodesk. Public three-phase motor variants.
- [Elementary switching devices](https://www.electrical-installation.org/enwiki/Elementary_switching_devices) — Schneider Electric — Electrical Installation Guide. Manufacturer description of contactor and protective roles.

## Related references

- [Contactor](contactor.md)
- [Circuit breaker](circuit-breaker.md)
- [Thermal protection](49-thermal-protection.md)
- [Relay coil](relay-coil.md)

![Three-phase motor — original educational illustration](../artwork/svg/motor.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
