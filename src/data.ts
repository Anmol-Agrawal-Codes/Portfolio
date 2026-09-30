export const profile = {
  name: 'Anmol Agrawal',
  role: 'Software Engineer',
  phone: '+91-8077653620',
  email: 'anmolagrawal20003@gmail.com',
  github: 'ADD_GITHUB_URL',
  linkedin: 'ADD_LINKEDIN_URL',
  resume: `${import.meta.env.BASE_URL}resume/Anmol_Agrawal_Resume_Updated.docx`,
  coding: 'ADD_CODING_PROFILE_URL',
}

export type Experience = {
  company: string
  role: string
  location: string
  period: string
  summary: string
  highlights: string[]
  details: { problem: string; work: string; approach: string; impact: string }
  stack: string[]
}

export const experience: Experience[] = [
  {
    company: 'National Instruments',
    role: 'Software Engineer',
    location: 'Bengaluru, Karnataka',
    period: 'Jul 2025 — Present',
    summary: 'Building production software for RF instrument configuration and measurement workflows in InstrumentStudio.',
    highlights: [
      'Own end-to-end development of REST APIs consumed by RF panels and client applications, supporting 10+ InstrumentStudio features used by 20K+ engineers.',
      'Delivered REST APIs for instrument configuration, frequency setup, measurement triggering, and result retrieval workflows.',
      'Led diagnosis and resolution of 30+ production issues spanning asynchronous failures, concurrency bugs, and workflow reliability.',
      'Improved application responsiveness by 25% by redesigning long-running asynchronous workflows with non-blocking background processing.',
      'Partnered with RF and UX stakeholders to scope testable features and improve CI/CD pipelines.',
    ],
    details: {
      problem: 'RF panels and client applications depend on reliable API workflows across instrument configuration, measurement triggering, and result retrieval.',
      work: 'Owned REST API development and investigated production issues across multiple service modules, working with RF and UX stakeholders on feature delivery.',
      approach: 'Used asynchronous and non-blocking background processing to improve long-running workflows, while tracing concurrency and reliability issues through profiling and CI/CD improvements.',
      impact: 'Supported 10+ InstrumentStudio features used by 20K+ engineers and improved application responsiveness by 25%.',
    },
    stack: ['C#', '.NET 6/8', 'REST APIs', 'C++', 'Python', 'Azure DevOps'],
  },
  {
    company: 'National Instruments',
    role: 'Software Engineer Intern',
    location: 'Bengaluru, Karnataka',
    period: 'Jul 2024 — Jun 2025',
    summary: 'Improved software reliability through production bug fixes, unit testing, and internal engineering automation.',
    highlights: [
      'Resolved 50+ production bugs and authored 100+ unit tests, increasing module coverage by 8–10%.',
      'Built internal automation for log parsing and test-environment setup, eliminating repetitive manual work for the engineering team.',
      'Reduced regression risk while improving the reliability and maintainability of service modules.',
    ],
    details: {
      problem: 'A growing production backlog and repetitive test-environment tasks increased regression risk and slowed engineering feedback loops.',
      work: 'Resolved production issues, expanded unit-test coverage, and independently designed internal tooling for log parsing and test setup.',
      approach: 'Combined focused debugging, modular unit tests, and automation around recurring engineering workflows.',
      impact: 'Closed 50+ production bugs, added 100+ unit tests, and eliminated repetitive manual setup work.',
    },
    stack: ['C#', '.NET', 'Unit Testing', 'Automation'],
  },
]

export type Project = {
  id: string
  title: string
  description: string
  status: 'active' | 'completed' | 'planned'
  featured: boolean
  categories: string[]
  tags: string[]
  github?: string
  live?: string
  overview: string
  focus?: string
  problem?: string
  architecture?: string
  architectureFlow?: string[]
  decisions?: string[]
  features?: { name: string; status: 'completed' | 'in progress' | 'planned' }[]
  database?: string
  api?: string
  challenges?: string
  testing?: string
  futureImprovements?: string
  learning?: string
}

export const projects: Project[] = [
  {
    id: 'url-shortener',
    title: 'URL Shortener',
    description: 'An active Java and Spring Boot project exploring backend architecture and API design.',
    status: 'active',
    featured: true,
    categories: ['Backend', 'Java', 'Spring Boot'],
    tags: ['Java', 'Spring Boot'],
    github: 'ADD_URL_SHORTENER_GITHUB_URL',
    overview: 'My current backend project. I am using it to develop my understanding of Java, Spring Boot, and how to structure a backend service.',
    focus: 'Backend architecture and API design. Implementation details will be added as the project develops.',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description: 'A Spring Boot REST API for expense and budget tracking, with JWT-scoped data, PostgreSQL persistence, and tested service boundaries.',
    status: 'completed',
    featured: false,
    categories: ['Backend', 'Java', 'Spring Boot', 'Database'],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
    github: 'ADD_EXPENSE_TRACKER_GITHUB_URL',
    overview: 'A backend-focused expense and budget tracking API built with a layered controller-service-repository architecture and production-oriented API boundaries.',
    problem: 'Expense and budget workflows need predictable CRUD operations, grouped summaries, ownership boundaries, and validation without leaking persistence concerns into the API surface.',
    architecture: 'Layered Spring Boot service with request DTOs, centralized validation, service boundaries, JPA entities, PostgreSQL persistence, JWT security, Docker Compose, and Swagger/OpenAPI documentation.',
    architectureFlow: ['Client', 'REST API', 'Service', 'PostgreSQL'],
    decisions: ['Keep DTOs separate from entities to protect the API contract.', 'Use global exception handling for consistent client-facing errors.', 'Scope data per user with Spring Security and JWT.', 'Use derived queries and cross-entity aggregation for budget-versus-expense summaries.'],
    features: [
      { name: 'REST API design', status: 'completed' },
      { name: 'DTO + validation', status: 'completed' },
      { name: 'PostgreSQL persistence', status: 'completed' },
      { name: 'JWT authentication', status: 'completed' },
      { name: 'JUnit + Mockito coverage', status: 'completed' },
      { name: 'Docker workflow', status: 'completed' },
    ],
    database: 'PostgreSQL with JPA/Hibernate; User, Expense, and Budget relationships use foreign-key constraints and per-user ownership.',
    api: 'Resource-oriented REST endpoints with DTOs, validation, and a consistent error response strategy.',
    testing: 'Service and controller layers are covered with JUnit and Mockito.',
    learning: 'How framework conventions, database behavior, security boundaries, and explicit contracts combine into a backend that is easier to test and change.',
  },
  {
    id: 'e-commerce-store',
    title: 'E-Commerce Store (Shopsy)',
    description: 'A full-stack e-commerce platform with authentication, product browsing, cart, wishlist, order management, and an admin dashboard.',
    status: 'completed',
    featured: false,
    categories: ['Full Stack', 'React', 'Database'],
    tags: ['Node.js', 'React', 'JavaScript', 'Firebase', 'Tailwind CSS'],
    github: 'ADD_ECOMMERCE_GITHUB_URL',
    live: 'ADD_ECOMMERCE_LIVE_URL',
    overview: 'A full-stack shopping platform connecting a responsive React experience to Firebase authentication, Firestore data, and Cloud Functions.',
    problem: 'Create a complete shopping workflow that coordinates authentication, catalog data, inventory, orders, and administration across responsive interfaces.',
    architecture: 'React and Tailwind CSS frontend with Firebase authentication, Firestore data models, Cloud Functions for realtime inventory and order updates, and an admin dashboard.',
    decisions: ['Support email/password and Google OAuth authentication.', 'Model product, cart, wishlist, and order workflows in Firestore.', 'Use Cloud Functions for realtime inventory and order updates.', 'Keep administrative CRUD and analytics separate from the customer shopping flow.'],
    features: [
      { name: 'Authentication', status: 'completed' },
      { name: 'Realtime data', status: 'completed' },
      { name: 'Product browsing', status: 'completed' },
      { name: 'Responsive UI', status: 'completed' },
    ],
    database: 'Firebase-backed data for product and user-facing workflows.',
    api: 'Firebase SDK integration rather than a custom REST API.',
    learning: 'How authentication, realtime data, and administrative workflows fit together in a full-stack product experience.',
  },
]

export const skillGroups = [
  { label: 'Languages', items: ['Java', 'C#', 'C++', 'Python', 'JavaScript', 'SQL'] },
  { label: 'Frameworks', items: ['Spring Boot', 'Spring Data JPA', 'Spring Security', '.NET 6/8'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'Firebase'] },
  { label: 'Developer tools', items: ['Docker', 'Maven', 'Git', 'Azure DevOps', 'Postman', 'Swagger/OpenAPI', 'IntelliJ IDEA'] },
  { label: 'Testing', items: ['JUnit', 'Mockito'] },
  { label: 'Engineering concepts', items: ['REST APIs', 'OOP', 'DSA', 'Multithreading', 'Concurrency', 'Design Patterns', 'SOLID', 'CI/CD'] },
]

export const education = {
  institution: 'Galgotias College of Engineering and Technology',
  location: 'Greater Noida, Uttar Pradesh',
  period: '2021 — 2025',
  degree: 'B.Tech in Computer Science Engineering',
  grade: 'GPA: 8.1/10',
}

export const achievements = [
  'Solved 1000+ DSA problems with a 1600+ LeetCode contest rating.',
  'Java Certificate of Excellence from Coding Ninjas.',
  'Elite rank in C from NPTEL.',
  'Led a semifinalist team at Technothon 2022.',
  'Technical Team member of the Extreme Club, CSE Department.',
]
