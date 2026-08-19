# -*- coding: utf-8 -*-
"""
Assembler script to construct the complete, enriched guides_view.js
"""

import sys, os, re, json

sys.stdout.reconfigure(encoding='utf-8')

# Import section generators
import core_nav
import tips
import tiles
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
import helpers

TARGET_FILE = 'MonsterGirls_Account_Extractor/Web_Encyclopedia/js/guides_view.js'
MAP_TILES_FILE = 'MonsterGirls_Account_Extractor/Web_Encyclopedia/data/map_tiles.json'

with open(MAP_TILES_FILE, 'r', encoding='utf-8') as f:
    tiles_data = json.load(f)

header_and_tiles = (
    "/**\n"
    " * Guides View Component for Guild of Monster Girls Web Encyclopedia\n"
    " * Contains all 14 Knowledge Base Chapters with rich interactive hero, item and tile drops.\n"
    " */\n\n"
    "const defaultMapTiles = " + json.dumps(tiles_data, ensure_ascii=False, indent=2) + ";"
)

# 2. Assemble all parts
new_js_code = (
    header_and_tiles + "\n\nconst GuidesView = {\n" +
    core_nav.get_core_nav_code() + "\n\n" +
    tips.get_tips_code() + "\n\n" +
    tiles.get_tiles_code() + "\n\n" +
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
    helpers.get_helpers_code()
)

# 3. Save to target file
with open(TARGET_FILE, 'w', encoding='utf-8') as f:
    f.write(new_js_code)

print(f"Successfully generated {TARGET_FILE}")
print(f"Size: {len(new_js_code)} chars ({new_js_code.count(chr(10))} lines)")
