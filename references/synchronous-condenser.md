# Synchronous condenser

An unloaded synchronous machine on the network that supplies reactive power, inertia and short-circuit strength.

[Canonical reference](https://eloragrid.ai/symbols/synchronous-condenser) · [Structured record](../entries/synchronous-condenser.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: SLD. Reference families: IEC, IEEE / ANSI.

## What it represents

A synchronous condenser is a synchronous machine running without a prime mover, connected to the network to supply or absorb reactive power by adjusting its field current. Because it is a real rotating machine it also contributes inertia and high short-circuit current, which converter-dominated networks often lack.
Single-line diagrams draw a synchronous machine circle labelled SC or with a capacitor-like note, connected through a step-up transformer and breaker, with a starting arrangement such as a pony motor or static frequency converter. A flywheel may be shown on the shaft to add inertia.
The symbol looks like a generator but the machine exports no active power and draws a small amount to cover losses. It does not show the starting method, inertia constant or overexcitation limits, which define how much it helps during faults.

## How to read it

- There is no prime mover; a pony motor or static starter is used only to bring the machine up to speed.
- Check for a flywheel added to raise inertia.

## Drawing checklist

- State Mvar range, inertia and short-circuit contribution.
- Show transformer and starting method.
- Reference excitation limits.

## Important distinction

A synchronous condenser exchanges only reactive power; a synchronous generator also delivers active power from a prime mover.

## Facts

- Machine: Synchronous, no prime mover
- Services: Reactive power, inertia, short-circuit strength
- Starting: Pony motor or static starter
- Preview: Independent educational illustration; consult the applicable standard and project legend for the exact graphic

## Public references

- [Synchronous Condenser System](https://www.hitachienergy.com/products-and-solutions/facts/synchronous-condenser-system) — Hitachi Energy. Public synchronous condenser system page.
- [Generator symbol variants](https://help.autodesk.com/cloudhelp/2021/ENU/AutoCAD-Electrical/files/GUID-09BE3BB5-9118-4302-8061-3888692E538F.htm) — Autodesk. Public synchronous machine symbol family context.

## Related references

- [Three-phase synchronous generator](three-phase-synchronous-generator.md)
- [Static synchronous compensator](statcom.md)
- [Static frequency converter](static-frequency-converter.md)
- [Flywheel energy storage](flywheel-energy-storage.md)

![Synchronous condenser — original educational illustration](../artwork/svg/synchronous-condenser.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
