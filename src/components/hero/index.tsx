import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa6'

import BigCircle from '@/assets/big_circle.png'
import HeroImage from '@/assets/portfolio_retrato.png'
import SmallCircle from '@/assets/small_circle.png'
import { cn } from '@/lib/utils'

import DownloadButton from '../downloadButton'
import { ScrollAnimatedIcon } from '../scrollAnimatedIcon'
import { Button } from '../ui/button'

export function Hero() {
  return (
    <div className={cn('relative flex w-full flex-col', 'md:mb-20')}>
      <div className={cn('flex flex-col items-center', 'md:items-start')}>
        <div className="relative md:hidden">
          <div className="absolute right-12 top-8 -z-20 size-[200px] transition group-hover:animate-scaleUpDown">
            <Image src={BigCircle} alt="" />
          </div>
          <div className="size-[200px]">
            <Image src={HeroImage} alt="" className="p-0" />
          </div>
          <div className="absolute -right-6 top-28 -z-10 size-[100px] transition group-hover:animate-scaleDownUp">
            <Image src={SmallCircle} alt="" />
          </div>
        </div>
        <h2 className="mt-12 bg-gradient-to-bl from-purple-700/90 to-cyan-500 bg-clip-text text-center text-2xl font-semibold text-transparent md:mt-32 md:text-start md:text-6xl">
          <p className="">Bem vindo a devtrails,</p>
          <p className="">eu sou o Ricardo,</p>
        </h2>
        <h2 className="mt-2 text-center text-2xl font-medium md:mt-6 md:text-start md:text-6xl">
          desenvolvedor fullstack
        </h2>
      </div>
      <div className="mt-6 flex flex-col justify-center font-serif text-xl font-thin italic tracking-wide text-slate-400 md:mt-24 md:max-w-[850px]">
        <p className="text-xl md:text-3xl">
          Pronto para levar seu projeto ao próximo nível?
        </p>
        <p className="text-lg md:text-2xl">
          Juntos, podemos criar algo extraordinário que atenda às suas
          necessidades.{' '}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-4 text-whatsapp">
        <FaWhatsapp className="size-6" />
        <Button
          variant="whatsapp"
          className="h-9 rounded-md px-3 md:h-11 md:rounded-md md:px-8"
          asChild
        >
          <Link
            href="https://wa.me/5551992051821?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
            target="_blank"
          >
            Chamar no WhatsApp
          </Link>
        </Button>
      </div>
      <div className="absolute right-0 top-[536px] md:hidden">
        <ScrollAnimatedIcon />
      </div>
      <DownloadButton
        className="my-12 md:hidden"
        path="cv.pdf"
        title="Donwload CV"
        suggestedFileName="CV-Ricardo Granvilla.pdf"
      />
      <div className="mb-12 hidden md:mt-56 md:flex">
        <ScrollAnimatedIcon />
      </div>
      <div className="size-200 group hidden items-center justify-center rounded-full p-4 md:absolute md:-top-20 md:right-0 md:flex md:size-[700px]">
        <div className="absolute bottom-0 right-32 top-32 -z-20 transition group-hover:animate-scaleUpDown md:size-[540px]">
          <Image src={BigCircle} alt="" />
        </div>
        <div className="absolute -right-6 top-52 -z-10 transition group-hover:animate-scaleDownUp md:size-[240px]">
          <Image src={SmallCircle} alt="" />
        </div>
        <div className="absolute -top-6 right-20 rounded-full grayscale transition duration-1000 ease-in-out group-hover:grayscale-0 md:size-[420px]">
          <Image src={HeroImage} alt="" className="p-0" />
        </div>
      </div>
    </div>
  )
}
