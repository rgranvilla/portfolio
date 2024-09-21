import { FaHandsHelping, FaShieldAlt, FaTools } from 'react-icons/fa'
import { FaChartLine } from 'react-icons/fa6'

export function About() {
  return (
    <div className="mt-32 w-full">
      <h2 className="text-3xl font-semibold text-purple-400">
        O que posso trazer para o seu projeto?
      </h2>

      <div className="flex justify-between gap-16">
        <div className="mt-16 flex w-1/2 flex-col gap-8">
          <p className="max-w-[750px] text-balance text-lg font-thin tracking-wide text-slate-300">
            Sou um desenvolvedor full stack com profundo conhecimento em
            ReactJS, React Native e Next.js. Ao longo dos últimos anos, liderei
            e contribuí em projetos de alto impacto nos setores financeiro,
            automotivo e e-commerce B2B. Meu foco sempre esteve em desenvolver
            soluções web robustas, escaláveis e de alta qualidade, utilizando
            princípios de Clean Code, SOLID e design patterns.
          </p>
          <p className="max-w-[750px] text-balance text-lg font-thin tracking-wide text-slate-300">
            Entre as soluções que já implementei estão integrações complexas
            como pagamentos via PIX, automação de layouts e sistemas white
            label, sempre com um olhar voltado para performance e inovação.
            Tenho experiência com arquiteturas modernas e frameworks como
            NestJS, Prisma e TailwindCSS, garantindo que cada projeto seja
            entregue com a melhor performance e segurança.
          </p>
        </div>

        <div className="grid w-2/3 -translate-y-8 transform grid-cols-2 gap-8">
          <div className="flex flex-col rounded-lg bg-gradient-to-tl from-purple-600/30 to-purple-800/30 p-8">
            <div className="flex items-center gap-6">
              <div className="h-14 min-w-16 rounded-md border-2 border-primary p-2">
                <FaTools className="h-full w-full" />
              </div>
              <h3 className="text-xl font-semibold">Soluções Personalizadas</h3>
            </div>
            <div className="flex w-full flex-1 items-center justify-center">
              <p className="mt-4 text-center text-lg text-slate-400">
                com foco em escalabilidade e experiência do usuário
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-lg bg-gradient-to-tl from-purple-600/30 to-purple-800/30 p-8">
            <div className="flex items-center gap-6">
              <div className="h-14 min-w-16 rounded-md border-2 border-primary p-2">
                <FaShieldAlt className="h-full w-full" />
              </div>
              <h3 className="text-xl font-semibold">
                Desenvolvimento Completo
              </h3>
            </div>
            <div className="flex w-full flex-1 items-center justify-center">
              <p className="mt-4 text-center text-lg text-slate-400">
                do back-end ao front-end, com qualidade, segurança e integração
                fluida
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-lg bg-gradient-to-tl from-purple-600/30 to-purple-800/30 p-8">
            <div className="flex items-center gap-6">
              <div className="h-14 min-w-16 rounded-md border-2 border-primary p-2">
                <FaChartLine className="h-full w-full" />
              </div>
              <h3 className="text-xl font-semibold">
                Proatividade e Melhoria contínua
              </h3>
            </div>
            <div className="flex w-full flex-1 items-center justify-center">
              <p className="mt-4 text-center text-lg text-slate-400">
                acompanhando sempre as tendências mais recentes do mercado de
                software
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-lg bg-gradient-to-tl from-purple-600/30 to-purple-800/30 p-8">
            <div className="flex items-center gap-6">
              <div className="h-14 min-w-16 rounded-md border-2 border-primary p-2">
                <FaHandsHelping className="h-full w-full" />
              </div>
              <h3 className="text-xl font-semibold">
                Entregas iterativas e Foco no cliente
              </h3>
            </div>
            <div className="flex w-full flex-1 items-center justify-center">
              <p className="mt-4 text-center text-lg text-slate-400">
                entregas frequentes e ajustáveis, alinhando constantemente as
                prioridades do cliente e do projeto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
