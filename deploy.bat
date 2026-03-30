@echo off
echo [1/3] Adding changes...
git add .
set /p commit_msg="Enter commit message: "
git commit -m "%commit_msg%"
echo [2/3] Pushing to GitHub...
:: 修改這行，明確指定推送到 main
git push origin master:main
pause