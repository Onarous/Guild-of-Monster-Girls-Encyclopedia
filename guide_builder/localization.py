# -*- coding: utf-8 -*-

def get_localization_code():
    return """
  // 10. Localization Bugs & Mechanics Glossary (NEW Detailed Section)
  getLocalizationContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    return `
      <div class="guide-article">
        <h2 class="guide-title">🔍 ${isRu ? 'Ошибки Локализации и Глоссарий Механик' : isCn ? '官方翻译勘误与机制术语解析 (Localization & Glossary)' : 'Localization Bugs & Mechanics Glossary'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Справочник известных неточностей официального перевода игры, вводящих игроков в заблуждение, и полный технический глоссарий ключевых боевых механик.' 
            : isCn 
            ? '官方多语言翻译常见勘误对照表（如 Nullify/Lure/Sole 的实际运作机制）与战斗关键词全景术语库。' 
            : 'Reference guide for known misleading localization terms and technical glossary for all combat keywords.'}
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          
          <!-- Misleading Terms Table -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(239, 68, 68, 0.3);">
            <div class="section-heading" style="color: #f87171; font-size: 16px; margin-bottom: 12px;">
              ⚠️ ${isRu ? 'Известные Ошибки и Вводящие в Заблуждение Термины' : isCn ? '官方翻译已知错误与歧义对照表' : 'Known Localization Errors & Ambiguities'}
            </div>
            <div class="guide-table-wrapper">
              <table class="guide-table" style="width: 100%; font-size: 13px;">
                <thead>
                  <tr style="background: rgba(30, 41, 59, 0.9);">
                    <th>${isRu ? 'Неверный / Неточный термин' : isCn ? '游戏内易误解文本' : 'In-game Text / Error'}</th>
                    <th>${isRu ? 'Реальное значение механики' : isCn ? '底层真实战斗机制' : 'Actual True Mechanic'}</th>
                    <th>${isRu ? 'Практическое влияние' : isCn ? '实战影响与应对' : 'Gameplay Impact'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="color: #f87171; font-weight: 800; font-family: monospace;">Nullify</td>
                    <td style="color: #38bdf8; font-weight: 700;">Decay (Сжигание / Замедление маны)</td>
                    <td>Не отменяет навык полностью, а сжигает накопленную шкалу маны цели на фазе Turn Start.</td>
                  </tr>
                  <tr>
                    <td style="color: #f87171; font-weight: 800; font-family: monospace;">Lure</td>
                    <td style="color: #facc15; font-weight: 700;">Taunt (Провокация)</td>
                    <td>Перенаправляет одиночные атаки на себя и сбивает режим обхода Precision.</td>
                  </tr>
                  <tr>
                    <td style="color: #f87171; font-weight: 800; font-family: monospace;">Sole</td>
                    <td style="color: #4ade80; font-weight: 700;">1 remaining enemy (Остался ровно 1 враг)</td>
                    <td>Условие срабатывает только когда на поле боя остался единственный живой враг.</td>
                  </tr>
                  <tr>
                    <td style="color: #f87171; font-weight: 800; font-family: monospace;">When defeated</td>
                    <td style="color: #c084fc; font-weight: 700;">Self-death only (Только смерть носителя)</td>
                    <td>Срабатывает исключительно при гибели самого владельца таланта, а не союзников!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Mechanics Glossary -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #38bdf8;">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 12px;">
              📖 ${isRu ? 'Краткий Технический Глоссарий Ключевых Слов' : isCn ? '核心战斗关键词术语表' : 'Technical Mechanics Glossary'}
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 12.5px;">
              <div style="background: rgba(30, 41, 59, 0.6); padding: 10px 12px; border-radius: var(--radius-sm);">
                <strong style="color: #f87171;">🩸 Bleed / Poison (Кровотечение / Яд):</strong> Чистый HP Loss на действии цели, игнорирует броню и щиты.
              </div>
              <div style="background: rgba(30, 41, 59, 0.6); padding: 10px 12px; border-radius: var(--radius-sm);">
                <strong style="color: #facc15;">🛡️ Vulnerable (Уязвимость):</strong> Дополнительный множитель урона; не срабатывает при 0 базового урона.
              </div>
              <div style="background: rgba(30, 41, 59, 0.6); padding: 10px 12px; border-radius: var(--radius-sm);">
                <strong style="color: #60a5fa;">❄️ Freeze (Заморозка):</strong> Пропуск естественного хода и блокировка набора маны.
              </div>
              <div style="background: rgba(30, 41, 59, 0.6); padding: 10px 12px; border-radius: var(--radius-sm);">
                <strong style="color: #4ade80;">⚡ Extra Action:</strong> Внеочередной ход при заполнении 100% маны, вклинивается в порядок ходов.
              </div>
              <div style="background: rgba(30, 41, 59, 0.6); padding: 10px 12px; border-radius: var(--radius-sm);">
                <strong style="color: #c084fc;">💥 Malice (Злоба):</strong> Урон возмездия по врагам при их действиях или истощении стойкости.
              </div>
              <div style="background: rgba(30, 41, 59, 0.6); padding: 10px 12px; border-radius: var(--radius-sm);">
                <strong style="color: #38bdf8;">🎯 Precision:</strong> Обратный таргетинг (с задней линии к передней).
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  },
"""
