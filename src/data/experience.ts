export interface Role {
  title: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experience: Role[] = [
  {
    title: 'Research Assistant',
    company: 'LAiSER',
    period: 'Jun 2025 - Present',
    current: true,
    bullets: [
      'Work at a Gates and Walmart backed research lab using AI to extract and align skill intelligence from unstructured data.',
      'Shipped the open-source Extract Module, an LLM-powered pipeline that parses resumes, syllabi, and job postings into structured Knowledge, Skills, and Tasks for 5+ production organizations.',
      'Built with PyTorch, Hugging Face Transformers, Sentence-Transformers, FAISS, Neo4j, vLLM, and GitLab CI/CD.',
      'Architected and owned a Dockerized FastAPI service on AWS ECR/EC2 that extracts skills from credential content and handles 50K+ requests/day with sub-200ms p99 latency.',
    ],
  },
  {
    title: 'Research Engineer',
    company: 'EDUJO Labs',
    period: 'Jan 2023 - May 2024',
    current: false,
    bullets: [
      'Engineered a full-stack AI-powered LMS that enabled instructors to generate courses on the fly.',
      'Built a RAG chatbot that answered learner questions grounded in course materials.',
      'Used Next.js, Node.js, PostgreSQL, GraphQL, OpenAI GPT-3.5/4, embeddings, Pinecone, and Azure TTS.',
      'Supported 200+ generated courses, 25K+ learner interactions, and a 4.2/5 average chatbot rating across 1K+ learner interactions.',
    ],
  },
  {
    title: 'M.S. Computer Science',
    company: 'George Washington University',
    period: 'Aug 2024 - May 2026',
    current: false,
    bullets: [
      'GPA: 3.7/4.0, Magna Cum Laude.',
      'Focused on systems, AI infrastructure, and data-intensive software engineering.',
    ],
  },
];
