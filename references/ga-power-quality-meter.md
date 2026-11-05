# Power quality meter

A measuring device used to monitor electrical quantities and documented power-quality events or waveform characteristics.

[Canonical reference](https://eloragrid.ai/objects/ga-power-quality-meter) · [Structured record](../entries/ga-power-quality-meter.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: GA, SLD, Schematic. Reference families: Manufacturer.

## What it represents

A power quality meter measures electrical quantities and provides the power-quality monitoring functions documented for its model. Examples include waveform or disturbance recording and analysis of abnormal supply conditions. An ordinary energy meter should not be assumed to provide these functions.
Coordinate the installed meter or remote display, voltage and current inputs, auxiliary supply and communication interfaces. A complete drawing package links the GA location to the metering schematic and the configuration requirements for the monitoring system.

## How to read it

- Read the selected model documentation to identify which measurements, event captures and recording functions are provided.
- Trace voltage/current measurement channels separately from auxiliary power and network or time-reference connections.

## Drawing checklist

- Identify the exact meter model, installation form and display arrangement.
- Cross-reference voltage inputs, CT connections, protection/test interfaces and auxiliary supply.
- Show communication, time-reference and data-system interfaces required by the documented application.

## Important distinction

Power-quality monitoring and energy registration overlap in some meters. A meter label or network connection alone does not prove the event capture, accuracy class or recording capabilities needed for a particular study.

## Facts

- Record type: Generic metering and monitoring GA object
- Interface groups: Measurement inputs, auxiliary supply, communication and any documented time reference
- Capability verification: Selected model manual and application configuration; no universal accuracy or recording specification asserted

## Public references

- [PowerLogic ION9000 user manual](https://www.se.com/us/en/download/document/26719674/) — Schneider Electric. Public advanced energy and power-quality meter manual provides installation and operating context.

## Related references

- [Current transformer](current-transformer.md)
- [Voltage transformer](voltage-transformer.md)

GA objects have no standalone 2D icon. Use the canonical equipment page for current manufacturer drawing and 3D preview availability.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
