# Microgrid renewable forecast-quality gate

Identifies whether forecast data meets the freshness and completeness requirements of its assigned application.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-renewable-forecast-quality-gate) · [Structured record](../entries/microgrid-renewable-forecast-quality-gate.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Forecast quality and age
Accepted forecast state

## What it represents

Identifies whether forecast data meets the freshness and completeness requirements of its assigned application. Renewable-generation coordination connects variable resource availability, inverter operating limits and the microgrid power target. Available solar or wind power, an issued curtailment request and actual delivered power are different signals.
In a microgrid with solar generation, the controller can restrain inverter output when local load and storage cannot absorb the available power. The resource controller reports its own availability and accepted operating limits. For this reference, the drawing identifies “Forecast quality and age” at the input and “Accepted forecast state” at the output. Invalid forecasts require defined fallback treatment.
Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Forecast quality and age. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Accepted forecast state. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Invalid forecasts require defined fallback treatment.
- Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant.

## Drawing checklist

- Label the source and connection reference for forecast quality and age.
- Identify the destination and defined state of accepted forecast state.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Invalid forecasts require defined fallback treatment.

## Important distinction

Invalid forecasts require defined fallback treatment. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Forecast quality and age
- Output / connection: Accepted forecast state
- Lookup label: MRFG is a library lookup label, not a standard device designation.

## Public references

- [Microgrid processing and control functions](https://productinfo.se.com/esxp_digital_apps_iec/mg/English/BM_ESXP_DG_Microgrid_IEC_0001122076.xml/%24/ESXP_DG_MG_SD_Processing_0001125595) — Schneider Electric. Public technical context for microgrid renewable-generation interfaces. Renewable generation dispatch and microgrid source coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [PV string inverter](pv-string-inverter.md)
- [Photovoltaic string combiner](photovoltaic-string-combiner.md)
- [Microgrid wind available-power interface](microgrid-wind-available-power-interface.md)

![Microgrid renewable forecast-quality gate — original educational illustration](../artwork/svg/microgrid-renewable-forecast-quality-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
