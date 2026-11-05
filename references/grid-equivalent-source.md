# Grid equivalent source

A voltage source behind an impedance used in study diagrams to represent the external network at a defined fault level.

[Canonical reference](https://eloragrid.ai/symbols/grid-equivalent-source) · [Structured record](../entries/grid-equivalent-source.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

A grid equivalent source represents the upstream network in load flow, short circuit and stability studies as an ideal voltage source behind an impedance. The impedance is calculated from the declared fault level and X/R ratio at the connection point, often with separate maximum and minimum cases.
Study single-line diagrams draw it as a circle with a sine wave followed by an impedance element, labelled with the fault level in MVA or kA and the X/R ratio. Microgrid studies use it to test both strong and weak network conditions before islanding scenarios are modelled.
The equivalent is only valid near the declared fault level; it cannot represent upstream dynamics such as voltage control or frequency response unless additional models are attached. The symbol does not tell you which study case it belongs to.

## How to read it

- Read both the fault level and X/R ratio.
- Check whether the drawing shows maximum or minimum fault case.

## Drawing checklist

- State fault level, X/R ratio and voltage.
- Show the impedance element.
- Reference study case.

## Important distinction

A grid equivalent is a study model; a utility grid connection symbol represents the real supply on construction drawings.

## Facts

- Model: Voltage source behind impedance
- Parameters: Fault level and X/R ratio
- Use: Power system studies
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context for sources and impedances.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. IEEE/ANSI graphic-symbol context for sources.

## Related references

- [Utility grid connection](utility-grid-connection.md)
- [Three-phase AC source](three-phase-ac-source.md)
- [Reactor](reactor.md)

![Grid equivalent source — original educational illustration](../artwork/svg/grid-equivalent-source.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
