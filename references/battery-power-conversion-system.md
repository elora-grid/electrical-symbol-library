# Battery power conversion system

The bidirectional inverter stage of a battery plant that charges and discharges the DC battery from the AC network.

[Canonical reference](https://eloragrid.ai/symbols/battery-power-conversion-system) · [Structured record](../entries/battery-power-conversion-system.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI, Manufacturer.

## What it represents

The power conversion system is the bidirectional converter that sits between the battery DC bus and the AC network in a storage plant. It charges the battery by rectifying AC and discharges it by inverting DC, under the direction of a plant controller that sets active and reactive power or operates in a grid-forming mode.
Drawings show a converter box with both AC and DC marks and a bidirectional energy-flow arrow, a DC breaker or switch on the battery side, and an AC breaker, filter and often a medium-voltage skid transformer on the network side. Several PCS units may share one transformer.
The symbol does not tell you whether the unit can black-start a dead bus, how much overload it can supply or how it limits fault current. Those features drive protection settings and must be read from the converter specification.

## How to read it

- Look for the bidirectional energy-flow qualifier to confirm charge and discharge capability.
- Check the transformer and filter on the AC side.

## Drawing checklist

- State kW, kVA and DC voltage window.
- Show DC and AC switching and filters.
- Reference control modes and black-start capability.

## Important distinction

A PCS is a utility or commercial storage converter; an inverter-charger is a smaller low-voltage unit with an integral AC transfer relay.

## Facts

- Energy flow: Bidirectional
- Ratings: kW, kVA and DC voltage window
- Network side: Filter and often a skid transformer
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Battery energy storage and power conversion](https://www.eaton.com/sg/en-us/products/energy-storage.html) — Eaton. Public power conversion context for battery storage.
- [Autodesk IEC-60617 preview: Energy-flow qualifiers](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-2039C5DD-1C01-4D77-AD97-584052C53D75.htm) — Autodesk. Public IEC-context energy-flow qualifier family used for the bidirectional mark.

## Related references

- [Battery energy storage system](battery-energy-storage-system.md)
- [Bidirectional-energy-flow qualifier](iec-bidirectional-energy-flow-qualifier.md)
- [Bidirectional inverter-charger](bidirectional-inverter-charger.md)
- [Grid-forming inverter](grid-forming-inverter.md)

![Battery power conversion system — original educational illustration](../artwork/svg/battery-power-conversion-system.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
