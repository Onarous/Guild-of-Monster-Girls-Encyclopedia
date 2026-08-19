# -*- coding: utf-8 -*-

def get_targeting_code():
    return """
  // 3. Range, Distance & Targeting (RU, EN, CN)
  getTargetingRU() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🎯 Дистанция, Позиционирование и Таргетинг</h2>
        <p class="guide-lead">
          В бою действует строгая поклеточная система дистанции (Range) и приоритетов выбора целей. Понимание геометрии поля позволяет эффективно защищать уязвимых магов и выбивать ключевых вражеских дамагеров.
        </p>

        <!-- Battlefield Schematic -->
        <div class="guide-card" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 20px;">
          <h3 style="color: #38bdf8; font-size: 16px; margin-bottom: 12px;">📐 Схема поля боя (6 позиций в ряду):</h3>
          <div class="battlefield-grid" style="display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
            <div class="grid-side ally" style="display: flex; gap: 6px;">
              <span class="grid-cell" style="background: rgba(59, 130, 246, 0.2); border: 1px solid #3b82f6; color: #93c5fd; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">Союзник 0<br><small>(Тыл / Back)</small></span>
              <span class="grid-cell" style="background: rgba(59, 130, 246, 0.25); border: 1px solid #3b82f6; color: #93c5fd; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">Союзник 1<br><small>(Центр / Mid)</small></span>
              <span class="grid-cell" style="background: rgba(59, 130, 246, 0.35); border: 1.5px solid #60a5fa; color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center; font-weight: 700;">Союзник 2<br><small>(Авангард / Front)</small></span>
            </div>
            <div class="grid-vs" style="font-weight: 900; font-size: 16px; color: #facc15; padding: 0 8px;">⚔️ VS ⚔️</div>
            <div class="grid-side enemy" style="display: flex; gap: 6px;">
              <span class="grid-cell" style="background: rgba(239, 68, 68, 0.35); border: 1.5px solid #f87171; color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center; font-weight: 700;">Враг 3<br><small>(Авангард / Front)</small></span>
              <span class="grid-cell" style="background: rgba(239, 68, 68, 0.25); border: 1px solid #ef4444; color: #fca5a5; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">Враг 4<br><small>(Центр / Mid)</small></span>
              <span class="grid-cell" style="background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #fca5a5; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">Враг 5<br><small>(Тыл / Back)</small></span>
            </div>
          </div>
          <div style="font-size: 13px; color: #94a3b8; line-height: 1.6; margin-top: 12px; background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: var(--radius-sm);">
            💡 <strong>Формула расчета дистанции:</strong> Базовая дистанция = 1. Каждый стоящий на поле персонаж между вами и целью (включая саму клетку цели) добавляет <strong>+1</strong> к требуемому параметру <strong>Range</strong>. Воинам в слоте 2 для атаки врага 3 достаточно Range 1. Стрелку в слоте 0 для удара по врагу 5 требуется Range 6.
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          
          <!-- Priorities -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px;">
              🎯 Приоритеты и Условия Выбора Цели (Targeting Rules)
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>Nearest (Ближайший враг):</strong> Отсчет идет строго по живым целям от ближайшей к дальней. Стандартный выбор воинов ближнего боя.</li>
              <li><strong>Furthest (Самый дальний враг):</strong> Направляет атаку в заднюю линию противника (Range 4–6). Позволяет снайперам выбивать саппортов до того, как те поставят щиты.</li>
              <li><strong>Lowest HP (Наименьшее HP):</strong> Приоритетно выбирает цель с наименьшим абсолютным здоровьем для гарантированного добивания.</li>
              <li><strong>Highest ATK (Наивысшая атака):</strong> Фокусирует главного вражеского дамагера.</li>
              <li><strong>Position Value (Удар по фиксированной клетке):</strong> Бьет строго по координате слота (например, клетка 4). Если враг на этой клетке погиб, атака <em>уходит в молоко (промах)</em>.</li>
            </ul>
          </div>

          <!-- Modifiers -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #a855f7;">
            <div class="section-heading" style="color: #c084fc; font-size: 16px; margin-bottom: 10px;">
              🛡️ Модификаторы и Статусы Таргетинга
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>Prioritize Target:</strong> Делает персонажа безусловной целью для всех одиночных атак врага независимо от его положения на поле боя.</li>
              <li><strong>Prioritize Never Target (Скрытность / Невидимость):</strong> Исключает персонажа из выбора одиночных атак и Precision, но оставляет уязвимым для AoE и контратак.</li>
              <li><strong>Precision (Меткость / Атака с тыла):</strong> Разворачивает алгоритм атаки: персонаж начинает бить врагов с <strong>задней линии к передней (Back to Front)</strong>.</li>
              <li><strong>Taunt / Lure (Провокация):</strong> Принуждает врагов атаковать только танка и <strong>сбивает режим Precision</strong> (если у атакующего нет более высокого приоритета).</li>
            </ul>
          </div>

          <!-- Attack Classification Table -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #22c55e;">
            <div class="section-heading" style="color: #22c55e; font-size: 16px; margin-bottom: 10px;">
              📊 Классификация Атак и Удары
            </div>
            <div class="guide-table-wrapper">
              <table class="guide-table" style="width: 100%; font-size: 12.5px;">
                <thead>
                  <tr style="background: rgba(30, 41, 59, 0.9);">
                    <th>Категория</th>
                    <th>Тип атаки</th>
                    <th>Механика и Ограничения</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowspan="2"><strong>Количество целей</strong></td>
                    <td style="color: #38bdf8;"><strong>Single Target</strong></td>
                    <td>Бьет 1–2 конкретные цели. Требует спец. модификаторов для мульти-таргета.</td>
                  </tr>
                  <tr>
                    <td style="color: #c084fc;"><strong>All Targets (AoE)</strong></td>
                    <td>Бьет сразу по всей вражеской или союзной команде.</td>
                  </tr>
                  <tr>
                    <td rowspan="2"><strong>Количество ударов</strong></td>
                    <td style="color: #facc15;"><strong>Single Hit</strong></td>
                    <td>Формулировка <em>«Deal X damage»</em>. Число ударов <strong>нельзя увеличить</strong> экипировкой.</td>
                  </tr>
                  <tr>
                    <td style="color: #22c55e;"><strong>Multi Hit</strong></td>
                    <td>Формулировка <em>«Deal X hits of Y damage»</em>. Число ударов <strong>масштабируется</strong> баффами и сетами!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    `;
  },

  getTargetingEN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🎯 Range, Distance & Targeting System</h2>
        <p class="guide-lead">
          Combat operates on a cell-based distance grid and priority targeting rules. Position mastery allows protecting frail glass cannons and sniping priority enemy threats.
        </p>

        <div class="guide-card" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 20px;">
          <h3 style="color: #38bdf8; font-size: 16px; margin-bottom: 12px;">📐 6-Slot Grid Positioning:</h3>
          <div class="battlefield-grid" style="display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
            <div class="grid-side ally" style="display: flex; gap: 6px;">
              <span class="grid-cell" style="background: rgba(59, 130, 246, 0.2); border: 1px solid #3b82f6; color: #93c5fd; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">Ally 0 (Back)</span>
              <span class="grid-cell" style="background: rgba(59, 130, 246, 0.25); border: 1px solid #3b82f6; color: #93c5fd; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">Ally 1 (Mid)</span>
              <span class="grid-cell" style="background: rgba(59, 130, 246, 0.35); border: 1.5px solid #60a5fa; color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center; font-weight: 700;">Ally 2 (Front)</span>
            </div>
            <div class="grid-vs" style="font-weight: 900; font-size: 16px; color: #facc15; padding: 0 8px;">⚔️ VS ⚔️</div>
            <div class="grid-side enemy" style="display: flex; gap: 6px;">
              <span class="grid-cell" style="background: rgba(239, 68, 68, 0.35); border: 1.5px solid #f87171; color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center; font-weight: 700;">Enemy 3 (Front)</span>
              <span class="grid-cell" style="background: rgba(239, 68, 68, 0.25); border: 1px solid #ef4444; color: #fca5a5; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">Enemy 4 (Mid)</span>
              <span class="grid-cell" style="background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #fca5a5; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">Enemy 5 (Back)</span>
            </div>
          </div>
          <div style="font-size: 13px; color: #94a3b8; line-height: 1.6; margin-top: 12px; background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: var(--radius-sm);">
            💡 <strong>Distance Formula:</strong> Base Range = 1. Each occupying character between the attacker and target adds <strong>+1</strong> to required <strong>Range</strong>.
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px;">
              🎯 Target Priority Conditions
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>Nearest:</strong> Targets the closest active front unit. Standard for melee.</li>
              <li><strong>Furthest:</strong> Targets the rear enemy backline (Range 4–6).</li>
              <li><strong>Lowest HP:</strong> Prioritizes lowest health enemy for execute finishes.</li>
              <li><strong>Precision:</strong> Attacks back-to-front, bypassing front tanks unless Taunted.</li>
              <li><strong>Taunt / Lure:</strong> Redirects single-target attacks to the tank.</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  },

  getTargetingCN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🎯 攻击距离与目标选择规则 (Targeting & Range)</h2>
        <p class="guide-lead">
          战场采用格子距离计算与优先级索敌。精准理解站位能有效保护后排脆皮并定点狙杀敌方核心。
        </p>

        <div class="guide-card" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25); margin-bottom: 20px;">
          <h3 style="color: #38bdf8; font-size: 16px; margin-bottom: 12px;">📐 战场6格站位图解：</h3>
          <div class="battlefield-grid" style="display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
            <div class="grid-side ally" style="display: flex; gap: 6px;">
              <span class="grid-cell" style="background: rgba(59, 130, 246, 0.2); border: 1px solid #3b82f6; color: #93c5fd; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">我方后排 (0)</span>
              <span class="grid-cell" style="background: rgba(59, 130, 246, 0.25); border: 1px solid #3b82f6; color: #93c5fd; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">我方中排 (1)</span>
              <span class="grid-cell" style="background: rgba(59, 130, 246, 0.35); border: 1.5px solid #60a5fa; color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center; font-weight: 700;">我方前锋 (2)</span>
            </div>
            <div class="grid-vs" style="font-weight: 900; font-size: 16px; color: #facc15; padding: 0 8px;">⚔️ VS ⚔️</div>
            <div class="grid-side enemy" style="display: flex; gap: 6px;">
              <span class="grid-cell" style="background: rgba(239, 68, 68, 0.35); border: 1.5px solid #f87171; color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center; font-weight: 700;">敌方前锋 (3)</span>
              <span class="grid-cell" style="background: rgba(239, 68, 68, 0.25); border: 1px solid #ef4444; color: #fca5a5; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">敌方中排 (4)</span>
              <span class="grid-cell" style="background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #fca5a5; padding: 8px 12px; border-radius: 6px; font-size: 12px; text-align: center;">敌方后排 (5)</span>
            </div>
          </div>
          <div style="font-size: 13px; color: #94a3b8; line-height: 1.6; margin-top: 12px; background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: var(--radius-sm);">
            💡 <strong>距离判定公式：</strong> 基础距离为1。攻击者与目标之间每存在一名存活角色，所需 <strong>Range (射程)</strong> 便 +1。
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px;">
              🎯 索敌优先级与特殊状态
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>最近目标 (Nearest)：</strong> 战士默认攻击最近敌方前锋（距离1）。</li>
              <li><strong>最远目标 (Furthest)：</strong> 射手与法师技能狙击后排（距离4–6）。</li>
              <li><strong>最低生命 (Lowest HP)：</strong> 优先斩杀残血，触发击杀连环被动。</li>
              <li><strong>后排穿透 (Precision)：</strong> 由后向前倒序锁定后排，但会被嘲讽打断。</li>
              <li><strong>嘲讽 (Taunt / Lure)：</strong> 强制敌方单体技能攻击嘲讽坦克。</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  },
"""
