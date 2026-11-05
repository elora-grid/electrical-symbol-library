# RCD-protected socket outlet

Plan mark for a socket outlet with residual-current protection built into the accessory itself.

[Canonical reference](https://eloragrid.ai/symbols/iec-rcd-protected-socket-outlet) · [Structured record](../entries/iec-rcd-protected-socket-outlet.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: GA. Reference families: IEC.

Graphical convention: IEC. Socket outlet with residual-current device.

## What it represents

Some outlets include a residual-current device in the accessory so that protection is provided at the point of use. Plans show this by tagging the outlet with RCD or a small residual-current mark, letting the electrician select a protected accessory instead of relying on the distribution board.
This approach is used for single outdoor outlets, refurbishment work where the board cannot take additional RCDs, and outlets used for portable tools. The plan symbol should be read with the board schedule so the designer can avoid double protection or check discrimination between the outlet RCD and an upstream device.
The mark does not state the RCD type, rated residual current or test arrangement. A plain outlet on an RCD-protected circuit is protected at the board and is drawn without this tag.

## How to read it

- Distinguish outlet-integral protection from protection at the board.
- Look for the RCD type in the specification, not on the plan.

## Drawing checklist

- State rated residual operating current and RCD type.
- Check discrimination with upstream residual-current devices.
- Show the test button accessibility if mounted high.

## Important distinction

An outlet on a circuit protected by a residual-current circuit breaker is drawn plainly; this form puts the RCD in the outlet.

## Facts

- Protection location: Inside the outlet accessory
- Related US form: GFCI receptacle
- Exact standard graphic: Not reproduced here; confirm the form against IEC 60617 and the project legend

## Public references

- [Form factors of residual-current devices](https://www.electrical-installation.org/enwiki/Form_factors_of_RCDs) — Schneider Electric — Electrical Installation Guide. Explains the physical forms residual-current protection can take, including socket-outlet integration.
- [Residual current device categories](https://www.se.com/au/en/faqs/FAQ000218859/) — Schneider Electric. Manufacturer explanation of residual-current device types and categories.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC committee context for graphical symbols used in diagrams and installation documents; not a source of reproduced artwork.

## Related references

- [Residual-current circuit breaker](residual-current-circuit-breaker.md)
- [Weatherproof socket outlet](iec-weatherproof-socket-outlet.md)
- [ANSI GFCI duplex receptacle plan symbol](ansi-gfci-duplex-receptacle.md)

![RCD-protected socket outlet — original educational illustration](../artwork/svg/iec-rcd-protected-socket-outlet.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
