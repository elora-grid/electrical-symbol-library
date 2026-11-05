# Smoke detector plan symbol

Fire alarm plan symbol for a point smoke detector, drawn as a detector box with a smoke indication.

[Canonical reference](https://eloragrid.ai/symbols/iec-smoke-detector-plan-symbol) · [Structured record](../entries/iec-smoke-detector-plan-symbol.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: GA. Reference families: IEC.

Graphical convention: IEC. Smoke detector.

## What it represents

Point smoke detectors are drawn on fire alarm layouts as a square or circle with a smoke mark inside, such as wavy lines or the letter S, at their ceiling position. Each symbol is usually tagged with its loop and device address so the plan doubles as the commissioning record.
Spacing and coverage radius depend on ceiling height and the applicable fire detection code, so the plan is used to check coverage. Detectors near air supply grilles, in voids or in lift shafts need special attention and often appear with extra annotations.
The symbol does not tell you whether the detector is optical, ionisation or multi-sensor unless tagged. A separate GA object may record its physical installation point.

## How to read it

- Read the loop and address tag.
- Check spacing against coverage requirements.

## Drawing checklist

- Tag loop and address.
- State detector type.
- Note void or concealed locations needing indicators.

## Important distinction

A heat detector responds to temperature, not smoke; it uses a different internal mark.

## Facts

- Placement: Ceiling, within coverage radius
- Commissioning data: Loop and device address
- Exact standard graphic: Not reproduced here; confirm the form against IEC 60617 and the project legend

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context for installation plans; independently drawn here.
- [Electrical installation design methodology and references](https://www.electrical-installation.org/enwiki/General_rules_of_electrical_installation_design) — Schneider Electric — Electrical Installation Guide. Installation design context: life-safety systems are coordinated with the building electrical design.

## Related references

- [Smoke detector installation point](ga-smoke-detector-installation-point.md)
- [Fixed-temperature heat detector plan symbol](iec-heat-detector-plan-symbol.md)
- [Multi-sensor fire detector plan symbol](iec-multi-sensor-detector-plan-symbol.md)

![Smoke detector plan symbol — original educational illustration](../artwork/svg/iec-smoke-detector-plan-symbol.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
