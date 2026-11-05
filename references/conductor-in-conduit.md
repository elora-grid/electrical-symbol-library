# Conductor in conduit

A conductor or circuit line drawn inside a conduit outline, showing that the wiring is enclosed in a pipe or tube run.

[Canonical reference](https://eloragrid.ai/symbols/conductor-in-conduit) · [Structured record](../entries/conductor-in-conduit.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, GA. Reference families: IEC, IEEE / ANSI.

## What it represents

This representation places a conductor inside a pair of parallel lines or a tube outline to show that it is run in conduit. It appears on installation layouts and some single-line diagrams where the containment type affects derating, mechanical protection and fill calculations.
The symbol does not give conduit size, material or the number of circuits sharing the conduit. Those items come from the containment schedule. When several circuits share one conduit, grouping derating applies to all of them, so a reader should check whether more than one circuit line enters the same outline.

## How to read it

- Count how many circuits are drawn within the same conduit outline.
- Check the containment schedule for size and material.

## Drawing checklist

- Tag the conduit with its size and material.
- List the circuits carried in each conduit.
- Apply grouping derating where several circuits share it.

## Important distinction

Conduit is enclosed containment; cable tray or ladder is open support and has different derating and fill rules.

## Facts

- Graphic cue: Conductor line enclosed between conduit outline lines
- Affects: Cable derating, fill and mechanical protection
- Preview: Original educational illustration; consult the publisher and applicable standard for the exact graphic

## Public references

- [Cable tray and ladder systems](https://www.eaton.com/us/en-us/products/support-systems/cable-tray-and-ladder-systems.html) — Eaton. Manufacturer containment product context for cable support and enclosure types.
- [Electrical installation design methodology and references](https://www.electrical-installation.org/enwiki/General_rules_of_electrical_installation_design) — Schneider Electric — Electrical Installation Guide. Installation design methodology covering wiring systems.

## Related references

- [Cable ladder / tray](cable-ladder.md)
- [Perforated cable tray](ga-perforated-cable-tray.md)
- [Cable duct bank](ga-cable-duct-bank.md)

![Conductor in conduit — original educational illustration](../artwork/svg/conductor-in-conduit.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
