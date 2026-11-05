# Rate-of-change relay

Responds to how quickly a monitored quantity changes rather than only its absolute magnitude.

[Canonical reference](https://eloragrid.ai/protection-functions/7-rate-of-change-relay) · [Structured record](../entries/7-rate-of-change-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Responds to how quickly a monitored quantity changes rather than only its absolute magnitude.
In a drafting package, connect this reference to the measured quantity and its engineering units. The associated drawing should trace the rate-sensitive alarm or trip output; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the measured quantity and its engineering units.
- Trace the rate-sensitive alarm or trip output.

## Drawing checklist

- Label the measured quantity and its engineering units.
- Cross-reference the rate-sensitive alarm or trip output.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Device 7 is a general rate-of-change reference; 81R specifically denotes frequency rate of change in cited relay families.

## Facts

- ANSI / IEEE function number: 7
- Drawing context: The measured quantity and its engineering units
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Frequency protection](81-frequency.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Rate-of-change relay — original educational illustration](../artwork/svg/7-rate-of-change-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
