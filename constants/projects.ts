export const projects = [
  {
    title: "The Manuscript",
    slug: "the-manuscript",
    tagline:
      "A full-stack document collaboration platform for creating, editing, and sharing structured manuscripts in real time.",
    overview:
      "The Manuscript is a modern writing and collaboration tool designed for developers, writers, and teams who need a clean, distraction-free environment to draft, structure, and publish long-form content. It supports rich-text editing, version history, and real-time multi-user collaboration powered by a robust backend API.",
    features: [
      "Rich-text editor with markdown and block-based content support.",
      "Real-time collaboration with multiple users on the same document.",
      "Version history and change tracking for full editorial control.",
      "Organized workspace with folder and tag-based document management.",
      "Responsive design optimized for desktop and tablet writing sessions.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Radix UI",
    ],
    challenges: [
      "Building conflict-free real-time editing with operational transforms.",
      "Designing a scalable document schema to support nested content blocks.",
      "Optimizing editor performance for large, complex documents.",
      "Ensuring consistent UI across different screen sizes and input modes.",
    ],
    learnings: [
      "Deepened understanding of real-time data sync strategies.",
      "Improved skills in designing complex stateful UI components.",
      "Gained experience in content-heavy application architecture.",
      "Enhanced knowledge of MongoDB schema design for document-oriented data.",
    ],
    feedback: false,
    links: {
      live: "#",
      github: "#",
    },
  },

  {
    title: "RAG Application",
    slug: "rag-application",
    tagline:
      "An AI-powered Retrieval-Augmented Generation system that answers questions by grounding responses in your own documents.",
    overview:
      "RAG Application is an intelligent document Q&A platform built on a Retrieval-Augmented Generation pipeline. Users can upload PDFs, text files, or paste content, and the system chunks, embeds, and stores them in a vector database. On query, it retrieves the most relevant context and feeds it into a large language model to deliver accurate, citation-backed answers — minimizing hallucinations and maximising relevance.",
    features: [
      "Document ingestion pipeline supporting PDF, TXT, and plain-text input.",
      "Automatic chunking and embedding using state-of-the-art embedding models.",
      "Vector similarity search with a high-performance vector database.",
      "LLM-powered response generation grounded in retrieved document context.",
      "Source citation displayed alongside every answer for full transparency.",
    ],
    techStack: [
      "Python",
      "LangChain",
      "FastAPI",
      "Pinecone",
      "OpenAI API",
    ],
    challenges: [
      "Designing an efficient chunking strategy to preserve semantic meaning.",
      "Balancing retrieval recall and precision for diverse query types.",
      "Managing embedding costs and latency at scale.",
      "Integrating the vector store with the LLM pipeline without bottlenecks.",
    ],
    learnings: [
      "Gained deep expertise in RAG architecture and retrieval strategies.",
      "Improved understanding of vector databases and semantic search.",
      "Learned to fine-tune prompt templates for grounded LLM responses.",
      "Enhanced skills in building production-ready AI backend services.",
    ],
    feedback: false,
    links: {
      live: "#",
      github: "#",
    },
  },

  {
    title: "Agentic AI",
    slug: "agentic-ai",
    tagline:
      "An autonomous AI agent framework that plans, reasons, and executes multi-step tasks using tool-calling and memory.",
    overview:
      "Agentic AI is a modular framework for building autonomous AI agents capable of decomposing complex goals into step-by-step plans, selecting the right tools, executing actions, and reflecting on results. The system integrates memory modules for short- and long-term context retention, enabling the agent to maintain coherent multi-turn interactions and handle real-world tasks like web research, code execution, and API orchestration.",
    features: [
      "Goal-driven planning engine that breaks tasks into actionable subtasks.",
      "Tool-calling interface supporting web search, code execution, and APIs.",
      "Short-term and long-term memory modules for context-aware reasoning.",
      "Reflection loop that evaluates and self-corrects agent outputs.",
      "Extensible plugin system for adding custom tools and integrations.",
    ],
    techStack: [
      "Python",
      "LangGraph",
      "OpenAI API",
      "FastAPI",
      "Redis",
    ],
    challenges: [
      "Designing a reliable planning loop that handles ambiguous instructions.",
      "Preventing infinite loops and managing agent failure gracefully.",
      "Implementing memory that scales without polluting the context window.",
      "Coordinating multiple tool calls with dependency ordering.",
    ],
    learnings: [
      "Mastered agentic patterns including ReAct, Plan-and-Execute, and Reflexion.",
      "Gained hands-on experience with LangGraph for stateful agent workflows.",
      "Improved understanding of prompt engineering for autonomous decision-making.",
      "Developed robust error-handling strategies for non-deterministic AI systems.",
    ],
    feedback: false,
    links: {
      live: "#",
      github: "#",
    },
  },
];
