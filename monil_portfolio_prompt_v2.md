# 🚀 ANTIGRAVITY IDE — PORTFOLIO GENERATION PROMPT
## Monil Solanki · Full Stack Developer · Animated One-Page Portfolio
### Version 2.0 — Resume-Verified, Production Ready

---

## 🎯 PROJECT BRIEF

Build a **single-page, fully animated portfolio website** for **Monil Solanki**, a Full Stack Developer.
This is a pure **frontend-only** project — no backend, no server, no database needed.
Output: a React + Vite project (or single HTML file) that runs entirely in the browser.

---

## 👤 PERSONAL INFORMATION (verified from resume)

| Field | Value |
|-------|-------|
| **Full Name** | Monil Solanki |
| **Location** | Bhuj, Gujarat, India |
| **Email** | monilsolanki30@gmail.com |
| **Phone** | +91 9016460198 |
| **LinkedIn** | https://linkedin.com/in/monil-solanki |
| **GitHub** | https://github.com/MONIL555 |
| **Role** | Full Stack Developer (MERN + Next.js) |
| **Education** | B.Tech Computer Engineering — Silver Oak University, Ahmedabad (GPA: 9.28/10) |
| **Tagline** | "Building scalable web experiences — from REST APIs to responsive UIs." |
| **Summary** | Full-Stack Developer specializing in MERN stack and Next.js. Builds scalable RESTful APIs, AI-integrated web apps, and has reduced enterprise operational data entry by 40% through custom digital solutions. |

---

## 🎨 DESIGN DIRECTION

- **Vibe:** Colorful & Playful — rich gradients, glassmorphism cards, vibrant neon pops on deep dark background
- **Color Palette:**
  - Background: Deep dark navy `#0A0A1A` with radial dark-to-purple gradient
  - Accent 1 (Primary): Electric violet `#7C3AED`
  - Accent 2: Neon cyan `#06B6D4`
  - Accent 3: Hot magenta `#EC4899`
  - Accent 4 (success/available): Emerald green `#10B981`
  - Glass cards: `rgba(255,255,255,0.05)` + `backdrop-filter: blur(16px)` + `border: 1px solid rgba(255,255,255,0.1)`
  - Text primary: `#FFFFFF`
  - Text secondary: `#A1A1B5`
- **Typography:**
  - Display: **Space Grotesk** (800 weight) — hero name, section headings
  - Body: **Inter** (400/500) — paragraphs, card text
  - Mono: **JetBrains Mono** — code snippets, tech tags, GPA, dates
- **Aesthetic Keywords:** glassmorphism, neon-lit depth layers, floating gradient orbs, animated gradient text, glowing borders, neural particles

---

## 🛠️ FULL ANIMATION & TECH STACK

Integrate ALL of the following. Each tool has a specific assigned role:

### 3D — Threlte (threlte.xyz)
- `@threlte/core` + `@threlte/extras` with Three.js
- **Hero:** Rotating 3D tech globe — `IcosahedronGeometry` wireframe mesh + `useFrame` rotation
- Floating `<T.Sprite>` tech logo labels (React, Node, MongoDB, Next.js, MySQL) orbiting the globe
- Mouse parallax: globe tilts toward cursor using `useMouse`
- **Skills section:** Slowly drifting 3D torus geometry in background
- **About section:** Floating icosahedron behind the bio card

### Timeline Orchestration — Theatre.js
- `@theatre/core` for hero section entrance sequence
- Sheet animation order: Preloader exit → Nav slide-down → Eyebrow label fade → Name reveal → Tagline typewrite → CTA buttons pop-in → Social icons stagger
- Total hero entrance: ~2.8s orchestrated timeline

### Scroll + Layout Animations — Motion (motion.dev / Framer Motion)
- `useInView` with `once: true` and `margin: "-80px"` on every section
- `staggerChildren` variants on: skills grid, project cards, timeline entries, stats
- Layout animations on project filter tab switching
- SVG timeline path: `useScroll` + `useTransform` → `stroke-dashoffset` draws path as user scrolls
- Cursor spring ring: `useSpring` with `stiffness: 150, damping: 18`

### Micro-Animations — Anime.js
- Hero name text scramble on load (characters randomize → settle to "MONIL SOLANKI")
- Stats countup animations: GPA `0 → 9.28`, Data entry reduction `0 → 40%`, Users `0 → 35+`, API accuracy `0 → 85%`
- Floating particle field in hero background (80 dots, slow upward drift)
- Skill bar fill left→right on section enter
- Glitch effect on section title hover

### SVG Animations — SVGator
- Animated SVG portrait outline / abstract developer figure in About section
- Animated tech stack icon SVGs in Skills section (each icon has entrance draw animation)
- Timeline connector line: SVG path with animated stroke-dashoffset
- Decorative animated SVG blob shapes in Hero background

### Lottie Animations — Jitter (exported as Lottie JSON, played via `lottie-react`)
- **Preloader:** Spinning code brackets morphing into "MS" monogram
- **"Open to Work" badge:** Pulsing green dot with animated text ring
- **CTA Button hover:** Subtle arrow bounce Lottie on "View My Work"
- **Contact form submit:** Checkmark draw animation on successful send
- **Email/GitHub/LinkedIn hover:** Icon bounce micro-animation

### Generative Backgrounds — Endless Tools
- Hero: Seamless animated gradient mesh at 12% opacity (violet-cyan blend)
- About: Soft noise texture on glass card backgrounds at 8% opacity

### Cursor System
- Dot (8px, violet) follows mouse instantly via direct style mutation
- Ring (44px, transparent + violet border) follows with `lerp(0.12)` in `requestAnimationFrame`
- States: default → hover link (ring expands to 60px + fills) → click (ring squishes scaleX)
- `data-cursor="text"` attribute on headings changes ring to text beam

### Icons — Iconsax (`iconsax-react`)
- Navigation: Home, User, Code, Briefcase, Clock, Message icons
- Skills: use Iconsax tech/tool variants where available
- Social links: GitHub, LinkedIn, SMS (email), Call icons
- Project cards: Link, ArrowRight, Code1, ExternalLink icons
- Use `Bulk` variant for decorative, `Linear` for UI actions

### Visual Aesthetic Influences
- **Peach.io:** Dreamy soft gradient overlays on section-to-section transitions (subtle color wash)
- **Antlii.work:** Bold typography experiments — hero name has distortion/glitch on hover
- **Neurascapes:** Neural network particle canvas in Skills section background (nodes + proximity lines)
- **Spline.design:** Embed Spline viewer web component for hero globe fallback: `<script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.0/build/spline-viewer.js"></script>` with a public scene URL. Use Threlte as primary, Spline as fallback.

---

## 📐 PAGE SECTIONS — FULL SPECIFICATION

---

### SECTION 0 — PRELOADER
- Full-screen `#0A0A1A` overlay, centered
- Lottie animation: code brackets `{ }` morph into "MS" monogram (2s)
- SVG stroke-draw of "MONIL SOLANKI" text underneath (1s, delayed)
- Thin violet progress bar fills bottom of screen
- Exit: screen splits horizontally (top half slides up, bottom slides down) revealing the site beneath
- Disable body scroll during preloader

---

### SECTION 1 — STICKY NAVIGATION
- `position: fixed; top: 0; z-index: 100`
- `background: rgba(10,10,26,0.7); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255,255,255,0.08)`
- **Left:** "MS" monogram logo — gradient violet→cyan, glows on hover
- **Center links:** Home · About · Skills · Work · Journey · Contact
  - Active section: animated violet underline (Motion layout `layoutId="nav-underline"`)
  - Hover: letter spacing expands slightly (CSS transition)
- **Right:** "Open to Work" pill — green pulsing dot (Lottie) + "Available" text
- **Mobile:** Hamburger (Iconsax `HambergerMenu` icon) → full-screen overlay menu with staggered link entries

---

### SECTION 2 — HERO
Full viewport height (`100vh`). Two-column layout on desktop, stacked on mobile.

**Left Column (55%):**
```
[ Eyebrow: < FULL STACK DEVELOPER /> ]    ← JetBrains Mono, violet, blinking cursor
[ MONIL SOLANKI ]                          ← Space Grotesk 800, gradient violet→cyan, 72-96px
                                           ← Anime.js text scramble on load
[ Building scalable web experiences —     ← Inter 400, #A1A1B5, 20px
  from REST APIs to responsive UIs. ]
[ GPA: 9.28/10 · MERN Stack · Next.js ]  ← JetBrains Mono chips
[ btn: View My Work ↓ ]  [ btn: GitHub ↗ ]
[ Social row: GitHub · LinkedIn · Email · Phone ]
```
- Social icons: Iconsax Linear variant, 24px, hover → glow + translateY(-3px)
- GitHub links to: https://github.com/MONIL555
- LinkedIn links to: https://linkedin.com/in/monil-solanki
- Email links to: mailto:monilsolanki30@gmail.com

**Right Column (45%):**
- Threlte `<Canvas>` component, height 520px
- `IcosahedronGeometry` detail=1, wireframe, violet stroke
- Ambient point light (cyan) + directional light (violet)
- 6 floating tech labels orbiting: React · Node.js · Next.js · MongoDB · MySQL · Python
- `useFrame`: Y-axis rotation 0.003 rad/frame, slight X-axis bob
- Mouse parallax: `rotationX` and `rotationY` += mouse delta * 0.0008

**Background:**
- 3 large blurred gradient orbs (violet, cyan, magenta), `position: absolute`, CSS `@keyframes pulse` scale 1→1.08
- Anime.js particle field: 80 small dots, slow upward drift, wrap-around
- Endless Tools gradient mesh overlay at 12% opacity

---

### SECTION 3 — ABOUT ME
Two-column layout.

**Left: Bio Card (glassmorphism)**
- Circular avatar placeholder: initials "MS" in gradient circle, 120px, glowing violet border ring
- Name: **Monil Solanki** (Space Grotesk 700)
- Role badge: "Full Stack Developer" pill (violet/10 bg, violet text)
- Bio paragraph (verbatim from resume summary):
  > "Full-Stack Developer with a B.Tech in Computer Engineering (9.28 GPA), specializing in the MERN stack and Next.js. I build scalable RESTful APIs, AI-integrated web apps, and enterprise workflow systems that make real impact."
- Education block:
  - 🎓 B.Tech Computer Engineering — Silver Oak University, Ahmedabad (2023–2026) · GPA: 9.28/10
  - 📜 Diploma in Computer Engineering — Govt. Polytechnic Bhuj (2020–2023) · Score: 8.4/10
- Location: 📍 Bhuj, Gujarat, India

**Right: Stats Grid (2×2)**
Each stat card: glassmorphism + Iconsax icon + label + animated number (Anime.js countup on scroll enter)

| Icon | Number | Label |
|------|--------|-------|
| `<Graph>` | 9.28 | GPA Score |
| `<People>` | 35+ | Concurrent Users Served |
| `<PercentageSquare>` | 40% | Ops Efficiency Gained |
| `<Judge>` | 85%+ | AI Model Accuracy |

**Floating 3D element:** Threlte `IcosahedronGeometry` (small, 80px), slowly rotating in top-right corner
**SVGator illustration:** Animated abstract developer SVG (code brackets, laptop lines drawing in) on the left side background

---

### SECTION 4 — SKILLS / TECH STACK
**Section Title:** "Tech Stack" — Space Grotesk 800, gradient text, glitch effect on hover (Anime.js)

**Background:** Neural network canvas (full section width/height)
- 80 nodes placed randomly, each node drifts slowly
- Lines drawn between nodes within 130px distance, opacity proportional to distance
- Node color: violet/40%, line color: cyan/20%

**Skill Categories — 5 groups, each as a labeled glassmorphism card:**

**Languages**
`JavaScript (ES6+)` · `PHP` · `Python` · `SQL`

**Frontend**
`React.js` · `Next.js` · `Tailwind CSS` · `HTML5` · `CSS3`

**Backend**
`Node.js` · `Express.js` · `FastAPI` · `RESTful APIs`

**Databases**
`MongoDB` · `MySQL` · `PostgreSQL` · `Firebase`

**Tools & DevOps**
`Git` · `GitHub` · `Postman` · `Vercel` · `Netlify` · `Render`

Each skill chip:
- Glassmorphism pill: icon (Iconsax or custom SVG) + skill name + thin proficiency bar underneath
- Bar fills left→right on scroll enter (Motion animate `width: 0% → N%`)
- Entrance: chips stagger in from bottom (Motion, 0.05s delay between each)
- Threlte `TorusGeometry` floating in background, slowly rotating

---

### SECTION 5 — PROJECTS / WORK
**Section Title:** "Selected Work"

**Filter Tabs:** All · Full Stack · AI/ML · Backend
(Motion `layout` + `layoutId="project-filter"` animated pill indicator)

---

**PROJECT 1 — Lead to Ledger (PMS)** ⭐ FEATURED (full-width card)
- **Tech:** Next.js · MongoDB · Vercel
- **Description:** Custom Project Management System digitizing enterprise workflows for Port Links India. Serves 6+ active users, manages 200+ secure records across project, task, and financial modules.
- **Impact:** Reduced manual data entry by 40%, cut handoff time from 2 days → 30 minutes
- **Badge:** "LIVE · 6+ Users" (green pill)
- **Links:** GitHub button + Live Demo button (Iconsax ExternalLink)
- **Category tag:** Full Stack

**PROJECT 2 — CraftyCure (E-Commerce Platform)**
- **Tech:** React.js · Node.js · Express.js · MySQL · Firebase · Razorpay
- **Description:** Full-stack digital marketplace for handmade goods with live order tracking, seller dashboard, and secure payment processing.
- **Impact:** 35+ concurrent users, Razorpay payment integration, Cloudinary media storage
- **Badge:** "35+ Users" (cyan pill)
- **Links:** GitHub button
- **Category tag:** Full Stack

**PROJECT 3 — AI-Powered Healthcare Chatbot**
- **Tech:** Python · Scikit-Learn · NLP · TF-IDF · Logistic Regression
- **Description:** NLP-driven chatbot triaging patient inquiries across 10+ medical categories with 85%+ intent classification accuracy.
- **Impact:** 85%+ accuracy using TF-IDF vectorization and Logistic Regression
- **Badge:** "85% Accuracy" (magenta pill)
- **Links:** GitHub button
- **Category tag:** AI/ML

**PROJECT 4 — Inventory Management System**
- **Tech:** React.js · Node.js · Express.js · MySQL · Firebase
- **Description:** Responsive stock-tracking web app with real-time low-stock alerts and automated inventory reporting.
- **Impact:** Reduced manual stock-check times by 20%
- **Badge:** "20% Time Saved" (violet pill)
- **Links:** GitHub button
- **Category tag:** Full Stack

**Card hover effects:**
- `translateY(-8px)` + intensified glow border
- 3D CSS perspective tilt following cursor (mousemove event, `perspective: 1000px`)
- Gradient border animates on hover: violet → cyan → magenta → violet

---

### SECTION 6 — EXPERIENCE & JOURNEY / TIMELINE
**Section Title:** "My Journey"

**Layout:** Vertical center timeline, alternating left/right cards

**SVG center line:** Animated path that draws itself as user scrolls through section
- Motion `useScroll` + `useTransform` → `pathLength: 0 → 1`
- Color: gradient violet → cyan along path length
- Each node dot: glowing pulse animation when card enters view (CSS keyframe)

**Timeline entries (chronological, oldest → newest):**

```
[2020] ──●── Diploma in Computer Engineering
             Govt. Polytechnic Bhuj | Jun 2020 – May 2023
             Score: 8.4/10 · Foundation in CS, algorithms, databases

[2023] ──●── B.Tech in Computer Engineering
             Silver Oak University, Ahmedabad | Aug 2023 – May 2026
             GPA: 9.28/10 · DSA, DBMS, Web Technologies, Software Engineering

[2024] ──●── NPTEL Certification — Design and Analysis of Algorithms
             NPTEL & Skill India | 2024
             Top 10% nationally · Complexity analysis & dynamic programming

[2025] ──●── AI + Developer Certification
             AI Certs | 2025 — Completed with distinction
             Deep Learning · Applied AI with Python

[2026] ──●── Backend Developer Intern
             Port Links India Pvt. Ltd. | Gandhidham, Gujarat | Feb 2026 – Apr 2026
             • Lead-to-Ledger PMS (Next.js + MongoDB) — 6 core business modules
             • Reduced manual data entry by 40% for 6-person team
             • Handoff time: 2 days → 30 minutes
             • MVC pattern RESTful APIs — 30% faster feature deployment
```

Card design:
- Glassmorphism card, alternating left/right of center line
- Date in JetBrains Mono (violet)
- Title in Space Grotesk 600
- Org/institution in Inter 400 secondary color
- Bullet points where applicable
- Tech pills at bottom
- Cards slide in from left/right (Motion `x: ±80 → 0`) on scroll enter

---

### SECTION 7 — CONTACT
**Section Title:** "Let's Build Something Together" — animated gradient text shimmer

**Left Column:**
- Large display text: "Got a project idea? Let's talk."
- Contact details (each with Iconsax icon + animated reveal on scroll):
  - 📧 monilsolanki30@gmail.com (mailto link)
  - 📱 +91 9016460198
  - 📍 Bhuj, Gujarat, India
  - 🔗 linkedin.com/in/monil-solanki (external link)
  - 💻 github.com/MONIL555 (external link)
- "Available for Opportunities" badge — Lottie animated green pulse dot
- Social icon grid: GitHub · LinkedIn · Email · Phone (Iconsax Bulk variant, 36px, hover glow)

**Right Column — Contact Form (frontend only)**
- Glassmorphism form card
- Fields: Name · Email · Subject · Message (textarea)
- Input focus: violet glow `box-shadow: 0 0 0 2px rgba(124,58,237,0.5)`
- Submit button: "Send Message →" — Lottie checkmark animation plays on submit
- Form action: `mailto:monilsolanki30@gmail.com` OR Formspree endpoint
- Floating Anime.js geometric shapes (triangle, circle, square) drifting in background

**Background:** Large blurred orbs + Endless Tools animated mesh at low opacity

---

### SECTION 8 — FOOTER
- `© 2025 Monil Solanki · Built with React, Three.js & lots of ☕`
- Social icon row: GitHub (https://github.com/MONIL555) · LinkedIn (https://linkedin.com/in/monil-solanki) · Email
- "Back to top ↑" button — smooth scroll to hero, violet hover
- Thin animated gradient separator line above footer

---

## ⚙️ TECHNICAL REQUIREMENTS

### Stack
```
Framework:    React 18 + Vite
Styling:      TailwindCSS v3 + custom CSS (glassmorphism, cursor, scrollbar)
3D:           Three.js + @threlte/core + @threlte/extras
Animation:    framer-motion (Motion), animejs, @theatre/core
Icons:        iconsax-react
Lottie:       lottie-react
Fonts:        Google Fonts — Space Grotesk, Inter, JetBrains Mono
Build:        Vite, ESM modules
Deploy-ready: Vercel / Netlify (static export)
```

### Package.json dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "animejs": "^3.2.2",
    "@threlte/core": "^7.0.0",
    "@threlte/extras": "^8.0.0",
    "three": "^0.160.0",
    "@theatre/core": "^0.7.0",
    "iconsax-react": "^0.0.8",
    "lottie-react": "^2.4.0"
  }
}
```

### Performance
- `React.lazy` + `Suspense` for Hero3DGlobe component
- `loading="lazy"` on all images
- `prefers-reduced-motion` media query wrapping all animation hooks
- `requestAnimationFrame` throttle on mousemove listeners
- Lottie: use `DotLottiePlayer` lightweight variant

### Accessibility
- `aria-hidden="true"` on all decorative animated elements
- Full keyboard navigation on nav and contact form
- WCAG AA color contrast on all text
- Visible `outline: 2px solid #7C3AED` focus rings

### Responsiveness
- Mobile 375px: single column, 3D globe 220px centered, hamburger nav
- Tablet 768px: 2-column where applicable, reduced particle counts
- Desktop 1280px+: full layout as specified
- Breakpoints via Tailwind: `sm:` `md:` `lg:` `xl:`

---

## 🔧 IMPLEMENTATION NOTES FOR AI AGENT

1. **Threlte Globe:** `<Canvas>` → `<T.Mesh rotation.y={rot}><T.IcosahedronGeometry args={[2, 1]} /><T.MeshBasicMaterial wireframe color="#7C3AED" /></T.Mesh>`. Add `useFrame(({ clock }) => { mesh.current.rotation.y = clock.getElapsedTime() * 0.3 })`.

2. **Theatre.js Hero Sequence:** Create `const project = getProject('Portfolio')` and `const sheet = project.sheet('Hero')`. Create objects for: eyebrow, name, tagline, ctaButtons, socialIcons. Each gets `opacity` and `translateY` props animated in sequence with 0.3s stagger.

3. **Text Scramble (Anime.js):** On mount, for each letter in "MONIL SOLANKI", run `anime({ targets: letterEl, innerHTML: [randomChar, correctChar], duration: 800, delay: index * 60, easing: 'easeOutExpo' })`.

4. **Stats Countup:** `anime({ targets: statEl, innerHTML: [0, targetValue], round: 1, duration: 2000, easing: 'easeOutExpo' })` triggered by Intersection Observer.

5. **Neural Network Canvas (Skills bg):** Create 80 nodes with `{x, y, vx, vy}`. Each frame: move nodes, wrap at edges, draw lines between nodes where `distance < 130`. Use `rgba(6,182,212,0.15)` for lines, `rgba(124,58,237,0.4)` for node dots (3px radius).

6. **SVG Timeline Path:** `<motion.path d="M400,0 L400,2000" stroke="url(#timelineGradient)" strokeWidth="2" pathLength="1" style={{ pathLength: scrollYProgress }} />` where `scrollYProgress` comes from `useScroll({ target: timelineRef })`.

7. **Custom Cursor:** Two `<div>` elements outside all sections. Dot: `position:fixed; pointer-events:none; transform: translate(mouseX-4, mouseY-4)` updated directly. Ring: `position:fixed; pointer-events:none` with Motion `x` and `y` springs.

8. **Glassmorphism CSS:**
```css
.glass { 
  background: rgba(255,255,255,0.05); 
  backdrop-filter: blur(16px); 
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.10); 
  border-radius: 16px; 
}
```

9. **Gradient Text CSS:**
```css
.gradient-text { 
  background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 50%, #EC4899 100%); 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  background-clip: text; 
}
```

10. **Project Card 3D Tilt:** On `mousemove` over card, compute `rotX = (mouseY - cardCenterY) / cardHeight * 15` and `rotY = (mouseX - cardCenterX) / cardWidth * 15`. Apply `transform: perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`.

11. **Preloader exit:** After 2.8s, animate two halves: `anime({ targets: '.preloader-top', translateY: '-100%', duration: 600, easing: 'easeInOutExpo' })` and `anime({ targets: '.preloader-bottom', translateY: '100%', ...})`. Then `display: none` the preloader and trigger Theatre.js hero sequence.

12. **Section scroll reveal Motion variant:**
```js
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.1 } }
}
```

---

## 📦 FOLDER STRUCTURE

```
src/
├── components/
│   ├── Preloader.jsx           ← Lottie + SVG stroke + split exit
│   ├── Navbar.jsx              ← Glassmorphism + active indicator + mobile menu
│   ├── CustomCursor.jsx        ← Dot + spring ring cursor
│   ├── Hero.jsx                ← Layout + Theatre.js sequence trigger
│   ├── Hero3DGlobe.jsx         ← Threlte Canvas component (lazy loaded)
│   ├── About.jsx               ← Bio card + stats grid + SVGator SVG
│   ├── Skills.jsx              ← Category cards + proficiency bars
│   ├── NeuralCanvas.jsx        ← Canvas neural network background
│   ├── Projects.jsx            ← Filter tabs + project cards grid
│   ├── Timeline.jsx            ← SVG path + alternating cards
│   ├── Contact.jsx             ← Contact info + form
│   └── Footer.jsx
├── animations/
│   ├── theatreHero.js          ← Theatre.js project/sheet/objects
│   ├── textScramble.js         ← Anime.js scramble util
│   ├── motionVariants.js       ← All reusable Motion variants
│   └── countup.js              ← Anime.js countup util
├── data/
│   └── portfolio.js            ← All content: name, projects, skills, timeline
├── styles/
│   └── globals.css             ← Glassmorphism, cursor, scrollbar, gradient-text
├── assets/
│   ├── lottie/                 ← Lottie JSON files
│   └── svg/                    ← SVGator animated SVGs
└── App.jsx
```

---

## 📊 ANIMATION CHOREOGRAPHY — MASTER TABLE

| Section | Element | Animation | Library | Trigger |
|---------|---------|-----------|---------|---------|
| Preloader | Logo brackets | Lottie morph to "MS" | Lottie | On mount |
| Preloader | Name text | SVG stroke-dashoffset draw | SVGator | After 1s |
| Preloader | Exit | Split halves slide away | Anime.js | After 2.8s |
| Hero | Full entrance | Staggered sequence | Theatre.js | After preloader |
| Hero | Name "MONIL SOLANKI" | Text scramble | Anime.js | On mount |
| Hero | Particles | 80-dot upward drift | Anime.js | Continuous |
| Hero | 3D Globe | Y-axis rotation | Threlte/Three.js | Continuous |
| Hero | Globe | Cursor parallax tilt | Threlte useFrame | Mouse move |
| Hero | Background orbs | Scale pulse | CSS keyframes | Continuous |
| Nav | Active link | Underline slide | Motion layout | Scroll |
| About | Section entry | Fade up | Motion | Scroll enter |
| About | Stats numbers | Countup 0→value | Anime.js | Scroll enter |
| About | Floating shape | 3D rotation | Threlte | Continuous |
| Skills | Section entry | Stagger cards | Motion | Scroll enter |
| Skills | Proficiency bars | Width fill | Motion | Scroll enter |
| Skills | Background | Neural network nodes | Canvas/Vanilla JS | Continuous |
| Skills | Section title | Glitch on hover | Anime.js | Hover |
| Projects | Section entry | Stagger cards fly up | Motion | Scroll enter |
| Projects | Filter change | Layout animation | Motion layout | Click |
| Projects | Card hover | 3D tilt + glow | CSS perspective | Hover |
| Timeline | Path | SVG draws on scroll | Motion useScroll | Scroll |
| Timeline | Cards | Alternate slide L/R | Motion | Scroll enter |
| Timeline | Dot nodes | Glow pulse | CSS keyframes | Scroll enter |
| Contact | Section entry | Fade up stagger | Motion | Scroll enter |
| Contact | Form submit | Checkmark Lottie | Lottie | Submit |
| Cursor | Dot | Instant follow | Vanilla rAF | Mouse move |
| Cursor | Ring | Spring follow | Motion useSpring | Mouse move |
| Cursor | On link hover | Ring expand + fill | Motion | Hover |

---

## ✅ FINAL CHECKLIST

- [ ] Preloader runs and exits cleanly (2.8s max)
- [ ] Custom cursor renders on desktop, hidden on mobile
- [ ] Hero 3D globe rotates + mouse parallax works
- [ ] "MONIL SOLANKI" text scramble plays on load
- [ ] All 6 sections present with real resume content
- [ ] All social links use correct URLs (GitHub, LinkedIn, email)
- [ ] Project filter works with Motion layout animation
- [ ] Timeline SVG path draws on scroll with real experience data
- [ ] Stats countup: 9.28 GPA · 40% efficiency · 35+ users · 85% accuracy
- [ ] Contact form sends to monilsolanki30@gmail.com
- [ ] Neural network canvas running in Skills section
- [ ] Glassmorphism renders correctly (backdrop-filter)
- [ ] Fully responsive: 375px mobile → 1440px desktop
- [ ] `prefers-reduced-motion` respected across all animations
- [ ] No console errors on initial load
- [ ] Page loads under 3.5s (3D lazy loaded)
- [ ] All external links open in new tab (`target="_blank" rel="noopener"`)

---

*Portfolio for: Monil Solanki | monilsolanki30@gmail.com | github.com/MONIL555 | linkedin.com/in/monil-solanki*
*Generated for: Antigravity IDE AI Agent | Version 2.0 | Resume-verified*
