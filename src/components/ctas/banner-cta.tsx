import { WhatsappCall } from '../whatsapp-call'

export function BannerCTA() {
  return (
    <div className="m-16 flex flex-col rounded-xl bg-gradient-to-tl from-purple-600/30 to-purple-800/30 p-12">
      <div className="grid h-full grid-cols-2 place-content-center items-center gap-8">
        <div className="flex flex-col pl-20">
          <h1 className="py-4 text-2xl font-semibold">
            Vamos criar algo incrível juntos?
          </h1>
          <p className="text-lg text-slate-400">
            Se você procura um desenvolvedor que combina experiência técnica com
            uma abordagem inovadora e criativa, estou pronto para contribuir
            para o sucesso do seu projeto.
          </p>
        </div>
        <WhatsappCall />
      </div>
    </div>
  )
}
