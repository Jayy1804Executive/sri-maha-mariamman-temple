@echo off
cd /d "%~dp0"
echo ==============================================
echo Sri Maha Mariamman Temple Website
 echo ==============================================
where npm >nul 2>nul
if errorlevel 1 (
  echo.
  echo ERROR: Node.js/npm is not installed.
  echo Install Node.js from https://nodejs.org/ and run this file again.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing project dependencies. This may take a few minutes...
  call npm install
  if errorlevel 1 (
    echo.
    echo npm install failed. Please check your internet connection.
    pause
    exit /b 1
  )
)
echo.
echo Starting the website with Vite...
echo Open the URL shown below, usually http://localhost:3000/
echo Press Ctrl+C in this window to stop the server.
call npm run dev
pause
