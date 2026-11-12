/**
 * ============================================================================
 * A STORY ONLY WE KNOW — Premium Romantic Interactive Experience
 * ============================================================================
 */

const CONFIG = {
    // -------------------------------------------------------------
    // 1. RECIPIENT & SENDER DETAILS
    // -------------------------------------------------------------
    recipientName: "Ahsan",                  // Recipient's beloved nickname
    senderName: "Abdul Rehman",              // Sender name
    relationshipStartDate: "2026-11-10",     // Format: YYYY-MM-DD (used for Eternity Counter)

    // -------------------------------------------------------------
    // 2. SCENE 1: MYSTERIOUS INTRO
    // -------------------------------------------------------------
    introQuote: "Some feelings are too special to explain in ordinary words...",

    // -------------------------------------------------------------
    // 3. SCENE 2: CINEMATIC SUSPENSE WHISPERS
    // -------------------------------------------------------------
    suspenseWhispers: [
        "In all of time, and across all of space...",
        "Out of eight billion people on this planet...",
        "My entire universe gravitated towards you, Ahsan."
    ],

    // -------------------------------------------------------------
    // 4. SCENE 3: OUR LITTLE UNIVERSE
    // -------------------------------------------------------------
    universeMainQuote: "In a universe of billions of souls, my heart found its home in you, Ahsan.",

    // -------------------------------------------------------------
    // 5. SCENE 4: OUR STORY CHAPTERS
    // -------------------------------------------------------------
    beginning: {
        dateBadge: "When Our Paths Crossed",
        headline: "The Day Ahsan Stepped Into My Life",
        bodyText: "Before you came along, Ahsan, days passed by in their usual quiet cadence. But from the moment we first talked, every hour began to carry a spark of warmth I had never felt before.",
        secretReflection: "I still remember our first talks, that laugh of yours that caught me off guard, and the quiet realization that my heart had already chosen you, Ahsan.",
        timestamp: "Preserved Forever in Memory"
    },

    littleThings: [
        {
            icon: "🌸",
            title: "The Sound of Ahsan's Laughter",
            text: "A melody that instantly lights up my darkest days. Hearing you genuinely laugh, Ahsan, is my absolute favorite sound in this universe."
        },
        {
            icon: "✨",
            title: "The Kindness in Your Eyes",
            text: "There is an unspoken gentleness in the way you look at the world, Ahsan a purity of heart that makes everything feel so peaceful."
        },
        {
            icon: "🌙",
            title: "Our Late Night Conversations",
            text: "When the whole world is asleep, sharing our innermost thoughts, silly jokes, and quiet vulnerabilities until hours feel like seconds with you, Ahsan."
        },
        {
            icon: "🕊️",
            title: "The Peace You Bring Me",
            text: "With you, Ahsan, I never have to wear a mask or pretend. Your presence is the quiet sanctuary my soul was always searching for."
        }
    ],

    memories: [
        {
            emoji: "🌌",
            title: "Under The Same Sky",
            date: "A Quiet Magical Evening",
            snippet: "Looking at the sky with Ahsan and realizing no star compared to you.",
            fullStory: "We were talking as the night deepened, sharing thoughts neither of us usually spoke out loud. That was the evening I realized home isn't a place it's a person, and for me, Ahsan, it has always been you."
        },
        {
            emoji: "☕",
            title: "Endless Little Moments",
            date: "Golden Hours",
            snippet: "Where time stopped, and laughing with Ahsan made everything right.",
            fullStory: "Those spontaneous moments where we laughed until our stomachs hurt. It was never about what we were doing, but simply sharing the same space with you, Ahsan, and feeling completely at peace."
        },
        {
            emoji: "🕊️",
            title: "The Silent Understanding",
            date: "A Quiet Promise",
            snippet: "When words weren't needed, and your presence was everything.",
            fullStory: "On the difficult days when the world felt heavy, you didn't have to fix everything, Ahsan. Just knowing you were there, holding space for me with unconditional patience, healed things words never could."
        }
    ],

    reasons: [
        {
            title: "Your Genuine Soul",
            text: "In a world where so many people put on masks, you remain effortlessly honest, profoundly caring, and deeply true to who you are, Ahsan."
        },
        {
            title: "How Safe You Make Me Feel",
            text: "Around you, Ahsan, my guard completely drops. You provide a comforting refuge where my fears dissolve into quiet calm."
        },
        {
            title: "Your Unmatched Compassion",
            text: "The way you notice small details, the way you care about feelings, and how you spread warmth, Ahsan, without expecting anything in return."
        },
        {
            title: "The Light You Bring",
            text: "Even on my gloomiest days, a single word or text from you, Ahsan, feels like dawn breaking over a dark horizon."
        },
        {
            title: "Your Beautiful Mind",
            text: "Talking to you is an adventure. Your perspective, your wisdom, and your emotional depth continually amaze and inspire me, Ahsan."
        },
        {
            title: "Simply Being Ahsan",
            text: "You don't have to try to be extraordinary; just being yourself, my sweetest Ahsan, is more than enough to capture my entire heart."
        }
    ],

    foreverVow: {
        heading: "Hold To Sync Our Heartbeats",
        message: "No matter where life leads us, Ahsan, no matter the distance or how many seasons turn, my fondness, respect, and unconditional love for you will remain constantl ike the North Star guiding a sailor home.",
        signature: "— Forever devoted to Ahsan"
    },

    // -------------------------------------------------------------
    // 6. SCENE 5: A LETTER FROM MY HEART
    // -------------------------------------------------------------
    letter: {
        date: "In the quiet of our eternity",
        greeting: "My Dearest Ahsan,",
        body: `I have sat down to write this a hundred times, Ahsan, and every time, ordinary words felt inadequate to capture what you truly mean to me.

From the moment our lives intertwined, you brought a gentle radiance into my world that I never knew was missing. You taught me that true connection isn't loud or demanding—it is soft, patient, understanding, and enduring.

Thank you, Ahsan, for every smile you've given me, for every quiet reassurance, for every shared laugh, and for simply being the most wonderful person I have ever had the blessing of knowing.

I promise to cherish you, to honor the bond we share, and to stand beside you through every season that tomorrow brings.`,
        closing: "Yours in every breath and lifetime,",
        signature: "Abdul Rehman"
    },

    // -------------------------------------------------------------
    // 7. SCENE 6: THE FINAL SURPRISE & CLIMAX
    // -------------------------------------------------------------
    finalClimax: {
        heading: "Ahsan, You Are My Greatest Blessing",
        quote: "If I had to live a thousand lifetimes, Ahsan, I would search the universe in every single one, just to find you all over again."
    }
};

/* ============================================================================
   WEB AUDIO API PROCEDURAL ROMANTIC SOUND ENGINE
   ============================================================================ */
class RomanticSoundscape {
    constructor() {
        this.ctx = null;
        this.isPlaying = false;
        this.timer = null;
        this.step = 0;
        this.gainNode = null;
        this.customAudio = document.getElementById('custom-audio');
        
        this.chordNotes = [
            [174.61, 220.00, 261.63, 329.63, 392.00], // F3, A3, C4, E4, G4
            [196.00, 246.94, 293.66, 329.63, 392.00], // G3, B3, D4, E4, G4
            [164.81, 196.00, 246.94, 293.66, 349.23], // E3, G3, B3, D4, F4
            [220.00, 261.63, 329.63, 392.00, 440.00]  // A3, C4, E4, G4, A4
        ];
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            this.gainNode = this.ctx.createGain();
            this.gainNode.gain.setValueAtTime(0.35, this.ctx.currentTime);
            this.gainNode.connect(this.ctx.destination);
        }
    }

    start() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        const customSrc = this.customAudio ? this.customAudio.getAttribute('src') : null;
        if (customSrc && customSrc.trim().length > 0) {
            this.customAudio.play().then(() => {
                this.isPlaying = true;
                this.updateUI();
            }).catch(() => {
                this.startProceduralSynth();
            });
        } else {
            this.startProceduralSynth();
        }
    }

    startProceduralSynth() {
        if (this.isPlaying) return;
        this.isPlaying = true;
        this.updateUI();

        const playNextArpeggio = () => {
            if (!this.isPlaying) return;
            const chordIndex = Math.floor(this.step / 4) % this.chordNotes.length;
            const chord = this.chordNotes[chordIndex];
            const noteFreq = chord[this.step % chord.length];

            this.playWarmBell(noteFreq, 2.5);

            if (this.step % 4 === 0) {
                this.playBassPad(chord[0] / 2, 4.0);
            }

            this.step++;
            const tempo = 650 + Math.random() * 200;
            this.timer = setTimeout(playNextArpeggio, tempo);
        };

        playNextArpeggio();
    }

    playWarmBell(freq, duration) {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1400, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.18, now + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.gainNode);

        osc.start(now);
        osc.stop(now + duration);
    }

    playBassPad(freq, duration) {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.gainNode);

        osc.start(now);
        osc.stop(now + duration);
    }

    stop() {
        this.isPlaying = false;
        if (this.timer) clearTimeout(this.timer);
        if (this.customAudio) {
            this.customAudio.pause();
        }
        this.updateUI();
    }

    toggle() {
        if (this.isPlaying) {
            this.stop();
        } else {
            this.start();
        }
    }

    playChime() {
        if (!this.ctx) this.init();
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
        const now = this.ctx.currentTime;
        const freqs = [523.25, 659.25, 783.99, 1046.50];
        freqs.forEach((f, i) => {
            setTimeout(() => {
                this.playWarmBell(f, 1.8);
            }, i * 80);
        });
    }

    updateUI() {
        const btn = document.getElementById('audio-toggle');
        const status = document.getElementById('audio-status');
        if (this.isPlaying) {
            btn?.classList.add('playing');
            if (status) status.textContent = 'Music: On';
        } else {
            btn?.classList.remove('playing');
            if (status) status.textContent = 'Music: Off';
        }
    }
}

/* ============================================================================
   COSMIC CANVAS & INTERACTIVE PARTICLE ENGINE
   ============================================================================ */
class CosmicCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.shootingStars = [];
        this.cursorParticles = [];
        this.mouse = { x: -1000, y: -1000, active: false };
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());

        const starCount = Math.min(220, Math.floor((this.width * this.height) / 5000));
        for (let i = 0; i < starCount; i++) {
            this.stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 1.6 + 0.4,
                baseAlpha: Math.random() * 0.7 + 0.3,
                twinkleSpeed: Math.random() * 0.03 + 0.01,
                twinklePhase: Math.random() * Math.PI * 2,
                color: Math.random() > 0.4 ? '#ffffff' : (Math.random() > 0.5 ? '#fbcfe8' : '#c084fc')
            });
        }

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.mouse.active = true;
            this.addCursorParticle(e.clientX, e.clientY);
        });

        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                this.mouse.x = touch.clientX;
                this.mouse.y = touch.clientY;
                this.mouse.active = true;
                this.addCursorParticle(touch.clientX, touch.clientY);
            }
        }, { passive: true });

        setInterval(() => {
            if (Math.random() > 0.3) {
                this.spawnShootingStar();
            }
        }, 3200);

        this.animate();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    addCursorParticle(x, y) {
        if (this.cursorParticles.length > 40) return;
        this.cursorParticles.push({
            x: x + (Math.random() - 0.5) * 14,
            y: y + (Math.random() - 0.5) * 14,
            radius: Math.random() * 2.2 + 0.8,
            alpha: 1,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8 - 0.5,
            color: Math.random() > 0.5 ? '#fb7185' : '#f472b6'
        });
    }

    spawnShootingStar() {
        const startX = Math.random() * this.width * 0.8;
        const startY = Math.random() * this.height * 0.4;
        const length = Math.random() * 90 + 70;
        const speed = Math.random() * 8 + 12;
        const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.2;

        this.shootingStars.push({
            x: startX,
            y: startY,
            len: length,
            speed: speed,
            angle: angle,
            alpha: 1,
            dead: false
        });
    }

    burstCelebration() {
        for (let i = 0; i < 6; i++) {
            setTimeout(() => this.spawnShootingStar(), i * 150);
        }

        const centerX = this.width / 2;
        const centerY = this.height / 2;
        for (let i = 0; i < 40; i++) {
            const angle = (Math.PI * 2 / 40) * i;
            const speed = Math.random() * 4 + 2;
            this.cursorParticles.push({
                x: centerX,
                y: centerY,
                radius: Math.random() * 3 + 1.5,
                alpha: 1,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: Math.random() > 0.5 ? '#f43f5e' : '#fde047'
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // 1. Stars
        this.stars.forEach(star => {
            star.twinklePhase += star.twinkleSpeed;
            const currentAlpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.35;
            
            this.ctx.save();
            this.ctx.fillStyle = star.color;
            this.ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();

            if (this.mouse.active) {
                const dist = Math.hypot(this.mouse.x - star.x, this.mouse.y - star.y);
                if (dist < 90) {
                    this.ctx.save();
                    this.ctx.strokeStyle = 'rgba(244, 114, 182, ' + (1 - dist / 90) * 0.35 + ')';
                    this.ctx.lineWidth = 0.8;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.mouse.x, this.mouse.y);
                    this.ctx.lineTo(star.x, star.y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
        });

        // 2. Shooting Stars
        for (let i = this.shootingStars.length - 1; i >= 0; i--) {
            const s = this.shootingStars[i];
            s.x += Math.cos(s.angle) * s.speed;
            s.y += Math.sin(s.angle) * s.speed;
            s.alpha -= 0.018;

            if (s.alpha <= 0) {
                this.shootingStars.splice(i, 1);
                continue;
            }

            const tailX = s.x - Math.cos(s.angle) * s.len;
            const tailY = s.y - Math.sin(s.angle) * s.len;

            const grad = this.ctx.createLinearGradient(tailX, tailY, s.x, s.y);
            grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
            grad.addColorStop(1, `rgba(255, 255, 255, ${s.alpha})`);

            this.ctx.save();
            this.ctx.strokeStyle = grad;
            this.ctx.lineWidth = 1.8;
            this.ctx.beginPath();
            this.ctx.moveTo(tailX, tailY);
            this.ctx.lineTo(s.x, s.y);
            this.ctx.stroke();
            this.ctx.restore();
        }

        // 3. Interactive Particles
        for (let i = this.cursorParticles.length - 1; i >= 0; i--) {
            const p = this.cursorParticles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.02;

            if (p.alpha <= 0) {
                this.cursorParticles.splice(i, 1);
                continue;
            }

            this.ctx.save();
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.alpha;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        }

        requestAnimationFrame(() => this.animate());
    }
}

/* ============================================================================
   MAIN CONTROLLER & SCENE MANAGEMENT
   ============================================================================ */
class RomanticExperienceApp {
    constructor() {
        this.soundscape = new RomanticSoundscape();
        this.canvas = new CosmicCanvas('cosmic-canvas');
        this.currentReasonIndex = 0;
        this.wishCount = 0;
        this.heartbeatTimer = null;
        this.holdProgress = 0;

        this.init();
    }

    init() {
        this.applyConfig();
        this.setupAudioListeners();
        this.setupScene1();
        this.setupScene2();
        this.setupScene3();
        this.setupScene4();
        this.setupScene5();
        this.setupScene6();
        this.setupCursorFollower();
        this.setupNavigation();
        this.startEternityTimer();
    }

    applyConfig() {
        const introQuoteEl = document.getElementById('intro-quote');
        if (introQuoteEl) introQuoteEl.textContent = `"${CONFIG.introQuote}"`;

        const displayRecipientEl = document.getElementById('display-recipient');
        if (displayRecipientEl) displayRecipientEl.textContent = "My Dearest One";

        const footerRecipientEl = document.getElementById('footer-recipient');
        if (footerRecipientEl) footerRecipientEl.textContent = CONFIG.recipientName;

        if (CONFIG.suspenseWhispers && CONFIG.suspenseWhispers.length >= 3) {
            const w1 = document.getElementById('whisper-1');
            const w2 = document.getElementById('whisper-2');
            const w3 = document.getElementById('whisper-3');
            if (w1) w1.textContent = CONFIG.suspenseWhispers[0];
            if (w2) w2.textContent = CONFIG.suspenseWhispers[1];
            if (w3) w3.textContent = CONFIG.suspenseWhispers[2];
        }

        const bBadge = document.getElementById('beginning-date-badge');
        const bHead = document.getElementById('beginning-headline');
        const bBody = document.getElementById('beginning-body-text');
        const bSec = document.getElementById('beginning-secret-text');
        const bTime = document.getElementById('beginning-timestamp');
        if (bBadge) bBadge.textContent = CONFIG.beginning.dateBadge;
        if (bHead) bHead.textContent = CONFIG.beginning.headline;
        if (bBody) bBody.textContent = CONFIG.beginning.bodyText;
        if (bSec) bSec.textContent = `"${CONFIG.beginning.secretReflection}"`;
        if (bTime) bTime.textContent = CONFIG.beginning.timestamp;

        const vHead = document.getElementById('vow-heading');
        const vMsg = document.getElementById('vow-message-text');
        const vSig = document.getElementById('vow-signature');
        if (vHead) vHead.textContent = CONFIG.foreverVow.heading;
        if (vMsg) vMsg.textContent = `"${CONFIG.foreverVow.message}"`;
        if (vSig) vSig.textContent = CONFIG.foreverVow.signature;

        const lDate = document.getElementById('letter-display-date');
        const lGreet = document.getElementById('letter-display-greeting');
        const lSig = document.getElementById('letter-display-signature');
        if (lDate) lDate.textContent = CONFIG.letter.date;
        if (lGreet) lGreet.textContent = CONFIG.letter.greeting;
        if (lSig) lSig.textContent = CONFIG.letter.signature;

        const fHead = document.getElementById('final-heading');
        const fMsg = document.getElementById('final-message');
        if (fHead) fHead.textContent = CONFIG.finalClimax.heading;
        if (fMsg) fMsg.textContent = `"${CONFIG.finalClimax.quote}"`;

        this.renderReasonDots();
        this.displayReason(0);
    }

    setupAudioListeners() {
        const toggleBtn = document.getElementById('audio-toggle');
        toggleBtn?.addEventListener('click', () => {
            this.soundscape.toggle();
        });
    }

    setupScene1() {
        const enterBtn = document.getElementById('btn-enter-world');
        const introScene = document.getElementById('scene-intro');

        enterBtn?.addEventListener('click', () => {
            this.soundscape.start();
            this.soundscape.playChime();
            introScene?.classList.add('fade-out');

            setTimeout(() => {
                this.triggerScene2();
            }, 800);
        });
    }

    setupScene2() {}

    triggerScene2() {
        const suspenseScene = document.getElementById('scene-suspense');
        const whisper1 = document.getElementById('whisper-1');
        const whisper2 = document.getElementById('whisper-2');
        const whisper3 = document.getElementById('whisper-3');
        const countdownSphere = document.getElementById('countdown-sphere');
        const countdownNumber = document.getElementById('countdown-number');
        const bloom = document.getElementById('suspense-bloom');

        suspenseScene?.classList.add('active');

        setTimeout(() => {
            whisper1?.classList.add('show');
            this.soundscape.playChime();
        }, 800);

        setTimeout(() => {
            whisper1?.classList.remove('show');
            whisper2?.classList.add('show');
        }, 3200);

        setTimeout(() => {
            whisper2?.classList.remove('show');
            whisper3?.classList.add('show');
        }, 5800);

        setTimeout(() => {
            whisper3?.classList.remove('show');
            countdownSphere?.classList.add('show');

            let count = 3;
            if (countdownNumber) countdownNumber.textContent = count;

            const countInterval = setInterval(() => {
                count--;
                if (count > 0) {
                    if (countdownNumber) countdownNumber.textContent = count;
                    this.soundscape.playWarmBell(440 + count * 80, 0.8);
                } else {
                    clearInterval(countInterval);
                    if (countdownNumber) countdownNumber.textContent = "✦";
                    bloom?.classList.add('flash');

                    setTimeout(() => {
                        suspenseScene?.classList.remove('active');
                        this.revealMainUniverse();
                    }, 1000);
                }
            }, 1000);
        }, 8400);
    }

    revealMainUniverse() {
        const mainExp = document.getElementById('main-experience');
        const storyNav = document.getElementById('story-nav');
        mainExp?.classList.add('active');
        storyNav?.classList.add('visible');

        window.scrollTo({ top: 0, behavior: 'instant' });

        this.typewriterEffect(
            'universe-typewriter-text',
            CONFIG.universeMainQuote,
            50
        );

        this.canvas.burstCelebration();
    }

    setupScene3() {
        const starNodes = document.querySelectorAll('.star-node');
        const whisperBoxText = document.getElementById('whisper-display-text');

        starNodes.forEach(node => {
            const handleSelect = () => {
                starNodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');
                const whisper = node.getAttribute('data-whisper');
                if (whisperBoxText && whisper) {
                    whisperBoxText.style.opacity = '0';
                    setTimeout(() => {
                        whisperBoxText.textContent = `"${whisper}"`;
                        whisperBoxText.style.opacity = '1';
                    }, 200);
                }
                this.soundscape.playWarmBell(659.25, 1.2);
            };

            node.addEventListener('click', handleSelect);
            node.addEventListener('mouseenter', handleSelect);
        });

        const scrollHint = document.querySelector('.scroll-down-hint');
        scrollHint?.addEventListener('click', () => {
            const chapter1 = document.getElementById('chapter-beginning');
            chapter1?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    typewriterEffect(elementId, text, speed = 40, callback = null) {
        const el = document.getElementById(elementId);
        if (!el) return;
        el.textContent = '';
        let i = 0;

        const typeInterval = setInterval(() => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                if (callback) callback();
            }
        }, speed);
    }

    setupScene4() {
        const beginningCard = document.getElementById('card-beginning');
        const btnFlipBack = document.querySelector('.btn-flip-back');

        beginningCard?.addEventListener('click', (e) => {
            if (e.target === btnFlipBack || e.target.closest('.btn-flip-back')) {
                beginningCard.classList.remove('flipped');
            } else {
                beginningCard.classList.toggle('flipped');
            }
            this.soundscape.playWarmBell(523.25, 0.9);
        });

        const polaroids = document.querySelectorAll('.polaroid-frame');
        const modal = document.getElementById('memory-modal');
        const modalBackdrop = document.getElementById('modal-backdrop');
        const modalClose = document.getElementById('btn-modal-close');
        const modalTitle = document.getElementById('modal-title');
        const modalDate = document.getElementById('modal-date');
        const modalStory = document.getElementById('modal-story');
        const modalIcon = document.getElementById('modal-icon');

        polaroids.forEach((card) => {
            card.addEventListener('click', () => {
                const index = parseInt(card.getAttribute('data-index') || '0', 10);
                const memory = CONFIG.memories[index];
                if (memory) {
                    if (modalTitle) modalTitle.textContent = memory.title;
                    if (modalDate) modalDate.textContent = memory.date;
                    if (modalStory) modalStory.textContent = `"${memory.fullStory}"`;
                    if (modalIcon) modalIcon.textContent = memory.emoji;
                    modal?.classList.add('open');
                    this.soundscape.playChime();
                }
            });
        });

        const closeModal = () => modal?.classList.remove('open');
        modalBackdrop?.addEventListener('click', closeModal);
        modalClose?.addEventListener('click', closeModal);

        const btnPrev = document.getElementById('btn-reason-prev');
        const btnNext = document.getElementById('btn-reason-next');
        const btnRandom = document.getElementById('btn-random-reason');

        btnPrev?.addEventListener('click', () => {
            this.currentReasonIndex = (this.currentReasonIndex - 1 + CONFIG.reasons.length) % CONFIG.reasons.length;
            this.displayReason(this.currentReasonIndex);
            this.soundscape.playWarmBell(440, 0.6);
        });

        btnNext?.addEventListener('click', () => {
            this.currentReasonIndex = (this.currentReasonIndex + 1) % CONFIG.reasons.length;
            this.displayReason(this.currentReasonIndex);
            this.soundscape.playWarmBell(587.33, 0.6);
        });

        btnRandom?.addEventListener('click', () => {
            let nextIdx;
            do {
                nextIdx = Math.floor(Math.random() * CONFIG.reasons.length);
            } while (nextIdx === this.currentReasonIndex && CONFIG.reasons.length > 1);
            this.currentReasonIndex = nextIdx;
            this.displayReason(this.currentReasonIndex);
            this.soundscape.playChime();
        });

        this.setupHeartbeatHold();
    }

    renderReasonDots() {
        const dotsContainer = document.getElementById('reason-dots');
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';

        CONFIG.reasons.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = `reason-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                this.currentReasonIndex = i;
                this.displayReason(i);
            });
            dotsContainer.appendChild(dot);
        });
    }

    displayReason(index) {
        const reason = CONFIG.reasons[index];
        if (!reason) return;

        const badge = document.getElementById('reason-num-badge');
        const title = document.getElementById('reason-title');
        const detail = document.getElementById('reason-detail');
        const counter = document.getElementById('reason-counter');
        const dots = document.querySelectorAll('.reason-dot');

        if (badge) badge.textContent = `#${String(index + 1).padStart(2, '0')}`;
        if (title) {
            title.style.opacity = '0';
            setTimeout(() => {
                title.textContent = reason.title;
                title.style.opacity = '1';
            }, 150);
        }
        if (detail) {
            detail.style.opacity = '0';
            setTimeout(() => {
                detail.textContent = reason.text;
                detail.style.opacity = '1';
            }, 150);
        }
        if (counter) counter.textContent = `Reason ${index + 1} of ${CONFIG.reasons.length}`;

        dots.forEach((d, i) => {
            d.classList.toggle('active', i === index);
        });
    }

    setupHeartbeatHold() {
        const holdBtn = document.getElementById('btn-heartbeat-hold');
        const progressFill = document.getElementById('hold-progress-fill');
        const holdText = document.getElementById('hold-text');
        const heartPulse = document.getElementById('vow-heart-pulse');
        const unlockedMessage = document.getElementById('unlocked-vow-message');

        let isHolding = false;
        let progress = 0;

        const startHold = () => {
            if (isHolding) return;
            isHolding = true;
            heartPulse?.classList.add('beating');
            if (holdText) holdText.textContent = 'Synchronizing...';

            this.heartbeatTimer = setInterval(() => {
                progress += 2;
                if (progressFill) progressFill.style.width = `${progress}%`;

                if (progress % 20 === 0) {
                    this.soundscape.playWarmBell(220 + progress * 2, 0.4);
                }

                if (progress >= 100) {
                    clearInterval(this.heartbeatTimer);
                    isHolding = false;
                    if (holdText) holdText.textContent = 'Heartbeats Synchronized ♥';
                    unlockedMessage?.classList.add('revealed');
                    this.canvas.burstCelebration();
                    this.soundscape.playChime();
                }
            }, 40);
        };

        const cancelHold = () => {
            if (!isHolding) return;
            isHolding = false;
            clearInterval(this.heartbeatTimer);
            if (progress < 100) {
                progress = 0;
                if (progressFill) progressFill.style.width = '0%';
                if (holdText) holdText.textContent = 'Hold Me Close';
                heartPulse?.classList.remove('beating');
            }
        };

        holdBtn?.addEventListener('mousedown', startHold);
        window.addEventListener('mouseup', cancelHold);
        holdBtn?.addEventListener('touchstart', (e) => {
            e.preventDefault();
            startHold();
        });
        window.addEventListener('touchend', cancelHold);
    }

    setupScene5() {
        const waxSeal = document.getElementById('wax-seal');
        const envelopeWrapper = document.getElementById('envelope-wrapper');
        const envelopeStage = document.getElementById('envelope-stage');
        const btnCloseLetter = document.getElementById('btn-close-letter');
        const btnToFinal = document.getElementById('btn-to-final');

        waxSeal?.addEventListener('click', () => {
            this.soundscape.playChime();
            envelopeWrapper?.classList.add('is-open');
            envelopeStage?.classList.add('stage-expanded');

            setTimeout(() => {
                this.typewriterEffect(
                    'letter-body-typewriter',
                    CONFIG.letter.body,
                    30,
                    () => {
                        if (btnToFinal) btnToFinal.style.display = 'inline-flex';
                        if (btnCloseLetter) btnCloseLetter.style.display = 'inline-block';
                    }
                );
            }, 900);
        });

        btnCloseLetter?.addEventListener('click', () => {
            envelopeWrapper?.classList.remove('is-open');
            envelopeStage?.classList.remove('stage-expanded');
            if (btnCloseLetter) btnCloseLetter.style.display = 'none';
        });

        btnToFinal?.addEventListener('click', () => {
            const finalScene = document.getElementById('scene-final');
            finalScene?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    setupScene6() {
        const btnWish = document.getElementById('btn-send-wish');
        const wishCountEl = document.getElementById('wish-count');
        const btnReplay = document.getElementById('btn-replay-experience');
        const btnAmbient = document.getElementById('btn-ambient-mode');

        btnWish?.addEventListener('click', () => {
            this.wishCount++;
            if (wishCountEl) wishCountEl.textContent = this.wishCount;
            this.canvas.burstCelebration();
            this.soundscape.playChime();
        });

        // Grand Climax Confession: I LOVE YOU Ahsan
        const btnConfession = document.getElementById('btn-final-confession');
        const loveOverlay = document.getElementById('Ahsan-love-overlay');
        const btnCloseLove = document.getElementById('btn-close-love-overlay');
        const loveBackdrop = document.getElementById('love-overlay-backdrop');
        const climaxAudio = document.getElementById('special-climax-audio');

        btnConfession?.addEventListener('click', () => {
            // Stop current ambient background music
            this.soundscape.stop();

            // Play Dedicated Special Climax Song for Ahsan
            if (climaxAudio) {
                climaxAudio.currentTime = 0;
                climaxAudio.volume = 1;
                climaxAudio.play().catch(err => {
                    console.log("Special audio play note:", err);
                    this.soundscape.playChime();
                });
            }

            // Reveal the Grand Loving Overlay
            loveOverlay?.classList.add('open');

            // Multiple Star & Celestial Particle Bursts
            this.canvas.burstCelebration();
            for (let i = 0; i < 4; i++) {
                setTimeout(() => this.canvas.burstCelebration(), (i + 1) * 400);
            }
        });

        const closeLoveOverlay = () => {
            loveOverlay?.classList.remove('open');
        };

        btnCloseLove?.addEventListener('click', closeLoveOverlay);
        loveBackdrop?.addEventListener('click', closeLoveOverlay);

        btnReplay?.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                location.reload();
            }, 800);
        });

        let ambientMode = false;
        btnAmbient?.addEventListener('click', () => {
            ambientMode = !ambientMode;
            const elementsToHide = document.querySelectorAll('.final-text-container, .story-nav, .universe-header');
            elementsToHide.forEach(el => {
                el.style.opacity = ambientMode ? '0' : '1';
                el.style.transition = 'opacity 1s';
            });
            if (btnAmbient) {
                btnAmbient.querySelector('span').textContent = ambientMode ? '✦ Exit Ambient Mode' : '🌌 Ambient Stargaze Mode';
            }
        });
    }

    startEternityTimer() {
        const daysEl = document.getElementById('time-days');
        const hoursEl = document.getElementById('time-hours');
        const minsEl = document.getElementById('time-minutes');
        const secsEl = document.getElementById('time-seconds');

        const startDate = new Date(CONFIG.relationshipStartDate).getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const diff = Math.max(0, now - startDate);

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
            if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
        };

        updateTimer();
        setInterval(updateTimer, 1000);
    }

    setupCursorFollower() {
        const glow = document.getElementById('cursor-glow');
        if (!glow) return;

        window.addEventListener('mousemove', (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    }

    setupNavigation() {
        const dots = document.querySelectorAll('.nav-dot');
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const targetId = dot.getAttribute('data-target');
                const targetEl = document.getElementById(targetId);
                targetEl?.scrollIntoView({ behavior: 'smooth' });
            });
        });

        const sections = [
            'scene-universe',
            'chapter-beginning',
            'chapter-little-things',
            'chapter-memories',
            'chapter-reasons',
            'chapter-forever',
            'scene-letter',
            'scene-final'
        ];

        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        dots.forEach(d => {
                            d.classList.toggle('active', d.getAttribute('data-target') === id);
                        });
                    }
                }
            });
        }, { passive: true });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RomanticExperienceApp();
});
