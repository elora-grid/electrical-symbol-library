# Microgrid generator start-failure escalation

Reassigns the documented start demand after the selected generating set fails to become available.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-generator-start-failure-escalation) · [Structured record](../entries/microgrid-generator-start-failure-escalation.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Start request and availability result
Alternate generator request

## What it represents

Reassigns the documented start demand after the selected generating set fails to become available. Generating-set coordination decides which available machines should operate and how their power contribution is shared. Engine starting, breaker connection, load acceptance and stopping are separate stages with their own feedback.
In a microgrid power station, the controller can request an additional generator when available reserve falls and later unload a selected machine before its documented stop sequence. For this reference, the drawing identifies “Start request and availability result” at the input and “Alternate generator request” at the output. Escalation must preserve the required reserve policy.
Preserve the engine and generator electrical boundaries, command authority and source readiness. Starting duty, minimum loading, synchronising, fuel systems and cooling behavior require the selected generator documentation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Start request and availability result. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Alternate generator request. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Escalation must preserve the required reserve policy.
- Preserve the engine and generator electrical boundaries, command authority and source readiness. Starting duty, minimum loading, synchronising, fuel systems and cooling behavior require the selected generator documentation.

## Drawing checklist

- Label the source and connection reference for start request and availability result.
- Identify the destination and defined state of alternate generator request.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Escalation must preserve the required reserve policy.

## Important distinction

Escalation must preserve the required reserve policy. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Start request and availability result
- Output / connection: Alternate generator request
- Lookup label: MGSE is a library lookup label, not a standard device designation.

## Public references

- [AGC power management options G4, G5 and G8](https://www.deif.com/media/5a4bx0xv/agc-3-option-g4-g5-and-g8-power-management-4189340696-uk.pdf) — DEIF. Public technical context for microgrid generating-set coordination. Generator start/stop, load sharing, reserve and power management. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Genset controller](genset-controller.md)
- [Diesel generator set](diesel-generator-set.md)
- [Microgrid generator duty-rotation selector](microgrid-generator-duty-rotation-selector.md)

![Microgrid generator start-failure escalation — original educational illustration](../artwork/svg/microgrid-generator-start-failure-escalation.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
