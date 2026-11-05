# Supercapacitor bank

A series-parallel array of double-layer capacitor cells storing energy for very fast, short-duration power delivery.

[Canonical reference](https://eloragrid.ai/symbols/supercapacitor-bank) · [Structured record](../entries/supercapacitor-bank.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

A supercapacitor bank uses electric double-layer capacitor cells, each rated at only a few volts, connected in series strings to reach a useful DC voltage. It can charge and discharge at very high current for hundreds of thousands of cycles, but stores far less energy than a battery of similar size.
Drawings use a polarised capacitor symbol repeated or annotated with the series and parallel cell count, together with a balancing circuit and a DC/DC converter. In microgrids the bank smooths fast power fluctuations, supports converter DC links or covers the gap before a generator starts.
Supercapacitor voltage falls linearly as energy is drawn out, so usable energy depends on the converter minimum voltage. The symbol does not show cell balancing, temperature limits or the converter range needed to extract the stored energy.

## How to read it

- Check the series cell count and the balancing method.
- Usable energy depends on the voltage window, not the full rated voltage.

## Drawing checklist

- State rated voltage, capacitance and string arrangement.
- Show balancing and the DC/DC converter.
- Reference minimum operating voltage.

## Important distinction

A supercapacitor bank delivers short high-power bursts; a battery bank delivers lower power for much longer.

## Facts

- Storage form: Electrostatic, double-layer
- Voltage profile: Falls linearly with discharge
- Cycle life: Very high
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Capacitive component symbols](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-74580D46-0731-41A6-918D-2DB419114207.htm) — Autodesk. Public capacitive component symbol family context.
- [DC UPS, AC UPS and capacitor buffer modules](https://www.phoenixcontact.com/en-gb/products/uninterruptible-power-supplies-ups) — Phoenix Contact. Public capacitor buffer and DC backup function context.

## Related references

- [Capacitor buffer module](capacitor-buffer-module.md)
- [Flywheel energy storage](flywheel-energy-storage.md)
- [Bidirectional DC-to-DC converter](bidirectional-dc-dc-converter.md)
- [Capacitor](capacitor.md)

![Supercapacitor bank — original educational illustration](../artwork/svg/supercapacitor-bank.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
