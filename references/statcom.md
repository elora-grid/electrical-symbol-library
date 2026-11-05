# Static synchronous compensator

A voltage-source converter in shunt that injects or absorbs reactive current to support voltage, independent of system voltage.

[Canonical reference](https://eloragrid.ai/symbols/statcom) · [Structured record](../entries/statcom.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

A static synchronous compensator is a voltage-source converter connected in shunt through a reactor or transformer. By controlling the magnitude of its AC output voltage relative to the network, it supplies or absorbs reactive current. It responds within milliseconds and can maintain close to rated current even when network voltage is low.
Drawings show a converter block with a DC capacitor on its DC side, a coupling reactor or transformer, and the connection breaker. Distribution-scale units serving microgrids, wind farms and industrial plants are often drawn as a single converter block labelled STATCOM.
Many STATCOMs can also act as active filters for flicker and harmonics, or be paired with batteries for active power support. The symbol does not show overload capability or which of these functions are enabled.

## How to read it

- A DC capacitor rather than a battery on the DC side marks a pure reactive compensator.
- Check whether a battery is shown, which would add active power capability.

## Drawing checklist

- State Mvar range and response time.
- Show coupling reactor or transformer.
- Reference control functions enabled.

## Important distinction

A STATCOM uses a converter and keeps reactive current at low voltage; an SVC uses switched reactances whose output falls with voltage.

## Facts

- Core element: Voltage-source converter
- DC side: Capacitor
- Response: Milliseconds
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [STATCOM: converter-based reactive power compensation](https://www.hitachienergy.com/products-and-solutions/facts/statcom) — Hitachi Energy. Public STATCOM page describing converter-based reactive power support.
- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context for converters.

## Related references

- [Static var compensator](static-var-compensator.md)
- [Synchronous condenser](synchronous-condenser.md)
- [Active harmonic filter](active-harmonic-filter.md)
- [Three-phase voltage-source inverter](three-phase-voltage-source-inverter.md)

![Static synchronous compensator — original educational illustration](../artwork/svg/statcom.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
