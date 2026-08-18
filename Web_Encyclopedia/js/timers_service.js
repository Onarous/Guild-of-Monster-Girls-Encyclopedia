/**
 * Live Timers & Countdown Service for Guild of Monster Girls Web Encyclopedia
 * Real-time 1-second countdown tickers for Character Banners, Skin Summons, and Game Events.
 */

const LiveTimers = {
  activeInterval: null,

  // Scheduled Rate-Up Character & Skin Banners
  banners: [
    {
      id: "banner_rose_heroine",
      charId: "M13307",
      type: "limited",
      title: {
        RU: "Владычица роз — Лимитированный призыв",
        EN: "Rose Sovereign — Limited Rate-Up Summon",
        CN: "蔷薇领主 — 限时专属招募"
      },
      subtitle: {
        RU: "Повышенный шанс призыва S-ранга (Дендро/Урон)",
        EN: "Featured S-Tier Heroine (Earth/DPS)",
        CN: "S阶限定主C角色概率UP (自然/输出)"
      },
      start: "2026/08/13 21:00:00",
      end: "2026/09/24 21:00:00",
      icon: "🌹",
      tag: "🔥 RATE-UP"
    },
    {
      id: "banner_rose_skin",
      charId: "M13307_000",
      type: "skin_limited",
      title: {
        RU: "Облик: Владычица роз (Лимитированный)",
        EN: "Skin: Rose Sovereign (Limited Up)",
        CN: "皮肤招募: 蔷薇领主 (限时UP)"
      },
      subtitle: {
        RU: "Эксклюзивный образ с альтернативной анимацией",
        EN: "Exclusive appearance with custom combat animations",
        CN: "专属外观与专属战斗动画特效"
      },
      start: "2026/08/13 21:00:00",
      end: "2026/09/03 21:00:00",
      icon: "🎭",
      tag: "👑 SKIN UP"
    },
    {
      id: "banner_troll_skin",
      charId: "M12303_000",
      type: "skin_limited",
      title: {
        RU: "Облик: Троллиха-чародейка (Скоро)",
        EN: "Skin: Troll Sorceress (Upcoming)",
        CN: "皮肤招募: 巨魔术士 (即将开启)"
      },
      subtitle: {
        RU: "Следующая ротация магазина обликов",
        EN: "Next featured skin summon rotation",
        CN: "下一期皮肤招募专属轮换"
      },
      start: "2026/09/03 21:00:00",
      end: "2026/09/24 21:00:00",
      icon: "🔮",
      tag: "⏳ UPCOMING"
    },
    {
      id: "banner_dragon_heroine",
      charId: "M13310",
      type: "limited_archive",
      title: {
        RU: "Багровая драконица (Прошлый баннер)",
        EN: "Crimson Dragoness (Archived)",
        CN: "赤焰龙女 (往期卡池)"
      },
      subtitle: {
        RU: "Ротация завершена — ожидается реран",
        EN: "Banner period concluded — awaiting rerun",
        CN: "活动已结束 — 等待后续复刻"
      },
      start: "2026/07/02 21:00:00",
      end: "2026/08/13 21:00:00",
      icon: "🐉",
      tag: "🏁 ARCHIVE"
    }
  ],

  parseDate(dateStr) {
    if (!dateStr) return null;
    const cleanStr = String(dateStr).replace(/-/g, '/').trim();
    const d = new Date(cleanStr);
    return isNaN(d.getTime()) ? null : d;
  },

  getCountdownState(startStr, endStr) {
    if (!startStr && !endStr) {
      return { status: 'permanent', diffMs: 0, days: 0, hours: 0, minutes: 0, seconds: 0, percent: 100 };
    }

    const now = new Date();
    const start = this.parseDate(startStr);
    const end = this.parseDate(endStr);

    if (start && now < start) {
      const diffMs = start.getTime() - now.getTime();
      return {
        status: 'upcoming',
        diffMs,
        ...this.formatDiff(diffMs),
        percent: 0
      };
    }

    if (end && now < end) {
      const diffMs = end.getTime() - now.getTime();
      const totalMs = start ? (end.getTime() - start.getTime()) : (diffMs + 86400000);
      const passedMs = Math.max(0, totalMs - diffMs);
      const percent = Math.min(100, Math.max(0, (passedMs / totalMs) * 100));
      return {
        status: 'active',
        diffMs,
        ...this.formatDiff(diffMs),
        percent
      };
    }

    return {
      status: 'ended',
      diffMs: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      percent: 100
    };
  },

  formatDiff(ms) {
    const totalSec = Math.max(0, Math.floor(ms / 1000));
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return { days, hours, minutes, seconds };
  },

  formatDigits(state, lang = "RU") {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const dStr = state.days > 0 ? `${state.days}${isRu ? 'д ' : (isCn ? '天 ' : 'd ')}` : '';
    const hStr = String(state.hours).padStart(2, '0');
    const mStr = String(state.minutes).padStart(2, '0');
    const sStr = String(state.seconds).padStart(2, '0');
    return `${dStr}${hStr}:${mStr}:${sStr}`;
  },

  formatBadge(startStr, endStr, lang = "RU") {
    const state = this.getCountdownState(startStr, endStr);
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    if (state.status === 'permanent') {
      return `<span class="live-timer-badge status-permanent">♾️ ${isRu ? 'Бессрочно' : (isCn ? '永久开放' : 'Permanent')}</span>`;
    }
    if (state.status === 'ended') {
      return `<span class="live-timer-badge status-ended">🏁 ${isRu ? 'Завершено' : (isCn ? '已结束' : 'Ended')}</span>`;
    }
    if (state.status === 'upcoming') {
      const label = isRu ? 'До старта:' : (isCn ? '距离开始:' : 'Starts in:');
      return `
        <span class="live-timer-badge status-upcoming" data-timer-start="${startStr}" data-timer-end="${endStr}">
          ⏳ ${label} <strong class="live-timer-digits">${this.formatDigits(state, lang)}</strong>
        </span>
      `;
    }

    const label = isRu ? 'До конца:' : (isCn ? '剩余时间:' : 'Ends in:');
    return `
      <span class="live-timer-badge status-active" data-timer-start="${startStr}" data-timer-end="${endStr}">
        🔥 ${label} <strong class="live-timer-digits">${this.formatDigits(state, lang)}</strong>
      </span>
    `;
  },

  renderTicker(containerId, lang = "RU") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    const items = [
      {
        icon: "🌹",
        label: isRu ? "Rate-Up: Владычица роз" : (isCn ? "限时UP: 蔷薇领主" : "Rate-Up: Rose Sovereign"),
        start: "2026/08/13 21:00:00",
        end: "2026/09/24 21:00:00",
        action: "App.openCharacterModal('M13307')"
      },
      {
        icon: "❄️",
        label: isRu ? "Исекай-рейд (Боссы)" : (isCn ? "异界入侵副本活动" : "Isekai Raid Event"),
        start: "2026/08/12 21:00:00",
        end: "2026/09/23 21:00:00",
        action: "App.setTab('guides'); GuidesView.setSection('events');"
      },
      {
        icon: "🍎",
        label: isRu ? "Щедрый урожай (Плоды x2)" : (isCn ? "果实丰收·双倍掉落" : "Bountiful Harvest (2x)"),
        start: "2026/08/12 21:00:00",
        end: "2026/08/19 21:00:00",
        action: "App.setTab('guides'); GuidesView.setSection('events');"
      },
      {
        icon: "👑",
        label: isRu ? "Испытание на вершине (Арена)" : (isCn ? "巅峰赛·跨服角逐" : "Peak Challenge Arena"),
        start: "2026/08/19 21:00:00",
        end: "2026/09/02 21:00:00",
        action: "App.setTab('guides'); GuidesView.setSection('events');"
      }
    ];

    container.innerHTML = `
      <div class="live-ticker-bar">
        <div class="live-ticker-header">
          <span class="live-ticker-pulse">●</span>
          <span class="live-ticker-title">⚡ ${isRu ? 'События и Баннеры:' : (isCn ? '进行中的活动与卡池:' : 'Live Banners & Events:')}</span>
        </div>
        <div class="live-ticker-scroll">
          ${items.map(it => {
            const state = this.getCountdownState(it.start, it.end);
            const isUpcoming = state.status === 'upcoming';
            const isEnded = state.status === 'ended';
            const prefix = isUpcoming ? (isRu ? 'Старт через:' : (isCn ? '开服倒计时:' : 'Starts in:')) : (isRu ? 'Осталось:' : (isCn ? '剩余:' : 'Left:'));
            const timeFormatted = this.formatDigits(state, lang);

            return `
              <div class="live-ticker-item ${state.status}" onclick="${it.action}" title="${isRu ? 'Нажмите для перехода' : (isCn ? '点击查看' : 'Click to view')}">
                <span class="ticker-item-icon">${it.icon}</span>
                <span class="ticker-item-name">${it.label}</span>
                ${!isEnded ? `
                  <span class="ticker-item-timer" data-timer-start="${it.start}" data-timer-end="${it.end}">
                    <span class="timer-prefix">${prefix}</span>
                    <strong class="live-timer-digits">${timeFormatted}</strong>
                  </span>
                ` : `<span class="ticker-item-timer ended">🏁 ${isRu ? 'Завершено' : (isCn ? '已结束' : 'Ended')}</span>`}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  renderBannerCards(lang = "RU") {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    const allChars = (typeof App !== 'undefined' && App.state && App.state.data && App.state.data.characters && App.state.data.characters[lang]) || [];
    const charMap = {};
    allChars.forEach(c => { charMap[c.id] = c; });
    const imgMap = (typeof App !== 'undefined' && App.state && App.state.imageMappings && App.state.imageMappings.characters) || {};

    return `
      <div class="live-banner-cards-grid">
        ${this.banners.map(b => {
          const char = charMap[b.charId];
          const portrait = char ? (imgMap[char.id] || imgMap[char.key] || `assets/img/characters/${char.id}_1__single_part1_1@1.png`) : '';
          const state = this.getCountdownState(b.start, b.end);
          const timeFormatted = this.formatDigits(state, lang);
          const title = b.title[lang] || b.title.RU;
          const subtitle = b.subtitle[lang] || b.subtitle.RU;

          return `
            <div class="live-banner-card ${state.status}">
              <div class="banner-card-top">
                <div class="banner-avatar-box">
                  ${portrait ? `<img src="${portrait}" alt="${char?.name || ''}" class="banner-avatar-img" onerror="this.style.display='none'">` : ''}
                  <span class="banner-avatar-icon">${b.icon}</span>
                </div>
                <div class="banner-info-area">
                  <div class="banner-badge-row">
                    <span class="banner-tag-badge">${b.tag}</span>
                    <span class="banner-status-badge status-${state.status}">
                      ${state.status === 'active' ? '🔥 ' + (isRu ? 'Активен' : (isCn ? '进行中' : 'Active')) : (state.status === 'upcoming' ? '⏳ ' + (isRu ? 'Скоро' : (isCn ? '即将开放' : 'Upcoming')) : '🏁 ' + (isRu ? 'Завершен' : (isCn ? '已结束' : 'Ended')))}
                    </span>
                  </div>
                  <div class="banner-card-title">${title}</div>
                  <div class="banner-card-sub">${subtitle}</div>
                </div>
              </div>

              ${state.status !== 'ended' ? `
                <div class="banner-timer-box" data-timer-start="${b.start}" data-timer-end="${b.end}">
                  <div class="timer-box-row">
                    <span class="timer-box-label">
                      ${state.status === 'upcoming' ? (isRu ? '⏳ До старта баннера:' : (isCn ? '距离卡池开启:' : 'Starts in:')) : (isRu ? '🔥 До конца баннера:' : (isCn ? '卡池剩余时间:' : 'Time remaining:'))}
                    </span>
                    <strong class="live-timer-digits" style="font-size: 15px; color: #facc15;">${timeFormatted}</strong>
                  </div>
                  <div class="live-timer-progress-track">
                    <div class="live-timer-progress-fill" style="width: ${state.percent.toFixed(1)}%;"></div>
                  </div>
                  <div class="timer-dates-row">
                    <span>📅 ${b.start.slice(0, 10)}</span>
                    <span>➔</span>
                    <span>🏁 ${b.end.slice(0, 10)}</span>
                  </div>
                </div>
              ` : `
                <div class="banner-timer-box ended">
                  <div style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 6px 0;">
                    🏁 ${isRu ? 'Период действия баннера завершен' : (isCn ? '此卡池已结束，敬请期待后续轮换' : 'This banner duration has ended')}
                  </div>
                </div>
              `}

              ${char ? `
                <div class="banner-card-footer">
                  <button class="banner-view-btn" onclick="App.openCharacterModal('${char.id}')">
                    <span>✨ ${isRu ? 'Подробнее о героине' : (isCn ? '查看专属角色面板' : 'View Heroine Details')}</span>
                    <span>➔</span>
                  </button>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  start() {
    if (this.activeInterval) clearInterval(this.activeInterval);
    this.activeInterval = setInterval(() => this.tick(), 1000);
  },

  tick() {
    const lang = (typeof App !== 'undefined' && App.state && App.state.lang) ? App.state.lang : 'RU';
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';

    document.querySelectorAll('[data-timer-end]').forEach(el => {
      const startStr = el.dataset.timerStart;
      const endStr = el.dataset.timerEnd;
      const state = this.getCountdownState(startStr, endStr);

      const digitsEl = el.querySelector('.live-timer-digits');
      const progressFill = el.querySelector('.live-timer-progress-fill');

      if (state.status === 'ended') {
        if (el.classList.contains('live-timer-badge')) {
          el.className = 'live-timer-badge status-ended';
          el.innerHTML = `🏁 ${isRu ? 'Завершено' : (isCn ? '已结束' : 'Ended')}`;
        }
        el.removeAttribute('data-timer-end');
      } else {
        const timeFormatted = this.formatDigits(state, lang);
        if (digitsEl) {
          digitsEl.textContent = timeFormatted;
        }
        if (progressFill) {
          progressFill.style.width = `${state.percent.toFixed(1)}%`;
        }
      }
    });
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LiveTimers;
}
