# -*- coding: utf-8 -*-

def get_farming_code():
    return """
  // 7. Farming, Gear Stars & Luck Mechanics (With Alter Bunny Links)
  getFarmingContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    return `
      <div class="guide-article">
        <h2 class="guide-title">🌾 ${isRu ? 'Фарм Экипировки, Звездность и Механика Удачи' : isCn ? '装备刷取、升星与幸运机制 (Farming & Luck)' : 'Farming, Gear Stars & Luck Mechanics'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Полное руководство по фарму лута: как устроен дроп с монстров, бросок кубика d20, бонусы Бездны 20+/40+, таблица прокачки звездности экипировки до 3★ и реальная математика показателя Удачи (LUK) и Клевера. Нажимайте на плашки предметов и героинь для открытия карточек.' 
            : isCn 
            ? '装备掉落全机制：怪物纸娃娃装备预览、d20掷骰机制、深渊20/40额外掉落、3★套装激活压缩与四叶草/幸运值 (LUK) 真实补正算法。点击任意词条查看对应弹窗。' 
            : 'Farming mechanics, d20 dice rolls, Abyss 20+/40+ extra drops, 3★ star upgrade legacy rules, and true Luck/Clover probability math.'}
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          
          <!-- 1. How Farming Works -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25);">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 10px;">
              📍 1. ${isRu ? 'Как Устроен Дроп и Фарм (How Farming Works)' : isCn ? '掉落机制与地图刷取法则' : 'How Farming Works'}
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>${isRu ? 'Визуальный просмотр дропа (Sprite Preview):' : isCn ? '怪兽纸娃娃预览:' : 'Sprite Preview:'}</strong> ${isRu 
                ? 'Нажав на клетку врага на карте, вы видите спрайты монстров. <span style="color: #facc15; font-weight: 700;">Какая экипировка надета на спрайтах монстров — именно она и может выпасть после победы!</span>' 
                : isCn 
                ? '点击地图上的怪物格子，观察怪物身上穿戴的装备外观。<span style="color: #facc15; font-weight: 700;">怪物身上穿什么装备，胜利后就掉落对应的装备！</span>' 
                : 'Monsters drop exactly what they are wearing in their visual battle sprite.'}</li>
              <li><strong>${isRu ? 'Бросок кубика d20 (1–20) на редкость:' : isCn ? 'd20 掷骰判定:' : 'd20 Dice Roll:'}</strong> ${isRu 
                ? 'После победы игра совершает бросок кубика от 1 до 20. <strong>Натуральный ролл 20</strong> — единственный способ гарантировать выпадение высшего Оранжевого (Orange) предмета или Желтого предмета Наследия (Legacy Yellow).' 
                : isCn 
                ? '战斗胜利后系统进行 1–20 点掷骰。<strong>掷出满分20点 (Natural 20)</strong> 是获取最高阶橙装与传承黄装的唯一保底途径。' 
                : 'Combat triggers a 1–20 dice roll. A natural 20 roll guarantees an Orange or Legacy Yellow item drop.'}</li>
              <li><strong>${isRu ? 'Бонус этажей Бездны (Abyss Maps):' : isCn ? '深渊额外掉落加成:' : 'Abyss Extra Drops:'}</strong> ${isRu 
                ? 'Зачистка этажей <strong>Бездна 20+</strong> дает <strong>+1 дополнительный предмет</strong> дропа. Зачистка этажей <strong>Бездна 40+</strong> дает <strong>+2 дополнительных предмета</strong> дропа!' 
                : isCn 
                ? '通关 <strong>深渊 20+ 层</strong> 获得 <strong>+1 件额外掉落</strong>；通关 <strong>深渊 40+ 层</strong> 获得 <strong>+2 件额外掉落</strong>！' 
                : 'Clearing Abyss 20+ grants +1 extra item drop; Abyss 40+ grants +2 extra item drops.'}</li>
              <li><strong>${isRu ? 'Маршрут экономии энергии (Stamina):' : isCn ? '省体力刷图路线:' : 'Stamina Efficient Route:'}</strong> ${isRu 
                ? 'Отметьте нужную экипировку через Трекинг ➔ заходите на карту наивысшей сложности ➔ пробивайте кратчайший путь к Боссу, спец-клеткам и клеткам с <strong>зеленым пальцем 👍</strong> ➔ после их зачистки сразу выходите!' 
                : isCn 
                ? '利用图鉴追踪标记缺件装备 ➔ 进入最高难度关卡 ➔ 沿最短路径直扑 Boss、特殊格与带 <strong>👍 标志</strong> 的优质怪 ➔ 击杀后直接结算撤退！' 
                : 'Track desired gear in Codex ➔ rush shortest route to Boss, special spots, and 👍 thumbs-up cells ➔ exit immediately.'}</li>
            </ul>
          </div>

          <!-- 2. Star Up & Legacy -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px;">
              ⭐ 2. ${isRu ? 'Звездность Экипировки и Наследие (Star Up & Legacy)' : isCn ? '装备升星与传承系统' : 'Gear Star Upgrade & Legacy'}
            </div>
            <p style="color: #cbd5e1; font-size: 13.5px; line-height: 1.6; margin-bottom: 12px;">
              ${isRu ? 'Каждый предмет экипировки уникален (может быть надет только на одну героиню одновременно). Дубликаты предметов используются для повышения звездности от 1★ до 3★:' : isCn ? '同种装备全队仅可佩戴一件。多余副本用于升星（1★至3★）：' : 'Gear is unique per character. Duplicates are used to ascend star rank from 1★ to 3★:'}
            </p>
            <div class="guide-table-wrapper" style="margin-bottom: 12px;">
              <table class="guide-table" style="width: 100%; font-size: 12.5px;">
                <thead>
                  <tr style="background: rgba(30, 41, 59, 0.9);">
                    <th>${isRu ? 'Этап улучшения' : isCn ? '强化阶段' : 'Upgrade Stage'}</th>
                    <th>${isRu ? 'Требуемые дубликаты' : isCn ? '所需材料' : 'Required Cost'}</th>
                    <th>${isRu ? 'Бонус к характеристикам' : isCn ? '词条加成' : 'Stat Bonus'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="color: #facc15; font-weight: 700;"><strong>Legacy (Наследие)</strong></td>
                    <td><span class="guide-entity-chip guide-chip-stone" onclick="App.openItemModal('consumables', 'D00007_001')">💎 1 Камень наследия</span></td>
                    <td><strong>+1 очко</strong> ко ВСЕМ строкам талантов/аффиксов предмета</td>
                  </tr>
                  <tr>
                    <td style="color: #38bdf8;"><strong>1★ (1 звезда)</strong></td>
                    <td>1 дубликат предмета</td>
                    <td><strong>+1 очко</strong> к таланту 1-й строки</td>
                  </tr>
                  <tr>
                    <td style="color: #c084fc;"><strong>2★ (2 звезды)</strong></td>
                    <td>5 дубликатов предмета</td>
                    <td><strong>+1 очко</strong> к таланту 2-й строки</td>
                  </tr>
                  <tr>
                    <td style="color: #ef4444;"><strong>3★ (3 звезды)</strong></td>
                    <td>10 дубликатов предмета</td>
                    <td><strong>+1 очко</strong> к таланту 3-й строки</td>
                  </tr>
                  <tr style="background: rgba(234, 179, 8, 0.1);">
                    <td style="color: #facc15; font-weight: 900;">👑 MAX (Legacy + 3★)</td>
                    <td>16 дубликатов + <span class="guide-entity-chip guide-chip-stone" onclick="App.openItemModal('consumables', 'D00007_001')">💎 Камень</span></td>
                    <td style="color: #facc15; font-weight: 700;"><strong>+3 очка ко ВСЕМ строкам талантов предмета!</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Set Combining Bonus -->
            <div style="background: rgba(34, 197, 94, 0.1); border-left: 4px solid #22c55e; padding: 12px 16px; border-radius: var(--radius-sm); color: #86efac; font-size: 13px; line-height: 1.6;">
              💡 <strong>${isRu ? 'Зачем нужна прокачка до 3★ (Комбинирование сетов):' : isCn ? '3★核心价值：套装件数压缩' : 'Why 3★ Matters: Set Compression'}</strong><br>
              ${isRu 
                ? 'Прокачанная до 3★ экипировка позволяет активировать полные резонансы сетов <strong>меньшим количеством надетых вещей</strong>! Например, чтобы активировать сет из 3 предметов, достаточно надеть <strong>всего 2 предмета 3★</strong>. Это освобождает 3-й слот под другой сет, позволяя носить по 2–3 полных сета на одной героине!' 
                : isCn 
                ? '3★满星装备拥有足够的共鸣点数，让你仅用 <strong>2件 3★ 装备即可完整激活3件套属性</strong>！这极大解放了装备槽位，让单个角色能够同时凑齐2–3个完整套装共鸣！' 
                : '3★ gear items grant bonus resonance points, allowing you to activate full 3-piece set bonuses with only 2 items equipped, opening slots for multi-set combinations!'}
            </div>
          </div>

          <!-- 3. Real Luck & Clovers -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #22c55e;">
            <div class="section-heading" style="color: #22c55e; font-size: 16px; margin-bottom: 10px;">
              🍀 3. ${isRu ? 'Реальная Механика Удачи (LUK) и Клевера' : isCn ? '幸运值 (LUK) 与四叶草真实机制' : 'Real Luck (LUK) & Clovers Math'}
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li>❌ <strong>${isRu ? 'Миф:' : isCn ? '认知误区：' : 'Common Myth:'}</strong> ${isRu ? 'Удача повышает базовый бесплатный ролл кубика после боя.' : isCn ? '以为幸运值能直接提高战斗结束后的初始免费掷骰点数。' : 'Thinking Luck increases the initial free post-combat dice roll.'}</li>
              <li>✅ <strong>${isRu ? 'Реальный факт:' : isCn ? '真实机制：' : 'Actual Reality:'}</strong> ${isRu 
                ? 'Первоначальный бросок кубика — это 100% случайный RNG (1–20). Показатель LUK на него <strong>не влияет</strong>. За каждые <span style="color: #22c55e; font-weight: 700;">15 единиц суммарной Удачи команды</span> вы получаете <strong>+1 к результату броска ПРИ ИСПОЛЬЗОВАНИИ <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal(\\'consumables\\', \\'D00002_000\\')">🍀 КЛЕВЕРА (Clover)</span></strong>!' 
                : isCn 
                ? '初始投骰是100%纯随机。全队每累积 <span style="color: #22c55e; font-weight: 700;">15点幸运值 (LUK)</span>，在<strong>消耗 <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal(\\'consumables\\', \\'D00002_000\\')">🍀 四叶草</span> 重掷时获得 +1 点数补偿</strong>！' 
                : 'Initial dice roll is 100% RNG. Every 15 total team Luck adds +1 to your roll ONLY when spending a Clover.'}</li>
              <li>🎯 <strong>${isRu ? 'Оптимальная стратегия Клевера:' : isCn ? '四叶草最佳使用策略:' : 'Optimal Clover Strategy:'}</strong> ${isRu 
                ? 'Применяйте <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal(\\'consumables\\', \\'D00002_000\\')">🍀 Клевер</span> <strong>только когда базовый бесплатный ролл выпал высоким (17–19)</strong>. В этом случае с бонусом LUK за 1–2 клевера вы гарантированно добиваете кубик до 20 (Оранжевый дроп)!' 
                : isCn 
                ? '仅在初始掷出 <strong>17–19 点高分</strong> 时使用四叶草！配合全队LUK加成，只需1片四叶草即可稳稳补正到20点必得橙装。' 
                : 'Spend Clovers only when your natural roll is 17–19 to easily hit 20 with LUK bonuses.'}</li>
              <li>🐰 <strong>${isRu ? 'Зайчихи (Bunny Units):' : isCn ? '兔系角色专属增益:' : 'Bunny DPS Scaling:'}</strong> ${isRu 
                ? '<span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M12205_000\\')">🌪️ Шагающая по ветру [Альтер] (M12205_000)</span> и <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M13305_000\\')">🐰 Великая волшебница [Альтер] (M13305_000)</span> — единственные героини в игре, чьи навыки напрямую масштабируют боевой урон от характеристики LUK.' 
                : isCn 
                ? '<span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M12205_000\\')">🌪️ 异格风行兔 (M12205_000)</span> 与 <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M13305_000\\')">🐰 异格大魔导师兔 (M13305_000)</span> 是全游唯一能将全队幸运值 (LUK) 直接转化为恐怖伤害的主C。' 
                : '<span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M12205_000\\')">🌪️ Windstrider Bunny [Alter] (M12205_000)</span> & <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M13305_000\\')">🐰 Grand Magician Bunny [Alter] (M13305_000)</span> are the only units that directly scale skill damage from team LUK.'}</li>
            </ul>
          </div>

        </div>
      </div>
    `;
  },
"""
