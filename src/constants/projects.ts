export type Project = {
  title: string
  description: string
  technologies: string[]
  urls: {
    github?: string
    live?: string
  }
}

export const projects: Project[] = [
  {
    title: 'Sistema de Gestión de Proyectos',
    description:
      'Aplicación móvil para la gestión de tareas personales, con una base de datos offline, desarrollada con React Native, Expo, WatermelonDB y Expo EAS. Integra Renuevecat como gestor de pagos y Clerk para la autenticación.',
    technologies: [
      'React Native',
      'Expo',
      'WatermelonDB',
      'Clerk',
      'Renuevecat'
    ],
    urls: {
      github: 'https://github.com/Iv44n/Movil-Task-App'
    }
  },
  {
    title: 'Autenticación con el stack MERN',
    description:
      'Sistema de autenticación desarrollado con el stack MERN (MongoDB, Express, React, Node.js), que incorpora rutas seguras y un manejo del estado global mediante TanStack Query.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'TanStack Query'],
    urls: {
      github: 'https://github.com/Iv44n/mern-auth'
    }
  },
  {
    title: 'Just Time',
    description:
      'Sistema de gestión de acceso a recursos desarrollado con Spring Boot, donde los usuarios pueden solicitar acceso y los administradores aprobar o rechazar dichas solicitudes. Al ser aprobadas, el sistema genera una API Key que se revela solo una vez. Utiliza PostgreSQL como base de datos principal y permite registrar recursos que pueden ser bases de datos PostgreSQL, MySQL, SQLite, etc. Estableciendo conexiones dinámicas en tiempo de ejecución para ejecutar consultas. Implementa arquitectura MVC con Services y Repository, junto con Spring Security para la autenticación y protección de rutas. Además, cuenta con un cliente desarrollado en Next.js que utiliza TanStack Query para la comunicación eficiente con la API y Zustand la gestión del estado.',
    technologies: [
      'Spring Boot',
      'Spring Security',
      'Postgres SQL',
      'Next.js',
      'Zustand',
      'TanStack Query'
    ],
    urls: {
      github: 'https://github.com/Iv44n/Just-Time'
    }
  }
]
