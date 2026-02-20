# Portfolio Website — SPEC.md
> This document is the single source of truth for building Nithineshwar Reddy Songala's personal portfolio website.
> Cursor: Read this entire file before writing any code. Follow every section carefully.

---

## 1. Owner Information

| Field | Value |
|---|---|
| Full Name | Nithineshwar Reddy Songala |
| Preferred Name | Nithin |
| Domain | nithinsongala.me |
| Email (public) | reddy.nithin.0331@gmail.com |
| GitHub | https://github.com/reddy-nithin |
| LinkedIn | https://www.linkedin.com/in/nithin-songala/ |

---

## 2. Hero Tagline

Use this as the main headline in the Hero section:

> **"Turning raw data into real decisions — one pipeline at a time."**

Subheadline (shown below the tagline):
> MS Data Science candidate at UMKC | Data Engineer & AI Builder | Open to full-time roles in 2026

---

## 3. Aesthetic & Design Direction

- **Theme:** Dark mode only. No light mode toggle needed.
- **Feel:** Techy, clean, minimal — inspired by brittanychiang.com
- **Color Palette:**
  - Background: `#0a0a0f` (near black)
  - Surface/Cards: `#111118`
  - Primary Accent: `#7c3aed` (electric violet — techy, modern)
  - Secondary Accent: `#06b6d4` (cyan — data/tech vibe)
  - Text Primary: `#e2e8f0`
  - Text Muted: `#64748b`
- **Typography:**
  - Headings: `Space Grotesk` (Google Fonts)
  - Body: `Inter` (Google Fonts)
  - Code/mono elements: `Fira Code` (Google Fonts)
- **Animations:** Subtle scroll-triggered fade-ins, smooth hover effects on cards and links. Nothing distracting.
- **Layout:** Single-page with smooth scroll navigation. Fixed sidebar nav on desktop (like brittanychiang.com), hamburger menu on mobile.

---

## 4. Tech Stack

- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (via @astro/react integration) or CSS transitions
- **Deployment:** GitHub Pages
- **Custom Domain:** nithinsongala.me (configured via CNAME)

---

## 5. Site Sections (in order)

### 5.1 — Navigation
- Fixed left sidebar on desktop with: Name at top, nav links (About, Experience, Projects, Skills, Blog, Contact), and social icons at the bottom (GitHub, LinkedIn, Email)
- On mobile: top navbar with hamburger menu
- Active section should highlight in the nav on scroll

### 5.2 — Hero / Intro
- Full viewport height section
- Greeting: "Hi, I'm"
- Name: "Nithineshwar Reddy Songala" with "Nithin" highlighted in accent color
- Tagline: (see Section 2)
- Two CTA buttons: "View My Work" (scrolls to Projects) and "Download Resume" (links to a PDF resume file in /public/resume.pdf)
- Subtle animated background — consider a dark grid pattern or floating particle effect using CSS only

### 5.3 — About Me
Content to display:

"I'm a Data Science grad student at the University of Missouri–Kansas City (UMKC), specializing in building data pipelines, AI-powered applications, and analytics systems that solve real problems.

I'm drawn to the intersection of data engineering and machine learning — where messy, raw data gets transformed into something that actually drives decisions. Whether it's building a RAG system for FDA drug data, automating city service pipelines, or designing risk reporting engines, I care deeply about the craft behind the data.

When I'm not in the terminal, you'll find me watching Formula 1 races, diving into a good film, exploring new places, or finding new music to get obsessed with."

- Include a professional photo placeholder — add a comment in the code: `<!-- Replace src with your actual photo path: /public/images/nithin.jpg -->`
- Small badges below the bio showing: UMKC, MS Data Science, Business Analytics, Graduating May 2026

### 5.4 — Experience / Resume

**Education:**
- **University of Missouri–Kansas City (UMKC)**
  - MS in Data Science
  - Business Analytics Certification
  - Expected Graduation: May 2026
  - Kansas City, MO

**Work Experience:**
- No formal work experience to display.
- Instead show a callout box: *"My experience lives in my projects — each one built to solve a real problem with production-grade thinking."*

**Certifications:**

- **Google Business Intelligence Specialization** — Google via Coursera, Apr 2025
  - Skills: Data Modeling, SQL, Tableau, Data Pipelines, Data Warehousing, Database Design, Data-driven Decision Making
  - Credential: [DHSSY2C7TBC4](https://www.coursera.org/account/accomplishments/specialization/DHSSY2C7TBC4)

- **Decisions, Decisions: Dashboards and Reports** — Google via Coursera, Aug 2025
  - Skills: Tableau, Business Intelligence, Data Visualization, Data Storytelling, Dashboards, Business Reporting
  - Credential: [3H562IHZCZUB](https://www.coursera.org/account/accomplishments/records/3H562IHZCZUB)

- **Data Analysis with R Programming** — Google via Coursera, Sep 2024
  - Skills: R, R Markdown, ggplot2, Tidyverse, Data Analysis, Data Visualization, Statistical Programming
  - Credential: [CNZ5NGG805XW](https://www.coursera.org/account/accomplishments/records/CNZ5NGG805XW)

- **AI Fluency for Students** — Anthropic, Feb 2026
  - Credential: [uod82faiycwg](https://verify.skilljar.com/c/uod82faiycwg)

### 5.5 — Projects

Display as a grid of cards. Each card shows: title, description, tech stack tags, and links (GitHub + live demo if available).

---

**Project 1: TruPharma MVP**
- **Description:** A Retrieval-Augmented Generation (RAG) application that answers drug-label questions using official FDA data. Provides evidence-based responses grounded in real regulatory documents.
- **Tech Stack:** Python, Streamlit, FAISS, BM25, Google Gemini LLM, Jupyter Notebook
- **GitHub:** https://github.com/reddy-nithin/TruPharma-MVP
- **Live Demo:** None
- **Badge:** `AI / RAG`

---

**Project 2: ReguCheck Risk Engine**
- **Description:** An end-to-end regulatory risk data pipeline demonstrating bank-grade loan risk reporting — covering data ingestion, validation, reconciliation, and interactive dashboards.
- **Tech Stack:** Python, Streamlit, Pandas, Data Validation
- **GitHub:** https://github.com/reddy-nithin/ReguCheck-Risk-Engine
- **Live Demo:** None
- **Badge:** `Data Engineering`

---

**Project 3: 311 KC Dashboard**
- **Description:** Automated data pipeline for Kansas City 311 service requests. Ingests, transforms, and loads data into Google BigQuery, visualized through Tableau dashboards. Scheduled with GitHub Actions.
- **Tech Stack:** Python, Google BigQuery, Tableau, GitHub Actions, ETL
- **GitHub:** https://github.com/reddy-nithin/-311-KC-Dashboard
- **Live Demo:** None
- **Badge:** `Data Pipeline`

---

**Project 4: UMKC Archives Data Extractor**
- **Description:** A Python automation tool for extracting, cleaning, and organizing date-related metadata from structured Excel files — designed for archival and library data management workflows.
- **Tech Stack:** Python, Pandas, OpenPyXL, Excel
- **GitHub:** https://github.com/reddy-nithin/UMKC-Archives-data-extractor
- **Live Demo:** None
- **Badge:** `Automation`

---

### 5.6 — Skills

Display as a visually organized grid grouped by category. Use icons where possible (use Devicons or Simple Icons CDN).

**Languages & Querying**
- Python, SQL

**Data Engineering**
- Apache Spark, Apache Kafka, ETL Pipelines, Google BigQuery, GitHub Actions

**AI & Machine Learning**
- RAG (Retrieval-Augmented Generation), FAISS, BM25, Google Gemini API, Scikit-learn

**Cloud**
- AWS, Google Cloud Platform (GCP), Azure (familiar)

**Visualization & BI**
- Tableau, Power BI, Streamlit

**Tools & Workflow**
- Git, GitHub, Jupyter, VS Code, Cursor

### 5.7 — Blog

- For now, show a placeholder section with 2-3 dummy cards styled correctly.
- Each card: Title, date, short excerpt, "Read More" link (linking to `#` for now)
- Add a comment in code: `<!-- NITHIN: Connect this to a real blog platform (Hashnode, Dev.to, or Astro Content Collections) when ready -->`
- Suggested future blog post titles to use as placeholders:
  - "Building a RAG Pipeline with FAISS and Gemini: What I Learned"
  - "Why Kansas City's 311 Data Is a Gold Mine for Data Engineers"
  - "From Raw FDA Data to Trusted Answers: The TruPharma Story"

### 5.8 — Contact

- Section headline: "Let's Build Something Together"
- Subtext: "I'm actively looking for full-time Data Engineering and Data Science roles starting mid-2026. If you have an opportunity or just want to connect, my inbox is always open."
- Show three contact cards: Email, LinkedIn, GitHub — each with icon, label, and a clickable link
- Email: reddy.nithin.0331@gmail.com
- LinkedIn: https://www.linkedin.com/in/nithin-songala/
- GitHub: https://github.com/reddy-nithin
- No contact form needed. Keep it simple.

### 5.9 — Footer
- Simple one-line footer: "Designed & Built by Nithin Songala"
- Small text below: "Deployed on GitHub Pages · nithinsongala.me"

---

## 6. SEO & Meta

Set the following in the Astro `<head>`:
- `title`: "Nithin Songala — Data Engineer & ML Builder"
- `description`: "Portfolio of Nithineshwar Reddy Songala — MS Data Science student at UMKC building data pipelines, RAG systems, and analytics platforms."
- `og:image`: `/public/images/og-preview.png` (placeholder — Nithin will add later)
- Canonical URL: `https://nithinsongala.me`

---

## 7. GitHub Pages Deployment Instructions

After building the site, configure it for GitHub Pages:

1. In `astro.config.mjs`, set:
   ```js
   export default defineConfig({
     site: 'https://nithinsongala.me',
     base: '/',
   });
   ```
2. Add a GitHub Actions workflow at `.github/workflows/deploy.yml` that:
   - Triggers on push to `main`
   - Builds the Astro site (`npm run build`)
   - Deploys the `dist/` folder to the `gh-pages` branch
3. Add a `CNAME` file in the `public/` folder containing: `nithinsongala.me`
4. In GitHub repo settings → Pages → set source to `gh-pages` branch

---

## 8. File Structure to Generate

```
portfolio/
├── public/
│   ├── CNAME                  ← contains: nithinsongala.me
│   ├── resume.pdf             ← Nithin adds manually
│   └── images/
│       ├── nithin.jpg         ← Nithin adds manually
│       └── og-preview.png     ← Nithin adds manually
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   ├── Blog.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── SPEC.md                    ← this file
```

---

## 9. Cursor Instructions

> Cursor: Follow these steps in order. Do not skip ahead.

1. Read this entire SPEC.md first.
2. Initialize an Astro project with Tailwind CSS: `npm create astro@latest` then add Tailwind with `npx astro add tailwind`
3. Build the `Layout.astro` with the correct fonts, meta tags, and global styles first.
4. Build `Nav.astro` next — fixed sidebar on desktop, hamburger on mobile.
5. Build each section component one at a time in this order: Hero → About → Experience → Projects → Skills → Blog → Contact → Footer.
6. Wire everything together in `index.astro`.
7. Add the GitHub Actions deploy workflow.
8. Add the CNAME file in `/public/`.
9. After each component, ask for review before moving to the next one.

---

*Last updated: February 2026*
