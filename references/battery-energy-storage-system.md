# Battery energy storage system

A complete battery plant block combining batteries, power conversion and controls, shown as one source or sink on an SLD.

[Canonical reference](https://eloragrid.ai/symbols/battery-energy-storage-system) · [Structured record](../entries/battery-energy-storage-system.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI, Manufacturer.

## What it represents

A battery energy storage system is the full plant: battery racks, a bidirectional power conversion system, transformers, auxiliary supplies and a plant controller. On higher-level single-line diagrams it is shown as one block with a battery mark and a converter mark, connecting to the network through a breaker and often a step-up transformer.
The block is labelled with both power and energy ratings, for example MW and MWh, since the two together define how long the system can deliver rated output. More detailed drawings break the block down into racks, the conversion system and auxiliaries.
The symbol does not show usable energy after depth-of-discharge limits, degradation over life, or whether the converter is grid-forming. These figures, plus the auxiliary load which can be significant for cooling, come from the performance specification.

## How to read it

- Always read both the power and energy ratings.
- Check whether the block includes its own step-up transformer.

## Drawing checklist

- State MW, MWh and point of connection voltage.
- Show breaker, transformer and auxiliary supply.
- Reference converter control mode.

## Important distinction

A BESS block is the complete plant; a battery symbol is only the electrochemical store.

## Facts

- Ratings: Power and energy
- Contents: Batteries, PCS, controls, auxiliaries
- Preview: Independent educational illustration; not a product outline

## Public references

- [Battery energy storage and power conversion](https://www.eaton.com/sg/en-us/products/energy-storage.html) — Eaton. Public battery energy storage and power conversion context.
- [xStorage battery energy storage system](https://www.eaton.com/us/en-us/catalog/energy-storage/xstorage-battery-energy-storage-system.html) — Eaton. Public battery storage system documentation.

## Related references

- [Battery power conversion system](battery-power-conversion-system.md)
- [Battery rack](battery-rack.md)
- [Battery](battery.md)
- [Battery storage cabinet](battery-cabinet.md)

![Battery energy storage system — original educational illustration](../artwork/svg/battery-energy-storage-system.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
