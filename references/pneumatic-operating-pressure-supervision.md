# Pneumatic operating-pressure supervision

Reports whether the pneumatic mechanism has its specified operating-pressure condition.

[Canonical reference](https://eloragrid.ai/symbols/pneumatic-operating-pressure-supervision) · [Structured record](../entries/pneumatic-operating-pressure-supervision.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Air-pressure condition
Pneumatic readiness status

## What it represents

Reports whether the pneumatic mechanism has its specified operating-pressure condition. A stored-energy breaker mechanism has charging, release, indication and supervision functions. Motor supply, stored spring energy and the ability to complete an opening operation are separate drawing concerns.
In a switchgear panel, a charging motor replenishes the mechanism after an operation. Supervisory contacts let the controller report an incomplete charge or repeated charging demand before an operator requests another operation. For this reference, the drawing identifies “Air-pressure condition” at the input and “Pneumatic readiness status” at the output. Air pressure and insulating gas density are different quantities.
Show the individual contacts and the relevant motor or release circuit. Supply voltage, charging time, operating duty and permissible alarms must follow the chosen mechanism documentation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Air-pressure condition. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Pneumatic readiness status. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Air pressure and insulating gas density are different quantities.
- Show the individual contacts and the relevant motor or release circuit. Supply voltage, charging time, operating duty and permissible alarms must follow the chosen mechanism documentation.

## Drawing checklist

- Label the source and connection reference for air-pressure condition.
- Identify the destination and defined state of pneumatic readiness status.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Air pressure and insulating gas density are different quantities.

## Important distinction

Air pressure and insulating gas density are different quantities. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Air-pressure condition
- Output / connection: Pneumatic readiness status
- Lookup label: POS is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for stored-energy mechanism supervision. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Three-phase motor](motor.md)
- [Mechanism pump-start control](mechanism-pump-start-control.md)

![Pneumatic operating-pressure supervision — original educational illustration](../artwork/svg/pneumatic-operating-pressure-supervision.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
