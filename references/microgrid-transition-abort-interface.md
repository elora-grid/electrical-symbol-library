# Microgrid transition-abort interface

Identifies the documented request to abandon an incomplete operating-mode transition.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-transition-abort-interface) · [Structured record](../entries/microgrid-transition-abort-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Abort condition
Assigned transition-abort action

## What it represents

Identifies the documented request to abandon an incomplete operating-mode transition. A microgrid operating-mode function coordinates how local sources and loads relate to the utility connection. The selected mode, the measured electrical condition and the actual switching configuration can differ during a transition.
In a microgrid serving a switchroom and industrial loads, the controller can move between grid-connected and islanded operating states only through its defined transition logic. Each state needs identifiable source roles and feedback. For this reference, the drawing identifies “Abort condition” at the input and “Assigned transition-abort action” at the output. The resulting stable state must be defined.
Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Abort condition. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Assigned transition-abort action. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The resulting stable state must be defined.
- Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval.

## Drawing checklist

- Label the source and connection reference for abort condition.
- Identify the destination and defined state of assigned transition-abort action.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The resulting stable state must be defined.

## Important distinction

The resulting stable state must be defined. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Abort condition
- Output / connection: Assigned transition-abort action
- Lookup label: MTI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid operating modes and transitions management](https://productinfo.se.com/emol_functional_specifications/doca0371_emol_functionalspecifications/EN/DOCA0371_EMOL_Functional_Specifications_DD00894746.xml/%24/EMOL_OperatingModesandTransitionsManagement_DD00895904) — Schneider Electric. Public technical context for microgrid operating-mode controls. Grid-connected and island modes, transitions, topology and authority. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Grid-forming inverter](grid-forming-inverter.md)
- [Microgrid utility-outage persistence gate](microgrid-utility-outage-persistence-gate.md)

![Microgrid transition-abort interface — original educational illustration](../artwork/svg/microgrid-transition-abort-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
