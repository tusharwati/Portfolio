/**
 * ==============================================================================
 * EDUCATION CONFIGURATION
 * ==============================================================================
 * To update your education details, modify the objects below.
 * You can add diploma, high school, or additional degrees by adding objects to the array.
 *
 * Supported Fields:
 * - id: Unique identifier
 * - degree: Degree title (e.g. "Bachelor of Engineering (B.E.) / B.Tech")
 * - field: Field of study (e.g. "Computer Science & Engineering")
 * - institution: University or College Name
 * - duration: Years attended (e.g. "2021 – 2025" or "Expected 2025")
 * - location: City, State
 * - grade: GPA or percentage (optional - leave empty or null if preferred)
 * - coursework: Relevant completed courses or key subjects (optional array)
 */

export const educationList = [
  {
    id: 1,
    degree: "Bachelor of Engineering / B.Tech",
    field: "Computer Engineering / Software Engineering",
    institution: "Engineering College, Maharashtra", // Replace with your exact college or university name
    duration: "2022 – 2026",
    location: "Maharashtra, India",
    grade: "", // Optional: e.g. "CGPA: 8.5 / 10" or leave empty
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Computer Networks",
      "Software Engineering",
      "Artificial Intelligence"
    ]
  }
];

