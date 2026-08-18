/**
 * Guides & Technical Knowledge Base Component for Guild of Monster Girls Web Encyclopedia
 * Contains in-depth mechanics, formulas, turn phases, targeting, gacha drop lists, and sync guides.
 * Full multilingual support for RU, EN, and CN.
 */

const GuidesView = {
  activeSection: 'phases',
  gachaFilter: 'all',
  eventsFilter: 'all',
  buildsFilter: 'all',
  codesFilter: 'all',

  setSection(sectionId) {
    this.activeSection = sectionId;
    const container = document.getElementById('guidesContainer');
    if (container) {
      this.render(container.id, App.state.lang);
      if (typeof App !== 'undefined' && App.updateUrl) {
        App.updateUrl('guides', sectionId);
      }
      if (window.innerWidth <= 900) {
        const contentPanel = container.querySelector('.guides-content-panel');
        if (contentPanel) {
          contentPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  },

  setGachaFilter(filter) {
    this.gachaFilter = filter;
    const container = document.getElementById('guidesContainer');
    if (container) {
      this.render(container.id, App.state.lang);
    }
  },

  setEventsFilter(filter) {
    this.eventsFilter = filter;
    const container = document.getElementById('guidesContainer');
    if (container) {
      this.render(container.id, App.state.lang);
    }
  },

  setBuildsFilter(filter) {
    this.buildsFilter = filter;
    const container = document.getElementById('guidesContainer');
    if (container) {
      this.render(container.id, App.state.lang);
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

  render(containerId, currentLang = "RU") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const lang = currentLang.toUpperCase();
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const menuItems = [
      { id: 'tips', icon: '💡', title: isRu ? 'Советы новичкам и Экономика' : isCn ? '萌新避坑与资源经济' : 'Beginner Tips & Economy' },
      { id: 'phases', icon: '⚔️', title: isRu ? 'Фазы боя и порядок ходов' : isCn ? '战斗阶段与行动顺序' : 'Battle Phases & Turn Order' },
      { id: 'targeting', icon: '🎯', title: isRu ? 'Дистанция и Таргетинг' : isCn ? '攻击距离与目标选择' : 'Range, Distance & Targeting' },
      { id: 'damage', icon: '🛡️', title: isRu ? 'Урон, Защита и Баффы' : isCn ? '伤害计算、护盾与增益' : 'Damage Formulas, Shields & Buffs' },
      { id: 'elements', icon: '✨', title: isRu ? 'Стихии, Роли и Отряд' : isCn ? '元素克制、定位与配队' : 'Elements, Roles & Lineup' },
      { id: 'builds', icon: '🏆', title: isRu ? 'Лучшие сборки и Мета-отряды' : isCn ? '最佳阵容与流派推荐' : 'Best Builds & Meta Lineups' },
      { id: 'gacha', icon: '🎪', title: isRu ? 'Списки найма и Баннеры' : isCn ? '招募卡池与掉落列表' : 'Recruit Pools & Gacha Lists' },
      { id: 'events', icon: '🎁', title: isRu ? 'Список игровых событий' : isCn ? '活动与限时事件列表' : 'Game Events & Activities' },
      { id: 'codes', icon: '🎟️', title: isRu ? 'Промокоды и Подарки' : isCn ? '礼包兑换码汇总' : 'Promo & Redeem Codes' }
    ];

    const contentHtml = this.getSectionContent(this.activeSection, lang);

    container.innerHTML = `
      <div class="guides-wrapper">
        <aside class="guides-sidebar">
          <div class="guides-sidebar-title">
            📚 ${isRu ? 'Оглавление гайдов' : isCn ? '攻略目录' : 'Knowledge Base'}
          </div>
          <div class="guides-nav-list">
            ${menuItems.map(item => `
              <button class="guide-nav-btn ${this.activeSection === item.id ? 'active' : ''}" onclick="GuidesView.setSection('${item.id}')">
                <span class="guide-nav-icon">${item.icon}</span>
                <span class="guide-nav-text">${item.title}</span>
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
      case 'phases':
        return isRu ? this.getPhasesRU() : isCn ? this.getPhasesCN() : this.getPhasesEN();
      case 'targeting':
        return isRu ? this.getTargetingRU() : isCn ? this.getTargetingCN() : this.getTargetingEN();
      case 'damage':
        return isRu ? this.getDamageRU() : isCn ? this.getDamageCN() : this.getDamageEN();
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
      default:
        return isRu ? this.getPhasesRU() : this.getPhasesEN();
    }
  },


  // 0. Beginner Tips & Resource Economy
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

        <!-- 1. Gems & Recruits -->
        <div class="guide-card" style="border-left: 4px solid #38bdf8;">
          <h3 style="color: #38bdf8; display: flex; align-items: center; gap: 8px;">
            <span>💎</span>
            <span>${isRu ? '1. Самоцветы, Крутки и Осколки' : isCn ? '1. 钻石规划、卡池心愿与碎片管理' : '1. Gems, Wishlist & Shards'}</span>
          </h3>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Самоцветы (Gems):' : isCn ? '钻石用途:' : 'Gems Spending:'}</strong> ${isRu ? 'Тратьте кристаллы <strong>только на Альтер-найм (Alter summon)</strong>. В эндгейме они потребуются для реролла золотых талантов (200 кристаллов за замену). Арена и Астральное Царство стабильно снабжают кристаллами каждую неделю.' : isCn ? '钻石<strong>只用来抽异化卡池</strong>。游戏后期每次更换金天赋需要消耗200钻石。每周竞技场和星界领域都会提供大量钻石，放心抽异化。' : 'Spend gems <strong>only on Alter Summon</strong>. In the endgame, gems are used for swapping gold talents (200 gems each). Weekly Arena and Astral Realm provide a steady income.'}</li>
            <li><strong>${isRu ? 'Список желаний (Wishlist):' : isCn ? '常规心愿推荐:' : 'Standard Wishlist:'}</strong> ${isRu ? 'В стандартном призыве ставьте <strong>Кристальную грибницу (Crystal Shroom)</strong> или <strong>Командующую Легиона (Legion Commander)</strong> — это топ батарейки маны для частого спама ультимейтами.' : isCn ? '常规招募心愿推荐选择<strong>水晶菇娘</strong>或<strong>军团统领</strong>。她们是队伍的“回蓝充电宝”，能让主力DPS高频释放大招。' : 'Wish-pick <strong>Crystal Shroom</strong> or <strong>Legion Commander</strong>. These mana batteries enable your main DPS to spam skills frequently.'}</li>
            <li><strong>${isRu ? 'Смена цели в Wishlist:' : isCn ? '保底前出货即换:' : 'Swap Wishlist Target:'}</strong> ${isRu ? 'Если выбили желаемую героиню до 100 круток гаранта, <strong>сразу меняйте цель</strong> на другую не полученную девочку. Прогресс и осколки не сгорают.' : isCn ? '如果在100抽保底前抽出了心愿角色，<strong>立刻更换为另一位未拥有的角色</strong>。更换心愿角色会返还对应碎片。' : 'Once you pull your wish pick before 100 pity, swap to another unowned girl. You will retain all refund progress.'}</li>
            <li><strong>${isRu ? 'Альтер-осколки (Alter Shards):' : isCn ? '异化碎片严禁乱用:' : 'Save Alter Shards:'}</strong> ${isRu ? '⚠️ <strong>СТРОГО КОПИТЬ:</strong> для прокачки альтера на 5★ требуется 400 альтер-осколков. Тратьте только когда точно уверены в ключевом керри.' : isCn ? '⚠️ <strong>绝对攒着别乱用：</strong>升满一个5星异化角色需要整整400个异化碎片，只留给你决定重度培养的核心主力。' : '⚠️ <strong>SAVE THEM:</strong> It takes 400 alter shards to 5-star an alter girl. Only spend when you are 100% committed to your main carry.'}</li>
            <li><strong>${isRu ? 'Приоритеты Альтер-найма:' : isCn ? '异化卡池优先目标:' : 'Alter Priority:'}</strong> ${isRu ? 'В первую очередь ищите <strong>Шагающую по ветру [Зайчиху]</strong> и <strong>Великую волшебницу [Зайчиху]</strong> — они разгоняют LUK (удачу) и фарм редкого шмота с клевером.' : isCn ? '优先锁定【兔耳】<strong>风行游侠</strong>与【兔耳】<strong>魔术大师</strong>。这两位幸运角色搭配四叶草是后期刷神装与高级符文的核心基石。' : 'Look out for <strong>[Bunny] Windstrider</strong> and <strong>[Bunny] Grand Magician</strong> for high LUK farming synergy.'}</li>
          </ul>
        </div>

        <!-- 2. Gold & Upgrades -->
        <div class="guide-card" style="border-left: 4px solid #eab308;">
          <h3 style="color: #eab308; display: flex; align-items: center; gap: 8px;">
            <span>💰</span>
            <span>${isRu ? '2. Золото, Прокачка и Сброс до 60 уровня' : isCn ? '2. 金币消耗、60级免费重置与心之升级' : '2. Gold, Level 60 Reset & Hearts'}</span>
          </h3>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Приоритет расходов золота:' : isCn ? '金币消费优先级:' : 'Gold Spending Order:'}</strong> ${isRu ? '1. Повышение звездности экипировки и рун ➔ 2. Прокачка 3 боевых юнитов до 60 ур. по уровню Кодекса ➔ 3. Излишки — товары у странствующего гоблина.' : isCn ? '1. 装备与符文升星 ➔ 2. 随图鉴等级将3个主力升至60级 ➔ 3. 剩余金币在游商地精处扫货。' : '1. Star up gear & runes ➔ 2. Level 3 units to Lv 60 as codex grows ➔ 3. Spend excess at travel merchant goblin.'}</li>
            <li><strong>${isRu ? 'Остановка на 60 уровне:' : isCn ? '升到60级立即停手:' : 'Stop at Level 60:'}</strong> ${isRu ? 'Любого персонажа 60 уровня и ниже можно <strong>БЕСПЛАТНО сбросить (Reset)</strong> с возвратом 100% золота и ресурсов. Экспериментируйте с пачками без штрафов!' : isCn ? '所有60级及以下的角色均支持<strong>无损免费重置</strong>，全额返还金币与养成材料，方便零成本尝试各种流派。' : 'Units at Lv 60 and below can be <strong>freely reset</strong> for 100% gold and material refund to experiment with teams.'}</li>
            <li><strong>${isRu ? 'Прокачка 70+ через Сердца (Hearts):' : isCn ? '70级以上用心之升级:' : 'Level 70+ with Hearts:'}</strong> ${isRu ? 'После 70 уровня используйте <em>Сердца героинь</em> (покупаются у торговца-гоблина). Они дают +1, +5 или +10 уровней моментально без золота и ресурсов.' : isCn ? '70级以上通过游商购买<em>勇者之心</em>直接提升1/5/10级，无需消耗金币与材料（需先解锁图鉴等级上限）。' : 'Use <em>Heroine Hearts</em> from the goblin merchant to level up units by 1, 5, or 10 levels without gold/materials.'}</li>
            <li><strong>${isRu ? 'Плоды таланта (Talent Fruits):' : isCn ? '天赋果实务必留到后期:' : 'Save Talent Fruits:'}</strong> ${isRu ? '<strong>КОПИТЬ для эндгейма.</strong> Не сливайте плоды в случайных героев на ранних стадиях игры.' : isCn ? '<strong>严禁前期随意乱喂！</strong>全部存到大后期确立毕业阵容后再精细洗练专属天赋。' : '<strong>SAVE FOR ENDGAME.</strong> Do not waste valuable talent fruits early on random units.'}</li>
          </ul>
        </div>

        <!-- 3. Manual vs Blitz & Clovers -->
        <div class="guide-card" style="border-left: 4px solid #10b981;">
          <h3 style="color: #10b981; display: flex; align-items: center; gap: 8px;">
            <span>⚔️</span>
            <span>${isRu ? '3. Ручная зачистка, Блиц и Клевер' : isCn ? '3. 手动推图、扫荡机制与四叶草' : '3. Manual vs Blitz & Clovers'}</span>
          </h3>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Ручная зачистка (Manual):' : isCn ? '前期手动拿抽券:' : 'Manual Clearing:'}</strong> ${isRu ? 'На старте проходите вручную как можно больше этажей ради билетов призыва. В мид/эндгейме: бегите прямо к Боссу и спец-клеткам, затем <strong>выходите с карты</strong>, экономя стамину на мобах.' : isCn ? '前期尽量手动全清关卡拿满常规招募券。中后期直奔 Boss 房和特殊事件格，打完直接离开关卡，跳过杂兵省体力。' : 'Manually clear as many early stages for summon tickets. In mid/endgame, rush the Boss tile and exit to conserve stamina.'}</li>
            <li><strong>${isRu ? 'Эффективный Блиц (Blitz):' : isCn ? '10连扫荡吃神谕:' : '10x Blitz Rule:'}</strong> ${isRu ? 'Рекомендуется запускать блиц <strong>10x за 500 стамины</strong>, чтобы поймать несколько баффов оракула. Блиц за 50 стамины также отлично фармит клевер и плоды таланта.' : isCn ? '建议只使用 <strong>500体力的10连扫荡</strong>，以博取多次神谕Buff。50体力的单次扫荡也是农四叶草与天赋果实的极佳途径。' : 'Only blitz on 10x (500 stamina) to maximize oracle buffs. Blitz is also great for farming clovers and talent berries.'}</li>
            <li><strong>${isRu ? 'Клевер (Clover):' : isCn ? '四叶草囤到红装农场:' : 'Clover Strategy:'}</strong> ${isRu ? 'Копите клевер до разблокировки Красного снаряжения в достижениях. Рекомендуется начинать с <em>Равнин Рассветного Шага (Dawnstep Plains)</em> ради Соломенной шляпы.' : isCn ? '四叶草留到中后期通过成就解锁红装时再集中使用。优先从【黎明平原】开始刷取神级散件【草帽】。' : 'Save clovers until midgame when farming Red gear achievements, starting with Dawnstep Plains for the Straw Hat.'}</li>
            <li><strong>${isRu ? 'Ежедневная реклама (ADs):' : isCn ? '每日免费广告福利:' : 'Daily Free ADs:'}</strong> ${isRu ? 'Каждый день забирайте: 3x Клевера, 3x 20k золота, 3x 200 энергии, 3x обновления контрактов, 1x мгновенный 8-часовой сбор алхимии, гарантированный дроп Вестницы.' : isCn ? '每日白嫖资源：3个四叶草、3次2万金币、3次200体力、3次悬赏刷新、1次8小时炼金直收、先驱保底掉落、探索直达与星界步数。' : 'Daily free AD rewards: 3x Clovers, 3x 20k gold, 3x 200 stamina, 3x bounty refreshes, 8-hr alchemy clear, and Astral realm steps.'}</li>
          </ul>
        </div>

        <!-- 4. Alchemy & Crystals -->
        <div class="guide-card" style="border-left: 4px solid #a855f7;">
          <h3 style="color: #a855f7; display: flex; align-items: center; gap: 8px;">
            <span>⚗️</span>
            <span>${isRu ? '4. Алхимия, Сундуки и Слияние Кристаллов' : isCn ? '4. 炼金全开、宝箱自动合成与晶石合成' : '4. Alchemy, Chests & Crystal Merging'}</span>
          </h3>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Авто-слияние сундуков:' : isCn ? '宝箱合成节点:' : 'Chest Merging:'}</strong> ${isRu ? 'В начале игры останавливайте авто-слияние на <strong>Фиолетовых сундуках</strong> и открывайте их для быстрой прокачки уровня Кодекса. В эндгейме сливайте на максимум до Оранжевых.' : isCn ? '前期宝箱自动合成停在<strong>紫色品阶</strong>并开启，快速填补图鉴等级。中后期再一路自动合成到最高橙色品阶。' : 'Early game: stop auto-merging at Purple chests to open and raise codex faster. Endgame: auto-merge to max Orange.'}</li>
            <li><strong>${isRu ? 'Алхимия (Кнопка «Max»):' : isCn ? '炼金必选【全部】:' : 'Alchemy Max:'}</strong> ${isRu ? 'Всегда используйте режим <strong>«Max»</strong>. Звездите даже зеленый и синий шмот для уровня Кодекса. Алхимия снабжает кристаллами и камнями Наследия.' : isCn ? '炼金一律选用<strong>“全部 (Max)”</strong>。即使是绿装蓝装也要升星以提升图鉴，同时获取兑换图鉴装备与传承石的晶石。' : 'Always use "Max" in alchemy. Star up all gear (even green/blue) for codex progression and legacy stones.'}</li>
            <li><strong>${isRu ? 'Слияние Кристаллов (Курс 5:1):' : isCn ? '晶石5:1合成法则:' : '5:1 Crystal Merging:'}</strong> ${isRu ? '5 Зеленых ➔ 1 Синий ➔ 5 Синих ➔ 1 Фиолетовый ➔ 5 Фиолетовых ➔ 1 Желтый/Божественный.<br>• В начале сливайте в <strong>Фиолетовые</strong> для быстрого выкупа недостающих сетов Кодекса.<br>• Собрав основу, сливайте в <strong>Желтые</strong> и закрывайте 100% зачистку карт в Кодексе для открытия Красного снаряжения.' : isCn ? '5绿=1蓝，5蓝=1紫，5紫=1金。<br>• 前期合成到<strong>紫晶</strong>，快速点出关键队伍套装辅助推图。<br>• 基础套装齐备后合成<strong>金晶</strong>，直接100%点亮目标地图图鉴，解锁红装成就。' : '5:1 merge ratio (5 Green = 1 Blue, 5 Blue = 1 Purple, 5 Purple = 1 Yellow).<br>• Early game: merge to Purple to quick-unlock codex gear sets.<br>• Midgame: merge to Yellow to 100% clear maps for Red gear unlocks.'}</li>
          </ul>
        </div>

        <!-- 5. Gear Star-Up & Legacy -->
        <div class="guide-card" style="border-left: 4px solid #ec4899;">
          <h3 style="color: #ec4899; display: flex; align-items: center; gap: 8px;">
            <span>⭐</span>
            <span>${isRu ? '5. Звездность Экипировки (1★–3★), Наследие (Legacy) и Комбо Сетов' : isCn ? '5. 装备升星(1★–3★)、传承(Legacy)与套装偷位机制' : '5. Gear Star-Up (1★–3★), Legacy & Multi-Set Resonance'}</span>
          </h3>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Шкала улучшения экипировки:' : isCn ? '装备升星消耗与收益:' : 'Star-Up Progression:'}</strong> ${isRu ? '• <strong>Legacy (Камень наследия):</strong> +1 очко ко всем 3 строкам талантов предмета.<br>• <strong>1★ (1 дубликат):</strong> +1 очко к 1-й строке.<br>• <strong>2★ (5 дубликатов):</strong> +1 очко ко 2-й строке.<br>• <strong>3★ (10 дубликатов):</strong> +1 очко к 3-й строке.<br>• <strong>MAX (Legacy + 3★):</strong> +3 очка ко ВСЕМ строкам талантов предмета!' : isCn ? '• <strong>传承 (传承石):</strong> 全词条+1点天赋点数。<br>• <strong>1星 (消耗1个同名装备):</strong> 第1行词条+1点。<br>• <strong>2星 (消耗5个同名装备):</strong> 第2行词条+1点。<br>• <strong>3星 (消耗10个同名装备):</strong> 第3行词条+1点。<br>• <strong>满配 (传承+3星):</strong> 装备全词条总计+3点！' : '• <strong>Legacy:</strong> +1 to all talent rows.<br>• <strong>1-Star (1 dupe):</strong> +1 to 1st row.<br>• <strong>2-Star (5 dupes):</strong> +1 to 2nd row.<br>• <strong>3-Star (10 dupes):</strong> +1 to 3rd row.<br>• <strong>MAX (Legacy + 3-Star):</strong> +3 to ALL talent rows!'}</li>
            <li><strong>${isRu ? 'Секрет 3★ — Активация сетов 2 предметами вместо 3:' : isCn ? '3星核心价值——少穿装备激活完整套装:' : '3-Star Secret: 2-Piece Full Resonance:'}</strong> ${isRu ? 'Прокачанная до 3★ вещь дает достаточно очков сета, чтобы полностью активировать 3-предметный сет <strong>всего двумя надетыми вещами</strong>! 3-й слот освобождается под другой мощный сет, позволяя комбинировать сразу несколько резонансов на одной героине.' : isCn ? '满3星装备提供的高额词条点数，能让原本需要穿戴3件的套装仅凭<strong>2件装备即可完全激活满层套装效果</strong>！腾出的第3个装备槽可以自由混搭其他强力套装，极大提升单人战斗力。' : '3-Star gear provides so many resonance points that you only need 2 pieces to activate a 3-piece set, freeing up the 3rd slot for another powerful set!'}</li>
            <li><strong>${isRu ? 'Запрет на распыление до 3★:' : isCn ? '未满3星绝不当狗粮:' : 'Never Fodder Below 3-Star:'}</strong> ${isRu ? '⚠️ Никогда не скармливайте в алхимию экипировку и руны, пока они не прокачаны до 3★ для Кодекса! Только лишние дубликаты после 3★ идут в утиль.' : isCn ? '⚠️ 严禁将未满3星的装备/符文送进炼金炉！必须先升满3星解锁图鉴最大收益，多余的溢出副本才拿去换晶石。' : '⚠️ Never use un-starred gear as alchemy fodder until it hits 3-Star for your codex!'}</li>
          </ul>
        </div>

        <!-- 6. Real Luck Mechanics & Abyss Drops -->
        <div class="guide-card" style="border-left: 4px solid #f97316;">
          <h3 style="color: #f97316; display: flex; align-items: center; gap: 8px;">
            <span>🎲</span>
            <span>${isRu ? '6. Разбор Механики Удачи (LUK), Клевер и Дроп d20 в Бездне' : isCn ? '6. 幸运值 (LUK) 真实机制、四叶草重骰与深渊额外掉落' : '6. True Luck (LUK) Mechanics, Clovers & Abyss d20 Drops'}</span>
          </h3>
          <ul class="guide-list">
            <li><strong>${isRu ? 'Как реально работает Удача (LUK):' : isCn ? '幸运值真实作用机制:' : 'How LUK Truly Works:'}</strong> ${isRu ? 'Удача (LUK) <strong>НЕ влияет на первый бесплатный бросок кубика</strong> (он на 100% случайный). Удача дает <strong>+1 к результату броска за каждые 15 суммарной Удачи команды ПРИ ТРАТЕ КЛЕВЕРА</strong>!' : isCn ? '全队幸运值 (LUK) <strong>完全不影响战后首次免费掷骰</strong>（初次掷骰为纯随机）。幸运值的真实机制为：<strong>在使用四叶草重骰时，全队每有15点幸运值，重骰点数固定+1</strong>！' : 'LUK <strong>does NOT affect the initial free dice roll</strong> (pure RNG). Instead, every 15 team LUK grants <strong>+1 to your dice roll WHEN SPENDING A CLOVER</strong>!'}</li>
            <li><strong>${isRu ? 'Стратегия Клевера на Натуральную 20-ку:' : isCn ? '四叶草绝杀20点策略:' : 'Clover Strategy for 20s:'}</strong> ${isRu ? 'Только ролл 20 гарантирует Оранжевый / Желтый Наследие дроп. Тратьте клевер только тогда, когда базовый ролл выпал 17–19 — с бонусом LUK вы гарантированно за 1–2 клевера добьете кубик до 20!' : isCn ? '投出20点是必定掉落橙装与黄晶传承装的唯一途径。初次掷出17-19点时再使用四叶草，依靠幸运加成只需1-2个四叶草即可稳稳保底20点神装！' : 'Only dice roll 20 guarantees Orange/Yellow Legacy drops. Only spend clovers when the initial roll is 17-19 to easily hit 20.'}</li>
            <li><strong>${isRu ? 'Смотрите на спрайты монстров:' : isCn ? '怪物穿什么就掉什么:' : 'Visual Monster Gear:'}</strong> ${isRu ? 'Какая экипировка визуально надета на спрайте монстра на клетке карты — именно она и может выпасть после победы!' : isCn ? '地图格子上怪物身上穿戴展示的是什么装备，击败后就会掉落该特定装备！' : 'The actual gear sprite visible on the enemy tile is exactly what can drop from that fight!'}</li>
            <li><strong>${isRu ? 'Экстра-дроп в Бездне (Abyss):' : isCn ? '深渊额外掉落加成:' : 'Abyss Extra Drops:'}</strong> ${isRu ? '• <strong>Бездна 20+ (Abyss 20+):</strong> +1 дополнительный предмет дропа.<br>• <strong>Бездна 40+ (Abyss 40+):</strong> +2 дополнительных предмета дропа.' : isCn ? '• <strong>深渊20+层：</strong>战后额外多掉落1件装备。<br>• <strong>深渊40+层：</strong>战后额外多掉落2件装备。' : '• <strong>Abyss 20+:</strong> +1 extra gear drop.<br>• <strong>Abyss 40+:</strong> +2 extra gear drops.'}</li>
          </ul>
        </div>

        <!-- 7. Talent Fruit Pity, Duplication & Transfer -->
        <div class="guide-card" style="border-left: 4px solid #14b8a6;">
          <h3 style="color: #14b8a6; display: flex; align-items: center; gap: 8px;">
            <span>🧬</span>
            <span>${isRu ? '7. Плоды Таланта: Скрытый Гарант (Wishlist Pity) и Секрет Дублирования Эксклюзивов' : isCn ? '7. 天赋果实心愿保底机制与专属天赋转移/复制秘籍' : '7. Talent Fruit Wishlist Pity, Transfer & Duplication Guide'}</span>
          </h3>
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

  // 3. Damage & Buffs
  getDamageRU() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🛡️ Формулы урона, Защита и Модификаторы</h2>
        
        <div class="guide-card">
          <h3>📊 Основные типы урона:</h3>
          <ul class="guide-list">
            <li><strong>Обычный урон (Physical / Magic):</strong> Снижается защитой цели (DEF) и процентом снижения урона (Damage Reduction).</li>
            <li><strong>Vulnerable (Уязвимость):</strong> Дополнительный урон, который добавляется <em>поверх</em> итоговой атаки независимо от защиты врага.</li>
            <li><strong>Drain MP / HP (Вытягивание):</strong> <em>Игнорирует Damage Reduction и лимиты урона!</em> Наносит чистый урон даже металлическим врагам.</li>
            <li><strong>HP Loss (Потеря здоровья — кровотечение, яд, ожог):</strong> <em>Полностью пробивает щиты</em> и тикает на каждое действие цели.</li>
          </ul>
        </div>

        <div class="guide-card">
          <h3>💡 Модификаторы характеристик:</h3>
          <div class="guide-table-wrapper">
            <table class="guide-table">
              <thead>
                <tr><th>Термин</th><th>Тип</th><th>Механика работы</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Gain / Gain Bonus</strong></td><td>На себя</td><td>Увеличивает получаемые стаки/баффы от внешних источников и своих пассивок.</td></tr>
                <tr><td><strong>Apply [Additional]</strong></td><td>Исходящий</td><td>Увеличивает количество стаков/дебаффов, которые вы накладываете на врагов.</td></tr>
                <tr><td><strong>Tenacity (Стойкость)</strong></td><td>Защита</td><td>Снижает длительность дебаффов контроля и сопротивление критическому урону.</td></tr>
                <tr><td><strong>Weakness (Слабость)</strong></td><td>Дебафф</td><td>Увеличивает весь входящий урон по цели от всех источников.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  getDamageEN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🛡️ Damage Formulas, Shields & Modifiers</h2>
        
        <div class="guide-card">
          <h3>📊 Damage Classifications:</h3>
          <ul class="guide-list">
            <li><strong>Standard Damage:</strong> Mitigated by Defense (DEF) and Damage Reduction (DR%).</li>
            <li><strong>Vulnerable:</strong> Added on top of post-mitigation damage, bypassing defensive reductions.</li>
            <li><strong>Drain MP / HP:</strong> <em>Bypasses Damage Reduction and damage caps!</em> Deals direct damage to Metallic enemies.</li>
            <li><strong>HP Loss (Bleed/Poison/Burn):</strong> <em>Completely penetrates shields</em> and ticks on every enemy action.</li>
          </ul>
        </div>

        <div class="guide-card">
          <h3>💡 Key Stat Modifiers:</h3>
          <div class="guide-table-wrapper">
            <table class="guide-table">
              <thead>
                <tr><th>Modifier</th><th>Target</th><th>Mechanism</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Gain / Gain Bonus</strong></td><td>Self</td><td>Amplifies incoming buffs and stack accumulation.</td></tr>
                <tr><td><strong>Apply [Additional]</strong></td><td>Outgoing</td><td>Increases the quantity of debuffs and stacks applied to targets.</td></tr>
                <tr><td><strong>Tenacity</strong></td><td>Defense</td><td>Reduces duration of crowd control and critical damage intake.</td></tr>
                <tr><td><strong>Weakness</strong></td><td>Debuff</td><td>Increases all incoming damage to the afflicted target.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  getDamageCN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🛡️ 伤害计算、护盾与增益机制</h2>
        
        <div class="guide-card">
          <h3>📊 伤害类型机制：</h3>
          <ul class="guide-list">
            <li><strong>常规伤害：</strong> 受防御值 (DEF) 与百分比减伤 (Damage Reduction) 减免。</li>
            <li><strong>易伤 (Vulnerable)：</strong> 在伤害结算后额外叠加，不受防御减免影响。</li>
            <li><strong>吸取 MP / HP (Drain)：</strong> <strong>无视减伤与单次伤害上限</strong>，对金属种族造成直接真实伤害。</li>
            <li><strong>生命流失 (HP Loss)：</strong> <strong>完全穿透护盾</strong>，并在目标每次行动时结算。</li>
          </ul>
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
            <p style="font-size: 13.5px; color: var(--text-secondary);">
              ${isRu 
                ? 'Эксклюзивные героини, доступные только во время действия специальных сезонных событий. Имеют гарантированный повышенный шанс призыва.' 
                : isCn 
                ? '限时登场的专属强力角色，仅在对应活动UP期间可抽取。' 
                : 'Exclusive heroines available only during active event periods with featured drop rate guarantees.'}
            </p>
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
                    <div style="font-size: 12px; color: #38bdf8; margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
                      <span>⏳</span>
                      <span>${ev.start} — ${ev.end}</span>
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
                        <div style="overflow: hidden;">
                          <div style="font-size: 11px; color: #a78bfa; font-weight: 600;">${slot.rolePos}</div>
                          <div style="font-size: 13px; font-weight: 700; color: #f1f5f9; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${charName}</div>
                          <div style="font-size: 10.5px; color: var(--text-muted);">${slot.note}</div>
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
  }
};
