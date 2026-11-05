# Bypass-isolation transfer switch

An automatic transfer switch paired with a manual bypass switch so the ATS can be isolated for maintenance without losing the load.

[Canonical reference](https://eloragrid.ai/symbols/bypass-isolation-transfer-switch) · [Structured record](../entries/bypass-isolation-transfer-switch.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

A bypass-isolation transfer switch combines an automatic transfer switch with a parallel manual bypass switch. The bypass can connect the load directly to either source while the automatic switch is withdrawn or isolated, so maintenance and testing can proceed without interrupting critical loads such as hospital or emergency circuits.
Single-line diagrams draw the automatic changeover in one path and a manually operated changeover in parallel, with isolating contacts on the automatic unit. Interlocks prevent the bypass from connecting the load to a source different from the one the automatic switch is using at the moment of bypass.
The symbol does not show the interlock sequence or whether the bypass operation is load-break. Operators need the switching procedure to use it safely.

## How to read it

- Identify the isolating contacts that allow the automatic unit to be withdrawn.
- Bypass and automatic paths should be interlocked.

## Drawing checklist

- State ratings for both paths.
- Show isolation contacts and interlocks.
- Reference bypass procedure.

## Important distinction

A bypass-isolation switch adds a manual path around the ATS; a plain ATS must be de-energised for maintenance.

## Facts

- Paths: Automatic and manual bypass
- Purpose: Maintenance without load loss
- Interlocks: Source matching between paths
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Transfer switch fundamentals](https://www.cummins.com/sites/default/files/2026-04/2023-sep-transfer-switch-fundamentals.pdf) — Cummins. Public transfer switch fundamentals.
- [Generator switchgear and paralleling controls](https://www.cummins.com/en-na/generators/products/switchgear) — Cummins. Public generator switchgear context.

## Related references

- [Automatic transfer switch](automatic-transfer-switch.md)
- [Manual transfer switch](manual-transfer-switch.md)
- [Transfer-switch assembly](transfer-switch.md)
- [UPS maintenance bypass](ups-maintenance-bypass.md)

![Bypass-isolation transfer switch — original educational illustration](../artwork/svg/bypass-isolation-transfer-switch.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
