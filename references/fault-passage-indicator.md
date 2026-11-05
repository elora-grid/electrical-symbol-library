# Fault passage indicator

Device on an MV cable or overhead feeder that shows whether fault current has passed its location, to speed fault finding.

[Canonical reference](https://eloragrid.ai/symbols/fault-passage-indicator) · [Structured record](../entries/fault-passage-indicator.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: Manufacturer.

## What it represents

A fault passage indicator senses current at a point on a medium-voltage feeder and shows, with a flag or LED, when fault current has passed. Operators follow the indicators along a feeder to find the faulted section between the last operated indicator and the first unoperated one.
Indicators may sense phase faults, earth faults or both, and many can signal remotely to SCADA. The symbol does not show the sensing method, reset method or thresholds, which must suit the network earthing and feeder load to avoid false or missed indications.

## How to read it

- Check whether the indicator covers phase faults, earth faults or both.
- Note any remote signalling output.

## Drawing checklist

- State fault types detected
- State reset method
- Reference SCADA signal

## Important distinction

A fault passage indicator only signals; a protection relay trips a breaker.

## Facts

- Location: MV cable or overhead feeder
- Output: Local flag or LED and optional remote signal
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [Secondary-distribution switchgear and ring main units](https://new.abb.com/medium-voltage/switchgear/secondary-distribution) — ABB. Public secondary-distribution switchgear and ring main unit context where fault indicators are fitted.

## Related references

- [Ring main unit](ring-main-unit.md)
- [Earth-fault current relay](earth-fault-current-relay.md)
- [Core-balance current transformer](core-balance-current-transformer.md)

![Fault passage indicator — original educational illustration](../artwork/svg/fault-passage-indicator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
