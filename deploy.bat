@echo off
REM Quick Deploy Script
echo.
echo ========================================
echo   QUICK DEPLOY TO GITHUB
echo ========================================
echo.

REM Step 1: Security Check
echo [1/4] Running security check...
call check-security.bat
if %errorlevel% neq 0 (
    echo [ERROR] Security check failed!
    pause
    exit /b 1
)

echo.
echo [2/4] Adding files to Git...
git add .

echo.
echo [3/4] Creating commit...
set /p commit_msg="Enter commit message: "
git commit -m "%commit_msg%"

echo.
echo [4/4] Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo   DEPLOY COMPLETE!
echo ========================================
echo.
echo Your website will be live at:
echo https://thanhtruong2004.github.io/cv_Thanh/
echo.
echo Don't forget to enable GitHub Pages in repository settings!
echo.
pause
