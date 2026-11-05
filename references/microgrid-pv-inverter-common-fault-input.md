# Microgrid PV inverter common-fault input

Receives the assigned solar inverter's declared common fault status.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-pv-inverter-common-fault-input) · [Structured record](../entries/microgrid-pv-inverter-common-fault-input.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Inverter fault output
PV equipment fault indication

## What it represents

Receives the assigned solar inverter's declared common fault status. Renewable-generation coordination connects variable resource availability, inverter operating limits and the microgrid power target. Available solar or wind power, an issued curtailment request and actual delivered power are different signals.
In a microgrid with solar generation, the controller can restrain inverter output when local load and storage cannot absorb the available power. The resource controller reports its own availability and accepted operating limits. For this reference, the drawing identifies “Inverter fault output” at the input and “PV equipment fault indication” at the output. Detailed inverter diagnostics remain separately available.
Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Inverter fault output. Identify its source device or document and the state represented on the drawing.
- Follow the named output: PV equipment fault indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Detailed inverter diagnostics remain separately available.
- Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant.

## Drawing checklist

- Label the source and connection reference for inverter fault output.
- Identify the destination and defined state of pv equipment fault indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Detailed inverter diagnostics remain separately available.

## Important distinction

Detailed inverter diagnostics remain separately available. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Inverter fault output
- Output / connection: PV equipment fault indication
- Lookup label: MPICI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid processing and control functions](https://productinfo.se.com/esxp_digital_apps_iec/mg/English/BM_ESXP_DG_Microgrid_IEC_0001122076.xml/%24/ESXP_DG_MG_SD_Processing_0001125595) — Schneider Electric. Public technical context for microgrid renewable-generation interfaces. Renewable generation dispatch and microgrid source coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [PV string inverter](pv-string-inverter.md)
- [Photovoltaic string combiner](photovoltaic-string-combiner.md)
- [Microgrid PV reactive-control ownership](microgrid-pv-reactive-control-ownership.md)

![Microgrid PV inverter common-fault input — original educational illustration](../artwork/svg/microgrid-pv-inverter-common-fault-input.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
