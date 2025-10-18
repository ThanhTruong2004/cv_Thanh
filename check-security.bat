@echo off
REM Security Check Script - Kiểm tra trước khi commit
echo.
echo ========================================
echo   SECURITY CHECK - Pre-commit Validation
echo ========================================
echo.

REM Check if config.js exists
if exist config.js (
    echo [FOUND] config.js detected
) else (
    echo [WARNING] config.js not found! You need to create it from config.example.js
)

echo.
echo Checking Git status...
echo.

git status --short

echo.
echo ========================================
echo   CRITICAL CHECKS:
echo ========================================

REM Check if config.js is in git status
git status --short | findstr "config.js" >nul
if %errorlevel% equ 0 (
    echo [ERROR] config.js is being tracked by Git!
    echo [ACTION NEEDED] Run: git rm --cached config.js
    echo.
    pause
    exit /b 1
) else (
    echo [OK] config.js is NOT in Git tracking
)

REM Check if .gitignore exists
if exist .gitignore (
    echo [OK] .gitignore exists
) else (
    echo [ERROR] .gitignore not found!
    pause
    exit /b 1
)

REM Check if config.example.js exists
if exist config.example.js (
    echo [OK] config.example.js exists
) else (
    echo [WARNING] config.example.js not found!
)

echo.
echo ========================================
echo   READY TO COMMIT!
echo ========================================
echo.
echo Files ready to be committed:
git diff --cached --name-status
echo.
echo To commit: git commit -m "Your message"
echo To push: git push origin main
echo.
pause
