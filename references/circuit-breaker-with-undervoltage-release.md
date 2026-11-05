# Circuit breaker with undervoltage release

A breaker undervoltage release changes the breaker operating condition when its control voltage falls below the specified range.

[Canonical reference](https://eloragrid.ai/symbols/circuit-breaker-with-undervoltage-release) · [Structured record](../entries/circuit-breaker-with-undervoltage-release.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEC, Manufacturer.

## What it represents

A breaker undervoltage release changes the breaker operating condition when its control voltage falls below the specified range. Schematics show the release supply and any associated permissive or trip circuits.

## How to read it

- Follow the control supply separately from the breaker main poles.
- The preview is an original explanation of this function. Match the actual drawing convention to its legend and the selected equipment documentation.

## Drawing checklist

- Identify release voltage
- Show release terminals
- Cross-reference loss-of-supply behaviour

## Important distinction

An undervoltage release responds to its own supply; a voltage protection relay can measure another circuit and issue a separate trip.

## Facts

- Drawing role: Circuit interruption
- Representation scope: Functional concept; not an official standard graphic or a product footprint
- Public vendor block reference: HCB11Q33, VCB11Q33 (Autodesk identifiers; not IEC symbol numbers)
- Identifier status: The short label is a functional lookup label, not an assigned IEC or IEEE symbol number. Any separately listed Autodesk code is a verified vendor block name.

## Public references

- [Circuit-breaker symbol variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-DB1548A3-A4D3-47E5-86AC-37000DC57D80.htm) — Autodesk. Public documentation of this equipment function or named vendor variant; the illustration is independently authored and is not the source graphic.
- [Fundamental characteristics of a circuit-breaker](https://www.electrical-installation.org/enwiki/Fundamental_characteristics_of_a_circuit-breaker) — Schneider Electric — Electrical Installation Guide. Public documentation of this equipment function or named vendor variant; the illustration is independently authored and is not the source graphic.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Circuit breaker with undervoltage release — original educational illustration](../artwork/svg/circuit-breaker-with-undervoltage-release.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
