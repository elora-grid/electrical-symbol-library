# Breaker local-remote authority indication

Reports which operating location currently has command authority over the breaker.

[Canonical reference](https://eloragrid.ai/symbols/breaker-local-remote-authority-indication) · [Structured record](../entries/breaker-local-remote-authority-indication.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Control-selector position
Control authority status

## What it represents

Reports which operating location currently has command authority over the breaker. Breaker status indications describe the operating mechanism, the removable truck or the health of a supporting system. These signals are related but are not interchangeable: an open breaker can still have its truck connected to live bus contacts.
In a switchgear control schematic, the bay controller compares independent status contacts before displaying a position or allowing another operation. The signal labels explain which physical state each contact represents. For this reference, the drawing identifies “Control-selector position” at the input and “Control authority status” at the output. Authority selection is not a permission to bypass interlocks.
Keep contact reference conditions, terminal numbers and interpretation logic together. Distinguish a mechanically operated indication from a measured current or voltage condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Control-selector position. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Control authority status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Authority selection is not a permission to bypass interlocks.
- Keep contact reference conditions, terminal numbers and interpretation logic together. Distinguish a mechanically operated indication from a measured current or voltage condition.

## Drawing checklist

- Label the source and connection reference for control-selector position.
- Identify the destination and defined state of control authority status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Authority selection is not a permission to bypass interlocks.

## Important distinction

Authority selection is not a permission to bypass interlocks. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Control-selector position
- Output / connection: Control authority status
- Lookup label: BLAI is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for breaker position and status interfaces. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Normally open contact](normally-open-contact.md)
- [Breaker 52a auxiliary-contact interface](breaker-52a-auxiliary-contact-interface.md)

![Breaker local-remote authority indication — original educational illustration](../artwork/svg/breaker-local-remote-authority-indication.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
