# -*- coding: utf-8 -*-
"""
Assembler script to construct the complete, enriched guides_view.js
"""

import sys, os, re

sys.stdout.reconfigure(encoding='utf-8')

# Import section generators
import tips
import phases
import targeting
import damage
import elements
import builds
import farming
import talents
import chests
import localization
import gacha
import events
import codes
import resources
import core_nav

TARGET_FILE = 'MonsterGirls_Account_Extractor/Web_Encyclopedia/js/guides_view.js'

with open(TARGET_FILE, 'r', encoding='utf-8') as f:
    orig_text = f.read()

# 1. Extract header and defaultMapTiles
tiles_end_marker = "activeSection: 'tips',"
active_idx = orig_text.find(tiles_end_marker)
if active_idx == -1:
    # try looking for const GuidesView
    gv_idx = orig_text.find('const GuidesView = {')
    if gv_idx != -1:
        prev_bracket = orig_text.rfind('];', 0, gv_idx)
        if prev_bracket == -1:
            prev_bracket = orig_text.rfind(']', 0, gv_idx)
    else:
        prev_bracket = orig_text.rfind('];')
        if prev_bracket == -1:
            prev_bracket = orig_text.rfind(']')
else:
    prev_bracket = orig_text.rfind('];', 0, active_idx)
    if prev_bracket == -1:
        prev_bracket = orig_text.rfind(']', 0, active_idx)

if prev_bracket == -1:
    print("Error: could not find closing bracket of defaultMapTiles")
    sys.exit(1)

# Ensure closing semicolon on defaultMapTiles
tiles_slice = orig_text[:prev_bracket+1]
if not tiles_slice.strip().endswith(';'):
    tiles_slice = tiles_slice + ';'

# 2. Extract tail methods starting from getTilesContent
matches = [m.start() for m in re.finditer(r'\bgetTilesContent\s*\(', orig_text)]
if not matches:
    print("Error: could not find getTilesContent definition")
    sys.exit(1)

tiles_method_pos = matches[-1]
tail_code = orig_text[tiles_method_pos:]

# 3. Assemble all parts
new_js_code = (
    tiles_slice + "\n\nconst GuidesView = {\n" +
    core_nav.get_core_nav_code() + "\n\n" +
    tips.get_tips_code() + "\n\n" +
    phases.get_phases_code() + "\n\n" +
    targeting.get_targeting_code() + "\n\n" +
    damage.get_damage_code() + "\n\n" +
    elements.get_elements_code() + "\n\n" +
    builds.get_builds_code() + "\n\n" +
    farming.get_farming_code() + "\n\n" +
    talents.get_talents_code() + "\n\n" +
    chests.get_chests_code() + "\n\n" +
    localization.get_localization_code() + "\n\n" +
    gacha.get_gacha_code() + "\n\n" +
    events.get_events_code() + "\n\n" +
    codes.get_codes_code() + "\n\n" +
    resources.get_resources_code() + "\n\n" +
    tail_code
)

# 4. Save to target file
with open(TARGET_FILE, 'w', encoding='utf-8') as f:
    f.write(new_js_code)

print(f"Successfully generated {TARGET_FILE}")
print(f"Original size: {len(orig_text)} chars ({orig_text.count(chr(10))} lines)")
print(f"New size: {len(new_js_code)} chars ({new_js_code.count(chr(10))} lines)")
