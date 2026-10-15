/**
 * ==============================================================================
 * PROJECTS CONFIGURATION
 * ==============================================================================
 * To add a new project, simply copy an object block below and add it to the array.
 * The UI will automatically render the new card, apply category filters,
 * and provide modal detail views.
 *
 * Supported Fields:
 * - id: Unique number or string
 * - title: Project name
 * - category: "AI / ML" | "Web Development" | "Systems / Hardware" | "Blockchain" | "Software"
 * - status: "Completed" | "Currently Developing" | "In Progress"
 * - featured: true | false (featured projects appear highlighted or in hero section)
 * - description: Concise 1-2 sentence summary displayed on the card
 * - detailedDescription: In-depth architectural and implementation explanation
 * - features: Array of key features or bullet points
 * - technologies: Array of technology strings
 * - github: URL string or null (if null, GitHub button is automatically hidden)
 * - liveDemo: URL string or null (if null, Demo button is automatically hidden)
 * - image: Image URL or path (e.g. "/projects/g4b.png"). If omitted, a clean placeholder is shown
 * - date: Time period or release year
 */

export const projectCategories = [
  "All",
  "AI / ML",
  "Web Development",
  "Systems / Hardware",
  "Blockchain",
  "Software"
];

export const projects = [
  {
    id: 1,
    title: "G4B – Glasses for Blind",
    category: "AI / ML",
    status: "Completed",
    featured: true,
    date: "2024",
    description: "An AI-powered assistive smart glasses system utilizing computer vision, real-time object detection, and distance estimation to provide instant audio feedback to visually impaired individuals.",
    detailedDescription: "G4B is an assistive wearable engineered to help visually impaired individuals navigate their environments safely and independently. The system integrates an ESP32-CAM module mounted on spectacles, capturing real-time video frames and streaming them to a processing pipeline powered by YOLOv7 and OpenCV in Python. The computer vision model detects obstacles, classifies objects in the user's path, and estimates their relative distance. An Arduino-interfaced audio feedback module produces clear, directional auditory cues to alert the user in real time.",
    features: [
      "Real-time object detection with YOLOv7",
      "Distance estimation using optical sizing and bounding boxes",
      "ESP32-CAM video streaming and wireless connectivity",
      "Directional audio alerts via integrated audio feedback module",
      "Low-latency edge processing pipeline"
    ],
    technologies: [
      "ESP32-CAM",
      "Arduino",
      "YOLOv7",
      "OpenCV",
      "Python",
      "Object Detection",
      "Audio Feedback"
    ],
    github: "https://github.com/tusharwati", // Update with your repository link when ready
    liveDemo: null, // Set to live URL if hosted
    image: null
  },
  {
    id: 2,
    title: "E-Learning Platform",
    category: "Web Development",
    status: "Completed",
    featured: true,
    date: "2025",
    description: "A comprehensive, free online learning management system featuring secure authentication, video lectures, downloadable notes, interactive quizzes, and course tracking.",
    detailedDescription: "A full-stack educational portal designed to democratize access to technical education. Built using PHP and MySQL with a modular architecture, the platform features role-based access control for students and educators. Students can enroll in structured courses, stream video lectures, download curated PDF study materials, and take interactive multiple-choice quizzes that calculate scores instantly. The system emphasizes low-bandwidth optimization and accessible UI design.",
    features: [
      "Secure role-based user authentication (Students & Instructors)",
      "Dynamic course catalog with categorical categorization",
      "Embedded video lecture player and downloadable PDF notes",
      "Interactive self-assessment quizzes with automated scoring",
      "Student progress and enrollment dashboard"
    ],
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "XAMPP"
    ],
    github: "https://github.com/tusharwati", // Update with your repository link
    liveDemo: null,
    image: null
  },
  {
    id: 3,
    title: "Smart Expense Tracker",
    category: "Web Development",
    status: "Completed",
    featured: true,
    date: "2024",
    description: "A feature-rich web application for personal financial tracking, monthly budget planning, expense categorizations, and interactive visual financial analytics.",
    detailedDescription: "Smart Expense Tracker helps users maintain financial discipline through structured expense logging, category allocation, and automated budget threshold tracking. The backend utilizes MySQL with PHP for transactional integrity, ensuring all income and expense entries are safely recorded. It features a full administrative dashboard for user governance, monthly budget limit alerts, and data summaries that help users visualize spending habits across categories.",
    features: [
      "Expense and income tracking with customizable categories",
      "Monthly budget limit configuration with alert indicators",
      "Transaction history search, filtering, and summary statistics",
      "Role-based administrative dashboard for user management",
      "Responsive data tables and visual financial summaries"
    ],
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    github: "https://github.com/tusharwati", // Update with your repository link
    liveDemo: null,
    image: null
  },
  {
    id: 4,
    title: "Blockchain Land Registration System",
    category: "Blockchain",
    status: "Completed",
    featured: true,
    date: "2024",
    description: "A decentralized land title registration and verification platform leveraging immutable blockchain ledgers to eliminate fraud, dispute, and unauthorized property alterations.",
    detailedDescription: "This project addresses the critical issue of land title fraud and opaque property transfers by storing verified ownership records on a distributed blockchain ledger. The platform features an open property marketplace, a personal 'My Land' dashboard showing registered parcels, and a verified land registration process. Every property deed transfer is recorded through cryptographically signed transactions, creating an unalterable audit trail for government registrars, buyers, and sellers.",
    features: [
      "Immutable land registry powered by distributed ledger technology",
      "Property Marketplace for verified land listings",
      "'My Land' dashboard for viewing registered titles and deed records",
      "Tamper-proof ownership transfer transactions",
      "Fraud mitigation and cryptographic ownership validation"
    ],
    technologies: [
      "Blockchain",
      "Smart Contracts",
      "Web3",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    github: "https://github.com/tusharwati", // Update with your repository link
    liveDemo: null,
    image: null
  },
  {
    id: 5,
    title: "AI-Based Smart Load Balancer",
    category: "Software",
    status: "Completed",
    featured: false,
    date: "2024",
    description: "An intelligent traffic routing optimization system utilizing predictive machine learning algorithms to balance incoming server load and prevent infrastructure bottlenecks.",
    detailedDescription: "Designed to overcome the limitations of static round-robin and basic least-connections algorithms, this system incorporates predictive machine learning to dynamically evaluate server telemetry (CPU utilization, memory pressure, response latency, and active request counts). Incoming network traffic is intelligently routed to optimal nodes before any server experiences performance degradation, thereby minimizing latency and preventing cascading server crashes.",
    features: [
      "Dynamic telemetry aggregation from distributed server instances",
      "Machine learning-assisted traffic routing decisions",
      "Latency minimization and proactive bottleneck prevention",
      "Adaptive failover and unhealthy instance isolation",
      "Performance benchmarking and load simulation"
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Networking",
      "Algorithms",
      "System Architecture"
    ],
    github: "https://github.com/tusharwati", // Update with your repository link
    liveDemo: null,
    image: null
  },
  {
    id: 6,
    title: "PCIe Link in Renode",
    category: "Systems / Hardware",
    status: "Currently Developing",
    featured: true,
    date: "2025 – Present",
    description: "Design and implementation of a virtual PCIe link between two Renode-emulated Andes AE350 RISC-V machines, establishing Root Port and Endpoint communication under Zephyr RTOS.",
    detailedDescription: "An advanced systems and hardware virtualization project aimed at architecting and validating a PCI Express (PCIe) interconnect within the Renode emulation framework. The setup emulates two Andes AE350 RISC-V hardware platforms—configuring one machine as the PCIe Root Port and the counterpart as a PCIe Endpoint device. The project involves developing platform peripherals in C#, configuring Zephyr RTOS device drivers, handling configuration space transactions, and validating end-to-end packet exchange in an emulated environment.",
    features: [
      "Dual Andes AE350 RISC-V platform emulation in Renode",
      "PCIe Root Port and Endpoint architecture modeling",
      "Peripheral driver integration with Zephyr RTOS",
      "Custom peripheral development in C# for Renode framework",
      "Simulated packet transfer and configuration space enumeration"
    ],
    technologies: [
      "Renode",
      "C#",
      "Zephyr RTOS",
      "PCIe",
      "Andes AE350",
      "RISC-V",
      "Embedded Systems"
    ],
    github: "https://github.com/tusharwati", // Update with your repository link
    liveDemo: null,
    image: null
  }
];

