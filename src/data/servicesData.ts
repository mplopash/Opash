export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  metrics: ServiceMetric[];
  capabilities: ServiceCapability[];
  techStack: string[];
  deliverables: ServiceDeliverable[];
  faqs: ServiceFAQ[];
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const servicesData: Record<string, ServiceDetail> = {
  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "Enterprise Grade",
    heroTitle: "Bespoke Enterprise Software Engineered For Unlimited Scale",
    heroSubtitle: "From automated back-office workflows to distributed multi-platform architectures, we engineer software tailored to your specific business DNA.",
    metrics: [
      { value: "40%", label: "Faster Time-To-Market" },
      { value: "99.98%", label: "System Availability SLA" },
      { value: "100%", label: "Custom Architecture Ownership" },
      { value: "0", label: "Vendor Lock-in" },
    ],
    capabilities: [
      {
        title: "Bespoke Architecture Design",
        description: "Designed from first principles to handle your unique transaction loads, user roles, data privacy standards, and compliance demands.",
      },
      {
        title: "Legacy Modernization & Refactoring",
        description: "Upgrade monolithic, slow, or deprecated systems into agile, cloud-native microservices with zero downtime and seamless data migration.",
      },
      {
        title: "Enterprise Workflow Automation",
        description: "Eliminate repetitive manual bottlenecks with automated data processing, approval pipelines, real-time sync, and intelligent notifications.",
      },
      {
        title: "High-Throughput API Ecosystems",
        description: "Secure RESTful and GraphQL endpoints connecting CRM, ERP, payment gateways, biometric auth, and legacy databases effortlessly.",
      },
      {
        title: "Strict Security & Data Governance",
        description: "Role-based access control (RBAC), end-to-end data encryption, audit trails, and compliance with GDPR, HIPAA, and SOC-2 standards.",
      },
      {
        title: "DevOps & CI/CD Pipelines",
        description: "Automated testing, containerized Docker deployments, and Kubernetes orchestration on AWS, GCP, or Azure for bulletproof resilience.",
      },
    ],
    techStack: [
      "React", "Next.js", "Angular", "Node.js", "Nest.js", "Python",
      "Django", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS"
    ],
    deliverables: [
      { title: "Production Source Code", description: "100% IP ownership with clean documentation, git history, and modular architecture." },
      { title: "Automated Test Suites", description: "Unit, integration, and E2E test coverage ensuring zero regressions." },
      { title: "Cloud Deployment Manifests", description: "Dockerfiles, Kubernetes configs, and Terraform/CloudFormation templates." },
      { title: "Architecture Blueprint", description: "Complete system schema, entity-relationship diagrams, and API docs." },
    ],
    faqs: [
      {
        q: "Why should we choose custom software instead of off-the-shelf SaaS?",
        a: "Off-the-shelf software forces you to adapt your business around someone else's constraints, charges perpetual per-seat licensing fees, and limits integration capabilities. Custom software gives you complete intellectual property ownership, tailored efficiency, lower long-term TCO, and a unique competitive edge.",
      },
      {
        q: "How long does a typical custom software project take?",
        a: "A production-ready MVP typically takes 6 to 12 weeks depending on scope complexity. Full enterprise-grade systems usually evolve across 2-week agile sprints with immediate deployable increments every sprint.",
      },
      {
        q: "Do we retain full intellectual property (IP) and code rights?",
        a: "Yes, 100%. From day one, you own all source code, design assets, database schemas, and documentation under a binding mutual agreement with zero vendor lock-in.",
      },
      {
        q: "How does Opash handle project management and communication?",
        a: "We integrate directly into your daily communication stack — Slack, Jira/Linear, GitHub, and daily or bi-weekly video standups with dedicated senior tech leads.",
      },
    ],
    meta: {
      title: "Custom Software Development Services | Opash Software",
      description: "Bespoke Enterprise Software Engineered For Unlimited Scale. 50+ Senior Developers in Surat delivering worldwide.",
      keywords: "custom software development, enterprise software, bespoke software, software engineering india, hire software engineers",
    },
  },

  "web-development": {
    slug: "web-development",
    title: "Web Development",
    tagline: "High-Performance Web",
    heroTitle: "Next-Gen Web Applications That Captivate & Convert",
    heroSubtitle: "Ultra-fast, responsive web applications built with Next.js, React, and modern Jamstack architectures for sub-second load times and unmatched conversion rates.",
    metrics: [
      { value: "<0.8s", label: "Average First Contentful Paint" },
      { value: "98+", label: "Google Lighthouse Performance" },
      { value: "3x", label: "Conversion Rate Improvement" },
      { value: "100%", label: "Responsive & Fluid Design" },
    ],
    capabilities: [
      {
        title: "Modern Jamstack & Server Components",
        description: "Leveraging Next.js App Router, SSR, and Static Site Generation for instant load times and superior Core Web Vitals.",
      },
      {
        title: "Dynamic Single Page Applications (SPA)",
        description: "Complex interactive web applications with fluid state management, instant transitions, and rich client-side interactivity.",
      },
      {
        title: "Progressive Web Apps (PWA)",
        description: "Offline-capable web apps with background sync, push notifications, and app-like installation on iOS and Android devices.",
      },
      {
        title: "SEO & Conversion Architecture",
        description: "Semantic HTML5, automated schema markup, dynamic OpenGraph previews, and edge rendering that search engines love.",
      },
      {
        title: "Headless CMS & Content Hubs",
        description: "Flexible content management setups using Strapi, Contentful, Sanity, or WordPress APIs, empowering marketing teams.",
      },
      {
        title: "Accessibility & WCAG 2.1 Compliance",
        description: "Inclusive user interfaces designed for assistive technologies, keyboard navigation, and rigorous contrast standards.",
      },
    ],
    techStack: [
      "Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "Node.js",
      "Redis", "PostgreSQL", "Vercel Edge", "AWS CloudFront", "Framer Motion", "Jest"
    ],
    deliverables: [
      { title: "Optimized Next.js Web App", description: "Production bundle with ISR/SSR rendering and edge CDN caching." },
      { title: "Design System & Component Library", description: "Reusable, atomic UI components with strict TypeScript types." },
      { title: "SEO & OpenGraph Configuration", description: "Automated sitemaps, robots.txt, structured JSON-LD schemas." },
      { title: "Analytics & Event Tracking", description: "Integrated Google Tag Manager, PostHog, or Segment telemetry." },
    ],
    faqs: [
      {
        q: "Can you help migrate our legacy website to Next.js or React?",
        a: "Yes, we specialize in seamless migrations from older frameworks (WordPress, PHP, legacy Angular, jQuery) to Next.js, boosting speed by up to 300% without losing SEO rankings.",
      },
      {
        q: "How do you ensure our web application is fast?",
        a: "We adhere strictly to Web Vitals guidelines: image/font optimization, route-based code splitting, edge caching, server-side streaming, and minimal bundle sizes.",
      },
      {
        q: "Will our website look great on mobile phones and tablets?",
        a: "Absolutely. All our web applications are built with mobile-first fluid design systems, thoroughly tested across 15+ real physical device viewport sizes.",
      },
      {
        q: "Do you provide post-launch maintenance and support?",
        a: "Yes, we provide SLA-backed maintenance packages covering security patches, dependency upgrades, cloud monitoring, and continuous feature additions.",
      },
    ],
    meta: {
      title: "Web Development Services | Next.js & React Apps | Opash Software",
      description: "High-performance Next.js and React web application development company. Sub-second load times and rich interactive UX.",
      keywords: "web development, nextjs development company, react web app, frontend engineering, jamstack development",
    },
  },

  "mobile-development": {
    slug: "mobile-development",
    title: "Mobile App Development",
    tagline: "Cross-Platform & Native",
    heroTitle: "Engaging iOS & Android Apps Users Love To Tap Every Day",
    heroSubtitle: "Engineered with React Native, Flutter, and native Swift/Kotlin for butter-smooth 60fps animations, offline resilience, and rapid app store approval.",
    metrics: [
      { value: "4.8★", label: "Average App Store Rating" },
      { value: "60 FPS", label: "Butter-Smooth Native UX" },
      { value: "50%", label: "Development Cost Reduction" },
      { value: "<2 Wks", label: "Store Approval Lead Time" },
    ],
    capabilities: [
      {
        title: "React Native & Flutter Solutions",
        description: "Single codebase, dual native builds: cut development costs and time-to-market in half without sacrificing native touch and feel.",
      },
      {
        title: "Native iOS (Swift) & Android (Kotlin)",
        description: "Deep hardware integrations, ARKit, CoreBluetooth, biometric security, and ultra-high-speed native computations.",
      },
      {
        title: "Offline-First Data Synchronization",
        description: "Local SQLite/WatermelonDB storage with conflict resolution and automated background syncing when internet reconnects.",
      },
      {
        title: "In-App Purchases & Subscriptions",
        description: "Robust RevenueCat and native StoreKit integrations with server-side receipt validation and fraud prevention.",
      },
      {
        title: "Push Notifications & Real-Time Sync",
        description: "FCM and APNs integration with deep-linking, contextual rich notifications, and WebSocket live updates.",
      },
      {
        title: "Store Submission & Compliance",
        description: "End-to-end management of Apple App Store and Google Play reviews, privacy manifest adherence, and release orchestration.",
      },
    ],
    techStack: [
      "Flutter", "React Native", "Swift", "Kotlin", "TypeScript", "Firebase",
      "SQLite", "GraphQL", "Fastlane", "RevenueCat", "App Center", "AWS Mobile"
    ],
    deliverables: [
      { title: "Compiled iOS & Android Binaries", description: "Signed IPA and AAB packages configured for release tracks." },
      { title: "Source Code & CI/CD Fastlane Scripts", description: "Automated test flight distribution and play console deployment." },
      { title: "Store Listing Assets & Metadata", description: "Screenshots, promotional artwork, privacy disclosures, and copy." },
      { title: "Backend API Sync Endpoints", description: "Documented Swagger/OpenAPI endpoints powering the mobile apps." },
    ],
    faqs: [
      {
        q: "Should I build a cross-platform app (Flutter/React Native) or native?",
        a: "For 90% of business applications, cross-platform with Flutter or React Native offers identical 60fps performance while saving 40-50% in development and maintenance budgets. Native Swift/Kotlin is best reserved for specialized BLE hardware drivers or intensive 3D rendering.",
      },
      {
        q: "Do you assist with getting our app approved on the App Store and Google Play?",
        a: "Yes! We handle the complete submission workflow, metadata optimization, privacy policy compliance, and respond directly to Apple/Google review queries.",
      },
      {
        q: "Can the app work when the user has no active internet connection?",
        a: "Yes, we architect offline-first data persistence so users can perform actions offline, with data automatically synchronizing once connectivity resumes.",
      },
      {
        q: "How do you handle OS version updates from Apple and Google?",
        a: "Our apps are designed around current SDKs and forward-compatible patterns. We also offer continuous maintenance contracts to ensure immediate compatibility with major iOS/Android OS updates.",
      },
    ],
    meta: {
      title: "Mobile App Development Services | iOS & Android | Opash Software",
      description: "Top-rated Flutter & React Native mobile application development services for startups and scaleups.",
      keywords: "mobile app development, flutter development, react native agency, ios android apps, mobile software engineering",
    },
  },

  "ai-ml-solutions": {
    slug: "ai-ml-solutions",
    title: "AI & ML Solutions",
    tagline: "Autonomous Intelligence",
    heroTitle: "Harness Generative AI & Predictive Models For Competitive Dominance",
    heroSubtitle: "From enterprise Retrieval-Augmented Generation (RAG) and multi-agent workflows to predictive intelligence and computer vision models deployed at scale.",
    metrics: [
      { value: "85%", label: "Operational Overhead Reduction" },
      { value: "<250ms", label: "Semantic Search Latency" },
      { value: "99.2%", label: "Information Retrieval Accuracy" },
      { value: "100%", label: "Data Privacy & Sovereign LLM" },
    ],
    capabilities: [
      {
        title: "Enterprise RAG & Private Knowledge Bases",
        description: "Vector search over proprietary enterprise docs (PDFs, Notion, SQL) with strict RBAC access control and zero hallucination risk.",
      },
      {
        title: "Autonomous Agentic Workflows",
        description: "Multi-agent systems using LangChain, LangGraph, and AutoGen to execute multi-step research, reasoning, and automated operational tasks.",
      },
      {
        title: "Custom LLM Fine-Tuning & Quantization",
        description: "Domain-specific fine-tuning of open-source models (Llama 3, Mistral, Qwen) for cost-effective, low-latency, private on-prem deployment.",
      },
      {
        title: "Computer Vision & OCR Automation",
        description: "Automated document digitization, defect detection, facial verification, and object classification pipelines.",
      },
      {
        title: "Predictive Analytics & Churn Modeling",
        description: "Supervised and unsupervised models identifying customer churn risk, demand forecasting, and algorithmic anomaly detection.",
      },
      {
        title: "AI Safety, Guardrails & Auditing",
        description: "Real-time prompt injection defense, PII redaction, token rate-limiting, and comprehensive telemetry for LLM cost control.",
      },
    ],
    techStack: [
      "Python", "LangChain", "LlamaIndex", "OpenAI / Claude APIs", "Ollama", "Qdrant",
      "Pinecone", "HuggingFace", "PyTorch", "FastAPI", "Docker", "AWS Bedrock"
    ],
    deliverables: [
      { title: "Engineered AI/ML Pipeline", description: "Containerized inference microservices with FastAPI and vector stores." },
      { title: "Evaluated Model Checkpoints", description: "Fine-tuned weights, embeddings, and prompt orchestration manifests." },
      { title: "Safety & Guardrail Layer", description: "Input/output filters, PII scrubbers, and cost-monitoring dashboards." },
      { title: "Interactive UI Integration", description: "React-based chat, search, or copilot interfaces embedded in your app." },
    ],
    faqs: [
      {
        q: "Will our proprietary business data be shared with OpenAI or public models?",
        a: "Never. We design architectures with enterprise privacy guarantees: either via zero-retention enterprise API endpoints or completely self-hosted open-source models (e.g. Llama 3) inside your private VPC.",
      },
      {
        q: "What is Retrieval-Augmented Generation (RAG)?",
        a: "RAG connects an AI model to your live company knowledge base. Instead of guessing, the AI retrieves verified source paragraphs and synthesizes accurate, citation-backed answers with zero hallucination.",
      },
      {
        q: "How much does it cost to run custom AI in production?",
        a: "We actively optimize for token economy using semantic caching, hybrid BM25 + dense vector search, and model tiering (using fast lightweight models for easy queries and frontier models for complex reasoning), minimizing monthly cloud spend.",
      },
      {
        q: "Can you integrate AI into our existing software without a rewrite?",
        a: "Yes! We build modular microservice adapters that connect to your current databases, CRMs, or web apps through clean REST/GraphQL APIs.",
      },
    ],
    meta: {
      title: "AI & ML Solutions | Generative AI & Autonomous Agents | Opash Software",
      description: "Custom AI development services: Enterprise RAG, LLM fine-tuning, autonomous agents, and predictive machine learning models.",
      keywords: "ai solutions, machine learning services, enterprise rag, generative ai development, custom llm agents",
    },
  },

  "saas-development": {
    slug: "saas-development",
    title: "SaaS Development",
    tagline: "Scalable Multi-Tenant Platforms",
    heroTitle: "Scalable Multi-Tenant SaaS Built To Grow From 10 To 1,000,000 Users",
    heroSubtitle: "Engineered from foundation to IPO: multi-tenant database isolation, Stripe subscription billing, granular RBAC, and high-margin cloud infrastructure.",
    metrics: [
      { value: "99.99%", label: "Target Multi-Tenant Uptime" },
      { value: "4x", label: "Lower Infrastructure Cost Per Tenant" },
      { value: "100%", label: "Automated Subscription Lifecycle" },
      { value: "<15 Min", label: "Zero-Downtime Migration Windows" },
    ],
    capabilities: [
      {
        title: "Multi-Tenant Architecture Design",
        description: "Row-level security (RLS) or schema-per-tenant isolation models balancing data sovereignty with cost efficiency.",
      },
      {
        title: "Stripe & LemonSqueezy Billing Engines",
        description: "Tiered pricing, seat-based subscriptions, usage metered billing, automated dunning, invoices, and self-serve customer portals.",
      },
      {
        title: "Enterprise SSO & Granular RBAC",
        description: "SAML 2.0, Okta, Google Workspace SSO, magic links, MFA, and hierarchical organization/team permissions.",
      },
      {
        title: "Real-Time Collaboration & WebSockets",
        description: "Multi-user live editing, cursor tracking, presence detection, and activity feeds with resilient WebSocket clusters.",
      },
      {
        title: "Admin Super-Dashboards & Impersonation",
        description: "Internal management control centers for customer support, user impersonation, tenant analytics, and revenue metrics.",
      },
      {
        title: "Scalable Serverless & Cloud Infrastructure",
        description: "Auto-scaling containers, Redis distributed locking, asynchronous job workers (BullMQ/Celery), and global CDNs.",
      },
    ],
    techStack: [
      "Next.js", "Node.js", "PostgreSQL", "Prisma", "Stripe API", "Redis",
      "Docker", "AWS ECS", "Tailwind CSS", "BullMQ", "SendGrid", "Datadog"
    ],
    deliverables: [
      { title: "Production Multi-Tenant SaaS Code", description: "Complete platform with tenant onboarding, billing, and auth." },
      { title: "Stripe Webhook Engine", description: "Fully tested subscription, upgrade, cancellation, and invoice pipeline." },
      { title: "Admin Portal & Superuser Tools", description: "Dedicated dashboard for subscription metrics, churn, and management." },
      { title: "Cloud Provisioning Scripts", description: "Infrastructure as Code (Terraform) for staging and production clusters." },
    ],
    faqs: [
      {
        q: "What is the best multi-tenancy model for my SaaS product?",
        a: "We evaluate your security and scale requirements: shared database with Row-Level Security (RLS) is ideal for high-margin SaaS scalability, while separate schemas or databases are recommended for regulated healthcare and banking clients.",
      },
      {
        q: "Can you handle complex B2B subscription billing models?",
        a: "Yes! We have deep expertise implementing tiered seats, add-on feature gates, prepaid credits, usage-based consumption metering, and custom enterprise invoicing.",
      },
      {
        q: "How do you protect customer data between different tenants?",
        a: "We enforce multi-layer tenant isolation: cryptographic tokens bound to tenant IDs, database query middleware, and Postgres Row-Level Security ensuring zero data leaks.",
      },
      {
        q: "Can users sign in with their corporate Single Sign-On (SSO)?",
        a: "Yes, we integrate SAML/OIDC providers (Okta, Azure AD, Google Workspace) so enterprise clients can log in effortlessly with their corporate credentials.",
      },
    ],
    meta: {
      title: "Multi-Tenant SaaS Development Services | Opash Software",
      description: "End-to-end B2B and B2C SaaS product development. Multi-tenancy, Stripe billing, SSO, and scalable cloud engineering.",
      keywords: "saas development, multi-tenant architecture, b2b saas engineering, stripe billing integration, scalable software",
    },
  },

  "api-integration": {
    slug: "api-integration",
    title: "API Integration & Microservices",
    tagline: "Resilient Ecosystems",
    heroTitle: "Unified System Connectivity With Resilient Microservices",
    heroSubtitle: "Break down data silos: high-throughput REST and GraphQL APIs, event-driven message queues, and bulletproof third-party enterprise integrations.",
    metrics: [
      { value: "<50ms", label: "Average API Response Latency" },
      { value: "10M+", label: "Daily Transactions Processed" },
      { value: "99.99%", label: "Message Delivery Guarantee" },
      { value: "Zero", label: "Data Loss in Asynchronous Queues" },
    ],
    capabilities: [
      {
        title: "RESTful & GraphQL API Design",
        description: "Strictly typed, versioned, and documented endpoints following OpenAPI 3.0 and JSON:API standards.",
      },
      {
        title: "Event-Driven Message Architectures",
        description: "Decoupled asynchronous communication with Apache Kafka, RabbitMQ, and AWS SQS for burst-proof transaction processing.",
      },
      {
        title: "Third-Party Enterprise Integrations",
        description: "Seamless synchronization with Salesforce, HubSpot, SAP, QuickBooks, Stripe, PayPal, Twilio, and legacy ERPs.",
      },
      {
        title: "API Gateway & Traffic Management",
        description: "Centralized rate limiting, JWT authentication, request validation, caching layers, and DDoS protection.",
      },
      {
        title: "Microservices Decomposition",
        description: "Carefully untangling legacy monolithic databases into clean, independently deployable domain services.",
      },
      {
        title: "Automated Mocking & Contract Testing",
        description: "Pact contract tests and automated Postman/Newman validation in CI/CD pipelines to prevent breaking changes.",
      },
    ],
    techStack: [
      "FastAPI", "Node.js", "Go", "GraphQL", "Apache Kafka", "RabbitMQ",
      "Redis", "PostgreSQL", "Kong Gateway", "Docker", "AWS Lambda", "OpenAPI"
    ],
    deliverables: [
      { title: "Production API Microservices", description: "Containerized, stateless API services with health check endpoints." },
      { title: "Interactive Swagger / OpenAPI Docs", description: "Self-documenting interactive API portal with request schemas." },
      { title: "Message Queue & Worker Pipeline", description: "Dead-letter queues, exponential backoff retries, and monitoring." },
      { title: "Contract Test Suite", description: "Automated regression tests validating backwards compatibility." },
    ],
    faqs: [
      {
        q: "What happens if a third-party API goes down?",
        a: "We architect resilient fault-tolerant systems using circuit breakers, asynchronous retry queues with exponential backoff, dead-letter storage, and stale-cache fallbacks to keep your app running smoothly.",
      },
      {
        q: "Should we build REST or GraphQL APIs?",
        a: "REST is best for high-throughput public integrations and server-to-server microservices; GraphQL is ideal for complex client frontends that require flexible, nested querying without over-fetching data.",
      },
      {
        q: "How do you secure API endpoints from unauthorized access?",
        a: "We implement multi-layered defense: OAuth2 / JWT authentication, cryptographic request signatures, IP rate limiting, input sanitization, and automated WAF inspection.",
      },
      {
        q: "Can you integrate with older legacy systems that lack modern APIs?",
        a: "Yes. We build secure API wrappers, database replication hooks, and SFTP/batch translators that allow legacy infrastructure to communicate with modern cloud platforms.",
      },
    ],
    meta: {
      title: "API Integration & Microservices Architecture | Opash Software",
      description: "High-throughput API development and microservices orchestration. REST, GraphQL, Kafka, and enterprise integrations.",
      keywords: "api integration, microservices architecture, rest api development, graphql services, enterprise system integration",
    },
  },

  "qa-testing": {
    slug: "qa-testing",
    title: "QA & Automated Testing",
    tagline: "Zero-Defect Standards",
    heroTitle: "Bulletproof Quality Assurance & Automated Testing Services",
    heroSubtitle: "Eliminate production surprises: automated end-to-end regression suites, high-concurrency load testing, and comprehensive security vulnerability audits.",
    metrics: [
      { value: "99.5%", label: "Defect Detection Pre-Release" },
      { value: "80%", label: "Test Cycle Time Reduction" },
      { value: "10,000+", label: "Simulated Concurrent Users" },
      { value: "0", label: "Critical Production Regressions" },
    ],
    capabilities: [
      {
        title: "Automated E2E Testing (Playwright & Cypress)",
        description: "Cross-browser test suites validating complete user journeys on Chrome, Safari, Firefox, and mobile viewports.",
      },
      {
        title: "API Performance & Stress Testing",
        description: "Simulating tens of thousands of concurrent users using k6 and JMeter to identify database bottlenecks before launch.",
      },
      {
        title: "Security & Penetration Vulnerability Audits",
        description: "Scanning for OWASP Top 10 vulnerabilities, SQL injection, XSS, CSRF, insecure direct object references, and data leaks.",
      },
      {
        title: "Mobile App Automated Testing",
        description: "Appium and Maestro automation running tests on real device clouds across diverse Android and iOS hardware profiles.",
      },
      {
        title: "Cross-Browser & Visual Regression",
        description: "Pixel-perfect visual diff testing using Percy and Chromatic to catch unintended UI style changes automatically.",
      },
      {
        title: "Continuous Testing in CI/CD Pipelines",
        description: "Every pull request is automatically verified against linting, unit tests, and smoke tests before code merge approval.",
      },
    ],
    techStack: [
      "Playwright", "Cypress", "Jest", "k6", "JMeter", "Appium",
      "Postman", "SonarQube", "GitHub Actions", "Docker", "Sentry", "OWASP ZAP"
    ],
    deliverables: [
      { title: "Automated Test Suite Repository", description: "Maintainable, TypeScript-based Playwright/Cypress test scripts." },
      { title: "Load & Stress Test Benchmark Reports", description: "Detailed response time distributions, p99 latencies, and server metrics." },
      { title: "Security Vulnerability Audit", description: "Comprehensive audit report with severity scoring and mitigation fixes." },
      { title: "CI/CD Test Runner Integration", description: "Automated gatekeeping stopping bad commits before production." },
    ],
    faqs: [
      {
        q: "Why should we invest in automated testing instead of manual QA?",
        a: "Manual QA slows down releases, misses edge cases, and gets exponentially more expensive as features grow. Automated test suites run in minutes on every commit, ensuring that past working features never break when new code is introduced.",
      },
      {
        q: "Can you perform load testing before our major marketing launch?",
        a: "Yes! We run realistic load tests simulating 10,000+ simultaneous users browsing, adding to cart, and checking out, helping you tune database indexes and autoscale rules.",
      },
      {
        q: "Do you integrate QA testing directly into our development team's workflow?",
        a: "Yes. Our QA engineers embed directly into your sprint cycles, write acceptance test criteria, create automated test scripts, and provide instant feedback to developers.",
      },
      {
        q: "What testing frameworks do you prefer?",
        a: "We primarily utilize Playwright and Cypress for web end-to-end testing, Jest/Vitest for unit tests, k6 for modern load testing, and Appium/Maestro for mobile testing.",
      },
    ],
    meta: {
      title: "QA & Automated Testing Services | Zero-Defect Standards | Opash Software",
      description: "Comprehensive software QA and automated testing: Playwright, Cypress, load testing with k6, and security penetration audits.",
      keywords: "qa testing services, software quality assurance, automated e2e testing, playwright testing, load testing k6",
    },
  },

  "hire-developers": {
    slug: "hire-developers",
    title: "Hire Dedicated Developers",
    tagline: "Top 3% Tech Talent",
    heroTitle: "Scale Your Engineering Team On-Demand With Top 3% Tech Talent",
    heroSubtitle: "Hand-picked senior engineers, full-stack squads, and AI specialists from Surat HQ seamlessly integrating into your time zone, culture, and sprint rhythms.",
    metrics: [
      { value: "Top 3%", label: "Vetted Senior Engineering Talent" },
      { value: "48 Hrs", label: "Fast Interview & Candidate Matching" },
      { value: "2 Wks", label: "Risk-Free Trial Period" },
      { value: "100%", label: "Timezone & Direct Slack Alignment" },
    ],
    capabilities: [
      {
        title: "Dedicated Full-Stack Developers",
        description: "Senior engineers skilled in React, Next.js, Node.js, Python, Angular, and PostgreSQL ready to ship clean code immediately.",
      },
      {
        title: "Autonomous Agile Squads",
        description: "Pre-formed, cross-functional squads (Frontend, Backend, QA, and Scrum Master) capable of owning entire feature epics end-to-end.",
      },
      {
        title: "AI & Data Engineering Specialists",
        description: "Specialized developers proficient in LLM orchestration, LangChain, vector databases, predictive modeling, and data pipelines.",
      },
      {
        title: "Cross-Platform Mobile Developers",
        description: "Dedicated React Native and Flutter experts crafting high-rated consumer and enterprise mobile applications.",
      },
      {
        title: "Direct Slack & Git Integration",
        description: "No middlemen or bureaucracy. Developers join your Slack channels, attend your daily standups, and push directly to your repos.",
      },
      {
        title: "Flexible Engagement Models",
        description: "Scale up or down with monthly retainer models, hourly time & materials, or dedicated fixed sprint milestone agreements.",
      },
    ],
    techStack: [
      "React", "Next.js", "Node.js", "Python", "TypeScript", "Flutter",
      "Angular", "FastAPI", "PostgreSQL", "AWS Cloud", "Docker", "Git"
    ],
    deliverables: [
      { title: "Direct Daily Communication", description: "Developers active on your Slack/Teams with 4+ hours daily timezone overlap." },
      { title: "Daily Standups & Transparent Sprints", description: "Daily git commits, clear pull requests, and logged sprint progress." },
      { title: "Strict NDA & IP Assignment", description: "Legally binding IP assignment agreements ensuring you own 100% of all work." },
      { title: "Dedicated Engineering Manager", description: "Continuous quality oversight and technical mentorship included at no extra cost." },
    ],
    faqs: [
      {
        q: "How fast can we onboard and start working with an Opash developer?",
        a: "We can typically provide curated senior profiles within 24-48 hours. Once you conduct your technical interview and approve the candidates, they can begin onboarding in under 3 business days.",
      },
      {
        q: "How do you guarantee developer quality and work ethic?",
        a: "All Opash developers are permanent in-house full-time employees at our Surat HQ campus. They undergo rigorous technical whiteboard challenges, system design audits, and English communication vetting. We offer a 2-week risk-free trial.",
      },
      {
        q: "What time zone do Opash developers work in?",
        a: "Our developers provide flexible shift schedules offering 4 to 6 hours of direct live working overlap with US (EST/PST), UK (GMT), European (CET), and Middle Eastern (GST) working hours.",
      },
      {
        q: "Can we scale our team up or down as project needs change?",
        a: "Yes. We offer flexible 30-day notice adjustments, allowing you to quickly add specialists during heavy launch periods and scale down during steady maintenance phases.",
      },
    ],
    meta: {
      title: "Hire Dedicated Software Developers | Top 3% Engineers | Opash Software",
      description: "Hire dedicated full-stack, mobile, and AI developers from Opash Software. Fast onboarding, direct Slack access, and risk-free trial.",
      keywords: "hire dedicated developers, hire software engineers india, hire full stack developers, hire nextjs developers, software team augmentation",
    },
  },
};
