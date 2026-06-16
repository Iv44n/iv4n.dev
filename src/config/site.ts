export const SITE = {
  title: 'IV4N.DEV',
  name: 'Iván Todelano',
  author: 'Iván Moisés Todelano Toledo',
  jobTitle: {
    es: 'Desarrollador Backend y Sistemas Distribuidos',
    en: 'Backend & Distributed Systems Developer'
  },
  email: 'ivandev2oo6@gmail.com',
  location: { es: 'Lima, Perú', en: 'Lima, Peru' },
  cv: '/cv.pdf',
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
      'REST APIs',
      'OAuth 2.0',
      'JWT'
    ]
  },
  {
    label: { es: 'Bases de datos y caché', en: 'Databases & cache' },
    items: ['PostgreSQL', 'MySQL', 'Redis']
  },
  {
    label: { es: 'Cloud e infraestructura', en: 'Cloud & infrastructure' },
    items: ['AWS', 'Amazon S3', 'Docker', 'Nginx', 'Linux', 'CI/CD']
  },
  {
    label: { es: 'Desarrollo móvil', en: 'Mobile development' },
    items: ['React Native', 'Expo', 'SQLite', 'WatermelonDB']
  },
  {
    label: { es: 'Frontend', en: 'Frontend' },
    items: ['React', 'Next.js', 'Astro', 'HTML', 'CSS', 'Tailwind CSS']
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
        'Participé en el desarrollo de un nuevo módulo del área contable, enfocado en escalabilidad, integración entre sistemas y automatización de procesos internos.',
        'Diseñé e implementé la migración de identificadores hacia UUIDv7 para preparar la plataforma para escenarios distribuidos.',
        'Implementé un sistema de autenticación basado en OAuth 2.0 para centralizar el acceso entre múltiples aplicaciones y módulos internos.',
        'Desarrollé flujos de procesamiento asíncrono con BullMQ, Redis y eventos de NestJS para desacoplar procesos y mejorar la escalabilidad.',
        'Integré servicios de generación y streaming de archivos hacia Amazon S3 utilizando servicios desarrollados en Go.',
        'Participé en la integración de múltiples sistemas empresariales mediante APIs y servicios compartidos.',
        'Colaboré en la definición de estándares de arquitectura para separación de dominios, infraestructura, aplicación y comunicación mediante eventos y jobs.',
        'Implementé automatizaciones basadas en IA para resolver tickets de baja complejidad, con GitHub Actions y generación automatizada de Pull Requests.',
        'Contribuí a un framework interno de conocimientos y guías técnicas para que agentes de IA comprendieran la arquitectura del proyecto y ejecutaran cambios de manera consistente.'
      ],
      en: [
        'Contributed to a new accounting module focused on scalability, cross-system integration and automation of internal processes.',
        'Designed and implemented the migration of identifiers to UUIDv7 to prepare the platform for distributed scenarios.',
        'Implemented an OAuth 2.0-based authentication system to centralize access across multiple internal applications and modules.',
        'Built asynchronous processing flows with BullMQ, Redis and NestJS events to decouple processes and improve scalability.',
        'Integrated file generation and streaming services to Amazon S3 using services built in Go.',
        'Participated in the integration of multiple enterprise systems through APIs and shared services.',
        'Helped define architecture standards for separating domain, infrastructure and application layers, with communication via events and jobs.',
        'Implemented AI-based automations to resolve low-complexity tickets, using GitHub Actions and automated Pull Request generation.',
        'Contributed to an internal knowledge framework and technical guides enabling AI agents to understand the project architecture and apply changes consistently.'
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
  },
  {
    title: 'Autenticación MERN',
    url: 'https://github.com/Iv44n/mern-auth',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'TanStack Query'],
    description: {
      es: 'Sistema de autenticación completo con el stack MERN (MongoDB, Express, React, Node.js), con rutas protegidas y manejo del estado global mediante TanStack Query.',
      en: 'Complete authentication system with the MERN stack (MongoDB, Express, React, Node.js), featuring protected routes and global state management via TanStack Query.'
    }
  }
] as const
