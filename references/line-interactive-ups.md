# Line-interactive UPS

A UPS that passes mains to the load through a voltage-correcting stage and switches to its bidirectional inverter on failure.

[Canonical reference](https://eloragrid.ai/symbols/line-interactive-ups) · [Structured record](../entries/line-interactive-ups.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

A line-interactive UPS supplies the load from mains in normal operation, using an automatic voltage regulation stage, often a tapped autotransformer, to correct sags and swells. One bidirectional converter charges the battery while mains is present and inverts from the battery when mains fails, with a short transfer of a few milliseconds.
Drawings show the mains path through a voltage regulating element and a transfer switch to the output, with the bidirectional converter and battery connected alongside the output. It is common for small to medium ratings serving IT equipment and controls.
Output frequency follows the mains in normal operation, so the load is not protected from frequency variations, which matters on generator supplies. The symbol does not show the transfer time or the voltage correction range.

## How to read it

- Look for a tapped transformer or regulation element in the mains path.
- Expect a short transfer on mains failure.

## Drawing checklist

- State VA rating, transfer time and correction range.
- Show battery and converter connection.
- Reference generator compatibility.

## Important distinction

A line-interactive UPS corrects voltage on the mains path; an offline UPS passes mains without correction until it transfers.

## Facts

- Normal load path: Mains with voltage regulation
- Converter: One bidirectional stage
- Transfer: A few milliseconds
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [DC UPS, AC UPS and capacitor buffer modules](https://www.phoenixcontact.com/en-gb/products/uninterruptible-power-supplies-ups) — Phoenix Contact. Public UPS function context.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context for converters and switches.

## Related references

- [Online double-conversion UPS](online-double-conversion-ups.md)
- [Offline standby UPS](offline-standby-ups.md)
- [AC uninterruptible power supply](ac-uninterruptible-power-supply.md)
- [Single-phase autotransformer](single-phase-autotransformer.md)

![Line-interactive UPS — original educational illustration](../artwork/svg/line-interactive-ups.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
