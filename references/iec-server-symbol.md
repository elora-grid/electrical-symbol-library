# Server symbol

Network symbol for a server, a tall box with drive bays, on control system and communication drawings.

[Canonical reference](https://eloragrid.ai/symbols/iec-server-symbol) · [Structured record](../entries/iec-server-symbol.json) · [All references](README.md)

Updated: 2026-10-28. Drawing use: Schematic, GA. Reference families: IEC.

## What it represents

Servers are drawn as a tall rectangle with horizontal bays on network and control system diagrams. Electrical drawings show them in racks with their power feeds, often dual-corded from separate UPS outputs.
On SCADA and building management drawings, the server symbol is tagged with its role, such as historian or HMI server. The power design should show which supply each power supply unit uses. The symbol does not show the software role or redundancy scheme unless tagged.

## How to read it

- Read the role tag.
- Check dual power feeds.

## Drawing checklist

- Tag role.
- Show power feeds.
- Show network connections.

## Important distinction

A switch forwards traffic; a server runs applications and stores data.

## Facts

- Power: Often dual-corded from UPS
- Typical roles: SCADA, historian, HMI
- Preview: Independent educational concept; plan symbols for this device vary between legends, so read the project key

## Public references

- [Lynx 5612-E-F4G-T8G-LV support](https://www.westermo.com/de/support/product-support/lynx-5612-e-f4g-t8g-lv) — Westermo. Public support page for a managed industrial Ethernet switch.
- [Electrical installation design methodology and references](https://www.electrical-installation.org/enwiki/General_rules_of_electrical_installation_design) — Schneider Electric — Electrical Installation Guide. Installation design context for coordinating low-current systems with power and lighting.

## Related references

- [Network switch symbol](iec-network-switch-plan-symbol.md)
- [Firewall symbol](iec-firewall-symbol.md)

![Server symbol — original educational illustration](../artwork/svg/iec-server-symbol.svg)

Original educational concept geometry, CC BY 4.0. Unitless; not a certified standards glyph or manufacturer footprint.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
