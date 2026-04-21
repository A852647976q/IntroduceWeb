@echo off
:: 設定編碼為 UTF-8，避免中文 commit 訊息亂碼
chcp 65001 >nul

echo =======================================
echo 🚀 開始執行一鍵部署 GitHub 
echo =======================================

:: 1. 強制切換到批次檔所在的正確資料夾
cd /d "%~dp0"

:: 2. 檢查有沒有檔案變更 (如果沒有變更就跳過 commit)
git status --porcelain | findstr /R "." >nul
if errorlevel 1 (
    echo ⚠️ 偵測到沒有任何檔案變更，將進行「強制同步」推送...
    :: 如果沒有改檔案但你想強迫觸發 GitHub Actions，可以使用 allow-empty
    git commit --allow-empty -m "Trigger deployment: %date% %time%"
) else (
    echo 📦 偵測到變更，正在打包檔案...
    git add -A
    git status
    git commit -m "Auto Deploy: %date% %time%"
)

:: 3. 推送到 GitHub
echo 📤 正在推送到 GitHub...
git push origin main

echo =======================================
echo ✅ 部署指令已發送！
echo 🌐 請等待 GitHub Actions (約30秒) 後重新整理網頁。
echo =======================================
pause