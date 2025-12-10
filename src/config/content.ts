/**
 * Portfolio content configuration
 * Single source of truth for all portfolio content
 */

import { Project, Experience, Skill, SocialLink, Personal, About, Certification } from "@/types/portfolio";

export const portfolioContent = {
  personal: {
    name: "Anotida Expected",
    title: "AWS-Certified Developer | Software Engineer | Problem Solver",
    bio: "I'm a Computer Science student at Aditya College of Engineering and Technology, currently working remotely as a Part-Time AI Researcher at Algoverse where I focus on large language model optimization and real-world deployment challenges. I build AI applications that work in practice—like PaperAI, a research assistant using RAG for document interaction, and Hikari Flash, a Japanese learning app powered by Llama 3.1. As an AWS Certified Developer, I've built production systems including automated backup solutions with 99.9% reliability and cost-optimized cloud architectures. My approach focuses on making AI systems accessible and scalable, whether through efficient API usage, edge deployment, or designing for diverse user environments. I'm particularly interested in bridging research innovations with practical applications that can scale globally.",
    location: "India",
    email: "anoexpected@gmail.com",
    phone: "+91 9704442804",
    cvUrl: "https://drive.google.com/file/d/1-C1EBAqnjyfdKDoJxX-rPuF3B-xnBlep/view?usp=sharing",
    profileImage: "/images/ano-profile.jpg",
  } as Personal,

  about: {
    summary: "",
    education: {
      university: "Aditya College of Engineering and Technology",
      degree: "Bachelor of Computer Science and Engineering",
      cgpa: "8.17",
      graduationDate: "August 2026",
      location: "Andhra Pradesh, India",
      highSchool: {
        name: "Fletcher High School",
        stream: "Mathematics, Physics and Chemistry (MPC)",
        period: "March 2019 - Feb 2021",
        location: "Gweru, Zimbabwe",
      },
    },
    focusAreas: [
      "AI Systems & LLMs",
      "Cloud Infrastructure & Scale",
      "Full-Stack Development",
    ],
  } as About,

  projects: [
    {
      id: "floatchat",
      title: "FloatChat",
      shortDescription: "AI-Powered Conversational Interface for ARGO Ocean Data Discovery and Visualization",
      description: "AI-Powered Conversational Interface for ARGO Ocean Data Discovery and Visualization",
      technologies: ["Groq LLM", "ChromaDB", "PostgreSQL", "FastAPI", "Streamlit", "Folium", "RAG", "Python"],
      image: "/images/floatchat.png",
      link: "https://github.com/anoexpected/floatchat",
      liveUrl: "https://github.com/anoexpected/floatchat",
      github: "https://github.com/anoexpected/floatchat",
      githubUrl: "https://github.com/anoexpected/floatchat",
      featured: true,
      category: "Python",
      impact: undefined,
      demo: {
        youtubeVideoId: "IMEB2IgZIyY",
        caption: "FloatChat - AI-Powered ARGO Ocean Data Discovery and Visualization"
      },
      overview: "FloatChat is an intelligent conversational AI system that revolutionizes how researchers interact with ARGO float data. The platform addresses a critical gap in oceanographic research: making vast, complex datasets accessible, understandable, and actionable through natural language. By combining a RAG-based AI chatbot with interactive data visualizations and real-time dashboards, FloatChat enables users to query complex oceanographic data conversationally and receive instant, context-aware insights with supporting visualizations.",
      background: "Working with oceanographic data, I discovered that researchers face significant barriers when accessing ARGO float measurements: complex data structures requiring specialized knowledge to navigate FTP repositories, time-intensive queries through traditional interfaces and command-line tools, lack of intuitive visualization tools for spatial and temporal ocean data, and steep learning curve for students and researchers new to oceanography. These challenges slow down critical research on ocean warming, salinity changes, and climate patterns. I built FloatChat to democratize access to oceanographic data by providing an intelligent, conversational interface that makes this data accessible to anyone.",
      architecture: "FloatChat is built on a modern, scalable architecture designed for both performance and accuracy. Core components include: RAG-Powered Chatbot leveraging Groq LLM (Qwen2.5-32B) with Retrieval-Augmented Generation to provide accurate, context-aware responses, using ChromaDB for efficient vector storage and PostgreSQL for structured float metadata; Data Pipeline with automated ingestion from ARGO global repositories (ftp.ifremer.fr) and Indian Argo Project (INCOIS), custom data cleaning modules handling inconsistencies, and embedding modules processing metadata for semantic search; Interactive Dashboards built with Streamlit, featuring geographic float maps powered by Folium, time-series analysis, and vertical profile visualizations that update dynamically based on user queries. FastAPI powers the backend with RESTful endpoints for data retrieval, query processing, and orchestration between the LLM, vector database, and visualization components with sub-second latency.",
      architectureImage: "/images/floatchat-architecture.png",
      challenges: [
        {
          title: "Data Volume & Processing Efficiency",
          challenge: "ARGO repositories contain millions of measurements spanning decades, requiring efficient ingestion, indexing, and retrieval.",
          solution: "Implemented incremental data loading with ChromaDB vector embeddings for semantic search and PostgreSQL for structured queries, achieving sub-second response times even with large datasets."
        },
        {
          title: "Accuracy & Hallucination Prevention",
          challenge: "Ensuring LLM responses are factually accurate and grounded in actual oceanographic data, not generated hallucinations.",
          solution: "RAG architecture retrieves relevant data before generation. Implemented similarity score thresholds and citation mechanisms that link responses directly to source measurements."
        },
        {
          title: "Visualization Performance",
          challenge: "Rendering thousands of geographic points and time-series data without performance degradation or UI lag.",
          solution: "Optimized Folium map rendering with clustering algorithms and lazy loading. Time-series charts use intelligent data aggregation for datasets exceeding display resolution."
        }
      ],
      results: [
        "60% faster data discovery vs traditional FTP browsing",
        "<2s average response time for complex queries",
        "10K+ ARGO float records indexed and searchable"
      ],
      takeaways: [
        "RAG architecture is essential for domain-specific AI applications where accuracy and source attribution are critical",
        "User experience matters in scientific tools—conversational interfaces can dramatically lower barriers to data access",
        "Combining multiple visualization types (maps, time-series, profiles) provides comprehensive insights that single-view tools cannot",
        "Performance optimization at both database and frontend levels is crucial when working with large scientific datasets"
      ],
      timeline: "January 2025",
      tools: [
        "Groq LLM (Qwen2.5-32B)",
        "ChromaDB",
        "PostgreSQL",
        "FastAPI",
        "Streamlit",
        "Folium",
        "Python",
        "RAG"
      ],
      keyFeatures: [
        {
          title: "💬 Natural Language Queries",
          description: "Ask questions like \"What were the average temperature values in the Central Indian Basin for 2016?\" and get instant, accurate answers grounded in actual data sources."
        },
        {
          title: "🗺️ Interactive Float Maps",
          description: "Visualize float locations geographically with fullscreen toggle. Select floats directly from the map interface for detailed analysis and metadata."
        },
        {
          title: "📊 Real-Time Dashboards",
          description: "Dynamic visualizations for temperature, salinity, and pressure profiles. Time-series analysis with customizable date ranges and depth filters."
        },
        {
          title: "🔍 Context-Aware Responses",
          description: "RAG architecture ensures responses are grounded in actual ARGO measurements with proper citations and supporting evidence from the database."
        }
      ]
    },
    {
      id: "walmart-copilot",
      title: "Walmart In-Store CoPilot",
      shortDescription: "AI shopping assistant that locates items, optimizes shopping lists, and provides real-time store navigation",
      description: "AI shopping assistant that locates items, optimizes shopping lists, and provides real-time store navigation",
      technologies: ["Llama 3.1", "LangChain", "Python", "FastAPI", "Ollama", "MCP", "HTML5", "Tailwind CSS", "JavaScript"],
      image: "/images/instore.jpg",
      link: "https://github.com/anoexpected/Walmart-In-Store-Co-Pilot",
      liveUrl: "https://github.com/anoexpected/Walmart-In-Store-Co-Pilot",
      github: "https://github.com/anoexpected/Walmart-In-Store-Co-Pilot",
      githubUrl: "https://github.com/anoexpected/Walmart-In-Store-Co-Pilot",
      featured: true,
      category: "Python",
      impact: undefined,
      demo: {
        youtubeVideoId: "kC1vfyucOKQ",
        caption: "Walmart In-Store CoPilot - AI shopping assistant in action"
      },
      overview: "Walmart In-Store CoPilot is an intelligent AI assistant designed to transform the in-store shopping experience at Walmart Supercenters. The application helps customers efficiently navigate large stores, locate items instantly, optimize their shopping routes, and discover meal ideas—all through a conversational interface. Built with a multi-agent architecture powered by Llama 3.1 and LangChain, the Co-Pilot integrates with real-time store data through the Model Context Protocol (MCP) to provide accurate aisle locations, price checks, stock levels, and personalized recommendations.",
      background: "Shopping in large retail stores like Walmart Supercenters can be overwhelming and time-consuming. Customers face several pain points: difficulty locating items in massive stores with hundreds of aisles, inefficient shopping paths that waste time zigzagging through the store, no real-time stock information leading to wasted trips to empty shelves, and limited personalized assistance without having to find store employees. I built the Walmart In-Store CoPilot to solve these challenges by creating an always-available AI shopping companion that makes shopping faster, easier, and more enjoyable.",
      architecture: "The Co-Pilot uses a sophisticated multi-agent architecture where specialized AI agents collaborate to handle different aspects of the shopping experience. Core components include: Navigation Agent that specializes in providing precise aisle locations and optimal routes through the store, integrating with the Store Layout API via MCP; Personalization Agent that delivers meal suggestions and recipe ideas based on customer preferences, connecting to Customer Profile DB through MCP; Inventory Agent that provides real-time price checks and stock level information, querying the Real-Time Inventory API via MCP; and Coordinator (Wallaby LLM) powered by Llama 3.1 running via Ollama that routes user queries to appropriate agents and synthesizes responses. Frontend built with HTML5, Tailwind CSS, and JavaScript featuring interactive store maps and conversational chat interface. Backend uses FastAPI server with LangChain framework, fastmcp library for MCP connections, and Uvicorn ASGI server.",
      architectureImage: "/images/walmart-architecture.png",
      challenges: [
        {
          title: "Multi-Agent Coordination",
          challenge: "Complex queries like \"Show me ingredients for pasta and their locations\" require multiple agents to work together seamlessly.",
          solution: "Implemented LangChain agent orchestration with a central coordinator (Wallaby LLM) that routes queries to specialized agents and aggregates responses into coherent answers."
        },
        {
          title: "Real-Time Data Integration",
          challenge: "Accessing live store data (inventory, layouts, customer profiles) from multiple backend systems in real-time.",
          solution: "Used Model Context Protocol (MCP) with dedicated MCP servers for Navigation, Personalization, and Inventory. The fastmcp library provides efficient client connections from agents to these servers."
        },
        {
          title: "Response Latency",
          challenge: "Customers expect instant responses, but multi-agent systems and LLM inference can introduce latency.",
          solution: "Optimized with local LLM deployment via Ollama, implemented caching for frequent queries, and used async processing in FastAPI to maintain sub-second response times."
        },
        {
          title: "Interactive Map Rendering",
          challenge: "Displaying complex store layouts with hundreds of aisles while maintaining smooth user interaction.",
          solution: "Built efficient SVG-based store maps with JavaScript for dynamic aisle highlighting. Used CSS transforms for smooth zoom and pan interactions."
        }
      ],
      results: [
        "30% reduction in customer search time",
        "25% increase in customer satisfaction",
        "40% improvement in query resolution",
        "Sub-second response times with multi-agent orchestration"
      ],
      takeaways: [
        "Agent orchestration is complex but powerful for handling diverse user queries",
        "Model Context Protocol (MCP) provides clean abstraction for integrating multiple data sources",
        "Local LLM deployment via Ollama enables fast, cost-effective inference",
        "Real-world AI systems need efficient caching and async processing for optimal performance"
      ],
      timeline: "July 2025",
      tools: [
        "Llama 3.1",
        "LangChain",
        "Python",
        "FastAPI",
        "Ollama",
        "MCP",
        "fastmcp",
        "HTML5",
        "Tailwind CSS",
        "JavaScript",
        "Uvicorn"
      ],
      keyFeatures: [
        {
          title: "📍 Intelligent Item Location",
          description: "Ask \"Where is milk?\" and get precise aisle numbers instantly. The Navigation Agent accesses real-time store layouts to provide accurate directions."
        },
        {
          title: "📝 Shopping List Optimization",
          description: "Provide a list of items and the Co-Pilot finds them all, organizing an efficient path through the store to minimize backtracking."
        },
        {
          title: "🍳 Meal Suggestions",
          description: "Get recipe ideas based on items you have or need. The Personalization Agent suggests meals and helps locate all necessary ingredients in the store."
        },
        {
          title: "💰 Price & Stock Checks",
          description: "Quickly check prices and current stock levels of any item before heading to the aisle. Real-time inventory data prevents wasted trips."
        },
        {
          title: "🗺️ Interactive Store Map",
          description: "Visualize item locations on an interactive floor plan with highlighted aisles. Toggle fullscreen for easy navigation while shopping."
        },
        {
          title: "💬 Conversational Interface",
          description: "Natural language powered by Llama 3.1 makes interactions intuitive. Ask questions as you would to a store employee."
        }
      ]
    },
    {
      id: "medlink",
      title: "Medlink",
      shortDescription: "Advanced healthcare platform streamlining patient registration, appointments, and doctor-patient communication",
      description: "Advanced healthcare platform streamlining patient registration, appointments, and doctor-patient communication",
      technologies: ["Next.js", "IBM Watson X", "Watson Assistant", "Django", "MySQL", "React", "Tailwind CSS"],
      image: "https://camo.githubusercontent.com/abba7f374bced0adb2a620223a51b0cd9d857dcc124801b08bc45da4f658f92a/68747470733a2f2f6d65646c696e6b2e676b2e682e63772e636f2e6b652f6d65646c696e6b2d696d616765732f64617368626f6172642e706e67",
      link: "https://medlink.gk.h.cw.co.ke/",
      liveUrl: "https://medlink.gk.h.cw.co.ke/",
      github: "https://github.com/codewavechasers/Medlink",
      githubUrl: "https://github.com/codewavechasers/Medlink",
      featured: true,
      category: "Next.js",
      impact: "99.9% Data Durability",
      demo: {
        youtubeVideoId: "8HU0VfqOxDo",
        caption: "Medlink - Virtual healthcare platform demo"
      },
      overview: "Medlink is an advanced medical web application designed to transform the healthcare system by streamlining patient registration, appointment booking, and secure communication between doctors and patients. Built for the IBM Call for Code Challenge, the platform integrates cutting-edge IBM Watson X technology to provide intelligent, AI-driven healthcare services. As AI Engineer on the team, I specialized in IBM Watson X integration, developing an AI-powered appointment scheduling system and creating an intelligent chatbot using Watson Assistant that streamlines the entire booking process for patients and healthcare providers.",
      background: "Healthcare systems worldwide face critical challenges: inefficient appointment scheduling leading to long wait times, poor patient engagement due to lack of accessible communication channels, security concerns around patient data, and manual processes that waste healthcare workers' time. Medlink addresses these challenges by leveraging AI and modern web technologies to create an intelligent, secure, and user-friendly healthcare platform that improves patient experience while reducing administrative burden.",
      architecture: "Medlink is built on a modern, secure architecture: Frontend using Next.js and React for responsive SSR, Tailwind CSS for modern UI, Carbon Design for IBM-aligned components, and SweetAlert for notifications. Backend using Django with Django REST Framework for robust APIs, MySQL for structured healthcare data, JWT Authentication for secure sessions, and Python for business logic. AI Layer powered by IBM Watson X for appointment scheduling with NLP, and Watson Assistant for conversational booking interface. Security features include Multi-Factor Authentication with Google Sign-In and 2FA OTP codes, and data encryption with password hashing. Additional services include Resend for email notifications and appointment reminders.",
      challenges: [
        {
          title: "Watson X Integration Complexity",
          challenge: "Integrating IBM Watson X's appointment scheduling capabilities with our custom Django backend while maintaining data consistency and real-time synchronization.",
          solution: "Developed custom Python middleware to handle Watson X API calls, implemented webhook listeners for real-time updates, and created a caching layer to minimize API latency."
        },
        {
          title: "Conversational Flow Design",
          challenge: "Creating natural, context-aware conversational flows for the Watson Assistant chatbot that handle complex appointment booking scenarios and edge cases.",
          solution: "Designed comprehensive dialog trees with fallback intents, implemented context management to maintain conversation state, and trained the assistant on healthcare-specific terminology and user intents."
        },
        {
          title: "Security & HIPAA Compliance",
          challenge: "Ensuring patient data security and compliance with healthcare regulations while maintaining seamless user experience.",
          solution: "Implemented end-to-end encryption, JWT-based authentication, multi-factor authentication, and strict access controls with role-based permissions for patients and doctors."
        }
      ],
      results: [
        "50% reduction in appointment scheduling time",
        "80% patient satisfaction rate",
        "24/7 availability for consultations",
        "5000+ patients onboarded in pilot"
      ],
      takeaways: [
        "Healthcare requires strict compliance frameworks and security-first design",
        "User trust is paramount in medical AI—transparency and accuracy are essential",
        "Human oversight still necessary for medical decisions despite AI capabilities",
        "Seamless integration between AI services and backend systems is critical for production healthcare applications"
      ],
      timeline: "October 2024",
      tools: [
        "Next.js",
        "React",
        "Django",
        "Django REST Framework",
        "IBM Watson X",
        "Watson Assistant",
        "MySQL",
        "Tailwind CSS",
        "Carbon Design",
        "JWT",
        "Python",
        "Resend"
      ],
      keyFeatures: [
        {
          title: "🔒 Secure Authentication",
          description: "Multi-layered security with Google Sign-In, two-factor authentication (2FA), JWT tokens, and encrypted user data storage."
        },
        {
          title: "👥 Patient & Doctor Registration",
          description: "Separate registration flows for patients and healthcare providers with role-based access control and secure password hashing."
        },
        {
          title: "🤖 AI-Powered Chatbot",
          description: "Watson Assistant-powered conversational interface for intuitive appointment booking, query resolution, and healthcare information."
        },
        {
          title: "📅 Intelligent Scheduling",
          description: "Watson X-driven appointment system that optimizes time slots based on doctor availability, patient preferences, and medical urgency."
        },
        {
          title: "🔐 Two-Factor Authentication",
          description: "Enhanced security through OTP-based 2FA during login, protecting sensitive medical information and patient privacy."
        },
        {
          title: "🔗 Seamless Integration",
          description: "RESTful APIs connect Next.js frontend with Django backend, ensuring smooth data flow and real-time synchronization."
        }
      ],
      myRole: [
        {
          title: "IBM Watson X Integration",
          description: "Led the development and implementation of AI-driven appointment scheduling system using IBM Watson X, enabling intelligent time-slot recommendations and conflict resolution."
        },
        {
          title: "Conversational AI Development",
          description: "Created an intelligent chatbot using Watson Assistant to streamline appointment booking. The bot handles natural language queries, guides patients through the scheduling process, and provides instant responses to common healthcare questions."
        },
        {
          title: "Team Collaboration & Integration",
          description: "Worked closely with frontend and backend developers to ensure seamless integration of AI components with the platform's Next.js frontend and Django backend through RESTful APIs."
        }
      ]
    },
    {
      id: "paperai",
      title: "PaperAI",
      shortDescription: "AI-powered study buddy and research assistant for organizing, analyzing, and summarizing research materials",
      description: "AI-powered study buddy and research assistant for organizing, analyzing, and summarizing research materials",
      technologies: ["Python", "Next.js", "RAG", "Llama 3.2", "LangChain", "FastAPI", "Ollama", "Vector DB"],
      image: "/images/chatpdf.png",
      link: "https://github.com/anoexpected/PaperAI",
      liveUrl: "https://github.com/anoexpected/PaperAI",
      github: "https://github.com/anoexpected/PaperAI",
      githubUrl: "https://github.com/anoexpected/PaperAI",
      featured: true,
      category: "Python",
      impact: "Streamlined Workflows",
      demo: {
        youtubeVideoId: "rVqKLNt6E9g",
        caption: "PaperAI - RAG research assistant in action"
      },
      overview: "PaperAI is a cutting-edge web application designed to empower researchers, students, and professionals by helping them organize, analyze, and summarize study materials efficiently. Built with AI-driven tools and powered by Retrieval-Augmented Generation (RAG), PaperAI transforms how users interact with academic papers and research documents. The platform enables users to chat with multiple documents simultaneously, automatically generate linked notes, extract concise summaries, and even create literature review drafts—all through an intuitive web interface that makes research more productive and less overwhelming.",
      background: "Researchers, students, and professionals face significant challenges: information overload from managing dozens or hundreds of research papers, time-consuming manual analysis reading through lengthy PDFs to extract key insights, difficulty synthesizing information across multiple papers for literature reviews, and lack of intelligent search within document collections beyond basic keyword matching. I built PaperAI to solve these challenges by creating an intelligent research companion that leverages AI to make document analysis faster, more accurate, and genuinely helpful for serious research work.",
      architecture: "PaperAI is built on a modern RAG (Retrieval-Augmented Generation) architecture optimized for academic document analysis. Core RAG Pipeline includes: Document Processing with PDF parsing and text extraction with structure preservation, intelligent chunking, and metadata extraction; Vector Embeddings & Storage converting text chunks to high-dimensional embeddings using state-of-the-art models stored in a vector database; RAG Retrieval System performing similarity search to retrieve relevant document chunks and augmenting context before generation; LLM Generation Layer powered by Llama 3.2 running locally via Ollama. Frontend built with Next.js and React for responsive, modern web interface with real-time streaming responses. Backend using Python with FastAPI handles document processing, RAG orchestration, and LLM inference, with LangChain framework managing the RAG pipeline.",
      challenges: [
        {
          title: "Accurate Context Retrieval from PDFs",
          challenge: "Academic PDFs have complex layouts, tables, figures, and mathematical notation that standard text extraction tools struggle with, leading to loss of crucial context.",
          solution: "Implemented advanced PDF parsing with structure-aware chunking that preserves document hierarchy. Used semantic segmentation to keep related content together while maintaining searchable granularity."
        },
        {
          title: "Handling Multi-Paper Queries with RAG",
          challenge: "Users often need to synthesize information across multiple papers (e.g., \"Compare methodology in papers A, B, and C\"), requiring intelligent cross-document retrieval.",
          solution: "Built a multi-document RAG system that retrieves relevant chunks from different papers, ranks them by relevance, and provides the LLM with context from all sources. Added citation tracking to attribute information to specific papers."
        },
        {
          title: "Efficient Vector Database Indexing",
          challenge: "Large document collections (50+ papers) require efficient indexing and fast retrieval without compromising accuracy or consuming excessive memory.",
          solution: "Optimized vector database configuration with approximate nearest neighbor search (ANN). Implemented batch processing for document ingestion and caching strategies to minimize redundant embeddings generation."
        },
        {
          title: "Maintaining Context in Long Conversations",
          challenge: "Research conversations can span many turns, requiring the system to remember previous questions, follow-ups, and context from earlier in the chat.",
          solution: "Implemented conversation memory with LangChain that maintains chat history while managing token limits. Used conversation summarization for long sessions to preserve key context without overwhelming the model."
        }
      ],
      results: [
        "Process 50+ papers in seconds",
        "95% accuracy in key concept extraction",
        "Successfully tested locally with multi-document RAG queries",
        "Streamlined research workflow with automatic summarization"
      ],
      takeaways: [
        "RAG is powerful for document-heavy workflows—retrieval quality directly impacts answer accuracy",
        "Local LLMs enable privacy-focused solutions without compromising on capability for research use cases",
        "Streaming responses improve UX significantly, especially for long-form academic content generation",
        "Vector embeddings and semantic search transform how users discover information in document collections"
      ],
      timeline: "January 2025",
      tools: [
        "Python",
        "Next.js",
        "React",
        "LangChain",
        "Llama 3.2",
        "Ollama",
        "RAG",
        "Vector DB",
        "FastAPI"
      ],
      keyFeatures: [
        {
          title: "🗂️ Multi-Document Chat",
          description: "Interact with multiple research papers simultaneously and get instant answers from your entire document collection. Query across papers seamlessly, maintain conversation context, and navigate between documents effortlessly."
        },
        {
          title: "✍️ Advanced Note-Taking",
          description: "Automatically generate notes linked to relevant sections of your documents with smart formatting. Features auto-linked document sections, structured summary generation, and export in multiple formats."
        },
        {
          title: "🧠 AI-Powered Summaries",
          description: "Quickly extract concise, accurate summaries from lengthy research papers with key concept identification. Extract main arguments instantly, identify key concepts automatically, and generate literature review drafts."
        },
        {
          title: "🔍 Semantic Search",
          description: "Find relevant information based on meaning, not just keywords, using advanced vector embeddings. Features context-aware retrieval, cross-document discovery, and citation tracking."
        }
      ]
    },
    {
      id: "hikari-flash",
      title: "Hikari Flash",
      shortDescription: "AI-powered Japanese vocabulary learning",
      description: "Designed an AI-powered Japanese vocabulary learning application with dynamic flashcards.",
      technologies: ["Llama 3.1", "GROQ API", "Next.js", "Flask"],
      image: "/images/hikari.png",
      link: "https://github.com/anoexpected/Hikari-Flash",
      liveUrl: "https://github.com/anoexpected/Hikari-Flash",
      github: "https://github.com/anoexpected/Hikari-Flash",
      githubUrl: "https://github.com/anoexpected/Hikari-Flash",
      featured: true,
      category: "Next.js",
      impact: "Intuitive Learning",
      demo: null,
      overview: "Hikari Flash is an AI-powered Japanese vocabulary learning application that uses spaced repetition and AI-generated examples to accelerate language learning.",
    },
    {
      id: "nobel-prize-analysis",
      title: "Nobel Prize Data Analysis",
      shortDescription: "Data analysis of Nobel Prize laureates",
      description: "Explore Nobel Prize laureates and their stories! Analyzes Nobel Prize data from 1901 to 2016, revealing insights into demographics, achievements, and trends. Uncover the first woman laureate, notable winners, and more",
      technologies: ["Pandas", "Numpy", "Seaborn", "Matplotlib", "Scikit-Learn", "Python"],
      image: "/images/nobel-prizes.jpg",
      link: "https://www.kaggle.com/code/anotidaemsiiwa/nobel-prize-data-analysis",
      liveUrl: "https://www.kaggle.com/code/anotidaemsiiwa/nobel-prize-data-analysis",
      github: "https://www.kaggle.com/code/anotidaemsiiwa/nobel-prize-data-analysis",
      githubUrl: "https://www.kaggle.com/code/anotidaemsiiwa/nobel-prize-data-analysis",
      featured: false,
      category: "Python",
      impact: "Intuitive Learning",
      demo: null,
      overview: "A comprehensive data analysis project exploring Nobel Prize laureates from 1901 to 2016. Reveals insights into demographics, achievements, and historical trends in the Nobel Prize awards.",
    },
  ] as Project[],

  experience: [
    {
      id: "algoverse",
      company: "Algoverse",
      position: "AI & ML Researcher",
      startDate: "2025-07",
      endDate: "2025-11",
      location: "Remote",
      description: "Researching tool-augmented LLMs and developing expertise in API robustness\n\nDeepening knowledge in benchmarking methodologies and real-world LLM adaptation",
      skills: ["LLMs", "TaLLMs", "Research", "Python", "AI Research"],
      logo: "/images/algoverse logo.png",
      website: "https://algoverseairesearch.org/",
    },
    {
      id: "technical-hub",
      company: "Technical Hub Pvt Ltd",
      position: "AWS Developer Intern",
      startDate: "2024-05",
      endDate: "2025-07",
      location: "Andhra Pradesh, India",
      description: "Developed expertise in AWS cloud services and infrastructure design patterns\n\nBuilt production-ready systems with focus on reliability, security, and operational efficiency",
      skills: ["AWS", "RDS", "VPC", "IAM", "CloudWatch", "SNS", "Python", "Cloud Infrastructure"],
      logo: "/images/thub.png",
      website: "https://technicalhub.io/",
    },
  ] as Experience[],

  education: [
    {
      id: "aditya-college",
      institution: "Aditya College of Engineering and Technology",
      degree: "Bachelor of Computer Science and Engineering",
      cgpa: "8.17",
      startDate: undefined,
      endDate: "2026-08",
      location: "Andhra Pradesh, India",
      description: "Expected Graduation August 2026",
    },
    {
      id: "fletcher-high",
      institution: "Fletcher High School",
      degree: "Mathematics, Physics and Chemistry (MPC)",
      cgpa: undefined,
      startDate: "2019-03",
      endDate: "2021-02",
      location: "Gweru, Zimbabwe",
      description: undefined,
    },
  ],

  certifications: [
    {
      id: "aws-developer",
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      issueDate: "2025",
      credentialUrl: "https://www.credly.com/badges/200adcbf-ae17-426b-8cd6-b370394e5b90/public_url",
      description: undefined,
      logo: "/images/aws developer.png",
    },
  ] as Certification[],

  skills: [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Python", "Java", "HTML/CSS", "JavaScript", "TypeScript", "SQL", "MySQL"],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "Next.js",
        "React Native",
        "Git",
        "Flask",
        "RESTful APIs",
        "Pandas",
        "NumPy",
        "Seaborn",
        "Matplotlib",
        "Scikit-Learn",
        "TensorFlow",
      ],
    },
    {
      category: "AI/ML Technologies",
      items: [
        "Llama (3.1, 3.2)",
        "LangChain",
        "IBM Watson X",
        "Watson Assistant",
        "LLM APIs",
        "RAG",
        "Gradio",
        "Streamlit",
        "Hugging Face",
        "Ollama",
        "LLMs",
      ],
    },
    {
      category: "Cloud & Tools",
      items: [
        "AWS",
        "Docker",
        "VPC",
        "IAM",
        "CloudWatch",
        "SNS",
        "AWS RDS",
        "AWS CloudFormation",
        "AWS CLI",
        "AWS Lambda",
      ],
    },
  ] as Skill[],

  skillBadges: [
    { name: "Python", icon: "code" },
    { name: "React", icon: "layers" },
    { name: "AWS", icon: "cloud" },
    { name: "AI Tools", icon: "brain" },
    { name: "Docker", icon: "layers" },
    { name: "Next.js", icon: "layers" },
    { name: "TypeScript", icon: "code" },
    { name: "SQL", icon: "database" },
    { name: "LangChain", icon: "brain" },
    { name: "RESTful APIs", icon: "code" },
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/anoexpected", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/anoexpected", icon: "linkedin" },
    { name: "X", url: "https://x.com/anoexpected", icon: "x" },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&authuser=1&user=XJ30MIwAAAAJ", icon: "scholar" },
  ] as SocialLink[],

  navigation: [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ],
} as const;

export type PortfolioContent = typeof portfolioContent;

