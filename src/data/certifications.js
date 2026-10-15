/**
 * ==============================================================================
 * CERTIFICATIONS CONFIGURATION
 * ==============================================================================
 * To add a certification:
 * Add an object to the `certifications` array below.
 * If you do not have any certifications yet, you can leave the array empty `[]`
 * or update the placeholder item below.
 *
 * Supported Fields:
 * - id: Unique number or string
 * - name: Certification title (e.g. "Machine Learning Specialization", "AWS Certified Cloud Practitioner")
 * - issuer: Issuing organization (e.g. "DeepLearning.AI / Coursera", "Oracle", "Google Cloud")
 * - issueDate: Date or month of completion (e.g. "2024")
 * - credentialUrl: Direct URL to verify credential online (optional)
 * - certificateFile: Path to local certificate image or PDF (optional)
 * - skills: Array of relevant technologies / skills certified (optional)
 */

export const certifications = [
  {
    id: 1,
    name: "Python for Data Science & Machine Learning",
    issuer: "Technical Training Academy",
    issueDate: "2024",
    credentialUrl: "",
    certificateFile: "",
    skills: ["Python", "NumPy", "Pandas", "Scikit-Learn"]
  },
  {
    id: 2,
    name: "Full Stack Web Development",
    issuer: "Technical Training Academy",
    issueDate: "2024",
    credentialUrl: "", // Paste your verification link or leave empty
    certificateFile: "",
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"]
  }
];

