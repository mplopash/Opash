export interface JobOpening {
  id: string;
  department: string;
  type: string;
  title: string;
  location: string;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "senior-full-stack-engineer",
    department: "Engineering",
    type: "Full-Time",
    title: "Senior Full-Stack Engineer (React / Node.js)",
    location: "Surat, Gujarat (Hybrid / On-Site)",
    experience: "4 - 7 Years",
    description: "We are looking for an experienced Senior Full-Stack Engineer to lead the architecture and implementation of scalable web platforms using Next.js, Node.js, and PostgreSQL.",
    responsibilities: [
      "Architect clean, maintainable microservice backends and responsive Next.js frontends.",
      "Mentor junior and mid-level engineers through detailed code reviews and architectural whiteboarding.",
      "Collaborate directly with global clients during sprint planning and technical design reviews.",
      "Implement automated CI/CD pipelines and unit/integration test suites.",
    ],
    qualifications: [
      "4+ years of professional experience with React/Next.js and Node.js/NestJS.",
      "Deep understanding of relational database design (PostgreSQL/MySQL) and caching (Redis).",
      "Proficiency in TypeScript, RESTful APIs, GraphQL, and Docker containers.",
      "Strong verbal and written English communication skills for international client interaction.",
    ],
  },
  {
    id: "ai-ml-solutions-engineer",
    department: "AI Innovation Lab",
    type: "Full-Time",
    title: "AI / ML & LLM Solutions Engineer",
    location: "Surat, Gujarat (Hybrid / On-Site)",
    experience: "2 - 5 Years",
    description: "Join our AI research and deployment squad building sovereign enterprise RAG pipelines, fine-tuned LLM agents, and automated vision models.",
    responsibilities: [
      "Design and deploy production RAG pipelines using LangChain, LlamaIndex, and vector databases (Qdrant, Pinecone).",
      "Fine-tune open-weights LLMs (Llama 3, Mistral) for domain-specific enterprise workflows.",
      "Build high-throughput Python FastAPI microservices wrapping AI models.",
      "Implement security guardrails, token cost optimizations, and prompt evaluations.",
    ],
    qualifications: [
      "2+ years of hands-on experience in Python and deep learning frameworks (PyTorch).",
      "Proven experience deploying LLMs, embeddings, and vector similarity search in production.",
      "Familiarity with containerized deployment using Docker and AWS Bedrock / SageMaker.",
      "Passion for state-of-the-art AI agent architectures.",
    ],
  },
  {
    id: "mobile-app-developer",
    department: "Mobile Engineering",
    type: "Full-Time",
    title: "Mobile App Developer (Flutter & React Native)",
    location: "Surat, Gujarat (Hybrid / On-Site)",
    experience: "2 - 4 Years",
    description: "Craft responsive, high-rated mobile apps for iOS and Android with butter-smooth 60fps animations and offline-first capabilities.",
    responsibilities: [
      "Develop cross-platform consumer and enterprise apps using Flutter or React Native.",
      "Integrate complex native device APIs (camera, Bluetooth, biometrics, background push).",
      "Optimize rendering pipelines for silky 60fps animations and low battery consumption.",
      "Manage release builds and deployment pipelines for the Apple App Store and Google Play Console.",
    ],
    qualifications: [
      "2+ years building and shipping production apps with Flutter (Dart) or React Native (TypeScript).",
      "Strong grasp of state management (Bloc, Riverpod, Redux, or Zustand).",
      "Experience with offline storage (SQLite, WatermelonDB) and REST/GraphQL sync.",
    ],
  },
  {
    id: "qa-automation-engineer",
    department: "Quality Assurance",
    type: "Full-Time",
    title: "QA Automation Engineer (Playwright / Cypress)",
    location: "Surat, Gujarat (Hybrid / On-Site)",
    experience: "2 - 4 Years",
    description: "Guarantee zero production regressions by building automated end-to-end testing frameworks and high-concurrency load test scenarios.",
    responsibilities: [
      "Write automated end-to-end regression suites using Playwright or Cypress with TypeScript.",
      "Perform high-concurrency API performance and stress testing with k6 and JMeter.",
      "Embed tests into automated GitHub Actions CI/CD pipelines.",
      "Conduct security vulnerability scans and cross-browser visual regressions.",
    ],
    qualifications: [
      "2+ years in software QA automation with modern JavaScript/TypeScript test frameworks.",
      "Strong experience in API testing, Postman, and database verification.",
      "Meticulous eye for detail and passion for bulletproof software stability.",
    ],
  },
  {
    id: "software-engineering-intern",
    department: "Early Careers",
    type: "Full-Time Internship",
    title: "Software Engineering Intern / Fresher",
    location: "Surat, Gujarat (On-Site)",
    experience: "Fresher / 0 - 1 Year",
    description: "Kickstart your engineering journey with direct mentorship from senior tech leads, working on real international client projects from day one.",
    responsibilities: [
      "Build UI components in React, TypeScript, and modern CSS frameworks.",
      "Assist in writing backend APIs and database queries in Node.js or Python.",
      "Participate in daily code reviews, architecture discussions, and agile standups.",
      "Write unit tests and documentation for software deliverables.",
    ],
    qualifications: [
      "Degree in Computer Science, IT, or equivalent practical coding background.",
      "Solid understanding of HTML, CSS, JavaScript/TypeScript, and basic data structures.",
      "Hungry to learn, high curiosity, and strong problem-solving mindset.",
    ],
  },
];

export const culturePerks = [
  {
    title: "High-End Gear",
    description: "Top-tier MacBook Pro or high-performance workstations with dual 4K monitors.",
    icon: "Laptop",
  },
  {
    title: "Merit-Based Growth",
    description: "Bi-annual performance evaluations with rapid promotional tracks for top performers.",
    icon: "TrendingUp",
  },
  {
    title: "Vibrant Work Culture",
    description: "Team outings, gaming tournaments, celebratory hackathons, and endless gourmet coffee.",
    icon: "Coffee",
  },
  {
    title: "Comprehensive Health",
    description: "Comprehensive health insurance covering you and your immediate family members.",
    icon: "HeartPulse",
  },
  {
    title: "Paid Time Off",
    description: "Generous vacation policies, festive holidays, sick leave, and parental leave.",
    icon: "CalendarCheck",
  },
  {
    title: "Recognition Bonuses",
    description: "Spot awards and quarterly bonuses celebrating innovation, code quality, and peer mentorship.",
    icon: "Award",
  },
];
