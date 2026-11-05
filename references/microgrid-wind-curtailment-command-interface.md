# Microgrid wind curtailment command interface

Transfers the permitted wind-plant power restraint to its assigned resource controller.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-wind-curtailment-command-interface) · [Structured record](../entries/microgrid-wind-curtailment-command-interface.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Wind dispatch target
Wind power-limit command

## What it represents

Transfers the permitted wind-plant power restraint to its assigned resource controller. Renewable-generation coordination connects variable resource availability, inverter operating limits and the microgrid power target. Available solar or wind power, an issued curtailment request and actual delivered power are different signals.
In a microgrid with solar generation, the controller can restrain inverter output when local load and storage cannot absorb the available power. The resource controller reports its own availability and accepted operating limits. For this reference, the drawing identifies “Wind dispatch target” at the input and “Wind power-limit command” at the output. Plant controller response must be verified.
Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Wind dispatch target. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Wind power-limit command. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Plant controller response must be verified.
- Identify the point where power is measured and the system declaring each availability or limit signal. Resource forecasts and controller requests do not guarantee the delivered generation at every instant.

## Drawing checklist

- Label the source and connection reference for wind dispatch target.
- Identify the destination and defined state of wind power-limit command.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Plant controller response must be verified.

## Important distinction

Plant controller response must be verified. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Wind dispatch target
- Output / connection: Wind power-limit command
- Lookup label: MWCCI is a library lookup label, not a standard device designation.

## Public references

- [Microgrid processing and control functions](https://productinfo.se.com/esxp_digital_apps_iec/mg/English/BM_ESXP_DG_Microgrid_IEC_0001122076.xml/%24/ESXP_DG_MG_SD_Processing_0001125595) — Schneider Electric. Public technical context for microgrid renewable-generation interfaces. Renewable generation dispatch and microgrid source coordination. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [PV string inverter](pv-string-inverter.md)
- [Photovoltaic string combiner](photovoltaic-string-combiner.md)
- [Microgrid renewable-surplus absorption request](microgrid-renewable-surplus-absorption-request.md)

![Microgrid wind curtailment command interface — original educational illustration](../artwork/svg/microgrid-wind-curtailment-command-interface.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
