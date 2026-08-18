# 🌟 魔物娘公会 (Guild of Monster Girls) — 完整图鉴数据库与收藏同步工具

<div align="center">

**[English](README.md)** | **[Русский](README_RU.md)** | **[简体中文](README_CN.md)**

> **《魔物娘公会》（Guild of Monster Girls / Гильдия Монстро-девочек）全角色、装备图鉴、数值计算器、攻略指南与账号收藏同步工具。**
> 
> *完整三语支持：English (🇬🇧 EN)、Русский (🇷🇺 RU)、简体中文 (🇨🇳 CN)。*

🌐 **在线网页版 (GitHub Pages):** [https://onarous.github.io/Guild-of-Monster-Girls-Encyclopedia/](https://onarous.github.io/Guild-of-Monster-Girls-Encyclopedia/)

</div>

---

## ✨ 核心功能

### 1. 📖 全量游戏图鉴数据库 (204+ 位魔物娘与 3,353+ 件装备道具)
* **全角色与异化形态 (Alter):**
  * 收录全部魔物娘（品阶 **SS★、S★、A★、B★、C★**）。
  * 完整收录 60 种全新属性与技能形态的异化角色（Alter）。
  * 精确基础属性（**HP、ATK、DEF、SPD、INT、STR、DEX**）及成长偏向。
  * 专属必杀技、被动特性、专属天赋（含品阶标识）、信物（Relics）与升阶进阶素材。
* **装备、信物与套装羁绊 (Bonds):**
  * 完整按部位分类的装备图鉴（*主手武器、身体防具、头部防具、鞋子、护手、腰带、戒指、项链、徽章*）。
  * 分类涵盖：信物、符文、套装羁绊、词缀、神石、宝箱与素材。
  * 严格按稀有度品阶排序：**SS** $\rightarrow$ **S** $\rightarrow$ **A** $\rightarrow$ **B** $\rightarrow$ **C**。
* **高精立绘与图标:** 内置全角色高精度立绘头像与全道具图标映射。

---

### 2. 📚 互动攻略指南与理论配队
* **📖 职业定位与配队思路:** 深度分析输出 (DPS)、坦克 (Tank)、治疗 (Healer)、辅助 (Support) 的职业克制与协同体系。
* **🌌 招募卡池全量一览:**
  * **公会常规招募:** 140位常驻角色完整卡池。
  * **异化卡池 (Alter Banner):** 60位异化/皮肤形态完整常驻卡池。
* **🎁 实时有效礼包兑换码 (Gift Codes):** 收录最新可用兑换码，支持 **一键点击复制到剪贴板**。
* **🛡️ 属性克制轮盘:** 火、水、风、地四系循环克制及光、暗互克关系矩阵。

---

### 3. ⭐ 收藏管理与数据同步
* **一键便捷同步:**
  * ⚡ **WebADB 自动连接:** 一键直连电脑安卓模拟器 (*LDPlayer、MuMu、BlueStacks、Nox*) 或已 Root 的安卓设备，秒级读取当前游戏存档。
  * 🎫 **Token 快速登录:** 支持 ChillyRoom 账号 Session Token 登录（有效期长达30天），支持 URL 直链快捷登录 `/?token=<TOKEN>`。
  * 📁 **JSON 存档导入:** 纯前端拖拽导入 `monster_girls_roster.json` 或云存档，支持在 GitHub Pages 纯静态环境下脱机使用。
* **手动收藏标记:** 点击角色卡片右上角的 `⭐ 收藏` 即可即时切换拥有状态。
* **🔒 100% 本地隐私安全:** 所有账号 Token 及收藏数据均保存在浏览器本地存储（`localStorage`），绝不上穿任何第三方服务器。

---

### 4. 📱 移动端抽屉导航与响应式体验
* **滑动侧边抽屉菜单 (Slide-out Navigation Drawer):**
  * 专为手机端优化的紧凑导航栏与汉堡按钮 (**☰**)。
  * 流畅侧边滑出面板，包含全部分区导航、收录数量统计、高亮指示灯及内置语言切换器。
* **多维筛选与即时搜索:**
  * 支持按名字、ID、技能文本或标签快速检索。
  * 多维筛选按钮：品阶、职业、元素、战斗定位、部位、招募卡池（*常规、异化、限时异化、掉落、限时UP、活动*）。
  * 严格水平/垂直对齐的筛选排版。

---

### 5. 🛠️ 开发者工具与 SSL Pinning 绕过
* **内存直接补丁 Frida SSL Bypass:** 编写 `unity_ssl_bypass.js` 与 `scripts/run_frida_ssl_bypass.py`，采用 ARM64 指令直接内存覆写（`mov w0, #1; ret`），无崩溃绕过 Unity TLS 与 ChillyRoom 证书校验。
* **手机免电脑脚本 `scripts/shizuku_sync.sh`:** 配合 Termux 与 Shizuku 在手机端直接提取 Token。
* **本地 CORS 代理服务器 (`server.py`):** 纯 Python 3 轻量级服务器，内置代理解决跨域访问限制。

---

## 🚀 快速开始

### 方式 1: 本地运行网页版图鉴
1. 双击运行 **`run_web_encyclopedia.bat`**（或在 `Web_Encyclopedia` 目录下执行 `python server.py`）。
2. 在浏览器中打开：**`http://localhost:8787`**

### 方式 2: 通过 Python 脚本导出角色数据
1. 运行根目录下的 **`run.bat`** 或 `scripts` 目录下的 **`extract_monster_girls.bat`**。
2. 脚本将下载最新的云端存档并生成：
   * `monster_girls_roster.json` — 结构化角色全数据。
   * `monster_girls_roster.txt` — 排版整齐的文本统计概览。

---

## 📁 项目目录结构

```text
MonsterGirls_Account_Extractor/
├── Web_Encyclopedia/              # 网页应用前端
│   ├── index.html                 # 页面主入口
│   ├── server.py                  # 本地 HTTP 服务器与 API 代理
│   ├── css/
│   │   ├── style.css              # 主题样式、抽屉菜单与响应式布局
│   │   └── components.css         # 卡片、模态框、标签与筛选器样式
│   ├── js/
│   │   ├── app.js                 # 核心逻辑控制器
│   │   ├── i18n.js                # 多语言字典 (RU / EN / CN)
│   │   ├── characters_view.js     # 角色列表与详情模态框渲染
│   │   ├── items_view.js          # 装备、信物与羁绊渲染
│   │   ├── guides_view.js         # 攻略指南、卡池明细、兑换码
│   │   └── collection_view.js     # 收藏管理与同步组件
│   ├── data/                      # 静态 JSON 数据库
│   │   ├── characters_ru.json
│   │   ├── characters_en.json
│   │   ├── characters_cn.json
│   │   ├── items_ru.json
│   │   ├── items_en.json
│   │   ├── items_cn.json
│   │   └── image_mappings.json
│   └── assets/img/                # 立绘头像与道具图标
├── scripts/                       # Python 脚本与数据提取工具
│   ├── extract_monster_girls.py   # 导出账号全数据
│   ├── auto_fetch_token_from_device.py
│   ├── login_by_password.py
│   ├── login_by_email.py
│   ├── run_frida_ssl_bypass.py    # Frida SSL Bypass 运行器
│   └── shizuku_sync.sh            # Termux + Shizuku 手机同步脚本
├── unity_ssl_bypass.js            # Frida 动态内存指令补丁
├── config.json                    # API 与会话配置
├── run_web_encyclopedia.bat       # 网页版启动脚本
└── run.bat                        # 交互式主菜单启动器
```

---

## 📱 收藏数据同步指南

### 🖥️ 电脑安卓模拟器 (LDPlayer / BlueStacks / MuMu / Nox)
1. 启动模拟器并进入《魔物娘公会》游戏主城。
2. 确保在模拟器设置中开启了 **Root 权限** 和 **ADB 调试**。
3. 在图鉴网页中进入 **«⭐ 我的收藏»** 分区，点击 **«⚡ 连接设备并同步»**。

### 📱 安卓手机免电脑 (Shizuku + Termux)
1. 在手机上通过*无线调试*启动 **Shizuku** 服务。
2. 在 **Termux** 终端中运行：
   ```bash
   sh scripts/shizuku_sync.sh
   ```
3. 脚本将提取当前 Token 并自动唤起手机浏览器展示收藏。

---

## 🛡️ 安全与免责声明

* ⚠️ **非官方同人/社区项目。** 本网站及百科数据库由玩家社区独立制作，与《魔物娘公会》原作者、开发商及发行方 (*ChillyRoom*) 无任何官方关联、赞助或背书。游戏素材与商标版权均归其原著作权人所有。
* 本工具仅读取游戏本地公开的会话缓存（`SdkStateCache`）以获取临时的公开 `Bearer` Token。
* 绝不收集、保存或上传用户的账号密码及任何敏感数据。

---

## 📜 开源协议

MIT License。仅供玩家交流与学习参考。
