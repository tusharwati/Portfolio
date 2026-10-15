/**
 * ==============================================================================
 * SKILLS CONFIGURATION
 * ==============================================================================
 * To add, edit, or remove skills:
 * 1. Locate the appropriate category below.
 * 2. Add an item to the `skills` array.
 * 3. You can also add an entirely new category by appending an object to `skillCategories`.
 *
 * NOTE: As per design requirements, we do not use fake percentage bars.
 * Clean, recognizable skill badges provide recruiters with an honest and accurate view.
 */

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for systems, backend services, and scripting",
    skills: [
      { name: "C++", level: "Proficient" },
      { name: "Java", level: "Proficient" },
      { name: "Python", level: "Advanced" },
      { name: "JavaScript", level: "Proficient" },
      { name: "PHP", level: "Proficient" }
    ]
  },
  {
    id: "web",
    title: "Web Development",
    description: "Modern frontend and backend technologies for web apps",
    skills: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3 / Tailwind", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "React", level: "Proficient" },
      { name: "Node.js", level: "Working Knowledge" },
      { name: "PHP", level: "Proficient" }
    ]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Computer vision frameworks, deep learning models, and data pipelines",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "YOLO (v7)", level: "Proficient" },
      { name: "OpenCV", level: "Proficient" },
      { name: "PyTorch", level: "Working Knowledge" },
      { name: "Machine Learning", level: "Proficient" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Relational and document storage solutions for structured datasets",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Proficient" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Development Workflow",
    description: "Version control, development environments, and embedded/system tools",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "XAMPP", level: "Proficient" },
      { name: "VS Code", level: "Advanced" },
      { name: "Linux / CLI", level: "Working Knowledge" }
    ]
  }
];

