# IEC timing-relay form: on/off delay

Timing-relay form form: ON/OFF Delay.

[Canonical reference](https://eloragrid.ai/symbols/iec-timing-relay-form-on-off-delay) · [Structured record](../entries/iec-timing-relay-form-on-off-delay.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

Graphical convention: IEC. ON/OFF Delay.

## What it represents

A timing relay separates the initiating signal from the later change of an output contact. The contact state, delayed transition and reset condition are independent: a timer may have immediate contacts alongside delayed contacts under the same device tag. This entry identifies the on/off delay form in the publisher's IEC-context family.
A control sequence may start an auxiliary before enabling the main load, or keep a fan running after a stop request. Trace supply, trigger and output separately, then draw a timing chart that includes what happens when the trigger ends before a delay has elapsed. Both operating and return transitions carry a delay. Show the two timing values and the condition that starts each interval.
The symbol does not supply the time setting, retriggering rule or power-loss behaviour. A three-terminal timing form also needs its actual manufacturer terminal mapping; the vendor name alone does not define a universal pinout.

## How to read it

- Both operating and return transitions carry a delay. Show the two timing values and the condition that starts each interval.
- The symbol does not supply the time setting, retriggering rule or power-loss behaviour. A three-terminal timing form also needs its actual manufacturer terminal mapping; the vendor name alone does not define a universal pinout.

## Drawing checklist

- Identify the initiating supply or control signal.
- Label delayed and immediate output transitions separately.
- Reference timing settings, reset conditions and the device timing chart.

## Important distinction

This entry adds the on/off delay detail to the broader timing-relay form family. The symbol does not supply the time setting, retriggering rule or power-loss behaviour. A three-terminal timing form also needs its actual manufacturer terminal mapping; the vendor name alone does not define a universal pinout.

## Facts

- Drawing form: ON/OFF Delay
- Public vendor block names: HCR1OOD / VCR1OOD. Autodesk identifiers, not standards database IDs.
- Drawing purpose: timing-relay form
- Graphic scope: Independently authored educational illustration; not certified standard geometry, a terminal pinout or a product footprint.

## Public references

- [AutoCAD Electrical: Time-delay relays](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-DA927086-EEAF-48CB-B9B1-634A4B48C8C7.htm) — Autodesk. Public Time Delay Relays table explicitly lists HCR1OOD / VCR1OOD with this operating or connection form. Vendor graphics are linked, not copied.

## Related references

- [On-delay timer relay](on-delay-timer-relay.md)
- [Off-delay timer relay](off-delay-timer-relay.md)
- [Relay coil](relay-coil.md)

![IEC timing-relay form: on/off delay — original educational illustration](../artwork/svg/iec-timing-relay-form-on-off-delay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
