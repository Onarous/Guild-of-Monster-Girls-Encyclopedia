/**
 * Collection & Account Manager View Component for Guild of Monster Girls Web Encyclopedia
 * Supports Login by Username/Password, Email Code, Token, and Save File Import.
 * All credentials, tokens, and game data are persisted locally in browser localStorage.
 */

const CollectionView = {
  activeLoginTab: "webadb", // "webadb" | "token"

  setLoginTab(tab) {
    this.activeLoginTab = tab;
    document.querySelectorAll('.login-mode-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tab);
    });
    document.querySelectorAll('.login-tab-content').forEach(c => {
      c.style.display = c.dataset.tab === tab ? 'block' : 'none';
    });
  },

  renderHeader(accountData, ownedIds, totalCharacters, currentLang = "RU", collectionFilter = "owned") {
    const dict = I18N[currentLang] || I18N.RU;
    const ownedCount = ownedIds.size;
    const pct = totalCharacters > 0 ? Math.round((ownedCount / totalCharacters) * 100) : 0;
    const isLogged = accountData && (ownedCount > 0 || accountData.token || accountData.account);

    if (!isLogged) {
      return `
        <div class="account-connect-card">
          <div class="acc-header-info">
            <div class="acc-icon-badge">⚡</div>
            <div>
              <h2 class="acc-title">${dict.accConnectTitle}</h2>
              <p class="acc-desc">${dict.accConnectDesc}</p>
            </div>
          </div>

          <!-- Login Mode Tabs -->
          <div class="login-mode-tabs">
            <button class="login-mode-tab ${this.activeLoginTab === 'webadb' ? 'active' : ''}" data-tab="webadb" onclick="CollectionView.setLoginTab('webadb')">
              ${dict.loginTabWebAdb}
            </button>
            <button class="login-mode-tab ${this.activeLoginTab === 'token' ? 'active' : ''}" data-tab="token" onclick="CollectionView.setLoginTab('token')">
              ${dict.loginTabToken}
            </button>
            <button class="login-mode-tab ${this.activeLoginTab === 'import' ? 'active' : ''}" data-tab="import" onclick="CollectionView.setLoginTab('import')">
              ${dict.loginTabImport}
            </button>
          </div>

          <div class="acc-actions-grid">
            
            <!-- Tab 1: WebADB & Emulator Auto-Sync -->
            <div class="login-tab-content" data-tab="webadb" style="${this.activeLoginTab === 'webadb' ? 'display: block;' : 'display: none;'}">
              <div style="display: flex; flex-direction: column; gap: 12px;">
                
                <!-- Explicit Root & USB Debugging Requirement Notice -->
                <div class="auth-req-badge">
                  ${dict.adbRequirementNotice}
                </div>

                <!-- Device Selection Selector -->
                <div class="device-select-box" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; gap: 8px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; font-weight: 600; color: var(--text-secondary);">
                    <span>${dict.accSelectDeviceLabel}</span>
                    <button class="acc-btn outline" style="font-size: 11px; padding: 3px 8px; border-radius: 4px;" onclick="App.refreshConnectedDevices()" title="${dict.accRefreshDevicesBtn}">
                      ${dict.accRefreshDevicesBtn}
                    </button>
                  </div>
                  <select id="adbDeviceSelect" class="acc-input" style="padding: 8px 12px; font-size: 13px; cursor: pointer; background: var(--bg-surface-elevated); color: #fff;">
                    <option value="">${dict.accAutoDetectDevice}</option>
                  </select>
                </div>

                <button class="acc-btn secondary full-width" style="padding: 13px; font-size: 14.5px; font-weight: 700; border: 1px solid rgba(56, 189, 248, 0.45); background: rgba(56, 189, 248, 0.18);" onclick="App.autoSyncFromDevice()">
                  ${dict.accAdbAutoSync}
                </button>

                <!-- Detailed Step-by-Step Instructions -->
                <div class="auth-instruction-box">
                  <div class="auth-inst-title">
                    <span>${dict.adbInstructionsTitle}</span>
                  </div>

                  <div class="auth-inst-step">
                    <strong>${dict.adbStep1EmuTitle}</strong>
                    <span>${dict.adbStep1EmuDesc}</span>
                  </div>

                  <div class="auth-inst-step">
                    <strong>${dict.adbStep2PhoneTitle}</strong>
                    <span>${dict.adbStep2PhoneDesc}</span>
                  </div>

                  <div class="auth-inst-step">
                    <strong>${dict.adbStep3ShizukuTitle}</strong>
                    <span>${dict.adbStep3ShizukuDesc}</span>
                  </div>

                  <div class="auth-inst-security">
                    <strong>${dict.adbStep4SecTitle}</strong> ${dict.adbStep4SecDesc}
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 2: Token / Direct Auth Link -->
            <div class="login-tab-content" data-tab="token" style="${this.activeLoginTab === 'token' ? 'display: block;' : 'display: none;'}">
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div class="acc-token-box">
                  <input type="text" id="accTokenInput" class="acc-input" placeholder="${dict.accTokenPlaceholder}" autocomplete="off" spellcheck="false">
                  <button class="acc-btn primary" onclick="App.loginWithToken()">${dict.accSyncBtn}</button>
                </div>

                <!-- Detailed Token Instructions -->
                <div class="auth-instruction-box">
                  <div class="auth-inst-title">
                    <span>${dict.tokenInstructionsTitle}</span>
                  </div>

                  <div class="auth-inst-step">
                    <strong>${dict.tokenStep1WhatTitle}</strong>
                    <span>${dict.tokenStep1WhatDesc}</span>
                  </div>

                  <div class="auth-inst-step">
                    <strong>${dict.tokenStep2HowTitle}</strong>
                    <span>${dict.tokenStep2HowDesc}</span>
                  </div>

                  <div class="auth-inst-step">
                    <strong>${dict.tokenStep3SmartTitle}</strong>
                    <span>${dict.tokenStep3SmartDesc}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 3: Save File Import -->
            <div class="login-tab-content" data-tab="import" style="${this.activeLoginTab === 'import' ? 'display: block;' : 'display: none;'}">
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div class="save-dropzone" onclick="document.getElementById('accFileInputTab').click()" ondragover="event.preventDefault(); this.classList.add('dragover');" ondragleave="this.classList.remove('dragover');" ondrop="event.preventDefault(); this.classList.remove('dragover'); App.importSaveFile(event);">
                  <div class="save-dropzone-icon">📁</div>
                  <div class="save-dropzone-text">${dict.importDropZoneText}</div>
                  <input type="file" id="accFileInputTab" accept=".json,.txt" style="display: none;" onchange="App.importSaveFile(event)">
                </div>

                <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                  <button class="acc-btn secondary" onclick="document.getElementById('accFileInputTab').click()">${dict.accImportFileBtn}</button>
                  <button class="acc-btn outline" onclick="App.showPasteJsonModal()">${dict.accPasteJsonBtn}</button>
                </div>

                <!-- Detailed Save File Instructions -->
                <div class="auth-instruction-box">
                  <div class="auth-inst-title">
                    <span>${dict.importInstructionsTitle}</span>
                  </div>

                  <div class="auth-inst-step">
                    <strong>${dict.importStep1FilesTitle}</strong>
                    <span>${dict.importStep1FilesDesc}</span>
                  </div>

                  <div class="auth-inst-step">
                    <strong>${dict.importStep2PathTitle}</strong>
                    <span>${dict.importStep2PathDesc}</span>
                  </div>

                  <div class="auth-inst-security">
                    <strong>${dict.importStep3OfflineTitle}</strong> ${dict.importStep3OfflineDesc}
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Bottom Privacy Notice -->
          <div style="display: flex; justify-content: center; align-items: center; margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
            <div class="acc-privacy-notice">
              ${dict.accPrivacyNotice}
            </div>
          </div>
        </div>
      `;
    }

    // Authenticated / Synced Dashboard state
    const accountDisplay = accountData.account ? accountData.account : (accountData.token ? this.maskToken(accountData.token) : 'LocalStorage Profile');
    const gold = accountData.gold !== undefined ? accountData.gold.toLocaleString() : null;
    const gem = accountData.gem !== undefined ? accountData.gem.toLocaleString() : null;
    const clover = accountData.clover !== undefined ? accountData.clover.toLocaleString() : null;
    const fish = accountData.fish !== undefined ? accountData.fish.toLocaleString() : null;

    return `
      <div class="account-dashboard-card">
        <div class="dash-top-row">
          <div class="dash-user-info">
            <span class="dash-status-dot"></span>
            <div>
              <div class="dash-status-title">${dict.accStatusSynced}: <span style="color: #38bdf8;">${this.escapeHtml(accountDisplay)}</span></div>
              <div class="dash-token-preview">Auth: ${accountData.token ? this.maskToken(accountData.token) : 'Saved in Browser'}</div>
            </div>
          </div>

          <div class="dash-btn-group">
            <label class="dash-btn outline file-btn" title="Импортировать обновленный файл">
              <span>📁 ${dict.accImportFileBtn}</span>
              <input type="file" accept=".json,.txt" style="display: none;" onchange="App.importSaveFile(event)">
            </label>
            <button class="dash-btn outline" onclick="App.refreshAccountData()">🔄 ${dict.accRefreshBtn}</button>
            <button class="dash-btn danger" onclick="App.logoutAccount()">🚪 ${dict.accLogoutBtn}</button>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="dash-progress-section">
          <div class="dash-progress-header">
            <span>📊 ${dict.accProgress}</span>
            <span class="dash-progress-count"><strong>${ownedCount}</strong> / ${totalCharacters} (${pct}%)</span>
          </div>
          <div class="dash-progress-bar-bg">
            <div class="dash-progress-bar-fill" style="width: ${pct}%;"></div>
          </div>
        </div>

        <!-- Resources Row (if available) -->
        ${gold !== null || gem !== null ? `
          <div class="dash-resources-row">
            ${gold !== null ? `<div class="dash-res-item"><span class="dash-res-icon">🪙</span> <span>${dict.accGold}: <strong>${gold}</strong></span></div>` : ''}
            ${gem !== null ? `<div class="dash-res-item"><span class="dash-res-icon">💎</span> <span>${dict.accGem}: <strong>${gem}</strong></span></div>` : ''}
            ${clover !== null ? `<div class="dash-res-item"><span class="dash-res-icon">🍀</span> <span>${dict.accClover}: <strong>${clover}</strong></span></div>` : ''}
            ${fish !== null ? `<div class="dash-res-item"><span class="dash-res-icon">🐟</span> <span>${dict.accFish}: <strong>${fish}</strong></span></div>` : ''}
          </div>
        ` : ''}

        <!-- Collection View Filter Tabs -->
        <div class="collection-view-tabs">
          <button class="coll-tab-btn ${collectionFilter === 'owned' ? 'active' : ''}" onclick="App.setCollectionFilter('owned')">
            ✓ ${dict.accShowOwned} (${ownedCount})
          </button>
          <button class="coll-tab-btn ${collectionFilter === 'missing' ? 'active' : ''}" onclick="App.setCollectionFilter('missing')">
            ❓ ${dict.accShowMissing} (${Math.max(0, totalCharacters - ownedCount)})
          </button>
          <button class="coll-tab-btn ${collectionFilter === 'all' ? 'active' : ''}" onclick="App.setCollectionFilter('all')">
            👥 ${dict.accShowAll} (${totalCharacters})
          </button>
        </div>
      </div>
    `;
  },

  maskToken(t) {
    if (!t || t.length <= 8) return t || '—';
    return `${t.slice(0, 4)}...${t.slice(-4)}`;
  },

  escapeHtml(str) {
    if (!str || typeof str !== 'string') return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  },

  parseSaveData(json) {
    if (!json) return null;
    let data = typeof json === 'string' ? JSON.parse(json) : json;
    
    const ownedIds = new Set();
    let gold = undefined, gem = undefined, clover = undefined, fish = undefined;

    // Handle monster_girls_roster.json format (our extractor output)
    if (data.roster && Array.isArray(data.roster)) {
      data.roster.forEach(r => {
        if (r.id) ownedIds.add(r.id);
        if (r.key) ownedIds.add(r.key);
      });
      if (data.account_info) {
        gold = data.account_info.gold;
        gem = data.account_info.gem;
        clover = data.account_info.clover;
        fish = data.account_info.fish;
      }
    }
    // Handle account_roles.json format
    else if (data.owned_roles && Array.isArray(data.owned_roles)) {
      data.owned_roles.forEach(r => {
        if (r.id) ownedIds.add(r.id);
        if (r.key) ownedIds.add(r.key);
      });
    }
    // Handle raw GameSave format
    else if (data.gameSave) {
      let gs = typeof data.gameSave === 'string' ? JSON.parse(data.gameSave) : data.gameSave;
      gold = gs.gold || 0;
      gem = gs.gem || 0;
      clover = gs.clover || 0;
      fish = gs.fish || 0;
      
      // Parse roleDex (Collection / Dex)
      if (gs.roleDex && Array.isArray(gs.roleDex)) {
        gs.roleDex.forEach(r => {
          const rid = r.iDs || r.id || r.IDs || r.roleId;
          if (rid) {
            ownedIds.add(String(rid));
            if (String(rid).includes('_')) ownedIds.add(String(rid).split('_')[0]);
          }
        });
      }

      // Parse roleList (Roster)
      if (gs.roleList && Array.isArray(gs.roleList)) {
        gs.roleList.forEach(r => {
          const rid = r.iDs || r.id || r.IDs || r.roleId;
          if (rid) {
            ownedIds.add(String(rid));
            if (String(rid).includes('_')) ownedIds.add(String(rid).split('_')[0]);
          }
        });
      }

      // Parse roleMap / roles fallback
      if (gs.roleMap) {
        Object.keys(gs.roleMap).forEach(k => {
          ownedIds.add(String(k));
          if (String(k).includes('_')) ownedIds.add(String(k).split('_')[0]);
        });
      }
      if (gs.roles && Array.isArray(gs.roles)) {
        gs.roles.forEach(r => {
          const rid = r.id || r.roleId || r.iDs;
          if (rid) {
            ownedIds.add(String(rid));
            if (String(rid).includes('_')) ownedIds.add(String(rid).split('_')[0]);
          }
        });
      }
    }
    // Handle direct ID list
    else if (Array.isArray(data)) {
      data.forEach(item => {
        if (typeof item === 'string') {
          ownedIds.add(item);
          if (item.includes('_')) ownedIds.add(item.split('_')[0]);
        } else if (item.id || item.iDs) {
          const rid = item.id || item.iDs;
          ownedIds.add(String(rid));
          if (String(rid).includes('_')) ownedIds.add(String(rid).split('_')[0]);
        }
      });
    }

    return {
      ownedIds: Array.from(ownedIds),
      gold,
      gem,
      clover,
      fish,
      updated_at: new Date().toISOString()
    };
  }
};
