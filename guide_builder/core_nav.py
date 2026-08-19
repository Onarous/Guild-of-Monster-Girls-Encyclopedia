# -*- coding: utf-8 -*-

def get_core_nav_code():
    return """
  activeSection: 'tips',
  lastContainerId: 'guidesContainer',
  tilesFilter: 'all',
  tilesSearchQuery: '',
  isNavCollapsedMobile: false,
  defaultMapTiles: (typeof defaultMapTiles !== 'undefined' ? defaultMapTiles : []),

  setSection(sectionId) {
    this.activeSection = sectionId;
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    const containerId = this.lastContainerId || 'guidesContainer';
    this.render(containerId, lang);
    if (typeof App !== 'undefined' && App.updateUrl) {
      App.updateUrl('guides', sectionId);
    }
    const panel = document.querySelector('.guides-content-panel');
    if (panel) {
      panel.scrollTop = 0;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  setTilesFilter(filter) {
    this.tilesFilter = filter;
    this.activeSection = 'tiles';
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    this.render(this.lastContainerId || 'guidesContainer', lang);
  },

  setTilesSearch(query) {
    this.tilesSearchQuery = String(query).toLowerCase().trim();
    this.activeSection = 'tiles';
    const searchInput = document.getElementById('tilesSearchInput');
    const cursor = searchInput ? searchInput.selectionStart : null;
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    this.render(this.lastContainerId || 'guidesContainer', lang);
    const newSearchInput = document.getElementById('tilesSearchInput');
    if (newSearchInput && cursor !== null) {
      newSearchInput.focus();
      newSearchInput.setSelectionRange(cursor, cursor);
    }
  },

  setKeywordsFilter(filter) {
    this.keywordsFilter = filter;
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    this.render(this.lastContainerId || 'guidesContainer', lang);
  },

  setKeywordsSearch(query) {
    this.keywordsSearchQuery = String(query).toLowerCase().trim();
    const searchInput = document.getElementById('keywordsSearchInput');
    const cursor = searchInput ? searchInput.selectionStart : null;
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    this.render(this.lastContainerId || 'guidesContainer', lang);
    const newSearchInput = document.getElementById('keywordsSearchInput');
    if (newSearchInput && cursor !== null) {
      newSearchInput.focus();
      newSearchInput.setSelectionRange(cursor, cursor);
    }
  },

  setCodesFilter(filter) {
    this.codesFilter = filter;
    const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    const container = document.getElementById(this.lastContainerId || 'guidesContainer');
    if (container) {
      this.render(container.id, App.state.lang);
    }
  },

  toggleNavMobile(e) {
    if (e) e.stopPropagation();
    this.isNavCollapsedMobile = !this.isNavCollapsedMobile;
    const sidebar = document.querySelector('.guides-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('nav-collapsed', this.isNavCollapsedMobile);
      const toggleText = sidebar.querySelector('.guides-toggle-text');
      if (toggleText) {
        const lang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
        const isRu = lang === 'RU';
        const isCn = lang === 'CN';
        toggleText.textContent = this.isNavCollapsedMobile 
          ? (isRu ? 'Развернуть ▾' : isCn ? '展开 ▾' : 'Expand ▾')
          : (isRu ? 'Скрыть ▴' : isCn ? '收起 ▴' : 'Hide ▴');
      }
    }
  },

  copyPromoCode(code, btnId, lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(() => {
        if (typeof App !== 'undefined' && App.showToast) {
          App.showToast(isRu ? `Код ${code} скопирован!` : isCn ? `已复制兑换码 ${code}` : `Copied code ${code}!`);
        } else {
          alert(isRu ? `Код ${code} скопирован!` : isCn ? `已复制兑换码 ${code}` : `Copied code ${code}!`);
        }
      });
    } else {
      prompt(isRu ? 'Скопируйте промокод:' : isCn ? '复制兑换码:' : 'Copy code:', code);
    }
  },

  render(containerId = null, currentLang = null) {
    const targetId = containerId || this.lastContainerId || 'guidesContainer';
    this.lastContainerId = targetId;
    const container = document.getElementById(targetId);
    if (!container) return;

    const currentAppLang = (typeof App !== 'undefined' && App.state?.lang) ? App.state.lang : 'RU';
    const effectiveLang = currentLang || currentAppLang || 'RU';
    const lang = effectiveLang.toUpperCase();
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const menuItems = [
      { id: 'tips', icon: '💡', title: isRu ? 'Советы новичкам и Экономика' : isCn ? '萌新避坑与资源经济' : 'Beginner Tips & Economy' },
      { id: 'tiles', icon: '🗺️', title: isRu ? 'Тайлы и Дроп на поле' : isCn ? '地块类型与掉落图鉴' : 'Map Tiles & Drop Rates' },
      { id: 'phases', icon: '⚔️', title: isRu ? 'Фазы боя и порядок ходов' : isCn ? '战斗阶段与行动顺序' : 'Battle Phases & Turn Order' },
      { id: 'targeting', icon: '🎯', title: isRu ? 'Дистанция и Таргетинг' : isCn ? '攻击距离与目标选择' : 'Range, Distance & Targeting' },
      { id: 'damage', icon: '🛡️', title: isRu ? 'Урон, Защита и Баффы' : isCn ? '伤害计算、护盾与增益' : 'Damage Formulas, Shields & Buffs' },
      { id: 'elements', icon: '✨', title: isRu ? 'Стихии, Роли и Отряд' : isCn ? '元素克制、定位与配队' : 'Elements, Roles & Lineup' },
      { id: 'builds', icon: '🏆', title: isRu ? 'Лучшие сборки и Мета-отряды' : isCn ? '最佳阵容与流派推荐' : 'Best Builds & Meta Lineups' },
      { id: 'farming', icon: '🌾', title: isRu ? 'Фарм, Звездность и Удача' : isCn ? '装备刷取、升星与幸运' : 'Farming, Gear Stars & Luck' },
      { id: 'talents', icon: '🍇', title: isRu ? 'Плоды Талантов и Дублирование' : isCn ? '天赋果实、保底与转移' : 'Talent Fruits & Transfer' },
      { id: 'chests', icon: '📦', title: isRu ? 'Сундуки: Сливать или Открывать' : isCn ? '宝箱策略：开启还是合并' : 'Chest Guide: Merge or Open' },
      { id: 'localization', icon: '🔍', title: isRu ? 'Ошибки перевода и Термины' : isCn ? '官方翻译勘误与术语' : 'Localization Bugs & Terms' },
      { id: 'gacha', icon: '🎪', title: isRu ? 'Списки найма и Баннеры' : isCn ? '招募卡池与掉落列表' : 'Recruit Pools & Gacha Lists' },
      { id: 'events', icon: '🎁', title: isRu ? 'Список игровых событий' : isCn ? '活动与限时事件列表' : 'Game Events & Activities' },
      { id: 'codes', icon: '🎟️', title: isRu ? 'Промокоды и Подарки' : isCn ? '礼包兑换码汇总' : 'Promo & Redeem Codes' },
      { id: 'resources', icon: '🌐', title: isRu ? 'Сообщество и Ресурсы' : isCn ? '官方社区与攻略' : 'Community & Resources' }
    ];

    const activeItem = menuItems.find(m => m.id === this.activeSection) || menuItems[0];
    const contentHtml = this.getSectionContent(this.activeSection, lang);

    container.innerHTML = `
      <div class="guides-wrapper">
        <aside class="guides-sidebar ${this.isNavCollapsedMobile ? 'nav-collapsed' : ''}">
          <div class="guides-sidebar-header" onclick="GuidesView.toggleNavMobile(event)">
            <div class="guides-sidebar-title">
              <span style="font-size: 16px;">📚</span>
              <span class="guides-toc-label">${isRu ? 'Оглавление' : isCn ? '攻略目录' : 'Knowledge Base'}</span>
              <span class="guides-active-chapter-pill">
                <span>${activeItem.icon}</span>
                <span class="guides-pill-text">${activeItem.title}</span>
              </span>
            </div>
            <button class="guides-toggle-btn" type="button" onclick="GuidesView.toggleNavMobile(event)" aria-label="Скрыть/показать оглавление">
              <span class="guides-toggle-text">${this.isNavCollapsedMobile ? (isRu ? 'Развернуть ▾' : isCn ? '展开 ▾' : 'Expand ▾') : (isRu ? 'Скрыть ▴' : isCn ? '收起 ▴' : 'Hide ▴')}</span>
            </button>
          </div>
          <div class="guides-nav-list">
            ${menuItems.map((item, idx) => `
              <button class="guide-nav-btn ${this.activeSection === item.id ? 'active' : ''}" onclick="GuidesView.setSection('${item.id}')">
                <span class="guide-nav-num">${idx + 1}</span>
                <span class="guide-nav-icon">${item.icon}</span>
                <span class="guide-nav-text">${item.title}</span>
                ${this.activeSection === item.id ? '<span class="guide-nav-active-mark">●</span>' : ''}
              </button>
            `).join('')}
          </div>
        </aside>

        <section class="guides-content-panel">
          ${contentHtml}
        </section>
      </div>
    `;
  },

  getSectionContent(sectionId, lang) {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    switch (sectionId) {
      case 'tips':
        return this.getTipsContent(lang);
      case 'tiles':
        return this.getTilesContent(lang);
      case 'phases':
        return isRu ? this.getPhasesRU() : (isCn ? this.getPhasesCN() : this.getPhasesEN());
      case 'targeting':
        return isRu ? this.getTargetingRU() : (isCn ? this.getTargetingCN() : this.getTargetingEN());
      case 'damage':
        return isRu ? this.getDamageRU() : (isCn ? this.getDamageCN() : this.getDamageEN());
      case 'elements':
        return isRu ? this.getElementsRU() : (isCn ? this.getElementsCN() : this.getElementsEN());
      case 'builds':
        return this.getBuildsContent(lang);
      case 'farming':
        return this.getFarmingContent(lang);
      case 'talents':
        return this.getTalentsContent(lang);
      case 'chests':
        return this.getChestsContent(lang);
      case 'localization':
        return this.getLocalizationContent(lang);
      case 'gacha':
      case 'banners':
        return this.getGachaContent(lang);
      case 'events':
        return this.getEventsContent(lang);
      case 'codes':
        return this.getCodesContent(lang);
      case 'resources':
        return this.getResourcesContent(lang);
      default:
        return this.getTipsContent(lang);
    }
  },
"""
