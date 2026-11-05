# Isolated DC-to-DC converter

A DC/DC converter with an internal high-frequency transformer that separates input and output galvanically.

[Canonical reference](https://eloragrid.ai/symbols/isolated-dc-dc-converter) · [Structured record](../entries/isolated-dc-dc-converter.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

An isolated DC/DC converter uses a high-frequency transformer between its input and output stages, so the two DC systems have no conductive connection. Isolation lets the output be earthed differently from the input, for example a floating battery bus supplying an earthed control system, or keeps a fault on one side from reaching the other.
Drawings show the DC/DC box with a transformer mark or a pair of coupled coils inside, or a vertical double line across the box. The isolation voltage is a key rating and should be written beside it.
The symbol alone does not state the test voltage or whether the isolation is functional or reinforced for safety. Those properties decide whether the output can be treated as a separated circuit, so they must be read from the product data.

## How to read it

- A transformer mark inside the box shows isolation.
- Read the isolation rating rather than assuming safety separation.

## Drawing checklist

- State input and output voltages and isolation voltage.
- Show earthing on each side.
- Reference isolation class.

## Important distinction

An isolated converter separates input and output; a non-isolated buck or boost converter shares a common conductor.

## Facts

- Isolation element: High-frequency transformer
- Earthing: Each side can be earthed independently
- Key rating: Isolation test voltage
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Power topology selection and public topology tutorials](https://www.ti.com/video/series/power-topology-selection.html) — Texas Instruments. Public power topology tutorials including isolated converters.
- [DIN-rail power supply, buffer, redundancy and UPS families](https://www.emea.lambda.tdk.com/uk/products/din-rail) — TDK-Lambda. Public DC power supply and converter family context.

## Related references

- [DC-to-DC converter](dc-to-dc-converter.md)
- [Bidirectional DC-to-DC converter](bidirectional-dc-dc-converter.md)
- [Flyback converter topology](flyback-converter-topology.md)
- [Full-bridge DC converter topology](full-bridge-dc-converter-topology.md)

![Isolated DC-to-DC converter — original educational illustration](../artwork/svg/isolated-dc-dc-converter.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
