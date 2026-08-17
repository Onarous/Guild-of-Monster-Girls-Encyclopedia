# 🌟 Guild of Monster Girls — Web Encyclopedia & Account Extractor Toolkit

<div align="center">

**[English](README.md)** | **[Русский](README_RU.md)** | **[简体中文](README_CN.md)**

> **Comprehensive interactive web encyclopedia and collection sync toolkit for the game *«Guild of Monster Girls»* (魔物娘公会 / Гильдия Монстро-девочек).**
> 
> *Full trilingual support: English (🇬🇧 EN), Русский (🇷🇺 RU), 中文 (🇨🇳 CN).*

🌐 **Live Web App (GitHub Pages):** [https://onarous.github.io/Guild-of-Monster-Girls-Encyclopedia/](https://onarous.github.io/Guild-of-Monster-Girls-Encyclopedia/)

</div>

---

## ✨ Features

### 1. 📖 Complete Game Database (204+ Heroines & 3,353+ Items)
* **Characters:** All monster girl heroines (Tiers S, A, B, C) with detailed base stats (HP, ATK, DEF, SPD, INT, STR, DEX), stat growth priorities, ultimate skills, passive traits, exclusive talents, signature relics, ascension materials, and team synergy recommendations.
* **Equipment & Artifacts:** Main hand weapons, body armors, helmets, boots, gloves, belts, rings, necklaces, badges, runes, set bonuses (Bonds), prefix modifiers, godstones, chests, and materials.
* **High-Res Sprites & Icons:** Complete local sprite and portrait catalog for heroines and items.

### 2. ⭐ Interactive Collection Manager & Synchronization
* **1-Click Easy Sync:**
  * ⚡ **Auto-Sync (WebADB / Device):** Instantly extract your active game session from Android emulators (*LDPlayer, BlueStacks, Nox, MuMu*) or rooted physical devices.
  * 🎫 **Auth Token / Link Login:** Smart session token parser (tokens remain valid for up to 30 days). Direct URL auto-login via `/?token=<TOKEN>`.
  * 📁 **Save File Import (JSON):** Drag & drop your exported `monster_girls_roster.json` or raw cloud save JSON directly into the browser.
  * 📱 **Mobile Android Sync (Shizuku + Termux):** Portable shell script [shizuku_sync.sh](shizuku_sync.sh) to extract your session and open the web app on your phone *(experimental)*.
* **Manual Tracking:** Click the `⭐` icon on any character card to toggle your owned collection status.
* **🔒 100% Client-Side Privacy:** All credentials, tokens, and progress are stored exclusively inside your browser (`localStorage`) and never sent to any third-party servers.

### 3. 🚀 Built-in CORS Proxy Local Server
* Zero-dependency local web server written in pure Python 3 (`server.py`).
* Seamlessly proxies official ChillyRoom API endpoints to bypass browser Cross-Origin (CORS) restrictions.

---

## 🚀 Quick Start

### Method 1. Run the Web Encyclopedia Locally
1. Run **`run_web_encyclopedia.bat`** (or execute `python server.py` in the `Web_Encyclopedia` folder).
2. Open your browser at: **`http://localhost:8787`**

### Method 2. Export Your Roster via Python Script
1. Run **`extract_monster_girls.bat`** (in the `scripts` folder).
2. The script downloads your latest cloud save and produces:
   * `monster_girls_roster.json` — Structured roster data.
   * `monster_girls_roster.txt` — Formatted character and stats summary.

---

## 📁 Project Structure

```text
MonsterGirls_Account_Extractor/
├── Web_Encyclopedia/              # Web Application
│   ├── index.html                 # Main web page
│   ├── server.py                  # Local HTTP server & API Proxy
│   ├── css/
│   │   ├── style.css              # Main design tokens and responsive layout
│   │   └── components.css         # UI cards, modals, tabs, and filters
│   ├── js/
│   │   ├── app.js                 # Core application controller
│   │   ├── i18n.js                # Trilingual translations (RU / EN / CN)
│   │   ├── characters_view.js     # Character gallery & filter renderer
│   │   ├── items_view.js          # Equipment, relic & bond renderer
│   │   └── collection_view.js     # Collection manager & auth UI
│   └── data/                      # Static JSON databases & sprite mapping
│       ├── characters_ru.json
│       ├── characters_en.json
│       ├── characters_cn.json
│       ├── items_ru.json
│       ├── items_en.json
│       ├── items_cn.json
│       └── image_mappings.json
├── scripts/                       # Python account extraction scripts
│   ├── extract_monster_girls.py   # Full account roster extractor
│   ├── auto_fetch_token_from_device.py
│   ├── login_by_password.py
│   └── login_by_email.py
├── shizuku_sync.sh                # Mobile Android helper (Shizuku + Termux)
├── config.json                    # API & session configuration
├── run_web_encyclopedia.bat       # Web launcher batch script
└── run.bat                        # Interactive CLI launcher
```

---

## 📱 Synchronization Guide

### 🖥️ PC Emulators (LDPlayer / BlueStacks / Nox / MuMu)
1. Start your emulator and open *Guild of Monster Girls* (enter the game town).
2. Ensure **Root permissions** and **ADB debugging** are enabled in emulator settings.
3. On the website, navigate to **«⭐ My Collection»** and click **«⚡ Connect & Sync»**.

### 📱 Android Phones without PC (Shizuku + Termux)
1. Start the **Shizuku** service on your device via *Wireless Debugging*.
2. Open **Termux** and run [shizuku_sync.sh](shizuku_sync.sh):
   ```bash
   sh shizuku_sync.sh
   ```
3. The script extracts your active token and launches your mobile browser with your collection synced.
*(Note: If Android blocks private app data without root, please use the Token Tab via network sniffer or PC emulator).*

---

## 🛡️ Security & Privacy Notice

* This project only inspects local public session cache (`SdkStateCache`) to acquire a temporary `Bearer` auth token.
* Account passwords and sensitive credentials are never stored or uploaded anywhere.
* All data requests occur directly between your client and ChillyRoom servers.

---

## 📜 License

MIT License. Developed for educational and fan reference purposes. All game assets, characters, and trademarks belong to *ChillyRoom*.
