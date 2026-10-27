export const SITE = {
  title: 'IV4N.DEV',
  name: 'Iván Todelano',
  author: 'Iván Moisés Todelano Toledo',
  jobTitle: {
    es: 'Desarrollador Backend y Sistemas Distribuidos',
    en: 'Backend & Distributed Systems Developer'
  },
  email: 'ivandev2oo6@gmail.com',
  phone: '+51 927 416 434',
  location: { es: 'Lima, Perú', en: 'Lima, Peru' },
  // Generated from this file by `bun run cv` (see scripts/generate-cv.mjs).
  cv: { es: '/cv.pdf', en: '/cv-en.pdf' },
  ogImage: '/og.png',
  repo: {
    url: 'https://github.com/Iv44n/iv4n.dev',
    branch: 'main'
  },
  description:
    'Iván Todelano — Desarrollador de software especializado en backend y sistemas distribuidos. Construyo APIs, servicios escalables y arquitecturas orientadas a eventos con TypeScript, NestJS, Go y Java.'
} as const

export const SOCIALS = {
  github: 'https://github.com/Iv44n',
  linkedin: 'https://www.linkedin.com/in/iv4n-dev',
  instagram: 'https://www.instagram.com/iv4n.dev'
} as const

export const SKILLS = [
  'Go',
  'TypeScript',
  'Node.js',
  'NestJS',
  'Bun',
  'Java',
  'PostgreSQL',
  'Redis',
  'AWS',
  'Docker',
  'React',
  'React Native'
] as const

export const SKILL_GROUPS = [
  {
    label: { es: 'Backend', en: 'Backend' },
    items: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'NestJS',
      'Bun',
      'Go',
      'Java',
      'Python',
      'FastAPI',
      'BullMQ',
      'REST APIs',
      'OAuth 2.0',
      'JWT',
      'Better Auth'
    ]
  },
  {
    label: { es: 'Bases de datos y caché', en: 'Databases & cache' },
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Drizzle ORM', 'TypeORM']
  },
  {
    label: { es: 'Cloud e infraestructura', en: 'Cloud & infrastructure' },
    items: ['AWS', 'Amazon S3', 'Docker', 'Nginx', 'Linux', 'Cloudflare', 'GitHub Actions', 'CI/CD']
  },
  {
    label: { es: 'Móvil y escritorio', en: 'Mobile & desktop' },
    items: ['React Native', 'Expo', 'SQLite', 'WatermelonDB', 'Tauri']
  },
  {
    label: { es: 'Frontend', en: 'Frontend' },
    items: ['React', 'Next.js', 'TanStack', 'Astro', 'HTML', 'CSS', 'Tailwind CSS']
  }
] as const

export const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'Japisale',
    period: { es: 'Feb. 2026 – Actualidad', en: 'Feb. 2026 – Present' },
    location: { es: 'Miraflores, Lima, Perú', en: 'Miraflores, Lima, Peru' },
    bullets: {
      es: [
        'Desarrollé una plataforma de gestión de comprobantes electrónicos integrada con SUNAT (SIRE): sincronización y recuperación automática de facturas, asignación contable por detalle y exportación hacia el ERP del área contable, con NestJS, PostgreSQL (Drizzle) y Redis.',
        'Construí una aplicación de escritorio con Tauri 2 (Rust) y React que se autentica en SUNAT y descarga comprobantes (XML, CDR y PDF) con reintentos y backoff, probada contra servidores simulados y con actualizaciones automáticas.',
        'Implementé un sistema de autenticación basado en OAuth 2.0 para centralizar el acceso entre múltiples aplicaciones, con API keys y rate limiting para integraciones máquina a máquina.',
        'Desarrollé flujos de procesamiento asíncrono con BullMQ, Redis y eventos de NestJS, incluyendo locks distribuidos en Redis para la gestión de tokens de acceso.',
        'Integré servicios de generación y streaming de archivos hacia Amazon S3 utilizando servicios desarrollados en Go.',
        'Diseñé e implementé la migración de identificadores hacia UUIDv7 para preparar la plataforma para escenarios distribuidos.',
        'Construí una plataforma de datos para un contact center (FastAPI y TanStack): extracción programada de reportes diarios, sincronización de contactos y evaluación de la calidad de atención con LLMs de múltiples proveedores y KPIs de productividad por agente.',
        'Extendí la API central de productos (NestJS, TypeORM) con filtros de dashboard y consultas guardadas por proyecto sobre un datamart.',
        'Implementé automatizaciones con IA para resolver tickets de baja complejidad mediante GitHub Actions y Pull Requests automáticos, apoyadas en un framework interno de guías para que agentes de IA comprendan la arquitectura del proyecto.'
      ],
      en: [
        'Built an electronic invoice management platform integrated with SUNAT (SIRE): automatic invoice sync and recovery, line-level accounting assignment and export to the accounting ERP, using NestJS, PostgreSQL (Drizzle) and Redis.',
        'Built a desktop app with Tauri 2 (Rust) and React that authenticates against SUNAT and downloads invoices (XML, CDR and PDF) with retries and backoff, tested against mock servers and shipped with automatic updates.',
        'Implemented an OAuth 2.0-based authentication system to centralize access across multiple applications, with API keys and rate limiting for machine-to-machine integrations.',
        'Built asynchronous processing flows with BullMQ, Redis and NestJS events, including distributed Redis locks for access token management.',
        'Integrated file generation and streaming services to Amazon S3 using services built in Go.',
        'Designed and implemented the migration of identifiers to UUIDv7 to prepare the platform for distributed scenarios.',
        'Built a data platform for a contact center (FastAPI and TanStack): scheduled extraction of daily reports, contact sync, and service-quality evaluation with multi-provider LLMs plus per-agent productivity KPIs.',
        'Extended the central product API (NestJS, TypeORM) with dashboard filters and per-project saved queries over a datamart.',
        'Implemented AI automations that resolve low-complexity tickets through GitHub Actions and automated Pull Requests, backed by an internal guide framework that lets AI agents understand the project architecture.'
      ]
    }
  }
] as const

export const PRINCIPLES = {
  es: [
    'Clean Architecture / Hexagonal',
    'CQRS ligero: escritura y lectura desacopladas',
    'Arquitectura orientada a eventos',
    'Sistemas distribuidos y microservicios',
    'Procesamiento asíncrono y streaming de archivos',
    'Modelado relacional con PostgreSQL',
    'Integración de APIs externas con trazabilidad',
    'Optimización orientada a escalabilidad'
  ],
  en: [
    'Clean Architecture / Hexagonal',
    'Lightweight CQRS: decoupled reads and writes',
    'Event-driven architecture',
    'Distributed systems and microservices',
    'Asynchronous processing and file streaming',
    'Relational modeling with PostgreSQL',
    'External API integration with traceability',
    'Scalability-oriented optimization'
  ]
} as const

export const EDUCATION = [
  {
    school: 'Universidad Tecnológica del Perú',
    degree: { es: 'Ingeniería de Software', en: 'Software Engineering' },
    period: { es: '2023 – En curso', en: '2023 – Present' }
  }
] as const

export const SPOKEN_LANGUAGES = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  {
    name: { es: 'Inglés', en: 'English' },
    level: { es: 'Intermedio B1/B2', en: 'Intermediate B1/B2' }
  }
] as const

export const PROJECTS = [
  {
    title: 'Arcton',
    url: 'https://github.com/Iv44n/arcton',
    tags: ['TypeScript', 'Bun', 'Node.js', 'OpenAPI', 'Turborepo'],
    description: {
      es: 'Framework backend para TypeScript publicado en npm (@arcton/core): router con precedencia definida, contexto tipado a partir de las rutas, validación con cualquier Standard Schema (Zod, Valibot) y un núcleo desacoplado del runtime (Bun o Node.js). Incluye CLI, scaffolding, OpenAPI y documentación.',
      en: 'TypeScript backend framework published on npm (@arcton/core): a router with defined precedence, context typed from the route literals, validation with any Standard Schema (Zod, Valibot) and a runtime-decoupled core (Bun or Node.js). Ships with a CLI, scaffolding, OpenAPI and docs.'
    }
  },
  {
    title: 'Liro',
    url: null,
    tags: ['Bun', 'Arcton', 'Better Auth', 'Drizzle', 'PostgreSQL', 'TanStack Start'],
    description: {
      es: 'Plataforma de automatización de decisiones: se define una decisión una vez y se consume desde cualquier sistema vía API. Backend en Bun sobre Arcton con organizaciones y API keys (Better Auth), Drizzle y PostgreSQL, y evaluación con IA mediante proveedores intercambiables con fallback.',
      en: 'Decision automation platform: define a decision once and consume it from any system through an API. Bun backend built on Arcton with organizations and API keys (Better Auth), Drizzle and PostgreSQL, and AI evaluation through swappable providers with fallback.'
    }
  },
  {
    title: 'Gestor de Contraseñas Multi-dispositivo',
    url: null,
    tags: ['React Native', 'Expo', 'Go', 'PostgreSQL'],
    description: {
      es: 'Aplicación móvil de gestión de credenciales con arquitectura zero-knowledge: las contraseñas se cifran localmente con una clave maestra y el backend en Go solo sincroniza y almacena datos cifrados, manteniendo la confidencialidad incluso ante accesos al servidor.',
      en: 'Mobile credential manager with a zero-knowledge architecture: passwords are encrypted locally with a master key and the Go backend only syncs and stores encrypted data, keeping information confidential even if the server is compromised.'
    }
  },
  {
    title: 'Sistema de Gestión de Proyectos',
    url: 'https://github.com/Iv44n/Movil-Task-App',
    tags: ['React Native', 'Expo', 'WatermelonDB', 'Clerk', 'RevenueCat'],
    description: {
      es: 'Aplicación móvil offline-first para la gestión de tareas, desarrollada con React Native, Expo, WatermelonDB y Expo EAS. Integra RevenueCat para los pagos y Clerk para la autenticación.',
      en: 'Offline-first mobile app for task management, built with React Native, Expo, WatermelonDB and Expo EAS. Integrates RevenueCat for payments and Clerk for authentication.'
    }
  },
  {
    title: 'Just Time',
    url: 'https://github.com/Iv44n/Just-Time',
    tags: [
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'Next.js',
      'Zustand',
      'TanStack Query'
    ],
    description: {
      es: 'Gestión de acceso a recursos con aprobación de solicitudes, API Keys de un solo uso y conexiones dinámicas a múltiples bases de datos en runtime. Backend en Spring Boot y frontend en Next.js.',
      en: 'Resource access management with request approval, single-use API keys and dynamic connections to multiple databases at runtime. Spring Boot backend and Next.js frontend.'
    }
  }
] as const
