# -*- coding: utf-8 -*-

def get_helpers_code():
    return """
  renderTileModal(tile, lang = 'RU') {
    if (!tile) return '';
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const name = typeof tile.name === 'object' ? (tile.name[lang] || tile.name.RU || tile.id) : (tile.name || tile.id);
    const desc = typeof tile.description === 'object' ? (tile.description[lang] || tile.description.RU || '') : (tile.description || '');
    const catName = typeof tile.category_name === 'object' ? (tile.category_name[lang] || tile.category_name.RU || tile.category) : (tile.category_name || tile.category || 'Map Tile');

    return `
      <div class="modal-dialog" style="max-width: 600px;">
        <div class="modal-header">
          <div class="modal-title-group">
            <div class="modal-title">🗺️ ${this.escapeHtml(name)}</div>
            <div class="modal-subtitle">ID: ${tile.id} &bull; ${this.escapeHtml(catName)} &bull; ${tile.size_str || '1x1'}</div>
          </div>
          <button class="modal-close-btn" onclick="App.closeModal()">&times;</button>
        </div>
        <div class="modal-body">
          <div style="background: var(--bg-surface-elevated); padding: 14px; border-radius: var(--radius-md); font-size: 13.5px; line-height: 1.6; margin-bottom: 14px; border: 1px solid var(--border-subtle);">
            ${this.escapeHtml(desc) || (isRu ? 'Особое место на карте приключений.' : 'Special adventure map location.')}
          </div>

          ${tile.biomes && (tile.biomes.RU || tile.biomes.CN || Array.isArray(tile.biomes)) ? `
            <div class="detail-section" style="margin-bottom: 12px;">
              <div class="section-heading" style="font-size: 13px; font-weight: 700; color: #38bdf8; margin-bottom: 6px;">
                🌍 ${isRu ? 'Биомы появления' : isCn ? '出现区域' : 'Spawn Biomes'}
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${(Array.isArray(tile.biomes) ? tile.biomes : (tile.biomes[lang] || tile.biomes.RU || tile.biomes.CN || [])).map(b => `<span class="tag-badge" style="background: rgba(56,189,248,0.15); color: #7dd3fc; border: 1px solid rgba(56,189,248,0.3); font-size: 11px;">📍 ${this.escapeHtml(b)}</span>`).join('')}
              </div>
            </div>
          ` : ''}

          ${tile.drops && tile.drops.length > 0 ? `
            <div class="detail-section">
              <div class="section-heading" style="font-size: 13px; font-weight: 700; color: #facc15; margin-bottom: 6px;">
                🎁 ${isRu ? 'Возможный дроп и награды' : (isCn ? '可能掉落' : 'Possible Drops')}
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${tile.drops.map(d => `<span class="tag-badge" style="background: rgba(234, 179, 8, 0.15); color: #fde047; border: 1px solid rgba(234, 179, 8, 0.3);">💎 ${this.escapeHtml(d)}</span>`).join('')}
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
    const name = buff.name?.[lang] || buff.name?.RU || buff.id;
    const desc = buff.description?.[lang] || buff.description?.RU || '';

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
