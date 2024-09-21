import Image from 'next/image'

import BigCircle from '@/assets/big_circle.png'
import HeroImage from '@/assets/portfolio_retrato.png'
import SmallCircle from '@/assets/small_circle.png'
import DownloadButton from '@/components/downloadButton'

import { ScrollAnimatedIcon } from '../scrollAnimatedIcon'
import { WhatsappCall } from '../whatsapp-call'

export function Hero() {
  return (
    <div className="relative flex min-h-[750px] w-full flex-col">
      <div className="flex flex-col">
        <h1 className="mt-32 text-6xl font-semibold">
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Bem vindo, eu sou o Ricardo,
          </span>
        </h1>
        <h2 className="mt-6 text-6xl font-medium">desenvolvedor fullstack</h2>
      </div>
      <div className="flex max-w-[750px] flex-col items-center">
        <p className="mt-24 max-w-[750px] text-xl font-thin tracking-wide text-slate-400">
          Pronto para levar seu projeto ao próximo nível? Juntos, podemos criar
          algo extraordinário que atenda às suas necessidades.
        </p>
        <WhatsappCall className="mt-16" />
      </div>

      <div className="mt-16 flex justify-end gap-10">
        <DownloadButton
          path="cv.pdf"
          title="Donwload CV"
          suggestedFileName="CV-Ricardo Granvilla.pdf"
        />
      </div>

      <ScrollAnimatedIcon className="mt-52" />

      <div className="group absolute -top-20 right-0 flex h-[700px] w-[700px] items-center justify-center rounded-full p-4">
        <div className="absolute bottom-0 right-32 top-32 -z-20 size-[540px] transition group-hover:animate-scaleUpDown">
          <Image src={BigCircle} alt="" />
        </div>
        <div className="absolute -right-6 top-52 -z-10 size-[240px] transition group-hover:animate-scaleDownUp">
          <Image src={SmallCircle} alt="" />
        </div>
        <div className="absolute -top-6 right-20 size-[420px] rounded-full grayscale transition duration-1000 ease-in-out group-hover:grayscale-0">
          <Image src={HeroImage} alt="" className="p-0" />
        </div>
      </div>
    </div>
  )
}
