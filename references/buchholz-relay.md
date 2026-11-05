# Buchholz relay

Gas-and-oil actuated relay in the pipe to the conservator, giving alarm on gas build-up and trip on oil surge.

[Canonical reference](https://eloragrid.ai/symbols/buchholz-relay) · [Structured record](../entries/buchholz-relay.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic, SLD. Reference families: IEC, Manufacturer.

## What it represents

A Buchholz relay is fitted in the pipe between an oil-filled transformer tank and its conservator. Slow gas accumulation from minor internal faults operates an alarm float, while a rapid surge of oil from a serious internal fault operates a trip element, so the schematic shows two separate contacts.
On single-line diagrams it may appear only as a label on the transformer, while the control schematic shows its alarm and trip contacts wired to annunciation and the transformer trip relay. The symbol does not show the gas sampling procedure or the test arrangement used during maintenance.

## How to read it

- Identify separate alarm and trip contacts.
- Follow the trip contact to the transformer lockout or trip relay.

## Drawing checklist

- Show alarm contact
- Show trip contact
- Reference transformer trip relay

## Important distinction

A Buchholz relay detects gas and oil movement; a sudden pressure relay responds to rapid tank pressure rise.

## Facts

- Location: Pipe between tank and conservator
- Outputs: Gas alarm and oil-surge trip
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [ETR-4000 and ETR-5000 transformer protection function tables](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/transformer-relays.html) — Eaton. Public transformer protection context in which mechanical transformer protections are wired.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC context for graphical symbols used in diagrams; no IEC graphic is reproduced.

## Related references

- [Power transformer](power-transformer.md)
- [Pressure switch or relay](63-pressure-switch-or-relay.md)
- [Winding temperature indicator](winding-temperature-indicator.md)

![Buchholz relay — original educational illustration](../artwork/svg/buchholz-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
