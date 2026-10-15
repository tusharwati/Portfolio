/**
 * ==============================================================================
 * WORK EXPERIENCE CONFIGURATION
 * ==============================================================================
 * To add a new work experience or internship:
 * Copy one of the objects below, update its values, and add it to the array.
 * New experiences will automatically appear in reverse-chronological order or array order.
 *
 * Supported Fields:
 * - id: Unique number or string
 * - company: Company / Organization name
 * - role: Job title / Designation
 * - type: "Internship" | "Full-time" | "Part-time" | "Contract"
 * - duration: Date range (e.g. "Jan 2025 – May 2025")
 * - location: City, State or "Remote"
 * - description: Concise summary of key responsibilities and impact
 * - highlights: Bullet list of specific accomplishments & technical duties
 * - technologies: Array of technologies used
 * - certificateUrl: Link to completion certificate or recommendation (optional)
 */

export const experiences = [
  {
    id: 1,
    company: "RBtech Services",
    role: "Intern – Full Stack Development",
    type: "Internship",
    duration: "Jan 2025 – May 2025",
    location: "Ahmednagar, Maharashtra",
    description: "Contributed as a Full Stack Development Intern, focusing on architecting and deploying dynamic, database-driven web applications with robust user authentication and structured course management.",
    highlights: [
      "Engineered a full-featured, free E-Learning Platform from ground up",
      "Developed responsive user interfaces and backend services using PHP, MySQL, JavaScript, HTML, and CSS",
      "Implemented secure user authentication, role management, and educational content delivery pipelines",
      "Designed normalized relational database schemas in MySQL to support high-throughput queries for courses, quizzes, and notes"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "XAMPP", "Apache"]
  }
];

