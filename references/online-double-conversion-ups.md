# Online double-conversion UPS

A UPS whose rectifier and inverter carry the load continuously, with the battery on the DC link and a static bypass.

[Canonical reference](https://eloragrid.ai/symbols/online-double-conversion-ups) · [Structured record](../entries/online-double-conversion-ups.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

In an online double-conversion UPS the load is always supplied by the inverter. The rectifier converts incoming AC to DC, the battery floats on the DC link, and the inverter produces a regulated output that is independent of input voltage and frequency variations. When the input fails, the battery simply takes over the DC link with no transfer.
Single-line diagrams show rectifier and inverter blocks in series with the battery connected between them, a static bypass switch in parallel, and often a separate bypass input and an external maintenance bypass. Output isolation transformers may also be shown.
The double-conversion path costs a few per cent in efficiency and some units offer an eco mode that runs on bypass, which changes the protection the load actually receives. The symbol does not show which mode is set, battery autonomy or the bypass source arrangement.

## How to read it

- Look for separate rectifier and bypass inputs; they may come from different boards.
- Check whether eco mode is enabled.

## Drawing checklist

- State kVA, kW and battery autonomy.
- Show static bypass and maintenance bypass.
- Reference operating mode.

## Important distinction

An online UPS powers the load through the inverter all the time; a line-interactive UPS passes mains to the load and only inverts during disturbances.

## Facts

- Load path: Rectifier, DC link, inverter
- Transfer on input failure: None
- Bypass: Static and maintenance
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [DC UPS, AC UPS and capacitor buffer modules](https://www.phoenixcontact.com/en-gb/products/uninterruptible-power-supplies-ups) — Phoenix Contact. Public UPS function context.
- [Multilevel NPC converter application context](https://www.infineon.com/product-information/sic-modules-for-ups-design-and-efficiency-guide) — Infineon Technologies. Public UPS converter design context.

## Related references

- [AC uninterruptible power supply](ac-uninterruptible-power-supply.md)
- [Line-interactive UPS](line-interactive-ups.md)
- [Static transfer switch](static-transfer-switch.md)
- [AC UPS cabinet](ga-ac-ups-cabinet.md)

![Online double-conversion UPS — original educational illustration](../artwork/svg/online-double-conversion-ups.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
