# Power cable joint

An assembly joining power-cable sections while maintaining the required conductor, insulation, screen and environmental interfaces.

[Canonical reference](https://eloragrid.ai/objects/ga-cable-joint) · [Structured record](../entries/ga-cable-joint.json) · [All references](README.md)

Updated: 2026-10-27. Drawing use: GA, SLD. Reference families: Manufacturer.

## What it represents

A power cable joint connects cable sections as an installed assembly. The selected joint must be compatible with the cable construction and its conductor, insulation, screen and environmental interfaces.
In a GA or cable-routing drawing, locate the joint bay or connection position and coordinate space for jointing work, cable approach and the completed assembly. Reference the cable schedule and selected manufacturer instructions rather than inferring a kit from a generic outline.

## How to read it

- Identify the circuits and cable sections joined at the marked location, including screen or neutral continuity.
- A joint extends a cable route; a termination connects a cable to equipment or another defined interface.

## Drawing checklist

- Cross-reference the circuit identifier and both cable section specifications.
- Identify the selected joint kit and installation instructions for the actual cable construction.
- Coordinate joint location, cable approach, accessibility and space for the installed assembly.

## Important distinction

A control-wire splice is a connection concept. A power-cable joint is an installed assembly that must also address insulation, shielding and environmental interfaces for the selected cable.

## Facts

- Record type: Generic cable-system GA object
- Selection inputs: Cable construction, conductor, insulation and screen interfaces; installation environment
- Dimensions: Use the selected joint kit documentation; no dimensions supplied here

## Public references

- [Elastimold underground cable accessories](https://www.abb.com/global/en/areas/electrification/medium-voltage/cable-accessories-connectors/underground/elastimold/underground) — ABB. Public manufacturer overview confirms cable joint, splice, termination and grounding accessory applications.

## Related references

- [Wire splice](wire-splice.md)
- [Cable ladder / tray](cable-ladder.md)
- [Cable gland](ga-cable-gland.md)

GA objects have no standalone 2D icon. Use the canonical equipment page for current manufacturer drawing and 3D preview availability.

Elora-authored explanations are CC BY 4.0. Linked standards and manufacturer material retain their own rights. Confirm project requirements using primary sources.
