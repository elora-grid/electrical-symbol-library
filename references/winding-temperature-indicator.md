# Winding temperature indicator

Transformer indicator that adds a CT-heated thermal image to top-oil temperature to estimate winding hot-spot temperature.

[Canonical reference](https://eloragrid.ai/symbols/winding-temperature-indicator) · [Structured record](../entries/winding-temperature-indicator.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic, SLD. Reference families: IEC, Manufacturer.

## What it represents

A winding temperature indicator estimates transformer winding hot-spot temperature, which cannot easily be measured directly. A sensor in the top-oil pocket is heated by a small element fed from a CT on the load current, so the reading rises with both oil temperature and load, and its contacts control fans and give alarm and trip.
The schematic should show the CT feeding the heater, the calibration resistor and each contact stage. The symbol does not show the thermal gradient setting, which must be adjusted to the transformer heat-run data for the reading to be meaningful.

## How to read it

- Trace the CT circuit feeding the thermal image heater.
- Identify contact stages for cooling, alarm and trip.

## Drawing checklist

- Show heater CT
- List contact stages
- Reference gradient setting

## Important distinction

A WTI estimates winding hot-spot with a thermal image; an oil temperature indicator reads oil temperature only.

## Facts

- Inputs: Top-oil temperature plus CT-fed heater
- Outputs: Cooling, alarm and trip contacts
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [ETR-4000 and ETR-5000 transformer protection function tables](https://www.eaton.com/us/en-us/catalog/electrical-circuit-protection/transformer-relays.html) — Eaton. Public transformer protection context including thermal functions.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC context for graphical symbols used in diagrams; no IEC graphic is reproduced.

## Related references

- [Temperature indicator](temperature-indicator.md)
- [Buchholz relay](buchholz-relay.md)
- [Thermal protection](49-thermal-protection.md)

![Winding temperature indicator — original educational illustration](../artwork/svg/winding-temperature-indicator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
