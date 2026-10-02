export const portfolioData = {
  personalInfo: {
    name: "Pranavi Jain",
    title: "Software Engineer",
    tagline: "I craft resilient backend systems and explore the intersection of software and intelligent systems.",
    shortBio: "I build backend systems and intelligent applications, with a focus on clean architecture, RAG, and practical AI.",
    location: "Greater Noida, India — Global Remote",
    resumeLink: "https://drive.google.com/file/d/1cOfJPlq8615lKFNkf-3f64mm6Rravd4V/view?usp=sharing",
    email: "mailto:pranavijain47@gmail.com",
    github: "https://github.com/prranavii",
    linkedin: "https://www.linkedin.com/in/pranavi-jain5/",
    availability: "Open to Software Engineering Opportunities — 2027"
  },
  
  stats: [
    { value: "2027", label: "Graduation" },
    { value: "800+", label: "DSA Problems" },
    { value: "20+", label: "Hackathon Placements" }
  ],

  education: {
    institution: "Galgotias University",
    degree: "B.Tech Computer Science & Engineering",
    period: "2023 — 2027",
    details: "Focus on Algorithms, Distributed Computing & AI Systems."
  },

  achievements: [
    "800+ Data Structures & Algorithms problems solved",
    "Competitive programming rating on LeetCode & platforms",
    "Top placement in multiple engineering hackathons"
  ],

  certifications: [
    { title: "Generative AI", issuer: "GeeksforGeeks" },
    { title: "Python Programming", issuer: "GUVI" },
    { title: "AI/ML Virtual Internship", issuer: "AWS Academy / EduSkills" }
  ],

  experiences: [
    {
      id: "ordinal",
      company: "Ordinal",
      role: "Software Engineering Intern",
      period: "Sep 2026 – Present",
      isCurrent: true,
      badge: "CURRENT",
      description: "Contributing to AI-powered voice agents that automate claims, dispute, and payment workflows. Working on AI-driven conversational workflows and software systems supporting business process automation.",
      highlights: [
        "AI-powered voice agents",
        "Conversational workflows",
        "Context retrieval",
        "Intelligent human escalation",
        "Multilingual agentic workflows"
      ]
    },
    {
      id: "bitecode",
      company: "BiteCode",
      role: "UI/UX & Frontend Developer",
      period: "Aug 2026 – Present",
      isCurrent: false,
      badge: "FREELANCE",
      description: "Worked as a freelance developer with BiteCode, contributing to the redesign and development of its web experience across UI/UX improvements and responsive frontend development.",
      highlights: [
        "Web experience redesign",
        "UI/UX improvements",
        "Responsive frontend development",
        "Client requirements & feedback implementation"
      ]
    }
  ],

  projects: [
    {
      id: "intellirag",
      title: "IntelliRAG",
      subtitle: "AI-powered document intelligence system using Retrieval-Augmented Generation.",
      tech: ["Python", "Streamlit", "LangChain", "Ollama", "FAISS", "Llama 3.1"],
      bullets: [
        "Document-aware AI assistant performing semantic vector retrieval across uploaded content.",
        "FAISS vector database indexing with locally running Llama 3.1 model through Ollama.",
        "Grounding responses in context chunks to eliminate ungrounded hallucinations."
      ],
      github: "https://github.com/prranavii/IntelliRAG.git",
      demo: "https://intellirag-rag.streamlit.app/"
    },
    {
      id: "placepilot",
      title: "PlacePilot AI",
      subtitle: "AI-powered placement command center & career preparation platform.",
      tech: ["React", "Tailwind CSS", "LangChain", "Vector Search", "Python", "REST APIs"],
      bullets: [
        "Integrated career command center combining resume-to-JD vector matching & dynamic AI mock interviewers.",
        "Semantic similarity gap analysis pipeline with real-time application pipeline tracking.",
        "Streaming evaluation prompts scoring user responses across depth and technical clarity."
      ],
      github: "https://github.com/prranavii/PlacePilot.git",
      demo: "https://place-pilot-xi.vercel.app/"
    },
    {
      id: "refactoriq",
      title: "RefactorIQ",
      subtitle: "Generative AI-powered code refactoring platform.",
      tech: ["React", "FastAPI", "Python", "JavaScript", "Ollama", "Llama 3.1", "REST APIs"],
      bullets: [
        "Secure local dashboard scanning desktop workspaces and refactoring code completely offline.",
        "Server-Sent Events (SSE) streaming token diffs directly into React without UI lockups.",
        "Side-by-side git diff rendering using custom regex parsers."
      ],
      github: "https://github.com/prranavii/RefactorIQ.git",
      demo: "#"
    },
    {
      id: "hand-gesture",
      title: "Hand Gesture → Text",
      subtitle: "Computer vision application converting hand gestures into text.",
      tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      bullets: [
        "Computer vision gesture tracker converting palm joint mesh coordinates into keyboard text.",
        "Google MediaPipe hand tracking pipeline running frame arrays in real-time.",
        "Normalized 21 3D landmark coordinates relative to wrist node origin."
      ],
      github: "https://github.com/prranavii/handsign-gesture-to-text-converter.git",
      demo: "#"
    }
  ],

  skills: {
    categories: [
      {
        name: "LANGUAGES",
        items: ["Java", "Python", "JavaScript", "SQL"]
      },
      {
        name: "BACKEND",
        items: ["Node.js", "Express.js", "FastAPI", "REST APIs"]
      },
      {
        name: "AI / ML",
        items: ["RAG", "LangChain", "LLMs", "FAISS", "Ollama"]
      },
      {
        name: "FRONTEND",
        items: ["React", "HTML", "CSS", "Tailwind CSS"]
      },
      {
        name: "DATABASES",
        items: ["MongoDB", "MySQL", "PostgreSQL"]
      },
      {
        name: "TOOLS",
        items: ["Git", "GitHub", "Streamlit", "NumPy"]
      }
    ]
  }
};
