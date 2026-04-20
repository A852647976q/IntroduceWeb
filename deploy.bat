@echo off
echo 開始執行自動化部署推送...

:: 1. 進入正確的資料夾 (預防路徑跑掉)
cd /d %~dp0

:: 2. 強制把所有變更加入 (包含新檔案)
git add -A

:: 3. 提交變更 (加上時間戳記，避免訊息重複)
set msg="Auto deploy: %date% %time%"
git commit -m %msg%

:: 4. 推送到 GitHub
git push origin main

echo.
echo ---------------------------------------
echo 任務完成！請去 GitHub Actions 看看有沒有綠勾勾。
pause