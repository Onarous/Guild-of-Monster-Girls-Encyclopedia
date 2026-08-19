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
    const hasRates = Object.values(rates).some(v => v > 0);

    const equips = tile.possible_equips || [];
    const chests = tile.possible_chests || [];
    const mats = Array.isArray(tile.materials) ? tile.materials : (tile.materials?.[lang] || tile.materials?.RU || tile.materials?.CN || []);
    const dropsSummary = Array.isArray(tile.drops_summary) ? tile.drops_summary : (tile.drops_summary?.[lang] || tile.drops_summary?.RU || tile.drops_summary?.CN || []);
    const biomesList = Array.isArray(tile.biomes) ? tile.biomes : (tile.biomes?.[lang] || tile.biomes?.RU || tile.biomes?.CN || []);

    return `
      <div class="modal-dialog" style="max-width: 680px;">
        <div class="modal-header">
          <div class="modal-title-group">
            <div class="modal-title" style="display: flex; align-items: center; gap: 8px;">
              <span>${icon}</span> <span>${this.escapeHtml(name)}</span>
            </div>
            <div class="modal-subtitle">ID: ${tile.id} &bull; ${this.escapeHtml(catName)} &bull; ${tile.size_str || '1x1'}</div>
          </div>
          <button class="modal-close-btn" onclick="App.closeModal()">&times;</button>
        </div>

        <div class="modal-body" style="display: flex; flex-direction: column; gap: 14px;">
          
          <!-- Description Block -->
          <div style="background: var(--bg-surface-elevated); padding: 14px; border-radius: var(--radius-md); font-size: 13.5px; line-height: 1.6; border: 1px solid var(--border-subtle);">
            ${this.escapeHtml(desc) || (isRu ? 'Особое интерактивное место на карте приключений.' : isCn ? '大地图探索专属地块。' : 'Special adventure map location.')}
          </div>

          <!-- Drops Summary Highlights -->
          ${dropsSummary.length > 0 ? `
            <div style="background: rgba(56, 189, 248, 0.08); border-left: 3px solid #38bdf8; padding: 10px 14px; border-radius: var(--radius-sm); font-size: 12.5px; line-height: 1.6; color: #bae6fd;">
              <strong style="color: #38bdf8;">📌 ${isRu ? 'Особенности добычи и правила клетки:' : isCn ? '地块机制与产出特性：' : 'Spot Mechanics & Rewards:'}</strong>
              <div style="margin-top: 4px;">
                ${dropsSummary.map(s => `<div>• ${this.escapeHtml(s)}</div>`).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Drop Category Rates Breakdown Bar -->
          ${hasRates ? `
            <div class="detail-section" style="background: rgba(15, 23, 42, 0.7); padding: 12px 14px; border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.06);">
              <div class="section-heading" style="font-size: 13px; font-weight: 800; color: #f1f5f9; margin-bottom: 8px;">
                📊 ${isRu ? 'Вероятности категорий дропа' : isCn ? '掉落大类概率分布' : 'Category Drop Rates'}
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 8px; font-size: 12px;">
                ${rates.chest > 0 ? `
                  <span style="background: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.4); color: #c084fc; padding: 4px 8px; border-radius: 4px; font-weight: 700;">
                    📦 ${isRu ? 'Сундуки' : isCn ? '宝箱' : 'Chests'}: ${rates.chest}%
                  </span>
                ` : ''}
                ${rates.equip > 0 ? `
                  <span style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.4); color: #f87171; padding: 4px 8px; border-radius: 4px; font-weight: 700;">
                    ⚔️ ${isRu ? 'Экипировка' : isCn ? '装备' : 'Equipment'}: ${rates.equip}%
                  </span>
                ` : ''}
                ${rates.materials > 0 ? `
                  <span style="background: rgba(34, 197, 94, 0.15); border: 1px solid rgba(34, 197, 94, 0.4); color: #86efac; padding: 4px 8px; border-radius: 4px; font-weight: 700;">
                    🌿 ${isRu ? 'Материалы' : isCn ? '材料' : 'Materials'}: ${rates.materials}%
                  </span>
                ` : ''}
                ${rates.stones > 0 ? `
                  <span style="background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.4); color: #7dd3fc; padding: 4px 8px; border-radius: 4px; font-weight: 700;">
                    🪨 ${isRu ? 'Камни Наследия' : isCn ? '传承石' : 'Legacy Stones'}: ${rates.stones}%
                  </span>
                ` : ''}
                ${rates.gold > 0 ? `
                  <span style="background: rgba(234, 179, 8, 0.15); border: 1px solid rgba(234, 179, 8, 0.4); color: #facc15; padding: 4px 8px; border-radius: 4px; font-weight: 700;">
                    🪙 ${isRu ? 'Золото' : isCn ? '金币' : 'Gold'}: ${rates.gold}%
                  </span>
                ` : ''}
                ${rates.role > 0 ? `
                  <span style="background: rgba(236, 72, 153, 0.15); border: 1px solid rgba(236, 72, 153, 0.4); color: #f472b6; padding: 4px 8px; border-radius: 4px; font-weight: 700;">
                    👑 ${isRu ? 'Героини' : isCn ? '角色' : 'Heroes'}: ${rates.role}%
                  </span>
                ` : ''}
              </div>
            </div>
          ` : ''}

          <!-- Equipment Drop Table (Chest-Loot-Grid) -->
          ${equips.length > 0 ? `
            <div class="detail-section">
              <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 13px; font-weight: 800; color: #facc15;">
                  ⚔️ ${isRu ? 'Возможный дроп экипировки' : isCn ? '可能掉落装备' : 'Possible Equipment Drops'} (${equips.length})
                </span>
                <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">
                  💡 ${isRu ? 'Кликните по предмету для просмотра карточки' : isCn ? '点击查看装备属性' : 'Click item to inspect'}
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

          <!-- Chests Drop Table (Chest-Loot-Grid) -->
          ${chests.length > 0 ? `
            <div class="detail-section">
              <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 13px; font-weight: 800; color: #c084fc;">
                  📦 ${isRu ? 'Выпадающие сундуки' : isCn ? '可能掉落宝箱' : 'Droppable Chests'} (${chests.length})
                </span>
                <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">
                  💡 ${isRu ? 'Кликните по сундуку для просмотра лута' : isCn ? '点击查看宝箱掉落' : 'Click chest to inspect'}
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

          <!-- Materials and Special Items -->
          ${mats.length > 0 ? `
            <div class="detail-section">
              <div class="section-heading" style="font-size: 13px; font-weight: 800; color: #38bdf8; margin-bottom: 6px;">
                💎 ${isRu ? 'Ресурсы и особые награды' : isCn ? '资源与特殊产出' : 'Resources & Special Drops'}
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${mats.map(m => `<span class="tag-badge" style="background: rgba(56, 189, 248, 0.15); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.3); font-size: 11.5px; padding: 3px 8px;">✨ ${this.escapeHtml(m)}</span>`).join('')}
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
