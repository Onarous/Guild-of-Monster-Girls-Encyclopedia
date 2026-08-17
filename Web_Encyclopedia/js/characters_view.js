/**
 * Characters View Component for Guild of Monster Girls Web Encyclopedia
 * Compact, unified, and zero empty space.
 */

const CharactersView = {
  renderList(characters, containerId, currentLang = "RU", ownedRoleIds = new Set(), imageMappings = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!characters || characters.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <div style="font-size: 40px; margin-bottom: 12px;">🔍</div>
          <div style="font-size: 16px; font-weight: 600;">Ничего не найдено / No characters found</div>
        </div>
      `;
      return;
    }

    const dict = I18N[currentLang] || I18N.RU;
    const charImgs = imageMappings.characters || {};

    container.innerHTML = characters.map(char => {
      const tierClass = `tier-${char.rarity_tier ? char.rarity_tier.toLowerCase() : 'c'}`;
      const elemClass = this.getElementClass(char.element);
      const isOwned = ownedRoleIds.has(char.id) || ownedRoleIds.has(char.key);
      const bs = char.base_stats || {};

      const ultSnippet = char.unique_skills && char.unique_skills[0] 
        ? char.unique_skills[0].description 
        : (dict.passiveTraits || "Пассивные способности");

      const skinHtml = char.skin_name && char.skin_name !== "默认外观" && char.skin_name !== "Default Appearance" && char.skin_name !== "Базовый облик"
        ? `<span class="char-skin-badge">${this.escapeHtml(char.skin_name)}</span>` 
        : '';

      const ownedBadge = `
        <span class="tag-badge owned-toggle-badge ${isOwned ? 'is-owned' : 'not-owned'}" 
              onclick="App.toggleCharacterOwned('${char.id}', event)" 
              title="${isOwned ? 'Нажмите, чтобы убрать из коллекции' : 'Нажмите, чтобы добавить в коллекцию'}"
              style="cursor: pointer; transition: all 0.2s ease; ${isOwned ? 'background: rgba(16, 185, 129, 0.25); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.4);' : 'background: rgba(100, 116, 139, 0.2); color: var(--text-muted); opacity: 0.7;'}">
          ${isOwned ? '⭐ ' + dict.owned : '☆ ' + dict.notOwned}
        </span>
      `;

      const portraitPath = charImgs[char.id] || charImgs[char.key] || (char.id ? `assets/img/characters/${char.id}_1__single_part1_1@1.png` : '');
      const portraitHtml = `
        ${portraitPath ? `<img src="${portraitPath}" alt="${this.escapeHtml(char.name)}" class="char-portrait-img" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">` : ''}
        <span class="char-portrait-placeholder" style="${portraitPath ? 'display: none;' : ''}">🐉</span>
      `;

      const roleTagsHtml = this.formatRoleBadges(char.combat_role, currentLang);

      return `
        <div class="character-card" onclick="App.openCharacterModal('${char.id}')">
          <div class="card-header-with-portrait">
            <div class="char-portrait-container">
              ${portraitHtml}
            </div>
            
            <div class="char-title-area">
              <div class="char-name">
                <span>${this.escapeHtml(char.name)}</span>
                ${skinHtml}
              </div>
              <div class="char-id-tag">ID: ${char.id} (${char.key})</div>
            </div>

            <span class="tier-badge ${tierClass}">${char.rarity_tier}★</span>
          </div>

          <div class="card-tags">
            <span class="tag-badge ${elemClass}">✨ ${this.escapeHtml(char.element || '')}</span>
            <span class="tag-badge">🛡️ ${this.escapeHtml(char.class || '')}</span>
            ${roleTagsHtml}
            ${ownedBadge}
          </div>

          <div class="mini-stats-grid">
            <div class="mini-stat-item">
              <span class="mini-stat-label">HP</span>
              <span class="mini-stat-val highlight">${bs.cons_hp || 0}</span>
            </div>
            <div class="mini-stat-item">
              <span class="mini-stat-label">ATK</span>
              <span class="mini-stat-val">${bs.atk_attack || 0}</span>
            </div>
            <div class="mini-stat-item">
              <span class="mini-stat-label">DEF</span>
              <span class="mini-stat-val">${bs.def_defence || 0}</span>
            </div>
            <div class="mini-stat-item">
              <span class="mini-stat-label">SPD</span>
              <span class="mini-stat-val">${bs.spd_speed || 0}</span>
            </div>
          </div>

          <div class="ultimate-snippet">
            ⚡ <strong>${char.unique_skills && char.unique_skills[0] ? this.escapeHtml(char.unique_skills[0].name) : 'Active'}:</strong> ${this.escapeHtml(ultSnippet)}
          </div>
        </div>
      `;
    }).join('');
  },

  formatRoleBadges(roleStr, lang = "RU") {
    if (!roleStr) return '';
    const roles = roleStr.split(/[,\/]/).map(r => r.trim()).filter(Boolean);
    
    return roles.map(r => {
      let label = r;
      if (lang === "RU") {
        if (r.includes('Урон') || r === 'УВС' || r.includes('输出')) label = 'Урон';
        else if (r.includes('Защита') || r === 'Танк' || r.includes('防御')) label = 'Танк';
        else if (r.includes('Исцеление') || r === 'Лекарь' || r.includes('治疗')) label = 'Лекарь';
        else if (r.includes('Поддержка') || r === 'Саппорт' || r.includes('辅助')) label = 'Саппорт';
      } else if (lang === "CN") {
        if (r.includes('Урон') || r === 'УВС' || r.includes('输出') || r.includes('DPS')) label = '输出';
        else if (r.includes('Защита') || r === 'Танк' || r.includes('防御') || r.includes('Tank')) label = '防御';
        else if (r.includes('Исцеление') || r === 'Лекарь' || r.includes('治疗') || r.includes('Healer')) label = '治疗';
        else if (r.includes('Поддержка') || r === 'Саппорт' || r.includes('辅助') || r.includes('Support')) label = '辅助';
      } else {
        if (r.includes('Damage') || r === 'DPS' || r.includes('输出') || r.includes('Урон')) label = 'DPS';
        else if (r.includes('Defense') || r === 'Tank' || r.includes('防御') || r.includes('Танк')) label = 'Tank';
        else if (r.includes('Healing') || r === 'Healer' || r.includes('治疗') || r.includes('Лекарь')) label = 'Healer';
        else if (r.includes('Support') || r.includes('辅助') || r.includes('Саппорт')) label = 'Support';
      }
      return `<span class="tag-badge">🎯 ${this.escapeHtml(label)}</span>`;
    }).join('');
  },

  renderModal(char, currentLang = "RU", imageMappings = {}, ownedRoleIds = new Set()) {
    if (!char) return '';
    const dict = I18N[currentLang] || I18N.RU;
    const isOwned = ownedRoleIds.has(char.id) || ownedRoleIds.has(char.key);
    const bs = char.base_stats || {};
    const tierClass = `tier-${char.rarity_tier ? char.rarity_tier.toLowerCase() : 'c'}`;
    const elemClass = this.getElementClass(char.element);
    const charImgs = imageMappings.characters || {};

    const skinHtml = char.skin_name && char.skin_name !== "默认外观" && char.skin_name !== "Default Appearance" && char.skin_name !== "Базовый облик"
      ? `<span class="char-skin-badge" style="font-size: 13px;">[${this.escapeHtml(char.skin_name)}]</span>` 
      : '';

    const portraitPath = charImgs[char.id] || charImgs[char.key] || (char.id ? `assets/img/characters/${char.id}_1__single_part1_1@1.png` : '');
    const portraitModalHtml = portraitPath 
      ? `<img src="${portraitPath}" alt="${this.escapeHtml(char.name)}" class="modal-portrait-img" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">
         <div style="display: none; font-size: 36px;">🐉</div>`
      : `<div style="font-size: 36px;">🐉</div>`;

    // Ultimates HTML
    let ultHtml = '';
    if (char.unique_skills && char.unique_skills.length > 0) {
      ultHtml = char.unique_skills.map(u => `
        <div class="skill-card-item">
          <div class="skill-header-row">
            <span class="skill-name">⚡ ${this.escapeHtml(u.name)}</span>
            <span style="font-size: 11px; color: var(--text-muted); font-family: monospace;">ID: ${u.id}</span>
          </div>
          <div class="skill-meta-tags">
            ${u.action_type ? `<span class="tag-badge">${this.escapeHtml(u.action_type)}</span>` : ''}
            ${u.skill_type ? `<span class="tag-badge">${this.escapeHtml(u.skill_type)}</span>` : ''}
            ${u.target ? `<span class="tag-badge">🎯 ${this.escapeHtml(u.target)}</span>` : ''}
            <span class="tag-badge">Hits: ${u.hit_times || 1}</span>
            <span class="tag-badge">Max: ${u.max_targets || 1}</span>
          </div>
          <div class="skill-desc-text">${this.escapeHtml(u.description)}</div>
          ${u.positive_tags ? `<div style="font-size: 11px; color: var(--text-muted); margin-top: 6px;">🏷️ <strong>Tags:</strong> ${this.escapeHtml(u.positive_tags)}</div>` : ''}
        </div>
      `).join('');
    } else {
      ultHtml = `<div style="color: var(--text-muted); font-style: italic;">—</div>`;
    }

    // Traits HTML
    let traitsHtml = '';
    const t = char.traits || {};
    const traitList = [
      { key: 'NormalAttack', label: dict.normalAttack, icon: '⚔️' },
      { key: 'Feature', label: dict.heroineFeature, icon: '🧬' },
      { key: 'Race', label: dict.raceTrait, icon: '👑' },
      { key: 'Characteristic', label: dict.personalityTrait, icon: '💡' },
      { key: 'Unique', label: dict.uniqueTrait, icon: '⭐' }
    ];

    traitList.forEach(item => {
      const traitObj = t[item.key];
      if (traitObj && traitObj.name) {
        traitsHtml += `
          <div class="trait-card-item">
            <div class="trait-name-row">
              <span>${item.icon} ${this.escapeHtml(traitObj.name)}</span>
              <span class="tag-badge" style="font-size: 10px;">${item.label || item.key}</span>
            </div>
            <div class="trait-desc">${this.escapeHtml(traitObj.effect || traitObj.description || '')}</div>
          </div>
        `;
      }
    });

    if (!traitsHtml) {
      traitsHtml = `<div style="color: var(--text-muted); font-style: italic;">—</div>`;
    }

    // Exclusive Talents HTML
    let talentsHtml = '';
    if (char.exclusive_talents && char.exclusive_talents.length > 0) {
      talentsHtml = char.exclusive_talents.map(et => `
        <div class="talent-card-item">
          <div class="talent-rank-header">
            <span>✨ Rank ${et.rank}: ${this.escapeHtml(et.name)}</span>
          </div>
          <div class="talent-desc">${this.escapeHtml(et.effect || et.description || '')}</div>
        </div>
      `).join('');
    }

    // Exclusive Relic HTML
    let relicHtml = '';
    const er = char.exclusive_relic;
    if (er && er.name) {
      relicHtml = `
        <div class="trait-card-item" style="border-left: 3px solid #ec4899;">
          <div class="trait-name-row">
            <span>🔮 ${this.escapeHtml(er.name)} <span style="font-size: 11px; opacity: 0.7;">(Tier: ${er.step}, Max Lv: ${er.max_level})</span></span>
          </div>
          <div class="trait-desc">${this.escapeHtml(er.effect)}</div>
        </div>
      `;
    }

    // Ingredients HTML
    let matsHtml = '';
    if (char.upgrade_ingredients && char.upgrade_ingredients.length > 0) {
      matsHtml = `
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${char.upgrade_ingredients.map(ing => `
            <span class="tag-badge" style="background: rgba(255,255,255,0.06); padding: 4px 10px; font-size: 12px;">
              💎 ${this.escapeHtml(typeof ing === 'object' ? ing.name : ing)}
            </span>
          `).join('')}
        </div>
      `;
    }

    return `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-area">
            ${portraitModalHtml}
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="tier-badge ${tierClass}">${char.rarity_tier}★</span>
                <span class="modal-title">${this.escapeHtml(char.name)} ${skinHtml}</span>
              </div>
              <div style="font-size: 12px; color: var(--text-muted); font-family: monospace;">ID: ${char.id} (${char.key})</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <button class="acc-btn ${isOwned ? 'secondary' : 'outline'}" style="padding: 6px 14px; font-size: 12px; border-radius: 20px;" onclick="App.toggleCharacterOwned('${char.id}'); App.openCharacterModal('${char.id}');">
              ${isOwned ? '⭐ ' + dict.owned : '☆ ' + dict.notOwned}
            </button>
            <button class="modal-close-btn" onclick="App.closeModal()">&times;</button>
          </div>
        </div>

        <div class="modal-body">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span class="tag-badge ${elemClass}">✨ ${this.escapeHtml(char.element || '')}</span>
            <span class="tag-badge">🛡️ ${this.escapeHtml(char.class || '')}</span>
            <span class="tag-badge">🧬 ${this.escapeHtml(char.creature_type || '')}</span>
            <span class="tag-badge">🎯 ${this.escapeHtml(char.combat_role || '')}</span>
            <span class="tag-badge">🗺️ ${this.escapeHtml(char.map_terrain || '')}</span>
          </div>

          <!-- Base Stats Table -->
          <div class="detail-section">
            <div class="section-heading">📊 ${dict.baseStats} (${dict.level1Stats})</div>
            <table class="stat-table">
              <thead>
                <tr>
                  <th>HP</th><th>ATK</th><th>DEF</th><th>STR</th><th>INT</th><th>DEX</th><th>SPD</th><th>Tenacity</th><th>Weakness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="color: #38bdf8;">${bs.cons_hp || 0}</td>
                  <td style="color: #f87171;">${bs.atk_attack || 0}</td>
                  <td style="color: #fbbf24;">${bs.def_defence || 0}</td>
                  <td>${bs.str_power || 0}</td>
                  <td>${bs.int_spirit || 0}</td>
                  <td>${bs.dex_agility || 0}</td>
                  <td>${bs.spd_speed || 0}</td>
                  <td>${bs.tough_tenacity || 0}</td>
                  <td>${bs.weak_vulnerability || 0}</td>
                </tr>
              </tbody>
            </table>
            ${char.growth_profile && char.growth_profile.length > 0 ? `
              <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                📈 <strong>${dict.statGrowth}:</strong> ${char.growth_profile.slice(0, 8).join(', ')}...
              </div>
            ` : ''}
          </div>

          <!-- Ultimates -->
          <div class="detail-section">
            <div class="section-heading">⚔️ ${dict.ultimateSkill}</div>
            ${ultHtml}
          </div>

          <!-- Traits & Talents -->
          <div class="detail-section">
            <div class="section-heading">🧬 ${dict.passiveTraits}</div>
            <div class="traits-container">
              ${traitsHtml}
            </div>
          </div>

          <!-- Exclusive Talents -->
          ${talentsHtml ? `
            <div class="detail-section">
              <div class="section-heading">🌟 ${dict.exclusiveTalents}</div>
              <div class="traits-container">
                ${talentsHtml}
              </div>
            </div>
          ` : ''}

          <!-- Signature Relics -->
          ${relicsHtml ? `
            <div class="detail-section">
              <div class="section-heading">🔮 ${dict.signatureRelic}</div>
              <div class="traits-container">
                ${relicsHtml}
              </div>
            </div>
          ` : ''}

          <!-- Ascension Materials -->
          ${matsHtml ? `
            <div class="detail-section">
              <div class="section-heading">💎 ${dict.upgradeMaterials}</div>
              ${matsHtml}
            </div>
          ` : ''}

          <!-- Recommendations -->
          ${char.team_recommendations && Object.values(char.team_recommendations).some(Boolean) ? `
            <div class="detail-section">
              <div class="section-heading">💡 ${dict.teamRecommendations}</div>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; font-size: 12px;">
                ${char.team_recommendations.front ? `<div><strong style="color: var(--text-muted);">Front:</strong> ${this.escapeHtml(char.team_recommendations.front)}</div>` : ''}
                ${char.team_recommendations.mid ? `<div><strong style="color: var(--text-muted);">Mid:</strong> ${this.escapeHtml(char.team_recommendations.mid)}</div>` : ''}
                ${char.team_recommendations.back ? `<div><strong style="color: var(--text-muted);">Back:</strong> ${this.escapeHtml(char.team_recommendations.back)}</div>` : ''}
                ${char.team_recommendations.recommended_character ? `<div><strong style="color: var(--text-muted);">Partner:</strong> ${this.escapeHtml(char.team_recommendations.recommended_character)}</div>` : ''}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  },

  getElementClass(element) {
    if (!element) return '';
    const el = element.toLowerCase();
    if (el.includes('огонь') || el.includes('fire')) return 'elem-fire';
    if (el.includes('вода') || el.includes('water')) return 'elem-water';
    if (el.includes('ветер') || el.includes('wind')) return 'elem-wind';
    if (el.includes('земля') || el.includes('earth')) return 'elem-earth';
    if (el.includes('свет') || el.includes('light')) return 'elem-light';
    if (el.includes('тьма') || el.includes('dark')) return 'elem-dark';
    return '';
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
