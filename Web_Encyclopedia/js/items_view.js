/**
 * Items & Equipment View Component for Guild of Monster Girls Web Encyclopedia
 * Supports 100% individual item sprites & icons across all categories with robust fallbacks.
 */

const ItemsView = {
  getItemIcon(item, category, imageMappings = {}) {
    if (!item) return null;
    const iid = item.id || item.key || item.icon;
    const itemMap = imageMappings && imageMappings.items ? imageMappings.items : {};
    const slotIcons = imageMappings && imageMappings.slot_icons ? imageMappings.slot_icons : {};

    // 1. Exact mapping lookup
    if (iid && itemMap[iid]) {
      return itemMap[iid];
    }

    // 2. Direct convention check (all extracted item icons are named <ID>.png)
    if (iid && typeof iid === 'string' && (iid.startsWith('Z') || iid.startsWith('F') || iid.startsWith('D') || iid.startsWith('B') || iid.startsWith('X') || iid.startsWith('cur_'))) {
      return `assets/img/items/${iid}.png`;
    }

    // 3. Slot icon lookup
    if (item.slot && slotIcons[item.slot]) {
      return slotIcons[item.slot];
    }

    // 4. Fallback slot icons by category / slot name
    const slotNorm = String(item.slot || '').toLowerCase();
    if (slotNorm.includes('оружие') || slotNorm.includes('weapon') || slotNorm.includes('main') || slotNorm.includes('武')) {
      return 'assets/img/items/cur_ico_equip_0001.png';
    }
    if (slotNorm.includes('второе') || slotNorm.includes('off') || slotNorm.includes('shield') || slotNorm.includes('副')) {
      return 'assets/img/items/cur_ico_equip_0002.png';
    }
    if (slotNorm.includes('доспех') || slotNorm.includes('броня') || slotNorm.includes('body') || slotNorm.includes('armor') || slotNorm.includes('胸') || slotNorm.includes('甲')) {
      return 'assets/img/items/cur_ico_equip_0004.png';
    }
    if (slotNorm.includes('шлем') || slotNorm.includes('head') || slotNorm.includes('helmet') || slotNorm.includes('头')) {
      return 'assets/img/items/cur_ico_equip_0005.png';
    }
    if (slotNorm.includes('обувь') || slotNorm.includes('сапог') || slotNorm.includes('boot') || slotNorm.includes('shoe') || slotNorm.includes('鞋')) {
      return 'assets/img/items/cur_ico_equip_1001.png';
    }
    if (slotNorm.includes('перчат') || slotNorm.includes('glove') || slotNorm.includes('gauntlet') || slotNorm.includes('手')) {
      return 'assets/img/items/cur_ico_equip_1002.png';
    }
    if (slotNorm.includes('пояс') || slotNorm.includes('belt') || slotNorm.includes('sash') || slotNorm.includes('腰')) {
      return 'assets/img/items/cur_ico_equip_1004.png';
    }
    if (category === 'runes' || slotNorm.includes('рун') || slotNorm.includes('rune') || slotNorm.includes('符')) {
      return 'assets/img/items/cur_ico_rune_0001.png';
    }

    return null;
  },

  _reverseChestMap: null,

  buildReverseChestMap(itemsData) {
    if (this._reverseChestMap) return this._reverseChestMap;
    const map = {};
    const chests = itemsData?.chests || [];
    for (const ch of chests) {
      const drops = ch.drop_table || [];
      for (const d of drops) {
        const did = d.id;
        if (did) {
          if (!map[did]) map[did] = [];
          if (!map[did].some(c => c.key === ch.key)) {
            map[did].push({
              key: ch.key,
              uid: ch.uid || `${ch.id}_${ch.step}`,
              id: ch.id,
              name: ch.name,
              step: ch.step || 'C'
            });
          }
        }
      }
    }
    if (chests.length > 0) {
      this._reverseChestMap = map;
    }
    return map;
  },

  getItemSourceSummary(item, category, currentLang = 'RU', itemsData = null) {
    if (!item) return '';
    const isRu = currentLang === 'RU';
    const isCn = currentLang === 'CN';
    const chestMap = this.buildReverseChestMap(itemsData || (typeof App !== 'undefined' ? App.state?.data?.items?.[currentLang] : null));
    const chestsFound = chestMap[item.id] || [];

    if (category === 'equipment') {
      const parts = [];
      const area = item.area_name;
      const src = item.source;
      if (area && area !== '不限' && area !== 'Все зоны' && area !== 'Any Zone') {
        parts.push(`🗺️ ${area}`);
      }
      if (src) {
        parts.push(src);
      } else {
        parts.push(isRu ? 'Исследование мира' : isCn ? '世界探索' : 'World Exploration');
      }
      if (chestsFound.length > 0) {
        parts.push(isRu ? `🎁 ${chestsFound.length} сунд.` : isCn ? `🎁 ${chestsFound.length}个宝箱` : `🎁 ${chestsFound.length} chests`);
      }
      return parts.join(' • ');
    } else if (category === 'relics') {
      const roles = item.specify_roles || [];
      if (roles.length > 0) {
        const rName = roles[0].split('(')[0].trim();
        return isRu ? `👑 4★ Возвышение (${rName})` : isCn ? `👑 4★突破专属 (${rName})` : `👑 4★ Ascension (${rName})`;
      }
      return isRu ? '🔮 Магазин прозрения / Подземелья' : isCn ? '🔮 信物商店 / 秘境奖励' : '🔮 Insight Shop / Dungeons';
    } else if (category === 'runes') {
      const chStr = chestsFound.length > 0 ? (isRu ? ` • 🎁 ${chestsFound.length} сунд.` : ` • 🎁 ${chestsFound.length} chests`) : '';
      return (isRu ? '🪨 Рунический алтарь / Награды битв' : isCn ? '🪨 符文祭坛 / 战斗掉落' : '🪨 Rune Altar / Battles') + chStr;
    } else if (category === 'ingredients') {
      const chStr = chestsFound.length > 0 ? (isRu ? ` • 🎁 ${chestsFound.length} сунд.` : ` • 🎁 ${chestsFound.length} chests`) : '';
      return (isRu ? '🌿 Сбор ресурсов / Дроп с монстров' : isCn ? '🌿 采集 / 怪物掉落' : '🌿 Gathering / Monsters') + chStr;
    } else if (category === 'special_items') {
      return isRu ? '✨ Задания / События / Магазин' : isCn ? '✨ 任务 / 活动 / 商店' : '✨ Quests / Events / Shop';
    } else if (category === 'chests') {
      const area = item.area_name;
      const areaStr = (area && area !== '不限' && area !== 'Все зоны' && area !== 'Any Zone') ? ` (${area})` : '';
      return (isRu ? `📦 Исследование мира${areaStr} / Квесты` : isCn ? `📦 世界探索${areaStr} / 战令 / 任务` : `📦 World Exploration${areaStr} / Quests`);
    } else if (category === 'godstones') {
      return isRu ? '💎 Алхимия / Божественный алтарь' : isCn ? '💎 炼金 / 神石祭坛' : '💎 Alchemy / Divine Altar';
    } else if (category === 'dungeon_relics') {
      const diff = item.difficulty ? ` (${item.difficulty})` : '';
      return isRu ? `🗝️ Roguelike-подземелья${diff}` : isCn ? `🗝️ 秘境肉鸽${diff}` : `🗝️ Roguelike Dungeons${diff}`;
    } else if (category === 'prefixes') {
      return isRu ? '🏷️ Ковка и перековка в кузнице' : isCn ? '🏷️ 铁匠铺锻造重铸' : '🏷️ Blacksmith Forging & Reforging';
    } else if (category === 'bonds') {
      return isRu ? '🔗 Комплект снаряжения (2, 4, 6 шт)' : isCn ? '🔗 装备套装羁绊 (2/4/6件)' : '🔗 Gear Set Synergy (2, 4, 6 pcs)';
    }
    return isRu ? '📦 Игровые активности' : '📦 Game Activities';
  },

  getCategoryLabel(category, currentLang = 'RU') {
    const isRu = currentLang === 'RU';
    const isCn = currentLang === 'CN';
    switch (category) {
      case 'equipment': return isRu ? '⚔️ Снаряжение' : (isCn ? '⚔️ 装备' : '⚔️ Equipment');
      case 'relics': return isRu ? '🔮 Прозрение' : (isCn ? '🔮 信物' : '🔮 Insight');
      case 'runes': return isRu ? '🪨 Руна' : (isCn ? '🪨 符文' : '🪨 Rune');
      case 'ingredients': return isRu ? '🌿 Материал' : (isCn ? '🌿 素材' : '🌿 Material');
      case 'special_items': return isRu ? '✨ Предмет' : (isCn ? '✨ 道具' : '✨ Special Item');
      case 'currency': return isRu ? '💰 Валюта' : (isCn ? '💰 货币' : '💰 Currency');
      case 'chests': return isRu ? '📦 Сундук' : (isCn ? '📦 宝箱' : '📦 Chest');
      case 'godstones': return isRu ? '💎 Камень' : (isCn ? '💎 神石' : '💎 Godstone');
      case 'dungeon_relics': return isRu ? '🗝️ Реликвия' : (isCn ? '🗝️ 遗物' : '🗝️ Relic');
      default: return isRu ? '📦 Предмет' : (isCn ? '📦 物品' : '📦 Item');
    }
  },

  getCategoryFallbackEmoji(category) {
    const emojis = {
      equipment: '⚔️',
      relics: '🔮',
      runes: '🪨',
      rune_materials: '💎',
      prefixes: '🏷️',
      bonds: '🔗',
      special_items: '💰',
      ingredients: '💎',
      chests: '📦',
      godstones: '⚡',
      dungeon_relics: '🗝️'
    };
    return emojis[category] || '📦';
  },

  itemsPerPage: 60,
  currentPage: 1,

  resetPagination() {
    this.currentPage = 1;
  },

  loadMore() {
    this.currentPage++;
    if (typeof App !== 'undefined' && App.render) {
      App.render();
    }
  },

  renderList(itemsData, category, containerId, currentLang = "RU", imageMappings = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const list = itemsData[category] || [];
    const dict = I18N[currentLang] || I18N.RU;

    if (!list || list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <div style="font-size: 40px; margin-bottom: 12px;">📦</div>
          <div style="font-size: 16px; font-weight: 600;">Ничего не найдено / No items found</div>
        </div>
      `;
      return;
    }

    const totalCount = list.length;
    const limit = this.currentPage * this.itemsPerPage;
    const visibleList = list.slice(0, limit);
    const hasMore = totalCount > limit;
    const remainingCount = totalCount - limit;

    const cardsHtml = visibleList.map(item => {
      const step = item.step || item.Step || 'C';
      const tierClass = `tier-${step.toLowerCase()}`;

      if (category === 'equipment') {
        return this.renderEquipCard(item, tierClass, dict, imageMappings);
      } else if (category === 'relics') {
        return this.renderRelicCard(item, tierClass, dict, imageMappings);
      } else if (category === 'runes') {
        return this.renderRuneCard(item, tierClass, dict, imageMappings);
      } else if (category === 'bonds') {
        return this.renderBondCard(item, tierClass, dict, imageMappings);
      } else if (category === 'chests') {
        return this.renderChestCard(item, tierClass, dict, imageMappings);
      } else {
        return this.renderGenericItemCard(item, category, tierClass, dict, imageMappings);
      }
    }).join('');

    const isRu = currentLang === 'RU';
    const isCn = currentLang === 'CN';

    const paginationHtml = hasMore ? `
      <div class="items-pagination-bar" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; margin-top: 20px; padding: 18px 20px; background: rgba(15, 23, 42, 0.6); border: 1px dashed rgba(168, 85, 247, 0.35); border-radius: var(--radius-md);">
        <div style="font-size: 13px; color: var(--text-secondary);">
          ${isRu ? `Показано <strong>${visibleList.length}</strong> из <strong>${totalCount}</strong> предметов (Осталось: ${remainingCount})` : isCn ? `已显示 <strong>${visibleList.length}</strong> / <strong>${totalCount}</strong> 件物品 (剩余: ${remainingCount})` : `Showing <strong>${visibleList.length}</strong> of <strong>${totalCount}</strong> items (${remainingCount} remaining)`}
        </div>
        <button onclick="ItemsView.loadMore()" class="filter-pill active" style="padding: 9px 24px; font-size: 13.5px; font-weight: 700; border-radius: var(--radius-md); box-shadow: 0 4px 14px rgba(147, 51, 234, 0.25); cursor: pointer; transition: all 0.15s ease;">
          📦 ${isRu ? `Показать еще 60 предметов ▾` : isCn ? `加载更多 60 件物品 ▾` : `Load 60 More Items ▾`}
        </button>
      </div>
    ` : '';

    container.innerHTML = cardsHtml + paginationHtml;
  },

  renderEquipCard(eq, tierClass, dict, imageMappings = {}) {
    const st = eq.stats || {};
    const statLines = [];
    if (st.str) statLines.push(`STR +${st.str}`);
    if (st.int) statLines.push(`INT +${st.int}`);
    if (st.dex) statLines.push(`DEX +${st.dex}`);
    if (st.cons) statLines.push(`HP +${st.cons}`);
    if (st.spd) statLines.push(`SPD +${st.spd}`);
    if (st.luck) statLines.push(`Luck +${st.luck}`);
    if (st.tough) statLines.push(`Tenacity +${st.tough}`);
    if (st.initial_magic) statLines.push(`Mana +${st.initial_magic}`);

    const iconSrc = this.getItemIcon(eq, 'equipment', imageMappings);
    const fallbackEmoji = '🛡️';

    return `
      <div class="item-card" onclick="App.openItemModal('equipment', '${eq.id}')">
        <div class="item-header">
          <div class="item-header-left">
            <div class="item-icon-container">
              ${iconSrc ? `
                <img src="${iconSrc}" alt="${this.escapeHtml(eq.name)}" class="item-icon-img" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='inline-block';">
                <span class="item-fallback-icon" style="display: none; font-size: 20px;">${fallbackEmoji}</span>
              ` : `<span class="item-fallback-icon" style="font-size: 20px;">${fallbackEmoji}</span>`}
            </div>
            <div>
              <div class="item-name">${this.escapeHtml(eq.name)}</div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: monospace;">ID: ${eq.id}</div>
            </div>
          </div>
          <span class="tier-badge ${tierClass}">${eq.step}</span>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <span class="item-slot-badge">🛡️ ${this.escapeHtml(eq.slot || '')}</span>
          ${eq.element ? `<span class="tag-badge" style="font-size: 10px;">✨ ${this.escapeHtml(eq.element)}</span>` : ''}
          ${eq.class_limit ? `<span class="tag-badge" style="font-size: 10px;">⚔️ ${this.escapeHtml(eq.class_limit)}</span>` : ''}
          <span class="tag-badge star-gear-pill" title="Прокачка звёздности от 0★ до 3★ MAX (Наследие) дает до +3 очков ко всем строкам сета">⭐ 0★→3★ Legacy</span>
        </div>

        <div style="font-size: 12px; font-weight: 700; color: #38bdf8;">
          ${statLines.length > 0 ? statLines.join(' | ') : '—'}
        </div>

        ${eq.pure_bond ? `
          <div class="item-bond-box">
            🔗 <strong>${this.escapeHtml(eq.pure_bond.name)}:</strong> ${this.formatDesc(eq.pure_bond.effect, (dict.starMilestone4||'').includes('прозрения')?'RU':'EN')}
          </div>
        ` : ''}

        ${eq.enhance_ability ? `
          <div class="item-enhance-box">
            ⚡ <strong>${this.escapeHtml(eq.enhance_ability.name)}:</strong> ${this.formatDesc(eq.enhance_ability.effect, (dict.starMilestone4||'').includes('прозрения')?'RU':'EN')}
          </div>
        ` : ''}
        <div class="item-card-source" title="${this.escapeHtml(this.getItemSourceSummary(eq, 'equipment', (dict.starMilestone4||'').includes('прозрения')?'RU':((dict.starMilestone4||'').includes('信物')?'CN':'EN')))}">
          <span class="item-source-label">📍 ${dict.acquisitionLabel || 'Получение'}:</span>
          <span class="item-source-text">${this.escapeHtml(this.getItemSourceSummary(eq, 'equipment', (dict.starMilestone4||'').includes('прозрения')?'RU':((dict.starMilestone4||'').includes('信物')?'CN':'EN')))}</span>
        </div>
      </div>
    `;
  },

  renderRelicCard(rel, tierClass, dict, imageMappings = {}) {
    const iconSrc = this.getItemIcon(rel, 'relics', imageMappings);
    const fallbackEmoji = '🔮';
    const levels = rel.levels || [];
    const currentLang = (dict.starMilestone4 || '').includes('прозрения') ? 'RU' : ((dict.starMilestone4 || '').includes('信物') ? 'CN' : 'EN');
    const isRu = currentLang === 'RU';
    const isCn = currentLang === 'CN';

    return `
      <div class="item-card" onclick="App.openItemModal('relics', '${rel.id}')">
        <div class="item-header">
          <div class="item-header-left">
            <div class="item-icon-container">
              ${iconSrc ? `
                <img src="${iconSrc}" alt="${this.escapeHtml(rel.name)}" class="item-icon-img" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='inline-block';">
                <span class="item-fallback-icon" style="display: none; font-size: 20px;">${fallbackEmoji}</span>
              ` : `<span class="item-fallback-icon" style="font-size: 20px;">${fallbackEmoji}</span>`}
            </div>
            <div>
              <div class="item-name">${this.escapeHtml(rel.name)}</div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: monospace;">ID: ${rel.id}</div>
            </div>
          </div>
          <span class="tier-badge ${tierClass}">${rel.step}★</span>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <span class="item-slot-badge" style="background: rgba(236, 72, 153, 0.18); color: #f472b6; border: 1px solid rgba(236, 72, 153, 0.35);">
            🔮 ${this.escapeHtml(rel.type || (isRu ? 'Эксклюзивное прозрение' : isCn ? '专属信物' : 'Signature Insight'))}
          </span>
          ${rel.class_limit ? `<span class="tag-badge">⚔️ ${this.escapeHtml(rel.class_limit)}</span>` : ''}
          <span class="tag-badge">Max Lv: ${rel.max_level || 3}</span>
        </div>

        <!-- 3-Level Progression List -->
        ${levels.length > 0 ? `
          <div class="relic-levels-container" style="margin: 6px 0;">
            ${levels.map((lv, idx) => {
              const isMax = lv.level === 3 || idx === levels.length - 1;
              const lvlClass = `lvl-${lv.level}`;
              const badgeLabel = isMax 
                ? (isRu ? 'Ур. 3 👑' : isCn ? '3阶 MAX' : 'Lv. 3 MAX')
                : (isRu ? `Ур. ${lv.level}` : isCn ? `${lv.level}阶` : `Lv. ${lv.level}`);
              return `
                <div class="relic-level-row ${lvlClass}" style="padding: 4px 8px; font-size: 11.5px;">
                  <span class="relic-level-badge ${lvlClass}" style="font-size: 10px; padding: 1.5px 6px;">${badgeLabel}</span>
                  <span class="relic-level-effect ${isMax ? 'lvl-3' : ''}" style="font-size: 11.5px;">${this.formatDesc(lv.effect, currentLang)}</span>
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.4;">
            ${this.escapeHtml(rel.effect)}
          </div>
        `}

        ${rel.specify_roles && rel.specify_roles.length > 0 ? `
          <div style="font-size: 11.5px; color: #fbbf24; background: rgba(251, 191, 36, 0.08); padding: 5px 8px; border-radius: var(--radius-sm); border: 1px solid rgba(251, 191, 36, 0.2);">
            ⭐ <strong>${dict.signatureRelic || 'Эксклюзивное прозрение'}:</strong> ${this.escapeHtml(rel.specify_roles.join(', '))}
          </div>
        ` : ''}
      </div>
    `;
  },

  renderRuneCard(rn, tierClass, dict, imageMappings = {}) {
    const iconSrc = this.getItemIcon(rn, 'runes', imageMappings);
    const fallbackEmoji = '🪨';

    return `
      <div class="item-card" onclick="App.openItemModal('runes', '${rn.id}')">
        <div class="item-header">
          <div class="item-header-left">
            <div class="item-icon-container">
              ${iconSrc ? `
                <img src="${iconSrc}" alt="${this.escapeHtml(rn.name)}" class="item-icon-img" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='inline-block';">
                <span class="item-fallback-icon" style="display: none; font-size: 20px;">${fallbackEmoji}</span>
              ` : `<span class="item-fallback-icon" style="font-size: 20px;">${fallbackEmoji}</span>`}
            </div>
            <div>
              <div class="item-name">${this.escapeHtml(rn.name)}</div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: monospace;">ID: ${rn.id}</div>
            </div>
          </div>
          <span class="tier-badge ${tierClass}">${rn.step}</span>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <span class="item-slot-badge">💎 ${this.escapeHtml(rn.material)}</span>
          <span class="tag-badge star-gear-pill" title="Руны прокачиваются до 3★ MAX для бонусов Кодекса и резонанса">⭐ 0★→3★ Legacy</span>
          <span class="tag-badge">Score: ${rn.score}</span>
        </div>

        <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.4;">
          ${this.formatDesc(rn.description, (dict.starMilestone4||'').includes('прозрения')?'RU':'EN')}
        </div>
        <div class="item-card-source" title="${this.escapeHtml(this.getItemSourceSummary(rn, 'runes', (dict.starMilestone4||'').includes('прозрения')?'RU':((dict.starMilestone4||'').includes('信物')?'CN':'EN')))}">
          <span class="item-source-label">📍 ${dict.acquisitionLabel || 'Получение'}:</span>
          <span class="item-source-text">${this.escapeHtml(this.getItemSourceSummary(rn, 'runes', (dict.starMilestone4||'').includes('прозрения')?'RU':((dict.starMilestone4||'').includes('信物')?'CN':'EN')))}</span>
        </div>
      </div>
    `;
  },

  renderChestCard(ch, tierClass, dict, imageMappings = {}) {
    const iconSrc = this.getItemIcon(ch, 'chests', imageMappings);
    const fallbackEmoji = '📦';
    const step = ch.step || ch.Step || 'C';
    const isRu = (dict.starMilestone4 || '').includes('прозрения');
    const isCn = (dict.starMilestone4 || '').includes('信物');

    return `
      <div class="item-card" onclick="App.openItemModal('chests', '${ch.key || ch.uid || ch.id}')">
        <div class="item-header">
          <div class="item-header-left">
            <div class="item-icon-container">
              ${iconSrc ? `
                <img src="${iconSrc}" alt="${this.escapeHtml(ch.name)}" class="item-icon-img" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='inline-block';">
                <span class="item-fallback-icon" style="display: none; font-size: 20px;">${fallbackEmoji}</span>
              ` : `<span class="item-fallback-icon" style="font-size: 20px;">${fallbackEmoji}</span>`}
            </div>
            <div>
              <div class="item-name">${this.escapeHtml(ch.name)}</div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: monospace;">ID: ${ch.id}</div>
            </div>
          </div>
          <span class="tier-badge ${tierClass}">${step}</span>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${ch.drop_type ? `<span class="item-slot-badge">🎁 ${this.escapeHtml(ch.drop_type)}</span>` : ''}
          ${ch.drop_content ? `<span class="tag-badge">📋 ${this.escapeHtml(ch.drop_content)}</span>` : ''}
          ${ch.num ? `<span class="tag-badge">🔢 ×${this.escapeHtml(ch.num)}</span>` : ''}
        </div>

        ${ch.description ? `
          <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.4;">
            ${this.escapeHtml(ch.description)}
          </div>
        ` : ''}

        <div class="item-card-source" title="${this.escapeHtml(this.getItemSourceSummary(ch, 'chests', isRu ? 'RU' : (isCn ? 'CN' : 'EN')))}">
          <span class="item-source-label">📍 ${dict.acquisitionLabel || 'Получение'}:</span>
          <span class="item-source-text">${this.escapeHtml(this.getItemSourceSummary(ch, 'chests', isRu ? 'RU' : (isCn ? 'CN' : 'EN')))}</span>
        </div>
      </div>
    `;
  },

    renderBondCard(bd, tierClass, dict, imageMappings = {}) {
    return `
      <div class="item-card" onclick="App.openItemModal('bonds', '${bd.id}')">
        <div class="item-header">
          <div class="item-header-left">
            <div class="item-icon-container">
              <span style="font-size: 20px;">🔗</span>
            </div>
            <div>
              <div class="item-name">${this.escapeHtml(bd.name)}</div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: monospace;">ID: ${bd.id}</div>
            </div>
          </div>
          <span class="tier-badge ${tierClass}">${bd.step}</span>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <span class="item-slot-badge">${this.escapeHtml(bd.type)}</span>
          <span class="tag-badge" style="background: rgba(59,130,246,0.15); color: #93c5fd;">
            ${dict.requiredPieces}: ${bd.bond_requirements} pcs
          </span>
          ${bd.tag ? `<span class="tag-badge">🏷️ ${this.escapeHtml(bd.tag)}</span>` : ''}
        </div>

        <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.4;">
          ${this.formatDesc(bd.effect_desc || bd.basic_desc, (dict.starMilestone4||'').includes('прозрения')?'RU':'EN')}
        </div>
        <div class="item-card-source" title="${this.escapeHtml(this.getItemSourceSummary(bd, 'bonds', (dict.starMilestone4||'').includes('прозрения')?'RU':((dict.starMilestone4||'').includes('信物')?'CN':'EN')))}">
          <span class="item-source-label">📍 ${dict.acquisitionLabel || 'Получение'}:</span>
          <span class="item-source-text">${this.escapeHtml(this.getItemSourceSummary(bd, 'bonds', (dict.starMilestone4||'').includes('прозрения')?'RU':((dict.starMilestone4||'').includes('信物')?'CN':'EN')))}</span>
        </div>
      </div>
    `;
  },

  renderGenericItemCard(item, category, tierClass, dict, imageMappings = {}) {
    const iconSrc = this.getItemIcon(item, category, imageMappings);
    const fallbackEmoji = item.icon || this.getCategoryFallbackEmoji(category);

    return `
      <div class="item-card" onclick="App.openItemModal('${category}', '${item.id}')">
        <div class="item-header">
          <div class="item-header-left">
            <div class="item-icon-container">
              ${iconSrc ? `
                <img src="${iconSrc}" alt="${this.escapeHtml(item.name)}" class="item-icon-img" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='inline-block';">
                <span class="item-fallback-icon" style="display: none; font-size: 20px;">${fallbackEmoji}</span>
              ` : `<span class="item-fallback-icon" style="font-size: 20px;">${fallbackEmoji}</span>`}
            </div>
            <div>
              <div class="item-name">${this.escapeHtml(item.name)}</div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: monospace;">ID: ${item.id}</div>
            </div>
          </div>
          ${item.step ? `<span class="tier-badge ${tierClass}">${item.step}</span>` : ''}
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${item.type ? `<span class="item-slot-badge">${this.escapeHtml(item.type)}</span>` : ''}
          ${item.drop_type ? `<span class="tag-badge">${this.escapeHtml(item.drop_type)}</span>` : ''}
          ${item.tag ? `<span class="tag-badge">🏷️ ${this.escapeHtml(item.tag)}</span>` : ''}
        </div>

        <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.4;">
          ${this.formatDesc(item.description || item.effect || '', (dict.starMilestone4||'').includes('прозрения')?'RU':'EN')}
        </div>
        <div class="item-card-source" title="${this.escapeHtml(this.getItemSourceSummary(item, category, (dict.starMilestone4||'').includes('прозрения')?'RU':((dict.starMilestone4||'').includes('信物')?'CN':'EN')))}">
          <span class="item-source-label">📍 ${dict.acquisitionLabel || 'Получение'}:</span>
          <span class="item-source-text">${this.escapeHtml(this.getItemSourceSummary(item, category, (dict.starMilestone4||'').includes('прозрения')?'RU':((dict.starMilestone4||'').includes('信物')?'CN':'EN')))}</span>
        </div>
      </div>
    `;
  },

  renderItemTileSources(item, currentLang = 'RU') {
    if (!item) return '';
    const isRu = currentLang === 'RU';
    const isCn = currentLang === 'CN';
    const allTiles = (typeof App !== 'undefined' && App.state?.mapTiles) ? App.state.mapTiles : ((typeof GuidesView !== 'undefined' && GuidesView.defaultMapTiles) ? GuidesView.defaultMapTiles : []);
    const itemName = item.name || '';
    if (!itemName) return '';
    
    const matchingTiles = allTiles.filter(t => {
      const mats = t.materials?.[currentLang] || t.materials?.RU || [];
      return mats.some(m => itemName.includes(m) || m.includes(itemName));
    });
    
    if (matchingTiles.length === 0) return '';
    
    return `
      <div class="detail-section" style="margin-top: 15px;">
        <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between;">
          <span>🗺️ ${isRu ? 'Источники на игровом поле (Тайлы)' : (isCn ? '地图产出地块' : 'Map Spot Sources')} (${matchingTiles.length})</span>
          <span style="font-size: 11px; color: var(--text-muted); font-weight: normal;">${isRu ? 'Нажмите для перехода к тайлу' : 'Click to view tile'}</span>
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; max-height: 180px; overflow-y: auto; padding: 4px;">
          ${matchingTiles.map(t => {
            const tName = t.name?.[currentLang] || t.name?.RU || t.id;
            return `
              <span class="tag-badge clickable-badge" 
                    onclick="event.stopPropagation(); App.openTileModal('${t.id}')" 
                    title="${isRu ? 'Открыть карточку тайла' : 'Open tile card'}"
                    style="background: rgba(56, 189, 248, 0.1); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.35); padding: 5px 12px; font-size: 12px; cursor: pointer; transition: all 0.15s ease;">
                ${t.icon || '🗺️'} ${this.escapeHtml(tName)}
              </span>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },
  renderModal(item, category, currentLang = "RU", imageMappings = {}) {
    if (!item) return '';
    const dict = I18N[currentLang] || I18N.RU;
    const step = item.step || item.Step || 'C';
    const tierClass = `tier-${step.toLowerCase()}`;
    const iconSrc = this.getItemIcon(item, category, imageMappings);
    const fallbackEmoji = item.icon || this.getCategoryFallbackEmoji(category);

    return `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-area">
            ${(typeof App !== 'undefined' && App.renderModalBackButton) ? App.renderModalBackButton(currentLang) : ''}
            <div style="width: 52px; height: 52px; border-radius: var(--radius-md); border: 2px solid var(--border-subtle); background: radial-gradient(circle, #1e293b 0%, #0f172a 100%); display: flex; align-items: center; justify-content: center; padding: 4px; overflow: hidden; flex-shrink: 0;">
              ${iconSrc ? `
                <img src="${iconSrc}" alt="Icon" style="width: 100%; height: 100%; object-fit: contain;" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='inline-block';">
                <span style="display: none; font-size: 24px;">${fallbackEmoji}</span>
              ` : `<span style="font-size: 24px;">${fallbackEmoji}</span>`}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="tier-badge ${tierClass}">${step}</span>
                <span class="modal-title">${this.escapeHtml(item.name)}</span>
              </div>
              <div style="font-size: 12px; color: var(--text-muted); font-family: monospace;">ID: ${item.id}</div>
            </div>
          </div>
          <button class="modal-close-btn" onclick="App.closeModal()">&times;</button>
        </div>

        <div class="modal-body">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${item.slot ? `<span class="tag-badge">🛡️ ${dict.filterTitles?.slot || 'Slot'}: ${this.escapeHtml(item.slot)}</span>` : ''}
            ${item.class_limit ? `<span class="tag-badge">⚔️ ${dict.filterTitles?.class || 'Class'}: ${this.escapeHtml(item.class_limit)}</span>` : ''}
            ${item.element ? `<span class="tag-badge">✨ ${dict.filterTitles?.element || 'Element'}: ${this.escapeHtml(item.element)}</span>` : ''}
            ${item.type ? `<span class="tag-badge">${this.escapeHtml(item.type)}</span>` : ''}
          </div>

          ${item.stats ? `
            <div class="detail-section">
              <div class="section-heading">📊 ${dict.baseStats}</div>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px;">
                ${Object.entries(item.stats).map(([k, v]) => v ? `
                  <div style="background: rgba(10,14,23,0.4); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.05); text-align: center;">
                    <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">${k}</div>
                    <div style="font-size: 15px; font-weight: 700; color: #38bdf8;">+${v}</div>
                  </div>
                ` : '').join('')}
              </div>
            </div>
          ` : ''}

          ${item.pure_bond ? `
            <div class="detail-section">
              <div class="section-heading">🔗 ${dict.pureSetBond || 'Set Bond'}</div>
              <div class="item-bond-box" style="font-size: 13px; padding: 12px;">
                <div style="font-weight: 700; color: #60a5fa; margin-bottom: 4px;">${this.escapeHtml(item.pure_bond.name)}</div>
                <div>${this.formatDesc(item.pure_bond.effect, currentLang)}</div>
              </div>
            </div>
          ` : ''}

          ${item.enhance_ability ? `
            <div class="detail-section">
              <div class="section-heading">⚡ ${dict.uniqueEquipmentEffect || 'Special Effect'}</div>
              <div class="item-enhance-box" style="font-size: 13px; padding: 12px;">
                <div style="font-weight: 700; color: #fbbf24; margin-bottom: 4px;">${this.escapeHtml(item.enhance_ability.name)}</div>
                <div>${this.formatDesc(item.enhance_ability.effect, currentLang)}</div>
              </div>
            </div>
          ` : ''}

          ${item.effect && category !== 'relics' ? `
            <div class="detail-section">
              <div class="section-heading">🔮 ${dict.effects || 'Effect'}</div>
              <div style="background: var(--bg-surface-elevated); padding: 12px; border-radius: var(--radius-md); font-size: 13px; line-height: 1.5; color: var(--text-primary);">
                ${this.formatDesc(item.effect, currentLang)}
              </div>
            </div>
          ` : ''}

          <!-- Relic / Insight Upgrade Levels (1 - 3 MAX) -->
          ${category === 'relics' ? `
            <div class="detail-section">
              <div class="section-heading">🔮 ${dict.relicUpgradeTitle || 'Прокачка Прозрения (Уровни 1 — 3)'}</div>
              <div class="star-gear-card">
                <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 12px;">
                  ${dict.relicUpgradeDesc || 'Эксклюзивное прозрение масштабирует свою мощь при повышении уровня:'}
                </div>

                <div class="star-gear-table-wrapper">
                  <table class="star-gear-table">
                    <thead>
                      <tr>
                        <th>${currentLang === 'RU' ? 'Уровень' : (currentLang === 'CN' ? '强化等级' : 'Level')}</th>
                        <th>${currentLang === 'RU' ? 'Статус' : (currentLang === 'CN' ? '阶段' : 'Status')}</th>
                        <th>${currentLang === 'RU' ? 'Эффект Прозрения' : (currentLang === 'CN' ? '信物特性加成' : 'Insight Effect')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${(item.levels || [
                        { level: 1, effect: item.effect || '—' },
                        { level: 2, effect: `${item.effect || ''} (Ур. 2)` },
                        { level: 3, effect: `${item.effect || ''} (Ур. 3 MAX)` }
                      ]).map((lv, idx) => {
                        const isMax = lv.level === 3 || idx === (item.levels ? item.levels.length - 1 : 2);
                        return `
                          <tr class="${isMax ? 'legacy-row' : ''}">
                            <td>
                              <span class="star-step-badge ${isMax ? 'legacy-badge' : ''}">
                                ${isMax ? '👑 Ур. 3' : `Ур. ${lv.level}`}
                              </span>
                            </td>
                            <td>
                              ${lv.level === 1 ? (currentLang === 'RU' ? 'Базовый старт' : (currentLang === 'CN' ? '初始激活' : 'Base Unlock')) : ''}
                              ${lv.level === 2 ? (currentLang === 'RU' ? 'Усиление (+100%)' : (currentLang === 'CN' ? '进阶强化' : 'Enhanced (+100%)')) : ''}
                              ${isMax ? (currentLang === 'RU' ? '🔥 MAX Потенциал (+200%)' : (currentLang === 'CN' ? '🔥 巅峰潜能突破' : '🔥 MAX Potential (+200%)')) : ''}
                            </td>
                            <td>
                              <strong style="color: ${isMax ? '#fbbf24' : (lv.level === 2 ? '#60a5fa' : '#e2e8f0')};">
                                ${this.formatDesc(lv.effect, currentLang)}
                              </strong>
                            </td>
                          </tr>
                        `;
                      }).join('')}
                    </tbody>
                  </table>
                </div>

                ${item.specify_roles && item.specify_roles.length > 0 ? `
                  <div class="relic-bound-box" style="cursor: pointer;" onclick="App.openCharacterFromRelic(this.getAttribute('data-role'))" data-role="${this.escapeHtml(item.specify_roles[0])}">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span style="font-size: 24px;">👤</span>
                      <div>
                        <div style="font-size: 11px; color: #f472b6; font-weight: 700; text-transform: uppercase;">
                          ${dict.relicBoundHeroine || 'Эксклюзивное прозрение героини:'}
                        </div>
                        <div style="font-size: 14px; font-weight: 700; color: #ffffff;">
                          ${this.escapeHtml(item.specify_roles.join(', '))}
                        </div>
                      </div>
                    </div>
                    <span style="font-size: 12px; color: #38bdf8; font-weight: 700;">
                      ${currentLang === 'RU' ? 'Открыть героиню' : currentLang === 'CN' ? '查看角色' : 'View Heroine'} ➔
                    </span>
                  </div>
                ` : ''}

                <div class="star-tip-box tip-standard" style="margin-top: 10px;">
                  💡 ${currentLang === 'RU' ? 'Слот эксклюзивного прозрения открывается при достижении героиней 4★ возвышения. Прокачка уровней прозрения значительно увеличивает боевую мощь персонажа!' : currentLang === 'CN' ? '专属核心信物槽位在角色达到4★星级突破时开启，提升信物等级可极大增强战斗力！' : 'Signature insight slot unlocks when the heroine reaches 4★ ascension. Leveling up insight substantially increases combat effectiveness!'}
                </div>
              </div>
            </div>
          ` : ''}

          ${category === 'equipment' || category === 'runes' || item.slot || item.pure_bond ? `
            <div class="detail-section">
              <div class="section-heading">⭐ ${dict.itemStarTitle || 'Звёздность Снаряжения и Наследие (0★ ➔ 3★ & Legacy)'}</div>
              <div class="star-gear-card">
                <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 12px;">
                  ${dict.itemStarDesc || 'Каждый предмет экипировки уникален. Дубликаты используются для прокачки звёздности и усиления резонанса сетов:'}
                </div>

                <div class="star-gear-table-wrapper">
                  <table class="star-gear-table">
                    <thead>
                      <tr>
                        <th>${currentLang === 'RU' ? 'Звёзды' : (currentLang === 'CN' ? '星级' : 'Star Level')}</th>
                        <th>${currentLang === 'RU' ? 'Дубликаты' : (currentLang === 'CN' ? '消耗副本' : 'Dupes')}</th>
                        <th>${currentLang === 'RU' ? 'Бонус к талантам сета' : (currentLang === 'CN' ? '套装共鸣加成' : 'Set Talent Bonus')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span class="star-step-badge">0★</span></td>
                        <td>0</td>
                        <td>${dict.itemStar0 || 'Базовый предмет (1 очко к строкам бонусов сета)'}</td>
                      </tr>
                      <tr>
                        <td><span class="star-step-badge">1★</span></td>
                        <td>1</td>
                        <td><strong>${dict.itemStar1 || '1★ (1 дубликат): +1 очко к таланту 1-й строки сета'}</strong></td>
                      </tr>
                      <tr>
                        <td><span class="star-step-badge">2★</span></td>
                        <td>5</td>
                        <td><strong>${dict.itemStar2 || '2★ (5 дубликатов): +1 очко к таланту 2-й строки сета'}</strong></td>
                      </tr>
                      <tr>
                        <td><span class="star-step-badge">3★</span></td>
                        <td>10</td>
                        <td><strong style="color: #60a5fa;">${dict.itemStar3 || '3★ (10 дубликатов): +1 очко к таланту 3-й строки сета'}</strong></td>
                      </tr>
                      <tr class="legacy-row">
                        <td><span class="star-step-badge legacy-badge">👑 MAX</span></td>
                        <td>16 + 💎</td>
                        <td><strong style="color: #fbbf24;">${dict.itemStarLegacy || 'MAX Наследие: +3 очка ко ВСЕМ строкам талантов предмета!'}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="star-tip-box tip-standard" style="margin-top: 10px;">
                  ${dict.itemStarComboRule || '💡 Сокращение сетов: Экипировка 3★ позволяет активировать полный бонус сета всего 2 надетыми предметами вместо 4-х!'}
                </div>

                <div class="star-tip-box tip-alter" style="margin-top: 8px;">
                  ${dict.itemStarAlchemyRule || '⚠️ Правило алхимии: НИ В КОЕМ СЛУЧАЕ не распыляйте снаряжение и руны в алхимию, пока они не прокачаны до 3★ MAX для уровня Кодекса!'}
                </div>
              </div>
            </div>
          ` : ''}

          ${item.drop_type || item.drop_content || item.num ? `
            <div class="detail-section" style="margin-bottom: 12px;">
              <div class="section-heading">📦 ${currentLang === 'RU' ? 'Параметры сундука' : currentLang === 'CN' ? '宝箱属性' : 'Chest Properties'}</div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${item.drop_type ? `<span class="tag-badge" style="background: rgba(168, 85, 247, 0.15); border-color: rgba(168, 85, 247, 0.4); color: #c084fc;">🎁 ${dict.chestDropCategory || 'Тип дропа'}: ${this.escapeHtml(item.drop_type)}</span>` : ''}
                ${item.drop_content ? `<span class="tag-badge" style="background: rgba(56, 189, 248, 0.15); border-color: rgba(56, 189, 248, 0.4); color: #38bdf8;">📋 ${this.escapeHtml(item.drop_content)}</span>` : ''}
                ${item.num ? `<span class="tag-badge" style="background: rgba(251, 191, 36, 0.15); border-color: rgba(251, 191, 36, 0.4); color: #fbbf24;">🔢 ${dict.chestDropQty || 'Кол-во'}: ×${this.escapeHtml(item.num)}</span>` : ''}
                ${item.extra_possi ? `<span class="tag-badge" style="background: rgba(34, 197, 94, 0.15); border-color: rgba(34, 197, 94, 0.4); color: #4ade80;">✨ +${Math.round(item.extra_possi * 100)}% Extra</span>` : ''}
                ${item.area_name && item.area_name !== '不限' && item.area_name !== 'Все зоны' ? `<span class="tag-badge">📍 ${this.escapeHtml(item.area_name)}</span>` : ''}
              </div>
            </div>
          ` : ''}

          ${item.drop_table && item.drop_table.length > 0 ? `
            <div class="detail-section">
              <div class="section-heading" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <span>🎁 ${dict.chestDropTableTitle || (currentLang === 'RU' ? 'Возможный дроп' : currentLang === 'CN' ? '可能掉落物品' : 'Possible Drops')} (${item.drop_table.length})</span>
                <span style="font-size: 11.5px; font-weight: normal; color: var(--text-muted);">
                  💡 ${currentLang === 'RU' ? 'Наведите для названия • Кликните для карточки' : currentLang === 'CN' ? '悬停查看名称 • 点击查看详情' : 'Hover for name • Click for details'}
                </span>
              </div>
              
              <div class="chest-loot-grid">
                ${item.drop_table.map(d => {
                  const dIcon = this.getItemIcon(d, d.category, imageMappings);
                  const dStep = d.step || '';
                  const dTierClass = dStep ? `loot-tier-${dStep.toLowerCase()}` : '';
                  const dFallbackEmoji = this.getCategoryFallbackEmoji(d.category);
                  const tooltipText = `${d.name}${dStep ? ` [${dStep}★]` : ''}${d.slot || d.type ? ` • ${d.slot || d.type}` : ''}${d.class_limit ? ` (${d.class_limit})` : ''}`;
                  
                  return `
                    <div class="loot-tile ${dTierClass}" 
                         onclick="App.openItemModal('${d.category}', '${d.id}')" 
                         title="${this.escapeHtml(tooltipText)}"
                         data-tooltip="${this.escapeHtml(tooltipText)}">
                      <div class="loot-tile-icon-box">
                        ${dIcon ? `
                          <img src="${dIcon}" alt="${this.escapeHtml(d.name)}" class="loot-tile-img" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='inline-block';">
                          <span style="display: none; font-size: 20px;">${dFallbackEmoji}</span>
                        ` : `<span style="font-size: 20px;">${dFallbackEmoji}</span>`}
                      </div>
                      ${dStep ? `<span class="loot-tile-tier">${dStep}</span>` : ''}
                      ${d.num && String(d.num) !== '1' ? `<span class="loot-tile-qty">×${this.escapeHtml(d.num)}</span>` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          ${category !== 'chests' && category !== 'relics' ? `
            <div class="detail-section">
              <div class="section-heading">📍 ${dict.acquisitionTitle || 'Способ получения'}</div>
              <div class="item-source-box">
                <div style="font-size: 13.5px; font-weight: 600; color: #ffffff; display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 18px;">🗺️</span>
                  <span>${this.getItemSourceSummary(item, category, currentLang)}</span>
                </div>

                ${(() => {
                  const chestMap = this.buildReverseChestMap(typeof App !== 'undefined' ? App.state?.data?.items?.[currentLang] : null);
                  const chestsThatDropThis = chestMap[item.id] || [];
                  if (chestsThatDropThis.length === 0) return '';
                  return `
                    <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px; margin-top: 10px;">
                      <div style="font-size: 12px; color: #c084fc; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
                        <span>📦 ${dict.droppedFromChests || 'Выпадает из сундуков'} (${chestsThatDropThis.length})</span>
                        <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">
                          ${currentLang === 'RU' ? 'Кликните на сундук для просмотра' : currentLang === 'CN' ? '点击宝箱查看掉落' : 'Click chest to view drops'}
                        </span>
                      </div>
                      <div class="chest-loot-grid" style="max-height: 180px;">
                        ${chestsThatDropThis.map(ch => {
                          const chStep = ch.step || 'C';
                          const chTierClass = `loot-tier-${chStep.toLowerCase()}`;
                          const chIcon = this.getItemIcon(ch, 'chests', imageMappings);
                          return `
                            <div class="loot-tile ${chTierClass}" 
                                 onclick="App.openItemModal('chests', '${ch.key || ch.uid || ch.id}')" 
                                 title="${this.escapeHtml(ch.name)} [${chStep}★]" 
                                 data-tooltip="${this.escapeHtml(ch.name)} [${chStep}★]">
                              <div class="loot-tile-icon-box">
                                ${chIcon ? `
                                  <img src="${chIcon}" alt="${this.escapeHtml(ch.name)}" class="loot-tile-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';">
                                  <span style="display: none; font-size: 20px;">📦</span>
                                ` : `<span style="font-size: 20px;">📦</span>`}
                              </div>
                              <span class="loot-tile-tier">${chStep}</span>
                            </div>
                          `;
                        }).join('')}
                      </div>
                    </div>
                  `;
                })()}
              </div>
            </div>
          ` : ''}

          <!-- Map Tiles Drop Sources (for materials/ingredients) -->
          ${this.renderItemTileSources(item, currentLang)}

          <!-- Banner link for summon tickets, wish stones, gems -->
          ${(item.id === 'D00006_031' || item.id === 'D00006_032' || item.id === 'D00010_021' || item.id === 'D00010_031' || item.id === 'D00001_000' || (item.name && (item.name.includes('Билет') || item.name.includes('найм') || item.name.includes('Самоцвет') || item.name.includes('招募') || item.name.includes('Recruit')))) ? `
            <div class="detail-section" style="margin-top: 10px;">
              <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.3); padding: 12px 14px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                <div style="font-size: 13px; color: #f1f5f9;">
                  <span>🎪 <strong>${currentLang === 'RU' ? 'Баннеры найма и Расписание' : (currentLang === 'CN' ? '招募卡池与概率' : 'Summon Banners & Rates')}</strong></span>
                  <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;">
                    ${currentLang === 'RU' ? 'Посмотрите шансы дропа, правила гаранта и расписание баннеров' : 'Check drop rates, pity rules & banner schedule'}
                  </div>
                </div>
                <button class="action-btn primary-btn" onclick="App.setTab('guides'); GuidesView.setSection('gacha');" style="font-size: 12px; padding: 5px 14px; background: rgba(56, 189, 248, 0.2); border-color: #38bdf8; color: #ffffff; cursor: pointer;">
                  ${currentLang === 'RU' ? 'Перейти к баннерам' : (currentLang === 'CN' ? '前往卡池' : 'Open Banners')} ➔
                </button>
              </div>
            </div>
          ` : ''}


          ${item.description ? `
            <div class="detail-section">
              <div class="section-heading">📜 ${dict.description || 'Description'}</div>
              <div style="font-style: italic; color: var(--text-secondary); line-height: 1.5; background: rgba(255,255,255,0.02); padding: 12px; border-radius: var(--radius-md); border-left: 3px solid #3b82f6;">
                "${this.escapeHtml(item.description)}"
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  },

  formatDesc(str, lang = null) {
    if (!str) return '';
    const escaped = this.escapeHtml(str);
    return (typeof App !== 'undefined' && App.linkifyBuffs) ? App.linkifyBuffs(escaped, lang) : escaped;
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ItemsView;
}

