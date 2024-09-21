'use client'

import Image from 'next/image'
import { useState } from 'react'

import CoverBank from '@/assets/cover-bank.jpg'
import CoverEcommerce from '@/assets/cover-ecommerce.jpg'
import CoverLanding from '@/assets/cover-landing.jpg'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const projects = [
    {
      id: 0,
      title: 'Sistema White Label',
      image: CoverBank,
      content1: `Desenvolvi soluções frontend automatizadas e customizáveis para o mercado financeiro, permitindo a criação de bancos digitais de forma rápida e eficiente. Cada banco pode ter layouts exclusivos e funcionalidades ajustadas, oferecendo uma experiência única tanto para administradores quanto para clientes finais. Em operação em mais de 12 bancos digitais no Brasil, a solução tem potencial para atrair mais de 50 novos clientes nos próximos 12 meses.`,
      content2: `Um dos grandes diferenciais é o carregamento automático de layouts e configurações ao acessar o domínio do cliente, garantindo uma interface personalizada e ajustada às necessidades de cada instituição. A plataforma oferece agilidade e segurança, com foco na experiência do usuário e tempos de carregamento reduzidos, essenciais para o setor financeiro.`,
      content3: `A arquitetura sólida e de fácil manutenção não só melhora a operação dos bancos digitais como também potencializa suas estratégias de crescimento, permitindo adaptação rápida às demandas do mercado e expectativas dos usuários.`,
    },
    {
      id: 1,
      title: 'E-commerce B2B',
      image: CoverEcommerce,
      content1: `Participei da otimização de plataformas de e-commerce e sistemas de call center, focando na correção de bugs e melhoria de performance. Utilizando uma arquitetura monorepo combinada com Next.js, entregamos uma solução robusta, escalável e modular, proporcionando uma experiência altamente personalizável para cada cliente.`,
      content2: `A partir de um painel intuitivo, os usuários podiam configurar layouts, cores, funcionalidades e parâmetros fiscais, além de definir preferências nas formas de pagamento e integrar o e-commerce com outros sistemas. A criação de regras para descontos e promoções permitia adaptações específicas para cada cenário, tornando a gestão flexível e ágil.`,
      content3: `O gerenciamento de usuários e permissões foi central, com opções para criar grupos de usuários e definir níveis de acesso detalhados para o e-commerce e o sistema de call center, garantindo segurança e controle. Esse projeto demonstrou minha habilidade em arquiteturas modernas e na criação de soluções escaláveis que atendem demandas complexas de negócios.`,
    },
    {
      id: 2,
      title: 'Landing Pages Multi Tenant',
      image: CoverLanding,
      content1: `Desenvolvi um sistema de criação automatizada de Landing Pages com arquitetura multi-tenant, projetado para permitir que várias empresas utilizem a mesma base de código, mantendo personalizações específicas para cada cliente. Essa abordagem proporciona agilidade no desenvolvimento e padronização de processos, sem comprometer a flexibilidade necessária para adaptar a solução às necessidades individuais de cada empresa.`,
      content2: `O sistema permite ajustes detalhados em design, conteúdo e funcionalidades, garantindo que cada cliente tenha uma Landing Page única, alinhada com sua identidade visual e objetivos de mercado. As empresas podem configurar seções específicas, adicionar elementos personalizados e adaptar o layout, tudo isso sem a necessidade de duplicar o código base, o que reduz custos e facilita a manutenção.`,
      content3: `Além da personalização, o sistema oferece recursos avançados de integração com outras plataformas, analytics detalhados e otimização para SEO, permitindo uma gestão eficiente e focada em resultados. Essa solução garante a escalabilidade e adaptabilidade essenciais para atender múltiplos clientes com alto padrão de qualidade.`,
    },
  ]

  return (
    <div className="mt-24 w-full">
      <h2 className="text-center text-3xl font-semibold text-purple-400">
        Projetos que marcaram minha trajetória
      </h2>

      <div className="mt-24 flex justify-between gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={cn(
              'group flex transform flex-col overflow-hidden rounded-lg bg-blue-900/35 shadow-md transition-transform',
              {
                'w-1/2 flex-grow': expandedCard === project.id,
                'w-1/3': expandedCard !== project.id,
              },
            )}
          >
            <Image
              src={project.image}
              alt=""
              className="h-44 object-cover transition-transform duration-500"
            />
            <h1 className="border-b border-slate-600 py-8 text-center text-2xl font-semibold">
              {project.title}
            </h1>
            <div className="p-12">
              <div
                className={`flex w-full flex-1 flex-col text-slate-400 transition-colors duration-300 ease-in-out`}
              >
                <div
                  className={cn(
                    'text-wrap text-justify indent-8 text-lg font-thin',
                    {
                      'line-clamp-[7]': expandedCard !== project.id,
                      'line-clamp-none min-h-[640px] font-normal text-slate-200':
                        expandedCard === project.id,
                    },
                  )}
                >
                  <p className="mb-6">{project.content1}</p>
                  <p className="mb-6">{project.content2}</p>
                  <p>{project.content3}</p>
                </div>
              </div>
              <div className="flex w-full justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpand(project.id)}
                  className="mt-8"
                >
                  {expandedCard === project.id ? 'Ver menos' : 'Ver mais'}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
