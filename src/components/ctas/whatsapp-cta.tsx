'use client'
import { FaWhatsapp } from 'react-icons/fa'

import { Button } from '../ui/button'

export function WhatsappCTA() {
  const whatsappNumber = '5551992051821'
  const message = 'Olá! Gostaria de saber mais sobre seus serviços.'

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="my-32 flex flex-col items-center">
      <h1 className="max-w-[1100px] text-center font-serif text-4xl font-semibold italic text-slate-300">
        Interessado em criar soluções digitais escaláveis e de alta performance?
        Vamos conversar sobre como posso ajudar no seu próximo projeto!
      </h1>

      <div className="text-whatsapp mt-16 flex items-center gap-4">
        <FaWhatsapp className="size-8" />
        <Button variant="whatsapp" size="lg" onClick={handleClick}>
          Chamar no WhatsApp
        </Button>
      </div>
    </div>
  )
}
