# SPDX-License-Identifier: MIT
"""Dependency-free local search. Run: python3 examples/search.py 'switchgear'."""
import json
import sys
from pathlib import Path

records = json.loads((Path(__file__).resolve().parents[1] / "data/index.json").read_text())["entries"]
terms = " ".join(sys.argv[1:]).casefold().split()
matches = [record for record in records if all(term in " ".join([record["name"], record["abbreviation"], *record["aliases"], record["summary"]]).casefold() for term in terms)]
print(json.dumps(matches[:10], indent=2))
