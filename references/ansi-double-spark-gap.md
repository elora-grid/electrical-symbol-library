# ANSI/IEEE Double spark gap form

IEEE-library form of double spark gap: a spark gap form with two gaps sharing a common electrode, used to protect two conductors against a common earth.

[Canonical reference](https://eloragrid.ai/symbols/ansi-double-spark-gap) · [Structured record](../entries/ansi-double-spark-gap.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEEE / ANSI, Manufacturer.

Graphical convention: IEEE / ANSI. Spark Gap, Double.

## What it represents

This reference locates double spark gap in Autodesk's IEEE-oriented miscellaneous family. The double spark gap places two gaps in one element, typically from each of two line conductors to a common centre electrode that is earthed. It protects a pair of conductors, such as a telecom pair, with a single component so that both lines are diverted together. The public library uses HFU1\_S00372 for its horizontal representation; this is a vendor block name, not an IEEE standards symbol number.
Use the surrounding circuit labels and the project legend to identify the intended operating condition and connection. Carry the same device reference into the schedule or equipment document so the symbol can be reconciled with its real terminals, function and operating limits.
The symbol does not state breakdown voltages or whether both gaps are matched. If one gap breaks down before the other, a transverse voltage can appear across the protected pair. Check the product data where balanced breakdown matters. Identify the common electrode connection to earth. A double spark gap protects two conductors to a common electrode; a single spark gap protects one path. The linked functional counterpart explains the same operating role in its own drawing context; agreement of every detailed convention mark is not asserted.

## How to read it

- Identify the common electrode connection to earth.
- Check breakdown matching between the two gaps.

## Drawing checklist

- Show both line connections and the common earth.
- State breakdown voltage.
- Keep the earth lead short.

## Important distinction

A double spark gap protects two conductors to a common electrode; a single spark gap protects one path.

## Facts

- Convention evidence: Autodesk IEEE Symbol Preview: Miscellaneous; published form: Spark Gap, Double.
- Public vendor block: HFU1\_S00372. Vendor library token, not an IEEE symbol number.
- Graphic cue: Two facing gaps sharing a centre electrode
- Publisher form: Spark Gap, Double (HFU1\_S00372 Autodesk identifier)
- Preview: Original educational illustration; consult the publisher and applicable standard for the exact graphic
- Artwork scope: Original educational geometry. Exact standard graphics, product ratings and terminal pinouts are not certified.

## Public references

- [Autodesk IEEE Symbol Preview — Miscellaneous](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-34282BFD-7B8E-48F3-A6ED-93ADBDDDFBD3.htm) — Autodesk. Public IEEE-oriented Miscellaneous table explicitly lists HFU1\_S00372 as Spark Gap, Double. This supports the vendor convention context, not reproduction of the publisher graphic.

## Related references

- [Double spark gap](iec-double-spark-gap.md)
- [Spark-gap protective element](spark-gap-protective-element.md)
- [ANSI/IEEE spark gap symbol](ansi-spark-gap.md)
- [Gas-discharge protection tube](gas-discharge-protection-tube.md)

![ANSI/IEEE Double spark gap form — original educational illustration](../artwork/svg/ansi-double-spark-gap.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
