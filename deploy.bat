@echo off
echo [1/3] Adding changes...
git add .
set /p commit_msg="Enter commit message: "
git commit -m "%commit_msg%"

echo [2/3] Pushing to GitHub (master to main)...
:: 指定將本地 master 推送到遠端 origin 的 main 分支
git push origin master:main

echo [3/3] Done!
pause