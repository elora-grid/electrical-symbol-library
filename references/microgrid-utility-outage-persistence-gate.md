# Microgrid utility-outage persistence gate

Uses the defined persistence condition when distinguishing a temporary utility disturbance from an unavailable source.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-utility-outage-persistence-gate) · [Structured record](../entries/microgrid-utility-outage-persistence-gate.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Utility condition and timing
Qualified utility-outage state

## What it represents

Uses the defined persistence condition when distinguishing a temporary utility disturbance from an unavailable source. A microgrid operating-mode function coordinates how local sources and loads relate to the utility connection. The selected mode, the measured electrical condition and the actual switching configuration can differ during a transition.
In a microgrid serving a switchroom and industrial loads, the controller can move between grid-connected and islanded operating states only through its defined transition logic. Each state needs identifiable source roles and feedback. For this reference, the drawing identifies “Utility condition and timing” at the input and “Qualified utility-outage state” at the output. Timing must coordinate with protection.
Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Utility condition and timing. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Qualified utility-outage state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Timing must coordinate with protection.
- Show the requested mode, entry conditions, completion feedback and failure indication. These functional blocks explain control responsibilities and do not specify a ready-to-use operating sequence or grid-connection approval.

## Drawing checklist

- Label the source and connection reference for utility condition and timing.
- Identify the destination and defined state of qualified utility-outage state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Timing must coordinate with protection.

## Important distinction

Timing must coordinate with protection. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Utility condition and timing
- Output / connection: Qualified utility-outage state
- Lookup label: MUPG is a library lookup label, not a standard device designation.

## Public references

- [Microgrid operating modes and transitions management](https://productinfo.se.com/emol_functional_specifications/doca0371_emol_functionalspecifications/EN/DOCA0371_EMOL_Functional_Specifications_DD00894746.xml/%24/EMOL_OperatingModesandTransitionsManagement_DD00895904) — Schneider Electric. Public technical context for microgrid operating-mode controls. Grid-connected and island modes, transitions, topology and authority. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Microgrid controller](microgrid-controller.md)
- [Grid-forming inverter](grid-forming-inverter.md)
- [Microgrid utility-return qualification](microgrid-utility-return-qualification.md)

![Microgrid utility-outage persistence gate — original educational illustration](../artwork/svg/microgrid-utility-outage-persistence-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
