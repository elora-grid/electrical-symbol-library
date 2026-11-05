# ANSI/IEEE Minimum-current monitoring relay form

IEEE-library form of minimum-current monitoring relay: a minimum-current relay operates according to a configured low-current condition.

[Canonical reference](https://eloragrid.ai/symbols/ansi-minimum-current-monitoring-relay) · [Structured record](../entries/ansi-minimum-current-monitoring-relay.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Minimum Current Protection.

## What it represents

This reference locates minimum-current monitoring relay in Autodesk's IEEE-oriented current protection relays family. A minimum-current relay operates according to a configured low-current condition. Control drawings must identify whether it supervises an operating load, a permissive or another circuit. The public library uses HCR1F26 for its horizontal representation; this is a vendor block name, not an IEEE standards symbol number.
Trace the measured quantity or initiating control signal separately from the output contacts. The device tag links the sensing or operating element to the controlled circuit; settings, reset behaviour and the actual terminal arrangement belong in the selected equipment documentation.
Check how the relay handles zero current during intentional shutdown. Low current can be an intentional stopped state; the control logic defines when it is abnormal. The linked functional counterpart explains the same operating role in its own drawing context; agreement of every detailed convention mark is not asserted.

## How to read it

- Check how the relay handles zero current during intentional shutdown.
- The preview is an original explanation of this function. Match the actual drawing convention to its legend and the selected equipment documentation.

## Drawing checklist

- Name supervised circuit
- Reference enable condition
- State threshold and delay

## Important distinction

Low current can be an intentional stopped state; the control logic defines when it is abnormal.

## Facts

- Convention evidence: Autodesk IEEE Symbol Preview: Current Protection Relays; published form: Minimum Current Protection.
- Public vendor block: HCR1F26. Vendor library token, not an IEEE symbol number.
- Drawing role: Monitoring element
- Identifier status: The short label is a functional lookup label, not an assigned IEC or IEEE symbol number. Any separately listed Autodesk code is a verified vendor block name.
- Artwork scope: Original educational geometry. Exact standard graphics, product ratings and terminal pinouts are not certified.

## Public references

- [Autodesk IEEE Symbol Preview: Current Protection Relays](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-EC11EC4D-374C-4191-9534-C802D3932711.htm) — Autodesk. Public IEEE-oriented Current Protection Relays table explicitly lists HCR1F26 as Minimum Current Protection. This supports the vendor convention context, not reproduction of the publisher graphic.

## Related references

- [Minimum-current monitoring relay](minimum-current-monitoring-relay.md)
- [Current transformer](current-transformer.md)
- [Relay coil](relay-coil.md)

![ANSI/IEEE Minimum-current monitoring relay form — original educational illustration](../artwork/svg/ansi-minimum-current-monitoring-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
