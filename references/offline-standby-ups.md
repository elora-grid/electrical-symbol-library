# Offline standby UPS

A UPS that passes raw mains straight to the load and starts its inverter only when mains is lost.

[Canonical reference](https://eloragrid.ai/symbols/offline-standby-ups) · [Structured record](../entries/offline-standby-ups.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

An offline or standby UPS connects the load directly to mains through a transfer relay. A separate charger keeps the battery topped up, and the inverter starts only when mains fails, at which point the relay transfers the load. Transfer typically takes several milliseconds to around ten milliseconds.
Drawings show the mains path through a changeover contact to the output, with the charger, battery and inverter forming a parallel branch that connects to the other contact position. These units are mainly small desktop or control panel units.
The load sees mains disturbances and the transfer gap, and the inverter waveform may be stepped rather than sinusoidal. The symbol does not show waveform quality, transfer time or whether surge filtering is included.

## How to read it

- The normal path has no conversion stage.
- Check output waveform type for sensitive loads.

## Drawing checklist

- State VA rating and transfer time.
- Show transfer relay, charger and inverter.
- Reference output waveform.

## Important distinction

An offline UPS gives no correction until it transfers; an online UPS conditions the output continuously.

## Facts

- Normal load path: Direct mains
- Inverter: Starts on mains failure
- Typical size: Small single-phase units
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [DC UPS, AC UPS and capacitor buffer modules](https://www.phoenixcontact.com/en-gb/products/uninterruptible-power-supplies-ups) — Phoenix Contact. Public UPS function context.
- [DIN-rail power supply, buffer, redundancy and UPS families](https://www.emea.lambda.tdk.com/uk/products/din-rail) — TDK-Lambda. Public DIN-rail UPS family context.

## Related references

- [Line-interactive UPS](line-interactive-ups.md)
- [Online double-conversion UPS](online-double-conversion-ups.md)
- [AC uninterruptible power supply](ac-uninterruptible-power-supply.md)

![Offline standby UPS — original educational illustration](../artwork/svg/offline-standby-ups.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
