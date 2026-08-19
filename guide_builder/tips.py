# -*- coding: utf-8 -*-

def get_tips_code():
    return """
  // 1. Beginner Tips, Economy & Progression Rules (Accurate Entity Links)
  getTipsContent(lang = 'RU') {
    const isRu = lang === 'RU';
    const isCn = lang === 'CN';
    return `
      <div class="guide-article">
        <h2 class="guide-title">💡 ${isRu ? 'Советы новичкам, Экономика ресурсов и Правила прокачки' : isCn ? '萌新入门避坑、资源规划与养成法则' : 'Beginner Tips, Resource Economy & Progression Rules'}</h2>
        <p class="guide-lead">
          ${isRu 
            ? 'Фундаментальные правила эффективного старта, правильная трата самоцветов, механика бесплатного ресета до 60 уровня, алхимия сундуков, экономия энергии и 7-дневный роадмап развития аккаунта. Кликните по названию любого предмета или героини для просмотра детальной карточки.' 
            : isCn 
            ? '公会萌新必读全方位指南：钻石最佳使用优先级、体力干粮规划、60级无损重置机制、宝箱炼金合成避坑与前7日开荒黄金路线。点击任意物品或角色卡片可直接查看百科弹窗。' 
            : 'Essential starter guide: gem priority, stamina efficiency, level 60 free resets, alchemy optimization, and 7-day progression roadmap. Click any character or item chip for instant stats.'}
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          
          <!-- 1. Gems & Summons -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25);">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 10px;">
              💎 1. ${isRu ? 'Валюты и Крутки (Gems & Summons)' : isCn ? '货币与招募策略' : 'Currencies & Summons'}
            </div>
            <ul style="padding-left: 20px; line-height: 1.8; color: #cbd5e1; font-size: 13.5px;">
              <li><strong><span class="guide-entity-chip guide-chip-gem" onclick="App.openItemModal('consumables', 'D00001_000')">💎 ${isRu ? 'Самоцветы (Gems)' : isCn ? '钻石 (Gems)' : 'Gems'}</span>:</strong> ${isRu 
                ? 'Тратьте кристаллы <span style="color: #facc15; font-weight: 700;">только на Альтер-найм (Alter Summon)</span> и на замену золотых талантов (200 гемов/свап). В обычном магазине снаряжение за гемы покупать строго не рекомендуется. Еженедельные награды Арены и Астрального Царства (Astral Realm) дают стабильный приток кристаллов.' 
                : isCn 
                ? '钻石应严格保留用于<span style="color: #facc15; font-weight: 700;">异格招募 (Alter Summon)</span>以及后期金天赋替换（200钻/次）。切勿在普通商店用钻石购买基础装备。每周竞技场与星界领域提供稳定钻石收益。' 
                : 'Spend gems <span style="color: #facc15; font-weight: 700;">only on Alter Summons</span> and high-end golden talent transfers (200 gems/swap). Never buy standard equipment for gems in the general shop.'}</li>
              <li><strong>${isRu ? 'Список желаний (Wishlist Pick):' : isCn ? '心愿单推荐 (Wishlist):' : 'Wishlist Strategy:'}</strong> ${isRu
                ? 'В список желаний базового найма рекомендуется ставить <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M13306\\')">🍄 Кристальную грибницу (M13306)</span> или <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M11301\\')">🛡️ Командующую Легиона (M11301)</span>. Они служат генераторами маны (батарейками), ускоряя каст ультимейтов вашей главной ударницы.'
                : isCn
                ? '常规心愿单强烈推荐优先选择 <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M13306\\')">🍄 水晶菇娘 (M13306)</span> 或 <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M11301\\')">🛡️ 军团统领 (M11301)</span>。作为回蓝充能电池，她们能极大加快主力输出的必杀技释放节奏。'
                : 'Set <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M13306\\')">🍄 Crystal Shroom (M13306)</span> or <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M11301\\')">🛡️ Legion Commander (M11301)</span> on your Standard Wishlist as premier mana batteries to feed your main hypercarry.'}</li>
              <li><strong>${isRu ? 'Смена цели в Wishlist:' : isCn ? '心愿单切换时机:' : 'Wishlist Target Swapping:'}</strong> ${isRu
                ? 'Как только целевая героиня прокачана до 3★/5★, немедленно меняйте цель списка желаний на следующего ключевого саппорта или танка, чтобы равномерно развивать весь кодекс.'
                : isCn
                ? '当目标角色升至3★/5★后，应及时更换心愿单目标至下一个核心辅助或前排坦克，避免溢出碎片浪费。'
                : 'Once your targeted heroine reaches 3★ or 5★, swap your wishlist to the next core utility unit or tank.'}</li>
            </ul>
          </div>

          <!-- 2. Gold & Consumables -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(234, 179, 8, 0.25);">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px;">
              💰 2. ${isRu ? 'Экономика Золота и Расходников (Gold & Shop Economy)' : isCn ? '金币消耗与商店选购' : 'Gold & Shop Economy'}
            </div>
            <ul style="padding-left: 20px; line-height: 1.8; color: #cbd5e1; font-size: 13.5px;">
              <li><strong><span class="guide-entity-chip guide-chip-gold" onclick="App.openItemModal('consumables', 'D00000_000')">🪙 ${isRu ? 'Золото (Gold)' : isCn ? '金币 (Gold)' : 'Gold'}</span>:</strong> ${isRu
                ? 'На ранней стадии кажется, что золота много, но после 60 уровня прокачка уровней и закалка оружия требуют сотен тысяч монет. Не распыляйте золото на второстепенных героев.'
                : isCn
                ? '前期金币看似充裕，但60级以上角色突破与高阶装备强化金币消耗呈指数级上升。严禁盲目给全仓库角色升阶。'
                : 'Gold is plentiful early, but late-game enhancement costs hundreds of thousands. Invest heavily only in your core carry weapons and relics.'}</li>
            </ul>
          </div>

          <!-- 3. Manual vs Blitz -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(168, 85, 247, 0.25);">
            <div class="section-heading" style="color: #c084fc; font-size: 16px; margin-bottom: 10px;">
              ⚔️ 3. ${isRu ? 'Прохождение: Ручная зачистка vs 10x Блиц (Manual vs Blitz)' : isCn ? '手动探索与10连扫荡对比' : 'Manual Run vs 10x Blitz'}
            </div>
            <p style="color: #94a3b8; font-size: 13px; margin-bottom: 10px;">
              ${isRu ? 'Разница между экономией энергии и пассивным сбором лута:' : isCn ? '体力效率与战利品收益模式深度对比：' : 'Energy efficiency vs passive loot comparison:'}
            </p>
            <div class="guide-table-wrapper" style="margin-bottom: 10px;">
              <table class="guide-table" style="width: 100%; font-size: 12.5px;">
                <thead>
                  <tr style="background: rgba(30, 41, 59, 0.9);">
                    <th>${isRu ? 'Параметр' : isCn ? '维度' : 'Parameter'}</th>
                    <th>${isRu ? 'Ручной фарм (Manual Rush)' : isCn ? '手动定点突进' : 'Manual Rush'}</th>
                    <th>${isRu ? '10x Блиц (500 ⚡)' : isCn ? '10连扫荡 (500体力)' : '10x Blitz (500 Stamina)'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>${isRu ? 'Целевые клетки' : isCn ? '目标地块' : 'Target Cells'}</strong></td>
                    <td style="color: #22c55e;">${isRu ? 'Только Босс, 👍 и спец-клетки' : isCn ? '仅打Boss、👍优选与特殊格' : 'Only Boss, 👍 and special spots'}</td>
                    <td style="color: #38bdf8;">${isRu ? 'Все клетки поля 100%' : isCn ? '全图所有普通与精英怪' : '100% full map sweep'}</td>
                  </tr>
                  <tr>
                    <td><strong>${isRu ? 'Энергоэффективность' : isCn ? '体力利用率' : 'Energy Efficiency'}</strong></td>
                    <td style="color: #22c55e;">${isRu ? 'Высочайшая (сберегает 60–70% ⚡)' : isCn ? '极高 (节省60-70%体力)' : 'Highest (Saves 60-70% Stamina)'}</td>
                    <td style="color: #facc15;">${isRu ? 'Средняя (тратит ⚡ на синих мобов)' : isCn ? '中等 (消耗体力清杂鱼)' : 'Moderate (Clears low-tier mobs)'}</td>
                  </tr>
                  <tr>
                    <td><strong><span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal('consumables', 'D00002_000')">🍀 ${isRu ? 'Клевер' : isCn ? '四叶草' : 'Clovers'}</span></strong></td>
                    <td>${isRu ? 'Умеренный приток' : isCn ? '较低' : 'Moderate'}</td>
                    <td style="color: #22c55e;">${isRu ? 'Максимальный (сыплет со всей карты)' : isCn ? '极高 (全图杂兵掉落海量草)' : 'Highest (Pours from entire map)'}</td>
                  </tr>
                  <tr>
                    <td><strong>${isRu ? 'Идеальное применение' : isCn ? '最佳适用场景' : 'Best Use Case'}</strong></td>
                    <td>${isRu ? 'Таргетный поиск шмота по Трекингу' : isCn ? '精准按图鉴追踪缺件装备' : 'Precision gear tracking & Boss rush'}</td>
                    <td>${isRu ? 'Фарм плодов таланта и очков Кодекса' : isCn ? '无脑刷天赋果实与海量经验/草' : 'AFK Talent fruit farming & Clovers'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 4. Level 60 Reset Rule -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(34, 197, 94, 0.25);">
            <div class="section-heading" style="color: #22c55e; font-size: 16px; margin-bottom: 10px;">
              🆙 4. ${isRu ? 'Правило Бесплатного Сброса Уровней (Level 60 Reset Rule)' : isCn ? '60级前无损重置机制' : 'Free Level 60 Reset Rule'}
            </div>
            <ul style="padding-left: 20px; line-height: 1.8; color: #cbd5e1; font-size: 13.5px;">
              <li><strong>${isRu ? 'Бесплатный сброс (0 гемов):' : isCn ? '100%无损重置:' : 'Zero-Cost Reset:'}</strong> ${isRu 
                ? 'Любого персонажа можно в любой момент <span style="color: #22c55e; font-weight: 700;">сбросить бесплатно и вернуть 100% золота и опыта</span>, пока его уровень <strong>не превышает 60</strong>. Качайте и тестируйте любых героинь без страха потерять ресурсы!' 
                : isCn 
                ? '角色在 <strong>60级及以下</strong> 时，可以随时<span style="color: #22c55e; font-weight: 700;">免费无损重置，全额返还100%金币与经验</span>！前期请大胆尝试升级任何喜欢的角色与阵容组合。' 
                : 'Any character can be <span style="color: #22c55e; font-weight: 700;">reset for free with 100% resource refund</span> as long as their level does not exceed 60.'}</li>
              <li><strong>${isRu ? 'Точка фиксации ресурсов:' : isCn ? '突破60级警戒线:' : 'Post-60 Lock-in:'}</strong> ${isRu
                ? 'Начиная с 61 уровня для сброса потребуются кристаллы. Превышайте 60 уровень только у проверенных главных керри (<span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M12301\\')">👑 Принцесса</span>, <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M53301_001\\')">❄️ Астральная Злодейка</span>, <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M13305_000\\')">🐰 Зайчиха [Альтер]</span>).'
                : isCn
                ? '一旦突破61级，后续重置将消耗钻石。请仅在确定主C人选（如 <span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M12301\\')">👑 鹰身公主</span>、<span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M53301_001\\')">❄️ 冰邪</span>、<span class="guide-entity-chip guide-chip-char" onclick="App.openCharacterModal(\\'M13305_000\\')">🐰 异格兔法</span>）后再突破60级大关。'
                : 'Resetting after Lv 61 costs gems. Push past 60 only for proven hypercarries.'}</li>
            </ul>
          </div>

          <!-- 5. Alchemy & Merging Rule -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(239, 68, 68, 0.25);">
            <div class="section-heading" style="color: #f87171; font-size: 16px; margin-bottom: 10px;">
              ⚗️ 5. ${isRu ? 'Золотое Правило Алхимии: 3★ Кодекса прежде всего!' : isCn ? '炼金熔炼铁律：先升满3★图鉴！' : 'Alchemy Rule: 3★ Codex First!'}
            </div>
            <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 12px 16px; border-radius: var(--radius-sm); color: #fca5a5; font-size: 13.5px; line-height: 1.6;">
              ⚠️ <strong>${isRu ? 'ВНИМАНИЕ:' : isCn ? '重要警告：' : 'CRITICAL WARNING:'}</strong> ${isRu 
                ? 'НИ В КОЕМ СЛУЧАЕ не скармливайте в алхимию экипировку и руны, пока они не прокачаны до <strong>3★ MAX в Кодексе</strong>! Прокачка до 3★ активирует резонансы сетов всего 2 предметами вместо 3, а также дает постоянные бонусы к характеристикам всего аккаунта. Только лишние дубликаты после 3★ идут в утиль.' 
                : isCn 
                ? '绝对不要将未满 <strong>3★图鉴</strong> 的装备或符文直接喂给炼金分解！升到3★不仅提供全队永久图鉴属性，更能让你仅用2件装备激活3件套共鸣。只有溢出且已满3★的装备才可用于熔炼紫晶。' 
                : 'NEVER feed gear or runes to alchemy before reaching <strong>3★ MAX in your Codex</strong>! 3★ items allow activating 3-piece set bonuses with just 2 equipped items.'}
            </div>
          </div>

          <!-- 6. 7-Day Progression Roadmap -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25);">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 12px;">
              📋 6. ${isRu ? '7-Дневный План Развития Новичка (Newbie Roadmap)' : isCn ? '新手前7日黄金成长路线图' : '7-Day Starter Progression Roadmap'}
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
              <div style="background: rgba(30, 41, 59, 0.6); padding: 12px 14px; border-radius: var(--radius-sm); border-left: 3px solid #38bdf8;">
                <div style="font-weight: 800; color: #38bdf8; font-size: 13px;">${isRu ? 'День 1–2: Старт и Сюжет' : isCn ? '第1-2天：主线与基础' : 'Day 1–2: Story & Basics'}</div>
                <div style="font-size: 12px; color: #cbd5e1; margin-top: 4px; line-height: 1.5;">
                  ${isRu ? 'Пройдите сюжетные этапы 1–4, прокачайте стартовую команду до 30 уровня, активируйте все подарочные промокоды.' : isCn ? '通关主线前4章，全员拉至30级，兑换全部可用礼包码积累第一桶金。' : 'Clear chapters 1–4, get main squad to Lv 30, redeem all active gift codes.'}
                </div>
              </div>

              <div style="background: rgba(30, 41, 59, 0.6); padding: 12px 14px; border-radius: var(--radius-sm); border-left: 3px solid #facc15;">
                <div style="font-weight: 800; color: #facc15; font-size: 13px;">${isRu ? 'День 3–4: Гильдия и Сеты' : isCn ? '第3-4天：公会与套装' : 'Day 3–4: Guild & Sets'}</div>
                <div style="font-size: 12px; color: #cbd5e1; margin-top: 4px; line-height: 1.5;">
                  ${isRu ? 'Вступите в активную гильдию, бейте гильд-босса. Начните фармить фиолетовые сундуки экипировки и закрывать 3★ в Кодексе.' : isCn ? '加入活跃公会参与首领战。开始收集紫色装备箱，专注点亮基础3★图鉴。' : 'Join an active guild, fight guild bosses, open purple gear chests for 3★ codex.'}
                </div>
              </div>

              <div style="background: rgba(30, 41, 59, 0.6); padding: 12px 14px; border-radius: var(--radius-sm); border-left: 3px solid #22c55e;">
                <div style="font-weight: 800; color: #22c55e; font-size: 13px;">${isRu ? 'День 5–6: Бездна и Клевер' : isCn ? '第5-6天：深渊与四叶草' : 'Day 5–6: Abyss & Clovers'}</div>
                <div style="font-size: 12px; color: #cbd5e1; margin-top: 4px; line-height: 1.5;">
                  ${isRu ? 'Пробейте этажи Бездна 20+ для +1 доп. дропа. Копите <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal(\\'consumables\\', \\'D00002_000\\')">🍀 Клевер</span> и используйте его при базовых роллах 17–19 для выбивания оранжевого шмота.' : isCn ? '攻克深渊20+层获取+1额外掉落。囤积 <span class="guide-entity-chip guide-chip-clover" onclick="App.openItemModal(\\'consumables\\', \\'D00002_000\\')">🍀 四叶草</span> 并在基础掷出17-19点时精准补正出橙装。' : 'Push Abyss 20+ for +1 bonus drop. Save clovers and trigger on 17-19 rolls for orange gear.'}
                </div>
              </div>

              <div style="background: rgba(30, 41, 59, 0.6); padding: 12px 14px; border-radius: var(--radius-sm); border-left: 3px solid #c084fc;">
                <div style="font-weight: 800; color: #c084fc; font-size: 13px;">${isRu ? 'День 7+: Таланты и Мета' : isCn ? '第7天+：天赋与成型' : 'Day 7+: Talents & Meta'}</div>
                <div style="font-size: 12px; color: #cbd5e1; margin-top: 4px; line-height: 1.5;">
                  ${isRu ? 'Настройте Wishlist талантов, фармите плоды через Блиц в Бездне 50, соберите 4 золотых слота и переносите эксклюзивы доноров.' : isCn ? '设置心愿单天赋，在深渊50层扫荡天赋果实，为核心主C打造4金天赋与多重专属转移。' : 'Set talent wishlist, blitz Abyss 50 for fruits, craft 4 golden slots and transfer exclusives.'}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  },
"""
