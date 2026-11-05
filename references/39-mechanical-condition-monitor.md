# Mechanical condition monitor

Converts a monitored mechanical condition into an electrical alarm or protection signal.

[Canonical reference](https://eloragrid.ai/protection-functions/39-mechanical-condition-monitor) · [Structured record](../entries/39-mechanical-condition-monitor.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Converts a monitored mechanical condition into an electrical alarm or protection signal.
In a drafting package, connect this reference to the mechanical sensor and measurement channel. The associated drawing should trace the monitor output and machine shutdown logic; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.

## How to read it

- Identify the mechanical sensor and measurement channel.
- Trace the monitor output and machine shutdown logic.

## Drawing checklist

- Label the mechanical sensor and measurement channel.
- Cross-reference the monitor output and machine shutdown logic.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Mechanical monitoring is not electrical current-unbalance protection, even when both protect the same machine.

## Facts

- ANSI / IEEE function number: 39
- Drawing context: The mechanical sensor and measurement channel
- Application scope: Protection or apparatus-control role; exact implementation is defined by the equipment documentation.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Generator package](generator-package.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Mechanical condition monitor — original educational illustration](../artwork/svg/39-mechanical-condition-monitor.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
