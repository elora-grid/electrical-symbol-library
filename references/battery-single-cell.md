# Single battery cell

One electrochemical cell drawn as a single long plate and short plate pair, marking cell-level voltage and polarity.

[Canonical reference](https://eloragrid.ai/symbols/battery-single-cell) · [Structured record](../entries/battery-single-cell.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic. Reference families: IEC, IEEE / ANSI.

## What it represents

The single cell symbol is one long line for the positive plate and one shorter, often thicker, line for the negative plate. It represents one electrochemical cell, for example a 2 V lead-acid cell or a nominal 3.2 V lithium iron phosphate cell, and is the building block from which battery symbols are composed.
It appears on schematics where cell-level detail matters, such as cell monitoring connections, a backup cell on a controller board or a pilot cell for temperature and voltage measurement in a stationary battery. On power single-line diagrams the multi-cell battery symbol is normally used instead.
The symbol shows polarity but not chemistry, capacity or nominal voltage, all of which must be labelled. Drawing one cell does not mean the battery has one cell; check whether the drawing uses a single cell glyph as shorthand for a whole battery.

## How to read it

- The longer plate is positive.
- Confirm whether the glyph is a true single cell or a simplified battery.

## Drawing checklist

- State chemistry and nominal cell voltage.
- Mark polarity.
- Reference monitoring connections if any.

## Important distinction

A single cell is one plate pair; the battery symbol repeats plate pairs or adds a dashed line between them to show several cells.

## Facts

- Plates shown: One long, one short
- Polarity: Long plate is positive
- Preview: Independent educational illustration; exact standard graphic not certified

## Public references

- [IEC graphical symbols for diagrams](https://tc3.iec.ch/tc-activity/graphical-symbols-for-diagrams/) — IEC. IEC graphical symbol context for cells and batteries.
- [IEEE/ANSI 315-1975: graphic symbols for electrical and electronics diagrams](https://standards.ieee.org/ieee/315/515/) — IEEE Standards Association. IEEE/ANSI graphic-symbol context for cells.

## Related references

- [Battery](battery.md)
- [Battery string](battery-string.md)
- [Battery cell voltage monitor](battery-cell-voltage-monitor.md)

![Single battery cell — original educational illustration](../artwork/svg/battery-single-cell.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
