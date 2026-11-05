# Breaker withdrawn-position indication

Reports that the removable breaker is outside its normal connected operating position.

[Canonical reference](https://eloragrid.ai/symbols/breaker-withdrawn-position-indication) · [Structured record](../entries/breaker-withdrawn-position-indication.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Withdrawal detection
Withdrawn-element indication

## What it represents

Reports that the removable breaker is outside its normal connected operating position. Breaker status indications describe the operating mechanism, the removable truck or the health of a supporting system. These signals are related but are not interchangeable: an open breaker can still have its truck connected to live bus contacts.
In a switchgear control schematic, the bay controller compares independent status contacts before displaying a position or allowing another operation. The signal labels explain which physical state each contact represents. For this reference, the drawing identifies “Withdrawal detection” at the input and “Withdrawn-element indication” at the output. Withdrawal and safe access are separate conditions.
Keep contact reference conditions, terminal numbers and interpretation logic together. Distinguish a mechanically operated indication from a measured current or voltage condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Withdrawal detection. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Withdrawn-element indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Withdrawal and safe access are separate conditions.
- Keep contact reference conditions, terminal numbers and interpretation logic together. Distinguish a mechanically operated indication from a measured current or voltage condition.

## Drawing checklist

- Label the source and connection reference for withdrawal detection.
- Identify the destination and defined state of withdrawn-element indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Withdrawal and safe access are separate conditions.

## Important distinction

Withdrawal and safe access are separate conditions. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Withdrawal detection
- Output / connection: Withdrawn-element indication
- Lookup label: BWI is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for breaker position and status interfaces. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Normally open contact](normally-open-contact.md)
- [Breaker control-plug engaged indication](breaker-control-plug-engaged-indication.md)

![Breaker withdrawn-position indication — original educational illustration](../artwork/svg/breaker-withdrawn-position-indication.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
