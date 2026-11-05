# Microgrid PV reconnect-permission interface

Receives the defined system conditions permitting a disconnected PV resource to reconnect.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-pv-reconnect-permission-interface) · [Structured record](../entries/microgrid-pv-reconnect-permission-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
System reference and PV readiness
PV reconnect permission

## What it represents

Receives the defined system conditions permitting a disconnected PV resource to reconnect. Renewable-generation coordination connects variable resource availability, inverter operating limits and the microgrid power target. Available solar or wind power, an issued curtailment request and actual delivered power are different signals.
In a microgrid with solar generation, the controller can restrain inverter output when local load and storage cannot absorb the available power. The resource controller reports its own availability and accepted operating limits. For this reference, the drawing identifies “System reference and PV readiness” at the input and “PV reconnect permission” at the output. Equipment and connection rules govern actual reconnection.
Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: System reference and PV readiness. Identify its source device or document and the state represented on the drawing.
- Follow the named output: PV reconnect permission. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Equipment and connection rules govern actual reconnection.
- Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant.

## Drawing checklist

- Label the source and connection reference for system reference and pv readiness.
- Identify the destination and defined state of pv reconnect permission.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Equipment and connection rules govern actual reconnection.

## Important distinction

Equipment and connection rules govern actual reconnection. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: System reference and PV readiness
- Output / connection: PV reconnect permission
- Lookup label: MPRI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid processing and control functions](https://productinfo.se.com/esxp_digital_apps_iec/mg/English/BM_ESXP_DG_Microgrid_IEC_0001122076.xml/%24/ESXP_DG_MG_SD_Processing_0001125595) — Schneider Electric. Public technical context for microgrid renewable-generation interfaces. Renewable generation dispatch and microgrid source coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [PV string inverter](pv-string-inverter.md)
- [Photovoltaic string combiner](photovoltaic-string-combiner.md)
- [Microgrid PV island-operating permission](microgrid-pv-island-operating-permission.md)

![Microgrid PV reconnect-permission interface — original educational illustration](../artwork/svg/microgrid-pv-reconnect-permission-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
