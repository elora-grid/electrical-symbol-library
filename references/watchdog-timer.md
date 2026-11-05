# Watchdog timer

Supervises a qualifying activity signal and operates its output when the documented watchdog timing condition is violated.

[Canonical reference](https://eloragrid.ai/symbols/watchdog-timer) · [Structured record](../entries/watchdog-timer.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: Schematic. Reference families: Manufacturer.

## What it represents

Supervises a qualifying activity signal and operates its output when the documented watchdog timing condition is violated.
On a schematic, identify the watchdog input, enable and timeout configuration and trace the reset/fault output and supervised controller. Keep the component tag and signal/reference names consistent across the control drawing, terminal schedule and device documentation.
A watchdog supervises activity timing; it does not prove that the processor's control algorithm is correct.
The preview is an independently drawn educational functional reference. Add the selected component’s actual power pins, terminal numbers, timing or analogue reference details when producing a construction drawing.

## How to read it

- Identify the watchdog input, enable and timeout configuration.
- Trace the reset/fault output and supervised controller.

## Drawing checklist

- Label the watchdog input, enable and timeout configuration.
- Cross-reference the reset/fault output and supervised controller.
- Add the selected device or circuit documentation revision, power/reference connections and project signal convention.

## Important distinction

A watchdog supervises activity timing; it does not prove that the processor's control algorithm is correct.

## Facts

- Common schematic mnemonic: WDT — descriptive only; project/device documentation defines reference designations.
- Terminal / interface focus: The watchdog input, enable and timeout configuration
- Artwork scope: Original educational functional/circuit reference; not a selected product pinout.

## Public references

- [TPS3431 — watchdog timing supervision](https://www.ti.com/product/TPS3431) — Texas Instruments. Public primary manufacturer documentation establishes the component function or circuit/topology relationship. Preview geometry and drafting explanations are independently authored.

## Related references

- [Retriggerable monostable](retriggerable-monostable.md)
- [PLC input / output](plc-io.md)

![Watchdog timer — original educational illustration](../artwork/svg/watchdog-timer.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
