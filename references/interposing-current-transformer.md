# Interposing current transformer

Auxiliary CT inserted in a CT secondary circuit to correct ratio, phase shift or provide isolation for a relay.

[Canonical reference](https://eloragrid.ai/symbols/interposing-current-transformer) · [Structured record](../entries/interposing-current-transformer.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic, SLD. Reference families: IEC, Manufacturer.

## What it represents

An interposing CT sits between a main CT and a relay or meter. It corrects ratio mismatch, provides phase-shift compensation for transformer differential schemes, or isolates circuits, and it was standard in electromechanical differential protection before relays could compensate internally.
The interposing CT adds burden to the main CT and can introduce its own errors at high fault current. The symbol shows its presence, but its ratio, connection (star or delta) and taps must be shown beside it because they decide whether the differential scheme balances.

## How to read it

- Read the ratio and connection group of the interposing CT.
- Check the added burden on the main CT.

## Drawing checklist

- State ratio and taps
- Show connection group
- Reference relay balance calculation

## Important distinction

An interposing CT is an auxiliary in the secondary circuit; a main CT carries the primary circuit current.

## Facts

- Purpose: Ratio matching, phase correction or isolation
- Location: CT secondary circuit
- Preview: Independent educational concept; consult the applicable standard and project legend for the exact graphic

## Public references

- [Current transformer symbol variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-40AAEF4A-AC3F-4B3D-90A5-A9E0707C1241.htm) — Autodesk. Public AutoCAD Electrical current transformer family used for context; this variant is independently drawn.
- [Transformer vector-group interpretation in protection application](https://techdoc.relays.protection-control.abb/r/SSC600-and-SSC600-SW-Technical-Manual/1.5/en-US/TR2PTDF-Operation-principle?contentId=_tVeRElk4P5wHpFgF2sYvw) — ABB. Public explanation of vector-group compensation in transformer protection.

## Related references

- [Summation current transformer](summation-current-transformer.md)
- [Percentage-biased differential current relay](percentage-differential-current-relay.md)
- [Current transformer](current-transformer.md)

![Interposing current transformer — original educational illustration](../artwork/svg/interposing-current-transformer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
