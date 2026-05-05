<div align="center">

<br/>


                                                    ██████╗  █████╗ ███████╗███████╗██╗███████╗██╗   ██╗
                                                    ██╔══██╗██╔══██╗██╔════╝██╔════╝██║██╔════╝╚██╗ ██╔╝
                                                   ██████╔╝███████║███████╗███████╗██║█████╗   ╚████╔╝
                                                    ██╔═══╝ ██╔══██║╚════██║╚════██║██║██╔══╝    ╚██╔╝  
                                                    ██║     ██║  ██║███████║███████║██║██║        ██║   
                                                    ╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝        ╚═╝  


**A sleek, client-side password strength checker with a live space background.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-00c8ff?style=for-the-badge&logo=vercel&logoColor=white)](https://rohitmaji22.github.io/Passify/)
[![Made by Rohit](https://img.shields.io/badge/Made%20by-Rohit%20Maji-ffffff?style=for-the-badge)](https://rohitmaji.dev)
[![License](https://img.shields.io/badge/License-MIT-5de8a0?style=for-the-badge)](LICENSE)
![No Dependencies](https://img.shields.io/badge/Dependencies-Zero-EF9F27?style=for-the-badge)

<br/>

</div>

---

## ✨ Features

- 🔐 **Real-time strength analysis** — instant feedback as you type
- 📊 **Entropy calculation** — measures true password randomness in bits
- ⏱️ **Crack time estimate** — based on 10 billion guesses/second (GPU attack)
- ✅ **6 requirement checks** — length, uppercase, lowercase, numbers, symbols, 16+ chars
- 🌌 **Interactive space background** — multi-layer star parallax that follows your mouse
- ☄️ **Shooting stars** — occasional comets streak across the background
- 👁️ **Show/hide toggle** — reveal your password while typing
- 🔒 **100% private** — nothing is ever sent to a server or stored anywhere

---

## 🗂️ Project Structure

```
passify/
├── index.html       # Main HTML — markup & structure
├── style.css        # All styling, dark space theme, responsive layout
├── background.js    # Animated starfield with mouse-parallax & shooting stars
└── checker.js       # Password analysis logic — entropy, scoring, crack time
```

> Each file is fully self-contained with its own responsibility. No build tools, no bundlers, no frameworks.

---

## 🚀 Getting Started

**Option 1 — Just open it:**
```bash
git clone https://github.com/rohitmaji/passify.git
cd passify
open index.html   # macOS
# or double-click index.html on Windows/Linux
```

**Option 2 — Serve locally:**
```bash
# Python
python -m http.server 3000

# Node
npx serve .
```

Then visit `http://localhost:3000`

---

## 🧠 How It Works

### Strength Scoring
Each password is evaluated against 6 criteria — each worth 1 point:

| Criteria | Points |
|---|---|
| 8 or more characters | +1 |
| Contains uppercase letter | +1 |
| Contains lowercase letter | +1 |
| Contains a number | +1 |
| Contains a special character | +1 |
| 16 or more characters | +1 |

| Score | Rating |
|---|---|
| 0–2 | 🔴 Weak |
| 3 | 🟠 Fair |
| 4 | 🟢 Good |
| 5–6 | 🔵 Strong |

### Entropy Formula
```
entropy (bits) = length × log₂(pool_size)
```
Where `pool_size` is the number of unique characters available (26 lowercase + 26 uppercase + 10 digits + 32 symbols).

### Crack Time Estimate
```
seconds_to_crack = 2^entropy_bits / 10,000,000,000
```
Assumes a high-end GPU brute-force attack at 10 billion guesses per second.

---

---

## 🎨 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure & semantics |
| CSS3 | Styling, transitions, grid layout |
| Vanilla JS | All logic, canvas animation |
| Canvas API | Starfield & parallax background |
| Google Fonts | Syne (display) + Space Mono (code) |

**Zero npm. Zero frameworks. Zero build steps.**

---

## 📸 Preview

> Dark space theme with multi-layer star parallax, cyan accents, and real-time password analysis.

---

## 📄 License

MIT License — free to use, modify, and distribute.  
Built with 💙 by **[Rohit Maji](https://rohitmaji.dev)** · Aspiring Cybersecurity Professional

---

<div align="center">

⭐ **Star this repo if you found it useful!**

</div>
