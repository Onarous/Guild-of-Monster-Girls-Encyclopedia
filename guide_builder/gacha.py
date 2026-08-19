# -*- coding: utf-8 -*-

def get_gacha_code():
    return """
  // 11. Gacha & Banners (With Standard & Alter Tickets and Collapsible Probability Grids)
  getGachaContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const charsData = (typeof App !== 'undefined' && App.state?.data?.characters?.[lang]) 
      ? App.state.data.characters[lang] 
      : [];

    const stdChars = charsData.filter(c => !String(c.id).includes('_'));
    const alterChars = charsData.filter(c => String(c.id).includes('_'));

    const getElemIcon = (elem) => {
      const e = String(elem || '').toLowerCase();
      if (e.includes('огонь') || e.includes('fire') || e.includes('火')) return '🔥';
      if (e.includes('вода') || e.includes('water') || e.includes('水')) return '💧';
      if (e.includes('ветер') || e.includes('wind') || e.includes('风')) return '🌪️';
      if (e.includes('земл') || e.includes('earth') || e.includes('地')) return '⛰️';
      if (e.includes('свет') || e.includes('light') || e.includes('光')) return '☀️';
      if (e.includes('тьм') || e.includes('dark') || e.includes('暗')) return '🌑';
      return '✨';
    };

    const getRankColor = (rank) => {
      if (rank === 'S') return { bg: 'rgba(234, 179, 8, 0.15)', border: 'rgba(234, 179, 8, 0.4)', text: '#facc15', rate: '2.50%' };
      if (rank === 'A') return { bg: 'rgba(168, 85, 247, 0.15)', border: 'rgba(168, 85, 247, 0.4)', text: '#c084fc', rate: '10.00%' };
      if (rank === 'B') return { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 0.4)', text: '#60a5fa', rate: '37.50%' };
      return { bg: 'rgba(148, 163, 184, 0.15)', border: 'rgba(148, 163, 184, 0.4)', text: '#cbd5e1', rate: '50.00%' };
    };

    const renderCharGrid = (list) => {
      const ranks = ['S', 'A', 'B', 'C'];
      return ranks.map(rank => {
        const group = list.filter(c => c.step === rank);
        if (group.length === 0) return '';
        const rankInfo = getRankColor(rank);
        const individualChance = (parseFloat(rankInfo.rate) / group.length).toFixed(3);

        return `
          <details open class="guide-rank-collapse">
            <summary class="guide-rank-summary" style="background: ${rankInfo.bg}; border-left: 4px solid ${rankInfo.text};">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-weight: 800; font-size: 14px; color: ${rankInfo.text};">Ранг ${rank}★</span>
                <span style="font-size: 12px; font-weight: 600; color: var(--text-muted);">(${group.length} ${isRu ? 'героинь' : isCn ? '名角色' : 'heroes'})</span>
              </div>
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="font-size: 12px; font-weight: 700; color: #f1f5f9; font-family: monospace;">
                  ${isRu ? 'Суммарно' : isCn ? '总概率' : 'Total'}: <span style="color: ${rankInfo.text};">${rankInfo.rate}</span> • ${isRu ? 'На 1 героя' : isCn ? '单抽' : 'Each'}: <span style="color: #38bdf8;">~${individualChance}%</span>
                </div>
                <span class="rank-collapse-arrow">▼</span>
              </div>
            </summary>

            <div class="guide-rank-body">
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 8px;">
                ${group.map(c => {
                  const elemIcon = getElemIcon(c.element);
                  const portraitPath = `assets/img/characters/${c.id}_1__single_part1_1@1.png`;
                  return `
                    <div class="guide-gacha-card" onclick="App.openCharacterModal('${c.id}')" style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 8px 10px; display: flex; align-items: center; gap: 10px; cursor: pointer; transition: all 0.15s ease;" onmouseover="this.style.borderColor='${rankInfo.text}'; this.style.background='rgba(30, 41, 59, 0.95)';" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.08)'; this.style.background='rgba(30, 41, 59, 0.7)';">
                      <div style="width: 38px; height: 38px; border-radius: 6px; overflow: hidden; background: rgba(0,0,0,0.4); flex-shrink: 0; display: flex; align-items: center; justify-content: center; border: 1px solid ${rankInfo.border};">
                        <img src="${portraitPath}" alt="${c.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <span style="display: none; font-size: 18px;">${elemIcon}</span>
                      </div>
                      <div style="flex: 1; min-width: 0;">
                        <div style="font-size: 12.5px; font-weight: 700; color: #f1f5f9; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${c.name}">
                          ${c.name}
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 3px; font-size: 11px;">
                          <span style="color: ${rankInfo.text}; font-weight: 800;">${rank}★ ${elemIcon}</span>
                          <span style="font-family: monospace; color: #38bdf8; font-weight: 700;">${individualChance}%</span>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </details>
        `;
      }).join('');
    };

    return `
      <div class="guide-article">
        <h2 class="guide-title">🎪 ${isRu ? 'Баннеры найма, Таблицы шансов дропа и Система Гаранта' : isCn ? '招募卡池机制、全角色掉落概率表与保底规则' : 'Summon Banners, Drop Rate Tables & Pity Systems'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Полное руководство по системе призыва: для обычного найма требуются <span class="guide-entity-chip guide-chip-ration" onclick="App.openItemModal(\\'consumables\\', \\'D00006_031\\')">🎫 Билеты для найма</span>, а для альтер-найма используются специальные <span class="guide-entity-chip guide-chip-stone" onclick="App.openItemModal(\\'consumables\\', \\'D00006_032\\')">🔮 Альтер-билеты для найма</span> (или <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 Самоцветы</span>). Сворачиваемые интерактивные grid-таблицы вероятностей призыва для каждого персонажа (S/A/B/C) и правила гаранта.' 
            : isCn 
            ? '招募系统全解析：基础招募消耗 <span class="guide-entity-chip guide-chip-ration" onclick="App.openItemModal(\\'consumables\\', \\'D00006_031\\')">🎫 推荐信 (普通招募券)</span>，异格招募消耗专用的 <span class="guide-entity-chip guide-chip-stone" onclick="App.openItemModal(\\'consumables\\', \\'D00006_032\\')">🔮 异化推荐信 (异格招募券)</span>（或消耗 <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 钻石</span>）。包含全角色概率网格与保底规则。' 
            : 'Summon system breakdown: Standard summon requires <span class="guide-entity-chip guide-chip-ration" onclick="App.openItemModal(\\'consumables\\', \\'D00006_031\\')">🎫 Recruit Tickets</span>, while Alter summon uses specialized <span class="guide-entity-chip guide-chip-stone" onclick="App.openItemModal(\\'consumables\\', \\'D00006_032\\')">🔮 Alter Recruit Tickets</span> (or <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 Gems</span>).'}
        </p>

        <!-- Summon Currencies Info Notice -->
        <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--radius-md); padding: 14px 18px; margin-top: 20px; margin-bottom: 24px; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 24px;">🎫</span>
            <div>
              <div style="font-size: 14px; font-weight: 800; color: #ffffff;">
                ${isRu ? 'Требуемые валюты и билеты для найма:' : isCn ? '招募所需票券与货币规则：' : 'Required Summon Tickets & Currencies:'}
              </div>
              <div style="font-size: 12.5px; color: #cbd5e1; margin-top: 3px;">
                ${isRu 
                  ? '• <strong>Обычный найм:</strong> используйте <span class="guide-entity-chip guide-chip-ration" onclick="App.openItemModal(\\'consumables\\', \\'D00006_031\\')">🎫 Билет для найма</span> или <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 Самоцветы</span><br>• <strong>Альтер-наем:</strong> требуются <span class="guide-entity-chip guide-chip-stone" onclick="App.openItemModal(\\'consumables\\', \\'D00006_032\\')">🔮 Альтер-билет для найма</span> или <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 Самоцветы</span> (200 гемов / крутка)' 
                  : isCn 
                  ? '• <strong>基础招募：</strong>消耗 <span class="guide-entity-chip guide-chip-ration" onclick="App.openItemModal(\\'consumables\\', \\'D00006_031\\')">🎫 推荐信</span> 或 <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 钻石</span><br>• <strong>异格招募：</strong>消耗 <span class="guide-entity-chip guide-chip-stone" onclick="App.openItemModal(\\'consumables\\', \\'D00006_032\\')">🔮 异化推荐信</span> 或 <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 钻石</span> (200钻/抽)' 
                  : '• <strong>Standard Summon:</strong> Uses <span class="guide-entity-chip guide-chip-ration" onclick="App.openItemModal(\\'consumables\\', \\'D00006_031\\')">🎫 Recruit Ticket</span> or <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 Gems</span><br>• <strong>Alter Summon:</strong> Requires <span class="guide-entity-chip guide-chip-stone" onclick="App.openItemModal(\\'consumables\\', \\'D00006_032\\')">🔮 Alter Recruit Ticket</span> or <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 Gems</span> (200 gems/pull)'}
              </div>
            </div>
          </div>
        </div>

        <!-- Current Rate-Up Characters Section -->
        <div style="margin-bottom: 24px;">
          <div class="section-heading" style="font-size: 16px; font-weight: 800; color: #ffffff; display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
            <span>🔥</span> <span>${isRu ? 'Персонажи с повышенным шансом призыва на данный момент (Current Rate-Up)' : isCn ? '当前概率提升角色 (Rate-Up UP卡池)' : 'Characters with Increased Drop Rate (Current Rate-Up)'}</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 14px;">
            
            <!-- 1. Rose Sovereign (Standard Banner Rate-Up) -->
            <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.18), rgba(15, 23, 42, 0.95)); border: 1.5px solid rgba(239, 68, 68, 0.5); border-radius: var(--radius-md); padding: 16px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="position: absolute; top: 12px; right: 12px; background: #ef4444; color: #ffffff; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
                🔥 БАЗОВЫЙ НАЙМ UP
              </div>

              <div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 52px; height: 52px; border-radius: 8px; overflow: hidden; background: rgba(0,0,0,0.5); border: 2px solid #ef4444; flex-shrink: 0;">
                    <img src="assets/img/characters/M13307_1__single_part1_1@1.png" alt="Rose Sovereign" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';">
                  </div>
                  <div>
                    <div style="font-size: 18px; font-weight: 800; color: #ffffff;">🌹 Владычица роз</div>
                    <div style="font-size: 12px; color: #fca5a5; font-weight: 600;">Rose Sovereign • ID: M13307</div>
                    <div style="display: flex; gap: 6px; margin-top: 3px;">
                      <span class="tag-badge" style="background: rgba(234, 179, 8, 0.25); color: #facc15; font-weight: 800; font-size: 10.5px; padding: 1px 6px;">S★</span>
                      <span class="tag-badge" style="background: rgba(34, 197, 94, 0.2); color: #86efac; font-size: 10.5px; padding: 1px 6px;">⛰️ Земля</span>
                    </div>
                  </div>
                </div>

                <div style="font-size: 13px; line-height: 1.6; color: #e2e8f0; background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: var(--radius-sm);">
                  🎯 <strong>Шанс в базовом найме:</strong> составляет <strong style="color: #facc15;">50% от всех выпавших S-ранг героинь</strong> (абсолютный шанс: <strong style="color: #38bdf8;">1.250%</strong> на каждую крутку).<br>
                  <div style="margin-top: 4px; font-size: 12px; color: #cbd5e1;">
                    Валюта: <span class="guide-entity-chip guide-chip-ration" onclick="App.openItemModal('consumables', 'D00006_031')">🎫 Билет для найма</span> или <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal('consumables', 'D00001_000')">💎 Самоцветы</span>
                  </div>
                </div>
              </div>

              <div style="margin-top: 14px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
                <span style="font-size: 12px; color: #fca5a5; font-weight: 600;">📅 13.08.2026 — 24.09.2026</span>
                <button class="action-btn primary-btn" onclick="App.openCharacterModal('M13307')" style="font-size: 11.5px; padding: 4px 12px; background: rgba(239,68,68,0.3); border-color: #ef4444; color: #fff;">
                  Профиль героини ➔
                </button>
              </div>
            </div>

            <!-- 2. Rose Sovereign Alter (Alter Banner Rate-Up) -->
            <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(15, 23, 42, 0.95)); border: 1.5px solid rgba(168, 85, 247, 0.5); border-radius: var(--radius-md); padding: 16px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="position: absolute; top: 12px; right: 12px; background: #a855f7; color: #ffffff; font-size: 10px; font-weight: 900; padding: 2px 8px; border-radius: 4px;">
                🔮 АЛЬТЕР-НАЕМ UP
              </div>

              <div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 52px; height: 52px; border-radius: 8px; overflow: hidden; background: rgba(0,0,0,0.5); border: 2px solid #a855f7; flex-shrink: 0;">
                    <img src="assets/img/characters/M13307_000_1__single_part1_1@1.png" alt="Rose Sovereign Alter" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';">
                  </div>
                  <div>
                    <div style="font-size: 18px; font-weight: 800; color: #ffffff;">🌹 Владычица роз [Альтер]</div>
                    <div style="font-size: 12px; color: #d8b4fe; font-weight: 600;">Alter ID: M13307_000 (Сумерки)</div>
                    <div style="display: flex; gap: 6px; margin-top: 3px;">
                      <span class="tag-badge" style="background: rgba(234, 179, 8, 0.25); color: #facc15; font-weight: 800; font-size: 10.5px; padding: 1px 6px;">S★</span>
                      <span class="tag-badge" style="background: rgba(168, 85, 247, 0.2); color: #c084fc; font-size: 10.5px; padding: 1px 6px;">🌑 Тьма / Альтер</span>
                    </div>
                  </div>
                </div>

                <div style="font-size: 13px; line-height: 1.6; color: #e2e8f0; background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: var(--radius-sm);">
                  🎯 <strong>Лимитированный Альтер:</strong> повышенный шанс в Альтер-Найме.<br>
                  <div style="margin-top: 4px; font-size: 12px; color: #cbd5e1;">
                    Валюта: <span class="guide-entity-chip guide-chip-stone" onclick="App.openItemModal('consumables', 'D00006_032')">🔮 Альтер-билет для найма</span> или <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal('consumables', 'D00001_000')">💎 Самоцветы</span> (200/крутка)
                  </div>
                </div>
              </div>

              <div style="margin-top: 14px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
                <span style="font-size: 12px; color: #d8b4fe; font-weight: 600;">📅 13.08.2026 — 03.09.2026</span>
                <button class="action-btn primary-btn" onclick="App.openCharacterModal('M13307_000')" style="font-size: 11.5px; padding: 4px 12px; background: rgba(168,85,247,0.25); border-color: #a855f7; color: #fff;">
                  Профиль героини ➔
                </button>
              </div>
            </div>

            <!-- 3. Troll Sorceress Alter (Upcoming Alter Rate-Up) -->
            <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(15, 23, 42, 0.95)); border: 1.5px solid rgba(56, 189, 248, 0.35); border-radius: var(--radius-md); padding: 16px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="position: absolute; top: 12px; right: 12px; background: #0284c7; color: #ffffff; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
                ⏳ СКОРО В АЛЬТЕР-НАЙМЕ
              </div>

              <div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 52px; height: 52px; border-radius: 8px; overflow: hidden; background: rgba(0,0,0,0.5); border: 2px solid #38bdf8; flex-shrink: 0;">
                    <img src="assets/img/characters/M12303_000_1__single_part1_1@1.png" alt="Troll Sorceress Alter" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';">
                  </div>
                  <div>
                    <div style="font-size: 18px; font-weight: 800; color: #ffffff;">🧌 Троллиха [Альтер]</div>
                    <div style="font-size: 12px; color: #7dd3fc; font-weight: 600;">Troll Sorceress Alter • ID: M12303_000</div>
                    <div style="display: flex; gap: 6px; margin-top: 3px;">
                      <span class="tag-badge" style="background: rgba(234, 179, 8, 0.25); color: #facc15; font-weight: 800; font-size: 10.5px; padding: 1px 6px;">S★</span>
                      <span class="tag-badge" style="background: rgba(239, 68, 68, 0.2); color: #fca5a5; font-size: 10.5px; padding: 1px 6px;">🔥 Огонь / Альтер</span>
                    </div>
                  </div>
                </div>

                <div style="font-size: 13px; line-height: 1.6; color: #e2e8f0; background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: var(--radius-sm);">
                  🎯 <strong>Следующая ротация:</strong> планируемый повышенный шанс в Альтер-Найме (Alter ID: M12303_000).<br>
                  <div style="margin-top: 4px; font-size: 12px; color: #cbd5e1;">
                    Валюта: <span class="guide-entity-chip guide-chip-stone" onclick="App.openItemModal('consumables', 'D00006_032')">🔮 Альтер-билет для найма</span> или <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal('consumables', 'D00001_000')">💎 Самоцветы</span>
                  </div>
                </div>
              </div>

              <div style="margin-top: 14px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
                <span style="font-size: 12px; color: #bae6fd; font-weight: 600;">📅 03.09.2026 — 24.09.2026</span>
                <button class="action-btn primary-btn" onclick="App.openCharacterModal('M12303_000')" style="font-size: 11.5px; padding: 4px 12px; background: rgba(56,189,248,0.25); border-color: #38bdf8; color: #fff;">
                  Профиль героини ➔
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- 1. Standard Character Collapsible Grid (Collapsed by Default) -->
        <details class="guide-collapse-block guide-card" style="padding: 0; background: var(--bg-surface); border: 1px solid var(--border-subtle); margin-bottom: 20px;">
          <summary class="guide-collapse-summary" style="background: rgba(30, 41, 59, 0.4);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 18px;">📜</span>
              <div>
                <div style="font-size: 15px; font-weight: 800; color: #ffffff;">
                  ${isRu ? 'Базовые Вероятности Призыва (Стандартный Пул)' : isCn ? '基础招募卡池全角色概率图鉴' : 'Standard Summon Pool & Drop Rates'}
                </div>
                <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                  ${isRu ? '144 героини • Призыв за <span class="guide-entity-chip guide-chip-ration" onclick="event.stopPropagation(); App.openItemModal(\\'consumables\\', \\'D00006_031\\')">🎫 Билеты для найма</span> или <span class="guide-entity-chip guide-chip-gem" onclick="event.stopPropagation(); App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 Самоцветы</span>' : isCn ? '144名基础角色 • 消耗推荐信或钻石' : '144 heroes • Recruits via tickets and gems'}
                </div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 12px; color: #38bdf8; font-weight: 600;">${isRu ? 'Нажмите, чтобы развернуть' : isCn ? '点击展开' : 'Click to Expand'}</span>
              <span class="guide-collapse-arrow">▼</span>
            </div>
          </summary>

          <div class="guide-collapse-body" style="padding: 16px 18px;">
            ${renderCharGrid(stdChars)}
          </div>
        </details>

        <!-- 2. Alter Character Collapsible Grid (Collapsed by Default) -->
        <details class="guide-collapse-block guide-card" style="padding: 0; background: var(--bg-surface); border: 1px solid rgba(168, 85, 247, 0.35); margin-bottom: 20px;">
          <summary class="guide-collapse-summary" style="background: rgba(168, 85, 247, 0.08);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 18px;">🔮</span>
              <div>
                <div style="font-size: 15px; font-weight: 800; color: #c084fc;">
                  ${isRu ? 'Альтер-Наем: Все Вероятности и Персонажи (Альтер Пул)' : isCn ? '异格招募卡池全角色概率图鉴' : 'Alter Summon Pool & Drop Rates'}
                </div>
                <div style="font-size: 12px; color: #d8b4fe; margin-top: 2px;">
                  ${isRu ? '60 уникальных Альтер-форм • Призыв за <span class="guide-entity-chip guide-chip-stone" onclick="event.stopPropagation(); App.openItemModal(\\'consumables\\', \\'D00006_032\\')">🔮 Альтер-билеты</span> или <span class="guide-entity-chip guide-chip-gem" onclick="event.stopPropagation(); App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 Самоцветы</span>' : isCn ? '60名专属异格角色 • 消耗异化推荐信或钻石' : '60 unique Alter heroes • Recruits via Alter Tickets and Gems'}
                </div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 12px; color: #c084fc; font-weight: 600;">${isRu ? 'Нажмите, чтобы развернуть' : isCn ? '点击展开' : 'Click to Expand'}</span>
              <span class="guide-collapse-arrow">▼</span>
            </div>
          </summary>

          <div class="guide-collapse-body" style="padding: 16px 18px;">
            ${renderCharGrid(alterChars)}
          </div>
        </details>

        <!-- 3. Alter Summon Rotation Schedule Table (Collapsed by Default) -->
        <details class="guide-collapse-block guide-card" style="padding: 0; background: var(--bg-surface); border: 1px solid rgba(168, 85, 247, 0.35); margin-bottom: 20px;">
          <summary class="guide-collapse-summary" style="background: rgba(168, 85, 247, 0.08);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 18px;">📅</span>
              <div>
                <div style="font-size: 15px; font-weight: 800; color: #c084fc;">
                  ${isRu ? 'Расписание Ротации и Rate-Up Альтер-Найма (Alter Summon Schedule)' : isCn ? '异格招募UP轮替时间表' : 'Alter Summon Rate-Up Schedule'}
                </div>
                <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                  ${isRu ? 'Периоды повышенных шансов на Альтер-формы героинь' : isCn ? '异格角色限时UP周期' : 'Alter rate-up periods and pool status'}
                </div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 12px; color: #c084fc; font-weight: 600;">${isRu ? 'Нажмите, чтобы развернуть' : isCn ? '点击展开' : 'Click to Expand'}</span>
              <span class="guide-collapse-arrow">▼</span>
            </div>
          </summary>

          <div class="guide-collapse-body" style="padding: 16px 18px;">
            <div class="guide-table-wrapper">
              <table class="guide-table" style="width: 100%;">
                <thead>
                  <tr>
                    <th>${isRu ? 'Альтер-героиня' : isCn ? '异格角色' : 'Alter Heroine'}</th>
                    <th>${isRu ? 'Ранг' : isCn ? '阶级' : 'Rank'}</th>
                    <th>${isRu ? 'ID Альтера' : isCn ? '异格ID' : 'Alter ID'}</th>
                    <th>${isRu ? 'Период Up-шанса' : isCn ? 'UP周期' : 'Rate-Up Duration'}</th>
                    <th>${isRu ? 'Статус' : isCn ? '状态' : 'Status'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M13307_000')">🌹 Владычица роз [Альтер] (Rose Sovereign)</span></td>
                    <td><span class="tag-badge" style="color: #facc15;">S</span></td>
                    <td style="font-family: monospace; color: #c084fc;">M13307_000</td>
                    <td>13.08.2026 — 03.09.2026</td>
                    <td><span style="color: #22c55e; font-weight: 700;">🔥 Активен</span></td>
                  </tr>
                  <tr>
                    <td><span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M12303_000')">🧌 Троллиха-чародейка [Альтер] (Troll Sorceress)</span></td>
                    <td><span class="tag-badge" style="color: #facc15;">S</span></td>
                    <td style="font-family: monospace; color: #c084fc;">M12303_000</td>
                    <td>03.09.2026 — 24.09.2026</td>
                    <td><span style="color: #facc15; font-weight: 700;">⏳ Скоро</span></td>
                  </tr>
                  <tr>
                    <td><span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M11303_002')">⛄ Снежный рыцарь [Альтер] (Snowman Knightess)</span></td>
                    <td><span class="tag-badge" style="color: #facc15;">S</span></td>
                    <td style="font-family: monospace; color: #c084fc;">M11303_002</td>
                    <td>Постоянно в пуле</td>
                    <td><span style="color: #38bdf8;">В постоянном Альтер-пуле</span></td>
                  </tr>
                  <tr>
                    <td><span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M54301_000')">🌿 Лесные нимфы [Альтер] (Forest Nymphs)</span></td>
                    <td><span class="tag-badge" style="color: #facc15;">S</span></td>
                    <td style="font-family: monospace; color: #c084fc;">M54301_000</td>
                    <td>Постоянно в пуле</td>
                    <td><span style="color: #38bdf8;">В постоянном Альтер-пуле</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>

      </div>
    `;
  },
"""
