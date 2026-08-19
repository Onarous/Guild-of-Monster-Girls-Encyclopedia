# -*- coding: utf-8 -*-

def get_codes_code():
    return """
  // 13. Promo & Gift Codes (With Interactive Entity Links)
  getCodesContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    return `
      <div class="guide-article">
        <h2 class="guide-title">🎟️ ${isRu ? 'Промокоды и Подарочные коды (Gift Codes)' : isCn ? '最新礼包兑换码汇总 (Gift Codes)' : 'Promo & Redeem Codes'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Актуальные рабочие подарочные коды для мгновенного получения самоцветов, свитков призыва, плодов талантов и стамины. Кликните по наградам для открытия карточки предмета.' 
            : isCn 
            ? '2026最新可用游戏礼包兑换码，包含免费钻石、抽卡契约书、天赋果实与体力干粮。' 
            : 'Verified active gift codes for free gems, recruit tickets, talent fruits, and stamina.'}
        </p>

        <!-- Active Codes Table -->
        <div style="overflow-x: auto; margin-top: 20px;">
          <div class="section-heading" style="font-size: 16px; font-weight: 800; color: #22c55e; margin-bottom: 10px;">
            ✅ ${isRu ? 'Актуальные и Проверенные Коды (Август 2026)' : isCn ? '长期与最新有效兑换码' : 'Active & Verified Codes'}
          </div>
          <table class="guide-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
            <thead>
              <tr style="background: rgba(15, 23, 42, 0.95); border-bottom: 2px solid rgba(56, 189, 248, 0.4);">
                <th style="padding: 10px 14px; color: #f1f5f9;">Код</th>
                <th style="padding: 10px 14px; color: #38bdf8;">Награда</th>
                <th style="padding: 10px 14px; color: #facc15; text-align: right;">Действие</th>
              </tr>
            </thead>
            <tbody>
              ${[
                { 
                  code: 'TIMBER0813', 
                  reward: `<span class="guide-entity-chip guide-chip-ration" onclick="App.openItemModal('consumables', 'D00005_021')">🍱 1 ${isRu ? 'Большой припас' : isCn ? '大份干粮' : 'Stamina'}</span>, <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal('consumables', 'D00001_000')">💎 100 ${isRu ? 'Самоцветов' : isCn ? '钻石' : 'Gems'}</span>, <span class="guide-entity-chip guide-chip-gold" onclick="App.openItemModal('consumables', 'D00000_000')">🪙 20 000 ${isRu ? 'Золота' : isCn ? '金币' : 'Gold'}</span>` 
                },
                { 
                  code: 'MGMMAG', 
                  reward: isRu ? '🎁 Подарочный набор ресурсов и самоцветов' : isCn ? '🎁 综合成长资源补给大礼包' : '🎁 Resource & Gem Gift Bundle' 
                },
                { 
                  code: 'HXSNGH0402', 
                  reward: `<span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal('consumables', 'D00001_000')">💎 100 ${isRu ? 'Самоцветов' : isCn ? '钻石' : 'Gems'}</span>, 📜 1 ${isRu ? 'Билет для найма' : isCn ? '招募契约券' : 'Recruit Ticket'}` 
                },
                { 
                  code: 'HXSNGH888', 
                  reward: `<span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal('consumables', 'D00001_000')">💎 100 ${isRu ? 'Самоцветов' : isCn ? '钻石' : 'Gems'}</span>, <span class="guide-entity-chip guide-chip-fruit" onclick="App.openItemModal('consumables', 'D00002_001')">🍇 5 ${isRu ? 'Плодов таланта' : isCn ? '天赋果实' : 'Talent Fruits'}</span>` 
                },
                { 
                  code: 'HXSNGH666', 
                  reward: `<span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal('consumables', 'D00001_000')">💎 100 ${isRu ? 'Самоцветов' : isCn ? '钻石' : 'Gems'}</span>, <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal('consumables', 'D00002_000')">🍀 1 ${isRu ? 'Клевер' : isCn ? '四叶草' : 'Clover'}</span>` 
                },
                { 
                  code: 'vip888', 
                  reward: `<span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal('consumables', 'D00001_000')">💎 100 ${isRu ? 'Самоцветов' : isCn ? '钻石' : 'Gems'}</span>, <span class="guide-entity-chip guide-chip-chest" onclick="App.openItemModal('chests', 'BX02006')">📦 1 ${isRu ? 'Сундук' : isCn ? '宝箱' : 'Chest'}</span>` 
                },
                { 
                  code: 'vip777', 
                  reward: `<span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal('consumables', 'D00001_000')">💎 100 ${isRu ? 'Самоцветов' : isCn ? '钻石' : 'Gems'}</span>, <span class="guide-entity-chip guide-chip-gold" onclick="App.openItemModal('consumables', 'D00000_000')">🪙 10 000 ${isRu ? 'Золота' : isCn ? '金币' : 'Gold'}</span>` 
                },
                { 
                  code: 'vip666', 
                  reward: `<span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal('consumables', 'D00001_000')">💎 100 ${isRu ? 'Самоцветов' : isCn ? '钻石' : 'Gems'}</span>, <span class="guide-entity-chip guide-chip-chest" onclick="App.openItemModal('chests', 'BX06001')">🔮 5 ${isRu ? 'Кристаллов' : isCn ? '精炼晶石' : 'Crystals'}</span>` 
                }
              ].map(c => `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                  <td style="padding: 12px 14px; font-weight: 800; color: #38bdf8; font-family: monospace; font-size: 14.5px;">${c.code}</td>
                  <td style="padding: 12px 14px; color: #e2e8f0;">${c.reward}</td>
                  <td style="padding: 12px 14px; text-align: right;">
                    <button class="action-btn secondary-btn" onclick="GuidesView.copyPromoCode('${c.code}', null, '${lang}')" style="padding: 4px 12px; font-size: 12px;">
                      📋 ${isRu ? 'Скопировать' : isCn ? '复制' : 'Copy'}
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- How to Redeem -->
        <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #38bdf8; margin-top: 18px;">
          <div class="section-heading" style="color: #38bdf8; font-size: 15px; margin-bottom: 8px;">
            ℹ️ ${isRu ? 'Как активировать промокод в игре:' : isCn ? '兑换码使用指引：' : 'How to Redeem in Game:'}
          </div>
          <div style="font-size: 13px; color: #cbd5e1; line-height: 1.6;">
            ${isRu 
              ? 'Нажмите на аватар профиля в левом верхнем углу ➔ перейдите в «Настройки» (шестеренка) ➔ выберите вкладку «Промокод» ➔ вставьте код и нажмите «Получить».' 
              : isCn 
              ? '点击游戏主界面左上角头像 ➔ 进入「设置」设置界面 ➔ 点击「兑换码」选项 ➔ 粘贴上述代码并点击确认领取。' 
              : 'Tap your profile avatar in the top-left corner ➔ Settings gear icon ➔ Redeem Code tab ➔ paste the code and claim.'}
          </div>
        </div>

        <!-- Expired Archive -->
        <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 16px 18px; border-radius: var(--radius-md); border-left: 4px solid #64748b; margin-top: 14px;">
          <div class="section-heading" style="color: #94a3b8; font-size: 14px; margin-bottom: 8px;">
            ⌛ ${isRu ? 'Архив истекших кодов (для справки)' : isCn ? '历史已失效兑换码归档' : 'Expired Code Archive'}
          </div>
          <div style="font-size: 12.5px; color: #64748b; font-family: monospace; line-height: 1.8;">
            SSP2ND, endlessdesert, GMG2026, GUILDMASTER, HXSNSFSX, HXSNCZLB, HXSNYYDW, HXSN666, HXSN888
          </div>
        </div>

      </div>
    `;
  },
"""
