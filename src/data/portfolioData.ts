export interface PortfolioProject {
  id: string;
  category: string;
  industry: string;
  title: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  clientName: string;
  clientRole: string;
  clientQuote?: string;
  url?: string;
  displayUrl?: string;
  metrics: {
    value: string;
    label: string;
  }[];
  tags: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ucarehq",
    category: "HealthTech",
    industry: "HealthTech & Care Management",
    title: "Transforming Care Coordination With An Intuitive Healthcare Management Platform",
    tagline: "UCareHQ — HIPAA-Compliant Healthcare Portal",
    summary: "Opash Software delivered a seamless and HIPAA-compliant care management platform for UCareHQ, combining modern UI/UX design with robust cloud architecture to empower healthcare providers and streamline operational workflows.",
    challenge: "UCareHQ needed to replace fragmented patient data tracking and legacy coordination workflows with a unified, secure cloud portal that compliant medical practitioners could use with zero friction.",
    solution: "Engineered an end-to-end web application with encrypted patient records, role-based practitioner portals, automated appointment scheduling, and real-time medical task boards using Next.js, Node.js, and HIPAA-hardened AWS infrastructure.",
    clientName: "Brad Jeffery",
    clientRole: "Founder & Product Lead, UCareHQ",
    clientQuote: "Opash Software delivered a seamless and intuitive platform for UCareHQ, combining modern design with robust functionality to enhance user experience and operational efficiency.",
    url: "https://ucarehq.com",
    displayUrl: "ucarehq.com",
    metrics: [
      { value: "65%", label: "Reduction in Administrative Overhead" },
      { value: "99.99%", label: "Uptime Across Clinics" },
      { value: "4.9/5", label: "Caregiver Satisfaction Score" },
      { value: "100%", label: "HIPAA Security Compliance" },
    ],
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS HIPAA Cloud", "TailwindCSS"],
    deliverables: [
      { title: "HIPAA Compliance Audit", description: "Encrypted patient data scheme & audited RBAC" },
      { title: "Care Coordination Board", description: "Practitioner task management UI & live queues" },
      { title: "PostgreSQL Schema & APIs", description: "Role-based access control endpoints" },
      { title: "AWS HIPAA Deployment Log", description: "Hardened VPC & automated backup snapshots" },
    ],
  },
  {
    id: "iko-international",
    category: "Industrial Tech",
    industry: "Industrial Tech & Supply Chain",
    title: "2-Year Full-Stack Modernization For Global Industrial Engineering Leader",
    tagline: "IKO International — Enterprise Parts Catalog",
    summary: "Opash Software partnered with IKO International on a full-time, 2-year dedicated engineering engagement, building and maintaining enterprise frontend portals in Angular and microservices backends.",
    challenge: "IKO required a dedicated full-stack squad capable of integrating with their international engineering team, handling complex mechanical product catalogs, custom CAD downloads, and high-concurrency enterprise quoting systems.",
    solution: "Provided dedicated senior full-stack developers (MEAN stack) who overhauled the customer-facing digital experience, built high-speed search and filtering for thousands of industrial parts, and maintained continuous CI/CD releases.",
    clientName: "Fred Bene",
    clientRole: "Engineering Director, IKO International",
    clientQuote: "We worked with Hiren (Opash Software) for 2 years on a full-time basis as a full stack developer (MEAN) working mostly on the frontend in Angular. They are true professionals — communication was fantastic, and their level of commitment to the project was unmatched. We would love to be working with Opash Software again in the future.",
    url: "https://next.ikointl.com",
    displayUrl: "next.ikointl.com",
    metrics: [
      { value: "2 Years", label: "Continuous Dedicated Partnership" },
      { value: "3x", label: "Search & Catalog Query Speed" },
      { value: "100%", label: "On-Time Sprint Deliverables" },
      { value: "0", label: "Production Outages During Migration" },
    ],
    tags: ["Angular", "TypeScript", "Node.js", "Express", "MongoDB", "AWS S3", "Docker"],
    deliverables: [
      { title: "2-Year Dedicated Sprint Log", description: "Daily agile standups, CI/CD releases & architecture" },
      { title: "Angular CAD Search Engine", description: "Filtering thousands of precision mechanical parts" },
      { title: "Express/MongoDB Microservices", description: "High-concurrency quoting engine" },
      { title: "Zero-Downtime Migration Plan", description: "Seamless legacy database migration & live sync" },
    ],
  },
  {
    id: "esanad",
    category: "FinTech",
    industry: "FinTech & Legal Document Verification",
    title: "Building Secure Digital Notarization & Verified Document Pipelines for MENA",
    tagline: "eSanad — Tamper-Proof Legal Verification",
    summary: "We partnered with eSanad to bring their vision to life — developing a high-speed, tamper-proof document verification platform that processes and validates legal certificates in real-time.",
    challenge: "Legal document authentication required airtight cryptographic validation, multi-lingual Arabic/English interfaces, high security against forgery, and instant verification for government and corporate users.",
    solution: "Built a cryptographic verification architecture with QR digital watermarking, encrypted cloud storage, bi-directional verification APIs, and an ultra-clean mobile-first web app.",
    clientName: "Tariq Al-Mansoor",
    clientRole: "Head of Digital Operations, eSanad",
    clientQuote: "Opash Software delivered an exceptional, bulletproof verification system that our legal partners trust completely every single day.",
    url: "https://www.esanad.com",
    displayUrl: "www.esanad.com",
    metrics: [
      { value: "<1.5s", label: "Instant Document Verification Time" },
      { value: "250k+", label: "Verified Certificates Processed" },
      { value: "100%", label: "Audit & Anti-Tamper Accuracy" },
      { value: "Arabic & Eng", label: "Bilingual Localization" },
    ],
    tags: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "AWS Cloud", "Cryptography"],
    deliverables: [
      { title: "MENA Notarization Protocol", description: "Legally binding electronic signature pipeline" },
      { title: "QR Digital Watermarking", description: "Cryptographic tamper-proof certificate generation" },
      { title: "Bi-Directional Validation API", description: "Real-time government portal verification webhook" },
      { title: "Multi-Language UI Suite", description: "Full RTL Arabic and LTR English interface" },
    ],
  },
  {
    id: "mortgage-automation",
    category: "FinTech",
    industry: "FinTech & Real Estate Lending",
    title: "Scalable Cloud Architecture & Multi-API Mortgage Automation Engine",
    tagline: "LendFlow — Automated Credit Assessment",
    summary: "Engineered a high-concurrency mortgage calculation and automated pre-qualification engine integrating with major national credit bureaus and banking APIs.",
    challenge: "Manual credit assessments were taking up to 72 hours per loan applicant, leading to high abandonment rates and lost revenue for mortgage originators.",
    solution: "Designed a serverless AWS Lambda and DynamoDB pipeline that ingests applicant data, validates identity via KYC APIs, calculates debt-to-income ratios in seconds, and provides instant pre-approval decisions.",
    clientName: "Michael Chang",
    clientRole: "VP of Product Engineering",
    clientQuote: "The speed and reliability of our lending pipeline skyrocketed thanks to the architectural excellence of Opash Software.",
    metrics: [
      { value: "4x", label: "Underwriting Throughput" },
      { value: "<3 Min", label: "Instant Pre-Approval Decision" },
      { value: "99.98%", label: "Calculation Accuracy SLA" },
      { value: "SOC-2", label: "Compliant Financial Cloud" },
    ],
    tags: ["Next.js", "Python", "AWS Lambda", "DynamoDB", "FastAPI", "Stripe", "Docker"],
    deliverables: [
      { title: "Multi-API Mortgage Engine", description: "Automated loan calculation & credit check APIs" },
      { title: "Serverless Event Pipeline", description: "DynamoDB event streams & microsecond calculation" },
      { title: "Underwriter Dashboard", description: "Risk scoring visualization & exception reviews" },
    ],
  },
  {
    id: "polling-sentiment-engine",
    category: "Creative Media",
    industry: "Media & Consumer Tech",
    title: "High-Concurrency Public Sentiment & Real-Time Interactive Polling Engine",
    tagline: "PulseStream — Real-Time Audience Telemetry",
    summary: "Architected a distributed WebSocket streaming platform capable of tallying over 500,000 simultaneous audience votes during live televised broadcasts with microsecond latency.",
    challenge: "Live television broadcasts experienced severe server crashes and latency spikes whenever millions of television viewers attempted to vote within a 60-second window.",
    solution: "Implemented Redis pub/sub clusters, Go-powered edge WebSocket termination, and sharded PostgreSQL databases that absorbed massive traffic spikes without dropping a single vote.",
    clientName: "Sarah Jenkins",
    clientRole: "Chief Technology Officer",
    clientQuote: "Handling half a million concurrent WebSocket connections without breaking a sweat was a masterpiece of distributed engineering.",
    metrics: [
      { value: "500k+", label: "Concurrent Connected Sockets" },
      { value: "<35ms", label: "Live Vote Update Latency" },
      { value: "Zero", label: "Dropped Votes During Peaks" },
      { value: "100%", label: "Live Broadcast Uptime" },
    ],
    tags: ["Go", "Redis Clusters", "WebSockets", "Next.js", "PostgreSQL", "Kubernetes"],
    deliverables: [
      { title: "Distributed Socket Gateway", description: "Edge Go microservices terminating client sockets" },
      { title: "Real-Time Telemetry Graphs", description: "60fps canvas-rendered audience sentiment charts" },
      { title: "Redis Cluster Pipeline", description: "High-throughput sub-millisecond atomic counters" },
    ],
  },
  {
    id: "creative-production-showcase",
    category: "Creative Media",
    industry: "Creative Media & Digital Production",
    title: "Modern Interactive Digital Showcase For Next-Gen Creative Production",
    tagline: "VividMedia — 4K Edge Streaming Portfolio",
    summary: "Built a visually stunning, ultra-fast portfolio platform for a premier creative studio featuring sub-second 4K video previews, fluid cursor physics, and frictionless client inquiries.",
    challenge: "Heavy 4K video assets and high-res stills were slowing down page loads to over 6 seconds, frustrating prospective international clients.",
    solution: "Engineered a Next.js 15 site with multi-region CDN edge caching, adaptive HLS video streaming, Figma design token sync, and GPU-accelerated micro-animations.",
    clientName: "Elena Rostova",
    clientRole: "Creative Director",
    clientQuote: "Our brand perception completely transformed. Inquiries from top global advertising agencies doubled within 30 days of launch.",
    metrics: [
      { value: "95+", label: "Lighthouse Performance Score" },
      { value: "2x", label: "Qualified Client Inquiries" },
      { value: "<0.6s", label: "4K Media Stream Preview" },
      { value: "60 FPS", label: "Fluid Animation Performance" },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Cloudinary", "Edge CDN"],
    deliverables: [
      { title: "4K Media Streaming Architecture", description: "Adaptive bitrate video previews & CDN caching" },
      { title: "Design System & Micro-Animations", description: "Figma design tokens & fluid cursor physics" },
      { title: "Production Global Launch Plan", description: "Multi-region CDN routing & zero-downtime deploy" },
    ],
  },
];
