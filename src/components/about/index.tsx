import { FaHandsHelping, FaShieldAlt, FaTools } from 'react-icons/fa'
import { FaChartLine } from 'react-icons/fa6'

import { cn } from '@/lib/utils'

import { FeatureCard } from '../feature-card'

export function About() {
  return (
    <div className="border-t">
      <div className={cn('mt-8 flex justify-center', 'md:mt-24')}>
        <h2
          className={cn('text-xl font-semibold text-purple-400', 'md:text-3xl')}
        >
          O que posso trazer para o seu projeto?
        </h2>
      </div>
      <div
        className={cn(
          'mt-8 grid grid-cols-1 gap-12',
          'md:mt-24 md:grid-cols-12 md:gap-20',
        )}
      >
        <div className={cn('order-2', 'md:order-1 md:col-span-5')}>
          <div
            className={cn(
              'flex flex-col gap-8 text-justify text-sm text-slate-300',
              'md:text-lg',
            )}
          >
            <p>
              Sou um desenvolvedor full stack com profundo conhecimento em
              ReactJS, React Native e Next.js. Ao longo dos últimos anos,
              liderei e contribuí em projetos de alto impacto nos setores
              financeiro, automotivo e e-commerce B2B. Meu foco sempre esteve em
              desenvolver soluções web robustas, escaláveis e de alta qualidade,
              utilizando princípios de Clean Code, SOLID e design patterns.
            </p>
            <p>
              Entre as soluções que já implementei estão integrações complexas
              como pagamentos via PIX, automação de layouts e sistemas white
              label, sempre com um olhar voltado para performance e inovação.
              Tenho experiência com arquiteturas modernas e frameworks como
              NestJS, Prisma e TailwindCSS, garantindo que cada projeto seja
              entregue com a melhor performance e segurança.
            </p>
          </div>
        </div>
        <div className={cn('order-1', 'md:order-2 md:col-span-7')}>
          <div className={cn('grid grid-cols-1 gap-8', 'md:grid-cols-2')}>
            <FeatureCard
              icon={FaTools}
              title="Soluções Personalizadas"
              description="com foco em escalabilidade e experiência do usuário"
            />
            <FeatureCard
              icon={FaShieldAlt}
              title="Desenvolvimento Completo"
              description="do back-end ao front-end, com qualidade, segurança e integração fluida"
            />

            <FeatureCard
              icon={FaChartLine}
              title="Proatividade e Melhoria contínua"
              description="acompanhando sempre as tendências mais recentes do mercado de software"
            />

            <FeatureCard
              icon={FaHandsHelping}
              title="Entregas iterativas e Foco no cliente"
              description="entregas frequentes e ajustáveis, alinhando constantemente as prioridades do cliente e do projeto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
