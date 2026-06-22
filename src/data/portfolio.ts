export const portfolio = {
  name: "Amarjeet Kumar",
  role: "Software Engineer",
  location: "Noida, Uttar Pradesh, India",
  email: "amarjeet.official.work@gmail.com",
  phone: "+91 8920843853",
  image: "/amarjeet_profile.png",
  resume: "https://drive.google.com/file/d/1kNv9CI2mFfjPhyPWIXSxQLo6sINz8TjX/view?usp=drivesdk",

  headline:
    "Software Engineer building scalable backend systems, full-stack products, and AI-powered solutions.",

  intro:
    "I design and ship production-grade backend services, full-stack web applications, and AI-integrated systems. My stack spans Node.js, Python, React, Next.js, MongoDB, PostgreSQL, Docker, AWS, and LLM orchestration with LangChain, RAG pipelines, and prompt engineering. I focus on clean architecture, performance at scale, and practical solutions that move business outcomes.",

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amarjeet-kumar-638782208/" },
    { label: "GitHub",   href: "https://github.com/Amarjeetkumar123" },
    { label: "LeetCode", href: "https://leetcode.com/u/amarjeet_kumar0987/" },
  ],

  metrics: [
    { value: "70%",   label: "support calls automated" },
    { value: "35%",   label: "AI accuracy improvement" },
    { value: "10K+",  label: "automations processed daily" },
    { value: "1000+", label: "active users supported" },
  ],

  focusAreas: [
    "Full-Stack Development",
    "Backend Architecture",
    "AI & LLM Integration",
    "Cloud & DevOps",
  ],

  experience: [
    {
      company: "Profunnel Technologies Pvt. Ltd.",
      role: "Software Engineer (MTS-II)",
      period: "Jul 2025 – Present",
      location: "Remote, Noida",
      points: [
        "Architected real-time AI calling services in Node.js integrating telephony, STT, and TTS providers with multilingual support across 10K+ daily calls.",
        "Built an instruction-driven AI agent framework using Python, LangChain, RAG, and vector databases — reducing manual support load by 70%.",
        "Designed prompt engineering pipelines for LLM-based voice agents, improving response accuracy by 35%.",
        "Mentored junior developers, established code review standards, and reduced onboarding time by 40%.",
      ],
    },
    {
      company: "Athmin Technologies Pvt. Ltd.",
      role: "Software Engineer (MTS-I)",
      period: "May 2023 – Jul 2025",
      location: "Remote, Noida",
      points: [
        "Built and maintained CRM and project management SaaS products serving 1000+ active users using Node.js, React, and MongoDB.",
        "Implemented lead scoring, task automation, sales workflow engines, subscription billing (Razorpay, Pabbly), and payment automation.",
        "Developed RESTful APIs and WebSocket services for real-time collaboration features.",
        "Collaborated cross-functionally across product, design, and engineering to ship reliable, scalable features on schedule.",
      ],
    },
  ],

  skills: [
    {
      group: "Languages",
      level: "Strong",
      logo: "BE",
      items: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      group: "Frontend",
      level: "Strong",
      logo: "FE",
      items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML/CSS"],
    },
    {
      group: "Backend",
      level: "Core",
      logo: "BE",
      items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "JWT", "GraphQL"],
    },
    {
      group: "AI & LLM",
      level: "Hands-on",
      logo: "AI",
      items: ["LangChain", "RAG", "Prompt Engineering", "Vector Databases", "LLM Agents", "OpenAI API"],
    },
    {
      group: "Databases",
      level: "Strong",
      logo: "DB",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      group: "Cloud & DevOps",
      level: "Hands-on",
      logo: "DO",
      items: ["AWS (EC2, S3, Lambda)", "Docker", "CI/CD", "Git", "Nginx", "Jest"],
    },
  ],

  projects: [
    {
      name: "Pronnel — AI-Powered Business Platform",
      type: "Production SaaS",
      description:
        "End-to-end backend and AI feature development for a CRM, Teams, and automation platform. Built real-time AI calling modules, lead management APIs, subscription billing, and scalable data pipelines.",
      stack: ["Node.js", "Python", "MongoDB", "PostgreSQL", "LangChain", "REST APIs", "Docker"],
      highlights: [
        "Real-time AI voice calling with STT/TTS orchestration across multiple providers",
        "LLM agent framework with RAG pipelines for context-aware responses",
        "Razorpay & Pabbly subscription billing automation for SaaS monetisation",
      ],
      live: "https://pronnel.com/",
      code: "#",
    },
    {
      name: "Netflix Clone",
      type: "Full-Stack Streaming App",
      description:
        "A production-quality streaming application with authentication, email verification, TMDB-powered content discovery, trailer playback, and search — built end-to-end with a full Node.js backend.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      highlights: [
        "JWT-based auth with email verification flow",
        "10,000+ movies and TV shows via TMDB API integration",
        "Responsive UI with smooth trailer playback experience",
      ],
      live: "https://netflix-clone-frontend-woad.vercel.app/",
      code: "https://github.com/Amarjeetkumar123/Netflix-Clone-NodeJs-ReactJs",
    },
    {
      name: "Booklet — Bookstore E-Commerce",
      type: "MERN E-Commerce Platform",
      description:
        "A full-featured e-commerce platform for books with product discovery, cart, secure checkout, order management, wishlist, and a role-based admin dashboard.",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      highlights: [
        "Full cart, wishlist, ratings, and search/filtering system",
        "JWT auth with role-based access control (admin / user)",
        "Admin dashboard for product, order, and user management",
      ],
      live: "http://72.62.72.185:3000/",
      code: "https://github.com/Amarjeetkumar123/Booklet---a-book-store",
    },
    {
      name: "Car Loans & Sales Platform",
      type: "FinTech — Loan Management",
      description:
        "A fintech platform for car loan discovery, EMI calculation, application submission, and a custom admin dashboard for managing the full inquiry lifecycle from lead capture to disbursal.",
      stack: ["React.js", "Node.js", "MySQL", "REST API", "Tailwind CSS"],
      highlights: [
        "EMI calculator with live amortisation breakdown",
        "Lead capture, tracking, assignment, and follow-up workflows",
        "Admin dashboard for leads, conversions, and disbursal tracking",
      ],
      live: "https://carloansandsales.com",
      code: "#",
    },
  ],

  certifications: [
    {
      title: "Junior Software Developer",
      issuer: "nasscom",
      type: "Certification",
      area: "Software Development",
      logo: "/logos/nasscom-logo.jpg",
      date: "Nov 2021",
      certificate: "https://drive.google.com/file/d/16qY3WhUtHhDYq6m8Umw-dXrMNg2_5DQl/view?pli=1",
    },
    {
      title: "Web Developer",
      issuer: "nasscom",
      type: "Certification",
      area: "Web Development",
      logo: "/logos/nasscom-logo.jpg",
      date: "Jun 2023",
      certificate: "https://drive.google.com/file/d/1JRlnpYwv_qE1KHQL-TR5c1erbR9n5DWx/view",
    },
    {
      title: "Software Developer",
      issuer: "nasscom",
      type: "Certification",
      area: "Application Development",
      logo: "/logos/nasscom-logo.jpg",
      date: "Jun 2023",
      certificate: "https://drive.google.com/file/d/1Qbx8pxa1YpoaspBk1prxhG63gxEP8Ywc/view",
    },
    {
      title: "Junior Data Associate",
      issuer: "nasscom",
      type: "Certification",
      area: "Data Operations",
      logo: "/logos/nasscom-logo.jpg",
      date: "Jun 2023",
      certificate: "https://drive.google.com/file/d/1yKrsNAUAsfN7npBwIpwByMAOsii1aBim/view",
    },
    {
      title: "C++ Basics",
      issuer: "Great Learning",
      type: "Certification",
      area: "C++ Programming",
      logo: "/logos/great-learning-logo.png",
      date: "Jan 2022",
      certificate: "https://drive.google.com/file/d/1Ug55W5XWPTCVYI-V2hgJPoXNS7tlSiEi/view",
    },
    {
      title: "MySQL Basics",
      issuer: "Great Learning",
      type: "Certification",
      area: "Database Fundamentals",
      logo: "/logos/great-learning-logo.png",
      date: "Jan 2022",
      certificate: "https://drive.google.com/file/d/1dhrvuk9n6aPH5F74CLnVKcwLk8xwEuwi/view",
    },
    {
      title: "Master Data Structures & Algorithms Using C++",
      issuer: "Coding Blocks",
      type: "Certification",
      area: "DSA",
      logo: "/logos/coding-block-logo.png",
      date: "Jun 2022",
      certificate: "https://drive.google.com/file/d/1pAbGwpZ9aHsTBTrVQoyKcii8FZxN4B7U/view",
    },
  ],

  award: {
    title: "Architect of Intelligence Award",
    issuer: "Pronnel",
    logo: "/logos/pronnel-logo.png",
    area: "AI Calling / Backend Systems",
    certificate: "https://drive.google.com/file/d/1IGn2Xs1luddpRwkZ56FGEJ3zyAWD3S-n/view?usp=sharing",
    impact:
      "Designed and shipped production-ready AI calling workflows integrating telephony, STT, TTS, and LLM systems — reducing support call volume by 70%.",
    description:
      "Recognised for engineering innovation at the intersection of backend reliability and AI-powered voice solutions.",
  },

  education: {
    school: "Ramanujan College, University of Delhi",
    degree: "B.Voc in Software Development",
    period: "2020 – 2023",
    score: "CGPA: 8.0",
  },
};
