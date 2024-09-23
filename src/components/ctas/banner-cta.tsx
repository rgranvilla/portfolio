import { cn } from '@/lib/utils'

import { WhatsappCall } from '../whatsapp-call'

export function BannerCTA() {
  return (
    <div
      className={cn(
        'mb-20 flex flex-col rounded-xl bg-gradient-to-tl from-purple-600/30 to-purple-800/30',
        'md:m-16 md:p-12',
      )}
    >
      <div className="grid h-full grid-cols-1 place-content-center items-center gap-8 md:grid-cols-5">
        <div className="flex flex-col md:col-span-3 md:pl-20">
          <h2
            className={cn(
              'py-4 text-center text-base font-semibold md:text-start md:text-2xl',
            )}
          >
            Vamos criar algo incrível juntos?
          </h2>
          <p className="text-balance px-6 text-center font-serif text-base italic text-slate-300 md:text-wrap md:px-0 md:text-start md:text-2xl">
            Se você procura um desenvolvedor que combina experiência técnica com
            uma abordagem inovadora e criativa, estou pronto para contribuir
            para o sucesso do seu projeto.
          </p>
        </div>
        <div className="pb-8 pt-4 md:col-span-2 md:pb-0 md:pt-0">
          <WhatsappCall />
        </div>
      </div>
    </div>
  )
}
