# Running circuit breaker

Connects a machine to the supply or connection used for normal running.

[Canonical reference](https://eloragrid.ai/protection-functions/42-running-circuit-breaker) · [Structured record](../entries/42-running-circuit-breaker.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Connects a machine to the supply or connection used for normal running.
In a drafting package, connect this reference to the normal operating supply and machine terminals. The associated drawing should trace the running connection and start/run interlocks; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the normal operating supply and machine terminals.
- Trace the running connection and start/run interlocks.

## Drawing checklist

- Label the normal operating supply and machine terminals.
- Cross-reference the running connection and start/run interlocks.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

The running connection may be distinct from the starting circuit numbered 6.

## Facts

- ANSI / IEEE function number: 42
- Drawing context: The normal operating supply and machine terminals
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Three-phase motor](motor.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Running circuit breaker — original educational illustration](../artwork/svg/42-running-circuit-breaker.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
