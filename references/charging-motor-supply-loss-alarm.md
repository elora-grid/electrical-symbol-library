# Charging-motor supply-loss alarm

Reports loss of the electrical supply serving the charging motor.

[Canonical reference](https://eloragrid.ai/symbols/charging-motor-supply-loss-alarm) · [Structured record](../entries/charging-motor-supply-loss-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Motor-supply supervision
Charging supply alarm

## What it represents

Reports loss of the electrical supply serving the charging motor. A stored-energy breaker mechanism has charging, release, indication and supervision functions. Motor supply, stored spring energy and the ability to complete an opening operation are separate drawing concerns.
In a switchgear panel, a charging motor replenishes the mechanism after an operation. Supervisory contacts let the controller report an incomplete charge or repeated charging demand before an operator requests another operation. For this reference, the drawing identifies “Motor-supply supervision” at the input and “Charging supply alarm” at the output. Trip supply may remain available independently.
Show the individual contacts and the relevant motor or release circuit. Supply voltage, charging time, operating duty and permissible alarms must follow the chosen mechanism documentation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Motor-supply supervision. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Charging supply alarm. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Trip supply may remain available independently.
- Show the individual contacts and the relevant motor or release circuit. Supply voltage, charging time, operating duty and permissible alarms must follow the chosen mechanism documentation.

## Drawing checklist

- Label the source and connection reference for motor-supply supervision.
- Identify the destination and defined state of charging supply alarm.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Trip supply may remain available independently.

## Important distinction

Trip supply may remain available independently. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Motor-supply supervision
- Output / connection: Charging supply alarm
- Lookup label: CSA is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for stored-energy mechanism supervision. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Three-phase motor](motor.md)
- [Charging-motor overload indication](charging-motor-overload-indication.md)

![Charging-motor supply-loss alarm — original educational illustration](../artwork/svg/charging-motor-supply-loss-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
