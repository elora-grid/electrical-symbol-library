# Mechanism maintenance-alarm interface

Brings a documented mechanism maintenance indication into the station alarm system.

[Canonical reference](https://eloragrid.ai/symbols/mechanism-maintenance-alarm-interface) · [Structured record](../entries/mechanism-maintenance-alarm-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Mechanism monitoring output
Maintenance alarm

## What it represents

Brings a documented mechanism maintenance indication into the station alarm system. A stored-energy breaker mechanism has charging, release, indication and supervision functions. Motor supply, stored spring energy and the ability to complete an opening operation are separate drawing concerns.
In a switchgear panel, a charging motor replenishes the mechanism after an operation. Supervisory contacts let the controller report an incomplete charge or repeated charging demand before an operator requests another operation. For this reference, the drawing identifies “Mechanism monitoring output” at the input and “Maintenance alarm” at the output. An alarm is a maintenance input rather than a diagnosis.
Show the individual contacts and the relevant motor or release circuit. Supply voltage, charging time, operating duty and permissible alarms must follow the chosen mechanism documentation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Mechanism monitoring output. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Maintenance alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- An alarm is a maintenance input rather than a diagnosis.
- Show the individual contacts and the relevant motor or release circuit. Supply voltage, charging time, operating duty and permissible alarms must follow the chosen mechanism documentation.

## Drawing checklist

- Label the source and connection reference for mechanism monitoring output.
- Identify the destination and defined state of maintenance alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: An alarm is a maintenance input rather than a diagnosis.

## Important distinction

An alarm is a maintenance input rather than a diagnosis. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Mechanism monitoring output
- Output / connection: Maintenance alarm
- Lookup label: MMI is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for stored-energy mechanism supervision. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Three-phase motor](motor.md)
- [Breaker spring-charging motor circuit](breaker-spring-charging-motor-circuit.md)

![Mechanism maintenance-alarm interface — original educational illustration](../artwork/svg/mechanism-maintenance-alarm-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
