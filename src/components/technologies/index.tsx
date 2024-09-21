import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa6'
import {
  RiJavascriptLine,
  RiNextjsLine,
  RiTailwindCssFill,
} from 'react-icons/ri'

import TechnologyCard from '../technology-card'

const technologies = [
  { id: 0, title: 'Javascript', icon: RiJavascriptLine },
  { id: 1, title: 'HTML 5', icon: FaHtml5 },
  { id: 2, title: 'CSS 3', icon: FaCss3Alt },
  { id: 3, title: 'React', icon: FaReact },
  { id: 4, title: 'NextJS', icon: RiNextjsLine },
  { id: 5, title: 'TailwindCSS', icon: RiTailwindCssFill },
  { id: 6, title: 'NodeJS', icon: FaNodeJs },
]

export function Technologies() {
  return (
    <div className="border-t">
      <div className="mt-16 flex justify-center">
        <h3 className="text-3xl font-semibold text-purple-400">
          Tecnologias e Conhecimentos
        </h3>
      </div>

      <div className="mt-16 grid w-full grid-cols-7 place-content-center gap-8">
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.id}
            IconComponent={tech.icon}
            title={tech.title}
          />
        ))}
      </div>

      <div className="mt-12 w-full">
        <div className="grid grid-cols-2 place-content-center gap-16">
          <div className="w-full">
            <h1 className="text-2xl font-semibold">Desenvolvimento Frontend</h1>
            <ul className="mt-2 list-inside list-disc px-4 text-slate-400">
              <li>JavaScript, TypeScript</li>
              <li>HTML 5, CSS 3, Sass, Bootstrap</li>
              <li>ReactJS (Hooks, Context API)</li>
              <li>React Native (Expo, RN Encrypted Storage)</li>
              <li>NextJS (SSG, SSR, ISR, App Route)</li>
              <li>Redux, Recoil, Zustand</li>
              <li>CSS-in-JS, Tailwind CSS, Styled Component, Stitches</li>
              <li>Material UI, Radix UI, Chakra UI, Ant Design</li>
            </ul>
          </div>

          <div className="w-full">
            <h1 className="text-2xl font-semibold">Desenvolvimento Backend</h1>
            <ul className="mt-2 list-inside list-disc px-4 text-slate-400">
              <li>Node.js (Prisma, TypeORM, Knex)</li>
              <li>NestJS (TypeORM, Injeção de Dependência)</li>
              <li>Express (middlewares, pipelines, streams)</li>
              <li>Fastify (middlewares, auto-documentação, plugins)</li>
              <li>Cors, Zod, Joi, Yup (validações)</li>
              <li>Material UI, Radix UI, Chakra UI, Ant Design</li>
            </ul>
          </div>

          <div className="w-full">
            <h1 className="text-2xl font-semibold">
              Boas Práticas & Arquitetura de Software
            </h1>
            <ul className="mt-2 list-inside list-disc px-4 text-slate-400">
              <li>Clean Code, SOLID, Clean Architecture</li>
              <li>
                Design Patterns (Factory, Use Cases, Singletons, Observers)
              </li>
              <li>
                Injeção de Dependência, Middlewares/Pipelines, Streams Patterns
              </li>
              <li>Decorators Patterns (logs e métricas)</li>
              <li>Metodologias Ágeis</li>
            </ul>
          </div>

          <div className="w-full">
            <h1 className="text-2xl font-semibold">
              Soft Skills & Competencias
            </h1>
            <ul className="mt-2 list-inside list-disc px-4 text-slate-400">
              <li>Comunicação, Trabalho em Equipe, Solução de Problemas</li>
              <li>Flexibilidade, Adaptabilidade, Atitude Positiva</li>
              <li>Gerenciamento de Projetos, Documentação de Código</li>
              <li>Atualização constante em tecnologias</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
