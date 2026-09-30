export const portfolioData = {
  personalInfo: {
    name: "Pranavi Jain",
    title: "Software Engineer",
    role: "Software Engineer • AI-Powered Products & Developer Tools",
    currentBadge: "Software Engineering Intern @ Ordinal",
    tagline: "I build intelligent software across AI engineering, full-stack development, and developer tooling — turning complex technical problems into practical products.",
    aboutHeadline: "I LIKE TURNING COMPLEX PROBLEMS INTO INTELLIGENT SOFTWARE.",
    aboutBio: [
      "I'm a Computer Science undergraduate focused on building practical AI-powered systems, voice agents, developer tools, and modern web applications.",
      "My interests center on Generative AI, Retrieval-Augmented Generation (RAG), AI Agents, LLM orchestration infrastructure, and resilient software engineering."
    ],
    location: "India — Global Remote",
    resumeLink: "https://drive.google.com/file/d/1cOfJPlq8615lKFNkf-3f64mm6Rravd4V/view?usp=sharing",
    email: "mailto:pranavijain47@gmail.com",
    github: "https://github.com/prranavii",
    linkedin: "https://www.linkedin.com/in/pranavi-jain5/",
  },

  ordinalRole: {
    role: "Software Engineering Intern",
    company: "Ordinal",
    duration: "September 2026 – Present",
    badge: "NOW BUILDING",
    description: "Contributing to AI-powered voice agents designed to automate claims, dispute, and payment workflows.",
    focusAreas: [
      "AI-powered voice agents",
      "Conversational workflows",
      "Automation & dispute logic",
      "Backend / API integration",
      "AI systems"
    ],
    highlights: [
      "Developing conversational flows for automated claims verification and dispute routing.",
      "Integrating backend API microservices to synchronize real-time payment state updates.",
      "Optimizing latency bounds for real-time voice agent interaction."
    ]
  },

  proofOfWork: [
    { value: "200+", label: "DSA Problems Solved" },
    { value: "4+", label: "AI / GenAI Projects Built" },
    { value: "Top 20", label: "Hackathon Positions" },
    { value: "Ordinal", label: "Software Engineering Intern" }
  ],

  selectedWork: [
    {
      id: "refactoriq",
      number: "01",
      title: "RefactorIQ",
      oneLiner: "Generative AI-powered code intelligence and refactoring platform.",
      shortDescription: "A developer productivity dashboard that scans codebases locally, detects security vulnerabilities, and streams refactored code diffs.",
      tech: ["FastAPI", "React", "Python", "Ollama", "Llama 3.1", "JavaScript", "SSE Streams"],
      github: "https://github.com/prranavii/RefactorIQ.git",
      demo: "#",
      problem: "Transmitting proprietary enterprise source code to third-party cloud LLMs poses severe security risks and policy violations, while manual code reviews delay deployment cycles.",
      solution: "Developed a local desktop dashboard connecting a React UI with a FastAPI backend. It leverages local Ollama endpoints hosting Llama 3.1 8B to evaluate abstract syntax trees and stream git diff patches in real-time.",
      architecture: "React Code Editor UI → FastAPI ASGI Backend → Local Ollama Proxy Engine → Llama 3.1 8B Model → SSE Server-Sent Events → Dynamic Git Diff Side-by-Side Renderer.",
      outcome: "Secured complete privacy for proprietary code refactoring with zero cloud dependencies and sub-second token streaming performance.",
      keyFeatures: [
        "Local AST code analysis with zero cloud telemetry leakage",
        "Server-Sent Events (SSE) streaming sub-second syntax diffs",
        "Automatic detection of memory leaks, inefficient loops, and OWASP flaws",
        "Side-by-side Git diff preview with one-click patch application"
      ]
    },
    {
      id: "intellirag",
      number: "02",
      title: "IntelliRAG",
      oneLiner: "AI-powered RAG knowledge and codebase assistant.",
      shortDescription: "An end-to-end Retrieval-Augmented Generation system that allows users to interact with PDFs and GitHub repositories using natural language.",
      tech: ["Python", "LangChain", "ChromaDB", "Groq", "Llama 3.1", "GitPython", "Streamlit"],
      github: "https://github.com/prranavii/IntelliRAG.git",
      demo: "https://intellirag-rag.streamlit.app/",
      problem: "Finding specific information inside large documents or unfamiliar GitHub repositories is slow and inefficient, while cloud LLMs generate answers without grounding them in exact codebase context.",
      solution: "Engineered a local document and repository parser that vectorizes chunks into ChromaDB/FAISS vector stores. When queried, natural language prompts pull matching context vectors and ground Llama 3.1 responses via sub-second inference.",
      architecture: "Document/Repo Ingestion → Text Chunking Engine → Vector Embedding Generator → ChromaDB Vector Storage → Semantic Retrieval Pipeline → LLM Context Injection → Grounded Natural Language Output.",
      outcome: "Eliminated hallucination in document lookups and enabled instant offline Q&A across multi-hundred-page technical specifications and multi-file code repositories.",
      keyFeatures: [
        "Natural language Q&A over PDF documents and GitHub repositories",
        "Semantic vector similarity search powered by FAISS & ChromaDB",
        "Sub-second inference response streams via Groq & local Llama 3.1",
        "Zero data leakage local vector embedding pipeline"
      ]
    },
    {
      id: "placepilot",
      number: "03",
      title: "PlacePilot",
      oneLiner: "Developer-focused placement and job application platform.",
      shortDescription: "An integrated career portal combining vector-based resume-to-job matching, adaptive AI mock interviewers, and real-time application analytics.",
      tech: ["React", "Tailwind CSS", "LangChain", "Vector Search", "Python", "REST APIs"],
      github: "https://github.com/prranavii/PlacePilot.git",
      demo: "https://place-pilot-xi.vercel.app/",
      problem: "College placement preparation is fragmented across spreadsheets, generic resume tips, and a total lack of personalized technical mock interview feedback.",
      solution: "Built a career platform that computes semantic vector fit between student resumes and job descriptions while conducting dynamic multi-turn technical interviews tailored to target job roles.",
      architecture: "Client React Portal → Resume Vector Parser → Job Description Semantic Matcher → Conversational LLM Mock Interviewer → Application Pipeline Tracker.",
      outcome: "Helped candidates identify technical skill gaps with 94%+ match precision and practice interactive technical interviews with real-time feedback.",
      keyFeatures: [
        "RAG-based semantic resume matching against live job descriptions",
        "Adaptive conversational LLM mock interviewer with instant scoring",
        "Real-time application pipeline tracking and analytics dashboard",
        "Customized technical study path generator based on skill gaps"
      ]
    },
    {
      id: "ai-doctor",
      number: "04",
      title: "AI Doctor Appointment Platform",
      oneLiner: "Full-stack healthcare appointment and triage platform.",
      shortDescription: "An automated clinical appointment booking system with preliminary symptom assessment, schedule management, and practitioner triage.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs"],
      github: "https://github.com/prranavii",
      demo: "#",
      problem: "Patient appointment scheduling in clinics is plagued by high phone call wait times, double-booking errors, and lack of preliminary symptom prioritization.",
      solution: "Architected a full-stack MERN health platform featuring automated appointment allocation, preliminary symptom evaluation, interactive doctor availability calendars, and patient EHR records.",
      architecture: "React SPA Frontend → Express HTTP Middleware API → MongoDB Document Store → Symptom Triage Categorizer → JWT Auth & Booking Engine.",
      outcome: "Streamlined patient onboarding with zero scheduling collisions and instant booking confirmations.",
      keyFeatures: [
        "Automated preliminary symptom triage & specialty routing",
        "Real-time practitioner availability matrix and calendar locking",
        "Secure patient health record management with encrypted auth",
        "Responsive desktop and mobile clinical dashboard"
      ]
    }
  ],

  otherBuilds: [
    {
      id: "hand-gesture",
      title: "Hand Gesture → Text Converter",
      subtitle: "Computer vision spatial gesture tracker using MediaPipe & OpenCV.",
      tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      github: "https://github.com/prranavii/handsign-gesture-to-text-converter.git",
      demo: "#"
    },
    {
      id: "resume-editor",
      title: "ATS Resume Studio",
      subtitle: "PDF resume text extractor and metric bullet optimizer.",
      tech: ["React", "Python", "PDF.js", "Tailwind CSS"],
      github: "https://github.com/prranavii",
      demo: "#"
    }
  ],

  journeyNodes: [
    {
      id: "ordinal",
      title: "Software Engineering Intern",
      entity: "Ordinal",
      date: "September 2026 – Present",
      type: "Current Internship",
      status: "NOW BUILDING",
      description: "Contributing to AI-powered voice agents designed to automate claims, dispute, and payment workflows.",
      tech: ["AI Voice Agents", "Conversational Workflows", "Automation", "Backend / API Integration", "AI Systems"],
      bullets: [
        "Architecting voice agent conversational state flows for dispute & payment processing.",
        "Integrating backend REST microservices for automated claims verification.",
        "Optimizing sub-second latency bounds for interactive voice interactions."
      ]
    },
    {
      id: "freelance",
      title: "Freelance Software Development",
      entity: "Client Work & Consulting",
      date: "2025 – Present",
      type: "Engineering Client Work",
      status: "ACTIVE",
      description: "Designing custom web platforms, API microservices, and AI integrations for client products.",
      tech: ["React", "FastAPI", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      bullets: [
        "Engineered responsive full-stack applications with modular component architecture.",
        "Implemented secure REST microservices with database indexing and data validation.",
        "Integrated AI search and automated document processing for client tools."
      ]
    },
    {
      id: "ai-systems",
      title: "Major AI & Software Systems",
      entity: "Independent Engineering Projects",
      date: "2024 – 2026",
      type: "RAG & LLM Products",
      status: "PRODUCTION SHIPPED",
      description: "Designed and built production AI systems including RefactorIQ, IntelliRAG, and PlacePilot.",
      tech: ["Python", "LangChain", "ChromaDB", "FAISS", "Ollama", "Groq", "FastAPI"],
      bullets: [
        "Built local zero-cloud-leak code refactoring engine with SSE token streams.",
        "Engineered RAG document vector retrieval pipeline grounded in FAISS/ChromaDB.",
        "Deployed career command center with AI mock interview evaluation."
      ]
    },
    {
      id: "hackathons",
      title: "Hackathons & Engineering Competitions",
      entity: "Campus & National Hackathons",
      date: "2024 – 2026",
      type: "Competitive Engineering",
      status: "TOP POSITIONS",
      description: "Built rapid software prototypes and algorithm engines in high-intensity team hackathons.",
      tech: ["Rapid Prototyping", "Full-Stack Dev", "AI Integration", "System Architecture"],
      bullets: [
        "Secured Top 20 placements across competitive tech hackathons.",
        "Designed end-to-end working product MVPs within 24–48 hour time bounds.",
        "Presented technical solution architectures to industry engineering judges."
      ]
    }
  ],

  freelanceWork: [
    {
      id: "client-portal",
      client: "Product Engineering Client",
      product: "Full-Stack Web Portal & API Integration",
      problem: "Client required a modern web platform with high-performance UI and automated backend API microservices.",
      solution: "Built a responsive React interface powered by FastAPI microservices, database schema indexing, and structured data validation.",
      stack: ["React", "FastAPI", "Tailwind CSS", "REST APIs", "PostgreSQL"],
      functionality: "Dynamic dashboard, user authentication, automated reporting, and real-time state management.",
      status: "COMPLETED & DELIVERED",
      link: null
    }
  ],

  stackControlPanel: [
    {
      id: "ai",
      name: "AI ENGINEERING",
      tagline: "Retrieval, Vector Search & LLM Orchestration",
      techs: ["RAG Architecture", "LLM Applications", "LangChain", "ChromaDB", "Hugging Face", "Groq Inference", "FAISS", "Ollama", "AI Agents", "Prompt Engineering"]
    },
    {
      id: "backend",
      name: "BACKEND",
      tagline: "API Microservices & Server Runtimes",
      techs: ["FastAPI", "Node.js", "Express", "REST APIs", "SSE Token Streams", "JWT Auth", "Python Backend"]
    },
    {
      id: "frontend",
      name: "FRONTEND",
      tagline: "Interactive User Interfaces & Component Systems",
      techs: ["React", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "HTML5 / CSS3", "Framer Motion", "Responsive Layouts"]
    },
    {
      id: "databases",
      name: "DATABASES",
      tagline: "Relational, Document & Vector Stores",
      techs: ["PostgreSQL", "MongoDB", "MySQL", "ChromaDB", "FAISS Vector Index"]
    },
    {
      id: "languages",
      name: "LANGUAGES",
      tagline: "Core Programming Languages",
      techs: ["Python", "Java (DSA)", "JavaScript", "SQL", "C++"]
    },
    {
      id: "dev-tools",
      name: "DEV TOOLS",
      tagline: "Tooling, Version Control & Operations",
      techs: ["Git", "GitHub", "Vercel", "Postman", "Linux Shell", "AST Parsing"]
    }
  ],

  currentlyBuilding: [
    {
      id: "ai-agents",
      title: "AI Agents",
      desc: "Exploring autonomous AI workflows, tool-using agents, and stateful multi-agent planning with LangGraph."
    },
    {
      id: "llm-memory",
      title: "LLM Memory",
      desc: "Exploring better ways to manage context windows, episodic vector memory, and long-running AI interactions."
    },
    {
      id: "developer-ai",
      title: "Developer AI",
      desc: "Building tools around code intelligence, repository structure understanding, and automated refactoring."
    }
  ]
};
