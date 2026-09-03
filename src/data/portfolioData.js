export const portfolioData = {
  personalInfo: {
    name: "Pranavi Jain",
    title: "Software Engineer",
    tagline: "I craft resilient backend systems and explore the intersection of software and intelligent systems.",
    shortBio: "I'm Pranavi, a Computer Science Engineering student graduating in 2027 who enjoys turning complicated problems into simple, useful software. I spend most of my time solving DSA problems, building full-stack applications, and exploring local LLMs and Retrieval-Augmented Generation (RAG) systems.",
    location: "India",
    resumeLink: "https://drive.google.com/file/d/1cOfJPlq8615lKFNkf-3f64mm6Rravd4V/view?usp=sharing",
    email: "mailto:pranavijain47@gmail.com",
    github: "https://github.com/prranavii",
    linkedin: "https://www.linkedin.com/in/pranavi-jain5/",
    leetcode: "https://leetcode.com/u/prranavii_/",
    availability: "Open to Software Engineering Opportunities — 2027"
  },
  
  stats: [
    { value: "2027", label: "Graduation" },
    { value: "800+", label: "DSA Problems" },
    { value: "1765", label: "LeetCode Rating" },
    { value: "20+", label: "Hackathon Placements" }
  ],

  projects: [
    {
      id: "intellirag",
      title: "IntelliRAG",
      subtitle: "AI-powered document intelligence system using Retrieval-Augmented Generation.",
      tech: ["Python", "Streamlit", "LangChain", "Ollama", "FAISS", "Llama 3.1"],
      problem: "Finding specific information inside large documents is slow and inefficient, while traditional AI chatbots may generate answers without grounding them in the user's actual data.",
      idea: "A document-aware AI assistant that lets users upload documents, ask questions in natural language, and receive context-aware answers grounded in the uploaded content.",
      architecture: "Documents are parsed and divided into smaller chunks, converted into vector embeddings, and stored in a FAISS vector database. When a user asks a question, the system performs semantic retrieval to find the most relevant document chunks. Those chunks are injected into the LLM context and passed to a locally running model through Ollama to generate grounded responses.",
      challenges: "Designing an effective chunking and retrieval strategy while maintaining accurate, relevant, and responsive answers for larger documents.",
      solution: "Implemented semantic vector search using FAISS and optimized document chunking and retrieval so the LLM receives only the most relevant context before generating its response.",
      learning: "Hands-on experience with Retrieval-Augmented Generation, vector embeddings, semantic search, vector databases, document processing, prompt engineering, context management, local LLM deployment, LangChain, Ollama, and AI application architecture.",
      github: "https://github.com/prranavii/IntelliRAG.git",
      demo: "https://intellirag-rag.streamlit.app/"
    },
    {
      id: "refactoriq",
      title: "RefactorIQ",
      subtitle: "Generative AI-powered code refactoring platform.",
      tech: ["React", "FastAPI", "Python", "JavaScript", "Ollama", "Llama 3.1", "REST APIs"],
      problem: "Developers sending proprietary/sensitive source code to cloud LLMs faces corporate policy blocks, data leak threats, high operational API costs, and network-dependent latency.",
      idea: "Develop a secure local dashboard that scans desktop workspaces, highlights dead code or inefficiencies, and refactors it completely offline.",
      architecture: "A React client interface connecting to a Python FastAPI backend which interfaces with local Ollama endpoints hosting Llama 3.1 8B, streaming diffs directly into the workspace.",
      challenges: "Enabling real-time streaming tokens of syntax-colored code diffs into React without UI lockups, and configuring systemic prompt filters so the LLM responds in clean patches instead of full files.",
      solution: "Employed Server-Sent Events (SSE) for sub-second text streaming and built a custom regex parser to render side-by-side git diffs dynamically in the React view.",
      learning: "Deeper knowledge of Ollama parameter configurations (temperature, system templates), token streams in Python, and rendering virtualized DOM nodes for large codebases.",
      github: "https://github.com/prranavii/RefactorIQ.git",
      demo: "#"
    },
    {
      id: "ai-doctor",
      title: "AI Doctor Appointment Platform",
      subtitle: "Full-stack healthcare appointment platform.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      problem: "Traditional hospital reservation panels suffer from manual queue delays, scheduling conflicts, and double-booking errors.",
      idea: "A streamlined full-stack scheduler connecting patients and physicians with automated booking channels and instantaneous calendar updates.",
      architecture: "React frontend for doctor browsing and patient profiles; Node/Express server acting as the REST API layer; MongoDB for structured patient records and availability schedules.",
      challenges: "Preventing race conditions where multiple patients attempt to book the exact same slot at the exact same millisecond.",
      solution: "Utilized atomic updates in MongoDB ($set with filtering check) and optimistic document versioning to reject duplicate concurrent reservations gracefully.",
      learning: "Learned database lock mechanics, custom JWT authorization middleware, and session management in Express.",
      github: "https://github.com/prranavii/doctor-appointment.git",
      demo: "#"
    },
    {
      id: "hand-gesture",
      title: "Hand Gesture → Text",
      subtitle: "Computer vision application converting hand gestures into text.",
      tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      problem: "Traditional input interfaces require manual keyboards, locking out individuals with severe motor or vocal disabilities.",
      idea: "A computer vision gesture tracker converting dynamic palm coordinates into keyboard characters using standard laptop cameras.",
      architecture: "Python OpenCV webcam capture pipe feeding frame arrays to Google MediaPipe's hand tracking mesh.",
      challenges: "Fluctuating ambient shadows and camera distances distorting coordinate mapping relative to the image frame.",
      solution: "Normalized all joint coordinate arrays relative to the hand's wrist node (as the origin point) to ensure consistent scale and positioning calculations.",
      learning: "Real-time array manipulation using NumPy, matrix scaling, and basic mathematical coordinate systems.",
      github: "https://github.com/prranavii/handsign-gesture-to-text-converter.git",
      demo: "#"
    }
  ],

  skills: {
    categories: [
      {
        name: "Languages",
        items: [
          { name: "Java", useCase: "Solving DSA, writing object-oriented software patterns, and enterprise APIs." },
          { name: "Python", useCase: "Building AI/ML engines, OpenCV scripts, and FastAPI endpoints." },
          { name: "JavaScript", useCase: "Creating interactive frontend components and Node/Express server routing." },
          { name: "SQL", useCase: "Designing relational database systems, indexing, and writing complex joins." }
        ]
      },
      {
        name: "Software Engineering",
        items: [
          { name: "Data Structures & Algorithms", useCase: "Analyzing computational complexity bounds and solving algorithm problems." },
          { name: "REST APIs", useCase: "Designing uniform REST contracts with proper HTTP status codes." },
          { name: "Git", useCase: "Tracking repository code versions, branch merges, and pull requests." },
          { name: "GitHub", useCase: "Deploying codes, reviewing peers, and managing remote codebases." }
        ]
      },
      {
        name: "Frontend",
        items: [
          { name: "React", useCase: "Developing premium stateful client UI portals and interactive layouts." },
          { name: "HTML", useCase: "Writing clean, semantic, and highly accessible document markup." },
          { name: "CSS", useCase: "Writing custom animations, fluid layouts, and responsive components." },
          { name: "Tailwind CSS", useCase: "Accelerating design systems with clean utility classes and fast layouts." }
        ]
      },
      {
        name: "Backend",
        items: [
          { name: "Node.js", useCase: "Designing scalable backend event-driven architectures." },
          { name: "Express", useCase: "Creating modular HTTP routers, controllers, and auth middleware." },
          { name: "FastAPI", useCase: "Setting up high-performance ASGI server pipelines for local Python ML models." },
          { name: "Spring Boot", useCase: "Structuring secure dependency-injection microservice configurations." }
        ]
      },
      {
        name: "Databases",
        items: [
          { name: "MongoDB", useCase: "Creating dynamic document schema structures for healthcare and chat profiles." },
          { name: "MySQL", useCase: "Managing transactional relational tables and normalized data integrity." },
          { name: "PostgreSQL", useCase: "Executing relational schemas, complex JSON querying, and reliable transactions." }
        ]
      },
      {
        name: "AI & Intelligent Systems",
        items: [
          { name: "Generative AI", useCase: "Exploring transformer architectures, text generation, and local weights deployment." },
          { name: "RAG", useCase: "Building document intelligence retrieval pipelines grounded in vector databases." },
          { name: "LangChain", useCase: "Orchestrating prompts, chains, vector retrieval, and LLM agent components." },
          { name: "Ollama", useCase: "Interfacing and streaming prompts with local LLMs offline." },
          { name: "FAISS", useCase: "Indexing text chunk vectors for high-efficiency semantic similarity search." },
          { name: "Vector Embeddings", useCase: "Translating natural language paragraphs into mathematical coordinate arrays." },
          { name: "Semantic Search", useCase: "Retrieving contextually matching context beyond literal keyword hits." },
          { name: "Prompt Engineering", useCase: "Structuring context, rules, and few-shot templates to guide local model outputs." },
          { name: "OpenCV", useCase: "Processing webcam pixel matrices and spatial hand movement arrays." }
        ]
      }
    ]
  },

  dsa: {
    problemsSolved: 800,
    leetcodeRating: 1765,
    platforms: [
      { name: "LeetCode", url: "https://leetcode.com/u/prranavii_/", status: "Active" },
      { name: "GeeksforGeeks", url: "https://auth.geeksforgeeks.org/user/prranavii", status: "Active" },
      { name: "HackerRank", url: "https://www.hackerrank.com/prranavii", status: "Completed" }
    ],
    leetcodeUrl: "https://leetcode.com/u/prranavii_/"
  },

  journey: [
    {
      year: "2023",
      title: "Started B.Tech CSE",
      description: "Began Bachelor of Technology in Computer Science & Engineering, building solid foundations in computing concepts, mathematics, and OOP."
    },
    {
      year: "2026",
      title: "Algorithms & Placement Prep",
      description: "Deepened knowledge in Data Structures, Algorithms, and System Design patterns. Solved 200+ problems on Leetcode (1565 max rating)."
    },
    {
      year: "2027",
      title: "Graduation & Next Chapter",
      description: "Exiting B.Tech with an engineering mindset, ready to build robust, intelligent software systems in a production-level environment."
    }
  ],

  certifications: [
    
    {
      title: "Generative AI Certification",
      issuer: "Udemy",
      year: "2026",
      details: "Deep dive into Transformer architectures, prompt optimization, and local weights setup."
    },
  ],

  personality: [
    "solving DSA questions",
    "breaking side projects",
    "fixing what I just broke",
    "compiling local RAG pipelines",
    "hacking in campus hackathons",
    "arguing with compiler logs",
    "probably drafting a new script"
  ]
};
