# Sequence-of-events recorder

Recorder that timestamps changes of state on many binary inputs so the order of operations can be reconstructed.

[Canonical reference](https://eloragrid.ai/symbols/sequence-of-events-recorder) · [Structured record](../entries/sequence-of-events-recorder.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

A sequence-of-events recorder monitors breaker auxiliary contacts, protection trip outputs, alarms and other binary signals, and stores each change with an accurate timestamp. After an incident the list shows which device operated first, which is often impossible to tell from alarms alone.
Timestamp resolution and time synchronisation are what make the record useful. The symbol does not show the time source, such as a GPS clock, or the debounce settings on each input, and without synchronisation records from different devices cannot be merged reliably.

## How to read it

- Identify the time synchronisation source.
- Check which contacts are wired as inputs.

## Drawing checklist

- List monitored inputs
- Show time source
- State resolution and debounce

## Important distinction

An SOE recorder logs binary changes in time order; a disturbance recorder captures analogue waveforms.

## Facts

- Inputs: Binary contacts and signals
- Key requirement: Synchronised timestamps
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [SEL 2022 Product and Solution Guide: published protection function tables](https://selinc.com/api/download/136012) — Schweitzer Engineering Laboratories. Public product and function guide including event recording and time synchronisation.

## Related references

- [Disturbance recorder](disturbance-recorder.md)
- [Numerical protection relay (IED)](numerical-protection-relay.md)
- [Clock indication](iec-clock-indication.md)

![Sequence-of-events recorder — original educational illustration](../artwork/svg/sequence-of-events-recorder.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
