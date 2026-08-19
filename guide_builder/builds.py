# -*- coding: utf-8 -*-

def get_builds_code():
    return """
  // 6. Best Builds & Meta Lineups (100% Accurate Verified Hero Links)
  getBuildsContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    return `
      <div class="guide-article">
        <h2 class="guide-title">🏆 ${isRu ? 'Лучшие Сборки, Мета-Отряды и Тир-Лист' : isCn ? '最佳阵容与流派推荐 (Meta Teams)' : 'Best Builds & Meta Lineups'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Анализ актуального состояния меты от ведущих игроков TapTap (叶叶小飞花) и Discord-сообщества. Разбор 5 основных мейнстрим-команд, узких специализированных сетапов и незаменимых соло-джокеров. Кликните по любой героине для открытия профиля.' 
            : isCn 
            ? '基于TapTap顶级玩家（叶叶小飞花）与Discord核心群评测：5大主流T0/T1阵容深度剖析、4套高阶特化流派与通关神卡推荐。点击任意角色标签可查看详细面板与技能。' 
            : 'Comprehensive meta analysis: 5 mainstream core teams, 4 specialized niche builds, and essential solo utility jokers. Click any heroine chip to open profile modal.'}
        </p>

        <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 24px;">
          
          <!-- Section 1: Mainstream Core Teams -->
          <div class="section-heading" style="font-size: 17px; font-weight: 800; color: #facc15; display: flex; align-items: center; gap: 8px;">
            <span>👑</span> <span>${isRu ? '1. Основные Мейнстрим-Команды (T0 / T1 Core)' : isCn ? '1. 核心主流推图与竞技队伍 (T0/T1)' : '1. Mainstream Core Meta Teams (T0/T1)'}</span>
          </div>

          <!-- Team 1: Princess Follow-up -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 20px; border-radius: var(--radius-md); border: 1px solid rgba(74, 222, 128, 0.3);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
              <div>
                <div style="font-size: 18px; font-weight: 800; color: #4ade80;">
                  🟢 ${isRu ? 'А. Команда Преследования Принцессы' : isCn ? 'A. 公主追击流 (Princess Follow-up)' : 'A. Princess Follow-up Team'}
                </div>
                <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 4px;">
                  ${isRu ? 'Главный керри:' : isCn ? '主C核心：' : 'Main Carry:'} <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M12301')">👑 Принцесса гарпий (Harpy Princess — M12301)</span> • ⭐⭐⭐⭐⭐ (${isRu ? 'Топ-1 Старт для новичка' : isCn ? '零氪平民首选' : 'Top Starter Pick'})
                </div>
              </div>
              <button class="action-btn primary-btn" onclick="App.openCharacterModal('M12301')" style="font-size: 11.5px; padding: 4px 12px;">
                ${isRu ? 'Профиль героини ➔' : isCn ? '查看角色 ➔' : 'View Heroine ➔'}
              </button>
            </div>
            <div style="margin-top: 12px; font-size: 13.5px; line-height: 1.7; color: #cbd5e1;">
              <strong>${isRu ? 'Преимущества:' : isCn ? '核心优势：' : 'Key Strengths:'}</strong>
              <ul style="padding-left: 18px; margin: 6px 0;">
                <li>${isRu ? 'Предельно дешевая в сборке: не требует редких альтер-осколков, базовые таланты легко выбиваются.' : isCn ? '养成成本极低：无需稀有异格碎片，金天赋极易成型。' : 'Extremely budget-friendly: no rare alter shards required, easy talent rolls.'}</li>
                <li>${isRu ? 'Наносит <strong>70+ атак преследования (Follow-up hits) за раунд</strong> — абсолютный рекорд по поглощению баффов урона саппортов.' : isCn ? '单回合爆发 <strong>70+ 次追击攻击</strong>，完美吃满全队所有攻击力与附伤增益。' : 'Deals <strong>70+ follow-up hits per round</strong>, hyper-scaling with support attack buffs.'}</li>
                <li>${isRu ? 'Идеально пробивает стойкость бронированных и стальных монстров (Hardened enemies).' : isCn ? '高频打击瞬间打碎钢铁与重甲怪物的韧性条。' : 'Rapid multi-hits instantly melt Hardened & Armored boss toughness.'}</li>
              </ul>
              <div style="font-size: 12.5px; color: #94a3b8; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
                ⚠️ <strong>${isRu ? 'Слабости:' : isCn ? '弱点：' : 'Weaknesses:'}</strong> ${isRu ? 'Требует 1 ход на разгон. Зависима от базовой атаки экипировки против врагов с 999 брони.' : isCn ? '需要1回合启动预热；面对999超高防怪物时需依赖破韧或破防辅助。' : 'Requires 1 turn warm-up; relies on base ATK against 999 DEF targets.'}
              </div>
            </div>
          </div>

          <!-- Team 2: Lucky Rabbit -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 20px; border-radius: var(--radius-md); border: 1px solid rgba(250, 204, 21, 0.3);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
              <div>
                <div style="font-size: 18px; font-weight: 800; color: #facc15;">
                  🥕 ${isRu ? 'Б. Команда Счастливой Зайчихи / Гриб-Кентавр-Кот' : isCn ? 'B. 菇马猫双倍金币兔法队 (Lucky Rabbit)' : 'B. Lucky Rabbit Farm Team'}
                </div>
                <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 4px;">
                  ${isRu ? 'Ядро:' : isCn ? '核心阵容：' : 'Core:'} <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M13305_000')">🐰 Великая волшебница [Альтер] (M13305_000)</span> + <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M14203')">🐱 Чжаоцай (M14203)</span> + <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M11301')">🛡️ Командующая Легиона (M11301)</span> • ⭐⭐⭐⭐⭐ (${isRu ? 'Король фарма' : isCn ? '刷图打宝之王' : 'Farming King'})
                </div>
              </div>
              <button class="action-btn primary-btn" onclick="App.openCharacterModal('M13305_000')" style="font-size: 11.5px; padding: 4px 12px;">
                ${isRu ? 'Профиль героини ➔' : isCn ? '查看角色 ➔' : 'View Heroine ➔'}
              </button>
            </div>
            <div style="margin-top: 12px; font-size: 13.5px; line-height: 1.7; color: #cbd5e1;">
              <strong>${isRu ? 'Преимущества:' : isCn ? '核心优势：' : 'Key Strengths:'}</strong>
              <ul style="padding-left: 18px; margin: 6px 0;">
                <li>${isRu ? 'Универсальный гибрид: скоростная зачистка карт + максимальный приток <span class="guide-entity-chip guide-chip-gold" onclick="App.openItemModal(\\'consumables\\', \\'D00000_000\\')">🪙 золота</span> и шанс редкого дропа (MF).' : isCn ? '集极速清图、双倍金币掉落与最高稀有掉宝率 (MF) 于一体的打宝神器。' : 'Combines hyper-fast clearing with double gold drops and maximum magic find (MF).'}</li>
                <li>${isRu ? 'Прямое масштабирование урона от характеристики Удачи (<span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal(\\'consumables\\', \\'D00002_000\\')">🍀 LUK</span>) через талант «Счастливый удар» (Lucky Strike).' : isCn ? '通过专属与「幸运一击」天赋将全队幸运值 (LUK) 直接转化为恐怖的法术爆发。' : 'Directly converts team Luck (LUK) into massive damage via Lucky Strike.'}</li>
              </ul>
            </div>
          </div>

          <!-- Team 3: Malice Ice Fiend -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 20px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.3);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
              <div>
                <div style="font-size: 18px; font-weight: 800; color: #38bdf8;">
                  ❄️ ${isRu ? 'В. Команда Зловещей Ледяной Злодейки' : isCn ? 'C. 恶意冰邪反伤流 (Malice Ice Fiend)' : 'C. Malice Ice Fiend Team'}
                </div>
                <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 4px;">
                  ${isRu ? 'Главный керри:' : isCn ? '主C核心：' : 'Main Carry:'} <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M53301_001')">❄️ Астральная Злодейка [Альтер] (M53301_001)</span> + <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M53301')">🔮 Базовая Злодейка (M53301)</span> • ⭐⭐⭐⭐⭐ (${isRu ? 'Абсолютный T0' : isCn ? '跨战力T0真神' : 'Absolute T0'})
                </div>
              </div>
              <button class="action-btn primary-btn" onclick="App.openCharacterModal('M53301_001')" style="font-size: 11.5px; padding: 4px 12px;">
                ${isRu ? 'Профиль героини ➔' : isCn ? '查看角色 ➔' : 'View Heroine ➔'}
              </button>
            </div>
            <div style="margin-top: 12px; font-size: 13.5px; line-height: 1.7; color: #cbd5e1;">
              <strong>${isRu ? 'Преимущества:' : isCn ? '核心优势：' : 'Key Strengths:'}</strong>
              <ul style="padding-left: 18px; margin: 6px 0;">
                <li>${isRu ? '«Закон внеочередного урона»: уничтожает врагов <strong>вообще без совершения действий</strong> от триггеров Malice.' : isCn ? '回合外被动真神：敌方只要破韧或行动即触发海量恶意反伤，无需自身出手直接融化全场。' : 'Destroys enemies out-of-turn from Malice triggers without expending action turns.'}</li>
                <li>${isRu ? 'Гарантированно берется через Камень желаний за 30 дней ежедневного входа.' : isCn ? '开服30天签到心愿石可免费直接必选获得，成型门槛友好。' : '100% guaranteed via the 30-Day Login Wish Stone selector.'}</li>
              </ul>
              <div style="font-size: 12.5px; color: #94a3b8; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
                ⚠️ <strong>${isRu ? 'Слабости:' : isCn ? '弱点：' : 'Weaknesses:'}</strong> ${isRu ? 'Бессильна против металлических монстров и на этажах с иммунитетом к пробитию стойкости.' : isCn ? '免疫破韧的深渊层数无法生效；金属系怪物免疫纯HP Loss。' : 'Blocked by Metallic race monsters and Toughness Break Immunity stages.'}
              </div>
            </div>
          </div>

          <!-- Team 4: Undefeated Ice Blade -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 20px; border-radius: var(--radius-md); border: 1px solid rgba(96, 165, 250, 0.3);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
              <div>
                <div style="font-size: 17px; font-weight: 800; color: #60a5fa;">
                  ⚔️ ${isRu ? 'Г. Команда Непобедимого Ледяного Клинка (Undefeated Ice Blade)' : isCn ? 'D. 未战冰剑流 (Undefeated Ice Blade)' : 'D. Undefeated Ice Blade Team'}
                </div>
                <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 4px;">
                  ${isRu ? 'Главный керри:' : isCn ? '主C核心：' : 'Main Carry:'} <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M31301_001')">⚔️ Святая сабля [Альтер] (M31301_001)</span> • ⭐⭐⭐⭐☆
                </div>
              </div>
              <button class="action-btn primary-btn" onclick="App.openCharacterModal('M31301_001')" style="font-size: 11.5px; padding: 4px 12px;">
                ${isRu ? 'Профиль героини ➔' : isCn ? '查看角色 ➔' : 'View Heroine ➔'}
              </button>
            </div>
            <div style="margin-top: 10px; font-size: 13.5px; line-height: 1.7; color: #cbd5e1;">
              ${isRu ? 'Сокрушительные многоударные серии рубящих атак. Полностью раскрывает бафф <em>Жажда крови (Bloodlust)</em>. На 5★ похищает ману противников, обеспечивая выживаемость.' : isCn ? '高频斩击技能爆发，完美联动「热血」攻击力暴涨。5★被动偷取敌方能量，生存与续航兼备。' : 'Multi-hit slashing series scaling with Bloodlust. Steals enemy mana at 5★.'}
            </div>
          </div>

          <!-- Team 5: Speed Sword Immortal -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 20px; border-radius: var(--radius-md); border: 1px solid rgba(244, 114, 182, 0.3);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
              <div>
                <div style="font-size: 17px; font-weight: 800; color: #f472b6;">
                  🌸 ${isRu ? 'Д. Команда Скоростного Мечника (Speed Sword Immortal)' : isCn ? 'E. 加速流剑仙 (Speed Sword Immortal)' : 'E. Speed Sword Immortal Team'}
                </div>
                <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 4px;">
                  ${isRu ? 'Главный керри:' : isCn ? '主C核心：' : 'Main Carry:'} <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M31301')">⚔️ Святая сабля (M31301)</span> • ⭐⭐⭐⭐⭐ (${isRu ? 'Абсолютный потолок прямого урона' : isCn ? '当前直伤天花板' : 'Direct DMG Ceiling'})
                </div>
              </div>
              <button class="action-btn primary-btn" onclick="App.openCharacterModal('M31301')" style="font-size: 11.5px; padding: 4px 12px;">
                ${isRu ? 'Профиль героини ➔' : isCn ? '查看角色 ➔' : 'View Heroine ➔'}
              </button>
            </div>
            <div style="margin-top: 10px; font-size: 13.5px; line-height: 1.7; color: #cbd5e1;">
              ${isRu ? 'Колоссальные коэффициенты урона, синергия высокого базового урона и многократных ударов. Сильна соло даже без специализированных саппортов. Главный фаворит Чемпионата Вершины (Peak Match).' : isCn ? '极其恐怖的技能倍率与多段打击。即使单挂也有极高输出上限，巅峰赛断层领先的核心主C。' : 'Extreme skill multipliers and multi-hit synergy. Excels as a standalone carry in Peak Match.'}
            </div>
          </div>

          <!-- Section 2: Specialized & Niche Builds Table -->
          <div class="section-heading" style="font-size: 17px; font-weight: 800; color: #c084fc; display: flex; align-items: center; gap: 8px; margin-top: 10px;">
            <span>🧪</span> <span>${isRu ? '2. Продвинутые Специализированные Сетапы' : isCn ? '2. 进阶高难特化阵容' : '2. Advanced & Specialized Setups'}</span>
          </div>

          <div class="guide-table-wrapper">
            <table class="guide-table" style="width: 100%; font-size: 12.5px;">
              <thead>
                <tr style="background: rgba(30, 41, 59, 0.9);">
                  <th>${isRu ? 'Название билда' : isCn ? '流派名称' : 'Build Name'}</th>
                  <th>${isRu ? 'Ключевые герои' : isCn ? '核心英雄' : 'Key Heroines'}</th>
                  <th>${isRu ? 'Сильные стороны' : isCn ? '战术定位与优势' : 'Strengths'}</th>
                  <th>${isRu ? 'Уязвимости' : isCn ? '克制与缺点' : 'Weaknesses'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="color: #f87171; font-weight: 700;">${isRu ? 'Индукция Завещания' : isCn ? '遗愿爆发流' : 'Deathrattle Induction'}</td>
                  <td>
                    <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M13305_000')">🐰 Кролик [Альтер] (M13305_000)</span>, 
                    <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M31302')">🗿 Великанша (M31302)</span>, 
                    <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M21302')">👑 Владычица (M21302)</span>
                  </td>
                  <td>Разносит боссов с 999 брони взрывным прямым уроном.</td>
                  <td>Контрится статусом «Спящий». Требует 8 золотых талантов.</td>
                </tr>
                <tr>
                  <td style="color: #4ade80; font-weight: 700;">${isRu ? 'Очищение Слайм-Гриб-Дракон' : isCn ? '史莱姆净化流' : 'Purify Slime-Dragon'}</td>
                  <td>
                    <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M23301')">👑 Королева слизней (M23301)</span>, 
                    <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M13306')">🍄 Грибница (M13306)</span>, 
                    <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M13310')">🐉 Драконица (M13310)</span>
                  </td>
                  <td>Снимает баффы защиты с боссов, очищает команду от ядов.</td>
                  <td>Задержанный урон, страдает от анти-маны.</td>
                </tr>
                <tr>
                  <td style="color: #facc15; font-weight: 700;">${isRu ? '20,000 HP Золотая Дева' : isCn ? '2万血纯金女仆' : '20k HP Golden Maiden'}</td>
                  <td><span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M21301')">🛡️ Золотая дева (M21301)</span></td>
                  <td>20k HP со старта. Полный иммунитет к потере HP и дебаффам маны.</td>
                  <td>Экстремально дорогая (12 золотых слотов).</td>
                </tr>
                <tr>
                  <td style="color: #38bdf8; font-weight: 700;">${isRu ? 'Ледяное Пламя / Ожог' : isCn ? '冰火融甲流' : 'Ice-Fire Burn Drain'}</td>
                  <td>
                    <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M53301_001')">❄️ Астральная Злодейка (M53301_001)</span>, 
                    <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M22202')">🏹 Позолоченная лучница (M22202)</span>
                  </td>
                  <td>50k+ чистого урона на старте раунда. Отличная выживаемость.</td>
                  <td>Требует 12 золотых талантов и топовые самоцветы.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Section 3: Solo Jokers -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #22c55e;">
            <div class="section-heading" style="color: #22c55e; font-size: 16px; margin-bottom: 10px;">
              🛡️ 3. Незаменимые Соло-Джокеры (Core Utility Units)
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong><span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M21301')">🛡️ Неубиваемая Золотая Дева (M21301)</span>:</strong> Сет Жизнеобеспечения + Артефакт-Куб + иммунитет к смертельному HP Loss. Ключевая карта для прохождения сложнейших этажей (Пик 36).</li>
              <li><strong><span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M53301')">🔮 Шутовская / Астральная Злодейка (M53301)</span>:</strong> Мощнейший саппорт с принудительным продвижением хода союзников (Turn Pulling). Лечит команду без триггера маны врагов, ключевой мотор для пачек Астральной Злодейки и Ожога.</li>
            </ul>
          </div>

        </div>
      </div>
    `;
  },
"""
