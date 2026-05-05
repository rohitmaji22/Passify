<div align="center">

<br/>

<pre>
██████╗  █████╗ ███████╗███████╗██╗███████╗██╗   ██╗
██╔══██╗██╔══██╗██╔════╝██╔════╝██║██╔════╝╚██╗ ██╔╝
██████╔╝███████║███████╗███████╗██║█████╗   ╚████╔╝
██╔═══╝ ██╔══██║╚════██║╚════██║██║██╔══╝    ╚██╔╝
██║     ██║  ██║███████║███████║██║██║        ██║
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝        ╚═╝
</pre>

### 🔐 Passify — Password Strength Checker

**A sleek, privacy-first password strength checker with a dynamic space UI**

<br/>

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Site-00c8ff?style=for-the-badge)](https://rohitmaji22.github.io/Passify/)
[![License](https://img.shields.io/badge/License-MIT-5de8a0?style=for-the-badge)]
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-EF9F27?style=for-the-badge)
![Made With JS](https://img.shields.io/badge/Made%20With-JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

<br/>

</div>

---

## 🌌 Overview

**Passify** is a lightweight, fully client-side password strength analyzer that provides:

* Real-time feedback ⚡
* Entropy-based strength calculation 🧠
* Crack-time estimation ⏱️
* A visually engaging **space-themed UI** 🌠

> 🔒 **No data is ever stored or transmitted. Everything runs locally in your browser.**

---

## ✨ Features

* 🔐 Real-time password strength analysis
* 📊 Entropy calculation (bits-based security)
* ⏱️ Crack time estimation (GPU attack model)
* ✅ 6 advanced validation checks
* 👁️ Show / hide password toggle
* 🌌 Interactive starfield background (parallax effect)
* ☄️ Shooting star animations
* 🔒 100% client-side (zero backend)

---

## 📸 Preview

<p align="center">
  <img src="image.png" width="300"/>
  <img src="image2.png" width="300"/>
  <img src="image3.png" width="300"/>
</p>

---

## 🚀 Live Demo

👉 **Try it here:**
https://rohitmaji22.github.io/Passify/

---

## 🗂️ Project Structure

```
passify/
├── index.html       # UI structure
├── style.css        # Styling & animations
├── background.js    # Starfield & parallax logic
└── checker.js       # Password strength logic
```

---

## ⚙️ Getting Started

### Option 1 — Run directly

```bash
git clone https://github.com/rohitmaji22/Passify.git
cd Passify
open index.html
```

### Option 2 — Local server

```bash
python -m http.server 3000
# or
npx serve .
```

Open → http://localhost:3000

---

## 🧠 Core Logic

### 🔢 Strength Score

* Based on 6 conditions (length, case, digits, symbols, etc.)
* Score range: **0 → 6**

### 📊 Entropy Formula

```
entropy = length × log₂(character_pool)
```

### ⏱️ Crack Time

```
time = 2^entropy / 10^10 guesses/sec
```

---

## 🎨 Tech Stack

| Tech       | Purpose              |
| ---------- | -------------------- |
| HTML5      | Structure            |
| CSS3       | Styling & UI         |
| JavaScript | Logic                |
| Canvas API | Background animation |

> ⚡ No frameworks. No libraries. Pure performance.

---

## 🔐 Security Note

This tool is designed for **educational and awareness purposes only**.

* Does NOT store passwords
* Does NOT send data anywhere
* Safe for offline usage

---

## 📄 License

MIT License — free to use and modify.

---

## 👨‍💻 Author

**Rohit Maji**
🌐 https://rohitmaji.dev

---

<div align="center">

⭐ If you like this project, consider giving it a star!

</div>
