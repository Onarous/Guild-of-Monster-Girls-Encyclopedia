/**
 * Calculators & Interactive Mechanics Simulator for Guild of Monster Girls Web Encyclopedia
 * 
 * Includes 5 Full Interactive Tools:
 * 1. 🎲 LUK & Clover d20 Drop Calculator (with Abyss multipliers and clover recommendations)
 * 2. 🧬 Talent Fruit Wishlist Pity & Reroll Simulator (with live 4-slot rolling & pity scaling)
 * 3. 🎯 Battlefield Range, Distance & Targeting Sandbox (with dynamic distance & target priorities)
 * 4. 🧮 Stat Conversion, Damage & Toughness Break Simulator (Atk vs Def, Weakness Broken, HP Loss)
 * 5. 🔄 Talent Duplication & Transfer Wizard (Page 2 -> Donor -> Page 1 multi-exclusive guide)
 * 
 * Supports RU, EN, and CN.
 */

const CalculatorsView = {
  activeCalc: 'clover', // 'clover' | 'talent' | 'range' | 'damage' | 'transfer'

  // --- State for Calculator 1: LUK & Clover ---
  cloverState: {
    teamLuk: 30,
    baseRoll: 18,
    dungeonTier: 'abyss20', // 'normal' | 'abyss20' | 'abyss40'
    isRolling: false
  },

  // --- State for Calculator 2: Talent Pity & Simulator ---
  talentState: {
    mode: 'pity', // 'pity' | 'sim'
    failedGoldCount: 0,
    availableFruits: 500,
    targetTalent: 'NineLives',
    currentSlots: ['—', '—', '—', '—'],
    slotRarities: ['none', 'none', 'none', 'none'],
    simStats: {
      rolls: 0,
      fruitsSpent: 0,
      goldCount: 0,
      targetHits: 0,
      history: []
    }
  },

  // --- State for Calculator 3: Range & Targeting Sandbox ---
  rangeState: {
    activeAttacker: 0, // slot 0, 1, 2 (allies) or 3, 4, 5 (enemies)
    targetPriority: 'nearest', // 'nearest' | 'furthest' | 'precision' | 'lowestHp' | 'highestAtk'
    baseRange: 1,
    slots: [
      { id: 0, team: 'ally', name: 'Союзник (Тыл)', alive: true, taunt: false, precision: false, avian: false, hp: 100, atk: 50 },
      { id: 1, team: 'ally', name: 'Союзник (Центр)', alive: true, taunt: false, precision: false, avian: false, hp: 120, atk: 80 },
      { id: 2, team: 'ally', name: 'Союзник (Авангард)', alive: true, taunt: false, precision: false, avian: false, hp: 200, atk: 40 },
      { id: 3, team: 'enemy', name: 'Враг (Авангард)', alive: true, taunt: false, precision: false, avian: false, hp: 180, atk: 45 },
      { id: 4, team: 'enemy', name: 'Враг (Центр)', alive: true, taunt: false, precision: false, avian: false, hp: 110, atk: 75 },
      { id: 5, team: 'enemy', name: 'Враг (Тыл)', alive: true, taunt: false, precision: false, avian: false, hp: 90, atk: 90 }
    ]
  },

  // --- State for Calculator 4: Damage & Break Sim ---
  damageState: {
    attackerStat: 150, // Str / Agi / Spi
    bonusAtkPct: 20,
    flatAtk: 10,
    multiHitCount: 1,
    vulnerable: 0,
    doubleDmg: false,
    defenderStat: 120, // Def stat
    weaknessStat: 30,  // Weakness stat
    isBroken: false,
    shield: 0,
    hpLossVal: 200,
    hpLossRedPct: 25,
    isMetallic: false
  },

  // --- State for Calculator 5: Talent Duplication Wizard ---
  transferState: {
    step: 1,
    heroineName: 'Принцесса гарпий',
    exclusiveName: '9 жизней'
  },

  setCalculator(calcId) {
    this.activeCalc = calcId;
    const container = document.getElementById('calculatorsContainer');
    if (container) {
      this.render('calculatorsContainer', App.state.lang);
    }
  },

  render(containerId, currentLang = 'RU') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const lang = currentLang.toUpperCase();
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const calcTabs = [
      { id: 'clover', icon: '🎲', title: isRu ? 'Удача и Клевер (d20)' : isCn ? '幸运值与四叶草 (d20)' : 'LUK & Clover (d20)' },
      { id: 'talent', icon: '🧬', title: isRu ? 'Гарант и Ролл Талантов' : isCn ? '心愿天赋保底与洗练' : 'Talent Pity & Reroll' },
      { id: 'range', icon: '🎯', title: isRu ? 'Симулятор Таргетинга' : isCn ? '攻击距离与索敌模拟' : 'Range & Targeting Sim' },
      { id: 'damage', icon: '🧮', title: isRu ? 'Урон и Пробитие Стойкости' : isCn ? '伤害计算与破韧模拟' : 'Damage & Break Sim' },
      { id: 'transfer', icon: '🔄', title: isRu ? 'Мастер Дублирования' : isCn ? '专属天赋多重叠加' : 'Talent Duplication' }
    ];

    let contentHtml = '';
    switch (this.activeCalc) {
      case 'clover':
        contentHtml = this.renderCloverCalc(lang);
        break;
      case 'talent':
        contentHtml = this.renderTalentCalc(lang);
        break;
      case 'range':
        contentHtml = this.renderRangeCalc(lang);
        break;
      case 'damage':
        contentHtml = this.renderDamageCalc(lang);
        break;
      case 'transfer':
        contentHtml = this.renderTransferWizard(lang);
        break;
      default:
        contentHtml = this.renderCloverCalc(lang);
    }

    container.innerHTML = `
      <div class="calc-wrapper">
        <!-- Calculators Navigation Bar -->
        <div class="calc-nav-bar">
          ${calcTabs.map(t => `
            <button class="calc-nav-tab ${this.activeCalc === t.id ? 'active' : ''}" onclick="CalculatorsView.setCalculator('${t.id}')">
              <span class="calc-tab-icon">${t.icon}</span>
              <span class="calc-tab-text">${t.title}</span>
            </button>
          `).join('')}
        </div>

        <!-- Calculator Main Content Container -->
        <div class="calc-main-panel">
          ${contentHtml}
        </div>
      </div>
    `;
  },

  // =========================================================================
  // 1. LUK & Clover d20 Drop Calculator
  // =========================================================================
  renderCloverCalc(lang) {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const s = this.cloverState;
    const bonusPerClover = 1 + Math.floor(s.teamLuk / 15);
    const neededDiff = 20 - s.baseRoll;
    const cloversNeeded = neededDiff <= 0 ? 0 : Math.ceil(neededDiff / bonusPerClover);
    const finalRollWithClovers = Math.min(20, s.baseRoll + (cloversNeeded * bonusPerClover));

    // Drop estimation
    let extraItemsText = isRu ? 'Стандартный дроп' : isCn ? '基础掉落' : 'Standard Drop';
    if (s.dungeonTier === 'abyss20') extraItemsText = isRu ? '+1 Доп. предмет (Бездна 20+)' : isCn ? '+1 额外掉落 (深渊20+)' : '+1 Extra Drop (Abyss 20+)';
    if (s.dungeonTier === 'abyss40') extraItemsText = isRu ? '+2 Доп. предмета (Бездна 40+)' : isCn ? '+2 额外掉落 (深渊40+)' : '+2 Extra Drops (Abyss 40+)';

    // Status recommendation
    let statusClass = 'status-gold';
    let statusTitle = '';
    let statusDesc = '';

    if (s.baseRoll >= 20) {
      statusClass = 'status-max';
      statusTitle = isRu ? '🎉 Натуральная 20-ка! (Natural 20)' : isCn ? '🎉 投出天然满点20点！' : '🎉 Natural 20!';
      statusDesc = isRu 
        ? 'Клевер тратить не нужно! 100% Гарантированный Оранжевый / Желтый Наследие дроп.' 
        : isCn 
        ? '无需消耗四叶草！100%必定掉落最高阶橙装或传承装备。' 
        : 'Zero clovers needed! 100% Guaranteed Orange / Legacy Yellow drop.';
    } else if (s.baseRoll >= 17) {
      statusClass = 'status-ideal';
      statusTitle = isRu ? '🔥 Идеальный момент для Клевера!' : isCn ? '🔥 绝佳重骰时机！' : '🔥 Ideal Clover Window!';
      statusDesc = isRu 
        ? `Базовый ролл высокий (${s.baseRoll}). С бонусом Удачи +${bonusPerClover} вам нужно всего ${cloversNeeded} Клевер(а), чтобы добить результат до 20!` 
        : isCn 
        ? `初始掷点极高(${s.baseRoll})。依靠幸运加成每次+${bonusPerClover}点，仅需消耗 ${cloversNeeded} 个四叶草即可稳稳保底20点！` 
        : `High base roll (${s.baseRoll}). With +${bonusPerClover} LUK bonus, spending only ${cloversNeeded} Clover(s) guarantees a 20!`;
    } else if (s.baseRoll >= 14) {
      statusClass = 'status-warning';
      statusTitle = isRu ? '⚠️ Средний ролл (Расход 2-3+ клеверов)' : isCn ? '⚠️ 中等点数（需消耗较多四叶草）' : '⚠️ Moderate Roll';
      statusDesc = isRu 
        ? `Потребуется ${cloversNeeded} клевера. Если клевера в избытке — можно добивать, иначе лучше сохранить для роллов 17+.` 
        : isCn 
        ? `需要消耗 ${cloversNeeded} 个四叶草。若四叶草充足可考虑重骰，否则建议囤给17点以上的掷骰。` 
        : `Requires ${cloversNeeded} clovers. Recommended to save clovers unless you have plenty in stock.`;
    } else {
      statusClass = 'status-danger';
      statusTitle = isRu ? '❌ Не рекомендуется тратить Клевер' : isCn ? '❌ 强烈建议放弃重骰' : '❌ Not Recommended';
      statusDesc = isRu 
        ? `Базовый ролл слишком низкий (${s.baseRoll}). Потребуется ${cloversNeeded} клевера, что экономически невыгодно. Сохраните клевер!` 
        : isCn 
        ? `初始点数过低(${s.baseRoll})，需消耗 ${cloversNeeded} 个四叶草，性价比较低，建议直接收手。` 
        : `Initial roll is too low (${s.baseRoll}). Spending ${cloversNeeded} clovers is inefficient. Save them for 17+ rolls!`;
    }

    return `
      <div class="calc-box">
        <div class="calc-header">
          <div class="calc-badge">🎲 GAME MECHANIC: D20 & LUK</div>
          <h2 class="calc-title">${isRu ? 'Калькулятор Удачи (LUK) и Клевера' : isCn ? '幸运值与四叶草 d20 掉落计算器' : 'LUK & Clover d20 Drop Calculator'}</h2>
          <p class="calc-subtitle">
            ${isRu 
              ? 'Первый бросок после боя — это чистый RNG (1–20). Характеристика LUK дает <strong>+1 к броску за каждые 15 Удачи команды ТОЛЬКО ПРИ ТРАТЕ КЛЕВЕРА</strong>. Ролл 20 гарантирует Оранжевый / Наследие дроп.' 
              : isCn 
              ? '战后初次掷骰为纯随机(1–20)。队伍幸运值(LUK)<strong>每有15点，在使用四叶草重骰时提供+1点增益</strong>。唯有投出20点才能必定获得顶级橙装/传承装。' 
              : 'Initial combat roll is pure 1-20 RNG. Team LUK grants <strong>+1 to dice result per 15 LUK ONLY WHEN SPENDING CLOVERS</strong>. Roll 20 guarantees top-tier Orange/Legacy drops.'}
          </p>
        </div>

        <div class="calc-grid-2col">
          <!-- Inputs Card -->
          <div class="calc-card">
            <h3 class="calc-section-title">⚙️ ${isRu ? 'Параметры боя и команды' : isCn ? '队伍与副本参数' : 'Battle Parameters'}</h3>

            <!-- Team LUK Input -->
            <div class="calc-field">
              <div class="calc-label-row">
                <label>🍀 ${isRu ? 'Суммарная Удача команды (Team LUK):' : isCn ? '全队总幸运值 (Team LUK):' : 'Total Team LUK:'}</label>
                <span class="calc-val-badge">${s.teamLuk} LUK (+${Math.floor(s.teamLuk / 15)} ${isRu ? 'к броску' : isCn ? '点数加成' : 'to roll'})</span>
              </div>
              <input type="range" min="0" max="150" step="1" value="${s.teamLuk}" class="calc-slider" oninput="CalculatorsView.updateLuk(this.value)">
              <div class="calc-presets">
                <button class="calc-preset-btn ${s.teamLuk === 0 ? 'active' : ''}" onclick="CalculatorsView.updateLuk(0)">0 (База)</button>
                <button class="calc-preset-btn ${s.teamLuk === 15 ? 'active' : ''}" onclick="CalculatorsView.updateLuk(15)">15 (+1)</button>
                <button class="calc-preset-btn ${s.teamLuk === 30 ? 'active' : ''}" onclick="CalculatorsView.updateLuk(30)">30 (+2)</button>
                <button class="calc-preset-btn ${s.teamLuk === 45 ? 'active' : ''}" onclick="CalculatorsView.updateLuk(45)">45 (+3)</button>
                <button class="calc-preset-btn ${s.teamLuk === 60 ? 'active' : ''}" onclick="CalculatorsView.updateLuk(60)">60 (+4)</button>
                <button class="calc-preset-btn ${s.teamLuk === 90 ? 'active' : ''}" onclick="CalculatorsView.updateLuk(90)">90 (+6)</button>
              </div>
            </div>

            <!-- Base Roll Input & Dice Roller -->
            <div class="calc-field" style="margin-top: 20px;">
              <div class="calc-label-row">
                <label>🎲 ${isRu ? 'Выпавший базовый бросок кубика (d20):' : isCn ? '战后初始掷骰点数 (d20):' : 'Initial Dice Roll (d20):'}</label>
                <span class="calc-val-badge" style="font-size: 16px; font-weight: 800; color: #fbbf24;">${s.baseRoll}</span>
              </div>
              <div class="d20-selector-grid">
                ${Array.from({ length: 20 }, (_, i) => i + 1).map(num => `
                  <button class="d20-cell ${s.baseRoll === num ? 'active' : ''} ${num >= 17 ? 'd20-high' : ''}" onclick="CalculatorsView.updateBaseRoll(${num})">
                    ${num}
                  </button>
                `).join('')}
              </div>
              <div style="margin-top: 12px; display: flex; justify-content: flex-end;">
                <button class="calc-action-btn" onclick="CalculatorsView.rollRandomD20()">
                  🎲 ${isRu ? 'Бросить случайный кубик' : isCn ? '随机模拟初次掷骰' : 'Roll Random d20'}
                </button>
              </div>
            </div>

            <!-- Dungeon Tier Selector -->
            <div class="calc-field" style="margin-top: 18px;">
              <label>🗺️ ${isRu ? 'Тип подземелья / Этаж Бездны:' : isCn ? '副本难度 / 深渊层数:' : 'Dungeon / Abyss Depth:'}</label>
              <div class="calc-pill-selector">
                <button class="calc-select-pill ${s.dungeonTier === 'normal' ? 'active' : ''}" onclick="CalculatorsView.updateDungeonTier('normal')">
                  ${isRu ? 'Обычные карты' : isCn ? '常规地图' : 'Normal'}
                </button>
                <button class="calc-select-pill ${s.dungeonTier === 'abyss20' ? 'active' : ''}" onclick="CalculatorsView.updateDungeonTier('abyss20')">
                  🔥 ${isRu ? 'Бездна 20+ (+1 дроп)' : isCn ? '深渊 20+ (+1掉落)' : 'Abyss 20+ (+1)'}
                </button>
                <button class="calc-select-pill ${s.dungeonTier === 'abyss40' ? 'active' : ''}" onclick="CalculatorsView.updateDungeonTier('abyss40')">
                  ⚡ ${isRu ? 'Бездна 40+ (+2 дропа)' : isCn ? '深渊 40+ (+2掉落)' : 'Abyss 40+ (+2)'}
                </button>
              </div>
            </div>
          </div>

          <!-- Results Card -->
          <div class="calc-card result-card">
            <h3 class="calc-section-title">📊 ${isRu ? 'Результат расчета и Стратегия' : isCn ? '收益测算与决策建议' : 'Calculation & Strategy'}</h3>

            <!-- Big Metric Display -->
            <div class="metric-display-banner ${statusClass}">
              <div class="metric-big-number">${cloversNeeded}</div>
              <div class="metric-big-label">
                ${isRu ? 'Клевера требуется для 20-ки' : isCn ? '保底20点所需四叶草' : 'Clovers for 20 Guarantee'}
              </div>
              <div class="metric-sub-info">
                ${isRu ? `Итоговый ролл: <strong>${finalRollWithClovers}/20</strong> (+${bonusPerClover} за клевер)` : isCn ? `最终投出点数: <strong>${finalRollWithClovers}/20</strong> (每次+${bonusPerClover}点)` : `Final Roll: <strong>${finalRollWithClovers}/20</strong> (+${bonusPerClover}/clover)`}
              </div>
            </div>

            <!-- Recommendation Box -->
            <div class="calc-recommendation-box ${statusClass}">
              <div class="rec-title">${statusTitle}</div>
              <div class="rec-desc">${statusDesc}</div>
            </div>

            <!-- Details List -->
            <div class="calc-breakdown-list">
              <div class="breakdown-row">
                <span>🎲 ${isRu ? 'Базовый бросок:' : isCn ? '战后初始掷点:' : 'Base Roll:'}</span>
                <strong>${s.baseRoll} / 20</strong>
              </div>
              <div class="breakdown-row">
                <span>🍀 ${isRu ? 'Сила 1 Клевера (База 1 + LUK):' : isCn ? '单次四叶草收益 (基础1+幸运):' : '1 Clover Gain (1 + LUK):'}</span>
                <strong style="color: #34d399;">+${bonusPerClover} ${isRu ? 'к роллу' : isCn ? '点' : 'pts'}</strong>
              </div>
              <div class="breakdown-row">
                <span>🎁 ${isRu ? 'Ожидаемый дроп снаряжения:' : isCn ? '装备掉落加成预估:' : 'Expected Gear Drops:'}</span>
                <strong style="color: #38bdf8;">${extraItemsText}</strong>
              </div>
              <div class="breakdown-row">
                <span>👑 ${isRu ? 'Шанс Оранжевого / Наследия:' : isCn ? '橙装/传承神装获取率:' : 'Orange / Legacy Rate:'}</span>
                <strong style="color: #fbbf24;">${finalRollWithClovers >= 20 ? '100% (ГАРАНТИРОВАНО)' : (s.baseRoll >= 17 ? 'Высокий при реролле' : 'Низкий')}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  updateLuk(val) {
    this.cloverState.teamLuk = parseInt(val, 10) || 0;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateBaseRoll(val) {
    this.cloverState.baseRoll = parseInt(val, 10) || 1;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateDungeonTier(tier) {
    this.cloverState.dungeonTier = tier;
    this.render('calculatorsContainer', App.state.lang);
  },

  rollRandomD20() {
    const rnd = Math.floor(Math.random() * 20) + 1;
    this.cloverState.baseRoll = rnd;
    this.render('calculatorsContainer', App.state.lang);
  },

  // =========================================================================
  // 2. Talent Fruit Wishlist Pity & Reroll Simulator
  // =========================================================================
  renderTalentCalc(lang) {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const s = this.talentState;
    const misses = s.failedGoldCount;
    
    // Formula: 0-50 misses = base (5%), 51-69 = base + (misses - 50) * 5%, 70 = 100%
    let targetChance = 5;
    if (misses >= 70) {
      targetChance = 100;
    } else if (misses > 50) {
      targetChance = 5 + (misses - 50) * 5;
    }

    const goldNeededToPity = Math.max(0, 70 - misses);
    const estFruitsNeeded = goldNeededToPity * 35; // avg 35 fruits per gold

    const popularTalents = [
      { id: 'NineLives', name: isRu ? '9 жизней (Nine Lives)' : isCn ? '九命 (Nine Lives)' : 'Nine Lives' },
      { id: 'LuckyStrike', name: isRu ? 'Счастливый удар (Lucky Strike)' : isCn ? '幸运一击 (Lucky Strike)' : 'Lucky Strike' },
      { id: 'Bullseye', name: isRu ? 'В яблочко (Bullseye)' : isCn ? '正中靶心 (Bullseye)' : 'Bullseye' },
      { id: 'MysticShield', name: isRu ? 'Таинственная защита' : isCn ? '秘能护盾' : 'Mystic Shield' },
      { id: 'BloodPact', name: isRu ? 'Кровавый пакт' : isCn ? '鲜血之契' : 'Blood Pact' }
    ];

    return `
      <div class="calc-box">
        <div class="calc-header">
          <div class="calc-badge">🧬 GAME MECHANIC: TALENT WISHLIST PITY</div>
          <h2 class="calc-title">${isRu ? 'Калькулятор Гаранта и Симулятор Талантов' : isCn ? '天赋果实心愿保底计算器与洗练模拟' : 'Talent Wishlist Pity & Reroll Simulator'}</h2>
          <p class="calc-subtitle">
            ${isRu 
              ? 'Гарант на целевой золотой талант из Списка Желаний (Wishlist) начинает расти <strong>ТОЛЬКО ПОСЛЕ 50 промахов золотых талантов</strong>. С 51-го ролла шанс растет на <strong>+5% за каждый последующий золотой</strong>, достигая 100% на 70-м золотом таланте.' 
              : isCn 
              ? '心愿金天赋保底概率<strong>只有在连续歪掉50个非目标金天赋后才开始递增</strong>。从第51个金天赋起，每次洗练概率递增<strong>+5%</strong>，第70个金天赋必定100%出心愿目标！' 
              : 'Wishlist gold talent pity begins scaling ONLY after 50 non-wishlist gold talents. From roll 51 onwards, chance increases by +5% per gold reroll, hitting 100% hard pity at roll 70.'}
          </p>
        </div>

        <div class="calc-sub-mode-bar">
          <button class="calc-mode-btn ${s.mode === 'pity' ? 'active' : ''}" onclick="CalculatorsView.setTalentMode('pity')">
            📈 ${isRu ? 'Калькулятор и Анализ Гаранта' : isCn ? '保底概率与消耗测算' : 'Pity & Cost Calculator'}
          </button>
          <button class="calc-mode-btn ${s.mode === 'sim' ? 'active' : ''}" onclick="CalculatorsView.setTalentMode('sim')">
            🎰 ${isRu ? 'Живой Симулятор Ролла 4 слотов' : isCn ? '四槽位实操洗练模拟器' : 'Live 4-Slot Reroll Simulator'}
          </button>
        </div>

        ${s.mode === 'pity' ? `
          <div class="calc-grid-2col">
            <!-- Pity Inputs -->
            <div class="calc-card">
              <h3 class="calc-section-title">⚙️ ${isRu ? 'Текущий прогресс роллов' : isCn ? '当前洗练进度' : 'Current Pity Progress'}</h3>

              <div class="calc-field">
                <div class="calc-label-row">
                  <label>❌ ${isRu ? 'Количество золотых талантов-промахов (0–70):' : isCn ? '已连续歪掉的非心愿金天赋数 (0–70):' : 'Non-wishlist Gold Talents (0-70):'}</label>
                  <span class="calc-val-badge" style="font-size: 16px; font-weight: 800; color: ${misses >= 50 ? '#ec4899' : '#38bdf8'};">${misses} / 70</span>
                </div>
                <input type="range" min="0" max="70" step="1" value="${misses}" class="calc-slider" oninput="CalculatorsView.updateFailedGolds(this.value)">
                <div class="calc-presets">
                  <button class="calc-preset-btn ${misses === 0 ? 'active' : ''}" onclick="CalculatorsView.updateFailedGolds(0)">0 (${isRu ? 'Старт' : isCn ? '初始' : 'Start'})</button>
                  <button class="calc-preset-btn ${misses === 30 ? 'active' : ''}" onclick="CalculatorsView.updateFailedGolds(30)">30 (0% ${isRu ? 'роста' : isCn ? '递增' : 'boost'})</button>
                  <button class="calc-preset-btn ${misses === 50 ? 'active' : ''}" onclick="CalculatorsView.updateFailedGolds(50)">50 (${isRu ? 'Старт гаранта' : isCn ? '保底启动' : 'Pity starts'})</button>
                  <button class="calc-preset-btn ${misses === 60 ? 'active' : ''}" onclick="CalculatorsView.updateFailedGolds(60)">60 (55% ${isRu ? 'шанс' : isCn ? '概率' : 'chance'})</button>
                  <button class="calc-preset-btn ${misses === 70 ? 'active' : ''}" onclick="CalculatorsView.updateFailedGolds(70)">70 (100% ${isRu ? 'Гарант' : isCn ? '绝对保底' : 'Pity'})</button>
                </div>
              </div>

              <!-- Pity Visual Scale -->
              <div style="margin-top: 24px;">
                <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 6px; color: var(--text-secondary);">
                  <span>0 (${isRu ? 'Зона накопления' : isCn ? '常规积累区' : 'Standard Zone'})</span>
                  <span>50 (${isRu ? 'Старт роста +5%' : isCn ? '递增起点' : '+5% Growth'})</span>
                  <span style="color: #fbbf24; font-weight: 700;">70 (100% ${isRu ? 'Гарант' : isCn ? '保底' : 'Pity'})</span>
                </div>
                <div class="pity-progress-track">
                  <div class="pity-progress-fill" style="width: ${(misses / 70) * 100}%;"></div>
                  <div class="pity-milestone-marker" style="left: ${(50 / 70) * 100}%;"></div>
                </div>
              </div>
            </div>

            <!-- Pity Results -->
            <div class="calc-card result-card">
              <h3 class="calc-section-title">📊 ${isRu ? 'Шанс выпадения и Прогноз' : isCn ? '概率分析与消耗预测' : 'Pity Forecast & Cost'}</h3>

              <div class="metric-display-banner ${targetChance === 100 ? 'status-max' : (targetChance > 5 ? 'status-ideal' : 'status-gold')}">
                <div class="metric-big-number">${targetChance}%</div>
                <div class="metric-big-label">
                  ${isRu ? 'Текущий шанс на целевой талант' : isCn ? '当前心愿目标金天赋命中率' : 'Target Talent Hit Chance'}
                </div>
                <div class="metric-sub-info">
                  ${misses < 50 ? (isRu ? `До старта роста гаранта: <strong>${50 - misses}</strong> золотых талантов` : isCn ? `距离保底递增还需 <strong>${50 - misses}</strong> 个金天赋` : `Golds until pity growth: <strong>${50 - misses}</strong>`) : (isRu ? `Активен бонус гаранта: <strong>+${(misses - 50) * 5}%</strong>` : isCn ? `已激活保底递增加成: <strong>+${(misses - 50) * 5}%</strong>` : `Pity boost active: <strong>+${(misses - 50) * 5}%</strong>`)}
                </div>
              </div>

              <div class="calc-breakdown-list" style="margin-top: 16px;">
                <div class="breakdown-row">
                  <span>🎯 ${isRu ? 'Статус зоны гаранта:' : isCn ? '当前保底区间:' : 'Pity Phase:'}</span>
                  <strong style="color: ${misses >= 50 ? '#f43f5e' : '#38bdf8'};">
                    ${misses >= 70 ? (isRu ? '🔥 100% ХАРД-ГАРАНТ' : isCn ? '🔥 100% 绝对硬保底' : '🔥 100% HARD PITY') : (misses >= 50 ? (isRu ? `⚡ Зона ускорения (${targetChance}%)` : isCn ? `⚡ 递增暴击区 (${targetChance}%)` : `⚡ Escalation Zone (${targetChance}%)`) : (isRu ? '⏳ Базовый шанс (5%)' : isCn ? '⏳ 基础概率阶段 (5%)' : '⏳ Base Chance (5%)'))}
                  </strong>
                </div>
                <div class="breakdown-row">
                  <span>🍇 ${isRu ? 'Осталось золотых до 100% гаранта:' : isCn ? '距离100%必中还差金天赋:' : 'Golds to 100% Pity:'}</span>
                  <strong>${goldNeededToPity} ${isRu ? 'золотых' : isCn ? '个' : 'golds'}</strong>
                </div>
                <div class="breakdown-row">
                  <span>💰 ${isRu ? 'Оценка нужных Плодов таланта:' : isCn ? '预计所需天赋果实总量:' : 'Estimated Fruit Cost:'}</span>
                  <strong style="color: #fbbf24;">~${estFruitsNeeded} ${isRu ? 'плодов' : isCn ? '个果实' : 'fruits'}</strong>
                </div>
              </div>
            </div>
          </div>
        ` : `
          <!-- Simulator Mode -->
          <div class="calc-card" style="margin-top: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
              <div>
                <h3 style="margin: 0; color: #f3e8ff; font-size: 17px;">🎰 ${isRu ? 'Симулятор страницы талантов (4 слота)' : isCn ? '天赋页四槽位实机模拟' : '4-Slot Talent Board'}</h3>
                <p style="margin: 4px 0 0 0; font-size: 13px; color: var(--text-secondary);">
                  ${isRu ? 'Целевой талант из Списка Желаний:' : isCn ? '当前心愿目标专属天赋:' : 'Wishlist Target:'} 
                  <strong style="color: #fbbf24;">${popularTalents.find(t => t.id === s.targetTalent)?.name || s.targetTalent}</strong>
                </p>
              </div>

              <!-- Action buttons -->
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="calc-action-btn" onclick="CalculatorsView.simRoll(1)">
                  🎲 ${isRu ? 'Крутить x1 (10 плодов)' : isCn ? '洗练 1次 (10果实)' : 'Roll x1 (10)'}
                </button>
                <button class="calc-action-btn" onclick="CalculatorsView.simRoll(10)">
                  ⚡ ${isRu ? 'Крутить x10 (100 плодов)' : isCn ? '连洗 10次 (100果实)' : 'Roll x10 (100)'}
                </button>
                <button class="calc-action-btn" style="background: linear-gradient(135deg, #ec4899, #8b5cf6);" onclick="CalculatorsView.simRollUntilGold()">
                  🌟 ${isRu ? 'До следующего золотого' : isCn ? '直接洗出下个金天赋' : 'Roll to Gold'}
                </button>
                <button class="calc-preset-btn" onclick="CalculatorsView.resetSim()">
                  🔄 ${isRu ? 'Сбросить симулятор' : isCn ? '重置模拟' : 'Reset'}
                </button>
              </div>
            </div>

            <!-- 4 Slots Display -->
            <div class="talent-slots-grid">
              ${s.currentSlots.map((slotText, idx) => {
                const rar = s.slotRarities[idx];
                const isTarget = slotText.includes('9 жизней') || slotText.includes('Nine') || slotText.includes('九命') || slotText.includes('★');
                return `
                  <div class="talent-slot-card rarity-${rar} ${isTarget ? 'target-hit' : ''}">
                    <div class="slot-number">${isRu ? `Слот ${idx + 1}` : isCn ? `槽位 ${idx + 1}` : `Slot ${idx + 1}`}</div>
                    <div class="slot-content">${slotText}</div>
                    <div class="slot-badge">${rar.toUpperCase()}</div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Sim Stats Row -->
            <div class="sim-stats-grid">
              <div class="sim-stat-box">
                <div class="sim-stat-val">${s.simStats.rolls}</div>
                <div class="sim-stat-lbl">${isRu ? 'Всего круток' : isCn ? '总洗练次数' : 'Total Rolls'}</div>
              </div>
              <div class="sim-stat-box">
                <div class="sim-stat-val" style="color: #fbbf24;">${s.simStats.fruitsSpent}</div>
                <div class="sim-stat-lbl">${isRu ? 'Плодов потрачено' : isCn ? '消耗果实总量' : 'Fruits Spent'}</div>
              </div>
              <div class="sim-stat-box">
                <div class="sim-stat-val" style="color: #ec4899;">${s.simStats.goldCount}</div>
                <div class="sim-stat-lbl">${isRu ? 'Золотых выпало' : isCn ? '出金总数' : 'Golds Rolled'}</div>
              </div>
              <div class="sim-stat-box">
                <div class="sim-stat-val" style="color: #34d399;">${s.simStats.targetHits}</div>
                <div class="sim-stat-lbl">${isRu ? 'Целевых талантов' : isCn ? '心愿目标命中' : 'Target Hits'}</div>
              </div>
              <div class="sim-stat-box">
                <div class="sim-stat-val" style="color: #38bdf8;">${s.failedGoldCount}/70</div>
                <div class="sim-stat-lbl">${isRu ? 'Счетчик гаранта' : isCn ? '心愿保底计数' : 'Pity Counter'}</div>
              </div>
            </div>

            <!-- Sim History Log -->
            ${s.simStats.history.length > 0 ? `
              <div class="sim-log-box">
                <div style="font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">📜 ${isRu ? 'История последних золотых роллов:' : isCn ? '最近出金记录日志:' : 'Recent Gold Roll History:'}</div>
                ${s.simStats.history.slice(-5).reverse().map(h => `
                  <div class="sim-log-row ${h.isTarget ? 'target-log' : ''}">
                    <span>#${h.roll} (${h.fruits} 🍇)</span>
                    <strong>${h.text}</strong>
                    <span>${h.isTarget ? '🎉 ПОПАДАНИЕ (Гарант сброшен)' : `❌ Промах (Гарант: ${h.pity}/70)`}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `}
      </div>
    `;
  },

  setTalentMode(mode) {
    this.talentState.mode = mode;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateFailedGolds(val) {
    this.talentState.failedGoldCount = parseInt(val, 10) || 0;
    this.render('calculatorsContainer', App.state.lang);
  },

  simRoll(count = 1) {
    const isRu = App.state.lang === 'RU';
    const isCn = App.state.lang === 'CN';
    const s = this.talentState;

    const goldTalentsPool = [
      isRu ? 'Приток ярости' : isCn ? '狂怒涌动' : 'Rage Surge',
      isRu ? 'Стойкость титана' : isCn ? '泰坦坚韧' : 'Titan Fortitude',
      isRu ? 'Тень убийцы' : isCn ? '刺客暗影' : 'Assassin Shadow',
      isRu ? 'Свет исцеления' : isCn ? '圣光愈合' : 'Healing Light',
      isRu ? 'Ледяные оковы' : isCn ? '极寒枷锁' : 'Frost Chains',
      isRu ? 'Магический всплеск' : isCn ? '奥术爆发' : 'Arcane Burst'
    ];

    const targetName = isRu ? '⭐ 9 жизней (ЭКСКЛЮЗИВ)' : isCn ? '⭐ 九命 (专属专属)' : '⭐ Nine Lives (EXCLUSIVE)';

    for (let i = 0; i < count; i++) {
      s.simStats.rolls++;
      s.simStats.fruitsSpent += 10;

      // Randomize 4 slots
      const newSlots = [];
      const newRars = [];

      for (let slot = 0; slot < 4; slot++) {
        const rollRng = Math.random();
        if (rollRng < 0.08) { // 8% gold slot
          s.simStats.goldCount++;
          
          // Calculate current target chance
          let chance = 0.05;
          if (s.failedGoldCount >= 70) {
            chance = 1.0;
          } else if (s.failedGoldCount > 50) {
            chance = 0.05 + (s.failedGoldCount - 50) * 0.05;
          }

          if (Math.random() < chance) {
            // Target hit!
            newSlots.push(targetName);
            newRars.push('gold');
            s.simStats.targetHits++;
            s.simStats.history.push({
              roll: s.simStats.rolls,
              fruits: s.simStats.fruitsSpent,
              text: targetName,
              isTarget: true,
              pity: s.failedGoldCount
            });
            s.failedGoldCount = 0; // Reset pity!
          } else {
            // Missed gold
            const randomGold = goldTalentsPool[Math.floor(Math.random() * goldTalentsPool.length)];
            newSlots.push(randomGold);
            newRars.push('gold');
            s.failedGoldCount = Math.min(70, s.failedGoldCount + 1);
            s.simStats.history.push({
              roll: s.simStats.rolls,
              fruits: s.simStats.fruitsSpent,
              text: randomGold,
              isTarget: false,
              pity: s.failedGoldCount
            });
          }
        } else if (rollRng < 0.35) { // Purple
          newSlots.push(isRu ? 'Фиолетовый талант' : isCn ? '紫色通用天赋' : 'Purple Talent');
          newRars.push('purple');
        } else if (rollRng < 0.70) { // Blue
          newSlots.push(isRu ? 'Синий талант' : isCn ? '蓝色基础天赋' : 'Blue Talent');
          newRars.push('blue');
        } else { // Green
          newSlots.push(isRu ? 'Зеленый талант' : isCn ? '绿色初级天赋' : 'Green Talent');
          newRars.push('green');
        }
      }

      s.currentSlots = newSlots;
      s.slotRarities = newRars;
    }

    this.render('calculatorsContainer', App.state.lang);
  },

  simRollUntilGold() {
    let safetyLimit = 200;
    const initialGolds = this.talentState.simStats.goldCount;
    while (this.talentState.simStats.goldCount === initialGolds && safetyLimit > 0) {
      this.simRoll(1);
      safetyLimit--;
    }
  },

  resetSim() {
    this.talentState.currentSlots = ['—', '—', '—', '—'];
    this.talentState.slotRarities = ['none', 'none', 'none', 'none'];
    this.talentState.simStats = {
      rolls: 0,
      fruitsSpent: 0,
      goldCount: 0,
      targetHits: 0,
      history: []
    };
    this.talentState.failedGoldCount = 0;
    this.render('calculatorsContainer', App.state.lang);
  },

  // =========================================================================
  // 3. Battlefield Range, Distance & Targeting Sandbox
  // =========================================================================
  renderRangeCalc(lang) {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const s = this.rangeState;
    const attacker = s.slots[s.activeAttacker];
    const isAttackerAlly = attacker.team === 'ally';
    const enemies = s.slots.filter(sl => sl.team !== attacker.team && sl.alive);

    // Calculate dynamic distance to each living enemy
    const targetCalculations = enemies.map(enemy => {
      // Find cells between attacker and enemy
      const minIdx = Math.min(attacker.id, enemy.id);
      const maxIdx = Math.max(attacker.id, enemy.id);
      
      let distance = 0;
      // Count all active characters on and between positions
      for (let i = minIdx; i <= maxIdx; i++) {
        if (i !== attacker.id && s.slots[i].alive) {
          distance++;
        }
      }
      if (distance === 0) distance = 1; // base distance minimum

      // Avian race bonus gives effective +1 range
      const effectiveRange = attacker.avian ? (s.baseRange + 1) : s.baseRange;
      const reachable = effectiveRange >= distance;

      return {
        slot: enemy,
        distance,
        reachable,
        effectiveRange
      };
    });

    // Determine chosen target based on priority
    let chosenTarget = null;
    if (targetCalculations.length > 0) {
      // 1. Check if any enemy has TAUNT
      const tauntEnemy = targetCalculations.find(tc => tc.slot.taunt);
      if (tauntEnemy) {
        chosenTarget = { ...tauntEnemy, reason: isRu ? 'Сработала Провокация (Taunt)' : isCn ? '触发嘲讽 (Taunt)' : 'Taunt Triggered' };
      } else if (s.targetPriority === 'nearest') {
        const reachableList = targetCalculations.filter(tc => tc.reachable);
        chosenTarget = (reachableList.length > 0 ? reachableList : targetCalculations).reduce((min, cur) => cur.distance < min.distance ? cur : min, targetCalculations[0]);
        chosenTarget.reason = isRu ? 'Ближайшая живая цель (Nearest)' : isCn ? '最近存活目标 (Nearest)' : 'Nearest Target';
      } else if (s.targetPriority === 'furthest' || s.targetPriority === 'precision') {
        const reachableList = targetCalculations.filter(tc => tc.reachable);
        chosenTarget = (reachableList.length > 0 ? reachableList : targetCalculations).reduce((max, cur) => cur.distance > max.distance ? cur : max, targetCalculations[0]);
        chosenTarget.reason = s.targetPriority === 'precision' 
          ? (isRu ? 'Меткость: Задний ряд к переднему (Precision Back-to-Front)' : isCn ? '精准：由后排至前排 (Precision)' : 'Precision Back-to-Front') 
          : (isRu ? 'Самая дальняя цель (Furthest)' : isCn ? '最远距离目标 (Furthest)' : 'Furthest Target');
      } else if (s.targetPriority === 'lowestHp') {
        chosenTarget = targetCalculations.reduce((min, cur) => cur.slot.hp < min.slot.hp ? cur : min, targetCalculations[0]);
        chosenTarget.reason = isRu ? 'Наименьшее текущее здоровье (Lowest HP)' : isCn ? '最低生命值斩杀 (Lowest HP)' : 'Lowest HP Target';
      } else if (s.targetPriority === 'highestAtk') {
        chosenTarget = targetCalculations.reduce((max, cur) => cur.slot.atk > max.slot.atk ? cur : max, targetCalculations[0]);
        chosenTarget.reason = isRu ? 'Наивысшая атака врага (Highest ATK)' : isCn ? '最高攻击力威胁 (Highest ATK)' : 'Highest ATK Target';
      }
    }

    return `
      <div class="calc-box">
        <div class="calc-header">
          <div class="calc-badge">🎯 GAME MECHANIC: CELL DISTANCE & TARGETING</div>
          <h2 class="calc-title">${isRu ? 'Интерактивный Симулятор Поля Боя и Дистанции' : isCn ? '战场距离计算与索敌优先级模拟器' : 'Battlefield Distance & Targeting Sandbox'}</h2>
          <p class="calc-subtitle">
            ${isRu 
              ? 'Базовая дистанция = 1. Каждый персонаж между вами и целью (включая саму клетку цели) добавляет +1 к требуемому Range. <strong>При гибели героев дистанция динамически сокращается</strong>. Раса Avian дает +1 к эффективной дистанции.' 
              : isCn 
              ? '基础距离=1。双方之间每有一个角色（含目标所在格）距离+1。<strong>单位阵亡后格子腾空，攻击距离动态缩短</strong>。鸟族 (Avian) 提供+1有效索敌与反击距离。' 
              : 'Base distance is 1. Each character standing in path adds +1 Range. <strong>When units die, distance dynamically shrinks</strong>. Avian race grants +1 effective range.'}
          </p>
        </div>

        <!-- Battlefield Grid View -->
        <div class="calc-card" style="margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <h3 class="calc-section-title" style="margin: 0;">⚔️ ${isRu ? 'Поле боя (6 клеток: 3 Союзника VS 3 Врага)' : isCn ? '战场6格站位 (我方3格 VS 敌方3格)' : '6-Slot Battlefield (3v3)'}</h3>
            <span style="font-size: 12.5px; color: var(--text-secondary);">${isRu ? 'Нажмите на персонажа для выбора атакующего или переключения статуса' : isCn ? '点击角色可切换出手者或状态' : 'Click to select attacker or toggle states'}</span>
          </div>

          <div class="battlefield-interactive-row">
            <!-- Ally Side (0, 1, 2) -->
            <div class="battle-team ally-team">
              <div class="team-header-label">🛡️ ${isRu ? 'СОЮЗНИКИ (ALLIES)' : isCn ? '我方阵列' : 'ALLIES'}</div>
              <div class="slots-container">
                ${[0, 1, 2].map(idx => this.renderBattleCell(s.slots[idx], idx, s.activeAttacker === idx, chosenTarget?.slot?.id === idx, lang)).join('')}
              </div>
            </div>

            <div class="battle-vs-badge">VS</div>

            <!-- Enemy Side (3, 4, 5) -->
            <div class="battle-team enemy-team">
              <div class="team-header-label">⚔️ ${isRu ? 'ПРОТИВНИКИ (ENEMIES)' : isCn ? '敌方阵列' : 'ENEMIES'}</div>
              <div class="slots-container">
                ${[3, 4, 5].map(idx => this.renderBattleCell(s.slots[idx], idx, s.activeAttacker === idx, chosenTarget?.slot?.id === idx, lang)).join('')}
              </div>
            </div>
          </div>
        </div>

        <div class="calc-grid-2col">
          <!-- Controls -->
          <div class="calc-card">
            <h3 class="calc-section-title">🎮 ${isRu ? 'Параметры атакующего и Правило цели' : isCn ? '出手者属性与索敌规则' : 'Attacker & Targeting Rules'}</h3>

            <!-- Attacker Selector -->
            <div class="calc-field">
              <label>👤 ${isRu ? 'Текущий атакующий персонаж:' : isCn ? '当前出手角色:' : 'Active Attacker:'}</label>
              <div class="calc-pill-selector">
                ${s.slots.map(sl => `
                  <button class="calc-select-pill ${s.activeAttacker === sl.id ? 'active' : ''} ${!sl.alive ? 'pill-dead' : ''}" onclick="CalculatorsView.setActiveAttacker(${sl.id})">
                    ${sl.team === 'ally' ? '🛡️' : '⚔️'} ${sl.name} ${!sl.alive ? `(${isRu ? 'Мертв' : isCn ? '阵亡' : 'Dead'})` : ''}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Range Value Slider -->
            <div class="calc-field" style="margin-top: 16px;">
              <div class="calc-label-row">
                <label>🏹 ${isRu ? 'Дальность атаки персонажа (Range):' : isCn ? '角色技能攻击距离 (Range):' : 'Attack Range:'}</label>
                <span class="calc-val-badge">Range ${s.baseRange} ${attacker.avian ? `(+1 Avian = ${s.baseRange + 1})` : ''}</span>
              </div>
              <input type="range" min="1" max="5" step="1" value="${s.baseRange}" class="calc-slider" oninput="CalculatorsView.updateBaseRange(this.value)">
              <div class="calc-presets">
                <button class="calc-preset-btn ${s.baseRange === 1 ? 'active' : ''}" onclick="CalculatorsView.updateBaseRange(1)">Range 1 (${isRu ? 'Ближний' : isCn ? '近战' : 'Melee'})</button>
                <button class="calc-preset-btn ${s.baseRange === 2 ? 'active' : ''}" onclick="CalculatorsView.updateBaseRange(2)">Range 2</button>
                <button class="calc-preset-btn ${s.baseRange === 3 ? 'active' : ''}" onclick="CalculatorsView.updateBaseRange(3)">Range 3</button>
                <button class="calc-preset-btn ${s.baseRange === 4 ? 'active' : ''}" onclick="CalculatorsView.updateBaseRange(4)">Range 4 (${isRu ? 'Дальний' : isCn ? '远程' : 'Ranged'})</button>
                <button class="calc-preset-btn ${s.baseRange === 5 ? 'active' : ''}" onclick="CalculatorsView.updateBaseRange(5)">Range 5 (${isRu ? 'Снайпер' : isCn ? '全图' : 'Snipe'})</button>
              </div>
            </div>

            <!-- Targeting Priority Selector -->
            <div class="calc-field" style="margin-top: 16px;">
              <label>🎯 ${isRu ? 'Правило выбора цели (Targeting Rule):' : isCn ? '索敌优先级策略 (Priority):' : 'Targeting Priority Rule:'}</label>
              <div class="calc-pill-selector">
                <button class="calc-select-pill ${s.targetPriority === 'nearest' ? 'active' : ''}" onclick="CalculatorsView.setTargetPriority('nearest')">
                  📍 ${isRu ? 'Ближайший (Nearest)' : isCn ? '最近目标' : 'Nearest'}
                </button>
                <button class="calc-select-pill ${s.targetPriority === 'furthest' ? 'active' : ''}" onclick="CalculatorsView.setTargetPriority('furthest')">
                  🏹 ${isRu ? 'Дальний (Furthest)' : isCn ? '最远目标' : 'Furthest'}
                </button>
                <button class="calc-select-pill ${s.targetPriority === 'precision' ? 'active' : ''}" onclick="CalculatorsView.setTargetPriority('precision')">
                  🎯 ${isRu ? 'Меткость (Precision)' : isCn ? '精准(后排优先)' : 'Precision'}
                </button>
                <button class="calc-select-pill ${s.targetPriority === 'lowestHp' ? 'active' : ''}" onclick="CalculatorsView.setTargetPriority('lowestHp')">
                  🩸 ${isRu ? 'Меньше HP' : isCn ? '残血优先' : 'Lowest HP'}
                </button>
                <button class="calc-select-pill ${s.targetPriority === 'highestAtk' ? 'active' : ''}" onclick="CalculatorsView.setTargetPriority('highestAtk')">
                  ⚔️ ${isRu ? 'Больше Атака' : isCn ? '高攻优先' : 'Highest ATK'}
                </button>
              </div>
            </div>
          </div>

          <!-- Targeting Resolution Card -->
          <div class="calc-card result-card">
            <h3 class="calc-section-title">🎯 ${isRu ? 'Результат выбора цели' : isCn ? '索敌判定结果' : 'Target Resolution'}</h3>

            ${chosenTarget ? `
              <div class="metric-display-banner status-ideal">
                <div class="metric-big-number" style="font-size: 24px;">🎯 ${chosenTarget.slot.name}</div>
                <div class="metric-big-label">
                  ${isRu ? 'Выбранная цель атаки' : isCn ? '最终锁定攻击目标' : 'Selected Target'}
                </div>
                <div class="metric-sub-info">
                  ${isRu ? `Требуемая дистанция: <strong>Range ${chosenTarget.distance}</strong> (${chosenTarget.reachable ? '✅ В зоне досягаемости' : '⚠️ Вне зоны базовой атаки'})` : isCn ? `所需距离: <strong>Range ${chosenTarget.distance}</strong> (${chosenTarget.reachable ? '✅ 可命中' : '⚠️ 距离不足'})` : `Required Distance: <strong>Range ${chosenTarget.distance}</strong>`}
                </div>
              </div>

              <div class="calc-recommendation-box status-ideal" style="margin-top: 14px;">
                <div class="rec-title">💡 ${isRu ? 'Обоснование выбора таргетинга:' : isCn ? '索敌判定机制说明:' : 'Targeting Logic:'}</div>
                <div class="rec-desc">${chosenTarget.reason}</div>
              </div>
            ` : `
              <div style="color: var(--text-muted); font-style: italic; padding: 20px 0; text-align: center;">
                ${isRu ? 'Все враги мертвы или цель недосягаема.' : isCn ? '暂无可用敌方存活目标。' : 'No valid living targets.'}
              </div>
            `}

            <!-- Target Distance Table -->
            <div class="calc-breakdown-list" style="margin-top: 16px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">
                📏 ${isRu ? 'Расчет расстояния до всех живых врагов:' : isCn ? '至各敌方单位距离测算:' : 'Distance to all living enemies:'}
              </div>
              ${targetCalculations.map(tc => `
                <div class="breakdown-row">
                  <span>${tc.slot.name} ${tc.slot.taunt ? '💥[TAUNT]' : ''}</span>
                  <strong style="color: ${tc.reachable ? '#34d399' : '#f43f5e'};">
                    Range ${tc.distance} ${tc.reachable ? `(✅ ${isRu ? 'Достает' : isCn ? '可触及' : 'In Range'})` : `(❌ ${isRu ? 'Не достает' : isCn ? '超出' : 'Out'})`}
                  </strong>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderBattleCell(slot, idx, isAttacker, isTarget, lang) {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    return `
      <div class="battle-slot-cell ${!slot.alive ? 'cell-dead' : ''} ${isAttacker ? 'cell-attacker' : ''} ${isTarget ? 'cell-target' : ''}">
        <div class="cell-idx-badge">#${idx} ${idx === 0 || idx === 5 ? (isRu ? 'Тыл' : isCn ? '后' : 'Back') : (idx === 1 || idx === 4 ? (isRu ? 'Центр' : isCn ? '中' : 'Mid') : (isRu ? 'Авангард' : isCn ? '前' : 'Front'))}</div>
        <div class="cell-unit-name">${slot.name}</div>
        <div class="cell-stats-line">❤️ ${slot.hp} HP | ⚔️ ${slot.atk}</div>

        <!-- Toggle States -->
        <div class="cell-controls">
          <button class="cell-toggle-btn ${slot.alive ? 'btn-on' : 'btn-off'}" onclick="CalculatorsView.toggleSlotAlive(${idx})" title="${isRu ? 'Переключить Жив / Мертв' : isCn ? '切换存活/阵亡' : 'Toggle Alive'}">
            ${slot.alive ? '❤️ Жив' : '💀 Мертв'}
          </button>
          <button class="cell-toggle-btn ${slot.taunt ? 'btn-on-warn' : ''}" onclick="CalculatorsView.toggleSlotTaunt(${idx})" title="${isRu ? 'Провокация (Taunt)' : isCn ? '嘲讽状态' : 'Taunt'}">
            💥 Taunt
          </button>
          <button class="cell-toggle-btn ${slot.avian ? 'btn-on-info' : ''}" onclick="CalculatorsView.toggleSlotAvian(${idx})" title="${isRu ? 'Раса Птицы (+1 Range)' : isCn ? '鸟族(+1距离)' : 'Avian (+1)'}">
            🦅 Avian
          </button>
        </div>
      </div>
    `;
  },

  setActiveAttacker(idx) {
    this.rangeState.activeAttacker = idx;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateBaseRange(val) {
    this.rangeState.baseRange = parseInt(val, 10) || 1;
    this.render('calculatorsContainer', App.state.lang);
  },

  setTargetPriority(priority) {
    this.rangeState.targetPriority = priority;
    this.render('calculatorsContainer', App.state.lang);
  },

  toggleSlotAlive(idx) {
    this.rangeState.slots[idx].alive = !this.rangeState.slots[idx].alive;
    this.render('calculatorsContainer', App.state.lang);
  },

  toggleSlotTaunt(idx) {
    this.rangeState.slots[idx].taunt = !this.rangeState.slots[idx].taunt;
    this.render('calculatorsContainer', App.state.lang);
  },

  toggleSlotAvian(idx) {
    this.rangeState.slots[idx].avian = !this.rangeState.slots[idx].avian;
    this.render('calculatorsContainer', App.state.lang);
  },

  // =========================================================================
  // 4. Stat Conversion, Damage & Toughness Break Simulator
  // =========================================================================
  renderDamageCalc(lang) {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const s = this.damageState;

    // Stat conversions
    const rawAtkFromStat = Math.floor(s.attackerStat / 5);
    const convertedDef = Math.floor(s.defenderStat / 5);
    const convertedWeak = Math.floor(s.weaknessStat / 5);
    const convertedHeal = Math.floor(s.attackerStat / 10);

    // Total Atk
    let totalAtk = Math.floor(rawAtkFromStat * (1 + s.bonusAtkPct / 100)) + s.flatAtk;
    if (s.doubleDmg) {
      totalAtk *= 2; // Double Damage doubles RAW Atk before Def
    }

    // Normal State calculation
    const effectiveDef = s.isBroken ? convertedWeak : convertedDef;
    let normalHitDmg = 0;
    let isNegated = false;

    if (totalAtk <= effectiveDef) {
      normalHitDmg = 0;
      isNegated = true;
    } else {
      normalHitDmg = (totalAtk - effectiveDef) + s.vulnerable;
    }

    const totalComboDmg = normalHitDmg * s.multiHitCount;

    // HP Loss Calculation
    let actualHpLoss = Math.floor(s.hpLossVal * (1 - s.hpLossRedPct / 100));
    if (s.isMetallic) {
      // Metallic cannot die from HP Loss
    }

    return `
      <div class="calc-box">
        <div class="calc-header">
          <div class="calc-badge">🧮 GAME MECHANIC: STAT FORMULAS & TOUGHNESS BREAK</div>
          <h2 class="calc-title">${isRu ? 'Калькулятор Конвертации Характеристик и Урона' : isCn ? '属性转化、伤害公式与破韧爆发计算器' : 'Stat Conversion & Toughness Break Damage Simulator'}</h2>
          <p class="calc-subtitle">
            ${isRu 
              ? '<strong>5 стата (Str/Agi/Spi) = 1 Atk / 1 Def / 1 Weakness</strong>, 10 стата = 1 HP лечения. Если Def цели >= Atk атакующего ➔ урон сводится к 0 (Negate). При пробитии стойкости (Weakness Broken) показатель Def цели отключается и заменяется на Weakness!' 
              : isCn 
              ? '<strong>5点主属性 (力量/敏捷/精神) = 1点攻击 / 1点防御 / 1点弱点</strong>，10点主属性 = 1点治疗。若敌方防御 >= 攻击 ➔ 伤害直接判定为0 (Negate)。击破韧性后目标防御完全失效，替换为极低的弱点值！' 
              : '<strong>5 Main Stat = 1 Atk / 1 Def / 1 Weakness</strong>, 10 Main Stat = 1 Heal. If Def >= Atk -> Damage = 0 (Negate). When Toughness is broken, Def is disabled and substituted by Weakness!'}
          </p>
        </div>

        <div class="calc-grid-2col">
          <!-- Attacker Inputs -->
          <div class="calc-card">
            <h3 class="calc-section-title">⚔️ ${isRu ? 'Атакующий (Attacker Stats)' : isCn ? '攻击方属性 (Attacker)' : 'Attacker Stats'}</h3>

            <div class="calc-field">
              <div class="calc-label-row">
                <label>💪 ${isRu ? 'Базовый стат (Str / Agi / Spi):' : isCn ? '核心主属性 (力量/敏捷/精神):' : 'Main Stat (Str/Agi/Spi):'}</label>
                <span class="calc-val-badge">${s.attackerStat} (➔ ${rawAtkFromStat} ATK, ${convertedHeal} Heal)</span>
              </div>
              <input type="range" min="0" max="1000" step="5" value="${s.attackerStat}" class="calc-slider" oninput="CalculatorsView.updateAttackerStat(this.value)">
            </div>

            <div class="calc-field" style="margin-top: 14px;">
              <div class="calc-label-row">
                <label>📈 ${isRu ? 'Бонус к Атаке (+ATK %):' : isCn ? '百分比攻击力加成 (+ATK %):' : 'Bonus ATK %:'}</label>
                <span class="calc-val-badge">+${s.bonusAtkPct}%</span>
              </div>
              <input type="range" min="0" max="300" step="5" value="${s.bonusAtkPct}" class="calc-slider" oninput="CalculatorsView.updateBonusAtkPct(this.value)">
            </div>

            <div class="calc-field" style="margin-top: 14px;">
              <div class="calc-label-row">
                <label>🗡️ ${isRu ? 'Плоский бонус атаки (+Flat ATK):' : isCn ? '固定攻击力提升 (+Flat ATK):' : 'Flat ATK Bonus:'}</label>
                <span class="calc-val-badge">+${s.flatAtk}</span>
              </div>
              <input type="range" min="0" max="100" step="1" value="${s.flatAtk}" class="calc-slider" oninput="CalculatorsView.updateFlatAtk(this.value)">
            </div>

            <div class="calc-field" style="margin-top: 14px;">
              <div class="calc-label-row">
                <label>⚡ ${isRu ? 'Количество ударов в серии (Multi-Hit):' : isCn ? '单次技能连击段数 (Multi-Hit):' : 'Multi-Hit Count:'}</label>
                <span class="calc-val-badge">${s.multiHitCount}x ${isRu ? 'ударов' : isCn ? '段' : 'hits'}</span>
              </div>
              <input type="range" min="1" max="20" step="1" value="${s.multiHitCount}" class="calc-slider" oninput="CalculatorsView.updateMultiHit(this.value)">
            </div>

            <div class="calc-field" style="margin-top: 14px;">
              <div class="calc-label-row">
                <label>🟣 ${isRu ? 'Бонус Уязвимости (Vulnerable):' : isCn ? '易伤加成 (Vulnerable):' : 'Vulnerable Flat Bonus:'}</label>
                <span class="calc-val-badge">+${s.vulnerable}</span>
              </div>
              <input type="range" min="0" max="50" step="1" value="${s.vulnerable}" class="calc-slider" oninput="CalculatorsView.updateVulnerable(this.value)">
            </div>

            <div style="margin-top: 14px;">
              <label class="calc-checkbox-row">
                <input type="checkbox" ${s.doubleDmg ? 'checked' : ''} onchange="CalculatorsView.toggleDoubleDmg(this.checked)">
                <span>🔥 <strong>Double Damage (Двойной урон)</strong>: ${isRu ? 'удваивает базовую атаку до сравнения с броней' : isCn ? '在与防御结算前翻倍基础攻击力' : 'Doubles base ATK before Def'}</span>
              </label>
            </div>
          </div>

          <!-- Defender Inputs -->
          <div class="calc-card">
            <h3 class="calc-section-title">🛡️ ${isRu ? 'Защищающийся (Defender Stats)' : isCn ? '防守方属性 (Defender)' : 'Defender Stats'}</h3>

            <div class="calc-field">
              <div class="calc-label-row">
                <label>🛡️ ${isRu ? 'Стат защиты цели (Def Stat):' : isCn ? '目标防御属性 (Def Stat):' : 'Defender Stat (Def):'}</label>
                <span class="calc-val-badge">${s.defenderStat} (➔ ${convertedDef} DEF)</span>
              </div>
              <input type="range" min="0" max="1000" step="5" value="${s.defenderStat}" class="calc-slider" oninput="CalculatorsView.updateDefenderStat(this.value)">
            </div>

            <div class="calc-field" style="margin-top: 14px;">
              <div class="calc-label-row">
                <label>🟤 ${isRu ? 'Стат слабости цели (Weakness Stat):' : isCn ? '目标弱点属性 (Weakness):' : 'Weakness Stat:'}</label>
                <span class="calc-val-badge">${s.weaknessStat} (➔ ${convertedWeak} WEAK)</span>
              </div>
              <input type="range" min="0" max="500" step="5" value="${s.weaknessStat}" class="calc-slider" oninput="CalculatorsView.updateWeaknessStat(this.value)">
            </div>

            <!-- Weakness Broken Toggle -->
            <div style="margin-top: 16px; padding: 12px; background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-subtle);">
              <label class="calc-checkbox-row">
                <input type="checkbox" ${s.isBroken ? 'checked' : ''} onchange="CalculatorsView.toggleBroken(this.checked)">
                <span style="color: ${s.isBroken ? '#f43f5e' : '#f1f5f9'}; font-weight: 700;">
                  💥 ${isRu ? 'Стойкость пробита (Weakness Broken) — DEF отключен!' : isCn ? '韧性已被击破 (Weakness Broken) — 防御归零替换为弱点！' : 'Weakness Broken — DEF Disabled & Replaced by Weakness!'}
                </span>
              </label>
            </div>

            <!-- HP Loss Section -->
            <div style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
              <h4 style="margin: 0 0 10px 0; color: #a78bfa; font-size: 14px;">🩸 ${isRu ? 'Потеря здоровья (HP Loss / Кровотечение / Ожог):' : isCn ? '生命流失与百分比减伤 (HP Loss):' : 'HP Loss Calculation:'}</h4>

              <div class="calc-field">
                <div class="calc-label-row">
                  <label>${isRu ? 'Урон потери HP:' : isCn ? '流失真伤初始值:' : 'Raw HP Loss:'}</label>
                  <span class="calc-val-badge">${s.hpLossVal} HP</span>
                </div>
                <input type="range" min="0" max="2000" step="50" value="${s.hpLossVal}" class="calc-slider" oninput="CalculatorsView.updateHpLossVal(this.value)">
              </div>

              <div class="calc-field" style="margin-top: 10px;">
                <div class="calc-label-row">
                  <label>${isRu ? 'Снижение урона потери HP (%):' : isCn ? '生命流失减免百分比 (%):' : 'HP Loss Reduction %:'}</label>
                  <span class="calc-val-badge">-${s.hpLossRedPct}%</span>
                </div>
                <input type="range" min="0" max="90" step="5" value="${s.hpLossRedPct}" class="calc-slider" oninput="CalculatorsView.updateHpLossRed(this.value)">
              </div>

              <div style="margin-top: 10px;">
                <label class="calc-checkbox-row">
                  <input type="checkbox" ${s.isMetallic ? 'checked' : ''} onchange="CalculatorsView.toggleMetallic(this.checked)">
                  <span>🪙 ${isRu ? 'Раса Металл (Metallic) — иммунитет к смертельному HP Loss' : isCn ? '金属种族 (Metallic) — 免疫生命流失致死' : 'Metallic Race (Immune to lethal HP Loss)'}</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Big Combat Comparison Result Card -->
        <div class="calc-card result-card" style="margin-top: 20px;">
          <h3 class="calc-section-title">📊 ${isRu ? 'Итоговые результаты урона' : isCn ? '最终伤害结算输出' : 'Damage Calculation Breakdown'}</h3>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
            <div class="metric-display-banner ${isNegated ? 'status-danger' : 'status-ideal'}">
              <div class="metric-big-number">${normalHitDmg}</div>
              <div class="metric-big-label">${isRu ? 'Урон за 1 удар (Per Hit)' : isCn ? '单段攻击伤害' : 'Damage Per Hit'}</div>
              <div class="metric-sub-info">
                ${isNegated ? (isRu ? '⚠️ АТАКА ОТБИТА (DEF >= ATK)' : isCn ? '⚠️ 攻击被完全格挡 (DEF>=ATK)' : '⚠️ NEGATED (DEF >= ATK)') : (isRu ? `Чистый: ${totalAtk - effectiveDef} + Вульн: ${s.vulnerable}` : isCn ? `直伤: ${totalAtk - effectiveDef} + 易伤: ${s.vulnerable}` : `Direct: ${totalAtk - effectiveDef} + Vuln: ${s.vulnerable}`)}
              </div>
            </div>

            <div class="metric-display-banner status-max">
              <div class="metric-big-number">${totalComboDmg}</div>
              <div class="metric-big-label">${isRu ? `Суммарный урон серии (${s.multiHitCount}x)` : isCn ? `全段连击总伤害 (${s.multiHitCount}段)` : `Total Combo Damage (${s.multiHitCount}x)`}</div>
              <div class="metric-sub-info">
                ${s.isBroken ? (isRu ? '💥 Пробитие стойкости активно!' : isCn ? '💥 破韧状态爆发已触发！' : '💥 Toughness Broken!') : (isRu ? 'Обычное состояние цели' : isCn ? '常规防御状态' : 'Standard Target State')}
              </div>
            </div>

            <div class="metric-display-banner status-gold">
              <div class="metric-big-number">${actualHpLoss}</div>
              <div class="metric-big-label">${isRu ? 'Урон от потери HP (Тик)' : isCn ? '生命流失每跳真伤' : 'True HP Loss Tick'}</div>
              <div class="metric-sub-info">
                ${s.isMetallic ? (isRu ? '🪙 Металл не умирает от яда' : isCn ? '🪙 金属锁血无法致死' : '🪙 Metallic non-lethal') : (isRu ? 'Пробивает щиты и защиту' : isCn ? '无视护盾与防御' : 'Pierces shields & def')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  updateAttackerStat(val) {
    this.damageState.attackerStat = parseInt(val, 10) || 0;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateBonusAtkPct(val) {
    this.damageState.bonusAtkPct = parseInt(val, 10) || 0;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateFlatAtk(val) {
    this.damageState.flatAtk = parseInt(val, 10) || 0;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateMultiHit(val) {
    this.damageState.multiHitCount = parseInt(val, 10) || 1;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateVulnerable(val) {
    this.damageState.vulnerable = parseInt(val, 10) || 0;
    this.render('calculatorsContainer', App.state.lang);
  },

  toggleDoubleDmg(checked) {
    this.damageState.doubleDmg = checked;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateDefenderStat(val) {
    this.damageState.defenderStat = parseInt(val, 10) || 0;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateWeaknessStat(val) {
    this.damageState.weaknessStat = parseInt(val, 10) || 0;
    this.render('calculatorsContainer', App.state.lang);
  },

  toggleBroken(checked) {
    this.damageState.isBroken = checked;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateHpLossVal(val) {
    this.damageState.hpLossVal = parseInt(val, 10) || 0;
    this.render('calculatorsContainer', App.state.lang);
  },

  updateHpLossRed(val) {
    this.damageState.hpLossRedPct = parseInt(val, 10) || 0;
    this.render('calculatorsContainer', App.state.lang);
  },

  toggleMetallic(checked) {
    this.damageState.isMetallic = checked;
    this.render('calculatorsContainer', App.state.lang);
  },

  // =========================================================================
  // 5. Talent Duplication & Transfer Wizard
  // =========================================================================
  renderTransferWizard(lang) {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const s = this.transferState;

    const steps = [
      {
        num: 1,
        title: isRu ? 'Шаг 1: Открытие 4 золотых слотов' : isCn ? '第一步：洗出四金槽位' : 'Step 1: Unlock 4 Gold Slots',
        desc: isRu 
          ? 'Крутите 1-ю страницу целевой героини плодами до тех пор, пока не откроются <strong>4 любых золотых таланта</strong> (неважно, какие они). Они послужат посадочными местами.' 
          : isCn 
          ? '使用果实持续洗练目标角色第1页，直到洗出<strong>任意4个金色槽位</strong>（无需在意词条好坏，作为接收底座）。' 
          : 'Reroll Page 1 until you have 4 random gold slots (acts as landing slots).'
      },
      {
        num: 2,
        title: isRu ? 'Шаг 2: Выбивание эксклюзива на Странице 2' : isCn ? '第二步：第2页洗出自身专属' : 'Step 2: Roll Exclusive on Page 2',
        desc: isRu 
          ? 'Откройте <strong>2-ю страницу талантов (Page 2)</strong> у этой же героини и выбейте её эксклюзивный талант.' 
          : isCn 
          ? '开启该角色的<strong>第2页天赋 (Page 2)</strong>，在此页洗出她的自身专属顶级天赋。' 
          : 'Open Page 2 on this heroine and roll her signature exclusive talent.'
      },
      {
        num: 3,
        title: isRu ? 'Шаг 3: Перенос на Донора-Посредника (200 💎)' : isCn ? '第三步：转移至中介狗粮 (200💎)' : 'Step 3: Transfer to Donor Unit (200 💎)',
        desc: isRu 
          ? 'Используйте функцию <strong>«Перенос талантов» (200 кристаллов)</strong> и перенесите эксклюзив со 2-й страницы на временного персонажа-донора.' 
          : isCn 
          ? '消耗200钻石使用【天赋转移】功能，将第2页的专属天赋转移给任意空闲的狗粮中介角色。' 
          : 'Use Talent Transfer (200 gems) to move the exclusive from Page 2 to a temporary donor heroine.'
      },
      {
        num: 4,
        title: isRu ? 'Шаг 4: Перенос с Донора на Страницу 1 (200 💎)' : isCn ? '第四步：中介转回第1页 (200💎)' : 'Step 4: Transfer from Donor to Page 1 (200 💎)',
        desc: isRu 
          ? 'Перенесите эксклюзив с донора обратно на <strong>1-ю страницу (Page 1)</strong> целевой героини! Ограничение на дубликаты обойдено: теперь на Page 1 работают <strong>две одинаковые копии эксклюзива</strong>!' 
          : isCn 
          ? '再次消耗200钻石，将中介身上的专属天赋转移覆盖到目标角色的<strong>第1页 (Page 1)</strong>！成功实现多重同名专属暴力叠加！' 
          : 'Transfer the exclusive from the donor back into Page 1 of the target heroine! Page 1 now has 2x copies of her signature exclusive!'
      }
    ];

    return `
      <div class="calc-box">
        <div class="calc-header">
          <div class="calc-badge">🔄 GAME MECHANIC: TALENT DUPLICATION & TRANSFER</div>
          <h2 class="calc-title">${isRu ? 'Интерактивный Мастер Дублирования и Переноса Талантов' : isCn ? '专属天赋多重叠加与转移实战教学' : 'Talent Duplication & Transfer Wizard'}</h2>
          <p class="calc-subtitle">
            ${isRu 
              ? '«При обычном реролле на одной странице не могут выпасть два таланта с одинаковым названием. <strong>На Перенос талантов это ограничение не распространяется</strong>». Следуйте пошаговой схеме для создания 2x–4x копий эксклюзива на одной странице.' 
              : isCn 
              ? '常规洗练无法在同页洗出同名天赋，但<strong>【天赋转移】完全不受该限制</strong>！通过 Page 2 ➔ 中介狗粮 ➔ Page 1 闭环转移，可实现2至4个同名专属天赋叠加。' 
              : 'Regular rerolls forbid identical talent names on the same page, but <strong>Talent Transfer bypasses this rule completely</strong>! Follow this step-by-step workflow.'}
          </p>
        </div>

        <!-- Wizard Stepper Navigation -->
        <div class="wizard-stepper-bar">
          ${steps.map(st => `
            <div class="wizard-step-pill ${s.step === st.num ? 'active' : (s.step > st.num ? 'completed' : '')}" onclick="CalculatorsView.setTransferStep(${st.num})">
              <span class="step-badge">${s.step > st.num ? '✓' : st.num}</span>
              <span class="step-text">${st.title.split(':')[0]}</span>
            </div>
          `).join('')}
        </div>

        <!-- Active Step Details Card -->
        <div class="calc-card" style="margin-top: 16px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <h3 style="margin: 0; color: #f3e8ff; font-size: 18px;">${steps[s.step - 1].title}</h3>
            <span class="badge-accent">${isRu ? `Шаг ${s.step} из 4` : isCn ? `第 ${s.step}/4 步` : `Step ${s.step} of 4`}</span>
          </div>

          <p style="font-size: 14.5px; color: var(--text-primary); line-height: 1.6; margin-bottom: 20px;">
            ${steps[s.step - 1].desc}
          </p>

          <!-- Visual Schematic for Current Step -->
          <div class="wizard-visual-schematic">
            <div class="schematic-node ${s.step === 1 ? 'node-highlight' : ''}">
              <div class="node-title">📄 Page 1</div>
              <div class="node-state">${s.step === 1 ? (isRu ? '⚡ Крутим 4 золота' : isCn ? '⚡ 洗出4金底座' : 'Rolling 4 Golds') : (s.step === 4 ? '🎉 2x ЭКСКЛЮЗИВА' : '4 Золотых слота')}</div>
            </div>

            <div class="schematic-arrow">${s.step >= 2 ? '➔' : '...'}</div>

            <div class="schematic-node ${s.step === 2 ? 'node-highlight' : ''}">
              <div class="node-title">📑 Page 2</div>
              <div class="node-state">${s.step >= 2 ? '⭐ Эксклюзив' : 'Закрыта'}</div>
            </div>

            <div class="schematic-arrow">${s.step >= 3 ? '➔ (200 💎)' : '...'}</div>

            <div class="schematic-node ${s.step === 3 ? 'node-highlight' : ''}">
              <div class="node-title">👤 Донор-Посредник</div>
              <div class="node-state">${s.step >= 3 ? '📥 Хранит эксклюзив' : 'В резерве'}</div>
            </div>

            <div class="schematic-arrow">${s.step === 4 ? '➔ (200 💎)' : '...'}</div>

            <div class="schematic-node ${s.step === 4 ? 'node-highlight' : ''}">
              <div class="node-title">🏆 Итог (Page 1)</div>
              <div class="node-state">${s.step === 4 ? '🔥 2x–4x ДУБЛИКАТ' : 'Ожидание'}</div>
            </div>
          </div>

          <!-- Wizard Stepper Controls -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; border-top: 1px solid var(--border-subtle); padding-top: 16px;">
            <button class="calc-preset-btn" ${s.step === 1 ? 'disabled style="opacity: 0.5;"' : ''} onclick="CalculatorsView.setTransferStep(Math.max(1, s.step - 1))">
              ⬅️ ${isRu ? 'Предыдущий шаг' : isCn ? '上一步' : 'Previous Step'}
            </button>

            <div style="font-size: 13px; color: #fbbf24;">
              💎 ${isRu ? 'Суммарный расход кристаллов: ' : isCn ? '累计钻石消耗: ' : 'Total Gems Cost: '} <strong>${s.step >= 4 ? '400' : (s.step >= 3 ? '200' : '0')} 💎</strong>
            </div>

            <button class="calc-action-btn" onclick="CalculatorsView.setTransferStep(s.step >= 4 ? 1 : s.step + 1)">
              ${s.step >= 4 ? (isRu ? '🔄 Начать сначала' : isCn ? '重新开始' : 'Start Over') : (isRu ? 'Следующий шаг ➔' : isCn ? '下一步 ➔' : 'Next Step ➔')}
            </button>
          </div>
        </div>
      </div>
    `;
  },

  setTransferStep(step) {
    this.transferState.step = step;
    this.render('calculatorsContainer', App.state.lang);
  }
};
