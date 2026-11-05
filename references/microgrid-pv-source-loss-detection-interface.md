# Microgrid PV source-loss detection interface

Reports the defined loss of the assigned PV resource to the power-balancing controller.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-pv-source-loss-detection-interface) · [Structured record](../entries/microgrid-pv-source-loss-detection-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
PV connection and power status
PV unavailable indication

## What it represents

Reports the defined loss of the assigned PV resource to the power-balancing controller. Renewable-generation coordination connects variable resource availability, inverter operating limits and the microgrid power target. Available solar or wind power, an issued curtailment request and actual delivered power are different signals.
In a microgrid with solar generation, the controller can restrain inverter output when local load and storage cannot absorb the available power. The resource controller reports its own availability and accepted operating limits. For this reference, the drawing identifies “PV connection and power status” at the input and “PV unavailable indication” at the output. Low irradiance and disconnected equipment differ.
Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: PV connection and power status. Identify its source device or document and the state represented on the drawing.
- Follow the named output: PV unavailable indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Low irradiance and disconnected equipment differ.
- Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant.

## Drawing checklist

- Label the source and connection reference for pv connection and power status.
- Identify the destination and defined state of pv unavailable indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Low irradiance and disconnected equipment differ.

## Important distinction

Low irradiance and disconnected equipment differ. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: PV connection and power status
- Output / connection: PV unavailable indication
- Lookup label: MPSDI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid processing and control functions](https://productinfo.se.com/esxp_digital_apps_iec/mg/English/BM_ESXP_DG_Microgrid_IEC_0001122076.xml/%24/ESXP_DG_MG_SD_Processing_0001125595) — Schneider Electric. Public technical context for microgrid renewable-generation interfaces. Renewable generation dispatch and microgrid source coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [PV string inverter](pv-string-inverter.md)
- [Photovoltaic string combiner](photovoltaic-string-combiner.md)
- [Microgrid PV inverter common-fault input](microgrid-pv-inverter-common-fault-input.md)

![Microgrid PV source-loss detection interface — original educational illustration](../artwork/svg/microgrid-pv-source-loss-detection-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
