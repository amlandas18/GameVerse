# GAMEVERSE — Gaming Community Hub & Showcase

> **ENTER THE GAME. OWN THE MOMENT.**

An ultra-premium, cinematic gaming web portal engineered using pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (no external CSS frameworks like Tailwind or Bootstrap).

---

## 🎮 Interconnected Multi-Page Architecture

All pages share a consistent navbar, ambient particle constellation canvas, glassmorphic styling, and active state indicators:

| Page | File | Description |
| :--- | :--- | :--- |
| **Home** | [`index.html`](index.html) | Full-screen hero with 5-game cinematic slider, Featured Worlds 3D showcase, What's Hot editorial picks, and live statistics. |
| **Games** | [`games.html`](games.html) | Standalone catalog discovery grid featuring all 15 blockbuster titles, instant search, and genre filters. |
| **Community** | [`community.html`](community.html) | Gamer social hub with interactive post creator, discussion feed, live like counters, and thread comments. |
| **Events** | [`events.html`](events.html) | Upcoming tournaments & cups, live countdown timer for Valorant Championship with 10s demo button, prize pool cards, and registration modal. |
| **Leaderboard** | [`leaderboard.html`](leaderboard.html) | Global competitive rankings with top-3 podium (Gold/Silver/Bronze) and interactive sorting by XP, Wins, and Level. |
| **Join Community** | [`join.html`](join.html) | Citizen registration form with live password strength analysis, platform/game selection, and virtual Gamer ID Pass generation. |

---

## 🕹️ 15 Showcased Games (Local Artwork)

All game images are stored locally under `assets/images/`:

1. **Battlegrounds Mobile India (BGMI)** — `assets/images/bgmi.jpg`
2. **Minecraft Legends** — `assets/images/minecraft-legends.jpg`
3. **Elden Ring Nightreign** — `assets/images/elden-ring.jpg`
4. **Counter-Strike 2** — `assets/images/cs2.jpg`
5. **Age of Empires IV** — `assets/images/aoe4.jpg`
6. **Red Dead Redemption 2** — `assets/images/rdr2.jpg`
7. **EA Sports FC 26** — `assets/images/fc26.jpg`
8. **Fortnite** — `assets/images/fortnite.jpg`
9. **Forza Horizon 6** — `assets/images/forza6.jpg`
10. **Valorant** — `assets/images/valorant.jpg`
11. **PlayerUnknown's Battlegrounds (PUBG)** — `assets/images/pubg.jpg`
12. **Call of Duty: Black Ops** — `assets/images/cod-blackops.jpg`
13. **The Witcher 3: Wild Hunt** — `assets/images/witcher3.jpg`
14. **Civilization VI** — `assets/images/civ6.jpg`
15. **Grand Theft Auto V** — `assets/images/gta5.jpg`

---

## 🌐 Official Social Links

- **Discord**: [https://discord.gg/BYzC9RX4d](https://discord.gg/BYzC9RX4d)
- **Instagram**: [https://www.instagram.com/diaz_gaming1?stkn=MXhpODR0ZnYwbGo1Yg==](https://www.instagram.com/diaz_gaming1?stkn=MXhpODR0ZnYwbGo1Yg==)
- **X (Twitter)**: [https://x.com/RENews_X?s=20](https://x.com/RENews_X?s=20)
- **YouTube**: [https://youtube.com/@game_value?si=tZ27C8xFjK05Tmzm](https://youtube.com/@game_value?si=tZ27C8xFjK05Tmzm)

---

## ☁️ Deploying on Render (Step-by-Step)

This repository includes all required deployment files:
- `render.yaml` (Render Blueprint specification)
- `package.json` (Node.js engine & script runner)
- `server.js` (Zero-dependency production HTTP static file server)
- `.gitignore` (Prevents junk files from being committed)

### Method 1: Deploy as a Static Site (Recommended — 100% Free & Fast)

1. Push your project code to **GitHub** or **GitLab**.
2. Go to the [Render Dashboard](https://dashboard.render.com/).
3. Click **"New +"** $\rightarrow$ **"Static Site"**.
4. Connect your GitHub repository.
5. Configure the settings:
   - **Name**: `gameverse` (or your preferred name)
   - **Branch**: `main` (or `master`)
   - **Build Command**: *(leave empty)*
   - **Publish Directory**: `.` *(a single dot representing the root folder)*
6. Click **"Create Static Site"**.
7. Render will build and deploy your site in seconds and provide an active `https://gameverse-xxxx.onrender.com` URL!

---

### Method 2: Deploy as a Web Service (Node.js)

1. Push your project code to **GitHub** or **GitLab**.
2. In the Render Dashboard, click **"New +"** $\rightarrow$ **"Web Service"**.
3. Connect your repository.
4. Render will auto-detect Node.js from `package.json`:
   - **Runtime**: `Node`
   - **Build Command**: `npm install` (or leave empty)
   - **Start Command**: `node server.js`
   - **Instance Type**: `Free`
5. Click **"Create Web Service"**.
6. Render will automatically assign a `PORT`, launch `server.js`, and provide your live URL.

---

### Method 3: 1-Click Blueprint Deploy

Because this repository contains [`render.yaml`](render.yaml):
1. In the Render Dashboard, click **"New +"** $\rightarrow$ **"Blueprint"**.
2. Select your repository.
3. Render will parse `render.yaml` and configure the service automatically!

---

## 💻 Running Locally

### Option 1: Node.js (Production Server)
```bash
# Start server
npm start

# Or directly with Node
node server.js
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

### Option 2: Python
```bash
python -m http.server 8080
```
Open [http://localhost:8080/index.html](http://localhost:8080/index.html) in your browser.
