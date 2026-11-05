# Active-power transducer

Measuring transducer that converts CT and VT inputs into a DC signal proportional to active power for SCADA or control.

[Canonical reference](https://eloragrid.ai/symbols/active-power-transducer) · [Structured record](../entries/active-power-transducer.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic, SLD. Reference families: IEC, Manufacturer.

## What it represents

An active-power transducer takes current and voltage inputs and produces a DC current or voltage signal proportional to watts, often bipolar so that export and import give opposite signs. It is used where a governor, load controller or older SCADA needs an analogue power signal.
The output range, including how negative power is represented, must match the receiving input. The symbol shows the conversion but not the element configuration, response time or the scaling between rated power and output signal.

## How to read it

- Check how reverse power is represented at the output.
- Confirm element configuration matches the system wiring.

## Drawing checklist

- State full-scale power
- State output range
- Show CT and VT inputs

## Important distinction

An active-power transducer outputs a signal; an active power indicator displays the value.

## Facts

- Inputs: CT and VT secondaries
- Output: DC signal proportional to active power
- Preview: Independent educational concept; consult the applicable standard and project legend for the exact graphic

## Public references

- [Analog current signal isolation](https://www.phoenixcontact.com/en-us/products/signal-conditioner-mcr-c-i-i-0b-0b-dci-2810955) — Phoenix Contact. Public context for analogue measuring signals and their isolation.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC context for graphical symbols used in diagrams; no IEC graphic is reproduced.

## Related references

- [Voltage measuring transducer](voltage-measuring-transducer.md)
- [Active-power indicator](active-power-indicator.md)
- [Analog current signal isolator](analog-current-signal-isolator.md)

![Active-power transducer — original educational illustration](../artwork/svg/active-power-transducer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
