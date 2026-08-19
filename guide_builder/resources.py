# -*- coding: utf-8 -*-

def get_resources_code():
    return """
  // 14. Community Tools & External Resources (Preserved & Heavily Expanded)
  getResourcesContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    return `
      <div class="guide-article">
        <h2 class="guide-title">🌐 ${isRu ? 'Авторитетные Внешние Источники и Базы Данных' : isCn ? '官方社区、百科工具与外部资源' : 'Community Tools, Wikis & External Resources'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Проверенные инструменты сообщества, калькуляторы, симуляторы гачи, базы данных и официальные вики-ресурсы от ведущих исследователей игры.' 
            : isCn 
            ? '收集全球核心玩家搭建的实用数据库、抽卡模拟器、天赋模拟器与TapTap高分进阶攻略。' 
            : 'Verified community tools, calculators, gacha simulators, talent managers, and official wiki resources.'}
        </p>

        <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 20px;">
          
          <!-- Tool 1: gomg-wiki.pages.dev -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #38bdf8;">
            <div style="font-weight: 800; font-size: 16px; color: #fff;">
              🌐 GMG Community Wiki & Tools (<a href="https://gomg-wiki.pages.dev/" target="_blank" style="color: #38bdf8; text-decoration: underline;">gomg-wiki.pages.dev</a>)
            </div>
            <div style="font-size: 13px; color: #cbd5e1; margin-top: 6px; line-height: 1.6;">
              ${isRu ? 'Главная англоязычная база данных и набор интерактивных инструментов по Guild of Monster Girls:' : isCn ? '全球最核心的魔物娘公会英文综合百科与在线模拟工具集：' : 'Premier comprehensive English database and interactive toolset:'}
              <ul style="padding-left: 18px; margin-top: 8px; font-size: 12.5px; line-height: 1.8;">
                <li>📖 <strong>Каталог Персонажей (Units Index):</strong> <a href="https://gomg-wiki.pages.dev/units/" target="_blank" style="color: #38bdf8;">gomg-wiki.pages.dev/units/</a></li>
                <li>🔑 <strong>Глоссарий Ключевых Слов (Keywords):</strong> <a href="https://gomg-wiki.pages.dev/keywords/" target="_blank" style="color: #38bdf8;">gomg-wiki.pages.dev/keywords/</a></li>
                <li>🎲 <strong>Оптимизатор Гачи (Gacha Optimizer):</strong> <a href="https://gomg-wiki.pages.dev/gacha-optimizer.html" target="_blank" style="color: #38bdf8;">gomg-wiki.pages.dev/gacha-optimizer.html</a></li>
                <li>🧬 <strong>Симулятор Талантов (Talent Simulator):</strong> <a href="https://gomg-wiki.pages.dev/talent-simulator.html" target="_blank" style="color: #38bdf8;">gomg-wiki.pages.dev/talent-simulator.html</a></li>
                <li>👥 <strong>Конструктор Отрядов (Team Builder):</strong> <a href="https://gomg-wiki.pages.dev/build-team.html" target="_blank" style="color: #38bdf8;">gomg-wiki.pages.dev/build-team.html</a></li>
                <li>📊 <strong>Анализатор Логов (Battle Logs):</strong> <a href="https://gomg-wiki.pages.dev/battle-logs.html" target="_blank" style="color: #38bdf8;">gomg-wiki.pages.dev/battle-logs.html</a></li>
              </ul>
            </div>
          </div>

          <!-- Tool 2: TapTap Guides -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div style="font-weight: 800; font-size: 16px; color: #fff;">
              🇨🇳 Мета-гайды TapTap от 叶叶小飞花 (<a href="https://www.taptap.cn/moment/825053452206868359" target="_blank" style="color: #facc15; text-decoration: underline;">TapTap Moment</a>)
            </div>
            <div style="font-size: 13px; color: #cbd5e1; margin-top: 6px; line-height: 1.6;">
              ${isRu ? 'Глубочайший аналитический разбор механик от китайских топовых игроков, формулы урона, тир-листы и актуальные T0 сборки (Принцесса, Зайчиха, Ледяная Злодейка, Скоростной Мечник).' : isCn ? 'TapTap顶级玩家权威攻略：全阵容深度分析、伤害公式实测、T0流派构筑与开荒避坑指南。' : 'In-depth theorycrafting guides, damage calculations, and meta tier lists from top Chinese players.'}
            </div>
          </div>

          <!-- Tool 3: Discord Theorycrafters -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #a855f7;">
            <div style="font-weight: 800; font-size: 16px; color: #fff;">
              💬 Официальное Discord Сообщество & Theorycrafters
            </div>
            <div style="font-size: 13px; color: #cbd5e1; margin-top: 6px; line-height: 1.6;">
              ${isRu ? 'Благодарность ведущим исследователям боевых механик сообщества: <code>Xylene [EOS]</code>, <code>baosbanhbao</code>, <code>Versailles</code>, <code>SpookyBoi</code>, <code>Yomemamo</code>.' : isCn ? '特别鸣谢 Discord 核心攻略测试组：<code>Xylene [EOS]</code>, <code>baosbanhbao</code>, <code>Versailles</code>, <code>SpookyBoi</code>, <code>Yomemamo</code> 等大佬的数据实测支持。' : 'Special thanks to core community theorycrafters: Xylene [EOS], baosbanhbao, Versailles, SpookyBoi, and Yomemamo for verified mechanical formulas.'}
            </div>
          </div>

        </div>
      </div>
    `;
  },
"""
