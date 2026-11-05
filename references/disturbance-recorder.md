# Disturbance recorder

Recorder that captures analogue waveforms and binary signals before and after a trigger for fault analysis.

[Canonical reference](https://eloragrid.ai/symbols/disturbance-recorder) · [Structured record](../entries/disturbance-recorder.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI, Manufacturer.

## What it represents

A disturbance recorder captures sampled current and voltage waveforms together with breaker and protection contact states when a trigger occurs. Pre-fault and post-fault data let engineers check how protection performed, so the recorder is drawn with its analogue inputs from CTs and VTs and its binary inputs from trip and position contacts.
Many protection relays now include this function, so a separate recorder symbol usually indicates a dedicated substation-wide unit. The symbol does not show trigger conditions, sample rate or record length, and records are commonly exchanged in a standard file format that should be named in the specification.

## How to read it

- Trace analogue inputs to their CTs and VTs.
- List binary inputs and their sources.

## Drawing checklist

- List analogue channels
- List binary channels
- State trigger and record length

## Important distinction

A disturbance recorder stores high-rate waveforms around an event; a sequence-of-events recorder stores timestamped contact changes only.

## Facts

- Inputs: Analogue currents and voltages plus binary signals
- Record: Pre- and post-trigger waveforms
- Preview: Functional illustration of the device role; not a product footprint or certified standard graphic

## Public references

- [Relion 620: functions, codes and symbols](https://techdoc.relays.protection-control.abb/r/620-series-IEC-60870-5-103-Point-List-Manual/2.0-FP1-IEC/en-US/Functions-codes-and-symbols) — ABB. Public relay function list including disturbance recording within protection IEDs.
- [PowerLogic ION9000 user manual](https://www.se.com/us/en/download/document/26719674/) — Schneider Electric. Public meter manual describing measurement, logging and recording features of a revenue and power-quality meter.

## Related references

- [Sequence-of-events recorder](sequence-of-events-recorder.md)
- [Numerical protection relay (IED)](numerical-protection-relay.md)
- [Oscilloscope](oscilloscope.md)

![Disturbance recorder — original educational illustration](../artwork/svg/disturbance-recorder.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
