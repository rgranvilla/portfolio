'use client'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'

interface WhatsappCallProps extends ComponentProps<'div'> {}

export function WhatsappCall({ className, ...props }: WhatsappCallProps) {
  const whatsappNumber = '5551992051821'
  const message = 'Olá! Gostaria de saber mais sobre seus serviços.'

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div
      className={cn('flex items-center justify-center gap-4', className)}
      {...props}
    >
      <Button
        variant="secondary"
        size="lg"
        className="rounded-full text-lg"
        onClick={handleClick}
      >
        Converse Agora!
      </Button>
    </div>
  )
}
