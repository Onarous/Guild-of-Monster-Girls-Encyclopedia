# 🌟 Guild of Monster Girls — Web Encyclopedia & Account Extractor Toolkit

<div align="center">

**[English](README.md)** | **[Русский](README_RU.md)** | **[简体中文](README_CN.md)**

> **Comprehensive interactive web encyclopedia, stat calculator, theorycrafting guides, and collection sync toolkit for the game *«Guild of Monster Girls»* (魔物娘公会 / Гильдия Монстро-девочек).**
> 
> *Full trilingual support: English (🇬🇧 EN), Русский (🇷🇺 RU), 简体中文 (🇨🇳 CN).*

🌐 **Live Web App (GitHub Pages):** [https://onarous.github.io/Guild-of-Monster-Girls-Encyclopedia/](https://onarous.github.io/Guild-of-Monster-Girls-Encyclopedia/)

</div>

---

## ✨ Features & Functionality

### 1. 📖 Complete Game Database (204+ Heroines & 3,353+ Items)
* **Heroines & Alter Forms:**
  * All monster girl heroines (Tiers **SS★, S★, A★, B★, C★**).
  * 60 unique Alter forms and exclusive versions with alternative elements and skill kits.
  * Accurate base stats (**HP, ATK, DEF, SPD, INT, STR, DEX**).
  * Ultimate skills, passive traits, exclusive talents (with rank badges), signature relics, and ascension materials.
* **Equipment, Artifacts & Bonds:**
  * Full equipment catalog sorted by slots (*Weapons, Armor, Helmets, Boots, Gloves, Belts, Rings, Necklaces, Badges*).
  * Categories: Relics, Runes, Set Bonds, Prefix Modifiers, Godstones, Chests, and Materials.
  * Hierarchical rarity sorting: **SS** $\rightarrow$ **S** $\rightarrow$ **A** $\rightarrow$ **B** $\rightarrow$ **C**.
* **High-Res Sprites & Icons:** Complete local sprite and portrait catalog for 100% of heroines and items.

---

### 2. 📚 Interactive Guides & Theorycrafting
* **📖 Class & Role Synergies:** In-depth breakdown of team compositions, tactical synergies, and role counters (DPS, Tank, Healer, Support).
* **🌌 Recruitment Banners & Summon Pools:**
  * **Standard Guild Summon:** Complete breakdown of the 140 permanent pool heroines.
  * **Alter Banner:** Full roster of the 60 Alter Summon Pool heroines.
* **🎁 Active Promo Codes (Gift Codes):** Live list of working gift codes with **1-click instant clipboard copy**.
* **🛡️ Elemental Wheel & Counter Matrix:** Complete Fire/Water/Wind/Earth cycle and Light/Dark affinities.

---

### 3. ⭐ Collection Manager & Account Synchronization
* **1-Click Easy Sync:**
  * ⚡ **Auto-Sync (WebADB / Device):** Instantly extract active game sessions from Android emulators (*LDPlayer, MuMu, BlueStacks, Nox*) or rooted physical devices.
  * 🎫 **Session Token Login:** Smart ChillyRoom session token parser (tokens valid up to 30 days). Direct URL auto-login via `/?token=<TOKEN>`.
  * 📁 **Save File Import (JSON):** Drag & drop your exported `monster_girls_roster.json` or cloud save JSON directly into the browser (runs 100% client-side, including on GitHub Pages).
* **Manual Tracking:** Click the `⭐ In Collection` star on any character card to toggle owned status.
* **🔒 100% Client-Side Privacy:** All credentials, tokens, and progress are stored exclusively inside your browser (`localStorage`) and never sent to any third-party servers.

---

### 4. 📱 Mobile-First Experience & Responsive UI
* **Slide-out Navigation Drawer:**
  * Clean, compact mobile header with animated hamburger toggle (**☰**).
  * Smooth side drawer menu featuring category counts, active glowing indicators, and an embedded language switcher.
* **Faceted Search & Multi-Level Filtering:**
  * Instant search by name, ID, skill description, or tag.
  * Faceted filter buttons for Rarity, Class, Element, Combat Role, Equipment Slot, and Summon Banner (*Standard, Alter, Limited Alter, Drop, Limited Rate-Up, Events*).
  * Clean, vertically aligned filter rows for optimal usability.

---

### 5. 🛠️ Developer Tooling & SSL Pinning Bypass
* **Direct ARM64 In-Memory Frida SSL Bypass:** Scripts `unity_ssl_bypass.js` and `scripts/run_frida_ssl_bypass.py` for intercepting traffic and bypassing Unity/Mono TLS certificate checks on Android without crashing delegate pointers.
* **Mobile Script `scripts/shizuku_sync.sh`:** Portable shell script for extracting sessions via Termux + Shizuku on Android without a PC.
* **Local CORS-Proxy Server (`server.py`):** Lightweight, zero-dependency Python 3 server for local hosting and seamless ChillyRoom API proxying.

---

## 🚀 Quick Start

### Method 1. Run the Web Encyclopedia Locally
1. Run **`run_web_encyclopedia.bat`** (or execute `python server.py` inside the `Web_Encyclopedia` folder).
2. Open your browser at: **`http://localhost:8787`**

### Method 2. Export Your Account Roster via Python
1. Run **`run.bat`** in the root folder or **`extract_monster_girls.bat`** in the `scripts` folder.
2. The script downloads your latest cloud save and generates:
   * `monster_girls_roster.json` — Structured character roster data.
   * `monster_girls_roster.txt` — Formatted character and stats summary.

---

## 📁 Project Structure

```text
MonsterGirls_Account_Extractor/
├── Web_Encyclopedia/              # Web Application
│   ├── index.html                 # Main entry page
│   ├── server.py                  # Local HTTP server & API Proxy
│   ├── css/
│   │   ├── style.css              # Design tokens, mobile drawer & layout
│   │   └── components.css         # UI cards, modals, tabs, and filters
│   ├── js/
│   │   ├── app.js                 # Core application controller
│   │   ├── i18n.js                # Trilingual translations (RU / EN / CN)
│   │   ├── characters_view.js     # Character gallery & detail modals
│   │   ├── items_view.js          # Equipment, relic & bond renderer
│   │   ├── guides_view.js         # Theorycrafting, banners, promo codes
│   │   └── collection_view.js     # Collection manager & auth UI
│   ├── data/                      # Static JSON databases
│   │   ├── characters_ru.json
│   │   ├── characters_en.json
│   │   ├── characters_cn.json
│   │   ├── items_ru.json
│   │   ├── items_en.json
│   │   ├── items_cn.json
│   │   └── image_mappings.json
│   └── assets/img/                # Character & item sprites
├── scripts/                       # Python scripts & extraction tools
│   ├── extract_monster_girls.py   # Full account roster extractor
│   ├── auto_fetch_token_from_device.py
│   ├── login_by_password.py
│   ├── login_by_email.py
│   ├── run_frida_ssl_bypass.py    # Frida SSL Pinning Bypass launcher
│   └── shizuku_sync.sh            # Mobile script for Termux + Shizuku
├── unity_ssl_bypass.js            # Frida script with direct ARM64 memory patching
├── config.json                    # API & session configuration
├── run_web_encyclopedia.bat       # Web launcher batch script
└── run.bat                        # Interactive CLI launcher
```

---

## 📱 Collection Sync Guide

### 🖥️ PC Emulators (LDPlayer / BlueStacks / MuMu / Nox)
1. Start your emulator and open *Guild of Monster Girls* (enter the main town).
2. Ensure **Root permissions** and **ADB debugging** are enabled in emulator settings.
3. On the web app, navigate to **«⭐ My Collection»** and click **«⚡ Connect & Sync»**.

### 📱 Android Phones without PC (Shizuku + Termux)
1. Start the **Shizuku** service on your device via *Wireless Debugging*.
2. Open **Termux** and run:
   ```bash
   sh scripts/shizuku_sync.sh
   ```
3. The script extracts your active token and launches your mobile browser with your collection synced.

---

## 🛡️ Security & Disclaimer

* ⚠️ **Unofficial Fan Project.** This website and database are created by the player community and are not affiliated with, endorsed, or sponsored by *ChillyRoom* (original developers of *Guild of Monster Girls*). All game assets, characters, and trademarks belong to their respective owners.
* This project only inspects local public session cache (`SdkStateCache`) to acquire a temporary `Bearer` auth token.
* Account passwords and sensitive credentials are never stored or uploaded anywhere.

---

## 📜 License

MIT License. Developed for the player community.
