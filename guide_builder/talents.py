# -*- coding: utf-8 -*-

def get_talents_code():
    return """
  // 8. Talent Fruits, Wishlist Pity & Duplication (With Alter Bunny Links)
  getTalentsContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    return `
      <div class="guide-article">
        <h2 class="guide-title">🍇 ${isRu ? 'Плоды Таланта: Гарант, Фарм и Дублирование Эксклюзивов' : isCn ? '天赋果实：保底机制、刷取与多重专属转移' : 'Talent Fruits: Wishlist Pity & Duplication'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Полный гайд по талантам: математика системы скрытого гаранта (0/50 ➔ 70), энергоэффективность фарма плодов, техника сборки 4 золотых слотов и алгоритм дублирования эксклюзивных талантов до 4 копий на одной героине. Кликните по названию предметов и героинь для открытия карточек.' 
            : isCn 
            ? '天赋深度进阶攻略：心愿单隐形保底梯度算法（50次未命中后每抽+5%直至70次必出）、4金天赋无损打造、专属天赋多重跨角色复制转移全流程。点击任意角色或果实标签可查看弹窗。' 
            : 'Complete talent mastery: hidden wishlist pity formula (50 misses ➔ +5%/roll ➔ 70 hard pity), 4-gold slot assembly, and multi-copy exclusive duplication.'}
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          
          <!-- 1. Wishlist Pity -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(168, 85, 247, 0.3);">
            <div class="section-heading" style="color: #c084fc; font-size: 16px; margin-bottom: 10px;">
              🎯 1. ${isRu ? 'Как Работает Система Гаранта Талантов (Wishlist Pity)' : isCn ? '天赋心愿单隐藏保底机制' : 'Talent Wishlist Pity Mechanics'}
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>${isRu ? 'Базовый порог активации:' : isCn ? '保底触发门槛:' : 'Activation Threshold:'}</strong> ${isRu 
                ? 'Счётчик гаранта начинает расти <span style="color: #facc15; font-weight: 700;">ТОЛЬКО ПОСЛЕ ТОГО, как вы получите 50 золотых талантов, которые НЕ являются вашим Wishlist-талантом</span> (0/50 промахов).' 
                : isCn 
                ? '保底概率增长将在 <span style="color: #facc15; font-weight: 700;">累计获得 50 个非心愿单金色天赋后正式激活</span>（即 0/50 垫刀完成）。' 
                : 'Pity growth activates only after rolling 50 golden talents that miss your targeted wishlist talent (0/50 misses).'}</li>
              <li><strong>${isRu ? 'Шкала нарастания шанса:' : isCn ? '保底概率爬升阶梯:' : 'Pity Scaling Curve:'}</strong> ${isRu 
                ? 'Начиная с <strong>51-го золотого таланта</strong>, шанс выпадения целевого таланта возрастает на <strong>+5% за каждый последующий золотой ролл</strong>. На <strong>70-м золотом таланте (50 + 20)</strong> шанс достигает <strong>100% (абсолютный хард-гарант)</strong>!' 
                : isCn 
                ? '自第 <strong>51个金色天赋起</strong>，每次获得金天赋额外增加 <strong>+5% 心愿单命中率</strong>。第 <strong>70个金天赋 (50+20)</strong> 概率达到 <strong>100% 绝对硬保底</strong>！' 
                : 'Starting at the 51st gold talent, chance gains +5% per gold roll, hitting 100% absolute hard pity at the 70th gold talent!'}</li>
              <li><strong>${isRu ? 'Сброс гаранта:' : isCn ? '重置规则:' : 'Pity Reset:'}</strong> ${isRu 
                ? 'Как только выпадает целевой талант (хоть на 5-м, хоть на 55-м ролле), счётчик немедленно сбрасывается на <code>0/50</code>.' 
                : isCn 
                ? '一旦命中目标心愿单天赋，计数器立即重置为 <code>0/50</code>。' 
                : 'Upon rolling the targeted talent, the pity counter instantly resets to 0/50.'}</li>
            </ul>
          </div>

          <!-- 2. Manual vs Blitz Farming -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #38bdf8;">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 10px;">
              🍇 2. ${isRu ? 'Эффективный Фарм Плодов: Ручной vs Блиц' : isCn ? '天赋果实高效产出：手动 vs 扫荡' : 'Fruit Farming: Manual vs Blitz'}
            </div>
            <div class="guide-table-wrapper" style="margin-bottom: 10px;">
              <table class="guide-table" style="width: 100%; font-size: 12.5px;">
                <thead>
                  <tr style="background: rgba(30, 41, 59, 0.9);">
                    <th>Параметр</th>
                    <th>Ручной фарм (Manual Rush)</th>
                    <th>Блиц 10x (500 ⚡)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Основная цель</strong></td>
                    <td>Только Фиолетовые/Золотые враги + Босс</td>
                    <td>Полная зачистка всей карты</td>
                  </tr>
                  <tr>
                    <td><strong>Энергоэффективность</strong></td>
                    <td style="color: #22c55e;"><strong>Максимальная</strong> (тратите ⚡ только на ценные клетки)</td>
                    <td style="color: #facc15;">Средняя (тратит ⚡ на синих/зеленых мобов)</td>
                  </tr>
                  <tr>
                    <td><strong>Недельный выход <span class="guide-entity-chip guide-chip-fruit" onclick="App.openItemModal(\\'consumables\\', \\'D00002_001\\')">🍇 плодов</span></strong></td>
                    <td>Высокий концентрированный выход</td>
                    <td style="color: #38bdf8;">~360 с карты + ~200 с гоблина/сундуков (<strong>~550/нед.</strong>)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style="font-size: 12.5px; color: #94a3b8; line-height: 1.5;">
              💡 <strong>Совет по Блицу:</strong> Блиц в локации <em>Бездна 50 Пепельные земли (Abyss 50 Ashland)</em> позволяет одновременно фармить <span class="guide-entity-chip guide-chip-fruit" onclick="App.openItemModal(\\'consumables\\', \\'D00002_001\\')">🍇 плоды таланта</span> и звездить ценнейшее <span class="guide-entity-chip guide-chip-gear" onclick="App.openItemModal(\\'equipment\\', \\'Z00000_165\\')">📿 Ожерелье судьбы (Fate Necklace)</span>.
            </p>
          </div>

          <!-- 3. Talent Transfer & Duplication -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px;">
              🧬 3. ${isRu ? 'Техника Сборки 4 Слотов и Дублирования Эксклюзивов' : isCn ? '4金天赋打造与专属多重复制转移' : '4-Gold Slot Assembly & Duplication'}
            </div>
            <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #facc15; padding: 10px 14px; border-radius: var(--radius-sm); color: #fde047; font-size: 13px; line-height: 1.6; margin-bottom: 12px;">
              📜 <strong>Правило игры:</strong> <em>«При обычном реролле на одной странице не могут выпасть два таланта с одинаковым названием. Однако на функцию Переноса талантов это ограничение НЕ распространяется!»</em>
            </div>

            <div style="font-size: 13.5px; line-height: 1.8; color: #cbd5e1;">
              <strong>🛠️ Пошаговый алгоритм идеальной сборки 4 золотых слотов:</strong>
              <ol style="padding-left: 20px; margin: 8px 0;">
                <li><strong>Шаг 1 (Открытие 4 слотов):</strong> Крутите 1-ю страницу целевой героини <span class="guide-entity-chip guide-chip-fruit" onclick="App.openItemModal(\\'consumables\\', \\'D00002_001\\')">🍇 плодами</span>, пока не откроются <strong>4 любых золотых таланта</strong> (полезность роли не играет).</li>
                <li><strong>Шаг 2 (Выбивание эксклюзивов на донорах):</strong> Ролльте нужные эксклюзивные таланты (<em>9 жизней</em>, <em>Счастливый удар</em>, <em>В яблочко</em>) на второстепенных героях-донорах.</li>
                <li><strong>Шаг 3 (Перенос):</strong> Перенесите эксклюзивы с доноров в золотые слоты главной героини за <span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal(\\'consumables\\', \\'D00001_000\\')">💎 200 кристаллов/свап</span>.</li>
              </ol>

              <strong style="color: #38bdf8;">🔄 Как продублировать собственный эксклюзив героини (2x–4x копий):</strong>
              <ol style="padding-left: 20px; margin: 8px 0;">
                <li>Откройте <strong>2-ю страницу талантов (Page 2)</strong> у целевой героини.</li>
                <li>Выбейте её собственный эксклюзив на Page 2.</li>
                <li>Перенесите этот талант на временного персонажа-посредника.</li>
                <li>Перенесите его с посредника обратно на <strong>1-ю страницу (Page 1)</strong> главной героини!</li>
                <li>В результате на Page 1 у вас будут работать <strong>две или три копии её эксклюзивного таланта одновременно!</strong></li>
              </ol>
            </div>
          </div>

          <!-- 4. Meta Case Studies -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #22c55e;">
            <div class="section-heading" style="color: #22c55e; font-size: 16px; margin-bottom: 10px;">
              🏆 4. ${isRu ? 'Практические Кейсы Мета-Сборок Талантов' : isCn ? '顶级毕业天赋实战案例' : 'Meta Case Studies'}
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px; font-size: 13px; color: #cbd5e1; line-height: 1.6;">
              <div style="background: rgba(30, 41, 59, 0.6); padding: 12px; border-radius: var(--radius-sm); border-left: 3px solid #facc15;">
                <strong style="color: #facc15;">🐰 Топ-Билд для <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M13305_000')">Великой волшебницы [Зайчихи Альтер]</span> (BGM):</strong><br>
                Итоговый билд: <code>2x Lucky Strike</code> (Счастливый удар) + <code>1x 9 Lives</code> (9 жизней от <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M14203')">🐱 Чжаоцай</span>) + <code>1x Эксклюзив <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M12205_000')">Зайчихи-Ветрохода [Альтер]</span></code>. Дает максимальный DPS от характеристики <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal('consumables', 'D00002_000')">🍀 LUK</span> и бессмертие.
              </div>
              <div style="background: rgba(30, 41, 59, 0.6); padding: 12px; border-radius: var(--radius-sm); border-left: 3px solid #38bdf8;">
                <strong style="color: #38bdf8;">🧌 Мульти-Скаут талантов от <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal('M14206')">Троллихи-надзирательницы</span>:</strong><br>
                Выбиваем 1-й эксклюзив на 1-й странице Тролля ➔ переносим целевому саппорту ➔ слот освобождается ➔ выбиваем 2-й эксклюзив на 1-й странице Тролля ➔ переносим 2-ю копию!
              </div>
              <div style="background: rgba(30, 41, 59, 0.6); padding: 12px; border-radius: var(--radius-sm); border-left: 3px solid #ef4444;">
                <strong style="color: #f87171;">💎 Редкий дроп: <span class="guide-entity-chip guide-chip-chest" onclick="App.openItemModal('dungeon_relics', 'YW00015_121')">Философский камень (Philosopher's Stone)</span>:</strong><br>
                Красный артефакт (Red Item), выпадающий с элитных боссов при роллах кубика 17–19. При выпадении таких роллов обязательно жмите <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal('consumables', 'D00002_000')">🍀 Клевер</span> для гарантии его получения.
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  },
"""
