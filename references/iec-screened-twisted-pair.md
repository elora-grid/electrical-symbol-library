# Screened twisted pair

Two conductors drawn twisted together inside a screen outline, as used for noise-sensitive signal and communication pairs.

[Canonical reference](https://eloragrid.ai/symbols/iec-screened-twisted-pair) · [Structured record](../entries/iec-screened-twisted-pair.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC.

Graphical convention: IEC. Twisted pair with individual screen.

## What it represents

The screened twisted pair combines two separate protections against interference. Twisting cancels magnetically induced voltage between the two cores, and the screen intercepts capacitive coupling from nearby power conductors. The form is typical for RS-485 links, 4 to 20 mA loops in noisy plant and resolver or encoder feedback pairs.
On a drawing each screened pair should be identifiable in the core allocation, because a multipair cable may contain several of them plus an overall screen. The symbol does not tell you the characteristic impedance or twist rate, which matter for data networks and must come from the cable specification.

## How to read it

- Confirm the pair belongs to the circuit it is drawn on, not split across two circuits.
- Check how the pair screen is terminated relative to any overall screen.

## Drawing checklist

- Allocate both cores of the pair to one signal circuit.
- Show the pair screen termination.
- Record cable impedance for data circuits.

## Important distinction

A screened twisted pair adds a shield; the plain twisted-pair indication shows twisting only and no screen.

## Facts

- Graphic cue: Crossed or twisted pair of lines inside a screen outline
- Typical use: Serial data, analogue loops and feedback devices
- Preview: Original educational illustration; consult the publisher and applicable standard for the exact graphic

## Public references

- [Autodesk IEC-60617 preview: Cable identification and twisted-pair annotation](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-37A08C35-43A3-484D-B0EB-0BBCBC4BE709.htm) — Autodesk. Public IEC-60617 preview family that includes the twisted-pair marker.
- [IEC-60617 symbol preview directory](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-7871E6EF-24D5-467E-9B74-321FEDC9DFDA.htm) — Autodesk. Public directory of IEC-oriented symbol families.

## Related references

- [Twisted-pair indication](iec-twisted-pair-indication.md)
- [Screened multi-conductor cable](iec-screened-multi-conductor-cable.md)
- [RS-485 transceiver](rs-485-transceiver.md)

![Screened twisted pair — original educational illustration](../artwork/svg/iec-screened-twisted-pair.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
