# Rectification failure relay

Detects failure or abnormal operation in a rectifier arrangement.

[Canonical reference](https://eloragrid.ai/protection-functions/58-rectification-failure-relay) · [Structured record](../entries/58-rectification-failure-relay.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: SLD, Schematic. Reference families: IEEE / ANSI.

## What it represents

Detects failure or abnormal operation in a rectifier arrangement.
In a drafting package, connect this reference to the rectifier monitoring circuit and DC output reference. The associated drawing should trace the failure alarm or associated excitation trip path; the number identifies the role and does not specify the terminal arrangement, ratings or operating settings.
This designation is useful when reading machine and legacy control drawings. Retain the documented function on an existing drawing and consult the original equipment manual before assigning it to a new design.

## How to read it

- Identify the rectifier monitoring circuit and DC output reference.
- Trace the failure alarm or associated excitation trip path.

## Drawing checklist

- Label the rectifier monitoring circuit and DC output reference.
- Cross-reference the failure alarm or associated excitation trip path.
- Identify the device tag, manual revision and logic drawing that define this implementation.

## Important distinction

Rectification failure supervision differs from a general DC undervoltage function.

## Facts

- ANSI / IEEE function number: 58
- Drawing context: The rectifier monitoring circuit and DC output reference
- Application scope: Specialist or legacy machine-control use; interpret with the equipment legend.

## Public references

- [ANSI device-number and suffix reference table](https://selinc.com/pt/products/tables/ansi/) — Schweitzer Engineering Laboratories. Public manufacturer number/name association. Drafting explanations are independently written.
- [IEEE C37.2-2022: power-system device function numbers](https://ieeexplore.ieee.org/document/9984140) — IEEE. Normative device-number publication; exact edition wording and compliance require the licensed standard.

## Related references

- [Power converter / inverter](power-converter.md)
- [AC circuit breaker](52-ac-circuit-breaker.md)

![Rectification failure relay — original educational illustration](../artwork/svg/58-rectification-failure-relay.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
