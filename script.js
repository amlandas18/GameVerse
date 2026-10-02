/**
 * GAMEVERSE - ENTER THE GAME. OWN THE MOMENT.
 * Core Interactive Engine (Pure Vanilla JavaScript)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. Master Games Data (All 15 Uploaded Games)
     ========================================================================== */
  const GAMES_DATA = [
    {
      id: 1,
      title: "Battlegrounds Mobile India (BGMI)",
      shortTitle: "BGMI",
      genre: "Action / Battle Royale / Survival",
      category: ["action", "shooter", "survival"],
      year: 2021,
      rating: 4.8,
      stars: "★★★★★",
      image: "assets/images/bgmi.jpg",
      developer: "Krafton",
      platforms: "Android • iOS",
      tagline: "India Ka Battlegrounds - Drop In & Dominate",
      description: "Battlegrounds Mobile India delivers heart-pounding 100-player tactical battle royale warfare. Parachute into iconic battlegrounds, scavenge advanced weaponry, coordinate squad tactics, and fight to be the last survivor standing.",
      highlights: [
        "100-Player Tactical Combat on Iconic Maps (Erangel, Miramar)",
        "Realistic Ballistics, Vehicles, and Supply Drops",
        "Official Esports Tournaments and Ranked Competitive Ladders"
      ]
    },
    {
      id: 2,
      title: "Minecraft Legends",
      shortTitle: "Minecraft Legends",
      genre: "Action / Strategy / Open World",
      category: ["action", "strategy", "open-world"],
      year: 2023,
      rating: 4.6,
      stars: "★★★★☆",
      image: "assets/images/minecraft-legends.jpg",
      developer: "Mojang Studios • Blackbird",
      platforms: "PC • Xbox • PlayStation • Switch",
      tagline: "Unite the Overworld. Defend Your Realm.",
      description: "Explore the mysteries of Minecraft Legends in an epic action-strategy adventure. Discover a gentle land of rich resources and lush biomes on the brink of destruction. The fiery Piglins have arrived, and it's up to you to inspire unexpected allies into heroic battles.",
      highlights: [
        "Lead Armies of Creepers, Golems, and Skeletons",
        "Dynamic Procedurally-Generated Open World Environments",
        "Strategic Base Building & Real-Time Fortress Defense"
      ]
    },
    {
      id: 3,
      title: "Elden Ring Nightreign",
      shortTitle: "Elden Ring Nightreign",
      genre: "Action / RPG / Open World",
      category: ["action", "rpg", "open-world"],
      year: 2025,
      rating: 4.9,
      stars: "★★★★★",
      image: "assets/images/elden-ring.jpg",
      developer: "FromSoftware • Bandai Namco",
      platforms: "PC • PS5 • Xbox Series X",
      tagline: "Grace Has Faded. Embrace the Nocturnal Reign.",
      description: "Enter a dark, celestial expansion of the Lands Between shrouded under endless eclipse. Master forbidden moonlit sorceries, wield devastating nocturnal armaments, and conquer colossal demigods in an uncompromising dark fantasy masterpiece.",
      highlights: [
        "Sprawling Eclipse-Shrouded Open World with Vertical Dungeons",
        "Fluid High-Stakes Combat & Formidable Boss Encounters",
        "Deep Character Builds, Spectral Arts, and Multi-Branching Lore"
      ]
    },
    {
      id: 4,
      title: "Counter-Strike 2",
      shortTitle: "Counter-Strike 2",
      genre: "Action / Shooter / Tactical",
      category: ["action", "shooter"],
      year: 2023,
      rating: 4.9,
      stars: "★★★★★",
      image: "assets/images/cs2.jpg",
      developer: "Valve Corporation",
      platforms: "PC (Windows / Linux)",
      tagline: "The Definitive Tactical Precision FPS",
      description: "Counter-Strike 2 is the largest technical leap forward in Counter-Strike's history. Powered by the Source 2 engine, featuring responsive volumetric smoke grenades, sub-tick server precision, and overhauled competitive matchmaking.",
      highlights: [
        "Revolutionary Dynamic Volumetric Smoke Mechanics",
        "Sub-Tick Rating for Millisecond Precision Hit Registration",
        "Overhauled Premier Ranked Mode with Global Leaderboards"
      ]
    },
    {
      id: 5,
      title: "Age of Empires IV",
      shortTitle: "Age of Empires IV",
      genre: "Strategy / Real-Time Strategy",
      category: ["strategy"],
      year: 2021,
      rating: 4.7,
      stars: "★★★★★",
      image: "assets/images/aoe4.jpg",
      developer: "Relic Entertainment • Xbox Games",
      platforms: "PC • Xbox Series X/S",
      tagline: "Make History Your Story Across Ages",
      description: "One of the most beloved real-time strategy games returns to glory. Command diverse historical empires from the Mongols to the English, build impenetrable bastions, and orchestrate epic historical sieges in 4K high fidelity.",
      highlights: [
        "Authentic Historical Civilizations with Unique Mechanics & Tech",
        "Docu-Style Cinematic Historical Campaigns",
        "Intense Multiplayer Battles with Robust Spectator Systems"
      ]
    },
    {
      id: 6,
      title: "Red Dead Redemption 2",
      shortTitle: "Red Dead Redemption 2",
      genre: "Action / RPG / Open World",
      category: ["action", "rpg", "open-world"],
      year: 2018,
      rating: 5.0,
      stars: "★★★★★",
      image: "assets/images/rdr2.jpg",
      developer: "Rockstar Games",
      platforms: "PC • PS4/PS5 • Xbox",
      tagline: "Outlaws For Life in an Unforgiving Frontier",
      description: "America, 1899. The end of the Wild West era has begun. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland.",
      highlights: [
        "Unrivaled Living Open-World Ecosystem and Weather Systems",
        "Gripping Cinematic Narrative and Emotional Character Arcs",
        "Infinite Frontier Activities: Hunting, Fishing, Duels & Heists"
      ]
    },
    {
      id: 7,
      title: "EA Sports FC 26",
      shortTitle: "EA Sports FC 26",
      genre: "Sports / Simulation",
      category: ["sports"],
      year: 2025,
      rating: 4.6,
      stars: "★★★★☆",
      image: "assets/images/fc26.jpg",
      developer: "EA Sports",
      platforms: "PC • PS5 • Xbox Series X • Switch",
      tagline: "The World's Game Powered By Next-Gen Football Intelligence",
      description: "EA Sports FC 26 inaugurates a new era for football gaming. Featuring HyperMotionV volumetric physics, modernized tactical AI foundations, and official licenses for the world's most prestigious clubs, leagues, and tournaments.",
      highlights: [
        "HyperMotionV Capture from 1,000+ Real Matchdays",
        "FC IQ System with Deeper Tactical Control & Role Profiles",
        "Ultimate Team Evolutions and Revamped Career Modes"
      ]
    },
    {
      id: 8,
      title: "Fortnite",
      shortTitle: "Fortnite",
      genre: "Action / Shooter / Battle Royale",
      category: ["action", "shooter", "survival"],
      year: 2017,
      rating: 4.8,
      stars: "★★★★★",
      image: "assets/images/fortnite.jpg",
      developer: "Epic Games",
      platforms: "PC • Consoles • Cloud • Mobile",
      tagline: "Drop In, Squad Up, Create Without Boundaries",
      description: "The global cultural gaming phenomenon powered by Unreal Engine 5. Experience Zero Build adrenaline, colossal live seasonal events, pop-culture crossover concerts, and an endless multiverse of player-made games in UEFN.",
      highlights: [
        "Seamless Zero Build and Traditional Battle Royale Modes",
        "Unreal Editor for Fortnite (UEFN) Custom Community Worlds",
        "Massive Collaborative Events Featuring World Icons"
      ]
    },
    {
      id: 9,
      title: "Forza Horizon 6",
      shortTitle: "Forza Horizon 6",
      genre: "Racing / Open World / Simulation",
      category: ["racing", "open-world"],
      year: 2025,
      rating: 4.9,
      stars: "★★★★★",
      image: "assets/images/forza6.jpg",
      developer: "Playground Games • Xbox",
      platforms: "PC • Xbox Series X/S",
      tagline: "Unleash Pure Horizon Horizon Velocity",
      description: "Take the wheel in the most expansive, visually breathtaking open-world automotive festival yet. Race through neon-drenched metropolis boulevards, treacherous mountain passes, and scenic coastal highways in hundreds of licensed supercars.",
      highlights: [
        "Over 700 Exquisitely Rendered Real-World Supercars",
        "Dynamic Volumetric Weather, Seasons & Real-Time Ray Tracing",
        "Custom Track Architect & High-Octane Street Racing Battles"
      ]
    },
    {
      id: 10,
      title: "Valorant",
      shortTitle: "Valorant",
      genre: "Action / Shooter / Tactical",
      category: ["action", "shooter"],
      year: 2020,
      rating: 4.9,
      stars: "★★★★★",
      image: "assets/images/valorant.jpg",
      developer: "Riot Games",
      platforms: "PC • PS5 • Xbox Series X/S",
      tagline: "Defy the Limits with Tactical Radiant Mastery",
      description: "A character-based 5v5 tactical shooter where precise gunplay meets unique agent abilities. Outsmart, outplay, and outshine your competition with tactical expertise, precise aim, and coordinated squad synergy.",
      highlights: [
        "Diverse Roster of Radiant Agents with Game-Changing Abilities",
        "128-Tick Competitive Servers and Anti-Cheat Vanguard Core",
        "Premier Tournament System Integrated Into Global Esports"
      ]
    },
    {
      id: 11,
      title: "PlayerUnknown's Battlegrounds",
      shortTitle: "PUBG",
      genre: "Action / Shooter / Survival",
      category: ["action", "shooter", "survival"],
      year: 2017,
      rating: 4.7,
      stars: "★★★★☆",
      image: "assets/images/pubg.jpg",
      developer: "PUBG Studios • Krafton",
      platforms: "PC • PlayStation • Xbox",
      tagline: "The Pioneer of Modern Battle Royale",
      description: "The seminal battle royale title that defined a genre. Drop into high-stakes military battlegrounds with nothing, scavenge weapons, gear, and supplies, and survive grueling firefights to secure the coveted Chicken Dinner.",
      highlights: [
        "Unforgiving Realistic Ballistics with Distance Bullet Drop",
        "Massive 8x8 km Tactical Landscapes (Erangel, Taego, Deston)",
        "Intense Squad Communication & High-Risk Supply Drops"
      ]
    },
    {
      id: 12,
      title: "Call of Duty: Black Ops",
      shortTitle: "COD: Black Ops",
      genre: "Action / Shooter / Tactical",
      category: ["action", "shooter"],
      year: 2024,
      rating: 4.8,
      stars: "★★★★★",
      image: "assets/images/cod-blackops.jpg",
      developer: "Treyarch • Activision",
      platforms: "PC • PS5 • Xbox Series X",
      tagline: "Trust No One. Unravel the Global Conspiracy",
      description: "Enter a shadowy era of geopolitical intrigue, clandestine operations, and high-stakes espionage. Features revolutionary omnidirectional movement, allowing players to sprint, slide, and dive in any direction for cinematic firefights.",
      highlights: [
        "Revolutionary Omnidirectional Movement Gameplay",
        "Mind-Bending Cold War Spy Campaign Narrative",
        "Round-Based Zombie Survival & Classic Multiplayer Arenas"
      ]
    },
    {
      id: 13,
      title: "The Witcher 3: Wild Hunt",
      shortTitle: "The Witcher 3",
      genre: "Action / RPG / Open World",
      category: ["action", "rpg", "open-world"],
      year: 2015,
      rating: 5.0,
      stars: "★★★★★",
      image: "assets/images/witcher3.jpg",
      developer: "CD PROJEKT RED",
      platforms: "PC • PS5 • Xbox Series X • Switch",
      tagline: "The World Doesn't Need a Hero. It Needs a Professional.",
      description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
      highlights: [
        "Peerless Storytelling with Morally Ambiguous Decisions",
        "Master Witcher Combat: Dual Swords, Signs, Alchemy, & Bombs",
        "Next-Gen 4K Visual Upgrade with Ray Tracing & Photo Mode"
      ]
    },
    {
      id: 14,
      title: "Civilization VI",
      shortTitle: "Civilization VI",
      genre: "Strategy / Turn-Based",
      category: ["strategy"],
      year: 2016,
      rating: 4.8,
      stars: "★★★★★",
      image: "assets/images/civ6.jpg",
      developer: "Firaxis Games • 2K",
      platforms: "PC • Mac • Consoles • iPad",
      tagline: "One More Turn to Shape Human History",
      description: "Civilization VI offers new ways to engage with your world: cities now physically expand across the map, active research in technology and culture unlocks new potential, and competing leaders will pursue their own historical agendas.",
      highlights: [
        "Unstacked Cities with Specialized Thematic Districts",
        "Active Tech Eureka Boosts and Deep Cultural Civics Trees",
        "Multiple Victory Conditions: Domination, Science, Culture, Religion"
      ]
    },
    {
      id: 15,
      title: "Grand Theft Auto V",
      shortTitle: "GTA V",
      genre: "Action / Open World / Adventure",
      category: ["action", "open-world"],
      year: 2013,
      rating: 5.0,
      stars: "★★★★★",
      image: "assets/images/gta5.jpg",
      developer: "Rockstar Games",
      platforms: "PC • PS5 • Xbox Series X",
      tagline: "Welcome to Los Santos. Chase the American Dream.",
      description: "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, they must pull off a series of dangerous heists to survive in a ruthless city.",
      highlights: [
        "Triple Protagonist Switch Dynamic: Michael, Franklin, and Trevor",
        "Sprawling Sun-Soaked Metropolis and Wild Blaine County",
        "The Ever-Evolving Multi-Billion Dollar GTA Online World"
      ]
    }
  ];

  /* Slides for Hero Cinematic Slider (5 Curated Showcase Games) */
  const HERO_SLIDES_INDICES = [2, 8, 12, 5, 9]; // Elden Ring, Forza, Witcher 3, RDR2, Valorant

  /* ==========================================================================
     2. Mouse Position Tracking (For Ambient Particles & Tilt)
     ========================================================================== */
  let mouseX = -100;
  let mouseY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  /* ==========================================================================
     3. Subtle Ambient Particle & Constellation Canvas
     ========================================================================== */
  const particleCanvas = document.getElementById('particles-canvas');
  if (particleCanvas) {
    const ctx = particleCanvas.getContext('2d');
    let width = particleCanvas.width = window.innerWidth;
    let height = particleCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = particleCanvas.width = window.innerWidth;
      height = particleCanvas.height = window.innerHeight;
    }, { passive: true });

    const particles = [];
    const PARTICLE_COUNT = 55;
    const colors = ['rgba(0, 242, 254, ', 'rgba(121, 40, 202, ', 'rgba(255, 0, 122, '];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.6,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.25,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.45 - 0.15
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw constellation connections between close nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.14;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        // Subtle kinetic cursor drift
        if (mouseX > 0 && mouseY > 0) {
          const mdx = p.x - mouseX;
          const mdy = p.y - mouseY;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < 100 && mdist > 0) {
            const force = (100 - mdist) / 100 * 0.45;
            p.x += (mdx / mdist) * force;
            p.y += (mdy / mdist) * force;
          }
        }

        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0, 242, 254, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animateParticles);
    };
    requestAnimationFrame(animateParticles);
  }

  /* ==========================================================================
     4. Navigation Bar (Scroll Blur & Mobile Drawer)
     ========================================================================== */
  const navbar = document.querySelector('.navbar');
  const navMenu = document.querySelector('.nav-menu');
  const navToggleBtn = document.querySelector('.nav-toggle-btn');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Active Section Spy
    const scrollPos = window.scrollY + 200;
    document.querySelectorAll('section[id]').forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggleBtn.innerHTML = isOpen 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars-staggered"></i>';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggleBtn.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
      });
    });
  }

  /* ==========================================================================
     5. Hero Cinematic Slider Engine
     ========================================================================== */
  const heroSliderWrap = document.querySelector('.hero-slider-wrap');
  const heroTitleEl = document.getElementById('hero-title');
  const heroBadgeEl = document.getElementById('hero-badge');
  const heroDescEl = document.getElementById('hero-desc');
  const currentSlideEl = document.querySelector('.current-slide');
  const totalSlideEl = document.querySelector('.total-slides');
  const heroProgressBar = document.querySelector('.hero-progress-bar');
  const prevSlideBtn = document.getElementById('hero-prev-btn');
  const nextSlideBtn = document.getElementById('hero-next-btn');

  let currentSlideIndex = 0;
  const heroSlideCount = HERO_SLIDES_INDICES.length;
  let slideInterval = null;
  const SLIDE_DURATION = 6000;
  let slideStartTime = Date.now();

  // Build Hero Slides in DOM
  if (heroSliderWrap) {
    heroSliderWrap.innerHTML = '';
    HERO_SLIDES_INDICES.forEach((gameIdx, i) => {
      const game = GAMES_DATA[gameIdx];
      const slideDiv = document.createElement('div');
      slideDiv.className = `hero-slide ${i === 0 ? 'active' : ''}`;
      slideDiv.innerHTML = `
        <img class="hero-bg-img" src="${game.image}" alt="${game.title}">
      `;
      heroSliderWrap.appendChild(slideDiv);
    });

    if (totalSlideEl) {
      totalSlideEl.textContent = `0${heroSlideCount}`;
    }
  }

  const updateHeroSlide = (newIndex) => {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === newIndex);
    });

    currentSlideIndex = newIndex;
    const game = GAMES_DATA[HERO_SLIDES_INDICES[currentSlideIndex]];

    if (currentSlideEl) {
      currentSlideEl.textContent = `0${currentSlideIndex + 1}`;
    }

    if (heroBadgeEl) {
      heroBadgeEl.innerHTML = `<span class="badge-dot"></span> ${game.genre.toUpperCase()}`;
    }

    if (heroTitleEl) {
      heroTitleEl.style.opacity = '0';
      heroTitleEl.style.transform = 'translateY(6px)';
      setTimeout(() => {
        heroTitleEl.innerHTML = `${game.shortTitle} <span class="text-gradient">EDITION</span>`;
        heroTitleEl.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        heroTitleEl.style.opacity = '1';
        heroTitleEl.style.transform = 'translateY(0)';
      }, 120);
    }

    if (heroDescEl) {
      heroDescEl.style.opacity = '0';
      setTimeout(() => {
        heroDescEl.textContent = game.description;
        heroDescEl.style.transition = 'opacity 0.35s ease';
        heroDescEl.style.opacity = '1';
      }, 120);
    }

    // Reset progress bar
    slideStartTime = Date.now();
  };

  const nextHeroSlide = () => {
    const nextIdx = (currentSlideIndex + 1) % heroSlideCount;
    updateHeroSlide(nextIdx);
  };

  const prevHeroSlide = () => {
    const prevIdx = (currentSlideIndex - 1 + heroSlideCount) % heroSlideCount;
    updateHeroSlide(prevIdx);
  };

  if (nextSlideBtn) nextSlideBtn.addEventListener('click', () => { nextHeroSlide(); resetAutoplay(); });
  if (prevSlideBtn) prevSlideBtn.addEventListener('click', () => { prevHeroSlide(); resetAutoplay(); });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (document.querySelector('.modal-backdrop.open')) return;
    if (e.key === 'ArrowRight') { nextHeroSlide(); resetAutoplay(); }
    if (e.key === 'ArrowLeft') { prevHeroSlide(); resetAutoplay(); }
  });

  // Autoplay loop with smooth progress bar
  const startAutoplay = () => {
    slideStartTime = Date.now();
    slideInterval = setInterval(() => {
      const elapsed = Date.now() - slideStartTime;
      const progress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      if (heroProgressBar) heroProgressBar.style.width = `${progress}%`;

      if (elapsed >= SLIDE_DURATION) {
        nextHeroSlide();
      }
    }, 50);
  };

  const resetAutoplay = () => {
    clearInterval(slideInterval);
    if (heroProgressBar) heroProgressBar.style.width = '0%';
    startAutoplay();
  };

  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroSection.addEventListener('mouseleave', () => resetAutoplay());
  }

  startAutoplay();

  /* ==========================================================================
     6. 3D Card Tilt Interaction (Vanilla JS)
     ========================================================================== */
  const apply3DTilt = (card) => {
    const handleMove = (e) => {
      if (window.innerWidth < 992) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleLeave = () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)`;
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
  };

  /* ==========================================================================
     7. Render Game Library & Functional Filter/Search
     ========================================================================== */
  const libraryGrid = document.querySelector('.library-grid');
  const searchInput = document.querySelector('.search-input');
  const searchClearBtn = document.querySelector('.search-clear-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const libraryEmpty = document.querySelector('.library-empty');

  // Favorites in localStorage
  let userFavorites = JSON.parse(localStorage.getItem('gameverse_favorites') || '[]');
  const favBadgeCount = document.querySelector('.fav-badge-count');

  const updateFavBadge = () => {
    if (!favBadgeCount) return;
    const count = userFavorites.length;
    favBadgeCount.textContent = count;
    favBadgeCount.classList.toggle('visible', count > 0);
  };
  updateFavBadge();

  // Render 15 Cards
  const renderLibraryCards = () => {
    if (!libraryGrid) return;
    libraryGrid.innerHTML = '';

    GAMES_DATA.forEach(game => {
      const isFav = userFavorites.includes(game.id);
      const card = document.createElement('article');
      card.className = 'game-card reveal-fade';
      card.setAttribute('data-id', game.id);
      card.setAttribute('data-categories', game.category.join(' '));
      card.setAttribute('data-title', game.title.toLowerCase());

      card.innerHTML = `
        <div class="game-card-glow"></div>
        <div class="game-card-media">
          <img class="game-card-img" src="${game.image}" alt="${game.title}" loading="lazy">
          <div class="game-card-media-overlay"></div>
          <button class="game-card-fav-btn ${isFav ? 'active' : ''}" aria-label="Favorite ${game.title}" data-fav-id="${game.id}">
            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
          <div class="game-card-badge-pos">
            <span class="badge"><span class="badge-dot"></span> ${game.category[0]}</span>
          </div>
        </div>
        <div class="game-card-body">
          <div class="game-card-meta">
            <span class="game-card-genre">${game.genre}</span>
            <span class="game-card-year">${game.year}</span>
          </div>
          <h3 class="game-card-title">${game.title}</h3>
          <div class="game-card-rating">
            <span>${game.stars}</span>
            <span class="rating-score">${game.rating.toFixed(1)} / 5.0</span>
          </div>
          <div class="game-card-footer">
            <button class="btn-card-details" data-open-modal="${game.id}">
              <span>View Details</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `;

      libraryGrid.appendChild(card);
      apply3DTilt(card);
    });

    // Re-bind cursor listeners for newly created cards
    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-card-hover');
        if (cursorText) cursorText.textContent = 'VIEW';
      });
      card.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-card-hover');
      });
    });

    // Card Details Click
    document.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-open-modal'), 10);
        openGameModal(id);
      });
    });

    // Card Body Click
    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.game-card-fav-btn')) return;
        const id = parseInt(card.getAttribute('data-id'), 10);
        openGameModal(id);
      });
    });

    // Favorite Button Click
    document.querySelectorAll('.game-card-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-fav-id'), 10);
        toggleFavorite(id);
      });
    });
  };

  renderLibraryCards();

  // Featured cards 3D tilt
  document.querySelectorAll('.featured-card').forEach(card => {
    apply3DTilt(card);
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'), 10);
      if (id) openGameModal(id);
    });
  });

  // Filter & Search Logic
  let currentFilter = 'all';
  let searchQuery = '';

  const filterCards = () => {
    const cards = document.querySelectorAll('.game-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const categories = card.getAttribute('data-categories') || '';
      const title = card.getAttribute('data-title') || '';

      const matchesFilter = (currentFilter === 'all') || categories.includes(currentFilter);
      const matchesSearch = !searchQuery || title.includes(searchQuery);

      if (matchesFilter && matchesSearch) {
        card.classList.remove('hidden');
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
        visibleCount++;
      } else {
        card.classList.add('hidden');
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.95)';
      }
    });

    if (libraryEmpty) {
      libraryEmpty.classList.toggle('visible', visibleCount === 0);
    }
  };

  // Filter Buttons Event
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      filterCards();
    });
  });

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (searchClearBtn) {
        searchClearBtn.classList.toggle('visible', searchQuery.length > 0);
      }
      filterCards();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        searchClearBtn.classList.remove('visible');
        filterCards();
        searchInput.focus();
      }
    });
  }

  /* ==========================================================================
     8. Favorites System (localStorage & Side Drawer)
     ========================================================================== */
  const favoritesDrawer = document.querySelector('.drawer-backdrop');
  const favDrawerCloseBtn = document.querySelector('.drawer-close');
  const favDrawerBody = document.querySelector('.drawer-body');
  const navFavBtn = document.getElementById('nav-fav-btn');

  const toggleFavorite = (id) => {
    const index = userFavorites.indexOf(id);
    if (index > -1) {
      userFavorites.splice(index, 1);
    } else {
      userFavorites.push(id);
    }
    localStorage.setItem('gameverse_favorites', JSON.stringify(userFavorites));
    updateFavBadge();

    // Update UI on cards
    document.querySelectorAll(`[data-fav-id="${id}"]`).forEach(btn => {
      const active = userFavorites.includes(id);
      btn.classList.toggle('active', active);
      btn.innerHTML = `<i class="${active ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
    });

    // Update modal fav button if open
    const modalFavBtn = document.getElementById('modal-fav-toggle');
    if (modalFavBtn && parseInt(modalFavBtn.getAttribute('data-id'), 10) === id) {
      const active = userFavorites.includes(id);
      modalFavBtn.innerHTML = active 
        ? `<i class="fa-solid fa-heart"></i> Remove from Favorites`
        : `<i class="fa-regular fa-heart"></i> Add to Favorites`;
      modalFavBtn.classList.toggle('btn-primary', !active);
      modalFavBtn.classList.toggle('btn-secondary', active);
    }

    renderFavoritesDrawer();
  };

  const renderFavoritesDrawer = () => {
    if (!favDrawerBody) return;
    if (userFavorites.length === 0) {
      favDrawerBody.innerHTML = `
        <div class="drawer-empty">
          <i class="fa-regular fa-heart drawer-empty-icon"></i>
          <h4>No Favorites Yet</h4>
          <p>Click the heart icon on any game card to curate your custom collection.</p>
        </div>
      `;
      return;
    }

    favDrawerBody.innerHTML = '';
    userFavorites.forEach(id => {
      const game = GAMES_DATA.find(g => g.id === id);
      if (!game) return;

      const item = document.createElement('div');
      item.className = 'drawer-fav-item';
      item.innerHTML = `
        <img class="drawer-fav-thumb" src="${game.image}" alt="${game.title}">
        <div class="drawer-fav-details">
          <div class="drawer-fav-name">${game.shortTitle}</div>
          <div class="drawer-fav-genre">${game.genre}</div>
        </div>
        <button class="drawer-fav-remove" title="Remove" data-remove-fav="${game.id}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      `;

      item.addEventListener('click', (e) => {
        if (e.target.closest('.drawer-fav-remove')) return;
        favoritesDrawer?.classList.remove('open');
        openGameModal(game.id);
      });

      favDrawerBody.appendChild(item);
    });

    document.querySelectorAll('[data-remove-fav]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-remove-fav'), 10);
        toggleFavorite(id);
      });
    });
  };

  if (navFavBtn) {
    navFavBtn.addEventListener('click', () => {
      renderFavoritesDrawer();
      favoritesDrawer?.classList.add('open');
    });
  }

  if (favDrawerCloseBtn) {
    favDrawerCloseBtn.addEventListener('click', () => {
      favoritesDrawer?.classList.remove('open');
    });
  }

  if (favoritesDrawer) {
    favoritesDrawer.addEventListener('click', (e) => {
      if (e.target === favoritesDrawer) {
        favoritesDrawer.classList.remove('open');
      }
    });
  }

  /* ==========================================================================
     9. Game Details Modal Interface
     ========================================================================== */
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  const openGameModal = (id) => {
    const game = GAMES_DATA.find(g => g.id === id);
    if (!game || !modalBackdrop) return;

    const isFav = userFavorites.includes(game.id);

    // Populate Modal Elements
    const heroImg = document.getElementById('modal-img');
    const titleEl = document.getElementById('modal-title');
    const badgeEl = document.getElementById('modal-badge');
    const ratingEl = document.getElementById('modal-rating');
    const descEl = document.getElementById('modal-desc');
    const devEl = document.getElementById('modal-developer');
    const yearEl = document.getElementById('modal-year');
    const platEl = document.getElementById('modal-platforms');
    const highList = document.getElementById('modal-highlights');
    const favToggle = document.getElementById('modal-fav-toggle');

    if (heroImg) heroImg.src = game.image;
    if (titleEl) titleEl.textContent = game.title;
    if (badgeEl) badgeEl.textContent = game.genre;
    if (ratingEl) ratingEl.innerHTML = `${game.stars} <span class="rating-score">${game.rating.toFixed(1)} / 5.0</span>`;
    if (descEl) descEl.textContent = game.description;
    if (devEl) devEl.textContent = game.developer;
    if (yearEl) yearEl.textContent = game.year;
    if (platEl) platEl.textContent = game.platforms;

    if (highList) {
      highList.innerHTML = game.highlights.map(h => `<li>${h}</li>`).join('');
    }

    if (favToggle) {
      favToggle.setAttribute('data-id', game.id);
      favToggle.className = isFav ? 'btn btn-secondary' : 'btn btn-primary';
      favToggle.innerHTML = isFav 
        ? `<i class="fa-solid fa-heart"></i> Remove from Favorites` 
        : `<i class="fa-regular fa-heart"></i> Add to Favorites`;

      favToggle.onclick = () => toggleFavorite(game.id);
    }

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeGameModal = () => {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeGameModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeGameModal();
    });
  }

  // Global ESC Key Listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeGameModal();
      favoritesDrawer?.classList.remove('open');
    }
  });

  /* ==========================================================================
     11. Trending Section Interactions
     ========================================================================== */
  document.querySelectorAll('.trending-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = parseInt(item.getAttribute('data-id'), 10);
      if (id) openGameModal(id);
    });
  });

  /* ==========================================================================
     12. Animated Statistics Counters (IntersectionObserver)
     ========================================================================== */
  const statsSection = document.querySelector('.stats-section');
  let statsCounted = false;

  const animateCounters = () => {
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1800;
      const startTime = performance.now();

      const updateCount = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(easeOutQuad * target);
        el.textContent = `${prefix}${current < 10 && target >= 10 ? '0' : ''}${current}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = `${prefix}${target < 10 && target >= 10 ? '0' : ''}${target}${suffix}`;
        }
      };
      requestAnimationFrame(updateCount);
    });
  };

  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          animateCounters();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  }

  /* ==========================================================================
     13. Mouse Parallax Banner & Ambient Movement
     ========================================================================== */
  const parallaxBanner = document.querySelector('.parallax-section');
  const parallaxBg = document.querySelector('.parallax-bg');

  if (parallaxBanner && parallaxBg) {
    parallaxBanner.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 992) return;
      const rect = parallaxBanner.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      parallaxBg.style.transform = `scale(1.1) translate(${x * -35}px, ${y * -35}px)`;
    });

    parallaxBanner.addEventListener('mouseleave', () => {
      parallaxBg.style.transform = `scale(1.1) translate(0, 0)`;
    });
  }

  /* ==========================================================================
     14. Scroll Reveal Animations (IntersectionObserver)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-fade');
  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ==========================================================================
     15. Quick Nav Search Icon Focus
     ========================================================================== */
  const navSearchBtn = document.getElementById('nav-search-btn');
  if (navSearchBtn && searchInput) {
    navSearchBtn.addEventListener('click', () => {
      const librarySec = document.getElementById('library');
      if (librarySec) {
        librarySec.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => searchInput.focus(), 600);
      }
    });
  }

  // Newsletter Submit Feedback
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input && input.value) {
        input.value = '';
        alert('Welcome to the GAMEVERSE VIP Circle. Transmission incoming!');
      }
    });
  }

  /* ==========================================================================
     16. Events Page: Live Tournament Countdown & 10s Demo
     ========================================================================== */
  const cdDays = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMins = document.getElementById('cd-mins');
  const cdSecs = document.getElementById('cd-secs');
  const demoCountdownBtn = document.getElementById('demo-countdown-btn');

  if (cdDays && cdHours && cdMins && cdSecs) {
    const targetDate = new Date('2026-10-18T18:00:00').getTime();
    let isDemoRunning = false;
    let demoSeconds = 10;
    let timerInterval = null;

    const updateCountdown = () => {
      if (isDemoRunning) return;
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        cdDays.textContent = '00';
        cdHours.textContent = '00';
        cdMins.textContent = '00';
        cdSecs.textContent = '00';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      cdDays.textContent = days < 10 ? `0${days}` : days;
      cdHours.textContent = hours < 10 ? `0${hours}` : hours;
      cdMins.textContent = minutes < 10 ? `0${minutes}` : minutes;
      cdSecs.textContent = seconds < 10 ? `0${seconds}` : seconds;
    };

    timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    if (demoCountdownBtn) {
      demoCountdownBtn.addEventListener('click', () => {
        isDemoRunning = true;
        demoSeconds = 10;
        demoCountdownBtn.disabled = true;
        demoCountdownBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> COUNTING DOWN...`;

        cdDays.textContent = '00';
        cdHours.textContent = '00';
        cdMins.textContent = '00';
        cdSecs.textContent = '10';

        const demoInterval = setInterval(() => {
          demoSeconds--;
          cdSecs.textContent = demoSeconds < 10 ? `0${demoSeconds}` : demoSeconds;

          if (demoSeconds <= 0) {
            clearInterval(demoInterval);
            isDemoRunning = false;
            demoCountdownBtn.disabled = false;
            demoCountdownBtn.innerHTML = `⚡ TOURNAMENT COMMENCED!`;
            setTimeout(() => {
              demoCountdownBtn.innerHTML = `<i class="fa-solid fa-play"></i> DEMO: END IN 10 SECONDS`;
              updateCountdown();
            }, 4000);
          }
        }, 1000);
      });
    }
  }

  /* ==========================================================================
     17. Events Page: Tournament Registration Modal
     ========================================================================== */
  const tourneyModal = document.getElementById('tournament-modal');
  const tourneyModalClose = document.getElementById('tournament-modal-close');
  const tourneyRegForm = document.getElementById('tournament-reg-form');
  const tourneyRegTitle = document.getElementById('tourney-reg-title');
  const tourneySuccessMsg = document.getElementById('tourney-success-msg');
  let activeTourneyCard = null;

  document.querySelectorAll('[data-register]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const tourneyName = btn.getAttribute('data-register');
      activeTourneyCard = btn.closest('.event-card-item');

      if (tourneyRegTitle) {
        tourneyRegTitle.textContent = `Register: ${tourneyName}`;
      }
      if (tourneySuccessMsg) tourneySuccessMsg.style.display = 'none';
      if (tourneyRegForm) tourneyRegForm.style.display = 'block';

      tourneyModal?.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (tourneyModalClose) {
    tourneyModalClose.addEventListener('click', () => {
      tourneyModal?.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (tourneyRegForm) {
    tourneyRegForm.addEventListener('submit', (e) => {
      e.preventDefault();
      tourneyRegForm.style.display = 'none';
      if (tourneySuccessMsg) tourneySuccessMsg.style.display = 'block';

      if (activeTourneyCard) {
        const countEl = activeTourneyCard.querySelector('.participant-count');
        if (countEl) {
          const currentCount = parseInt(countEl.textContent, 10) || 0;
          countEl.textContent = currentCount + 1;
        }
        const regBtn = activeTourneyCard.querySelector('.btn-event-register');
        if (regBtn) {
          regBtn.textContent = 'REGISTERED ✓';
          regBtn.style.background = 'var(--accent-emerald)';
          regBtn.disabled = true;
        }
      }

      setTimeout(() => {
        tourneyModal?.classList.remove('open');
        document.body.style.overflow = '';
      }, 2500);
    });
  }

  /* ==========================================================================
     18. Community Page: Post Creation & Interactive Likes/Comments
     ========================================================================== */
  const communityPostForm = document.getElementById('community-post-form');
  const communityFeed = document.getElementById('community-feed');
  const postUserInput = document.getElementById('post-user-input');
  const postGameSelect = document.getElementById('post-game-select');
  const postTextInput = document.getElementById('post-text-input');
  const discussionsCount = document.getElementById('discussions-count');

  if (communityPostForm && communityFeed) {
    const bindPostInteractions = (card) => {
      const likeBtn = card.querySelector('.like-btn');
      if (likeBtn) {
        likeBtn.addEventListener('click', () => {
          const isLiked = likeBtn.getAttribute('data-liked') === 'true';
          let count = parseInt(likeBtn.getAttribute('data-count'), 10) || 0;
          if (isLiked) {
            count--;
            likeBtn.setAttribute('data-liked', 'false');
            likeBtn.classList.remove('active');
            likeBtn.innerHTML = `<i class="fa-regular fa-heart"></i> <span>${count}</span>`;
          } else {
            count++;
            likeBtn.setAttribute('data-liked', 'true');
            likeBtn.classList.add('active');
            likeBtn.innerHTML = `<i class="fa-solid fa-heart"></i> <span>${count}</span>`;
          }
          likeBtn.setAttribute('data-count', count);
        });
      }

      const commentBtn = card.querySelector('.comment-toggle-btn');
      if (commentBtn) {
        commentBtn.addEventListener('click', () => {
          const comment = prompt('Write your reply as a GAMEVERSE member:');
          if (comment && comment.trim()) {
            commentBtn.innerHTML = `<i class="fa-solid fa-comment-dots"></i> <span>Replies (Active)</span>`;
            alert('Your reply has been transmitted to this thread!');
          }
        });
      }
    };

    document.querySelectorAll('.discussion-card').forEach(bindPostInteractions);

    communityPostForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = postUserInput.value.trim();
      const game = postGameSelect.value;
      const content = postTextInput.value.trim();

      if (!username || !content) return;

      const initial = username.charAt(0).toUpperCase();
      const newCard = document.createElement('article');
      newCard.className = 'discussion-card';
      newCard.style.animation = 'heroReveal 0.5s ease forwards';
      newCard.innerHTML = `
        <div class="discussion-header">
          <div class="discussion-user-wrap">
            <div class="user-avatar-badge avatar-cyan">${initial}</div>
            <div>
              <div class="user-meta-name">@${username}</div>
              <div class="user-meta-time"><i class="fa-regular fa-clock"></i> Just now</div>
            </div>
          </div>
          <span class="game-pill-badge">${game}</span>
        </div>
        <p class="discussion-content">${content}</p>
        <div class="discussion-actions">
          <button class="discussion-action-btn like-btn" data-liked="false" data-count="0">
            <i class="fa-regular fa-heart"></i>
            <span>0</span>
          </button>
          <button class="discussion-action-btn comment-toggle-btn">
            <i class="fa-regular fa-comment"></i>
            <span>Comments (0)</span>
          </button>
        </div>
      `;

      communityFeed.prepend(newCard);
      bindPostInteractions(newCard);

      postTextInput.value = '';
      postUserInput.value = '';

      const totalPosts = document.querySelectorAll('.discussion-card').length;
      if (discussionsCount) discussionsCount.textContent = `${totalPosts} posts`;
    });
  }

  /* ==========================================================================
     19. Leaderboard Page: Sorting by XP, Wins, Level
     ========================================================================== */
  const leaderboardBody = document.getElementById('leaderboard-table-body');
  const sortFilterBtns = document.querySelectorAll('.sort-filter-btn');

  if (leaderboardBody) {
    const LEADERBOARD_DATA = [
      { name: "@ShadowX", tier: "Radiant Top 1", tierClass: "tier-radiant", level: 100, xp: 145200, wins: 312, rate: "76.4%" },
      { name: "@Valkyrie", tier: "Immortal III", tierClass: "tier-immortal", level: 94, xp: 128400, wins: 284, rate: "71.8%" },
      { name: "@Frostbite", tier: "Diamond Elite", tierClass: "tier-diamond", level: 89, xp: 119750, wins: 260, rate: "68.2%" },
      { name: "@CyberGhost", tier: "Immortal II", tierClass: "tier-immortal", level: 86, xp: 112100, wins: 245, rate: "67.0%" },
      { name: "@Blaze", tier: "Diamond III", tierClass: "tier-diamond", level: 82, xp: 105600, wins: 230, rate: "64.5%" },
      { name: "@Nova", tier: "Diamond II", tierClass: "tier-diamond", level: 79, xp: 98300, wins: 215, rate: "63.1%" },
      { name: "@PhantomStrike", tier: "Diamond I", tierClass: "tier-diamond", level: 75, xp: 91400, wins: 198, rate: "61.7%" },
      { name: "@AeroKnight", tier: "Platinum III", tierClass: "tier-diamond", level: 71, xp: 84900, wins: 182, rate: "59.4%" },
      { name: "@VortexReign", tier: "Platinum II", tierClass: "tier-diamond", level: 68, xp: 79200, wins: 170, rate: "58.2%" },
      { name: "@Specter", tier: "Platinum I", tierClass: "tier-diamond", level: 65, xp: 74500, wins: 155, rate: "56.8%" }
    ];

    const renderLeaderboard = (sortBy) => {
      const sorted = [...LEADERBOARD_DATA].sort((a, b) => b[sortBy] - a[sortBy]);

      const pName1 = document.getElementById('podium-name-1');
      const pStat1 = document.getElementById('podium-stat-1');
      const pName2 = document.getElementById('podium-name-2');
      const pStat2 = document.getElementById('podium-stat-2');
      const pName3 = document.getElementById('podium-name-3');
      const pStat3 = document.getElementById('podium-stat-3');

      if (pName1 && sorted[0]) {
        pName1.textContent = sorted[0].name;
        pStat1.textContent = sortBy === 'xp' ? `${sorted[0].xp.toLocaleString()} XP` : (sortBy === 'wins' ? `${sorted[0].wins} Wins` : `Level ${sorted[0].level}`);
      }
      if (pName2 && sorted[1]) {
        pName2.textContent = sorted[1].name;
        pStat2.textContent = sortBy === 'xp' ? `${sorted[1].xp.toLocaleString()} XP` : (sortBy === 'wins' ? `${sorted[1].wins} Wins` : `Level ${sorted[1].level}`);
      }
      if (pName3 && sorted[2]) {
        pName3.textContent = sorted[2].name;
        pStat3.textContent = sortBy === 'xp' ? `${sorted[2].xp.toLocaleString()} XP` : (sortBy === 'wins' ? `${sorted[2].wins} Wins` : `Level ${sorted[2].level}`);
      }

      leaderboardBody.innerHTML = '';
      sorted.forEach((player, idx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><span class="rank-badge-number">${idx + 1 < 10 ? '0' : ''}${idx + 1}</span></td>
          <td><b>${player.name}</b></td>
          <td><span class="tier-tag ${player.tierClass}">${player.tier}</span></td>
          <td><b>${player.level}</b></td>
          <td><span style="color: var(--accent-cyan); font-family: var(--font-mono);">${player.xp.toLocaleString()} XP</span></td>
          <td><b>${player.wins}</b></td>
          <td><span style="color: var(--accent-emerald); font-family: var(--font-mono);">${player.rate}</span></td>
        `;
        leaderboardBody.appendChild(row);
      });
    };

    renderLeaderboard('xp');

    sortFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sortFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const sortBy = btn.getAttribute('data-sort') || 'xp';
        renderLeaderboard(sortBy);
      });
    });
  }

  /* ==========================================================================
     20. Join Community: Password Strength & Citizen Pass Minting
     ========================================================================== */
  const gamerJoinForm = document.getElementById('gamer-join-form');
  const joinPassword = document.getElementById('join-password');
  const strengthFill = document.getElementById('strength-fill');
  const strengthLabel = document.getElementById('strength-label');
  const joinSuccessBox = document.getElementById('join-success-box');

  if (joinPassword && strengthFill) {
    joinPassword.addEventListener('input', () => {
      const val = joinPassword.value;
      let score = 0;
      if (val.length >= 6) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      if (score === 0) {
        strengthFill.style.width = '0%';
        strengthFill.style.background = 'transparent';
        if (strengthLabel) strengthLabel.textContent = 'Password Strength';
      } else if (score <= 2) {
        strengthFill.style.width = '35%';
        strengthFill.style.background = 'var(--accent-pink)';
        if (strengthLabel) {
          strengthLabel.textContent = 'Weak Password';
          strengthLabel.style.color = 'var(--accent-pink)';
        }
      } else if (score === 3) {
        strengthFill.style.width = '70%';
        strengthFill.style.background = 'var(--accent-gold)';
        if (strengthLabel) {
          strengthLabel.textContent = 'Moderate Password';
          strengthLabel.style.color = 'var(--accent-gold)';
        }
      } else {
        strengthFill.style.width = '100%';
        strengthFill.style.background = 'var(--accent-emerald)';
        if (strengthLabel) {
          strengthLabel.textContent = 'Strong Password';
          strengthLabel.style.color = 'var(--accent-emerald)';
        }
      }
    });
  }

  if (gamerJoinForm && joinSuccessBox) {
    gamerJoinForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.getElementById('join-username').value.trim();
      const password = document.getElementById('join-password').value;
      const confirm = document.getElementById('join-confirm').value;
      const platform = document.getElementById('join-platform').value;
      const country = document.getElementById('join-country').value;
      const terms = document.getElementById('join-terms').checked;

      let isValid = true;
      if (!username || username.length < 3) {
        document.getElementById('err-username').textContent = 'Please enter at least 3 characters.';
        isValid = false;
      } else {
        document.getElementById('err-username').textContent = '';
      }

      if (password !== confirm) {
        document.getElementById('err-confirm').textContent = 'Passwords do not match.';
        isValid = false;
      } else {
        document.getElementById('err-confirm').textContent = '';
      }

      if (!terms) {
        document.getElementById('err-terms').textContent = 'You must accept the terms.';
        isValid = false;
      } else {
        document.getElementById('err-terms').textContent = '';
      }

      if (!isValid) return;

      const cardUsername = document.getElementById('card-username');
      const cardMeta = document.getElementById('card-meta');
      const cardAvatar = document.getElementById('card-avatar');

      if (cardUsername) cardUsername.textContent = `@${username}`;
      if (cardMeta) cardMeta.textContent = `${platform} • ${country}`;
      if (cardAvatar) cardAvatar.textContent = username.charAt(0).toUpperCase();

      gamerJoinForm.style.display = 'none';
      joinSuccessBox.classList.add('visible');
    });
  }
});

