# Microgrid transition-state indication

Reports that the controller is between its defined stable operating modes.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-transition-state-indication) · [Structured record](../entries/microgrid-transition-state-indication.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Mode-transition logic
Transition-in-progress indication

## What it represents

Reports that the controller is between its defined stable operating modes. A microgrid operating-mode function coordinates how local sources and loads relate to the utility connection. The selected mode, the measured electrical condition and the actual switching configuration can differ during a transition.
In a microgrid serving a switchroom and industrial loads, the controller can move between grid-connected and islanded operating states only through its defined transition logic. Each state needs identifiable source roles and feedback. For this reference, the drawing identifies “Mode-transition logic” at the input and “Transition-in-progress indication” at the output. Intermediate states need explicit interpretation.
Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Mode-transition logic. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Transition-in-progress indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Intermediate states need explicit interpretation.
- Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval.

## Drawing checklist

- Label the source and connection reference for mode-transition logic.
- Identify the destination and defined state of transition-in-progress indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Intermediate states need explicit interpretation.

## Important distinction

Intermediate states need explicit interpretation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Mode-transition logic
- Output / connection: Transition-in-progress indication
- Lookup label: MTI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid operating modes and transitions management](https://productinfo.se.com/emol_functional_specifications/doca0371_emol_functionalspecifications/EN/DOCA0371_EMOL_Functional_Specifications_DD00894746.xml/%24/EMOL_OperatingModesandTransitionsManagement_DD00895904) — Schneider Electric. Public technical context for microgrid operating-mode controls. Grid-connected and island modes, transitions, topology and authority. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Grid-forming inverter](grid-forming-inverter.md)
- [Microgrid mode-command authority selector](microgrid-mode-command-authority-selector.md)

![Microgrid transition-state indication — original educational illustration](../artwork/svg/microgrid-transition-state-indication.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
