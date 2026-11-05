# Microgrid operating-mode history recorder

Associates confirmed mode changes with their initiating cause and recorded time.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-operating-mode-history-recorder) · [Structured record](../entries/microgrid-operating-mode-history-recorder.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Mode events and causes
Operating-mode history

## What it represents

Associates confirmed mode changes with their initiating cause and recorded time. A microgrid operating-mode function coordinates how local sources and loads relate to the utility connection. The selected mode, the measured electrical condition and the actual switching configuration can differ during a transition.
In a microgrid serving a switchroom and industrial loads, the controller can move between grid-connected and islanded operating states only through its defined transition logic. Each state needs identifiable source roles and feedback. For this reference, the drawing identifies “Mode events and causes” at the input and “Operating-mode history” at the output. Clock quality affects event interpretation.
Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Mode events and causes. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Operating-mode history. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Clock quality affects event interpretation.
- Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval.

## Drawing checklist

- Label the source and connection reference for mode events and causes.
- Identify the destination and defined state of operating-mode history.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Clock quality affects event interpretation.

## Important distinction

Clock quality affects event interpretation. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Mode events and causes
- Output / connection: Operating-mode history
- Lookup label: MOHR is a library lookup label, not a standard device designation.

## Public references

- [Microgrid operating modes and transitions management](https://productinfo.se.com/emol_functional_specifications/doca0371_emol_functionalspecifications/EN/DOCA0371_EMOL_Functional_Specifications_DD00894746.xml/%24/EMOL_OperatingModesandTransitionsManagement_DD00895904) — Schneider Electric. Public technical context for microgrid operating-mode controls. Grid-connected and island modes, transitions, topology and authority. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Grid-forming inverter](grid-forming-inverter.md)
- [Microgrid emergency operating-state interface](microgrid-emergency-operating-state-interface.md)

![Microgrid operating-mode history recorder — original educational illustration](../artwork/svg/microgrid-operating-mode-history-recorder.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
