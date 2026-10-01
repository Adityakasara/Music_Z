/**
 * Music Z — Apple Music Web Experience (iOS & Safari Optimized)
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Track Catalog & State ---
  const TRACKS = [
    {
      id: 0,
      title: "Neon Horizon",
      artist: "Synthwave Dreams",
      album: "Neon Horizon",
      cover: "assets/covers/neon_horizon.jpg",
      audioUrl: "assets/audio/neon_horizon.wav",
      category: "synthwave",
      duration: 35,
      colors: ["#fa243c", "#7928ca", "#0070f3"],
      isSpatial: true,
      lyrics: [
        { time: 0.0, text: "Neon lights reflecting on the boulevard" },
        { time: 4.2, text: "Midnight city cruising under shooting stars" },
        { time: 8.5, text: "Bassline pulsing deep inside the night" },
        { time: 13.0, text: "Synthesizers taking flight" },
        { time: 17.2, text: "Every shadow turns to electric glow" },
        { time: 21.5, text: "Nowhere to hide in the retro flow" },
        { time: 26.0, text: "Lost in the horizon of neon dreams" },
        { time: 30.5, text: "Nothing is ever quite as it seems..." }
      ]
    },
    {
      id: 1,
      title: "Midnight Session",
      artist: "Tokyo Rain",
      album: "Midnight Session",
      cover: "assets/covers/midnight_chill.jpg",
      audioUrl: "assets/audio/midnight_session.wav",
      category: "lofi",
      duration: 35,
      colors: ["#ff9500", "#ff2d55", "#5c2483"],
      isSpatial: true,
      lyrics: [
        { time: 0.0, text: "Rain falling softly against the glass" },
        { time: 4.5, text: "A warm cup of coffee as minutes pass" },
        { time: 9.0, text: "Vinyl spinning on a dusty needle" },
        { time: 14.2, text: "Tokyo streets quiet and peaceful" },
        { time: 19.0, text: "Lo-fi chords floating through the air" },
        { time: 24.0, text: "Forget the noise, leave all the care" },
        { time: 29.0, text: "Midnight whispers in golden light..." }
      ]
    },
    {
      id: 2,
      title: "Celestial Mirage",
      artist: "Cosmic Drift",
      album: "Celestial Mirage",
      cover: "assets/covers/celestial_mirage.jpg",
      audioUrl: "assets/audio/celestial_mirage.wav",
      category: "ambient",
      duration: 35,
      colors: ["#00f5d4", "#7b2cbf", "#f72585"],
      isSpatial: true,
      lyrics: [
        { time: 0.0, text: "Floating into the iridescent deep" },
        { time: 5.0, text: "Liquid spheres where memories sleep" },
        { time: 10.5, text: "Starlight bending across the sphere" },
        { time: 16.0, text: "Echoes of eternity drawing near" },
        { time: 22.0, text: "Weightless drift through indigo skies" },
        { time: 27.5, text: "Beyond the threshold where silence lies" }
      ]
    }
  ];

  // App State
  let playlist = [...TRACKS];
  let currentTrackIndex = 0;
  let isPlaying = false;
  let isShuffle = false;
  let isRepeat = false;
  let favorites = new Set(JSON.parse(localStorage.getItem('music_z_favs') || '[]'));
  let isLyricsMode = false;
  let airplayDevices = ["iPhone Speaker", "AirPods Pro (2nd Gen)", "Living Room HomePod", "AirPods Max"];
  let airplayIndex = 0;

  // DOM Elements
  const audio = document.getElementById('native-audio');
  
  // Viewport & Tabs
  const tabButtons = document.querySelectorAll('.tab-item');
  const tabPages = document.querySelectorAll('.tab-page');
  
  // Mini Player
  const miniPlayer = document.getElementById('mini-player');
  const miniProgressFill = document.getElementById('mini-progress-fill');
  const miniArt = document.getElementById('mini-art');
  const miniTitle = document.getElementById('mini-title');
  const miniArtist = document.getElementById('mini-artist');
  const miniPlayPauseBtn = document.getElementById('mini-play-pause-btn');
  const miniPlayIcon = document.getElementById('mini-play-icon');
  const miniPauseIcon = document.getElementById('mini-pause-icon');
  const miniNextBtn = document.getElementById('mini-next-btn');
  const miniExpandTrigger = document.getElementById('mini-player-expand-trigger');

  // Expanded Now Playing Sheet
  const sheet = document.getElementById('now-playing-sheet');
  const sheetDismissBtn = document.getElementById('btn-sheet-dismiss');
  const sheetGrabberZone = document.getElementById('sheet-grabber-zone');
  const sheetArtBox = document.getElementById('sheet-art-box');
  const sheetArtImg = document.getElementById('sheet-art-img');
  const sheetTitle = document.getElementById('sheet-title');
  const sheetArtist = document.getElementById('sheet-artist');
  const sheetFavBtn = document.getElementById('sheet-fav-btn');
  const heartOutline = sheetFavBtn.querySelector('.heart-outline');
  const heartSolid = sheetFavBtn.querySelector('.heart-solid');
  
  // Seek Scrubber & Time
  const seekSlider = document.getElementById('sheet-seek-slider');
  const seekFill = document.getElementById('sheet-seek-fill');
  const currentTimeLabel = document.getElementById('current-time-label');
  const totalTimeLabel = document.getElementById('total-time-label');

  // Sheet Controls
  const mainPlayPauseBtn = document.getElementById('btn-main-play-pause');
  const sheetPlayIcon = document.getElementById('sheet-play-icon');
  const sheetPauseIcon = document.getElementById('sheet-pause-icon');
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  const shuffleBtn = document.getElementById('btn-shuffle');
  const repeatBtn = document.getElementById('btn-repeat');

  // Volume
  const volumeSlider = document.getElementById('sheet-volume-slider');
  const volumeFill = document.getElementById('sheet-volume-fill');

  // Lyrics & AirPlay & Queue
  const btnToggleLyrics = document.getElementById('btn-toggle-lyrics');
  const sheetArtworkView = document.getElementById('sheet-artwork-view');
  const sheetLyricsView = document.getElementById('sheet-lyrics-view');
  const lyricsScrollWrapper = document.getElementById('lyrics-scroll-wrapper');
  const btnAirplay = document.getElementById('btn-airplay');
  const airplayLabel = document.getElementById('airplay-label');
  const btnToggleQueue = document.getElementById('btn-toggle-queue');
  const queueSubmodal = document.getElementById('queue-submodal');
  const btnCloseQueue = document.getElementById('btn-close-queue');
  const queueListContainer = document.getElementById('queue-list-container');

  // Equalizer
  const btnEqToggle = document.getElementById('btn-eq-toggle');
  const eqSubmodal = document.getElementById('eq-submodal');
  const btnCloseEq = document.getElementById('btn-close-eq');
  const spatialSwitch = document.getElementById('toggle-spatial-switch');
  const eqPresetBtns = document.querySelectorAll('.eq-preset-btn');

  // Search & Library
  const searchInput = document.getElementById('search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const searchTrackList = document.getElementById('search-track-list');
  const searchTags = document.querySelectorAll('.search-tag');
  const localMusicInput = document.getElementById('local-music-input');

  // Web Audio Context & Nodes
  let audioCtx = null;
  let sourceNode = null;
  let analyserNode = null;
  let bassFilter = null;
  let midFilter = null;
  let trebleFilter = null;
  let isWebAudioInitialized = false;

  // Visualizer Canvases
  const ambientCanvas = document.getElementById('ambient-canvas');
  const sheetAmbientCanvas = document.getElementById('sheet-ambient-canvas');
  const visualizerCanvas = document.getElementById('audio-visualizer-canvas');
  let ambientCtx = ambientCanvas.getContext('2d');
  let sheetAmbientCtx = sheetAmbientCanvas.getContext('2d');
  let visualizerCtx = visualizerCanvas.getContext('2d');

  // Dynamic Liquid Blobs Simulation
  let blobs = [
    { x: 0.3, y: 0.2, vx: 0.0012, vy: 0.0016, r: 0.45 },
    { x: 0.7, y: 0.3, vx: -0.0014, vy: 0.0011, r: 0.5 },
    { x: 0.4, y: 0.8, vx: 0.0015, vy: -0.0013, r: 0.42 },
    { x: 0.8, y: 0.7, vx: -0.0011, vy: -0.0015, r: 0.38 }
  ];
  let currentColors = [...TRACKS[0].colors];
  let targetColors = [...TRACKS[0].colors];

  function resizeCanvases() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ambientCanvas.width = w / 2; // low-res for silky smooth blur
    ambientCanvas.height = h / 2;
    sheetAmbientCanvas.width = w / 2;
    sheetAmbientCanvas.height = h / 2;

    const dpr = window.devicePixelRatio || 1;
    visualizerCanvas.width = visualizerCanvas.offsetWidth * dpr;
    visualizerCanvas.height = visualizerCanvas.offsetHeight * dpr;
  }
  window.addEventListener('resize', resizeCanvases);
  resizeCanvases();

  // Animate Liquid Mesh Canvas
  function animateLiquidMesh() {
    // Interpolate colors towards target colors
    for (let c = 0; c < 3; c++) {
      // Lerp hex colors loosely
      currentColors[c] = targetColors[c];
    }

    const w = ambientCanvas.width;
    const h = ambientCanvas.height;

    [ambientCtx, sheetAmbientCtx].forEach(ctx => {
      ctx.clearRect(0, 0, w, h);

      // Deep dark base
      ctx.fillStyle = '#06060a';
      ctx.fillRect(0, 0, w, h);

      // Move & render blobs
      blobs.forEach((b, idx) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < 0.1 || b.x > 0.9) b.vx *= -1;
        if (b.y < 0.1 || b.y > 0.9) b.vy *= -1;

        const grad = ctx.createRadialGradient(
          b.x * w, b.y * h, 10,
          b.x * w, b.y * h, b.r * Math.max(w, h)
        );
        const col = currentColors[idx % currentColors.length];
        grad.addColorStop(0, hexToRgba(col, 0.45));
        grad.addColorStop(0.6, hexToRgba(col, 0.15));
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x * w, b.y * h, b.r * Math.max(w, h), 0, Math.PI * 2);
        ctx.fill();
      });
    });

    requestAnimationFrame(animateLiquidMesh);
  }
  requestAnimationFrame(animateLiquidMesh);

  function hexToRgba(hex, alpha) {
    if (!hex || hex[0] !== '#') return `rgba(250, 36, 60, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // --- Audio Context Initialization ---
  function initAudioContext() {
    if (isWebAudioInitialized) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();

      analyserNode = audioCtx.createAnalyser();
      analyserNode.fftSize = 64;

      // Equalizer Biquad Filters
      bassFilter = audioCtx.createBiquadFilter();
      bassFilter.type = 'lowshelf';
      bassFilter.frequency.value = 250;
      bassFilter.gain.value = 0;

      midFilter = audioCtx.createBiquadFilter();
      midFilter.type = 'peaking';
      midFilter.frequency.value = 1500;
      midFilter.Q.value = 1;
      midFilter.gain.value = 0;

      trebleFilter = audioCtx.createBiquadFilter();
      trebleFilter.type = 'highshelf';
      trebleFilter.frequency.value = 4000;
      trebleFilter.gain.value = 0;

      sourceNode = audioCtx.createMediaElementSource(audio);
      sourceNode.connect(bassFilter);
      bassFilter.connect(midFilter);
      midFilter.connect(trebleFilter);
      trebleFilter.connect(analyserNode);
      analyserNode.connect(audioCtx.destination);

      isWebAudioInitialized = true;
      drawVisualizerSpectrum();
    } catch (e) {
      console.warn("Web Audio API could not be connected:", e);
    }
  }

  // Frequency spectrum drawer
  function drawVisualizerSpectrum() {
    requestAnimationFrame(drawVisualizerSpectrum);
    if (!analyserNode || !isPlaying) {
      visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
      return;
    }

    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);

    const w = visualizerCanvas.width;
    const h = visualizerCanvas.height;
    visualizerCtx.clearRect(0, 0, w, h);

    const barWidth = (w / bufferLength) * 1.8;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * h;
      
      const grad = visualizerCtx.createLinearGradient(0, h - barHeight, 0, h);
      grad.addColorStop(0, 'rgba(250, 36, 60, 0.9)');
      grad.addColorStop(1, 'rgba(175, 82, 222, 0.4)');
      
      visualizerCtx.fillStyle = grad;
      visualizerCtx.beginPath();
      visualizerCtx.roundRect(x, h - barHeight, Math.max(2, barWidth - 2), barHeight, 2);
      visualizerCtx.fill();

      x += barWidth + 2;
    }
  }

  // --- Load and Play Track ---
  function loadTrack(index, autoPlay = true) {
    if (index < 0) index = playlist.length - 1;
    if (index >= playlist.length) index = 0;
    currentTrackIndex = index;
    const track = playlist[index];

    audio.src = track.audioUrl;
    targetColors = track.colors || ["#fa243c", "#7928ca", "#0070f3"];

    // Update Mini Player
    miniArt.src = track.cover;
    miniTitle.textContent = track.title;
    miniArtist.textContent = track.artist;

    // Update Expanded Sheet
    sheetArtImg.src = track.cover;
    sheetTitle.textContent = track.title;
    sheetArtist.textContent = track.artist;

    // Favorite state
    updateFavButton();

    // Render Lyrics
    renderLyrics(track.lyrics);

    // Active track row highlight
    document.querySelectorAll('.track-row').forEach(row => {
      row.classList.toggle('active', parseInt(row.dataset.id) === track.id);
    });

    if (autoPlay) {
      playAudio();
    }
  }

  function playAudio() {
    initAudioContext();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    audio.play().then(() => {
      isPlaying = true;
      updatePlayPauseUI(true);
    }).catch(err => {
      console.warn("Autoplay blocked or waiting for user gesture:", err);
      isPlaying = false;
      updatePlayPauseUI(false);
    });
  }

  function pauseAudio() {
    audio.pause();
    isPlaying = false;
    updatePlayPauseUI(false);
  }

  function togglePlayPause() {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }

  function updatePlayPauseUI(playing) {
    if (playing) {
      miniPlayIcon.style.display = 'none';
      miniPauseIcon.style.display = 'block';
      sheetPlayIcon.style.display = 'none';
      sheetPauseIcon.style.display = 'block';
      sheetArtBox.classList.remove('paused');
      sheetArtBox.classList.add('playing');
    } else {
      miniPlayIcon.style.display = 'block';
      miniPauseIcon.style.display = 'none';
      sheetPlayIcon.style.display = 'block';
      sheetPauseIcon.style.display = 'none';
      sheetArtBox.classList.remove('playing');
      sheetArtBox.classList.add('paused');
    }
  }

  function nextTrack() {
    if (isShuffle) {
      let randIndex;
      do {
        randIndex = Math.floor(Math.random() * playlist.length);
      } while (randIndex === currentTrackIndex && playlist.length > 1);
      loadTrack(randIndex, true);
    } else {
      loadTrack(currentTrackIndex + 1, true);
    }
  }

  function prevTrack() {
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
    } else {
      loadTrack(currentTrackIndex - 1, true);
    }
  }

  // --- Audio Event Listeners ---
  audio.addEventListener('timeupdate', () => {
    const cur = audio.currentTime;
    const dur = audio.duration || playlist[currentTrackIndex].duration || 1;
    const pct = (cur / dur) * 100;

    miniProgressFill.style.width = `${pct}%`;
    seekSlider.value = pct;
    seekFill.style.width = `${pct}%`;

    currentTimeLabel.textContent = formatTime(cur);
    totalTimeLabel.textContent = formatTime(dur);

    updateLyricsSync(cur);
  });

  audio.addEventListener('ended', () => {
    if (isRepeat) {
      audio.currentTime = 0;
      playAudio();
    } else {
      nextTrack();
    }
  });

  // Slider Seek
  seekSlider.addEventListener('input', (e) => {
    const dur = audio.duration || playlist[currentTrackIndex].duration || 1;
    const target = (e.target.value / 100) * dur;
    audio.currentTime = target;
    seekFill.style.width = `${e.target.value}%`;
  });

  // Volume Slider
  volumeSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    audio.volume = val;
    volumeFill.style.width = `${val * 100}%`;
  });
  volumeFill.style.width = `${volumeSlider.value * 100}%`;

  // Controls Event Listeners
  miniPlayPauseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlayPause();
  });
  miniNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nextTrack();
  });
  mainPlayPauseBtn.addEventListener('click', togglePlayPause);
  nextBtn.addEventListener('click', nextTrack);
  prevBtn.addEventListener('click', prevTrack);

  shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
  });

  repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle('active', isRepeat);
  });

  // --- Full Screen Sheet Modal Animations ---
  miniExpandTrigger.addEventListener('click', () => {
    sheet.classList.add('expanded');
  });

  sheetDismissBtn.addEventListener('click', () => {
    sheet.classList.remove('expanded');
  });

  // Swipe Down to Dismiss on iPhone
  let touchStartY = 0;
  sheetGrabberZone.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  sheetGrabberZone.addEventListener('touchmove', (e) => {
    const deltaY = e.touches[0].clientY - touchStartY;
    if (deltaY > 60) {
      sheet.classList.remove('expanded');
    }
  }, { passive: true });

  // --- Lyrics Mode ---
  function renderLyrics(lyrics) {
    lyricsScrollWrapper.innerHTML = '';
    if (!lyrics || lyrics.length === 0) {
      lyricsScrollWrapper.innerHTML = '<div class="lyric-line active" style="margin-top:80px;">Instrumental track • Enjoy the music</div>';
      return;
    }

    lyrics.forEach((item, index) => {
      const line = document.createElement('div');
      line.className = 'lyric-line';
      line.textContent = item.text;
      line.dataset.time = item.time;
      line.dataset.index = index;

      line.addEventListener('click', () => {
        audio.currentTime = item.time;
        if (!isPlaying) playAudio();
      });

      lyricsScrollWrapper.appendChild(line);
    });
  }

  function updateLyricsSync(currentTime) {
    if (!isLyricsMode) return;
    const lines = lyricsScrollWrapper.querySelectorAll('.lyric-line');
    if (!lines.length) return;

    let activeIndex = -1;
    lines.forEach((line, idx) => {
      const time = parseFloat(line.dataset.time || 0);
      if (currentTime >= time) {
        activeIndex = idx;
      }
    });

    lines.forEach((line, idx) => {
      if (idx === activeIndex) {
        if (!line.classList.contains('active')) {
          line.classList.add('active');
          // Smooth scroll active lyric into focus
          line.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        line.classList.remove('active');
      }
    });
  }

  btnToggleLyrics.addEventListener('click', () => {
    isLyricsMode = !isLyricsMode;
    btnToggleLyrics.classList.toggle('active', isLyricsMode);
    if (isLyricsMode) {
      sheetArtworkView.classList.remove('active');
      sheetLyricsView.classList.add('active');
      updateLyricsSync(audio.currentTime);
    } else {
      sheetLyricsView.classList.remove('active');
      sheetArtworkView.classList.add('active');
    }
  });

  // --- AirPlay Device Picker ---
  btnAirplay.addEventListener('click', () => {
    airplayIndex = (airplayIndex + 1) % airplayDevices.length;
    airplayLabel.textContent = airplayDevices[airplayIndex];
  });

  // --- Up Next Queue Modal ---
  btnToggleQueue.addEventListener('click', () => {
    renderQueueList();
    queueSubmodal.classList.add('open');
  });

  btnCloseQueue.addEventListener('click', () => {
    queueSubmodal.classList.remove('open');
  });

  function renderQueueList() {
    queueListContainer.innerHTML = '';
    playlist.forEach((track, index) => {
      const row = createTrackRow(track, index);
      queueListContainer.appendChild(row);
    });
  }

  // --- Equalizer & Spatial Audio Modal ---
  btnEqToggle.addEventListener('click', () => {
    eqSubmodal.classList.add('open');
  });

  btnCloseEq.addEventListener('click', () => {
    eqSubmodal.classList.remove('open');
  });

  spatialSwitch.addEventListener('change', (e) => {
    const enabled = e.target.checked;
    document.getElementById('spatial-indicator').style.display = enabled ? 'inline-block' : 'none';
  });

  eqPresetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      eqPresetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyEqPreset(btn.dataset.preset);
    });
  });

  function applyEqPreset(preset) {
    if (!bassFilter) return;
    switch(preset) {
      case 'bass':
        bassFilter.gain.value = 9;
        midFilter.gain.value = 0;
        trebleFilter.gain.value = 1;
        break;
      case 'vocal':
        bassFilter.gain.value = -2;
        midFilter.gain.value = 6;
        trebleFilter.gain.value = 3;
        break;
      case 'electronic':
        bassFilter.gain.value = 7;
        midFilter.gain.value = -2;
        trebleFilter.gain.value = 6;
        break;
      case 'acoustic':
        bassFilter.gain.value = 3;
        midFilter.gain.value = 3;
        trebleFilter.gain.value = 4;
        break;
      case 'treble':
        bassFilter.gain.value = -4;
        midFilter.gain.value = 1;
        trebleFilter.gain.value = 8;
        break;
      default: // flat
        bassFilter.gain.value = 0;
        midFilter.gain.value = 0;
        trebleFilter.gain.value = 0;
        break;
    }
  }

  // --- Favorite Toggle ---
  sheetFavBtn.addEventListener('click', () => {
    const track = playlist[currentTrackIndex];
    if (favorites.has(track.id)) {
      favorites.delete(track.id);
    } else {
      favorites.add(track.id);
    }
    localStorage.setItem('music_z_favs', JSON.stringify([...favorites]));
    updateFavButton();
    renderLibraryTracks();
  });

  function updateFavButton() {
    const track = playlist[currentTrackIndex];
    const isFav = favorites.has(track.id);
    heartOutline.style.display = isFav ? 'none' : 'block';
    heartSolid.style.display = isFav ? 'block' : 'none';
  }

  // --- Tab Navigation ---
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPages.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPage = document.getElementById(targetId);
      if (targetPage) targetPage.classList.add('active');
      document.getElementById('content-scroll').scrollTop = 0;
    });
  });

  // Hero Card Play Buttons
  document.querySelectorAll('.hero-play-pill-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const trackId = parseInt(btn.dataset.playTrack);
      loadTrack(trackId, true);
    });
  });

  // Hero Card Clicks
  document.querySelectorAll('.hero-card').forEach(card => {
    card.addEventListener('click', () => {
      const trackId = parseInt(card.dataset.trackId);
      loadTrack(trackId, true);
    });
  });

  // Radio Play Button
  document.getElementById('btn-play-radio-1').addEventListener('click', () => {
    loadTrack(0, true);
  });

  // --- Render Sections ---
  function renderCatalog() {
    // 1. Top Picks
    const topPicksRow = document.getElementById('top-picks-row');
    topPicksRow.innerHTML = '';
    playlist.forEach((track, idx) => {
      const card = createCard(track, idx);
      topPicksRow.appendChild(card);
    });

    // 2. Heavy Rotation
    const heavyGrid = document.getElementById('heavy-rotation-grid');
    heavyGrid.innerHTML = '';
    playlist.forEach((track, idx) => {
      const card = createCard(track, idx);
      heavyGrid.appendChild(card);
    });

    // 3. Browse track list
    const browseList = document.getElementById('browse-track-list');
    browseList.innerHTML = '';
    playlist.forEach((track, idx) => {
      const row = createTrackRow(track, idx);
      browseList.appendChild(row);
    });

    // 4. Radio stations
    const radioRow = document.getElementById('radio-stations-row');
    radioRow.innerHTML = '';
    playlist.forEach((track, idx) => {
      const card = createCard(track, idx);
      radioRow.appendChild(card);
    });

    // 5. Library
    renderLibraryTracks();
  }

  function createCard(track, index) {
    const card = document.createElement('div');
    card.className = 'track-card';
    card.innerHTML = `
      <div class="card-art-box">
        <img src="${track.cover}" alt="${track.title}" class="card-art-img" loading="lazy">
        <div class="card-play-hover">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <polygon points="6 4 18 12 6 20 6 4"></polygon>
          </svg>
        </div>
      </div>
      <div class="card-title">${track.title}</div>
      <div class="card-artist">${track.artist}</div>
    `;
    card.addEventListener('click', () => {
      loadTrack(index, true);
    });
    return card;
  }

  function createTrackRow(track, index) {
    const row = document.createElement('div');
    row.className = `track-row ${index === currentTrackIndex ? 'active' : ''}`;
    row.dataset.id = track.id;
    row.innerHTML = `
      <div class="track-row-art">
        <img src="${track.cover}" alt="${track.title}" loading="lazy">
      </div>
      <div class="track-row-info">
        <div class="track-row-title">${track.title}</div>
        <div class="track-row-meta">
          <span>${track.artist}</span>
          ${track.isSpatial ? '<span class="spatial-badge-tiny">SPATIAL</span>' : ''}
        </div>
      </div>
      <button class="track-row-more">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <circle cx="12" cy="12" r="2"></circle>
          <circle cx="19" cy="12" r="2"></circle>
          <circle cx="5" cy="12" r="2"></circle>
        </svg>
      </button>
    `;
    row.addEventListener('click', () => {
      loadTrack(index, true);
    });
    return row;
  }

  function renderLibraryTracks(filter = 'all') {
    const libList = document.getElementById('library-track-list');
    libList.innerHTML = '';
    
    let filtered = playlist;
    if (filter === 'favorite') {
      filtered = playlist.filter(t => favorites.has(t.id));
    } else if (filter === 'uploaded') {
      filtered = playlist.filter(t => t.isUploaded);
    }

    if (filtered.length === 0) {
      libList.innerHTML = '<div style="padding:24px; text-align:center; color:rgba(255,255,255,0.4);">No songs found in this category.</div>';
      return;
    }

    filtered.forEach((track) => {
      const idx = playlist.indexOf(track);
      libList.appendChild(createTrackRow(track, idx));
    });
  }

  // Library Filter clicks
  document.querySelectorAll('.library-row-item').forEach(item => {
    item.addEventListener('click', () => {
      renderLibraryTracks(item.dataset.libFilter);
    });
  });

  // --- Search Input Filter ---
  let activeTag = 'all';

  function filterSearch() {
    const query = searchInput.value.toLowerCase().trim();
    searchClearBtn.style.display = query ? 'flex' : 'none';

    const results = playlist.filter(track => {
      const matchesTag = activeTag === 'all' || track.category === activeTag;
      const matchesQuery = !query || 
        track.title.toLowerCase().includes(query) ||
        track.artist.toLowerCase().includes(query) ||
        (track.lyrics && track.lyrics.some(l => l.text.toLowerCase().includes(query)));
      return matchesTag && matchesQuery;
    });

    searchTrackList.innerHTML = '';
    if (results.length === 0) {
      searchTrackList.innerHTML = '<div style="padding:32px; text-align:center; color:rgba(255,255,255,0.4);">No matching tracks or lyrics found.</div>';
      return;
    }

    results.forEach(track => {
      const idx = playlist.indexOf(track);
      searchTrackList.appendChild(createTrackRow(track, idx));
    });
  }

  searchInput.addEventListener('input', filterSearch);
  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterSearch();
  });

  searchTags.forEach(tag => {
    tag.addEventListener('click', () => {
      searchTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      activeTag = tag.dataset.tag;
      filterSearch();
    });
  });

  // Browse category clicks
  document.querySelectorAll('.browse-cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.filter;
      // Switch to search with tag
      const searchTabBtn = document.querySelector('[data-tab="tab-search"]');
      searchTabBtn.click();
      const matchingTag = document.querySelector(`.search-tag[data-tag="${cat}"]`);
      if (matchingTag) matchingTag.click();
    });
  });

  // --- Custom Audio Upload from iPhone / Mac ---
  localMusicInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    files.forEach((file, i) => {
      const url = URL.createObjectURL(file);
      const nameParts = file.name.replace(/\.[^/.]+$/, "").split(" - ");
      const artist = nameParts.length > 1 ? nameParts[0].trim() : "Imported Music";
      const title = nameParts.length > 1 ? nameParts[1].trim() : nameParts[0].trim();

      const newTrack = {
        id: Date.now() + i,
        title: title,
        artist: artist,
        album: "iPhone Library",
        cover: "assets/covers/neon_horizon.jpg",
        audioUrl: url,
        category: "uploaded",
        duration: 0,
        colors: ["#fa243c", "#007aff", "#af52de"],
        isSpatial: true,
        isUploaded: true,
        lyrics: [
          { time: 0, text: `Imported audio: ${title}` },
          { time: 5, text: "Playing your local music with Apple Music audio effects" }
        ]
      };

      playlist.unshift(newTrack);
    });

    renderCatalog();
    loadTrack(0, true);
    // Switch to library
    document.querySelector('[data-tab="tab-library"]').click();
  });

  // --- Keyboard Shortcuts (Mac Safari / Desktop) ---
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') {
      e.preventDefault();
      togglePlayPause();
    } else if (e.code === 'ArrowRight') {
      audio.currentTime = Math.min(audio.currentTime + 5, audio.duration || 999);
    } else if (e.code === 'ArrowLeft') {
      audio.currentTime = Math.max(audio.currentTime - 5, 0);
    } else if (e.code === 'ArrowUp') {
      audio.volume = Math.min(audio.volume + 0.1, 1);
      volumeSlider.value = audio.volume;
      volumeFill.style.width = `${audio.volume * 100}%`;
    } else if (e.code === 'ArrowDown') {
      audio.volume = Math.max(audio.volume - 0.1, 0);
      volumeSlider.value = audio.volume;
      volumeFill.style.width = `${audio.volume * 100}%`;
    }
  });

  // Utility: Time Formatter
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Initial Load
  renderCatalog();
  filterSearch();
  loadTrack(0, false);
});
