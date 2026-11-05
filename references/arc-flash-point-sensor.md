# Arc-flash point light sensor

Light sensor in a switchgear compartment that detects the flash of an internal arc and signals an arc-flash relay.

[Canonical reference](https://eloragrid.ai/symbols/arc-flash-point-sensor) · [Structured record](../entries/arc-flash-point-sensor.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: Manufacturer.

## What it represents

A point light sensor is mounted inside a switchgear compartment, such as a breaker or cable compartment, and detects the intense light of an internal arc. It is wired or fibre-connected to an arc-flash relay that usually also checks for overcurrent before tripping, so light alone from an external source does not cause a trip.
The drawing should show which compartment each sensor watches, because the trip zone depends on it. The symbol does not show sensitivity, field of view or the self-supervision used to detect a disconnected sensor.

## How to read it

- Identify the compartment each sensor covers.
- Check whether trip needs light plus overcurrent.

## Drawing checklist

- Locate each sensor by compartment
- Show connection to the arc relay
- State trip logic

## Important distinction

A point sensor covers one compartment; a fibre loop sensor covers a long area such as a busbar run.

## Facts

- Detected quantity: Light from an internal arc
- Typical logic: Light combined with overcurrent
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [SEL-C804 multimode arc-flash detection fibre-optic cables](https://selinc.com/products/c804/) — Schweitzer Engineering Laboratories. Public manufacturer page describing point and fibre arc-flash light sensing.

## Related references

- [Arc-flash fibre loop sensor](arc-flash-fibre-loop-sensor.md)
- [Numerical protection relay (IED)](numerical-protection-relay.md)
- [Switchgear panel](switchgear-panel.md)

![Arc-flash point light sensor — original educational illustration](../artwork/svg/arc-flash-point-sensor.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
