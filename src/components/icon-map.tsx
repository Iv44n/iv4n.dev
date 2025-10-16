import type { JSX } from 'react'
import { FaJava } from 'react-icons/fa'
import { GiWatermelon } from 'react-icons/gi'
import {
  SiAstro,
  SiBun,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from 'react-icons/si'
import { TbApi, TbBrandReactNative } from 'react-icons/tb'
import { VscJson } from 'react-icons/vsc'

export const SKILL_ICON_MAP: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  React: <SiReact />,
  'Next.js': <SiNextdotjs />,
  Astro: <SiAstro />,
  'Tailwind CSS': <SiTailwindcss />,
  'Node.js': <SiNodedotjs />,
  Bun: <SiBun />,
  Express: <SiExpress />,
  'Spring Boot (básico)': <SiSpringboot />,
  JWT: <VscJson />,
  'REST APIs': <TbApi />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  SQLite: <SiSqlite />,
  WatermelonDB: <GiWatermelon />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Vercel: <SiVercel />,
  Docker: <SiDocker />,
  Java: <FaJava />,
  'React Native': <TbBrandReactNative />,
  Expo: <SiExpo />
}
