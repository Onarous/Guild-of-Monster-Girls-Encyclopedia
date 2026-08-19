# -*- coding: utf-8 -*-

def get_phases_code():
    return """
  // 2. Battle Phases & Turn Order (RU, EN, CN)
  getPhasesRU() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">⚔️ Порядок ходов и Фазы действий (Battle Lifecycle)</h2>
        <p class="guide-lead">
          Боевая система Guild of Monster Girls разделена на строго упорядоченные фазы. Каждое действие имеет точки входа (<code>Action Start</code>), расчет попаданий (<code>Hit</code>), пост-проверки (<code>After</code>) и завершение (<code>End</code>).
        </p>

        <!-- Lifecycle Flowchart -->
        <div class="guide-flowchart" style="margin: 20px 0;">
          <div class="flow-step" style="border-left: 4px solid #38bdf8;">🏁 <strong>Battle Start (Старт битвы)</strong> — Свойства экипировки, стартовая мана, подготовка</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #facc15;">🔄 <strong>Turn Start (Начало раунда 1–10)</strong> — Чеклисты статусов, тики порчи, Decay/Nullify</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #a855f7;">⚡ <strong>Speed Check / Mana Check</strong> ➔ <span style="background: #a855f7; color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 11px;">Extra Action (Внеочередной ход при 100% маны)</span></div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #22c55e;">🏃 <strong>Natural Turn (Естественный ход)</strong> — Очередность по параметру Скорости (Speed)</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #ef4444;">🎯 <strong>Action Flow (Исполнение действия)</strong> — Action Start ➔ Hit ➔ After ➔ End</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          
          <!-- Phase 1: Battle Start -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #38bdf8;">
            <div class="section-heading" style="color: #38bdf8; font-size: 15px; margin-bottom: 8px;">
              🏁 1. Battle Start (Старт сражения)
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.7;">
              <li>Срабатывает <strong>строго один раз</strong> в начале боя перед любыми движениями.</li>
              <li>Герои не ходят: активируются только стартовые свойства экипировки, артефакты и пассивки.</li>
              <li><strong>Внеочередной ход:</strong> Если за счет экипировки персонаж мгновенно получает 100% маны, он получает <strong>Extra Action</strong> перед первым естественным ходом первого раунда. Если таких героев несколько, между ними проводится проверка скорости (Speed Check).</li>
            </ul>
          </div>

          <!-- Phase 2: Turn Start -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 15px; margin-bottom: 8px;">
              🔄 2. Turn Start (Начало каждого раунда)
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.7;">
              <li>Срабатывает в начале каждого раунда (максимум до 10 раундов), когда все живые участники завершили ходы предыдущего раунда.</li>
              <li>Здесь активируются эффекты подготовки защиты, чеклисты баффов и наложение статусов.</li>
              <li><strong>Тактика против врагов со стартовой маной:</strong> Накладывайте статус <strong>Decay (Nullify)</strong> именно на фазе Turn Start — это сожжет вражескую ману до того, как босс нажмет ультимейт.</li>
              <li>Эффекты с формулировкой <em>«At turn start»</em> сгорают в конце текущего раунда.</li>
            </ul>
          </div>

          <!-- Phase 3: Hit Sequences -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #c084fc;">
            <div class="section-heading" style="color: #c084fc; font-size: 15px; margin-bottom: 8px;">
              ⛓️ 3. Цепочки Исполнения Ударов (Hit Sequences)
            </div>
            <div style="font-size: 13.5px; line-height: 1.8; color: #e2e8f0;">
              <div style="margin-bottom: 8px;">
                🗡️ <strong>Базовая атака и Преследование:</strong><br>
                <code style="color: #38bdf8; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">Action Start</code> ➔ 
                <code style="color: #22c55e; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">Basic Attack Hit</code> ➔ 
                <code style="color: #facc15; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">Basic Attack After</code> ➔ 
                <code style="color: #ef4444; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">Follow-up Hit</code> ➔ 
                <code style="color: #a855f7; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">Follow-up After</code> ➔ 
                <code style="color: #94a3b8; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">Action End</code>
              </div>
              <div style="margin-bottom: 8px;">
                🔮 <strong>Каст Активного Навыка (Skill):</strong><br>
                <code style="color: #38bdf8; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">First Cast / Skill Cast</code> ➔ 
                <code style="color: #ef4444; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">Skill Hit / Multi-Skill Hit</code> ➔ 
                <code style="color: #a855f7; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">Skill Cast After</code>
              </div>
              <div>
                🛡️ <strong>Получение Урона и Контратака:</strong><br>
                <code style="color: #f87171; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">Dmg Received</code> ➔ 
                <code style="color: #38bdf8; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">Counter Hit</code> ➔ 
                <code style="color: #22c55e; background: rgba(0,0,0,0.4); padding: 3px 8px; border-radius: 4px;">Counter After</code>
              </div>
            </div>
          </div>

          <!-- Phase 4: Trigger Nuances -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #22c55e;">
            <div class="section-heading" style="color: #22c55e; font-size: 15px; margin-bottom: 8px;">
              ⏱️ 4. Тонкости Триггеров и Таймингов
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.7;">
              <li><strong>Taking dmg (Получение любого урона):</strong> Срабатывает на любой урон, включая эффекты потери здоровья (HP Loss) и первый тик мульти-удара. Базовые атаки и Follow-up считаются отдельными инстансами урона.</li>
              <li><strong>Taking a hit (Получение физического удара):</strong> Срабатывает строго после полного завершения анимации и попадания действия.</li>
              <li><strong>Per hit after:</strong> Срабатывает после всех ударов действия и применяется <strong>один раз</strong>, суммируя накопленный множитель от общего числа нанесенных ударов.</li>
              <li>💡 <strong>Практический пример синергии:</strong> Если сет требует бить врага под дебаффом <em>Hinder</em>, вы можете наложить Hinder на фазе <code>Basic Attack After</code>. Тогда следующий <code>Follow-up Hit</code> мгновенно увидит дебафф и активирует бонус сета на весь урон Follow-up!</li>
            </ul>
          </div>

        </div>
      </div>
    `;
  },

  getPhasesEN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">⚔️ Battle Phases & Turn Order (Battle Lifecycle)</h2>
        <p class="guide-lead">
          Combat in Guild of Monster Girls is strictly phase-governed. Every action contains initiation (<code>Action Start</code>), strike resolution (<code>Hit</code>), post-checks (<code>After</code>), and conclusion (<code>End</code>).
        </p>

        <div class="guide-flowchart" style="margin: 20px 0;">
          <div class="flow-step" style="border-left: 4px solid #38bdf8;">🏁 <strong>Battle Start</strong> — Equipment passives, opening mana, passive preparations</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #facc15;">🔄 <strong>Turn Start (Rounds 1–10)</strong> — Status checklists, decay ticks, defense prep</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #a855f7;">⚡ <strong>Speed Check / Mana Check</strong> ➔ <span style="background: #a855f7; color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 11px;">Extra Action (100% Full Mana Cut-in)</span></div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #22c55e;">🏃 <strong>Natural Turn</strong> — Actions determined strictly by Speed (SPD) stat</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #ef4444;">🎯 <strong>Action Flow</strong> — Action Start ➔ Hit ➔ After ➔ End</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #38bdf8;">
            <div class="section-heading" style="color: #38bdf8; font-size: 15px; margin-bottom: 8px;">
              🏁 1. Battle Start Phase
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.7;">
              <li>Triggers exactly once at the beginning of combat before any movement.</li>
              <li>If equipment passives grant full mana instantly, the unit earns an <strong>Extra Action</strong> prior to Round 1 Natural Turn. Speed Check resolves ties among full-mana units.</li>
            </ul>
          </div>

          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 15px; margin-bottom: 8px;">
              🔄 2. Turn Start Phase
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.7;">
              <li>Triggers at the start of each round (up to 10 rounds max).</li>
              <li>Use <strong>Decay (Nullify)</strong> during Turn Start to burn enemy mana before dangerous boss skills cast.</li>
            </ul>
          </div>

          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #c084fc;">
            <div class="section-heading" style="color: #c084fc; font-size: 15px; margin-bottom: 8px;">
              ⛓️ 3. Hit Sequences & Execution Chains
            </div>
            <div style="font-size: 13.5px; line-height: 1.8; color: #e2e8f0;">
              <div>🗡️ <strong>Attack Sequence:</strong> <code>Action Start</code> ➔ <code>Basic Attack Hit</code> ➔ <code>Basic Attack After</code> ➔ <code>Follow-up Hit</code> ➔ <code>Follow-up After</code> ➔ <code>Action End</code></div>
              <div>🔮 <strong>Skill Sequence:</strong> <code>Skill Cast</code> ➔ <code>Skill Hit / Multi-Hit</code> ➔ <code>Skill Cast After</code></div>
              <div>🛡️ <strong>Counter Sequence:</strong> <code>Dmg Received</code> ➔ <code>Counter Hit</code> ➔ <code>Counter After</code></div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  getPhasesCN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">⚔️ 战斗阶段与行动顺序 (Battle Lifecycle)</h2>
        <p class="guide-lead">
          《魔物娘公会》的战斗流程分为严格的阶段判定。每个动作均包含行动开始 (<code>Action Start</code>)、命中判定 (<code>Hit</code>)、后续检查 (<code>After</code>) 与结束 (<code>End</code>)。
        </p>

        <div class="guide-flowchart" style="margin: 20px 0;">
          <div class="flow-step" style="border-left: 4px solid #38bdf8;">🏁 <strong>Battle Start (战斗开始)</strong> — 装备开场被动、初始能量注入、阵型就位</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #facc15;">🔄 <strong>Turn Start (回合开始 1–10)</strong> — 状态结算、腐化掉血、Decay扣蓝</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #a855f7;">⚡ <strong>Speed Check / Mana Check</strong> ➔ <span style="background: #a855f7; color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 11px;">Extra Action (满蓝插队行动)</span></div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #22c55e;">🏃 <strong>Natural Turn (自然行动)</strong> — 按速度 (SPD) 绝对值排序行动</div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step" style="border-left: 4px solid #ef4444;">🎯 <strong>Action Flow (行动执行链)</strong> — Action Start ➔ 普攻命中 ➔ 追击 ➔ 结束</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #38bdf8;">
            <div class="section-heading" style="color: #38bdf8; font-size: 15px; margin-bottom: 8px;">
              🏁 1. 战斗开始阶段 (Battle Start)
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.7;">
              <li>全场仅在开局触发一次。触发装备与开场天赋。</li>
              <li><strong>满蓝插队机制：</strong> 若通过装备在开场直接充满能量，将在自然第一回合前直接获得 <strong>Extra Action (插队爆发行动)</strong>。多名满蓝角色按速度高低排队。</li>
            </ul>
          </div>

          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #c084fc;">
            <div class="section-heading" style="color: #c084fc; font-size: 15px; margin-bottom: 8px;">
              ⛓️ 2. 攻击与技能判定链
            </div>
            <div style="font-size: 13.5px; line-height: 1.8; color: #e2e8f0;">
              <div>🗡️ <strong>普攻追击链：</strong> <code>Action Start</code> ➔ <code>普攻命中</code> ➔ <code>普攻后判定</code> ➔ <code>追击命中</code> ➔ <code>追击后判定</code> ➔ <code>行动结束</code></div>
              <div>🔮 <strong>技能释放链：</strong> <code>技能起手</code> ➔ <code>多段伤害命中</code> ➔ <code>技能后判定</code></div>
              <div>🛡️ <strong>受击与反击：</strong> <code>受击 Dmg Received</code> ➔ <code>反击命中</code> ➔ <code>反击后判定</code></div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
"""
