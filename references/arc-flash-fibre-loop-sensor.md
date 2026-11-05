# Arc-flash fibre loop sensor

Bare optical fibre routed through switchgear that picks up arc light anywhere along its length.

[Canonical reference](https://eloragrid.ai/symbols/arc-flash-fibre-loop-sensor) · [Structured record](../entries/arc-flash-fibre-loop-sensor.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: Manufacturer.

## What it represents

A fibre loop sensor is an unjacketed optical fibre routed through busbar chambers or along switchgear lines. Light from an arc anywhere along its length enters the fibre and reaches the arc-flash relay, so one loop can cover a large area that would need many point sensors.
Because the whole length is sensitive, a loop identifies the zone but not the exact compartment, and the trip zone therefore follows the routing. Loop length affects sensitivity, and the symbol does not show routing, length or the loop-check function, which should be recorded on the layout and schematic.

## How to read it

- Read the routing drawing to see which compartments the loop crosses.
- Check that the trip zone matches the loop coverage.

## Drawing checklist

- Show loop routing
- State loop length
- Reference relay channel

## Important distinction

A fibre loop covers a long area without locating the arc precisely; a point sensor watches one compartment.

## Facts

- Sensing element: Bare optical fibre
- Coverage: Entire routed length
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [SEL-C804 multimode arc-flash detection fibre-optic cables](https://selinc.com/products/c804/) — Schweitzer Engineering Laboratories. Public manufacturer page describing fibre arc-flash sensors for large areas such as bus compartments.

## Related references

- [Arc-flash point light sensor](arc-flash-point-sensor.md)
- [Numerical protection relay (IED)](numerical-protection-relay.md)
- [Busbar trunking](busbar-trunking.md)

![Arc-flash fibre loop sensor — original educational illustration](../artwork/svg/arc-flash-fibre-loop-sensor.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
