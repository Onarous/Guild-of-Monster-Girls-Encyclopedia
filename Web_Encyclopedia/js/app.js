/**
 * Main Application Orchestrator for Guild of Monster Girls Web Encyclopedia
 * Integrated with in-browser localStorage Account Manager & Save Sync.
 */

const App = {
  state: {
    lang: "RU",
    activeTab: "characters",
    itemCategory: "equipment",
    searchQuery: "",
    sortBy: "rarity",
    collectionFilter: "owned", // "owned" | "missing" | "all"
    filters: {
      rarity: "all",
      class: "all",
      element: "all",
      role: "all",
      banner: "all",
      slot: "all"
    },
    accountData: null,
    ownedRoleIds: new Set(),
    imageMappings: {},
    data: {
      characters: { RU: [], EN: [], CN: [] },
      items: { RU: null, EN: null, CN: null }
    }
  },

  async init() {
    this.bindEvents();
    await this.loadImageMappings();
    this.loadAccountData();
    await this.loadDatasets(this.state.lang);
    this.updateLanguageUI();
    this.render();
    await this.checkUrlTokenParam();
  },

  async checkUrlTokenParam() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      let token = urlParams.get('token') || urlParams.get('auth_token') || urlParams.get('t');
      if (!token && window.location.hash) {
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        token = hashParams.get('token') || hashParams.get('auth_token');
      }

      if (token) {
        const match = token.match(/[a-f0-9]{32}/i);
        if (match) {
          const cleanToken = match[0].toLowerCase();
          const cleanUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);

          await this.syncTokenDirectly(cleanToken);
          this.setTab('collection');
        }
      }
    } catch (e) {
      console.warn("URL token check error:", e);
    }
  },

  async syncTokenDirectly(token) {
    try {
      const res = await fetch("/api/auth/sync_token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
      });
      const json = await res.json();
      if (json.success && json.data) {
        const d = json.data;
        this.saveAccountDataToStorage(d, d.ownedIds || [], token);
        alert(`⚡ Успешная синхронизация через Shizuku / Ссылку!\n\nЗагружено ${d.ownedIds?.length || 0} персонажей.`);
        return;
      }
    } catch (err) {
      console.warn("Direct token sync error:", err);
    }
    this.saveAccountDataToStorage({ token }, this.state.ownedRoleIds, token);
  },

  async loadImageMappings() {
    try {
      const res = await fetch('data/image_mappings.json');
      if (res.ok) {
        this.state.imageMappings = await res.json();
      }
    } catch (e) {
      console.warn("Could not load image mappings:", e);
    }
  },

  loadAccountData() {
    try {
      // 1. Try loading from browser localStorage
      const savedAcc = localStorage.getItem('mg_account_data');
      const savedIds = localStorage.getItem('mg_owned_ids');

      if (savedAcc || savedIds) {
        if (savedAcc) {
          this.state.accountData = JSON.parse(savedAcc);
        }
        if (savedIds) {
          const ids = JSON.parse(savedIds);
          if (Array.isArray(ids)) {
            this.state.ownedRoleIds = new Set(ids);
          }
        }
        console.log(`Loaded ${this.state.ownedRoleIds.size} owned characters from browser localStorage.`);
        return;
      }

      // 2. Fallback: try loading local account_roles.json or roster.json if available
      fetch('data/account_roles.json')
        .then(res => res.ok ? res.json() : null)
        .then(acc => {
          if (acc && Array.isArray(acc.owned_roles)) {
            acc.owned_roles.forEach(r => {
              if (r.id) this.state.ownedRoleIds.add(r.id);
              if (r.key) this.state.ownedRoleIds.add(r.key);
            });
            this.state.accountData = { token: "", owned_roles: acc.owned_roles };
            this.render();
          }
        })
        .catch(() => {});
    } catch (e) {
      console.warn("Error loading account data:", e);
    }
  },

  saveAccountDataToStorage(data, ownedIds, token = "", account = "") {
    try {
      const accObj = {
        account: account || data?.account || localStorage.getItem('mg_saved_account') || "",
        token: token || data?.token || localStorage.getItem('mg_auth_token') || "",
        gold: data?.gold,
        gem: data?.gem,
        clover: data?.clover,
        fish: data?.fish,
        updated_at: new Date().toISOString()
      };
      
      localStorage.setItem('mg_account_data', JSON.stringify(accObj));
      localStorage.setItem('mg_owned_ids', JSON.stringify(Array.from(ownedIds)));
      if (token) localStorage.setItem('mg_auth_token', token);
      if (account) localStorage.setItem('mg_saved_account', account);

      this.state.accountData = accObj;
      this.state.ownedRoleIds = new Set(ownedIds);
      
      this.render();
    } catch (e) {
      console.error("Error saving account to localStorage:", e);
    }
  },

  toggleCharacterOwned(charId, event) {
    if (event) event.stopPropagation();
    if (this.state.ownedRoleIds.has(charId)) {
      this.state.ownedRoleIds.delete(charId);
    } else {
      this.state.ownedRoleIds.add(charId);
    }
    this.saveAccountDataToStorage(
      this.state.accountData || {},
      this.state.ownedRoleIds,
      this.state.accountData?.token || localStorage.getItem('mg_auth_token') || ""
    );
  },

  async loginWithToken() {
    const input = document.getElementById('accTokenInput');
    let raw = input ? input.value.trim() : "";
    if (!raw) {
      alert("Пожалуйста, введите токен авторизации или ссылку из игры / Please enter an auth token or in-game link.");
      return;
    }

    // Auto-extract 32-character hex token from URL or text
    let token = raw;
    const urlMatch = raw.match(/(?:token|auth_token|sessionId)=([a-f0-9]{32})/i) || raw.match(/([a-f0-9]{32})/i);
    if (urlMatch) {
      token = urlMatch[1];
    }

    try {
      const res = await fetch("/api/auth/sync_token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
      });
      const json = await res.json();
      if (json.success && json.data) {
        const d = json.data;
        this.saveAccountDataToStorage(d, d.ownedIds || [], token);
        alert(`Успешно синхронизировано ${d.ownedIds?.length || 0} персонажей!`);
        return;
      }
    } catch (err) {
      console.warn("Server sync error, saving token locally:", err);
    }

    // Fallback: save token anyway
    this.saveAccountDataToStorage({ token }, this.state.ownedRoleIds, token);
    alert(`Токен сохранен в браузере!\nДля мгновенной загрузки коллекции нажмите "Загрузить файл сохранения" и выберите monster_girls_roster.json.`);
  },

  async refreshConnectedDevices() {
    const select = document.getElementById('adbDeviceSelect');
    if (!select) return;
    const lang = this.state.lang;
    const dict = I18N[lang] || I18N.RU;

    try {
      const res = await fetch("/api/auth/devices");
      const json = await res.json();
      if (json.success && Array.isArray(json.devices)) {
        const devs = json.devices;
        select.innerHTML = `<option value="">${dict.accAutoDetectDevice}</option>`;
        if (devs.length === 0) {
          select.innerHTML += `<option value="" disabled>⚠️ ${dict.accNoDevicesFound}</option>`;
        } else {
          devs.forEach(d => {
            const isOffline = d.status === 'offline';
            const icon = d.id.startsWith('emulator') ? '🖥️' : '📱';
            select.innerHTML += `<option value="${d.id}" ${isOffline ? 'disabled' : ''}>${icon} ${d.label} [${d.status}]</option>`;
          });
        }
      }
    } catch (e) {
      console.warn("Could not load ADB devices:", e);
    }
  },

  async autoSyncFromDevice() {
    const devSelect = document.getElementById('adbDeviceSelect');
    const device_id = devSelect ? devSelect.value : "";

    try {
      const res = await fetch("/api/auth/device_auto_sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ device_id: device_id || undefined })
      });
      const json = await res.json();
      if (json.success && json.data) {
        const d = json.data;
        const accName = d.account || (json.device?.email || `ID: ${json.device?.user_id || 'Player'}`);
        this.saveAccountDataToStorage(d, d.ownedIds || [], d.token, accName);
        alert(`⚡ Авто-синхронизация успешна!\n\nУстройство: ${json.device?.device_id || 'Android'}\nАккаунт: ${accName}\nЗагружено персонажей: ${d.ownedIds?.length || 0}`);
      } else {
        alert(json.message || "Не удалось обнаружить запущенную игру в эмуляторе или на выбранном устройстве. Запустите игру и попробуйте снова.");
      }
    } catch (e) {
      alert("Ошибка авто-синхронизации: " + e.message);
    }
  },

  importSaveFile(event) {
    let file = null;
    if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      file = event.dataTransfer.files[0];
    } else if (event.target && event.target.files && event.target.files.length > 0) {
      file = event.target.files[0];
    }
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        const parsed = CollectionView.parseSaveData(json);
        if (parsed && parsed.ownedIds.length > 0) {
          this.saveAccountDataToStorage(parsed, parsed.ownedIds);
          alert(`Успешно импортировано ${parsed.ownedIds.length} персонажей в коллекцию!`);
        } else {
          alert("Не удалось обнаружить персонажей в выбранном файле.");
        }
      } catch (err) {
        alert("Ошибка чтения JSON файла: " + err.message);
      }
    };
    reader.readAsText(file, "UTF-8");
  },

  showPasteJsonModal() {
    const modal = document.getElementById('detailModal');
    modal.innerHTML = `
      <div class="modal-dialog" style="max-width: 540px;">
        <div class="modal-header">
          <div class="modal-title">📋 Вставить JSON сохранения вручную</div>
          <button class="modal-close-btn" onclick="App.closeModal()">&times;</button>
        </div>
        <div class="modal-body" style="display: flex; flex-direction: column; gap: 14px;">
          <p style="font-size: 13px; color: var(--text-secondary);">Вставьте содержимое файла <code>monster_girls_roster.json</code> или массив ID персонажей:</p>
          <textarea id="rawJsonTextarea" style="width: 100%; height: 160px; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 6px; color: #fff; padding: 10px; font-family: monospace; font-size: 12px; resize: vertical;" placeholder='{"roster": [...]} или ["M21302", "M13307"]'></textarea>
          <div style="display: flex; justify-content: flex-end; gap: 10px;">
            <button class="acc-btn outline" onclick="App.closeModal()">Отмена</button>
            <button class="acc-btn primary" onclick="App.processPastedJson()">💾 Сохранить в коллекцию</button>
          </div>
        </div>
      </div>
    `;
    modal.classList.add('active');
  },

  processPastedJson() {
    const textarea = document.getElementById('rawJsonTextarea');
    if (!textarea) return;
    const text = textarea.value.trim();
    if (!text) return;

    try {
      const json = JSON.parse(text);
      const parsed = CollectionView.parseSaveData(json);
      if (parsed && parsed.ownedIds.length > 0) {
        this.saveAccountDataToStorage(parsed, parsed.ownedIds);
        this.closeModal();
        alert(`Успешно сохранено ${parsed.ownedIds.length} персонажей!`);
      } else {
        alert("Не удалось найти ID персонажей в введенном JSON.");
      }
    } catch (e) {
      alert("Некорректный JSON: " + e.message);
    }
  },

  refreshAccountData() {
    const token = this.state.accountData?.token || localStorage.getItem('mg_auth_token');
    if (!token) {
      alert("Токен не задан. Введите токен или загрузите файл сохранения.");
      return;
    }
    const input = document.getElementById('accTokenInput');
    if (input) input.value = token;
    this.loginWithToken();
  },

  logoutAccount() {
    if (confirm("Вы уверены, что хотите выйти и очистить сохраненные данные коллекции из браузера?")) {
      localStorage.removeItem('mg_account_data');
      localStorage.removeItem('mg_owned_ids');
      localStorage.removeItem('mg_auth_token');
      this.state.accountData = null;
      this.state.ownedRoleIds.clear();
      this.render();
    }
  },

  setCollectionFilter(filter) {
    this.state.collectionFilter = filter;
    this.render();
  },

  async loadDatasets(lang) {
    const langKey = lang.toLowerCase();
    
    // Load characters if not cached
    if (!this.state.data.characters[lang] || this.state.data.characters[lang].length === 0) {
      try {
        const res = await fetch(`data/characters_${langKey}.json`);
        if (res.ok) {
          this.state.data.characters[lang] = await res.json();
        }
      } catch (e) {
        console.error("Error loading characters dataset:", e);
      }
    }

    // Load items if not cached
    if (!this.state.data.items[lang] || Object.keys(this.state.data.items[lang]).length === 0) {
      try {
        const res = await fetch(`data/items_${langKey}.json`);
        if (res.ok) {
          this.state.data.items[lang] = await res.json();
        }
      } catch (e) {
        console.error("Error loading items dataset:", e);
      }
    }
  },

  setLanguage(lang) {
    if (this.state.lang === lang) return;
    this.state.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    this.loadDatasets(lang).then(() => {
      this.updateLanguageUI();
      this.render();
    });
  },

  setTab(tab) {
    if (this.state.activeTab === tab) return;
    this.state.activeTab = tab;
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    const isGuides = tab === 'guides';
    const isItems = tab === 'items' || tab === 'bonds';
    const isBonds = tab === 'bonds';
    if (isBonds) this.state.itemCategory = 'bonds';

    const toolbar = document.querySelector('.control-toolbar');
    const metaRow = document.querySelector('.results-meta-row');
    const cardsGrid = document.getElementById('cardsGrid');
    const guidesContainer = document.getElementById('guidesContainer');

    if (toolbar) toolbar.style.display = isGuides ? 'none' : 'block';
    if (metaRow) metaRow.style.display = isGuides ? 'none' : 'flex';
    if (cardsGrid) cardsGrid.style.display = isGuides ? 'none' : 'grid';
    if (guidesContainer) guidesContainer.style.display = isGuides ? 'block' : 'none';

    document.getElementById('itemCategoryBar').style.display = isItems && !isBonds ? 'flex' : 'none';
    document.getElementById('slotFilterRow').style.display = isItems ? 'flex' : 'none';
    document.getElementById('roleFilterRow').style.display = isItems || isGuides ? 'none' : 'flex';
    document.getElementById('bannerFilterRow').style.display = isItems || isGuides ? 'none' : 'flex';
    document.getElementById('sortGroup').style.display = isItems || isGuides ? 'none' : 'flex';

    this.render();
    if (tab === 'collection') {
      setTimeout(() => this.refreshConnectedDevices(), 60);
    }
  },

  setItemCategory(cat) {
    this.state.itemCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === cat);
    });
    this.render();
  },

  setFilter(type, value) {
    this.state.filters[type] = value;
    document.querySelectorAll(`.filter-pill[data-filter-type="${type}"]`).forEach(p => {
      p.classList.toggle('active', p.dataset.filterVal === value);
    });
    this.render();
  },

  resetFilters() {
    this.state.searchQuery = "";
    document.getElementById('searchInput').value = "";
    this.state.filters = {
      rarity: "all",
      class: "all",
      element: "all",
      slot: "all",
      role: "all",
      banner: "all"
    };
    document.querySelectorAll('.filter-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.filterVal === "all");
    });
    this.render();
  },

  render() {
    const lang = this.state.lang;
    const tab = this.state.activeTab;
    const collHeaderEl = document.getElementById('collectionHeaderContainer');

    if (tab === 'guides') {
      if (collHeaderEl) collHeaderEl.style.display = 'none';
      GuidesView.render('guidesContainer', lang);
      return;
    }

    if (tab === 'collection') {
      if (collHeaderEl) {
        collHeaderEl.style.display = 'block';
        const totalChars = (this.state.data.characters[lang] || []).length || 204;
        collHeaderEl.innerHTML = CollectionView.renderHeader(
          this.state.accountData,
          this.state.ownedRoleIds,
          totalChars,
          lang,
          this.state.collectionFilter
        );
      }

      let list = this.state.data.characters[lang] || [];
      if (this.state.collectionFilter === 'owned') {
        list = list.filter(c => this.state.ownedRoleIds.has(c.id) || this.state.ownedRoleIds.has(c.key));
      } else if (this.state.collectionFilter === 'missing') {
        list = list.filter(c => !this.state.ownedRoleIds.has(c.id) && !this.state.ownedRoleIds.has(c.key));
      }
      list = this.filterAndSortCharacters(list);
      CharactersView.renderList(list, 'cardsGrid', lang, this.state.ownedRoleIds, this.state.imageMappings);
      this.updateResultCount(list.length);
    } 
    else if (tab === 'characters') {
      if (collHeaderEl) collHeaderEl.style.display = 'none';
      let list = this.state.data.characters[lang] || [];
      list = this.filterAndSortCharacters(list);
      CharactersView.renderList(list, 'cardsGrid', lang, this.state.ownedRoleIds, this.state.imageMappings);
      this.updateResultCount(list.length);
    } 
    else {
      if (collHeaderEl) collHeaderEl.style.display = 'none';
      let itemsObj = this.state.data.items[lang] || {};
      let cat = tab === 'bonds' ? 'bonds' : this.state.itemCategory;
      let list = itemsObj[cat] || [];
      list = this.filterItems(list);
      ItemsView.renderList({ [cat]: list }, cat, 'cardsGrid', lang, this.state.imageMappings);
      this.updateResultCount(list.length);
    }
  },

  matchClass(val, key) {
    if (!key || key === 'all') return true;
    const v = String(val).toLowerCase();
    if (key === 'warrior') return v.includes('воин') || v.includes('warrior') || v.includes('战士');
    if (key === 'archer') return v.includes('стрелок') || v.includes('лучниц') || v.includes('archer') || v.includes('射手');
    if (key === 'mage') return v.includes('маг') || v.includes('колдун') || v.includes('mage') || v.includes('法师');
    if (key === 'cleric') return v.includes('жрица') || v.includes('клирик') || v.includes('priest') || v.includes('cleric') || v.includes('牧师');
    return true;
  },

  matchElement(val, key) {
    if (!key || key === 'all') return true;
    const v = String(val).toLowerCase();
    if (key === 'fire') return v.includes('огонь') || v.includes('плам') || v.includes('fire') || v.includes('火');
    if (key === 'water') return v.includes('вода') || v.includes('водн') || v.includes('water') || v.includes('水');
    if (key === 'wind') return v.includes('ветер') || v.includes('ветр') || v.includes('wind') || v.includes('风');
    if (key === 'earth') return v.includes('земля') || v.includes('землян') || v.includes('earth') || v.includes('地');
    if (key === 'light') return v.includes('свет') || v.includes('light') || v.includes('光');
    if (key === 'dark') return v.includes('тьма') || v.includes('темн') || v.includes('dark') || v.includes('暗');
    return true;
  },

  matchRole(val, key) {
    if (!key || key === 'all') return true;
    const v = String(val).toLowerCase();
    if (key === 'dps') return v.includes('урон') || v.includes('увс') || v.includes('дд') || v.includes('damage') || v.includes('dps') || v.includes('输出');
    if (key === 'tank') return v.includes('защит') || v.includes('танк') || v.includes('defense') || v.includes('tank') || v.includes('防御');
    if (key === 'healer') return v.includes('исцелен') || v.includes('лекар') || v.includes('хил') || v.includes('healing') || v.includes('healer') || v.includes('治疗');
    if (key === 'support') return v.includes('поддержк') || v.includes('саппорт') || v.includes('support') || v.includes('辅助');
    return true;
  },

  matchSlot(val, key) {
    if (!key || key === 'all') return true;
    const v = String(val).toLowerCase();
    if (key === 'main_hand') return v.includes('оружие') || v.includes('main') || v.includes('weapon') || v.includes('主手');
    if (key === 'body') return v.includes('броня') || v.includes('доспех') || v.includes('body') || v.includes('armor') || v.includes('robe') || v.includes('身体');
    if (key === 'head') return v.includes('шлем') || v.includes('головной') || v.includes('head') || v.includes('helmet') || v.includes('头部');
    if (key === 'boots') return v.includes('обувь') || v.includes('сапог') || v.includes('boots') || v.includes('shoes') || v.includes('鞋子');
    if (key === 'gloves') return v.includes('перчат') || v.includes('наруч') || v.includes('gloves') || v.includes('gauntlets') || v.includes('护手');
    if (key === 'belt') return v.includes('пояс') || v.includes('belt') || v.includes('sash') || v.includes('腰带');
    if (key === 'ring') return v.includes('кольцо') || v.includes('ring') || v.includes('戒指');
    if (key === 'necklace') return v.includes('ожерелье') || v.includes('амулет') || v.includes('necklace') || v.includes('amulet') || v.includes('项链');
    if (key === 'badge') return v.includes('эмблема') || v.includes('знак') || v.includes('badge') || v.includes('insignia') || v.includes('徽章');
    return true;
  },

  filterAndSortCharacters(list) {
    const q = this.state.searchQuery.toLowerCase().trim();
    const f = this.state.filters;

    let res = list.filter(c => {
      if (f.rarity !== 'all' && c.rarity_tier !== f.rarity) return false;
      if (!this.matchClass(c.class, f.class)) return false;
      if (!this.matchElement(c.element, f.element)) return false;
      if (!this.matchRole(c.combat_role, f.role)) return false;
      if (f.banner && f.banner !== 'all' && c.banner_type !== f.banner) return false;

      if (q) {
        const text = `${c.name} ${c.name_cn || ''} ${c.skin_name || ''} ${c.id} ${c.class} ${c.element} ${c.banner_name || ''} ${c.filter_tags || ''} ${c.unique_skills && c.unique_skills[0] ? c.unique_skills[0].description : ''}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    const s = this.state.sortBy;
    const tierWeight = { 'SS': 5, 'S': 4, 'A': 3, 'B': 2, 'C': 1 };

    res.sort((a, b) => {
      if (s === 'name') return String(a.name).localeCompare(String(b.name));
      if (s === 'hp') return (b.base_stats?.cons_hp || 0) - (a.base_stats?.cons_hp || 0);
      if (s === 'atk') return (b.base_stats?.atk_attack || 0) - (a.base_stats?.atk_attack || 0);
      if (s === 'def') return (b.base_stats?.def_defence || 0) - (a.base_stats?.def_defence || 0);
      if (s === 'spd') return (b.base_stats?.spd_speed || 0) - (a.base_stats?.spd_speed || 0);
      if (s === 'int') return (b.base_stats?.int_spirit || 0) - (a.base_stats?.int_spirit || 0);
      if (s === 'str') return (b.base_stats?.str_power || 0) - (a.base_stats?.str_power || 0);
      if (s === 'dex') return (b.base_stats?.dex_agility || 0) - (a.base_stats?.dex_agility || 0);
      return (tierWeight[b.rarity_tier] || 0) - (tierWeight[a.rarity_tier] || 0);
    });

    return res;
  },

  filterItems(list) {
    const q = this.state.searchQuery.toLowerCase().trim();
    const f = this.state.filters;

    return list.filter(it => {
      const step = it.step || it.Step || '';
      if (f.rarity !== 'all' && step !== f.rarity) return false;
      if (!this.matchSlot(it.slot, f.slot)) return false;
      if (!this.matchClass(it.class_limit, f.class)) return false;
      if (!this.matchElement(it.element, f.element)) return false;

      if (q) {
        const text = `${it.name} ${it.name_cn || ''} ${it.id} ${it.slot || ''} ${it.description || ''} ${it.pure_bond?.effect || ''} ${it.enhance_ability?.effect || ''}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  },

  updateResultCount(count) {
    const dict = I18N[this.state.lang] || I18N.RU;
    document.getElementById('resultCount').innerHTML = `${dict.totalFound} <strong>${count}</strong>`;
  },

  updateLanguageUI() {
    const dict = I18N[this.state.lang] || I18N.RU;
    document.getElementById('appTitle').textContent = dict.appTitle;
    document.getElementById('appSubtitle').textContent = dict.appSubtitle;
    document.getElementById('tabCharacters').textContent = dict.navCharacters;
    document.getElementById('tabItems').textContent = dict.navItems;
    document.getElementById('tabBonds').textContent = dict.navBonds;
    document.getElementById('tabCollection').textContent = dict.navMyCollection;
    if (document.getElementById('tabGuides')) document.getElementById('tabGuides').textContent = dict.navGuides;
    document.getElementById('searchInput').placeholder = dict.searchPlaceholder;
    document.getElementById('resetFiltersBtn').textContent = dict.resetFilters;
    document.getElementById('sortLabel').textContent = dict.sortBy;

    // Filter Titles
    if (dict.filterTitles) {
      if (document.getElementById('filterTitleRarity')) document.getElementById('filterTitleRarity').textContent = dict.filterTitles.rarity;
      if (document.getElementById('filterTitleClass')) document.getElementById('filterTitleClass').textContent = dict.filterTitles.class;
      if (document.getElementById('filterTitleElement')) document.getElementById('filterTitleElement').textContent = dict.filterTitles.element;
      if (document.getElementById('filterTitleRole')) document.getElementById('filterTitleRole').textContent = dict.filterTitles.role;
      if (document.getElementById('filterTitleBanner')) document.getElementById('filterTitleBanner').textContent = dict.filterTitles.banner || 'Баннер:';
      if (document.getElementById('filterTitleSlot')) document.getElementById('filterTitleSlot').textContent = dict.filterTitles.slot;
    }

    // "All" filter pills
    document.querySelectorAll('.filter-pill[data-pill-all="true"]').forEach(p => {
      p.textContent = dict.all;
    });

    // Class pills
    if (dict.filterPills?.class) {
      Object.entries(dict.filterPills.class).forEach(([k, label]) => {
        const el = document.querySelector(`.filter-pill[data-pill-key="${k}"]`);
        if (el) el.textContent = label;
      });
    }

    // Element pills
    if (dict.filterPills?.element) {
      Object.entries(dict.filterPills.element).forEach(([k, label]) => {
        const el = document.querySelector(`.filter-pill[data-pill-key="${k}"]`);
        if (el) el.textContent = label;
      });
    }

    // Role pills
    if (dict.filterPills?.role) {
      Object.entries(dict.filterPills.role).forEach(([k, label]) => {
        const el = document.querySelector(`.filter-pill[data-pill-key="${k}"]`);
        if (el) el.textContent = label;
      });
    }

    // Banner pills
    if (dict.filterPills?.banner) {
      Object.entries(dict.filterPills.banner).forEach(([k, label]) => {
        const el = document.querySelector(`.filter-pill[data-filter-type="banner"][data-pill-key="${k}"]`);
        if (el) el.textContent = label;
      });
    }

    // Slot pills
    if (dict.filterPills?.slot) {
      Object.entries(dict.filterPills.slot).forEach(([k, label]) => {
        const el = document.querySelector(`.filter-pill[data-pill-key="${k}"]`);
        if (el) el.textContent = label;
      });
    }

    // Categories
    if (dict.categories) {
      Object.entries(dict.categories).forEach(([k, label]) => {
        const el = document.querySelector(`.cat-btn[data-cat="${k}"]`);
        if (el) el.textContent = label;
      });
    }

    // Sort Select options
    if (dict.sortOptions) {
      const sel = document.getElementById('sortSelect');
      if (sel) {
        Array.from(sel.options).forEach(opt => {
          if (dict.sortOptions[opt.value]) {
            opt.textContent = dict.sortOptions[opt.value];
          }
        });
      }
    }
  },

  openCharacterModal(id) {
    const lang = this.state.lang;
    const char = (this.state.data.characters[lang] || []).find(c => c.id === id);
    if (!char) return;

    const modal = document.getElementById('detailModal');
    modal.innerHTML = CharactersView.renderModal(char, lang, this.state.imageMappings, this.state.ownedRoleIds);
    modal.classList.add('active');
  },

  openItemModal(category, id) {
    const lang = this.state.lang;
    const list = this.state.data.items[lang]?.[category] || [];
    const item = list.find(i => i.id === id);
    if (!item) return;

    const modal = document.getElementById('detailModal');
    modal.innerHTML = ItemsView.renderModal(item, category, lang, this.state.imageMappings);
    modal.classList.add('active');
  },

  closeModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
  },

  bindEvents() {
    // Search with debounce
    let debounceTimer;
    document.getElementById('searchInput').addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        this.state.searchQuery = e.target.value;
        this.render();
      }, 150);
    });

    // Sort select
    document.getElementById('sortSelect').addEventListener('change', (e) => {
      this.state.sortBy = e.target.value;
      this.render();
    });

    // Close modal on outside click
    document.getElementById('detailModal').addEventListener('click', (e) => {
      if (e.target.id === 'detailModal') this.closeModal();
    });

    // Close modal on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  }
};

window.addEventListener('DOMContentLoaded', () => App.init());
