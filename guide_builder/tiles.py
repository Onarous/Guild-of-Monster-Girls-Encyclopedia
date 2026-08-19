# -*- coding: utf-8 -*-

def get_tiles_code():
    return """
  // 2. Interactive Map Tiles Atlas (184 Tiles with Biome Filtering, Sorting & Search)
  getTilesContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const tiles = (typeof App !== 'undefined' && App.state?.mapTiles && App.state.mapTiles.length)
      ? App.state.mapTiles
      : ((typeof defaultMapTiles !== 'undefined') ? defaultMapTiles : (this.defaultMapTiles || []));

    const filter = this.tilesFilter || 'all';
    const biomeFilter = this.tilesBiomeFilter || 'all';
    const sortBy = this.tilesSortBy || 'default';
    const query = (this.tilesSearchQuery || '').toLowerCase().trim();

    // 14 Canonical Game Biomes
    const allBiomes = [
      { key: 'all', RU: 'Все локации', EN: 'All Locations', CN: '全部区域', icon: '🌍' },
      { key: '极寒冰原', RU: 'Морозная тундра', EN: 'Glacial Tundra', CN: '极寒冰原', icon: '❄️' },
      { key: '新生平原', RU: 'Рассветные равнины', EN: 'Dawnstep Plains', CN: '新生平原', icon: '🌅' },
      { key: '广袤草原', RU: 'Бескрайняя степь', EN: 'Vast Grassland', CN: '广袤草原', icon: '🌾' },
      { key: '迷失森林', RU: 'Блуждающий лес', EN: 'Lost Forest', CN: '迷失森林', icon: '🌲' },
      { key: '铁血高地', RU: 'Багровое нагорье', EN: 'Ironblood Highlands', CN: '铁血高地', icon: '🏰' },
      { key: '幽暗密林', RU: 'Роща теневой завесы', EN: 'Dark Jungle', CN: '幽暗密林', icon: '🌿' },
      { key: '废弃矿洞', RU: 'Заброшенные шахты', EN: 'Abandoned Mine', CN: '废弃矿洞', icon: '⛏️' },
      { key: '洞穴深处', RU: 'Глубокие лощины', EN: 'Deep Cave', CN: '洞穴深处', icon: '🕳️' },
      { key: '遗忘之海', RU: 'Затонувшее море', EN: 'Forgotten Sea', CN: '遗忘之海', icon: '🌊' },
      { key: '清凉沙滩', RU: 'Ветреные берега', EN: 'Cool Beach', CN: '清凉沙滩', icon: '🏖️' },
      { key: '荒凉戈壁', RU: 'Пепельные пустоши', EN: 'Desolate Gobi', CN: '荒凉戈壁', icon: '🏜️' },
      { key: '无尽荒漠', RU: 'Бескрайняя пустыня', EN: 'Endless Desert', CN: '无尽荒漠', icon: '🐪' },
      { key: '熔岩通道', RU: 'Магмовый проход', EN: 'Lava Pass', CN: '熔岩通道', icon: '🌋' },
      { key: '枯木丛林', RU: 'Увядший лес', EN: 'Deadwood Thicket', CN: '枯木丛林', icon: '🪵' }
    ];

    // Filter tiles
    let filtered = tiles.filter(t => {
      // 1. Category Filter
      if (filter !== 'all' && t.category !== filter) return false;
      
      // 2. Location / Biome Filter
      if (biomeFilter !== 'all') {
        const biomesCN = t.biomes?.CN || (Array.isArray(t.biomes) ? t.biomes : []);
        const biomesRU = t.biomes?.RU || [];
        const biomesEN = t.biomes?.EN || [];
        const matchesCN = biomesCN.includes(biomeFilter);
        const matchesRU = biomesRU.some(b => b.toLowerCase().includes(biomeFilter.toLowerCase()));
        const matchesEN = biomesEN.some(b => b.toLowerCase().includes(biomeFilter.toLowerCase()));
        if (!matchesCN && !matchesRU && !matchesEN) return false;
      }

      // 3. Search Query
      if (query) {
        const name = (typeof t.name === 'object' ? (t.name[lang] || t.name.RU || t.name.CN || '') : (t.name || '')).toLowerCase();
        const desc = (typeof t.description === 'object' ? (t.description[lang] || t.description.RU || t.description.CN || '') : (t.description || '')).toLowerCase();
        const catName = (typeof t.category_name === 'object' ? (t.category_name[lang] || t.category_name.RU || t.category_name.CN || '') : (t.category_name || '')).toLowerCase();
        const id = String(t.id || '').toLowerCase();
        const biomesStr = Array.isArray(t.biomes) ? t.biomes.join(' ') : Object.values(t.biomes || {}).flat().join(' ');
        if (!name.includes(query) && !desc.includes(query) && !catName.includes(query) && !id.includes(query) && !biomesStr.toLowerCase().includes(query)) {
          return false;
        }
      }
      return true;
    });

    // Sort tiles
    filtered.sort((a, b) => {
      if (sortBy === 'gold') {
        const ga = a.gold_drop?.max || 0;
        const gb = b.gold_drop?.max || 0;
        return gb - ga;
      }
      if (sortBy === 'equips') {
        const ea = (a.possible_equips || []).length;
        const eb = (b.possible_equips || []).length;
        return eb - ea;
      }
      if (sortBy === 'name') {
        const na = typeof a.name === 'object' ? (a.name[lang] || a.name.RU || a.id) : (a.name || a.id);
        const nb = typeof b.name === 'object' ? (b.name[lang] || b.name.RU || b.id) : (b.name || b.id);
        return String(na).localeCompare(String(nb));
      }
      if (sortBy === 'biome') {
        const ba = (a.biomes?.[lang] || a.biomes?.RU || [''])[0] || '';
        const bb = (b.biomes?.[lang] || b.biomes?.RU || [''])[0] || '';
        return String(ba).localeCompare(String(bb));
      }
      // Default: sort numerically by ID
      const numA = parseInt(String(a.id).replace(/\\D/g, '')) || 0;
      const numB = parseInt(String(b.id).replace(/\\D/g, '')) || 0;
      return numA - numB;
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
            ? 'Полный справочник клеток карты приключений: фильтрация по 14 биомам, категории тайлов, сортировка по золоту и луту. Кликните по клетке для просмотра таблицы экипировки, сундуков, ресурсов и шансов дропа.' 
            : isCn 
            ? '冒险大地图全交互地块权威图鉴：支持按14大区域/生物群系筛选、按金币与掉落量排序。点击任意地块查看专属掉落表、宝箱与概率。' 
            : 'Complete interactive catalog of adventure map spots with 14 biome location filters and sorting. Click any spot to inspect drop tables, chests, and rates.'}
        </p>

        <!-- Main Category Filter Pills -->
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 18px; margin-bottom: 14px;">
          ${categories.map(c => `
            <button class="filter-pill ${filter === c.key ? 'active' : ''}" onclick="GuidesView.setTilesFilter('${c.key}')" style="font-size: 12px; padding: 5px 12px; cursor: pointer;">
              ${c.label} <span style="opacity: 0.7; font-weight: 700;">(${c.count})</span>
            </button>
          `).join('')}
        </div>

        <!-- Controls Toolbar: Location Biome Selector, Sort Selector, Search Input -->
        <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: var(--radius-md); padding: 12px 16px; margin-bottom: 18px; display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between;">
          
          <!-- Location / Biome Selector -->
          <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 220px; max-width: 320px;">
            <span style="font-size: 13px; font-weight: 700; color: #86efac; white-space: nowrap;">
              📍 ${isRu ? 'Локация:' : isCn ? '区域/地图:' : 'Location:'}
            </span>
            <select onchange="GuidesView.setTilesBiomeFilter(this.value)" style="width: 100%; padding: 6px 10px; background: var(--bg-surface-elevated); border: 1px solid rgba(34, 197, 94, 0.4); border-radius: var(--radius-sm); color: #f1f5f9; font-size: 12.5px; font-weight: 600; cursor: pointer; outline: none;">
              ${allBiomes.map(b => {
                const bName = b[lang] || b.RU || b.CN;
                const isSelected = biomeFilter === b.key || (b.key === 'all' && biomeFilter === 'all');
                return `<option value="${b.key}" ${isSelected ? 'selected' : ''}>${b.icon} ${bName}</option>`;
              }).join('')}
            </select>
          </div>

          <!-- Sort Order Selector -->
          <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 200px; max-width: 280px;">
            <span style="font-size: 13px; font-weight: 700; color: #facc15; white-space: nowrap;">
              ⚡ ${isRu ? 'Сортировка:' : isCn ? '排序方式:' : 'Sort By:'}
            </span>
            <select onchange="GuidesView.setTilesSortBy(this.value)" style="width: 100%; padding: 6px 10px; background: var(--bg-surface-elevated); border: 1px solid rgba(234, 179, 8, 0.4); border-radius: var(--radius-sm); color: #f1f5f9; font-size: 12.5px; font-weight: 600; cursor: pointer; outline: none;">
              <option value="default" ${sortBy === 'default' ? 'selected' : ''}>🔢 ${isRu ? 'По номеру ID' : isCn ? '按编号' : 'By ID'}</option>
              <option value="biome" ${sortBy === 'biome' ? 'selected' : ''}>🌍 ${isRu ? 'По локации' : isCn ? '按区域地图' : 'By Location'}</option>
              <option value="gold" ${sortBy === 'gold' ? 'selected' : ''}>🪙 ${isRu ? 'По золоту (макс.)' : isCn ? '按金币收益' : 'By Gold (Max)'}</option>
              <option value="equips" ${sortBy === 'equips' ? 'selected' : ''}>⚔️ ${isRu ? 'По экипировке' : isCn ? '按装备数量' : 'By Gear Count'}</option>
              <option value="name" ${sortBy === 'name' ? 'selected' : ''}>🔤 ${isRu ? 'По названию (А–Я)' : isCn ? '按名称' : 'By Name'}</option>
            </select>
          </div>

          <!-- Search Input -->
          <div style="flex: 1; min-width: 200px; max-width: 320px;">
            <input type="text" id="tilesSearchInput" class="search-input" placeholder="${isRu ? 'Поиск клетки по названию/ID...' : isCn ? '搜索地块名称/ID...' : 'Search spot name or ID...'}" value="${this.escapeHtml(this.tilesSearchQuery)}" oninput="GuidesView.setTilesSearch(this.value)" style="width: 100%; padding: 6px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); background: var(--bg-surface-elevated); color: #fff; font-size: 12.5px;">
          </div>
        </div>

        <!-- Counter & Results stats -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; color: var(--text-muted); margin-bottom: 12px;">
          <div>
            ${isRu ? 'Отображается клеток:' : isCn ? '当前匹配地块数：' : 'Showing spots:'} <strong style="color: #38bdf8; font-size: 14px;">${filtered.length}</strong>
            ${biomeFilter !== 'all' ? ` • <span style="color: #86efac;">${allBiomes.find(b => b.key === biomeFilter)?.[lang] || biomeFilter}</span>` : ''}
          </div>
          ${(biomeFilter !== 'all' || filter !== 'all' || query) ? `
            <button onclick="GuidesView.tilesFilter='all'; GuidesView.tilesBiomeFilter='all'; GuidesView.tilesSearchQuery=''; GuidesView.render(GuidesView.lastContainerId, '${lang}');" style="background: none; border: none; color: #f87171; font-size: 12px; cursor: pointer; text-decoration: underline;">
              🔄 ${isRu ? 'Сбросить фильтры' : isCn ? '重置全部筛选' : 'Reset Filters'}
            </button>
          ` : ''}
        </div>

        <!-- Tiles Cards Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">
          ${filtered.map(t => {
            const name = typeof t.name === 'object' ? (t.name[lang] || t.name.RU || t.name.CN || t.id) : (t.name || t.id);
            const desc = typeof t.description === 'object' ? (t.description[lang] || t.description.RU || t.description.CN || '') : (t.description || '');
            const catName = typeof t.category_name === 'object' ? (t.category_name[lang] || t.category_name.RU || t.category_name.CN || t.category) : (t.category_name || t.category || '');
            const icon = t.icon || (t.category === 'altar' ? '🏛️' : t.category === 'mimic' ? '🧰' : t.category === 'resource' ? '💎' : t.category === 'merchant' ? '🛒' : '🌟');
            const sizeBadge = t.size_str || (t.sizes ? t.sizes.join('x') : '1x1');
            const biomes = Array.isArray(t.biomes) ? t.biomes : (t.biomes?.[lang] || t.biomes?.RU || t.biomes?.CN || []);
            const goldAmount = t.gold_drop?.amount_str || '800 – 2 500 🪙';
            const equipsCount = (t.possible_equips || []).length;
            const chestsCount = (t.possible_chests || []).length;

            return `
              <div class="guide-card" style="padding: 14px; margin: 0; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.15s ease, border-color 0.15s ease;" onclick="App.openTileModal('${t.id}')" onmouseover="this.style.borderColor='#38bdf8'; this.style.transform='translateY(-2px)';" onmouseout="this.style.borderColor='var(--border-subtle)'; this.style.transform='translateY(0)';">
                <div>
                  <!-- Card Header -->
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                      <span style="font-size: 24px; line-height: 1;">${icon}</span>
                      <span style="font-size: 14.5px; font-weight: 800; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${this.escapeHtml(name)}">
                        ${this.escapeHtml(name)}
                      </span>
                    </div>
                    <span class="tag-badge" style="font-size: 10px; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 1px 6px; border-radius: 4px; flex-shrink: 0;">
                      ${sizeBadge}
                    </span>
                  </div>

                  <!-- Subtitle Badges -->
                  <div style="display: flex; gap: 6px; margin-bottom: 8px; flex-wrap: wrap;">
                    <span style="font-size: 11px; font-weight: 700; color: #c084fc; background: rgba(168, 85, 247, 0.15); padding: 2px 7px; border-radius: 4px;">
                      ${this.escapeHtml(catName)}
                    </span>
                    <span style="font-size: 10.5px; font-family: monospace; color: var(--text-muted); background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px;">
                      ${t.code || t.id}
                    </span>
                  </div>

                  <!-- Location Biomes Preview -->
                  ${biomes.length > 0 ? `
                    <div style="font-size: 11.5px; color: #86efac; margin-bottom: 8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${biomes.join(', ')}">
                      📍 <strong>${isRu ? 'Локация:' : isCn ? '区域:' : 'Biome:'}</strong> ${this.escapeHtml(biomes[0])}${biomes.length > 1 ? ` (+${biomes.length - 1})` : ''}
                    </div>
                  ` : ''}

                  <!-- Drop Summary Stats Preview -->
                  <div style="background: rgba(0,0,0,0.25); padding: 6px 8px; border-radius: var(--radius-sm); margin-bottom: 8px; font-size: 11.5px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: space-between;">
                    <span style="color: #facc15; font-weight: 700;">🪙 ${goldAmount}</span>
                    <span style="color: #cbd5e1;">⚔️ ${equipsCount} ${isRu ? 'предметов' : isCn ? '件装备' : 'items'}</span>
                    ${chestsCount > 0 ? `<span style="color: #c084fc;">📦 ${chestsCount} ${isRu ? 'сунд.' : isCn ? '宝箱' : 'chests'}</span>` : ''}
                  </div>

                  <!-- Description -->
                  <div style="font-size: 12px; color: #94a3b8; line-height: 1.5; margin-bottom: 10px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                    ${this.escapeHtml(desc) || (isRu ? 'Нажмите для подробного описания наград и шансов.' : 'Click for loot details and mechanics.')}
                  </div>
                </div>

                <!-- Footer -->
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px; margin-top: 4px;">
                  <span style="font-size: 11px; color: var(--text-muted);">
                    ${t.is_special ? '✨ ' + (isRu ? 'Особый тайл' : 'Special Spot') : '🗺️ ' + (isRu ? 'Обычный тайл' : 'Standard Spot')}
                  </span>
                  <button class="action-btn" onclick="event.stopPropagation(); App.openTileModal('${t.id}')" style="font-size: 11px; padding: 4px 10px; background: rgba(56, 189, 248, 0.2); border: 1px solid #38bdf8; color: #38bdf8; border-radius: 4px; cursor: pointer; font-weight: 700;">
                    ${isRu ? 'Таблица дропа' : isCn ? '掉落全貌' : 'Drop Table'} ➔
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
