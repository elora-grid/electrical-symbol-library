# Breaker trip-cause indication

Retains the originating protection or control cause associated with the recorded opening event.

[Canonical reference](https://eloragrid.ai/symbols/breaker-trip-cause-indication) · [Structured record](../entries/breaker-trip-cause-indication.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Trip initiations and event time
Trip-cause record

## What it represents

Retains the originating protection or control cause associated with the recorded opening event. Breaker status indications describe the operating mechanism, the removable truck or the health of a supporting system. These signals are related but are not interchangeable: an open breaker can still have its truck connected to live bus contacts.
In a switchgear control schematic, the bay controller compares independent status contacts before displaying a position or allowing another operation. The signal labels explain which physical state each contact represents. For this reference, the drawing identifies “Trip initiations and event time” at the input and “Trip-cause record” at the output. Cause indication is distinct from opening confirmation.
Keep contact reference conditions, terminal numbers and interpretation logic together. Distinguish a mechanically operated indication from a measured current or voltage condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Trip initiations and event time. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Trip-cause record. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Cause indication is distinct from opening confirmation.
- Keep contact reference conditions, terminal numbers and interpretation logic together. Distinguish a mechanically operated indication from a measured current or voltage condition.

## Drawing checklist

- Label the source and connection reference for trip initiations and event time.
- Identify the destination and defined state of trip-cause record.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Cause indication is distinct from opening confirmation.

## Important distinction

Cause indication is distinct from opening confirmation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Trip initiations and event time
- Output / connection: Trip-cause record
- Lookup label: BTI is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for breaker position and status interfaces. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Normally open contact](normally-open-contact.md)
- [Breaker local-remote authority indication](breaker-local-remote-authority-indication.md)

![Breaker trip-cause indication — original educational illustration](../artwork/svg/breaker-trip-cause-indication.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
