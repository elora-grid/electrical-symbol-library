# Breaker spring-charge status interface

Carries the mechanism's stored-energy status into the control and indication system.

[Canonical reference](https://eloragrid.ai/symbols/breaker-spring-charge-status-interface) · [Structured record](../entries/breaker-spring-charge-status-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Spring-charge contact
Charged or discharged status

## What it represents

Carries the mechanism's stored-energy status into the control and indication system. Breaker status indications describe the operating mechanism, the removable truck or the health of a supporting system. These signals are related but are not interchangeable: an open breaker can still have its truck connected to live bus contacts.
In a switchgear control schematic, the bay controller compares independent status contacts before displaying a position or allowing another operation. The signal labels explain which physical state each contact represents. For this reference, the drawing identifies “Spring-charge contact” at the input and “Charged or discharged status” at the output. A charged spring contains stored mechanical energy.
Keep contact reference conditions, terminal numbers and interpretation logic together. Distinguish a mechanically operated indication from a measured current or voltage condition. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Spring-charge contact. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Charged or discharged status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A charged spring contains stored mechanical energy.
- Keep contact reference conditions, terminal numbers and interpretation logic together. Distinguish a mechanically operated indication from a measured current or voltage condition.

## Drawing checklist

- Label the source and connection reference for spring-charge contact.
- Identify the destination and defined state of charged or discharged status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: A charged spring contains stored mechanical energy.

## Important distinction

A charged spring contains stored mechanical energy. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Spring-charge contact
- Output / connection: Charged or discharged status
- Lookup label: BSSI is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for breaker position and status interfaces. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Normally open contact](normally-open-contact.md)
- [Breaker operation-count feedback](breaker-operation-count-feedback.md)

![Breaker spring-charge status interface — original educational illustration](../artwork/svg/breaker-spring-charge-status-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
