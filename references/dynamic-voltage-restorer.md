# Dynamic voltage restorer

A series converter that injects a corrective voltage through a transformer to ride a sensitive load through voltage sags.

[Canonical reference](https://eloragrid.ai/symbols/dynamic-voltage-restorer) · [Structured record](../entries/dynamic-voltage-restorer.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

A dynamic voltage restorer is connected in series between the supply and a sensitive load through an injection transformer. When the supply voltage sags, a converter fed from a DC store or from the supply itself injects the missing voltage so the load sees an almost constant voltage, typically for sags lasting up to a few seconds.
Single-line diagrams show an injection transformer with its primary in series with the feeder, its secondary connected to a converter, and a DC capacitor or storage element. A bypass switch around the injection transformer allows the device to be taken out of service.
A DVR corrects sags but does not supply the load during a full outage, unlike a UPS. The symbol does not show the maximum sag depth or duration it can correct, which depends on the stored energy and converter rating.

## How to read it

- The series transformer, not a shunt connection, identifies a DVR.
- Check the bypass arrangement for maintenance.

## Drawing checklist

- State load rating, sag depth and duration corrected.
- Show injection transformer and bypass.
- Reference energy store.

## Important distinction

A DVR injects series voltage for sags; a STATCOM injects shunt current to support bus voltage.

## Facts

- Connection: Series, through injection transformer
- Corrects: Voltage sags and swells
- Outage support: None
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context for transformers and converters.
- [Bidirectional three-/single-phase AC/DC PFC and inverter application note](https://www.infineon.com/assets/row/public/documents/24/42/infineon-ac-dc-pfc-11-kw-high-efficiency-high-density-bidirectional-three-single-phase-inverter-applicationnotes-en.pdf) — Infineon Technologies. Public converter stage context.

## Related references

- [Static synchronous compensator](statcom.md)
- [Online double-conversion UPS](online-double-conversion-ups.md)
- [Power transformer](power-transformer.md)

![Dynamic voltage restorer — original educational illustration](../artwork/svg/dynamic-voltage-restorer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
