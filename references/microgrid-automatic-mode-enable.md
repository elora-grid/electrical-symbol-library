# Microgrid automatic-mode enable

Permits the defined automatic coordination when its required authority and health inputs are satisfied.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-automatic-mode-enable) · [Structured record](../entries/microgrid-automatic-mode-enable.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Automatic authority and health
Automatic control permission

## What it represents

Permits the defined automatic coordination when its required authority and health inputs are satisfied. A microgrid operating-mode function coordinates how local sources and loads relate to the utility connection. The selected mode, the measured electrical condition and the actual switching configuration can differ during a transition.
In a microgrid serving a switchroom and industrial loads, the controller can move between grid-connected and islanded operating states only through its defined transition logic. Each state needs identifiable source roles and feedback. For this reference, the drawing identifies “Automatic authority and health” at the input and “Automatic control permission” at the output. Unavailable resources still require separate handling.
Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Automatic authority and health. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Automatic control permission. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Unavailable resources still require separate handling.
- Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval.

## Drawing checklist

- Label the source and connection reference for automatic authority and health.
- Identify the destination and defined state of automatic control permission.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Unavailable resources still require separate handling.

## Important distinction

Unavailable resources still require separate handling. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Automatic authority and health
- Output / connection: Automatic control permission
- Lookup label: MAE is a library lookup label, not a standard device designation.

## Public references

- [Microgrid operating modes and transitions management](https://productinfo.se.com/emol_functional_specifications/doca0371_emol_functionalspecifications/EN/DOCA0371_EMOL_Functional_Specifications_DD00894746.xml/%24/EMOL_OperatingModesandTransitionsManagement_DD00895904) — Schneider Electric. Public technical context for microgrid operating-mode controls. Grid-connected and island modes, transitions, topology and authority. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Grid-forming inverter](grid-forming-inverter.md)
- [Microgrid resource-role assignment](microgrid-resource-role-assignment.md)

![Microgrid automatic-mode enable — original educational illustration](../artwork/svg/microgrid-automatic-mode-enable.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
