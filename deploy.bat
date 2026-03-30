@echo off
echo [1/3] Adding changes...
git add .
set /p commit_msg="Enter commit message: "
git commit -m "%commit_msg%"
echo [2/3] Pushing to GitHub...
git push
pause
