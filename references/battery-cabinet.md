# Battery storage cabinet

A generic storage-equipment envelope linked to the selected battery system.

[Canonical reference](https://eloragrid.ai/objects/battery-cabinet) · [Structured record](../entries/battery-cabinet.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: GA. Reference families: Manufacturer.

## What it represents

A battery cabinet contains the storage equipment defined by its product system. A BESS arrangement can also include power conversion, control and auxiliary equipment. The GA should identify those equipment boundaries rather than treat every cabinet as an identical storage block.

## How to read it

- Match the cabinet identifier to the selected system configuration.
- Keep storage, conversion and control equipment distinct.

## Drawing checklist

- Reference the product and installation documentation.
- Identify interfaces and specified access requirements.
- Link the cabinet to system and equipment schedules.

## Important distinction

A BESS cabinet is not necessarily a complete BESS. Equipment scope and installation requirements are product-specific.

## Facts

- Object type: Generic equipment reference
- Dimensions: Use the exact manufacturer/model drawing

## Public references

- [xStorage battery energy storage system](https://www.eaton.com/us/en-us/catalog/energy-storage/xstorage-battery-energy-storage-system.html) — Eaton. Public example of battery, control and conversion equipment within a storage system.
- [Battery energy storage and power conversion](https://www.eaton.com/sg/en-us/products/energy-storage.html) — Eaton. Public explanation of storage and converter interfaces.

## Related references

- [Battery](battery.md)
- [Power conversion cabinet](pcs-cabinet.md)
- [Power converter / inverter](power-converter.md)

GA objects have no standalone 2D icon. Use the canonical equipment page for current manufacturer drawing and 3D preview availability.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
