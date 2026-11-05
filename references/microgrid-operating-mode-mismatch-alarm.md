# Microgrid operating-mode mismatch alarm

Detects disagreement between the requested mode and the established topology or resource state.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-operating-mode-mismatch-alarm) · [Structured record](../entries/microgrid-operating-mode-mismatch-alarm.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Requested and observed modes
Mode mismatch indication

## What it represents

Detects disagreement between the requested mode and the established topology or resource state. A microgrid operating-mode function coordinates how local sources and loads relate to the utility connection. The selected mode, the measured electrical condition and the actual switching configuration can differ during a transition.
In a microgrid serving a switchroom and industrial loads, the controller can move between grid-connected and islanded operating states only through its defined transition logic. Each state needs identifiable source roles and feedback. For this reference, the drawing identifies “Requested and observed modes” at the input and “Mode mismatch indication” at the output. The allowed transition interval must be defined.
Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Requested and observed modes. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Mode mismatch indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The allowed transition interval must be defined.
- Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval.

## Drawing checklist

- Label the source and connection reference for requested and observed modes.
- Identify the destination and defined state of mode mismatch indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The allowed transition interval must be defined.

## Important distinction

The allowed transition interval must be defined. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Requested and observed modes
- Output / connection: Mode mismatch indication
- Lookup label: MOMA is a library lookup label, not a standard device designation.

## Public references

- [Microgrid operating modes and transitions management](https://productinfo.se.com/emol_functional_specifications/doca0371_emol_functionalspecifications/EN/DOCA0371_EMOL_Functional_Specifications_DD00894746.xml/%24/EMOL_OperatingModesandTransitionsManagement_DD00895904) — Schneider Electric. Public technical context for microgrid operating-mode controls. Grid-connected and island modes, transitions, topology and authority. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Grid-forming inverter](grid-forming-inverter.md)
- [Microgrid controller manual-mode interface](microgrid-controller-manual-mode-interface.md)

![Microgrid operating-mode mismatch alarm — original educational illustration](../artwork/svg/microgrid-operating-mode-mismatch-alarm.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
