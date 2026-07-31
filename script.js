/**
 * ==========================================================================
 * HAPPY GIRLFRIEND'S DAY — INTERACTIVE SCRIPT
 * Personalization Config, Ambient Particle Engine, Dodging No Button,
 * Vinyl Audio Engine, Envelope Animations, Keepsake Canvas & Easter Egg
 * ==========================================================================
 */

/* --------------------------------------------------------------------------
   1. PERSONALIZATION CONFIG
   Change these values to personalize your surprise website!
   -------------------------------------------------------------------------- */
const CONFIG = {
  herName: "Shreya",               // Name shown in titles and letters
  yourName: "Tejas",           // Your name for letter signatures
  relationshipStartDate: "2025-01-26T13:50:00", // Start date: 26/01/2025 1:50 PM
  specialDate: "2026-08-15",         // Optional anniversary/countdown date
};

/* --------------------------------------------------------------------------
   2. PLAYLIST & ROMANTIC NOTES DATA
   -------------------------------------------------------------------------- */
const PLAYLIST = [
  {
    id: 1,
    title: "Tere Siwa Main Jaaun Kahan",
    artist: "Arijit Singh",
    youtubeId: "9gMAlRHWfhw",
    fallbackId: "k8M_j9DqK4Y",
    note: "You are my peace. No matter where life takes me, my heart always finds its way back to you. ❤️",
    coverUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ff758f'/%3E%3Cstop offset='100%25' stop-color='%23e63956'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g1)'/%3E%3Ccircle cx='100' cy='100' r='50' fill='none' stroke='%23ffffff' stroke-width='4' opacity='0.5'/%3E%3Cpath d='M100 65 Q115 50 130 65 Q145 80 100 125 Q55 80 70 65 Q85 50 100 65 Z' fill='%23ffffff'/%3E%3C/svg%3E"
  },
  {
    id: 2,
    title: "Apna Bana Le",
    artist: "Arijit Singh, Sachin-Jigar",
    youtubeId: "ElZfdU54Cp8",
    fallbackId: "uN99uEchIic",
    note: "If destiny ever asked me to choose again, I would still choose you, every single lifetime. ✨",
    coverUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23d4af37'/%3E%3Cstop offset='100%25' stop-color='%23e63956'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g2)'/%3E%3Ccircle cx='100' cy='100' r='60' fill='none' stroke='%23ffffff' stroke-width='2' opacity='0.6'/%3E%3Cpath d='M100 60 Q120 40 140 60 Q160 80 100 135 Q40 80 60 60 Q80 40 100 60 Z' fill='%23ffffff'/%3E%3C/svg%3E"
  },
  {
    id: 3,
    title: "Tum Se Hi",
    artist: "Mohit Chauhan, Pritam",
    youtubeId: "mt9xg0mmt28",
    fallbackId: "cbT63EAt88M",
    note: "You unknowingly became my home, my comfort, my happiest place. 🏡",
    coverUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ff85a1'/%3E%3Cstop offset='100%25' stop-color='%232b1120'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g3)'/%3E%3Cpath d='M100 65 Q115 50 130 65 Q145 80 100 125 Q55 80 70 65 Q85 50 100 65 Z' fill='%23ff85a1'/%3E%3C/svg%3E"
  },
  {
    id: 4,
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal, Asees Kaur",
    youtubeId: "gvyUuxdRdR4",
    fallbackId: "wR8S8tT_E7U",
    note: "Every day feels incomplete until I hear your voice. 🌙",
    coverUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232a1836'/%3E%3Cstop offset='100%25' stop-color='%23ff758f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g4)'/%3E%3Cpolygon points='100,40 115,80 155,80 122,105 135,145 100,120 65,145 78,105 45,80 85,80' fill='%23d4af37'/%3E%3C/svg%3E"
  },
  {
    id: 5,
    title: "Kesariya",
    artist: "Arijit Singh, Pritam",
    youtubeId: "BddP6PYo2gs",
    fallbackId: "7fF8M1sH4c8",
    note: "My world became colorful the day you entered my life. 🌺",
    coverUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ff9a3c'/%3E%3Cstop offset='100%25' stop-color='%23e63956'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g5)'/%3E%3Ccircle cx='100' cy='100' r='45' fill='%23ffffff' opacity='0.3'/%3E%3Cpath d='M100 65 Q115 50 130 65 Q145 80 100 125 Q55 80 70 65 Q85 50 100 65 Z' fill='%23ffffff'/%3E%3C/svg%3E"
  },
  {
    id: 6,
    title: "Sajni",
    artist: "Arijit Singh, Ram Sampath",
    youtubeId: "k3g_WjLCsXM",
    fallbackId: "P-aA6U3D0K8",
    note: "If loving you is a dream, I never want to wake up. 💫",
    coverUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23e63956'/%3E%3Cstop offset='100%25' stop-color='%23d4af37'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23g6)'/%3E%3Cpath d='M100 55 Q125 35 150 55 Q175 75 100 145 Q25 75 50 55 Q75 35 100 55 Z' fill='%23ffffff'/%3E%3C/svg%3E"
  }
];

/* --------------------------------------------------------------------------
   3. APP STATE & GLOBAL VARIABLES
   -------------------------------------------------------------------------- */
let currentTrackIndex = 0;
let isPlaying = false;
let isMuted = false;
let ytPlayer = null;
let ytPlayerReady = false;
let progressInterval = null;
let dodgeCount = 0;
let isNightMode = false;

// Playful messages pool for dodging No button
const NO_BTN_MESSAGES = [
  "Are you sure? 🥺",
  "Wrong answer! 😝",
  `Think again ${CONFIG.herName}! ❤️`,
  "Nice try! 😜",
  "You can't click me! 💘",
  "No is not an option! 🥰",
  "Try the YES button! 💖",
  "Still dodging! 💨"
];

/* --------------------------------------------------------------------------
   4. DOM INITIALIZATION & DYNAMIC CONFIG INJECTION
   -------------------------------------------------------------------------- */
function initApp() {
  const safeRun = (fn, name) => {
    try {
      fn();
    } catch (e) {
      console.error(`Error initializing ${name}:`, e);
    }
  };

  safeRun(injectConfigText, "Config");
  safeRun(initLoader, "Loader");
  safeRun(initAmbientCanvas, "AmbientCanvas");
  safeRun(initCursorTrail, "CursorTrail");
  safeRun(initDodgingNoBtn, "DodgingNoBtn");
  safeRun(initProposalYesBtn, "ProposalYesBtn");
  safeRun(initEnvelopes, "Envelopes");
  safeRun(initAudioPlayer, "AudioPlayer");
  safeRun(initLiveCounter, "LiveCounter");
  safeRun(initFlipCards, "FlipCards");
  safeRun(initScrollRevealAndDots, "ScrollRevealAndDots");
  safeRun(initDayNightToggle, "DayNightToggle");
  safeRun(initMuteToggle, "MuteToggle");
  safeRun(initKeepsakeGenerator, "KeepsakeGenerator");
  safeRun(initEasterEgg, "EasterEgg");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Substitutes CONFIG.herName and CONFIG.yourName across all marked HTML elements
function injectConfigText() {
  document.querySelectorAll(".her-name").forEach(el => {
    el.textContent = CONFIG.herName;
  });
  document.querySelectorAll(".your-name").forEach(el => {
    el.textContent = CONFIG.yourName;
  });
}

/* --------------------------------------------------------------------------
   5. SECTION 0 — LOADER ENGINE
   -------------------------------------------------------------------------- */
function initLoader() {
  const loaderSection = document.getElementById("loader-section");
  const loaderBarFill = document.querySelector(".loader-bar-fill");
  const loaderText = document.querySelector(".loader-text");

  if (!loaderSection) return;

  const messages = [
    "Wrapping up something special…",
    "Gathering romantic melodies…",
    `Preparing surprises for ${CONFIG.herName}…`,
    "Almost ready…"
  ];

  let progress = 0;
  let msgIdx = 0;

  const hideLoader = () => {
    loaderSection.classList.add("hidden");
    setTimeout(() => {
      loaderSection.style.display = "none";
      loaderSection.style.pointerEvents = "none";
    }, 500);
  };

  // Hard safety fallback: Ensure loader is hidden even if interval stalls
  const safetyTimeout = setTimeout(hideLoader, 2200);

  const interval = setInterval(() => {
    progress += 25;
    if (loaderBarFill) loaderBarFill.style.width = `${progress}%`;
    if (loaderText) loaderText.textContent = messages[msgIdx];
    msgIdx = (msgIdx + 1) % messages.length;

    if (progress >= 100) {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
      setTimeout(hideLoader, 300);
    }
  }, 350);
}

/* --------------------------------------------------------------------------
   6. AMBIENT BACKGROUND PARTICLE ENGINE (Hearts, Sparkles, Fireflies)
   -------------------------------------------------------------------------- */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle limit based on screen size
  const maxParticles = width < 768 ? 22 : 45;
  const particles = [];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 50;
      this.size = Math.random() * 14 + 8;
      this.speedY = Math.random() * 1.2 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.type = Math.random() > 0.4 ? "heart" : isNightMode ? "firefly" : "sparkle";
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;
      this.rotation += this.rotSpeed;

      if (this.y < -30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;

      if (this.type === "heart") {
        ctx.fillStyle = isNightMode ? "#ff758f" : "#e63956";
        ctx.beginPath();
        const topCurveHeight = this.size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(0, 0, -this.size / 2, 0, -this.size / 2, topCurveHeight);
        ctx.bezierCurveTo(-this.size / 2, (this.size + topCurveHeight) / 2, 0, this.size, 0, this.size);
        ctx.bezierCurveTo(0, this.size, this.size / 2, (this.size + topCurveHeight) / 2, this.size / 2, topCurveHeight);
        ctx.bezierCurveTo(this.size / 2, 0, 0, 0, 0, topCurveHeight);
        ctx.closePath();
        ctx.fill();
      } else if (this.type === "firefly") {
        ctx.fillStyle = "#e2b857";
        ctx.shadowColor = "#e2b857";
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = "#d4af37";
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  let animationFrameId;
  let isTabActive = true;

  document.addEventListener("visibilitychange", () => {
    isTabActive = !document.hidden;
  });

  function animate() {
    if (isTabActive) {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

/* --------------------------------------------------------------------------
   7. CURSOR TRAIL (Desktop fine pointer devices only)
   -------------------------------------------------------------------------- */
function initCursorTrail() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const container = document.getElementById("cursor-trail-container");
  if (!container) return;

  let lastX = 0;
  let lastY = 0;

  window.addEventListener("mousemove", (e) => {
    const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
    if (dist < 25) return; // limit density
    lastX = e.clientX;
    lastY = e.clientY;

    const particle = document.createElement("div");
    particle.className = "cursor-particle";
    particle.textContent = Math.random() > 0.5 ? "💖" : "✨";
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  });
}

/* --------------------------------------------------------------------------
   8. SECTION 1 — DODGING NO BUTTON
   -------------------------------------------------------------------------- */
function initDodgingNoBtn() {
  const noBtn = document.getElementById("no-btn");
  const card = document.querySelector(".proposal-card");
  const tooltip = document.getElementById("no-btn-tooltip");

  if (!noBtn || !card) return;

  function dodge() {
    dodgeCount++;
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculate safe boundaries inside the proposal card
    const maxX = cardRect.width - btnRect.width - 40;
    const maxY = cardRect.height - btnRect.height - 40;

    const newX = Math.max(20, Math.floor(Math.random() * maxX)) - (cardRect.width / 2 - btnRect.width / 2);
    const newY = Math.max(20, Math.floor(Math.random() * maxY)) - (cardRect.height / 2 - btnRect.height / 2);

    const randomRot = (Math.random() - 0.5) * 30;
    const scaleFactor = Math.max(0.5, 1 - dodgeCount * 0.05);

    noBtn.style.transform = `translate(${newX}px, ${newY}px) rotate(${randomRot}deg) scale(${scaleFactor})`;

    // Show random playful message tooltip
    if (tooltip) {
      const msg = NO_BTN_MESSAGES[dodgeCount % NO_BTN_MESSAGES.length];
      tooltip.textContent = msg;
      tooltip.classList.add("active");
      setTimeout(() => {
        tooltip.classList.remove("active");
      }, 1500);
    }
  }

  // Trigger dodge on cursor hover, mousemove proximity, or mobile touch
  noBtn.addEventListener("mouseenter", dodge);
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    dodge();
  });

  window.addEventListener("mousemove", (e) => {
    const cardRect = card.getBoundingClientRect();
    if (cardRect.bottom < 0 || cardRect.top > window.innerHeight) return;

    const btnRect = noBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

    if (dist < 80) {
      dodge();
    }
  });
}

/* --------------------------------------------------------------------------
   9. PROPOSAL YES BUTTON & HEART CONFETTI EXPLOSION
   -------------------------------------------------------------------------- */
function initProposalYesBtn() {
  const yesBtn = document.getElementById("yes-btn");
  if (!yesBtn) return;

  yesBtn.addEventListener("click", () => {
    triggerConfettiExplosion();
    startAudioPlayer(); // initialize audio context and play track 1

    // Scroll smoothly to Envelope Section
    setTimeout(() => {
      const envelopeSec = document.getElementById("envelope-section");
      if (envelopeSec) {
        envelopeSec.scrollIntoView({ behavior: "smooth" });
      }
    }, 1200);
  });
}

function triggerConfettiExplosion() {
  const container = document.body;
  const colors = ["#ff758f", "#e63956", "#d4af37", "#ffffff", "#ff85a1"];

  for (let i = 0; i < 60; i++) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.left = "50vw";
    particle.style.top = "50vh";
    particle.style.width = `${Math.random() * 12 + 8}px`;
    particle.style.height = `${Math.random() * 12 + 8}px`;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    particle.style.zIndex = "99999";
    particle.style.pointerEvents = "none";

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 400 + 200;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity;

    container.appendChild(particle);

    particle.animate([
      { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
      { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
    ], {
      duration: Math.random() * 1000 + 1000,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)"
    }).onfinish = () => particle.remove();
  }
}

/* --------------------------------------------------------------------------
   10. ENVELOPE OPENING ANIMATIONS
   -------------------------------------------------------------------------- */
function initEnvelopes() {
  document.querySelectorAll(".envelope-wrapper").forEach(wrapper => {
    wrapper.addEventListener("click", () => {
      if (!wrapper.classList.contains("open")) {
        wrapper.classList.add("open");
        // Trigger subtle confetti burst
        triggerConfettiExplosion();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   11. VINYL AUDIO PLAYER ENGINE (HTML5 Audio + Web Audio API Synth Generator)
   -------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------
   11. YOUTUBE IFRAME PLAYER API ENGINE & CUSTOM UI CONTROLS
   -------------------------------------------------------------------------- */
function initAudioPlayer() {
  const playPauseBtn = document.getElementById("play-pause-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const progressBarBg = document.querySelector(".progress-bar-bg");
  const volumeSlider = document.querySelector(".volume-slider");
  const playlistToggle = document.querySelector(".playlist-toggle");
  const playlistItemsContainer = document.querySelector(".playlist-items");

  // 1. Render Playlist UI
  renderPlaylistUI();

  // 2. Toggle Playlist Items Drawer
  if (playlistToggle && playlistItemsContainer) {
    playlistToggle.addEventListener("click", () => {
      playlistItemsContainer.classList.toggle("open");
    });
  }

  // 3. Setup Controls
  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {
      if (isPlaying) {
        pauseTrack();
      } else {
        playTrack();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentTrackIndex = (currentTrackIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
      loadTrack(currentTrackIndex);
      playTrack();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentTrackIndex = (currentTrackIndex + 1) % PLAYLIST.length;
      loadTrack(currentTrackIndex);
      playTrack();
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      const vol = Math.round(e.target.value * 100);
      if (ytPlayer && ytPlayerReady && typeof ytPlayer.setVolume === "function") {
        ytPlayer.setVolume(vol);
      }
      if (isMuted && vol > 0) {
        isMuted = false;
        if (ytPlayer && typeof ytPlayer.unMute === "function") {
          ytPlayer.unMute();
        }
      }
    });
  }

  if (progressBarBg) {
    progressBarBg.addEventListener("click", (e) => {
      if (!ytPlayer || !ytPlayerReady || typeof ytPlayer.getDuration !== "function") return;
      const rect = progressBarBg.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const duration = ytPlayer.getDuration();
      if (duration && duration > 0) {
        ytPlayer.seekTo(pos * duration, true);
      }
    });
  }

  // 4. Load YouTube IFrame API script dynamically
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      (document.head || document.body).appendChild(tag);
    }
  }

  // 5. Global callback when YouTube API is ready
  window.onYouTubeIframeAPIReady = () => {
    const playerOrigin = (window.location.origin && window.location.origin !== "null") ? window.location.origin : undefined;
    const container = document.getElementById("yt-player-container");
    if (!container) return;

    ytPlayer = new YT.Player("yt-player-container", {
      height: "200",
      width: "200",
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
        ...(playerOrigin ? { origin: playerOrigin } : {})
      },
      events: {
        onReady: onYTPlayerReady,
        onStateChange: onYTPlayerStateChange,
        onError: onYTPlayerError
      }
    });
  };

  if (window.YT && window.YT.Player) {
    window.onYouTubeIframeAPIReady();
  }

  // Initial UI refresh
  loadTrack(0);
}

function renderPlaylistUI() {
  const container = document.querySelector(".playlist-items");
  if (!container) return;
  container.innerHTML = "";

  PLAYLIST.forEach((track, index) => {
    const item = document.createElement("div");
    const videoId = extractYouTubeId(track.youtubeId);
    const isPlaceholder = !videoId || videoId.length !== 11;

    item.className = `playlist-item ${index === currentTrackIndex ? "active" : ""} ${isPlaceholder ? "disabled" : ""}`;
    
    if (isPlaceholder) {
      item.innerHTML = `
        <span><strong>${index + 1}. ${track.title}</strong> - ${track.artist}</span>
        <button type="button" class="yt-link-badge" data-index="${index}" title="Paste YouTube video link or ID">Add song link ❤️</button>
      `;
    } else {
      item.innerHTML = `
        <span><strong>${index + 1}. ${track.title}</strong> - ${track.artist}</span>
        <span style="display:inline-flex; align-items:center; gap:8px;">
          <button type="button" class="yt-link-badge" data-index="${index}" title="Change YouTube link" style="font-size:0.75rem; padding:2px 8px; border-radius:12px; background:rgba(255,117,143,0.15); border:1px solid rgba(255,117,143,0.3); color:#ff758f; cursor:pointer;">Change link ✏️</button>
          <span class="playlist-heart" title="Play official track">❤️</span>
        </span>
      `;
    }

    // Click handler for entire item
    item.addEventListener("click", (e) => {
      if (e.target && e.target.classList.contains("yt-link-badge")) {
        e.stopPropagation();
        promptForYouTubeId(index);
        return;
      }

      if (isPlaceholder) {
        showAudioStatus(`Click "Add song link ❤️" to attach a YouTube video ID for ${track.title}!`);
        return;
      }

      loadTrack(index);
      playTrack();
    });

    container.appendChild(item);
  });
}

function promptForYouTubeId(index) {
  const track = PLAYLIST[index];
  const input = prompt(
    `Paste YouTube link or 11-character Video ID for "${track.title}" by ${track.artist}:\n\n(Example: https://www.youtube.com/watch?v=XXXXXXXXXXX or XXXXXXXXXXX)`,
    track.youtubeId === "PASTE_VIDEO_ID_HERE" ? "" : track.youtubeId
  );

  if (input !== null && input.trim() !== "") {
    const extractedId = extractYouTubeId(input.trim());
    if (extractedId) {
      PLAYLIST[index].youtubeId = extractedId;
      renderPlaylistUI();
      showAudioStatus(`Linked "${track.title}" to YouTube ID (${extractedId}) ❤️`);
      loadTrack(index);
      playTrack();
    } else {
      showAudioStatus(`Could not find a valid 11-character YouTube ID. Please check the link.`);
    }
  }
}

function extractYouTubeId(str) {
  if (!str) return null;
  str = String(str).trim();
  // Directly an 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) {
    return str;
  }
  // Try standard YouTube watch, embed, short link formats
  const match = str.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=)|youtu\.be\/)([\w-]{11})/i);
  if (match && match[1] && match[1].length === 11) {
    return match[1];
  }
  // Fallback: look for any 11-char sequence after v= or /
  const fallback = str.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})(?:[&?]|$)/);
  if (fallback && fallback[1]) {
    return fallback[1];
  }
  return null;
}

let pendingPlayVideoId = null;

function onYTPlayerReady(event) {
  ytPlayerReady = true;
  const volSlider = document.querySelector(".volume-slider");
  if (volSlider && ytPlayer) {
    ytPlayer.setVolume(Math.round(volSlider.value * 100));
  }

  const track = PLAYLIST[currentTrackIndex];
  const videoId = track ? extractYouTubeId(track.youtubeId) : null;
  if (pendingPlayVideoId) {
    ytPlayer.loadVideoById(pendingPlayVideoId);
    pendingPlayVideoId = null;
  } else if (videoId && videoId.length === 11) {
    ytPlayer.cueVideoById(videoId);
  }
}

function onYTPlayerStateChange(event) {
  const vinylRecord = document.querySelector(".vinyl-record");
  const tonearm = document.querySelector(".tonearm");
  const playPauseBtn = document.getElementById("play-pause-btn");

  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    if (playPauseBtn) playPauseBtn.textContent = "⏸️";
    if (vinylRecord) vinylRecord.classList.add("playing");
    if (tonearm) tonearm.classList.add("playing");

    clearAudioStatus();
    startProgressPolling();

    document.querySelectorAll(".playlist-item").forEach(item => item.classList.remove("loading-track"));
  } else if (event.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    if (playPauseBtn) playPauseBtn.textContent = "▶️";
    if (vinylRecord) vinylRecord.classList.remove("playing");
    if (tonearm) tonearm.classList.remove("playing");

    stopProgressPolling();
  } else if (event.data === YT.PlayerState.BUFFERING) {
    showAudioStatus("Loading… 🎵");
    const items = document.querySelectorAll(".playlist-item");
    if (items[currentTrackIndex]) {
      items[currentTrackIndex].classList.add("loading-track");
    }
  } else if (event.data === YT.PlayerState.ENDED) {
    stopProgressPolling();
    currentTrackIndex = (currentTrackIndex + 1) % PLAYLIST.length;
    loadTrack(currentTrackIndex);
    playTrack();
  }
}

function onYTPlayerError(event) {
  stopProgressPolling();
  isPlaying = false;
  const playPauseBtn = document.getElementById("play-pause-btn");
  if (playPauseBtn) playPauseBtn.textContent = "▶️";
  const vinylRecord = document.querySelector(".vinyl-record");
  const tonearm = document.querySelector(".tonearm");
  if (vinylRecord) vinylRecord.classList.remove("playing");
  if (tonearm) tonearm.classList.remove("playing");

  document.querySelectorAll(".playlist-item").forEach(item => item.classList.remove("loading-track"));
  showAudioStatus("This song isn't available — try another 🎵");
}

function loadTrack(index) {
  currentTrackIndex = index;
  const track = PLAYLIST[index];

  const trackTitle = document.querySelector(".track-title");
  const trackArtist = document.querySelector(".track-artist");
  const vinylCenterArt = document.querySelector(".vinyl-center-art");
  const romanticNote = document.querySelector(".romantic-note-box");

  if (trackTitle) trackTitle.textContent = track.title;
  if (trackArtist) trackArtist.textContent = track.artist;
  if (vinylCenterArt) vinylCenterArt.style.backgroundImage = `url('${track.coverUrl}')`;
  if (romanticNote) {
    romanticNote.style.opacity = 0;
    setTimeout(() => {
      romanticNote.textContent = track.note;
      romanticNote.style.opacity = 1;
    }, 200);
  }

  document.querySelectorAll(".playlist-item").forEach((item, idx) => {
    item.classList.toggle("active", idx === index);
  });

  const videoId = track ? extractYouTubeId(track.youtubeId) : null;
  const isValidId = videoId && videoId.length === 11;

  if (!isValidId) {
    showAudioStatus(`Add song link ❤️ for "${track.title}" to enable playback`);
    return;
  }

  if (ytPlayer && ytPlayerReady && typeof ytPlayer.cueVideoById === "function") {
    ytPlayer.cueVideoById(videoId);
  }
}

function startAudioPlayer() {
  loadTrack(currentTrackIndex);
  playTrack();
}

function playTrack() {
  const track = PLAYLIST[currentTrackIndex];
  const videoId = track ? extractYouTubeId(track.youtubeId) : null;
  const isValidId = videoId && videoId.length === 11;

  if (!isValidId) {
    showAudioStatus(`Add song link ❤️ for "${track ? track.title : "this track"}" first`);
    return;
  }

  isPlaying = true;
  const playPauseBtn = document.getElementById("play-pause-btn");
  const vinylRecord = document.querySelector(".vinyl-record");
  const tonearm = document.querySelector(".tonearm");

  if (playPauseBtn) playPauseBtn.textContent = "⏸️";
  if (vinylRecord) vinylRecord.classList.add("playing");
  if (tonearm) tonearm.classList.add("playing");

  if (ytPlayer && ytPlayerReady && typeof ytPlayer.loadVideoById === "function") {
    ytPlayer.loadVideoById(videoId);
  } else {
    pendingPlayVideoId = videoId;
    showAudioStatus("Connecting to YouTube... Please wait a second 🎵");
  }
}

function pauseTrack() {
  isPlaying = false;
  const playPauseBtn = document.getElementById("play-pause-btn");
  const vinylRecord = document.querySelector(".vinyl-record");
  const tonearm = document.querySelector(".tonearm");

  if (playPauseBtn) playPauseBtn.textContent = "▶️";
  if (vinylRecord) vinylRecord.classList.remove("playing");
  if (tonearm) tonearm.classList.remove("playing");

  if (ytPlayer && ytPlayerReady && typeof ytPlayer.pauseVideo === "function") {
    ytPlayer.pauseVideo();
  }
}

function startProgressPolling() {
  stopProgressPolling();
  progressInterval = setInterval(() => {
    if (!ytPlayer || !ytPlayerReady || typeof ytPlayer.getCurrentTime !== "function") return;
    const curr = ytPlayer.getCurrentTime() || 0;
    const dur = ytPlayer.getDuration() || 0;
    updateProgressUI(curr, dur);
  }, 300);
}

function stopProgressPolling() {
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
}

function updateProgressUI(currentTime, duration) {
  const progressBarFill = document.querySelector(".progress-bar-fill");
  const timeElapsed = document.getElementById("time-elapsed");
  const trackDuration = document.getElementById("track-duration");

  if (duration > 0) {
    const pct = Math.min(100, (currentTime / duration) * 100);
    if (progressBarFill) progressBarFill.style.width = `${pct}%`;
    if (timeElapsed) timeElapsed.textContent = formatTime(currentTime);
    if (trackDuration) trackDuration.textContent = formatTime(duration);
  } else {
    if (progressBarFill) progressBarFill.style.width = "0%";
    if (timeElapsed) timeElapsed.textContent = "0:00";
    if (trackDuration) trackDuration.textContent = "3:30";
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function showAudioStatus(msg) {
  const statusEl = document.getElementById("audio-status-msg");
  if (statusEl) {
    statusEl.textContent = msg;
    statusEl.style.display = "block";
  }
}

function clearAudioStatus() {
  const statusEl = document.getElementById("audio-status-msg");
  if (statusEl) {
    statusEl.textContent = "";
    statusEl.style.display = "none";
  }
}

/* --------------------------------------------------------------------------
   12. LIVE DAYS TOGETHER COUNTER
   -------------------------------------------------------------------------- */
function initLiveCounter() {
  const daysEl = document.getElementById("days-num");
  const hoursEl = document.getElementById("hours-num");
  const minsEl = document.getElementById("mins-num");
  const secsEl = document.getElementById("secs-num");

  if (!daysEl) return;

  const startDate = new Date(CONFIG.relationshipStartDate).getTime();

  function updateCounter() {
    const now = new Date().getTime();
    const diff = now - startDate;

    if (diff < 0) {
      daysEl.textContent = "0";
      hoursEl.textContent = "0";
      minsEl.textContent = "0";
      secsEl.textContent = "0";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = days;
    hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
    minsEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

/* --------------------------------------------------------------------------
   13. FLIP CARDS INTERACTION
   -------------------------------------------------------------------------- */
function initFlipCards() {
  document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
}

/* --------------------------------------------------------------------------
   14. SCROLL REVEAL & SECTION PROGRESS DOTS
   -------------------------------------------------------------------------- */
function initScrollRevealAndDots() {
  const reveals = document.querySelectorAll(".scroll-reveal");
  const sections = document.querySelectorAll("section");
  const dots = document.querySelectorAll(".dot-item");

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("revealed"));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));

  // Safety backup to reveal initial sections above the fold
  setTimeout(() => {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("revealed");
      }
    });
  }, 400);

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const secId = entry.target.id;
        dots.forEach(dot => {
          dot.classList.toggle("active", dot.dataset.target === secId);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => sectionObserver.observe(sec));

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const targetSec = document.getElementById(dot.dataset.target);
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   15. DAY / NIGHT MODE TOGGLE
   -------------------------------------------------------------------------- */
function initDayNightToggle() {
  const toggleBtn = document.getElementById("day-night-toggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    isNightMode = !isNightMode;
    document.body.classList.toggle("night-mode", isNightMode);
    toggleBtn.textContent = isNightMode ? "🌙" : "☀️";
  });
}

/* --------------------------------------------------------------------------
   16. SOUND MUTE TOGGLE
   -------------------------------------------------------------------------- */
function initMuteToggle() {
  const muteBtn = document.getElementById("mute-toggle");
  if (!muteBtn) return;

  muteBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    if (ytPlayer && ytPlayerReady) {
      if (isMuted && typeof ytPlayer.mute === "function") {
        ytPlayer.mute();
      } else if (!isMuted && typeof ytPlayer.unMute === "function") {
        ytPlayer.unMute();
      }
    }
    muteBtn.textContent = isMuted ? "🔇" : "🔊";
  });
}

/* --------------------------------------------------------------------------
   17. KEEPSAKE CERTIFICATE CANVAS PNG GENERATOR
   -------------------------------------------------------------------------- */
function initKeepsakeGenerator() {
  const saveBtn = document.getElementById("save-keepsake-btn");
  const replayBtn = document.getElementById("replay-btn");

  if (saveBtn) {
    saveBtn.addEventListener("click", generateKeepsakePNG);
  }

  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function generateKeepsakePNG() {
  const canvas = document.getElementById("keepsake-canvas");
  if (!canvas) return;

  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext("2d");

  // Background Gradient
  const grad = ctx.createLinearGradient(0, 0, 1200, 800);
  grad.addColorStop(0, "#fff5f7");
  grad.addColorStop(0.5, "#ffedf2");
  grad.addColorStop(1, "#fce4eb");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1200, 800);

  // Decorative Double Gold Border
  ctx.strokeStyle = "#d4af37";
  ctx.lineWidth = 12;
  ctx.strokeRect(30, 30, 1140, 740);

  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, 1100, 700);

  // Header Text
  ctx.textAlign = "center";
  ctx.fillStyle = "#e63956";
  ctx.font = "bold 52px serif";
  ctx.fillText("Happy Girlfriend's Day 💌", 600, 150);

  // Romantic Certificate Body
  ctx.fillStyle = "#4a1525";
  ctx.font = "32px sans-serif";
  ctx.fillText("This Certificate of Eternal Love is proudly awarded to", 600, 240);

  ctx.fillStyle = "#e63956";
  ctx.font = "bold 64px cursive, serif";
  ctx.fillText(CONFIG.herName, 600, 330);

  ctx.fillStyle = "#8b3a52";
  ctx.font = "28px sans-serif";
  ctx.fillText("For being my peace, my favorite smile, and my safe place.", 600, 420);
  ctx.fillText("You make every ordinary moment feel extraordinary.", 600, 470);

  // Signature Block
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  ctx.fillStyle = "#d4af37";
  ctx.font = "bold 26px sans-serif";
  ctx.fillText(`Date: ${currentDate}`, 350, 620);

  ctx.fillStyle = "#e63956";
  ctx.font = "bold 42px cursive, serif";
  ctx.fillText(`Forever Yours, ${CONFIG.yourName}`, 850, 620);

  // Download Trigger
  const link = document.createElement("a");
  link.download = `${CONFIG.herName}-Happy-Girlfriends-Day-Keepsake.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

/* --------------------------------------------------------------------------
   18. SECRET EASTER EGG POPUP MODAL
   -------------------------------------------------------------------------- */
function initEasterEgg() {
  const secretHeart = document.getElementById("secret-easter-egg-heart");
  const modal = document.getElementById("easter-egg-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (secretHeart && modal) {
    secretHeart.addEventListener("click", () => {
      modal.classList.add("active");
      triggerConfettiExplosion();
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }
}
