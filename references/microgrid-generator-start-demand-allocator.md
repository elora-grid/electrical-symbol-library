# Microgrid generator start-demand allocator

Selects available generating sets to satisfy the defined start demand and priority rules.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-generator-start-demand-allocator) · [Structured record](../entries/microgrid-generator-start-demand-allocator.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Power demand and generator availability
Selected start requests

## What it represents

Selects available generating sets to satisfy the defined start demand and priority rules. Generating-set coordination decides which available machines should operate and how their power contribution is shared. Engine starting, breaker connection, load acceptance and stopping are separate stages with their own feedback.
In a microgrid power station, the controller can request an additional generator when available reserve falls and later unload a selected machine before its documented stop sequence. For this reference, the drawing identifies “Power demand and generator availability” at the input and “Selected start requests” at the output. A start request does not guarantee an available source.
Preserve the engine and generator electrical boundaries, command authority and source readiness. Starting duty, minimum loading, synchronising, fuel systems and cooling behavior require the selected generator documentation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Power demand and generator availability. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Selected start requests. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- A start request does not guarantee an available source.
- Preserve the engine and generator electrical boundaries, command authority and source readiness. Starting duty, minimum loading, synchronising, fuel systems and cooling behavior require the selected generator documentation.

## Drawing checklist

- Label the source and connection reference for power demand and generator availability.
- Identify the destination and defined state of selected start requests.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: A start request does not guarantee an available source.

## Important distinction

A start request does not guarantee an available source. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Power demand and generator availability
- Output / connection: Selected start requests
- Lookup label: MGSA is a library lookup label, not a standard device designation.

## Public references

- [AGC power management options G4, G5 and G8](https://www.deif.com/media/5a4bx0xv/agc-3-option-g4-g5-and-g8-power-management-4189340696-uk.pdf) — DEIF. Public technical context for microgrid generating-set coordination. Generator start/stop, load sharing, reserve and power management. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Genset controller](genset-controller.md)
- [Diesel generator set](diesel-generator-set.md)
- [Microgrid generator running-availability input](microgrid-generator-running-availability-input.md)

![Microgrid generator start-demand allocator — original educational illustration](../artwork/svg/microgrid-generator-start-demand-allocator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
