# -*- coding: utf-8 -*-

def get_events_code():
    return """
  // 12. Game Events & Activities (With Interactive Entity Links)
  getEventsContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    return `
      <div class="guide-article">
        <h2 class="guide-title">🎁 ${isRu ? 'Список игровых событий и Календарь активностей' : isCn ? '活动与限时事件列表 (Event Schedule)' : 'Game Events & Activities'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Актуальный график внутриигровых ивентов, временных рейдов, турниров гильдий и приоритеты обмена валюты в магазинах событий. Кликните по ресурсам для просмотра информации.' 
            : isCn 
            ? '最新限时活动排期、异界入侵团队副本、公会巅峰联赛与活动商店兑换优先级推荐。' 
            : 'Event schedules, limited raids, guild tournaments, and event shop exchange priority guidelines.'}
        </p>

        <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 20px;">
          
          <!-- Event 1: Isekai Raid -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #ef4444;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
              <div style="font-weight: 800; font-size: 15.5px; color: #fff;">🔥 ${isRu ? 'Исекай-рейд (Isekai Raid / 异界入侵)' : isCn ? '异界入侵 (Isekai Raid)' : 'Isekai Raid Event'}</div>
              <span class="tag-badge" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.4); font-weight: 700;">12.08.2026 — 23.09.2026</span>
            </div>
            <div style="font-size: 13px; color: #cbd5e1; margin-top: 6px; line-height: 1.6;">
              ${isRu ? 'Масштабный кросс-ивент. Сбор «Исекай-кристаллов льда» за зачистку рейдовых боссов и обмен в магазине события на эксклюзивные облики и красные артефакты.' : isCn ? '大型团队入侵副本。收集「异界冰晶」在限时商店兑换限定皮肤与神圣红装。' : 'Collect Isekai Ice Crystals to trade for exclusive skins and red artifacts in the event exchange shop.'}
            </div>
          </div>

          <!-- Event 2: Guild Tournament -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
              <div style="font-weight: 800; font-size: 15.5px; color: #fff;">🏆 ${isRu ? 'Чемпионат гильдий (Guild Championship / 公会争霸赛)' : isCn ? '公会争霸赛 (Guild Championship)' : 'Guild Championship'}</div>
              <span class="tag-badge" style="background: rgba(234, 179, 8, 0.15); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.4); font-weight: 700;">19.08 — 02.09</span>
            </div>
            <div style="font-size: 13px; color: #cbd5e1; margin-top: 6px; line-height: 1.6;">
              ${isRu ? 'Рейтинговый PvPvE турнир гильдий. Награды включают облик Хозяйки гильдии, золотые свитки найма и сундуки камней наследия.' : isCn ? '公会积分段位赛。奖励包含公会看板娘限定装扮、金色招募券与传承石宝箱。' : 'Ranked guild tournament. Rewards include Guildmaster skin, gold summon scrolls, and legacy stone chests.'}
            </div>
          </div>

          <!-- Event 3: Clockwork Trove -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #38bdf8;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
              <div style="font-weight: 800; font-size: 15.5px; color: #fff;">⚙️ ${isRu ? 'Заводной тайник (Clockwork Trove / 机巧宝库)' : isCn ? '机巧宝库 (Clockwork Trove)' : 'Clockwork Trove'}</div>
              <span class="tag-badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.4); font-weight: 700;">26.08 — 09.09</span>
            </div>
            <div style="font-size: 13px; color: #cbd5e1; margin-top: 6px; line-height: 1.6;">
              ${isRu ? 'Рулетка шестеренок и деталей для улучшения оборудования гильдии и получения золотых плодов таланта.' : isCn ? '公会机械零件转盘抽奖，产出稀有天赋果实与精炼石。' : 'Lucky spin event for gears, guild workshop upgrades, and gold talent fruits.'}
            </div>
          </div>

          <!-- Event 4: Guild Makeover -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #c084fc;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
              <div style="font-weight: 800; font-size: 15.5px; color: #fff;">🏰 ${isRu ? 'Преображение гильдии (Guild Makeover / 工会装扮)' : isCn ? '公会家园装扮 (Guild Makeover)' : 'Guild Makeover'}</div>
              <span class="tag-badge" style="background: rgba(168, 85, 247, 0.15); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.4); font-weight: 700;">09.09 — 23.09</span>
            </div>
            <div style="font-size: 13px; color: #cbd5e1; margin-top: 6px; line-height: 1.6;">
              ${isRu ? 'Кампания по открытию декораций, эксклюзивных фонов и стилей для базы гильдии.' : isCn ? '公会大厅个性化装扮与专属背景收集活动。' : 'Decorations, backgrounds, and themes for your custom guild base.'}
            </div>
          </div>

          <!-- Event Shop Priorities -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #22c55e; margin-top: 8px;">
            <div class="section-heading" style="color: #22c55e; font-size: 15px; margin-bottom: 8px;">
              🛒 ${isRu ? 'Приоритеты Обмена в Магазине События' : isCn ? '活动商店兑换优先级' : 'Event Shop Exchange Priority'}
            </div>
            <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-size: 13px; color: #cbd5e1; line-height: 1.7;">
              <span>1.</span> <span class="guide-entity-chip guide-chip-ration" onclick="App.openItemModal('consumables', 'D00005_021')">🍱 Большой припас</span> ➔ 
              <span>2.</span> <span class="guide-entity-chip guide-chip-fruit" onclick="App.openItemModal('consumables', 'D00002_001')">🍇 Плоды таланта</span> ➔ 
              <span>3.</span> <span>📜 Билеты найма</span> ➔ 
              <span>4.</span> <span class="guide-entity-chip guide-chip-stone" onclick="App.openItemModal('consumables', 'D00007_001')">💎 Камни наследия</span> ➔ 
              <span>5.</span> <span class="guide-entity-chip guide-chip-gold" onclick="App.openItemModal('consumables', 'D00000_000')">🪙 Золото</span>.
            </div>
          </div>

        </div>
      </div>
    `;
  },
"""
