# DC circuit breaker

Interrupts or switches a direct-current power circuit using a breaker selected for DC duty.

[Canonical reference](https://eloragrid.ai/protection-functions/72-dc-circuit-breaker) · [Structured record](../entries/72-dc-circuit-breaker.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Interrupts or switches a direct-current power circuit using a breaker selected for DC duty.
In a drafting package, connect this reference to the DC source, polarity and breaker poles. The associated drawing should trace the DC breaker operating circuits and downstream loads; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the DC source, polarity and breaker poles.
- Trace the DC breaker operating circuits and downstream loads.

## Drawing checklist

- Label the DC source, polarity and breaker poles.
- Cross-reference the DC breaker operating circuits and downstream loads.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Device 72 identifies a DC breaker; AC breaker 52 cannot be substituted without checking the equipment's DC ratings and duty.

## Facts

- ANSI / IEEE function number: 72
- Drawing context: The DC source, polarity and breaker poles
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Battery](battery.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![DC circuit breaker — original educational illustration](../artwork/svg/72-dc-circuit-breaker.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
