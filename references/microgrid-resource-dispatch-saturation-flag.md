# Microgrid resource dispatch saturation flag

Reports that a controlled resource has reached its assigned active-power operating bound.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-resource-dispatch-saturation-flag) · [Structured record](../entries/microgrid-resource-dispatch-saturation-flag.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Requested and permitted resource power
Dispatch-limit indication

## What it represents

Reports that a controlled resource has reached its assigned active-power operating bound. Active-power dispatch allocates the electrical work performed by the microgrid resources. A total site target, a resource power limit and the actual measured contribution are different quantities that must be connected clearly in the diagram.
In a microgrid with solar generation, a battery and generators, the controller can allocate an import/export target among the available resources while reserving the power needed for operating disturbances. For this reference, the drawing identifies “Requested and permitted resource power” at the input and “Dispatch-limit indication” at the output. The flag should identify the limiting constraint.
Identify the measurement boundary, power sign convention, resource limits and target priority. An original control block does not supply dispatch settings, a financial operating policy or proof of grid-code compliance. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Requested and permitted resource power. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Dispatch-limit indication. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- The flag should identify the limiting constraint.
- Identify the measurement boundary, power sign convention, resource limits and target priority. An original control block does not supply dispatch settings, a financial operating policy or proof of grid-code compliance.

## Drawing checklist

- Label the source and connection reference for requested and permitted resource power.
- Identify the destination and defined state of dispatch-limit indication.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: The flag should identify the limiting constraint.

## Important distinction

The flag should identify the limiting constraint. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Requested and permitted resource power
- Output / connection: Dispatch-limit indication
- Lookup label: MRDSF is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid active-power dispatch controls. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power plant controller](power-plant-controller.md)
- [Point of common coupling](point-of-common-coupling.md)
- [Microgrid dispatch tracking-error monitor](microgrid-dispatch-tracking-error-monitor.md)

![Microgrid resource dispatch saturation flag — original educational illustration](../artwork/svg/microgrid-resource-dispatch-saturation-flag.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
