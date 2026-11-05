# Neutral-unbalance relay between two polyphase systems

Relay form measuring current in a link joining the star points of two polyphase systems, such as split capacitor banks.

[Canonical reference](https://eloragrid.ai/symbols/neutral-unbalance-relay-between-two-systems) · [Structured record](../entries/neutral-unbalance-relay-between-two-systems.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic, SLD. Reference families: IEC, Manufacturer.

## What it represents

This form shows a current relay in the conductor that joins the neutral points of two star-connected polyphase systems. A familiar application is the double-star capacitor bank, where a CT in the link between the two star points detects unbalance caused by failed capacitor units.
In a healthy balanced arrangement the link carries little current, so the relay setting is a small fraction of phase current and must allow for natural unbalance. The symbol does not tell you the alarm and trip stages or the compensation for inherent unbalance; those are in the bank protection settings.

## How to read it

- Identify the two star points joined by the measured link.
- Look for separate alarm and trip stages.

## Drawing checklist

- Show the interconnecting link and CT
- State alarm and trip settings
- Note inherent unbalance compensation

## Important distinction

This relay measures the link between two star points; a neutral-current relay measures one neutral path to earth or to the supply.

## Facts

- Measured quantity: Current in a neutral interconnection between two systems
- Publisher reference token: HCR1F33 (Autodesk identifier; not an IEC database ID)
- Preview: Independent educational concept; consult the publisher and applicable standard for the exact graphic

## Public references

- [AutoCAD Electrical: Current monitoring relays](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-E0DDA638-4664-4F1E-B191-29A4C40C4A0A.htm) — Autodesk. Public AutoCAD Electrical relay listing that names the In Neutral between 2 Multi-Phase Systems block; the illustration is independently drawn.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC context for graphical symbols used in diagrams; no IEC graphic is reproduced.

## Related references

- [Neutral-current measuring relay](neutral-current-relay.md)
- [Voltage or current balance relay](60-voltage-or-current-balance-relay.md)
- [Current transformer](current-transformer.md)

![Neutral-unbalance relay between two polyphase systems — original educational illustration](../artwork/svg/neutral-unbalance-relay-between-two-systems.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
