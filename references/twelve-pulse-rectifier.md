# Twelve-pulse rectifier

Two six-pulse bridges fed from star and delta transformer windings 30 degrees apart, cancelling the lowest harmonics.

[Canonical reference](https://eloragrid.ai/symbols/twelve-pulse-rectifier) · [Structured record](../entries/twelve-pulse-rectifier.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

A twelve-pulse rectifier feeds two six-pulse bridges from transformer secondaries displaced by 30 electrical degrees, usually one star and one delta winding. The two bridge outputs are combined in series or in parallel with an interphase reactor, and the 5th and 7th harmonic currents cancel on the primary side.
The single-line diagram shows a three-winding rectifier transformer with star and delta secondaries, each feeding a rectifier block, and the two DC outputs joining. It is used for large UPS rectifiers, electrolysers, traction substations and some drive front ends.
Cancellation only works when the two bridges share load equally and the supply is balanced. The symbol does not show residual 11th and 13th harmonics or the effect of transformer impedance mismatch, so a harmonic study is still required.

## How to read it

- Look for a three-winding transformer with star and delta secondaries.
- Check whether the bridges are connected in series or parallel on the DC side.

## Drawing checklist

- State transformer vector groups and phase shift.
- Show both bridges and DC connection.
- Reference expected harmonic spectrum.

## Important distinction

A twelve-pulse rectifier uses two phase-shifted bridges; a six-pulse rectifier uses one bridge and has larger 5th and 7th harmonics.

## Facts

- Bridges: Two six-pulse
- Phase shift: 30 degrees between secondaries
- Lowest cancelled harmonics: 5th and 7th
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [AutoCAD Electrical: Three-phase transformer connections](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-EB13DB13-01EE-4541-BED7-19B9001BE8FC.htm) — Autodesk. Public three-phase transformer connection symbol family for star and delta secondaries.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context for converters.

## Related references

- [Three-winding transformer](three-winding-transformer.md)
- [Thyristor phase-controlled rectifier](thyristor-phase-controlled-rectifier.md)
- [Three-phase bridge rectifier](three-phase-bridge-rectifier.md)
- [Star-star-delta three-winding transformer](star-star-delta-three-winding-transformer.md)

![Twelve-pulse rectifier — original educational illustration](../artwork/svg/twelve-pulse-rectifier.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
