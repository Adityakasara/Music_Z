/**
 * Music Z — Apple Music Experience (Live Telugu & Hindi Hits + iTunes Engine)
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Preloaded Live Telugu, Hindi & Studio Hits ---
  const PRELOADED_TRACKS = [
    {
      id: 1761152593,
      title: "Chuttamalle (Devara)",
      artist: "Anirudh Ravichander, Shilpa Rao",
      album: "Devara Part 1",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f9/28/29/f92829b4-5473-17a9-879a-2efe96b8f95b/mzaf_4766756883763132198.plus.aac.p.m4a",
      category: "telugu",
      duration: 222,
      isSpatial: true,
      colors: ["#fa243c", "#7928ca", "#0070f3"],
      lyrics: [
        { time: 0.0, text: "Chuttamalle chuttukuntive..." },
        { time: 4.5, text: "Chupultho champestuntive..." },
        { time: 9.0, text: "Gundelona premale nimpesthive" },
        { time: 14.0, text: "Devara thalapu tho nindipothive" },
        { time: 19.5, text: "Anirudh beats rock the coast" },
        { time: 24.0, text: "Red sea whispers the warrior's ghost..." }
      ]
    },
    {
      id: 1748968097,
      title: "Sooseki (Pushpa 2)",
      artist: "Shreya Ghoshal & Chandrabose",
      album: "Pushpa 2 The Rule",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/45/b6/2d/45b62dd5-8ae8-05ce-d145-2ec3b87510b9/8903431001597_cover.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b0/81/bf/b081bf15-255d-8d74-5f3c-f0d6018895ed/mzaf_13394505028899957596.plus.aac.p.m4a",
      category: "telugu",
      duration: 260,
      isSpatial: true,
      colors: ["#ff9500", "#ff2d55", "#5c2483"],
      lyrics: [
        { time: 0.0, text: "Sooseki aggiravva laaga..." },
        { time: 4.8, text: "Pilla nuvvu soopisthe lokaale maare" },
        { time: 9.5, text: "Pushparaj rajyam shuru aindi" },
        { time: 15.0, text: "Allu Arjun fire on screen" },
        { time: 20.0, text: "Rule the world with red sanders gold..." }
      ]
    },
    {
      id: 1609924889,
      title: "Kalaavathi (SVP)",
      artist: "Sid Sriram & S.S. Thaman",
      album: "Sarkaru Vaari Paata",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dd/13/96/dd1396a1-fd23-693c-137a-b10047cc2b78/196626439680.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/47/2f/a0/472fa0e8-5643-6461-0653-56b87aa67fab/mzaf_17345742665182397098.plus.aac.p.m4a",
      category: "telugu",
      duration: 242,
      isSpatial: true,
      colors: ["#007aff", "#af52de", "#ff2d55"],
      lyrics: [
        { time: 0.0, text: "Vandhaa vaikuntalani..." },
        { time: 4.2, text: "Choosinatte vundhi ro" },
        { time: 8.8, text: "Kallu choosi kallu theristhe" },
        { time: 13.5, text: "Kalaavathi kalalo kooda ninnu vidavane" },
        { time: 18.0, text: "Sid Sriram soulful melody..." }
      ]
    },
    {
      id: 1721188759,
      title: "Samayama (Hi Nanna)",
      artist: "Anurag Kulkarni & Sithara",
      album: "Hi Nanna",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/64/4c/1d/644c1db5-68f8-0640-21e2-dd440f7290e7/8903431963253_cover.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/94/9c/a9/949ca9d4-d36e-5b77-bafa-2e5f7261423d/mzaf_3943643360697243799.plus.aac.p.m4a",
      category: "telugu",
      duration: 204,
      isSpatial: true,
      colors: ["#34c759", "#00c7be", "#007aff"],
      lyrics: [
        { time: 0.0, text: "Samayama samayama aagumaa..." },
        { time: 5.0, text: "Tholi saari premalo munigina velalo" },
        { time: 10.5, text: "Nani & Mrunal Thakur heart-touching moments" },
        { time: 16.0, text: "Every second with you is a blessing" }
      ]
    },
    {
      id: 1634839886,
      title: "Kesariya (Brahmāstra)",
      artist: "Pritam & Arijit Singh",
      album: "Brahmāstra",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ca/84/c4/ca84c4a4-44df-9112-9c1c-a55152eb0393/8902894360341_cover.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/58/b0/b2/58b0b2e8-d4c8-3c3e-f6bb-ca072fe41b31/mzaf_6382029519199347895.plus.aac.p.m4a",
      category: "hindi",
      duration: 268,
      isSpatial: true,
      colors: ["#ff9500", "#ff2d55", "#ffd60a"],
      lyrics: [
        { time: 0.0, text: "Kesariya tera ishq hai piya..." },
        { time: 5.0, text: "Rang jaaun jo main haath lagaun" },
        { time: 10.2, text: "Din beete saara teri fikr mein" },
        { time: 15.5, text: "Rain saari teri khair manaun" },
        { time: 20.0, text: "Arijit Singh magic in the air..." }
      ]
    },
    {
      id: 1705886367,
      title: "Chaleya (Jawan)",
      artist: "Anirudh Ravichander & Arijit Singh",
      album: "Jawan",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/71/8d/68/718d6896-1875-c546-f947-fcfbe4744ae0/8903431952226_cover.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/21/2e/8e/212e8e7c-ce73-518d-fcbe-7d04a60037a5/mzaf_13511739958043681424.plus.aac.p.m4a",
      category: "hindi",
      duration: 200,
      isSpatial: true,
      colors: ["#fa243c", "#af52de", "#007aff"],
      lyrics: [
        { time: 0.0, text: "Ishq mein dil bana hai, ishq mein dil fana hai..." },
        { time: 5.2, text: "Chaleya teri ore chaleya" },
        { time: 10.5, text: "Shah Rukh Khan & Nayanthara romance" },
        { time: 16.0, text: "Groovy beats with breezy acoustic guitars" }
      ]
    },
    {
      id: 1650893041,
      title: "Apna Bana Le",
      artist: "Arijit Singh & Sachin-Jigar",
      album: "Bhediya",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/72/7a/ff/727aff1c-b26a-93a9-9fc6-9486c73df569/8902894361546_cover.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/d9/b4/2d/d9b42d72-46bb-9f20-b4d2-fdfcae00a394/mzaf_16198889417933924767.plus.aac.p.m4a",
      category: "hindi",
      duration: 261,
      isSpatial: true,
      colors: ["#af52de", "#5856d6", "#ff2d55"],
      lyrics: [
        { time: 0.0, text: "Tu mera koi na hoke bhi kuch laage..." },
        { time: 5.0, text: "Kiya re jo bhi toone kaise kiya re" },
        { time: 10.2, text: "Jiya ko mere baandh aise liya re" },
        { time: 15.5, text: "Apna bana le piya, apna bana le piya..." }
      ]
    },
    {
      id: 635179213,
      title: "Tum Hi Ho",
      artist: "Mithoon & Arijit Singh",
      album: "Aashiqui 2",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/ef/c7/2befc726-d62f-7629-5f2d-888e22d9ea1d/8901854005086.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/cf/a5/05cfa597-94e8-8a90-7c22-26cf287ecff4/mzaf_4116035038318854817.plus.aac.p.m4a",
      category: "hindi",
      duration: 262,
      isSpatial: true,
      colors: ["#007aff", "#5856d6", "#1c1c1e"],
      lyrics: [
        { time: 0.0, text: "Hum tere bin ab reh nahi sakte..." },
        { time: 5.5, text: "Tere bina kya wajood mera" },
        { time: 11.0, text: "Kyunki tum hi ho, ab tum hi ho" },
        { time: 16.5, text: "Zindagi ab tum hi ho..." },
        { time: 22.0, text: "Chain bhi mera dard bhi, meri aashiqui ab tum hi ho" }
      ]
    },
    {
      id: 1718130836,
      title: "Pehle Bhi Main",
      artist: "Vishal Mishra & Raj Shekhar",
      album: "Animal",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a3/9b/a0/a39ba050-cbe6-96b6-a511-9659b72a6b22/8902894366626_cover.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/23/94/ba/2394ba05-a868-b7eb-ba68-45a909be0d10/mzaf_10018868673752601264.plus.aac.p.m4a",
      category: "hindi",
      duration: 250,
      isSpatial: true,
      colors: ["#fa243c", "#3a3a3c", "#ffd60a"],
      lyrics: [
        { time: 0.0, text: "Pehle bhi main tumse mila hoon..." },
        { time: 5.0, text: "Pehli dafa hi milke laga" },
        { time: 10.0, text: "Tune chhua zakhmon ko mere" },
        { time: 15.0, text: "Marham sa dono hathon pe laga..." }
      ]
    },
    {
      id: 1718130834,
      title: "Satranga",
      artist: "Arijit Singh, Shreyas Puranik",
      album: "Animal",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a3/9b/a0/a39ba050-cbe6-96b6-a511-9659b72a6b22/8902894366626_cover.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1f/ee/7e/1fee7e8a-e9fa-a58f-2875-5fbe6089d71c/mzaf_12411037746416173007.plus.aac.p.m4a",
      category: "hindi",
      duration: 271,
      isSpatial: true,
      colors: ["#ff9500", "#fa243c", "#5856d6"],
      lyrics: [
        { time: 0.0, text: "Aadha ishq aadha hai aasmaan..." },
        { time: 5.0, text: "Satranga bikhra sa dil ka jahaan" },
        { time: 10.0, text: "Tere ishq mein dhoondha khuda..." }
      ]
    },
    {
      id: 1500000001,
      title: "Ramuloo Ramulaa",
      artist: "Anurag Kulkarni & Mangli",
      album: "Ala Vaikunthapurramuloo",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c6/8e/3c/c68e3c4e-4f1d-dc2e-5a50-61d0d935e40d/8903431767660_cover.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/f4/f7/a9/f4f7a937-fc2a-3e15-8499-19ec024c3114/mzaf_17290940562235924773.plus.aac.p.m4a",
      category: "telugu",
      duration: 258,
      isSpatial: true,
      colors: ["#ffd60a", "#ff9500", "#fa243c"],
      lyrics: [
        { time: 0.0, text: "Ramuloo Ramulaa nannagadha rammulaa..." },
        { time: 5.0, text: "Thaman S party mass celebration" },
        { time: 10.0, text: "Allu Arjun iconic step" }
      ]
    },
    {
      id: 1500000002,
      title: "Butta Bomma",
      artist: "Armaan Malik & S.S. Thaman",
      album: "Ala Vaikunthapurramuloo",
      cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c6/8e/3c/c68e3c4e-4f1d-dc2e-5a50-61d0d935e40d/8903431767660_cover.jpg/600x600bb.jpg",
      audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/ce/6b/df/ce6bdf8a-c852-518a-f5bb-3b7cce4beba8/mzaf_11306354316279402120.plus.aac.p.m4a",
      category: "telugu",
      duration: 198,
      isSpatial: true,
      colors: ["#ff2d55", "#ff9500", "#ff375f"],
      lyrics: [
        { time: 0.0, text: "Inkem inkem inkem kaavaale..." },
        { time: 4.8, text: "Butta Bomma Butta Bomma nannu suthukuntive..." },
        { time: 10.0, text: "Sensational viral chartbuster worldwide" }
      ]
    },
    {
      id: 9991,
      title: "Neon Horizon",
      artist: "Synthwave Dreams",
      album: "Neon Horizon",
      cover: "assets/covers/neon_horizon.jpg",
      audioUrl: "assets/audio/neon_horizon.wav",
      category: "lofi",
      duration: 35,
      colors: ["#fa243c", "#7928ca", "#0070f3"],
      lyrics: [
        { time: 0, text: "Neon lights reflecting on the boulevard" },
        { time: 4.2, text: "Midnight city cruising under shooting stars" },
        { time: 8.5, text: "Bassline pulsing deep inside the night" },
        { time: 13.0, text: "Synthesizers taking flight" }
      ]
    },
    {
      id: 9992,
      title: "Midnight Session",
      artist: "Tokyo Rain",
      album: "Midnight Session",
      cover: "assets/covers/midnight_chill.jpg",
      audioUrl: "assets/audio/midnight_session.wav",
      category: "lofi",
      duration: 35,
      colors: ["#ff9500", "#ff2d55", "#5c2483"],
      lyrics: [
        { time: 0, text: "Rain falling softly against the glass" },
        { time: 4.5, text: "Warm cup of coffee as minutes pass" }
      ]
    }
  ];

  // State
  let playlist = [...PRELOADED_TRACKS];
  let currentTrackIndex = 0;
  let isPlaying = false;
  let isShuffle = false;
  let isRepeat = false;
  let favorites = new Set(JSON.parse(localStorage.getItem('music_z_favs') || '[]'));
  let isLyricsMode = false;
  let airplayDevices = ["iPhone Speaker", "AirPods Pro", "Living Room HomePod", "CarPlay"];
  let airplayIndex = 0;
  let currentFilter = 'all';

  // Audio & DOM Elements
  const audio = document.getElementById('native-audio');
  
  // Navigation
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

  // Playback Controls
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

  // Lyrics, Airplay & Queue
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
  const searchSpinner = document.getElementById('search-spinner');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const searchTrackList = document.getElementById('search-track-list');
  const searchTags = document.querySelectorAll('.search-tag');
  const localMusicInput = document.getElementById('local-music-input');
  const langPills = document.querySelectorAll('.lang-pill');

  // Web Audio Context
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

  // Fluid Mesh Animation Blobs
  let blobs = [
    { x: 0.3, y: 0.2, vx: 0.0012, vy: 0.0016, r: 0.45 },
    { x: 0.7, y: 0.3, vx: -0.0014, vy: 0.0011, r: 0.5 },
    { x: 0.4, y: 0.8, vx: 0.0015, vy: -0.0013, r: 0.42 },
    { x: 0.8, y: 0.7, vx: -0.0011, vy: -0.0015, r: 0.38 }
  ];
  let currentColors = ["#fa243c", "#7928ca", "#0070f3"];
  let targetColors = ["#fa243c", "#7928ca", "#0070f3"];

  function resizeCanvases() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ambientCanvas.width = w / 2;
    ambientCanvas.height = h / 2;
    sheetAmbientCanvas.width = w / 2;
    sheetAmbientCanvas.height = h / 2;

    const dpr = window.devicePixelRatio || 1;
    visualizerCanvas.width = visualizerCanvas.offsetWidth * dpr;
    visualizerCanvas.height = visualizerCanvas.offsetHeight * dpr;
  }
  window.addEventListener('resize', resizeCanvases);
  resizeCanvases();

  function animateLiquidMesh() {
    for (let c = 0; c < 3; c++) {
      currentColors[c] = targetColors[c];
    }
    const w = ambientCanvas.width;
    const h = ambientCanvas.height;

    [ambientCtx, sheetAmbientCtx].forEach(ctx => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#06060a';
      ctx.fillRect(0, 0, w, h);

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

  // Web Audio Context
  function initAudioContext() {
    if (isWebAudioInitialized) return;
    try {
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
    } catch (e) {
      console.warn("Web Audio API:", e);
    }
  }

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
      grad.addColorStop(0, 'rgba(250, 36, 60, 0.95)');
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

    updateFavButton();
    renderLyrics(track.lyrics);

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
      console.warn("Autoplay:", err);
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

  // --- Audio Events ---
  audio.addEventListener('timeupdate', () => {
    const cur = audio.currentTime;
    const dur = audio.duration || playlist[currentTrackIndex]?.duration || 1;
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

  seekSlider.addEventListener('input', (e) => {
    const dur = audio.duration || playlist[currentTrackIndex]?.duration || 1;
    const target = (e.target.value / 100) * dur;
    audio.currentTime = target;
    seekFill.style.width = `${e.target.value}%`;
  });

  volumeSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    audio.volume = val;
    volumeFill.style.width = `${val * 100}%`;
  });
  volumeFill.style.width = `${volumeSlider.value * 100}%`;

  // Controls
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

  // Modal Sheet Animations
  miniExpandTrigger.addEventListener('click', () => {
    sheet.classList.add('expanded');
  });

  sheetDismissBtn.addEventListener('click', () => {
    sheet.classList.remove('expanded');
  });

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

  // Lyrics View
  function renderLyrics(lyrics) {
    lyricsScrollWrapper.innerHTML = '';
    if (!lyrics || lyrics.length === 0) {
      lyricsScrollWrapper.innerHTML = `
        <div class="lyric-line active" style="margin-top:60px; text-align:center;">
          ${playlist[currentTrackIndex].title}<br>
          <span style="font-size:16px; opacity:0.6;">Apple Music Lossless Audio</span>
        </div>
      `;
      return;
    }

    lyrics.forEach((item, index) => {
      const line = document.createElement('div');
      line.className = 'lyric-line';
      line.textContent = item.text;
      line.dataset.time = item.time;

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

  btnAirplay.addEventListener('click', () => {
    airplayIndex = (airplayIndex + 1) % airplayDevices.length;
    airplayLabel.textContent = airplayDevices[airplayIndex];
  });

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
      queueListContainer.appendChild(createTrackRow(track, index));
    });
  }

  // Equalizer
  btnEqToggle.addEventListener('click', () => {
    eqSubmodal.classList.add('open');
  });
  btnCloseEq.addEventListener('click', () => {
    eqSubmodal.classList.remove('open');
  });

  spatialSwitch.addEventListener('change', (e) => {
    document.getElementById('spatial-indicator').style.display = e.target.checked ? 'inline-block' : 'none';
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
    if (preset === 'bass') {
      bassFilter.gain.value = 8; midFilter.gain.value = 0; trebleFilter.gain.value = 1;
    } else if (preset === 'vocal') {
      bassFilter.gain.value = -2; midFilter.gain.value = 6; trebleFilter.gain.value = 3;
    } else if (preset === 'electronic') {
      bassFilter.gain.value = 7; midFilter.gain.value = -2; trebleFilter.gain.value = 6;
    } else if (preset === 'acoustic') {
      bassFilter.gain.value = 3; midFilter.gain.value = 3; trebleFilter.gain.value = 4;
    } else if (preset === 'treble') {
      bassFilter.gain.value = -4; midFilter.gain.value = 1; trebleFilter.gain.value = 8;
    } else {
      bassFilter.gain.value = 0; midFilter.gain.value = 0; trebleFilter.gain.value = 0;
    }
  }

  // Favorites
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

  // Tab Navigation
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

  document.getElementById('btn-play-radio-1').addEventListener('click', () => {
    loadTrack(0, true);
  });

  // --- Render Functions ---
  function renderAll() {
    renderHeroCarousel();
    renderLanguageSections();
    renderHeavyRotation();
    renderBrowseTracks();
    renderRadioStations();
    renderLibraryTracks();
  }

  function renderHeroCarousel() {
    const carousel = document.getElementById('hero-carousel');
    carousel.innerHTML = '';

    // Take first 3 tracks
    const heroTracks = playlist.slice(0, 3);
    heroTracks.forEach((track, idx) => {
      const card = document.createElement('div');
      card.className = 'hero-card';
      card.innerHTML = `
        <div class="hero-card-art-wrap">
          <img src="${track.cover}" alt="${track.title}" class="hero-art-img">
          <div class="hero-glass-badge">${track.category.toUpperCase()} HIT</div>
        </div>
        <div class="hero-meta">
          <span class="hero-subtitle">NOW TRENDING • ${track.artist.toUpperCase()}</span>
          <h2 class="hero-title">${track.title}</h2>
          <p class="hero-desc">${track.album} • Streamed in Apple Lossless</p>
          <button class="hero-play-pill-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Play</span>
          </button>
        </div>
      `;
      card.querySelector('.hero-play-pill-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        loadTrack(idx, true);
      });
      card.addEventListener('click', () => {
        loadTrack(idx, true);
      });
      carousel.appendChild(card);
    });
  }

  function renderLanguageSections() {
    const teluguRow = document.getElementById('telugu-row');
    const hindiRow = document.getElementById('hindi-row');
    teluguRow.innerHTML = '';
    hindiRow.innerHTML = '';

    playlist.filter(t => t.category === 'telugu').forEach(track => {
      const idx = playlist.indexOf(track);
      teluguRow.appendChild(createCard(track, idx));
    });

    playlist.filter(t => t.category === 'hindi').forEach(track => {
      const idx = playlist.indexOf(track);
      hindiRow.appendChild(createCard(track, idx));
    });
  }

  function renderHeavyRotation() {
    const heavyGrid = document.getElementById('heavy-rotation-grid');
    heavyGrid.innerHTML = '';
    playlist.slice(0, 8).forEach(track => {
      const idx = playlist.indexOf(track);
      heavyGrid.appendChild(createCard(track, idx));
    });
  }

  function renderBrowseTracks() {
    const browseList = document.getElementById('browse-track-list');
    browseList.innerHTML = '';
    playlist.slice(0, 10).forEach(track => {
      const idx = playlist.indexOf(track);
      browseList.appendChild(createTrackRow(track, idx));
    });
  }

  function renderRadioStations() {
    const radioRow = document.getElementById('radio-stations-row');
    radioRow.innerHTML = '';
    playlist.slice(0, 6).forEach(track => {
      const idx = playlist.indexOf(track);
      radioRow.appendChild(createCard(track, idx));
    });
  }

  function createCard(track, index) {
    const card = document.createElement('div');
    card.className = 'track-card';
    card.innerHTML = `
      <div class="card-art-box">
        <img src="${track.cover}" alt="${track.title}" class="card-art-img" loading="lazy">
        <span class="card-lang-tag">${track.category || 'Hit'}</span>
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
    
    let langBadge = '';
    if (track.category === 'telugu') {
      langBadge = '<span class="telugu-tag-tiny">TELUGU</span>';
    } else if (track.category === 'hindi') {
      langBadge = '<span class="hindi-tag-tiny">HINDI</span>';
    }

    row.innerHTML = `
      <div class="track-row-art">
        <img src="${track.cover}" alt="${track.title}" loading="lazy">
      </div>
      <div class="track-row-info">
        <div class="track-row-title">${track.title}</div>
        <div class="track-row-meta">
          <span>${track.artist}</span>
          ${langBadge}
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
    } else if (filter === 'telugu') {
      filtered = playlist.filter(t => t.category === 'telugu');
    } else if (filter === 'hindi') {
      filtered = playlist.filter(t => t.category === 'hindi');
    }

    if (filtered.length === 0) {
      libList.innerHTML = '<div style="padding:24px; text-align:center; color:rgba(255,255,255,0.4);">No songs in this view yet.</div>';
      return;
    }

    filtered.forEach((track) => {
      const idx = playlist.indexOf(track);
      libList.appendChild(createTrackRow(track, idx));
    });
  }

  // Language Filter Pills Click
  langPills.forEach(pill => {
    pill.addEventListener('click', () => {
      langPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const lang = pill.dataset.lang;
      currentFilter = lang;

      const secTelugu = document.getElementById('section-telugu-block');
      const secHindi = document.getElementById('section-hindi-block');

      if (lang === 'telugu') {
        secTelugu.style.display = 'block';
        secHindi.style.display = 'none';
      } else if (lang === 'hindi') {
        secTelugu.style.display = 'none';
        secHindi.style.display = 'block';
      } else {
        secTelugu.style.display = 'block';
        secHindi.style.display = 'block';
      }
    });
  });

  // Library links
  document.querySelectorAll('.library-row-item').forEach(item => {
    item.addEventListener('click', () => {
      renderLibraryTracks(item.dataset.libFilter);
    });
  });

  // --- LIVE ITUNES API SEARCH (Telugu & Hindi Hits) ---
  let searchDebounceTimer = null;

  async function performLiveSearch(query) {
    if (!query) {
      renderDefaultSearchResults();
      return;
    }

    searchSpinner.style.display = 'inline-block';

    try {
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=25`;
      const response = await fetch(url);
      const data = await response.json();
      
      searchSpinner.style.display = 'none';
      searchTrackList.innerHTML = '';

      if (!data.results || data.results.length === 0) {
        searchTrackList.innerHTML = `<div style="padding:32px; text-align:center; color:rgba(255,255,255,0.4);">No live tracks found for "${query}".</div>`;
        return;
      }

      data.results.forEach(item => {
        if (!item.previewUrl) return;

        const art = (item.artworkUrl100 || '').replace('100x100bb', '600x600bb');
        const isTelugu = item.primaryGenreName?.includes('Telugu') || query.toLowerCase().includes('telugu') || /devara|pushpa|kushi|hi nanna/i.test(item.trackName);
        const isHindi = item.primaryGenreName?.includes('Bollywood') || query.toLowerCase().includes('hindi') || /arijit|animal|brahmastra|jawan/i.test(item.trackName);

        const trackObj = {
          id: item.trackId,
          title: item.trackName,
          artist: item.artistName,
          album: item.collectionName || 'Single',
          cover: art,
          audioUrl: item.previewUrl,
          category: isTelugu ? 'telugu' : (isHindi ? 'hindi' : 'live'),
          duration: Math.round((item.trackTimeMillis || 30000) / 1000),
          isSpatial: true,
          colors: isTelugu ? ["#fa243c", "#ff9500", "#7928ca"] : ["#af52de", "#007aff", "#fa243c"],
          lyrics: [
            { time: 0, text: item.trackName },
            { time: 5, text: `By ${item.artistName}` },
            { time: 10, text: `From ${item.collectionName || 'Single'}` },
            { time: 15, text: "Streaming live with Apple Lossless quality" }
          ]
        };

        // Add to main playlist if not already there
        if (!playlist.some(p => p.id === trackObj.id)) {
          playlist.push(trackObj);
        }

        const idx = playlist.findIndex(p => p.id === trackObj.id);
        searchTrackList.appendChild(createTrackRow(trackObj, idx));
      });

    } catch (e) {
      console.warn("Live iTunes Search Error:", e);
      searchSpinner.style.display = 'none';
      searchTrackList.innerHTML = `<div style="padding:32px; text-align:center; color:rgba(255,255,255,0.4);">Connection error. Showing offline library tracks.</div>`;
    }
  }

  function renderDefaultSearchResults() {
    searchTrackList.innerHTML = '';
    playlist.forEach((track, idx) => {
      searchTrackList.appendChild(createTrackRow(track, idx));
    });
  }

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim();
    searchClearBtn.style.display = q ? 'flex' : 'none';
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      performLiveSearch(q);
    }, 350);
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchClearBtn.style.display = 'none';
    renderDefaultSearchResults();
  });

  searchTags.forEach(tag => {
    tag.addEventListener('click', () => {
      searchTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      const q = tag.dataset.query;
      if (q === 'all') {
        searchInput.value = '';
        renderDefaultSearchResults();
      } else {
        searchInput.value = q;
        searchClearBtn.style.display = 'flex';
        performLiveSearch(q);
      }
    });
  });

  // Browse category cards click
  document.querySelectorAll('.browse-cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.filter;
      document.querySelector('[data-tab="tab-search"]').click();
      if (cat === 'telugu') {
        searchInput.value = 'Telugu Hits';
        performLiveSearch('telugu hits');
      } else if (cat === 'hindi') {
        searchInput.value = 'Bollywood Hits';
        performLiveSearch('bollywood hits');
      }
    });
  });

  // Custom File Import
  localMusicInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    files.forEach((file, i) => {
      const url = URL.createObjectURL(file);
      const nameParts = file.name.replace(/\.[^/.]+$/, "").split(" - ");
      const artist = nameParts.length > 1 ? nameParts[0].trim() : "Local Audio";
      const title = nameParts.length > 1 ? nameParts[1].trim() : nameParts[0].trim();

      const newTrack = {
        id: Date.now() + i,
        title: title,
        artist: artist,
        album: "Imported Files",
        cover: "assets/covers/neon_horizon.jpg",
        audioUrl: url,
        category: "local",
        duration: 0,
        colors: ["#fa243c", "#007aff", "#af52de"],
        isSpatial: true
      };

      playlist.unshift(newTrack);
    });

    renderAll();
    loadTrack(0, true);
    document.querySelector('[data-tab="tab-library"]').click();
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') {
      e.preventDefault();
      togglePlayPause();
    } else if (e.code === 'ArrowRight') {
      audio.currentTime = Math.min(audio.currentTime + 5, audio.duration || 999);
    } else if (e.code === 'ArrowLeft') {
      audio.currentTime = Math.max(audio.currentTime - 5, 0);
    }
  });

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Boot
  renderAll();
  renderDefaultSearchResults();
  loadTrack(0, false);
});
