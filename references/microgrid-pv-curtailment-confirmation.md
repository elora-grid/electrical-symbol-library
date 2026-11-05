# Microgrid PV curtailment confirmation

Checks the declared acceptance or measured effect of an assigned PV power restraint.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-pv-curtailment-confirmation) · [Structured record](../entries/microgrid-pv-curtailment-confirmation.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Curtailment request and response
Curtailment confirmation

## What it represents

Checks the declared acceptance or measured effect of an assigned PV power restraint. Renewable-generation coordination connects variable resource availability, inverter operating limits and the microgrid power target. Available solar or wind power, an issued curtailment request and actual delivered power are different signals.
In a microgrid with solar generation, the controller can restrain inverter output when local load and storage cannot absorb the available power. The resource controller reports its own availability and accepted operating limits. For this reference, the drawing identifies “Curtailment request and response” at the input and “Curtailment confirmation” at the output. Command acceptance and delivered power differ.
Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Curtailment request and response. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Curtailment confirmation. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Command acceptance and delivered power differ.
- Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant.

## Drawing checklist

- Label the source and connection reference for curtailment request and response.
- Identify the destination and defined state of curtailment confirmation.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Command acceptance and delivered power differ.

## Important distinction

Command acceptance and delivered power differ. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Curtailment request and response
- Output / connection: Curtailment confirmation
- Lookup label: MPCC is a library lookup label, not a standard device designation.

## Public references

- [Microgrid processing and control functions](https://productinfo.se.com/esxp_digital_apps_iec/mg/English/BM_ESXP_DG_Microgrid_IEC_0001122076.xml/%24/ESXP_DG_MG_SD_Processing_0001125595) — Schneider Electric. Public technical context for microgrid renewable-generation interfaces. Renewable generation dispatch and microgrid source coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [PV string inverter](pv-string-inverter.md)
- [Photovoltaic string combiner](photovoltaic-string-combiner.md)
- [Microgrid PV export-restraint interface](microgrid-pv-export-restraint-interface.md)

![Microgrid PV curtailment confirmation — original educational illustration](../artwork/svg/microgrid-pv-curtailment-confirmation.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
