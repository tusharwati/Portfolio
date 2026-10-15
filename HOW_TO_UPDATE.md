# HOW TO UPDATE MY PORTFOLIO

Welcome! Your portfolio was built using a **data-driven architecture**. This means you **never** need to touch React components, HTML, or CSS to update your portfolio's content.

All your content lives in simple, readable JavaScript files inside `src/data/`.

---

## 📁 Quick Reference: Where to Change What

| What do you want to change? | File to edit |
|---|---|
| **Your Name, Bio, Links, Email** | [`src/data/profile.js`](file:///src/data/profile.js) |
| **Add, Edit, or Remove Projects** | [`src/data/projects.js`](file:///src/data/projects.js) |
| **Add, Edit, or Remove Skills** | [`src/data/skills.js`](file:///src/data/skills.js) |
| **Internships & Work Experience** | [`src/data/experience.js`](file:///src/data/experience.js) |
| **College, Degree, Coursework** | [`src/data/education.js`](file:///src/data/education.js) |
| **Certifications & Licenses** | [`src/data/certifications.js`](file:///src/data/certifications.js) |
| **Your Resume PDF** | Replace [`public/resume.pdf`](file:///public/resume.pdf) |

---

## 1. How to Add a New Project

Open [`src/data/projects.js`](file:///src/data/projects.js) and add a new item inside the `projects` array:

```javascript
{
  id: 7, // Increment the ID number
  title: "Distributed Key-Value Store",
  category: "Systems / Hardware", // "AI / ML" | "Web Development" | "Systems / Hardware" | "Blockchain" | "Software"
  status: "Completed", // "Completed" or "Currently Developing"
  featured: true, // true or false
  date: "2025",
  description: "A fast, in-memory distributed key-value store using Raft consensus.",
  detailedDescription: "Architected a high-throughput key-value store with leader election, log replication, and client failover.",
  features: [
    "Raft consensus protocol implementation",
    "gRPC client-server communication",
    "Persistent WAL (Write-Ahead Logging)"
  ],
  technologies: ["Go", "gRPC", "Docker", "Distributed Systems"],
  github: "https://github.com/tusharwati/my-kv-store", // Or null if private
  liveDemo: null, // Or "https://my-demo.com" (if null, button is cleanly hidden)
  image: null // Optional image path in /public (e.g. "/projects/kv.png")
}
```

> **Note on buttons**: If `github` or `liveDemo` is `null` or empty, the button is automatically hidden. No broken or empty buttons will ever appear.

---

## 2. How to Add or Modify Skills

Open [`src/data/skills.js`](file:///src/data/skills.js). Locate the category and add your skill:

```javascript
// Example: Adding TypeScript to Web Development
{
  id: "web",
  title: "Web Development",
  description: "Modern frontend and backend technologies for web apps",
  skills: [
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3 / Tailwind", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "TypeScript", level: "Proficient" }, // <-- Just add this line!
    { name: "React", level: "Proficient" },
    { name: "Node.js", level: "Working Knowledge" },
    { name: "PHP", level: "Proficient" }
  ]
}
```

To remove a skill, simply delete that line.

---

## 3. How to Update Experience & Internships

Open [`src/data/experience.js`](file:///src/data/experience.js) and add an object:

```javascript
{
  id: 2,
  company: "New Tech Labs",
  role: "Software Engineering Intern",
  type: "Internship", // "Internship" | "Full-time" | "Part-time"
  duration: "Jun 2025 – Aug 2025",
  location: "Pune, India",
  description: "Worked on core backend microservices and streaming pipelines.",
  highlights: [
    "Improved message throughput by 35% using asynchronous worker pools",
    "Implemented automated unit and integration tests with 90% coverage"
  ],
  technologies: ["Python", "FastAPI", "Redis", "Docker"]
}
```

---

## 4. How to Update Education

Open [`src/data/education.js`](file:///src/data/education.js). Replace the placeholder institution with your actual college/university name:

```javascript
{
  id: 1,
  degree: "Bachelor of Engineering / B.Tech",
  field: "Computer Engineering / Software Engineering",
  institution: "Your University / College Name",
  duration: "2022 – 2026",
  location: "Maharashtra, India",
  grade: "CGPA: 8.8 / 10", // Optional: leave empty string if not needed
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks"
  ]
}
```

---

## 5. How to Add a Certification

Open [`src/data/certifications.js`](file:///src/data/certifications.js) and add:

```javascript
{
  id: 3,
  name: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services (AWS)",
  issueDate: "2025",
  credentialUrl: "https://aws.amazon.com/verification/...", // Optional verification link
  certificateFile: "", // Optional local PDF or image
  skills: ["Cloud Computing", "AWS", "IAM", "S3", "EC2"]
}
```

---

## 6. How to Change Personal Info & Social Links

Open [`src/data/profile.js`](file:///src/data/profile.js):

- Change `name`, `role`, `location`
- Change `email` to your active email
- Change `github` and `linkedin` URLs
- Update `bio` or paragraphs in `about`

Everything across the Navbar, Hero, About, Contact, and Footer updates automatically.

---

## 7. How to Replace Your Resume

1. Name your PDF file `resume.pdf`.
2. Paste it directly into the `public/` directory (replacing `public/resume.pdf`).
3. That's it! All "Download Resume" buttons across the website will instantly serve your new resume.

---

## 8. How to Test & Deploy

### Run locally in development mode:
```powershell
npm run dev
```

### Build for production:
```powershell
npm run build
```

The output will be placed in `dist/`. You can deploy this folder directly to **Vercel**, **Netlify**, **GitHub Pages**, or **Cloudflare Pages**.

