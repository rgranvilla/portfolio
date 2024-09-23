import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa6'
import {
  RiJavascriptLine,
  RiNextjsLine,
  RiTailwindCssFill,
} from 'react-icons/ri'

import { cn } from '@/lib/utils'

import { List, ListItem } from '../list'
import { Section, SectionContent, SectionTitle } from '../section'
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

const sections = [
  {
    title: 'Desenvolvimento Frontend',
    items: [
      'JavaScript, TypeScript',
      'HTML 5, CSS 3, Sass, Bootstrap',
      'ReactJS (Hooks, Context API)',
      'React Native (Expo, RN Encrypted Storage)',
      'NextJS (SSG, SSR, ISR, App Route)',
      'Redux, Recoil, Zustand',
      'CSS-in-JS, Tailwind CSS, Styled Component, Stitches',
      'Material UI, Radix UI, Chakra UI, Ant Design',
    ],
  },
  {
    title: 'Desenvolvimento Backend',
    items: [
      'Node.js (Prisma, TypeORM, Knex)',
      'NestJS (TypeORM, Injeção de Dependência)',
      'Express (middlewares, pipelines, streams)',
      'Fastify (middlewares, auto-documentação, plugins)',
      'Cors, Zod, Joi, Yup (validações)',
      'Material UI, Radix UI, Chakra UI, Ant Design',
    ],
  },
  {
    title: 'Boas Práticas & Arquitetura de Software',
    items: [
      'Clean Code, SOLID, Clean Architecture',
      'Design Patterns (Factory, Use Cases, Singletons, Observers)',
      'Injeção de Dependência, Streams Patterns, Middlewares/Pipelines',
      'Decorators Patterns (logs e métricas)',
      'Metodologias Ágeis',
    ],
  },
  {
    title: 'Soft Skills & Competências',
    items: [
      'Comunicação, Trabalho em Equipe, Solução de Problemas',
      'Flexibilidade, Adaptabilidade, Atitude Positiva',
      'Gerenciamento de Projetos, Documentação de Código',
      'Atualização constante em tecnologias',
    ],
  },
]

export function Technologies() {
  return (
    <div className="border-t">
      <div className={cn('mt-8 flex justify-center', 'md:mt-24')}>
        <h3
          className={cn(
            'text-xl font-semibold text-purple-400',
            'md:text-center md:text-3xl md:font-semibold',
          )}
        >
          Tecnologias e Conhecimentos
        </h3>
      </div>

      <div className="mt-12 md:mt-24">
        <div
          className={cn(
            'flex flex-shrink-0 gap-8 overflow-x-auto',
            'md:grid md:grid-cols-7',
          )}
        >
          {technologies.map((tech) => (
            <TechnologyCard
              className="min-w-[184px]"
              key={tech.id}
              IconComponent={tech.icon}
              title={tech.title}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
        {sections.map((section) => (
          <Section>
            <SectionTitle>{section.title}</SectionTitle>
            <SectionContent className="">
              <List className="space-y-4 md:space-y-2">
                {section.items.map((item, index) => (
                  <ListItem
                    className="hyphens-auto text-xs md:text-lg"
                    key={index}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </SectionContent>
          </Section>
        ))}
      </div>
    </div>
  )
}
