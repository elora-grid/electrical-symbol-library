# Network switch symbol

Network symbol for an Ethernet switch, a box with crossing arrows, used on electrical and communication drawings.

[Canonical reference](https://eloragrid.ai/symbols/iec-network-switch-plan-symbol) · [Structured record](../entries/iec-network-switch-plan-symbol.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic, GA. Reference families: IEC.

## What it represents

Ethernet switches are drawn on network and control drawings as a box with opposed arrows, indicating forwarding between ports. Electrical drawings show them in control panels and communication cabinets with their power supply and port connections.
The drawing should tag managed or unmanaged, port count and any PoE capability, since PoE switches power cameras and access points. Ring or redundancy protocols are noted where the network is resilient. The symbol does not show VLANs, IP addressing or configuration. Those belong in the network design documents.

## How to read it

- Check PoE capability where powered devices connect.
- Read port count and redundancy notes.

## Drawing checklist

- Tag port count and type.
- State PoE budget if used.
- Show power supply.

## Important distinction

A router connects networks at the IP level; a switch forwards frames within a network.

## Facts

- Function: Frame forwarding between ports
- Common option: Power over Ethernet
- Preview: Independent educational concept; plan symbols for this device vary between legends, so read the project key

## Public references

- [Lynx 5612-E-F4G-T8G-LV support](https://www.westermo.com/de/support/product-support/lynx-5612-e-f4g-t8g-lv) — Westermo. Public support page for a managed industrial Ethernet switch.
- [Industrial PoE Ethernet switches](https://www.westermo.com/products/ethernet-switches/poe) — Westermo. Public product family page describing Ethernet switches that power field devices over the data cable.

## Related references

- [Industrial Ethernet switch](ga-industrial-ethernet-switch.md)
- [PoE power-sourcing interface](poe-power-sourcing-interface.md)
- [Network router symbol](iec-network-router-symbol.md)

![Network switch symbol — original educational illustration](../artwork/svg/iec-network-switch-plan-symbol.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
