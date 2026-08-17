/**
 * Internationalization (i18n) Complete Dictionary for Guild of Monster Girls Web Encyclopedia
 * Full Support for RU (Russian), EN (English), and CN (Chinese).
 */

const I18N = {
  RU: {
    appTitle: "Guild of Monster Girls — Энциклопедия",
    appSubtitle: "База данных персонажей, экипировки, реликвий и сетов",
    navCharacters: "Персонажи (204)",
    navItems: "Предметы и Снаряжение (3,353)",
    navBonds: "Сеты и Бонды (200+)",
    navMyCollection: "Моя Коллекция",
    searchPlaceholder: "Поиск по имени, ID, навыку, стату или тегу...",
    filterTitles: {
      rarity: "Ранг / Редкость:",
      class: "Класс:",
      element: "Стихия:",
      role: "Боевая роль:",
      slot: "Слот экипировки:"
    },
    all: "Все",
    resetFilters: "Сбросить фильтры",
    sortBy: "Сортировка:",
    sortOptions: {
      rarity: "🌟 По редкости (S → C)",
      name: "🔤 По имени (А-Я)",
      hp: "❤️ По Здоровью (HP)",
      atk: "⚔️ По Атаке (ATK)",
      def: "🛡️ По Защите (DEF)",
      spd: "⚡ По Скорости (SPD)",
      int: "🔮 По Духу (INT)",
      str: "💪 По Силе (STR)",
      dex: "🎯 По Ловкости (DEX)"
    },
    filterPills: {
      class: {
        warrior: "⚔️ Воин",
        archer: "🏹 Стрелок",
        mage: "🔮 Маг",
        cleric: "✨ Жрица"
      },
      element: {
        fire: "🔥 Огонь",
        water: "💧 Вода",
        wind: "🌪️ Ветер",
        earth: "⛰️ Земля",
        light: "☀️ Свет",
        dark: "🌑 Тьма"
      },
      role: {
        dps: "💥 Урон (DPS)",
        tank: "🛡️ Танк",
        healer: "💚 Лекарь",
        support: "⚡ Саппорт"
      },
      slot: {
        main_hand: "🗡️ Оружие",
        body: "🥋 Броня",
        head: "🪖 Шлем",
        boots: "👢 Обувь",
        gloves: "🧤 Перчатки",
        belt: "🎗️ Пояс",
        ring: "💍 Кольцо",
        necklace: "📿 Ожерелье",
        badge: "🎖️ Эмблема"
      }
    },
    categories: {
      equipment: "⚔️ Снаряжение",
      relics: "🔮 Реликвии",
      runes: "🪨 Руны",
      bonds: "🔗 Сеты",
      prefixes: "🏷️ Префиксы",
      special_items: "💰 Особое",
      ingredients: "💎 Материалы",
      chests: "📦 Сундуки",
      godstones: "⚡ Бог-камни",
      dungeon_relics: "🗝️ Подземелья"
    },
    // Account & Collection
    accConnectTitle: "Вход в коллекцию и синхронизация",
    accConnectDesc: "Выберите удобный способ синхронизации: мгновенный автовход с эмулятора/устройства, ввод токена сессии или загрузку файла сохранения. Ваши данные хранятся исключительно в вашем браузере.",
    loginTabWebAdb: "⚡ Авто-вход (WebADB / Устройство)",
    loginTabToken: "🎫 Вход по токену / Ссылке",
    loginTabImport: "📁 Загрузка сохранения (JSON)",
    
    // WebADB Tab
    accAdbAutoSync: "⚡ Подключить и синхронизировать",
    accAdbStatusRunning: "Поиск устройства и считывание игровой сессии...",
    accSelectDeviceLabel: "📱 Выберите устройство / эмулятор:",
    accRefreshDevicesBtn: "🔄 Обновить список",
    accAutoDetectDevice: "⚡ Авто-выбор (любое активное устройство)",
    accNoDevicesFound: "Устройства не обнаружены (запустите эмулятор)",
    adbRequirementNotice: "⚠️ <b>Обязательные требования:</b> Для авто-входа необходимы <b>Root-права</b> и включенная <b>«Отладка по USB»</b> (в эмуляторах Root включается в настройках; на физических телефонах требуется Root через Magisk/KernelSU).",
    adbInstructionsTitle: "📖 Пошаговая инструкция по авто-входу:",
    adbStep1EmuTitle: "1. Для эмуляторов (LDPlayer, Nox, MuMu, BlueStacks):",
    adbStep1EmuDesc: "Запустите эмулятор и откройте игру <b>Guild of Monster Girls</b> (войдите в город). В настройках эмулятора обязательно включите <b>Root-права</b> и <b>ADB-отладку</b>. Нажмите кнопку выше.",
    adbStep2PhoneTitle: "2. Для физических Android-телефонов по проводу:",
    adbStep2PhoneDesc: "На телефоне обязательно должны быть активны <b>Root-права</b> (Magisk / KernelSU / APatch) и включена <b>«Отладка по USB»</b> в меню разработчика. Без Root-прав системная папка игры закрыта защитой Android — в этом случае используйте эмулятор или вкладку «Вход по токену».",
    adbStep3ShizukuTitle: "3. Для телефонов без ПК (Shizuku + Termux) ⚠️ [Экспериментально]:",
    adbStep3ShizukuDesc: "Запустите службу <b>Shizuku</b> по беспроводной отладке (Wi-Fi), откройте <b>Termux</b> и запустите скрипт <a href=\"/shizuku_sync.sh\" download=\"shizuku_sync.sh\" class=\"shizuku-dl-link\"><code>📥 shizuku_sync.sh</code></a> (также доступен в <a href=\"https://github.com/Onarous/Guild-of-Monster-Girls-Encyclopedia/releases/tag/v1.0.0\" target=\"_blank\" class=\"shizuku-dl-link\">Релизах GitHub</a>).<br>⚠️ <b>Важное примечание:</b> На большинстве физических телефонов без Root доступ к папке игры блокируется ядром Android (ошибка <code>Permission denied</code>). Если этот метод не сработал на вашем устройстве, используйте 100% рабочий способ — вкладку <b>«🎫 Вход по токену»</b> через мобильный сниффер трафика (Reqable/HttpCanary) или эмулятор на ПК.",
    adbStep4SecTitle: "🔒 Безопасность и конфиденциальность:",
    adbStep4SecDesc: "Считывается исключительно локальный кэш игровой сессии (<code>SdkStateCache</code>). Пароли и личные данные не затрагиваются и никуда не передаются.",
    
    // Token Tab
    accTokenPlaceholder: "Вставьте auth_token или ссылку (например: b613d7fb528940a88e... или https://...)",
    accSyncBtn: "🔄 Синхронизировать",
    tokenInstructionsTitle: "📖 Инструкция по получению токена:",
    tokenStep1WhatTitle: "🔑 Что такое токен:",
    tokenStep1WhatDesc: "Это 32-значный ключ сессии ChillyRoom (например: <code>a1b2c3d4e5f60718293a4b5c6d7e8f90</code>), действующий до 30 дней. Позволяет загружать персонажей и ресурсы без ввода паролей.",
    tokenStep2HowTitle: "🔍 Как получить токен вручную:",
    tokenStep2HowDesc: "• <b>Сниффер сети (HTTP Toolkit / HttpCanary / Charles / Reqable):</b> откройте игру и скопируйте токен из заголовка <code>Authorization: Bearer &lt;токен&gt;</code> любого запроса к <code>api.monster-girls-guild.chillyroom.com</code>.<br>• <b>Из PlayerPrefs:</b> скопируйте поле <code>Session.Token</code> из <code>SdkStateCache</code> в файле <code>com.chillyroom.monstergirls.gp.v2.playerprefs.xml</code>.",
    tokenStep3SmartTitle: "💡 Умная вставка и авто-вход по ссылке:",
    tokenStep3SmartDesc: "Поле ввода автоматически извлекает токен из любого текста или ссылки вида <code>/?token=&lt;токен&gt;</code>.",

    // Import Tab
    importInstructionsTitle: "📖 Инструкция по загрузке файла сохранения:",
    importStep1FilesTitle: "1. Поддерживаемые файлы:",
    importStep1FilesDesc: "• <b>monster_girls_roster.json</b> или <b>account_roles.json</b> — экспортированный список персонажей из нашего экстрактора.<br>• Сырой JSON-ответ облака ChillyRoom (<code>GameSave</code>).<br>• Резервная копия коллекции, сохраненная с сайта.",
    importStep2PathTitle: "2. Как получить файл сохранения:",
    importStep2PathDesc: "Запустите <code>extract_monster_girls.bat</code> в папке программы — он скачает актуальный ростер вашего аккаунта с сервера игры в файл <code>monster_girls_roster.json</code>.",
    importStep3OfflineTitle: "🔒 100% Оффлайн и безопасность:",
    importStep3OfflineDesc: "Файл обрабатывается локально в вашем браузере через HTML5 FileReader API. Никакие данные не отправляются на сторонние серверы.",
    importDropZoneText: "Перетащите файл сохранения (.json) сюда или нажмите кнопку для выбора",

    // General & Dashboard
    accImportFileBtn: "📁 Выбрать файл сохранения (JSON)",
    accPasteJsonBtn: "📋 Вставить JSON вручную",
    accLogoutBtn: "🚪 Выйти / Очистить данные",
    accRefreshBtn: "🔄 Обновить данные",
    accStatusSynced: "Аккаунт подключен",
    accProgress: "Прогресс коллекции",
    accShowOwned: "Полученные",
    accShowMissing: "Неполученные",
    accShowAll: "Все персонажи",
    accRememberMe: "Запомнить данные в браузере",
    accPrivacyNotice: "🔒 Все данные сохраняются исключительно локально в вашем браузере (localStorage) и не передаются третьим лицам.",
    accGold: "Золото",
    accGem: "Кристаллы",
    accClover: "Клевер",
    accFish: "Рыбки",
    
    totalFound: "Найдено записей:",
    viewDetails: "Подробнее",
    baseStats: "Базовые характеристики",
    statGrowth: "Приоритеты роста характеристик",
    ultimateSkill: "Уникальное активное умение (Ультимейт)",
    passiveTraits: "Пассивные таланты и особенности",
    exclusiveTalents: "Эксклюзивные таланты героини",
    signatureRelic: "Сигнатурная реликвия",
    upgradeMaterials: "Материалы возвышения",
    teamRecommendations: "Рекомендации в отряд",
    owned: "В коллекции",
    notOwned: "Не получена",
    level1Stats: "Уровень 1"
  },

  EN: {
    appTitle: "Guild of Monster Girls — Encyclopedia",
    appSubtitle: "Complete Database for Characters, Equipment, Relics & Bonds",
    navCharacters: "Characters (204)",
    navItems: "Items & Equipment (3,353)",
    navBonds: "Set Bonds (200+)",
    navMyCollection: "My Collection",
    searchPlaceholder: "Search by name, ID, skill, stat, or tag...",
    filterTitles: {
      rarity: "Rarity / Tier:",
      class: "Class:",
      element: "Element:",
      role: "Combat Role:",
      slot: "Equipment Slot:"
    },
    all: "All",
    resetFilters: "Reset Filters",
    sortBy: "Sort By:",
    sortOptions: {
      rarity: "🌟 By Rarity (S → C)",
      name: "🔤 By Name (A-Z)",
      hp: "❤️ By Health (HP)",
      atk: "⚔️ By Attack (ATK)",
      def: "🛡️ By Defense (DEF)",
      spd: "⚡ By Speed (SPD)",
      int: "🔮 By Intellect (INT)",
      str: "💪 By Strength (STR)",
      dex: "🎯 By Agility (DEX)"
    },
    filterPills: {
      class: {
        warrior: "⚔️ Warrior",
        archer: "🏹 Archer",
        mage: "🔮 Mage",
        cleric: "✨ Cleric"
      },
      element: {
        fire: "🔥 Fire",
        water: "💧 Water",
        wind: "🌪️ Wind",
        earth: "⛰️ Earth",
        light: "☀️ Light",
        dark: "🌑 Dark"
      },
      role: {
        dps: "💥 DPS",
        tank: "🛡️ Tank",
        healer: "💚 Healer",
        support: "⚡ Support"
      },
      slot: {
        main_hand: "🗡️ Main Hand",
        body: "🥋 Armor",
        head: "🪖 Helmet",
        boots: "👢 Boots",
        gloves: "🧤 Gloves",
        belt: "🎗️ Belt",
        ring: "💍 Ring",
        necklace: "📿 Necklace",
        badge: "🎖️ Badge"
      }
    },
    categories: {
      equipment: "⚔️ Equipment",
      relics: "🔮 Relics",
      runes: "🪨 Runes",
      bonds: "🔗 Bonds",
      prefixes: "🏷️ Prefixes",
      special_items: "💰 Special",
      ingredients: "💎 Materials",
      chests: "📦 Chests",
      godstones: "⚡ Godstones",
      dungeon_relics: "🗝️ Dungeons"
    },
    // Account & Collection
    accConnectTitle: "Collection Sync & Authentication",
    accConnectDesc: "Choose your sync method: 1-click auto-sync from emulator/device, auth token, or import your game save file. All data is saved strictly in your browser.",
    loginTabWebAdb: "⚡ Auto-Sync (WebADB / Device)",
    loginTabToken: "🎫 Auth Token / Link",
    loginTabImport: "📁 Import Save File (JSON)",
    
    // WebADB Tab
    accAdbAutoSync: "⚡ Connect & Sync",
    accAdbStatusRunning: "Detecting device and extracting game session...",
    accSelectDeviceLabel: "📱 Select Device / Emulator:",
    accRefreshDevicesBtn: "🔄 Refresh List",
    accAutoDetectDevice: "⚡ Auto-Detect (Any active device)",
    accNoDevicesFound: "No devices detected (start emulator)",
    adbRequirementNotice: "⚠️ <b>Prerequisites:</b> Auto-Sync requires <b>Root permissions</b> and enabled <b>USB Debugging</b> (in PC Emulators, enable Root in settings; physical phones require Root via Magisk/KernelSU).",
    adbInstructionsTitle: "📖 Step-by-Step Auto-Sync Guide:",
    adbStep1EmuTitle: "1. For Android Emulators (LDPlayer, Nox, MuMu, BlueStacks):",
    adbStep1EmuDesc: "Start the emulator and launch <b>Guild of Monster Girls</b> (enter the game town). Make sure to enable <b>Root permissions</b> and <b>ADB debugging</b> in emulator settings. Click the button above.",
    adbStep2PhoneTitle: "2. For Physical Android Phones via Cable:",
    adbStep2PhoneDesc: "Your physical phone MUST have <b>Root permissions</b> (Magisk / KernelSU / APatch) and <b>USB Debugging</b> enabled. Without Root, Android security restricts access to game data — please use a PC Emulator or the Token Tab instead.",
    adbStep3ShizukuTitle: "3. For Android without PC (Shizuku + Termux) ⚠️ [Experimental]:",
    adbStep3ShizukuDesc: "Start <b>Shizuku</b> via Wireless Debugging, open <b>Termux</b> and run <a href=\"/shizuku_sync.sh\" download=\"shizuku_sync.sh\" class=\"shizuku-dl-link\"><code>📥 shizuku_sync.sh</code></a> (also available in <a href=\"https://github.com/Onarous/Guild-of-Monster-Girls-Encyclopedia/releases/tag/v1.0.0\" target=\"_blank\" class=\"shizuku-dl-link\">GitHub Releases</a>).<br>⚠️ <b>Note:</b> On unrooted Android devices, the OS may restrict private app access (<code>Permission denied</code>). If this happens, please use the 100% reliable <b>«🎫 Token Tab»</b> with a mobile traffic sniffer (Reqable / HttpCanary) or PC emulator.",
    adbStep4SecTitle: "🔒 Security & Privacy:",
    adbStep4SecDesc: "Only the local session cache (<code>SdkStateCache</code>) is read. No passwords or private files are touched or sent anywhere.",
    
    // Token Tab
    accTokenPlaceholder: "Enter auth_token or in-game link (e.g. b613d7fb528940a88e... or https://...)",
    accSyncBtn: "🔄 Sync",
    tokenInstructionsTitle: "📖 Token Extraction Guide:",
    tokenStep1WhatTitle: "🔑 What is the Auth Token:",
    tokenStep1WhatDesc: "A 32-character hexadecimal key (e.g. <code>a1b2c3d4e5f60718293a4b5c6d7e8f90</code>) valid for up to 30 days. It authorizes data fetching without needing passwords.",
    tokenStep2HowTitle: "🔍 How to obtain your token manually:",
    tokenStep2HowDesc: "• <b>Network Sniffer (HTTP Toolkit / HttpCanary / Charles / Reqable):</b> open the game and copy the token from the <code>Authorization: Bearer &lt;token&gt;</code> header on any request to <code>api.monster-girls-guild.chillyroom.com</code>.<br>• <b>From PlayerPrefs:</b> copy <code>Session.Token</code> from <code>SdkStateCache</code> in <code>com.chillyroom.monstergirls.gp.v2.playerprefs.xml</code>.",
    tokenStep3SmartTitle: "💡 Smart Parser & Link Auto-Login:",
    tokenStep3SmartDesc: "The input field automatically extracts 32-character tokens from URLs or links like <code>/?token=&lt;token&gt;</code>.",

    // Import Tab
    importInstructionsTitle: "📖 Save File Import Guide:",
    importStep1FilesTitle: "1. Supported File Formats:",
    importStep1FilesDesc: "• <b>monster_girls_roster.json</b> or <b>account_roles.json</b> — roster exported by our extractor script.<br>• Raw ChillyRoom CloudSave JSON (<code>GameSave</code>).<br>• JSON collection backups exported from this website.",
    importStep2PathTitle: "2. How to get the roster file:",
    importStep2PathDesc: "Run <code>extract_monster_girls.bat</code> in the program folder — it downloads your latest account save into <code>monster_girls_roster.json</code>.",
    importStep3OfflineTitle: "🔒 100% Offline & Private:",
    importStep3OfflineDesc: "The file is processed strictly inside your browser using the HTML5 FileReader API. Nothing is uploaded to any remote servers.",
    importDropZoneText: "Drag & drop your save file (.json) here, or click to browse",

    accImportFileBtn: "📁 Select Save File (JSON)",
    accPasteJsonBtn: "📋 Paste JSON Manually",
    accLogoutBtn: "🚪 Logout / Clear Data",
    accRefreshBtn: "🔄 Refresh Data",
    accStatusSynced: "Account Connected",
    accProgress: "Collection Progress",
    accShowOwned: "Owned Only",
    accShowMissing: "Missing Only",
    accShowAll: "All Characters",
    accRememberMe: "Remember on this device",
    accPrivacyNotice: "🔒 Credentials, tokens, and data are stored strictly in your browser (localStorage) and never transmitted elsewhere.",
    accGold: "Gold",
    accGem: "Gems",
    accClover: "Clover",
    accFish: "Fish",

    totalFound: "Found Entries:",
    viewDetails: "View Details",
    baseStats: "Base Attributes",
    statGrowth: "Attribute Growth Priorities",
    ultimateSkill: "Unique Ultimate Skill",
    passiveTraits: "Passive Traits & Specializations",
    exclusiveTalents: "Exclusive Heroine Talents",
    signatureRelic: "Signature Relic",
    upgradeMaterials: "Ascension Materials",
    teamRecommendations: "Team Recommendations",
    owned: "Collected",
    notOwned: "Not Collected",
    level1Stats: "Level 1"
  },

  CN: {
    appTitle: "魔物娘公会 — 完整图鉴数据库",
    appSubtitle: "角色、装备、信物、符文与羁绊百科全书",
    navCharacters: "角色图鉴 (204)",
    navItems: "装备道具 (3,353)",
    navBonds: "套装羁绊 (200+)",
    navMyCollection: "我的收藏",
    searchPlaceholder: "搜索角色名、ID、技能效果、属性或标签...",
    filterTitles: {
      rarity: "品阶 / 稀有度:",
      class: "职业:",
      element: "元素属性:",
      role: "战斗定位:",
      slot: "装备部位:"
    },
    all: "全部",
    resetFilters: "重置筛选",
    sortBy: "排序方式:",
    sortOptions: {
      rarity: "🌟 按品阶排序 (S → C)",
      name: "🔤 按名称排序 (A-Z)",
      hp: "❤️ 按生命 (HP)",
      atk: "⚔️ 按攻击 (ATK)",
      def: "🛡️ 按防御 (DEF)",
      spd: "⚡ 按速度 (SPD)",
      int: "🔮 按精神 (INT)",
      str: "💪 按力量 (STR)",
      dex: "🎯 按敏捷 (DEX)"
    },
    filterPills: {
      class: {
        warrior: "⚔️ 战士",
        archer: "🏹 射手",
        mage: "🔮 法师",
        cleric: "✨ 牧师"
      },
      element: {
        fire: "🔥 火系",
        water: "💧 水系",
        wind: "🌪️ 风系",
        earth: "⛰️ 地系",
        light: "☀️ 光系",
        dark: "🌑 暗系"
      },
      role: {
        dps: "💥 输出 (DPS)",
        tank: "🛡️ 防御 (坦克)",
        healer: "💚 治疗 (奶妈)",
        support: "⚡ 辅助"
      },
      slot: {
        main_hand: "🗡️ 主手武器",
        body: "🥋 身体防具",
        head: "🪖 头部防具",
        boots: "👢 鞋子",
        gloves: "🧤 护手",
        belt: "🎗️ 腰带",
        ring: "💍 戒指",
        necklace: "📿 项链",
        badge: "🎖️ 徽章"
      }
    },
    categories: {
      equipment: "⚔️ 装备",
      relics: "🔮 信物",
      runes: "🪨 符文",
      bonds: "🔗 套装羁绊",
      prefixes: "🏷️ 词缀",
      special_items: "💰 特殊道具",
      ingredients: "💎 突破素材",
      chests: "📦 宝箱",
      godstones: "⚡ 神石",
      dungeon_relics: "🗝️ 秘境信物"
    },
    // Account & Collection
    accConnectTitle: "图鉴收藏与数据同步",
    accConnectDesc: "选择便捷的同步方式：模拟器/设备一键自动同步、输入会话Token或直接导入存档文件。数据仅保存在您的本地浏览器中。",
    loginTabWebAdb: "⚡ 一键同步 (WebADB / 设备)",
    loginTabToken: "🎫 Token / 链接登录",
    loginTabImport: "📁 导入存档文件 (JSON)",
    
    // WebADB Tab
    accAdbAutoSync: "⚡ 连接并同步",
    accAdbStatusRunning: "正在查找设备并提取游戏会话...",
    accSelectDeviceLabel: "📱 选择设备 / 模拟器:",
    accRefreshDevicesBtn: "🔄 刷新设备列表",
    accAutoDetectDevice: "⚡ 自动检测 (任意可用设备)",
    accNoDevicesFound: "未检测到设备 (请启动模拟器)",
    adbRequirementNotice: "⚠️ <b>前置必要条件：</b> 一键自动同步需要设备具备 <b>Root 权限</b> 并开启 <b>USB 调试</b> (模拟器请在设置中开启 Root；真实手机需 Magisk/KernelSU 权限)。",
    adbInstructionsTitle: "📖 一键自动同步使用指南：",
    adbStep1EmuTitle: "1. 安卓模拟器用户 (雷电、夜神、MuMu、BlueStacks):",
    adbStep1EmuDesc: "启动模拟器并打开 <b>魔物娘公会</b> (进入城镇)。请确保在模拟器设置中开启了 <b>Root 权限</b> 与 <b>ADB 调试</b>。点击上方按钮即可一键同步。",
    adbStep2PhoneTitle: "2. 物理安卓手机用户 (USB 有线):",
    adbStep2PhoneDesc: "手机必须具备 <b>Root 权限</b> (Magisk / KernelSU / APatch) 并开启 <b>USB 调试</b>。若无 Root 权限，Android 系统将拦截读取，建议使用电脑模拟器或 Token 登录。",
    adbStep3ShizukuTitle: "3. 手机免电脑方案 (Shizuku + Termux) ⚠️ [实验性]:",
    adbStep3ShizukuDesc: "通过无线调试启动 <b>Shizuku</b>，在 <b>Termux</b> 中运行 <a href=\"/shizuku_sync.sh\" download=\"shizuku_sync.sh\" class=\"shizuku-dl-link\"><code>📥 shizuku_sync.sh</code></a> (也可在 <a href=\"https://github.com/Onarous/Guild-of-Monster-Girls-Encyclopedia/releases/tag/v1.0.0\" target=\"_blank\" class=\"shizuku-dl-link\">GitHub Releases</a> 下载)。<br>⚠️ <b>注意：</b> 在大多数无 Root 的实体手机上，Android 系统权限将拦截读取 (<code>Permission denied</code>)。如遇到此情况，请使用 100% 稳定的 <b>«🎫 Token 登录»</b> 配合抓包工具 (Reqable/HttpCanary) 或电脑模拟器。",
    adbStep4SecTitle: "🔒 安全与隐私保障:",
    adbStep4SecDesc: "仅读取游戏本地公开的会话缓存 (<code>SdkStateCache</code>)，无需输入密码，数据仅留存本地浏览器。",
    
    // Token Tab
    accTokenPlaceholder: "输入 auth_token 或游戏内复制的链接 (例如: b613d7fb528940a88e... 或 https://...)",
    accSyncBtn: "🔄 同步",
    tokenInstructionsTitle: "📖 Token 获取指南：",
    tokenStep1WhatTitle: "🔑 什么是 Auth Token：",
    tokenStep1WhatDesc: "ChillyRoom 的 32 位十六进制会话凭证 (例如: <code>a1b2c3d4e5f60718293a4b5c6d7e8f90</code>)，有效期长达 30 天，无需密码即可同步数据。",
    tokenStep2HowTitle: "🔍 如何手动获取 Token：",
    tokenStep2HowDesc: "• <b>抓包工具 (HTTP Toolkit / HttpCanary / Charles / Reqable):</b> 打开游戏，从请求 <code>api.monster-girls-guild.chillyroom.com</code> 的 <code>Authorization: Bearer &lt;Token&gt;</code> 请求头中复制。<br>• <b>从存档配置提取:</b> 从 <code>com.chillyroom.monstergirls.gp.v2.playerprefs.xml</code> 中的 <code>SdkStateCache</code> 字段复制 <code>Session.Token</code>。",
    tokenStep3SmartTitle: "💡 智能解析与链接直达：",
    tokenStep3SmartDesc: "输入框会自动从任意文本或 <code>/?token=&lt;Token&gt;</code> 链接中提取 Token 进行同步。",

    // Import Tab
    importInstructionsTitle: "📖 存档导入使用指南：",
    importStep1FilesTitle: "1. 支持的文件格式：",
    importStep1FilesDesc: "• <b>monster_girls_roster.json</b> 或 <b>account_roles.json</b> — 提取脚本生成的角色花名册。<br>• ChillyRoom 云存档原始 JSON 数据 (<code>GameSave</code>)。<br>• 从本站导出的 JSON 收藏备份。",
    importStep2PathTitle: "2. 如何获取存档文件：",
    importStep2PathDesc: "在工具目录中运行 <code>extract_monster_girls.bat</code> 脚本 — 即可自动从游戏服务器下载并生成最新的 <code>monster_girls_roster.json</code>。",
    importStep3OfflineTitle: "🔒 100% 离线与隐私保护：",
    importStep3OfflineDesc: "文件完全在本地浏览器中通过 FileReader API 进行解析，绝不会上传至任何远程服务器。",
    importDropZoneText: "将存档文件 (.json) 拖放到此处，或点击下方按钮选择",

    accImportFileBtn: "📁 选择存档文件 (JSON)",
    accPasteJsonBtn: "📋 手动粘贴 JSON",
    accLogoutBtn: "🚪 退出登录 / 清除数据",
    accRefreshBtn: "🔄 刷新数据",
    accStatusSynced: "已绑定游戏账号",
    accProgress: "全角色收集进度",
    accShowOwned: "仅已拥有",
    accShowMissing: "仅未收集",
    accShowAll: "全部角色",
    accRememberMe: "在此设备记住登录状态",
    accPrivacyNotice: "🔒 凭证、Token及所有数据均仅保存在浏览器本地存储 (localStorage) 中，绝不上传第三方。",
    accGold: "金币",
    accGem: "宝石",
    accClover: "四叶草",
    accFish: "小鱼干",

    totalFound: "匹配条目数:",
    viewDetails: "查看详情",
    baseStats: "基础属性数值",
    statGrowth: "属性成长倾向",
    ultimateSkill: "专属主动绝技 (大招)",
    passiveTraits: "被动特性与职业专精",
    exclusiveTalents: "专属角色天赋",
    signatureRelic: "专属核心信物",
    upgradeMaterials: "突破与晋阶素材",
    teamRecommendations: "阵容推荐搭配",
    owned: "已拥有",
    notOwned: "未收集",
    level1Stats: "1级属性"
  }
};

