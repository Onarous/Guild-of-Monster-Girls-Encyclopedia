/**
 * Guides & Technical Knowledge Base Component for Guild of Monster Girls Web Encyclopedia
 * Contains in-depth mechanics, formulas, turn phases, targeting, gacha drop lists, and sync guides.
 * Full multilingual support for RU, EN, and CN.
 */

const GuidesView = {
  defaultMapTiles: [
  {
    "id": "tile_131",
    "name": {
      "RU": "Актиния",
      "EN": "Sea Anemone",
      "CN": "海葵"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1, 2x2",
    "sizes": [
      1,
      2
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Рыба",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Meat"
      ],
      "CN": [
        "鱼类",
        "肉类",
        "经验"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 5.0,
      "role": 37.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "⚔️ Экипировка: 5.0%",
        "👑 Фрагменты героинь: 37.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "⚔️ Gear: 5.0%",
        "👑 Heroine Shards: 37.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_13",
    "name": {
      "RU": "Алтарь наследия",
      "EN": "Legacy Altar",
      "CN": "传承祭坛"
    },
    "icon": "🏛️",
    "category": "altar",
    "category_name": "Алтари и Святилища",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Пепельные пустоши",
        "Глубокие лощины",
        "Заброшенные шахты"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "Withered Timberland",
        "The Deep Hollows",
        "The Sunken Sea"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "荒凉戈壁",
        "新生平原",
        "洞穴深处",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 100.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "🌿 Ресурсы/Материалы: 100.0%"
      ],
      "EN": [
        "🌿 Materials: 100.0%"
      ]
    }
  },
  {
    "id": "tile_7",
    "name": {
      "RU": "Астральный разлом",
      "EN": "Astral Rift",
      "CN": "星界裂痕"
    },
    "icon": "🔮",
    "category": "special",
    "category_name": "Разломы и Аномалии",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Морозная тундра",
        "Бескрайняя степь"
      ],
      "EN": [
        "Boundless Steppe",
        "Frostbound Tundra"
      ],
      "CN": [
        "广袤草原",
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_76",
    "name": {
      "RU": "Божественный саженец",
      "EN": "Divine Sapling",
      "CN": "神树幼苗"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_148",
    "name": {
      "RU": "Бочка",
      "EN": "Barrel",
      "CN": "木桶"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Ветреные берега",
        "Пепельные пустоши"
      ],
      "EN": [
        "Breezy Shores",
        "Ashland Wastes"
      ],
      "CN": [
        "荒凉戈壁",
        "清凉沙滩"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_133",
    "name": {
      "RU": "Бутылка желаний",
      "EN": "Wishing Bottle",
      "CN": "许愿瓶"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_135",
    "name": {
      "RU": "Глубинный источник",
      "EN": "Deep Spring",
      "CN": "深海涌泉"
    },
    "icon": "⛲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_162",
    "name": {
      "RU": "Гравий",
      "EN": "Gravel",
      "CN": "碎石"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня"
      ],
      "EN": [
        "Endless Desert"
      ],
      "CN": [
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_121",
    "name": {
      "RU": "Гриб",
      "EN": "Mushroom",
      "CN": "蘑菇"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1, 2x2, 5x5",
    "sizes": [
      1,
      2,
      5
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины"
      ],
      "EN": [
        "The Deep Hollows"
      ],
      "CN": [
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 100.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 100.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_12",
    "name": {
      "RU": "Гробница героини",
      "EN": "Heroine's Tomb",
      "CN": "勇者之墓"
    },
    "icon": "⚰️",
    "category": "event",
    "category_name": "Алтари и Святилища",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Пепельные пустоши",
        "Глубокие лощины",
        "Заброшенные шахты"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "Withered Timberland",
        "The Deep Hollows",
        "The Sunken Sea"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "荒凉戈壁",
        "新生平原",
        "洞穴深处",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 100.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "🌿 Ресурсы/Материалы: 100.0%"
      ],
      "EN": [
        "🌿 Materials: 100.0%"
      ]
    }
  },
  {
    "id": "tile_132",
    "name": {
      "RU": "Грубый указатель",
      "EN": "Crude Marker",
      "CN": "简陋标记"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_75",
    "name": {
      "RU": "Дерево с кислыми плодами",
      "EN": "Sour Fruit Tree",
      "CN": "酸果树"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_47",
    "name": {
      "RU": "Древний алтарь",
      "EN": "Ancient Altar",
      "CN": "古代祭坛"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "4x4, 6x6",
    "sizes": [
      4,
      6
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины",
        "Пепельные пустоши"
      ],
      "EN": [
        "Dawnstep Plains",
        "Ashland Wastes"
      ],
      "CN": [
        "荒凉戈壁",
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_110",
    "name": {
      "RU": "Жила кристаллов маны",
      "EN": "Mana Crystal Vein",
      "CN": "魔晶矿"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1, 3x3, 4x4, 6x6",
    "sizes": [
      1,
      3,
      4,
      6
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты",
        "Магмовый проход"
      ],
      "EN": [
        "Forsaken Mines",
        "Magma Passage"
      ],
      "CN": [
        "废弃矿洞",
        "熔岩通道"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 100.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 100.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_11",
    "name": {
      "RU": "Заводной мимик",
      "EN": "Clockwork Mimic",
      "CN": "机巧宝箱怪"
    },
    "icon": "📦",
    "category": "mimic",
    "category_name": "Мимики и Боссы",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Пепельные пустоши",
        "Глубокие лощины",
        "Заброшенные шахты"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "Withered Timberland",
        "The Deep Hollows",
        "The Sunken Sea"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "荒凉戈壁",
        "新生平原",
        "洞穴深处",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [],
      "EN": []
    }
  },
  {
    "id": "tile_17",
    "name": {
      "RU": "Золотое хранилище",
      "EN": "Golden Vault",
      "CN": "黄金宝库"
    },
    "icon": "🪙",
    "category": "chest",
    "category_name": "Сундуки и Клады",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Пепельные пустоши",
        "Глубокие лощины",
        "Заброшенные шахты"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "Withered Timberland",
        "The Deep Hollows",
        "The Sunken Sea"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "荒凉戈壁",
        "新生平原",
        "洞穴深处",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 100.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "🌿 Ресурсы/Материалы: 100.0%"
      ],
      "EN": [
        "🌿 Materials: 100.0%"
      ]
    }
  },
  {
    "id": "tile_109",
    "name": {
      "RU": "Золотой столб",
      "EN": "Golden Pillar",
      "CN": "黄金柱"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты",
        "Магмовый проход"
      ],
      "EN": [
        "Forsaken Mines",
        "Magma Passage"
      ],
      "CN": [
        "废弃矿洞",
        "熔岩通道"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_157",
    "name": {
      "RU": "Кактус",
      "EN": "Cactus",
      "CN": "仙人掌"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1, 2x2, 3x3, 4x4, 6x6",
    "sizes": [
      1,
      2,
      3,
      4,
      6
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня",
        "Пепельные пустоши"
      ],
      "EN": [
        "Endless Desert",
        "Ashland Wastes"
      ],
      "CN": [
        "荒凉戈壁",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "Руда",
        "Мясо",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "Energy",
        "Meat",
        "Plant",
        "Ore",
        "EXP"
      ],
      "CN": [
        "能量",
        "经验",
        "植物",
        "肉类",
        "矿石"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 100.0,
      "role": 37.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "⚔️ Экипировка: 100.0%",
        "👑 Фрагменты героинь: 37.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "⚔️ Gear: 100.0%",
        "👑 Heroine Shards: 37.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_122",
    "name": {
      "RU": "Каменная плита",
      "EN": "Stone Slab",
      "CN": "石板"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины"
      ],
      "EN": [
        "The Deep Hollows"
      ],
      "CN": [
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_163",
    "name": {
      "RU": "Каменные шипы",
      "EN": "Stone Spikes",
      "CN": "石刺"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня"
      ],
      "EN": [
        "Endless Desert"
      ],
      "CN": [
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_173",
    "name": {
      "RU": "Каменный колодец",
      "EN": "Stone Well",
      "CN": "石井"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_31",
    "name": {
      "RU": "Костер",
      "EN": "Campfire",
      "CN": "篝火"
    },
    "icon": "🔥",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Plant"
      ],
      "CN": [
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 0.0,
      "role": 37.0,
      "materials": 0.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "👑 Фрагменты героинь: 37.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "👑 Heroine Shards: 37.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_59",
    "name": {
      "RU": "Кости",
      "EN": "Bones",
      "CN": "白骨"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1, 2x2, 3x3",
    "sizes": [
      1,
      2,
      3
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя пустыня",
        "Пепельные пустоши"
      ],
      "EN": [
        "Endless Desert",
        "Ashland Wastes",
        "Crimson Highlands"
      ],
      "CN": [
        "荒凉戈壁",
        "无尽荒漠",
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Ore"
      ],
      "CN": [
        "肉类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 100.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 100.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_48",
    "name": {
      "RU": "Костяной тотем",
      "EN": "Bone Totem",
      "CN": "兽骨图腾"
    },
    "icon": "🗿",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Бескрайняя степь"
      ],
      "EN": [
        "Boundless Steppe"
      ],
      "CN": [
        "广袤草原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat"
      ],
      "CN": [
        "肉类",
        "经验"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 0.0,
      "role": 37.0,
      "materials": 0.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "👑 Фрагменты героинь: 37.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "👑 Heroine Shards: 37.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_49",
    "name": {
      "RU": "Куст",
      "EN": "Shrub",
      "CN": "灌木丛"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Бескрайняя степь",
        "Блуждающий лес"
      ],
      "EN": [
        "Boundless Steppe",
        "Wandering Woods"
      ],
      "CN": [
        "广袤草原",
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_1",
    "name": {
      "RU": "Лагерь",
      "EN": "Camp",
      "CN": "营地"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Пепельные пустоши",
        "Глубокие лощины",
        "Заброшенные шахты"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "Withered Timberland",
        "The Deep Hollows",
        "The Sunken Sea"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "荒凉戈壁",
        "新生平原",
        "洞穴深处",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [],
      "EN": []
    }
  },
  {
    "id": "tile_77",
    "name": {
      "RU": "Лесное сокровище",
      "EN": "Forest Treasure",
      "CN": "森林秘宝"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_92",
    "name": {
      "RU": "Ловушка",
      "EN": "Trap",
      "CN": "陷阱"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_74",
    "name": {
      "RU": "Лужа",
      "EN": "Puddle",
      "CN": "小水塘"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Рыба",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Fish"
      ],
      "CN": [
        "鱼类",
        "经验"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 0.0,
      "role": 37.0,
      "materials": 0.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "👑 Фрагменты героинь: 37.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "👑 Heroine Shards: 37.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_61",
    "name": {
      "RU": "Материалы",
      "EN": "Materials",
      "CN": "素材"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_91",
    "name": {
      "RU": "Медвежий капкан",
      "EN": "Bear Trap",
      "CN": "捕兽夹"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom"
      ],
      "CN": [
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 0.0,
      "role": 37.0,
      "materials": 0.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "👑 Фрагменты героинь: 37.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "👑 Heroine Shards: 37.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_10",
    "name": {
      "RU": "Металлический мимик",
      "EN": "Metal Mimic",
      "CN": "金属宝箱怪"
    },
    "icon": "📦",
    "category": "mimic",
    "category_name": "Мимики и Боссы",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Пепельные пустоши",
        "Глубокие лощины",
        "Заброшенные шахты"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "Withered Timberland",
        "The Deep Hollows",
        "The Sunken Sea"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "荒凉戈壁",
        "新生平原",
        "洞穴深处",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [],
      "EN": []
    }
  },
  {
    "id": "tile_95",
    "name": {
      "RU": "Меч",
      "EN": "Sword",
      "CN": "宝剑"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_124",
    "name": {
      "RU": "Меч в камне",
      "EN": "Sword in Stone",
      "CN": "石中剑"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины"
      ],
      "EN": [
        "The Deep Hollows"
      ],
      "CN": [
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_172",
    "name": {
      "RU": "Могильная плита",
      "EN": "Gravestone",
      "CN": "墓碑"
    },
    "icon": "⚰️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1, 2x2",
    "sizes": [
      1,
      2
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Гриб",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom"
      ],
      "CN": [
        "能量",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 100.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 100.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_60",
    "name": {
      "RU": "Набор",
      "EN": "Pack",
      "CN": "背包"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_34",
    "name": {
      "RU": "Нора",
      "EN": "Burrow",
      "CN": "地洞"
    },
    "icon": "🐺",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_15",
    "name": {
      "RU": "Ограниченное предложение",
      "EN": "Limited Offer",
      "CN": "限时礼包"
    },
    "icon": "🎁",
    "category": "special",
    "category_name": "Торговцы и Магазины",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Пепельные пустоши",
        "Глубокие лощины",
        "Заброшенные шахты"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "Withered Timberland",
        "The Deep Hollows",
        "The Sunken Sea"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "荒凉戈壁",
        "新生平原",
        "洞穴深处",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 100.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "🌿 Ресурсы/Материалы: 100.0%"
      ],
      "EN": [
        "🌿 Materials: 100.0%"
      ]
    }
  },
  {
    "id": "tile_107",
    "name": {
      "RU": "Открытая шахта",
      "EN": "Open Mine",
      "CN": "露天矿"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты",
        "Магмовый проход"
      ],
      "EN": [
        "Forsaken Mines",
        "Magma Passage"
      ],
      "CN": [
        "废弃矿洞",
        "熔岩通道"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_35",
    "name": {
      "RU": "Палатка",
      "EN": "Tent",
      "CN": "帐篷"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_57",
    "name": {
      "RU": "Пень",
      "EN": "Stump",
      "CN": "木桩"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat"
      ],
      "CN": [
        "肉类",
        "经验"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 0.0,
      "role": 37.0,
      "materials": 0.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "👑 Фрагменты героинь: 37.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "👑 Heroine Shards: 37.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_108",
    "name": {
      "RU": "Пещера",
      "EN": "Cave",
      "CN": "地穴"
    },
    "icon": "🐺",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты",
        "Магмовый проход"
      ],
      "EN": [
        "Forsaken Mines",
        "Magma Passage"
      ],
      "CN": [
        "废弃矿洞",
        "熔岩通道"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_174",
    "name": {
      "RU": "Полый пень",
      "EN": "Hollow Stump",
      "CN": "空心树桩"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_33",
    "name": {
      "RU": "Посылка",
      "EN": "Parcel",
      "CN": "包裹"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_146",
    "name": {
      "RU": "Раковина",
      "EN": "Conch",
      "CN": "海螺"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Ветреные берега"
      ],
      "EN": [
        "Breezy Shores"
      ],
      "CN": [
        "清凉沙滩"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy"
      ],
      "CN": [
        "能量",
        "经验"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 0.0,
      "role": 37.0,
      "materials": 0.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "👑 Фрагменты героинь: 37.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "👑 Heroine Shards: 37.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_149",
    "name": {
      "RU": "Ракушка",
      "EN": "Shell",
      "CN": "贝壳"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Ветреные берега"
      ],
      "EN": [
        "Breezy Shores"
      ],
      "CN": [
        "清凉沙滩"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_6",
    "name": {
      "RU": "Реликвия",
      "EN": "Relic",
      "CN": "遗物"
    },
    "icon": "🏺",
    "category": "chest",
    "category_name": "Сундуки и Клады",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Морозная тундра",
        "Бескрайняя степь"
      ],
      "EN": [
        "Boundless Steppe",
        "Frostbound Tundra"
      ],
      "CN": [
        "广袤草原",
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_16",
    "name": {
      "RU": "Ритуальный мимик",
      "EN": "Ritual Mimic",
      "CN": "献祭宝箱怪"
    },
    "icon": "📦",
    "category": "mimic",
    "category_name": "Мимики и Боссы",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Пепельные пустоши",
        "Глубокие лощины",
        "Заброшенные шахты",
        "Затонувшее море"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "The Deep Hollows",
        "The Sunken Sea",
        "Breezy Shores"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "荒凉戈壁",
        "新生平原",
        "洞穴深处",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 100.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "🌿 Ресурсы/Материалы: 100.0%"
      ],
      "EN": [
        "🌿 Materials: 100.0%"
      ]
    }
  },
  {
    "id": "tile_120",
    "name": {
      "RU": "Рудничник",
      "EN": "Mineshroom",
      "CN": "地雷菇"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины"
      ],
      "EN": [
        "The Deep Hollows"
      ],
      "CN": [
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom"
      ],
      "CN": [
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 0.0,
      "role": 37.0,
      "materials": 0.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "👑 Фрагменты героинь: 37.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "👑 Heroine Shards: 37.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_134",
    "name": {
      "RU": "Серебряный якорь",
      "EN": "Silver Anchor",
      "CN": "银船锚"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_32",
    "name": {
      "RU": "Скала",
      "EN": "Rock",
      "CN": "岩石"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1, 2x2, 3x3, 4x4",
    "sizes": [
      1,
      2,
      3,
      4
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Бескрайняя пустыня",
        "Рассветные равнины",
        "Ветреные берега"
      ],
      "EN": [
        "Dawnstep Plains",
        "Boundless Steppe",
        "Withered Timberland",
        "Breezy Shores",
        "Crimson Highlands",
        "Endless Desert"
      ],
      "CN": [
        "清凉沙滩",
        "新生平原",
        "无尽荒漠",
        "广袤草原",
        "枯木丛林",
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "Руда",
        "ОП",
        "Гриб",
        "Энергия"
      ],
      "EN": [
        "Energy",
        "Mushroom",
        "Plant",
        "Ore",
        "EXP"
      ],
      "CN": [
        "能量",
        "经验",
        "蘑菇",
        "植物",
        "矿石"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 100.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 100.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_5",
    "name": {
      "RU": "Снежок",
      "EN": "Snowball",
      "CN": "雪球"
    },
    "icon": "❄️",
    "category": "chest",
    "category_name": "Сундуки и Клады",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Морозная тундра"
      ],
      "EN": [
        "Frostbound Tundra"
      ],
      "CN": [
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_93",
    "name": {
      "RU": "Статуя из слизи",
      "EN": "Slime Statue",
      "CN": "史莱姆石像"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_158",
    "name": {
      "RU": "Стела",
      "EN": "Stele",
      "CN": "石碑"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Пепельные пустоши"
      ],
      "EN": [
        "Ashland Wastes"
      ],
      "CN": [
        "荒凉戈壁"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_14",
    "name": {
      "RU": "Стела пророчества",
      "EN": "Prophecy Stele",
      "CN": "预言石碑"
    },
    "icon": "⛏️",
    "category": "event",
    "category_name": "Алтари и Святилища",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Пепельные пустоши",
        "Глубокие лощины",
        "Заброшенные шахты"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "Withered Timberland",
        "The Deep Hollows",
        "The Sunken Sea"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "荒凉戈壁",
        "新生平原",
        "洞穴深处",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 100.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "🌿 Ресурсы/Материалы: 100.0%"
      ],
      "EN": [
        "🌿 Materials: 100.0%"
      ]
    }
  },
  {
    "id": "tile_9",
    "name": {
      "RU": "Странствующий торговец",
      "EN": "Traveling Merchant",
      "CN": "旅行商人"
    },
    "icon": "🧰",
    "category": "merchant",
    "category_name": "Торговцы и Магазины",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Пепельные пустоши",
        "Глубокие лощины",
        "Заброшенные шахты"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "Withered Timberland",
        "The Deep Hollows",
        "The Sunken Sea"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "荒凉戈壁",
        "新生平原",
        "洞穴深处",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [],
      "EN": []
    }
  },
  {
    "id": "tile_4",
    "name": {
      "RU": "Сундук",
      "EN": "Chest",
      "CN": "宝箱"
    },
    "icon": "📦",
    "category": "chest",
    "category_name": "Сундуки и Клады",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Пепельные пустоши",
        "Глубокие лощины",
        "Заброшенные шахты"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "Withered Timberland",
        "The Deep Hollows",
        "The Sunken Sea"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "荒凉戈壁",
        "新生平原",
        "洞穴深处",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 80.0,
      "equip": 20.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 80.0%",
        "⚔️ Экипировка: 20.0%"
      ],
      "EN": [
        "📦 Chests: 80.0%",
        "⚔️ Gear: 20.0%"
      ]
    }
  },
  {
    "id": "tile_123",
    "name": {
      "RU": "Тайный вход",
      "EN": "Hidden Entrance",
      "CN": "隐蔽入口"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины"
      ],
      "EN": [
        "The Deep Hollows"
      ],
      "CN": [
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_3",
    "name": {
      "RU": "Тотем Морозного клыка",
      "EN": "Frostfang Totem",
      "CN": "冰牙图腾"
    },
    "icon": "🗿",
    "category": "totem",
    "category_name": "Тотемы и Святыни",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Морозная тундра"
      ],
      "EN": [
        "Frostbound Tundra"
      ],
      "CN": [
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 0.0,
      "role": 37.0,
      "materials": 0.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "👑 Фрагменты героинь: 37.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "👑 Heroine Shards: 37.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_58",
    "name": {
      "RU": "Трава",
      "EN": "Grass",
      "CN": "草丛"
    },
    "icon": "🌿",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_8",
    "name": {
      "RU": "Треснувшая земля",
      "EN": "Cracked Ground",
      "CN": "龟裂地面"
    },
    "icon": "🌋",
    "category": "special",
    "category_name": "Разломы и Аномалии",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Морозная тундра",
        "Бескрайняя степь"
      ],
      "EN": [
        "Boundless Steppe",
        "Frostbound Tundra"
      ],
      "CN": [
        "广袤草原",
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_156",
    "name": {
      "RU": "Указатель",
      "EN": "Signpost",
      "CN": "路牌"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Пепельные пустоши"
      ],
      "EN": [
        "Ashland Wastes"
      ],
      "CN": [
        "荒凉戈壁"
      ]
    },
    "materials": {
      "RU": [
        "Мясо"
      ],
      "EN": [
        "Meat"
      ],
      "CN": [
        "肉类"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 0.0,
      "role": 37.0,
      "materials": 0.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "👑 Фрагменты героинь: 37.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "👑 Heroine Shards: 37.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_165",
    "name": {
      "RU": "Цветок солнечного пламени",
      "EN": "Sunblaze Flower",
      "CN": "烈阳花"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня"
      ],
      "EN": [
        "Endless Desert"
      ],
      "CN": [
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_94",
    "name": {
      "RU": "Шипы",
      "EN": "Thorns",
      "CN": "荆棘"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Увядший лес",
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove",
        "Withered Timberland"
      ],
      "CN": [
        "幽暗密林",
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Plant"
      ],
      "CN": [
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 100.0,
      "role": 37.0,
      "materials": 0.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "⚔️ Экипировка: 100.0%",
        "👑 Фрагменты героинь: 37.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "⚔️ Gear: 100.0%",
        "👑 Heroine Shards: 37.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_147",
    "name": {
      "RU": "Ящик",
      "EN": "Crate",
      "CN": "木箱"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Ветреные берега"
      ],
      "EN": [
        "Breezy Shores"
      ],
      "CN": [
        "清凉沙滩"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_164",
    "name": {
      "RU": "Ящик",
      "EN": "Crate",
      "CN": "箱子"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня"
      ],
      "EN": [
        "Endless Desert"
      ],
      "CN": [
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 0.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "⚔️ Экипировка: 100.0%"
      ],
      "EN": [
        "⚔️ Gear: 100.0%"
      ]
    }
  },
  {
    "id": "tile_106",
    "name": {
      "RU": "Ящик с рудой",
      "EN": "Ore Crate",
      "CN": "矿箱"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": true,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты",
        "Магмовый проход"
      ],
      "EN": [
        "Forsaken Mines",
        "Magma Passage"
      ],
      "CN": [
        "废弃矿洞",
        "熔岩通道"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 60.0,
      "equip": 0.0,
      "role": 37.0,
      "materials": 0.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 60.0%",
        "👑 Фрагменты героинь: 37.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 60.0%",
        "👑 Heroine Shards: 37.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_26",
    "name": {
      "RU": "Арктический аванпост",
      "EN": "Arctic Outpost",
      "CN": "极寒哨塔"
    },
    "icon": "🏰",
    "category": "poi",
    "category_name": "Крупные постройки (POI)",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Морозная тундра"
      ],
      "EN": [
        "Frostbound Tundra"
      ],
      "CN": [
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 57.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 57.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 57.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_36",
    "name": {
      "RU": "Багряный клен",
      "EN": "Crimson Maple",
      "CN": "红枫树"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "3x3",
    "sizes": [
      3
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_87",
    "name": {
      "RU": "Большое дерево",
      "EN": "Big Tree",
      "CN": "大树"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_114",
    "name": {
      "RU": "Брошенная тележка",
      "EN": "Abandoned Cart",
      "CN": "废弃矿车"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты"
      ],
      "EN": [
        "Forsaken Mines"
      ],
      "CN": [
        "废弃矿洞"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_68",
    "name": {
      "RU": "Великий тотем",
      "EN": "Grand Totem",
      "CN": "巨大图腾"
    },
    "icon": "🗿",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_41",
    "name": {
      "RU": "Водяное дерево",
      "EN": "Water Tree",
      "CN": "蓄水树"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4, 9x9",
    "sizes": [
      4,
      9
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_81",
    "name": {
      "RU": "Водяной пень",
      "EN": "Water Stump",
      "CN": "蓄水树桩"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Рыба",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Plant"
      ],
      "CN": [
        "鱼类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_171",
    "name": {
      "RU": "Врата Исекая",
      "EN": "Isekai Gate",
      "CN": "异界之门"
    },
    "icon": "🚪",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "35x35",
    "sizes": [
      35
    ],
    "biomes": {
      "RU": [
        "Магмовый проход"
      ],
      "EN": [
        "Magma Passage"
      ],
      "CN": [
        "熔岩通道"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 15.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 15.0%"
      ],
      "EN": [
        "📦 Chests: 15.0%"
      ]
    }
  },
  {
    "id": "tile_64",
    "name": {
      "RU": "Временный шатер",
      "EN": "Makeshift Tent",
      "CN": "简陋帐篷"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Energy"
      ],
      "CN": [
        "能量",
        "肉类",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_176",
    "name": {
      "RU": "Высокое мертвое дерево",
      "EN": "Tall Dead Tree",
      "CN": "高大枯树"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_178",
    "name": {
      "RU": "Гигантский гриб",
      "EN": "Giant Mushroom",
      "CN": "巨大蘑菇"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_141",
    "name": {
      "RU": "Гигантский зеленый коралл",
      "EN": "Giant Green Coral",
      "CN": "巨大绿珊瑚"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Рыба",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Meat"
      ],
      "CN": [
        "鱼类",
        "肉类",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_69",
    "name": {
      "RU": "Гигантский кол",
      "EN": "Giant Stake",
      "CN": "巨大木桩"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_84",
    "name": {
      "RU": "Гигантский куст",
      "EN": "Giant Shrub",
      "CN": "巨大灌木"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_72",
    "name": {
      "RU": "Глубокая пещера",
      "EN": "Deep Cavern",
      "CN": "幽深洞穴"
    },
    "icon": "🐺",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6, 8x8",
    "sizes": [
      6,
      8
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods",
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地",
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "Рыба",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "鱼类",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_104",
    "name": {
      "RU": "Грибная хижина",
      "EN": "Mushroom Hut",
      "CN": "蘑菇小屋"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "9x9",
    "sizes": [
      9
    ],
    "biomes": {
      "RU": [
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Plant",
        "Mushroom"
      ],
      "CN": [
        "植物",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_50",
    "name": {
      "RU": "Грубый тотем",
      "EN": "Crude Totem",
      "CN": "简易图腾"
    },
    "icon": "🗿",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Бескрайняя степь"
      ],
      "EN": [
        "Boundless Steppe"
      ],
      "CN": [
        "广袤草原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_100",
    "name": {
      "RU": "Дерево",
      "EN": "Tree",
      "CN": "树木"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_42",
    "name": {
      "RU": "Дерево-валун",
      "EN": "Boulder Tree",
      "CN": "盘石树"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Plant",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_150",
    "name": {
      "RU": "Доска",
      "EN": "Plank",
      "CN": "木板"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Ветреные берега"
      ],
      "EN": [
        "Breezy Shores"
      ],
      "CN": [
        "清凉沙滩"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_89",
    "name": {
      "RU": "Древнее дерево",
      "EN": "Ancient Tree",
      "CN": "参天古树"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "9x9",
    "sizes": [
      9
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_71",
    "name": {
      "RU": "Заброшенная хижина",
      "EN": "Abandoned Cabin",
      "CN": "遗弃木屋"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "8x8",
    "sizes": [
      8
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Energy"
      ],
      "CN": [
        "能量",
        "肉类",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_160",
    "name": {
      "RU": "Заброшенная шахта",
      "EN": "Abandoned Mine",
      "CN": "遗弃矿洞"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Пепельные пустоши"
      ],
      "EN": [
        "Ashland Wastes"
      ],
      "CN": [
        "荒凉戈壁"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Ore"
      ],
      "CN": [
        "肉类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_19",
    "name": {
      "RU": "Залежи руды",
      "EN": "Surface Ore",
      "CN": "露天矿石"
    },
    "icon": "⛏️",
    "category": "resource",
    "category_name": "Крупные постройки (POI)",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Морозная тундра",
        "Бескрайняя степь"
      ],
      "EN": [
        "Boundless Steppe",
        "Frostbound Tundra"
      ],
      "CN": [
        "广袤草原",
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "Растение",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Plant",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "植物",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_29",
    "name": {
      "RU": "Замерзшие ворота",
      "EN": "Frozen Gate",
      "CN": "极寒之门"
    },
    "icon": "🚪",
    "category": "gate",
    "category_name": "Врата подземелья",
    "is_special": false,
    "size_str": "35x35",
    "sizes": [
      35
    ],
    "biomes": {
      "RU": [
        "Морозная тундра"
      ],
      "EN": [
        "Frostbound Tundra"
      ],
      "CN": [
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 15.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 15.0%"
      ],
      "EN": [
        "📦 Chests: 15.0%"
      ]
    }
  },
  {
    "id": "tile_22",
    "name": {
      "RU": "Замерзший тотем",
      "EN": "Frozen Totem",
      "CN": "霜冻图腾"
    },
    "icon": "🗿",
    "category": "totem",
    "category_name": "Тотемы и Святыни",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Морозная тундра"
      ],
      "EN": [
        "Frostbound Tundra"
      ],
      "CN": [
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Ore"
      ],
      "CN": [
        "肉类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 57.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 57.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 57.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_142",
    "name": {
      "RU": "Заросли рифа",
      "EN": "Reef Thicket",
      "CN": "礁石丛林"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Рыба",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Meat"
      ],
      "CN": [
        "鱼类",
        "肉类",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_99",
    "name": {
      "RU": "Заросли цветов",
      "EN": "Pocket Flowers",
      "CN": "口袋花丛"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Plant",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_63",
    "name": {
      "RU": "Засохший пень",
      "EN": "Withered Stump",
      "CN": "干枯树桩"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "3x3",
    "sizes": [
      3
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_175",
    "name": {
      "RU": "Засохший пень",
      "EN": "Withered Stump",
      "CN": "枯木树桩"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 3x3, 4x4, 6x6",
    "sizes": [
      2,
      3,
      4,
      6
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_55",
    "name": {
      "RU": "Золотолистное дерево",
      "EN": "Golden Leaf Tree",
      "CN": "金叶树"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "9x9",
    "sizes": [
      9
    ],
    "biomes": {
      "RU": [
        "Бескрайняя степь"
      ],
      "EN": [
        "Boundless Steppe"
      ],
      "CN": [
        "广袤草原"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_37",
    "name": {
      "RU": "Зонтичное дерево",
      "EN": "Umbrella Tree",
      "CN": "伞树"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_168",
    "name": {
      "RU": "Зыбучие пески",
      "EN": "Quicksand",
      "CN": "流沙"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня"
      ],
      "EN": [
        "Endless Desert"
      ],
      "CN": [
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_105",
    "name": {
      "RU": "Каменистая земля",
      "EN": "Rocky Ground",
      "CN": "岩地"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины",
        "Заброшенные шахты",
        "Магмовый проход"
      ],
      "EN": [
        "The Deep Hollows",
        "Forsaken Mines",
        "Magma Passage"
      ],
      "CN": [
        "洞穴深处",
        "废弃矿洞",
        "熔岩通道"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 100.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "🌿 Ресурсы/Материалы: 100.0%"
      ],
      "EN": [
        "🌿 Materials: 100.0%"
      ]
    }
  },
  {
    "id": "tile_167",
    "name": {
      "RU": "Каменистая местность",
      "EN": "Rocky Terrain",
      "CN": "乱石地"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня"
      ],
      "EN": [
        "Endless Desert"
      ],
      "CN": [
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_112",
    "name": {
      "RU": "Каменная колонна",
      "EN": "Stone Pillar",
      "CN": "岩石柱"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 3x3, 5x5, 6x6",
    "sizes": [
      2,
      3,
      5,
      6
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты",
        "Магмовый проход"
      ],
      "EN": [
        "Forsaken Mines",
        "Magma Passage"
      ],
      "CN": [
        "废弃矿洞",
        "熔岩通道"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_153",
    "name": {
      "RU": "Каменный грот",
      "EN": "Stone Grotto",
      "CN": "岩石洞窟"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "8x8",
    "sizes": [
      8
    ],
    "biomes": {
      "RU": [
        "Ветреные берега"
      ],
      "EN": [
        "Breezy Shores"
      ],
      "CN": [
        "清凉沙滩"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_65",
    "name": {
      "RU": "Каменный тотем",
      "EN": "Stone Totem",
      "CN": "岩石图腾"
    },
    "icon": "🗿",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_45",
    "name": {
      "RU": "Кленовая роща",
      "EN": "Maple Grove",
      "CN": "红枫树林"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_177",
    "name": {
      "RU": "Колючий камень",
      "EN": "Thorned Rock",
      "CN": "荆棘岩石"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Plant",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_145",
    "name": {
      "RU": "Кораблекрушение",
      "EN": "Shipwreck",
      "CN": "沉船"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "15x15",
    "sizes": [
      15
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Рыба",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Meat"
      ],
      "CN": [
        "鱼类",
        "肉类",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_140",
    "name": {
      "RU": "Коралловый лес",
      "EN": "Coral Forest",
      "CN": "珊瑚丛林"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Рыба",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Meat"
      ],
      "CN": [
        "鱼类",
        "肉类",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_115",
    "name": {
      "RU": "Кристальная жила",
      "EN": "Crystal Vein",
      "CN": "水晶矿"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4, 6x6",
    "sizes": [
      4,
      6
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты"
      ],
      "EN": [
        "Forsaken Mines"
      ],
      "CN": [
        "废弃矿洞"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_126",
    "name": {
      "RU": "Кристальный гриб",
      "EN": "Crystal Mushroom",
      "CN": "水晶蘑菇"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины"
      ],
      "EN": [
        "The Deep Hollows"
      ],
      "CN": [
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Гриб",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom"
      ],
      "CN": [
        "能量",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_73",
    "name": {
      "RU": "Курган зверя",
      "EN": "Beast Mound",
      "CN": "巨兽之墓"
    },
    "icon": "⚰️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "8x8",
    "sizes": [
      8
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Ore"
      ],
      "CN": [
        "肉类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_38",
    "name": {
      "RU": "Куча хвороста",
      "EN": "Brush Pile",
      "CN": "杂草堆"
    },
    "icon": "🌿",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_111",
    "name": {
      "RU": "Куча ящиков",
      "EN": "Crate Pile",
      "CN": "矿箱堆"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "3x3, 4x4",
    "sizes": [
      3,
      4
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты"
      ],
      "EN": [
        "Forsaken Mines"
      ],
      "CN": [
        "废弃矿洞"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_24",
    "name": {
      "RU": "Ледяной тотем",
      "EN": "Ice Totem",
      "CN": "坚冰图腾"
    },
    "icon": "🗿",
    "category": "totem",
    "category_name": "Тотемы и Святыни",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Морозная тундра"
      ],
      "EN": [
        "Frostbound Tundra"
      ],
      "CN": [
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Ore"
      ],
      "CN": [
        "肉类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 57.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 57.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 57.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_90",
    "name": {
      "RU": "Лесной грот",
      "EN": "Forest Grotto",
      "CN": "森林密穴"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "15x15",
    "sizes": [
      15
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_39",
    "name": {
      "RU": "Логово зверя",
      "EN": "Beast Den",
      "CN": "野兽巢穴"
    },
    "icon": "🐺",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "3x3",
    "sizes": [
      3
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины",
        "Бескрайняя степь"
      ],
      "EN": [
        "Dawnstep Plains",
        "Boundless Steppe"
      ],
      "CN": [
        "新生平原",
        "广袤草原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Руда",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "肉类",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_28",
    "name": {
      "RU": "Логово морозной волчицы",
      "EN": "Frostwolf Den",
      "CN": "霜狼巢穴"
    },
    "icon": "🐺",
    "category": "poi",
    "category_name": "Крупные постройки (POI)",
    "is_special": false,
    "size_str": "8x8",
    "sizes": [
      8
    ],
    "biomes": {
      "RU": [
        "Морозная тундра"
      ],
      "EN": [
        "Frostbound Tundra"
      ],
      "CN": [
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Ore"
      ],
      "CN": [
        "肉类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 57.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 57.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 57.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_56",
    "name": {
      "RU": "Логово огненной волчицы",
      "EN": "Flamewolf Den",
      "CN": "炎狼巢穴"
    },
    "icon": "🐺",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "8x8",
    "sizes": [
      8
    ],
    "biomes": {
      "RU": [
        "Бескрайняя степь"
      ],
      "EN": [
        "Boundless Steppe"
      ],
      "CN": [
        "广袤草原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Ore"
      ],
      "CN": [
        "肉类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_30",
    "name": {
      "RU": "Луга",
      "EN": "Grassland",
      "CN": "草地"
    },
    "icon": "🌿",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Бескрайняя степь",
        "Увядший лес",
        "Блуждающий лес",
        "Роща теневой завесы",
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains",
        "Wandering Woods",
        "Boundless Steppe",
        "Withered Timberland",
        "Breezy Shores",
        "Crimson Highlands"
      ],
      "CN": [
        "幽暗密林",
        "清凉沙滩",
        "新生平原",
        "广袤草原",
        "迷失森林",
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "Мясо",
        "ОП",
        "Гриб",
        "Энергия"
      ],
      "EN": [
        "Meat",
        "Energy",
        "Mushroom",
        "Plant",
        "EXP"
      ],
      "CN": [
        "能量",
        "经验",
        "蘑菇",
        "植物",
        "肉类"
      ]
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 100.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "🌿 Ресурсы/Материалы: 100.0%"
      ],
      "EN": [
        "🌿 Materials: 100.0%"
      ]
    }
  },
  {
    "id": "tile_154",
    "name": {
      "RU": "Лунная стела",
      "EN": "Lunar Stele",
      "CN": "月亮石碑"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Ветреные берега"
      ],
      "EN": [
        "Breezy Shores"
      ],
      "CN": [
        "清凉沙滩"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_161",
    "name": {
      "RU": "Лунный алтарь",
      "EN": "Lunar Altar",
      "CN": "月影祭坛"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "8x8",
    "sizes": [
      8
    ],
    "biomes": {
      "RU": [
        "Пепельные пустоши"
      ],
      "EN": [
        "Ashland Wastes"
      ],
      "CN": [
        "荒凉戈壁"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_86",
    "name": {
      "RU": "Лунный колодец",
      "EN": "Lunar Well",
      "CN": "月亮古井"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес",
        "Роща теневой завесы"
      ],
      "EN": [
        "Wandering Woods",
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林",
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Рыба",
        "ОП",
        "Энергия",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "鱼类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_40",
    "name": {
      "RU": "Малое зонтичное дерево",
      "EN": "Small Umbrella Tree",
      "CN": "矮伞树"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_166",
    "name": {
      "RU": "Мертвое дерево",
      "EN": "Dead Tree",
      "CN": "枯树"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня"
      ],
      "EN": [
        "Endless Desert"
      ],
      "CN": [
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_18",
    "name": {
      "RU": "Могила зверя",
      "EN": "Beast Grave",
      "CN": "野兽坟墓"
    },
    "icon": "⚰️",
    "category": "poi",
    "category_name": "Крупные постройки (POI)",
    "is_special": false,
    "size_str": "2x2, 3x3",
    "sizes": [
      2,
      3
    ],
    "biomes": {
      "RU": [
        "Морозная тундра",
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains",
        "Frostbound Tundra"
      ],
      "CN": [
        "新生平原",
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "Мясо",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "肉类",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_21",
    "name": {
      "RU": "Морозный маяк",
      "EN": "Frost Beacon",
      "CN": "寒冰信标"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Морозная тундра"
      ],
      "EN": [
        "Frostbound Tundra"
      ],
      "CN": [
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 57.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 57.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 57.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_137",
    "name": {
      "RU": "Морская руда",
      "EN": "Seafloor Ore",
      "CN": "海底矿石"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Рыба",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Ore"
      ],
      "CN": [
        "鱼类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_130",
    "name": {
      "RU": "Морское дно",
      "EN": "Seafloor",
      "CN": "海底"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Рыба",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Meat"
      ],
      "CN": [
        "鱼类",
        "肉类",
        "经验"
      ]
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 100.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "🌿 Ресурсы/Материалы: 100.0%"
      ],
      "EN": [
        "🌿 Materials: 100.0%"
      ]
    }
  },
  {
    "id": "tile_138",
    "name": {
      "RU": "Морской риф",
      "EN": "Seafloor Reef",
      "CN": "海底礁石"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 4x4, 6x6",
    "sizes": [
      2,
      4,
      6
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Рыба",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Ore"
      ],
      "CN": [
        "鱼类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_179",
    "name": {
      "RU": "Мясоцвет",
      "EN": "Fleshbloom",
      "CN": "食肉植物"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_170",
    "name": {
      "RU": "Оазис",
      "EN": "Oasis",
      "CN": "绿洲"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "8x8",
    "sizes": [
      8
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня"
      ],
      "EN": [
        "Endless Desert"
      ],
      "CN": [
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_46",
    "name": {
      "RU": "Обветренная стела",
      "EN": "Weathered Stele",
      "CN": "破损石碑"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Plant",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_103",
    "name": {
      "RU": "Обелиск",
      "EN": "Obelisk",
      "CN": "方尖碑"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6, 8x8",
    "sizes": [
      6,
      8
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины",
        "Роща теневой завесы"
      ],
      "EN": [
        "The Deep Hollows",
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林",
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_152",
    "name": {
      "RU": "Обломки корабля",
      "EN": "Ship Debris",
      "CN": "船只残骸"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Ветреные берега"
      ],
      "EN": [
        "Breezy Shores"
      ],
      "CN": [
        "清凉沙滩"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Plant",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_117",
    "name": {
      "RU": "Обломок руин",
      "EN": "Ruin Fragment",
      "CN": "遗迹碎片"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты",
        "Магмовый проход"
      ],
      "EN": [
        "Forsaken Mines",
        "Magma Passage"
      ],
      "CN": [
        "废弃矿洞",
        "熔岩通道"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_118",
    "name": {
      "RU": "Окаменевшие кости",
      "EN": "Fossil Bones",
      "CN": "化石骸骨"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты",
        "Магмовый проход"
      ],
      "EN": [
        "Forsaken Mines",
        "Magma Passage"
      ],
      "CN": [
        "废弃矿洞",
        "熔岩通道"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_113",
    "name": {
      "RU": "Опрокинутый ящик",
      "EN": "Toppled Crate",
      "CN": "翻倒矿箱"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты"
      ],
      "EN": [
        "Forsaken Mines"
      ],
      "CN": [
        "废弃矿洞"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom"
      ],
      "CN": [
        "能量",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_183",
    "name": {
      "RU": "Останки зверя",
      "EN": "Beast Remains",
      "CN": "巨兽骸骨"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_151",
    "name": {
      "RU": "Пальма",
      "EN": "Palm Tree",
      "CN": "椰树"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 4x4, 6x6, 8x8",
    "sizes": [
      2,
      4,
      6,
      8
    ],
    "biomes": {
      "RU": [
        "Ветреные берега"
      ],
      "EN": [
        "Breezy Shores"
      ],
      "CN": [
        "清凉沙滩"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_155",
    "name": {
      "RU": "Песок",
      "EN": "Sand",
      "CN": "沙地"
    },
    "icon": "🏜️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня",
        "Пепельные пустоши"
      ],
      "EN": [
        "Endless Desert",
        "Ashland Wastes"
      ],
      "CN": [
        "荒凉戈壁",
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 100.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "🌿 Ресурсы/Материалы: 100.0%"
      ],
      "EN": [
        "🌿 Materials: 100.0%"
      ]
    }
  },
  {
    "id": "tile_180",
    "name": {
      "RU": "Пещера",
      "EN": "Cave",
      "CN": "山洞"
    },
    "icon": "🐺",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_88",
    "name": {
      "RU": "Пещера в бревне",
      "EN": "Log Cave",
      "CN": "木桩洞穴"
    },
    "icon": "🐺",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_27",
    "name": {
      "RU": "Пещера с сокровищами",
      "EN": "Treasure Cave",
      "CN": "藏宝洞穴"
    },
    "icon": "🐺",
    "category": "poi",
    "category_name": "Крупные постройки (POI)",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Морозная тундра",
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains",
        "Frostbound Tundra"
      ],
      "CN": [
        "新生平原",
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "Мясо",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "肉类",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_43",
    "name": {
      "RU": "Пламенное дерево",
      "EN": "Flame Tree",
      "CN": "火红树"
    },
    "icon": "🔥",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_70",
    "name": {
      "RU": "Племенной тотем",
      "EN": "Tribal Totem",
      "CN": "部落图腾"
    },
    "icon": "🗿",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_67",
    "name": {
      "RU": "Племенной шатер",
      "EN": "Tribal Tent",
      "CN": "部落帐篷"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Energy"
      ],
      "CN": [
        "能量",
        "肉类",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_129",
    "name": {
      "RU": "Подземный вход",
      "EN": "Underground Entrance",
      "CN": "地下入口"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины"
      ],
      "EN": [
        "The Deep Hollows"
      ],
      "CN": [
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_66",
    "name": {
      "RU": "Полое бревно",
      "EN": "Hollowed Log",
      "CN": "空心枯木"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье"
      ],
      "EN": [
        "Crimson Highlands"
      ],
      "CN": [
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_80",
    "name": {
      "RU": "Полое бревно",
      "EN": "Hollow Log",
      "CN": "空心圆木"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 3x3",
    "sizes": [
      2,
      3
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес",
        "Роща теневой завесы"
      ],
      "EN": [
        "Wandering Woods",
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林",
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_82",
    "name": {
      "RU": "Прозрачный пруд",
      "EN": "Clear Pond",
      "CN": "清澈水塘"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 4x4",
    "sizes": [
      2,
      4
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес",
        "Роща теневой завесы"
      ],
      "EN": [
        "Wandering Woods",
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林",
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Рыба",
        "ОП",
        "Энергия",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "鱼类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_119",
    "name": {
      "RU": "Пространственный кристалл",
      "EN": "Spatial Crystal",
      "CN": "空间水晶"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "9x9",
    "sizes": [
      9
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты",
        "Магмовый проход"
      ],
      "EN": [
        "Forsaken Mines",
        "Magma Passage"
      ],
      "CN": [
        "废弃矿洞",
        "熔岩通道"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_136",
    "name": {
      "RU": "Развалины",
      "EN": "Broken Ruins",
      "CN": "破碎遗迹"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 4x4, 6x6",
    "sizes": [
      2,
      4,
      6
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня",
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea",
        "Endless Desert"
      ],
      "CN": [
        "无尽荒漠",
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Рыба",
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "鱼类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_98",
    "name": {
      "RU": "Разрушенная башня",
      "EN": "Ruin Tower",
      "CN": "遗迹石塔"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_102",
    "name": {
      "RU": "Разрушенная стела",
      "EN": "Ruin Stele",
      "CN": "遗迹石碑"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 4x4, 5x5, 6x6, 8x8",
    "sizes": [
      2,
      4,
      5,
      6,
      8
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины",
        "Роща теневой завесы",
        "Пепельные пустоши"
      ],
      "EN": [
        "The Deep Hollows",
        "Shadowveil Grove",
        "Ashland Wastes"
      ],
      "CN": [
        "幽暗密林",
        "荒凉戈壁",
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "Руда",
        "Мясо",
        "ОП",
        "Гриб",
        "Энергия"
      ],
      "EN": [
        "Energy",
        "Meat",
        "Mushroom",
        "Plant",
        "Ore",
        "EXP"
      ],
      "CN": [
        "能量",
        "经验",
        "蘑菇",
        "植物",
        "肉类",
        "矿石"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_96",
    "name": {
      "RU": "Разрушенный колодец",
      "EN": "Ruin Well",
      "CN": "遗迹石井"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林"
      ]
    },
    "materials": {
      "RU": [
        "Рыба",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Ore"
      ],
      "CN": [
        "鱼类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_85",
    "name": {
      "RU": "Разрушенный столб",
      "EN": "Ruin Pillar",
      "CN": "遗迹石柱"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 4x4",
    "sizes": [
      2,
      4
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес",
        "Роща теневой завесы"
      ],
      "EN": [
        "Wandering Woods",
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林",
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_52",
    "name": {
      "RU": "Рогатый тотем",
      "EN": "Horn Totem",
      "CN": "牛角图腾"
    },
    "icon": "🗿",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Бескрайняя степь"
      ],
      "EN": [
        "Boundless Steppe"
      ],
      "CN": [
        "广袤草原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_128",
    "name": {
      "RU": "Руинная арка",
      "EN": "Ruin Archway",
      "CN": "遗迹拱门"
    },
    "icon": "🚪",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины"
      ],
      "EN": [
        "The Deep Hollows"
      ],
      "CN": [
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_125",
    "name": {
      "RU": "Руинная плита",
      "EN": "Ruin Slab",
      "CN": "遗迹石板"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 3x3, 4x4",
    "sizes": [
      2,
      3,
      4
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины"
      ],
      "EN": [
        "The Deep Hollows"
      ],
      "CN": [
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_143",
    "name": {
      "RU": "Руины источника",
      "EN": "Spring Ruins",
      "CN": "泉水遗迹"
    },
    "icon": "⛲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "9x9",
    "sizes": [
      9
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Рыба",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Ore"
      ],
      "CN": [
        "鱼类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_139",
    "name": {
      "RU": "Руины с фонарями",
      "EN": "Stone Lamp Ruins",
      "CN": "石灯遗迹"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2",
    "sizes": [
      2
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Рыба",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Ore"
      ],
      "CN": [
        "鱼类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_51",
    "name": {
      "RU": "Рунический камень",
      "EN": "Runic Stone",
      "CN": "符文岩石"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 4x4, 6x6",
    "sizes": [
      2,
      4,
      6
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Пепельные пустоши",
        "Заброшенные шахты",
        "Бескрайняя пустыня",
        "Бескрайняя степь",
        "Ветреные берега"
      ],
      "EN": [
        "Boundless Steppe",
        "Breezy Shores",
        "Crimson Highlands",
        "Endless Desert",
        "Ashland Wastes",
        "Forsaken Mines"
      ],
      "CN": [
        "荒凉戈壁",
        "清凉沙滩",
        "无尽荒漠",
        "广袤草原",
        "铁血高地",
        "废弃矿洞"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_20",
    "name": {
      "RU": "Рунический лед",
      "EN": "Runic Ice",
      "CN": "符文坚冰"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 4x4",
    "sizes": [
      2,
      4
    ],
    "biomes": {
      "RU": [
        "Морозная тундра"
      ],
      "EN": [
        "Frostbound Tundra"
      ],
      "CN": [
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 57.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 57.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 57.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_62",
    "name": {
      "RU": "Рунический столб",
      "EN": "Runic Pillar",
      "CN": "符文石柱"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "3x3, 6x6",
    "sizes": [
      3,
      6
    ],
    "biomes": {
      "RU": [
        "Багровое нагорье",
        "Ветреные берега"
      ],
      "EN": [
        "Breezy Shores",
        "Crimson Highlands"
      ],
      "CN": [
        "清凉沙滩",
        "铁血高地"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Руда",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_116",
    "name": {
      "RU": "Светогриб",
      "EN": "Glowcap",
      "CN": "荧光蘑菇"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "5x5",
    "sizes": [
      5
    ],
    "biomes": {
      "RU": [
        "Заброшенные шахты"
      ],
      "EN": [
        "Forsaken Mines"
      ],
      "CN": [
        "废弃矿洞"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Гриб",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom"
      ],
      "CN": [
        "能量",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_127",
    "name": {
      "RU": "Светящиеся споры",
      "EN": "Glowing Spores",
      "CN": "荧光孢子"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4, 6x6",
    "sizes": [
      4,
      6
    ],
    "biomes": {
      "RU": [
        "Глубокие лощины"
      ],
      "EN": [
        "The Deep Hollows"
      ],
      "CN": [
        "洞穴深处"
      ]
    },
    "materials": {
      "RU": [
        "ОП",
        "Гриб",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom"
      ],
      "CN": [
        "能量",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_79",
    "name": {
      "RU": "Скопление грибов",
      "EN": "Mushroom Cluster",
      "CN": "蘑菇丛"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "2x2, 3x3",
    "sizes": [
      2,
      3
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес",
        "Заброшенные шахты"
      ],
      "EN": [
        "Wandering Woods",
        "Forsaken Mines"
      ],
      "CN": [
        "迷失森林",
        "废弃矿洞"
      ]
    },
    "materials": {
      "RU": [
        "Руда",
        "ОП",
        "Гриб",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_182",
    "name": {
      "RU": "Скрытая дупло",
      "EN": "Hidden Hollow",
      "CN": "隐蔽树洞"
    },
    "icon": "🐺",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "9x9",
    "sizes": [
      9
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_184",
    "name": {
      "RU": "Скрытая мастерская",
      "EN": "Hidden Workshop",
      "CN": "隐蔽工坊"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "35x35",
    "sizes": [
      35
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [],
      "EN": [],
      "CN": []
    },
    "rates": {
      "chest": 15.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 0.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 15.0%"
      ],
      "EN": [
        "📦 Chests: 15.0%"
      ]
    }
  },
  {
    "id": "tile_169",
    "name": {
      "RU": "Скрытое логово",
      "EN": "Hidden Den",
      "CN": "隐蔽兽穴"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "8x8",
    "sizes": [
      8
    ],
    "biomes": {
      "RU": [
        "Бескрайняя пустыня"
      ],
      "EN": [
        "Endless Desert"
      ],
      "CN": [
        "无尽荒漠"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Ore"
      ],
      "CN": [
        "肉类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_83",
    "name": {
      "RU": "Скрытый камень",
      "EN": "Hidden Stone",
      "CN": "隐蔽岩石"
    },
    "icon": "⛏️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Plant",
        "Ore"
      ],
      "CN": [
        "矿石",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_101",
    "name": {
      "RU": "Сломанное бревно",
      "EN": "Broken Log",
      "CN": "断裂枯木"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_25",
    "name": {
      "RU": "Сломанный забор",
      "EN": "Broken Fence",
      "CN": "破烂围墙"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Морозная тундра",
        "Бескрайняя степь"
      ],
      "EN": [
        "Boundless Steppe",
        "Frostbound Tundra"
      ],
      "CN": [
        "广袤草原",
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant",
        "Mushroom"
      ],
      "CN": [
        "植物",
        "肉类",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_78",
    "name": {
      "RU": "Сломанный пень",
      "EN": "Broken Stump",
      "CN": "断裂树桩"
    },
    "icon": "🌲",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "3x3",
    "sizes": [
      3
    ],
    "biomes": {
      "RU": [
        "Блуждающий лес"
      ],
      "EN": [
        "Wandering Woods"
      ],
      "CN": [
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_2",
    "name": {
      "RU": "Снежное поле",
      "EN": "Snowfield",
      "CN": "雪地"
    },
    "icon": "❄️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "1x1",
    "sizes": [
      1
    ],
    "biomes": {
      "RU": [
        "Морозная тундра"
      ],
      "EN": [
        "Frostbound Tundra"
      ],
      "CN": [
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Mushroom"
      ],
      "CN": [
        "肉类",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 0.0,
      "equip": 0.0,
      "role": 0.0,
      "materials": 100.0,
      "stones": 0.0,
      "gold": 0.0
    },
    "drops_summary": {
      "RU": [
        "🌿 Ресурсы/Материалы: 100.0%"
      ],
      "EN": [
        "🌿 Materials: 100.0%"
      ]
    }
  },
  {
    "id": "tile_97",
    "name": {
      "RU": "Сухое бревно",
      "EN": "Dry Log",
      "CN": "干枯圆木"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "3x3",
    "sizes": [
      3
    ],
    "biomes": {
      "RU": [
        "Роща теневой завесы"
      ],
      "EN": [
        "Shadowveil Grove"
      ],
      "CN": [
        "幽暗密林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_159",
    "name": {
      "RU": "Сухостой",
      "EN": "Deadwood",
      "CN": "枯木"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "1x1, 2x2, 4x4",
    "sizes": [
      1,
      2,
      4
    ],
    "biomes": {
      "RU": [
        "Увядший лес",
        "Пепельные пустоши"
      ],
      "EN": [
        "Withered Timberland",
        "Ashland Wastes"
      ],
      "CN": [
        "荒凉戈壁",
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 100.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 100.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 100.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_44",
    "name": {
      "RU": "Темная гробница",
      "EN": "Dark Tomb",
      "CN": "阴暗古墓"
    },
    "icon": "⚰️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Рассветные равнины"
      ],
      "EN": [
        "Dawnstep Plains"
      ],
      "CN": [
        "新生平原"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_54",
    "name": {
      "RU": "Украшенный тотем",
      "EN": "Ornate Totem",
      "CN": "华丽图腾"
    },
    "icon": "🗿",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4",
    "sizes": [
      4
    ],
    "biomes": {
      "RU": [
        "Бескрайняя степь"
      ],
      "EN": [
        "Boundless Steppe"
      ],
      "CN": [
        "广袤草原"
      ]
    },
    "materials": {
      "RU": [
        "Мясо",
        "Растение",
        "ОП"
      ],
      "EN": [
        "EXP",
        "Meat",
        "Plant"
      ],
      "CN": [
        "肉类",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_23",
    "name": {
      "RU": "Улей Мерзлой древесины",
      "EN": "Frostwood Hive",
      "CN": "极寒蜂巢"
    },
    "icon": "🐺",
    "category": "poi",
    "category_name": "Крупные постройки (POI)",
    "is_special": false,
    "size_str": "5x5, 6x6",
    "sizes": [
      5,
      6
    ],
    "biomes": {
      "RU": [
        "Морозная тундра"
      ],
      "EN": [
        "Frostbound Tundra"
      ],
      "CN": [
        "极寒冰原"
      ]
    },
    "materials": {
      "RU": [
        "Гриб",
        "Руда",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Mushroom",
        "Ore"
      ],
      "CN": [
        "能量",
        "矿石",
        "经验",
        "蘑菇"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 57.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 57.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 57.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_53",
    "name": {
      "RU": "Улей в сухостое",
      "EN": "Deadwood Hive",
      "CN": "枯木蜂巢"
    },
    "icon": "🐺",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "4x4, 5x5, 6x6",
    "sizes": [
      4,
      5,
      6
    ],
    "biomes": {
      "RU": [
        "Бескрайняя степь",
        "Блуждающий лес"
      ],
      "EN": [
        "Boundless Steppe",
        "Wandering Woods"
      ],
      "CN": [
        "广袤草原",
        "迷失森林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Энергия"
      ],
      "EN": [
        "EXP",
        "Energy",
        "Plant"
      ],
      "CN": [
        "能量",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_181",
    "name": {
      "RU": "Шипастые лозы",
      "EN": "Thorn Vines",
      "CN": "荆棘藤蔓"
    },
    "icon": "🗺️",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "6x6",
    "sizes": [
      6
    ],
    "biomes": {
      "RU": [
        "Увядший лес"
      ],
      "EN": [
        "Withered Timberland"
      ],
      "CN": [
        "枯木丛林"
      ]
    },
    "materials": {
      "RU": [
        "Растение",
        "ОП",
        "Гриб"
      ],
      "EN": [
        "EXP",
        "Mushroom",
        "Plant"
      ],
      "CN": [
        "蘑菇",
        "经验",
        "植物"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  },
  {
    "id": "tile_144",
    "name": {
      "RU": "Шпиль",
      "EN": "Spire",
      "CN": "方尖塔"
    },
    "icon": "🏰",
    "category": "terrain",
    "category_name": "Обычные клетки поля",
    "is_special": false,
    "size_str": "10x10",
    "sizes": [
      10
    ],
    "biomes": {
      "RU": [
        "Затонувшее море"
      ],
      "EN": [
        "The Sunken Sea"
      ],
      "CN": [
        "遗忘之海"
      ]
    },
    "materials": {
      "RU": [
        "Рыба",
        "ОП",
        "Руда"
      ],
      "EN": [
        "EXP",
        "Fish",
        "Ore"
      ],
      "CN": [
        "鱼类",
        "矿石",
        "经验"
      ]
    },
    "rates": {
      "chest": 30.0,
      "equip": 5.0,
      "role": 0.0,
      "materials": 62.0,
      "stones": 2.0,
      "gold": 1.0
    },
    "drops_summary": {
      "RU": [
        "📦 Сундуки: 30.0%",
        "⚔️ Экипировка: 5.0%",
        "🌿 Ресурсы/Материалы: 62.0%",
        "💎 Камни наследия/Самоцветы: 2.0%",
        "🪙 Золото / Слизь: 1.0%"
      ],
      "EN": [
        "📦 Chests: 30.0%",
        "⚔️ Gear: 5.0%",
        "🌿 Materials: 62.0%",
        "💎 Legacy Stones/Gems: 2.0%",
        "🪙 Gold/Slime: 1.0%"
      ]
    }
  }
],
  defaultKeywords: [
  {
    "id": "keyword_1",
    "key": "Keyword_1",
    "code": "",
    "icon": "✨",
    "cat": "instant",
    "element": "Neutral",
    "name": {
      "RU": "Обращение",
      "EN": "Reversal",
      "CN": "逆转"
    },
    "desc": {
      "RU": "[Мгновенно] Каждый заряд восстанавливает 1 ОЗ союзницам или отнимает 1 ОЗ у врагов.",
      "EN": "[Instant] Each stack restores 1 HP to allies or deals 1 HP loss to enemies.",
      "CN": "【即时】每层使友方目标获得1点生命，或使敌方目标失去1点生命。"
    },
    "aliases": {
      "RU": [
        "Обращение",
        "обращение"
      ],
      "EN": [
        "Reversal",
        "reversal"
      ],
      "CN": [
        "逆转"
      ]
    },
    "related_characters": [
      {
        "id": "M13105",
        "name": "Пастушка рыб",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13201",
        "name": "Поппи",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41101",
        "name": "Призрак-морячка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z60010_121",
        "name": "Забытый клинок",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60010_622",
        "name": "Забытое одеяние",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60010_821",
        "name": "Забытые оковы",
        "step": "A"
      },
      {
        "category": "relics",
        "id": "XD13001_045",
        "name": "Обращение с животными",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10041",
        "name": "Распад",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN10146",
        "name": "Единство",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10120",
        "name": "Преображение",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10215",
        "name": "Королева",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60405",
        "name": "Коррозия",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN00601",
        "name": "Лечение",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10175",
        "name": "Сифон",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN00804",
        "name": "Возрождение",
        "step": "B"
      }
    ]
  },
  {
    "id": "keyword_2",
    "key": "Keyword_2",
    "code": "",
    "icon": "✨",
    "cat": "instant",
    "element": "Neutral",
    "name": {
      "RU": "Очищение",
      "EN": "Cleanse",
      "CN": "净化"
    },
    "desc": {
      "RU": "[Мгновенно] Каждый заряд снимает 2 заряда всех дебаффов с союзниц или 2 заряда всех усилений с врагов.",
      "EN": "[Instant] Each stack removes 2 stacks of all debuffs from allies or 2 stacks of all buffs from enemies.",
      "CN": "【即时】每层移除友方目标2层全部负面状态，或移除敌方目标2层全部正面状态。"
    },
    "aliases": {
      "RU": [
        "Очищение",
        "очищение"
      ],
      "EN": [
        "cleanse",
        "Cleanse"
      ],
      "CN": [
        "净化"
      ]
    },
    "related_characters": [
      {
        "id": "M24301_000",
        "name": "Безмятежная ундина",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14303",
        "name": "Исекай-странница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23301",
        "name": "Королева слизней",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51302_001",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23201",
        "name": "Волшебница воды",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13202",
        "name": "Волшебница душ",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14213",
        "name": "Лунная жрица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14210",
        "name": "Серебряная лиса-пророчица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13207",
        "name": "Солнечная жрица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21204",
        "name": "Стражница прилива",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13104",
        "name": "Волчица-шаманка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "runes",
        "id": "F40001_012",
        "name": "Руна разрушения",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F40002_012",
        "name": "Руна вечности",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F40003_012",
        "name": "Руна природы",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F20003_012",
        "name": "Руна удачи",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F30001_012",
        "name": "Руна маны",
        "step": "A"
      },
      {
        "category": "runes",
        "id": "F30002_012",
        "name": "Руна стойкости",
        "step": "A"
      },
      {
        "category": "runes",
        "id": "F20001_012",
        "name": "Руна СКР",
        "step": "B"
      },
      {
        "category": "runes",
        "id": "F20002_012",
        "name": "Руна ОЗ",
        "step": "B"
      },
      {
        "category": "runes",
        "id": "F10001_012",
        "name": "Руна АТК",
        "step": "C"
      },
      {
        "category": "runes",
        "id": "F10002_012",
        "name": "Руна ЗАЩ",
        "step": "C"
      },
      {
        "category": "prefixes",
        "id": "JH40007",
        "name": "Небесная",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH20029",
        "name": "Осуждающая",
        "step": "B"
      }
    ]
  },
  {
    "id": "keyword_3",
    "key": "Keyword_3",
    "code": "",
    "icon": "✨",
    "cat": "instant",
    "element": "Neutral",
    "name": {
      "RU": "Вдохновение",
      "EN": "Inspire",
      "CN": "鼓舞"
    },
    "desc": {
      "RU": "[Мгновенно] Каждый заряд дает цели 1 ед. маны.",
      "EN": "[Instant] Each stack grants the target 1 Mana.",
      "CN": "【即时】每层使目标获得1点魔力。"
    },
    "aliases": {
      "RU": [
        "Вдохновение",
        "вдохновение"
      ],
      "EN": [
        "inspire",
        "Inspire"
      ],
      "CN": [
        "鼓舞"
      ]
    },
    "related_characters": [
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14303",
        "name": "Исекай-странница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11301",
        "name": "Командующая Легиона",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13306",
        "name": "Кристальная грибница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301_000",
        "name": "Лесная нимфа",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12211",
        "name": "Танцовщица пустыни",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14206",
        "name": "Троллиха-надзирательница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14203",
        "name": "Чжаоцай",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12104",
        "name": "Великая исследовательница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24001",
        "name": "Слайм-жрица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z20003_521",
        "name": "Корона сухостоя",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z20003_821",
        "name": "Ожерелье сухостоя",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z20003_911",
        "name": "Кольцо сухостоя",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z02001_292",
        "name": "Беззаботная соломенная шляпа",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z02001_293",
        "name": "Беззаботная шаль",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z02001_294",
        "name": "Беззаботный пояс",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10033",
        "name": "Медитация",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN60208",
        "name": "Приказ",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN01301",
        "name": "Власть",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10212",
        "name": "Императрица",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN50002",
        "name": "Отвага",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN00801",
        "name": "Сплочение",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_4",
    "key": "Keyword_4",
    "code": "",
    "icon": "✨",
    "cat": "instant",
    "element": "Neutral",
    "name": {
      "RU": "Распад",
      "EN": "Decay",
      "CN": "泯灭"
    },
    "desc": {
      "RU": "[Мгновенно] Каждый заряд отнимает у цели 1 ед. маны.",
      "EN": "[Instant] Each stack drains 1 Mana from the target.",
      "CN": "【即时】每层使目标失去1点魔力。"
    },
    "aliases": {
      "RU": [
        "Распад",
        "распад"
      ],
      "EN": [
        "Decay",
        "decay"
      ],
      "CN": [
        "泯灭"
      ]
    },
    "related_characters": [
      {
        "id": "M23301_000",
        "name": "Королева слизней",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13306_000",
        "name": "Кристальная грибница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12211_000",
        "name": "Танцовщица пустыни",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12303",
        "name": "Троллиха-чародейка",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13202",
        "name": "Волшебница душ",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14213",
        "name": "Лунная жрица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M33101",
        "name": "Нефритовая Великанша",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11008",
        "name": "Пустынная разбойница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z60008_031",
        "name": "Знак Звездного ядра",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60007_831",
        "name": "Ожерелье Звездного ядра",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60008_921",
        "name": "Кольцо Звездного ядра",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z30018_821",
        "name": "Компас штурмана",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z30018_021",
        "name": "Знак штурмана",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z30018_921",
        "name": "Кольцо штурмана",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60010_121",
        "name": "Забытый клинок",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60010_622",
        "name": "Забытое одеяние",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60010_821",
        "name": "Забытые оковы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60011_011",
        "name": "Теневой посох",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z60011_012",
        "name": "Теневая сфера",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z60011_013",
        "name": "Теневое кольцо",
        "step": "B"
      }
    ]
  },
  {
    "id": "keyword_5",
    "key": "Keyword_5",
    "code": "",
    "icon": "✨",
    "cat": "instant",
    "element": "Neutral",
    "name": {
      "RU": "Страх",
      "EN": "Fear",
      "CN": "恐惧"
    },
    "desc": {
      "RU": "[Мгновенно] Каждый заряд отнимает у цели 1 ед. прочности.",
      "EN": "[Instant] Each stack drains 1 Toughness from the target.",
      "CN": "【即时】每层使目标失去1点韧性。"
    },
    "aliases": {
      "RU": [
        "страх",
        "Страх"
      ],
      "EN": [
        "Fear",
        "fear"
      ],
      "CN": [
        "恐惧"
      ]
    },
    "related_characters": [
      {
        "id": "M53301",
        "name": "Астральная Злодейка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303_000",
        "name": "Бесовка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302_000",
        "name": "Вестница земли",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301",
        "name": "Колдунья желаний",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301_000",
        "name": "Колдунья желаний",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11302",
        "name": "Теневая драконица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51201",
        "name": "Астральная Хранительница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14202_000",
        "name": "Гоблинша-жрица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11201_000",
        "name": "Храбрая Охотница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z60004_331",
        "name": "Астральный посох",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_332",
        "name": "Астральная сфера",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_631",
        "name": "Астральный плащ",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_151",
        "name": "Сонная кукла",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_152",
        "name": "Сонный колпак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_153",
        "name": "Сонная пижама",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_154",
        "name": "Сонная эмблема",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_155",
        "name": "Сонное ожерелье",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_156",
        "name": "Сонное кольцо",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_121",
        "name": "Башенный щит звездопада",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60004_522",
        "name": "Шлем звездопада",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60004_521",
        "name": "Броня звездопада",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_6",
    "key": "Keyword_6",
    "code": "",
    "icon": "✨",
    "cat": "instant",
    "element": "Neutral",
    "name": {
      "RU": "Стойкость",
      "EN": "Fortitude",
      "CN": "坚韧"
    },
    "desc": {
      "RU": "[Мгновенно] Каждый заряд дает цели 1 ед. прочности.",
      "EN": "[Instant] Each stack grants the target 1 Toughness.",
      "CN": "【即时】每层使目标获得1点韧性。"
    },
    "aliases": {
      "RU": [
        "Стойкость",
        "стойкость"
      ],
      "EN": [
        "Fortitude",
        "fortitude"
      ],
      "CN": [
        "坚韧"
      ]
    },
    "related_characters": [
      {
        "id": "M14303",
        "name": "Исекай-странница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11114",
        "name": "Дебоширка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24101",
        "name": "Слайм-горничная",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11107",
        "name": "Стражница Серебряной чешуи",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21101",
        "name": "Трент-стражница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00018_112",
        "name": "Двуручный меч стойкости",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00018_713",
        "name": "Щит стойкости",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00018_011",
        "name": "Знак стойкости",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z20001_501",
        "name": "Капюшон путницы",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z20001_601",
        "name": "Плащ путницы",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z20001_701",
        "name": "Сапоги путницы",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10010_132",
        "name": "Метеоритный башенный щит",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10010_531",
        "name": "Метеоритный тяжелый шлем",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10010_631",
        "name": "Метеоритная тяжелая броня",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00006_121",
        "name": "Металлический щит",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00006_521",
        "name": "Металлический шлем",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00006_621",
        "name": "Металлическая броня",
        "step": "B"
      }
    ]
  },
  {
    "id": "haste",
    "key": "Keyword_7",
    "code": "T20003",
    "icon": "⚡",
    "cat": "buff",
    "element": "Wind",
    "name": {
      "RU": "Ускорение",
      "EN": "Haste",
      "CN": "加速"
    },
    "desc": {
      "RU": "[Усиление] Каждый заряд дает цели 1 ед. СКР. Постоянный эффект.",
      "EN": "[Buff] Each stack grants the target 1 SPD. Persistent effect.",
      "CN": "【正面】每层使目标速度+1，持续生效。"
    },
    "aliases": {
      "RU": [
        "ускорение",
        "Ускорение"
      ],
      "EN": [
        "haste",
        "Haste"
      ],
      "CN": [
        "加速"
      ]
    },
    "related_characters": [
      {
        "id": "M34301",
        "name": "Колдунья желаний",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11204",
        "name": "Всадница Легиона",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14202",
        "name": "Гоблинша-жрица",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14208",
        "name": "Зеленая Шапочка",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11205",
        "name": "Лютоволчица",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11208",
        "name": "Рыболюдка-воительница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12201",
        "name": "Таящаяся Тень",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11109",
        "name": "Девушка-гарпия",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12105",
        "name": "Лучница Легиона",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11102",
        "name": "Сияющая Дева",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11002",
        "name": "Гоблинша-разведчица",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "prefixes",
        "id": "JH20012",
        "name": "Неупокоенная",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30012",
        "name": "Неупокоенная",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40012",
        "name": "Неупокоенная",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10020",
        "name": "Ловкость",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN10025",
        "name": "Странствие",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10402",
        "name": "Бегущая по ветру",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10218",
        "name": "Шквал",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10083",
        "name": "Адаптация",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10158",
        "name": "Жадность",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10070",
        "name": "Толчок",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN00304",
        "name": "Легкий ветерок",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10208",
        "name": "Быстрая тень",
        "step": "B"
      }
    ]
  },
  {
    "id": "bloodlust",
    "key": "Keyword_8",
    "code": "T20005",
    "icon": "🩸",
    "cat": "buff",
    "element": "Fire / Neutral",
    "name": {
      "RU": "Жажда крови",
      "EN": "Bloodlust",
      "CN": "热血"
    },
    "desc": {
      "RU": "[Усиление] Каждый заряд увеличивает наносимый УРН на 1. Применяется к каждому удару в серии ударов и к каждой цели. Расходуется после применения.",
      "EN": "[Buff] Each stack increases total DMG dealt by 1. Applies to each hit in multi-hit attacks and scales per target based on DMG dealt. Consumed after taking effect.",
      "CN": "【正面】每层使目标造成全部伤害+1，进行多段攻击时对每段攻击生效，多名目标时根据伤害分别生效，生效后消耗。"
    },
    "aliases": {
      "RU": [
        "жажда крови",
        "Жажда крови"
      ],
      "EN": [
        "bloodlust",
        "Bloodlust"
      ],
      "CN": [
        "热血"
      ]
    },
    "related_characters": [
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11301_000",
        "name": "Командующая Легиона",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14201",
        "name": "Боевая жрица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14205",
        "name": "Жрица-минотаврица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11202",
        "name": "Охотница Пустоши",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11110",
        "name": "Синяя Акула-Бур",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14103",
        "name": "Жрица Легиона",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13001",
        "name": "Жрица-рыболюд",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11006",
        "name": "Разведчица Легиона",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "runes",
        "id": "F10001_006",
        "name": "Руна АТК",
        "step": "C"
      },
      {
        "category": "runes",
        "id": "F40001_011",
        "name": "Руна разрушения",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F40002_011",
        "name": "Руна вечности",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F40003_011",
        "name": "Руна природы",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F20003_011",
        "name": "Руна удачи",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F30003_011",
        "name": "Героическая руна",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F30001_011",
        "name": "Руна маны",
        "step": "A"
      },
      {
        "category": "runes",
        "id": "F30002_011",
        "name": "Руна стойкости",
        "step": "A"
      },
      {
        "category": "runes",
        "id": "F20001_011",
        "name": "Руна СКР",
        "step": "B"
      },
      {
        "category": "runes",
        "id": "F20002_011",
        "name": "Руна ОЗ",
        "step": "B"
      },
      {
        "category": "runes",
        "id": "F10001_011",
        "name": "Руна АТК",
        "step": "C"
      },
      {
        "category": "runes",
        "id": "F10002_011",
        "name": "Руна ЗАЩ",
        "step": "C"
      }
    ]
  },
  {
    "id": "shield",
    "key": "Keyword_9",
    "code": "T20006",
    "icon": "🛡️",
    "cat": "buff",
    "element": "Light / Earth",
    "name": {
      "RU": "Щит",
      "EN": "Shield",
      "CN": "防护"
    },
    "desc": {
      "RU": "[Усиление] Каждый заряд уменьшает получаемый УРН на 1. Применяется к каждому удару в серии ударов. Расходуется после применения.",
      "EN": "[Buff] Each stack reduces total DMG taken by 1. Applies to each hit in multi-hit attacks. Consumed after taking effect.",
      "CN": "【正面】每层使目标受到全部伤害-1，受到多段攻击时对每段攻击生效，生效后消耗。"
    },
    "aliases": {
      "RU": [
        "щит",
        "Щит"
      ],
      "EN": [
        "Shield",
        "shield"
      ],
      "CN": [
        "防护"
      ]
    },
    "related_characters": [
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_002",
        "name": "Ведьма земли",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302",
        "name": "Вестница земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21302_000",
        "name": "Вечная владычица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21301",
        "name": "Золотая дева",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21301_000",
        "name": "Золотая дева",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14303",
        "name": "Исекай-странница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13306",
        "name": "Кристальная грибница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11303_002",
        "name": "Снежный рыцарь",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11302_000",
        "name": "Теневая драконица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22201_002",
        "name": "Валунный стрелок",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z50006_132",
        "name": "Щит героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_031",
        "name": "Знак героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_831",
        "name": "Сердце героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_931",
        "name": "Кольцо героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_332",
        "name": "Астральная сфера",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50003_631",
        "name": "Превосходная накидка",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50003_731",
        "name": "Превосходный пояс",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60006_931",
        "name": "Превосходное кольцо",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00003_231",
        "name": "Утраченные священные стрелы",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_151",
        "name": "Сонная кукла",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_172",
        "name": "Красный двойной клинок",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00014_122",
        "name": "Кинжал танца клинков",
        "step": "A"
      }
    ]
  },
  {
    "id": "precision",
    "key": "Keyword_10",
    "code": "T10008",
    "icon": "🎯",
    "cat": "buff",
    "element": "Wind",
    "name": {
      "RU": "Точность",
      "EN": "Precision",
      "CN": "精准"
    },
    "desc": {
      "RU": "[Усиление] Каждые 5 зарядов увеличивают УРН от повторного удара на 1. Цель преимущественно атакует задний ряд. Постоянный эффект.",
      "EN": "[Buff] Every 5 stacks increase Follow-Up DMG by 1. Target prioritizes attacking back position. Persistent effect.",
      "CN": "【正面】每5层使目标造成追击伤害+1，且进行攻击优先选择后排为目标，持续生效。"
    },
    "aliases": {
      "RU": [
        "точность",
        "Точность"
      ],
      "EN": [
        "Precision",
        "precision"
      ],
      "CN": [
        "精准"
      ]
    },
    "related_characters": [
      {
        "id": "M12205",
        "name": "Шагающая по ветру",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12207",
        "name": "Кэнди",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22202",
        "name": "Позолоченная лучница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12208",
        "name": "Серебряная следопытка",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11108",
        "name": "Искра",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11101",
        "name": "Безмолвная охотница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "runes",
        "id": "F40001_006",
        "name": "Руна разрушения",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F40002_006",
        "name": "Руна вечности",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F40003_006",
        "name": "Руна природы",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F20003_006",
        "name": "Руна удачи",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F30001_006",
        "name": "Руна маны",
        "step": "A"
      },
      {
        "category": "runes",
        "id": "F30002_006",
        "name": "Руна стойкости",
        "step": "A"
      },
      {
        "category": "runes",
        "id": "F20001_006",
        "name": "Руна СКР",
        "step": "B"
      },
      {
        "category": "runes",
        "id": "F20002_006",
        "name": "Руна ОЗ",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10119",
        "name": "Захват цели",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN10024",
        "name": "Метка",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10125",
        "name": "Концентрация",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10111",
        "name": "Охотница",
        "step": "S"
      }
    ]
  },
  {
    "id": "faith",
    "key": "Keyword_11",
    "code": "T20008",
    "icon": "🙏",
    "cat": "buff",
    "element": "Light",
    "name": {
      "RU": "Вера",
      "EN": "Faith",
      "CN": "信念"
    },
    "desc": {
      "RU": "[Усиление] Каждые 5 зарядов увеличивают общее лечение на 1. Постоянный эффект.",
      "EN": "[Buff] Every 5 stacks on the unit increases their total HP restored to other targets by 1. Persistent.",
      "CN": "【正面】每5层使目标造成全部恢复+1，持续生效。"
    },
    "aliases": {
      "RU": [
        "Вера",
        "вера"
      ],
      "EN": [
        "faith",
        "Faith"
      ],
      "CN": [
        "信念"
      ]
    },
    "related_characters": [
      {
        "id": "M14303",
        "name": "Исекай-странница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301",
        "name": "Колдунья желаний",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24102",
        "name": "Серебряная певунья",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "bonds",
        "id": "JN10021",
        "name": "Аскетка",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN10045",
        "name": "Молитва",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10086",
        "name": "Непреклонность",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10061",
        "name": "Преобразование",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10092",
        "name": "Стойкость",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN20201",
        "name": "Мощь",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN60397",
        "name": "Твердая вера",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN60326",
        "name": "Убежище веры",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN30001",
        "name": "Святое сияние",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN02031",
        "name": "Святое святилище",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN30000",
        "name": "Упорная сила",
        "step": "S"
      }
    ]
  },
  {
    "id": "growth",
    "key": "Keyword_12",
    "code": "T20011",
    "icon": "🌱",
    "cat": "buff",
    "element": "Earth",
    "name": {
      "RU": "Рост",
      "EN": "Growth",
      "CN": "成长"
    },
    "desc": {
      "RU": "[Усиление] Каждый заряд увеличивает макс. ОЗ на 1. Постоянный эффект.",
      "EN": "[Buff] Each stack increases Max HP by 1. Persistent effect.",
      "CN": "【正面】每层使目标生命上限+1，持续生效。"
    },
    "aliases": {
      "RU": [
        "Рост",
        "рост"
      ],
      "EN": [
        "growth",
        "Growth"
      ],
      "CN": [
        "成长"
      ]
    },
    "related_characters": [
      {
        "id": "M13307",
        "name": "Владычица роз",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301",
        "name": "Лесная нимфа",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41301",
        "name": "Призрак-капитан",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31301",
        "name": "Святая сабля",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11303_002",
        "name": "Снежный рыцарь",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21203",
        "name": "Гигантская Слизь",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23202",
        "name": "Древняя Дриада",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23203",
        "name": "Дриада Шипов",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14207",
        "name": "Исследовательница флоры",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12304",
        "name": "Лучница шипов",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12203",
        "name": "Метательница кокосов",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11209",
        "name": "Минотаврица-клинок",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z50006_131",
        "name": "Меч героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_132",
        "name": "Щит героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_133",
        "name": "Латные рукавицы героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_031",
        "name": "Знак героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_831",
        "name": "Сердце героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_931",
        "name": "Кольцо героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10008_111",
        "name": "Меч грабежа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00005_111",
        "name": "Кинжал грабежа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10008_112",
        "name": "Кольцо грабежа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10014_131",
        "name": "Нефритовый клинок",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10014_632",
        "name": "Нефритовая броня",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10014_732",
        "name": "Нефритовые сапоги",
        "step": "S"
      }
    ]
  },
  {
    "id": "regen",
    "key": "Keyword_13",
    "code": "T20007",
    "icon": "💚",
    "cat": "buff",
    "element": "Water / Earth",
    "name": {
      "RU": "Регенерация",
      "EN": "Regen",
      "CN": "再生"
    },
    "desc": {
      "RU": "[Усиление] Каждый заряд восстанавливает 1 ОЗ в конце действия (не более 20% от макс. ОЗ за раз). Расходуется после применения.",
      "EN": "[Buff] Each stack restores 1 HP at action end, up to 20% of Max HP per instance. Consumed after taking effect.",
      "CN": "【正面】每层使目标行动结束后获得1点生命，每次生效层数最多不超过目标20%生命上限，生效后消耗。"
    },
    "aliases": {
      "RU": [
        "Регенерация",
        "регенерация"
      ],
      "EN": [
        "Regen",
        "regen"
      ],
      "CN": [
        "再生"
      ]
    },
    "related_characters": [
      {
        "id": "M34301",
        "name": "Колдунья желаний",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51302_001",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12102",
        "name": "Троллиха-метательница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11106",
        "name": "Троллиха-стражница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "prefixes",
        "id": "JH20028",
        "name": "Бессмертная",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30028",
        "name": "Бессмертная",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40028",
        "name": "Бессмертная",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH40037",
        "name": "Сжиженная",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10023",
        "name": "Возрождение",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN10030",
        "name": "Потенциал",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10123",
        "name": "Бодрость",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN50001",
        "name": "Вечность",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10163",
        "name": "Грабеж",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10073",
        "name": "Вдохновение",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10062",
        "name": "Семя жизни",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10209",
        "name": "Перьепад",
        "step": "B"
      }
    ]
  },
  {
    "id": "soothe",
    "key": "Keyword_14",
    "code": "T30001",
    "icon": "🕊️",
    "cat": "buff",
    "element": "Water",
    "name": {
      "RU": "Успокоение",
      "EN": "Soothe",
      "CN": "滋润"
    },
    "desc": {
      "RU": "[Усиление] Каждый заряд уменьшает потерю ОЗ на 1. Расходуется после применения.",
      "EN": "[Buff] Each stack reduces HP loss by 1. Consumed after taking effect.",
      "CN": "【正面】每层使目标失去生命-1，生效后消耗。"
    },
    "aliases": {
      "RU": [
        "успокоение",
        "Успокоение"
      ],
      "EN": [
        "soothe",
        "Soothe"
      ],
      "CN": [
        "滋润"
      ]
    },
    "related_characters": [
      {
        "id": "M24301",
        "name": "Безмятежная ундина",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51302",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51302_001",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14104",
        "name": "Сирена Серебряной чешуи",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z60005_131",
        "name": "Рапира морского зверя",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60005_132",
        "name": "Жало морского зверя",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60005_133",
        "name": "Кольцо морского зверя",
        "step": "A"
      },
      {
        "category": "runes",
        "id": "F40001_010",
        "name": "Руна разрушения",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F40002_010",
        "name": "Руна вечности",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F40003_010",
        "name": "Руна природы",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F20003_010",
        "name": "Руна удачи",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F30001_010",
        "name": "Руна маны",
        "step": "A"
      },
      {
        "category": "runes",
        "id": "F30002_010",
        "name": "Руна стойкости",
        "step": "A"
      },
      {
        "category": "runes",
        "id": "F20001_010",
        "name": "Руна СКР",
        "step": "B"
      },
      {
        "category": "runes",
        "id": "F20002_010",
        "name": "Руна ОЗ",
        "step": "B"
      },
      {
        "category": "runes",
        "id": "F10001_010",
        "name": "Руна АТК",
        "step": "C"
      }
    ]
  },
  {
    "id": "thorns",
    "key": "Keyword_15",
    "code": "T20009",
    "icon": "🌵",
    "cat": "buff",
    "element": "Earth",
    "name": {
      "RU": "Шипы",
      "EN": "Thorns",
      "CN": "反伤"
    },
    "desc": {
      "RU": "【Усиление】 Каждый стак заставляет атаковавшего врага потерять 1 ед. здоровья при ударе. За одно срабатывание эффект не может превышать 20% от макс. здоровья цели. При многоударных атаках срабатывает только 1 раз. Постоянный эффект.",
      "EN": "【Buff】 Each stack causes the attacking enemy to lose 1 HP upon hit. Max HP loss per trigger cannot exceed 20% of the target's Max HP. For multi-hit attacks, triggers only once. Permanent effect.",
      "CN": "【正面】每层使攻击目标失去1点生命，每次生效层数最多不超过目标20%生命上限，多段攻击只生效1次，持续生效。"
    },
    "aliases": {
      "RU": [
        "шипы",
        "Шипы"
      ],
      "EN": [
        "Thorns",
        "thorns"
      ],
      "CN": [
        "反伤"
      ]
    },
    "related_characters": [
      {
        "id": "M53301_002",
        "name": "Астральная Злодейка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14215",
        "name": "Бархатные шипы",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13307",
        "name": "Владычица роз",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11207",
        "name": "Аква-командующая",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12304",
        "name": "Лучница шипов",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31202",
        "name": "Утраченная Эгида",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00201_343",
        "name": "Щит Командующей",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00201_341",
        "name": "Шлем Командующей",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00201_342",
        "name": "Броня Командующей",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_281",
        "name": "Ожерелье с шипами",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_282",
        "name": "Знак с шипами",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_283",
        "name": "Кольцо с шипами",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_284",
        "name": "Плащ с шипами",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_285",
        "name": "Перчатки с шипами",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_286",
        "name": "Сапоги с шипами",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00102_211",
        "name": "Испепеляющий щит",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00102_212",
        "name": "Испепеляющий шлем",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00102_213",
        "name": "Испепеляющая броня",
        "step": "A"
      }
    ]
  },
  {
    "id": "stun",
    "key": "Keyword_16",
    "code": "T10001",
    "icon": "💫",
    "cat": "control",
    "element": "Neutral",
    "name": {
      "RU": "Оглушение",
      "EN": "Stun",
      "CN": "眩晕"
    },
    "desc": {
      "RU": "[Дебафф] Каждый заряд уменьшает ЗАЩ на 1. Цель не может действовать. Длится 1 ход.",
      "EN": "[Debuff] Each stack reduces DEF by 1. Target cannot act. Lasts 1 turn.",
      "CN": "【负面】每层使目标防御点数-1，期间不能进行行动，持续1回合。"
    },
    "aliases": {
      "RU": [
        "оглушение",
        "Оглушение"
      ],
      "EN": [
        "stun",
        "Stun"
      ],
      "CN": [
        "眩晕"
      ]
    },
    "related_characters": [
      {
        "id": "M11302",
        "name": "Теневая драконица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12202",
        "name": "Варг-лучница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12204",
        "name": "Нага-лучница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11114",
        "name": "Дебоширка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "prefixes",
        "id": "JH30021",
        "name": "Вялая",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40021",
        "name": "Вялая",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10039",
        "name": "Дрожь",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10147",
        "name": "Сокрушение",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN00302",
        "name": "Шок",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN01501",
        "name": "Оплот",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10145",
        "name": "Земля",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN60129",
        "name": "Выстрел в голову",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN60063",
        "name": "Парализующий яд",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN60356",
        "name": "Земляная стражница",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN60311",
        "name": "Шок титаниды",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN60044",
        "name": "Снятие контроля",
        "step": "B"
      }
    ]
  },
  {
    "id": "taunt",
    "key": "Keyword_17",
    "code": "T10009",
    "icon": "📢",
    "cat": "control",
    "element": "Earth",
    "name": {
      "RU": "Провокация",
      "EN": "Taunt",
      "CN": "诱导"
    },
    "desc": {
      "RU": "[Дебафф] Каждые 5 зарядов увеличивают получаемый УРН от контратаки на 1. Цель преимущественно атакует передний ряд. Постоянный эффект.",
      "EN": "[Debuff] Every 5 stacks increase the target's Counter DMG taken by 1. The front position will be prioritized as the target for this debuff. Persistent effect.",
      "CN": "【负面】每5层使目标受到反击伤害+1，且进行攻击优先选择前排为目标，持续生效。"
    },
    "aliases": {
      "RU": [
        "провокация",
        "Провокация"
      ],
      "EN": [
        "taunt",
        "Taunt"
      ],
      "CN": [
        "诱导"
      ]
    },
    "related_characters": [
      {
        "id": "M41301_000",
        "name": "Призрак-капитан",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13204",
        "name": "Магическая служительница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41201",
        "name": "Призрак-помощница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12208",
        "name": "Серебряная следопытка",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z30018_123",
        "name": "Палаш флибустьерки",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z30018_521",
        "name": "Шляпа флибустьерки",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00005_501",
        "name": "Повязка флибустьерки",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z02001_253",
        "name": "Перчатки шутницы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z02001_252",
        "name": "Пояс шутницы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z02001_254",
        "name": "Башмаки шутницы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60006_221",
        "name": "Метательный нож шутницы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60006_521",
        "name": "Маска шутницы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z02001_251",
        "name": "Плащ шутницы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z02001_211",
        "name": "Цилиндр фокусницы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z02001_213",
        "name": "Смокинг фокусницы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z02001_212",
        "name": "Перчатки фокусницы",
        "step": "A"
      }
    ]
  },
  {
    "id": "slow",
    "key": "Keyword_18",
    "code": "T40006",
    "icon": "🐌",
    "cat": "debuff",
    "element": "Dark / Earth",
    "name": {
      "RU": "Замедление",
      "EN": "Slow",
      "CN": "减速"
    },
    "desc": {
      "RU": "[Дебафф] Каждый заряд снижает СКР на 1. Длительный эффект.",
      "EN": "[Debuff] Each stack reduces SPD by 1. Persistent effect.",
      "CN": "【负面】每层使目标速度-1，持续生效。"
    },
    "aliases": {
      "RU": [
        "замедление",
        "Замедление"
      ],
      "EN": [
        "Slow",
        "slow"
      ],
      "CN": [
        "减速"
      ]
    },
    "related_characters": [
      {
        "id": "M13303_001",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21302",
        "name": "Вечная владычица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23205",
        "name": "Вестница дюн",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23203",
        "name": "Дриада Шипов",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22203",
        "name": "Убийца зыбучих песков",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23001",
        "name": "Слайм-волшебница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z06001_211",
        "name": "Посох пыли",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_212",
        "name": "Сфера пыли",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_213",
        "name": "Маска пыли",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_214",
        "name": "Перчатки пыли",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_215",
        "name": "Пояс пыли",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_216",
        "name": "Сапоги пыли",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_251",
        "name": "Жезл фараона",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_252",
        "name": "Корона фараона",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_253",
        "name": "Мантия фараона",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_254",
        "name": "Знак фараона",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_255",
        "name": "Амулет фараона",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z06001_256",
        "name": "Кольцо фараона",
        "step": "A"
      }
    ]
  },
  {
    "id": "vulnerable",
    "key": "Keyword_19",
    "code": "T40007",
    "icon": "💔",
    "cat": "debuff",
    "element": "Neutral",
    "name": {
      "RU": "Уязвимость",
      "EN": "Vulnerable",
      "CN": "脆弱"
    },
    "desc": {
      "RU": "[Дебафф] Каждый заряд увеличивает получаемый общий УРН на 1. Применяется к каждому удару в серии ударов. Расходуется после применения.",
      "EN": "[Debuff] Each stack increases total DMG taken by 1. Applies to each hit in multi-hit attacks. Consumed after taking effect.",
      "CN": "【负面】每层使目标受到全部伤害+1，受到多段攻击时对每段攻击生效，生效后消耗。"
    },
    "aliases": {
      "RU": [
        "Уязвимость",
        "уязвимость"
      ],
      "EN": [
        "vulnerable",
        "Vulnerable"
      ],
      "CN": [
        "脆弱"
      ]
    },
    "related_characters": [
      {
        "id": "M51303",
        "name": "Бесовка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302",
        "name": "Вестница земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22201",
        "name": "Валунный стрелок",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13210",
        "name": "Ведьма-алхимик",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11007",
        "name": "Золотоискательница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12004",
        "name": "Собирательница руды",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00001_112",
        "name": "Молот Черного железа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00001_713",
        "name": "Латные рукавицы Черного железа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00001_911",
        "name": "Кольцо Черного железа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z05001_271",
        "name": "Шлем окаменения",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z05001_272",
        "name": "Кольчуга окаменения",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z05001_273",
        "name": "Ожерелье окаменения",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z07001_211",
        "name": "Крепкий меч",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z07001_232",
        "name": "Крепкие латные рукавицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z07001_231",
        "name": "Крепкое кольцо",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10036",
        "name": "Эрозия",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN10151",
        "name": "Обрушение",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10609",
        "name": "Землетрясение",
        "step": "S"
      }
    ]
  },
  {
    "id": "chill",
    "key": "Keyword_20",
    "code": "T40004",
    "icon": "❄️",
    "cat": "debuff",
    "element": "Water",
    "name": {
      "RU": "Охлаждение",
      "EN": "Chill",
      "CN": "冰冷"
    },
    "desc": {
      "RU": "[Дебафф] Каждый заряд уменьшает наносимый общий УРН на 1. Применяется к каждому удару в серии ударов и к каждой атакованной цели. Расходуется после применения.",
      "EN": "[Debuff] Each stack reduces the target's total DMG by 1. Applies to each hit of multi-hit attacks. When affecting multiple targets, each target is affected separately based on DMG. Consumed after taking effect.",
      "CN": "【负面】每层使目标造成全部伤害-1，进行多段攻击时对每段攻击生效，多名目标时根据伤害分别生效，生效后消耗。"
    },
    "aliases": {
      "RU": [
        "Охлаждение",
        "охлаждение"
      ],
      "EN": [
        "Chill",
        "chill"
      ],
      "CN": [
        "冰冷"
      ]
    },
    "related_characters": [
      {
        "id": "M53301_001",
        "name": "Астральная Злодейка",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304_001",
        "name": "Ведьма-оса",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22301",
        "name": "Ледяная паучиха-королева",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12301_001",
        "name": "Принцесса гарпий",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31301_001",
        "name": "Святая сабля",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51201_001",
        "name": "Астральная Хранительница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14201_001",
        "name": "Боевая жрица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12202_001",
        "name": "Варг-лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11205_001",
        "name": "Лютоволчица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12204",
        "name": "Нага-лучница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13201_000",
        "name": "Поппи",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11103_001",
        "name": "Варг-воительница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00101_521",
        "name": "Посох Ледяного кристалла",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00101_522",
        "name": "Сфера Ледяного кристалла",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00101_523",
        "name": "Маска Ледяного кристалла",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00101_261",
        "name": "Ожерелье шторма",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00101_262",
        "name": "Кольцо шторма",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00101_263",
        "name": "Знак шторма",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00101_141",
        "name": "Ожерелье коррозии",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00101_142",
        "name": "Кольцо коррозии",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00101_143",
        "name": "Знак коррозии",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00101_112",
        "name": "Меч морозной волчицы",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00101_111",
        "name": "Щит морозной волчицы",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00101_113",
        "name": "Знак морозной волчицы",
        "step": "B"
      }
    ]
  },
  {
    "id": "healing_block",
    "key": "Keyword_21",
    "code": "T40002",
    "icon": "🚫",
    "cat": "debuff",
    "element": "Dark",
    "name": {
      "RU": "Помеха",
      "EN": "Hinder",
      "CN": "阻碍"
    },
    "desc": {
      "RU": "[Дебафф] Каждый заряд уменьшает общее получаемое лечение на 1 и прирост ОЗ на 1. Применяется к каждому лечению в эффектах серийного лечения. Расходуется после применения.",
      "EN": "[Debuff] Each stack reduces the target's total HP restored and HP Gain by 1. Applies to each instance of multi-heal effects. Consumed after taking effect.",
      "CN": "【负面】每层使目标受到全部恢复-1，获得生命-1，受到多段治疗时对每段治疗生效，生效后消耗。"
    },
    "aliases": {
      "RU": [
        "помеха",
        "Помеха"
      ],
      "EN": [
        "Hinder",
        "hinder"
      ],
      "CN": [
        "阻碍"
      ]
    },
    "related_characters": [
      {
        "id": "M13304",
        "name": "Ведьма-оса",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12303_000",
        "name": "Троллиха-чародейка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11210",
        "name": "Жалящая убийца",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13206",
        "name": "Споровая ведьма",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12106",
        "name": "Споровая лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11112",
        "name": "Споровая стражница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14102",
        "name": "Грибница-чаровница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11005",
        "name": "Пчела-воительница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12003",
        "name": "Пчела-охотница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "prefixes",
        "id": "JH20002",
        "name": "Зараженная",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30002",
        "name": "Зараженная",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40002",
        "name": "Зараженная",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10038",
        "name": "Ядовитый газ",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN10155",
        "name": "Ядовитый туман",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10059",
        "name": "Рой",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10185",
        "name": "Смертельный яд",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN00312",
        "name": "Ядовитый клык",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN60227",
        "name": "Привязка",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10081",
        "name": "Ядовитое покрытие",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN20011",
        "name": "Жало",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN00313",
        "name": "Заражение",
        "step": "S"
      }
    ]
  },
  {
    "id": "decay_peel",
    "key": "Keyword_22",
    "code": "T40001",
    "icon": "💀",
    "cat": "debuff",
    "element": "Dark",
    "name": {
      "RU": "Вялость",
      "EN": "Expose",
      "CN": "剥离"
    },
    "desc": {
      "RU": "【Ослабление】 Каждый стак заставляет цель в конце своего действия потерять 1 ед. максимального здоровья. За одно срабатывание эффект не может превышать 20% от макс. здоровья цели. Постоянный эффект.",
      "EN": "【Debuff】 Each stack causes the target to lose 1 Max HP at the end of their turn/action. Max HP loss per trigger cannot exceed 20% of the target's Max HP. Permanent effect.",
      "CN": "【负面】每层使目标行动结束时失去1点生命上限，每次生效层数最多不超过目标20%生命上限，持续生效。"
    },
    "aliases": {
      "RU": [
        "Вялость",
        "вялость"
      ],
      "EN": [
        "expose",
        "Expose"
      ],
      "CN": [
        "剥离"
      ]
    },
    "related_characters": [
      {
        "id": "M13307_000",
        "name": "Владычица роз",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41301",
        "name": "Призрак-капитан",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23204",
        "name": "Вестница Бури",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21202",
        "name": "Воительница бури",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31201",
        "name": "Сломанная сабля",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12101",
        "name": "Волчица-охотница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12002",
        "name": "Гоблинша-охотница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00016_121",
        "name": "Кинжал клыка зверя",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00016_521",
        "name": "Капюшон клыка зверя",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00016_621",
        "name": "Плащ клыка зверя",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00016_811",
        "name": "Ожерелье со звериным клыком",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00016_911",
        "name": "Кольцо со звериным клыком",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00016_011",
        "name": "Знак со звериным клыком",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10023_121",
        "name": "Разрывающий двуручный меч",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10024_711",
        "name": "Разрывающие перчатки",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10024_721",
        "name": "Разрывающие сапоги",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10024_821",
        "name": "Разрывающее ожерелье",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10024_921",
        "name": "Разрывающее кольцо",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10024_022",
        "name": "Разрывающий знак",
        "step": "A"
      }
    ]
  },
  {
    "id": "burn",
    "key": "Keyword_23",
    "code": "T40003",
    "icon": "🔥",
    "cat": "debuff",
    "element": "Fire",
    "name": {
      "RU": "Ожог",
      "EN": "Burn",
      "CN": "灼烧"
    },
    "desc": {
      "RU": "[Дебафф] Вызывает потерю 1 ОЗ за заряд в начале действия. Макс. зарядов за срабатывание: 20% от макс. ОЗ цели. Постоянный эффект.",
      "EN": "[Debuff] Each stack causes 1 HP loss at action start. Max stacks per trigger: 20% of target's Max HP. Persistent.",
      "CN": "【负面】每层使目标行动开始前失去1点生命，每次生效层数最多不超过目标20%生命上限，持续生效。"
    },
    "aliases": {
      "RU": [
        "Ожог",
        "ожог"
      ],
      "EN": [
        "Burn",
        "burn"
      ],
      "CN": [
        "灼烧"
      ]
    },
    "related_characters": [
      {
        "id": "M13310",
        "name": "Багровая драконица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_002",
        "name": "Ведьма земли",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21301_000",
        "name": "Золотая дева",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23301_001",
        "name": "Королева слизней",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301_000",
        "name": "Лесная нимфа",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11303_002",
        "name": "Снежный рыцарь",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22201_002",
        "name": "Валунный стрелок",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21201_002",
        "name": "Каменная стражница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12210",
        "name": "Наемница-стрелок",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13203",
        "name": "Наставница Академии",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21205",
        "name": "Огненная банши",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22202_002",
        "name": "Позолоченная лучница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00000_542",
        "name": "Стихийная корона",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_133",
        "name": "Пылающий знак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_131",
        "name": "Пылающее ожерелье",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_132",
        "name": "Пылающее кольцо",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z40003_311",
        "name": "Посох Огненного шара",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z40007_311",
        "name": "Сфера Огненного шара",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z40003_811",
        "name": "Кольцо Огненного шара",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z40003_531",
        "name": "Вечное пламя",
        "step": "SS"
      },
      {
        "category": "equipment",
        "id": "Z40022_621",
        "name": "Накидка огненного пера",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z40022_722",
        "name": "Пояс огненного пера",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z40022_721",
        "name": "Сапоги огненного пера",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z40013_511",
        "name": "Капюшон отшельника",
        "step": "B"
      }
    ]
  },
  {
    "id": "shock",
    "key": "Keyword_24",
    "code": "T40005",
    "icon": "⚡",
    "cat": "debuff",
    "element": "Light",
    "name": {
      "RU": "Шок",
      "EN": "Shock",
      "CN": "感电"
    },
    "desc": {
      "RU": "[Дебафф] Каждый заряд уменьшает получаемую ману на 1 (не более 20% от макс. маны за раз). Расходуется после применения.",
      "EN": "[Debuff] Each stack reduces Mana gained by 1, up to 20% of Max Mana per instance. Consumed after taking effect.",
      "CN": "【负面】每层使目标获得魔力-1，每次生效层数最多不超过目标20%魔力上限，生效后消耗。"
    },
    "aliases": {
      "RU": [
        "шок",
        "Шок"
      ],
      "EN": [
        "shock",
        "Shock"
      ],
      "CN": [
        "感电"
      ]
    },
    "related_characters": [
      {
        "id": "M51302",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31303_000",
        "name": "Титанида-копейщица",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12303",
        "name": "Троллиха-чародейка",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23204_000",
        "name": "Вестница Бури",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21202_000",
        "name": "Воительница бури",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13201_000",
        "name": "Поппи",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M43101",
        "name": "Заблудшая Душа",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00000_031",
        "name": "Стихийный знак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00012_521",
        "name": "Соломенная шляпа",
        "step": "SS"
      },
      {
        "category": "equipment",
        "id": "Z10015_331",
        "name": "Посох земли",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60010_731",
        "name": "Пояс земли",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60010_931",
        "name": "Кольцо земли",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z20002_141",
        "name": "Якорь океана",
        "step": "SS"
      },
      {
        "category": "equipment",
        "id": "Z60013_021",
        "name": "Заряжающие перчатки",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60013_022",
        "name": "Заряжающий пояс",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60013_023",
        "name": "Заряжающие ботинки",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z03001_371",
        "name": "Ярость грома",
        "step": "SS"
      },
      {
        "category": "equipment",
        "id": "Z00201_431",
        "name": "Копье Лазурной драконицы",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00201_432",
        "name": "Мантия Лазурной драконицы",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_25",
    "key": "Keyword_25",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Контратака",
      "EN": "Counter",
      "CN": "反击"
    },
    "desc": {
      "RU": "При получении удара в радиусе контратаки наносит атакующему 1 УРН контратаки. УРН контратаки увеличивается на 1 за каждые 5 ед. разницы АТК и ЗАЩ. Только у Воительниц базовый радиус контратаки равен 1.",
      "EN": "When taking a hit and within Counter range, deal 1 Counter DMG to the attacker. Counter DMG increases by 1 for every 5 DEF above the target's ATK. Only Warriors have base Counter range of 1.",
      "CN": "受到攻击且满足反击距离时，对目标造成1点反击伤害，每5点攻防差值使反击伤害+1。只有战士基础反击距离为1。"
    },
    "aliases": {
      "RU": [
        "контратака",
        "Контратака"
      ],
      "EN": [
        "Counter",
        "counter"
      ],
      "CN": [
        "反击"
      ]
    },
    "related_characters": [
      {
        "id": "M31302",
        "name": "Великанша",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11304",
        "name": "Отважная минотаврица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11304_001",
        "name": "Отважная минотаврица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51201",
        "name": "Астральная Хранительница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51201_001",
        "name": "Астральная Хранительница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21202",
        "name": "Воительница бури",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21202_000",
        "name": "Воительница бури",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41201",
        "name": "Призрак-помощница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21204",
        "name": "Стражница прилива",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11112",
        "name": "Споровая стражница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11107",
        "name": "Стражница Серебряной чешуи",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11101",
        "name": "Безмолвная охотница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "prefixes",
        "id": "JH20015",
        "name": "Слепая",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30015",
        "name": "Слепая",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40015",
        "name": "Слепая",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10140",
        "name": "Контратака",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN60093",
        "name": "Звездный проводник",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN60601",
        "name": "Стойка контратаки",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_26",
    "key": "Keyword_26",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Повторный удар",
      "EN": "Follow-Up",
      "CN": "追击"
    },
    "desc": {
      "RU": "При использовании базовой АТК, если СКР выше, чем у цели, наносит цели 1 УРН повторного удара. УРН повторного удара увеличивается на 1 за каждые 5 ед. разницы АТК и ЗАЩ. Только у Лучниц есть 1 базовый повторный удар.",
      "EN": "When performing a basic attack, if SPD exceeds the target's, deal 1 Follow-Up DMG. Only Archers have a base Follow-Up count of 1.",
      "CN": "普通攻击且速度高于目标时，对目标造成1点追击伤害，每5点攻防差值使追击伤害+1。只有射手基础追击次数为1。"
    },
    "aliases": {
      "RU": [
        "повторный удар",
        "Повторный удар"
      ],
      "EN": [
        "follow-up",
        "Follow-Up"
      ],
      "CN": [
        "追击"
      ]
    },
    "related_characters": [
      {
        "id": "M31302_000",
        "name": "Великанша",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M52301",
        "name": "Звездная Лучница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12301",
        "name": "Принцесса гарпий",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12301_001",
        "name": "Принцесса гарпий",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12202",
        "name": "Варг-лучница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12202_001",
        "name": "Варг-лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12204",
        "name": "Нага-лучница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12101",
        "name": "Волчица-охотница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12105",
        "name": "Лучница Легиона",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "bonds",
        "id": "JN60604",
        "name": "Охота на слабых",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN40001",
        "name": "Поступь ветра",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60390",
        "name": "Решающий штурм",
        "step": "B"
      }
    ]
  },
  {
    "id": "keyword_27",
    "key": "Keyword_27",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "АТК",
      "EN": "ATK",
      "CN": "攻击点数"
    },
    "desc": {
      "RU": "Характеристика в красной рамке, используется при атаке и лечении. При атаке: +1 к базовому УРН и УРН от навыков за каждые 5 ед. разницы АТК и ЗАЩ. При лечении: +1 к базовому лечению и лечению от умений за каждые 10 ед. АТК.",
      "EN": "Red-bordered stat used for attacking and healing. When attacking, basic and skill DMG increase by 1 for every 5 ATK above the target's DEF. When healing, gain 1 basic and skill healing per 10 ATK.",
      "CN": "红色底框标识，攻击与治疗时使用的属性。攻击时每5点攻防差值使自身造成普通和技能伤害+1，治疗时每10点攻击点数使自身造成普通和技能恢复+1。"
    },
    "aliases": {
      "RU": [
        "атк",
        "АТК"
      ],
      "EN": [
        "atk",
        "ATK"
      ],
      "CN": [
        "攻击点数"
      ]
    },
    "related_characters": [
      {
        "id": "M53301",
        "name": "Астральная Злодейка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M53301_001",
        "name": "Астральная Злодейка",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M53301_002",
        "name": "Астральная Злодейка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13310",
        "name": "Багровая драконица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303",
        "name": "Бесовка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303_000",
        "name": "Бесовка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_001",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_002",
        "name": "Ведьма земли",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304",
        "name": "Ведьма-оса",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304_001",
        "name": "Ведьма-оса",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31302",
        "name": "Великанша",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00000_542",
        "name": "Стихийная корона",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_031",
        "name": "Стихийный знак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_841",
        "name": "Стихийное сердце",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00017_221",
        "name": "Лук застрельщицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00017_223",
        "name": "Колчан застрельщицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00017_224",
        "name": "Знак застрельщицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10016_711",
        "name": "Перчатки единства",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00008_711",
        "name": "Пояс единства",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10016_712",
        "name": "Сапоги единства",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00003_312",
        "name": "Посох Кристалла маны",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00003_314",
        "name": "Сфера Кристалла маны",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00003_912",
        "name": "Знак Кристалла маны",
        "step": "B"
      }
    ]
  },
  {
    "id": "keyword_28",
    "key": "Keyword_28",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "ЗАЩ",
      "EN": "DEF",
      "CN": "防御点数"
    },
    "desc": {
      "RU": "Характеристика в синей рамке, используемая при защите. За каждые 5 ед. разницы между АТК и ЗАЩ получаемый общий УРН снижается на 1 ед.",
      "EN": "Blue-bordered stat used for defense. Take 1 less total DMG for every 5 DEF above the the target's ATF when defending.",
      "CN": "蓝色底框标识，防御时使用的属性。防御时每5点攻防差值使自身受到全部伤害-1。"
    },
    "aliases": {
      "RU": [
        "ЗАЩ",
        "защ"
      ],
      "EN": [
        "DEF",
        "def"
      ],
      "CN": [
        "防御点数"
      ]
    },
    "related_characters": [
      {
        "id": "M13302",
        "name": "Вестница земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23301_001",
        "name": "Королева слизней",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11304_000",
        "name": "Отважная минотаврица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11114",
        "name": "Дебоширка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24101",
        "name": "Слайм-горничная",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11107",
        "name": "Стражница Серебряной чешуи",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21101",
        "name": "Трент-стражница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00000_001",
        "name": "Знак удачи",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00000_003",
        "name": "Ожерелье удачи",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00000_002",
        "name": "Кольцо удачи",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00018_112",
        "name": "Двуручный меч стойкости",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00018_713",
        "name": "Щит стойкости",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00018_011",
        "name": "Знак стойкости",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00006_712",
        "name": "Первозданные перчатки",
        "step": "C"
      },
      {
        "category": "equipment",
        "id": "Z00006_713",
        "name": "Первозданный пояс",
        "step": "C"
      },
      {
        "category": "equipment",
        "id": "Z00006_714",
        "name": "Первозданные ботинки",
        "step": "C"
      },
      {
        "category": "equipment",
        "id": "Z00015_101",
        "name": "Тренировочный меч",
        "step": "C"
      },
      {
        "category": "equipment",
        "id": "Z00015_102",
        "name": "Тренировочный щит",
        "step": "C"
      },
      {
        "category": "equipment",
        "id": "Z00015_103",
        "name": "Тренировочный капюшон",
        "step": "C"
      }
    ]
  },
  {
    "id": "keyword_29",
    "key": "Keyword_29",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Слабость",
      "EN": "Weakness",
      "CN": "弱点点数"
    },
    "desc": {
      "RU": "Характеристика в коричневой рамке, которая заменяет ЗАЩ, когда обнаруживается слабость.",
      "EN": "Brown-bordered stat that replaces DEF when Weakness is exposed.",
      "CN": "棕色底框标识，弱点暴露状态下代替防御点数进行防御。"
    },
    "aliases": {
      "RU": [
        "Слабость",
        "слабость"
      ],
      "EN": [
        "weakness",
        "Weakness"
      ],
      "CN": [
        "弱点点数"
      ]
    },
    "related_characters": [],
    "related_items": [
      {
        "category": "bonds",
        "id": "JN60199",
        "name": "Дисциплина",
        "step": "C"
      }
    ]
  },
  {
    "id": "keyword_30",
    "key": "Keyword_30",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Боевые характеристики",
      "EN": "Combat Stats",
      "CN": "战斗点数"
    },
    "desc": {
      "RU": "АТК и ЗАЩ во время боя.",
      "EN": "ATK and DEF during battle.",
      "CN": "战斗中的攻击点数和防御点数。"
    },
    "aliases": {
      "RU": [
        "боевые характеристики",
        "Боевые характеристики"
      ],
      "EN": [
        "combat stats",
        "Combat Stats"
      ],
      "CN": [
        "战斗点数"
      ]
    },
    "related_characters": [],
    "related_items": []
  },
  {
    "id": "keyword_31",
    "key": "Keyword_31",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Прочность",
      "EN": "Toughness",
      "CN": "韧性"
    },
    "desc": {
      "RU": "Каждый удар снижает прочность на 1. Когда прочность падает до 0, обнаруживается слабость.",
      "EN": "Each hit reduces Toughness by 1. When Toughness reaches 0, Weakness is exposed.",
      "CN": "角色受到每段攻击都会失去1点韧性，当韧性为0时角色将弱点暴露。"
    },
    "aliases": {
      "RU": [
        "Прочность",
        "прочность"
      ],
      "EN": [
        "Toughness",
        "toughness"
      ],
      "CN": [
        "韧性"
      ]
    },
    "related_characters": [
      {
        "id": "M53301",
        "name": "Астральная Злодейка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M53301_001",
        "name": "Астральная Злодейка",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M53301_002",
        "name": "Астральная Злодейка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13310",
        "name": "Багровая драконица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14215",
        "name": "Бархатные шипы",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301",
        "name": "Безмятежная ундина",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301_000",
        "name": "Безмятежная ундина",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303",
        "name": "Бесовка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303_000",
        "name": "Бесовка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z50006_131",
        "name": "Меч героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_132",
        "name": "Щит героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_133",
        "name": "Латные рукавицы героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_031",
        "name": "Знак героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_831",
        "name": "Сердце героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_931",
        "name": "Кольцо героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10016_711",
        "name": "Перчатки единства",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00008_711",
        "name": "Пояс единства",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10016_712",
        "name": "Сапоги единства",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00018_112",
        "name": "Двуручный меч стойкости",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00018_713",
        "name": "Щит стойкости",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00018_011",
        "name": "Знак стойкости",
        "step": "B"
      }
    ]
  },
  {
    "id": "keyword_32",
    "key": "Keyword_32",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "СКР",
      "EN": "SPD",
      "CN": "速度"
    },
    "desc": {
      "RU": "Определяет порядок действий в бою.",
      "EN": "Determines turn order in battle.",
      "CN": "决定战斗中角色的行动顺序。"
    },
    "aliases": {
      "RU": [
        "СКР",
        "скр"
      ],
      "EN": [
        "SPD",
        "spd"
      ],
      "CN": [
        "速度"
      ]
    },
    "related_characters": [
      {
        "id": "M53301",
        "name": "Астральная Злодейка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M53301_001",
        "name": "Астральная Злодейка",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13310",
        "name": "Багровая драконица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14215",
        "name": "Бархатные шипы",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301",
        "name": "Безмятежная ундина",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301_000",
        "name": "Безмятежная ундина",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_001",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_002",
        "name": "Ведьма земли",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304",
        "name": "Ведьма-оса",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z60004_331",
        "name": "Астральный посох",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_332",
        "name": "Астральная сфера",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_631",
        "name": "Астральный плащ",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50003_631",
        "name": "Превосходная накидка",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50003_731",
        "name": "Превосходный пояс",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60006_931",
        "name": "Превосходное кольцо",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_542",
        "name": "Стихийная корона",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_031",
        "name": "Стихийный знак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_841",
        "name": "Стихийное сердце",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60007_231",
        "name": "Утраченный священный лук",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00003_231",
        "name": "Утраченные священные стрелы",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00003_232",
        "name": "Утраченный пояс",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_33",
    "key": "Keyword_33",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Удача",
      "EN": "Luck",
      "CN": "幸运"
    },
    "desc": {
      "RU": "Каждые 15 ед. удачи у всей команды (вне боя) дают 1 дополнительный переброс Клевера при подведении итогов боя.",
      "EN": "Every 15 Luck across the team (outside battle) grants 1 extra Clover reroll during battle resolution.",
      "CN": "全队每拥有15点幸运（非战斗中）使战斗结算时使用四叶草重置骰子点数额外+1。"
    },
    "aliases": {
      "RU": [
        "удача",
        "Удача"
      ],
      "EN": [
        "Luck",
        "luck"
      ],
      "CN": [
        "幸运"
      ]
    },
    "related_characters": [
      {
        "id": "M14211",
        "name": "Рыжая лиса-жрица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z60007_231",
        "name": "Утраченный священный лук",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00003_231",
        "name": "Утраченные священные стрелы",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00003_232",
        "name": "Утраченный пояс",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_161",
        "name": "Наручи судьбы",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_162",
        "name": "Пояс судьбы",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_163",
        "name": "Сапоги судьбы",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_164",
        "name": "Эмблема судьбы",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_165",
        "name": "Ожерелье судьбы",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_166",
        "name": "Кольцо судьбы",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_001",
        "name": "Знак удачи",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00000_003",
        "name": "Ожерелье удачи",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00000_002",
        "name": "Кольцо удачи",
        "step": "B"
      }
    ]
  },
  {
    "id": "keyword_34",
    "key": "Keyword_34",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Мало ОЗ",
      "EN": "Low HP",
      "CN": "低生命"
    },
    "desc": {
      "RU": "Текущий запас ОЗ составляет 50% или менее от максимума.",
      "EN": "Current HP at or below 50% of Max HP.",
      "CN": "当前生命不高于50%生命上限。"
    },
    "aliases": {
      "RU": [
        "мало оз",
        "Мало ОЗ"
      ],
      "EN": [
        "low hp",
        "Low HP"
      ],
      "CN": [
        "低生命"
      ]
    },
    "related_characters": [],
    "related_items": [
      {
        "category": "prefixes",
        "id": "JH20009",
        "name": "Дикая",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30009",
        "name": "Дикая",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40009",
        "name": "Дикая",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH40015",
        "name": "Слепая",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60189",
        "name": "Спасение",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10009",
        "name": "Поддержка",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10204",
        "name": "Засада",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN60184",
        "name": "Расплата",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN02202",
        "name": "Выслеживание",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10007",
        "name": "Пробивание",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10008",
        "name": "Экстренность",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN00006",
        "name": "Жатва",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_35",
    "key": "Keyword_35",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Много ОЗ",
      "EN": "High HP",
      "CN": "高生命"
    },
    "desc": {
      "RU": "Текущий запас ОЗ превышает 50% от максимума.",
      "EN": "Current HP above 50% of Max HP.",
      "CN": "当前生命高于50%生命上限。"
    },
    "aliases": {
      "RU": [
        "много оз",
        "Много ОЗ"
      ],
      "EN": [
        "High HP",
        "high hp"
      ],
      "CN": [
        "高生命"
      ]
    },
    "related_characters": [],
    "related_items": [
      {
        "category": "bonds",
        "id": "JN60313",
        "name": "Натиск",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN60316",
        "name": "Подавление",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10011",
        "name": "Охота",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10012",
        "name": "Выдержка",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN10010",
        "name": "Крушение",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN02103",
        "name": "Безжалостность",
        "step": "C"
      }
    ]
  },
  {
    "id": "keyword_36",
    "key": "Keyword_36",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Воин",
      "EN": "Warrior",
      "CN": "战士"
    },
    "desc": {
      "RU": "Класс-танк, специализирующийся на контратаках. Контратакует, получая удар в радиусе контратаки. Рекомендуемая позиция: передняя, средняя.",
      "EN": "A tank class specializing in counter-attacks. Retaliates against enemies when taking a hit within Counter range. Recommended position: front, mid.",
      "CN": "擅长反击的肉盾职业，受到攻击且满足反击距离时进行反击，推荐位置：前排、中排。"
    },
    "aliases": {
      "RU": [
        "воин",
        "Воин"
      ],
      "EN": [
        "Warrior",
        "warrior"
      ],
      "CN": [
        "战士"
      ]
    },
    "related_characters": [
      {
        "id": "M53301_002",
        "name": "Астральная Злодейка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13310",
        "name": "Багровая драконица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303",
        "name": "Бесовка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303_000",
        "name": "Бесовка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31302",
        "name": "Великанша",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21302",
        "name": "Вечная владычица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21302_000",
        "name": "Вечная владычица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M52301_000",
        "name": "Звездная Лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21301",
        "name": "Золотая дева",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21301_000",
        "name": "Золотая дева",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11301",
        "name": "Командующая Легиона",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11301_000",
        "name": "Командующая Легиона",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z50006_131",
        "name": "Меч героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_132",
        "name": "Щит героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_133",
        "name": "Латные рукавицы героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_031",
        "name": "Знак героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_831",
        "name": "Сердце героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_931",
        "name": "Кольцо героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_133",
        "name": "Пылающий знак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_131",
        "name": "Пылающее ожерелье",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_132",
        "name": "Пылающее кольцо",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_151",
        "name": "Сонная кукла",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_152",
        "name": "Сонный колпак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_153",
        "name": "Сонная пижама",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_37",
    "key": "Keyword_37",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Маг",
      "EN": "Mage",
      "CN": "法师"
    },
    "desc": {
      "RU": "Класс для нанесения урона, специализир. на умениях. Начинает бой с 10 ед. доп. начальной маны. Рекоменд. позиция: средняя, задняя.",
      "EN": "A damage class specializing in skills. Starts with 10 extra Starting Mana. Recommended position: mid, back.",
      "CN": "擅长技能的输出职业，初始魔力+10，推荐位置：中排、后排。"
    },
    "aliases": {
      "RU": [
        "Маг",
        "маг"
      ],
      "EN": [
        "Mage",
        "mage"
      ],
      "CN": [
        "法师"
      ]
    },
    "related_characters": [
      {
        "id": "M53301",
        "name": "Астральная Злодейка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M53301_001",
        "name": "Астральная Злодейка",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13310",
        "name": "Багровая драконица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_001",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_002",
        "name": "Ведьма земли",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304",
        "name": "Ведьма-оса",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304_001",
        "name": "Ведьма-оса",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13305",
        "name": "Великая волшебница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13305_000",
        "name": "Великая волшебница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302",
        "name": "Вестница земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302_000",
        "name": "Вестница земли",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z60004_331",
        "name": "Астральный посох",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_332",
        "name": "Астральная сфера",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_631",
        "name": "Астральный плащ",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50003_631",
        "name": "Превосходная накидка",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50003_731",
        "name": "Превосходный пояс",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60006_931",
        "name": "Превосходное кольцо",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_542",
        "name": "Стихийная корона",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_031",
        "name": "Стихийный знак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_841",
        "name": "Стихийное сердце",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_133",
        "name": "Пылающий знак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_131",
        "name": "Пылающее ожерелье",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_132",
        "name": "Пылающее кольцо",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_38",
    "key": "Keyword_38",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Жрица",
      "EN": "Priest",
      "CN": "牧师"
    },
    "desc": {
      "RU": "Класс поддержки, специализирующийся на лечении. Треб. АТК для лечения уменьшена вдвое, но персонажу недоступны повторные удары и контратаки. Рекоменд. позиция: передняя, средняя.",
      "EN": "A support class specializing in healing. ATK required for boosted healing effects is halved, but cannot follow up or Counter. Recommended position: front, mid.",
      "CN": "擅长恢复的支援职业，治疗时提升恢复要求的攻击点数减半，但无法追击和反击，推荐位置：前排、中排。"
    },
    "aliases": {
      "RU": [
        "жрица",
        "Жрица"
      ],
      "EN": [
        "priest",
        "Priest"
      ],
      "CN": [
        "牧师"
      ]
    },
    "related_characters": [
      {
        "id": "M14215",
        "name": "Бархатные шипы",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301",
        "name": "Безмятежная ундина",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301_000",
        "name": "Безмятежная ундина",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14303",
        "name": "Исекай-странница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301",
        "name": "Колдунья желаний",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301_000",
        "name": "Колдунья желаний",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301",
        "name": "Лесная нимфа",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301_000",
        "name": "Лесная нимфа",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14201",
        "name": "Боевая жрица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14201_001",
        "name": "Боевая жрица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z50006_132",
        "name": "Щит героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_133",
        "name": "Латные рукавицы героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_031",
        "name": "Знак героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_831",
        "name": "Сердце героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_931",
        "name": "Кольцо героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50004_421",
        "name": "Жезл клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50004_422",
        "name": "Щит клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50004_423",
        "name": "Знак клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50002_521",
        "name": "Корона клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50002_611",
        "name": "Мантия клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50002_522",
        "name": "Ожерелье клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50006_721",
        "name": "Перчатки клирика",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_39",
    "key": "Keyword_39",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Жрица",
      "EN": "Archer",
      "CN": "射手"
    },
    "desc": {
      "RU": "Класс для нанесения урона, специализир. на повторных ударах. Наносит повторный удар при использ. баз. АТК, если СКР выше, чем у цели. Рекоменд. позиция: средняя, задняя.",
      "EN": "A damage class specializing in Follow-Ups. Follows up when using basic attacks with higher SPD than target. Recommended position: mid, back.",
      "CN": "擅长追击的输出职业，普通攻击且速度高于目标时进行追击，推荐位置：中排、后排。"
    },
    "aliases": {
      "RU": [
        "жрица",
        "Жрица"
      ],
      "EN": [
        "archer",
        "Archer"
      ],
      "CN": [
        "射手"
      ]
    },
    "related_characters": [
      {
        "id": "M14215",
        "name": "Бархатные шипы",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301",
        "name": "Безмятежная ундина",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301_000",
        "name": "Безмятежная ундина",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14303",
        "name": "Исекай-странница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301",
        "name": "Колдунья желаний",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301_000",
        "name": "Колдунья желаний",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301",
        "name": "Лесная нимфа",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301_000",
        "name": "Лесная нимфа",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14201",
        "name": "Боевая жрица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14201_001",
        "name": "Боевая жрица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z50006_132",
        "name": "Щит героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_133",
        "name": "Латные рукавицы героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_031",
        "name": "Знак героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_831",
        "name": "Сердце героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_931",
        "name": "Кольцо героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50004_421",
        "name": "Жезл клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50004_422",
        "name": "Щит клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50004_423",
        "name": "Знак клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50002_521",
        "name": "Корона клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50002_611",
        "name": "Мантия клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50002_522",
        "name": "Ожерелье клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50006_721",
        "name": "Перчатки клирика",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_40",
    "key": "Keyword_40",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Земля",
      "EN": "Earth",
      "CN": "地系"
    },
    "desc": {
      "RU": "У девушек земли повышенные СИЛ и прочность.",
      "EN": "Earth girls have higher STR and Toughness.",
      "CN": "地系角色拥有更高的力量和韧性。"
    },
    "aliases": {
      "RU": [
        "земля",
        "Земля"
      ],
      "EN": [
        "Earth",
        "earth"
      ],
      "CN": [
        "地系"
      ]
    },
    "related_characters": [
      {
        "id": "M53301_002",
        "name": "Астральная Злодейка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14215",
        "name": "Бархатные шипы",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303_000",
        "name": "Бесовка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_001",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31302",
        "name": "Великанша",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302",
        "name": "Вестница земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21302",
        "name": "Вечная владычица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13307",
        "name": "Владычица роз",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11301",
        "name": "Командующая Легиона",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z10026_411",
        "name": "Посох власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10021_521",
        "name": "Корона власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10021_621",
        "name": "Накидка власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10021_727",
        "name": "Перчатки власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10021_724",
        "name": "Кушак власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10021_728",
        "name": "Сапоги власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_131",
        "name": "Меч героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_132",
        "name": "Щит героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_133",
        "name": "Латные рукавицы героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_031",
        "name": "Знак героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_831",
        "name": "Сердце героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_931",
        "name": "Кольцо героини",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_41",
    "key": "Keyword_41",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Ветер",
      "EN": "Wind",
      "CN": "风系"
    },
    "desc": {
      "RU": "У девушек ветра повышенные ЛВК и СКР.",
      "EN": "Wind girls have higher AGI and SPD.",
      "CN": "风系角色拥有更高的敏捷和速度。"
    },
    "aliases": {
      "RU": [
        "Ветер",
        "ветер"
      ],
      "EN": [
        "Wind",
        "wind"
      ],
      "CN": [
        "风系"
      ]
    },
    "related_characters": [
      {
        "id": "M31302_000",
        "name": "Великанша",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M52301_000",
        "name": "Звездная Лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301",
        "name": "Колдунья желаний",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12301",
        "name": "Принцесса гарпий",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12301_001",
        "name": "Принцесса гарпий",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31303_000",
        "name": "Титанида-копейщица",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12303",
        "name": "Троллиха-чародейка",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12205",
        "name": "Шагающая по ветру",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12202_001",
        "name": "Варг-лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23204",
        "name": "Вестница Бури",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21202",
        "name": "Воительница бури",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14202",
        "name": "Гоблинша-жрица",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00000_542",
        "name": "Стихийная корона",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_031",
        "name": "Стихийный знак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_841",
        "name": "Стихийное сердце",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00017_221",
        "name": "Лук застрельщицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00017_223",
        "name": "Колчан застрельщицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00017_224",
        "name": "Знак застрельщицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00017_521",
        "name": "Шляпа застрельщицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00017_622",
        "name": "Мантия застрельщицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00017_625",
        "name": "Ожерелье застрельщицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00017_621",
        "name": "Перчатки застрельщицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00017_623",
        "name": "Пояс застрельщицы",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00017_624",
        "name": "Сапоги застрельщицы",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_42",
    "key": "Keyword_42",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Вода",
      "EN": "Water",
      "CN": "水系"
    },
    "desc": {
      "RU": "У девушек воды повышенные ДУХ и ОЗ.",
      "EN": "Water girls have higher SPI and HP.",
      "CN": "水系角色拥有更高的精神和生命。"
    },
    "aliases": {
      "RU": [
        "Вода",
        "вода"
      ],
      "EN": [
        "Water",
        "water"
      ],
      "CN": [
        "水系"
      ]
    },
    "related_characters": [
      {
        "id": "M53301_001",
        "name": "Астральная Злодейка",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301",
        "name": "Безмятежная ундина",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304_001",
        "name": "Ведьма-оса",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22301",
        "name": "Ледяная паучиха-королева",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11304_001",
        "name": "Отважная минотаврица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51302",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51302_001",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31301_001",
        "name": "Святая сабля",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11303",
        "name": "Снежный рыцарь",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11207",
        "name": "Аква-командующая",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51201_001",
        "name": "Астральная Хранительница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14201_001",
        "name": "Боевая жрица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00000_542",
        "name": "Стихийная корона",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_031",
        "name": "Стихийный знак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_841",
        "name": "Стихийное сердце",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00003_321",
        "name": "Посох архимага",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00003_322",
        "name": "Сфера архимага",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00003_021",
        "name": "Знак архимага",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00003_521",
        "name": "Шляпа архимага",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00003_621",
        "name": "Накидка архимага",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00003_522",
        "name": "Ожерелье архимага",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00003_723",
        "name": "Перчатки архимага",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00003_724",
        "name": "Кушак архимага",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00003_722",
        "name": "Сапоги архимага",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_43",
    "key": "Keyword_43",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Огонь",
      "EN": "Fire",
      "CN": "火系"
    },
    "desc": {
      "RU": "У девушек огня повышенные СИЛ и ОЗ.",
      "EN": "Fire girls have higher STR and HP.",
      "CN": "火系角色拥有更高的力量和生命。"
    },
    "aliases": {
      "RU": [
        "огонь",
        "Огонь"
      ],
      "EN": [
        "Fire",
        "fire"
      ],
      "CN": [
        "火系"
      ]
    },
    "related_characters": [
      {
        "id": "M13310",
        "name": "Багровая драконица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14215",
        "name": "Бархатные шипы",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_002",
        "name": "Ведьма земли",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13305",
        "name": "Великая волшебница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302_000",
        "name": "Вестница земли",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13307",
        "name": "Владычица роз",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13307_000",
        "name": "Владычица роз",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21301_000",
        "name": "Золотая дева",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11301_000",
        "name": "Командующая Легиона",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23301_001",
        "name": "Королева слизней",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301_000",
        "name": "Лесная нимфа",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11304",
        "name": "Отважная минотаврица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00000_542",
        "name": "Стихийная корона",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_031",
        "name": "Стихийный знак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_841",
        "name": "Стихийное сердце",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_133",
        "name": "Пылающий знак",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_131",
        "name": "Пылающее ожерелье",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_132",
        "name": "Пылающее кольцо",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00014_121",
        "name": "Двуручный меч танца клинков",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00014_122",
        "name": "Кинжал танца клинков",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50002_021",
        "name": "Знак танца клинков",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00014_521",
        "name": "Шлем танца клинков",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00014_621",
        "name": "Броня танца клинков",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00014_522",
        "name": "Ожерелье танца клинков",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_44",
    "key": "Keyword_44",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Свет",
      "EN": "Light",
      "CN": "光系"
    },
    "desc": {
      "RU": "У девушек света повышенные ДУХ и СКР.",
      "EN": "Light girls have higher SPI and SPD.",
      "CN": "光系角色拥有更高的精神和速度。"
    },
    "aliases": {
      "RU": [
        "Свет",
        "свет"
      ],
      "EN": [
        "Light",
        "light"
      ],
      "CN": [
        "光系"
      ]
    },
    "related_characters": [
      {
        "id": "M14215",
        "name": "Бархатные шипы",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301",
        "name": "Безмятежная ундина",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301_000",
        "name": "Безмятежная ундина",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303_000",
        "name": "Бесовка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13305",
        "name": "Великая волшебница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13305_000",
        "name": "Великая волшебница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21302_000",
        "name": "Вечная владычица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13307",
        "name": "Владычица роз",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13307_000",
        "name": "Владычица роз",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M52301",
        "name": "Звездная Лучница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00000_942",
        "name": "Философский камень",
        "step": "SS"
      },
      {
        "category": "equipment",
        "id": "Z10026_411",
        "name": "Посох власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10021_521",
        "name": "Корона власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10021_621",
        "name": "Накидка власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10021_727",
        "name": "Перчатки власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10021_724",
        "name": "Кушак власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10021_728",
        "name": "Сапоги власти",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_131",
        "name": "Меч героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_132",
        "name": "Щит героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_133",
        "name": "Латные рукавицы героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_031",
        "name": "Знак героини",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50006_831",
        "name": "Сердце героини",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_45",
    "key": "Keyword_45",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Тьма",
      "EN": "Dark",
      "CN": "暗系"
    },
    "desc": {
      "RU": "У девушек тьмы повышенные ЛВК и прочность.",
      "EN": "Dark girls have higher AGI and Toughness.",
      "CN": "暗系角色拥有更高的敏捷和韧性。"
    },
    "aliases": {
      "RU": [
        "Тьма",
        "тьма"
      ],
      "EN": [
        "Dark",
        "dark"
      ],
      "CN": [
        "暗系"
      ]
    },
    "related_characters": [
      {
        "id": "M53301",
        "name": "Астральная Злодейка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303",
        "name": "Бесовка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304",
        "name": "Ведьма-оса",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13305",
        "name": "Великая волшебница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302_000",
        "name": "Вестница земли",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13307_000",
        "name": "Владычица роз",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14303",
        "name": "Исекай-странница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13306_000",
        "name": "Кристальная грибница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41301",
        "name": "Призрак-капитан",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12211_000",
        "name": "Танцовщица пустыни",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11302",
        "name": "Теневая драконица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11302_000",
        "name": "Теневая драконица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00000_942",
        "name": "Философский камень",
        "step": "SS"
      },
      {
        "category": "equipment",
        "id": "Z60004_331",
        "name": "Астральный посох",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_332",
        "name": "Астральная сфера",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_631",
        "name": "Астральный плащ",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60008_031",
        "name": "Знак Звездного ядра",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60007_831",
        "name": "Ожерелье Звездного ядра",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60008_921",
        "name": "Кольцо Звездного ядра",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60007_231",
        "name": "Утраченный священный лук",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00003_231",
        "name": "Утраченные священные стрелы",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00003_232",
        "name": "Утраченный пояс",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_151",
        "name": "Сонная кукла",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_152",
        "name": "Сонный колпак",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_46",
    "key": "Keyword_46",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Живое",
      "EN": "Spirit",
      "CN": "生灵"
    },
    "desc": {
      "RU": "У живых девушек повышенные ЛВК и СКР.",
      "EN": "Spirit girls have higher AGI and SPD.",
      "CN": "生灵角色拥有更高的敏捷和速度。"
    },
    "aliases": {
      "RU": [
        "Живое",
        "живое"
      ],
      "EN": [
        "spirit",
        "Spirit"
      ],
      "CN": [
        "生灵"
      ]
    },
    "related_characters": [
      {
        "id": "M13310",
        "name": "Багровая драконица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14215",
        "name": "Бархатные шипы",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_001",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_002",
        "name": "Ведьма земли",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304",
        "name": "Ведьма-оса",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304_001",
        "name": "Ведьма-оса",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13305",
        "name": "Великая волшебница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13305_000",
        "name": "Великая волшебница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302",
        "name": "Вестница земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": []
  },
  {
    "id": "keyword_47",
    "key": "Keyword_47",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Стихия",
      "EN": "Demon",
      "CN": "魔灵"
    },
    "desc": {
      "RU": "У демониц повышенные ДУХ и СКР.",
      "EN": "Demon girls have higher SPI and SPD.",
      "CN": "魔灵角色拥有更高的精神和速度。"
    },
    "aliases": {
      "RU": [
        "стихия",
        "Стихия"
      ],
      "EN": [
        "Demon",
        "demon"
      ],
      "CN": [
        "魔灵"
      ]
    },
    "related_characters": [
      {
        "id": "M24301",
        "name": "Безмятежная ундина",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M24301_000",
        "name": "Безмятежная ундина",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21302",
        "name": "Вечная владычица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21302_000",
        "name": "Вечная владычица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21301",
        "name": "Золотая дева",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21301_000",
        "name": "Золотая дева",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23301",
        "name": "Королева слизней",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23301_000",
        "name": "Королева слизней",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23301_001",
        "name": "Королева слизней",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11303",
        "name": "Снежный рыцарь",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11303_002",
        "name": "Снежный рыцарь",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22201",
        "name": "Валунный стрелок",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": []
  },
  {
    "id": "keyword_48",
    "key": "Keyword_48",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Арты",
      "EN": "Construct",
      "CN": "器灵"
    },
    "desc": {
      "RU": "У девушек-артефактов повышенные СИЛ и прочность.",
      "EN": "Construct girls have higher STR and Toughness.",
      "CN": "器灵角色拥有更高的力量和韧性。"
    },
    "aliases": {
      "RU": [
        "арты",
        "Арты"
      ],
      "EN": [
        "construct",
        "Construct"
      ],
      "CN": [
        "器灵"
      ]
    },
    "related_characters": [
      {
        "id": "M31302",
        "name": "Великанша",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31302_000",
        "name": "Великанша",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301",
        "name": "Колдунья желаний",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301_000",
        "name": "Колдунья желаний",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31301",
        "name": "Святая сабля",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31301_001",
        "name": "Святая сабля",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31303",
        "name": "Титанида-копейщица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M00000",
        "name": "Фигура",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M33101",
        "name": "Нефритовая Великанша",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31201",
        "name": "Сломанная сабля",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31202",
        "name": "Утраченная Эгида",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M32103",
        "name": "Странствующая кукла",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": []
  },
  {
    "id": "keyword_49",
    "key": "Keyword_49",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Нежить",
      "EN": "Undead",
      "CN": "亡灵"
    },
    "desc": {
      "RU": "У девушек-нежити повышенные ЛВК и прочность.",
      "EN": "Undead girls have higher AGI and Toughness.",
      "CN": "亡灵角色拥有更高的敏捷和韧性。"
    },
    "aliases": {
      "RU": [
        "Нежить",
        "нежить"
      ],
      "EN": [
        "undead",
        "Undead"
      ],
      "CN": [
        "亡灵"
      ]
    },
    "related_characters": [
      {
        "id": "M13307_000",
        "name": "Владычица роз",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41301",
        "name": "Призрак-капитан",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41301_000",
        "name": "Призрак-капитан",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11302_000",
        "name": "Теневая драконица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41201",
        "name": "Призрак-помощница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M43101",
        "name": "Заблудшая Душа",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41101",
        "name": "Призрак-морячка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M42101",
        "name": "Призрак-стрелок",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": []
  },
  {
    "id": "keyword_50",
    "key": "Keyword_50",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Боги",
      "EN": "Divine",
      "CN": "神灵"
    },
    "desc": {
      "RU": "У божественных девушек повышенные ДУХ и ОЗ.",
      "EN": "Divine girls have higher SPI and HP.",
      "CN": "神灵角色拥有更高的精神和生命。"
    },
    "aliases": {
      "RU": [
        "боги",
        "Боги"
      ],
      "EN": [
        "divine",
        "Divine"
      ],
      "CN": [
        "神灵"
      ]
    },
    "related_characters": [
      {
        "id": "M53301",
        "name": "Астральная Злодейка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M53301_001",
        "name": "Астральная Злодейка",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M53301_002",
        "name": "Астральная Злодейка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303",
        "name": "Бесовка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303_000",
        "name": "Бесовка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302_000",
        "name": "Вестница земли",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M52301",
        "name": "Звездная Лучница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M52301_000",
        "name": "Звездная Лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301",
        "name": "Лесная нимфа",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301_000",
        "name": "Лесная нимфа",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51201",
        "name": "Астральная Хранительница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51201_001",
        "name": "Астральная Хранительница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": []
  },
  {
    "id": "keyword_51",
    "key": "Keyword_51",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Тундра",
      "EN": "Tundra",
      "CN": "雪原"
    },
    "desc": {
      "RU": "У девушек тундры повышенные ДУХ и СКР.",
      "EN": "Tundra girls have higher SPI and SPD.",
      "CN": "雪原角色拥有更高的精神和速度。"
    },
    "aliases": {
      "RU": [
        "тундра",
        "Тундра"
      ],
      "EN": [
        "Tundra",
        "tundra"
      ],
      "CN": [
        "雪原"
      ]
    },
    "related_characters": [
      {
        "id": "M53301_001",
        "name": "Астральная Злодейка",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304_001",
        "name": "Ведьма-оса",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22301",
        "name": "Ледяная паучиха-королева",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12301_001",
        "name": "Принцесса гарпий",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31301_001",
        "name": "Святая сабля",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11303",
        "name": "Снежный рыцарь",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51201_001",
        "name": "Астральная Хранительница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14201_001",
        "name": "Боевая жрица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12202_001",
        "name": "Варг-лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11205_001",
        "name": "Лютоволчица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11103_001",
        "name": "Варг-воительница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12101_001",
        "name": "Волчица-охотница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": []
  },
  {
    "id": "keyword_52",
    "key": "Keyword_52",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Астрал",
      "EN": "Astral",
      "CN": "星界"
    },
    "desc": {
      "RU": "У астральных девушек повышенные ДУХ и ОЗ.",
      "EN": "Astral girls have higher SPI and HP.",
      "CN": "星界角色拥有更高的精神和生命。"
    },
    "aliases": {
      "RU": [
        "Астрал",
        "астрал"
      ],
      "EN": [
        "astral",
        "Astral"
      ],
      "CN": [
        "星界"
      ]
    },
    "related_characters": [
      {
        "id": "M53301",
        "name": "Астральная Злодейка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M53301_001",
        "name": "Астральная Злодейка",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M53301_002",
        "name": "Астральная Злодейка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M52301",
        "name": "Звездная Лучница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M52301_000",
        "name": "Звездная Лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301_000",
        "name": "Колдунья желаний",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13306_000",
        "name": "Кристальная грибница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51201",
        "name": "Астральная Хранительница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51201_001",
        "name": "Астральная Хранительница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z60004_331",
        "name": "Астральный посох",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_332",
        "name": "Астральная сфера",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_631",
        "name": "Астральный плащ",
        "step": "S"
      },
      {
        "category": "relics",
        "id": "XD13001_053",
        "name": "Полярные координаты",
        "step": "A"
      },
      {
        "category": "relics",
        "id": "XD04001_054",
        "name": "Слова злобы",
        "step": "S"
      },
      {
        "category": "relics",
        "id": "XD13001_001",
        "name": "Координаты врат",
        "step": "A"
      },
      {
        "category": "relics",
        "id": "XD14001_001",
        "name": "Астральный закон",
        "step": "S"
      },
      {
        "category": "relics",
        "id": "XD14001_035",
        "name": "Закон холода",
        "step": "S"
      },
      {
        "category": "relics",
        "id": "XD04002_112",
        "name": "Том воды",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F40004_004",
        "name": "Астральная руна",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH10006",
        "name": "Астральная",
        "step": "C"
      },
      {
        "category": "prefixes",
        "id": "JH20006",
        "name": "Астральная",
        "step": "B"
      }
    ]
  },
  {
    "id": "keyword_53",
    "key": "Keyword_53",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Степь",
      "EN": "Plains",
      "CN": "平原"
    },
    "desc": {
      "RU": "У девушек равнин повышенные СИЛ и СКР.",
      "EN": "Plains girls have higher STR and SPD.",
      "CN": "平原角色拥有更高的力量和速度。"
    },
    "aliases": {
      "RU": [
        "Степь",
        "степь"
      ],
      "EN": [
        "plains",
        "Plains"
      ],
      "CN": [
        "平原"
      ]
    },
    "related_characters": [
      {
        "id": "M13304",
        "name": "Ведьма-оса",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302",
        "name": "Вестница земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13302_000",
        "name": "Вестница земли",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M52301_000",
        "name": "Звездная Лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14303",
        "name": "Исекай-странница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11301",
        "name": "Командующая Легиона",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11301_000",
        "name": "Командующая Легиона",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11304",
        "name": "Отважная минотаврица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11304_000",
        "name": "Отважная минотаврица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12301",
        "name": "Принцесса гарпий",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M00000",
        "name": "Фигура",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12205",
        "name": "Шагающая по ветру",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": []
  },
  {
    "id": "keyword_54",
    "key": "Keyword_54",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Лес",
      "EN": "Forest",
      "CN": "森林"
    },
    "desc": {
      "RU": "У лесных девушек повышенные ДУХ и ОЗ.",
      "EN": "Forest girls have higher SPI and HP.",
      "CN": "森林角色拥有更高的精神和生命。"
    },
    "aliases": {
      "RU": [
        "лес",
        "Лес"
      ],
      "EN": [
        "forest",
        "Forest"
      ],
      "CN": [
        "森林"
      ]
    },
    "related_characters": [
      {
        "id": "M14215",
        "name": "Бархатные шипы",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303",
        "name": "Бесовка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303_000",
        "name": "Бесовка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13305",
        "name": "Великая волшебница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13305_000",
        "name": "Великая волшебница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13307",
        "name": "Владычица роз",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13307_000",
        "name": "Владычица роз",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23301",
        "name": "Королева слизней",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23301_000",
        "name": "Королева слизней",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301",
        "name": "Лесная нимфа",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301_000",
        "name": "Лесная нимфа",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31301",
        "name": "Святая сабля",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z20025_431",
        "name": "Лесная реликвия",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z20025_531",
        "name": "Лесная корона",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z20025_831",
        "name": "Лесное сердце",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z20003_111",
        "name": "Пробужденный щит",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z20003_621",
        "name": "Пробужденная броня",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z20003_725",
        "name": "Пробужденная обувь",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z30001_401",
        "name": "Лесной жезл",
        "step": "C"
      },
      {
        "category": "equipment",
        "id": "Z30001_402",
        "name": "Лесной щит",
        "step": "C"
      },
      {
        "category": "relics",
        "id": "XD14001_006",
        "name": "Законы жизни",
        "step": "S"
      },
      {
        "category": "relics",
        "id": "XD14001_048",
        "name": "Доктрина Инферно",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN30002",
        "name": "Лесная стражница",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_55",
    "key": "Keyword_55",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Горная",
      "EN": "Mounts",
      "CN": "山脉"
    },
    "desc": {
      "RU": "У горных девушек повышенные СИЛ и прочность.",
      "EN": "Mountain girls have higher STR and Toughness.",
      "CN": "山脉角色拥有更高的力量和韧性。"
    },
    "aliases": {
      "RU": [
        "горная",
        "Горная"
      ],
      "EN": [
        "mounts",
        "Mounts"
      ],
      "CN": [
        "山脉"
      ]
    },
    "related_characters": [
      {
        "id": "M24301_000",
        "name": "Безмятежная ундина",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31302",
        "name": "Великанша",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31302_000",
        "name": "Великанша",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21302_000",
        "name": "Вечная владычица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21301",
        "name": "Золотая дева",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13306",
        "name": "Кристальная грибница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22201",
        "name": "Валунный стрелок",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14204",
        "name": "Взрывная грибница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14208",
        "name": "Зеленая Шапочка",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21201",
        "name": "Каменная стражница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M33101",
        "name": "Нефритовая Великанша",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": []
  },
  {
    "id": "keyword_56",
    "key": "Keyword_56",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Океан",
      "EN": "Ocean",
      "CN": "海洋"
    },
    "desc": {
      "RU": "У девушек океана повышенные ДУХ и ОЗ.",
      "EN": "Ocean girls have higher SPI and HP.",
      "CN": "海洋角色拥有更高的精神和生命。"
    },
    "aliases": {
      "RU": [
        "Океан",
        "океан"
      ],
      "EN": [
        "ocean",
        "Ocean"
      ],
      "CN": [
        "海洋"
      ]
    },
    "related_characters": [
      {
        "id": "M24301",
        "name": "Безмятежная ундина",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41301",
        "name": "Призрак-капитан",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41301_000",
        "name": "Призрак-капитан",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51302_001",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11207",
        "name": "Аква-командующая",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23201",
        "name": "Волшебница воды",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12204",
        "name": "Нага-лучница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41201",
        "name": "Призрак-помощница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11208",
        "name": "Рыболюдка-воительница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21204",
        "name": "Стражница прилива",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00201_371",
        "name": "Водолазная маска",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00201_372",
        "name": "Водолазный костюм",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00201_373",
        "name": "Водолазные ласты",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN60367",
        "name": "Глубоководная засада",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_57",
    "key": "Keyword_57",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Пляж",
      "EN": "Beach",
      "CN": "沙滩"
    },
    "desc": {
      "RU": "У пляжных девушек повышенные ДУХ и СКР.",
      "EN": "Beach girls have higher SPI and SPD.",
      "CN": "沙滩角色拥有更高的精神和速度。"
    },
    "aliases": {
      "RU": [
        "пляж",
        "Пляж"
      ],
      "EN": [
        "Beach",
        "beach"
      ],
      "CN": [
        "沙滩"
      ]
    },
    "related_characters": [
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11304_001",
        "name": "Отважная минотаврица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51302",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51302_001",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11207",
        "name": "Аква-командующая",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12203",
        "name": "Метательница кокосов",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13105",
        "name": "Пастушка рыб",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11208",
        "name": "Рыболюдка-воительница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11113",
        "name": "Аква-воительница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12103",
        "name": "Ракушечная дева",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00201_121",
        "name": "Пляжное платье",
        "step": "C"
      },
      {
        "category": "equipment",
        "id": "Z00201_122",
        "name": "Пляжные перчатки",
        "step": "C"
      },
      {
        "category": "equipment",
        "id": "Z00201_123",
        "name": "Пляжные сандалии",
        "step": "C"
      }
    ]
  },
  {
    "id": "keyword_58",
    "key": "Keyword_58",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Пустыня",
      "EN": "Desert",
      "CN": "沙漠"
    },
    "desc": {
      "RU": "У девушек пустыни повышенные СИЛ и прочность.",
      "EN": "Desert girls have higher STR and Toughness.",
      "CN": "沙漠角色拥有更高的力量和韧性。"
    },
    "aliases": {
      "RU": [
        "Пустыня",
        "пустыня"
      ],
      "EN": [
        "Desert",
        "desert"
      ],
      "CN": [
        "沙漠"
      ]
    },
    "related_characters": [
      {
        "id": "M13303_001",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21302",
        "name": "Вечная владычица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301",
        "name": "Колдунья желаний",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12211",
        "name": "Танцовщица пустыни",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12211_000",
        "name": "Танцовщица пустыни",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31303",
        "name": "Титанида-копейщица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31303_000",
        "name": "Титанида-копейщица",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23205",
        "name": "Вестница дюн",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11210",
        "name": "Жалящая убийца",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14213",
        "name": "Лунная жрица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12304",
        "name": "Лучница шипов",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12210",
        "name": "Наемница-стрелок",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": []
  },
  {
    "id": "keyword_59",
    "key": "Keyword_59",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Болото",
      "EN": "Swamp",
      "CN": "沼泽"
    },
    "desc": {
      "RU": "У болотных девушек повышенные ЛВК и СКР.",
      "EN": "Swamp girls have higher AGI and SPD.",
      "CN": "沼泽角色拥有更高的敏捷和速度。"
    },
    "aliases": {
      "RU": [
        "Болото",
        "болото"
      ],
      "EN": [
        "swamp",
        "Swamp"
      ],
      "CN": [
        "沼泽"
      ]
    },
    "related_characters": [],
    "related_items": []
  },
  {
    "id": "keyword_60",
    "key": "Keyword_60",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Вулкан",
      "EN": "Volcano",
      "CN": "火山"
    },
    "desc": {
      "RU": "У девушек вулкана повышенные СИЛ и прочность.",
      "EN": "Volcano girls have higher STR and Toughness.",
      "CN": "火山角色拥有更高的力量和韧性。"
    },
    "aliases": {
      "RU": [
        "Вулкан",
        "вулкан"
      ],
      "EN": [
        "volcano",
        "Volcano"
      ],
      "CN": [
        "火山"
      ]
    },
    "related_characters": [
      {
        "id": "M13310",
        "name": "Багровая драконица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_002",
        "name": "Ведьма земли",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21301_000",
        "name": "Золотая дева",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23301_001",
        "name": "Королева слизней",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301_000",
        "name": "Лесная нимфа",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11303_002",
        "name": "Снежный рыцарь",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22201_002",
        "name": "Валунный стрелок",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21201_002",
        "name": "Каменная стражница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22202_002",
        "name": "Позолоченная лучница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14206_002",
        "name": "Троллиха-надзирательница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12102_002",
        "name": "Троллиха-метательница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11106_002",
        "name": "Троллиха-стражница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "runes",
        "id": "F40001_014",
        "name": "Руна разрушения",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F40002_014",
        "name": "Руна вечности",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F40003_014",
        "name": "Руна природы",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F20003_014",
        "name": "Руна удачи",
        "step": "S"
      },
      {
        "category": "runes",
        "id": "F30001_014",
        "name": "Руна маны",
        "step": "A"
      },
      {
        "category": "runes",
        "id": "F30002_014",
        "name": "Руна стойкости",
        "step": "A"
      },
      {
        "category": "runes",
        "id": "F20001_014",
        "name": "Руна СКР",
        "step": "B"
      },
      {
        "category": "runes",
        "id": "F20002_014",
        "name": "Руна ОЗ",
        "step": "B"
      },
      {
        "category": "runes",
        "id": "F10001_014",
        "name": "Руна АТК",
        "step": "C"
      },
      {
        "category": "runes",
        "id": "F10002_014",
        "name": "Руна ЗАЩ",
        "step": "C"
      }
    ]
  },
  {
    "id": "keyword_61",
    "key": "Keyword_61",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "При атаке",
      "EN": "Attacking",
      "CN": "进行攻击"
    },
    "desc": {
      "RU": "Включает базовую АТК, атаки умениями, повторные удары и контратаки.",
      "EN": "Includes basic attacks, skill attacks, Follow-Ups, and Counters.",
      "CN": "包括普通攻击、技能攻击、进行追击和进行反击。"
    },
    "aliases": {
      "RU": [
        "При атаке",
        "при атаке"
      ],
      "EN": [
        "attacking",
        "Attacking"
      ],
      "CN": [
        "进行攻击"
      ]
    },
    "related_characters": [
      {
        "id": "M12301",
        "name": "Принцесса гарпий",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12301_001",
        "name": "Принцесса гарпий",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11109",
        "name": "Девушка-гарпия",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11109_001",
        "name": "Девушка-гарпия",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z10008_111",
        "name": "Меч грабежа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00005_111",
        "name": "Кинжал грабежа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10008_112",
        "name": "Кольцо грабежа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00201_323",
        "name": "Затерянный шлем",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00201_321",
        "name": "Затерянная броня",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00201_322",
        "name": "Затерянные наручи",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z30018_821",
        "name": "Компас штурмана",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z30018_021",
        "name": "Знак штурмана",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z30018_921",
        "name": "Кольцо штурмана",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60002_821",
        "name": "Сумрачное ожерелье",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60002_921",
        "name": "Сумрачное кольцо",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z60002_021",
        "name": "Сумрачный знак",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_62",
    "key": "Keyword_62",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Лечение",
      "EN": "Healing",
      "CN": "进行治疗"
    },
    "desc": {
      "RU": "Включает базовое лечение и лечение умениями.",
      "EN": "Includes basic healing and skill healing.",
      "CN": "包括普通治疗和技能治疗。"
    },
    "aliases": {
      "RU": [
        "лечение",
        "Лечение"
      ],
      "EN": [
        "Healing",
        "healing"
      ],
      "CN": [
        "进行治疗"
      ]
    },
    "related_characters": [
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14303",
        "name": "Исекай-странница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301",
        "name": "Колдунья желаний",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301_000",
        "name": "Колдунья желаний",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13306",
        "name": "Кристальная грибница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301",
        "name": "Лесная нимфа",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14201",
        "name": "Боевая жрица",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14201_001",
        "name": "Боевая жрица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12202_001",
        "name": "Варг-лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14205",
        "name": "Жрица-минотаврица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14207",
        "name": "Исследовательница флоры",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14210",
        "name": "Серебряная лиса-пророчица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z50004_421",
        "name": "Жезл клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50004_422",
        "name": "Щит клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50004_423",
        "name": "Знак клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50002_521",
        "name": "Корона клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50002_611",
        "name": "Мантия клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50002_522",
        "name": "Ожерелье клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50006_721",
        "name": "Перчатки клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50006_722",
        "name": "Кушак клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50006_723",
        "name": "Обувь клирика",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10015_621",
        "name": "Накидка ускорения",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10015_723",
        "name": "Шнур ускорения",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10015_823",
        "name": "Ожерелье ускорения",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_63",
    "key": "Keyword_63",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Общий УРН",
      "EN": "Total DMG",
      "CN": "全部伤害"
    },
    "desc": {
      "RU": "Включает базовый УРН, УРН от умений, УРН от повторных ударов и УРН от контратак.",
      "EN": "Includes basic DMG, skill DMG, Follow-Up DMG, and counter DMG.",
      "CN": "包括普通伤害、技能伤害、追击伤害和反击伤害。"
    },
    "aliases": {
      "RU": [
        "Общий УРН",
        "общий урн"
      ],
      "EN": [
        "total dmg",
        "Total DMG"
      ],
      "CN": [
        "全部伤害"
      ]
    },
    "related_characters": [
      {
        "id": "M53301",
        "name": "Астральная Злодейка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M53301_001",
        "name": "Астральная Злодейка",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51303_000",
        "name": "Бесовка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304",
        "name": "Ведьма-оса",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M41301_000",
        "name": "Призрак-капитан",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11201",
        "name": "Храбрая Охотница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z40001_521",
        "name": "Красный капюшон",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z40001_621",
        "name": "Красная накидка",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z40001_721",
        "name": "Красные сапоги",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00014_821",
        "name": "Боевое ожерелье",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00014_921",
        "name": "Боевое кольцо",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00014_022",
        "name": "Боевой знак",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z20004_221",
        "name": "Охотничий арбалет",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10022_212",
        "name": "Охотничьи болты",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10002_521",
        "name": "Охотничья маска",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00016_921",
        "name": "Охотничье ожерелье",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00016_821",
        "name": "Охотничье кольцо",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00016_021",
        "name": "Охотничий знак",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_64",
    "key": "Keyword_64",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Общее лечение",
      "EN": "Total HP Restored",
      "CN": "全部恢复"
    },
    "desc": {
      "RU": "Включает базовое лечение и лечение умениями.",
      "EN": "Includes basic healing and skill healing.",
      "CN": "包括普通恢复和技能恢复。"
    },
    "aliases": {
      "RU": [
        "Общее лечение",
        "общее лечение"
      ],
      "EN": [
        "Total HP Restored",
        "total hp restored"
      ],
      "CN": [
        "全部恢复"
      ]
    },
    "related_characters": [
      {
        "id": "M24001",
        "name": "Слайм-жрица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z50000_411",
        "name": "Жезл кошечки",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50000_511",
        "name": "Головной убор кошечки",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50000_611",
        "name": "Платье кошечки",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50000_811",
        "name": "Ожерелье любви",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50000_921",
        "name": "Кольцо любви",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z50000_021",
        "name": "Знак любви",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z20028_021",
        "name": "Жезл искупления",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z20028_022",
        "name": "Щит искупления",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z20028_024",
        "name": "Пояс искупления",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH20007",
        "name": "Небесная",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30007",
        "name": "Небесная",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40007",
        "name": "Небесная",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_65",
    "key": "Keyword_65",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Потеря ОЗ",
      "EN": "HP Loss",
      "CN": "失去生命"
    },
    "desc": {
      "RU": "Снижение ОЗ от неатакующих источников.",
      "EN": "HP reduction from non-attack sources.",
      "CN": "非攻击伤害导致的生命减少效果。"
    },
    "aliases": {
      "RU": [
        "Потеря ОЗ",
        "потеря оз"
      ],
      "EN": [
        "HP Loss",
        "hp loss"
      ],
      "CN": [
        "失去生命"
      ]
    },
    "related_characters": [
      {
        "id": "M13304",
        "name": "Ведьма-оса",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13304_001",
        "name": "Ведьма-оса",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13307_000",
        "name": "Владычица роз",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13306",
        "name": "Кристальная грибница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M22301",
        "name": "Ледяная паучиха-королева",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21202",
        "name": "Воительница бури",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M23203",
        "name": "Дриада Шипов",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13206",
        "name": "Споровая ведьма",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z10014_131",
        "name": "Нефритовый клинок",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10014_632",
        "name": "Нефритовая броня",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10014_732",
        "name": "Нефритовые сапоги",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10014_431",
        "name": "Нефритовый жезл",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10014_531",
        "name": "Нефритовая корона",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z10014_831",
        "name": "Нефритовое ожерелье",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z30005_111",
        "name": "Ракушечный щит",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z30005_822",
        "name": "Ракушечная кольчуга",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z30005_721",
        "name": "Ракушечный пояс",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10017_321",
        "name": "Иссохший посох",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z60007_721",
        "name": "Иссохшие перчатки",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z60007_021",
        "name": "Иссохший знак",
        "step": "B"
      }
    ]
  },
  {
    "id": "keyword_66",
    "key": "Keyword_66",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Прирост ОЗ",
      "EN": "HP Gain",
      "CN": "获得生命"
    },
    "desc": {
      "RU": "Увеличение ОЗ от источников, не связанных с лечением.",
      "EN": "HP increase from non-healing sources.",
      "CN": "非治疗恢复导致的生命增加效果。"
    },
    "aliases": {
      "RU": [
        "Прирост ОЗ",
        "прирост оз"
      ],
      "EN": [
        "hp gain",
        "HP Gain"
      ],
      "CN": [
        "获得生命"
      ]
    },
    "related_characters": [
      {
        "id": "M12304",
        "name": "Лучница шипов",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z20003_111",
        "name": "Пробужденный щит",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z20003_621",
        "name": "Пробужденная броня",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z20003_725",
        "name": "Пробужденная обувь",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z07001_311",
        "name": "Маска бессмертия",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z07001_312",
        "name": "Пояс бессмертия",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z07001_313",
        "name": "Сапоги бессмертия",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH30025",
        "name": "Закаленная",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40025",
        "name": "Закаленная",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN01303",
        "name": "Истощение",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60160",
        "name": "Время отдыха",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN30002",
        "name": "Лесная стражница",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN60302",
        "name": "Клинки регенерации",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_67",
    "key": "Keyword_67",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Потеря маны",
      "EN": "Mana Loss",
      "CN": "失去魔力"
    },
    "desc": {
      "RU": "Снижение маны из любого источника.",
      "EN": "Mana reduction from any source.",
      "CN": "通过任意途径导致的魔力减少效果。"
    },
    "aliases": {
      "RU": [
        "потеря маны",
        "Потеря маны"
      ],
      "EN": [
        "mana loss",
        "Mana Loss"
      ],
      "CN": [
        "失去魔力"
      ]
    },
    "related_characters": [],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z60006_532",
        "name": "Рог зимы",
        "step": "SS"
      },
      {
        "category": "prefixes",
        "id": "JH30024",
        "name": "Антимагическая",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40024",
        "name": "Антимагическая",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH40039",
        "name": "Вечная",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60220",
        "name": "Мастерство маны",
        "step": "SS"
      },
      {
        "category": "bonds",
        "id": "JN30208",
        "name": "Ядро Темной звезды",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60153",
        "name": "Темное истощение",
        "step": "SS"
      },
      {
        "category": "bonds",
        "id": "JN02023",
        "name": "Подавление страхом",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN02132",
        "name": "Истощение воли",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_68",
    "key": "Keyword_68",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Прирост маны",
      "EN": "Mana Gain",
      "CN": "获得魔力"
    },
    "desc": {
      "RU": "Увеличение маны из любого источника.",
      "EN": "Mana increase from any source.",
      "CN": "通过任意途径导致的魔力增加效果。"
    },
    "aliases": {
      "RU": [
        "прирост маны",
        "Прирост маны"
      ],
      "EN": [
        "Mana Gain",
        "mana gain"
      ],
      "CN": [
        "获得魔力"
      ]
    },
    "related_characters": [
      {
        "id": "M23301_000",
        "name": "Королева слизней",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "bonds",
        "id": "JN60393",
        "name": "Королевский зов",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN00605",
        "name": "Кристальное заражение",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60386",
        "name": "Свободный поток",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN61013",
        "name": "Очищение",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN60154",
        "name": "Цикл стихий",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60336",
        "name": "Целебная отдача",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN60110",
        "name": "Восстановление энергии",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN60113",
        "name": "Возврат стрел",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN60161",
        "name": "Цикл маны",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN30208",
        "name": "Ядро Темной звезды",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN40008",
        "name": "Равноценный обмен",
        "step": "SS"
      },
      {
        "category": "bonds",
        "id": "JN60128",
        "name": "Поглощение маны",
        "step": "B"
      }
    ]
  },
  {
    "id": "keyword_69",
    "key": "Keyword_69",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "1-й ход",
      "EN": "Act First",
      "CN": "优先行动"
    },
    "desc": {
      "RU": "При неполной мане приоритет у баз. АТК или баз. лечения. При полной мане приоритет у применения умения. Если два персонажа должны ходить первыми, первым ходит тот, у кого выше СКР.",
      "EN": "When not at full Mana, prioritize basic attack or basic heal. When at full Mana, prioritize casting skill. When both act first, higher SPD acts first.",
      "CN": "没有满魔力时优先进行普通攻击或治疗，满魔力时优先释放技能，双方都有优先行动时速度高的优先。"
    },
    "aliases": {
      "RU": [
        "1-й ход"
      ],
      "EN": [
        "Act First",
        "act first"
      ],
      "CN": [
        "优先行动"
      ]
    },
    "related_characters": [
      {
        "id": "M11301",
        "name": "Командующая Легиона",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11208",
        "name": "Рыболюдка-воительница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "bonds",
        "id": "JN60005",
        "name": "Быстрое усиление",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN60437",
        "name": "Приказ к рывку",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN02021",
        "name": "Первый удар",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_70",
    "key": "Keyword_70",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Доп. ход",
      "EN": "Extra Action",
      "CN": "额外行动"
    },
    "desc": {
      "RU": "Каждая девушка может совершить до 5 дополнительных действий за ход (применение умений также считается дополнительными действиями).",
      "EN": "Each girl can take up to 5 extra actions per turn (casting skills also counts as extra actions).",
      "CN": "每回合每名角色最多进行5次额外行动（释放技能也是额外行动）。"
    },
    "aliases": {
      "RU": [
        "доп. ход",
        "Доп. ход"
      ],
      "EN": [
        "Extra Action",
        "extra action"
      ],
      "CN": [
        "额外行动"
      ]
    },
    "related_characters": [
      {
        "id": "M52301",
        "name": "Звездная Лучница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M52301_000",
        "name": "Звездная Лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31303",
        "name": "Титанида-копейщица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11204",
        "name": "Всадница Легиона",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14208",
        "name": "Зеленая Шапочка",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12207_000",
        "name": "Кэнди",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13203",
        "name": "Наставница Академии",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14206",
        "name": "Троллиха-надзирательница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11201",
        "name": "Храбрая Охотница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11201_000",
        "name": "Храбрая Охотница",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "prefixes",
        "id": "JH40008",
        "name": "Темная",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH40019",
        "name": "Сплавленная",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH40033",
        "name": "Застенчивая",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60112",
        "name": "Постоянные нападки",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN60098",
        "name": "Увеличение боезапаса",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60303",
        "name": "Полный напор",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN60095_001",
        "name": "Разрыв комбо",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN60095",
        "name": "Развитие успеха",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_71",
    "key": "Keyword_71",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Союзницы",
      "EN": "Ally Count",
      "CN": "友方数量"
    },
    "desc": {
      "RU": "Это значение применяется ко всей команде, но становится неактивным, когда дающая его девушка побеждена. Лимит для команды: 99.",
      "EN": "This value applies to the entire team, but becomes inactive when the providing girl is defeated. Team limit: 99.",
      "CN": "该数值对全队生效，但提供数值的角色战败后失效，全队上限99。"
    },
    "aliases": {
      "RU": [
        "союзницы",
        "Союзницы"
      ],
      "EN": [
        "Ally Count",
        "ally count"
      ],
      "CN": [
        "友方数量"
      ]
    },
    "related_characters": [
      {
        "id": "M24301_000",
        "name": "Безмятежная ундина",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301",
        "name": "Лесная нимфа",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M54301_000",
        "name": "Лесная нимфа",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11304_000",
        "name": "Отважная минотаврица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31301",
        "name": "Святая сабля",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31301_001",
        "name": "Святая сабля",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13105",
        "name": "Пастушка рыб",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13104_001",
        "name": "Волчица-шаманка",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "runes",
        "id": "F30003_011",
        "name": "Героическая руна",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN10122",
        "name": "Водный поток",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10124",
        "name": "Перемотка",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10401",
        "name": "Прилив сил",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10064",
        "name": "Прицел",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN50401",
        "name": "Жажда крови",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10058",
        "name": "Телохранительница",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN00304",
        "name": "Легкий ветерок",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10060",
        "name": "Развитие",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10061",
        "name": "Преобразование",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10063",
        "name": "Источник",
        "step": "A"
      },
      {
        "category": "bonds",
        "id": "JN10062",
        "name": "Семя жизни",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_72",
    "key": "Keyword_72",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Заряды",
      "EN": "Stacks",
      "CN": "层数"
    },
    "desc": {
      "RU": "Влияет на количество изменений статуса. Максимум 999.",
      "EN": "Affects the amount of status changes. Max 999.",
      "CN": "影响状态变化的数量，上限999。"
    },
    "aliases": {
      "RU": [
        "Заряды",
        "заряды"
      ],
      "EN": [
        "stacks",
        "Stacks"
      ],
      "CN": [
        "层数"
      ]
    },
    "related_characters": [
      {
        "id": "M53301",
        "name": "Астральная Злодейка",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M21302_000",
        "name": "Вечная владычица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M34301_000",
        "name": "Колдунья желаний",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12202_001",
        "name": "Варг-лучница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13210",
        "name": "Ведьма-алхимик",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11210",
        "name": "Жалящая убийца",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11205_001",
        "name": "Лютоволчица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11209",
        "name": "Минотаврица-клинок",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11103",
        "name": "Варг-воительница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11105",
        "name": "Гоблинша-воительница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13102",
        "name": "Гоблинша-волшебница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13103",
        "name": "Звездная Ученица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "prefixes",
        "id": "JH20002",
        "name": "Зараженная",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30002",
        "name": "Зараженная",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40002",
        "name": "Зараженная",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH30003",
        "name": "Ледяная",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40003",
        "name": "Ледяная",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH30004",
        "name": "Пылающая",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40004",
        "name": "Пылающая",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH30005",
        "name": "Невидимая",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40005",
        "name": "Невидимая",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH40007",
        "name": "Небесная",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH40012",
        "name": "Неупокоенная",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH40018",
        "name": "Сырая",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_73",
    "key": "Keyword_73",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Дистанция",
      "EN": "Distance",
      "CN": "距离"
    },
    "desc": {
      "RU": "Базовое расстояние между девушкой и целью равно 1. Расстояние увеличивается на 1 за каждую девушку между ними.",
      "EN": "Base distance between a girl and target is 1. Distance increases by 1 for each girl between them.",
      "CN": "角色与目标的基础距离为1，其中每间隔一名角色使距离+1。"
    },
    "aliases": {
      "RU": [
        "Дистанция",
        "дистанция"
      ],
      "EN": [
        "Distance",
        "distance"
      ],
      "CN": [
        "距离"
      ]
    },
    "related_characters": [],
    "related_items": []
  },
  {
    "id": "keyword_74",
    "key": "Keyword_74",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Поглощение",
      "EN": "Absorb",
      "CN": "吸收"
    },
    "desc": {
      "RU": "Получить указанный эффект для себя и снять его с цели.",
      "EN": "Gain the specified effect for self and remove it from target.",
      "CN": "使自身获得并使目标失去指定效果。"
    },
    "aliases": {
      "RU": [
        "Поглощение",
        "поглощение"
      ],
      "EN": [
        "absorb",
        "Absorb"
      ],
      "CN": [
        "吸收"
      ]
    },
    "related_characters": [
      {
        "id": "M21302",
        "name": "Вечная владычица",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13307_000",
        "name": "Владычица роз",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11304_001",
        "name": "Отважная минотаврица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M31301_001",
        "name": "Святая сабля",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11303_002",
        "name": "Снежный рыцарь",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14203_000",
        "name": "Чжаоцай",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z10008_111",
        "name": "Меч грабежа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00005_111",
        "name": "Кинжал грабежа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10008_112",
        "name": "Кольцо грабежа",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10017_721",
        "name": "Оскверненные наручи",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10017_821",
        "name": "Оскверненное ожерелье",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10017_921",
        "name": "Оскверненное кольцо",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10015_821",
        "name": "Ожерелье предков",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10015_921",
        "name": "Кольцо предков",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10015_021",
        "name": "Знак предков",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z00101_241",
        "name": "Ледяные наручи",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00101_242",
        "name": "Ледяное ожерелье",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00101_243",
        "name": "Ледяное кольцо",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_75",
    "key": "Keyword_75",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Фиксированное",
      "EN": "Fixed",
      "CN": "固定"
    },
    "desc": {
      "RU": "Эффект должен быть равен указанному значению.",
      "EN": "Effect must equal the specified value.",
      "CN": "效果必定等于指定数值。"
    },
    "aliases": {
      "RU": [
        "фиксированное",
        "Фиксированное"
      ],
      "EN": [
        "fixed",
        "Fixed"
      ],
      "CN": [
        "固定"
      ]
    },
    "related_characters": [],
    "related_items": [
      {
        "category": "prefixes",
        "id": "JH20025",
        "name": "Закаленная",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30025",
        "name": "Закаленная",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40025",
        "name": "Закаленная",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_76",
    "key": "Keyword_76",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Снятие",
      "EN": "Remove",
      "CN": "移除"
    },
    "desc": {
      "RU": "Статусы, которые снимаются напрямую, не считаются поглощенными.",
      "EN": "Statuses that are directly removed are not considered consumed.",
      "CN": "被直接移除的状态不视为消耗。"
    },
    "aliases": {
      "RU": [
        "снятие",
        "Снятие"
      ],
      "EN": [
        "Remove",
        "remove"
      ],
      "CN": [
        "移除"
      ]
    },
    "related_characters": [
      {
        "id": "M51302_001",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11210",
        "name": "Жалящая убийца",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z10012_711",
        "name": "Ртутные латные рукавицы",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10012_712",
        "name": "Ртутный пояс",
        "step": "B"
      },
      {
        "category": "equipment",
        "id": "Z10012_713",
        "name": "Ртутные ботинки",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30021",
        "name": "Вялая",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40021",
        "name": "Вялая",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH30029",
        "name": "Осуждающая",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40029",
        "name": "Осуждающая",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60044",
        "name": "Снятие контроля",
        "step": "B"
      }
    ]
  },
  {
    "id": "keyword_77",
    "key": "Keyword_77",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Начальная мана",
      "EN": "Starting Mana",
      "CN": "初始魔力"
    },
    "desc": {
      "RU": "Мана, имеющаяся в начале боя. Количество, превышающее макс. ману, не дает эффекта.",
      "EN": "Mana possessed when entering battle. Amounts exceeding Max Mana have no effect.",
      "CN": "进入战斗时拥有的魔力，超过魔力上限的部分不会生效。"
    },
    "aliases": {
      "RU": [
        "начальная мана",
        "Начальная мана"
      ],
      "EN": [
        "starting mana",
        "Starting Mana"
      ],
      "CN": [
        "初始魔力"
      ]
    },
    "related_characters": [],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00000_942",
        "name": "Философский камень",
        "step": "SS"
      },
      {
        "category": "equipment",
        "id": "Z60004_331",
        "name": "Астральный посох",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_332",
        "name": "Астральная сфера",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60004_631",
        "name": "Астральный плащ",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60008_031",
        "name": "Знак Звездного ядра",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60007_831",
        "name": "Ожерелье Звездного ядра",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60008_921",
        "name": "Кольцо Звездного ядра",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50003_631",
        "name": "Превосходная накидка",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z50003_731",
        "name": "Превосходный пояс",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z60006_931",
        "name": "Превосходное кольцо",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_542",
        "name": "Стихийная корона",
        "step": "S"
      },
      {
        "category": "equipment",
        "id": "Z00000_031",
        "name": "Стихийный знак",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_78",
    "key": "Keyword_78",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Макс. мана",
      "EN": "Max Mana",
      "CN": "魔力上限"
    },
    "desc": {
      "RU": "Мана, необходимая для применения умения.",
      "EN": "Mana required to cast skill.",
      "CN": "释放技能需要的魔力。"
    },
    "aliases": {
      "RU": [
        "макс. мана",
        "Макс. мана"
      ],
      "EN": [
        "Max Mana",
        "max mana"
      ],
      "CN": [
        "魔力上限"
      ]
    },
    "related_characters": [
      {
        "id": "M12303",
        "name": "Троллиха-чародейка",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z10016_121",
        "name": "Двуручный меч из сплава",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10016_721",
        "name": "Перчатки из сплава",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z10016_921",
        "name": "Кольцо из сплава",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00102_251",
        "name": "Плавучий меч",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00102_252",
        "name": "Плавуч. пер.",
        "step": "A"
      },
      {
        "category": "equipment",
        "id": "Z00102_253",
        "name": "Плавуч. коль.",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH20013",
        "name": "Безмолвная",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30013",
        "name": "Безмолвная",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40013",
        "name": "Безмолвная",
        "step": "S"
      },
      {
        "category": "prefixes",
        "id": "JH20017",
        "name": "Хаотичная",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30017",
        "name": "Хаотичная",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40017",
        "name": "Хаотичная",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_79",
    "key": "Keyword_79",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Мана за действие",
      "EN": "Action Mana",
      "CN": "行动回魔"
    },
    "desc": {
      "RU": "Мана, получаемая в конце действия от действий, не являющихся умениями.",
      "EN": "Mana gained at action end from non-skill actions.",
      "CN": "非释放技能的行动结束后获得的魔力。"
    },
    "aliases": {
      "RU": [
        "Мана за действие",
        "мана за действие"
      ],
      "EN": [
        "Action Mana",
        "action mana"
      ],
      "CN": [
        "行动回魔"
      ]
    },
    "related_characters": [
      {
        "id": "M12303",
        "name": "Троллиха-чародейка",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "prefixes",
        "id": "JH20006",
        "name": "Астральная",
        "step": "B"
      },
      {
        "category": "prefixes",
        "id": "JH30006",
        "name": "Астральная",
        "step": "A"
      },
      {
        "category": "prefixes",
        "id": "JH40006",
        "name": "Астральная",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN00013",
        "name": "Ясность",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60379",
        "name": "Отдых",
        "step": "C"
      },
      {
        "category": "bonds",
        "id": "JN60058",
        "name": "Непробудный сон",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN30301",
        "name": "Бесконечные звезды",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60222",
        "name": "Запуск меха",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60367",
        "name": "Глубоководная засада",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_80",
    "key": "Keyword_80",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Мана за удар",
      "EN": "Hit Mana",
      "CN": "受击回魔"
    },
    "desc": {
      "RU": "Мана, получаемая за каждую полученную атаку.",
      "EN": "Mana gained per attack taken.",
      "CN": "受到每次攻击获得的魔力。"
    },
    "aliases": {
      "RU": [
        "мана за удар",
        "Мана за удар"
      ],
      "EN": [
        "hit mana",
        "Hit Mana"
      ],
      "CN": [
        "受击回魔"
      ]
    },
    "related_characters": [],
    "related_items": [
      {
        "category": "equipment",
        "id": "Z00102_401",
        "name": "Богоубийца",
        "step": "SS"
      },
      {
        "category": "bonds",
        "id": "JN00012",
        "name": "Ярость",
        "step": "S"
      },
      {
        "category": "bonds",
        "id": "JN60058",
        "name": "Непробудный сон",
        "step": "B"
      },
      {
        "category": "bonds",
        "id": "JN61008",
        "name": "Силовая ячейка",
        "step": "A"
      }
    ]
  },
  {
    "id": "keyword_81",
    "key": "Keyword_81",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Все характеристики",
      "EN": "All Stats",
      "CN": "全属性"
    },
    "desc": {
      "RU": "Включает СИЛ, ДУХ и ЛВК.",
      "EN": "Includes STR, SPI, and AGI.",
      "CN": "包括力量、精神、敏捷。"
    },
    "aliases": {
      "RU": [
        "все характеристики",
        "Все характеристики"
      ],
      "EN": [
        "All Stats",
        "all stats"
      ],
      "CN": [
        "全属性"
      ]
    },
    "related_characters": [
      {
        "id": "M14301",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14301_000",
        "name": "Безупречная провидица",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M51302_001",
        "name": "Рассветная драконица",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11207",
        "name": "Аква-командующая",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12204",
        "name": "Нага-лучница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11208",
        "name": "Рыболюдка-воительница",
        "element": "Ветер",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11113",
        "name": "Аква-воительница",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12103",
        "name": "Ракушечная дева",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11110",
        "name": "Синяя Акула-Бур",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14104",
        "name": "Сирена Серебряной чешуи",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11107",
        "name": "Стражница Серебряной чешуи",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11004",
        "name": "Воительница-рыболюд",
        "element": "Вода",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": []
  },
  {
    "id": "keyword_82",
    "key": "Keyword_82",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Обнаружение слабости",
      "EN": "Weakness Exposed",
      "CN": "弱点暴露"
    },
    "desc": {
      "RU": "Когда прочность падает до 0, обнаруживается слабость. Слабость заменяет ЗАЩ в качестве защитной характеристики.",
      "EN": "When Toughness reaches 0, Weakness is exposed. Weakness replaces DEF as the defensive stat.",
      "CN": "当韧性为0时角色将弱点暴露，弱点属性会代替防御属性成为防御点数。"
    },
    "aliases": {
      "RU": [
        "обнаружение слабости",
        "Обнаружение слабости"
      ],
      "EN": [
        "weakness exposed",
        "Weakness Exposed"
      ],
      "CN": [
        "弱点暴露"
      ]
    },
    "related_characters": [
      {
        "id": "M53301_002",
        "name": "Астральная Злодейка",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_001",
        "name": "Ведьма земли",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13303_002",
        "name": "Ведьма земли",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M13210",
        "name": "Ведьма-алхимик",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M14213",
        "name": "Лунная жрица",
        "element": "Тьма",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12210",
        "name": "Наемница-стрелок",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M12104",
        "name": "Великая исследовательница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11108",
        "name": "Искра",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11115",
        "name": "Пустынная стражница",
        "element": "Свет",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11007",
        "name": "Золотоискательница",
        "element": "Земля",
        "class_name": null,
        "rarity": null
      },
      {
        "id": "M11007_002",
        "name": "Золотоискательница",
        "element": "Огонь",
        "class_name": null,
        "rarity": null
      }
    ],
    "related_items": [
      {
        "category": "prefixes",
        "id": "JH40033",
        "name": "Застенчивая",
        "step": "S"
      }
    ]
  },
  {
    "id": "keyword_83",
    "key": "Keyword_83",
    "code": "",
    "icon": "✨",
    "cat": "mechanic",
    "element": "Neutral",
    "name": {
      "RU": "Уровень порчи",
      "EN": "Corruption Level",
      "CN": "腐化等级"
    },
    "desc": {
      "RU": "Каждые 20 уровней увеличивают количество выпадающей в бою экипировки на +1 (максимум +2).\nКаждый уровень снижает получаемый врагами урон и потерю ОЗ на -1.\nКаждый уровень увеличивает наносимый врагами урон и исцеление на +1.\nКаждый уровень увеличивает количество накладываемых врагами зарядов статусов на +1.\nКаждый уровень увеличивает восстановление маны врагов за действие на +1.",
      "EN": "Every 20 levels increases combat equipment drop count by +1 (max +2).\nEach level reduces all damage received and HP lost by enemy units by -1.\nEach level increases all damage dealt and healing performed by enemy units by +1.\nEach level increases stacks of all status effects applied by enemy units by +1.\nEach level increases action mana recovery of enemy units by +1.",
      "CN": "每20级使战斗装备掉落数量+1，最多+2。\n每级使敌方角色受到全部伤害和失去生命-1。\n每级使敌方角色造成全部伤害和恢复+1。\n每级使敌方角色造成全部状态层数+1。\n每级使敌方角色行动回魔+1。"
    },
    "aliases": {
      "RU": [
        "уровень порчи",
        "Уровень порчи",
        "порча",
        "порчи",
        "порчу",
        "порчей",
        "Уровня порчи",
        "Уровню порчи",
        "Уровнем порчи"
      ],
      "EN": [
        "corruption level",
        "Corruption Level",
        "corruption",
        "Corruption"
      ],
      "CN": [
        "腐化等级",
        "腐化"
      ]
    },
    "related_characters": [],
    "related_items": []
  }
],

  activeSection: 'tips',
  lastContainerId: 'guidesContainer',
  tilesFilter: 'all',
  tilesSearchQuery: '',

  setSection(sectionId) {
    this.activeSection = sectionId;
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    const containerId = this.lastContainerId || 'guidesContainer';
    this.render(containerId, lang);
    if (typeof App !== 'undefined' && App.updateUrl) {
      App.updateUrl('guides', sectionId);
    }
    const panel = document.querySelector('.guides-content-panel');
    if (panel) {
      panel.scrollTop = 0;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  setTilesFilter(filter) {
    this.tilesFilter = filter;
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    this.render(this.lastContainerId || 'guidesContainer', lang);
  },

  setTilesSearch(query) {
    this.tilesSearchQuery = String(query).toLowerCase().trim();
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    this.render(this.lastContainerId || 'guidesContainer', lang);
    const searchInput = document.getElementById('tilesSearchInput');
    if (searchInput) {
      searchInput.focus();
      searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
    }
  },

  setKeywordsFilter(filter) {
    this.keywordsFilter = filter;
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    this.render(this.lastContainerId || 'guidesContainer', lang);
  },

  setKeywordsSearch(query) {
    this.keywordsSearchQuery = String(query).toLowerCase().trim();
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    this.render(this.lastContainerId || 'guidesContainer', lang);
    const searchInput = document.getElementById('keywordSearchInput');
    if (searchInput) {
      searchInput.focus();
      searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
    }
  },

  setCodesFilter(filter) {
    this.codesFilter = filter;
    const container = document.getElementById('guidesContainer');
    if (container) {
      this.render(container.id, App.state.lang);
    }
  },

  copyPromoCode(code, btnId, lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const successText = isRu ? '✅ Скопировано!' : isCn ? '✅ 已复制!' : '✅ Copied!';
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById(btnId);
        if (btn) {
          const orig = btn.innerHTML;
          btn.innerHTML = successText;
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = orig;
            btn.classList.remove('copied');
          }, 2000);
        }
      });
    } else {
      prompt(isRu ? 'Скопируйте промокод:' : isCn ? '复制兑换码:' : 'Copy code:', code);
    }
  },

  render(containerId = null, currentLang = null) {
    const targetId = containerId || this.lastContainerId || 'guidesContainer';
    this.lastContainerId = targetId;
    const container = document.getElementById(targetId);
    if (!container) return;

    const currentAppLang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    const effectiveLang = currentLang || currentAppLang || 'RU';

    const lang = currentLang.toUpperCase();
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const menuItems = [
      { id: 'tips', icon: '💡', title: isRu ? 'Советы новичкам и Экономика' : isCn ? '萌新避坑与资源经济' : 'Beginner Tips & Economy' },
      { id: 'tiles', icon: '🗺️', title: isRu ? 'Тайлы и Дроп на поле' : isCn ? '地块类型与掉落图鉴' : 'Map Tiles & Drop Rates' },
      { id: 'phases', icon: '⚔️', title: isRu ? 'Фазы боя и порядок ходов' : isCn ? '战斗阶段与行动顺序' : 'Battle Phases & Turn Order' },
      { id: 'targeting', icon: '🎯', title: isRu ? 'Дистанция и Таргетинг' : isCn ? '攻击距离与目标选择' : 'Range, Distance & Targeting' },
      { id: 'damage', icon: '🛡️', title: isRu ? 'Урон, Защита и Баффы' : isCn ? '伤害计算、护盾与增益' : 'Damage Formulas, Shields & Buffs' },
      { id: 'elements', icon: '✨', title: isRu ? 'Стихии, Роли и Отряд' : isCn ? '元素克制、定位与配队' : 'Elements, Roles & Lineup' },
      { id: 'builds', icon: '🏆', title: isRu ? 'Лучшие сборки и Мета-отряды' : isCn ? '最佳阵容与流派推荐' : 'Best Builds & Meta Lineups' },
      { id: 'gacha', icon: '🎪', title: isRu ? 'Списки найма и Баннеры' : isCn ? '招募卡池与掉落列表' : 'Recruit Pools & Gacha Lists' },
      { id: 'events', icon: '🎁', title: isRu ? 'Список игровых событий' : isCn ? '活动与限时事件列表' : 'Game Events & Activities' },
      { id: 'codes', icon: '🎟️', title: isRu ? 'Промокоды и Подарки' : isCn ? '礼包兑换码汇总' : 'Promo & Redeem Codes' },
      { id: 'resources', icon: '🌐', title: isRu ? 'Сообщество и Ресурсы' : isCn ? '官方社区与攻略' : 'Community & Resources' }
    ];

    const activeItem = menuItems.find(m => m.id === this.activeSection) || menuItems[0];
    const contentHtml = this.getSectionContent(this.activeSection, lang);

    container.innerHTML = `
      <div class="guides-wrapper">
        <aside class="guides-sidebar ${this.isNavCollapsedMobile ? 'nav-collapsed' : ''}">
          <div class="guides-sidebar-header" onclick="GuidesView.toggleNavMobile(event)">
            <div class="guides-sidebar-title">
              <span style="font-size: 16px;">📚</span>
              <span class="guides-toc-label">${isRu ? 'Оглавление' : isCn ? '攻略目录' : 'Knowledge Base'}</span>
              <span class="guides-active-chapter-pill">
                <span>${activeItem.icon}</span>
                <span class="guides-pill-text">${activeItem.title}</span>
              </span>
            </div>
            <button class="guides-toggle-btn" type="button" onclick="GuidesView.toggleNavMobile(event)" aria-label="Скрыть/показать оглавление">
              <span class="guides-toggle-text">${this.isNavCollapsedMobile ? (isRu ? 'Развернуть ▾' : isCn ? '展开 ▾' : 'Expand ▾') : (isRu ? 'Скрыть ▴' : isCn ? '收起 ▴' : 'Hide ▴')}</span>
            </button>
          </div>
          <div class="guides-nav-list">
            ${menuItems.map((item, idx) => `
              <button class="guide-nav-btn ${this.activeSection === item.id ? 'active' : ''}" onclick="GuidesView.setSection('${item.id}')">
                <span class="guide-nav-num">${idx + 1}</span>
                <span class="guide-nav-icon">${item.icon}</span>
                <span class="guide-nav-text">${item.title}</span>
                ${this.activeSection === item.id ? '<span class="guide-nav-active-mark">●</span>' : ''}
              </button>
            `).join('')}
          </div>
        </aside>

        <section class="guides-content-panel">
          ${contentHtml}
        </section>
      </div>
    `;
  },

  getSectionContent(sectionId, lang) {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    switch (sectionId) {
      case 'tips':
        return this.getTipsContent(lang);
      case 'tiles':
        return this.getTilesContent(lang);
      case 'phases':
        return isRu ? this.getPhasesRU() : isCn ? this.getPhasesCN() : this.getPhasesEN();
      case 'targeting':
        return isRu ? this.getTargetingRU() : isCn ? this.getTargetingCN() : this.getTargetingEN();
      case 'damage':
        return this.getDamageContent(lang);
      case 'elements':
        return isRu ? this.getElementsRU() : isCn ? this.getElementsCN() : this.getElementsEN();
      case 'builds':
        return this.getBuildsContent(lang);
      case 'gacha':
        return this.getGachaContent(lang);
      case 'events':
        return this.getEventsContent(lang);
      case 'codes':
        return this.getCodesContent(lang);
      case 'resources':
        return this.getResourcesContent(lang);
      default:
        return isRu ? this.getPhasesRU() : this.getPhasesEN();
    }
  },


  // 0. Beginner Tips & Resource Economy
  getTilesContent(lang = "RU") {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const allTiles = (typeof App !== 'undefined' && App.state?.mapTiles && App.state.mapTiles.length > 0) 
      ? App.state.mapTiles 
      : (this.defaultMapTiles || []);

    const activeFilter = this.tilesFilter || 'all';
    const searchQuery = (this.tilesSearchQuery || '').toLowerCase().trim();

    const filteredTiles = allTiles.filter(t => {
      if (activeFilter !== 'all') {
        if (activeFilter === 'special' && !t.is_special) return false;
        if (activeFilter !== 'special' && t.category !== activeFilter) return false;
      }
      if (searchQuery) {
        const name = (t.name?.[lang] || t.name?.RU || '').toLowerCase();
        const cat = (t.category_name || '').toLowerCase();
        const biomes = (t.biomes?.[lang] || []).join(' ').toLowerCase();
        const mats = (t.materials?.[lang] || []).join(' ').toLowerCase();
        if (!name.includes(searchQuery) && !cat.includes(searchQuery) && !biomes.includes(searchQuery) && !mats.includes(searchQuery)) {
          return false;
        }
      }
      return true;
    });

    const filterLabels = {
      all: isRu ? `Все клетки (${allTiles.length})` : isCn ? `全部地块 (${allTiles.length})` : `All Tiles (${allTiles.length})`,
      chest: isRu ? '📦 Сундуки и Клады' : isCn ? '📦 宝箱与秘宝' : '📦 Chests & Caches',
      altar: isRu ? '🏛️ Алтари и События' : isCn ? '🏛️ 祭坛与遗迹' : '🏛️ Altars & Shrines',
      merchant: isRu ? '🧰 Торговцы' : isCn ? '🧰 游商与地精' : '🧰 Merchants',
      mimic: isRu ? '👹 Мимики и Боссы' : isCn ? '👹 宝箱怪与强敌' : '👹 Mimics & Bosses',
      totem: isRu ? '🗿 Тотемы' : isCn ? '🗿 属性图腾' : '🗿 Totems',
      poi: isRu ? '🏰 Крупные POI' : isCn ? '🏰 大型建筑与洞穴' : '🏰 Large POIs',
      terrain: isRu ? '🌿 Обычные клетки' : isCn ? '🌿 基础地形' : '🌿 Basic Terrain'
    };

    return `
      <div class="guide-article">
        <h2 class="guide-title">🗺️ ${isRu ? 'Тайлы игрового поля, Клетки подземелий и Таблицы выпадения лута' : isCn ? '全地图地块类型、建筑机制与掉落概率完整指南' : 'Map Tiles, Dungeon Nodes & Drop Rates Guide'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Полный справочник всех 184 типов клеток игрового поля, интерактивных событий, алтарей, сундуков сокровищ, тотемов и шансов выпадения экипировки, материалов возвышения и персонажей.' 
            : isCn 
            ? '游戏内全部184种地块、宝箱格、传承祭坛、游商地精、属性图腾与怪物巢穴机制及精确掉落概率汇总。' 
            : 'Comprehensive database of all 184 map tile types, interactive events, legacy altars, treasure chests, and exact drop rates for gear, materials, and characters.'}
        </p>

        <!-- Search and Filter Bar -->
        <div style="margin-top: 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 14px;">
            <div style="font-size: 18px; font-weight: 800; color: #ffffff; display: flex; align-items: center; gap: 8px;">
              <span>🗺️</span>
              <span>${isRu ? 'Каталог тайлов' : isCn ? '地块图鉴' : 'Tiles Catalog'} (${filteredTiles.length})</span>
            </div>
            
            <div style="position: relative; min-width: 240px; flex: 1; max-width: 360px;">
              <input type="text" 
                     id="tilesSearchInput" 
                     placeholder="${isRu ? '🔍 Поиск по названию, биому, луту...' : isCn ? '🔍 搜索地块名称、地形、产出...' : '🔍 Search tile name, biome, drops...'}" 
                     value="${this.escapeHtml(this.tilesSearchQuery || '')}"
                     oninput="GuidesView.setTilesSearch(this.value)"
                     style="width: 100%; padding: 8px 14px; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(56, 189, 248, 0.35); border-radius: var(--radius-sm); color: #ffffff; font-size: 13px;">
            </div>
          </div>

          <!-- Category Filter Pills -->
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px;">
            ${['all', 'chest', 'altar', 'merchant', 'mimic', 'totem', 'poi', 'terrain'].map(catKey => `
              <button class="filter-pill ${activeFilter === catKey ? 'active' : ''}" 
                      onclick="GuidesView.setTilesFilter('${catKey}')"
                      style="padding: 6px 13px; font-size: 12.5px; font-weight: 700; cursor: pointer;">
                ${filterLabels[catKey]}
              </button>
            `).join('')}
          </div>

          <!-- Tiles Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 14px;">
            ${filteredTiles.map(tile => {
              const tileName = tile.name?.[lang] || tile.name?.RU || tile.id;
              const biomesList = tile.biomes?.[lang] || tile.biomes?.RU || [];
              const matsList = tile.materials?.[lang] || tile.materials?.RU || [];
              const r = tile.rates || {};

              return `
                <div class="map-tile-card">
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <div style="width: 44px; height: 44px; border-radius: var(--radius-md); background: radial-gradient(circle, #1e293b 0%, #0f172a 100%); border: 1.5px solid rgba(56, 189, 248, 0.35); display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.4);">
                        ${tile.icon}
                      </div>
                      <div>
                        <div style="font-weight: 800; font-size: 15px; color: #ffffff; line-height: 1.2;">${this.escapeHtml(tileName)}</div>
                        <div style="font-size: 11px; color: #38bdf8; font-weight: 600; margin-top: 2px;">
                          📐 ${this.escapeHtml(tile.size_str)} ${tile.is_special ? '• ⭐ Особый объект' : ''}
                        </div>
                      </div>
                    </div>
                    <span class="tag-badge" style="font-size: 11px; padding: 3px 8px; border-color: rgba(56, 189, 248, 0.3); color: #7dd3fc;">
                      ${this.escapeHtml(tile.category_name)}
                    </span>
                  </div>

                  <!-- Biomes list -->
                  ${biomesList.length > 0 ? `
                    <div style="display: flex; gap: 4px; flex-wrap: wrap; font-size: 11px;">
                      <span style="color: var(--text-muted); margin-right: 2px;">🌲 ${isRu ? 'Биомы:' : 'Biomes:'}</span>
                      ${biomesList.map(b => `<span class="tag-badge" style="padding: 1px 6px; font-size: 10.5px; background: rgba(255,255,255,0.04);">${this.escapeHtml(b)}</span>`).join('')}
                    </div>
                  ` : ''}

                  <!-- Drop Rates Section -->
                  <div style="background: rgba(10, 14, 23, 0.6); padding: 10px 12px; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; gap: 6px;">
                    <div style="font-size: 11.5px; font-weight: 700; color: #f1f5f9; margin-bottom: 2px; display: flex; align-items: center; gap: 6px;">
                      <span>🎁</span> <span>${isRu ? 'Шансы выпадения наград (Дроп):' : isCn ? '战利品掉落概率:' : 'Drop Probabilities:'}</span>
                    </div>

                    ${r.chest > 0 ? `
                      <div>
                        <div class="drop-rate-row">
                          <span style="color: #fbbf24; font-weight: 600;">📦 ${isRu ? 'Сундуки сокровищ' : 'Chests'}</span>
                          <span style="font-weight: 700; color: #ffffff;">${r.chest}%</span>
                        </div>
                        <div class="drop-rate-bar-bg"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.chest)}%; background: #fbbf24;"></div></div>
                      </div>
                    ` : ''}

                    ${r.equip > 0 ? `
                      <div>
                        <div class="drop-rate-row">
                          <span style="color: #f472b6; font-weight: 600;">⚔️ ${isRu ? 'Экипировка (Напрямую)' : 'Gear Drop'}</span>
                          <span style="font-weight: 700; color: #ffffff;">${r.equip}%</span>
                        </div>
                        <div class="drop-rate-bar-bg"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.equip)}%; background: #f472b6;"></div></div>
                      </div>
                    ` : ''}

                    ${r.role > 0 ? `
                      <div>
                        <div class="drop-rate-row">
                          <span style="color: #c084fc; font-weight: 600;">👑 ${isRu ? 'Фрагменты героинь' : 'Heroine Shards'}</span>
                          <span style="font-weight: 700; color: #ffffff;">${r.role}%</span>
                        </div>
                        <div class="drop-rate-bar-bg"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.role)}%; background: #c084fc;"></div></div>
                      </div>
                    ` : ''}

                    ${r.materials > 0 ? `
                      <div>
                        <div class="drop-rate-row">
                          <span style="color: #4ade80; font-weight: 600;">🌿 ${isRu ? 'Материалы возвышения' : 'Materials'}</span>
                          <span style="font-weight: 700; color: #ffffff;">${r.materials}%</span>
                        </div>
                        <div class="drop-rate-bar-bg"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.materials)}%; background: #4ade80;"></div></div>
                      </div>
                    ` : ''}

                    ${r.stones > 0 ? `
                      <div>
                        <div class="drop-rate-row">
                          <span style="color: #60a5fa; font-weight: 600;">💎 ${isRu ? 'Камни Наследия / Самоцветы' : 'Legacy Stones'}</span>
                          <span style="font-weight: 700; color: #ffffff;">${r.stones}%</span>
                        </div>
                        <div class="drop-rate-bar-bg"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.stones)}%; background: #60a5fa;"></div></div>
                      </div>
                    ` : ''}

                    ${r.gold > 0 ? `
                      <div>
                        <div class="drop-rate-row">
                          <span style="color: #facc15; font-weight: 600;">🪙 ${isRu ? 'Золото / Слизь' : 'Gold/Slime'}</span>
                          <span style="font-weight: 700; color: #ffffff;">${r.gold}%</span>
                        </div>
                        <div class="drop-rate-bar-bg"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.gold)}%; background: #facc15;"></div></div>
                      </div>
                    ` : ''}
                  </div>

                  <!-- Specific Materials -->
                  ${matsList.length > 0 ? `
                    <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-top: auto; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.06);">
                      ${matsList.map(m => `<span class="tag-badge" style="padding: 2px 7px; font-size: 11px; background: rgba(74, 222, 128, 0.1); color: #86efac; border-color: rgba(74, 222, 128, 0.25);">🌿 ${this.escapeHtml(m)}</span>`).join('')}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  },

  getTipsContent(lang = "RU") {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    return `
      <div class="guide-article">
        <h2 class="guide-title">💡 ${isRu ? 'Советы для новичков и Экономика ресурсов' : isCn ? '萌新必看避坑指南与资源经济学' : 'Beginner Tips & Resource Economy'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Золотые правила развития аккаунта, грамотного расхода самоцветов, кристаллов и фарма от опытных теоретиков гильдии (Theorycraft baosbanhbao).' 
            : isCn 
            ? '高阶玩家实测总结的钻石规划、卡池抽取、金币消耗、炼金合成与体力分配全套核心策略指南。' 
            : 'Essential progression rules, gem spending priority, crystal merging, and stamina management from veteran guild theorycrafters.'}
        </p>

        <!-- Quick Table of Contents / Sub-sections Bar -->
        <div class="guide-toc-bar" style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; padding: 14px 16px; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: var(--radius-md); box-shadow: 0 4px 16px rgba(0,0,0,0.3);">
          <div style="font-size: 13px; font-weight: 700; color: #c084fc; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 16px;">📑</span>
              <span>${isRu ? 'Быстрый переход к разделам руководства:' : isCn ? '核心攻略子章节快速导航:' : 'Quick Navigation to Sub-sections:'}</span>
            </div>
            <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">
              ${isRu ? 'Кликните для перехода или используйте 🔗 для копирования ссылки' : 'Click to jump or use 🔗 to share link'}
            </span>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px;">
            <button class="filter-pill" onclick="GuidesView.scrollToAnchor('tips-gems')" style="padding: 5px 12px; font-size: 12px; font-weight: 700; cursor: pointer;">
              💎 ${isRu ? '1. Самоцветы и Крутки' : isCn ? '1. 钻石与心愿' : '1. Gems & Wishlist'}
            </button>
            <button class="filter-pill" onclick="GuidesView.scrollToAnchor('tips-gold')" style="padding: 5px 12px; font-size: 12px; font-weight: 700; cursor: pointer;">
              💰 ${isRu ? '2. Золото и Сброс' : isCn ? '2. 金币与重置' : '2. Gold & Resets'}
            </button>
            <button class="filter-pill" onclick="GuidesView.scrollToAnchor('tips-manual')" style="padding: 5px 12px; font-size: 12px; font-weight: 700; cursor: pointer;">
              ⚔️ ${isRu ? '3. Зачистка и Клевер' : isCn ? '3. 推图与四叶草' : '3. Manual & Clovers'}
            </button>
            <button class="filter-pill" onclick="GuidesView.scrollToAnchor('tips-alchemy')" style="padding: 5px 12px; font-size: 12px; font-weight: 700; cursor: pointer;">
              ⚗️ ${isRu ? '4. Алхимия и Сундуки' : isCn ? '4. 炼金与宝箱' : '4. Alchemy & Chests'}
            </button>
            <button class="filter-pill" onclick="GuidesView.scrollToAnchor('tips-gear-stars')" style="padding: 5px 12px; font-size: 12px; font-weight: 700; cursor: pointer;">
              ⭐ ${isRu ? '5. Звездность и Сеты' : isCn ? '5. 装备升星与传承' : '5. Star-Up & Sets'}
            </button>
            <button class="filter-pill" onclick="GuidesView.scrollToAnchor('tips-luck')" style="padding: 5px 12px; font-size: 12px; font-weight: 700; cursor: pointer;">
              🎲 ${isRu ? '6. Механика Удачи' : isCn ? '6. 幸运值真实机制' : '6. True Luck (LUK)'}
            </button>
            <button class="filter-pill" onclick="GuidesView.scrollToAnchor('tips-talents')" style="padding: 5px 12px; font-size: 12px; font-weight: 700; cursor: pointer;">
              🧬 ${isRu ? '7. Плоды Таланта' : isCn ? '7. 天赋果实保底' : '7. Talent Fruits & Pity'}
            </button>
          </div>
        </div>


        <!-- 1. Gems & Recruits -->
        <div class="guide-card" id="tips-gems" style="border-left: 4px solid #38bdf8; scroll-margin-top: 80px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 8px;">
            <h3 style="color: #38bdf8; display: flex; align-items: center; gap: 8px; margin: 0;">
              <span>💎</span>
              <span>${isRu ? '1. Самоцветы, Крутки и Осколки' : isCn ? '1. 钻石规划、卡池心愿与碎片管理' : '1. Gems, Wishlist & Shards'}</span>
            </h3>
            <button class="guide-copy-link-btn" onclick="GuidesView.copyGuideLink('tips-gems', this)" title="${isRu ? 'Скопировать прямую ссылку на этот подраздел' : 'Copy direct link to this sub-section'}">
              <span class="link-icon">🔗</span>
              <span class="link-text">${isRu ? 'Ссылка' : 'Share'}</span>
            </button>
          </div>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Самоцветы (Gems):' : isCn ? '钻石用途:' : 'Gems Spending:'}</strong> ${isRu ? 'Тратьте кристаллы <strong>только на Альтер-найм (Alter summon)</strong>. В эндгейме они потребуются для реролла золотых талантов (200 кристаллов за замену). Арена и Астральное Царство стабильно снабжают кристаллами каждую неделю.' : isCn ? '钻石<strong>只用来抽异化卡池</strong>。游戏后期每次更换金天赋需要消耗200钻石。每周竞技场和星界领域都会提供大量钻石，放心抽异化。' : 'Spend gems <strong>only on Alter Summon</strong>. In the endgame, gems are used for swapping gold talents (200 gems each). Weekly Arena and Astral Realm provide a steady income.'}</li>
            <li><strong>${isRu ? 'Список желаний (Wishlist):' : isCn ? '常规心愿推荐:' : 'Standard Wishlist:'}</strong> ${isRu ? 'В стандартном призыве ставьте <strong>Кристальную грибницу (Crystal Shroom)</strong> или <strong>Командующую Легиона (Legion Commander)</strong> — это топ батарейки маны для частого спама ультимейтами.' : isCn ? '常规招募心愿推荐选择<strong>水晶菇娘</strong>或<strong>军团统领</strong>。她们是队伍的“回蓝充电宝”，能让主力DPS高频释放大招。' : 'Wish-pick <strong>Crystal Shroom</strong> or <strong>Legion Commander</strong>. These mana batteries enable your main DPS to spam skills frequently.'}</li>
            <li><strong>${isRu ? 'Смена цели в Wishlist:' : isCn ? '保底前出货即换:' : 'Swap Wishlist Target:'}</strong> ${isRu ? 'Если выбили желаемую героиню до 100 круток гаранта, <strong>сразу меняйте цель</strong> на другую не полученную девочку. Прогресс и осколки не сгорают.' : isCn ? '如果在100抽保底前抽出了心愿角色，<strong>立刻更换为另一位未拥有的角色</strong>。更换心愿角色会返还对应碎片。' : 'Once you pull your wish pick before 100 pity, swap to another unowned girl. You will retain all refund progress.'}</li>
            <li><strong>${isRu ? 'Альтер-осколки (Alter Shards):' : isCn ? '异化碎片严禁乱用:' : 'Save Alter Shards:'}</strong> ${isRu ? '⚠️ <strong>СТРОГО КОПИТЬ:</strong> для прокачки альтера на 5★ требуется 400 альтер-осколков. Тратьте только когда точно уверены в ключевом керри.' : isCn ? '⚠️ <strong>绝对攒着别乱用：</strong>升满一个5星异化角色需要整整400个异化碎片，只留给你决定重度培养的核心主力。' : '⚠️ <strong>SAVE THEM:</strong> It takes 400 alter shards to 5-star an alter girl. Only spend when you are 100% committed to your main carry.'}</li>
            <li><strong>${isRu ? 'Приоритеты Альтер-найма:' : isCn ? '异化卡池优先目标:' : 'Alter Priority:'}</strong> ${isRu ? 'В первую очередь ищите <strong>Шагающую по ветру [Зайчиху]</strong> и <strong>Великую волшебницу [Зайчиху]</strong> — они разгоняют LUK (удачу) и фарм редкого шмота с клевером.' : isCn ? '优先锁定【兔耳】<strong>风行游侠</strong>与【兔耳】<strong>魔术大师</strong>。这两位幸运角色搭配四叶草是后期刷神装与高级符文的核心基石。' : 'Look out for <strong>[Bunny] Windstrider</strong> and <strong>[Bunny] Grand Magician</strong> for high LUK farming synergy.'}</li>
          </ul>
        </div>

        <!-- 2. Gold & Upgrades -->
        <div class="guide-card" id="tips-gold" style="border-left: 4px solid #eab308; scroll-margin-top: 80px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 8px;">
            <h3 style="color: #eab308; display: flex; align-items: center; gap: 8px; margin: 0;">
              <span>💰</span>
              <span>${isRu ? '2. Золото, Прокачка и Сброс до 60 уровня' : isCn ? '2. 金币消耗、60级免费重置与心之升级' : '2. Gold, Level 60 Reset & Hearts'}</span>
            </h3>
            <button class="guide-copy-link-btn" onclick="GuidesView.copyGuideLink('tips-gold', this)" title="${isRu ? 'Скопировать прямую ссылку на этот подраздел' : 'Copy direct link to this sub-section'}">
              <span class="link-icon">🔗</span>
              <span class="link-text">${isRu ? 'Ссылка' : 'Share'}</span>
            </button>
          </div>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Приоритет расходов золота:' : isCn ? '金币消费优先级:' : 'Gold Spending Order:'}</strong> ${isRu ? '1. Повышение звездности экипировки и рун ➔ 2. Прокачка 3 боевых юнитов до 60 ур. по уровню Кодекса ➔ 3. Излишки — товары у странствующего гоблина.' : isCn ? '1. 装备与符文升星 ➔ 2. 随图鉴等级将3个主力升至60级 ➔ 3. 剩余金币在游商地精处扫货。' : '1. Star up gear & runes ➔ 2. Level 3 units to Lv 60 as codex grows ➔ 3. Spend excess at travel merchant goblin.'}</li>
            <li><strong>${isRu ? 'Остановка на 60 уровне:' : isCn ? '升到60级立即停手:' : 'Stop at Level 60:'}</strong> ${isRu ? 'Любого персонажа 60 уровня и ниже можно <strong>БЕСПЛАТНО сбросить (Reset)</strong> с возвратом 100% золота и ресурсов. Экспериментируйте с пачками без штрафов!' : isCn ? '所有60级及以下的角色均支持<strong>无损免费重置</strong>，全额返还金币与养成材料，方便零成本尝试各种流派。' : 'Units at Lv 60 and below can be <strong>freely reset</strong> for 100% gold and material refund to experiment with teams.'}</li>
            <li><strong>${isRu ? 'Прокачка 70+ через Сердца (Hearts):' : isCn ? '70级以上用心之升级:' : 'Level 70+ with Hearts:'}</strong> ${isRu ? 'После 70 уровня используйте <em>Сердца героинь</em> (покупаются у торговца-гоблина). Они дают +1, +5 или +10 уровней моментально без золота и ресурсов.' : isCn ? '70级以上通过游商购买<em>勇者之心</em>直接提升1/5/10级，无需消耗金币与材料（需先解锁图鉴等级上限）。' : 'Use <em>Heroine Hearts</em> from the goblin merchant to level up units by 1, 5, or 10 levels without gold/materials.'}</li>
            <li><strong>${isRu ? 'Плоды таланта (Talent Fruits):' : isCn ? '天赋果实务必留到后期:' : 'Save Talent Fruits:'}</strong> ${isRu ? '<strong>КОПИТЬ для эндгейма.</strong> Не сливайте плоды в случайных героев на ранних стадиях игры.' : isCn ? '<strong>严禁前期随意乱喂！</strong>全部存到大后期确立毕业阵容后再精细洗练专属天赋。' : '<strong>SAVE FOR ENDGAME.</strong> Do not waste valuable talent fruits early on random units.'}</li>
          </ul>
        </div>

        <!-- 3. Manual vs Blitz & Clovers -->
        <div class="guide-card" id="tips-manual" style="border-left: 4px solid #10b981; scroll-margin-top: 80px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 8px;">
            <h3 style="color: #10b981; display: flex; align-items: center; gap: 8px; margin: 0;">
              <span>⚔️</span>
              <span>${isRu ? '3. Ручная зачистка, Блиц и Клевер' : isCn ? '3. 手动推图、扫荡机制与四叶草' : '3. Manual vs Blitz & Clovers'}</span>
            </h3>
            <button class="guide-copy-link-btn" onclick="GuidesView.copyGuideLink('tips-manual', this)" title="${isRu ? 'Скопировать прямую ссылку на этот подраздел' : 'Copy direct link to this sub-section'}">
              <span class="link-icon">🔗</span>
              <span class="link-text">${isRu ? 'Ссылка' : 'Share'}</span>
            </button>
          </div>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Ручная зачистка (Manual):' : isCn ? '前期手动拿抽券:' : 'Manual Clearing:'}</strong> ${isRu ? 'На старте проходите вручную как можно больше этажей ради билетов призыва. В мид/эндгейме: бегите прямо к Боссу и спец-клеткам, затем <strong>выходите с карты</strong>, экономя стамину на мобах.' : isCn ? '前期尽量手动全清关卡拿满常规招募券。中后期直奔 Boss 房和特殊事件格，打完直接离开关卡，跳过杂兵省体力。' : 'Manually clear as many early stages for summon tickets. In mid/endgame, rush the Boss tile and exit to conserve stamina.'}</li>
            <li><strong>${isRu ? 'Эффективный Блиц (Blitz):' : isCn ? '10连扫荡吃神谕:' : '10x Blitz Rule:'}</strong> ${isRu ? 'Рекомендуется запускать блиц <strong>10x за 500 стамины</strong>, чтобы поймать несколько баффов оракула. Блиц за 50 стамины также отлично фармит клевер и плоды таланта.' : isCn ? '建议只使用 <strong>500体力的10连扫荡</strong>，以博取多次神谕Buff。50体力的单次扫荡也是农四叶草与天赋果实的极佳途径。' : 'Only blitz on 10x (500 stamina) to maximize oracle buffs. Blitz is also great for farming clovers and talent berries.'}</li>
            <li><strong>${isRu ? 'Клевер (Clover):' : isCn ? '四叶草囤到红装农场:' : 'Clover Strategy:'}</strong> ${isRu ? 'Копите клевер до разблокировки Красного снаряжения в достижениях. Рекомендуется начинать с <em>Равнин Рассветного Шага (Dawnstep Plains)</em> ради Соломенной шляпы.' : isCn ? '四叶草留到中后期通过成就解锁红装时再集中使用。优先从【黎明平原】开始刷取神级散件【草帽】。' : 'Save clovers until midgame when farming Red gear achievements, starting with Dawnstep Plains for the Straw Hat.'}</li>
            <li><strong>${isRu ? 'Ежедневная реклама (ADs):' : isCn ? '每日免费广告福利:' : 'Daily Free ADs:'}</strong> ${isRu ? 'Каждый день забирайте: 3x Клевера, 3x 20k золота, 3x 200 энергии, 3x обновления контрактов, 1x мгновенный 8-часовой сбор алхимии, гарантированный дроп Вестницы.' : isCn ? '每日白嫖资源：3个四叶草、3次2万金币、3次200体力、3次悬赏刷新、1次8小时炼金直收、先驱保底掉落、探索直达与星界步数。' : 'Daily free AD rewards: 3x Clovers, 3x 20k gold, 3x 200 stamina, 3x bounty refreshes, 8-hr alchemy clear, and Astral realm steps.'}</li>
          </ul>
        </div>

        <!-- 4. Alchemy & Crystals -->
        <div class="guide-card" id="tips-alchemy" style="border-left: 4px solid #a855f7; scroll-margin-top: 80px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 8px;">
            <h3 style="color: #a855f7; display: flex; align-items: center; gap: 8px; margin: 0;">
              <span>⚗️</span>
              <span>${isRu ? '4. Алхимия, Сундуки и Слияние Кристаллов' : isCn ? '4. 炼金全开、宝箱自动合成与晶石合成' : '4. Alchemy, Chests & Crystal Merging'}</span>
            </h3>
            <button class="guide-copy-link-btn" onclick="GuidesView.copyGuideLink('tips-alchemy', this)" title="${isRu ? 'Скопировать прямую ссылку на этот подраздел' : 'Copy direct link to this sub-section'}">
              <span class="link-icon">🔗</span>
              <span class="link-text">${isRu ? 'Ссылка' : 'Share'}</span>
            </button>
          </div>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Авто-слияние сундуков:' : isCn ? '宝箱合成节点:' : 'Chest Merging:'}</strong> ${isRu ? 'В начале игры останавливайте авто-слияние на <strong>Фиолетовых сундуках</strong> и открывайте их для быстрой прокачки уровня Кодекса. В эндгейме сливайте на максимум до Оранжевых.' : isCn ? '前期宝箱自动合成停在<strong>紫色品阶</strong>并开启，快速填补图鉴等级。中后期再一路自动合成到最高橙色品阶。' : 'Early game: stop auto-merging at Purple chests to open and raise codex faster. Endgame: auto-merge to max Orange.'}</li>
            <li><strong>${isRu ? 'Алхимия (Кнопка «Max»):' : isCn ? '炼金必选【全部】:' : 'Alchemy Max:'}</strong> ${isRu ? 'Всегда используйте режим <strong>«Max»</strong>. Звездите даже зеленый и синий шмот для уровня Кодекса. Алхимия снабжает кристаллами и камнями Наследия.' : isCn ? '炼金一律选用<strong>“全部 (Max)”</strong>。即使是绿装蓝装也要升星以提升图鉴，同时获取兑换图鉴装备与传承石的晶石。' : 'Always use "Max" in alchemy. Star up all gear (even green/blue) for codex progression and legacy stones.'}</li>
            <li><strong>${isRu ? 'Слияние Кристаллов (Курс 5:1):' : isCn ? '晶石5:1合成法则:' : '5:1 Crystal Merging:'}</strong> ${isRu ? '5 Зеленых ➔ 1 Синий ➔ 5 Синих ➔ 1 Фиолетовый ➔ 5 Фиолетовых ➔ 1 Желтый/Божественный.<br>• В начале сливайте в <strong>Фиолетовые</strong> для быстрого выкупа недостающих сетов Кодекса.<br>• Собрав основу, сливайте в <strong>Желтые</strong> и закрывайте 100% зачистку карт в Кодексе для открытия Красного снаряжения.' : isCn ? '5绿=1蓝，5蓝=1紫，5紫=1金。<br>• 前期合成到<strong>紫晶</strong>，快速点出关键队伍套装辅助推图。<br>• 基础套装齐备后合成<strong>金晶</strong>，直接100%点亮目标地图图鉴，解锁红装成就。' : '5:1 merge ratio (5 Green = 1 Blue, 5 Blue = 1 Purple, 5 Purple = 1 Yellow).<br>• Early game: merge to Purple to quick-unlock codex gear sets.<br>• Midgame: merge to Yellow to 100% clear maps for Red gear unlocks.'}</li>
          </ul>
        </div>

        <!-- 5. Gear Star-Up & Legacy -->
        <div class="guide-card" id="tips-gear-stars" style="border-left: 4px solid #ec4899; scroll-margin-top: 80px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 8px;">
            <h3 style="color: #ec4899; display: flex; align-items: center; gap: 8px; margin: 0;">
              <span>⭐</span>
              <span>${isRu ? '5. Звездность Экипировки (1★–3★), Наследие (Legacy) и Комбо Сетов' : isCn ? '5. 装备升星(1★–3★)、传承(Legacy)与套装偷位机制' : '5. Gear Star-Up (1★–3★), Legacy & Multi-Set Resonance'}</span>
            </h3>
            <button class="guide-copy-link-btn" onclick="GuidesView.copyGuideLink('tips-gear-stars', this)" title="${isRu ? 'Скопировать прямую ссылку на этот подраздел' : 'Copy direct link to this sub-section'}">
              <span class="link-icon">🔗</span>
              <span class="link-text">${isRu ? 'Ссылка' : 'Share'}</span>
            </button>
          </div>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Шкала улучшения экипировки:' : isCn ? '装备升星消耗与收益:' : 'Star-Up Progression:'}</strong> ${isRu ? '• <strong>Legacy (Камень наследия):</strong> +1 очко ко всем 3 строкам талантов предмета.<br>• <strong>1★ (1 дубликат):</strong> +1 очко к 1-й строке.<br>• <strong>2★ (5 дубликатов):</strong> +1 очко ко 2-й строке.<br>• <strong>3★ (10 дубликатов):</strong> +1 очко к 3-й строке.<br>• <strong>MAX (Legacy + 3★):</strong> +3 очка ко ВСЕМ строкам талантов предмета!' : isCn ? '• <strong>传承 (传承石):</strong> 全词条+1点天赋点数。<br>• <strong>1星 (消耗1个同名装备):</strong> 第1行词条+1点。<br>• <strong>2星 (消耗5个同名装备):</strong> 第2行词条+1点。<br>• <strong>3星 (消耗10个同名装备):</strong> 第3行词条+1点。<br>• <strong>满配 (传承+3星):</strong> 装备全词条总计+3点！' : '• <strong>Legacy:</strong> +1 to all talent rows.<br>• <strong>1-Star (1 dupe):</strong> +1 to 1st row.<br>• <strong>2-Star (5 dupes):</strong> +1 to 2nd row.<br>• <strong>3-Star (10 dupes):</strong> +1 to 3rd row.<br>• <strong>MAX (Legacy + 3-Star):</strong> +3 to ALL talent rows!'}</li>
            <li><strong>${isRu ? 'Секрет 3★ — Активация сетов 2 предметами вместо 3:' : isCn ? '3星核心价值——少穿装备激活完整套装:' : '3-Star Secret: 2-Piece Full Resonance:'}</strong> ${isRu ? 'Прокачанная до 3★ вещь дает достаточно очков сета, чтобы полностью активировать 3-предметный сет <strong>всего двумя надетыми вещами</strong>! 3-й слот освобождается под другой мощный сет, позволяя комбинировать сразу несколько резонансов на одной героине.' : isCn ? '满3星装备提供的高额词条点数，能让原本需要穿戴3件的套装仅凭<strong>2件装备即可完全激活满层套装效果</strong>！腾出的第3个装备槽可以自由混搭其他强力套装，极大提升单人战斗力。' : '3-Star gear provides so many resonance points that you only need 2 pieces to activate a 3-piece set, freeing up the 3rd slot for another powerful set!'}</li>
            <li><strong>${isRu ? 'Запрет на распыление до 3★:' : isCn ? '未满3星绝不当狗粮:' : 'Never Fodder Below 3-Star:'}</strong> ${isRu ? '⚠️ Никогда не скармливайте в алхимию экипировку и руны, пока они не прокачаны до 3★ для Кодекса! Только лишние дубликаты после 3★ идут в утиль.' : isCn ? '⚠️ 严禁将未满3星的装备/符文送进炼金炉！必须先升满3星解锁图鉴最大收益，多余的溢出副本才拿去换晶石。' : '⚠️ Never use un-starred gear as alchemy fodder until it hits 3-Star for your codex!'}</li>
          </ul>
        </div>

        <!-- 6. Real Luck Mechanics & Abyss Drops -->
        <div class="guide-card" id="tips-luck" style="border-left: 4px solid #f97316; scroll-margin-top: 80px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 8px;">
            <h3 style="color: #f97316; display: flex; align-items: center; gap: 8px; margin: 0;">
              <span>🎲</span>
              <span>${isRu ? '6. Разбор Механики Удачи (LUK), Клевер и Дроп d20 в Бездне' : isCn ? '6. 幸运值 (LUK) 真实机制、四叶草重骰与深渊额外掉落' : '6. True Luck (LUK) Mechanics, Clovers & Abyss d20 Drops'}</span>
            </h3>
            <button class="guide-copy-link-btn" onclick="GuidesView.copyGuideLink('tips-luck', this)" title="${isRu ? 'Скопировать прямую ссылку на этот подраздел' : 'Copy direct link to this sub-section'}">
              <span class="link-icon">🔗</span>
              <span class="link-text">${isRu ? 'Ссылка' : 'Share'}</span>
            </button>
          </div>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Как реально работает Удача (LUK):' : isCn ? '幸运值真实作用机制:' : 'How LUK Truly Works:'}</strong> ${isRu ? 'Удача (LUK) <strong>НЕ влияет на первый бесплатный бросок кубика</strong> (он на 100% случайный). Удача дает <strong>+1 к результату броска за каждые 15 суммарной Удачи команды ПРИ ТРАТЕ КЛЕВЕРА</strong>!' : isCn ? '全队幸运值 (LUK) <strong>完全不影响战后首次免费掷骰</strong>（初次掷骰为纯随机）。幸运值的真实机制为：<strong>在使用四叶草重骰时，全队每有15点幸运值，重骰点数固定+1</strong>！' : 'LUK <strong>does NOT affect the initial free dice roll</strong> (pure RNG). Instead, every 15 team LUK grants <strong>+1 to your dice roll WHEN SPENDING A CLOVER</strong>!'}</li>
            <li><strong>${isRu ? 'Стратегия Клевера на Натуральную 20-ку:' : isCn ? '四叶草绝杀20点策略:' : 'Clover Strategy for 20s:'}</strong> ${isRu ? 'Только ролл 20 гарантирует Оранжевый / Желтый Наследие дроп. Тратьте клевер только тогда, когда базовый ролл выпал 17–19 — с бонусом LUK вы гарантированно за 1–2 клевера добьете кубик до 20!' : isCn ? '投出20点是必定掉落橙装与黄晶传承装的唯一途径。初次掷出17-19点时再使用四叶草，依靠幸运加成只需1-2个四叶草即可稳稳保底20点神装！' : 'Only dice roll 20 guarantees Orange/Yellow Legacy drops. Only spend clovers when the initial roll is 17-19 to easily hit 20.'}</li>
            <li><strong>${isRu ? 'Смотрите на спрайты монстров:' : isCn ? '怪物穿什么就掉什么:' : 'Visual Monster Gear:'}</strong> ${isRu ? 'Какая экипировка визуально надета на спрайте монстра на клетке карты — именно она и может выпасть после победы!' : isCn ? '地图格子上怪物身上穿戴展示的是什么装备，击败后就会掉落该特定装备！' : 'The actual gear sprite visible on the enemy tile is exactly what can drop from that fight!'}</li>
            <li><strong>${isRu ? 'Экстра-дроп в Бездне (Abyss):' : isCn ? '深渊额外掉落加成:' : 'Abyss Extra Drops:'}</strong> ${isRu ? '• <strong>Бездна 20+ (Abyss 20+):</strong> +1 дополнительный предмет дропа.<br>• <strong>Бездна 40+ (Abyss 40+):</strong> +2 дополнительных предмета дропа.' : isCn ? '• <strong>深渊20+层：</strong>战后额外多掉落1件装备。<br>• <strong>深渊40+层：</strong>战后额外多掉落2件装备。' : '• <strong>Abyss 20+:</strong> +1 extra gear drop.<br>• <strong>Abyss 40+:</strong> +2 extra gear drops.'}</li>
          </ul>
        </div>

        <!-- 7. Talent Fruit Pity, Duplication & Transfer -->
        <div class="guide-card" id="tips-talents" style="border-left: 4px solid #14b8a6; scroll-margin-top: 80px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 8px;">
            <h3 style="color: #14b8a6; display: flex; align-items: center; gap: 8px; margin: 0;">
              <span>🧬</span>
              <span>${isRu ? '7. Плоды Таланта: Скрытый Гарант (Wishlist Pity) и Секрет Дублирования Эксклюзивов' : isCn ? '7. 天赋果实心愿保底机制与专属天赋转移/复制秘籍' : '7. Talent Fruit Wishlist Pity, Transfer & Duplication Guide'}</span>
            </h3>
            <button class="guide-copy-link-btn" onclick="GuidesView.copyGuideLink('tips-talents', this)" title="${isRu ? 'Скопировать прямую ссылку на этот подраздел' : 'Copy direct link to this sub-section'}">
              <span class="link-icon">🔗</span>
              <span class="link-text">${isRu ? 'Ссылка' : 'Share'}</span>
            </button>
          </div>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Скрытая математика гаранта (Wishlist Pity):' : isCn ? '心愿天赋保底递增公式:' : 'Wishlist Pity Formula:'}</strong> ${isRu ? 'Шанс на целевой золотой талант из Wishlist начинает расти <strong>ТОЛЬКО ПОСЛЕ 50 золотых талантов-промахов</strong>. С 51-го ролла шанс растет на <strong>+5% за каждый последующий золотой реролл</strong> (на 70-м золотом таланте достигается 100% гарант).' : isCn ? '心愿金天赋的保底概率<strong>只有在连续歪掉50个非心愿金天赋后才开始递增</strong>。从第51个金天赋开始，每次洗练概率递增<strong>+5%</strong>，第70个金天赋必定100%出心愿目标！' : 'Pity chance begins increasing ONLY after 50 non-wishlist gold talents. From roll 51 onwards, chance increases by +5% per gold reroll, hitting 100% hard pity at roll 70.'}</li>
            <li><strong>${isRu ? 'Сборка идеальных 4 слотов:' : isCn ? '四金天赋标准养成法:' : '4-Slot Gold Method:'}</strong> ${isRu ? 'Сначала крутите 1-ю страницу до открытия <strong>4 любых золотых слотов</strong> (неважно, какие таланты). Затем выбивайте нужные эксклюзивы на донорах и переносите их за 200 кристаллов.' : isCn ? '先在第1页洗出<strong>任意4个金色天赋槽位</strong>（无需在意词条好坏）。然后在其他狗粮角色身上洗出极品专属天赋，消耗200钻石转移至主力身上覆盖。' : 'First reroll Page 1 until you have 4 random gold slots. Then roll target exclusives on donor units and transfer them across for 200 gems.'}</li>
            <li><strong>${isRu ? 'Секрет дублирования (2x–4x одинаковых эксклюзивов):' : isCn ? '多重专属天赋同页叠加技巧:' : 'Talent Duplication Secret:'}</strong> ${isRu ? 'Реролл не дает выбить два одинаковых таланта на одной странице, но <strong>Перенос талантов игнорирует это правило</strong>! Чтобы получить 2+ копии собственного эксклюзива: откройте 2-ю страницу ➔ выбейте эксклюзив ➔ перенесите на донора ➔ перенесите с донора обратно на 1-ю страницу!' : isCn ? '常规洗练无法在同页洗出同名天赋，但<strong>【天赋转移】完全不受该限制</strong>！若想让角色拥有双重自身专属天赋：开启第2页天赋 ➔ 在第2页洗出自身专属 ➔ 转移给中介角色 ➔ 再从中介转回第1页，实现多重专属暴力叠加！' : 'Regular rerolling forbids dupes on one page, but <strong>Talent Transfer bypasses this rule</strong>! Use Page 2 -> donor -> Page 1 to stack multiple copies of the same top exclusive!'}</li>
            <li><strong>${isRu ? 'Фарм плодов (Ручной vs Блиц):' : isCn ? '果实刷取效率最大化:' : 'Fruit Farming Optimization:'}</strong> ${isRu ? '• <em>Ручной фарм:</em> бейте <strong>только фиолетовых и золотых врагов</strong> (максимум плодов на 1 энергии).<br>• <em>Блиц 10x (500 энергии):</em> дает ~360 плодов в неделю + горы клевера и прокачку всей экипировки региона.' : isCn ? '• <em>手动攻坚：</em>只打<strong>紫色与金色精英怪</strong>（每点体力果实产出率最高）。<br>• <em>10连扫荡(500体力)：</em>每周稳定产出约360果实，兼顾大量四叶草与全图装备升星。' : '• <em>Manual:</em> Target only purple & gold enemies for peak fruit-per-stamina.<br>• <em>10x Blitz:</em> Yields ~360 fruits/week plus tons of clovers and whole-map star upgrades.'}</li>
          </ul>
        </div>
      </div>
    `;
  },

  // 1. Battle Phases


    getPhasesRU() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">⚔️ Порядок ходов и Фазы действий (Action Lifecycle)</h2>
        <p class="guide-lead">Боевая система Guild of Monster Girls делится на строгие фазы с четкими триггерами входа и выхода.</p>

        <div class="guide-flowchart">
          <div class="flow-step">🏁 <strong>Battle Start</strong> (Срабатывает экипировка, старт маны)</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">🔄 <strong>Turn Start</strong> (Раунд 1–10, тики дебаффов, подготовка защиты)</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">⚡ <strong>Speed / Mana Check</strong> ➔ <span class="badge-accent">Extra Actions (при 100% мане)</span></div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">🏃 <strong>Natural Turn</strong> (Естественный ход по скорости Speed)</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">🎯 <strong>Action Flow</strong> (Action Start ➔ Hit Phase ➔ After Phase ➔ Action End)</div>
        </div>

        <div class="guide-card">
          <h3>📌 Ключевые фазы и их особенности:</h3>
          <ul class="guide-list">
            <li><strong>Battle Start (Старт боя):</strong> Срабатывает 1 раз в самом начале. Персонажи не ходят — активируются стартовые пассивки и экипировка. Если героиня сразу набирает максимум маны, она получает <em>Extra Action (Внеочередной ход)</em> перед первым естественным ходом.</li>
            <li><strong>Turn Start (Начало раунда):</strong> Срабатывает в начале каждого из 10 раундов. Эффекты с пометкой <em>"At turn start"</em> сгорают в конце текущего раунда.</li>
            <li><strong>Natural Turn (Естественный ход):</strong> Очередность определяется скоростью (SPD). Может быть перебита внеочередным действием с максимальной маной.</li>
            <li><strong>Цепочка удара атаки:</strong> <code>Action Start</code> ➔ <code>Basic Attack Hit</code> ➔ <code>Basic Attack After</code> ➔ <code>Follow-up Hit</code> ➔ <code>Follow-up After</code> ➔ <code>Action End</code>.</li>
          </ul>
        </div>
      </div>
    `;
  },

  getPhasesEN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">⚔️ Turn Order & Action Lifecycle</h2>
        <p class="guide-lead">The combat system in Guild of Monster Girls operates in strictly defined sequential phases.</p>

        <div class="guide-flowchart">
          <div class="flow-step">🏁 <strong>Battle Start</strong> (Gear triggers, initial MP distribution)</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">🔄 <strong>Turn Start</strong> (Round 1–10, debuff decay, defense setups)</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">⚡ <strong>Speed / Mana Check</strong> ➔ <span class="badge-accent">Extra Actions (at Max MP)</span></div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">🏃 <strong>Natural Turn</strong> (Turn order resolved by SPD)</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">🎯 <strong>Action Flow</strong> (Action Start ➔ Hit Phase ➔ After Phase ➔ Action End)</div>
        </div>

        <div class="guide-card">
          <h3>📌 Phase Rules & Mechanics:</h3>
          <ul class="guide-list">
            <li><strong>Battle Start:</strong> Triggers once before any action. Gear passives and starting MP fire. If MP reaches maximum, the heroine earns an <em>Extra Action</em> prior to the natural turn sequence.</li>
            <li><strong>Turn Start:</strong> Triggers at the beginning of each round (up to 10 rounds). <em>"At turn start"</em> buffs expire at the end of the round.</li>
            <li><strong>Natural Turn:</strong> Resolved strictly by Speed. Interrupted whenever an Extra Action is ready.</li>
            <li><strong>Hit Sequence:</strong> <code>Action Start</code> ➔ <code>Basic Attack Hit</code> ➔ <code>Basic Attack After</code> ➔ <code>Follow-up Hit</code> ➔ <code>Follow-up After</code> ➔ <code>Action End</code>.</li>
          </ul>
        </div>
      </div>
    `;
  },

  getPhasesCN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">⚔️ 战斗阶段与行动顺序 (Battle Lifecycle)</h2>
        <p class="guide-lead">《魔物娘公会》的战斗流程分为严格的阶段与触发点。</p>

        <div class="guide-flowchart">
          <div class="flow-step">🏁 <strong>Battle Start (战斗开始)</strong> (装备开场被动、初始能量判定)</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">🔄 <strong>Turn Start (回合开始)</strong> (1–10回合开始，状态结算，防御准备)</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">⚡ <strong>Speed / Mana Check</strong> ➔ <span class="badge-accent">Extra Action (满蓝插队行动)</span></div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">🏃 <strong>Natural Turn (自然行动)</strong> (按速度SPD排序)</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step">🎯 <strong>Action Flow (行动结算)</strong> (Action Start ➔ 攻击命中 ➔ 追击 ➔ 结束)</div>
        </div>

        <div class="guide-card">
          <h3>📌 核心规则：</h3>
          <ul class="guide-list">
            <li><strong>战斗开始阶段：</strong> 触发装备开场效果。若直接获得满蓝，将在自然第一回合前获得<strong>额外插队行动 (Extra Action)</strong>。</li>
            <li><strong>攻击打击链：</strong> <code>Action Start</code> ➔ <code>普攻命中</code> ➔ <code>普攻后判定</code> ➔ <code>追击命中</code> ➔ <code>追击后判定</code> ➔ <code>行动结束</code>。</li>
          </ul>
        </div>
      </div>
    `;
  },

  // 2. Targeting & Range
  getTargetingRU() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🎯 Дистанция, Позиционирование и Таргетинг</h2>
        <p class="guide-lead">В игре действует строгая поклеточная система дистанции (Range) и приоритетов целей.</p>

        <div class="guide-card">
          <h3>📐 Схема поля боя (6 позиций в ряду):</h3>
          <div class="battlefield-grid">
            <div class="grid-side ally">
              <span class="grid-cell">Союзник 0 (Тыл)</span>
              <span class="grid-cell">Союзник 1 (Центр)</span>
              <span class="grid-cell">Союзник 2 (Авангард)</span>
            </div>
            <div class="grid-vs">VS</div>
            <div class="grid-side enemy">
              <span class="grid-cell">Враг 3 (Авангард)</span>
              <span class="grid-cell">Враг 4 (Центр)</span>
              <span class="grid-cell">Враг 5 (Тыл)</span>
            </div>
          </div>
          <p style="font-size: 13px; color: var(--text-secondary); margin-top: 10px;">
            * Базовая дистанция = 1. Каждый персонаж между вами и целью (включая саму клетку цели) добавляет +1 к требуемому значению <strong>Range</strong>.
          </p>
        </div>

        <div class="guide-card">
          <h3>🎯 Правила выбора целей (Targeting Rules):</h3>
          <ul class="guide-list">
            <li><strong>Ближайший враг (Nearest):</strong> Атакует ближайшую занятую позицию. Воины бьют в Range 1 (Авангард).</li>
            <li><strong>Дальний враг (Furthest):</strong> Атакует самую дальнюю занятую позицию. Требует Range 4–5 (Стрелки / Маги).</li>
            <li><strong>Наименьшее HP (Lowest HP):</strong> Выбирает цель с наименьшим текущим здоровьем. Приоритетно добивает ослабленных врагов.</li>
            <li><strong>Наивысшая Атака (Highest ATK):</strong> Фокусирует главного вражеского дамагера.</li>
          </ul>
        </div>
      </div>
    `;
  },

  getTargetingEN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🎯 Range, Distance & Targeting System</h2>
        <p class="guide-lead">Combat positioning operates on a strict cell-based distance and target priority calculation.</p>

        <div class="guide-card">
          <h3>📐 Battlefield Positioning (6 Slots):</h3>
          <div class="battlefield-grid">
            <div class="grid-side ally">
              <span class="grid-cell">Ally 0 (Back)</span>
              <span class="grid-cell">Ally 1 (Mid)</span>
              <span class="grid-cell">Ally 2 (Front)</span>
            </div>
            <div class="grid-vs">VS</div>
            <div class="grid-side enemy">
              <span class="grid-cell">Enemy 3 (Front)</span>
              <span class="grid-cell">Enemy 4 (Mid)</span>
              <span class="grid-cell">Enemy 5 (Back)</span>
            </div>
          </div>
          <p style="font-size: 13px; color: var(--text-secondary); margin-top: 10px;">
            * Base distance is 1. Each character standing between you and the target adds +1 to the required <strong>Range</strong>.
          </p>
        </div>

        <div class="guide-card">
          <h3>🎯 Targeting Conditions:</h3>
          <ul class="guide-list">
            <li><strong>Nearest Target:</strong> Attacks the closest active slot (Range 1 for Melee/Warriors).</li>
            <li><strong>Furthest Target:</strong> Targets the rear-most enemy (Range 4–5 for Archers/Mages).</li>
            <li><strong>Lowest HP:</strong> Prioritizes the lowest current health enemy for execute finishes.</li>
            <li><strong>Highest ATK:</strong> Directly targets the enemy with the highest attack stat.</li>
          </ul>
        </div>
      </div>
    `;
  },

  getTargetingCN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🎯 攻击距离与目标选择规则</h2>
        <p class="guide-lead">战场站位采用格子距离计算（Range 1–5）与目标优先级判定。</p>

        <div class="guide-card">
          <h3>📐 战场6格站位图解：</h3>
          <div class="battlefield-grid">
            <div class="grid-side ally">
              <span class="grid-cell">我方后排 (0)</span>
              <span class="grid-cell">我方中排 (1)</span>
              <span class="grid-cell">我方前锋 (2)</span>
            </div>
            <div class="grid-vs">VS</div>
            <div class="grid-side enemy">
              <span class="grid-cell">敌方前锋 (3)</span>
              <span class="grid-cell">敌方中排 (4)</span>
              <span class="grid-cell">敌方后排 (5)</span>
            </div>
          </div>
        </div>

        <div class="guide-card">
          <h3>🎯 索敌条件：</h3>
          <ul class="guide-list">
            <li><strong>最近目标 (Nearest)：</strong> 优先攻击最前排（战士默认距离1）。</li>
            <li><strong>最远目标 (Furthest)：</strong> 优先锁定敌方后排核心（射手/法师技能）。</li>
            <li><strong>最低生命值 (Lowest HP)：</strong> 智能斩杀残血目标。</li>
          </ul>
        </div>
      </div>
    `;
  },

// 3. Damage, Shields & Full Keywords Database (KeywordDataTable)
  getDamageContent(lang = "RU") {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const allKeywords = (typeof App !== 'undefined' && App.state?.keywords && App.state.keywords.length > 0) 
      ? App.state.keywords 
      : (this.defaultKeywords || []);

    const activeFilter = this.keywordsFilter || 'all';
    const searchQuery = (this.keywordsSearchQuery || '').toLowerCase().trim();

    const filteredKeywords = allKeywords.filter(kw => {
      if (activeFilter !== 'all' && kw.cat !== activeFilter) return false;
      if (searchQuery) {
        const name = (kw.name?.[lang] || kw.name?.RU || '').toLowerCase();
        const desc = (kw.desc?.[lang] || kw.desc?.RU || '').toLowerCase();
        const code = (kw.code || kw.key || '').toLowerCase();
        if (!name.includes(searchQuery) && !desc.includes(searchQuery) && !code.includes(searchQuery)) {
          return false;
        }
      }
      return true;
    });

    const filterLabels = {
      all: isRu ? `Все эффекты (${allKeywords.length})` : isCn ? `全部状态 (${allKeywords.length})` : `All (${allKeywords.length})`,
      buff: isRu ? '🟢 Усиления (Баффы)' : isCn ? '🟢 正面增益' : '🟢 Buffs',
      debuff: isRu ? '🔴 Ослабления (Дебаффы)' : isCn ? '🔴 负面减益' : '🔴 Debuffs',
      control: isRu ? '💫 Контроль' : isCn ? '💫 控制状态' : '💫 Controls',
      instant: isRu ? '⚡ Мгновенные' : isCn ? '⚡ 即时效果' : '⚡ Instants',
      mechanic: isRu ? '⚙️ Механики' : isCn ? '⚙️ 战斗机制' : '⚙️ Mechanics'
    };

    return `
      <div class="guide-article">
        <h2 class="guide-title">🛡️ ${isRu ? 'Урон, Защита и Интерактивный справочник Баффов' : isCn ? '伤害公式、护盾减免与全状态增益指南' : 'Damage Formulas, Shields & Buffs'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Полный справочник всех 83 боевых статусов, баффов, дебаффов и формул расчёта урона. Кликните по любой карточке для открытия подробного окна с героями и предметами!' 
            : isCn 
            ? '全83种战斗状态、增益、减益与伤害计算公式完整指南。点击任意状态卡片可打开关联角色与装备的详情弹窗！' 
            : 'Comprehensive reference of all 83 combat statuses, buffs, debuffs, and damage formulas. Click any card to open detailed heroine and gear associations!'}
        </p>

        <!-- Formulas Section -->
        <div class="guide-card" style="border-left: 4px solid #38bdf8;">
          <h3 style="color: #38bdf8; display: flex; align-items: center; gap: 8px;">
            <span>📐</span>
            <span>${isRu ? '1. Формулы урона, Защиты и Пробития' : isCn ? '1. 伤害构成与攻防差值公式' : '1. Damage Formulas & Stat Checks'}</span>
          </h3>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Прямой урон (Direct DMG):' : isCn ? '直接伤害:' : 'Direct DMG:'}</strong> ${isRu ? '<code>Урон = Базовый урон + max(0, (АТК - ЗАЩ) / 5)</code>. Каждые 5 единиц разницы между АТК атакующего и ЗАЩ цели добавляют 1 ед. чистого урона.' : isCn ? '<code>伤害 = 基础伤害 + max(0, (攻击 - 防御) / 5)</code>。攻防差值每高出5点，额外提升1点伤害。' : '<code>DMG = Base DMG + max(0, (ATK - DEF) / 5)</code>. Every 5 points difference between ATK and DEF adds 1 pure damage.'}</li>
            <li><strong>${isRu ? 'Многоударные серии:' : isCn ? '多段伤害机制:' : 'Multi-hit DMG:'}</strong> ${isRu ? 'Баффы урона (Жажда крови) и щиты (Щит) применяются к <em>каждому отдельному удару</em> серии!' : isCn ? '热血增伤与防护抵扣均对多段攻击的<em>每一击</em>生效！' : 'Bloodlust DMG boost and Shield reduction apply to <em>each hit</em> in a multi-hit sequence!'}</li>
          </ul>
        </div>

        <!-- Interactive Buffs & Statuses Catalog -->
        <div style="margin-top: 24px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 14px;">
            <div style="font-size: 18px; font-weight: 800; color: #ffffff; display: flex; align-items: center; gap: 8px;">
              <span>✨</span>
              <span>${isRu ? 'Интерактивный справочник статусов' : isCn ? '状态与增益图鉴' : 'Interactive Status Catalog'} (${filteredKeywords.length})</span>
            </div>
            
            <div style="position: relative; min-width: 220px; flex: 1; max-width: 320px;">
              <input type="text" 
                     id="keywordSearchInput" 
                     placeholder="${isRu ? '🔍 Поиск по названию/описанию...' : isCn ? '🔍 搜索状态或效果...' : '🔍 Search buffs/mechanics...'}" 
                     value="${this.escapeHtml(this.keywordsSearchQuery || '')}"
                     oninput="GuidesView.setKeywordsSearch(this.value)"
                     style="width: 100%; padding: 8px 12px; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: var(--radius-sm); color: #ffffff; font-size: 13px;">
            </div>
          </div>

          <!-- Category Filter Pills -->
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
            ${['all', 'buff', 'debuff', 'control', 'instant', 'mechanic'].map(catKey => `
              <button class="filter-pill ${activeFilter === catKey ? 'active' : ''}" 
                      onclick="GuidesView.setKeywordsFilter('${catKey}')"
                      style="padding: 6px 12px; font-size: 12.5px; font-weight: 700; cursor: pointer;">
                ${filterLabels[catKey]}
              </button>
            `).join('')}
          </div>

          <!-- Buff Cards Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px;">
            ${filteredKeywords.map(kw => {
              const kwName = kw.name?.[lang] || kw.name?.RU || kw.id;
              const kwDesc = kw.desc?.[lang] || kw.desc?.RU || '';
              const kwCat = kw.cat || 'buff';
              const kwIcon = kw.icon || '✨';
              const relCount = (kw.related_characters?.length || 0) + (kw.related_items?.length || 0);

              return `
                <div class="buff-card" onclick="App.openBuffModal('${kw.id}')">
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span style="font-size: 24px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">${kwIcon}</span>
                      <div>
                        <div style="font-weight: 800; font-size: 14.5px; color: #ffffff;">${this.escapeHtml(kwName)}</div>
                        ${kw.code ? `<div style="font-size: 11px; color: var(--text-muted); font-family: monospace;">${kw.code}</div>` : ''}
                      </div>
                    </div>
                    <span class="buff-cat-badge buff-cat-${kwCat}">${kwCat.toUpperCase()}</span>
                  </div>

                  <div style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.45; max-height: 54px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                    ${this.escapeHtml(kwDesc)}
                  </div>

                  <div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 11px; color: var(--text-muted);">
                    <span>${kw.element && kw.element !== 'Neutral' ? `✨ ${this.escapeHtml(kw.element)}` : '⚡ Статус'}</span>
                    <span style="color: #c084fc; font-weight: 700;">${relCount > 0 ? `👑 ${relCount} связей ➔` : 'Подробнее ➔'}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  },

    // 4. Elements & Team Building
  getElementsRU() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">✨ Стихии, Боевые роли и Синергии отряда</h2>

        <div class="guide-card">
          <h3>🔥 Колесо стихий:</h3>
          <div class="elements-wheel-box">
            <div class="element-chain">
              <span class="elem-badge elem-fire">🔥 Огонь</span> ➔
              <span class="elem-badge elem-wind">🌪️ Ветер</span> ➔
              <span class="elem-badge elem-earth">⛰️ Земля</span> ➔
              <span class="elem-badge elem-water">💧 Вода</span> ➔
              <span class="elem-badge elem-fire">🔥 Огонь</span>
            </div>
            <div class="element-light-dark">
              <span class="elem-badge elem-light">☀️ Свет</span> ⚔️ Взаимный бонус ⚔️ <span class="elem-badge elem-dark">🌑 Тьма</span>
            </div>
          </div>
          <p style="font-size: 13px; color: var(--text-secondary); margin-top: 10px;">
            * Преимущество по стихии дает <strong>+30% к наносимому урону</strong> и снижает входящий урон.
          </p>
        </div>

        <div class="guide-card">
          <h3>⚔️ Формирование сбалансированного отряда:</h3>
          <ul class="guide-list">
            <li><strong>Авангард (Front):</strong> 1 Танк (Warrior / High HP & Tenacity) с защитными сетами для перехвата урона.</li>
            <li><strong>Центр (Mid):</strong> 1 Поддержка / Саппорт (Buffer / Mana Battery) + 1 Главный DPS.</li>
            <li><strong>Тыл (Back):</strong> 1 Дальний DPS (Archer / Mage) + 1 Лекарь (Healer) для очищения дебаффов и поддержания здоровья.</li>
          </ul>
        </div>
      </div>
    `;
  },

  getElementsEN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">✨ Elements, Combat Roles & Team Synergies</h2>

        <div class="guide-card">
          <h3>🔥 Elemental Affinity Wheel:</h3>
          <div class="elements-wheel-box">
            <div class="element-chain">
              <span class="elem-badge elem-fire">🔥 Fire</span> ➔
              <span class="elem-badge elem-wind">🌪️ Wind</span> ➔
              <span class="elem-badge elem-earth">⛰️ Earth</span> ➔
              <span class="elem-badge elem-water">💧 Water</span> ➔
              <span class="elem-badge elem-fire">🔥 Fire</span>
            </div>
            <div class="element-light-dark">
              <span class="elem-badge elem-light">☀️ Light</span> ⚔️ Mutual Advantage ⚔️ <span class="elem-badge elem-dark">🌑 Dark</span>
            </div>
          </div>
          <p style="font-size: 13px; color: var(--text-secondary); margin-top: 10px;">
            * Elemental advantage grants <strong>+30% bonus damage</strong> and decreases received damage.
          </p>
        </div>

        <div class="guide-card">
          <h3>⚔️ Standard Lineup Composition:</h3>
          <ul class="guide-list">
            <li><strong>Front Row:</strong> 1 Main Tank (Warrior / High HP & Tenacity) with damage interception gear.</li>
            <li><strong>Middle Row:</strong> 1 Support / Buffer (Mana Battery / CC) + 1 Primary DPS.</li>
            <li><strong>Back Row:</strong> 1 Ranged DPS (Archer / Mage) + 1 Dedicated Healer (Cleanse & Sustain).</li>
          </ul>
        </div>
      </div>
    `;
  },

  getElementsCN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">✨ 元素克制、定位与阵容搭配</h2>

        <div class="guide-card">
          <h3>🔥 四系与光暗克制关系：</h3>
          <div class="elements-wheel-box">
            <div class="element-chain">
              <span class="elem-badge elem-fire">🔥 火系</span> ➔
              <span class="elem-badge elem-wind">🌪️ 风系</span> ➔
              <span class="elem-badge elem-earth">⛰️ 地系</span> ➔
              <span class="elem-badge elem-water">💧 水系</span> ➔
              <span class="elem-badge elem-fire">🔥 火系</span>
            </div>
            <div class="element-light-dark">
              <span class="elem-badge elem-light">☀️ 光系</span> ⚔️ 相互克制 ⚔️ <span class="elem-badge elem-dark">🌑 暗系</span>
            </div>
          </div>
          <p style="font-size: 13px; color: var(--text-secondary); margin-top: 10px;">
            * 属性克制提供 <strong>+30% 额外伤害加成</strong> 与减伤效果。
          </p>
        </div>
      </div>
    `;
  },

  // 5. Gacha & Full Recruit Lists (Alter + Standard + Limited)
  getGachaContent(lang = "RU") {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const allChars = (App.state.data.characters[lang] || []);
    const charMap = {};
    allChars.forEach(c => { charMap[c.id] = c; });

    // 1. Alter & Skin Pool (All alter/skin heroines from Skin_Summon)
    const alterChars = allChars.filter(c => 
      c.banner_type === 'skin' || 
      c.banner_type === 'skin_limited' || 
      (c.skin_name && c.skin_name !== '默认外观' && c.skin_name !== 'Default Appearance' && c.skin_name !== 'Базовый облик')
    );

    // 2. Standard Pool (140 characters)
    const standardChars = allChars.filter(c => c.banner_type === 'standard');

    // 3. Limited Rate-Up Banners (2 characters)
    const limitedChars = allChars.filter(c => c.banner_type === 'limited');

    const f = this.gachaFilter;
    const showAlter = f === 'all' || f === 'alter';
    const showStandard = f === 'all' || f === 'standard';
    const showLimited = f === 'all' || f === 'limited';

    return `
      <div class="guide-article">
        <h2 class="guide-title">🎪 ${isRu ? 'Списки найма и Пулы баннеров (Gacha Pools)' : isCn ? '招募卡池与全量掉落列表' : 'Recruitment Pools & Drop Lists'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Полные официальные списки персонажей, доступных в Базовом призыве, пуле Альтер-найма и лимитированных Rate-Up баннерах. Нажмите на любого персонажа для просмотра подробностей.' 
            : isCn 
            ? '《魔物娘公会》常规招募、异化/皮肤招募与限时UP卡池全量掉落名单。点击任意角色可直接查看详细属性。' 
            : 'Complete official recruitment tables for Standard, Alter, and Limited Rate-Up summoning pools. Click any character to view full details.'}
        </p>

        <!-- Sub-filter pills for pools -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          <button class="filter-pill ${f === 'all' ? 'active' : ''}" onclick="GuidesView.setGachaFilter('all')">
            🌐 ${isRu ? 'Все пулы' : isCn ? '全部卡池' : 'All Pools'}
          </button>
          <button class="filter-pill ${f === 'alter' ? 'active' : ''}" onclick="GuidesView.setGachaFilter('alter')">
            🌌 ${isRu ? `Пул Альтер-Найма (${alterChars.length})` : isCn ? `异化招募池 (${alterChars.length})` : `Alter Pool (${alterChars.length})`}
          </button>
          <button class="filter-pill ${f === 'standard' ? 'active' : ''}" onclick="GuidesView.setGachaFilter('standard')">
            📜 ${isRu ? `Пул Стандартного Найма (${standardChars.length})` : isCn ? `常规招募池 (${standardChars.length})` : `Standard Pool (${standardChars.length})`}
          </button>
          <button class="filter-pill ${f === 'limited' ? 'active' : ''}" onclick="GuidesView.setGachaFilter('limited')">
            🔥 ${isRu ? `Лимитированные Rate-Up (${limitedChars.length})` : isCn ? `限时UP卡池 (${limitedChars.length})` : `Limited Rate-Up (${limitedChars.length})`}
          </button>
        </div>

        ${showLimited ? `
          <!-- Limited Banners Section -->
          <div class="guide-card">
            <h3>🔥 ${isRu ? 'Лимитированные Rate-Up баннеры (Limited Event Banners)' : isCn ? '限时UP专属招募活动' : 'Limited Rate-Up Event Banners'}</h3>
            <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px;">
              ${isRu 
                ? 'Эксклюзивные героини и облики, доступные только во время действия специальных сезонных событий. Имеют гарантированный повышенный шанс призыва.' 
                : isCn 
                ? '限时登场的专属强力角色与皮肤，仅在对应活动UP期间可抽取。' 
                : 'Exclusive heroines and skins available only during active event periods with featured drop rate guarantees.'}
            </p>

            ${typeof LiveTimers !== 'undefined' ? LiveTimers.renderBannerCards(lang) : ''}

            <h4 style="margin-top: 20px; font-size: 14px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">
              📋 ${isRu ? 'Список лимитированных персонажей' : isCn ? '限时卡池角色表' : 'Limited Characters Drop List'}
            </h4>
            ${this.renderGachaTable(limitedChars, lang)}
          </div>
        ` : ''}

        ${showAlter ? `
          <!-- Alter Recruit Pool Section -->
          <div class="guide-card">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
              <h3>🌌 ${isRu ? `Пул Альтер-Баннера (${alterChars.length} героинь)` : isCn ? `异化招募常驻卡池 (${alterChars.length}位角色)` : `Alter Recruitment Pool (${alterChars.length} Heroines)`}</h3>
              <span class="badge-accent">${isRu ? 'Постоянный Альтер-Баннер' : isCn ? '常驻异化卡池' : 'Permanent Alter Banner'}</span>
            </div>
            <p style="font-size: 13.5px; color: var(--text-secondary);">
              ${isRu 
                ? 'Полный пул альтернативных форм героинь и эксклюзивных обликов с измененными стихиями, уникальными пассивками и новыми талантами.' 
                : isCn 
                ? '专属异化形态与皮肤全量卡池，包含全新属性形态、专属被动与独立技能组。' 
                : 'Complete summon pool containing alternative element versions, exclusive skins, and modified talent kits.'}
            </p>
            ${this.renderGachaTable(alterChars, lang)}
          </div>
        ` : ''}

        ${showStandard ? `
          <!-- Standard Recruit Pool Section -->
          <div class="guide-card">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
              <h3>📜 ${isRu ? 'Пул Стандартного Найма (Standard Recruit Pool — 140 героинь)' : isCn ? '常规招募常驻卡池 (140位角色)' : 'Standard Recruitment Pool (140 Heroines)'}</h3>
              <span class="badge-accent">${isRu ? 'Базовый постоянный пул' : isCn ? '公会常规招募' : 'Permanent Guild Summon'}</span>
            </div>
            <p style="font-size: 13.5px; color: var(--text-secondary);">
              ${isRu 
                ? 'Базовый постоянный пул гильдии: 30 героинь ранга S, 56 ранга A, 34 ранга B и 20 ранга C.' 
                : isCn 
                ? '公会基础招募常驻池：包含 30位S阶、56位A阶、34位B阶 与 20位C阶角色。' 
                : 'Standard permanent guild summon pool: 30 S-Rank, 56 A-Rank, 34 B-Rank, and 20 C-Rank heroines.'}
            </p>
            ${this.renderGachaTable(standardChars, lang)}
          </div>
        ` : ''}
      </div>
    `;
  },

  renderGachaTable(chars, lang = "RU") {
    if (!chars || chars.length === 0) {
      return `<div style="color: var(--text-muted); font-style: italic; padding: 12px 0;">—</div>`;
    }

    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const imgMap = App.state.imageMappings?.characters || {};

    const tierWeight = { 'SS': 5, 'S': 4, 'A': 3, 'B': 2, 'C': 1 };
    const sorted = [...chars].sort((a, b) => {
      const diff = (tierWeight[b.rarity_tier] || 0) - (tierWeight[a.rarity_tier] || 0);
      if (diff !== 0) return diff;
      return String(a.name).localeCompare(String(b.name));
    });

    return `
      <div class="guide-table-wrapper" style="margin-top: 10px;">
        <table class="guide-table">
          <thead>
            <tr>
              <th>${isRu ? 'Героиня' : isCn ? '角色' : 'Heroine'}</th>
              <th>ID</th>
              <th>${isRu ? 'Ранг' : isCn ? '品阶' : 'Tier'}</th>
              <th>${isRu ? 'Стихия' : isCn ? '元素' : 'Element'}</th>
              <th>${isRu ? 'Класс' : isCn ? '职业' : 'Class'}</th>
              <th>${isRu ? 'Раса' : isCn ? '种族' : 'Race'}</th>
            </tr>
          </thead>
          <tbody>
            ${sorted.map(c => {
              const tierClass = `tier-${(c.rarity_tier || 'C').toLowerCase()}`;
              const elemClass = CharactersView.getElementClass(c.element);
              const portrait = imgMap[c.id] || imgMap[c.key] || `assets/img/characters/${c.id}_1__single_part1_1@1.png`;

              return `
                <tr class="gacha-table-row" onclick="App.openCharacterModal('${c.id}')" title="${isRu ? 'Нажмите, чтобы открыть карточку персонажа' : isCn ? '点击查看角色详情' : 'Click to view details'}" style="cursor: pointer;">
                  <td style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 36px; height: 36px; border-radius: 6px; overflow: hidden; background: #0f172a; border: 1px solid var(--border-subtle); flex-shrink: 0;">
                      <img src="${portrait}" alt="${c.name}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                      <span style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; font-size: 16px;">🐉</span>
                    </div>
                    <div>
                      <strong style="color: #f3e8ff;">${c.name}</strong>
                      ${c.skin_name && c.skin_name !== '默认外观' && c.skin_name !== 'Default Appearance' && c.skin_name !== 'Базовый облик' ? `<span class="char-skin-badge" style="font-size: 11px; margin-left: 4px;">[${c.skin_name}]</span>` : ''}
                    </div>
                  </td>
                  <td style="font-family: monospace; font-size: 11.5px; color: var(--text-muted);">${c.id}</td>
                  <td><span class="tier-badge ${tierClass}">${c.rarity_tier}★</span></td>
                  <td><span class="tag-badge ${elemClass}">✨ ${c.element || ''}</span></td>
                  <td><span class="tag-badge">🛡️ ${c.class || ''}</span></td>
                  <td><span class="tag-badge">🧬 ${c.creature_type || ''}</span></td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  // 6. Game Events & Activities List
  getEventsContent(lang = "RU") {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const charMap = {};
    (App.state.data.characters[lang] || []).forEach(c => { charMap[c.id] = c; });
    const imgMap = App.state.imageMappings?.characters || {};

    const eventsData = [
      {
        id: "activity_1",
        code: "HD00001",
        icon: "🎁",
        name: isRu ? "Бонус первого набора" : isCn ? "首充赠礼" : "First Pack Bonus",
        type: isRu ? "Бессрочно" : isCn ? "永久" : "Permanent",
        typeCategory: "permanent",
        start: "",
        end: "",
        rewardRole: null,
        desc: isRu ? "Совершите любую первую покупку в гильдии и получайте щедрые наборы наград в течение 3 дней!" : isCn ? "任意充值即可连续领取三天超值好礼！" : "Make any first purchase and claim valuable rewards for 3 days!"
      },
      {
        id: "activity_2",
        code: "HD00002",
        icon: "📅",
        name: isRu ? "Ежедневный вход" : isCn ? "每日签到" : "Daily Check-In",
        type: isRu ? "Бессрочно" : isCn ? "永久" : "Permanent",
        typeCategory: "permanent",
        start: "",
        end: "",
        rewardRole: null,
        desc: isRu ? "Заходите в игру каждый день и получайте кристаллы, свитки призыва и ресурсы развития гильдии!" : isCn ? "每日登录公会即可领取专属福利与召唤卷轴！" : "Log in daily to claim crystals, summon scrolls, and growth resources!"
      },
      {
        id: "activity_3",
        code: "HD00003",
        icon: "⚔️",
        name: isRu ? "Гайд по данным (Боевой пропуск)" : isCn ? "情报指南 (战令)" : "Intel Guide (Battle Pass)",
        type: isRu ? "Боевой пропуск" : isCn ? "战令" : "Battle Pass",
        typeCategory: "limited",
        start: "2026/08/12 21:00",
        end: "2026/09/23 21:00",
        rewardRole: "M11304_001",
        desc: isRu ? "Выполняйте задания боевого пропуска и разблокируйте эксклюзивную героиню ранга S — Альтер Святую саблю!" : isCn ? "购买解锁进阶指南，即可获取专属异化圣剑之灵角色与丰厚奖励！" : "Complete battle pass quests to unlock the exclusive S-tier Alter Holy Blade heroine!"
      },
      {
        id: "activity_4",
        code: "HD00004",
        icon: "🎯",
        name: isRu ? "7-дневное задание новичка" : isCn ? "七日挑战" : "7-Day Quest",
        type: isRu ? "Для новичков" : isCn ? "新手" : "Novice",
        typeCategory: "permanent",
        start: "",
        end: "",
        rewardRole: "M11005_001",
        desc: isRu ? "Завершите цепочку 7-дневных миссий и бесплатно получите Пчелу-воительницу и ценные ресурсы прокачки." : isCn ? "完成七日新手系列任务，免费领取黄蜂魔女与大量养成资源。" : "Complete the 7-day novice mission series to receive the Bee Warrior heroine and upgrade resources for free."
      },
      {
        id: "activity_5",
        code: "HD00005",
        icon: "❄️",
        name: isRu ? "Исекай-рейд: Вторжение из другого мира" : isCn ? "异界入侵" : "Isekai Raid: Otherworld Invasion",
        type: isRu ? "Рейд / Лимит" : isCn ? "限时副本" : "Raid / Limited",
        typeCategory: "limited",
        start: "2026/08/12 21:00",
        end: "2026/09/23 21:00",
        rewardRole: null,
        desc: isRu ? "Сражайтесь с рейдовыми боссами из другого мира, собирайте Исекай-кристаллы льда и обменивайте их в Магазине ивента на легендарную экипировку и реликвии!" : isCn ? "挑战异界入侵首领，收集异界冰晶，在专属异界商店中兑换顶级装备与强力信物！" : "Battle otherworld raid bosses, collect Isekai Ice Crystals, and exchange them in the event shop for top-tier gear and relics!"
      },
      {
        id: "activity_6",
        code: "HD00006",
        icon: "🏆",
        name: isRu ? "Исекай-испытание" : isCn ? "异界挑战" : "Isekai Challenge",
        type: isRu ? "Лимит" : isCn ? "限时" : "Limited",
        typeCategory: "limited",
        start: "2026/08/12 21:00",
        end: "2026/09/23 21:00",
        rewardRole: null,
        desc: isRu ? "Проходите сложные этапы испытаний с модификаторами и получайте редкие сундуки и алмазы." : isCn ? "挑战高难度异界关卡，达成通关目标获取珍稀宝箱与钻石。" : "Conquer high-difficulty challenge stages with special battle modifiers to earn rare chests and diamonds."
      },
      {
        id: "activity_7",
        code: "HD00007",
        icon: "👑",
        name: isRu ? "Испытание на вершине (Рейтинг арены)" : isCn ? "巅峰赛" : "Peak Challenge (Arena Championship)",
        type: isRu ? "Лимит / PvP" : isCn ? "巅峰竞技" : "Peak PvP",
        typeCategory: "limited",
        start: "2026/08/19 21:00",
        end: "2026/09/02 21:00",
        rewardRole: "GH20014_001",
        desc: isRu ? "Сражайтесь за высшие места в рейтинге гильдий и разблокируйте эксклюзивный облик Хозяйки гильдии и коллекционный декор!" : isCn ? "公会跨服竞技角逐，冲榜解锁专属公会会长皮肤与珍藏装饰！" : "Climb the guild rankings in cross-server arena battles to unlock the exclusive Guildmaster Skin and collector decor!"
      },
      {
        id: "activity_8",
        code: "HD00008",
        icon: "📖",
        name: isRu ? "Усиление новичка" : isCn ? "新手助力" : "Starter Boost",
        type: isRu ? "Бессрочно" : isCn ? "永久" : "Permanent",
        typeCategory: "permanent",
        start: "",
        end: "",
        rewardRole: null,
        desc: isRu ? "Повышайте уровень Кодекса гильдии и забирайте награды за каждые 5 уровней прогресса." : isCn ? "提升图鉴等级，每达成指定里程碑即可领取海量奖励。" : "Level up your guild codex to claim progression milestone rewards every 5 levels."
      },
      {
        id: "activity_9",
        code: "HD00009",
        icon: "⚙️",
        name: isRu ? "Заводной тайник" : isCn ? "机巧秘宝" : "Clockwork Trove",
        type: isRu ? "Лимит / Рулетка" : isCn ? "限时抽奖" : "Clockwork Lottery",
        typeCategory: "limited",
        start: "2026/08/26 21:00",
        end: "2026/09/09 21:00",
        rewardRole: null,
        desc: isRu ? "Тратьте заводные шестеренки в секретном автомате гильдии для выбивания супер-призов и рун." : isCn ? "消耗机巧齿轮开启神秘机巧宝箱，赢取限定大奖与顶级符文。" : "Spend clockwork gears to spin the guild treasure machine for exclusive grand prizes and high-tier runes."
      },
      {
        id: "activity_10",
        code: "HD00010",
        icon: "🏰",
        name: isRu ? "Преображение гильдии" : isCn ? "公会翻新" : "Guild Makeover",
        type: isRu ? "Лимит" : isCn ? "限时" : "Limited",
        typeCategory: "limited",
        start: "2026/09/09 21:00",
        end: "2026/09/23 21:00",
        rewardRole: null,
        desc: isRu ? "Отмечайтесь и собирайте стройматериалы, чтобы украсить главное здание гильдии новым тематическим стилем!" : isCn ? "每日签到收集翻新材料，为公会大厅换上全新华丽装潢！" : "Check in and gather renovation materials to unlock stunning new visual themes for the guild hall!"
      },
      {
        id: "activity_11",
        code: "HD00011",
        icon: "🏖️",
        name: isRu ? "Прохладный отдых (Летний фестиваль)" : isCn ? "清凉假日 (夏日祭)" : "Cool Getaway (Summer Festival)",
        type: isRu ? "Сезонный" : isCn ? "夏日限定" : "Seasonal",
        typeCategory: "seasonal",
        start: "2026/04/29 21:00",
        end: "2026/05/06 21:00",
        rewardRole: null,
        desc: isRu ? "Отмечайтесь 3 дня подряд, чтобы получить пляжный купальник для героини и праздничные коктейли." : isCn ? "签到三天即可免费领取泳装魔物娘体验与专属清凉礼包！" : "Check in 3 days to receive the summer swimsuit heroine skin and festive beach treats!"
      },
      {
        id: "activity_12",
        code: "HD00012",
        icon: "🌿",
        name: isRu ? "7-дневное испытание: Альтер Ведьма земли" : isCn ? "七日挑战·大地魔女异化" : "7-Day Challenge: Alter Earth Witch",
        type: isRu ? "Лимит" : isCn ? "限时" : "Limited",
        typeCategory: "limited",
        start: "2026/05/13 21:00",
        end: "2026/07/01 21:00",
        rewardRole: "M13303_001",
        desc: isRu ? "Выполняйте задания специального фестиваля и бесплатно получите героиню ранга S — Альтер Ведьму земли!" : isCn ? "完成限时专属挑战任务，免费获取S阶强力角色【大地魔女·异化】！" : "Complete featured challenge quests to claim the S-tier Alter Earth Witch heroine for free!"
      },
      {
        id: "activity_13",
        code: "HD00013",
        icon: "💬",
        name: isRu ? "Бонус сообщества игроков" : isCn ? "玩家社群福利" : "Community Bonus",
        type: isRu ? "Бессрочно" : isCn ? "永久" : "Permanent",
        typeCategory: "permanent",
        start: "",
        end: "",
        rewardRole: null,
        desc: isRu ? "Присоединяйтесь к официальному сообществу гильдии и мгновенно получайте подарочный набор кристаллов." : isCn ? "加入官方玩家社群，立领100钻石福利礼包！" : "Join the official community channels to claim an instant bonus pack of gems!"
      },
      {
        id: "activity_14",
        code: "HD00014",
        icon: "🛶",
        name: isRu ? "Праздник драконьих лодок" : isCn ? "端午安康" : "Dragon Boat Festival",
        type: isRu ? "Сезонный" : isCn ? "节日" : "Seasonal",
        typeCategory: "seasonal",
        start: "2026/06/17 21:00",
        end: "2026/06/24 21:00",
        rewardRole: null,
        desc: isRu ? "Праздничный вход в течение 3 дней с выдачей подарочных мешков цзунцзы с редкими ресурсами." : isCn ? "端午签到三日领取传统粽子福袋，开启获得稀有道具！" : "Check in 3 days during the festival to claim traditional Zongzi gift bags packed with rare materials!"
      },
      {
        id: "activity_15",
        code: "HD00015",
        icon: "🍎",
        name: isRu ? "Щедрый урожай (Дроп талантов x2)" : isCn ? "果实丰收 (天赋果实双倍)" : "Bountiful Harvest (2x Fruit Drop)",
        type: isRu ? "Лимит / Бонус" : isCn ? "双倍掉落" : "Double Drop",
        typeCategory: "seasonal",
        start: "2026/08/12 21:00",
        end: "2026/08/19 21:00",
        rewardRole: null,
        desc: isRu ? "Во время события шанс выпадения Плодов таланта во всех режимах гильдии удваивается!" : isCn ? "活动期间所有副本中天赋果实的掉落概率翻倍！" : "Talent Fruit drop rate is doubled across all dungeon stages during the event period!"
      },
      {
        id: "activity_16",
        code: "HD00016",
        icon: "🌱",
        name: isRu ? "Рост плодов (Выходные дни)" : isCn ? "果实培育 (周末福利)" : "Fruit Cultivation (Weekend Event)",
        type: isRu ? "Бессрочно / Выходные" : isCn ? "周末" : "Weekend",
        typeCategory: "permanent",
        start: "",
        end: "",
        rewardRole: null,
        desc: isRu ? "Входите в игру 3 дня подряд в пятницу, субботу и воскресенье для получения гарантированных Плодов таланта." : isCn ? "每周五至周日连续登录，即可领取珍贵的天赋果实！" : "Log in 3 consecutive days over the weekend to claim guaranteed Talent Fruits."
      }
    ];

    const f = this.eventsFilter;
    const filteredEvents = eventsData.filter(ev => {
      if (f === 'limited') return ev.typeCategory === 'limited';
      if (f === 'permanent') return ev.typeCategory === 'permanent';
      if (f === 'seasonal') return ev.typeCategory === 'seasonal';
      return true;
    });

    return `
      <div class="guide-article">
        <h2 class="guide-title">🎁 ${isRu ? 'Список игровых событий и активностей' : isCn ? '游戏活动与限时事件全览' : 'Game Events & Activities List'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Полный справочник всех постоянных, лимитированных и сезонных событий Guild of Monster Girls с условиями участия, датами и уникальными наградами.' 
            : isCn 
            ? '《魔物娘公会》全量常驻、限时与节日活动一览表，包含开启时间、参与机制与专属限定奖励。' 
            : 'Complete overview of all permanent, limited, and seasonal events in Guild of Monster Girls, with dates, mechanics, and featured rewards.'}
        </p>

        <!-- Event Filter Buttons -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          <button class="filter-pill ${f === 'all' ? 'active' : ''}" onclick="GuidesView.setEventsFilter('all')">
            🌐 ${isRu ? 'Все события (16)' : isCn ? '全部活动 (16)' : 'All Events (16)'}
          </button>
          <button class="filter-pill ${f === 'limited' ? 'active' : ''}" onclick="GuidesView.setEventsFilter('limited')">
            🔥 ${isRu ? 'Рейды и Лимиты' : isCn ? '限时与异界副本' : 'Raids & Limited'}
          </button>
          <button class="filter-pill ${f === 'permanent' ? 'active' : ''}" onclick="GuidesView.setEventsFilter('permanent')">
            ♾️ ${isRu ? 'Постоянные' : isCn ? '常驻与新手' : 'Permanent'}
          </button>
          <button class="filter-pill ${f === 'seasonal' ? 'active' : ''}" onclick="GuidesView.setEventsFilter('seasonal')">
            🎉 ${isRu ? 'Праздники и Бонусы' : isCn ? '节日与双倍' : 'Festivals & Bonuses'}
          </button>
        </div>

        <div class="guide-cards-grid">
          ${filteredEvents.map(ev => {
            const rewardChar = ev.rewardRole ? charMap[ev.rewardRole] : null;
            const rewardImg = rewardChar ? (imgMap[rewardChar.id] || imgMap[rewardChar.key] || `assets/img/characters/${rewardChar.id}_1__single_part1_1@1.png`) : null;

            return `
              <div class="guide-card" style="display: flex; flex-direction: column; justify-content: space-between; border-left: 3px solid #8b5cf6;">
                <div>
                  <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-size: 22px;">${ev.icon}</span>
                      <div>
                        <strong style="color: #f3e8ff; font-size: 15px;">${ev.name}</strong>
                        <div style="font-family: monospace; font-size: 11px; color: var(--text-muted);">${ev.code}</div>
                      </div>
                    </div>
                    <span class="badge-accent" style="white-space: nowrap;">${ev.type}</span>
                  </div>

                  ${ev.start ? `
                    <div style="margin-bottom: 10px;">
                      <div style="font-size: 12px; color: #38bdf8; margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px;">
                        <span>📅 ${ev.start.slice(0, 10)} — ${ev.end.slice(0, 10)}</span>
                        ${typeof LiveTimers !== 'undefined' ? LiveTimers.formatBadge(ev.start, ev.end, lang) : ''}
                      </div>
                      ${typeof LiveTimers !== 'undefined' ? (() => {
                        const state = LiveTimers.getCountdownState(ev.start, ev.end);
                        if (state.status === 'active') {
                          return `
                            <div class="live-timer-progress-track" style="margin-top: 4px;" data-timer-start="${ev.start}" data-timer-end="${ev.end}">
                              <div class="live-timer-progress-fill" style="width: ${state.percent.toFixed(1)}%;"></div>
                            </div>
                          `;
                        }
                        return '';
                      })() : ''}
                    </div>
                  ` : `
                    <div style="font-size: 12px; color: #34d399; margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
                      <span>♾️</span>
                      <span>${isRu ? 'Постоянная активность' : isCn ? '永久开放' : 'Permanent Activity'}</span>
                    </div>
                  `}

                  <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin: 0;">
                    ${ev.desc}
                  </p>
                </div>

                ${rewardChar ? `
                  <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 12px; color: var(--text-muted);">${isRu ? 'Награда:' : isCn ? '专属奖励:' : 'Reward:'}</span>
                    <button class="filter-pill active" onclick="App.openCharacterModal('${rewardChar.id}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; font-size: 12px; border-radius: 6px;" title="${isRu ? 'Открыть карточку персонажа' : isCn ? '查看角色详情' : 'View character'}">
                      <img src="${rewardImg}" alt="${rewardChar.name}" style="width: 20px; height: 20px; border-radius: 4px; object-fit: cover;" onerror="this.style.display='none'">
                      <span>⭐ ${rewardChar.name}</span>
                    </button>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  // 7. Best Builds & Meta Lineups (Updated with TapTap & Community Theorycraft Meta)
  getBuildsContent(lang = "RU") {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const charMap = {};
    (App.state.data.characters[lang] || []).forEach(c => { charMap[c.id] = c; });
    const imgMap = App.state.imageMappings?.characters || {};

    const buildsData = [
      {
        id: "princess_followup",
        icon: "👑",
        name: isRu ? "Команда Преследования Принцессы (Princess Follow-up)" : isCn ? "公主追击队：超频连击吃拐流" : "Princess Follow-up: Rapid Hit Chain",
        tier: "T0 / SSS (F2P God)",
        archetype: "core",
        isF2p: true,
        tagline: isRu ? "70+ атак преследования за раунд и абсолютный снос бронированных врагов" : isCn ? "单回合70+追击次数，吃拐能力独一档，钢化怪的严父" : "70+ Follow-up attacks per round, insane buff consumption & armor shred",
        desc: isRu 
          ? "Лучшая бюджетная команда для старта. Не требует альтер-осколков, таланты легко выбиваются, наносит до 70+ атак преследования за раунд. В версии с божественными камнями получила колоссальный буст урона."
          : isCn
          ? "无异化碎片需求，天赋容易刷取，造价极其便宜。高达70+的追击次数吃拐能力独一档，在神石版本伤害飞跃，新手开荒首选。"
          : "The ultimate F2P starter team. No alter shards needed, easy talent farming, delivering 70+ follow-up strikes per turn with top-tier buff scaling.",
        lineup: [
          { rolePos: isRu ? "Центр / Главный Керри" : isCn ? "中排核心" : "Main Carry", id: "M12301", note: isRu ? "Принцесса (70+ ударов)" : isCn ? "鹰身公主 (核心追击)" : "Harpy Princess (Carry)" },
          { rolePos: isRu ? "Тыл / Лекарь-Баффер" : isCn ? "后排治疗" : "Buffer Healer", id: "M14201_001", note: isRu ? "Боевая жрица (Жажда крови)" : isCn ? "战争祭司 (热血拐)" : "War Priest (Bloodlust)" },
          { rolePos: isRu ? "Авангард / Танк" : isCn ? "前排先锋" : "Front Tank", id: "M11103_001", note: isRu ? "Варг-воительница" : isCn ? "狼灵战士" : "Warg Warrior" },
          { rolePos: isRu ? "Центр / Дебаффер" : isCn ? "中排削弱" : "Mid Debuff", id: "M12202_001", note: isRu ? "Варг-лучница (Уязвимость)" : isCn ? "狼灵射手 (易伤)" : "Warg Archer (Vulnerable)" },
          { rolePos: isRu ? "Тыл / Контроллер" : isCn ? "后排辅助" : "Back Support", id: "M13104_001", note: isRu ? "Волчица-шаманка" : isCn ? "狼族先知" : "Wolfkin Shaman" }
        ],
        sets: isRu ? "Сеты на урон преследования (Follow-up DMG), Apply Additional, шанс крита и атаку." : isCn ? "追击伤害套、附加层数提升、暴击与攻击套装。" : "Follow-up DMG sets, Apply Additional, Crit Rate, ATK.",
        pros: isRu ? "Минимальная себестоимость, сокрушает бронированных монстров, легко пересобирается в скилл-билд." : isCn ? "极低造价，克制钢化与高防怪物，后期可无缝转型技能流。" : "Extremely cheap to build, shreds armored targets, scales smoothly into lategame.",
        difficulty: isRu ? "Очень низкая (Идеально для новичков)" : isCn ? "极低 (萌新首选)" : "Very Low (Best for Starters)"
      },
      {
        id: "lucky_rabbit_farm",
        icon: "🥕",
        name: isRu ? "Счастливая Зайчиха / Гриб-Кентавр-Кот (Lucky Rabbit Farm)" : isCn ? "菇马猫幸运兔：全图速刷与掉宝王" : "Lucky Rabbit: Speed Farm & Magic Find",
        tier: "T0 (Farm King)",
        archetype: "core",
        isF2p: true,
        tagline: isRu ? "Половина всей меты игры: универсальный фарм карт и максимальный лут (MF)" : isCn ? "幻少半壁江山，兼顾极速推图与最高掉宝率" : "Half of the game meta: fastest wave clearing and highest drop rates",
        desc: isRu 
          ? "Самая популярная команда в игре («мастхэв каждого игрока»). Объединяет скоростную зачистку подземелий и повышенный шанс выпадения редкого снаряжения. Базовый талант «Удача за удачей» делает сборку очень дешевой."
          : isCn
          ? "日常刷图无可替代的绝对顶流，人手一只的含金量。兼顾刷图效率与顶级掉宝，使用普通天赋即可低成本成型。"
          : "The reigning king of everyday dungeon farming. Combines blazing wave-clear speeds with maximum Magic Find drop rates.",
        lineup: [
          { rolePos: isRu ? "Тыл / Главный Маг" : isCn ? "后排主C" : "Main Caster", id: "M13305", note: isRu ? "Великая волшебница (Кролик)" : isCn ? "魔术大师 (幸运兔)" : "Grand Magician (Rabbit)" },
          { rolePos: isRu ? "Центр / Ускоритель" : isCn ? "中排拉条" : "Mid Puller", id: "M11204", note: isRu ? "Всадница Легиона" : isCn ? "军团骑兵" : "Legion Cavalry" },
          { rolePos: isRu ? "Тыл / Золото-Фарм" : isCn ? "后排打金" : "Gold Farmer", id: "M14203", note: isRu ? "Чжаоцай (Двойное золото)" : isCn ? "招财 (双倍金币)" : "Zhaocai (Double Gold)" },
          { rolePos: isRu ? "Авангард / Танк" : isCn ? "前排肉盾" : "Frontline", id: "M11301", note: isRu ? "Командующая Легиона" : isCn ? "军团统领" : "Legion Commander" },
          { rolePos: isRu ? "Центр / Поддержка" : isCn ? "中排辅助" : "Mid Shifter", id: "M13206", note: isRu ? "Споровая ведьма" : isCn ? "孢子女巫" : "Spore Witch" }
        ],
        sets: isRu ? "Сеты на Удачу (Luck / Drop Rate), стартовую ману и урон навыков." : isCn ? "幸运套 (掉宝率)、开局能量套与技能伤害套装。" : "Luck (Magic Find), Battle Start MP, and Skill DMG sets.",
        pros: isRu ? "Безумный приток золота и предметов, мгновенная зачистка обычных карт." : isCn ? "无与伦比的资源与金币获取效率，日常推图极度顺畅。" : "Unrivaled gear farming efficiency and lightning-fast daily clearing.",
        difficulty: isRu ? "Низкая (базовая версия) / Высокая (в эндгейме с камнями удачи)" : isCn ? "低 (基础成型) / 高 (极限幸运神石)" : "Low (Base) / High (Lategame Godstones)"
      },
      {
        id: "ice_malice_fiend",
        icon: "❄️",
        name: isRu ? "Зловещая Ледяная Злодейка (Malice Ice Fiend)" : isCn ? "恶意冰邪队：无行动湮灭流" : "Malice Ice Fiend: Out-of-Turn Annihilation",
        tier: "T0 (Boss Destroyer)",
        archetype: "core",
        isF2p: true,
        tagline: isRu ? "Уничтожение врагов вообще без совершения действий при пробитии стойкости" : isCn ? "你游最高山最长河，破韧即湮灭，无需行动摧毁一切" : "Zero-action obliteration upon toughness break; the game's ultimate mechanical engine",
        desc: isRu 
          ? "Фундаментальный базис меты. При сбивании стойкости противника наносит колоссальный урон от эффекта Злобы (Malice) вне своего хода. Берется гарантированно за Камень желаний (30 дней логина)."
          : isCn
          ? "堪称幻少的底层逻辑，只要环境允许破韧，冰邪就是T0顶流，无需行动即可将敌人尽数湮灭。登陆30天通过许愿石直接免费获取。"
          : "The core mechanic benchmark of the game. Deals immense out-of-turn damage the instant an enemy's Toughness is broken.",
        lineup: [
          { rolePos: isRu ? "Тыл / Главный Дробитель" : isCn ? "后排核心" : "Main Carry", id: "M53301_001", note: isRu ? "Астральная Злодейка (Альтер)" : isCn ? "星界邪神·异化 (冰邪)" : "Astral Fiend (Alter/Ice)" },
          { rolePos: isRu ? "Центр / 3★ Поддержка" : isCn ? "中排支援" : "3-Star Supp", id: "M53301", note: isRu ? "Астральная Злодейка (Обычная)" : isCn ? "星界邪神 (普邪3星支援)" : "Astral Fiend (Base Support)" },
          { rolePos: isRu ? "Авангард / Пробиватель" : isCn ? "前排破韧" : "Shieldbreaker", id: "M51302", note: isRu ? "Рассветная драконица" : isCn ? "晨曦龙女 (破韧手)" : "Dawn Dragoness" },
          { rolePos: isRu ? "Центр / Батарейка" : isCn ? "中排回能" : "Mid Energy", id: "M24301", note: isRu ? "Безмятежная ундина" : isCn ? "宁静水灵" : "Serene Undine" },
          { rolePos: isRu ? "Тыл / Ускоритель" : isCn ? "后排辅助" : "Turn Engine", id: "M51201_001", note: isRu ? "Астральная Хранительница" : isCn ? "星界守卫·异化" : "Astral Guardian (Alter)" }
        ],
        sets: isRu ? "Сеты на пробитие стойкости (Toughness Break), сжигание маны, заморозку и урон от потери HP." : isCn ? "破韧套、抽蓝套、冰冻延长时间与生命流失增幅套装。" : "Toughness Break, MP Drain, Freeze duration, and HP Loss sets.",
        pros: isRu ? "Не зависит от ограничений маны, стирает боссов в Исекай-порталах за секунды." : isCn ? "不吃减魔减速，异界传送门攻坚天花板，成型即横扫所有地图。" : "Ignores mana-lock mechanics; shreds high-tier Otherworld portal bosses.",
        difficulty: isRu ? "Средняя (легко получается через Камень желаний)" : isCn ? "中等 (30天许愿石直接成型)" : "Medium (Free via 30-Day Wish Stone)"
      },
      {
        id: "speed_sword_immortal",
        icon: "🌸",
        name: isRu ? "Скоростной Мечник-Бессмертный (Speed Sword Immortal)" : isCn ? "加速流剑仙：直伤天花板" : "Speed Sword Immortal: Direct DMG Ceiling",
        tier: "T0 (Direct DMG Top)",
        archetype: "core",
        isF2p: false,
        tagline: isRu ? "Абсолютный рекорд прямого урона и главный фаворит Чемпионата Вершины" : isCn ? "新晋顶流，超高成长数值，当前版本的直伤天花板" : "The current pinnacle of direct multi-hit burst and Peak Tournament dominator",
        desc: isRu 
          ? "Текущий потолок прямого урона (Direct DMG Ceiling). Бешеные множители урона, сочетающие гигантскую базовую атаку и мульти-сегментные серии ударов. Самодостаточна даже без узких саппортов."
          : isCn
          ? "成长数值极其优异，伤害上限极高，兼具高基础与多段数优势，单体素质极强，是巅峰赛统治级主力。"
          : "The gold standard of direct damage output, boasting astronomical base multipliers and high multi-hit counts.",
        lineup: [
          { rolePos: isRu ? "Авангард / Соло-Керри" : isCn ? "前排主C" : "Solo Carry", id: "M51302_001", note: isRu ? "Рассветная драконица (Альтер)" : isCn ? "晨曦龙女·异化 (剑仙)" : "Dawn Dragoness (Alter)" },
          { rolePos: isRu ? "Тыл / Баффер атаки" : isCn ? "后排增攻" : "ATK Buffer", id: "M14201_001", note: isRu ? "Боевая жрица" : isCn ? "战争祭司" : "War Priest" },
          { rolePos: isRu ? "Центр / Щитовик" : isCn ? "中排护盾" : "Shielder", id: "M31202", note: isRu ? "Утраченная Эгида" : isCn ? "迷失盾灵" : "Lost Aegis" },
          { rolePos: isRu ? "Центр / Раздатчик скорости" : isCn ? "中排加速" : "Speed Buffer", id: "M12205", note: isRu ? "Шагающая по ветру" : isCn ? "风行游侠" : "Windstrider" },
          { rolePos: isRu ? "Тыл / Лекарь" : isCn ? "后排治疗" : "Healer", id: "M24301", note: isRu ? "Безмятежная ундина" : isCn ? "宁静水灵" : "Serene Undine" }
        ],
        sets: isRu ? "Сеты скорости (SPD), крит. урона, базовой атаки и Жажды крови." : isCn ? "极速套、暴击伤害、基础攻击与热血套装。" : "High SPD, Crit DMG, Base ATK, and Bloodlust sets.",
        pros: isRu ? "Невероятный взрывной урон в соло-цель, доминирует в турнире Вершины." : isCn ? "极强单体摧毁力，跨服巅峰赛首选直伤核心。" : "Unstoppable single-target burst, ideal for Peak Tournament brackets.",
        difficulty: isRu ? "Высокая (добавляется в стандартный пул через 3 месяца после батлпаса)" : isCn ? "较高 (战令首发，需等待进池)" : "High (Battle Pass debut, premium build)"
      },
      {
        id: "undefeated_ice_blade",
        icon: "⚔️",
        name: isRu ? "Непобедимый Ледяной Клинок (Undefeated Ice Blade)" : isCn ? "未战冰剑队：多段斩击吸蓝流" : "Undefeated Ice Blade: Multi-Slash Drain",
        tier: "S-Tier (Skill Warrior)",
        archetype: "core",
        isF2p: true,
        tagline: isRu ? "Многосегментные серии рубящих атак, бафф Жажды крови и вампиризм маны" : isCn ? "超帅多段斩击，吃满热血buff，五星吸魔极大降低生存压力" : "Rapid multi-slash combos, full Bloodlust synergy, and 5-star MP leech",
        desc: isRu 
          ? "Стильный воин навыков с непрерывными сериями ударов. 5-звездочная способность похищает ману противников, сводя на нет угрозу их ультимейтов."
          : isCn
          ? "技能流战士排面，完美吃满热血增伤，五星吸魔效果大幅提高全队生存，装备成型简单且毕业上限可观。"
          : "Skill-focused slashing warrior who maximizes Bloodlust buffs while siphoning enemy MP on hit.",
        lineup: [
          { rolePos: isRu ? "Авангард / Главный Мечник" : isCn ? "前排核心" : "Lead Blade", id: "M31301_001", note: isRu ? "Святая сабля (Альтер)" : isCn ? "圣剑之灵·异化 (冰剑)" : "Holy Blade (Alter)" },
          { rolePos: isRu ? "Центр / Баффер" : isCn ? "中排热血" : "Bloodlust Buff", id: "M14201", note: isRu ? "Боевая жрица" : isCn ? "战争祭司" : "War Priest" },
          { rolePos: isRu ? "Авангард / Танк" : isCn ? "前排副坦" : "Off-Tank", id: "M31202", note: isRu ? "Утраченная Эгида" : isCn ? "迷失盾灵" : "Lost Aegis" },
          { rolePos: isRu ? "Тыл / Лекарь" : isCn ? "后排治疗" : "Healer", id: "M14101", note: isRu ? "Жрица Академии" : isCn ? "学院牧师" : "Academy Priest" },
          { rolePos: isRu ? "Центр / Саб-ДПС" : isCn ? "中排副C" : "Sub-DPS", id: "M31201", note: isRu ? "Сломанная сабля" : isCn ? "破碎剑灵" : "Broken Blade" }
        ],
        sets: isRu ? "Сеты урона навыков, кражи маны, атаки и пробития брони." : isCn ? "技能伤害套、吸魔套、破甲与攻击套装。" : "Skill DMG, MP Leech, Armor Pen, ATK sets.",
        pros: isRu ? "Очень стабильный и живучий воин навыков, легкий сбор экипировки." : isCn ? "高生存多段打击，吸蓝压制敌方大招，配装平滑。" : "Reliable multi-hit burst, drains enemy skill meters, smooth gearing curve.",
        difficulty: isRu ? "Средняя" : isCn ? "中等" : "Medium"
      },
      {
        id: "deathrattle_induction",
        icon: "💀",
        name: isRu ? "Индукция Предсмертного Завещания (Deathrattle Induction)" : isCn ? "未战诱导流：999防御攻坚炸弹" : "Deathrattle Induction: 999 DEF Crusher",
        tier: "S-Tier (Niche Bossing)",
        archetype: "advanced",
        isF2p: false,
        tagline: isRu ? "Колоссальный взрыв прямого урона против боссов с 999 брони и заморозкой" : isCn ? "爆炸直伤输出，轻松应对999防护/冰冻极端减伤环境" : "Explosive direct damage designed to annihilate 999 DEF & Freeze mitigation bosses",
        desc: isRu 
          ? "Специализированная осадная пачка для уничтожения боссов со сверхвысокой броней (999 DEF). Выдает моментальный пиковый взрыв прямого урона."
          : isCn
          ? "攻坚特化配队，专克999防护与冰冻减伤词条。注意会被敌方的【安眠】特性克制，需8金天赋起步。"
          : "Specialized boss-busting formation built to overcome 999 DEF shields and harsh damage reduction affixes.",
        lineup: [
          { rolePos: isRu ? "Центр / Ядерный Керри" : isCn ? "中排主C" : "Nuke Core", id: "M31302", note: isRu ? "Великанша / Кролик" : isCn ? "核心魔偶 / 幸运兔" : "Core Golem / Rabbit" },
          { rolePos: isRu ? "Тыл / Активатор Завещания" : isCn ? "后排诱导" : "Inductor", id: "M13305", note: isRu ? "Великая волшебница" : isCn ? "魔术大师" : "Grand Magician" },
          { rolePos: isRu ? "Авангард / Танк Завещания" : isCn ? "前排遗言" : "Deathrattle Tank", id: "M41301", note: isRu ? "Призрак-капитан" : isCn ? "幽灵船长" : "Ghost Captain" },
          { rolePos: isRu ? "Центр / Усилитель" : isCn ? "中排增伤" : "Multiplier", id: "M21302", note: isRu ? "Вечная владычица" : isCn ? "无尽领主" : "Timeless Lord" },
          { rolePos: isRu ? "Тыл / Саппорт" : isCn ? "后排辅助" : "Support", id: "M43101", note: isRu ? "Заблудшая Душа" : isCn ? "迷失之魂" : "Lost Soul" }
        ],
        sets: isRu ? "Сеты Предсмертного Завещания (Deathrattle), множители урона и чистая атака." : isCn ? "遗言增伤套、未战诱导套与攻击力倍率装备。" : "Deathrattle multipliers, Induction sets, Pure ATK.",
        pros: isRu ? "Пробивает любую пассивную защиту и броню рейдовых боссов." : isCn ? "无视一切超高护甲减伤词条，秒杀特定极限 Boss。" : "Crushes ultra-armored dungeon bosses in a single rotation.",
        difficulty: isRu ? "Высокая (требует 8 золотых талантов, контрится аффиксом «Спящий»)" : isCn ? "高 (刚需8金天赋，被安眠词条克制)" : "High (Requires 8 Gold Talents; countered by Asleep affix)"
      },
      {
        id: "purify_slime_shroom_dragon",
        icon: "🍄",
        name: isRu ? "Очищение Слайм-Гриб-Дракон (Purify Slime-Shroom-Dragon)" : isCn ? "净化史菇龙：高难自驱散攻坚队" : "Purify Slime-Shroom-Dragon: Cleanse Burst",
        tier: "S-Tier (Cleanse & Burst)",
        archetype: "advanced",
        isF2p: true,
        tagline: isRu ? "Снятие баффов с боссов, очищение команды и независимый от стаков урон" : isCn ? "自带海量净化驱散，拔除敌方防御增益，攻坚能力极强" : "Massive team cleansing, strips boss defense buffs, independent damage scaling",
        desc: isRu 
          ? "Универсальный осадный сетап на предсмертных эффектах. Не боится диспелов со стороны врагов, постоянно снимает с боссов щиты и броню, восстанавливая здоровье."
          : isCn
          ? "不依赖状态层数增伤，无惧敌方驱散。自带强力净化剥离敌方防御减伤，伤害成长优秀，性价比极高。"
          : "A robust lategame team that operates on deathrattle rotations while continuously purging enemy defense buffs.",
        lineup: [
          { rolePos: isRu ? "Центр / Керри" : isCn ? "中排核心" : "Lead Nuke", id: "M23301", note: isRu ? "Королева слизней" : isCn ? "史莱姆王" : "Slime Queen" },
          { rolePos: isRu ? "Центр / Очищение" : isCn ? "中排驱散" : "Purifier", id: "M13306", note: isRu ? "Кристальная грибница" : isCn ? "水晶菇娘" : "Crystal Shroom" },
          { rolePos: isRu ? "Авангард / Дракон" : isCn ? "前排龙女" : "Dragon Front", id: "M51302", note: isRu ? "Рассветная драконица" : isCn ? "晨曦龙女" : "Dawn Dragoness" },
          { rolePos: isRu ? "Тыл / Лекарь" : isCn ? "后排治疗" : "Healer", id: "M24301", note: isRu ? "Безмятежная ундина" : isCn ? "宁静水灵" : "Serene Undine" },
          { rolePos: isRu ? "Авангард / Танк" : isCn ? "前排肉盾" : "Sustain Tank", id: "M21203", note: isRu ? "Гигантская Слизь" : isCn ? "巨大史莱姆" : "Giant Slime" }
        ],
        sets: isRu ? "Сеты очищения, базового прямого урона и регенерации HP." : isCn ? "净化套、基础直伤套与生命回复套装。" : "Cleanse sets, Base Direct DMG, HP Sustain.",
        pros: isRu ? "Идеальная выживаемость против дебафферов, высокая адаптивность к сложным модам." : isCn ? "极强生存自愈力，轻松应对各种高难词缀副本。" : "Top tier survival against heavy debuff stages and punishing modifiers.",
        difficulty: isRu ? "Средняя (базовая версия недорогая)" : isCn ? "中等 (基础造价便宜)" : "Medium (Affordable base investment)"
      },
      {
        id: "golden_maiden_20k",
        icon: "🪙",
        name: isRu ? "20,000 HP Золотая Дева (20k HP Golden Maiden)" : isCn ? "万血流黄金女：零暖机两万血开局秒杀" : "20k HP Golden Maiden: Instant Turn-0 Juggernaut",
        tier: "S-Tier (Zero Warm-up)",
        archetype: "advanced",
        isF2p: false,
        tagline: isRu ? "20,000 HP и 2000+ базового урона с 0-й секунды без прогрева" : isCn ? "开局两万血量上限，基础伤害2000+，零暖机直接启动" : "20,000 HP pool and 2000+ base ATK from turn 0 with zero ramp-up time",
        desc: isRu 
          ? "Бьет обычными атаками, преследованиями и контратаками (полный иммунитет к дебаффам маны и унынию). Металлическая раса полностью игнорирует эффекты смертельной потери HP."
          : isCn
          ? "依赖普攻、追击与反击输出，完全不受减魔与沮丧影响。金属元素种族免疫流失致死，开局数值极为恐怖。"
          : "Relies strictly on Basic, Follow-up, and Counter attacks, rendering it totally immune to mana drain and depression debuffs.",
        lineup: [
          { rolePos: isRu ? "Авангард / Джаггернаут" : isCn ? "前排核心" : "Lead Juggernaut", id: "M21301", note: isRu ? "Золотая дева (20k HP)" : isCn ? "黄金之女 (两万血核心)" : "Golden Maiden (20k HP)" },
          { rolePos: isRu ? "Центр / Баффер защиты" : isCn ? "中排防线" : "DEF Buffer", id: "M22202", note: isRu ? "Позолоченная лучница" : isCn ? "鎏金射手" : "Gilt Archer" },
          { rolePos: isRu ? "Авангард / Каменный щит" : isCn ? "前排石壁" : "Stone Guard", id: "M21201", note: isRu ? "Каменная стражница" : isCn ? "岩石守卫" : "Stone Guard" },
          { rolePos: isRu ? "Тыл / Металл-Певунья" : isCn ? "后排金属" : "Metal Songstress", id: "M24102", note: isRu ? "Серебряная певунья" : isCn ? "白银歌姬" : "Silver Songstress" },
          { rolePos: isRu ? "Центр / Контроль" : isCn ? "中排辅助" : "Mid Artillery", id: "M22201", note: isRu ? "Валунный стрелок" : isCn ? "巨岩炮手" : "Boulder Gunner" }
        ],
        sets: isRu ? "Сеты на Max HP %, базовую атаку и стойкость." : isCn ? "最大生命值百分比套、基础攻击力与坚韧套装。" : "Max HP %, Base ATK, and Tenacity sets.",
        pros: isRu ? "Не требует раскачки, не убивается кровотечениями, моментальный урон." : isCn ? "零启动时间，不怕流失，开局即巅峰数值。" : "Zero setup time, immune to bleed/drain deaths, instant upfront burst.",
        difficulty: isRu ? "Экстремально высокая (требует 12 золотых талантов)" : isCn ? "极高 (刚需12金专属天赋)" : "Extremely High (Requires 12 Gold Talents)"
      },
      {
        id: "ice_fire_burn_drain",
        icon: "🔥",
        name: isRu ? "Ледяное Пламя / Ожог + Потеря HP (Ice-Fire Burn Drain)" : isCn ? "冰火流失队：首回合数万真伤焚决" : "Ice-Fire Burn Drain: Turn-1 True HP Shred",
        tier: "SSS-Tier (Whale Endgame)",
        archetype: "advanced",
        isF2p: false,
        tagline: isRu ? "50,000+ чистого урона потери HP на старте раунда и сверхживучесть" : isCn ? "开局引爆数万流失真伤，多层防护与金属免疫，终极攻坚焚决" : "50k+ True HP Loss explosion on turn start, maximum damage mitigation & survival",
        desc: isRu 
          ? "Эндгейм-билд высшего порядка. Объединяет механику Злобы Ледяной Злодейки и взрывной урон Ожога. Металлические союзники защищают команду от ответных тиков потери HP."
          : isCn
          ? "灼烧流失体系的终极形态，开局即爆发数万流失伤害。结合金属免疫与高层防护，兼顾巨额真伤与顶级生存。"
          : "The ultimate endgame configuration. Fuses Malice toughness break with explosive Burn drain.",
        lineup: [
          { rolePos: isRu ? "Тыл / Ледяной Дробитель" : isCn ? "后排核心" : "Malice Core", id: "M53301_001", note: isRu ? "Астральная Злодейка (Альтер)" : isCn ? "星界邪神·异化 (冰邪)" : "Astral Fiend (Alter)" },
          { rolePos: isRu ? "Центр / Огненный Урон" : isCn ? "中排直伤" : "Burn Direct", id: "M21302", note: isRu ? "Вечная владычица (Альтер Лорд)" : isCn ? "无尽领主·异化" : "Timeless Lord (Alter)" },
          { rolePos: isRu ? "Центр / Металл-Щит" : isCn ? "中排金属" : "Metal Buffer", id: "M22202", note: isRu ? "Позолоченная лучница" : isCn ? "鎏金射手" : "Gilt Archer" },
          { rolePos: isRu ? "Авангард / Шутовская Злодейка" : isCn ? "前排拉条" : "Turn Engine", id: "M51201_001", note: isRu ? "Шутовская Злодейка / Куб" : isCn ? "愚邪 (自拉条引擎)" : "Foolish Fiend (Engine)" },
          { rolePos: isRu ? "Тыл / Огненная Жрица" : isCn ? "后排点火" : "Burn Igniter", id: "M21205", note: isRu ? "Огненная банши" : isCn ? "火焰女妖" : "Fire Banshee" }
        ],
        sets: isRu ? "Сеты на потерю HP (HP Loss), стаки Ожога, Божественные камни и щиты." : isCn ? "生命流失增幅、灼烧层数强化与顶级专属神石。" : "HP Loss Amp, Burn Stack boosts, Godstones, Shields.",
        pros: isRu ? "Самый высокий суммарный урон в игре, стирает порталы любого уровня." : isCn ? "理论总伤害上限天花板，任何高层传送门与竞速秒杀。" : "Absolute highest theoretical damage ceiling in the game.",
        difficulty: isRu ? "Максимальная (12 золотых талантов + топовые Godstone камни)" : isCn ? "顶级 (12金天赋+毕业神石)" : "Max (12 Gold Talents + Perfect Godstones)"
      },
      {
        id: "solo_jokers",
        icon: "🃏",
        name: isRu ? "Джокеры Высшего Ранга (Solo Utility Powerhouses)" : isCn ? "独立真神单卡：逆转战局的核心对策卡" : "Solo Jokers: Standalone Boss Counters",
        tier: "S+ Utility",
        archetype: "solo",
        isF2p: true,
        tagline: isRu ? "Ключевые одиночные карты, способные в соло закрыть Пик 36 и сложнейших боссов" : isCn ? "不依赖固定配队，单卡即完全体，巅峰36与高难攻坚必备" : "Standalone hyper-utility units capable of soloing Peak 36 and extreme mechanics",
        desc: isRu 
          ? "Не требуют фиксированной команды. «Неубиваемая Золотая Дева» (Сет Жизнеобеспечения + Куб) за счет расовой защиты от смертельного урона соло закрывает Пик 36. «Шутовская Злодейка» дает бесконечное продвижение ходов без генерации маны боссам."
          : isCn
          ? "【不死黄金女】：魔方限伤+维生套回血+金属锁血种族天赋，巅峰36极限通关核心对策卡。【愚邪】：自拉五大强力引擎，治疗不给敌方送怒回魔，冰邪灼烧顶级挂件。"
          : "Universal standalone counters. Immortal Golden Maiden uses Cube + Life Support to cheese Peak 36, while Foolish Fiend provides turn-advance without feeding boss MP.",
        lineup: [
          { rolePos: isRu ? "Джокер Выживания" : isCn ? "不死对策" : "Immortal Tank", id: "M21301", note: isRu ? "Неубиваемая Золотая Дева" : isCn ? "不死黄金女 (巅峰36对策)" : "Immortal Golden Maiden (Peak 36)" },
          { rolePos: isRu ? "Джокер Продвижения Ходов" : isCn ? "拉条神卡" : "Turn Engine", id: "M51201_001", note: isRu ? "Шутовская Злодейка (Ускоритель)" : isCn ? "愚邪 (自拉条无送怒治疗)" : "Foolish Fiend (Turn Puller)" }
        ],
        sets: isRu ? "Сет жизнеобеспечения (Life Support), Артефакт-Куб, сопротивления." : isCn ? "维生套、魔方减伤信物、异常抵抗套装。" : "Life Support set, Magic Cube artifact, RES sets.",
        pros: isRu ? "Подходят в любую команду, спасают в безвыходных ситуациях." : isCn ? "即插即用，任何高难本的破局关键钥匙。" : "Plug-and-play into virtually any team to solve impossible boss stages.",
        difficulty: isRu ? "Средняя (требуется специализированная экипировка)" : isCn ? "中等 (需特定功能性套装)" : "Medium (Specific gear required)"
      }
    ];

    const f = this.buildsFilter;
    const filteredBuilds = buildsData.filter(b => {
      if (f === 'core') return b.archetype === 'core';
      if (f === 'advanced') return b.archetype === 'advanced';
      if (f === 'solo') return b.archetype === 'solo';
      if (f === 'f2p') return b.isF2p === true;
      return true;
    });

    return `
      <div class="guide-article">
        <h2 class="guide-title">🏆 ${isRu ? 'Лучшие сборки и Мета-отряды (Best Meta Builds)' : isCn ? '现版本主流阵容汇总＆评价 (Meta Builds Tier List)' : 'Best Builds & Meta Lineups Tier List'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Актуальный тир-лист и детальный разбор топовых мета-сборок от ведущих игроков сообщества (TapTap / Discord). Нажмите на любого персонажа в ростере для открытия его профиля и характеристик.' 
            : isCn 
            ? '根据最新版本与高阶实战测试整理的主流队伍评测与养成指南（基于TapTap资深配队攻略）。点击任意角色卡片即可直接查看详细属性与技能。' 
            : 'Verified meta party compositions and tier rankings based on high-level endgame testing (TapTap & Discord Theorycraft). Click any character to inspect details.'}
        </p>

        <!-- Sub-filter pills for builds -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          <button class="filter-pill ${f === 'all' ? 'active' : ''}" onclick="GuidesView.setBuildsFilter('all')">
            🌐 ${isRu ? 'Все сборки (10)' : isCn ? '全部流派 (10)' : 'All Builds (10)'}
          </button>
          <button class="filter-pill ${f === 'core' ? 'active' : ''}" onclick="GuidesView.setBuildsFilter('core')">
            👑 ${isRu ? 'Мейнстрим-основа (5)' : isCn ? '主流核心推荐 (5)' : 'Core Mainstream (5)'}
          </button>
          <button class="filter-pill ${f === 'f2p' ? 'active' : ''}" onclick="GuidesView.setBuildsFilter('f2p')">
            🌱 ${isRu ? 'Для новичков / F2P' : isCn ? '新手平民开荒' : 'F2P Friendly'}
          </button>
          <button class="filter-pill ${f === 'advanced' ? 'active' : ''}" onclick="GuidesView.setBuildsFilter('advanced')">
            🧪 ${isRu ? 'Продвинутые / Осада (4)' : isCn ? '进阶攻坚流派 (4)' : 'Advanced Endgame (4)'}
          </button>
          <button class="filter-pill ${f === 'solo' ? 'active' : ''}" onclick="GuidesView.setBuildsFilter('solo')">
            🃏 ${isRu ? 'Джокеры / Саппорты' : isCn ? '独立神卡对策' : 'Solo Jokers'}
          </button>
        </div>

        <!-- Outdated Builds Warning Alert -->
        <div class="guide-card" style="border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.06); margin-bottom: 20px;">
          <h3 style="color: #f59e0b; display: flex; align-items: center; gap: 8px; margin-top: 0;">
            <span>⚠️</span>
            <span>${isRu ? 'Устаревшие сборки (Не рекомендуются для прокачки новичкам):' : isCn ? '版本更迭过时流派（不建议新手优先培养）:' : 'Outdated Builds (Not Recommended for Beginners):'}</span>
          </h3>
          <ul class="guide-list" style="margin-bottom: 0; font-size: 13px;">
            <li><strong>${isRu ? 'Горячая Титанида-копейщица (Hot Titan Lancer / 热血巨灵枪):' : isCn ? '热血巨灵枪:' : 'Hot Titan Lancer:'}</strong> ${isRu ? 'Бывший старт-фаворит релиза. Сейчас полностью вытеснен Командой Принцессы, которая наносит в разы больше урона при тех же затратах.' : isCn ? '开服早期的平民战神，如今已被伤害更高、成型更快的【公主追击队】完全取代。' : 'Early release staple; completely outclassed by the Princess Follow-up team.'}</li>
            <li><strong>${isRu ? 'Ледяная Оса (Frost Wasp Witch / 冰蜂流失队):' : isCn ? '冰蜂流失队:' : 'Frost Wasp Witch:'}</strong> ${isRu ? 'Пострадала от нерфов ледяного пула; урон значительно ниже Астральной Злодейки, а фарм слабее Зайчихи.' : isCn ? '因冰系平衡调整受到波及，伤害大幅落后于冰邪神，刷图效率不及幸运兔。' : 'Heavily outscaled by Astral Fiend in bossing and Lucky Rabbit in farming.'}</li>
          </ul>
        </div>

        <!-- Builds Grid -->
        <div style="display: flex; flex-direction: column; gap: 20px;">
          ${filteredBuilds.map(b => `
            <div class="guide-card" style="border-left: 4px solid #8b5cf6; padding: 20px;">
              <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 10px; flex-wrap: wrap;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 28px;">${b.icon}</span>
                  <div>
                    <h3 style="margin: 0; color: #f3e8ff; font-size: 17px;">${b.name}</h3>
                    <div style="font-size: 12px; color: #a78bfa; font-weight: 600; margin-top: 2px;">${b.tagline}</div>
                  </div>
                </div>
                <span class="badge-accent" style="font-size: 12px; padding: 4px 10px; background: rgba(139, 92, 246, 0.25); color: #c4b5fd; border-color: rgba(139, 92, 246, 0.5);">
                  ${b.tier}
                </span>
              </div>

              <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
                ${b.desc}
              </p>

              <!-- Lineup slots -->
              <div style="margin-bottom: 16px;">
                <div style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">
                  👥 ${isRu ? 'Состав отряда и роли:' : isCn ? '核心阵容与站位:' : 'Lineup & Role Slots:'}
                </div>
                <div class="guide-lineup-grid">
                  ${b.lineup.map(slot => {
                    const c = charMap[slot.id];
                    const charImg = c ? (imgMap[c.id] || imgMap[c.key] || `assets/img/characters/${c.id}_1__single_part1_1@1.png`) : null;
                    const charName = c ? c.name : slot.id;

                    return `
                      <div onclick="App.openCharacterModal('${slot.id}')" style="display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.3); padding: 8px 10px; border-radius: 8px; border: 1px solid var(--border-subtle); cursor: pointer; transition: all 0.15s ease;" title="${isRu ? 'Открыть карточку' : isCn ? '查看详情' : 'View Card'}">
                        ${charImg ? `<img src="${charImg}" alt="${charName}" style="width: 36px; height: 36px; border-radius: 6px; object-fit: cover;" onerror="this.style.display='none'">` : '<div style="width: 36px; height: 36px; background: #334155; border-radius: 6px; display: flex; align-items: center; justify-content: center;">⭐</div>'}
                        <div style="flex: 1; min-width: 0;">
                          <div style="font-size: 11px; color: #a78bfa; font-weight: 600;">${slot.rolePos}</div>
                          <div style="font-size: 13px; font-weight: 700; color: #f1f5f9; word-break: break-word; line-height: 1.3;">${charName}</div>
                          <div style="font-size: 11px; color: var(--text-muted); line-height: 1.3;">${slot.note}</div>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Meta specs footer -->
              <div class="guide-specs-grid" style="padding-top: 12px; border-top: 1px solid var(--border-subtle); font-size: 12.5px;">
                <div>
                  <strong style="color: #38bdf8;">🎽 ${isRu ? 'Рекомендуемые сеты:' : isCn ? '核心装备信物:' : 'Recommended Sets:'}</strong>
                  <span style="color: var(--text-secondary); margin-left: 4px;">${b.sets}</span>
                </div>
                <div>
                  <strong style="color: #34d399;">✨ ${isRu ? 'Главные плюсы:' : isCn ? '实战核心优势:' : 'Key Strengths:'}</strong>
                  <span style="color: var(--text-secondary); margin-left: 4px;">${b.pros}</span>
                </div>
                <div>
                  <strong style="color: #fbbf24;">📈 ${isRu ? 'Сложность сборки:' : isCn ? '养成门槛难度:' : 'Build Cost / Difficulty:'}</strong>
                  <span style="color: var(--text-secondary); margin-left: 4px;">${b.difficulty}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // 8. Promo & Gift Codes (Updated with verified August 2026 codes)
  getCodesContent(lang = "RU") {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const codesList = [
      {
        code: "TIMBER0813",
        status: "active",
        rewards: isRu ? "📦 1 Большой припас (500 Stamina), 💎 100 Самоцветов, 💰 20,000 Золота" : isCn ? "📦 1大体力补给 (500点体力), 💎 100钻石, 💰 2万金币" : "📦 1x Large Supply (500 Stamina), 💎 100 Gems, 💰 20,000 Gold",
        note: isRu ? "🔥 Самый свежий промокод (Август 2026)" : isCn ? "🔥 2026年8月最新官方兑换码" : "🔥 Fresh August 2026 official code"
      },
      {
        code: "MGMMAG",
        status: "active",
        rewards: isRu ? "💎 100 Самоцветов, 🎫 Свитки призыва и ресурсы" : isCn ? "💎 100钻石, 🎫 招募券与进阶养成资源" : "💎 100 Gems, 🎫 Summon Tickets & Upgrade Materials",
        note: isRu ? "Летний подарочный набор сообщества" : isCn ? "官方夏日社区专享福利" : "Community Summer Gift Pack"
      },
      {
        code: "HXSNGH0402",
        status: "active",
        rewards: isRu ? "💎 100 Самоцветов, 🎫 1 Билет для найма (Recruit Ticket)" : isCn ? "💎 100钻石, 🎫 1张常规推荐信" : "💎 100 Gems, 🎫 1x Recruit Ticket",
        note: isRu ? "Подарок официальной гильдии" : isCn ? "公会迎新专属推荐信" : "Official Guild Recruit Gift"
      },
      {
        code: "HXSNGH888",
        status: "active",
        rewards: isRu ? "💎 100 Самоцветов, 🍎 5 Плодов таланта (Talent Fruits)" : isCn ? "💎 100钻石, 🍎 5个天赋果实" : "💎 100 Gems, 🍎 5x Talent Fruits",
        note: isRu ? "Набор прокачки скрытых талантов" : isCn ? "魔物娘专属天赋培育包" : "Talent Fruit Growth Pack"
      },
      {
        code: "HXSNGH666",
        status: "active",
        rewards: isRu ? "💎 100 Самоцветов, 🍀 1 Клевер (Clover)" : isCn ? "💎 100钻石, 🍀 1个四叶草" : "💎 100 Gems, 🍀 1x Clover",
        note: isRu ? "Бонус на удачу и выпадение лута" : isCn ? "幸运祈愿掉宝加成" : "Lucky Magic Find Boost"
      },
      {
        code: "vip888",
        status: "active",
        rewards: isRu ? "💎 100 Самоцветов, 📦 1 Необычный зеленый ящик" : isCn ? "💎 100钻石, 📦 1个绿色奇珍宝箱" : "💎 100 Gems, 📦 1x Green Strange Crate",
        note: isRu ? "Постоянный VIP-код на экипировку" : isCn ? "常驻VIP特权装备箱" : "Permanent VIP Gear Crate"
      },
      {
        code: "vip777",
        status: "active",
        rewards: isRu ? "💎 100 Самоцветов, 💰 10,000 Золота" : isCn ? "💎 100钻石, 💰 1万金币" : "💎 100 Gems, 💰 10,000 Gold",
        note: isRu ? "Постоянный VIP-код на золото" : isCn ? "常驻VIP金币补给" : "Permanent VIP Gold Pack"
      },
      {
        code: "vip666",
        status: "active",
        rewards: isRu ? "💎 100 Самоцветов, 🔮 5 Темно-фиолетовых кристаллов" : isCn ? "💎 100钻石, 🔮 5个暗紫晶石" : "💎 100 Gems, 🔮 5x Dark Purple Crystals",
        note: isRu ? "Постоянный VIP-код новичка" : isCn ? "常驻VIP晶石礼包" : "Permanent VIP Crystal Pack"
      },
      {
        code: "SSP2ND",
        status: "expired",
        rewards: isRu ? "💎 200 Самоцветов, 💰 50,000 Золота" : isCn ? "💎 200钻石, 💰 5万金币" : "💎 200 Gems, 💰 50,000 Gold",
        note: isRu ? "Сезонный код (Действовал до 30 июня 2026)" : isCn ? "赛季礼包 (已于2026年6月30日截止)" : "Seasonal code (Expired June 30, 2026)"
      },
      {
        code: "endlessdesert",
        status: "expired",
        rewards: isRu ? "📦 1 Большой припас, 💎 100 Самоцветов, 🍀 1 Клевер" : isCn ? "📦 1大体力补给, 💎 100钻石, 🍀 1四叶草" : "📦 1x Large Supply, 💎 100 Gems, 🍀 1x Clover",
        note: isRu ? "Ивент Бескрайней пустыни (Архивный)" : isCn ? "无尽荒漠活动礼包 (已过期)" : "Endless Desert Event (Expired)"
      },
      {
        code: "GMG2026",
        status: "expired",
        rewards: isRu ? "🎫 10 Билетов для найма" : isCn ? "🎫 10张推荐信" : "🎫 10x Recruit Tickets",
        note: isRu ? "Релизный промокод (Завершен)" : isCn ? "公测开服专属礼包 (已截止)" : "Launch Welcome Code (Expired)"
      },
      {
        code: "GUILDMASTER",
        status: "expired",
        rewards: isRu ? "💎 100 Самоцветов, 🎫 1 Билет найма, 📦 1 Зеленый ящик" : isCn ? "💎 100钻石, 🎫 1推荐信, 📦 1绿色宝箱" : "💎 100 Gems, 🎫 1x Ticket, 📦 1x Crate",
        note: isRu ? "Бонус Мастера гильдии (Завершен)" : isCn ? "公会长专属礼包 (已截止)" : "Guildmaster Bonus (Expired)"
      },
      {
        code: "HXSNSFSX",
        status: "expired",
        rewards: isRu ? "💎 100 Самоцветов, 🍀 2 Клевера" : isCn ? "💎 100钻石, 🍀 2四叶草" : "💎 100 Gems, 🍀 2x Clovers",
        note: isRu ? "Архивный промокод" : isCn ? "历史兑换码 (已过期)" : "Archived code (Expired)"
      },
      {
        code: "HXSNDJS1",
        status: "expired",
        rewards: isRu ? "💎 100 Самоцветов, 🎫 2 Билета найма" : isCn ? "💎 100钻石, 🎫 2推荐信" : "💎 100 Gems, 🎫 2x Tickets",
        note: isRu ? "Архивный промокод" : isCn ? "历史兑换码 (已过期)" : "Archived code (Expired)"
      },
      {
        code: "HXSNDJS2",
        status: "expired",
        rewards: isRu ? "💎 100 Самоцветов, 📦 1 Зеленый ящик" : isCn ? "💎 100钻石, 📦 1绿色宝箱" : "💎 100 Gems, 📦 1x Crate",
        note: isRu ? "Архивный промокод" : isCn ? "历史兑换码 (已过期)" : "Archived code (Expired)"
      },
      {
        code: "HXSNDJS3",
        status: "expired",
        rewards: isRu ? "💎 100 Самоцветов, 💰 20,000 Золота" : isCn ? "💎 100钻石, 💰 2万金币" : "💎 100 Gems, 💰 20,000 Gold",
        note: isRu ? "Архивный промокод" : isCn ? "历史兑换码 (已过期)" : "Archived code (Expired)"
      }
    ];

    const f = this.codesFilter;
    const filteredCodes = codesList.filter(c => {
      if (f === 'active') return c.status === 'active';
      if (f === 'expired') return c.status === 'expired';
      return true;
    });

    return `
      <div class="guide-article">
        <h2 class="guide-title">🎟️ ${isRu ? 'Промокоды и Подарочные наборы (Promo & Gift Codes)' : isCn ? '公会礼包兑换码全集' : 'Promo & Redeem Codes'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Актуальные проверенные промокоды игры Guild of Monster Girls для получения бесплатных кристаллов, билетов найма, золота и плодов таланта. Нажмите кнопку «Скопировать код», чтобы мгновенно скопировать его в буфер обмена.' 
            : isCn 
            ? '《魔物娘公会》官方最新礼包兑换码汇总，免费领取钻石、推荐信、金币与天赋果实。点击“一键复制”即可快速兑换。' 
            : 'Working promo and redeem codes for Guild of Monster Girls to claim free gems, recruit tickets, gold, and talent fruits. Click "Copy Code" for 1-click clipboard copy.'}
        </p>

        <!-- Instructions Box -->
        <div class="guide-card" style="border-left: 4px solid #38bdf8; background: rgba(56, 189, 248, 0.05);">
          <h3 style="color: #38bdf8; display: flex; align-items: center; gap: 8px; margin-top: 0;">
            <span>💡</span>
            <span>${isRu ? 'Как активировать промокод в игре:' : isCn ? '游戏内兑换方法指南:' : 'How to Redeem Codes In-Game:'}</span>
          </h3>
          <ol class="guide-list" style="margin-top: 4px; margin-bottom: 0;">
            <li>${isRu ? 'Запустите игру <strong>Guild of Monster Girls</strong> и перейдите на главный экран гильдии.' : isCn ? '启动《魔物娘公会》并进入主界面。' : 'Launch <strong>Guild of Monster Girls</strong> and open the guild hall.'}</li>
            <li>${isRu ? 'Нажмите на ваш <strong>Аватар / Профиль</strong> в верхнем левом углу (или откройте <em>«Настройки ⚙️»</em>).' : isCn ? '点击左上角<strong>个人头像/个人信息</strong>（或进入<em>设置 ⚙️</em>）。' : 'Click your <strong>Avatar / Profile</strong> in the top-left corner (or open <em>Settings ⚙️</em>).'}</li>
            <li>${isRu ? 'Выберите пункт <strong>«Промокод / Активация» (Redeem Code / 兑换码)</strong>.' : isCn ? '选择<strong>“兑换码 / 礼包兑换”</strong>功能。' : 'Select <strong>"Redeem Code"</strong>.'}</li>
            <li>${isRu ? 'Вставьте скопированный код и подтвердите получение.' : isCn ? '粘贴已复制的礼包码，点击<strong>“兑换”</strong>。' : 'Paste the copied code and hit <strong>"Claim"</strong>.'}</li>
            <li>${isRu ? 'Награды моментально поступят на вашу <strong>внутриигровую почту ✉️</strong>!' : isCn ? '丰厚奖励将立即发送至<strong>游戏内邮箱 ✉️</strong>！' : 'Rewards will be instantly delivered to your <strong>in-game Mailbox ✉️</strong>!'}</li>
          </ol>
        </div>

        <!-- Filter buttons -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; margin-bottom: 16px;">
          <button class="filter-pill ${f === 'all' ? 'active' : ''}" onclick="GuidesView.setCodesFilter('all')">
            🌐 ${isRu ? 'Все коды (16)' : isCn ? '全部兑换码 (16)' : 'All Codes (16)'}
          </button>
          <button class="filter-pill ${f === 'active' ? 'active' : ''}" onclick="GuidesView.setCodesFilter('active')">
            ✅ ${isRu ? 'Активные и Рабочие (8)' : isCn ? '可兑换有效码 (8)' : 'Active & Working (8)'}
          </button>
          <button class="filter-pill ${f === 'expired' ? 'active' : ''}" onclick="GuidesView.setCodesFilter('expired')">
            ⏳ ${isRu ? 'Истекшие / Архив (8)' : isCn ? '已过期/历史 (8)' : 'Expired (8)'}
          </button>
        </div>

        <!-- Codes Grid -->
        <div class="guide-cards-grid">
          ${filteredCodes.map((item, idx) => {
            const isActive = item.status === 'active';
            const btnId = `promoCopyBtn_${idx}`;

            return `
              <div class="guide-card" style="display: flex; flex-direction: column; justify-content: space-between; border-left: 3px solid ${isActive ? '#10b981' : '#64748b'};">
                <div>
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px;">
                    <div style="font-family: monospace; font-size: 18px; font-weight: 800; color: ${isActive ? '#34d399' : '#94a3b8'}; letter-spacing: 1px; background: rgba(0, 0, 0, 0.4); padding: 4px 10px; border-radius: 6px; border: 1px dashed ${isActive ? 'rgba(52, 211, 153, 0.4)' : 'rgba(148, 163, 184, 0.3)'};">
                      ${item.code}
                    </div>
                    <span class="badge-accent" style="background: ${isActive ? 'rgba(16, 185, 129, 0.2)' : 'rgba(100, 116, 139, 0.2)'}; color: ${isActive ? '#6ee7b7' : '#94a3b8'}; border-color: ${isActive ? 'rgba(16, 185, 129, 0.4)' : 'rgba(100, 116, 139, 0.3)'};">
                      ${isActive ? (isRu ? '✅ Действует' : isCn ? '✅ 有效' : '✅ Active') : (isRu ? '⏳ Истек' : isCn ? '⏳ 已失效' : '⏳ Expired')}
                    </span>
                  </div>

                  <div style="font-size: 13.5px; font-weight: 700; color: #f3e8ff; margin-bottom: 6px;">
                    ${item.rewards}
                  </div>
                  <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.4;">
                    ${item.note}
                  </div>
                </div>

                <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: flex-end;">
                  <button id="${btnId}" class="filter-pill ${isActive ? 'active' : ''}" onclick="GuidesView.copyPromoCode('${item.code}', '${btnId}', '${lang}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; font-size: 13px; font-weight: 700; border-radius: 6px; cursor: pointer; transition: all 0.15s ease;" ${!isActive ? 'disabled style="opacity: 0.6; cursor: not-allowed;"' : ''}>
                    📋 ${isRu ? 'Скопировать код' : isCn ? '一键复制' : 'Copy Code'}
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

// 9. Community Resources & Official Channels
  getResourcesContent(lang = "RU") {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const communityItems = [
      {
        icon: "💬",
        name: isRu ? "Discord Сообщество Теоретиков" : isCn ? "Discord 玩家与配队理论频道" : "Discord Theorycraft Community",
        desc: isRu ? "Международное сообщество игроков: каналы #theorycraft, #guides и #questions с участием ведущих исследователей механик (Xylene, baosbanhbao, Versailles, SpookyBoi)." : isCn ? "海外玩家深度配队与伤害机制交流群（涵盖 #theorycraft、#guides 与 #questions 专属频道）。" : "Global player hub featuring #theorycraft, #guides, and #questions channels with mechanics testers.",
        isDiscordInfo: true,
        actionText: isRu ? "Каналы: #theorycraft" : isCn ? "核心频道: #theorycraft" : "Channels: #theorycraft"
      },
      {
        icon: "🇨🇳",
        name: isRu ? "Сообщество TapTap (Форум и Гайды)" : isCn ? "TapTap 官方社区论坛与攻略" : "TapTap Official Forum & Guides",
        desc: isRu ? "Официальный форум игры, аналитические статьи, разбор меты и подробные гайды по прохождению этапов гильдии от игроков." : isCn ? "TapTap官方游戏论坛，收录前沿流派组队、版本更新与关卡攻坚详细攻略。" : "Official game forum, meta team compositions, and stage progression guides from the community.",
        url: "https://www.taptap.cn/app/742940/topic",
        actionText: isRu ? "Перейти к форуму" : isCn ? "查看论坛攻略" : "Open Forum"
      },
      {
        icon: "📜",
        name: isRu ? "Внутриигровой Кодекс и Справка" : isCn ? "游戏内图鉴与规则说明" : "In-Game Codex & Rules",
        desc: isRu ? "Встроенный архив данных гильдии с полным списком всех 204 героинь, 3353 предметов экипировки и расчетом характеристик." : isCn ? "公会内置全量档案，收录204位角色与3353件装备符文详细数值。" : "Complete internal archive featuring all 204 heroines and 3,353 equipment pieces.",
        url: "#characters",
        isInternal: true,
        actionText: isRu ? "В Каталог Персонажей" : isCn ? "进入图鉴" : "Open Codex"
      }
    ];

    return `
      <div class="guide-article">
        <h2 class="guide-title">🌐 ${isRu ? 'Сообщество и Полезные Ресурсы' : isCn ? '官方社区与玩家交流' : 'Community Channels & Resources'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Официальные каналы общения игроков, аналитические статьи и сообщества по Guild of Monster Girls.' 
            : isCn 
            ? '《魔物娘公会》官方交流阵地与玩家攻略精选。' 
            : 'Official community hubs, theorycrafting channels, and player resources.'}
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; margin-top: 16px;">
          ${communityItems.map(item => `
            <div class="guide-card" style="display: flex; flex-direction: column; justify-content: space-between; border-left: 3px solid #8b5cf6; padding: 18px 20px;">
              <div>
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                  <span style="font-size: 24px;">${item.icon}</span>
                  <h3 style="margin: 0; font-size: 15px; color: #f3e8ff;">${item.name}</h3>
                </div>
                <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin: 0 0 12px 0;">
                  ${item.desc}
                </p>
              </div>

              <div style="padding-top: 12px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: flex-end;">
                ${item.isInternal ? `
                  <button onclick="App.setTab('characters')" class="filter-pill active" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; font-size: 12.5px; font-weight: 700; border-radius: 6px; cursor: pointer;">
                    🚀 ${item.actionText} ➔
                  </button>
                ` : item.isDiscordInfo ? `
                  <span class="tag-badge" style="background: rgba(88, 101, 242, 0.15); color: #818cf8; border: 1px solid rgba(88, 101, 242, 0.35); padding: 6px 12px; font-weight: 700; font-size: 12px; border-radius: 6px;">
                    👾 ${item.actionText}
                  </span>
                ` : `
                  <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="filter-pill active" style="text-decoration: none; display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; font-size: 12.5px; font-weight: 700; border-radius: 6px;">
                    🔗 ${item.actionText} ↗
                  </a>
                `}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
,

  scrollToAnchor(anchorId) {
    if (!anchorId) return;
    const cleanId = anchorId.startsWith('tips-') ? anchorId : `tips-${anchorId}`;
    const el = document.getElementById(cleanId) || document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('guide-anchor-highlight');
      setTimeout(() => el.classList.remove('guide-anchor-highlight'), 2500);
    }
    const hash = `#guides/tips/${cleanId.replace('tips-', '')}`;
    if (window.location.hash !== hash) {
      history.pushState(null, '', hash);
    }
  },

  copyGuideLink(anchorId, btnEl = null) {
    if (!anchorId) return;
    const cleanId = anchorId.startsWith('tips-') ? anchorId : `tips-${anchorId}`;
    const sub = cleanId.replace('tips-', '');
    const url = `${window.location.origin}${window.location.pathname}#guides/tips/${sub}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        if (btnEl) {
          const origHtml = btnEl.innerHTML;
          const isCn = (App.currentLanguage || 'RU') === 'CN';
          const isEn = (App.currentLanguage || 'RU') === 'EN';
          btnEl.innerHTML = `<span style="color: #4ade80;">✓ ${isCn ? '已复制' : (isEn ? 'Copied!' : 'Скопировано!')}</span>`;
          btnEl.style.borderColor = '#4ade80';
          setTimeout(() => {
            btnEl.innerHTML = origHtml;
            btnEl.style.borderColor = '';
          }, 2000);
        }
        this.scrollToAnchor(cleanId);
      }).catch(() => {
        prompt('Ссылка на подраздел:', url);
      });
    } else {
      prompt('Ссылка на подраздел:', url);
    }
  },

    renderTileModal(tile, currentLang = 'RU') {
    if (!tile) return '';
    const isRu = currentLang === 'RU';
    const isCn = currentLang === 'CN';
    const name = tile.name?.[currentLang] || tile.name?.RU || tile.name || tile.id;
    const cat = tile.category || 'terrain';
    const catName = tile.category_name || (isRu ? 'Клетка поля' : 'Map Tile');
    const icon = tile.icon || '🗺️';
    const sizeStr = tile.size_str || '1x1';
    const biomes = tile.biomes?.[currentLang] || tile.biomes?.RU || [];
    const mats = tile.materials?.[currentLang] || tile.materials?.RU || [];
    const rates = tile.rates || {};
    const dropsSummary = tile.drops_summary?.[currentLang] || tile.drops_summary?.RU || [];

    const catBadges = {
      chest: { bg: 'rgba(234, 179, 8, 0.15)', text: '#facc15', border: 'rgba(234, 179, 8, 0.3)', icon: '📦' },
      resource: { bg: 'rgba(34, 197, 94, 0.15)', text: '#4ade80', border: 'rgba(34, 197, 94, 0.3)', icon: '🌿' },
      altar: { bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc', border: 'rgba(168, 85, 247, 0.3)', icon: '🏛️' },
      monster: { bg: 'rgba(239, 68, 68, 0.15)', text: '#f87171', border: 'rgba(239, 68, 68, 0.3)', icon: '⚔️' },
      hazard: { bg: 'rgba(249, 115, 22, 0.15)', text: '#fb923c', border: 'rgba(249, 115, 22, 0.3)', icon: '⚠️' },
      terrain: { bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8', border: 'rgba(56, 189, 248, 0.3)', icon: '🗺️' }
    };
    const currentCatStyle = catBadges[cat] || catBadges.terrain;

    return `
      <div class="modal-dialog map-tile-modal-dialog" style="max-width: 680px;">
        <div class="modal-header">
          <div class="modal-title-area">
            ${(typeof App !== 'undefined' && App.renderModalBackButton) ? App.renderModalBackButton(currentLang) : ''}
            <div class="char-portrait-container" style="width: 54px; height: 54px; font-size: 28px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.3); border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.1);">
              ${icon}
            </div>
            <div>
              <div class="char-modal-name" style="font-size: 22px; font-weight: 700; color: #fff; display: flex; align-items: center; gap: 8px;">
                <span>${this.escapeHtml(name)}</span>
              </div>
              <div style="display: flex; gap: 8px; align-items: center; margin-top: 4px; flex-wrap: wrap;">
                <span class="tag-badge" style="background: ${currentCatStyle.bg}; color: ${currentCatStyle.text}; border: 1px solid ${currentCatStyle.border}; font-weight: 600; font-size: 11px; padding: 2px 8px;">
                  ${currentCatStyle.icon} ${this.escapeHtml(catName)}
                </span>
                <span class="tag-badge" style="background: rgba(255,255,255,0.06); color: var(--text-muted); font-size: 11px; padding: 2px 8px;">
                  📐 ${isRu ? 'Размер' : (isCn ? '尺寸' : 'Size')}: ${sizeStr}
                </span>
                <span class="tag-badge" style="background: rgba(255,255,255,0.06); color: var(--text-muted); font-size: 11px; padding: 2px 8px;">
                  ID: ${tile.id}
                </span>
              </div>
            </div>
          </div>
          <button class="modal-close-btn" onclick="App.closeDetailModal()" title="Закрыть">✕</button>
        </div>

        <div class="modal-body" style="padding: 20px; display: flex; flex-direction: column; gap: 20px;">
          <!-- Drop Rates Breakdown -->
          <div class="detail-section" style="margin-bottom: 0;">
            <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between;">
              <span>📊 ${isRu ? 'Шансы и категории дропа' : (isCn ? '掉落概率与类别' : 'Drop Rates Breakdown')}</span>
              <span style="font-size: 11px; color: var(--text-muted); font-weight: normal;">Area_Spot Base Config</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-top: 10px;">
              <div style="background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.2); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
                <div style="font-size: 11px; color: var(--text-muted);">📦 ${isRu ? 'Сундуки' : 'Chests'}</div>
                <div style="font-size: 18px; font-weight: 700; color: #facc15; margin-top: 2px;">${rates.chest || 0}%</div>
              </div>
              <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
                <div style="font-size: 11px; color: var(--text-muted);">⚔️ ${isRu ? 'Снаряжение' : 'Gear'}</div>
                <div style="font-size: 18px; font-weight: 700; color: #38bdf8; margin-top: 2px;">${rates.equip || 0}%</div>
              </div>
              <div style="background: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
                <div style="font-size: 11px; color: var(--text-muted);">👑 ${isRu ? 'Фрагменты' : 'Shards'}</div>
                <div style="font-size: 18px; font-weight: 700; color: #c084fc; margin-top: 2px;">${rates.role || 0}%</div>
              </div>
              <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
                <div style="font-size: 11px; color: var(--text-muted);">🌿 ${isRu ? 'Материалы' : 'Materials'}</div>
                <div style="font-size: 18px; font-weight: 700; color: #4ade80; margin-top: 2px;">${rates.materials || 0}%</div>
              </div>
              <div style="background: rgba(244, 63, 94, 0.08); border: 1px solid rgba(244, 63, 94, 0.2); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
                <div style="font-size: 11px; color: var(--text-muted);">💎 ${isRu ? 'Камни' : 'Gems'}</div>
                <div style="font-size: 18px; font-weight: 700; color: #fb7185; margin-top: 2px;">${rates.stones || 0}%</div>
              </div>
              <div style="background: rgba(251, 191, 36, 0.08); border: 1px solid rgba(251, 191, 36, 0.2); border-radius: var(--radius-sm); padding: 10px; text-align: center;">
                <div style="font-size: 11px; color: var(--text-muted);">🪙 ${isRu ? 'Золото' : 'Gold'}</div>
                <div style="font-size: 18px; font-weight: 700; color: #fbbf24; margin-top: 2px;">${rates.gold || 0}%</div>
              </div>
            </div>
          </div>

          <!-- Materials & Harvestables -->
          ${mats.length > 0 ? `
            <div class="detail-section" style="margin-bottom: 0;">
              <div class="section-heading">🌿 ${isRu ? 'Добываемые материалы и ресурсы' : (isCn ? '可采集素材与产出' : 'Harvestable Materials')}</div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                ${mats.map(m => `
                  <span class="tag-badge" 
                        onclick="event.stopPropagation(); App.openItemModal('ingredients', '${this.escapeHtml(m)}')" 
                        title="${isRu ? 'Нажмите, чтобы открыть информацию о материале' : 'Click to view material'}"
                        style="background: rgba(34, 197, 94, 0.12); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.35); font-size: 13px; padding: 5px 12px; cursor: pointer; transition: all 0.15s ease;">
                    💎 ${this.escapeHtml(m)}
                  </span>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Biomes & Locations -->
          ${biomes.length > 0 ? `
            <div class="detail-section" style="margin-bottom: 0;">
              <div class="section-heading">🗺️ ${isRu ? 'Локации и биомы появления' : (isCn ? '出现地图与地块区域' : 'Spawn Biomes & Maps')}</div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                ${biomes.map(b => `
                  <span class="tag-badge" style="background: rgba(56, 189, 248, 0.08); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.25); font-size: 12px; padding: 4px 10px;">
                    📍 ${this.escapeHtml(b)}
                  </span>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Drop Summary List -->
          <div class="detail-section" style="margin-bottom: 0;">
            <div class="section-heading">🎁 ${isRu ? 'Подробная сводка дропа' : (isCn ? '详细掉落构成' : 'Detailed Drops Composition')}</div>
            <div style="background: rgba(0,0,0,0.25); padding: 12px 16px; border-radius: var(--radius-sm); font-size: 13px; line-height: 1.8; color: var(--text-secondary);">
              ${dropsSummary.map(d => `<div>• ${this.escapeHtml(d)}</div>`).join('')}
            </div>
          </div>
        </div>

        <div class="modal-footer" style="padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.08);">
          <button class="action-btn secondary-btn" onclick="GuidesView.copyTileLink('${tile.id}')" style="font-size: 12px; padding: 6px 14px;">
            🔗 ${isRu ? 'Скопировать ссылку на тайл' : (isCn ? '复制地块链接' : 'Copy Tile Link')}
          </button>
          <button class="action-btn primary-btn" onclick="App.closeDetailModal()" style="font-size: 12px; padding: 6px 18px;">
            ${isRu ? 'Закрыть' : (isCn ? '关闭' : 'Close')}
          </button>
        </div>
      </div>
    `;
  },

  copyTileLink(tileId) {
    const url = `${window.location.origin}${window.location.pathname}#tile/${tileId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        alert('Ссылка на тайл скопирована в буфер обмена!');
      });
    } else {
      prompt('Ссылка на тайл:', url);
    }
  },

  renderBuffModal(buff, currentLang = 'RU') {
    if (!buff) return '';
    const isRu = currentLang === 'RU';
    const isCn = currentLang === 'CN';
    const name = buff.name?.[currentLang] || buff.name?.RU || buff.id;
    const desc = buff.desc?.[currentLang] || buff.desc?.RU || '';
    const cat = buff.cat || 'buff';
    const icon = buff.icon || '✨';
    const code = buff.code || buff.key || '';
    const element = buff.element || 'Neutral';
    const relChars = buff.related_characters || [];
    const relItems = buff.related_items || [];

    const catLabels = {
      buff: isRu ? '🟢 Усиление (Бафф)' : (isCn ? '🟢 正面增益 (Buff)' : '🟢 Positive Buff'),
      debuff: isRu ? '🔴 Ослабление (Дебафф)' : (isCn ? '🔴 负面减益 (Debuff)' : '🔴 Debuff'),
      control: isRu ? '💫 Эффект контроля' : (isCn ? '💫 控制状态' : '💫 Crowd Control'),
      instant: isRu ? '⚡ Мгновенный эффект' : (isCn ? '⚡ 即时结算' : '⚡ Instant Effect'),
      mechanic: isRu ? '⚙️ Боевая механика' : (isCn ? '⚙️ 战斗机制' : '⚙️ Combat Mechanic')
    };

    return `
      <div class="modal-dialog buff-modal-dialog">
        <div class="modal-header">
          <div class="modal-title-area">
            ${(typeof App !== 'undefined' && App.renderModalBackButton) ? App.renderModalBackButton(currentLang) : ''}
            <div style="width: 52px; height: 52px; border-radius: var(--radius-md); border: 2px solid rgba(168, 85, 247, 0.4); background: radial-gradient(circle, #1e293b 0%, #0f172a 100%); display: flex; align-items: center; justify-content: center; font-size: 26px; flex-shrink: 0; box-shadow: 0 0 15px rgba(168, 85, 247, 0.25);">
              ${icon}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <span class="modal-title" style="font-size: 20px; font-weight: 800; color: #ffffff;">${this.escapeHtml(name)}</span>
                ${code ? `<span class="tag-badge" style="font-family: monospace; font-size: 11px; color: #a855f7; border-color: rgba(168, 85, 247, 0.3);">${code}</span>` : ''}
              </div>
              <div style="display: flex; gap: 6px; margin-top: 4px; flex-wrap: wrap;">
                <span class="buff-cat-badge buff-cat-${cat}">${catLabels[cat] || cat}</span>
                ${element && element !== 'Neutral' ? `<span class="tag-badge">✨ ${this.escapeHtml(element)}</span>` : ''}
              </div>
            </div>
          </div>
          <button class="modal-close-btn" onclick="App.closeModal()">&times;</button>
        </div>

        <div class="modal-body" style="display: flex; flex-direction: column; gap: 16px;">
          <div class="detail-section">
            <div class="section-heading">📜 ${isRu ? 'Механика и Описание эффекта' : isCn ? '效果机制与详细说明' : 'Mechanics & Effect Description'}</div>
            <div style="font-size: 14px; line-height: 1.6; color: #f1f5f9; background: rgba(10, 14, 23, 0.7); padding: 14px 16px; border-radius: var(--radius-md); border-left: 4px solid #a855f7; box-shadow: inset 0 2px 8px rgba(0,0,0,0.4);">
              ${this.escapeHtml(desc)}
            </div>
          </div>

          ${relChars.length > 0 ? `
            <div class="detail-section">
              <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between;">
                <span>👑 ${isRu ? 'Героини с этим эффектом' : isCn ? '拥有此效果的角色' : 'Heroines with this Effect'} (${relChars.length})</span>
                <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">
                  ${isRu ? 'Кликните для карточки героини' : isCn ? '点击查看角色卡' : 'Click to view heroine'}
                </span>
              </div>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px;">
                ${relChars.map(ch => `
                  <div class="filter-pill" style="display: flex; align-items: center; gap: 8px; padding: 6px 10px; cursor: pointer; border-radius: var(--radius-sm); background: rgba(30, 41, 59, 0.6); transition: all 0.15s ease;" onclick="App.openCharacterModal('${ch.id}')">
                    <span style="font-size: 14px;">👑</span>
                    <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left;">
                      <div style="font-weight: 700; color: #ffffff; font-size: 12.5px;">${this.escapeHtml(ch.name)}</div>
                      <div style="font-size: 10.5px; color: var(--text-muted);">${this.escapeHtml(ch.element || '')} • ${this.escapeHtml(ch.class_name || '')}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${relItems.length > 0 ? `
            <div class="detail-section">
              <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between;">
                <span>⚔️ ${isRu ? 'Снаряжение и Руны с этим эффектом' : isCn ? '关联装备与符文' : 'Equipment & Runes'} (${relItems.length})</span>
                <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">
                  ${isRu ? 'Кликните для карточки предмета' : isCn ? '点击查看物品' : 'Click to view item'}
                </span>
              </div>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px;">
                ${relItems.map(it => `
                  <div class="filter-pill" style="display: flex; align-items: center; gap: 8px; padding: 6px 10px; cursor: pointer; border-radius: var(--radius-sm); background: rgba(30, 41, 59, 0.6); transition: all 0.15s ease;" onclick="App.openItemModal('${it.category}', '${it.id}')">
                    <span style="font-size: 14px;">📦</span>
                    <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left;">
                      <div style="font-weight: 700; color: #ffffff; font-size: 12.5px;">${this.escapeHtml(it.name)}</div>
                      <div style="font-size: 10.5px; color: #38bdf8;">${it.step ? `${it.step}★ • ` : ''}${it.category}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  },

  escapeHtml(str) {
    if (!str || typeof str !== 'string') return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};
