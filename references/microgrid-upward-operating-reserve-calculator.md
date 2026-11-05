# Microgrid upward operating-reserve calculator

Identifies the available increase in assigned resource output under the documented reserve definition.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-upward-operating-reserve-calculator) · [Structured record](../entries/microgrid-upward-operating-reserve-calculator.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Resource output and upper limits
Upward reserve information

## What it represents

Identifies the available increase in assigned resource output under the documented reserve definition. Active-power dispatch allocates the electrical work performed by the microgrid resources. A total site target, a resource power limit and the actual measured contribution are different quantities that must be connected clearly in the diagram.
In a microgrid with solar generation, a battery and generators, the controller can allocate an import/export target among the available resources while reserving the power needed for operating disturbances. For this reference, the drawing identifies “Resource output and upper limits” at the input and “Upward reserve information” at the output. Energy and dynamic constraints also matter.
Identify the measurement boundary, power sign convention, resource limits and target priority. An original control block does not supply dispatch settings, a financial operating policy or proof of grid-code compliance. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Resource output and upper limits. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Upward reserve information. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Energy and dynamic constraints also matter.
- Identify the measurement boundary, power sign convention, resource limits and target priority. An original control block does not supply dispatch settings, a financial operating policy or proof of grid-code compliance.

## Drawing checklist

- Label the source and connection reference for resource output and upper limits.
- Identify the destination and defined state of upward reserve information.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Energy and dynamic constraints also matter.

## Important distinction

Energy and dynamic constraints also matter. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Resource output and upper limits
- Output / connection: Upward reserve information
- Lookup label: MUOC is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid active-power dispatch controls. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power plant controller](power-plant-controller.md)
- [Point of common coupling](point-of-common-coupling.md)
- [Microgrid downward operating-reserve calculator](microgrid-downward-operating-reserve-calculator.md)

![Microgrid upward operating-reserve calculator — original educational illustration](../artwork/svg/microgrid-upward-operating-reserve-calculator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
