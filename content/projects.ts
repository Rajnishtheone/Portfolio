import type { ProjectItem } from "@/content/types"

export const projects: ProjectItem[] = [
  {
    slug: "algohub",
    title: "AlgoHub",
    year: "2025",
    summary: "LeetCode-style MERN coding platform with Judge0 code execution, Redis caching, and a per-problem AI chat assistant.",
    description:
      "Built collaboratively as a coding practice platform with execution, problem workflows, protected routes, and AI assistance layered into the solving experience.",
    tags: ["MERN", "Redis", "Judge0"],
    codeHref: "https://github.com/Rajnishtheone/AlgoHub",
    caseStudy: {
      intro:
        "AlgoHub is one of the strongest examples of Rajnish's range because it combines full-stack product work, systems thinking, and practical AI integration inside a developer-facing application.",
      sections: [
        {
          title: "Problem",
          paragraphs: [
            "The core goal was to build a coding platform that felt closer to a real practice environment than a static problem list. That meant secure auth, problem browsing, fast execution feedback, and some help for users when they got stuck.",
            "The tricky part was balancing multiple workflows at once: problem data, code execution, caching, protected areas, and an AI layer that stayed scoped to the current problem instead of becoming a generic chat box.",
          ],
        },
        {
          title: "Build",
          paragraphs: [
            "The platform uses a MERN architecture with Judge0 handling code execution and Redis improving responsiveness on repeated reads. Rajnish contributed to the app as a collaborative build, working across the API, auth flow, and user-facing experience.",
            "A per-problem AI assistant was added so the help stayed tied to the coding context rather than drifting into unrelated answers. That kept the AI feature useful without overwhelming the rest of the product.",
          ],
        },
        {
          title: "Engineering Choices",
          paragraphs: [
            "Redis was used where faster access mattered, while the execution path stayed clearly separated from regular application reads and writes.",
            "Protected routes and JWT-backed auth helped keep submissions, profiles, and user-only areas consistent across the app.",
          ],
        },
      ],
      outcome:
        "This project shows a good mix of backend infrastructure, developer-tool workflow design, and applied AI in a product that has more moving parts than a typical student CRUD app.",
    },
  },
  {
    slug: "decentralized-community-court",
    title: "Decentralized Community Court (DCC)",
    year: "2025",
    summary: "Role-based platform for case lifecycle management with AI-generated summaries and real-time updates via Socket.IO.",
    description:
      "A role-aware case management platform that handles structured workflows, live updates, and AI-assisted summaries for faster review.",
    tags: ["MERN", "Socket.IO", "RBAC"],
    codeHref: "https://github.com/Rajnishtheone/Rajnishtheone-decentralized-community-court",
    liveHref: "https://rajnishtheone-decentralized-communi.vercel.app",
    caseStudy: {
      intro:
        "DCC stands out because it combines three patterns that are often built separately: role-based permissions, real-time collaboration, and AI-generated context for faster case review.",
      sections: [
        {
          title: "Problem",
          paragraphs: [
            "Case workflows break down quickly when different user roles need different actions, visibility, and timing. A generic dashboard is not enough when the product depends on clear lifecycle transitions and accountability.",
            "The product needed a way to keep participants up to date in real time while also reducing the reading overhead on each case.",
          ],
        },
        {
          title: "Build",
          paragraphs: [
            "The platform uses a MERN setup with role-based access control, structured case states, and Socket.IO for live updates as cases move through the workflow.",
            "AI-generated summaries were added to shorten the time needed to understand a case at a glance, which made the product more usable without changing the underlying workflow logic.",
          ],
        },
        {
          title: "Engineering Choices",
          paragraphs: [
            "Role-aware guards shape what different users can see and do, keeping the backend rules aligned with the interface.",
            "Real-time events handle state changes as they happen so the system feels active instead of requiring constant refreshes or manual polling.",
          ],
        },
      ],
      outcome:
        "DCC is a strong portfolio piece because it demonstrates permission design, live systems behavior, and AI support in one application rather than treating them as isolated demos.",
    },
  },
  {
    slug: "weather-insight-by-swara",
    title: "Weather Insight by SwaRa",
    year: "2025",
    summary: "Weather analytics PWA with live forecasts, world clock tools, and an AI chatbot.",
    description:
      "A personal project that combines forecast data, time utilities, chat history, and PWA support in a mobile-friendly weather interface.",
    tags: ["React", "PWA", "OpenAI API"],
    codeHref: "https://github.com/Rajnishtheone/Weather-Insight-by-SwaRa",
    liveHref: "https://weather-insight-by-swa-ra.vercel.app",
  },
  {
    slug: "real-estate-crm-platform",
    title: "Real Estate CRM Platform",
    year: "2026",
    summary: "Full-stack SaaS for property listings, lead management, and role-based operations.",
    description:
      "A more enterprise-shaped build that combines a marketplace front end with CRM workflows, RBAC, PostgreSQL, Prisma, Redis, and Docker.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Docker"],
    codeHref: "https://github.com/Rajnishtheone/real-estate-crm-platform",
    caseStudy: {
      intro:
        "This project is the clearest example of Rajnish working with a stack that looks closer to a production SaaS application than a narrow demo.",
      sections: [
        {
          title: "Problem",
          paragraphs: [
            "Real estate workflows rarely fit into a single user story. The product needed to support listings, lead handling, approvals, role separation, and operational CRM behavior without collapsing into one overloaded dashboard.",
            "That meant the architecture had to support multiple personas and a wider domain model from the beginning.",
          ],
        },
        {
          title: "Build",
          paragraphs: [
            "The application pairs a Next.js frontend with a backend using Node.js, Express, Prisma, PostgreSQL, Redis, and Docker.",
            "It covers property marketplace flows, CRM lead management, RBAC authentication, document-oriented operations, and admin-facing controls in a single product surface.",
          ],
        },
        {
          title: "Engineering Choices",
          paragraphs: [
            "Prisma and PostgreSQL help keep the domain relationships explicit, while Redis supports the parts of the app that benefit from faster repeated access.",
            "Docker keeps local setup predictable, which matters more as the project grows beyond a single service and starts to feel like a team-ready codebase.",
          ],
        },
      ],
      outcome:
        "Among the featured work, this is the strongest example of production-shaped backend and data modeling choices applied to a broad business workflow.",
    },
  },
  {
    slug: "armao-video-editor",
    title: "ARMAO Video Editor (Video DirectX)",
    year: "2025",
    summary: "Browser-based video studio orchestrating FFmpeg renders on the server.",
    description:
      "A React and Express workflow that lets users edit in the browser while heavy media processing runs server-side through FFmpeg.",
    tags: ["React", "Express", "FFmpeg"],
    codeHref: "https://github.com/Rajnishtheone/ARMAO-VIDEO-EDITOR",
    liveHref: "https://armao-video-editor.vercel.app",
  },
  {
    slug: "ai-content-automation-platform",
    title: "AI Content Automation Platform",
    year: "2026",
    summary: "AI-powered article generation workflow that publishes SEO-oriented content to WordPress.",
    description:
      "A Node.js-based automation system that drafts content with AI, structures it for publishing, and pushes it to WordPress as part of a repeatable workflow.",
    tags: ["Node.js", "OpenAI API", "WordPress"],
    codeHref: "https://github.com/Rajnishtheone/ai-content-automation-platform",
  },
  {
    slug: "smarthire-gateway",
    title: "SmartHire Gateway",
    year: "2025",
    summary: "AI-driven WhatsApp CV intake that parses resumes with OCR and NLP.",
    description:
      "A hiring workflow demo that ingests resumes from WhatsApp, extracts structured data, and surfaces results for recruiter review.",
    tags: ["Python", "Twilio", "OCR/NLP"],
    codeHref: "https://github.com/Rajnishtheone/SmartHire-Gateway",
  },
  {
    slug: "ai-summarizer-extension",
    title: "AI Summarizer Chrome Extension",
    year: "2025",
    summary: "Chrome extension that summarizes web pages in brief, bullet, or detailed formats.",
    description:
      "A lightweight browser extension project centered on taking page content and turning it into different summary modes with AI support.",
    tags: ["Chrome Extension", "Manifest V3", "LLM"],
    codeHref: "https://github.com/Rajnishtheone/aAI-Summerizer",
  },
  {
    slug: "smart-attendance",
    title: "Smart Attendance",
    year: "2025",
    summary: "Attendance system with face recognition and analytics for teachers and students.",
    description:
      "A dual-portal web application for classroom attendance that combines recognition workflows with reporting and role-specific views.",
    tags: ["React", "Face Recognition", "Analytics"],
    codeHref: "https://github.com/Rajnishtheone/smart-attendance",
    liveHref: "https://studentcheck.vercel.app/",
  },
]

export const featuredProjects = projects.slice(0, 3)
