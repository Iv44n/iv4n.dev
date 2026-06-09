export const SITE = {
  title: 'IV4N.DEV',
  author: 'Iván Moisés Todelano Toledo',
  email: 'ivandev2oo6@gmail.com',
  location: { es: 'Lima, Perú', en: 'Lima, Peru' },
  cv: '/cv.pdf',
  description:
    'Iván Todelano — Desarrollador Fullstack enfocado en backend con Go, PostgreSQL, Node.js y Bun. Construyo software mantenible y escalable con APIs REST, arquitectura limpia, CQRS y pipelines asíncronos.'
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
  'Bun',
  'PostgreSQL',
  'Nest.js',
  'React',
  'Next.js',
  'Astro',
  'Docker',
  'Redis',
  'React Native'
] as const

export const SKILL_GROUPS = [
  {
    label: { es: 'Backend', en: 'Backend' },
    items: [
      'Go',
      'Node.js',
      'Bun',
      'Nest.js',
      'Hono',
      'Express',
      'Spring Boot',
      'JWT',
      'REST APIs'
    ]
  },
  {
    label: { es: 'Bases de datos', en: 'Databases' },
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Redis', 'WatermelonDB']
  },
  {
    label: { es: 'Frontend', en: 'Frontend' },
    items: [
      'TypeScript',
      'React',
      'Next.js',
      'Astro',
      'Tailwind CSS',
      'React Native',
      'Expo',
      'TanStack Query'
    ]
  },
  {
    label: { es: 'Herramientas', en: 'Tools' },
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'Docker', 'Notion']
  }
] as const

export const EXPERIENCE = [
  {
    role: 'Fullstack Developer',
    company: 'Japisale',
    period: { es: 'Feb. 2026 – Actualidad', en: 'Feb. 2026 – Present' },
    location: { es: 'Miraflores, Lima, Perú', en: 'Miraflores, Lima, Peru' },
    bullets: {
      es: [
        'Desarrollé funcionalidades fullstack en producción: frontend, backend, base de datos e integraciones externas.',
        'Apliqué Clean Architecture y separación de responsabilidades, mejorando la mantenibilidad y testabilidad.',
        'Diseñé una separación CQRS entre escritura y lectura para reducir la complejidad del dominio.',
        'Implementé flujos de streaming para subida y generación de archivos con menor consumo de memoria.',
        'Construí pipelines asíncronos para procesos pesados, optimizando los tiempos de respuesta.',
        'Migré identificadores de bigint a UUID para preparar el sistema a escenarios distribuidos.',
        'Integré APIs de terceros con validación, documentación y manejo de errores robusto.',
        'Usé Go, Node.js y Bun según el contexto técnico, priorizando rendimiento y velocidad de entrega.'
      ],
      en: [
        'Built fullstack features in production: frontend, backend, database and external integrations.',
        'Applied Clean Architecture and separation of concerns, improving maintainability and testability.',
        'Designed a CQRS split between writes and reads to reduce domain complexity.',
        'Implemented streaming flows for file upload and generation with lower memory usage.',
        'Built asynchronous pipelines for heavy processes, optimizing response times.',
        'Migrated identifiers from bigint to UUID to prepare the system for distributed scenarios.',
        'Integrated third-party APIs with validation, documentation and robust error handling.',
        'Used Go, Node.js and Bun depending on the technical context, prioritizing performance and delivery speed.'
      ]
    }
  }
] as const

export const PRINCIPLES = {
  es: [
    'Clean Architecture / Hexagonal',
    'CQRS ligero: escritura y lectura desacopladas',
    'Procesamiento asíncrono y streaming de archivos',
    'Modelado relacional con PostgreSQL',
    'Integración de APIs externas con trazabilidad',
    'Optimización orientada a escalabilidad'
  ],
  en: [
    'Clean Architecture / Hexagonal',
    'Lightweight CQRS: decoupled reads and writes',
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
    tags: ['Spring Boot', 'Spring Security', 'PostgreSQL', 'Next.js', 'Zustand'],
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
