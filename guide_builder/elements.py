# -*- coding: utf-8 -*-

def get_elements_code():
    return """
  // 5. Elements, Roles & Lineup (RU, EN, CN)
  getElementsRU() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">✨ Стихии, Роли Персонажей и Построение Отряда</h2>
        <p class="guide-lead">
          Руководство по синергии элементов, тактическим ролям в отряде (Hypercarry, Батарейки маны, Танки) и проверенным архетипам расстановки.
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          
          <!-- Element Wheel -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25);">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 10px;">
              🔥 Стихийный Круг и Преимущество (+25% / -25%)
            </div>
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px; flex-wrap: wrap; margin: 14px 0; font-size: 14px; font-weight: 700;">
              <span style="color: #f87171; background: rgba(239,68,68,0.15); padding: 6px 12px; border-radius: 6px; border: 1px solid rgba(239,68,68,0.3);">🔥 Огонь (Fire)</span> ➔ 
              <span style="color: #4ade80; background: rgba(74,222,128,0.15); padding: 6px 12px; border-radius: 6px; border: 1px solid rgba(74,222,128,0.3);">🌪️ Ветер (Wind)</span> ➔ 
              <span style="color: #facc15; background: rgba(250,204,21,0.15); padding: 6px 12px; border-radius: 6px; border: 1px solid rgba(250,204,21,0.3);">⛰️ Земля (Earth)</span> ➔ 
              <span style="color: #60a5fa; background: rgba(96,165,250,0.15); padding: 6px 12px; border-radius: 6px; border: 1px solid rgba(96,165,250,0.3);">💧 Вода (Water)</span> ➔ 
              <span style="color: #f87171; background: rgba(239,68,68,0.15); padding: 6px 12px; border-radius: 6px; border: 1px solid rgba(239,68,68,0.3);">🔥 Огонь</span>
            </div>
            <div style="text-align: center; margin-top: 6px; font-size: 13.5px; color: #cbd5e1;">
              ☀️ <strong>Свет (Light)</strong> и 🌑 <strong>Тьма (Dark)</strong> наносят взаимно повышенный урон друг другу и нейтральны к 4 стихиям.
            </div>
            <p style="font-size: 13px; color: #94a3b8; margin-top: 10px; line-height: 1.6;">
              * Преимущество стихии дает <strong>+25% к наносимому урону</strong> и <strong>-25% к получаемому урону</strong> от атакуемой стихии.
            </p>
          </div>

          <!-- Team Archetypes -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 12px;">
              👥 4 Базовых Архетипа Построения Отряда
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px;">
              <div style="background: rgba(30, 41, 59, 0.6); padding: 14px; border-radius: var(--radius-sm); border-left: 3px solid #38bdf8;">
                <div style="font-weight: 800; color: #38bdf8; font-size: 14px;">👑 Архетип 1-4-1 (Hypercarry)</div>
                <div style="font-size: 12.5px; color: #cbd5e1; margin-top: 6px; line-height: 1.5;">
                  1 Главный ДПС (Принцесса / Зайчиха / Мечник) + 4 Саппорта/Батарейки + 1 Провоцирующий Танк. Вся команда работает на разгон урона одного керри.
                </div>
              </div>

              <div style="background: rgba(30, 41, 59, 0.6); padding: 14px; border-radius: var(--radius-sm); border-left: 3px solid #22c55e;">
                <div style="font-weight: 800; color: #22c55e; font-size: 14px;">⚖️ Стандарт 2-2-2 (Сбалансированный)</div>
                <div style="font-size: 12.5px; color: #cbd5e1; margin-top: 6px; line-height: 1.5;">
                  2 Танка/Воина в авангарде + 2 Стрелка/Мага в центре + 2 Жрицы/Батарейки в тылу. Надежный сетап для закрытия новых глав сюжета.
                </div>
              </div>

              <div style="background: rgba(30, 41, 59, 0.6); padding: 14px; border-radius: var(--radius-sm); border-left: 3px solid #a855f7;">
                <div style="font-weight: 800; color: #c084fc; font-size: 14px;">❄️ Пассивный Урон (Out-of-Turn Malice)</div>
                <div style="font-size: 12.5px; color: #cbd5e1; margin-top: 6px; line-height: 1.5;">
                  Астральная Злодейка (Альтер) + разрушители стойкости + бафферы отражения. Враги погибают от триггеров злобы без траты ходов.
                </div>
              </div>

              <div style="background: rgba(30, 41, 59, 0.6); padding: 14px; border-radius: var(--radius-sm); border-left: 3px solid #ef4444;">
                <div style="font-weight: 800; color: #f87171; font-size: 14px;">⚡ Скоростной Блиц (Speed Cleave)</div>
                <div style="font-size: 12.5px; color: #cbd5e1; margin-top: 6px; line-height: 1.5;">
                  Стартовая мана + Скоростной Мечник + генерация внеочередных действий (Extra Action). Сметает врагов за первые 2 хода до их действий.
                </div>
              </div>
            </div>
          </div>

          <!-- Class Stat Priorities -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #22c55e;">
            <div class="section-heading" style="color: #22c55e; font-size: 16px; margin-bottom: 10px;">
              🎖️ Приоритеты Снаряжения по Классам
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>⚔️ Воины (Warriors):</strong> Сила (Str), Защита (Def), Стойкость (Toughness), HP Loss Reduction. Сеты: <em>Королевская аура</em>, <em>Жизнеобеспечение</em>.</li>
              <li><strong>🏹 Стрелки (Archers):</strong> Ловкость (Agi), Крит. шанс, Крит. урон, Multi-hit Count, Range. Сеты: <em>Охотничий азарт</em>, <em>Преследование</em>.</li>
              <li><strong>🔮 Маги (Mages):</strong> Дух (Spi), Мана-генерация, AoE Damage, Пробитие защиты. Сеты: <em>Астральный резонанс</em>, <em>Магический шторм</em>.</li>
              <li><strong>✨ Жрицы (Clerics):</strong> Дух (Spi), Эффективность лечения (Healing), Скорость (SPD), Очищение. Сеты: <em>Святое благословение</em>.</li>
            </ul>
          </div>

        </div>
      </div>
    `;
  },

  getElementsEN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">✨ Elements, Roles & Lineup Strategy</h2>
        <p class="guide-lead">
          Guide to elemental counter advantages, team composition archetypes, and gear stat priorities by hero class.
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25);">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 10px;">
              🔥 Elemental Cycle (+25% / -25%)
            </div>
            <div style="text-align: center; font-size: 14px; font-weight: 700; margin: 12px 0;">
              🔥 Fire ➔ 🌪️ Wind ➔ ⛰️ Earth ➔ 💧 Water ➔ 🔥 Fire<br>
              <span style="font-size: 13px; color: #cbd5e1; margin-top: 6px; display: inline-block;">☀️ Light and 🌑 Dark counter each other directly.</span>
            </div>
          </div>

          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px;">
              👥 Core Team Archetypes
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>Hypercarry (1-4-1):</strong> 1 Primary DPS + 4 Mana/ATK Buffers + 1 Taunt Tank.</li>
              <li><strong>Balanced (2-2-2):</strong> 2 Frontline + 2 Mid DPS + 2 Backline Clerics/Batteries.</li>
              <li><strong>Passive Malice (Out-of-turn):</strong> Astral Fiend Alter + Toughness Breakers.</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  },

  getElementsCN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">✨ 元素克制、定位与配队 (Elements & Lineup)</h2>
        <p class="guide-lead">
          元素克制增伤机制、队伍核心定位（主C、充能电池、嘲讽主坦）与经典阵容构筑范式。
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25);">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 10px;">
              🔥 元素克制环 (+25% 伤害 / -25% 受伤)
            </div>
            <div style="text-align: center; font-size: 14px; font-weight: 700; margin: 12px 0;">
              🔥 火克风 ➔ 🌪️ 风克地 ➔ ⛰️ 地克水 ➔ 💧 水克火<br>
              <span style="font-size: 13px; color: #cbd5e1; margin-top: 6px; display: inline-block;">☀️ 光与 🌑 暗相互绝对克制</span>
            </div>
          </div>

          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px;">
              👥 经典阵容构筑
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>四保一核心流 (1-4-1)：</strong> 1名超级主C（公主/兔法/剑仙）+ 4名充能与增益辅助 + 1名前排坦克。</li>
              <li><strong>被动反伤流 (恶意冰邪)：</strong> 异格冰邪 + 破韧手，依靠回合外被动直接融化敌人。</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  },
"""
