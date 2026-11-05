# Float and boost battery charger

A rectifier charger that holds a stationary battery at float voltage and can apply a higher boost or equalise voltage.

[Canonical reference](https://eloragrid.ai/symbols/float-boost-battery-charger) · [Structured record](../entries/float-boost-battery-charger.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A float and boost charger is the rectifier that maintains a stationary battery, typically for switchgear tripping supplies, telecom or a microgrid DC bus. In float mode it supplies the standing DC load and a small trickle current, while boost or equalise mode raises the voltage to recharge the battery quickly after a discharge or to equalise lead-acid cells.
Drawings show a rectifier block with an AC input breaker, DC output to the battery and the DC distribution board, and often a blocking diode or dropping diode chain to keep load voltage within limits during boost. Alarm contacts for charger failure, earth fault and low voltage are drawn on the control schematic.
The symbol does not state the current limit, whether the charger alone can carry the full load without the battery, or temperature compensation of float voltage. These matter for sizing and for battery life, so they must be in the specification.

## How to read it

- Look for voltage-dropping diodes that protect loads during boost charging.
- Check whether two chargers share one battery for redundancy.

## Drawing checklist

- State float and boost voltages and current rating.
- Show AC supply, battery and load connections.
- Reference alarms and temperature compensation.

## Important distinction

A station charger is a power rectifier supplying load and battery; a battery charger controller is an integrated circuit inside smaller equipment.

## Facts

- Modes: Float, boost or equalise
- Supplies: Battery and standing DC load
- Typical alarms: Charger fail, earth fault, low voltage
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Skylla-IP65 official product and documents](https://www.victronenergy.com/chargers/skylla-ip65) — Victron Energy. Public battery charger documentation context.
- [DC UPS, AC UPS and capacitor buffer modules](https://www.phoenixcontact.com/en-gb/products/uninterruptible-power-supplies-ups) — Phoenix Contact. Public DC supply and UPS function context.

## Related references

- [Battery charger controller](battery-charger-controller.md)
- [ANSI/IEEE battery symbol](ansi-battery.md)
- [Battery charger](ga-battery-charger.md)
- [DC uninterruptible power supply](dc-uninterruptible-power-supply.md)

![Float and boost battery charger — original educational illustration](../artwork/svg/float-boost-battery-charger.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
