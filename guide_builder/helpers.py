# -*- coding: utf-8 -*-

def get_helpers_code():
    return """
  renderTileModal(tile, lang = 'RU') {
    if (!tile) return '';
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const name = typeof tile.name === 'object' ? (tile.name[lang] || tile.name.RU || tile.name.CN || tile.id) : (tile.name || tile.id);
    const desc = typeof tile.description === 'object' ? (tile.description[lang] || tile.description.RU || tile.description.CN || '') : (tile.description || '');
    const catName = typeof tile.category_name === 'object' ? (tile.category_name[lang] || tile.category_name.RU || tile.category_name.CN || tile.category) : (tile.category_name || tile.category || 'Map Tile');
    const icon = tile.icon || (tile.category === 'altar' ? '🏛️' : tile.category === 'mimic' ? '🧰' : tile.category === 'resource' ? '💎' : tile.category === 'merchant' ? '🛒' : '🌟');

    const rates = tile.rates || {};
    const equips = tile.possible_equips || [];
    const chests = tile.possible_chests || [];
    const resources = tile.possible_resources || [];
    const goldDrop = tile.gold_drop || { amount_str: '0 🪙', rate: 0.0 };
    const dropsSummary = Array.isArray(tile.drops_summary) ? tile.drops_summary : (tile.drops_summary?.[lang] || tile.drops_summary?.RU || tile.drops_summary?.CN || []);
    const biomesList = Array.isArray(tile.biomes) ? tile.biomes : (tile.biomes?.[lang] || tile.biomes?.RU || tile.biomes?.CN || []);
    const iType = tile.interactive_type || '';

    const equipRate = rates.equip || (equips.length > 0 ? 10.0 : 0);
    const chestRate = rates.chest || (chests.length > 0 ? 35.0 : 0);
    const matRate = rates.materials || rates.stones || (resources.length > 0 ? 40.0 : 0);
    const goldRate = goldDrop.rate || 0.0;
    const hasCombatDrop = (equips.length > 0 || chests.length > 0 || (goldRate > 0 && !iType));

    return `
      <div class="modal-dialog" style="max-width: 680px;">
        <div class="modal-header">
          <div class="modal-title-group">
            <div class="modal-title" style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 24px;">${icon}</span> <span>${this.escapeHtml(name)}</span>
            </div>
            <div class="modal-subtitle">ID: ${tile.id} &bull; ${this.escapeHtml(catName)} &bull; ${tile.size_str || '1x1'}</div>
          </div>
          <button class="modal-close-btn" onclick="App.closeModal()">&times;</button>
        </div>

        <div class="modal-body" style="display: flex; flex-direction: column; gap: 16px;">
          
          <!-- Description Block -->
          <div style="background: var(--bg-surface-elevated); padding: 14px; border-radius: var(--radius-md); font-size: 13.5px; line-height: 1.6; border: 1px solid var(--border-subtle);">
            ${this.escapeHtml(desc) || (isRu ? 'Особое интерактивное место на карте приключений.' : isCn ? '大地图探索专属地块。' : 'Special adventure map location.')}
          </div>

          <!-- Interactive Mechanic Banner (for non-combat spots: Camp, Offer, Merchant, Altar) -->
          ${iType === 'offer' ? `
            <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(15, 23, 42, 0.95)); border: 1.5px solid rgba(236, 72, 153, 0.45); border-radius: var(--radius-md); padding: 14px 16px;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                <span style="font-size: 24px;">🎁</span>
                <span style="font-size: 14px; font-weight: 800; color: #f472b6;">
                  ${isRu ? 'Лимитированное предложение (Магазин на карте)' : isCn ? '限时特惠礼包 (地图专属商店)' : 'Limited Special Offer (Map Shop)'}
                </span>
              </div>
              <p style="font-size: 12.5px; color: #cbd5e1; line-height: 1.6; margin: 0;">
                ${isRu ? 'На этой клетке нет боевого дропа. При активации тайла открывается окно покупки редких акционных наборов за кристаллы (свитков найма, фрагментов героинь и ценных ресурсов со скидкой).' : isCn ? '该地块不产生战斗掉落。激活后将弹出专属限时特惠购买界面，可使用钻石折扣购买招募券、英雄碎片与高阶资源。' : 'This spot has no battle loot. Interacting opens a special discount shop to purchase summons, shards, and resources.'}
              </p>
            </div>
          ` : iType === 'camp' ? `
            <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(15, 23, 42, 0.95)); border: 1.5px solid rgba(34, 197, 94, 0.45); border-radius: var(--radius-md); padding: 14px 16px;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                <span style="font-size: 24px;">⛺</span>
                <span style="font-size: 14px; font-weight: 800; color: #86efac;">
                  ${isRu ? 'Безопасная база экспедиции (Лагерь)' : isCn ? '安全整备据点 (营地)' : 'Expedition Base Camp'}
                </span>
              </div>
              <p style="font-size: 12.5px; color: #cbd5e1; line-height: 1.6; margin: 0;">
                ${isRu ? 'Точка старта и перегруппировки на карте. На этой клетке нет врагов и боевого дропа — здесь игрок может свободно менять состав отряда, экипировку и планировать маршрут.' : isCn ? '探索的安全出发与整备据点。无战斗掉落，可在此自由调整编队阵容与装备配置。' : 'Safe starting and staging camp. No combat drops; configure party and equipment freely.'}
              </p>
            </div>
          ` : iType === 'merchant' ? `
            <div style="background: linear-gradient(135deg, rgba(234, 179, 8, 0.15), rgba(15, 23, 42, 0.95)); border: 1.5px solid rgba(234, 179, 8, 0.45); border-radius: var(--radius-md); padding: 14px 16px;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                <span style="font-size: 24px;">🛒</span>
                <span style="font-size: 14px; font-weight: 800; color: #facc15;">
                  ${isRu ? 'Магазин странствующего торговца' : isCn ? '游商地精商店' : 'Wandering Merchant Shop'}
                </span>
              </div>
              <p style="font-size: 12.5px; color: #cbd5e1; line-height: 1.6; margin: 0;">
                ${isRu ? 'Предметы не выпадают в бою, а покупаются в магазине за золото, самоцветы и рыбьи фишки (сундуки со снаряжением, фрагменты героинь и материалы).' : isCn ? '物品非战斗掉落，而是通过消耗金币、钻石或鱼干在商店中直接兑换购买。' : 'Items do not drop from battle; purchase them directly with gold, gems, and fish tokens.'}
              </p>
            </div>
          ` : iType === 'blessing' ? `
            <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(15, 23, 42, 0.95)); border: 1.5px solid rgba(168, 85, 247, 0.45); border-radius: var(--radius-md); padding: 14px 16px;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                <span style="font-size: 24px;">✨</span>
                <span style="font-size: 14px; font-weight: 800; color: #c084fc;">
                  ${isRu ? 'Священный алтарь возрождения' : isCn ? '英灵复活祭坛' : 'Heroine Resurrection Altar'}
                </span>
              </div>
              <p style="font-size: 12.5px; color: #cbd5e1; line-height: 1.6; margin: 0;">
                ${isRu ? 'Интерактивный алтарь. Мгновенно воскрешает всех павших героинь вашего отряда с полным здоровьем, восстанавливает 100 выносливости и наделяет боевым благословением.' : isCn ? '交互式祭坛。瞬间复活队伍中所有阵亡英雄并补满生命，恢复100体力并赋予强力祝福。' : 'Instantly revives all fallen party members with full HP, restores 100 stamina, and grants combat blessings.'}
              </p>
            </div>
          ` : iType === 'oracle' ? `
            <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(15, 23, 42, 0.95)); border: 1.5px solid rgba(56, 189, 248, 0.45); border-radius: var(--radius-md); padding: 14px 16px;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                <span style="font-size: 24px;">🔮</span>
                <span style="font-size: 14px; font-weight: 800; color: #38bdf8;">
                  ${isRu ? 'Стела пророчества и оракула' : isCn ? '预言与斥候石碑' : 'Prophecy Oracle Stele'}
                </span>
              </div>
              <p style="font-size: 12.5px; color: #cbd5e1; line-height: 1.6; margin: 0;">
                ${isRu ? 'Интерактивная стела. Развеивает туман войны на 5 клеток вокруг, подсвечивает спрятанные сокровища и наделяет отряд баффом (+20% к общему урону и +15% к шансу крита).' : isCn ? '预言石碑。驱散周围5格战争迷雾，探测隐藏宝箱，并赋予全队全伤害+20%与暴击率+15%增益。' : 'Dispels fog of war in 5 tiles, reveals hidden chests, and grants +20% DMG & +15% CRIT rate.'}
              </p>
            </div>
          ` : ''}

          <!-- Drops Summary Highlights -->
          ${dropsSummary.length > 0 ? `
            <div style="background: rgba(56, 189, 248, 0.08); border-left: 3px solid #38bdf8; padding: 10px 14px; border-radius: var(--radius-sm); font-size: 12.5px; line-height: 1.6; color: #bae6fd;">
              <strong style="color: #38bdf8;">📌 ${isRu ? 'Особенности добычи и правила клетки:' : isCn ? '地块机制与产出特性：' : 'Spot Mechanics & Rewards:'}</strong>
              <div style="margin-top: 4px;">
                ${dropsSummary.map(s => `<div>• ${this.escapeHtml(s)}</div>`).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Gold Drop Highlight Card (only if tile can drop gold) -->
          ${(goldRate > 0 && !iType) ? `
            <div style="background: linear-gradient(135deg, rgba(234, 179, 8, 0.15), rgba(15, 23, 42, 0.95)); border: 1.5px solid rgba(234, 179, 8, 0.4); border-radius: var(--radius-md); padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 26px;">🪙</span>
                <div>
                  <div style="font-size: 13px; font-weight: 800; color: #facc15;">
                    ${isRu ? 'Дроп Золота с клетки' : isCn ? '地块金币产出' : 'Gold Drop Output'}
                  </div>
                  <div style="font-size: 12px; color: #fef08a; margin-top: 2px;">
                    ${isRu ? 'Возможная сумма:' : isCn ? '预估产出金额：' : 'Estimated Amount:'} <strong style="font-size: 14px; color: #ffffff; font-family: monospace;">${goldDrop.amount_str}</strong>
                  </div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 6px;">
                <span class="tag-badge" style="background: rgba(234, 179, 8, 0.25); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.5); font-size: 12px; font-weight: 800; padding: 3px 10px; border-radius: 6px;">
                  ${isRu ? 'Шанс выпадения' : isCn ? '掉落概率' : 'Drop Rate'}: ${goldRate}%
                </span>
              </div>
            </div>
          ` : ''}

          <!-- 1. Equipment Drop Table (Chest-Loot-Grid) -->
          ${equips.length > 0 ? `
            <div class="detail-section">
              <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 13.5px; font-weight: 800; color: #f87171;">
                    ⚔️ ${isRu ? 'Возможный дроп экипировки' : isCn ? '可能掉落装备' : 'Possible Equipment Drops'} (${equips.length})
                  </span>
                  <span class="tag-badge" style="background: rgba(239, 68, 68, 0.18); color: #fca5a5; border: 1px solid rgba(239, 68, 68, 0.4); font-size: 11.5px; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
                    ${isRu ? 'Шанс дропа' : isCn ? '概率' : 'Rate'}: ${equipRate}%
                  </span>
                </div>
                <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">
                  💡 ${isRu ? 'Кликните для просмотра карточки' : isCn ? '点击查看装备属性' : 'Click item to inspect'}
                </span>
              </div>
              
              <div class="chest-loot-grid" style="max-height: 220px;">
                ${equips.map(eq => {
                  const eqName = typeof eq.name === 'object' ? (eq.name[lang] || eq.name.RU || eq.name.CN || eq.id) : (eq.name || eq.id);
                  const eqStep = eq.step || 'C';
                  const eqTierClass = `loot-tier-${eqStep.toLowerCase()}`;
                  const eqIcon = `assets/img/items/${eq.id}.png`;
                  const eqSlot = eq.slot ? ` • ${eq.slot}` : '';
                  const tooltip = `${eqName} [${eqStep}★]${eqSlot}`;
                  return `
                    <div class="loot-tile ${eqTierClass}" title="${this.escapeHtml(tooltip)}" onclick="App.openItemModal('${eq.category || 'equipment'}', '${eq.id}')">
                      <div class="loot-tile-icon-box">
                        <img class="loot-tile-img" src="${eqIcon}" alt="${this.escapeHtml(eqName)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="fallback-thumb" style="display: none; font-size: 16px;">⚔️</div>
                      </div>
                      <div class="loot-tile-tier">${eqStep}★</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- 2. Chests Drop Table (Chest-Loot-Grid) -->
          ${chests.length > 0 ? `
            <div class="detail-section">
              <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 13.5px; font-weight: 800; color: #c084fc;">
                    📦 ${isRu ? 'Выпадающие сундуки' : isCn ? '可能掉落宝箱' : 'Droppable Chests'} (${chests.length})
                  </span>
                  <span class="tag-badge" style="background: rgba(168, 85, 247, 0.18); color: #d8b4fe; border: 1px solid rgba(168, 85, 247, 0.4); font-size: 11.5px; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
                    ${isRu ? 'Шанс дропа' : isCn ? '概率' : 'Rate'}: ${chestRate}%
                  </span>
                </div>
                <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">
                  💡 ${isRu ? 'Кликните для просмотра лута' : isCn ? '点击查看宝箱掉落' : 'Click chest to inspect'}
                </span>
              </div>
              
              <div class="chest-loot-grid" style="max-height: 160px;">
                ${chests.map(ch => {
                  const chName = typeof ch.name === 'object' ? (ch.name[lang] || ch.name.RU || ch.name.CN || ch.id) : (ch.name || ch.id);
                  const chStep = ch.step || 'C';
                  const chTierClass = `loot-tier-${chStep.toLowerCase()}`;
                  const chIcon = `assets/img/items/${ch.id}.png`;
                  const tooltip = `${chName} [${chStep}★]`;
                  return `
                    <div class="loot-tile ${chTierClass}" title="${this.escapeHtml(tooltip)}" onclick="App.openItemModal('chests', '${ch.id}')">
                      <div class="loot-tile-icon-box">
                        <img class="loot-tile-img" src="${chIcon}" alt="${this.escapeHtml(chName)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="fallback-thumb" style="display: none; font-size: 16px;">📦</div>
                      </div>
                      <div class="loot-tile-tier">${chStep}★</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- 3. Resources & Special Drops Table (Chest-Loot-Grid) -->
          ${resources.length > 0 ? `
            <div class="detail-section">
              <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 13.5px; font-weight: 800; color: #38bdf8;">
                    💎 ${isRu ? 'Ресурсы, камни и расходники' : isCn ? '资源、材料与消耗品' : 'Resources & Consumables'} (${resources.length})
                  </span>
                  <span class="tag-badge" style="background: rgba(56, 189, 248, 0.18); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.4); font-size: 11.5px; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
                    ${isRu ? 'Шанс дропа' : isCn ? '概率' : 'Rate'}: ${matRate}%
                  </span>
                </div>
                <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">
                  💡 ${isRu ? 'Кликните по ресурсу для карточки' : isCn ? '点击查看物品详情' : 'Click item to inspect'}
                </span>
              </div>
              
              <div class="chest-loot-grid" style="max-height: 180px;">
                ${resources.map(res => {
                  const resName = typeof res.name === 'object' ? (res.name[lang] || res.name.RU || res.name.CN || res.id) : (res.name || res.id);
                  const resStep = res.step || 'C';
                  const resTierClass = `loot-tier-${resStep.toLowerCase()}`;
                  const resIcon = `assets/img/items/${res.id}.png`;
                  const tooltip = res.amount_str ? `${resName} (${res.amount_str})` : `${resName} [${resStep}★]`;
                  return `
                    <div class="loot-tile ${resTierClass}" title="${this.escapeHtml(tooltip)}" onclick="App.openItemModal('${res.category || 'consumables'}', '${res.id}')">
                      <div class="loot-tile-icon-box">
                        <img class="loot-tile-img" src="${resIcon}" alt="${this.escapeHtml(resName)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="fallback-thumb" style="display: none; font-size: 16px;">💎</div>
                      </div>
                      <div class="loot-tile-tier">${resStep}★</div>
                      ${res.amount_str ? `<div class="loot-tile-qty" style="font-size: 8.5px;">${res.amount_str.split(' ')[0]}</div>` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Spawn Biomes -->
          ${biomesList.length > 0 ? `
            <div class="detail-section">
              <div class="section-heading" style="font-size: 13px; font-weight: 800; color: #86efac; margin-bottom: 6px;">
                🌍 ${isRu ? 'Биомы появления тайла' : isCn ? '出现区域/地图' : 'Spawn Biomes'} (${biomesList.length})
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 6px; max-height: 110px; overflow-y: auto;">
                ${biomesList.map(b => `<span class="tag-badge" style="background: rgba(34, 197, 94, 0.12); color: #86efac; border: 1px solid rgba(34, 197, 94, 0.25); font-size: 11px;">📍 ${this.escapeHtml(b)}</span>`).join('')}
              </div>
            </div>
          ` : ''}

        </div>
      </div>
    `;
  },

  renderBuffModal(buff, lang = 'RU') {
    if (!buff) return '';
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const name = buff.name?.[lang] || buff.name?.RU || buff.name?.CN || buff.id;
    const desc = buff.description?.[lang] || buff.description?.RU || buff.description?.CN || '';

    return `
      <div class="modal-dialog" style="max-width: 500px;">
        <div class="modal-header">
          <div class="modal-title-group">
            <div class="modal-title">✨ ${this.escapeHtml(name)}</div>
            <div class="modal-subtitle">${buff.type || 'Buff/Debuff'} &bull; ID: ${buff.id}</div>
          </div>
          <button class="modal-close-btn" onclick="App.closeModal()">&times;</button>
        </div>
        <div class="modal-body">
          <div style="background: var(--bg-surface-elevated); padding: 14px; border-radius: var(--radius-md); font-size: 13.5px; line-height: 1.5;">
            ${this.escapeHtml(desc)}
          </div>
        </div>
      </div>
    `;
  },

  escapeHtml(str) {
    if (!str || typeof str !== 'string') return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};

if (typeof window !== 'undefined') {
  window.GuidesView = GuidesView;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GuidesView;
}
"""
