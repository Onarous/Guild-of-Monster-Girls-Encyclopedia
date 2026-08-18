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

    container.innerHTML = list.map(item => {
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
      } else {
        return this.renderGenericItemCard(item, category, tierClass, dict, imageMappings);
      }
    }).join('');
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
            🔗 <strong>${this.escapeHtml(eq.pure_bond.name)}:</strong> ${this.escapeHtml(eq.pure_bond.effect)}
          </div>
        ` : ''}

        ${eq.enhance_ability ? `
          <div class="item-enhance-box">
            ⚡ <strong>${this.escapeHtml(eq.enhance_ability.name)}:</strong> ${this.escapeHtml(eq.enhance_ability.effect)}
          </div>
        ` : ''}
      </div>
    `;
  },

  renderRelicCard(rel, tierClass, dict, imageMappings = {}) {
    const iconSrc = this.getItemIcon(rel, 'relics', imageMappings);
    const fallbackEmoji = '🔮';

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
          <span class="tier-badge ${tierClass}">${rel.step}</span>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <span class="item-slot-badge">${this.escapeHtml(rel.type)}</span>
          ${rel.class_limit ? `<span class="tag-badge">⚔️ ${this.escapeHtml(rel.class_limit)}</span>` : ''}
          <span class="tag-badge">Max Lv: ${rel.max_level}</span>
        </div>

        <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.4;">
          ${this.escapeHtml(rel.effect)}
        </div>

        ${rel.specify_roles && rel.specify_roles.length > 0 ? `
          <div style="font-size: 11px; color: #fbbf24;">
            ⭐ <strong>${dict.signatureRelic}:</strong> ${this.escapeHtml(rel.specify_roles.join(', '))}
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
          ${this.escapeHtml(rn.description)}
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
          ${this.escapeHtml(bd.effect_desc || bd.basic_desc)}
        </div>
      </div>
    `;
  },

  renderGenericItemCard(item, category, tierClass, dict, imageMappings = {}) {
    const iconSrc = this.getItemIcon(item, category, imageMappings);
    const fallbackEmoji = this.getCategoryFallbackEmoji(category);

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
          ${this.escapeHtml(item.description || item.effect || '')}
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
    const fallbackEmoji = this.getCategoryFallbackEmoji(category);

    return `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-area">
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
                <div>${this.escapeHtml(item.pure_bond.effect)}</div>
              </div>
            </div>
          ` : ''}

          ${item.enhance_ability ? `
            <div class="detail-section">
              <div class="section-heading">⚡ ${dict.uniqueEquipmentEffect || 'Special Effect'}</div>
              <div class="item-enhance-box" style="font-size: 13px; padding: 12px;">
                <div style="font-weight: 700; color: #fbbf24; margin-bottom: 4px;">${this.escapeHtml(item.enhance_ability.name)}</div>
                <div>${this.escapeHtml(item.enhance_ability.effect)}</div>
              </div>
            </div>
          ` : ''}

          ${item.effect ? `
            <div class="detail-section">
              <div class="section-heading">🔮 ${dict.effects || 'Effect'}</div>
              <div style="background: var(--bg-surface-elevated); padding: 12px; border-radius: var(--radius-md); font-size: 13px; line-height: 1.5; color: var(--text-primary);">
                ${this.escapeHtml(item.effect)}
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
