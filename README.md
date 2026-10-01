# Music Z 🎵 — Apple Music Web Experience

An Apple Music web experience designed from the ground up for **iPhone (Safari & PWA)** and modern web browsers.

🌐 **Live Website:** [https://adityakasara.github.io/Music_Z/](https://adityakasara.github.io/Music_Z/)

---

## ✨ Signature Features

- **📱 Native iPhone / iOS Interface:**
  - Dynamic Island & notch safe area insets (`viewport-fit=cover`).
  - Native iOS bottom tab navigation bar (*Listen Now*, *Browse*, *Radio*, *Library*, *Search*).
  - Floating Mini Player docked right above the bottom tab bar.
  - Pull-up / swipe-down expanded **Now Playing sheet** with authentic iOS spring physics.
- **🌊 Dynamic Liquid "Cover Bleed" Mesh Background:**
  - Ambient procedural canvas animated behind the screen that adapts in real time to the dominant colors of the currently playing track.
- **🎤 Kinetic Time-Synced Karaoke Lyrics:**
  - Apple Music Sing / karaoke view with auto-scrolling, bold glowing active lines, and tap-to-seek functionality.
- **🔊 Web Audio API Equalizer & Spatial Audio:**
  - Built-in studio EQ presets (Bass Boost, Vocal Booster, Electronic, Acoustic, Late Night).
  - Apple Spatial Audio simulator widening soundstage using binaural processing.
  - Live audio frequency spectrum visualizer canvas.
- **📂 iPhone Music Importer:**
  - Tap **"Add File"** or the upload icon to load any `.mp3`, `.wav`, `.m4a`, or `.flac` track directly from your iPhone Files or Mac into your library!
- **⚡ Zero Build Dependencies:**
  - Built with pure modern HTML5, Vanilla CSS, and JavaScript. Lightning-fast load times.

---

## 📲 How to Test on iPhone (PWA Standalone Mode)

1. Open **[https://adityakasara.github.io/Music_Z/](https://adityakasara.github.io/Music_Z/)** in **Safari on your iPhone**.
2. Tap the **Share** button (box with upward arrow) at the bottom of Safari.
3. Scroll down and tap **"Add to Home Screen"** (`+`).
4. Tap **"Add"**.
5. Launch **Music Z** from your Home Screen to experience the full-screen native app feel without Safari browser bars!

---

## 🛠️ Local Development

To run locally:

```bash
# Start a simple HTTP server
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000`.
