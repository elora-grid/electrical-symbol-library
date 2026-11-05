# Phase-sequence indicator

Instrument that shows whether three-phase supply rotation is positive or reversed before motors are run or sources paralleled.

[Canonical reference](https://eloragrid.ai/symbols/phase-sequence-indicator) · [Structured record](../entries/phase-sequence-indicator.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

## What it represents

A phase-sequence indicator connects to all three phases and shows whether rotation is L1-L2-L3 or reversed. It is used when commissioning motors, generators and supply changes, because wrong rotation reverses motors and prevents correct paralleling.
The instrument gives a check at one moment and does not protect anything on its own. If permanent protection against reversed rotation is needed, a phase-sequence monitoring relay with contacts must be shown instead of, or as well as, the indicator.

## How to read it

- Confirm all three phases are connected in the stated order.
- Check whether a protective relay is also required.

## Drawing checklist

- Show phase connections
- State expected rotation
- Reference commissioning check

## Important distinction

A phase-sequence indicator only displays rotation; a phase monitoring relay acts on incorrect rotation or loss of phase.

## Facts

- Inputs: Three phase voltages
- Output: Display only
- Preview: Independent educational concept; consult the applicable standard and project legend for the exact graphic

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC context for graphical symbols used in diagrams; no IEC graphic is reproduced.

## Related references

- [Phase-loss monitoring relay](phase-loss-monitoring-relay.md)
- [Phase-sequence or voltage-balance protection](47-phase-sequence-or-voltage-balance-protection.md)
- [Synchronoscope](synchronoscope.md)

![Phase-sequence indicator — original educational illustration](../artwork/svg/phase-sequence-indicator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
