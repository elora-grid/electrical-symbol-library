# Independent trip-supply changeover

Selects an available supply for a documented trip circuit without merging the two source circuits.

[Canonical reference](https://eloragrid.ai/symbols/independent-trip-supply-changeover) · [Structured record](../entries/independent-trip-supply-changeover.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: switchgear.
Supply health contacts
Selected trip supply

## What it represents

Selects an available supply for a documented trip circuit without merging the two source circuits. A trip circuit carries an opening request from a control or protection device to the breaker operating mechanism. The opening command, the coil supply and the evidence that the breaker opened are separate parts of the drawing.
In a switchgear incomer panel, a protection relay requests opening and an auxiliary contact reports the resulting breaker position. A second trip path can have its own supply and wiring so that a single wiring fault does not remove both paths. For this reference, the drawing identifies “Supply health contacts” at the input and “Selected trip supply” at the output. Source changeover must preserve circuit segregation.
Trace the initiating contact, protective fuse, trip coil, return conductor and feedback independently. Identify which elements are shared between redundant paths. The diagram explains the intended command path; coil ratings and terminal numbers come from the selected breaker. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Supply health contacts. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Selected trip supply. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Source changeover must preserve circuit segregation.
- Trace the initiating contact, protective fuse, trip coil, return conductor and feedback independently. Identify which elements are shared between redundant paths. The diagram explains the intended command path; coil ratings and terminal numbers come from the selected breaker.

## Drawing checklist

- Label the source and connection reference for supply health contacts.
- Identify the destination and defined state of selected trip supply.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Source changeover must preserve circuit segregation.

## Important distinction

Source changeover must preserve circuit segregation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Switchgear
- Input / boundary: Supply health contacts
- Output / connection: Selected trip supply
- Lookup label: ITC is a library lookup label, not a standard device designation.

## Public references

- [Masterclad medium-voltage switchgear: circuit-breaker section interlocks](https://productinfo.se.com/masterclad_mv_switchgear_ib/6055-30-masterclad-15kv-mv-switchgear-ib/English/6055-30%20Masterclad%20MV%20Switchgear%20Indoor%20%28bookmap%29_DD00646805.xml/%24/Section6-CircuitBreakerSectionInter-58DD6EC7) — Schneider Electric. Public technical context for breaker trip circuits. Breaker control, mechanism, position contacts, racking interlocks and test interfaces. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Circuit breaker](circuit-breaker.md)
- [Lockout](86-lockout.md)
- [Trip-coil pulse extension](trip-coil-pulse-extension.md)

![Independent trip-supply changeover — original educational illustration](../artwork/svg/independent-trip-supply-changeover.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
