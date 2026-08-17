# 🌟 魔物娘公会 — 完整图鉴数据库与存档同步工具箱

<div align="center">

**[English](README.md)** | **[Русский](README_RU.md)** | **[简体中文](README_CN.md)**

> **《魔物娘公会》（Guild of Monster Girls / Гильдия Монстро-девочек）完整网页版百科图鉴与账号数据同步工具。**
> 
> *支持 3 种语言：简体中文 (🇨🇳 CN)、Русский (🇷🇺 RU)、English (🇬🇧 EN)。*

🌐 **在线版本 (GitHub Pages):** [https://onarous.github.io/Guild-of-Monster-Girls-Encyclopedia/](https://onarous.github.io/Guild-of-Monster-Girls-Encyclopedia/)

</div>

---

## ✨ 核心特色功能 (Features)

### 1. 📖 完整游戏数据库 (204+ 魔物娘角色 & 3,353+ 装备与道具)
* **角色图鉴：** 全品阶魔物娘 (S、A、B、C)，详尽基础数值 (生命、攻击、防御、速度、精神、力量、敏捷)、成长倾向、专属绝技(大招)、被动特性、专属信物、晋阶素材与阵容推荐。
* **装备与信物：** 武器、身体防具、头部防具、鞋子、护手、腰带、戒指、项链、徽章、符文、套装羁绊 (Bonds)、词缀、宝箱、神石与突破素材。
* **立绘与图标：** 内置完整的角色立绘与道具高清图标库。

### 2. ⭐ 互动式收藏与账号同步 (Collection Manager)
* **一键便捷同步：**
  * ⚡ **一键自动同步 (WebADB / 设备)：** 瞬间读取安卓模拟器 (*雷电、夜神、MuMu、BlueStacks*) 或已 Root 手机的当前游戏会话。
  * 🎫 **Token / 链接登录：** 智能解析 ChillyRoom 会话 Token（有效期长达30天），支持 `/?token=<Token>` 链接直达。
  * 📁 **导入存档 (JSON)：** 支持拖拽导入 `monster_girls_roster.json` 或云存档备份文件。
  * 📱 **免电脑方案 (Shizuku + Termux)：** 提供 `shizuku_sync.sh` 脚本在手机端直接读取并打开网页 *(实验性功能)*。
* **手动收藏标记：** 点击角色卡片上的星标 `⭐` 即可标记已拥有/未收集。
* **🔒 100% 隐私与离线安全：** 所有凭证、Token及收集进度仅保存在您本地浏览器的 `localStorage` 中，绝不上传任何第三方服务器。

### 3. 🚀 内置免 CORS 本地服务端
* 基于原生 Python 3 的轻量级本地服务器 (`server.py`)，无需安装庞大的外部依赖库。
* 内置游戏官方 API 反向代理，完美规避浏览器跨域限制 (CORS)。

---

## 🚀 快速开始 (Quick Start)

### 方式一：启动本地网页版图鉴
1. 双击运行 **`run_web_encyclopedia.bat`** (或在 `Web_Encyclopedia` 目录中运行 `python server.py`)。
2. 在浏览器中打开：**`http://localhost:8787`**

### 方式二：通过控制台脚本导出全角色数据
1. 双击运行 **`extract_monster_girls.bat`** (位于 `scripts` 目录)。
2. 脚本将自动从游戏云端下载最新数据并生成：
   * `monster_girls_roster.json` — 结构化数据文件。
   * `monster_girls_roster.txt` — 排版整齐的可视化文本报告。

---

## 📁 项目目录结构 (Project Structure)

```text
MonsterGirls_Account_Extractor/
├── Web_Encyclopedia/              # 网页版图鉴前端与服务
│   ├── index.html                 # 图鉴主页
│   ├── server.py                  # 本地 HTTP 服务端与 API 代理
│   ├── css/
│   │   ├── style.css              # 全局布局样式
│   │   └── components.css         # 卡片、弹窗与筛选组件样式
│   ├── js/
│   │   ├── app.js                 # 核心控制器
│   │   ├── i18n.js                # 多语言翻译 (RU / EN / CN)
│   │   ├── characters_view.js     # 角色图鉴与筛选渲染
│   │   ├── items_view.js          # 装备与羁绊渲染
│   │   └── collection_view.js     # 收藏管理与同步登录交互
│   └── data/                      # 静态数据库与图片索引
│       ├── characters_ru.json
│       ├── characters_en.json
│       ├── characters_cn.json
│       ├── items_ru.json
│       ├── items_en.json
│       ├── items_cn.json
│       └── image_mappings.json
├── scripts/                       # Python 提取与登录脚本
│   ├── extract_monster_girls.py   # 导出全部角色数据
│   ├── auto_fetch_token_from_device.py
│   ├── login_by_password.py
│   └── login_by_email.py
├── shizuku_sync.sh                # 手机端 Termux 自动同步脚本
├── config.json                    # API 与会话配置文件
├── run_web_encyclopedia.bat       # 快速启动图鉴服务批处理
└── run.bat                        # 交互式主菜单
```

---

## 📱 数据同步指南 (Sync Guide)

### 🖥️ 电脑模拟器 (雷电 / 夜神 / MuMu / BlueStacks)
1. 启动模拟器并打开《魔物娘公会》（进入主城）。
2. 在模拟器设置中确保开启了 **Root 权限** 与 **ADB 调试**。
3. 在图鉴网站的 **«⭐ 我的收藏»** 页面中点击 **«⚡ 连接并同步»**。

### 📱 手机免电脑方案 (Shizuku + Termux)
1. 在手机上通过“无线调试”配对并启动 **Shizuku**。
2. 在 **Termux** 中执行 [shizuku_sync.sh](shizuku_sync.sh)：
   ```bash
   sh shizuku_sync.sh
   ```
3. 脚本将提取本地会话并在浏览器中自动打开图鉴与已同步收藏。
*(若系统限制私有目录访问，推荐使用抓包工具获取 Token 或使用电脑模拟器)*。

---

## 🛡️ 安全与免责声明 (Security Notice)

* 本项目仅读取游戏公开的本地会话缓存 (`SdkStateCache`) 以获取临时 `Bearer` 凭证。
* 不会收集、存储或上传您的账号密码等敏感隐私。
* 所有数据交互均直接在您的客户端与凉屋游戏官方服务器之间进行。

---

## 📜 开源协议 (License)

MIT License. 本项目仅供《魔物娘公会》玩家交流与学习参考使用。游戏美术素材与版权均归 *ChillyRoom* 所有。
