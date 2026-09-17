# Sri Maha Mariamman & Sri Perumal Temple Website

This is a React + TypeScript + Vite project. **Do not use VS Code Live Server for `index.html`**, because Live Server does not compile the `.tsx` React application.

## Start the website

### Option 1 — easiest on Windows
Double-click:

`START WEBSITE.bat`

The first run installs the required npm packages. Then Vite starts the development server.

### Option 2 — VS Code terminal
Open this folder in VS Code and run:

```bash
npm install
npm run dev
```

Then open the URL printed by Vite, normally:

`http://localhost:3000/`

## Important

Do NOT right-click `index.html` and choose **Open with Live Server**. The project entry point is `src/main.tsx`, which Vite compiles and serves.
