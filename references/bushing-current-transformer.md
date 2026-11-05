# Bushing current transformer

Toroidal CT mounted around a transformer or breaker bushing, often with a tapped multi-ratio secondary.

[Canonical reference](https://eloragrid.ai/symbols/bushing-current-transformer) · [Structured record](../entries/bushing-current-transformer.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI, Manufacturer.

## What it represents

A bushing CT is a toroidal core and secondary slipped over the bushing of a power transformer, generator or dead-tank circuit breaker. The bushing conductor is the primary, and several CTs may be stacked on one bushing for differential, overcurrent and metering duties.
Bushing CTs are often multi-ratio, with taps on the secondary, and only the selected tap should be wired to the relay. The symbol shows the location at the bushing, so the reader must check which side of the breaker or transformer the CT sits on to understand the protection zone overlap.

## How to read it

- Identify which side of the device each bushing CT sits on.
- Check the selected tap on multi-ratio CTs.

## Drawing checklist

- State selected tap and full ratio
- Show position relative to the breaker or winding
- Mark polarity

## Important distinction

A bushing CT uses the bushing conductor as its primary; a free-standing CT has its own insulated primary.

## Facts

- Mounting: Over a transformer or breaker bushing
- Common feature: Multi-ratio tapped secondary
- Preview: Independent educational concept; consult the applicable standard and project legend for the exact graphic

## Public references

- [Indoor current and voltage transformers](https://www.abb.com/gb/en/areas/electrification/medium-voltage/grid-components/core-components/indoor-instrument-transformers) — ABB. Public manufacturer overview of indoor current and voltage instrument transformers.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. IEEE graphic-symbol standards context; no standard glyph is reproduced.

## Related references

- [Multi-core current transformer](multi-core-current-transformer.md)
- [Tapped-secondary current transformer](tapped-secondary-current-transformer.md)
- [Power transformer](power-transformer.md)

![Bushing current transformer — original educational illustration](../artwork/svg/bushing-current-transformer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
