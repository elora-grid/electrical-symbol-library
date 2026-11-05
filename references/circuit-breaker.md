# Circuit breaker

A switching device that can interrupt a circuit, with specified fault-interruption capability.

[Canonical reference](https://eloragrid.ai/symbols/circuit-breaker) · [Structured record](../entries/circuit-breaker.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A circuit-breaker representation identifies a device capable of interrupting its circuit under the operating conditions for which it is rated. The drawing should connect that device to its equipment identification, protection arrangement and control information. The graphical mark alone does not establish the current rating, breaking capacity or trip settings.
Breaker representations vary between drawing conventions and may include qualifiers for operating mechanism or protection. An SLD gives system position and major connections. A control schematic expands the close, trip, indication and auxiliary-contact circuits.

## How to read it

- Read device state according to the drawing legend, rather than assuming every open-looking mark means equipment is currently open.
- Keep the equipment tag, graphical symbol and ANSI device-function number 52 distinct.

## Drawing checklist

- Reference the voltage, current and breaking-capacity data.
- Identify poles and the applicable protection arrangement.
- Link the control circuit and auxiliary contacts.

## Important distinction

A disconnector provides isolation; it is not automatically a fault-interrupting circuit breaker. Check published device capabilities.

## Facts

- Related function number: 52 for an AC circuit breaker
- Device specification: Voltage, current, interruption and trip information
- Preview: Generic educational representation
- Public Autodesk reference names: HCB1, VCB1 (vendor identifiers, not IEC symbol IDs)

## Public references

- [Circuit-breaker symbol variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-DB1548A3-A4D3-47E5-86AC-37000DC57D80.htm) — Autodesk. Public breaker categories and qualifying features.
- [Fundamental characteristics of a circuit-breaker](https://www.electrical-installation.org/enwiki/Fundamental_characteristics_of_a_circuit-breaker) — Schneider Electric — Electrical Installation Guide. Manufacturer explanation of circuit-breaker characteristics.
- [Public reference table of ANSI device-function numbers](https://www.se.com/es/es/faqs/FA34639/) — Schneider Electric. Public reference for device-function number 52.

## Related references

- [Disconnector](disconnector.md)
- [Load-break switch](load-break-switch.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)
- [Normally open contact](normally-open-contact.md)

![Circuit breaker — original educational illustration](../artwork/svg/circuit-breaker.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
