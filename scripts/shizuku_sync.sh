#!/data/data/com.termux/files/usr/bin/sh
# ==============================================================================
# Monster Girls Guild — Shizuku / Mobile Session Extractor & Web Sync
# ==============================================================================

echo "======================================================"
echo "⚡ Monster Girls Guild — Shizuku Auto-Extractor ⚡"
echo "======================================================"

PREFS_FILE="/data/data/com.chillyroom.monstergirls.gp/shared_prefs/com.chillyroom.monstergirls.gp.v2.playerprefs.xml"
RAW_XML=""

# 1. Check if rish (Shizuku) is available
if command -v rish >/dev/null 2>&1; then
    echo "[*] Trying extraction via Shizuku (rish)..."
    RAW_XML=$(rish -c "cat '$PREFS_FILE' 2>/dev/null")
fi

# 2. Check if su (Root) is available
if [ -z "$RAW_XML" ] && command -v su >/dev/null 2>&1; then
    echo "[*] Trying extraction via Root (su)..."
    RAW_XML=$(su -c "cat '$PREFS_FILE' 2>/dev/null")
fi

# 3. Direct read attempt
if [ -z "$RAW_XML" ]; then
    echo "[*] Trying direct read..."
    RAW_XML=$(cat "$PREFS_FILE" 2>/dev/null)
fi

if [ -z "$RAW_XML" ]; then
    echo "[-] Ошибка: Не удалось прочитать файлы игры."
    echo "💡 Убедитесь, что:"
    echo "   1. Запущена служба Shizuku (или есть Root)."
    echo "   2. Выданы разрешения для Termux (команда 'rish')."
    echo "   3. Игра 'Guild of Monster Girls' установлена и запущена."
    exit 1
fi

# 4. Extract token from SdkStateCache or Session.Token
TOKEN=$(echo "$RAW_XML" | grep -o 'Session\.Token&quot;:[^,}]*' | head -n 1 | sed 's/.*&quot;\([a-f0-9]\{32\}\).*/\1/')

if [ -z "$TOKEN" ]; then
    TOKEN=$(echo "$RAW_XML" | grep -o 'token&quot;:[^,}]*' | head -n 1 | sed 's/.*&quot;\([a-f0-9]\{32\}\).*/\1/')
fi

if [ -z "$TOKEN" ]; then
    TOKEN=$(echo "$RAW_XML" | grep -o '[a-f0-9]\{32\}' | head -n 1)
fi

if [ -z "$TOKEN" ] || [ ${#TOKEN} -ne 32 ]; then
    echo "[-] Токен сессии не найден в файле PlayerPrefs."
    echo "💡 Войдите в игру (в город), чтобы обновить кэш сессии."
    exit 1
fi

echo "[+] Успешно получен токен сессии:"
echo "    🔑 $TOKEN"

# 5. Copy to Android clipboard if termux-clipboard-set is available
if command -v termux-clipboard-set >/dev/null 2>&1; then
    echo "$TOKEN" | termux-clipboard-set
    echo "[+] Токен скопирован в буфер обмена!"
fi

# 6. Open Web Encyclopedia in browser with deep link
BASE_URL="http://localhost:8787"
SYNC_URL="${BASE_URL}/?token=${TOKEN}"

echo "[*] Открываю веб-энциклопедию для авто-входа..."
echo "    🌐 $SYNC_URL"

if command -v termux-open-url >/dev/null 2>&1; then
    termux-open-url "$SYNC_URL"
elif command -v am >/dev/null 2>&1; then
    am start -a android.intent.action.VIEW -d "$SYNC_URL" >/dev/null 2>&1
fi

echo "======================================================"
echo "✨ Синхронизация завершена!"
echo "======================================================"
