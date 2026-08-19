# -*- coding: utf-8 -*-

def get_damage_code():
    return """
  // 4. Damage Formulas, Shields & Buffs (RU, EN, CN)
  getDamageRU() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🛡️ Формулы Урона, Защита, Стойкость и Баффы</h2>
        <p class="guide-lead">
          Точный математический разбор механики урона: конвертация базовых характеристик, сравнение Атаки и Защиты, состояние пробития (Weakness Broken) и чистый урон (HP Loss).
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          
          <!-- Stat Conversion -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25);">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 10px;">
              📊 Базовые Характеристики и Конвертация (Stat Scaling)
            </div>
            <p style="color: #cbd5e1; font-size: 13.5px; line-height: 1.6; margin-bottom: 12px;">
              Каждый класс масштабирует урон от своего ключевого стата: <strong>Сила (Str)</strong> у воинов, <strong>Ловкость (Agi)</strong> у стрелков, <strong>Дух (Spi)</strong> у магов и жриц.
            </p>
            <div style="background: rgba(0,0,0,0.4); padding: 14px; border-radius: var(--radius-sm); font-family: monospace; font-size: 13px; line-height: 1.8; color: #38bdf8;">
              [Базовый профильный стат (Str / Agi / Spi)]<br>
              &nbsp;&nbsp;├──► <strong>5 стата</strong> = 1 Atk (Атака, красный цвет)<br>
              &nbsp;&nbsp;├──► <strong>10 стата</strong> = 1 Healing (Эффективность лечения)<br>
              &nbsp;&nbsp;├──► <strong>5 стата</strong> = 1 Def (Базовое снижение общего урона, синий цвет)<br>
              &nbsp;&nbsp;└──► <strong>5 стата</strong> = 1 Weakness (Защита в пробитом состоянии, коричневый цвет)
            </div>
          </div>

          <!-- Atk vs Def -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #ef4444;">
            <div class="section-heading" style="color: #f87171; font-size: 16px; margin-bottom: 10px;">
              ⚔️ 1. Сравнение Атаки и Защиты (Atk vs Def Threshold)
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>Правило полного обнуления:</strong> Если <span style="color: #f87171; font-weight: 700;">Def цели &ge; Atk атакующего</span>, атака признается неуспешной, и наносимый урон <strong>полностью сводится к 0 (Negate)</strong>! В этом случае статус <em>Уязвимость (Vulnerable)</em> НЕ срабатывает.</li>
              <li><strong>Успешный пробой:</strong> Если Atk &gt; Def, цель получает расчетный урон, поверх которого накладывается бонус от статуса <em>Vulnerable</em>.</li>
              <li><strong>Double Damage (Двойной урон):</strong> Удваивает <strong>базовую атаку (Total Atk)</strong> в момент Action Start <em>до</em> сравнения с защитой цели. ⚠️ <em>Не удваивает специфические конвертированные модификаторы (Skill DMG, Basic DMG), а только чистый показатель Atk.</em></li>
            </ul>
          </div>

          <!-- Toughness & Weakness Broken -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px;">
              🛡️ 2. Стойкость (Toughness) и Пробитие Слабости (Weakness Broken)
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li>Каждый персонаж имеет фиксированный пул <strong>Стойкости (Toughness)</strong>.</li>
              <li>Стойкость теряется от <strong>каждого входящего удара</strong>, даже если урон от удара был полностью равен 0!</li>
              <li>Дебафф <strong>Страх (Fear)</strong> ускоряет истощение стойкости. Бафф <strong>Стойкость духа (Fortitude)</strong> восстанавливает ее.</li>
              <li><strong>Состояние Weakness Broken:</strong> При истощении полоски Toughness показатель Def цели полностью отключается и заменяется на показатель <strong>Weakness</strong> (который обычно в разы ниже Def). Это идеальное окно для нанесения максимального урона боссам с 999 брони.</li>
            </ul>
          </div>

          <!-- HP Loss -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #a855f7;">
            <div class="section-heading" style="color: #c084fc; font-size: 16px; margin-bottom: 10px;">
              🩸 3. Чистый Урон (HP Loss) и Кровотечения
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>Игнорирование защиты:</strong> Эффекты потери HP (Кровотечение, Яд, Горение, Порча) наносят чистый урон, полностью <strong>игнорируя Def, Weakness и Щиты</strong>.</li>
              <li><strong>Иммунитет Металлических монстров:</strong> Урон от HP Loss <strong>не может убить расу Металлических монстров (Metallic)</strong> — их необходимо добивать прямыми физическими или магическими ударами.</li>
              <li><strong>Снижение урона:</strong> HP Loss снижается <em>исключительно</em> характеристикой <strong>HP Loss Reduction</strong>.</li>
              <li><strong>Кап урона:</strong> Стандартные яды и кровотечения имеют фиксированный кап урона в % от Max HP цели. Особые источники (Порча / Corruption, урон механик этажа) могут превышать стандартный кап.</li>
            </ul>
          </div>

          <!-- Defeat Effects -->
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #22c55e;">
            <div class="section-heading" style="color: #22c55e; font-size: 16px; margin-bottom: 10px;">
              💀 4. Эффекты Поражения и Смерти (Defeat Effects)
            </div>
            <p style="color: #94a3b8; font-size: 13px; margin-bottom: 8px;">
              Формулировки условий смерти критически важны для построения синергий талантов:
            </p>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><code>When the enemy is defeated</code> — срабатывает только при гибели вражеского персонажа.</li>
              <li><code>When the target is defeated</code> — срабатывает при добивании цели конкретным персонажем.</li>
              <li><code>When ally is defeated</code> — срабатывает при гибели вашего союзника.</li>
              <li><code>When defeated</code> — срабатывает <strong>только при смерти самого носителя</strong> (эффект предсмертного завещания). Не триггерится от смерти союзников!</li>
              <li><code>Defeating a target with single target skill</code> — сработает <strong>только</strong> если враг был добит одиночным активным навыком.</li>
            </ul>
          </div>

        </div>
      </div>
    `;
  },

  getDamageEN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🛡️ Damage Formulas, Shields & Buffs</h2>
        <p class="guide-lead">
          Mathematical overview of damage scaling, Atk vs Def thresholds, Weakness Break mechanics, and true damage (HP Loss).
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25);">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 10px;">
              📊 Base Stat Conversion
            </div>
            <div style="background: rgba(0,0,0,0.4); padding: 14px; border-radius: var(--radius-sm); font-family: monospace; font-size: 13px; line-height: 1.8; color: #38bdf8;">
              5 Primary Stat (Str/Agi/Spi) = 1 Atk<br>
              10 Primary Stat = 1 Healing Power<br>
              5 Primary Stat = 1 Def<br>
              5 Primary Stat = 1 Weakness (Broken state defense)
            </div>
          </div>

          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #ef4444;">
            <div class="section-heading" style="color: #f87171; font-size: 16px; margin-bottom: 10px;">
              ⚔️ 1. Atk vs Def Threshold Rule
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li>If <strong>Target Def &ge; Attacker Atk</strong>, damage is completely <strong>Negated to 0</strong>. Vulnerable does NOT trigger on 0 damage.</li>
              <li>If Atk &gt; Def, damage goes through and Vulnerable multipliers apply.</li>
              <li><strong>Double Damage:</strong> Doubles raw Total Atk prior to Def subtraction.</li>
            </ul>
          </div>

          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px;">
              🛡️ 2. Toughness & Weakness Broken
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li>Toughness is depleted on every incoming hit (even 0 dmg hits).</li>
              <li><strong>Weakness Broken:</strong> When Toughness hits 0, target Def drops to the much lower <strong>Weakness</strong> value.</li>
            </ul>
          </div>

          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #a855f7;">
            <div class="section-heading" style="color: #c084fc; font-size: 16px; margin-bottom: 10px;">
              🩸 3. True Damage (HP Loss)
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li>Bypasses Def, Weakness, and Shields. Cannot kill Metallic race monsters.</li>
              <li>Mitigated only by <strong>HP Loss Reduction</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  },

  getDamageCN() {
    return `
      <div class="guide-article">
        <h2 class="guide-title">🛡️ 伤害计算、护盾与增益 (Damage Formulas & Buffs)</h2>
        <p class="guide-lead">
          深度解析攻击力与防御力判定、韧性击破 (Weakness Broken)、真实伤害 (HP Loss) 与击杀被动触发条件。
        </p>

        <div style="display: flex; flex-direction: column; gap: 18px; margin-top: 20px;">
          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.25);">
            <div class="section-heading" style="color: #38bdf8; font-size: 16px; margin-bottom: 10px;">
              📊 基础属性转换比例
            </div>
            <div style="background: rgba(0,0,0,0.4); padding: 14px; border-radius: var(--radius-sm); font-family: monospace; font-size: 13px; line-height: 1.8; color: #38bdf8;">
              5点主属性 (力量/敏捷/智力) = 1点攻击力 (Atk)<br>
              10点主属性 = 1点治疗量 (Healing)<br>
              5点主属性 = 1点基础防御 (Def)<br>
              5点主属性 = 1点弱点防御 (Weakness)
            </div>
          </div>

          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #ef4444;">
            <div class="section-heading" style="color: #f87171; font-size: 16px; margin-bottom: 10px;">
              ⚔️ 1. 攻击与防御硬判定
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li><strong>破防判定：</strong> 若 <strong>目标Def &ge; 攻击者Atk</strong>，本次攻击直接被 <strong>完全免伤归0 (Negate)</strong>，且易伤 (Vulnerable) 不生效。</li>
              <li>若 Atk &gt; Def，则正常结算伤害并享受易伤加成。</li>
              <li><strong>Double Damage (双倍伤害)：</strong> 在行动起手时直接将基础 Total Atk 翻倍后再与防御比对。</li>
            </ul>
          </div>

          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #facc15;">
            <div class="section-heading" style="color: #facc15; font-size: 16px; margin-bottom: 10px;">
              🛡️ 2. 韧性值与破韧虚弱 (Weakness Broken)
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li>任何攻击（哪怕伤害为0）都会削减目标韧性。恐惧 (Fear) 加速削韧。</li>
              <li><strong>破韧状态：</strong> 韧性归0后，目标高额防御失效，临时替换为极低的 <strong>Weakness</strong> 防御值。</li>
            </ul>
          </div>

          <div class="detail-section" style="background: rgba(15, 23, 42, 0.85); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid #a855f7;">
            <div class="section-heading" style="color: #c084fc; font-size: 16px; margin-bottom: 10px;">
              🩸 3. 真实伤害 (HP Loss)
            </div>
            <ul class="guide-list" style="color: #cbd5e1; font-size: 13.5px; line-height: 1.8;">
              <li>无视防御、弱点与护盾。但 <strong>无法击杀金属系魔物 (Metallic)</strong>。</li>
              <li>仅受 <strong>HP Loss Reduction (生命流失减免)</strong> 词条减免。</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  },
"""
