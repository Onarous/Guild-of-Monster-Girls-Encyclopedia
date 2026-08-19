# -*- coding: utf-8 -*-

def get_chests_code():
    return """
  // 9. Chest Guide: To Merge or Not to Merge? (With Interactive Entity Links)
  getChestsContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    return `
      <div class="guide-article">
        <h2 class="guide-title">📦 ${isRu ? 'Полный Гайд по Сундукам: Сливать или Открывать?' : isCn ? '宝箱深度策略：开启还是合成？(Chest Guide)' : 'Chest Guide: Merge or Open?'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Математически выверенная стратегия работы с сундуками от theorycrafter Yomemamo. Разбор 7 категорий сундуков, скрытые вероятности апгрейда редкости и оптимальные точки остановки слияния. Кликните по сундукам и ресурсам для открытия информации.' 
            : isCn 
            ? '基于资深攻略作者 Yomemamo 的概率期望测算：全7大类宝箱20%额外掉落机制、升阶隐藏跳级概率与最佳开箱/合成决策矩阵。点击任意宝箱标签查看图鉴。' 
            : 'Mathematically verified chest strategy: optimal merge thresholds, extra drop multipliers, and upgrade probabilities.'}
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          
          <!-- Intro Notice -->
          <div style="background: rgba(56, 189, 248, 0.1); border-left: 4px solid #38bdf8; padding: 14px 18px; border-radius: var(--radius-sm); color: #bae6fd; font-size: 13.5px; line-height: 1.6;">
            💡 <strong>${isRu ? 'Базовая механика сундуков:' : isCn ? '核心基础机制：' : 'Core Mechanic:'}</strong> ${isRu 
              ? 'В игре существует <strong>7 основных категорий сундуков</strong>, каждый из которых имеет базовый шанс на <strong>дополнительный дроп (Extra Drop) ~20%</strong>. При открытии сундуков более низкой редкости существует вероятность «апгрейда» — выпадения предметов более высокого ранга. Из-за этого бездумное слияние всего в Оранжевые сундуки приводит к потере ресурсов!' 
              : isCn 
              ? '游戏内 <strong>7大类宝箱</strong> 均有约 <strong>20% 额外掉落率</strong>。低阶宝箱开启时存在跳级暴击高阶材料的隐藏机制。盲目全部一键合成橙箱会导致巨大隐形资源亏损！' 
              : 'All 7 chest categories feature a ~20% Extra Drop rate. Low tier chests can proc higher-tier loot upgrades, making blind auto-merging sub-optimal.'}
          </div>

          <!-- Decision Table -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25);">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 12px;">
              📊 ${isRu ? 'Сводная Таблица Решений: Сливать или Открывать?' : isCn ? '宝箱开启/合成决策速查表' : 'Chest Decision Matrix Table'}
            </div>
            <div class="guide-table-wrapper">
              <table class="guide-table" style="width: 100%; font-size: 12.5px;">
                <thead>
                  <tr style="background: rgba(30, 41, 59, 0.9);">
                    <th>${isRu ? 'Категория сундука' : isCn ? '宝箱类别' : 'Chest Category'}</th>
                    <th>${isRu ? 'Оптимальная остановка' : isCn ? '最佳停手阶段' : 'Optimal Stop'}</th>
                    <th>${isRu ? 'Стратегия и Обоснование' : isCn ? '策略与数学期望' : 'Strategy & Rationale'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight: 700; color: #38bdf8;">📦 ${isRu ? 'Материалы / Опыт' : isCn ? '材料 / 经验箱' : 'Materials / EXP'}</td>
                    <td style="color: #60a5fa; font-weight: 800;">${isRu ? 'Синий (Blue)' : isCn ? '蓝色 (Blue)' : 'Blue'}</td>
                    <td>${isRu ? '<strong>Сливать Зеленые ➔ в Синие. Синие и выше открывать сразу!</strong> Зеленый дает 55 опыта, Синий — 5100 (4x выгода). При открытии Синего есть шанс прока до 2500 опыта.' : isCn ? '绿色合成到蓝色，蓝色直接开！单次可能暴击海量经验。' : 'Merge Green to Blue; open Blue immediately for high multiplier procs.'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: #c084fc;">🔮 ${isRu ? 'Руны' : isCn ? '符文宝箱' : 'Runes'}</td>
                    <td style="color: #c084fc; font-weight: 800;">${isRu ? 'Фиолетовый (Purple)' : isCn ? '紫色 (Purple)' : 'Purple'}</td>
                    <td>${isRu ? '<strong>Открывать на Фиолетовом (ранняя/мид игра).</strong> Оранжевые руны выбиваются <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal(\\'consumables\\', \\'D00002_000\\')">🍀 клевером</span>. Узкое горлышко Кодекса — фиолетовые руны (5 шансов закрыть кодекс вместо 1 оранжевого). В эндгейме — сливать до Оранжевого.' : isCn ? '前期开紫色点亮图鉴；大后期全满后再合成橙色。' : 'Open Purple early for codex completion (5 chances vs 1 orange); merge to Orange in endgame.'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: #ef4444;">⚔️ ${isRu ? 'Обычная Экипировка' : isCn ? '基础装备箱' : 'Equipment'}</td>
                    <td style="color: #c084fc; font-weight: 800;">${isRu ? 'Фиолетовый (Purple)' : isCn ? '紫色 (Purple)' : 'Purple'}</td>
                    <td>${isRu ? '<strong>Сливать до Фиолетового и открывать.</strong> В игре ~30 типов фиолетового шмота для 3★ Кодекса. Оранжевый шмот фармится клевером на боссах. В лейте — авто-слияние до Оранжевого.' : isCn ? '合成到紫色开启，点亮30种紫色基础图鉴。' : 'Merge to Purple and open for the 30 purple gear types needed for Codex.'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: #facc15;"><span class="guide-entity-chip guide-chip-chest" onclick="App.openItemModal('chests', 'BX02006')">👑 ${isRu ? 'Экипировка Наследия' : isCn ? '传承装备箱' : 'Legacy Gear'}</span></td>
                    <td style="color: #c084fc; font-weight: 800;">${isRu ? 'Фиолетовый (Purple)' : isCn ? '紫色 (Purple)' : 'Purple'}</td>
                    <td>${isRu ? '<strong>Открывать на Фиолетовом.</strong> Дает в 5 раз больше шансов вытащить недостающие предметы Наследия для Кодекса, чем 1 попытка в оранжевом сундуке.' : isCn ? '开紫色收益远高于单次橙色，快速集齐传承图鉴。' : 'Open at Purple: grants 5x more attempts for missing legacy items than a single orange chest.'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: #facc15;"><span class="guide-entity-chip guide-chip-chest" onclick="App.openItemModal('chests', 'BX04001')">💰 ${isRu ? 'Золотой сундук' : isCn ? '金币宝箱' : 'Gold Chest'}</span></td>
                    <td style="color: #facc15; font-weight: 800;">${isRu ? 'Оранжевый (Orange)' : isCn ? '橙色 (Orange)' : 'Orange'}</td>
                    <td>${isRu ? '<strong>СЛИВАТЬ ДО ОРАНЖЕВОГО!</strong> Оранжевый сундук дает 15 000 – 30 000 <span class="guide-entity-chip guide-chip-gold" onclick="App.openItemModal(\\'consumables\\', \\'D00000_000\\')">🪙 золота</span>. У золота нет промежуточного прока, а матожидание на Оранжевом ранге максимально.' : isCn ? '必须合成到橙色再开！15,000–30,000金币收益最大化。' : 'ALWAYS MERGE TO ORANGE! Grants 15,000–30,000 gold with highest mathematical expectation.'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: #38bdf8;"><span class="guide-entity-chip guide-chip-chest" onclick="App.openItemModal('chests', 'BX05001')">💎 ${isRu ? 'Сундук с Самоцветами' : isCn ? '钻石宝箱' : 'Gem Chest'}</span></td>
                    <td style="color: #facc15; font-weight: 800;">${isRu ? 'Оранжевый (Orange)' : isCn ? '橙色 (Orange)' : 'Orange'}</td>
                    <td>${isRu ? '<strong>СЛИВАТЬ ДО ОРАНЖЕВОГО!</strong> Аналогично золоту, оранжевый тир дает наилучшую и самую стабильную отдачу <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 кристаллов</span>.' : isCn ? '必须合成到橙色再开！钻石产出最稳定。' : 'ALWAYS MERGE TO ORANGE! Maximum and most stable gem returns.'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: #22c55e;"><span class="guide-entity-chip guide-chip-chest" onclick="App.openItemModal('chests', 'BX06001')">🔮 ${isRu ? 'Мешочек с кристаллами' : isCn ? '精炼晶石箱' : 'Crystals'}</span></td>
                    <td style="color: #22c55e; font-weight: 800;">${isRu ? 'Без слияния (No Merge)' : isCn ? '直接开启 (No Merge)' : 'No Merge'}</td>
                    <td>${isRu ? '<strong>ОТКРЫВАТЬ СРАЗУ БЕЗ СЛИЯНИЯ!</strong> Из сундуков кристаллов низкого ранга есть шанс выпадения фиолетовых/божественных кристаллов. Шанс апгрейда перевешивает курс слияния 5:1.' : isCn ? '直接开！低阶宝箱可暴击出高阶神圣晶石，暴击率远超5:1合成汇率。' : 'OPEN AS-IS WITHOUT MERGING! Low-tier chests proc higher-tier crystals frequently.'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- FAQ -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #ef4444;">
            <div class="section-heading" style="color: #f87171; font-size: 16px; margin-bottom: 10px;">
              ❓ ${isRu ? 'Частые Вопросы по Сундукам и Дропу' : isCn ? '宝箱常见疑问与误区' : 'Chest FAQ & Pitfalls'}
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>${isRu ? 'Влияет ли характеристика Удачи (LUK) на открытие сундуков?' : isCn ? '幸运值影响开箱吗？' : 'Does Luck (LUK) affect chest openings?'}</strong><br>
                ❌ <span style="color: #f87171; font-weight: 700;">${isRu ? 'НЕТ.' : isCn ? '绝对不影响。' : 'NO.'}</span> ${isRu 
                  ? 'Боевая характеристика Удачи работает <strong>исключительно в бою при трате <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal(\\'consumables\\', \\'D00002_000\\')">🍀 Клевера</span></strong>. На открытие сундуков, награды из алхимии, свап талантов и дроп вне боя показатель LUK не оказывает никакого влияния.' 
                  : isCn 
                  ? '幸运值只在<strong>战斗中使用 <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal(\\'consumables\\', \\'D00002_000\\')">🍀 四叶草</span> 重掷骰子时生效</strong>。对宝箱开启、炼金产出、洗天赋完全没有任何影响。' 
                  : 'Luck functions strictly during combat when spending a Clover. It has zero effect on chest opening, alchemy, or talent swaps.'}</li>
              <li><strong>${isRu ? 'Тактика для временных ивентовых карт (Тундра / Исекай):' : isCn ? '限时活动地图开箱战术:' : 'Event Map Chest Rush:'}</strong><br>
                ${isRu 
                  ? 'На ограниченных по времени картах оранжевый шмот фармится вручную через <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal(\\'consumables\\', \\'D00002_000\\')">🍀 Клевер</span> на боссах, а сундуки сливаются до фиолетовых и открываются, чтобы быстро закрыть редкие промежуточные предметы до завершения ивента.' 
                  : isCn 
                  ? '限时活动地图中，橙装通过Boss关用四叶草精准刷取，宝箱则全部合成至紫色直接开启，以在活动结束前快速集齐限定图鉴。' 
                  : 'On limited-time event maps, farm orange gear via Boss clovers and open chests at purple to complete event codex before time runs out.'}</li>
            </ul>
          </div>

        </div>
      </div>
    `;
  },
"""
