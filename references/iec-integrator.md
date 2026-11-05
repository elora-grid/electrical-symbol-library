# IEC integrator element (∫)

Analogue element marked with an integral sign; the output is proportional to the time integral of the input.

[Canonical reference](https://eloragrid.ai/symbols/iec-integrator) · [Structured record](../entries/iec-integrator.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, Manufacturer.

Graphical convention: IEC. Rectangular analogue element with integral sign.

## What it represents

The integrator element shows the integral sign inside a rectangular analogue element, usually with an amplifier mark. Its output changes at a rate proportional to the input, so a constant input produces a ramp. Reset or initial-condition inputs may be added to set the starting value.
Integrators appear in PI controllers, ramp generators and charge measurement. On the drawing, the time constant and any reset arrangement should be stated, because without them the element can drift to saturation.
The element does not specify the realisation. An op-amp with a feedback capacitor is common, but digital integration in a controller is drawn the same way on functional diagrams.

## How to read it

- Look for a reset or initial condition input.
- Find the time constant in notes or component values.

## Drawing checklist

- State the time constant.
- Show reset or limit arrangements.
- Reference the implementing circuit or function block.

## Important distinction

The differentiator element uses d/dt and responds to rate of change rather than accumulated value.

## Facts

- Function: Time integral of input
- Required data: Time constant and reset
- Artwork scope: Original educational illustration; consult the applicable standard and the selected device documentation for the exact graphic

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbols programme covering analogue elements; no geometry reproduced.
- [Integrator circuit reference, SBOA275](https://www.ti.com/lit/pdf/sboa275) — Texas Instruments. Manufacturer integrator circuit documentation.

## Related references

- [Op-amp integrator](op-amp-integrator.md)
- [IEC differentiator element (d/dt)](iec-differentiator.md)
- [IEC summing amplifier element (Σ)](iec-summing-amplifier.md)

![IEC integrator element (∫) — original educational illustration](../artwork/svg/iec-integrator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
