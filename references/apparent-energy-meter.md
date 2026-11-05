# Apparent-energy meter

Integrating meter that totalises apparent energy in kVAh, used where tariffs charge on kVA rather than kW.

[Canonical reference](https://eloragrid.ai/symbols/apparent-energy-meter) · [Structured record](../entries/apparent-energy-meter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, Manufacturer.

## What it represents

An apparent-energy meter totalises volt-amperes over time. Some network tariffs and demand charges are based on kVA, so this register appears on supply-point single-line diagrams beside the kWh and kvarh registers of the revenue meter.
Apparent energy can be calculated in more than one way when harmonics or unbalance are present, for example arithmetically from each phase or vectorially from total watts and vars. The symbol does not say which method is used, and two meters with different methods can disagree.

## How to read it

- Check which calculation method the meter uses.
- Read with the kWh and kvarh registers at the same point.

## Drawing checklist

- State calculation method
- Show CT and VT ratios
- Give accuracy class

## Important distinction

A kVAh meter totalises apparent energy; a kWh meter totalises only the active part.

## Facts

- Integrated quantity: Apparent energy (kVAh)
- Typical use: kVA-based tariffs and demand charges
- Preview: Independent educational concept; consult the applicable standard and project legend for the exact graphic

## Public references

- [Power and energy measurement quantities](https://www.se.com/ph/en/faqs/FA343278/) — Schneider Electric. Public explanation of energy and power measurement quantities used by meters.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC context for graphical symbols used in diagrams; no IEC graphic is reproduced.

## Related references

- [Active-energy meter](active-energy-meter.md)
- [Reactive-energy meter](reactive-energy-meter.md)
- [Integrating instrument general symbol](integrating-instrument-general-symbol.md)

![Apparent-energy meter — original educational illustration](../artwork/svg/apparent-energy-meter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
