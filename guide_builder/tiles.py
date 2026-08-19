# -*- coding: utf-8 -*-

def get_tiles_code():
    return """
  // 2. Interactive Map Tiles Atlas (184 Tiles with Categories & Search)
  getTilesContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const tiles = (typeof App !== 'undefined' && App.state?.mapTiles && App.state.mapTiles.length)
      ? App.state.mapTiles
      : ((typeof defaultMapTiles !== 'undefined') ? defaultMapTiles : (this.defaultMapTiles || []));

    const filter = this.tilesFilter || 'all';
    const query = (this.tilesSearchQuery || '').toLowerCase().trim();

    let filtered = tiles.filter(t => {
      if (filter !== 'all' && t.category !== filter) return false;
      if (query) {
        const name = (typeof t.name === 'object' ? (t.name[lang] || t.name.RU || '') : (t.name || '')).toLowerCase();
        const desc = (typeof t.description === 'object' ? (t.description[lang] || t.description.RU || '') : (t.description || '')).toLowerCase();
        const catName = (typeof t.category_name === 'object' ? (t.category_name[lang] || t.category_name.RU || '') : (t.category_name || '')).toLowerCase();
        const id = String(t.id || '').toLowerCase();
        if (!name.includes(query) && !desc.includes(query) && !catName.includes(query) && !id.includes(query)) return false;
      }
      return true;
    });

    const categories = [
      { key: 'all', label: isRu ? 'Все клетки' : (isCn ? '全部地块' : 'All Tiles'), count: tiles.length },
      { key: 'special', label: isRu ? '🌟 Особые & Тайники' : (isCn ? '🌟 圣所与特殊' : '🌟 Special & Sanctuaries'), count: tiles.filter(t => t.category === 'special').length },
      { key: 'altar', label: isRu ? '🏛️ Алтари & Стелы' : (isCn ? '🏛️ 祭坛与石碑' : '🏛️ Altars & Steles'), count: tiles.filter(t => t.category === 'altar').length },
      { key: 'mimic', label: isRu ? '🧰 Мимики & Сундуки' : (isCn ? '🧰 宝箱怪与宝藏' : '🧰 Mimics & Chests'), count: tiles.filter(t => t.category === 'mimic').length },
      { key: 'resource', label: isRu ? '💎 Сбор ресурсов' : (isCn ? '💎 资源采集' : '💎 Resource Nodes'), count: tiles.filter(t => t.category === 'resource').length },
      { key: 'merchant', label: isRu ? '🛒 Торговцы' : (isCn ? '🛒 游商地精' : '🛒 Merchants'), count: tiles.filter(t => t.category === 'merchant').length }
    ];

    return `
      <div class="guide-article">
        <h2 class="guide-title">🗺️ ${isRu ? 'Интерактивный Атлас Тайлов Карты (184 Клетки)' : isCn ? '大地图探索全地块交互图鉴 (184种)' : 'Interactive Adventure Map Tiles Atlas (184 Spots)'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Полный интерактивный каталог всех типов клеток карты приключений: безопасные лагеря, святилища, алтари наследия, сундуки-мимики, скрытые тайники и точки сбора ресурсов. Кликните по клетке для просмотра наград и дропа.' 
            : isCn 
            ? '冒险大地图全交互地块权威图鉴：安全营地、神秘圣所、传承祭坛、献祭宝箱怪、隐秘密藏与资源采集点。点击任意地块可查看详细奖励与掉落机制。' 
            : 'Complete interactive catalog of all adventure map spots: safe camps, sanctuaries, legacy altars, mimic chests, and resource harvest points. Click any spot to inspect drops.'}
        </p>

        <!-- Filters & Search Toolbar -->
        <div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 18px 0; align-items: center; justify-content: space-between;">
          <div class="pill-group" style="margin: 0; display: flex; flex-wrap: wrap; gap: 6px;">
            ${categories.map(c => `
              <button class="filter-pill ${filter === c.key ? 'active' : ''}" onclick="GuidesView.setTilesFilter('${c.key}')" style="font-size: 12px; padding: 5px 12px; cursor: pointer;">
                ${c.label} <span style="opacity: 0.7; font-weight: 700;">(${c.count})</span>
              </button>
            `).join('')}
          </div>
          <div style="min-width: 220px; flex: 1; max-width: 320px;">
            <input type="text" id="tilesSearchInput" class="search-input" placeholder="${isRu ? 'Поиск тайла по имени/ID...' : isCn ? '搜索地块名称/ID...' : 'Search spot name or ID...'}" value="${this.escapeHtml(this.tilesSearchQuery)}" oninput="GuidesView.setTilesSearch(this.value)" style="width: 100%; padding: 7px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); background: var(--bg-surface-elevated); color: #fff; font-size: 13px;">
          </div>
        </div>

        <!-- Counter & Results stats -->
        <div style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 12px;">
          ${isRu ? 'Найдено клеток:' : isCn ? '匹配地块数：' : 'Found spots:'} <strong style="color: #38bdf8;">${filtered.length}</strong>
        </div>

        <!-- Tiles Cards Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px;">
          ${filtered.map(t => {
            const name = typeof t.name === 'object' ? (t.name[lang] || t.name.RU || t.id) : (t.name || t.id);
            const desc = typeof t.description === 'object' ? (t.description[lang] || t.description.RU || '') : (t.description || '');
            const catName = typeof t.category_name === 'object' ? (t.category_name[lang] || t.category_name.RU || t.category) : (t.category_name || t.category || '');
            const icon = t.icon || (t.category === 'altar' ? '🏛️' : t.category === 'mimic' ? '🧰' : t.category === 'resource' ? '💎' : t.category === 'merchant' ? '🛒' : '🌟');
            const sizeBadge = t.size_str || (t.sizes ? t.sizes.join('x') : '1x1');

            return `
              <div class="guide-card" style="padding: 14px; margin: 0; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.15s ease, border-color 0.15s ease;" onclick="App.openTileModal('${t.id}')" onmouseover="this.style.borderColor='#38bdf8'; this.style.transform='translateY(-2px)';" onmouseout="this.style.borderColor='var(--border-subtle)'; this.style.transform='translateY(0)';">
                <div>
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                      <span style="font-size: 22px; line-height: 1;">${icon}</span>
                      <span style="font-size: 14px; font-weight: 700; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${this.escapeHtml(name)}">
                        ${this.escapeHtml(name)}
                      </span>
                    </div>
                    <span class="tag-badge" style="font-size: 10px; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 1px 6px; border-radius: 4px; flex-shrink: 0;">
                      ${sizeBadge}
                    </span>
                  </div>

                  <div style="display: flex; gap: 6px; margin-bottom: 8px; flex-wrap: wrap;">
                    <span style="font-size: 11px; font-weight: 600; color: #c084fc; background: rgba(168, 85, 247, 0.12); padding: 2px 6px; border-radius: 4px;">
                      ${this.escapeHtml(catName)}
                    </span>
                    <span style="font-size: 10.5px; font-family: monospace; color: var(--text-muted); background: rgba(0,0,0,0.3); padding: 2px 5px; border-radius: 4px;">
                      ${t.code || t.id}
                    </span>
                  </div>

                  <div style="font-size: 12px; color: #cbd5e1; line-height: 1.5; margin-bottom: 10px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; min-height: 36px;">
                    ${this.escapeHtml(desc) || (isRu ? 'Нажмите для подробного описания наград и шансов.' : 'Click for loot details and mechanics.')}
                  </div>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px; margin-top: 4px;">
                  <span style="font-size: 11px; color: var(--text-muted);">
                    ${t.is_special ? '✨ ' + (isRu ? 'Особый тайл' : 'Special Spot') : '🗺️ ' + (isRu ? 'Обычный тайл' : 'Standard Spot')}
                  </span>
                  <button class="action-btn" onclick="event.stopPropagation(); App.openTileModal('${t.id}')" style="font-size: 11px; padding: 3px 8px; background: rgba(56, 189, 248, 0.2); border: 1px solid #38bdf8; color: #38bdf8; border-radius: 4px; cursor: pointer;">
                    ${isRu ? 'Награды' : isCn ? '奖励详情' : 'Rewards'} ➔
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },
"""
