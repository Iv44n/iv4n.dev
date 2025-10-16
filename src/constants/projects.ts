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
  }
]
