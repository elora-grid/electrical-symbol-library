# Fuse

An overcurrent protective element that interrupts a circuit by melting its fuse link.

[Canonical reference](https://eloragrid.ai/symbols/fuse) · [Structured record](../entries/fuse.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A fuse representation identifies a protective fuse link in a circuit. Its rating and operating characteristics are additional information: a generic fuse mark does not specify utilization category, current, voltage, breaking capacity or coordination with other protective equipment.
Fuses appear in main power circuits, transformer circuits and control supplies. Some assemblies add indication or auxiliary contacts. A drawing should distinguish the protective link from the holder, disconnect mechanism and any indication function.

## How to read it

- Follow the protected circuit and identify how many fuse links are represented.
- Treat associated indication contacts as separate schematic elements.

## Drawing checklist

- Reference the fuse type and rating.
- Identify the holder or fuse-switch assembly when relevant.
- Keep auxiliary indication and replacement information linked.

## Important distinction

A fuse and a fused disconnector may share protective components, but the assembly also includes a switching or isolation function.

## Facts

- Primary role: Overcurrent protection
- Selection data: Type, voltage, current and breaking capacity
- Assembly details: Holder and switching functions are separate
- Public Autodesk reference names: HFU1, VFU1 (vendor identifiers, not IEC symbol IDs)

## Public references

- [Fuse and neutral-link symbols](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-E540AE83-CEE1-4CA9-B43C-B19004025EAA.htm) — Autodesk. Public fuse, auxiliary-contact and indication categories.
- [Elementary switching devices](https://www.electrical-installation.org/enwiki/Elementary_switching_devices) — Schneider Electric — Electrical Installation Guide. Manufacturer explanation of fuse categories.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Load-break switch](load-break-switch.md)
- [Terminal connection](terminal.md)
- [Voltage transformer](voltage-transformer.md)

![Fuse — original educational illustration](../artwork/svg/fuse.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
