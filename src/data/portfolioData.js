export const portfolioData = {
  personalInfo: {
    name: "Pranavi Jain",
    role: "AI ENGINEER • SOFTWARE DEVELOPER",
    headlineQuote: "I build intelligent software systems that can search, reason and automate.",
    shortBio: "Computer Science undergraduate focused on Generative AI, RAG, Agentic AI and full-stack development.",
    aboutHeadline: "I LIKE TURNING COMPLEX PROBLEMS INTO INTELLIGENT SOFTWARE.",
    aboutBio: [
      "I'm a Computer Science undergraduate focused on building practical AI-powered systems and modern web applications.",
      "My interests center on Generative AI, Retrieval-Augmented Generation (RAG), AI Agents, LLM orchestration infrastructure, and resilient software engineering."
    ],
    location: "India",
    resumeLink: "https://drive.google.com/file/d/1cOfJPlq8615lKFNkf-3f64mm6Rravd4V/view?usp=sharing",
    email: "mailto:pranavijain47@gmail.com",
    github: "https://github.com/prranavii",
    linkedin: "https://www.linkedin.com/in/pranavi-jain5/",
    availability: "Open to Software Engineering / AI Internships"
  },

  exploring: [
    { title: "Generative AI", desc: "Transformer models, synthetic data generation & prompt engineering." },
    { title: "RAG", desc: "Retrieval-Augmented Generation with vector databases & semantic chunking." },
    { title: "AI Agents", desc: "Autonomous agentic workflows using tool invocation & dynamic planning." },
    { title: "LangGraph", desc: "Stateful cyclic graph orchestration for multi-agent applications." },
    { title: "LLMs", desc: "Local weight deployment, quantization & sub-second response streaming." },
    { title: "AI Memory", desc: "Episodic and long-term vector memory stores for conversational continuity." },
    { title: "AI-assisted Coding", desc: "Real-time AST parsing, automated refactoring & code intelligence." }
  ],

  stats: [
    { value: "800+", label: "DSA Problems Solved" },
    { value: "1765", label: "Peak Algorithmic Rating" },
    { value: "CSE '27", label: "B.Tech Computer Science" },
    { value: "5+", label: "AI Projects Built & Deployed" }
  ],

  projects: [
    {
      id: "intellirag",
      number: "01",
      title: "INTELLIRAG",
      tagline: "AI-Powered RAG Knowledge & Codebase Assistant",
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
      id: "refactoriq",
      number: "02",
      title: "REFACTORIQ",
      tagline: "Real-Time AI Code Refactoring & Security Analyzer",
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
      id: "placepilot",
      number: "03",
      title: "PLACEPILOT AI",
      tagline: "AI-Powered Career Command Center & RAG Resume Matcher",
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
      title: "AI HEALTHCARE TRIAGE",
      tagline: "Full-Stack Intelligent Healthcare Booking & Triage Platform",
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
    },
    {
      id: "resume-editor",
      number: "05",
      title: "RESUME STUDIO AI",
      tagline: "Interactive AI-Assisted Resume Builder & Parser",
      shortDescription: "A modern web application that parses resume PDFs, optimizes bullet points for ATS scanners, and exports formatted LaTeX/HTML resumes.",
      tech: ["React", "Python", "Tailwind CSS", "PDF.js", "LangChain"],
      github: "https://github.com/prranavii",
      demo: "#",
      problem: "Job applicants struggle to format bullet points for Applicant Tracking Systems (ATS) and fail to highlight quantifiable engineering impact.",
      solution: "Created an interactive editor that parses PDF content, scores action-verb strength, and uses AI prompts to rewrite experience bullet points for maximum impact.",
      architecture: "PDF Ingestion Engine → Text Extraction → Action Verb Analyzer → Prompt Optimization LLM → Live Side-by-Side LaTeX/PDF Preview.",
      outcome: "Increased ATS match scores by transforming passive job descriptions into metric-driven action bullets.",
      keyFeatures: [
        "Instant PDF resume parsing and text structure extraction",
        "AI bullet point optimizer focused on metrics and technical impact",
        "Real-time ATS compatibility scoring and keyword suggestions",
        "Clean single-page PDF generation"
      ]
    }
  ],

  stackCategories: [
    {
      name: "AI / GENAI",
      description: "Generative AI, Large Language Models, RAG Architecture, Prompt Engineering, Agentic Workflows"
    },
    {
      name: "AI FRAMEWORKS",
      description: "LangChain, LangGraph, Hugging Face, ChromaDB, FAISS, Ollama, Groq Inference"
    },
    {
      name: "DEVELOPMENT",
      description: "React, Node.js, Express, FastAPI, MongoDB, PostgreSQL, Tailwind CSS"
    },
    {
      name: "LANGUAGES",
      description: "Python, Java (DSA), JavaScript (ES6+), SQL, HTML/CSS"
    },
    {
      name: "ENGINEERING",
      description: "Git, GitHub, REST APIs, Data Structures & Algorithms, System Architecture, Performance Optimization"
    }
  ],

  howIBuild: [
    { step: "01", title: "Understand the problem", desc: "Deconstruct the core engineering challenge, user needs, and system constraints before writing a single line of code." },
    { step: "02", title: "Design the system", desc: "Map data models, API endpoints, vector storage strategies, and LLM context orchestration." },
    { step: "03", title: "Build the MVP", desc: "Implement robust core microservices, clean data pipelines, and responsive UI components." },
    { step: "04", title: "Add intelligence", desc: "Integrate vector embeddings, semantic retrieval, RAG grounding, and adaptive LLM reasoning." },
    { step: "05", title: "Test & iterate", desc: "Profile sub-second latency bounds, eliminate hallucinations, refine prompts, and stress-test failure cases." },
    { step: "06", title: "Ship", desc: "Deploy to production with automated CI/CD pipelines, clear documentation, and zero cloud telemetry leaks." }
  ],

  journey: [
    {
      year: "2023",
      role: "Started B.Tech Computer Science & Engineering",
      company: "University Academic Journey",
      description: "Began computer science degree with core focus on Data Structures, Object-Oriented Design, Discrete Math, and Systems Programming.",
      tech: ["Java", "Data Structures", "Algorithms", "C++", "OOP"]
    },
    {
      year: "2024",
      role: "AI/ML Engineer & Systems Research",
      company: "Independent Research & Open Source",
      description: "Explored Retrieval-Augmented Generation (RAG), FAISS vector search, local LLM orchestration via Ollama, and built real-time developer productivity tools.",
      tech: ["Python", "FastAPI", "LangChain", "Ollama", "FAISS", "React"]
    },
    {
      year: "2025",
      role: "Full-Stack AI Application Developer",
      company: "Projects & Production Systems",
      description: "Shipped IntelliRAG, PlacePilot AI, and RefactorIQ. Solved 800+ algorithmic problem challenges across LeetCode & competitive platforms.",
      tech: ["React", "Tailwind CSS", "ChromaDB", "Groq", "Llama 3.1", "REST APIs"]
    },
    {
      year: "2026 — Present",
      role: "Preparing for Software Engineering / AI Roles",
      company: "Class of '27",
      description: "Building production-grade agentic AI software systems, deepening knowledge of distributed systems, multi-agent frameworks, and scalable web architectures.",
      tech: ["Generative AI", "AI Agents", "LangGraph", "Vector Systems", "System Design"]
    }
  ]
};
