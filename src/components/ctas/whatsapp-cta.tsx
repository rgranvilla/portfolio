'use client'
import { FaWhatsapp } from 'react-icons/fa'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

export function WhatsappCTA() {
  const whatsappNumber = '5551992051821'
  const message = 'Olá! Gostaria de saber mais sobre seus serviços.'

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div
      className={cn('my-12 flex flex-col items-center', 'md:mb-24 md:mt-32')}
    >
      <h1
        className={cn(
          'max-w-6xl text-balance text-center font-serif text-2xl italic text-slate-300',
          'md:text-4xl md:font-medium',
        )}
      >
        Interessado em criar soluções digitais escaláveis e de alta performance?
        Vamos conversar sobre como posso ajudar no seu próximo projeto!
      </h1>

      <div
        className={cn('mt-8 flex items-center gap-4 text-whatsapp', 'md:mt-16')}
      >
        <FaWhatsapp className="size-8" />
        <Button variant="whatsapp" size="lg" onClick={handleClick}>
          Chamar no WhatsApp
        </Button>
      </div>
    </div>
  )
}
