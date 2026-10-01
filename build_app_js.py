import json

with open('assets/master_catalog.json', 'r') as f:
    master_tracks = json.load(f)

tracks_json = json.dumps(master_tracks, indent=2)

js_content = f"""/**
 * Music Z — Apple Music Experience (Full Feature Pro Edition)
 * With 54 Telugu & Hindi Hits, SharePlay, 3-State Repeat, AirPlay, and Audio-Reactive Mesh
 */

document.addEventListener('DOMContentLoaded', () => {{

  // Master Catalog: 54 Top Telugu & Hindi Hits
  const MASTER_TRACKS = {tracks_json};

  // Application State
  let playlist = [...MASTER_TRACKS];
  let currentTrackIndex = 0;
  let isPlaying = false;
  let isShuffle = false;
  let repeatMode = 0; // 0: Off, 1: Repeat All, 2: Repeat One
  let favorites = new Set(JSON.parse(localStorage.getItem('music_z_favs') || '[]'));
  let isLyricsMode = false;
  let currentLangFilter = 'all';

  // Audio Element
  const audio = document.getElementById('native-audio');

  // DOM: Tabs & Navigation
  const tabButtons = document.querySelectorAll('.tab-item');
  const tabPages = document.querySelectorAll('.tab-page');
  const langPills = document.querySelectorAll('.lang-pill');

  // DOM: Mini Player
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

  // DOM: Expanded Now Playing Sheet
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

  // Seek Slider
  const seekSlider = document.getElementById('sheet-seek-slider');
  const seekFill = document.getElementById('sheet-seek-fill');
  const currentTimeLabel = document.getElementById('current-time-label');
  const totalTimeLabel = document.getElementById('total-time-label');

  // Playback Controls
  const mainPlayPauseBtn = document.getElementById('btn-main-play-pause');
  const sheetPlayIcon = document.getElementById('sheet-play-icon');
  const sheetPauseIcon = document.getElementById('sheet-pause-icon');
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  const shuffleBtn = document.getElementById('btn-shuffle');
  const repeatBtn = document.getElementById('btn-repeat');
  const repeatOneBadge = document.getElementById('repeat-one-badge');

  // Volume
  const volumeSlider = document.getElementById('sheet-volume-slider');
  const volumeFill = document.getElementById('sheet-volume-fill');

  // Bottom Action Buttons
  const btnToggleLyrics = document.getElementById('btn-toggle-lyrics');
  const sheetArtworkView = document.getElementById('sheet-artwork-view');
  const sheetLyricsView = document.getElementById('sheet-lyrics-view');
  const lyricsScrollWrapper = document.getElementById('lyrics-scroll-wrapper');
  const btnAirplay = document.getElementById('btn-airplay');
  const airplayLabel = document.getElementById('airplay-label');
  const btnToggleQueue = document.getElementById('btn-toggle-queue');

  // Submodals
  const queueSubmodal = document.getElementById('queue-submodal');
  const btnCloseQueue = document.getElementById('btn-close-queue');
  const queueListContainer = document.getElementById('queue-list-container');
  const btnShuffleQueue = document.getElementById('btn-shuffle-queue');
  const queueCount = document.getElementById('queue-count');

  const shareplaySubmodal = document.getElementById('shareplay-submodal');
  const btnHeaderShareplay = document.getElementById('btn-header-shareplay');
  const btnSheetShareplay = document.getElementById('btn-sheet-shareplay');
  const btnCloseShareplay = document.getElementById('btn-close-shareplay');
  const btnCopyShareplay = document.getElementById('btn-copy-shareplay');
  const shareplayLinkInput = document.getElementById('shareplay-link-input');

  const airplaySubmodal = document.getElementById('airplay-submodal');
  const btnCloseAirplay = document.getElementById('btn-close-airplay');
  const airplayRows = document.querySelectorAll('.airplay-row');

  const eqSubmodal = document.getElementById('eq-submodal');
  const btnEqToggle = document.getElementById('btn-eq-toggle');
  const btnCloseEq = document.getElementById('btn-close-eq');
  const spatialSwitch = document.getElementById('toggle-spatial-switch');
  const eqPresetBtns = document.querySelectorAll('.eq-preset-btn');

  // Search & Library
  const searchInput = document.getElementById('search-input');
  const searchSpinner = document.getElementById('search-spinner');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const searchTrackList = document.getElementById('search-track-list');
  const searchTags = document.querySelectorAll('.search-tag');
  const localMusicInput = document.getElementById('local-music-input');
  const toast = document.getElementById('ios-toast');
  const emojiLayer = document.getElementById('emoji-reaction-layer');

  // Web Audio Context
  let audioCtx = null;
  let sourceNode = null;
  let analyserNode = null;
  let bassFilter = null;
  let midFilter = null;
  let trebleFilter = null;
  let isWebAudioInitialized = false;
  let currentBassEnergy = 0;

  // Visualizer Canvases
  const ambientCanvas = document.getElementById('ambient-canvas');
  const sheetAmbientCanvas = document.getElementById('sheet-ambient-canvas');
  const visualizerCanvas = document.getElementById('audio-visualizer-canvas');
  let ambientCtx = ambientCanvas.getContext('2d');
  let sheetAmbientCtx = sheetAmbientCanvas.getContext('2d');
  let visualizerCtx = visualizerCanvas.getContext('2d');

  // Fluid Mesh Animation Blobs (Audio Reactive)
  let blobs = [
    {{ x: 0.28, y: 0.22, vx: 0.0012, vy: 0.0015, baseR: 0.45 }},
    {{ x: 0.72, y: 0.28, vx: -0.0014, vy: 0.0011, baseR: 0.50 }},
    {{ x: 0.38, y: 0.78, vx: 0.0013, vy: -0.0014, baseR: 0.42 }},
    {{ x: 0.82, y: 0.72, vx: -0.0011, vy: -0.0013, baseR: 0.40 }}
  ];
  let currentColors = ["#fa243c", "#ff9500", "#7928ca"];
  let targetColors = ["#fa243c", "#ff9500", "#7928ca"];

  function resizeCanvases() {{
    const w = window.innerWidth;
    const h = window.innerHeight;
    ambientCanvas.width = w / 2;
    ambientCanvas.height = h / 2;
    sheetAmbientCanvas.width = w / 2;
    sheetAmbientCanvas.height = h / 2;

    const dpr = window.devicePixelRatio || 1;
    visualizerCanvas.width = visualizerCanvas.offsetWidth * dpr;
    visualizerCanvas.height = visualizerCanvas.offsetHeight * dpr;
  }}
  window.addEventListener('resize', resizeCanvases);
  resizeCanvases();

  function animateLiquidMesh() {{
    for (let c = 0; c < 3; c++) {{
      currentColors[c] = targetColors[c];
    }}
    const w = ambientCanvas.width;
    const h = ambientCanvas.height;

    // React to real bass energy
    const pulseFactor = 1 + (currentBassEnergy * 0.35);

    [ambientCtx, sheetAmbientCtx].forEach(ctx => {{
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#06060a';
      ctx.fillRect(0, 0, w, h);

      blobs.forEach((b, idx) => {{
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < 0.1 || b.x > 0.9) b.vx *= -1;
        if (b.y < 0.1 || b.y > 0.9) b.vy *= -1;

        const effectiveR = b.baseR * pulseFactor;
        const grad = ctx.createRadialGradient(
          b.x * w, b.y * h, 10,
          b.x * w, b.y * h, effectiveR * Math.max(w, h)
        );
        const col = currentColors[idx % currentColors.length];
        grad.addColorStop(0, hexToRgba(col, 0.46));
        grad.addColorStop(0.65, hexToRgba(col, 0.16));
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x * w, b.y * h, effectiveR * Math.max(w, h), 0, Math.PI * 2);
        ctx.fill();
      }});
    }});

    requestAnimationFrame(animateLiquidMesh);
  }}
  requestAnimationFrame(animateLiquidMesh);

  function hexToRgba(hex, alpha) {{
    if (!hex || hex[0] !== '#') return `rgba(250, 36, 60, ${{alpha}})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${{r}}, ${{g}}, ${{b}}, ${{alpha}})`;
  }}

  // --- Web Audio Engine & Equalizer ---
  function initAudioContext() {{
    if (isWebAudioInitialized) return;
    try {{
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();

      analyserNode = audioCtx.createAnalyser();
      analyserNode.fftSize = 64;

      bassFilter = audioCtx.createBiquadFilter();
      bassFilter.type = 'lowshelf';
      bassFilter.frequency.value = 250;
      bassFilter.gain.value = 0;

      midFilter = audioCtx.createBiquadFilter();
      midFilter.type = 'peaking';
      midFilter.frequency.value = 1500;
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
    }} catch (e) {{
      console.warn("Web Audio API:", e);
    }}
  }}

  function drawVisualizerSpectrum() {{
    requestAnimationFrame(drawVisualizerSpectrum);
    if (!analyserNode || !isPlaying) {{
      currentBassEnergy = 0;
      visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
      return;
    }}

    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);

    // Calculate bass energy from first 4 bins
    let bassSum = 0;
    for (let i = 0; i < 4; i++) bassSum += dataArray[i];
    currentBassEnergy = (bassSum / (4 * 255));

    const w = visualizerCanvas.width;
    const h = visualizerCanvas.height;
    visualizerCtx.clearRect(0, 0, w, h);

    const barWidth = (w / bufferLength) * 1.8;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {{
      const barHeight = (dataArray[i] / 255) * h;
      const grad = visualizerCtx.createLinearGradient(0, h - barHeight, 0, h);
      grad.addColorStop(0, 'rgba(250, 36, 60, 0.95)');
      grad.addColorStop(1, 'rgba(175, 82, 222, 0.4)');
      
      visualizerCtx.fillStyle = grad;
      visualizerCtx.beginPath();
      visualizerCtx.roundRect(x, h - barHeight, Math.max(2, barWidth - 2), barHeight, 2);
      visualizerCtx.fill();

      x += barWidth + 2;
    }}
  }}

  // --- Load and Play Track ---
  function loadTrack(index, autoPlay = true) {{
    if (index < 0) index = playlist.length - 1;
    if (index >= playlist.length) index = 0;
    currentTrackIndex = index;
    const track = playlist[index];

    audio.src = track.audioUrl;
    targetColors = track.colors || ["#fa243c", "#ff9500", "#7928ca"];

    // Update Mini Player
    miniArt.src = track.cover;
    miniTitle.textContent = track.title;
    miniArtist.textContent = track.artist;

    // Update Expanded Sheet
    sheetArtImg.src = track.cover;
    sheetTitle.textContent = track.title;
    sheetArtist.textContent = track.artist;

    updateFavButton();
    renderLyrics(track.title, track.artist, track.album);

    document.querySelectorAll('.track-row').forEach(row => {{
      row.classList.toggle('active', parseInt(row.dataset.id) === track.id);
    }});

    // Update SharePlay link
    shareplayLinkInput.value = `https://adityakasara.github.io/Music_Z/?track=${{track.id}}`;

    if (autoPlay) {{
      playAudio();
    }}
  }}

  function playAudio() {{
    initAudioContext();
    if (audioCtx && audioCtx.state === 'suspended') {{
      audioCtx.resume();
    }}

    audio.play().then(() => {{
      isPlaying = true;
      updatePlayPauseUI(true);
    }}).catch(err => {{
      console.warn("Autoplay:", err);
      isPlaying = false;
      updatePlayPauseUI(false);
    }});
  }}

  function pauseAudio() {{
    audio.pause();
    isPlaying = false;
    updatePlayPauseUI(false);
  }}

  function togglePlayPause() {{
    if (isPlaying) {{
      pauseAudio();
    }} else {{
      playAudio();
    }}
  }}

  function updatePlayPauseUI(playing) {{
    if (playing) {{
      miniPlayIcon.style.display = 'none';
      miniPauseIcon.style.display = 'block';
      sheetPlayIcon.style.display = 'none';
      sheetPauseIcon.style.display = 'block';
      sheetArtBox.classList.remove('paused');
      sheetArtBox.classList.add('playing');
    }} else {{
      miniPlayIcon.style.display = 'block';
      miniPauseIcon.style.display = 'none';
      sheetPlayIcon.style.display = 'block';
      sheetPauseIcon.style.display = 'none';
      sheetArtBox.classList.remove('playing');
      sheetArtBox.classList.add('paused');
    }}
  }}

  function nextTrack() {{
    if (isShuffle) {{
      let randIndex;
      do {{
        randIndex = Math.floor(Math.random() * playlist.length);
      }} while (randIndex === currentTrackIndex && playlist.length > 1);
      loadTrack(randIndex, true);
    }} else {{
      loadTrack(currentTrackIndex + 1, true);
    }}
  }}

  function prevTrack() {{
    if (audio.currentTime > 3) {{
      audio.currentTime = 0;
    }} else {{
      loadTrack(currentTrackIndex - 1, true);
    }}
  }}

  // --- Repeat Mode: 3-State Cycle (Off -> All -> One) ---
  repeatBtn.addEventListener('click', () => {{
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatUI();
    showToast(repeatMode === 2 ? 'Repeat: One Song' : (repeatMode === 1 ? 'Repeat: All Songs' : 'Repeat: Off'));
  }});

  function updateRepeatUI() {{
    if (repeatMode === 0) {{
      repeatBtn.classList.remove('active');
      repeatOneBadge.style.display = 'none';
    }} else if (repeatMode === 1) {{
      repeatBtn.classList.add('active');
      repeatOneBadge.style.display = 'none';
    }} else if (repeatMode === 2) {{
      repeatBtn.classList.add('active');
      repeatOneBadge.style.display = 'flex';
    }}
  }}

  // --- Audio Ended Handler with Repeat Logic ---
  audio.addEventListener('ended', () => {{
    if (repeatMode === 2) {{
      audio.currentTime = 0;
      playAudio();
    }} else if (repeatMode === 1) {{
      nextTrack();
    }} else {{
      // Repeat Off: Stop if at end of playlist
      if (currentTrackIndex < playlist.length - 1) {{
        nextTrack();
      }} else {{
        pauseAudio();
        audio.currentTime = 0;
      }}
    }}
  }});

  // --- Scrubber & Time Updates ---
  audio.addEventListener('timeupdate', () => {{
    const cur = audio.currentTime;
    const dur = audio.duration || playlist[currentTrackIndex]?.duration || 1;
    const pct = (cur / dur) * 100;

    miniProgressFill.style.width = `${{pct}}%`;
    seekSlider.value = pct;
    seekFill.style.width = `${{pct}}%`;

    currentTimeLabel.textContent = formatTime(cur);
    totalTimeLabel.textContent = formatTime(dur);

    updateLyricsSync(cur);
  }});

  seekSlider.addEventListener('input', (e) => {{
    const dur = audio.duration || playlist[currentTrackIndex]?.duration || 1;
    const target = (e.target.value / 100) * dur;
    audio.currentTime = target;
    seekFill.style.width = `${{e.target.value}}%`;
  }});

  volumeSlider.addEventListener('input', (e) => {{
    const val = parseFloat(e.target.value);
    audio.volume = val;
    volumeFill.style.width = `${{val * 100}}%`;
  }});
  volumeFill.style.width = `${{volumeSlider.value * 100}}%`;

  // Controls Event Listeners
  miniPlayPauseBtn.addEventListener('click', (e) => {{
    e.stopPropagation();
    togglePlayPause();
  }});
  miniNextBtn.addEventListener('click', (e) => {{
    e.stopPropagation();
    nextTrack();
  }});
  mainPlayPauseBtn.addEventListener('click', togglePlayPause);
  nextBtn.addEventListener('click', nextTrack);
  prevBtn.addEventListener('click', prevTrack);

  shuffleBtn.addEventListener('click', () => {{
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
    showToast(isShuffle ? 'Shuffle: On' : 'Shuffle: Off');
  }});

  // --- Expanded Now Playing Sheet Animations & Drag Gestures ---
  miniExpandTrigger.addEventListener('click', () => {{
    sheet.classList.add('expanded');
  }});

  sheetDismissBtn.addEventListener('click', () => {{
    sheet.classList.remove('expanded');
  }});

  let touchStartY = 0;
  sheetGrabberZone.addEventListener('touchstart', (e) => {{
    touchStartY = e.touches[0].clientY;
  }}, {{ passive: true }});

  sheetGrabberZone.addEventListener('touchmove', (e) => {{
    const deltaY = e.touches[0].clientY - touchStartY;
    if (deltaY > 60) {{
      sheet.classList.remove('expanded');
    }}
  }}, {{ passive: true }});

  // --- Kinetic Karaoke Lyrics View ---
  function renderLyrics(title, artist, album) {{
    lyricsScrollWrapper.innerHTML = '';
    const lyricsData = [
      {{ time: 0.0, text: title }},
      {{ time: 4.0, text: `Sung by ${{artist}}` }},
      {{ time: 8.5, text: `From the blockbuster ${{album}}` }},
      {{ time: 13.0, text: "Streaming in Apple Spatial Lossless Audio" }},
      {{ time: 17.5, text: "Vocal resonance & dynamic beat" }},
      {{ time: 22.0, text: "Feel every rhythm and cinematic chord" }},
      {{ time: 26.5, text: "Music Z • Premium Apple Experience" }}
    ];

    lyricsData.forEach((item) => {{
      const line = document.createElement('div');
      line.className = 'lyric-line';
      line.textContent = item.text;
      line.dataset.time = item.time;

      line.addEventListener('click', () => {{
        audio.currentTime = item.time;
        if (!isPlaying) playAudio();
      }});

      lyricsScrollWrapper.appendChild(line);
    }});
  }}

  function updateLyricsSync(currentTime) {{
    if (!isLyricsMode) return;
    const lines = lyricsScrollWrapper.querySelectorAll('.lyric-line');
    if (!lines.length) return;

    let activeIndex = -1;
    lines.forEach((line, idx) => {{
      const time = parseFloat(line.dataset.time || 0);
      if (currentTime >= time) activeIndex = idx;
    }});

    lines.forEach((line, idx) => {{
      if (idx === activeIndex) {{
        if (!line.classList.contains('active')) {{
          line.classList.add('active');
          line.scrollIntoView({{ behavior: 'smooth', block: 'center' }});
        }}
      }} else {{
        line.classList.remove('active');
      }}
    }});
  }}

  btnToggleLyrics.addEventListener('click', () => {{
    isLyricsMode = !isLyricsMode;
    btnToggleLyrics.classList.toggle('active', isLyricsMode);
    if (isLyricsMode) {{
      sheetArtworkView.classList.remove('active');
      sheetLyricsView.classList.add('active');
      updateLyricsSync(audio.currentTime);
    }} else {{
      sheetLyricsView.classList.remove('active');
      sheetArtworkView.classList.add('active');
    }}
  }});

  // --- SharePlay Live Session & Reactions ---
  [btnHeaderShareplay, btnSheetShareplay].forEach(btn => {{
    if (btn) {{
      btn.addEventListener('click', () => {{
        shareplaySubmodal.classList.add('open');
      }});
    }}
  }});

  btnCloseShareplay.addEventListener('click', () => {{
    shareplaySubmodal.classList.remove('open');
  }});

  btnCopyShareplay.addEventListener('click', () => {{
    const link = shareplayLinkInput.value;
    if (navigator.share) {{
      navigator.share({{
        title: `Listen to ${{playlist[currentTrackIndex].title}} on Music Z`,
        text: `Join my Apple Music SharePlay session on Music Z!`,
        url: link
      }}).catch(() => {{}});
    }} else {{
      navigator.clipboard.writeText(link).then(() => {{
        showToast("SharePlay Link Copied!");
      }});
    }}
  }});

  // Emoji Reactions (Float Up Animation)
  document.querySelectorAll('.reaction-emoji-btn').forEach(btn => {{
    btn.addEventListener('click', () => {{
      const emoji = btn.dataset.emoji;
      triggerFloatingReaction(emoji);
    }});
  }});

  function triggerFloatingReaction(emoji) {{
    const el = document.createElement('div');
    el.className = 'floating-reaction-emoji';
    el.textContent = emoji;
    const randomLeft = 20 + Math.random() * 60;
    const randomRot = (Math.random() * 40 - 20) + 'deg';
    const randomRotEnd = (Math.random() * 60 - 30) + 'deg';
    
    el.style.left = `${{randomLeft}}%`;
    el.style.setProperty('--rot', randomRot);
    el.style.setProperty('--rot-end', randomRotEnd);

    emojiLayer.appendChild(el);
    setTimeout(() => {{
      el.remove();
    }}, 2300);
  }}

  // --- AirPlay Audio Output Selector ---
  btnAirplay.addEventListener('click', () => {{
    airplaySubmodal.classList.add('open');
  }});

  btnCloseAirplay.addEventListener('click', () => {{
    airplaySubmodal.classList.remove('open');
  }});

  airplayRows.forEach(row => {{
    row.addEventListener('click', () => {{
      airplayRows.forEach(r => {{
        r.classList.remove('active');
        r.querySelector('.airplay-check').textContent = '';
      }});
      row.classList.add('active');
      row.querySelector('.airplay-check').textContent = '✓';
      const devName = row.dataset.device;
      airplayLabel.textContent = devName;
      showToast(`Connected to ${{devName}}`);
      setTimeout(() => {{
        airplaySubmodal.classList.remove('open');
      }}, 350);
    }});
  }});

  // --- Up Next Queue Modal ---
  btnToggleQueue.addEventListener('click', () => {{
    renderQueueList();
    queueSubmodal.classList.add('open');
  }});

  btnCloseQueue.addEventListener('click', () => {{
    queueSubmodal.classList.remove('open');
  }});

  btnShuffleQueue.addEventListener('click', () => {{
    // Shuffle remaining tracks after current
    const current = playlist[currentTrackIndex];
    let rest = playlist.filter((_, idx) => idx !== currentTrackIndex);
    for (let i = rest.length - 1; i > 0; i--) {{
      const j = Math.floor(Math.random() * (i + 1));
      [rest[i], rest[j]] = [rest[j], rest[i]];
    }}
    playlist = [current, ...rest];
    currentTrackIndex = 0;
    renderQueueList();
    showToast("Queue Shuffled!");
  }});

  function renderQueueList() {{
    queueListContainer.innerHTML = '';
    queueCount.textContent = playlist.length;
    playlist.forEach((track, index) => {{
      queueListContainer.appendChild(createTrackRow(track, index));
    }});
  }}

  // --- Equalizer & Spatial Audio ---
  btnEqToggle.addEventListener('click', () => {{
    eqSubmodal.classList.add('open');
  }});
  btnCloseEq.addEventListener('click', () => {{
    eqSubmodal.classList.remove('open');
  }});

  spatialSwitch.addEventListener('change', (e) => {{
    const enabled = e.target.checked;
    document.getElementById('spatial-indicator').style.display = enabled ? 'inline-block' : 'none';
    showToast(enabled ? 'Spatial Audio: Enabled' : 'Spatial Audio: Disabled');
  }});

  eqPresetBtns.forEach(btn => {{
    btn.addEventListener('click', () => {{
      eqPresetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyEqPreset(btn.dataset.preset);
      showToast(`Preset: ${{btn.textContent}}`);
    }});
  }});

  function applyEqPreset(preset) {{
    if (!bassFilter) return;
    if (preset === 'bass') {{
      bassFilter.gain.value = 9; midFilter.gain.value = 0; trebleFilter.gain.value = 1;
    }} else if (preset === 'vocal') {{
      bassFilter.gain.value = -2; midFilter.gain.value = 6; trebleFilter.gain.value = 3;
    }} else if (preset === 'electronic') {{
      bassFilter.gain.value = 7; midFilter.gain.value = -2; trebleFilter.gain.value = 6;
    }} else if (preset === 'acoustic') {{
      bassFilter.gain.value = 3; midFilter.gain.value = 3; trebleFilter.gain.value = 4;
    }} else if (preset === 'treble') {{
      bassFilter.gain.value = -4; midFilter.gain.value = 1; trebleFilter.gain.value = 8;
    }} else {{
      bassFilter.gain.value = 0; midFilter.gain.value = 0; trebleFilter.gain.value = 0;
    }}
  }}

  // --- Favorite Toggle ---
  sheetFavBtn.addEventListener('click', () => {{
    const track = playlist[currentTrackIndex];
    if (favorites.has(track.id)) {{
      favorites.delete(track.id);
      showToast('Removed from Favorites');
    }} else {{
      favorites.add(track.id);
      showToast('Added to Favorites ❤️');
      triggerFloatingReaction('❤️');
    }}
    localStorage.setItem('music_z_favs', JSON.stringify([...favorites]));
    updateFavButton();
    renderLibraryTracks();
  }});

  function updateFavButton() {{
    const track = playlist[currentTrackIndex];
    const isFav = favorites.has(track.id);
    heartOutline.style.display = isFav ? 'none' : 'block';
    heartSolid.style.display = isFav ? 'block' : 'none';
  }}

  // --- Tab Navigation ---
  tabButtons.forEach(btn => {{
    btn.addEventListener('click', () => {{
      const targetId = btn.dataset.tab;
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPages.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPage = document.getElementById(targetId);
      if (targetPage) targetPage.classList.add('active');
      document.getElementById('content-scroll').scrollTop = 0;
    }});
  }});

  document.getElementById('btn-play-radio-1').addEventListener('click', () => {{
    loadTrack(0, true);
  }});

  // --- Render Catalog Sections ---
  function renderAll() {{
    renderHeroCarousel();
    renderLanguageSections();
    renderHeavyRotation();
    renderBrowseTracks();
    renderRadioStations();
    renderLibraryTracks();
    updateLibraryCounts();
  }}

  function updateLibraryCounts() {{
    document.getElementById('lib-count-all').textContent = playlist.length;
    document.getElementById('lib-count-telugu').textContent = playlist.filter(t => t.category === 'telugu').length;
    document.getElementById('lib-count-hindi').textContent = playlist.filter(t => t.category === 'hindi').length;
    document.getElementById('lib-count-favs').textContent = favorites.size;
  }}

  function renderHeroCarousel() {{
    const carousel = document.getElementById('hero-carousel');
    carousel.innerHTML = '';

    const heroTracks = playlist.slice(0, 4);
    heroTracks.forEach((track, idx) => {{
      const card = document.createElement('div');
      card.className = 'hero-card';
      card.innerHTML = `
        <div class="hero-card-art-wrap">
          <img src="${{track.cover}}" alt="${{track.title}}" class="hero-art-img">
          <div class="hero-glass-badge">${{track.category.toUpperCase()}} HIT</div>
        </div>
        <div class="hero-meta">
          <span class="hero-subtitle">NOW STREAMING • ${{track.artist.toUpperCase()}}</span>
          <h2 class="hero-title">${{track.title}}</h2>
          <p class="hero-desc">${{track.album}} • Lossless Spatial Audio</p>
          <button class="hero-play-pill-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Play</span>
          </button>
        </div>
      `;
      card.querySelector('.hero-play-pill-btn').addEventListener('click', (e) => {{
        e.stopPropagation();
        loadTrack(idx, true);
      }});
      card.addEventListener('click', () => {{
        loadTrack(idx, true);
      }});
      carousel.appendChild(card);
    }});
  }}

  function renderLanguageSections() {{
    const teluguRow = document.getElementById('telugu-row');
    const hindiRow = document.getElementById('hindi-row');
    teluguRow.innerHTML = '';
    hindiRow.innerHTML = '';

    playlist.filter(t => t.category === 'telugu').forEach(track => {{
      const idx = playlist.indexOf(track);
      teluguRow.appendChild(createCard(track, idx));
    }});

    playlist.filter(t => t.category === 'hindi').forEach(track => {{
      const idx = playlist.indexOf(track);
      hindiRow.appendChild(createCard(track, idx));
    }});
  }}

  function renderHeavyRotation() {{
    const heavyGrid = document.getElementById('heavy-rotation-grid');
    heavyGrid.innerHTML = '';
    playlist.slice(0, 10).forEach(track => {{
      const idx = playlist.indexOf(track);
      heavyGrid.appendChild(createCard(track, idx));
    }});
  }}

  function renderBrowseTracks() {{
    const browseList = document.getElementById('browse-track-list');
    browseList.innerHTML = '';
    playlist.slice(0, 12).forEach(track => {{
      const idx = playlist.indexOf(track);
      browseList.appendChild(createTrackRow(track, idx));
    }});
  }}

  function renderRadioStations() {{
    const radioRow = document.getElementById('radio-stations-row');
    radioRow.innerHTML = '';
    playlist.slice(0, 8).forEach(track => {{
      const idx = playlist.indexOf(track);
      radioRow.appendChild(createCard(track, idx));
    }});
  }}

  function createCard(track, index) {{
    const card = document.createElement('div');
    card.className = 'track-card';
    card.innerHTML = `
      <div class="card-art-box">
        <img src="${{track.cover}}" alt="${{track.title}}" class="card-art-img" loading="lazy">
        <span class="card-lang-tag">${{track.category}}</span>
        <div class="card-play-hover">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <polygon points="6 4 18 12 6 20 6 4"></polygon>
          </svg>
        </div>
      </div>
      <div class="card-title">${{track.title}}</div>
      <div class="card-artist">${{track.artist}}</div>
    `;
    card.addEventListener('click', () => {{
      loadTrack(index, true);
    }});
    return card;
  }}

  function createTrackRow(track, index) {{
    const row = document.createElement('div');
    row.className = `track-row ${{index === currentTrackIndex ? 'active' : ''}}`;
    row.dataset.id = track.id;
    
    let langBadge = '';
    if (track.category === 'telugu') {{
      langBadge = '<span class="telugu-tag-tiny">TELUGU</span>';
    }} else if (track.category === 'hindi') {{
      langBadge = '<span class="hindi-tag-tiny">HINDI</span>';
    }}

    row.innerHTML = `
      <div class="track-row-art">
        <img src="${{track.cover}}" alt="${{track.title}}" loading="lazy">
      </div>
      <div class="track-row-info">
        <div class="track-row-title">${{track.title}}</div>
        <div class="track-row-meta">
          <span>${{track.artist}}</span>
          ${{langBadge}}
          <span class="spatial-badge-tiny">LOSSLESS</span>
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
    row.addEventListener('click', () => {{
      loadTrack(index, true);
    }});
    return row;
  }}

  function renderLibraryTracks(filter = 'all') {{
    const libList = document.getElementById('library-track-list');
    libList.innerHTML = '';
    
    let filtered = playlist;
    if (filter === 'favorite') {{
      filtered = playlist.filter(t => favorites.has(t.id));
    }} else if (filter === 'telugu') {{
      filtered = playlist.filter(t => t.category === 'telugu');
    }} else if (filter === 'hindi') {{
      filtered = playlist.filter(t => t.category === 'hindi');
    }}

    if (filtered.length === 0) {{
      libList.innerHTML = '<div style="padding:24px; text-align:center; color:rgba(255,255,255,0.4);">No songs in this view.</div>';
      return;
    }}

    filtered.forEach((track) => {{
      const idx = playlist.indexOf(track);
      libList.appendChild(createTrackRow(track, idx));
    }});
  }}

  // Language Filter Pills
  langPills.forEach(pill => {{
    pill.addEventListener('click', () => {{
      langPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const lang = pill.dataset.lang;
      currentLangFilter = lang;

      const secTelugu = document.getElementById('section-telugu-block');
      const secHindi = document.getElementById('section-hindi-block');

      if (lang === 'telugu') {{
        secTelugu.style.display = 'block';
        secHindi.style.display = 'none';
      }} else if (lang === 'hindi') {{
        secTelugu.style.display = 'none';
        secHindi.style.display = 'block';
      }} else if (lang === 'favorites') {{
        document.querySelector('[data-tab="tab-library"]').click();
        renderLibraryTracks('favorite');
      }} else {{
        secTelugu.style.display = 'block';
        secHindi.style.display = 'block';
      }}
    }});
  }});

  document.querySelectorAll('.library-row-item').forEach(item => {{
    item.addEventListener('click', () => {{
      renderLibraryTracks(item.dataset.libFilter);
    }});
  }});

  // --- Live iTunes API Search Engine ---
  let searchDebounceTimer = null;

  async function performLiveSearch(query) {{
    if (!query) {{
      renderDefaultSearchResults();
      return;
    }}

    // Filter local catalog first
    const qLower = query.toLowerCase();
    const localMatches = playlist.filter(t => 
      t.title.toLowerCase().includes(qLower) || 
      t.artist.toLowerCase().includes(qLower) ||
      t.album.toLowerCase().includes(qLower)
    );

    searchTrackList.innerHTML = '';
    localMatches.forEach(t => {{
      const idx = playlist.indexOf(t);
      searchTrackList.appendChild(createTrackRow(t, idx));
    }});

    // If local matches are few or user is looking for more, fetch from live Apple Music API
    searchSpinner.style.display = 'inline-block';

    try {{
      const url = `https://itunes.apple.com/search?term=${{encodeURIComponent(query)}}&media=music&limit=25`;
      const response = await fetch(url);
      const data = await response.json();
      
      searchSpinner.style.display = 'none';

      if (data.results && data.results.length > 0) {{
        data.results.forEach(item => {{
          if (!item.previewUrl) return;
          if (playlist.some(p => p.id === item.trackId)) return; // already in local list

          const art = (item.artworkUrl100 || '').replace('100x100bb', '600x600bb');
          const isTelugu = item.primaryGenreName?.includes('Telugu') || qLower.includes('telugu');
          const isHindi = item.primaryGenreName?.includes('Bollywood') || qLower.includes('hindi');

          const trackObj = {{
            id: item.trackId,
            title: item.trackName,
            artist: item.artistName,
            album: item.collectionName || 'Single',
            cover: art,
            audioUrl: item.previewUrl,
            category: isTelugu ? 'telugu' : (isHindi ? 'hindi' : 'live'),
            duration: Math.round((item.trackTimeMillis || 30000) / 1000),
            isSpatial: true,
            colors: ["#fa243c", "#007aff", "#af52de"]
          }};

          playlist.push(trackObj);
          const idx = playlist.length - 1;
          searchTrackList.appendChild(createTrackRow(trackObj, idx));
        }});
      }}
    }} catch (e) {{
      searchSpinner.style.display = 'none';
    }}
  }}

  function renderDefaultSearchResults() {{
    searchTrackList.innerHTML = '';
    playlist.forEach((track, idx) => {{
      searchTrackList.appendChild(createTrackRow(track, idx));
    }});
  }}

  searchInput.addEventListener('input', () => {{
    const q = searchInput.value.trim();
    searchClearBtn.style.display = q ? 'flex' : 'none';
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {{
      performLiveSearch(q);
    }}, 300);
  }});

  searchClearBtn.addEventListener('click', () => {{
    searchInput.value = '';
    searchClearBtn.style.display = 'none';
    renderDefaultSearchResults();
  }});

  searchTags.forEach(tag => {{
    tag.addEventListener('click', () => {{
      searchTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      const q = tag.dataset.query;
      if (q === 'all') {{
        searchInput.value = '';
        renderDefaultSearchResults();
      }} else {{
        searchInput.value = q;
        searchClearBtn.style.display = 'flex';
        performLiveSearch(q);
      }}
    }});
  }});

  // Browse category card clicks
  document.querySelectorAll('.browse-cat-card').forEach(card => {{
    card.addEventListener('click', () => {{
      const filter = card.dataset.filter;
      document.querySelector('[data-tab="tab-search"]').click();
      searchInput.value = filter;
      searchClearBtn.style.display = 'flex';
      performLiveSearch(filter);
    }});
  }});

  // Custom File Import
  localMusicInput.addEventListener('change', (e) => {{
    const files = Array.from(e.target.files);
    if (!files.length) return;

    files.forEach((file, i) => {{
      const url = URL.createObjectURL(file);
      const nameParts = file.name.replace(/\\.[^/.]+$/, "").split(" - ");
      const artist = nameParts.length > 1 ? nameParts[0].trim() : "Local Audio";
      const title = nameParts.length > 1 ? nameParts[1].trim() : nameParts[0].trim();

      const newTrack = {{
        id: Date.now() + i,
        title: title,
        artist: artist,
        album: "iPhone Files",
        cover: "assets/covers/neon_horizon.jpg",
        audioUrl: url,
        category: "local",
        duration: 0,
        colors: ["#fa243c", "#007aff", "#af52de"],
        isSpatial: true
      }};

      playlist.unshift(newTrack);
    }});

    renderAll();
    loadTrack(0, true);
    document.querySelector('[data-tab="tab-library"]').click();
    showToast(`${{files.length}} song(s) imported!`);
  }});

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {{
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') {{
      e.preventDefault();
      togglePlayPause();
    }} else if (e.code === 'ArrowRight') {{
      audio.currentTime = Math.min(audio.currentTime + 5, audio.duration || 999);
    }} else if (e.code === 'ArrowLeft') {{
      audio.currentTime = Math.max(audio.currentTime - 5, 0);
    }}
  }});

  // Toast Helper
  let toastTimer = null;
  function showToast(msg) {{
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {{
      toast.classList.remove('show');
    }}, 2000);
  }}

  function formatTime(seconds) {{
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${{m}}:${{s < 10 ? '0' : ''}}${{s}}`;
  }}

  // Boot Application
  renderAll();
  renderDefaultSearchResults();
  loadTrack(0, false);
}});
"""

with open('js/app.js', 'w') as f:
    f.write(js_content)

print(f"Generated js/app.js successfully with {len(master_tracks)} tracks!")
