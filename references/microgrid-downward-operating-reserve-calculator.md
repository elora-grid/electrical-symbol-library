# Microgrid downward operating-reserve calculator

Identifies the available reduction in assigned resource output or added absorption capacity.

[Canonical reference](https://eloragrid.ai/symbols/microgrid-downward-operating-reserve-calculator) · [Structured record](../entries/microgrid-downward-operating-reserve-calculator.json) · [All references](README.md)

Updated: 2026-11-03. Drawing use: Schematic. Reference families: Manufacturer.

Representation: functional-block; installation focus: microgrids.
Resource output and lower limits
Downward reserve information

## What it represents

Identifies the available reduction in assigned resource output or added absorption capacity. Active-power dispatch allocates the electrical work performed by the microgrid resources. A total site target, a resource power limit and the actual measured contribution are different quantities that must be connected clearly in the diagram.
In a microgrid with solar generation, a battery and generators, the controller can allocate an import/export target among the available resources while reserving the power needed for operating disturbances. For this reference, the drawing identifies “Resource output and lower limits” at the input and “Downward reserve information” at the output. Not every resource can absorb power.
Identify the measurement boundary, power sign convention, resource limits and target priority. An original control block does not supply dispatch settings, a financial operating policy or proof of grid-code compliance. The functional block is an independent explanation of this named application. Equipment-specific ratings, terminal connections and operating conditions must be established in the project documentation.

## How to read it

- Start at the named input: Resource output and lower limits. Identify its source device or document and the state represented on the drawing.
- Follow the named output: Downward reserve information. Cross-reference its destination and separate the command from confirmation that the equipment responded.
- Not every resource can absorb power.
- Identify the measurement boundary, power sign convention, resource limits and target priority. An original control block does not supply dispatch settings, a financial operating policy or proof of grid-code compliance.

## Drawing checklist

- Label the source and connection reference for resource output and lower limits.
- Identify the destination and defined state of downward reserve information.
- Record the equipment or control-document revision supporting this functional block.
- Check this application limit in the project design: Not every resource can absorb power.

## Important distinction

Not every resource can absorb power. This reference describes the named application; it does not establish a new IEC graphical symbol, an ANSI device-function number or an exact manufacturer connection diagram.

## Facts

- Representation: Functional block
- Installation focus: Microgrids
- Input / boundary: Resource output and lower limits
- Output / connection: Downward reserve information
- Lookup label: MDOC is a library lookup label, not a standard device designation.

## Public references

- [Microgrid control systems](https://selinc.com/services/microgrids-power-management/microgrid-control-systems/) — SEL. Public technical context for microgrid active-power dispatch controls. Active and reactive power, generation, load control, operating reserves and system supervision. The application text and educational graphic are independently authored; the publisher does not certify this representation.

## Related references

- [Power plant controller](power-plant-controller.md)
- [Point of common coupling](point-of-common-coupling.md)
- [Microgrid power-deficit detection block](microgrid-power-deficit-detection-block.md)

![Microgrid downward operating-reserve calculator — original educational illustration](../artwork/svg/microgrid-downward-operating-reserve-calculator.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
