# 🖼️ Interactive Image Slider

A responsive, lightweight image slider built using **HTML5**, **CSS3**, and **Vanilla JavaScript**. Features smooth transitions, interactive navigation arrows, auto-playing slides, and dynamic pagination indicator dots.

![Project Preview](https://img.shields.io/badge/status-active-success.svg) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## ✨ Features

* **Auto-Play Functionality:** Automatically cycles through images at a smooth 3.5-second interval.
* **Manual Navigation:** Next and Previous arrow buttons with hover and click animations for seamless user control.
* **Dynamic Pagination Dots:** Automatically generates indicator dots matching the image count, highlighting the active slide and allowing direct clicking to jump between slides.
* **Smooth Transitions:** Powered by CSS `transform: translateX` and custom cubic-bezier easing for fluid slide movement[cite: 2, 3].
* **Modern UI Design:** Styled with a clean, dark-themed presentation, rounded container edges, and soft drop shadows.

---

## 📂 Project Structure

```text
├── index.html      # Main markup structure, image elements, and controls
├── slider.css      # Styling, layout container, button effects, and dot indicators
└── slider.js       # Core logic for auto-play, translation math, and event listeners
