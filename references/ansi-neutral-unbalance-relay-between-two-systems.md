# ANSI/IEEE Neutral-unbalance relay between two polyphase systems form

IEEE-library reference for neutral-unbalance relay between two polyphase systems, with its operating meaning, connection notes and public vendor block identity.

[Canonical reference](https://eloragrid.ai/symbols/ansi-neutral-unbalance-relay-between-two-systems) · [Structured record](../entries/ansi-neutral-unbalance-relay-between-two-systems.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic, SLD. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. In Neutral between 2 Multi-Phase Systems.

## What it represents

This reference locates neutral-unbalance relay between two polyphase systems in Autodesk's IEEE-oriented current protection relays family. This form shows a current relay in the conductor that joins the neutral points of two star-connected polyphase systems. A familiar application is the double-star capacitor bank, where a CT in the link between the two star points detects unbalance caused by failed capacitor units. The public library uses HCR1F33 for its horizontal representation; this is a vendor block name, not an IEEE standards symbol number.
Trace the measured quantity or initiating control signal separately from the output contacts. The device tag links the sensing or operating element to the controlled circuit; settings, reset behaviour and the actual terminal arrangement belong in the selected equipment documentation.
In a healthy balanced arrangement the link carries little current, so the relay setting is a small fraction of phase current and must allow for natural unbalance. The symbol does not tell you the alarm and trip stages or the compensation for inherent unbalance; those are in the bank protection settings. Identify the two star points joined by the measured link. This relay measures the link between two star points; a neutral-current relay measures one neutral path to earth or to the supply. The linked functional counterpart explains the same operating role in its own drawing context; agreement of every detailed convention mark is not asserted.

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

- Convention evidence: Autodesk IEEE Symbol Preview: Current Protection Relays; published form: In Neutral between 2 Multi-Phase Systems.
- Public vendor block: HCR1F33. Vendor library token, not an IEEE symbol number.
- Measured quantity: Current in a neutral interconnection between two systems
- Preview: Independent educational concept; consult the publisher and applicable standard for the exact graphic
- Artwork scope: Original educational geometry. Exact standard graphics, product ratings and terminal pinouts are not certified.

## Public references

- [Autodesk IEEE Symbol Preview: Current Protection Relays](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-EC11EC4D-374C-4191-9534-C802D3932711.htm) — Autodesk. Public IEEE-oriented Current Protection Relays table explicitly lists HCR1F33 as In Neutral between 2 Multi-Phase Systems. This supports the vendor convention context, not reproduction of the publisher graphic.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC context for graphical symbols used in diagrams; no IEC graphic is reproduced.

## Related references

- [Neutral-unbalance relay between two polyphase systems](neutral-unbalance-relay-between-two-systems.md)
- [Neutral-current measuring relay](neutral-current-relay.md)
- [Voltage or current balance relay](60-voltage-or-current-balance-relay.md)
- [Current transformer](current-transformer.md)

![ANSI/IEEE Neutral-unbalance relay between two polyphase systems form — original educational illustration](../artwork/svg/ansi-neutral-unbalance-relay-between-two-systems.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
