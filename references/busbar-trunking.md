# Busbar trunking

A physical enclosed distribution system with model-specific sections and fittings.

[Canonical reference](https://eloragrid.ai/objects/busbar-trunking) · [Structured record](../entries/busbar-trunking.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: GA. Reference families: Manufacturer.

## What it represents

Busbar trunking transports and distributes electrical power using a selected enclosed conductor system. The physical GA route can include straight sections, joints, bends and connection units defined by the manufacturer. The SLD represents the electrical connections rather than those physical details.

## How to read it

- Match the route and connection units to the selected product system.
- Link physical endpoints to the electrical equipment references.

## Drawing checklist

- Reference the selected system and current product drawings.
- Identify joints, fittings and connection interfaces.
- Coordinate the electrical and physical endpoints.

## Important distinction

An SLD busbar line is an electrical node; busbar trunking is an actual distribution assembly with defined geometry.

## Facts

- Object type: Generic equipment reference
- Dimensions: Use the exact manufacturer/model drawing

## Public references

- [Canalis busbar trunking systems](https://www.se.com/ww/en/work/products/master-ranges/line-series/) — Schneider Electric. Public manufacturer busbar-trunking system description.
- [Official CAD drawings and BIM resources](https://www.se.com/us/en/work/support/resources-and-tools/cad-drawings/) — Schneider Electric. Official equipment CAD directory.

## Related references

- [Busbar](busbar.md)
- [Switchboard](switchboard.md)
- [Transformer envelope](transformer-envelope.md)

GA objects have no standalone 2D icon. Use the canonical equipment page for current manufacturer drawing and 3D preview availability.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
