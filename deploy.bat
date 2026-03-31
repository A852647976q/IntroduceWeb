@echo off
echo [1/3] Adding changes...
git add .
set /p commit_msg="Enter commit message: "
git commit -m "%commit_msg%"

echo [2/3] Pushing to GitHub...
:: 指定推送到 origin 的 main 分支
git push origin main

echo [3/3] Done! Remember to run ./update.sh on GCP.
pause