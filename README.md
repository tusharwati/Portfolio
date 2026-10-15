# Tushar Wati — Software Developer Portfolio

A professional, modern, clean, and responsive developer portfolio built with React, Vite, and Tailwind CSS.

Designed with an **engineering-first, minimal aesthetic** tailored for software engineering job applications, campus placements, internships, and recruiter evaluations.

---

## ⚡ Key Highlights

- **Data-Driven Architecture**: Update projects, skills, experience, education, certifications, and profile info by simply editing data files in `src/data/`. Zero UI modification needed.
- **Minimalist & Professional Design**: Slate & neutral developer color palette, subtle borders, high-contrast typography, and zero gimmicky animations or neon.
- **Projects Showcase & Architecture Modal**: Interactive category filtering (`AI / ML`, `Web Development`, `Systems / Hardware`, `Blockchain`, `Software`) with detailed pop-over modals for deep architectural dives.
- **Honest Status Badging**: Accurately labels active research and development work (e.g. *PCIe Link in Renode* marked as *Currently Developing*).
- **Dark / Light Mode**: Smooth theme toggling with system preference detection and `localStorage` persistence.
- **Real Resume Serving**: Direct PDF download integration via `public/resume.pdf`.
- **Zero Fake Submissions**: Clean contact hub with one-click email copying, pre-formatted native mail client launcher, and direct verified social channels.
- **100% Accessible & Responsive**: Fully responsive across mobile (375px, 480px), tablet (768px, 1024px), laptop (1440px), and wide monitors (1920px+).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide Icons + Custom Crisp Vector SVGs
- **Fonts**: Inter (Sans) + Fira Code (Monospace)
- **Code Quality**: Oxlint (0 errors, 0 warnings)

---

## 📖 How to Update Your Portfolio

For complete step-by-step instructions on updating projects, skills, experiences, and resume, see:

👉 **[HOW_TO_UPDATE.md](./HOW_TO_UPDATE.md)**

### Data Files Directory:
```text
src/
└── data/
    ├── profile.js        # Name, titles, bio, email, GitHub/LinkedIn links
    ├── projects.js       # All projects, categories, descriptions, tech stack, links
    ├── skills.js         # Categorized skills (Languages, Web, AI/ML, Databases, Tools)
    ├── experience.js     # Internships and work history (e.g. RBtech Services)
    ├── education.js      # University, degree, coursework
    └── certifications.js # Certifications and credential links
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

The compiled, production-ready website will be generated in `dist/`.

---

## 📄 License
MIT License. Created for Tushar Wati.
