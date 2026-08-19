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
    this.activeSection = 'tiles';
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    this.render(this.lastContainerId || 'guidesContainer', lang);
  },

  setTilesSearch(query) {
    this.tilesSearchQuery = String(query).toLowerCase().trim();
    this.activeSection = 'tiles';
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
        return this.getPhasesContent(lang);
      case 'targeting':
        return this.getTargetingContent(lang);
      case 'damage':
        return this.getDamageContent(lang);
      case 'elements':
        return this.getElementsContent(lang);
      case 'builds':
        return this.getBuildsContent(lang);
      case 'gacha':
      case 'banners':
        return this.getGachaContent(lang);
      case 'events':
        return this.getEventsContent(lang);
      case 'codes':
        return this.getCodesContent(lang);
      case 'resources':
        return this.getResourcesContent(lang);
      default:
        return this.getTipsContent(lang);
    }
  },

  // 1. Beginner Tips & Economy
  getTipsContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    return `
      <div class="guide-article">
        <h2 class="guide-title">💡 ${isRu ? 'Советы новичкам, Экономика ресурсов и Гайд по Сундукам' : isCn ? '萌新避坑、资源经济与全套宝箱解析' : 'Beginner Tips, Resource Economy & Full Chest Guide'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Полный свод практических правил развития аккаунта, грамотного расхода ресурсов, прокачки талантов, звездности экипировки и математики сундуков от теоретиков сообщества (Theorycraft baosbanhbao, Versailles, Yomemamo).' 
            : isCn 
            ? '资深公会玩家实测总结的钻石规划、卡池心愿、60级免费重置、装备升星偷位、四叶草绝杀20点与七大类宝箱深度解析。' 
            : 'Comprehensive progression guide covering gem priority, wishlist pity, gear star-ups, true luck formulas, and the 7-chest mathematical opening strategy.'}
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          <!-- 1. Gems & Recruits -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25);">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 10px; font-weight: 700;">💎 1. ${isRu ? 'Самоцветы, Крутки и Осколки' : isCn ? '钻石规划、卡池心愿与碎片管理' : 'Gems, Wishlist & Shards'}</div>
            <ul style="padding-left: 20px; line-height: 1.8; color: #cbd5e1; font-size: 13.5px; margin: 0;">
              <li><strong>${isRu ? 'Самоцветы (Gems):' : isCn ? '钻石规划:' : 'Gems Priority:'}</strong> ${isRu ? 'Тратьте кристаллы <span style="color: #facc15; font-weight: 700;">только на Альтер-найм (Alter summon)</span>. В эндгейме они понадобятся для реролла золотых талантов (200 гемов/свап). Еженедельная Арена и Астрал дают стабильный доход кристаллов.' : isCn ? '钻石<span style="color: #facc15; font-weight: 700;">只用于抽取异化卡池</span>。大后期用于更换极品金色天赋（每次200钻）。每周竞技场与星界领域均有丰厚钻石进账。' : 'Spend gems <span style="color: #facc15; font-weight: 700;">only on Alter summon</span>. Late-game gems are used for gold talent swapping (200 gems each).'}</li>
              <li><strong>${isRu ? 'Список желаний (Wishlist):' : isCn ? '常规心愿推荐:' : 'Wishlist Targets:'}</strong> ${isRu ? 'Ставьте <em>Кристальную грибницу</em> или <em>Командующую Легиона</em> — лучшие батарейки маны для спама ультимейтами. Если выбили цель до 100 круток гаранта — сразу меняйте на другую не полученную девочку!' : isCn ? '常规心愿首选<em>水晶菇娘</em>或<em>军团统领</em>（队伍回能核心）。若在100抽保底前出货，立即更换其他未拥有角色！' : 'Wish-pick <em>Crystal Shroom</em> or <em>Legion Commander</em> for mana battery sustain. Swap target immediately if pulled before 100 pity!'}</li>
              <li><strong>${isRu ? 'Альтер-осколки:' : isCn ? '异化碎片:' : 'Alter Shards:'}</strong> <span style="color: #f87171; font-weight: 700;">${isRu ? 'СТРОГО КОПИТЬ!' : isCn ? '严禁随意消耗！' : 'STRICTLY SAVE!'}</span> ${isRu ? 'Для 5★ альтера нужно 400 альтер-осколков. Тратьте только на проверенного главного керри.' : isCn ? '将异化角色升满5星需要整整400个异化碎片，仅留给确定重度培养的T0核心。' : 'Takes 400 alter shards to 5-star an alter girl. Invest only in your absolute main carry.'}</li>
              <li><strong>${isRu ? 'Приоритеты Альтера:' : isCn ? '异化优先目标:' : 'Alter Targets:'}</strong> ${isRu ? 'В первую очередь ловите <em>Шагающую по ветру [Зайчиху]</em> и <em>Великую волшебницу [Зайчиху]</em> (LUK-юниты для разгона дропа шмота и рун).' : isCn ? '优先获取【兔耳】<em>风行游侠</em>与【兔耳】<em>魔术大师</em>（极品幸运角色，刷神装与符文核心）。' : 'Prioritize <em>[Bunny] Windstrider</em> and <em>[Bunny] Grand Magician</em> for high LUK farming.'}</li>
            </ul>
          </div>

          <!-- 2. Gold & Upgrades -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(234, 179, 8, 0.25);">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px; font-weight: 700;">💰 2. ${isRu ? 'Золото, Прокачка и Сброс до 60 уровня' : isCn ? '金币消费、60级免费重置与心之升级' : 'Gold, Level 60 Reset & Hearts'}</div>
            <ul style="padding-left: 20px; line-height: 1.8; color: #cbd5e1; font-size: 13.5px; margin: 0;">
              <li><strong>${isRu ? 'Приоритет золота:' : isCn ? '金币消耗顺序:' : 'Gold Priority:'}</strong> ${isRu ? '1) Звездность экипировки и рун ➔ 2) Прокачка 3 боевых юнитов до 60 ур. ➔ 3) Скупка Сердец героинь у странствующего гоблина.' : isCn ? '1) 装备与符文升星 ➔ 2) 随图鉴将3名主力升至60级 ➔ 3) 游商地精处扫货与购买勇者之心。' : '1) Star up gear & runes ➔ 2) Level 3 units to Lv 60 ➔ 3) Buy Heroine Hearts from goblin.'}</li>
              <li><strong>${isRu ? 'Бесплатный сброс 60 ур.:' : isCn ? '60级无损重置:' : 'Free Lv 60 Reset:'}</strong> ${isRu ? 'Любого персонажа 60 уровня и ниже можно <span style="color: #4ade80; font-weight: 700;">БЕСПЛАТНО сбросить (Reset)</span> со 100% возвратом всех ресурсов! Экспериментируйте с пачками без штрафов.' : isCn ? '60级及以下角色均支持<span style="color: #4ade80; font-weight: 700;">100%无损免费重置</span>，全额返还金币材料，零成本尝试各种阵容。' : 'Units Lv 60 and below can be <span style="color: #4ade80; font-weight: 700;">freely reset for a 100% refund</span> of all gold and mats.'}</li>
              <li><strong>${isRu ? 'Прокачка 70+ через Сердца:' : isCn ? '70级以上心之升级:' : '70+ with Hearts:'}</strong> ${isRu ? 'После 70 уровня качайтесь с помощью <em>Сердец героинь</em> (повышают уровень на 1/5/10 мгновенно без золота и материалов).' : isCn ? '70级以上通过游商购买<em>勇者之心</em>直升1/5/10级，无需金币与进阶材料。' : 'Use <em>Heroine Hearts</em> from the merchant to instantly level up 70+ units without gold/mats.'}</li>
            </ul>
          </div>

          <!-- 3. Star-Up & Multi-Set Resonance -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(236, 72, 153, 0.25);">
            <div class="section-heading" style="color: #f472b6; font-size: 16px; margin-bottom: 10px; font-weight: 700;">⭐ 3. ${isRu ? 'Звездность Экипировки (1★–3★), Наследие и Секрет Резонансов' : isCn ? '装备升星(1★–3★)、传承与套装偷位神技' : 'Gear Star-Up (1★–3★), Legacy & Multi-Set Resonance'}</div>
            <ul style="padding-left: 20px; line-height: 1.8; color: #cbd5e1; font-size: 13.5px; margin: 0;">
              <li><strong>${isRu ? 'Шкала улучшения:' : isCn ? '升星收益明细:' : 'Upgrade Progression:'}</strong> ${isRu ? '• <strong>Legacy (Камень наследия):</strong> +1 ко всем 3 строкам талантов.<br>• <strong>1★ (1 дубль):</strong> +1 к 1-й строке.<br>• <strong>2★ (5 дублей):</strong> +1 ко 2-й строке.<br>• <strong>3★ (10 дублей):</strong> +1 к 3-й строке.<br>• <strong>MAX (Legacy + 3★):</strong> +3 очка ко ВСЕМ строкам талантов предмета!' : isCn ? '• <strong>传承 (传承石):</strong> 全词条+1点。<br>• <strong>1星 (1个同名装备):</strong> 第1行+1点。<br>• <strong>2星 (5个同名装备):</strong> 第2行+1点。<br>• <strong>3星 (10个同名装备):</strong> 第3行+1点。<br>• <strong>满配 (传承+3星):</strong> 全词条总计+3点！' : '• <strong>Legacy:</strong> +1 all rows.<br>• <strong>1-Star:</strong> +1 row 1.<br>• <strong>2-Star:</strong> +1 row 2.<br>• <strong>3-Star:</strong> +1 row 3.<br>• <strong>MAX:</strong> +3 to ALL talent rows!'}</li>
              <li><strong>${isRu ? 'Секрет 3★ — Активация 3-предметного сета 2 вещами:' : isCn ? '3星核心价值——2件装备激活满层套装:' : '3-Star Secret: 2-Piece Full Activation:'}</strong> ${isRu ? 'Прокачанная до 3★ вещь дает достаточно сетовых очков, чтобы полностью активировать 3-предметный сет <span style="color: #f472b6; font-weight: 700;">всего двумя надетыми предметами</span>! 3-й слот освобождается под второй мощный сет.' : isCn ? '满3星装备提供的高额词条点数，能让原本需要穿戴3件的套装仅凭<span style="color: #f472b6; font-weight: 700;">2件装备即可完全激活满层套装效果</span>！腾出第3个装备槽自由混搭其他强力套装。' : '3-Star gear provides so many points that only <span style="color: #f472b6; font-weight: 700;">2 pieces are needed to fully activate a 3-piece set</span>, freeing up the 3rd slot for another set!'}</li>
              <li><strong>${isRu ? 'Запрет на распыление до 3★:' : isCn ? '未满3星绝不当狗粮:' : 'Never Fodder Below 3-Star:'}</strong> <span style="color: #f87171; font-weight: 700;">${isRu ? 'НИКОГДА не скармливайте в алхимию экипировку и руны, пока они не прокачаны до 3★ для Кодекса!' : isCn ? '未满3星的装备/符文严禁送进炼金炉！必须先满3星填满图鉴。' : 'NEVER use gear as alchemy fodder until it reaches 3-Star for your codex!'}</span></li>
            </ul>
          </div>

          <!-- 4. True Luck Mechanics -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(249, 115, 22, 0.25);">
            <div class="section-heading" style="color: #fb923c; font-size: 16px; margin-bottom: 10px; font-weight: 700;">🎲 4. ${isRu ? 'Реальная Механика Удачи (LUK), Клевер и Дроп d20' : isCn ? '幸运值 (LUK) 真实机制、四叶草重骰与深渊额外掉落' : 'True Luck (LUK) Mechanics, Clovers & Abyss Drops'}</div>
            <ul style="padding-left: 20px; line-height: 1.8; color: #cbd5e1; font-size: 13.5px; margin: 0;">
              <li><strong>${isRu ? 'Как реально работает LUK:' : isCn ? '幸运值真实作用机制:' : 'How LUK Truly Works:'}</strong> ${isRu ? 'Удача <span style="color: #f87171; font-weight: 700;">НЕ влияет</span> на первый бесплатный бросок кубика (чистый RNG). Удача дает <strong>+1 к результату броска за каждые 15 суммарной Удачи команды ПРИ ТРАТЕ КЛЕВЕРА</strong>!' : isCn ? '全队幸运值<span style="color: #f87171; font-weight: 700;">完全不影响</span>战后首次免费掷骰。幸运值的真实机制为：<strong>在使用四叶草重骰时，全队每有15点幸运值，重骰点数固定+1</strong>！' : 'Team LUK <span style="color: #f87171; font-weight: 700;">does NOT affect</span> the initial free roll. Every 15 team LUK grants <strong>+1 to your dice roll WHEN SPENDING A CLOVER</strong>!'}</li>
              <li><strong>${isRu ? 'Стратегия Клевера на Натуральную 20-ку:' : isCn ? '四叶草绝杀20点策略:' : 'Clover Strategy for 20s:'}</strong> ${isRu ? 'Только ролл 20 гарантирует Оранжевый/Желтый шмот. Тратьте клевер только тогда, когда бесплатный ролл выпал <strong>17–19</strong> — с бонусом LUK вы гарантированно за 1–2 клевера добьете кубик до 20!' : isCn ? '投出20点是必定掉落橙装与黄晶传承装的唯一途径。初次掷出<strong>17-19点</strong>时再使用四叶草，依靠幸运加成只需1-2个四叶草即可稳稳保底20点神装！' : 'Only dice roll 20 guarantees Orange/Yellow Legacy drops. Only spend clovers when the initial roll is 17-19 to easily hit 20.'}</li>
              <li><strong>${isRu ? 'Экстра-дроп в Бездне (Abyss):' : isCn ? '深渊额外掉落加成:' : 'Abyss Extra Drops:'}</strong> ${isRu ? '• <strong>Бездна 20+:</strong> +1 дополнительный предмет дропа.<br>• <strong>Бездна 40+:</strong> +2 дополнительных предмета дропа.' : isCn ? '• <strong>深渊20+层：</strong>额外多掉落1件装备。<br>• <strong>深渊40+层：</strong>额外多掉落2件装备。' : '• <strong>Abyss 20+:</strong> +1 extra gear drop.<br>• <strong>Abyss 40+:</strong> +2 extra gear drops.'}</li>
            </ul>
          </div>

          <!-- 5. Talent Fruit Pity & Duplication -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(20, 184, 166, 0.25);">
            <div class="section-heading" style="color: #2dd4bf; font-size: 16px; margin-bottom: 10px; font-weight: 700;">🧬 5. ${isRu ? 'Плоды Таланта: Скрытый Гарант (Wishlist Pity) и Дублирование Эксклюзивов' : isCn ? '天赋果实心愿保底机制与专属天赋转移/复制秘籍' : 'Talent Fruit Wishlist Pity & Duplication'}</div>
            <ul style="padding-left: 20px; line-height: 1.8; color: #cbd5e1; font-size: 13.5px; margin: 0;">
              <li><strong>${isRu ? 'Формула гаранта (Wishlist Pity):' : isCn ? '心愿天赋保底递增公式:' : 'Wishlist Pity Formula:'}</strong> ${isRu ? 'Шанс на целевой золотой талант начинает расти <strong>ТОЛЬКО ПОСЛЕ 50 золотых талантов-промахов</strong>. С 51-го ролла шанс растет на <strong>+5% за каждый последующий золотой реролл</strong> (на 70-м золотом таланте достигается 100% гарант).' : isCn ? '心愿金天赋的保底概率<strong>只有在连续歪掉50个非心愿金天赋后才开始递增</strong>。从第51个金天赋开始，每次洗练概率递增<strong>+5%</strong>，第70个金天赋必定100%出心愿目标！' : 'Pity chance begins increasing ONLY after 50 non-wishlist gold talents. From roll 51 onwards, chance increases by +5% per gold reroll, hitting 100% hard pity at roll 70.'}</li>
              <li><strong>${isRu ? 'Секрет дублирования (2x–4x одинаковых эксклюзивов):' : isCn ? '多重专属天赋同页叠加技巧:' : 'Talent Duplication Secret:'}</strong> ${isRu ? 'Реролл не дает выбить два одинаковых таланта на одной странице, но <strong>Перенос талантов (за 200 кристаллов) игнорирует это правило</strong>! Чтобы собрать 2x копии собственного эксклюзива: откройте 2-ю страницу ➔ выбейте эксклюзив ➔ перенесите на донора ➔ перенесите с донора обратно на 1-ю страницу!' : isCn ? '常规洗练无法在同页洗出同名天赋，但<strong>【天赋转移】完全不受该限制</strong>！若想让角色拥有双重自身专属天赋：开启第2页天赋 ➔ 在第2页洗出自身专属 ➔ 转移给中介角色 ➔ 再从中介转回第1页，实现多重专属暴力叠加！' : 'Regular rerolling forbids dupes on one page, but <strong>Talent Transfer bypasses this rule</strong>! Use Page 2 -> donor -> Page 1 to stack multiple copies of the same top exclusive!'}</li>
              <li><strong>${isRu ? 'Фарм плодов (Ручной vs Блиц):' : isCn ? '果实刷取效率最大化:' : 'Fruit Farming:'}</strong> ${isRu ? '• <em>Ручной фарм:</em> бейте только фиолетовых и золотых врагов (максимум плодов на стамину).<br>• <em>Блиц 10x (500 энергии):</em> дает ~360 плодов в неделю + горы клевера и прокачку всей экипировки.' : isCn ? '• <em>手动攻坚：</em>只打紫色与金色精英怪（每点体力产出最高）。<br>• <em>10连扫荡(500体力)：</em>每周稳定产出约360果实，兼顾大量四叶草与全图装备升星。' : '• <em>Manual:</em> Target only purple & gold enemies.<br>• <em>10x Blitz:</em> Yields ~360 fruits/week plus tons of clovers.'}</li>
            </ul>
          </div>

          <!-- 6. Complete 7 Chest Categories Guide -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(99, 102, 241, 0.25);">
            <div class="section-heading" style="color: #818cf8; font-size: 16px; margin-bottom: 10px; font-weight: 700;">📦 6. ${isRu ? 'Полный Гайд по 7 Типам Сундуков: Сливать или Открывать?' : isCn ? '七大类宝箱深度解析：合成还是直接开？' : '7 Chest Categories: To Merge or Not to Merge?'}</div>
            <ul style="padding-left: 20px; line-height: 1.8; color: #cbd5e1; font-size: 13.5px; margin: 0;">
              <li><strong>${isRu ? 'Базовый шанс экстра-дропа (~20%):' : isCn ? '额外掉落机制:' : 'Extra Drop Chance (~20%):'}</strong> ${isRu ? 'Все сундуки имеют шанс ~20% дать дополнительный предмет. При открытии сундуков низкого ранга работает вероятность выпадения предметов более высокого тира.' : isCn ? '全品类宝箱均有约20%概率触发额外掉落，低阶宝箱在开启时存在天然跳阶升级机制。' : 'All chests have a ~20% extra drop rate with natural probability to roll higher-tier items.'}</li>
              <li><strong>${isRu ? '📦 Сундуки Материалов (Опыта):' : isCn ? '📦 材料/经验宝箱:' : '📦 Material Chests:'}</strong> <span style="color: #38bdf8; font-weight: 700;">${isRu ? 'Сливать Зеленые ➔ в Синие. Синие и выше открывать сразу!' : isCn ? '绿合成到蓝，蓝及以上直接开！' : 'Merge Green -> Blue. Open Blue & above immediately!'}</span> ${isRu ? 'Зеленый дает 55 опыта, Синий — 5100 (4x выгода). В синих есть шанс прока 500/2500 опыта. Сливая в Оранжевый, вы теряете эти мультипликаторы.' : isCn ? '绿箱给55经验，蓝箱给5100（4倍收益）。蓝箱开出500/2500大额经验的概率极高，合到橙色反而丢失期望。' : 'Blue chests frequently proc 500/2500 EXP.'}</li>
              <li><strong>${isRu ? '🔮 Сундуки Рун и ⚔️ Экипировки:' : isCn ? '🔮 符文与 ⚔️ 装备宝箱:' : '🔮 Runes & ⚔️ Gear Chests:'}</strong> <span style="color: #a78bfa; font-weight: 700;">${isRu ? 'Сливать до Фиолетового и открывать.' : isCn ? '合成到紫色直接开！' : 'Merge to Purple and open.'}</span> ${isRu ? 'Оранжевые вещи выбиваются клевером в боях. Фиолетовые сундуки быстро закрывают пробелы в Кодексе (в игре ~30 типов фиолетового шмота). В эндгейме с блицем — авто-слияние до оранжевого.' : isCn ? '橙装靠四叶草手动打，图鉴卡点往往在30多种紫色装备上。中后期扫荡溢出后再一路全自动合成到橙。' : 'Purple chests quickly fill your codex for gear/runes.'}</li>
              <li><strong>${isRu ? '💰 Золото и 💎 Самоцветы:' : isCn ? '💰 金币与 💎 钻石宝箱:' : '💰 Gold & 💎 Gem Chests:'}</strong> <span style="color: #facc15; font-weight: 700;">${isRu ? 'СЛИВАТЬ ДО ОРАНЖЕВОГО!' : isCn ? '必须合成到最高橙色品阶再开！' : 'ALWAYS merge to Orange!'}</span> ${isRu ? 'Оранжевый сундук золота дает 15 000 – 30 000 золота без скачков качества. Математическое ожидание на оранжевом ранге максимально.' : isCn ? '橙色金币箱产出1.5万-3万，无跳阶机制，高阶方差收益最大。' : 'Orange gold chests yield 15k-30k gold with peak mathematical value.'}</li>
              <li><strong>${isRu ? '🔮 Сундуки Кристаллов:' : isCn ? '🔮 晶石宝箱:' : '🔮 Crystal Chests:'}</strong> <span style="color: #34d399; font-weight: 700;">${isRu ? 'ОТКРЫВАТЬ СРАЗУ БЕЗ СЛИЯНИЯ!' : isCn ? '无需合成，直接原样开启！' : 'Open as-is without merging!'}</span> ${isRu ? 'Шанс выпадения фиолетовых/божественных кристаллов из сундуков низкого ранга значительно превосходит курс слияния 5:1.' : isCn ? '低阶晶石箱跳出高级晶石的概率收益远超5:1合成汇率。' : 'High-tier crystal procs from low-tier chests beat the 5:1 merge ratio.'}</li>
              <li><strong>${isRu ? '⚠️ Миф об Удаче:' : isCn ? '⚠️ 避坑常识:' : '⚠️ LUK Myth:'}</strong> ${isRu ? 'Характеристика Удачи (LUK) <strong>НЕ РАБОТАЕТ</strong> на открытие сундуков или алхимию. Она действует исключительно в бою при трате Клевера!' : isCn ? '全队幸运值 (LUK) <strong>完全不影响开箱与炼金</strong>，仅在战斗内消耗四叶草时生效，无需换装开箱！' : 'Team LUK has ZERO impact on chest opening. It only applies in battle when using clovers!'}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  },

  getGachaContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const charsData = (typeof App !== 'undefined' && App.state?.data?.characters?.[lang]) 
      ? App.state.data.characters[lang] 
      : [];

    const getCharsByRank = (rank) => charsData.filter(c => c.step === rank);

    const sChars = getCharsByRank('S');
    const aChars = getCharsByRank('A');
    const bChars = getCharsByRank('B');
    const cChars = getCharsByRank('C');

    return `
      <div class="guide-article">
        <h2 class="guide-title">🎪 ${isRu ? 'Баннеры найма, Таблицы шансов дропа и Система Гаранта' : isCn ? '招募卡池机制、全角色掉落概率表与保底规则' : 'Summon Banners, Drop Rate Tables & Pity Systems'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Полное расписание актуальных баннеров героинь и скинов, математически точные таблицы вероятностей призыва для каждого ранга (S/A/B/C) и правила гаранта.' 
            : isCn 
            ? '最新UP卡池、全阶级角色精准招募概率汇总、许愿单保底机制与皮肤抽卡指南。' 
            : 'Current rate-up banner schedule, character drop rate tables per rarity rank (S/A/B/C), and wishlist pity rules.'}
        </p>

        <!-- Banner Schedule & Current Rate-Up Cards -->
        <div style="margin-top: 24px;">
          <div class="section-heading" style="font-size: 16px; font-weight: 800; color: #ffffff; display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <span>🌟</span> <span>${isRu ? 'Актуальные и Лимитированные Баннеры Персонажей' : isCn ? '当前活跃与限时角色卡池' : 'Current Active & Rate-Up Banners'}</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 14px; margin-bottom: 24px;">
            <!-- Current Rate-Up Banner -->
            <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(15, 23, 42, 0.95)); border: 1.5px solid rgba(239, 68, 68, 0.4); border-radius: var(--radius-md); padding: 16px; position: relative; overflow: hidden;">
              <div style="position: absolute; top: 12px; right: 12px; background: #ef4444; color: #ffffff; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
                🔥 ТЕКУЩИЙ RATE-UP
              </div>
              <div style="font-size: 12px; color: #f87171; font-weight: 700;">Лимитированный Баннер</div>
              <div style="font-size: 18px; font-weight: 800; color: #ffffff; margin-top: 2px;">🌹 Владычица роз (Rose Sovereign)</div>
              <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">ID: M13307 • Ранг: S★ • Элемент: Огонь</div>
              <div style="margin-top: 10px; font-size: 13px; line-height: 1.5; color: #cbd5e1;">
                Повышенный шанс получения: составляет <strong>50% от всех выпавших S-ранг героинь</strong> (1.25% абсолютный шанс за крутку).
              </div>
              <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
                <span style="font-size: 11.5px; color: #fca5a5;">📅 13.08.2026 — 24.09.2026</span>
                <button class="action-btn primary-btn" onclick="App.openCharacterModal('M13307')" style="font-size: 11px; padding: 3px 10px; background: rgba(239,68,68,0.25); border-color: #ef4444; color: #fff;">
                  Профиль героини ➔
                </button>
              </div>
            </div>

            <!-- Alter Summon Banner -->
            <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(15, 23, 42, 0.95)); border: 1.5px solid rgba(168, 85, 247, 0.4); border-radius: var(--radius-md); padding: 16px; position: relative;">
              <div style="position: absolute; top: 12px; right: 12px; background: #a855f7; color: #ffffff; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
                🔮 АЛЬТЕР-ПУЛ
              </div>
              <div style="font-size: 12px; color: #c084fc; font-weight: 700;">Эксклюзивный Баннер</div>
              <div style="font-size: 18px; font-weight: 800; color: #ffffff; margin-top: 2px;">🌌 Призыв Иных Миров (Alter Pool)</div>
              <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">Валюта: Альтер-билеты / Самоцветы</div>
              <div style="margin-top: 10px; font-size: 13px; line-height: 1.5; color: #cbd5e1;">
                Пул включает 60 эксклюзивных Альтер-героинь: <em>Ледяная Злодейка, Альтер Святой сабли, Зайчиха-Маг, Шагающая по ветру</em>.
              </div>
              <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
                <span style="font-size: 11.5px; color: #d8b4fe;">💎 200 кристаллов / крутка</span>
                <button class="action-btn secondary-btn" onclick="App.setTab('characters');" style="font-size: 11px; padding: 3px 10px;">
                  Каталог Альтеров ➔
                </button>
              </div>
            </div>
          </div>

          <!-- PRIMARY TABLE: Character Drop Rates Table -->
          <div class="detail-section" style="background: rgba(10, 15, 29, 0.9); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px;">
            <div class="section-heading" style="font-size: 16px; font-weight: 800; color: #ffffff; display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <span>📊 Таблица шансов дропа персонажей по рангам</span>
              <span style="font-size: 12px; color: #38bdf8; font-weight: normal;">Базовый пулл найма</span>
            </div>

            <div style="overflow-x: auto;">
              <table class="guide-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
                <thead>
                  <tr style="background: rgba(15, 23, 42, 0.95); border-bottom: 2px solid rgba(56, 189, 248, 0.4);">
                    <th style="padding: 10px 12px; color: #f1f5f9;">Ранг (Редкость)</th>
                    <th style="padding: 10px 12px; color: #facc15;">Базовый шанс (%)</th>
                    <th style="padding: 10px 12px; color: #38bdf8;">Правила Гаранта (Pity)</th>
                    <th style="padding: 10px 12px; color: #c084fc;">Героини в пуле (${charsData.length})</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- S Rank -->
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(234, 179, 8, 0.04);">
                    <td style="padding: 12px;">
                      <span class="tag-badge" style="background: rgba(234, 179, 8, 0.15); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.4); font-weight: 800; font-size: 12px; padding: 3px 8px;">
                        ⭐ S★ (Божественные)
                      </span>
                    </td>
                    <td style="padding: 12px; font-size: 16px; font-weight: 800; color: #facc15;">
                      2.50%
                      <div style="font-size: 10.5px; color: var(--text-muted); font-weight: normal; margin-top: 2px;">(Rate-Up: 1.25%)</div>
                    </td>
                    <td style="padding: 12px; color: #e2e8f0; line-height: 1.5;">
                      🎯 <strong>100 круток</strong> жесткий гарант на героиню из Списка Желаний (Wishlist). При выпадении счетчик сбрасывается.
                    </td>
                    <td style="padding: 12px;">
                      <div style="display: flex; gap: 4px; flex-wrap: wrap; max-height: 80px; overflow-y: auto;">
                        ${sChars.map(c => `
                          <span class="tag-badge clickable-badge" onclick="App.openCharacterModal('${c.id}')" title="${this.escapeHtml(c.name)}" style="background: rgba(234, 179, 8, 0.1); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3); font-size: 11px; padding: 2px 6px; cursor: pointer;">
                            ${this.escapeHtml(c.name)}
                          </span>
                        `).join('')}
                      </div>
                    </td>
                  </tr>

                  <!-- A Rank -->
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(168, 85, 247, 0.04);">
                    <td style="padding: 12px;">
                      <span class="tag-badge" style="background: rgba(168, 85, 247, 0.15); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.4); font-weight: 800; font-size: 12px; padding: 3px 8px;">
                        👑 A★ (Эпические)
                      </span>
                    </td>
                    <td style="padding: 12px; font-size: 16px; font-weight: 800; color: #c084fc;">
                      15.00%
                    </td>
                    <td style="padding: 12px; color: #e2e8f0; line-height: 1.5;">
                      ✨ <strong>Гарант каждые 10 круток:</strong> минимум 1 персонаж ранга A★ или выше.
                    </td>
                    <td style="padding: 12px;">
                      <div style="display: flex; gap: 4px; flex-wrap: wrap; max-height: 80px; overflow-y: auto;">
                        ${aChars.map(c => `
                          <span class="tag-badge clickable-badge" onclick="App.openCharacterModal('${c.id}')" title="${this.escapeHtml(c.name)}" style="background: rgba(168, 85, 247, 0.1); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3); font-size: 11px; padding: 2px 6px; cursor: pointer;">
                            ${this.escapeHtml(c.name)}
                          </span>
                        `).join('')}
                      </div>
                    </td>
                  </tr>

                  <!-- B Rank -->
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(56, 189, 248, 0.04);">
                    <td style="padding: 12px;">
                      <span class="tag-badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.4); font-weight: 800; font-size: 12px; padding: 3px 8px;">
                        🔷 B★ (Редкие)
                      </span>
                    </td>
                    <td style="padding: 12px; font-size: 16px; font-weight: 800; color: #38bdf8;">
                      35.00%
                    </td>
                    <td style="padding: 12px; color: var(--text-muted); line-height: 1.5;">
                      Базовое наполнение пула. Используются для осколков возвышения и алхимии.
                    </td>
                    <td style="padding: 12px;">
                      <div style="display: flex; gap: 4px; flex-wrap: wrap; max-height: 80px; overflow-y: auto;">
                        ${bChars.map(c => `
                          <span class="tag-badge clickable-badge" onclick="App.openCharacterModal('${c.id}')" title="${this.escapeHtml(c.name)}" style="background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); font-size: 11px; padding: 2px 6px; cursor: pointer;">
                            ${this.escapeHtml(c.name)}
                          </span>
                        `).join('')}
                      </div>
                    </td>
                  </tr>

                  <!-- C Rank -->
                  <tr style="background: rgba(74, 222, 128, 0.04);">
                    <td style="padding: 12px;">
                      <span class="tag-badge" style="background: rgba(74, 222, 128, 0.15); color: #4ade80; border: 1px solid rgba(74, 222, 128, 0.4); font-weight: 800; font-size: 12px; padding: 3px 8px;">
                        🟢 C★ (Обычные)
                      </span>
                    </td>
                    <td style="padding: 12px; font-size: 16px; font-weight: 800; color: #4ade80;">
                      47.50%
                    </td>
                    <td style="padding: 12px; color: var(--text-muted); line-height: 1.5;">
                      Базовые воительницы. Легко прокачиваются до максимума для быстрого закрытия Кодекса.
                    </td>
                    <td style="padding: 12px;">
                      <div style="display: flex; gap: 4px; flex-wrap: wrap; max-height: 80px; overflow-y: auto;">
                        ${cChars.map(c => `
                          <span class="tag-badge clickable-badge" onclick="App.openCharacterModal('${c.id}')" title="${this.escapeHtml(c.name)}" style="background: rgba(74, 222, 128, 0.1); color: #4ade80; border: 1px solid rgba(74, 222, 128, 0.3); font-size: 11px; padding: 2px 6px; cursor: pointer;">
                            ${this.escapeHtml(c.name)}
                          </span>
                        `).join('')}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- SECONDARY TABLE: Skin Summon Table -->
          <div class="detail-section" style="background: rgba(10, 15, 29, 0.85); border: 1px solid rgba(244, 114, 182, 0.25); border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px;">
            <div class="section-heading" style="font-size: 15px; font-weight: 800; color: #ffffff; display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
              <span>👗</span> <span>Баннеры Обликов / Скинов (Skin Summon)</span>
            </div>
            <div style="overflow-x: auto;">
              <table class="guide-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
                <thead>
                  <tr style="background: rgba(15, 23, 42, 0.95); border-bottom: 2px solid rgba(244, 114, 182, 0.4);">
                    <th style="padding: 8px 12px; color: #f1f5f9;">Облик персонажа</th>
                    <th style="padding: 8px 12px; color: #f472b6;">Ранг</th>
                    <th style="padding: 8px 12px; color: #38bdf8;">ID Скина</th>
                    <th style="padding: 8px 12px; color: #fbbf24;">Период Up-шанса</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <td style="padding: 10px 12px; font-weight: 700; color: #fff;">Владычица роз (Rose Sovereign)</td>
                    <td style="padding: 10px 12px; color: #facc15; font-weight: 800;">S★</td>
                    <td style="padding: 10px 12px; color: var(--text-muted);">M13307_000</td>
                    <td style="padding: 10px 12px; color: #4ade80; font-weight: 700;">13.08.2026 — 03.09.2026 (Активен)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <td style="padding: 10px 12px; font-weight: 700; color: #fff;">Троллиха-чародейка (Troll Sorceress)</td>
                    <td style="padding: 10px 12px; color: #facc15; font-weight: 800;">S★</td>
                    <td style="padding: 10px 12px; color: var(--text-muted);">M12303_000</td>
                    <td style="padding: 10px 12px; color: #f59e0b; font-weight: 700;">03.09.2026 — 24.09.2026 (Скоро)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <td style="padding: 10px 12px; font-weight: 700; color: #fff;">Снежный рыцарь (Snowman Knightess)</td>
                    <td style="padding: 10px 12px; color: #facc15; font-weight: 800;">S★</td>
                    <td style="padding: 10px 12px; color: var(--text-muted);">M11303_002</td>
                    <td style="padding: 10px 12px; color: var(--text-muted);">23.07.2026 — Бессрочно в пуле</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 12px; font-weight: 700; color: #fff;">Лесные нимфы (Forest Nymphs)</td>
                    <td style="padding: 10px 12px; color: #facc15; font-weight: 800;">S★</td>
                    <td style="padding: 10px 12px; color: var(--text-muted);">M54301_000</td>
                    <td style="padding: 10px 12px; color: var(--text-muted);">02.07.2026 — Бессрочно в пуле</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- THIRD TABLE: Talent Wishlist Pity Table -->
          <div class="detail-section" style="background: rgba(10, 15, 29, 0.85); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: var(--radius-md); padding: 18px;">
            <div class="section-heading" style="font-size: 15px; font-weight: 800; color: #ffffff; display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
              <span>🎯</span> <span>Скрытая система гаранта на Золотые Таланты (Wishlist Pity)</span>
            </div>
            <p style="font-size: 13px; color: #94a3b8; line-height: 1.6; margin-bottom: 12px;">
              При реролле страниц талантов плодами в игре действует математически доказанная система нарастающего шанса:
            </p>
            <div style="overflow-x: auto;">
              <table class="guide-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
                <thead>
                  <tr style="background: rgba(15, 23, 42, 0.95); border-bottom: 2px solid rgba(234, 179, 8, 0.4);">
                    <th style="padding: 8px 12px; color: #f1f5f9;">Количество золотых роллов без целевого таланта</th>
                    <th style="padding: 8px 12px; color: #facc15;">Бонусный шанс выпадения</th>
                    <th style="padding: 8px 12px; color: #4ade80;">Итоговая вероятность</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <td style="padding: 8px 12px; color: #cbd5e1;">0 — 50 золотых талантов (Стадия накопления)</td>
                    <td style="padding: 8px 12px; color: var(--text-muted);">+0% (Счётчик 0/50)</td>
                    <td style="padding: 8px 12px; color: var(--text-muted);">Базовый шанс пула (~1.5%)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <td style="padding: 8px 12px; color: #cbd5e1;">51-й золотой талант</td>
                    <td style="padding: 8px 12px; color: #facc15; font-weight: 700;">+5%</td>
                    <td style="padding: 8px 12px; color: #facc15; font-weight: 700;">~6.5%</td>
                  </tr>
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <td style="padding: 8px 12px; color: #cbd5e1;">60-й золотой талант</td>
                    <td style="padding: 8px 12px; color: #facc15; font-weight: 700;">+50%</td>
                    <td style="padding: 8px 12px; color: #facc15; font-weight: 700;">~51.5%</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 12px; color: #fde047; font-weight: 800;">70-й золотой талант (Hard Pity)</td>
                    <td style="padding: 8px 12px; color: #4ade80; font-weight: 800;">+100%</td>
                    <td style="padding: 8px 12px; color: #4ade80; font-weight: 800;">100% (АБСОЛЮТНЫЙ ГАРАНТ)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 3. Battle Phases
  getPhasesContent(lang = 'RU') {
    return `
      <div class="guide-article">
        <h2 class="guide-title">⚔️ Порядок ходов, Фазы боя и Жизненный цикл действий</h2>
        <p class="guide-lead">Боевая система делится на строгие фазы с точками входа (start) и выхода (after/end).</p>
        <div style="background: rgba(15, 23, 42, 0.85); padding: 16px; border-radius: var(--radius-md); border-left: 4px solid #38bdf8; font-size: 13.5px; line-height: 1.8; color: #cbd5e1; margin-top: 16px;">
          <p><strong>1. Battle Start:</strong> срабатывает 1 раз до начала действий. Персонажи с максимумом маны получают Extra Action перед естественным ходом.</p>
          <p><strong>2. Turn Start:</strong> начало каждого раунда. Чеклисты урона, защита, Decay (сжигание маны).</p>
          <p><strong>3. Action Start ➔ Hit Phase ➔ After Phase:</strong> цепочки выполнения ударов и триггеры наложения статусов.</p>
        </div>
      </div>
    `;
  },

  // 4. Targeting & Distance
  getTargetingContent(lang = 'RU') {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🎯 Дистанция, Позиционирование на поле и Таргетинг</h2>
        <p class="guide-lead">Поклеточная система дистанции (Range) и приоритеты выбора целей в отряде.</p>
        <div style="background: rgba(15, 23, 42, 0.85); padding: 16px; border-radius: var(--radius-md); border-left: 4px solid #a855f7; font-size: 13.5px; line-height: 1.8; color: #cbd5e1; margin-top: 16px;">
          <p>• <strong>Distance Value:</strong> Каждый персонаж между вами и целью добавляет +1 к требуемой дистанции.</p>
          <p>• <strong>Precision (Меткость):</strong> Атакует врагов с заднего ряда к переднему.</p>
          <p>• <strong>Taunt (Провокация):</strong> Заставляет атаковать переднюю линию и сбивает режим Precision.</p>
        </div>
      </div>
    `;
  },

  // 5. Damage & Formulas
  getDamageContent(lang = 'RU') {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🛡️ Формулы урона, Защита (Def), Стойкость (Toughness) и Потеря HP</h2>
        <p class="guide-lead">Расчет базового урона, конвертация характеристик и состояние Weakness Broken.</p>
        <div style="background: rgba(15, 23, 42, 0.85); padding: 16px; border-radius: var(--radius-md); border-left: 4px solid #facc15; font-size: 13.5px; line-height: 1.8; color: #cbd5e1; margin-top: 16px;">
          <p>• <strong>Def >= Atk:</strong> атака полностью поглощается (урон = 0).</p>
          <p>• <strong>Toughness Broken:</strong> при сбивании стойкости защита отключается и сменяется слабым показателем Weakness.</p>
          <p>• <strong>HP Loss:</strong> чистый урон, пробивающий щиты и защиту (не убивает расу Металла).</p>
        </div>
      </div>
    `;
  },

  // 6. Elements & Roles
  getElementsContent(lang = 'RU') {
    return `
      <div class="guide-article">
        <h2 class="guide-title">✨ Стихии, Классы, Роли и Построение команды</h2>
        <p class="guide-lead">Синергии стихий (Огонь, Вода, Ветер, Земля, Свет, Тьма) и роли воительниц.</p>
      </div>
    `;
  },

  // 7. Meta Builds
  getBuildsContent(lang = 'RU') {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🏆 Мета-Билды, Топовые Команды и Тир-Лист</h2>
        <p class="guide-lead">Лучшие протестированные связки для прохождения карт, Бездны и Исекай-порталов.</p>
        <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 18px;">
          <div style="background: rgba(15, 23, 42, 0.85); padding: 14px 16px; border-radius: var(--radius-md); border-left: 4px solid #4ade80;">
            <div style="font-weight: 700; color: #fff; font-size: 15px;">🟢 Команда Преследования Принцессы (Follow-up Team)</div>
            <div style="font-size: 13px; color: #cbd5e1; margin-top: 4px;">Керри: <strong>Принцесса гарпий (M12301)</strong>. Делает 70+ атак преследования за раунд. Топ бюджетный старт.</div>
          </div>
          <div style="background: rgba(15, 23, 42, 0.85); padding: 14px 16px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div style="font-weight: 700; color: #fff; font-size: 15px;">🥕 Команда Счастливой Зайчихи / Гриб-Кентавр-Кот (Lucky Rabbit)</div>
            <div style="font-size: 13px; color: #cbd5e1; margin-top: 4px;">Керри: <strong>Великая волшебница (M13305)</strong>. Лучшая пачка для скоростной зачистки и максимального дропа.</div>
          </div>
          <div style="background: rgba(15, 23, 42, 0.85); padding: 14px 16px; border-radius: var(--radius-md); border-left: 4px solid #38bdf8;">
            <div style="font-weight: 700; color: #fff; font-size: 15px;">❄️ Команда Зловещей Ледяной Злодейки (Malice Ice Fiend)</div>
            <div style="font-size: 13px; color: #cbd5e1; margin-top: 4px;">Керри: <strong>Астральная Злодейка [Альтер] (M53301_001)</strong>. Наносит миллионы внеочередного урона.</div>
          </div>
        </div>
      </div>
    `;
  },

  // 8. Events
  getEventsContent(lang = 'RU') {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🎁 Календарь Игровых Событий и Ивентов</h2>
        <p class="guide-lead">Расписание временных активностей, рейдов и наградных кампаний.</p>
        <ul style="padding-left: 20px; line-height: 2; color: #cbd5e1; font-size: 13.5px; margin-top: 14px;">
          <li>🔥 <strong>Исекай-рейд:</strong> 12.08.2026 — 23.09.2026 (Магазин Исекай-кристаллов)</li>
          <li>🏆 <strong>Испытание на вершине (Peak Match):</strong> 19.08.2026 — 02.09.2026 (Хозяйка гильдии)</li>
          <li>⚙️ <strong>Заводной тайник:</strong> 26.08.2026 — 09.09.2026 (Рулетка шестеренок)</li>
          <li>🏰 <strong>Преображение гильдии:</strong> 09.09.2026 — 23.09.2026 (Интерьер)</li>
        </ul>
      </div>
    `;
  },

  // 9. Promo Codes
  getCodesContent(lang = 'RU') {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🎟️ Промокоды и Подарочные коды (Gift Codes)</h2>
        <p class="guide-lead">Актуальные рабочие промокоды для получения самоцветов, свитков найма и золота.</p>
        <div style="overflow-x: auto; margin-top: 16px;">
          <table class="guide-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
            <thead>
              <tr style="background: rgba(15, 23, 42, 0.95); border-bottom: 2px solid rgba(56, 189, 248, 0.4);">
                <th style="padding: 10px 12px; color: #f1f5f9;">Код</th>
                <th style="padding: 10px 12px; color: #38bdf8;">Награда</th>
                <th style="padding: 10px 12px; color: #facc15;">Действие</th>
              </tr>
            </thead>
            <tbody>
              ${[
                { code: 'TIMBER0813', reward: '1 Большой припас (500 ⚡), 100 Самоцветов, 20 000 Золота' },
                { code: 'MGMMAG', reward: 'Подарочный набор ресурсов и самоцветов' },
                { code: 'HXSNGH0402', reward: '100 Самоцветов, 1 Билет для найма' },
                { code: 'HXSNGH888', reward: '100 Самоцветов, 5 Плодов таланта' },
                { code: 'HXSNGH666', reward: '100 Самоцветов, 1 Клевер удачи' },
                { code: 'vip888', reward: '100 Самоцветов, 1 Необычный ящик' },
                { code: 'vip777', reward: '100 Самоцветов, 10 000 Золота' },
                { code: 'vip666', reward: '100 Самоцветов, 5 Темно-фиолетовых кристаллов' }
              ].map(c => `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                  <td style="padding: 10px 12px; font-weight: 800; color: #38bdf8; font-family: monospace; font-size: 14px;">${c.code}</td>
                  <td style="padding: 10px 12px; color: #e2e8f0;">${c.reward}</td>
                  <td style="padding: 10px 12px;">
                    <button class="action-btn secondary-btn" onclick="GuidesView.copyPromoCode('${c.code}')" style="padding: 3px 10px; font-size: 11.5px;">
                      📋 Скопировать
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // 10. Community Resources
  getResourcesContent(lang = 'RU') {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🌐 Авторитетные Внешние Источники и Базы Данных</h2>
        <p class="guide-lead">Проверенные инструменты сообщества, калькуляторы и вики-ресурсы.</p>
        <ul style="padding-left: 20px; line-height: 2; color: #cbd5e1; font-size: 13.5px; margin-top: 14px;">
          <li>🌐 <a href="https://gomg-wiki.pages.dev/" target="_blank" style="color: #38bdf8; text-decoration: underline;">GMG Community Wiki & Tools</a> — главная англоязычная база данных, оптимизатор гачи и симулятор талантов.</li>
          <li>🇨🇳 <a href="https://www.taptap.cn/moment/825053452206868359" target="_blank" style="color: #facc15; text-decoration: underline;">Мета-гайды TapTap от 叶叶小飞花</a> — глубокий разбор меты и тир-листов.</li>
        </ul>
      </div>
    `;
  },


  getTilesContent(lang = "RU") {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const allTiles = (typeof App !== 'undefined' && App.state?.mapTiles && App.state.mapTiles.length > 0) 
      ? App.state.mapTiles 
      : (this.defaultMapTiles || []);

    const activeFilter = this.tilesFilter || 'all';
    const searchQuery = (this.tilesSearchQuery || '').toLowerCase().trim();

    const specialTilesCount = allTiles.filter(t => t.is_special || t.category === 'special' || t.category === 'mimic' || t.category === 'merchant' || (t.special_spot_type && t.special_spot_type > 0)).length;
    const resourceTilesCount = allTiles.filter(t => !t.is_special && t.category !== 'special' && t.category !== 'mimic' && t.category !== 'merchant').length;

    const filteredTiles = allTiles.filter(t => {
      const isSpec = t.is_special || t.category === 'special' || t.category === 'mimic' || t.category === 'merchant' || (t.special_spot_type && t.special_spot_type > 0);
      const nameRu = (t.name?.RU || '').toLowerCase();
      const nameCn = (t.name?.CN || '');
      const nameEn = (t.name?.EN || '').toLowerCase();

      if (activeFilter !== 'all') {
        if (activeFilter === 'special' && !isSpec) return false;
        if (activeFilter === 'resource' && isSpec) return false;
        if (activeFilter === 'chest' && t.category !== 'chest' && (!t.rates?.chest || t.rates.chest < 40)) return false;
        if (activeFilter === 'altar' && !nameRu.includes('алтарь') && !nameRu.includes('стела') && !nameRu.includes('гробниц') && !nameCn.includes('祭坛') && !nameCn.includes('石碑') && !nameCn.includes('墓')) return false;
        if (activeFilter === 'merchant' && !nameRu.includes('торговец') && !nameCn.includes('商人')) return false;
        if (activeFilter === 'mimic' && !nameRu.includes('мимик') && !nameCn.includes('宝箱怪')) return false;
        if (activeFilter === 'terrain' && isSpec) return false;
      }
      if (searchQuery) {
        const name = (t.name?.[lang] || t.name?.RU || t.name?.CN || '').toLowerCase();
        const cat = (typeof t.category_name === 'object' ? (t.category_name[lang] || t.category_name.RU || '') : (t.category_name || '')).toLowerCase();
        const desc = (t.description?.[lang] || t.description?.RU || t.description?.CN || '').toLowerCase();
        const biomes = (t.biomes?.[lang] || []).join(' ').toLowerCase();
        const mats = (t.materials?.[lang] || []).join(' ').toLowerCase();
        if (!name.includes(searchQuery) && !cat.includes(searchQuery) && !desc.includes(searchQuery) && !biomes.includes(searchQuery) && !mats.includes(searchQuery)) {
          return false;
        }
      }
      return true;
    });

    const filterLabels = {
      all: isRu ? `🌐 Все клетки (${allTiles.length})` : isCn ? `🌐 全部地块 (${allTiles.length})` : `🌐 All Tiles (${allTiles.length})`,
      special: isRu ? `⭐ Особые клетки (${specialTilesCount})` : isCn ? `⭐ 特殊地块 (${specialTilesCount})` : `⭐ Special Spots (${specialTilesCount})`,
      resource: isRu ? `🌿 Сбор ресурсов (${resourceTilesCount})` : isCn ? `🌿 资源采集 (${resourceTilesCount})` : `🌿 Resource Plots (${resourceTilesCount})`,
      chest: isRu ? '📦 Сундуки и Тотемы' : isCn ? '📦 宝箱与图腾' : '📦 Chests & Totems',
      altar: isRu ? '🏛️ Алтари и Стелы' : isCn ? '🏛️ 祭坛与石碑' : '🏛️ Altars & Steles',
      merchant: isRu ? '🧙‍♂️ Торговцы' : isCn ? '🧙‍♂️ 游商地精' : '🧙‍♂️ Merchants',
      mimic: isRu ? '👹 Мимики' : isCn ? '👹 宝箱怪' : '👹 Mimics',
      terrain: isRu ? '🗺️ Обычный рельеф' : isCn ? '🗺️ 基础地形' : '🗺️ Basic Terrain'
    };

    const catBadges = {
      chest: { bg: 'rgba(234, 179, 8, 0.12)', text: '#facc15', border: 'rgba(234, 179, 8, 0.3)', icon: '📦' },
      resource: { bg: 'rgba(34, 197, 94, 0.12)', text: '#4ade80', border: 'rgba(34, 197, 94, 0.3)', icon: '🌿' },
      altar: { bg: 'rgba(168, 85, 247, 0.12)', text: '#c084fc', border: 'rgba(168, 85, 247, 0.3)', icon: '🏛️' },
      merchant: { bg: 'rgba(245, 158, 11, 0.12)', text: '#fbbf24', border: 'rgba(245, 158, 11, 0.3)', icon: '🧙‍♂️' },
      mimic: { bg: 'rgba(239, 68, 68, 0.12)', text: '#f87171', border: 'rgba(239, 68, 68, 0.3)', icon: '👹' },
      special: { bg: 'rgba(250, 204, 21, 0.12)', text: '#fde047', border: 'rgba(250, 204, 21, 0.35)', icon: '⭐' },
      terrain: { bg: 'rgba(56, 189, 248, 0.12)', text: '#38bdf8', border: 'rgba(56, 189, 248, 0.3)', icon: '🗺️' }
    };

    return `
      <div class="guide-article">
        <div class="guide-header-row" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
          <div>
            <h2 class="guide-title" style="margin-bottom: 6px;">🗺️ ${isRu ? 'Интерактивный Атлас Тайлов и Таблицы Дропа' : isCn ? '全地块互动图鉴与区域掉落概率' : 'Interactive Map Tiles & Drop Atlas'}</h2>
            <p class="guide-lead" style="margin-bottom: 0;">
              ${isRu ? `Исследуйте все ${allTiles.length} типов клеток карты с полной расшифровкой игровых вероятностей дропа, сундуков и механик.` : isCn ? `收录全部 ${allTiles.length} 种地块类型，精准展示产出掉率、宝箱、采集素材及特殊交互机制。` : `Explore all ${allTiles.length} map tile types with complete game drop tables, chest contents, and mechanics.`}
            </p>
          </div>
          <div style="font-size: 12px; color: var(--text-muted); background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.08); padding: 6px 14px; border-radius: var(--radius-md);">
            ${isRu ? 'Всего тайлов в игре:' : isCn ? '地块总数:' : 'Total Tiles:'} <strong style="color: #38bdf8;">${allTiles.length}</strong>
          </div>
        </div>

        <!-- Filter Pills Bar -->
        <div class="tiles-filter-bar" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          ${Object.entries(filterLabels).map(([key, label]) => `
            <button class="filter-pill ${activeFilter === key ? 'active' : ''}" onclick="GuidesView.setTilesFilter('${key}')" style="font-size: 12.5px; padding: 6px 14px;">
              ${label}
            </button>
          `).join('')}
        </div>

        <!-- Search Bar -->
        <div style="margin-bottom: 20px; position: relative;">
          <input type="text" 
                 id="tilesSearchInput" 
                 class="search-input" 
                 placeholder="${isRu ? '🔍 Поиск по названию тайла, биому, ресурсам или механике...' : isCn ? '🔍 搜索地块名称、区域、产出素材或机制...' : '🔍 Search by tile name, biome, resources, or mechanics...'}"
                 value="${this.escapeHtml(this.tilesSearchQuery || '')}"
                 oninput="GuidesView.setTilesSearch(this.value)"
                 style="width: 100%; padding: 10px 14px 10px 38px; border-radius: var(--radius-md); background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255,255,255,0.1); color: #fff; font-size: 13.5px;">
          <span style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-size: 14px; color: var(--text-muted); pointer-events: none;">🔍</span>
        </div>

        <!-- Tiles Grid -->
        <div class="map-tiles-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">
          ${filteredTiles.length === 0 ? `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
              ${isRu ? 'По вашему запросу тайлов не найдено.' : isCn ? '没有找到符合条件的地块。' : 'No tiles found matching your criteria.'}
            </div>
          ` : filteredTiles.map(t => {
              const name = t.name?.[lang] || t.name?.RU || t.name?.CN || t.id;
              const isSpec = t.is_special || t.category === 'special' || t.category === 'mimic' || t.category === 'merchant' || (t.special_spot_type && t.special_spot_type > 0);
              const catKey = t.category || (isSpec ? 'special' : 'terrain');
              const currentCatStyle = catBadges[catKey] || catBadges.terrain;
              const catName = typeof t.category_name === 'object' ? (t.category_name[lang] || t.category_name.RU || t.category_name.CN || catKey) : (t.category_name || catKey);
              const biomes = t.biomes?.[lang] || t.biomes?.RU || t.biomes?.CN || [];
              const biomesStr = biomes.length > 0 ? biomes.slice(0, 2).join(', ') + (biomes.length > 2 ? '...' : '') : (isRu ? 'Все зоны' : (isCn ? '全部区域' : 'All Zones'));
              const r = t.rates || {};
              const matsList = t.materials?.[lang] || t.materials?.RU || t.materials?.CN || [];
              const desc = t.description?.[lang] || t.description?.RU || t.description?.CN || '';
              const hasDrops = (r.chest > 0 || r.equip > 0 || r.role > 0 || r.materials > 0 || r.stones > 0 || r.gold > 0);

              return `
                <div class="map-tile-card" onclick="App.openTileModal('${t.id}')" style="display: flex; flex-direction: column; cursor: pointer; border: 1px solid ${isSpec ? 'rgba(250, 204, 21, 0.25)' : 'rgba(255,255,255,0.07)'}; background: ${isSpec ? 'radial-gradient(ellipse at top right, rgba(250, 204, 21, 0.06), rgba(15, 23, 42, 0.95))' : 'rgba(15, 23, 42, 0.85)'}; border-radius: var(--radius-md); padding: 14px 16px; transition: all 0.2s ease; box-shadow: 0 4px 16px rgba(0,0,0,0.25);">
                  
                  <!-- Card Header -->
                  <div class="map-tile-header" style="display: flex; gap: 12px; align-items: center; margin-bottom: 10px;">
                    <div class="map-tile-icon-box" style="font-size: 26px; width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.08); flex-shrink: 0;">
                      ${t.icon || '🗺️'}
                    </div>
                    <div class="map-tile-info" style="flex: 1; min-width: 0;">
                      <div class="map-tile-name" style="font-size: 15px; font-weight: 700; color: #ffffff; display: flex; align-items: center; justify-content: space-between; gap: 6px;">
                        <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${this.escapeHtml(name)}</span>
                        ${isSpec ? `<span style="font-size: 10px; background: rgba(250, 204, 21, 0.15); color: #fde047; padding: 2px 7px; border-radius: 4px; font-weight: 800; border: 1px solid rgba(250, 204, 21, 0.35); flex-shrink: 0;">${isRu ? '⭐ ОСОБАЯ' : (isCn ? '⭐ 特殊' : '⭐ SPECIAL')}</span>` : ''}
                      </div>
                      <div class="map-tile-meta" style="display: flex; gap: 6px; margin-top: 4px; align-items: center; flex-wrap: wrap;">
                        <span class="tag-badge" style="background: ${currentCatStyle.bg}; color: ${currentCatStyle.text}; border: 1px solid ${currentCatStyle.border}; font-size: 10.5px; padding: 1px 7px; border-radius: 4px;">
                          ${currentCatStyle.icon} ${this.escapeHtml(catName)}
                        </span>
                        <span class="tag-badge" style="background: rgba(255,255,255,0.04); color: var(--text-muted); font-size: 10px; padding: 1px 6px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.06);">
                          📐 ${t.size_str || '1x1'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Description / Mechanics -->
                  ${desc ? `
                    <div style="font-size: 12px; line-height: 1.55; color: #94a3b8; background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: var(--radius-sm); margin-bottom: 10px; border-left: 3px solid ${isSpec ? '#facc15' : 'rgba(56, 189, 248, 0.4)'};">
                      ${this.escapeHtml(desc)}
                    </div>
                  ` : ''}

                  <!-- Drop Bars -->
                  ${hasDrops ? `
                    <div style="background: rgba(10, 14, 23, 0.65); padding: 9px 11px; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; gap: 6px; margin-bottom: 10px;">
                      <div style="font-size: 11px; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; justify-content: space-between;">
                        <span>📊 ${isRu ? 'Шансы дропа категории' : (isCn ? '类别掉落概率' : 'Category Drop Rates')}</span>
                      </div>
                      
                      ${r.chest > 0 ? `
                        <div>
                          <div class="drop-rate-row" style="font-size: 11px; display: flex; justify-content: space-between; margin-bottom: 2px;">
                            <span style="color: #fbbf24; font-weight: 600;">📦 ${isRu ? 'Сундуки' : (isCn ? '宝箱' : 'Chests')}</span>
                            <span style="font-weight: 700; color: #ffffff;">${r.chest}%</span>
                          </div>
                          <div class="drop-rate-bar-bg" style="height: 5px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden;"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.chest)}%; height: 100%; background: #fbbf24; border-radius: 3px;"></div></div>
                        </div>
                      ` : ''}

                      ${r.equip > 0 ? `
                        <div>
                          <div class="drop-rate-row" style="font-size: 11px; display: flex; justify-content: space-between; margin-bottom: 2px;">
                            <span style="color: #f472b6; font-weight: 600;">⚔️ ${isRu ? 'Экипировка' : (isCn ? '装备' : 'Gear')}</span>
                            <span style="font-weight: 700; color: #ffffff;">${r.equip}%</span>
                          </div>
                          <div class="drop-rate-bar-bg" style="height: 5px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden;"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.equip)}%; height: 100%; background: #f472b6; border-radius: 3px;"></div></div>
                        </div>
                      ` : ''}

                      ${r.role > 0 ? `
                        <div>
                          <div class="drop-rate-row" style="font-size: 11px; display: flex; justify-content: space-between; margin-bottom: 2px;">
                            <span style="color: #c084fc; font-weight: 600;">👑 ${isRu ? 'Фрагменты' : (isCn ? '角色碎片' : 'Shards')}</span>
                            <span style="font-weight: 700; color: #ffffff;">${r.role}%</span>
                          </div>
                          <div class="drop-rate-bar-bg" style="height: 5px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden;"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.role)}%; height: 100%; background: #c084fc; border-radius: 3px;"></div></div>
                        </div>
                      ` : ''}

                      ${r.materials > 0 ? `
                        <div>
                          <div class="drop-rate-row" style="font-size: 11px; display: flex; justify-content: space-between; margin-bottom: 2px;">
                            <span style="color: #4ade80; font-weight: 600;">🌿 ${isRu ? 'Материалы / Детали' : (isCn ? '素材 / 零件' : 'Materials / Parts')}</span>
                            <span style="font-weight: 700; color: #ffffff;">${r.materials}%</span>
                          </div>
                          <div class="drop-rate-bar-bg" style="height: 5px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden;"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.materials)}%; height: 100%; background: #4ade80; border-radius: 3px;"></div></div>
                        </div>
                      ` : ''}

                      ${r.stones > 0 ? `
                        <div>
                          <div class="drop-rate-row" style="font-size: 11px; display: flex; justify-content: space-between; margin-bottom: 2px;">
                            <span style="color: #38bdf8; font-weight: 600;">💎 ${isRu ? 'Камни / Кристаллы' : (isCn ? '神石 / 晶石' : 'Stones / Crystals')}</span>
                            <span style="font-weight: 700; color: #ffffff;">${r.stones}%</span>
                          </div>
                          <div class="drop-rate-bar-bg" style="height: 5px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden;"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.stones)}%; height: 100%; background: #38bdf8; border-radius: 3px;"></div></div>
                        </div>
                      ` : ''}

                      ${r.gold > 0 ? `
                        <div>
                          <div class="drop-rate-row" style="font-size: 11px; display: flex; justify-content: space-between; margin-bottom: 2px;">
                            <span style="color: #facc15; font-weight: 600;">🪙 ${isRu ? 'Золото' : (isCn ? '金币' : 'Gold')}</span>
                            <span style="font-weight: 700; color: #ffffff;">${r.gold}%</span>
                          </div>
                          <div class="drop-rate-bar-bg" style="height: 5px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden;"><div class="drop-rate-bar-fill" style="width: ${Math.min(100, r.gold)}%; height: 100%; background: #facc15; border-radius: 3px;"></div></div>
                        </div>
                      ` : ''}
                    </div>
                  ` : `
                    <div style="background: rgba(255,255,255,0.02); padding: 9px 11px; border-radius: var(--radius-sm); border: 1px dashed rgba(255,255,255,0.08); margin-bottom: 10px;">
                      <div style="font-size: 11px; color: var(--text-muted); display: flex; align-items: center; gap: 6px;">
                        <span>⚡</span> <span>${isRu ? 'Особое небоевое событие / Взаимодействие' : (isCn ? '特殊非战斗交互 / 事件' : 'Special Non-Combat Event / Interaction')}</span>
                      </div>
                    </div>
                  `}

                  <!-- Specific Materials Badges -->
                  ${matsList.length > 0 ? `
                    <div style="display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 10px;">
                      ${matsList.map(m => `
                        <span class="tag-badge" style="background: rgba(34, 197, 94, 0.08); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.25); font-size: 10.5px; padding: 2px 8px; border-radius: 4px;">
                          💎 ${this.escapeHtml(m)}
                        </span>
                      `).join('')}
                    </div>
                  ` : ''}

                  <!-- Card Footer -->
                  <div style="margin-top: auto; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; align-items: center;">
                    <div style="font-size: 11.5px; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 170px;">
                      📍 ${this.escapeHtml(biomesStr)}
                    </div>
                    <div style="display: flex; gap: 6px; flex-shrink: 0;">
                      <button class="tile-action-link-btn" 
                              onclick="event.stopPropagation(); GuidesView.copyTileLink('${t.id}')" 
                              title="${isRu ? 'Скопировать ссылку' : (isCn ? '复制链接' : 'Copy link')}"
                              style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: #94a3b8; border-radius: var(--radius-sm); padding: 4px 9px; font-size: 11px; cursor: pointer; transition: all 0.15s ease;">
                        🔗
                      </button>
                      <button class="tile-action-detail-btn" 
                              onclick="event.stopPropagation(); App.openTileModal('${t.id}')"
                              style="background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.35); color: #38bdf8; font-weight: 700; border-radius: var(--radius-sm); padding: 4px 12px; font-size: 11.5px; cursor: pointer; transition: all 0.15s ease;">
                        ${isRu ? 'Подробнее' : (isCn ? '详情' : 'Details')} ➔
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
        </div>
      </div>
    `;
  },

  renderTileModal(tile, lang = null) {
    if (!tile) return '';
    const currentLang = (lang || (typeof App !== 'undefined' && App.state?.lang) || 'RU').toUpperCase();
    const isRu = currentLang === 'RU';
    const isCn = currentLang === 'CN';

    const name = tile.name?.[currentLang] || tile.name?.RU || tile.name?.CN || tile.id;
    const cat = tile.category || 'terrain';
    const catName = typeof tile.category_name === 'object' ? (tile.category_name[currentLang] || tile.category_name.RU || tile.category_name.CN || cat) : (tile.category_name || cat);
    const icon = tile.icon || '🗺️';
    const isSpec = tile.is_special || tile.category === 'special' || (tile.special_spot_type && tile.special_spot_type > 0);
    const biomes = tile.biomes?.[currentLang] || tile.biomes?.RU || tile.biomes?.CN || [];
    const mats = tile.materials?.[currentLang] || tile.materials?.RU || tile.materials?.CN || [];
    const rates = tile.rates || {};
    const dropsSummary = tile.drops_summary?.[currentLang] || tile.drops_summary?.RU || tile.drops_summary?.CN || [];
    const possibleChests = tile.possible_chests || [];
    const possibleEquips = tile.possible_equips || [];
    const descText = tile.description?.[currentLang] || tile.description?.RU || tile.description?.CN || '';
    const hasDrops = (rates.chest > 0 || rates.equip > 0 || rates.role > 0 || rates.materials > 0 || rates.stones > 0 || rates.gold > 0);

    const imageMappings = (typeof App !== 'undefined' && App.state?.imageMappings) ? App.state.imageMappings : {};

    const catBadges = {
      chest: { bg: 'rgba(234, 179, 8, 0.15)', text: '#facc15', border: 'rgba(234, 179, 8, 0.3)', icon: '📦' },
      resource: { bg: 'rgba(34, 197, 94, 0.15)', text: '#4ade80', border: 'rgba(34, 197, 94, 0.3)', icon: '🌿' },
      altar: { bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc', border: 'rgba(168, 85, 247, 0.3)', icon: '🏛️' },
      merchant: { bg: 'rgba(245, 158, 11, 0.15)', text: '#fbbf24', border: 'rgba(245, 158, 11, 0.3)', icon: '🧙‍♂️' },
      mimic: { bg: 'rgba(239, 68, 68, 0.15)', text: '#f87171', border: 'rgba(239, 68, 68, 0.3)', icon: '👹' },
      special: { bg: 'rgba(250, 204, 21, 0.15)', text: '#fde047', border: 'rgba(250, 204, 21, 0.35)', icon: '⭐' },
      terrain: { bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8', border: 'rgba(56, 189, 248, 0.3)', icon: '🗺️' }
    };
    const currentCatStyle = catBadges[cat] || catBadges.terrain;

    return `
      <div class="modal-dialog map-tile-modal-dialog" style="max-width: 760px; background: #0b1329; border: 1px solid rgba(56, 189, 248, 0.25); border-radius: var(--radius-lg); box-shadow: 0 20px 60px rgba(0,0,0,0.75);">
        <div class="modal-header" style="padding: 16px 22px; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: space-between;">
          <div class="modal-title-area" style="display: flex; align-items: center; gap: 14px;">
            ${(typeof App !== 'undefined' && App.renderModalBackButton) ? App.renderModalBackButton(currentLang) : ''}
            <div class="char-portrait-container" style="width: 54px; height: 54px; font-size: 28px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.45); border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.1); flex-shrink: 0;">
              ${icon}
            </div>
            <div>
              <div class="char-modal-name" style="font-size: 21px; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 8px;">
                <span>${this.escapeHtml(name)}</span>
                ${isSpec ? `<span style="font-size: 11px; background: rgba(250, 204, 21, 0.15); color: #fde047; padding: 2px 8px; border-radius: 4px; font-weight: 800; border: 1px solid rgba(250, 204, 21, 0.35);">${isRu ? '⭐ ОСОБАЯ КЛЕТКА' : (isCn ? '⭐ 特殊机制地块' : '⭐ SPECIAL TILE')}</span>` : ''}
              </div>
              <div style="font-size: 12px; color: var(--text-muted); font-family: monospace; margin-top: 3px;">
                ID: ${tile.id} ${tile.code ? `• Код: ${tile.code}` : ''} • ${isRu ? 'Размер:' : (isCn ? '尺寸:' : 'Size:')} ${tile.size_str || '1x1'}
              </div>
            </div>
          </div>
          <button class="modal-close-btn" onclick="App.closeModal()" style="font-size: 22px; cursor: pointer;">&times;</button>
        </div>

        <div class="modal-body" style="padding: 20px 22px; display: flex; flex-direction: column; gap: 18px; max-height: 80vh; overflow-y: auto;">
          <!-- Top Tags -->
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span class="tag-badge" style="background: ${currentCatStyle.bg}; color: ${currentCatStyle.text}; border: 1px solid ${currentCatStyle.border}; font-size: 12px; padding: 3px 10px;">
              ${currentCatStyle.icon} ${this.escapeHtml(catName)}
            </span>
            <span class="tag-badge" style="background: rgba(255,255,255,0.05); font-size: 12px; padding: 3px 10px;">
              📐 ${tile.size_str || '1x1'}
            </span>
            ${biomes.length > 0 ? `
              <span class="tag-badge" style="background: rgba(56, 189, 248, 0.08); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); font-size: 12px; padding: 3px 10px;">
                📍 ${biomes.slice(0, 3).join(', ')}${biomes.length > 3 ? ` (+${biomes.length - 3})` : ''}
              </span>
            ` : ''}
          </div>

          <!-- Description & Mechanics -->
          <div class="detail-section" style="margin-bottom: 0;">
            <div class="section-heading" style="margin-bottom: 8px;">📜 ${isRu ? 'Игровая механика и Описание' : (isCn ? '地块机制与详细说明' : 'Mechanics & Description')}</div>
            <div style="font-size: 13.5px; line-height: 1.6; color: #e2e8f0; background: rgba(10, 14, 23, 0.7); padding: 14px 16px; border-radius: var(--radius-md); border-left: 4px solid ${isSpec ? '#facc15' : '#38bdf8'}; box-shadow: inset 0 2px 8px rgba(0,0,0,0.4);">
              ${this.escapeHtml(descText)}
            </div>
          </div>

          <!-- CHEST-STYLE LOOT GRID: Possible Chests -->
          ${possibleChests.length > 0 && (rates.chest > 0 || isSpec) ? `
            <div class="detail-section" style="margin-bottom: 0;">
              <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <span>📦 ${isRu ? 'Возможные сундуки на тайле' : (isCn ? '可能产出宝箱' : 'Possible Chests on Tile')} (${possibleChests.length})</span>
                <span style="font-size: 11.5px; font-weight: normal; color: var(--text-muted);">
                  💡 ${isRu ? 'Наведите для названия • Кликните для содержимого' : (isCn ? '悬停查看名称 • 点击查看宝箱' : 'Hover for name • Click for chest loot')}
                </span>
              </div>
              <div class="chest-loot-grid" style="background: rgba(10, 14, 23, 0.7); border: 1px solid rgba(234, 179, 8, 0.3); max-height: 220px;">
                ${possibleChests.map(ch => {
                  const chName = ch.name?.[currentLang] || ch.name?.RU || ch.name?.CN || ch.id;
                  const chStep = ch.step || 'A';
                  const tierClass = chStep ? `loot-tier-${chStep.toLowerCase()}` : '';
                  const chIcon = (typeof ItemsView !== 'undefined' && ItemsView.getItemIcon) 
                    ? ItemsView.getItemIcon(ch, 'chests', imageMappings) 
                    : (ch.id ? `assets/img/items/${ch.id}.png` : '');
                  const tooltipText = `📦 ${chName} [${chStep}★] • ${ch.drop_type || 'Сундук'}`;
                  
                  return `
                    <div class="loot-tile ${tierClass}" 
                         onclick="App.openItemModal('chests', '${ch.id}')" 
                         title="${this.escapeHtml(tooltipText)}"
                         data-tooltip="${this.escapeHtml(tooltipText)}">
                      <div class="loot-tile-icon-box">
                        ${chIcon ? `
                          <img src="${chIcon}" alt="${this.escapeHtml(chName)}" class="loot-tile-img" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='inline-block';">
                          <span style="display: none; font-size: 24px;">📦</span>
                        ` : `<span style="font-size: 24px;">📦</span>`}
                      </div>
                      <span class="loot-tile-tier">${chStep}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- CHEST-STYLE LOOT GRID: Direct Equipment Drops -->
          ${possibleEquips.length > 0 && (rates.equip > 0 || isSpec) ? `
            <div class="detail-section" style="margin-bottom: 0;">
              <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <span>⚔️ ${isRu ? 'Прямой дроп снаряжения' : (isCn ? '可能掉落装备' : 'Direct Gear Drops')} (${possibleEquips.length})</span>
                <span style="font-size: 11.5px; font-weight: normal; color: var(--text-muted);">
                  💡 ${isRu ? 'Наведите для характеристик • Кликните для карточки' : (isCn ? '悬停查看属性 • 点击查看装备' : 'Hover for stats • Click for gear card')}
                </span>
              </div>
              <div class="chest-loot-grid" style="background: rgba(10, 14, 23, 0.7); border: 1px solid rgba(56, 189, 248, 0.3); max-height: 240px;">
                ${possibleEquips.map(eq => {
                  const eqName = eq.name?.[currentLang] || eq.name?.RU || eq.name?.CN || eq.id;
                  const eqStep = eq.step || 'A';
                  const tierClass = eqStep ? `loot-tier-${eqStep.toLowerCase()}` : '';
                  const eqIcon = (typeof ItemsView !== 'undefined' && ItemsView.getItemIcon) ? ItemsView.getItemIcon(eq, 'equipment', imageMappings) : '';
                  const tooltipText = `⚔️ ${eqName} [${eqStep}★]${eq.slot ? ` • ${eq.slot}` : ''}`;

                  return `
                    <div class="loot-tile ${tierClass}" 
                         onclick="App.openItemModal('equipment', '${eq.id}')" 
                         title="${this.escapeHtml(tooltipText)}"
                         data-tooltip="${this.escapeHtml(tooltipText)}">
                      <div class="loot-tile-icon-box">
                        ${eqIcon ? `
                          <img src="${eqIcon}" alt="${this.escapeHtml(eqName)}" class="loot-tile-img" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='inline-block';">
                          <span style="display: none; font-size: 22px;">⚔️</span>
                        ` : `<span style="font-size: 22px;">⚔️</span>`}
                      </div>
                      <span class="loot-tile-tier">${eqStep}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- CHEST-STYLE LOOT GRID: Harvestable Materials & Ingredients -->
          ${mats.length > 0 ? `
            <div class="detail-section" style="margin-bottom: 0;">
              <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <span>🌿 ${isRu ? 'Добываемые материалы и трофеи' : (isCn ? '可采集素材与产出' : 'Harvestable Materials & Trophies')} (${mats.length})</span>
                <span style="font-size: 11.5px; font-weight: normal; color: var(--text-muted);">
                  💡 ${isRu ? 'Кликните на ресурс для подробностей' : (isCn ? '点击查看素材' : 'Click resource for details')}
                </span>
              </div>
              <div class="chest-loot-grid" style="background: rgba(10, 14, 23, 0.7); border: 1px solid rgba(34, 197, 94, 0.3); max-height: 180px; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));">
                ${mats.map(m => `
                  <div class="loot-tile loot-tier-b" 
                       onclick="App.openItemModal('ingredients', '${this.escapeHtml(m)}')" 
                       title="${this.escapeHtml(m)}"
                       style="aspect-ratio: auto; padding: 8px 10px; display: flex; align-items: center; gap: 8px; justify-content: flex-start;">
                    <span style="font-size: 18px;">💎</span>
                    <span style="font-size: 12px; font-weight: 700; color: #4ade80; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${this.escapeHtml(m)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Drops Breakdown / Summary Table -->
          ${dropsSummary.length > 0 ? `
            <div class="detail-section" style="margin-bottom: 0;">
              <div class="section-heading" style="margin-bottom: 8px;">📊 ${isRu ? 'Сводная таблица дропа и особенности' : (isCn ? '产出概览与机制特性' : 'Drop Summary & Features')}</div>
              <div style="background: rgba(10, 14, 23, 0.7); border: 1px solid rgba(255,255,255,0.06); border-radius: var(--radius-md); padding: 12px 16px;">
                <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #cbd5e1; font-size: 13px;">
                  ${dropsSummary.map(d => `<li>${this.escapeHtml(d)}</li>`).join('')}
                </ul>
              </div>
            </div>
          ` : ''}

          <!-- Biomes List -->
          <div class="detail-section" style="margin-bottom: 0;">
            <div class="section-heading" style="margin-bottom: 8px;">🌍 ${isRu ? 'Биомы появления' : (isCn ? '出现区域' : 'Spawn Biomes')} (${biomes.length})</div>
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              ${biomes.length > 0 ? biomes.map(b => `
                <span class="tag-badge" style="background: rgba(56, 189, 248, 0.08); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.25); font-size: 11.5px; padding: 3px 9px;">
                  📍 ${this.escapeHtml(b)}
                </span>
              `).join('') : `<span style="color: var(--text-muted); font-size: 12px;">${isRu ? 'Все локации игры' : (isCn ? '全区域通用' : 'All Game Zones')}</span>`}
            </div>
          </div>
        </div>

        <div class="modal-footer" style="padding: 14px 22px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; background: rgba(10, 14, 23, 0.5);">
          <button class="tile-action-link-btn" 
                  onclick="GuidesView.copyTileLink('${tile.id}')" 
                  style="background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.15); color: #cbd5e1; font-weight: 600; border-radius: var(--radius-sm); padding: 7px 14px; font-size: 12px; cursor: pointer; transition: all 0.15s ease;">
            🔗 ${isRu ? 'Скопировать ссылку на тайл' : (isCn ? '复制地块链接' : 'Copy Tile Link')}
          </button>
          <button class="tile-action-detail-btn" 
                  onclick="App.closeDetailModal()" 
                  style="background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.4); color: #38bdf8; font-weight: 700; border-radius: var(--radius-sm); padding: 7px 20px; font-size: 12.5px; cursor: pointer; transition: all 0.15s ease;">
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
    const name = buff.name?.[currentLang] || buff.name?.RU || buff.name?.CN || buff.id;
    const desc = buff.desc?.[currentLang] || buff.desc?.RU || buff.desc?.CN || '';
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GuidesView;
}
