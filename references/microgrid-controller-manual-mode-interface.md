# Microgrid controller manual-mode interface

Identifies the documented manual control authority and its assigned automatic restraints.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-controller-manual-mode-interface) · [Structured record](../entries/microgrid-controller-manual-mode-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Manual mode selection
Manual-control state

## What it represents

Identifies the documented manual control authority and its assigned automatic restraints. A microgrid operating-mode function coordinates how local sources and loads relate to the utility connection. The selected mode, the measured electrical condition and the actual switching configuration can differ during a transition.
In a microgrid serving a switchroom and industrial loads, the controller can move between grid-connected and islanded operating states only through its defined transition logic. Each state needs identifiable source roles and feedback. For this reference, the drawing identifies “Manual mode selection” at the input and “Manual-control state” at the output. Manual mode is not permission to defeat protection.
Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Manual mode selection. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Manual-control state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Manual mode is not permission to defeat protection.
- Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval.

## Drawing checklist

- Label the source and connection reference for manual mode selection.
- Identify the destination and defined state of manual-control state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Manual mode is not permission to defeat protection.

## Important distinction

Manual mode is not permission to defeat protection. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Manual mode selection
- Output / connection: Manual-control state
- Lookup label: MCMI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid operating modes and transitions management](https://productinfo.se.com/emol_functional_specifications/doca0371_emol_functionalspecifications/EN/DOCA0371_EMOL_Functional_Specifications_DD00894746.xml/%24/EMOL_OperatingModesandTransitionsManagement_DD00895904) — Schneider Electric. Public technical context for microgrid operating-mode controls. Grid-connected and island modes, transitions, topology and authority. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Grid-forming inverter](grid-forming-inverter.md)
- [Microgrid automatic-mode enable](microgrid-automatic-mode-enable.md)

![Microgrid controller manual-mode interface — original educational illustration](../artwork/svg/microgrid-controller-manual-mode-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
