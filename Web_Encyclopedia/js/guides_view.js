/**
 * Guides & Technical Knowledge Base Component for Guild of Monster Girls Web Encyclopedia
 * Contains in-depth mechanics, formulas, turn phases, targeting, gacha drop lists, and sync guides.
 * Full multilingual support for RU, EN, and CN.
 */

const GuidesView = {
  activeSection: 'phases',
  gachaFilter: 'all',
  eventsFilter: 'all',

  setSection(sectionId) {
    this.activeSection = sectionId;
    const container = document.getElementById('guidesContainer');
    if (container) {
      this.render(container.id, App.state.lang);
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

  render(containerId, currentLang = "RU") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const lang = currentLang.toUpperCase();
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const menuItems = [
      { id: 'phases', icon: '⚔️', title: isRu ? 'Фазы боя и порядок ходов' : isCn ? '战斗阶段与行动顺序' : 'Battle Phases & Turn Order' },
      { id: 'targeting', icon: '🎯', title: isRu ? 'Дистанция и Таргетинг' : isCn ? '攻击距离与目标选择' : 'Range, Distance & Targeting' },
      { id: 'damage', icon: '🛡️', title: isRu ? 'Урон, Защита и Баффы' : isCn ? '伤害计算、护盾与增益' : 'Damage Formulas, Shields & Buffs' },
      { id: 'elements', icon: '✨', title: isRu ? 'Стихии, Роли и Отряд' : isCn ? '元素克制、定位与配队' : 'Elements, Roles & Lineup' },
      { id: 'gacha', icon: '🎪', title: isRu ? 'Списки найма и Баннеры' : isCn ? '招募卡池与掉落列表' : 'Recruit Pools & Gacha Lists' },
      { id: 'events', icon: '🎁', title: isRu ? 'Список игровых событий' : isCn ? '活动与限时事件列表' : 'Game Events & Activities' },
      { id: 'sync', icon: '📲', title: isRu ? 'Гайд по синхронизации' : isCn ? '账号同步与数据导出' : 'Account Sync & Export Guide' },
      { id: 'translation', icon: '⚠️', title: isRu ? 'Ошибки перевода игры' : isCn ? '游戏翻译勘误与说明' : 'Translation & Skill Fixes' }
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
      case 'phases':
        return isRu ? this.getPhasesRU() : isCn ? this.getPhasesCN() : this.getPhasesEN();
      case 'targeting':
        return isRu ? this.getTargetingRU() : isCn ? this.getTargetingCN() : this.getTargetingEN();
      case 'damage':
        return isRu ? this.getDamageRU() : isCn ? this.getDamageCN() : this.getDamageEN();
      case 'elements':
        return isRu ? this.getElementsRU() : isCn ? this.getElementsCN() : this.getElementsEN();
      case 'gacha':
        return this.getGachaContent(lang);
      case 'events':
        return this.getEventsContent(lang);
      case 'sync':
        return isRu ? this.getSyncRU() : isCn ? this.getSyncCN() : this.getSyncEN();
      case 'translation':
        return isRu ? this.getTranslationRU() : isCn ? this.getTranslationCN() : this.getTranslationEN();
      default:
        return isRu ? this.getPhasesRU() : this.getPhasesEN();
    }
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

    // 1. Alter Pool IDs (18 exact characters)
    const alterIds = [
      'M53301_001', 'M13303_001', 'M13304_001', 'M23301_001', 'M11304_001', 'M12301_001', 'M51302_001', 'M31301_001',
      'M51201_001', 'M14201_001', 'M12202_001', 'M11205_001',
      'M11103_001', 'M12101_001', 'M13104_001', 'M11109_001',
      'M11005_001', 'M12003_001'
    ];
    const alterChars = alterIds.map(id => charMap[id]).filter(Boolean);

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
            🌌 ${isRu ? 'Пул Альтер-Найма (18)' : isCn ? '异化招募池 (18)' : 'Alter Pool (18)'}
          </button>
          <button class="filter-pill ${f === 'standard' ? 'active' : ''}" onclick="GuidesView.setGachaFilter('standard')">
            📜 ${isRu ? 'Пул Стандартного Найма (140)' : isCn ? '常规招募池 (140)' : 'Standard Pool (140)'}
          </button>
          <button class="filter-pill ${f === 'limited' ? 'active' : ''}" onclick="GuidesView.setGachaFilter('limited')">
            🔥 ${isRu ? 'Лимитированные Rate-Up (2)' : isCn ? '限时UP卡池 (2)' : 'Limited Rate-Up (2)'}
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
              <h3>🌌 ${isRu ? 'Пул Альтер-Найма (Alter Recruit Pool — 18 героинь)' : isCn ? '异化招募常驻卡池 (18位角色)' : 'Alter Recruitment Pool (18 Heroines)'}</h3>
              <span class="badge-accent">${isRu ? 'Постоянный пул обликов' : isCn ? '常驻异化卡池' : 'Permanent Alter Pool'}</span>
            </div>
            <p style="font-size: 13.5px; color: var(--text-secondary);">
              ${isRu 
                ? 'Специальный пул альтернативных форм героинь с измененными стихиями, уникальными пассивками и новыми обликами.' 
                : isCn 
                ? '专属异化形态与皮肤常驻卡池，包含全新属性形态与独立技能组。' 
                : 'Special summon pool containing alternative element versions, exclusive skins, and modified talent kits.'}
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

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px;">
          ${filteredEvents.map(ev => {
            const rewardChar = ev.rewardRole ? charMap[ev.rewardRole] : null;
            const rewardImg = rewardChar ? (imgMap[rewardChar.id] || imgMap[rewardChar.key] || `assets/img/characters/${rewardChar.id}_1__single_part1_1@1.png`) : null;

            return `
              <div class="guide-card" style="display: flex; flex-direction: column; justify-content: space-between; border-left: 3px solid #8b5cf6; padding: 16px 20px;">
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

  // 7. Sync & Account Extraction
  getSyncRU() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">📲 Гайд по синхронизации коллекции и выгрузке аккаунта</h2>

        <div class="guide-card">
          <h3>🌐 Способ 1: Загрузка файла сохранения (100% работает на GitHub Pages)</h3>
          <ol class="guide-list">
            <li>Откройте вкладку <strong>«Моя Коллекция»</strong> на сайте.</li>
            <li>Перейдите в раздел <strong>«📁 Загрузка сохранения (JSON)»</strong>.</li>
            <li>Перетащите файл <code>monster_girls_roster.json</code> или вставьте текст JSON в поле.</li>
            <li>Вся ваша коллекция мгновенно отобразится на сайте и сохранится в браузере!</li>
          </ol>
        </div>

        <div class="guide-card">
          <h3>⚡ Способ 2: Авто-синхронизация через WebADB (При локальном запуске)</h3>
          <ol class="guide-list">
            <li>Запустите файл <code>run_web_encyclopedia.bat</code> на вашем ПК.</li>
            <li>Откройте эмулятор (MuMu Player / LDPlayer / Nox) с запущенной игрой.</li>
            <li>В браузере на <code>http://localhost:8787</code> перейдите во вкладку <strong>«Коллекция»</strong> и нажмите <strong>«⚡ Синхронизировать»</strong>.</li>
            <li>Сервер автоматически считает токен и состав вашей гильдии в 1 клик!</li>
          </ol>
        </div>

        <div class="guide-card">
          <h3>📱 Способ 3: Мобильный скрипт Shizuku (Android)</h3>
          <p>Для пользователей телефонов без рут-прав: скачайте <code>shizuku_sync.sh</code> и выполните его через приложение Shizuku / Rish в Termux для мгновенного считывания токена в буфер обмена.</p>
        </div>
      </div>
    `;
  },

  getSyncEN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">📲 Account Synchronization & Extraction Guide</h2>

        <div class="guide-card">
          <h3>🌐 Method 1: Import Save File (100% Works on GitHub Pages)</h3>
          <ol class="guide-list">
            <li>Navigate to the <strong>"My Collection"</strong> tab on the website.</li>
            <li>Click on <strong>"📁 Import Save File (JSON)"</strong>.</li>
            <li>Drag & drop your <code>monster_girls_roster.json</code> or paste the JSON content.</li>
            <li>Your entire hero roster instantly displays and persists in local browser storage!</li>
          </ol>
        </div>

        <div class="guide-card">
          <h3>⚡ Method 2: 1-Click Auto-Sync via WebADB (Local Server Mode)</h3>
          <ol class="guide-list">
            <li>Launch <code>run_web_encyclopedia.bat</code> on your PC.</li>
            <li>Start your Android emulator with the game running.</li>
            <li>Open <code>http://localhost:8787</code> in your browser and click <strong>"⚡ Connect & Sync"</strong>.</li>
            <li>The local server extracts your authentication token and hero list automatically.</li>
          </ol>
        </div>
      </div>
    `;
  },

  getSyncCN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">📲 账号同步与数据导入指南</h2>

        <div class="guide-card">
          <h3>🌐 方法一：导入本地存档 JSON 文件 (GitHub Pages 在线可用)</h3>
          <ol class="guide-list">
            <li>点击顶部导航栏的 <strong>“我的收藏”</strong> 页面。</li>
            <li>选择 <strong>“📁 导入存档文件 (JSON)”</strong>。</li>
            <li>拖入 <code>monster_girls_roster.json</code> 文件或直接粘贴数据。</li>
            <li>全量角色收藏数据将自动在浏览器中持久化保存！</li>
          </ol>
        </div>
      </div>
    `;
  },

  // 7. Translation Errors & Skill Fixes
  getTranslationRU() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">⚠️ Известные ошибки официального перевода игры</h2>
        <p class="guide-lead">Официальный перевод некоторых навыков и пассивок содержит неточности. Ниже приведены проверенные сообществом исправления:</p>

        <div class="guide-card">
          <h3>🔍 Исправления ключевых описаний:</h3>
          <ul class="guide-list">
            <li><strong>Астральная Хранительница:</strong> Описание ультимейта в игре говорит "наносит урон врагам", но на самом деле способность накладывает щит на весь отряд от силы защиты (DEF).</li>
            <li><strong>Святая сабля:</strong> Эффект "Follow-up" срабатывает только при наличии на цели дебаффа Уязвимости (Vulnerable), а не от любого попадания.</li>
            <li><strong>Урон от горения и яда:</strong> Переведен в некоторых местах как "магический урон", однако по механике это чистый <em>HP Loss</em>, пробивающий щиты цели.</li>
          </ul>
        </div>
      </div>
    `;
  },

  getTranslationEN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">⚠️ Official Localization Fixes & Skill Clarifications</h2>
        <p class="guide-lead">Verified discrepancies in official in-game skill descriptions:</p>

        <div class="guide-card">
          <h3>🔍 Verified Skill Discrepancies:</h3>
          <ul class="guide-list">
            <li><strong>Astral Guardian:</strong> In-game text implies direct offensive damage, but her Ultimate actually grants a team-wide shield scaling with DEF.</li>
            <li><strong>Holy Blade:</strong> The follow-up strike strictly requires the target to be afflicted with Vulnerable.</li>
            <li><strong>DoT Effects (Burn/Poison):</strong> Mislabeled as magic damage in some tooltips; mechanically functioning as pure HP Loss that penetrates shields.</li>
          </ul>
        </div>
      </div>
    `;
  },

  getTranslationCN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">⚠️ 游戏技能文本勘误与机制修正</h2>

        <div class="guide-card">
          <h3>🔍 核心技能机制确认：</h3>
          <ul class="guide-list">
            <li><strong>星界守卫：</strong> 终极技能实际效果为全体护盾加持，数值受防御力 (DEF) 加成。</li>
            <li><strong>圣剑：</strong> 追击触发严格要求目标处于“易伤 (Vulnerable)”状态。</li>
            <li><strong>持续伤害 (DoT)：</strong> 机制上为“真实生命流失 (HP Loss)”，无视护盾直接扣减生命值。</li>
          </ul>
        </div>
      </div>
    `;
  }
};
