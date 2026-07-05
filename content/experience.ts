import type { ExperienceItem } from "@/content/types"

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Slash Mark IT Solutions (OPC) Pvt. Ltd.",
    dates: "Dec 2024 - Feb 2025",
    location: "Hybrid",
    summary:
      "Worked on the backend for a supermarket inventory management system, focusing on API design, authentication, and operational workflows.",
    points: [
      "Developed scalable RESTful APIs with Node.js, Express.js, and MongoDB for inventory operations.",
      "Implemented JWT-based authentication and authorization, CRUD flows, low-stock alerts, and sales reporting.",
      "Designed and optimized MongoDB schemas for better query performance and maintainability.",
      "Collaborated through Git and GitHub, documented endpoints in Postman, and kept backend contracts clear for frontend work.",
      "Added unit tests, centralized error handling, and input validation to reduce avoidable failures.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Postman", "Git"],
    certificateHref: "/certificates/slash-mark-internship.jpg",
  },
  {
    role: "AI & Intelligent Automation Intern",
    company: "CSRBOX (BharatCares, IBM SkillsBuild Academic Internship, in collaboration with AICTE)",
    dates: "Jun 2026 - Jul 2026",
    location: "Remote",
    summary:
      "Focused on practical learning around agentic AI, retrieval-augmented generation, multi-agent systems, and workflow automation.",
    points: [
      "Selected for the IBM SkillsBuild Academic Internship 2026.",
      "Built practical knowledge in agentic AI, RAG, multi-agent systems, and workflow automation.",
      "Completed expert-led modules and hands-on project work around AI-driven solutions.",
    ],
    stack: ["Agentic AI", "RAG", "Workflow Automation", "IBM SkillsBuild"],
    updateNote: "Current internship in progress. Final project details and certificate will be added after the program closes.",
  },
]
