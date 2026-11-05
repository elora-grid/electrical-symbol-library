# Microgrid restoration protection-ready gate

Requires the assigned protection configuration to be available for the intended restoration topology.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-restoration-protection-ready-gate) · [Structured record](../entries/microgrid-restoration-protection-ready-gate.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Protection mode and health
Restoration protection permission

## What it represents

Requires the assigned protection configuration to be available for the intended restoration topology. Black-start and restoration control coordinates the establishment of an electrical reference and the gradual return of assigned resources and loads. A dead system, an available starting source and a successful load restoration are distinct states.
In a microgrid recovering from a blackout, an available grid-forming source can establish the assigned island reference before compatible generation and eligible load groups are introduced under the validated restoration strategy. For this reference, the drawing identifies “Protection mode and health” at the input and “Restoration protection permission” at the output. Protection availability must cover the actual energized sections.
Show the prerequisites and confirmation at each control boundary. These original explanatory blocks are not an operating procedure; energization, protection, transformer inrush and motor reacceleration require system-level validation. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Protection mode and health. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Restoration protection permission. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Protection availability must cover the actual energized sections.
- Show the prerequisites and confirmation at each control boundary. These original explanatory blocks are not an operating procedure; energization, protection, transformer inrush and motor reacceleration require system-level validation.

## Drawing checklist

- Label the source and connection reference for protection mode and health.
- Identify the destination and defined state of restoration protection permission.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Protection availability must cover the actual energized sections.

## Important distinction

Protection availability must cover the actual energized sections. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Protection mode and health
- Output / connection: Restoration protection permission
- Lookup label: MRPG is a library lookup label, not a standard device designation.

## Public references

- [Avista Shared Energy Economy microgrid protection and control case study](https://selinc.com/api/download/135486/) — SEL. Public technical context for microgrid black-start and restoration controls. Storage, protection, black start, load restoration and coordinated island operation. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Grid-forming inverter](grid-forming-inverter.md)
- [Microgrid controller](microgrid-controller.md)
- [Microgrid transformer energization request boundary](microgrid-transformer-energization-request-boundary.md)

![Microgrid restoration protection-ready gate — original educational illustration](../artwork/svg/microgrid-restoration-protection-ready-gate.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
