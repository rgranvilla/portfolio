'use client'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import Image, { type StaticImageData } from 'next/image'
import { useState } from 'react'

import CoverBank from '@/assets/cover-bank.jpg'
import CoverEcommerce from '@/assets/cover-ecommerce.jpg'
import CoverLanding from '@/assets/cover-landing.jpg'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

type ProjectType = {
  id: number
  title: string
  image: StaticImageData
  content1: string
  content2: string
  content3: string
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

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null)

  const openModal = (project: ProjectType) => {
    setActiveProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setActiveProject(null)
  }

  return (
    <div className={cn('mt-12 w-full', 'md:mt-24')}>
      <h2
        className={cn(
          'text-xl font-semibold text-purple-400',
          'md:text-center md:text-3xl md:font-semibold',
        )}
      >
        Projetos que marcaram minha trajetória
      </h2>

      <div className="mt-12 md:mt-24">
        <div
          className={cn(
            'flex flex-shrink-0 gap-8 overflow-x-auto',
            'md:grid md:grid-cols-12',
          )}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={cn(
                'transform overflow-hidden rounded-lg bg-blue-900/35 transition-transform',
                'md:col-span-4',
              )}
              style={{ minWidth: '85%' }}
            >
              {/* Image Cover */}
              <Image
                src={project.image}
                alt=""
                className="h-44 min-w-full object-cover transition-transform duration-500"
              />

              {/* Title */}
              <h1
                className={cn(
                  'border-b border-slate-600 py-8 text-center text-lg',
                  'md:text-2xl md:font-semibold',
                )}
              >
                {project.title}
              </h1>

              {/* Content */}
              <div className={cn('p-4', 'md:p-6')}>
                <div
                  className={cn(
                    'h-fit hyphens-auto text-wrap break-words text-justify indent-4 text-sm font-extralight text-slate-400',
                    'md:indent-6 md:text-lg',
                  )}
                >
                  <p className="line-clamp-5">{project.content1}</p>
                </div>
                <div className="flex w-full justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openModal(project)}
                    className="mt-8"
                  >
                    Ver mais
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Modal */}
      <Dialog open={isModalOpen} onClose={closeModal} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/80 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen">
          <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-background transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-5xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              {activeProject && (
                <div className="flex flex-col">
                  <Image
                    src={activeProject?.image}
                    alt=""
                    className="h-32 w-full object-cover md:h-64"
                  />
                  <DialogTitle
                    as="h2"
                    className="py-4 text-lg font-semibold leading-6 text-foreground sm:text-3xl"
                  >
                    {activeProject?.title}
                  </DialogTitle>
                  <div className="mt-2 h-96 overflow-y-auto bg-background px-6 md:mt-8 md:px-12">
                    <div className="sm:flex sm:items-start">
                      <div
                        className={cn(
                          'h-fit hyphens-auto text-wrap break-words text-justify indent-4 text-sm font-extralight text-slate-400',
                          'md:indent-6 md:text-lg',
                        )}
                      >
                        <p>{activeProject.content1}</p>
                        <p>{activeProject.content2}</p>
                        <p>{activeProject.content3}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <Button variant="ghost" onClick={closeModal}>
                      Fechar
                    </Button>
                  </div>
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Projects
