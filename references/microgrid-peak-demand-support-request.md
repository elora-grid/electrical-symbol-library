# Microgrid peak-demand support request

Requests the assigned local generation or storage contribution under the documented demand-support strategy.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-peak-demand-support-request) · [Structured record](../entries/microgrid-peak-demand-support-request.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Site demand and support condition
Local power support request

## What it represents

Requests the assigned local generation or storage contribution under the documented demand-support strategy. Active-power dispatch allocates the electrical work performed by the microgrid resources. A total site target, a resource power limit and the actual measured contribution are different quantities that must be connected clearly in the diagram.
In a microgrid with solar generation, a battery and generators, the controller can allocate an import/export target among the available resources while reserving the power needed for operating disturbances. For this reference, the drawing identifies “Site demand and support condition” at the input and “Local power support request” at the output. The strategy needs its own operating definition.
Identify the measurement boundary, power sign convention, resource limits and target priority. An original control block does not supply dispatch settings, a financial operating policy or proof of grid-code compliance. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Site demand and support condition. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Local power support request. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The strategy needs its own operating definition.
- Identify the measurement boundary, power sign convention, resource limits and target priority. An original control block does not supply dispatch settings, a financial operating policy or proof of grid-code compliance.

## Drawing checklist

- Label the source and connection reference for site demand and support condition.
- Identify the destination and defined state of local power support request.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The strategy needs its own operating definition.

## Important distinction

The strategy needs its own operating definition. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Site demand and support condition
- Output / connection: Local power support request
- Lookup label: MPSR is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid active-power dispatch controls. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power plant controller](power-plant-controller.md)
- [Point of common coupling](point-of-common-coupling.md)
- [Microgrid renewable-priority allocator](microgrid-renewable-priority-allocator.md)

![Microgrid peak-demand support request — original educational illustration](../artwork/svg/microgrid-peak-demand-support-request.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
